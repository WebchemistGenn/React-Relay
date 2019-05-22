import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import Link from "./Link";

const LinkList = ({ viewer }: any) => {
  return (
    <React.Fragment>
      {viewer.allLinks.edges.map(({ node }: any) => (
        <Link key={node.__id} link={node} />
      ))}
    </React.Fragment>
  );
};
export default createFragmentContainer(LinkList, {
  viewer: graphql`
    fragment LinkList_viewer on Viewer {
      allLinks(last: 100, orderBy: createdAt_DESC)
        @connection(key: "LinkList_allLinks", filters: []) {
        edges {
          node {
            ...Link_link
          }
        }
      }
    }
  `
});
