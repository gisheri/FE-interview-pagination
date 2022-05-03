import { useState } from "react";
import { css, Global } from "@emotion/react";
import { usePagination } from "../components/use-pagination";
import { PaginationButtons } from "../components/pagination-buttons";

const style = css`
  html,
  body {
    padding: 0;
    margin: 10px;
    background: #00bcd4;
    min-height: 100%;
    font-family: Source Sans Pro, Arial, sans-serif;
  }
  code {
    font-weight: bold;
    font-size: 1.1em;
    display: inline-block;
    margin-bottom: 0.5em;
  }
`;

const IndexPage = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const { pages: pages1 } = usePagination({
    currentPage: currentPage1,
    numberOfPages: 500,
    numberOfButtons: 3
  });

  const [currentPage2, setCurrentPage2] = useState(1);
  const { pages: pages2 } = usePagination({
    currentPage: currentPage2,
    numberOfPages: 500,
    numberOfButtons: 5
  });

  const [currentPage3, setCurrentPage3] = useState(1);
  const { pages: pages3 } = usePagination({
    currentPage: currentPage3,
    numberOfPages: 3,
    numberOfButtons: 3
  });
  return (
    <>
      <Global styles={style} />

      <h1>Examples</h1>
      <br />
      <code>numPages: 500, numButtons: 3, currentPage: {currentPage1}</code>
      <br />
      <PaginationButtons
        pages={pages1}
        currentPage={currentPage1}
        onPageChange={setCurrentPage1}
      />
      <br />
      <br />
      <code>numPages: 500, numButtons: 5, currentPage: {currentPage2}</code>
      <br />
      <PaginationButtons
        pages={pages2}
        currentPage={currentPage2}
        onPageChange={setCurrentPage2}
      />

      <br />
      <br />
      <code>numPages: 3, numButtons: 3, currentPage: {currentPage3}</code>
      <br />
      <PaginationButtons
        pages={pages3}
        currentPage={currentPage3}
        onPageChange={setCurrentPage3}
      />
    </>
  );
};

export default IndexPage;
