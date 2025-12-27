import {
  type DatabaseObjectResponse,
  type DataSourceObjectResponse,
  type GetDatabaseResponse,
  type PageObjectResponse,
  type PartialDataSourceObjectResponse,
  type PartialPageObjectResponse,
} from "@notionhq/client";
import { notion } from "../notion.service";

type ListGalleryOptions = {
  pageSize?: number;
  cursor?: string | null;
  sortDirection?: "ascending" | "descending";
};

const databaseId = import.meta.env.NOTION_DATABASE_ID;

/* ---------------------------
   Type Guards
---------------------------- */

function isFullDatabase(db: GetDatabaseResponse): db is DatabaseObjectResponse {
  return "data_sources" in db;
}

function isFullPage(
  item:
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDataSourceObjectResponse
    | DataSourceObjectResponse
): item is PageObjectResponse {
  return item.object === "page" && "properties" in item;
}

/* ---------------------------
   Error Handling
---------------------------- */

export class NotionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotionError";
  }
}

function normalizeNotionError(error: unknown): never {
  if (error instanceof NotionError) {
    throw error;
  }

  if (error instanceof Error) {
    throw new NotionError(error.message);
  }

  throw new NotionError("Unknown Notion error occurred");
}

/* ---------------------------
   Main Logic
---------------------------- */

export async function getListPageGallery(options: ListGalleryOptions = {}) {
  if (!databaseId) {
    throw new NotionError("NOTION_DATABASE_ID is missing");
  }

  try {
    const db = await notion.databases.retrieve({
      database_id: databaseId,
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
      start_cursor: options.cursor ?? undefined,
      sorts: [
        {
          property: "createdAt",
          direction: options.sortDirection ?? "descending",
        },
        {
          timestamp: "created_time",
          direction: options.sortDirection ?? "descending",
        },
      ],
    });

    return {
      items: response.results.filter(isFullPage),
      nextCursor: response.next_cursor,
      hasMore: response.has_more,
    };
  } catch (error) {
    normalizeNotionError(error);
  }
}
