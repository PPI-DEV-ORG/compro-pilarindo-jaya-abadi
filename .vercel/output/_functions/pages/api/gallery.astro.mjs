import { Client } from '@notionhq/client';
export { renderers } from '../../renderers.mjs';

const notion = new Client({
  auth: "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"
});

const databaseId = "2d574dddc4d88039b355e6413c657a30";
function isFullDatabase(db) {
  return "data_sources" in db;
}
function isFullPage(item) {
  return item.object === "page" && "properties" in item;
}
class NotionError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotionError";
  }
}
function normalizeNotionError(error) {
  if (error instanceof NotionError) {
    throw error;
  }
  if (error instanceof Error) {
    throw new NotionError(error.message);
  }
  throw new NotionError("Unknown Notion error occurred");
}
async function getListPageGallery(options = {}) {
  try {
    const db = await notion.databases.retrieve({
      database_id: databaseId
    });
    if (!isFullDatabase(db)) {
      throw new NotionError("Database response is partial");
    }
    const dataSourceId = db.data_sources[0]?.id;
    if (!dataSourceId) {
      throw new NotionError("Data source not found");
    }
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      page_size: options.pageSize ?? 12,
      start_cursor: options.cursor ?? void 0,
      sorts: [
        {
          property: "createdAt",
          direction: options.sortDirection ?? "descending"
        },
        {
          timestamp: "created_time",
          direction: options.sortDirection ?? "descending"
        }
      ]
    });
    return {
      items: response.results.filter(isFullPage),
      nextCursor: response.next_cursor,
      hasMore: response.has_more
    };
  } catch (error) {
    normalizeNotionError(error);
  }
}

function getNotionImageUrl(files) {
  if (!files || files.length === 0) return "";
  const file = files[0];
  if (file.type === "file") return file.file.url;
  if (file.type === "external") return file.external.url;
  return "";
}

function mapNotionGallery(page) {
  const props = page.properties;
  const title = props.title?.type === "title" ? props.title.title[0]?.plain_text ?? "" : "";
  const description = props.description?.type === "rich_text" ? props.description.rich_text[0]?.plain_text ?? "" : "";
  const imageUrl = props.image?.type === "files" ? getNotionImageUrl(props.image.files) : "";
  const tags = props.tags?.type === "multi_select" ? props.tags.multi_select.map((tag) => ({
    id: tag.id,
    name: tag.name,
    color: tag.color
  })) : [];
  return {
    id: page.id,
    title,
    description,
    imageUrl,
    tags
  };
}

const GET = async ({ request }) => {
  const url = new URL(request.url);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 9);
  const cursor = url.searchParams.get("cursor");
  const { items, hasMore, nextCursor } = await getListPageGallery({
    pageSize,
    cursor
  });
  return new Response(
    JSON.stringify({
      items: items.map(mapNotionGallery),
      hasMore,
      nextCursor
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
