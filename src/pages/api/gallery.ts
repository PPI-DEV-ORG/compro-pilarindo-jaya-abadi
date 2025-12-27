// src/pages/api/gallery.ts
import type { APIRoute } from "astro";
import { getListPageGallery } from "../../db/gallery/getListPageGallery";
import { mapNotionGallery } from "../../utils/mappers/gallery.mapper";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const pageSize = Number(url.searchParams.get("pageSize") ?? 9);
  const cursor = url.searchParams.get("cursor");

  const { items, hasMore, nextCursor } = await getListPageGallery({
    pageSize,
    cursor,
  });

  return new Response(
    JSON.stringify({
      items: items.map(mapNotionGallery),
      hasMore,
      nextCursor,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
