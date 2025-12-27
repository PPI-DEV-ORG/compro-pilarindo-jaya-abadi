import type { NotionFile } from "../types/notion";

export function getNotionImageUrl(files?: NotionFile[]): string {
  if (!files || files.length === 0) return "";

  const file = files[0];

  if (file.type === "file") return file.file.url;
  if (file.type === "external") return file.external.url;

  return "";
}
