import type { PageObjectResponse } from "@notionhq/client";
import type { ProductItem } from "../../types/global";

export function mapNotionProduct(page: PageObjectResponse): ProductItem {
  const props = page.properties;
  return {
    id: page.id,
    name:
      "name" in props && props.name.type === "title"
        ? props?.name?.title?.[0]?.plain_text || ""
        : "",
    imageUrls:
      "images" in props && props.images.type === "files"
        ? props?.images?.files?.map((f) =>
            f.type === "external" ? f.external.url : f.file.url
          )
        : [],
    description:
      "description" in props && props.description.type === "rich_text"
        ? props?.description?.rich_text?.map((r) => r.plain_text)?.join("\n")
        : "",
    category:
      "category" in props && props.category.type === "multi_select"
        ? props?.category?.multi_select?.map((c) => ({
            id: c.id,
            name: c.name,
            color: c.color,
          }))
        : [],
    brand:
      "brand" in props && props.brand.type === "select" && props?.brand?.select
        ? {
            id: props.brand?.select?.id,
            name: props.brand?.select?.name,
            color: props.brand?.select?.color,
          }
        : { id: "", name: "", color: "" },
    price:
      "price" in props && props.price.type === "rich_text"
        ? props.price?.rich_text?.map((r) => r.plain_text)?.join("\n")
        : "",
    stock:
      "stock" in props && props?.stock?.type === "number"
        ? props.stock.number || 0
        : 0,
    model:
      "model" in props && props?.model?.type === "rich_text"
        ? props.model?.rich_text?.map((r) => r?.plain_text)?.join("\n")
        : "",
    releaseDate:
      "releaseDate" in props && props.releaseDate.type === "date"
        ? props.releaseDate.date?.start || ""
        : "",
    availability:
      "availability" in props && props.availability.type === "select"
        ? {
            id: props.availability.select?.id || "",
            status: props.availability.select?.name || "",
            color: props.availability.select?.color || "",
          }
        : {
            id: "",
            status: "",
            color: "",
          },
    tags:
      "tags" in props && props.tags.type === "multi_select"
        ? props.tags.multi_select.map((t) => ({
            id: t.id,
            name: t.name,
            color: t.color,
          }))
        : [],
    datasheetUrl:
      "datasheet" in props && props?.datasheet?.type === "url"
        ? props?.datasheet?.url || ""
        : "",
    createdAt:
      "createdAt" in props && props.createdAt.type === "created_time"
        ? props.createdAt.created_time
        : "",
    createdBy:
      "createdBy" in props &&
      props.createdBy.type === "created_by" &&
      "name" in props.createdBy.created_by &&
      "person" in props.createdBy.created_by &&
      "email" in props.createdBy.created_by?.person &&
      "avatar_url" in props.createdBy.created_by
        ? {
            id: props.createdBy.created_by.id,
            name: props.createdBy.created_by?.name || "",
            email: props.createdBy.created_by?.person?.email || "",
            avatarUrl: props.createdBy.created_by?.avatar_url ?? null,
          }
        : { id: "", name: "", email: "", avatarUrl: null },
  };
}
