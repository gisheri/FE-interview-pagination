import { css } from "@emotion/react";
import { usePagination } from "./use-pagination";

type PaginationButtonsProps = {
  pages: ReturnType<typeof usePagination>["pages"];
  currentPage: number;
  onPageChange: (page: number) => void;
};
export const PaginationButtons = ({
  pages,
  currentPage,
  onPageChange
}: PaginationButtonsProps) => {
  return (
    <ul
      css={css`
        user-select: none;
        font-size: 1.2em;
        background: white;
        margin: 0;
        padding: 5px 20px;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        display: inline-flex;
        align-items: center;
        list-style: none;
        li {
          padding: 0;
          margin: 0;
        }
        button {
          transition: all 0.3s;
          background: white;
          min-width: 42px;
          display: inline-block;
          border-radius: 4px;
          border: none;
          font-weight: bold;
          text-alignt: center;
          padding: 5px;
          &.selected {
            background: #ddd;
          }
          &:not(.selected):hover {
            background: #eee;
            cursor: pointer;
          }
        }
        span {
          min-width: 24px;
          text-align: center;
          padding: 5px;
        }
      `}
    >
      {pages.map((button, i) => {
        const key = `${button}:${i}`;
        switch (button) {
          case "prev":
            return (
              <li key={key}>
                <button onClick={() => onPageChange(currentPage - 1)}>
                  &lt;
                </button>
              </li>
            );
          case "next":
            return (
              <li key={key}>
                <button onClick={() => onPageChange(currentPage + 1)}>
                  &gt;
                </button>
              </li>
            );
          case "break":
            return (
              <li key={key}>
                <span>...</span>
              </li>
            );
          default:
            return (
              <li key={key}>
                <button
                  key={key}
                  className={button === currentPage ? "selected" : ""}
                  onClick={() => onPageChange(button)}
                >
                  {button}
                </button>
              </li>
            );
        }
      })}
    </ul>
  );
};
