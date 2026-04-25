import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "@/sanity/schemaTypes/projectType";
import { homeWorkType } from "@/sanity/schemaTypes/homeWorkType";

export const schema = {
  types: [blockContentType, categoryType, projectType, homeWorkType],
};
