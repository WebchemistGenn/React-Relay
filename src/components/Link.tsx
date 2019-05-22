import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Link = ({ link }: any) => {
  // const voteForLink = async () => {};

  return <React.Fragment>aaaa</React.Fragment>;
};

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_link on Link {
      id
      description
      url
    }
  `
);
