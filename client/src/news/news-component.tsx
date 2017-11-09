import * as React from "react";
import { Div } from "./news-component-style";
interface Props {
  readonly imageURL: string;
  readonly title: string;
  readonly tags: ReadonlyArray<string>;
  readonly content: string;
}

export const NewsItem = ({ imageURL, title, tags, content }: Props) => (
  <Div>
    <img src={imageURL} alt={title} />
    <div>
      <h4>{title}</h4>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>
            <a href="">{tag}</a>
          </li>
        ))}
      </ul>
      <div>
        <input type="checkbox" className="read-more-state" id="post-1" />

        <p className="read-more-wrap">
          {content.substring(0, 300)}
          <span className="read-more-target">
            {content.substring(300, content.length)}
          </span>
        </p>

        <label htmlFor="post-1" className="read-more-trigger" />
      </div>
    </div>
  </Div>
);
