import { css, Global } from "@emotion/react";

const style = css`
  html,
  body {
    padding: 0;
    margin: 10px;
    background: #00bcd4;
    min-height: 100%;
    font-family: Source Sans Pro, Arial, sans-serif;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Global styles={style} />
      ... Code Here ...
    </>
  );
};

export default IndexPage;
