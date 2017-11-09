import * as React from "react";
import styled from "styled-components";
import { TagsFilter } from "../filtertags-component";
import { NewsItem } from "../news/news-component";

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const newsItem = {
  imageURL:
    "https://steemitimages.com/0x0/http://vignette3.wikia.nocookie.net/max-steel-reboot/images/7/72/No_Image_Available.gif",
  title: "Första nyheter",
  tags: ["Tag 2", "Tag 4"],
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat turpis varius euismod luctus. Etiam fermentum laoreet mauris vitae posuere. Nullam id sem ultrices, tincidunt risus vitae, vehicula sapien. Nam felis augue, luctus ut convallis vitae, feugiat non nibh. Duis mollis metus iaculis justo accumsan sagittis. Suspendisse potenti. Nam odio ipsum, sollicitudin ut urna et, sollicitudin sollicitudin turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non nunc ac nunc venenatis fermentum. Donec rutrum tincidunt porta. Fusce maximus, augue quis imperdiet blandit, urna dui pharetra est, in sodales risus ante posuere libero. Vivamus quis erat non ipsum tincidunt suscipit. Phasellus ut laoreet arcu, a porta velit. Aenean a felis vitae leo fringilla accumsan a a metus. Donec scelerisque convallis facilisis. Sed pulvinar risus in velit finibus elementum sit amet eu dui."
};

const tags: string[] = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];

const RootComponent = (): React.ReactElement<{}> => (
  <div>
    <TagsFilter tags={tags} />
    <NewsContainer>
      <NewsItem {...newsItem} />
    </NewsContainer>
  </div>
);

export default RootComponent;
