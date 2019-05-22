import React from "react";
import { createFragmentContainer, graphql } from "react-relay";

const Link = ({ link }: any) => {
  // const voteForLink = async () => {};

  return (
    <React.Fragment>
      <div>
        {link.description} ({link.url})
      </div>
    </React.Fragment>
  );
};
export default createFragmentContainer(Link, {
  link: graphql`
    fragment Link_link on Link {
      id
      description
      url
    }
  `
});
