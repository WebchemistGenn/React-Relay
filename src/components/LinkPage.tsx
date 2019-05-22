import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../Environment";
import LinkList from "./LinkList";

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`;

const LinkListPage = () => {
  return (
    <QueryRenderer
      variables={{}}
      environment={environment}
      query={LinkListPageQuery}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <LinkList viewer={props.viewer} />;
        }
        return <div>Loding</div>;
      }}
    />
  );
};

export default LinkListPage;
