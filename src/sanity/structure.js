// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("project").title("Projects"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() && !["category", "project"].includes(item.getId())
      ),
    ]);
