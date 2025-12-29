// src/pages/api/product.ts
import type { APIRoute } from "astro";
import { getListPageProduct } from "../../db/products/getListPageProduct";
import { mapNotionProduct } from "../../utils/mappers/product.mapper";

function parseNumber(value: string | undefined, defaultValue: number) {
  const n = Number(value);
  return isNaN(n) ? defaultValue : n;
}

function parseSortDir(
  value: string | undefined
): "ascending" | "descending" | undefined {
  if (value === "ascending" || value === "descending") return value;
  return undefined;
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query: Record<string, string> = Object.fromEntries(
    url.searchParams.entries()
  );
  const { pageSize = "9", cursor, sortDirection } = query;
  const categories = url.searchParams.getAll("category");
  const brands = url.searchParams.getAll("brand");

  const { items, hasMore, nextCursor } = await getListPageProduct({
    pageSize: parseNumber(pageSize, 9),
    cursor,
    category: categories.length > 0 ? categories : undefined,
    brand: brands.length > 0 ? brands : undefined,
    sortDirection: parseSortDir(sortDirection),
  });

  return new Response(
    JSON.stringify({
      items: items.map(mapNotionProduct),
      hasMore,
      nextCursor,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
};
