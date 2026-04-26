// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("homeWork").title("Recent work (home)"),
      S.divider(),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("project").title("Projects"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["category", "project", "homeWork"].includes(item.getId())
      ),
    ]);
