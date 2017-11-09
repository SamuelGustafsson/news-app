import styled from "styled-components";

//TODO: Move css files for news content toggle to seprate file.
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    height: 50px;
    margin-right: 15px;
  }
  > div {
    > ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: left;

      > li {
        border-left: 2px solid black;
        padding: 0 5px;
      }

      > li:first-child {
        border: none;
      }
    }
    .read-more-wrap {
      width: 500px;
    }
  }
  .read-more-state {
    display: none;
  }

  .read-more-target {
    opacity: 0;
    max-height: 0;
    font-size: 0;
    transition: 0.25s ease;
  }

  .read-more-state:checked ~ .read-more-wrap .read-more-target {
    opacity: 1;
    font-size: inherit;
    max-height: 999em;
  }

  .read-more-state ~ .read-more-trigger:before {
    color: blue;
    content: "Läs mer...";
  }

  .read-more-state:checked ~ .read-more-trigger:before {
    content: "Läs mindre...";
  }

  .read-more-state ~ .read-more-trigger:hover,
  .read-more-state:checked ~ .read-more-trigger:hover {
    text-decoration: underline;
  }

  .read-more-state ~ .read-more-trigger:before,
  .read-more-state:checked ~ .read-more-trigger:before {
    cursor: pointer;
  }
`;
