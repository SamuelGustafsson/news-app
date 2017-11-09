import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

export default () => injectGlobal`
${styledNormalize}

body {
  padding: 0;
}

h4 {
  margin:0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
`;
