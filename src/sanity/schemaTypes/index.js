import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { projectType } from "@/sanity/schemaTypes/projectType";

export const schema = {
  types: [blockContentType, categoryType, projectType],
};
