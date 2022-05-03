type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
  numberOfButtons: number;
};
export const usePagination = ({
  currentPage,
  numberOfPages,
  numberOfButtons
}: PaginationProps) => {
  const allPages = [
    ...new Array(numberOfPages + 1).fill(undefined).map<number>((n, i) => i + 1)
  ];
  const start = currentPage - Math.floor(numberOfButtons / 2);
  const end = currentPage + Math.floor(numberOfButtons / 2);

  const leftOverflow = start <= 1 ? Math.abs(2 - start) : 0;
  const rightOverflow =
    end >= numberOfPages ? Math.abs(numberOfPages - 1 - end) : 0;
  const left = Math.max(start - rightOverflow, 2) - 1;
  const right = Math.min(end + leftOverflow, numberOfPages - 1);
  const showPrev = currentPage !== 1;
  const showNext = currentPage !== numberOfPages;
  const showLeftBreak = left >= 2;
  const showRightBreak = right < numberOfPages - 1;
  const pagesWindow: (number | "break" | "prev" | "next")[] = [
    showPrev ? "prev" : undefined,
    1,
    showLeftBreak ? "break" : undefined,
    ...allPages.slice(left, right),
    showRightBreak ? "break" : undefined,
    numberOfPages,
    showNext ? "next" : undefined
  ].filter((n): n is number | "break" | "prev" | "next" => !!n);
  return { pages: pagesWindow, currentPage };
};
