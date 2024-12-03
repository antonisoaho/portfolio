import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "@/sanity/schemaTypes/projectType";

export const schema = {
  types: [blockContentType, categoryType, projectType],
};
