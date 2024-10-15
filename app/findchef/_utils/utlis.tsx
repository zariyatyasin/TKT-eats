export const updateFilter = (
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      categories: string[];
    }>
  >,
  key: string,
  value: string | string[]
) => {
  setFilters((prev) => ({ ...prev, [key]: value }));
};
export const clearFilters = (
  setFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      categories: string[];
    }>
  >
) => {
  setFilters({
    search: "",
    categories: [],
  });
};
