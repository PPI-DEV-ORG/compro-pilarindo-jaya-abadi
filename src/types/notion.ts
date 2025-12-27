export type NotionFile =
  | {
      type: "file";
      name: string;
      file: {
        url: string;
        expiry_time?: string;
      };
    }
  | {
      type: "external";
      name: string;
      external: {
        url: string;
      };
    };
