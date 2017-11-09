import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: auto;
  > ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    > li {
      padding: 0 10px;
      border: 2px solid black;
      border-radius: 5;
      > a {
        color: black;
      }
    }
  }
`;

interface Props {
  readonly tags: ReadonlyArray<string>;
}

export const TagsFilter = ({ tags }: Props) => (
  <Wrapper>
    <ul>
      {tags.map((tag, index) => (
        <li>
          <a href="">{tag}</a>
        </li>
      ))}
    </ul>
  </Wrapper>
);
