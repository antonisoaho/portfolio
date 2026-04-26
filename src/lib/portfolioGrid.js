export function portfolioProjectClass(index) {
  switch (index) {
    case 0:
      return "lg:col-span-2 lg:row-span-1";
    case 1:
      return "lg:col-span-1 lg:row-span-2";
    case 2:
      return "lg:col-span-1 lg:row-span-2";
    case 3:
      return "lg:col-span-1 lg:row-span-1";
    case 4:
      return "lg:col-span-2 lg:row-span-1";
    case 5:
      return "lg:col-span-2 lg:row-span-1";
    case 6:
      return "lg:col-span-1 lg:row-span-1";
    default: {
      const k = index - 7;
      return k % 2 === 0
        ? "lg:col-span-2 lg:row-span-1"
        : "lg:col-span-1 lg:row-span-1";
    }
  }
}
