import type { PageObjectResponse } from "@notionhq/client";
import { getNotionImageUrl } from "../notion-image";
import type { NotionFile } from "../../types/notion";
import type { GalleryItem } from "../../types/global";

export function mapNotionGallery(page: PageObjectResponse): GalleryItem {
  const props = page.properties;

  const title =
    props.title?.type === "title" ? props.title.title[0]?.plain_text ?? "" : "";

  const description =
    props.description?.type === "rich_text"
      ? props.description.rich_text[0]?.plain_text ?? ""
      : "";

  const imageUrl =
    props.image?.type === "files"
      ? getNotionImageUrl(props.image.files as NotionFile[])
      : "";

  const tags =
    props.tags?.type === "multi_select"
      ? props.tags.multi_select.map((tag) => ({
          id: tag.id,
          name: tag.name,
          color: tag.color,
        }))
      : [];

  return {
    id: page.id,
    title,
    description,
    imageUrl,
    tags,
  };
}
