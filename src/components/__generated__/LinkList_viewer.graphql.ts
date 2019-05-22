/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type Link_link$ref = any;
export type LinkList_viewer$ref = any;
export type LinkList_viewer = {
    readonly allLinks: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": Link_link$ref;
            };
        } | null> | null;
    };
    readonly " $refType": LinkList_viewer$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "LinkList_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allLinks"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allLinks",
      "name": "__LinkList_allLinks_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "LinkConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "LinkEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Link",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "Link_link",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'c8b60409488c6ebd4c9f08f9c5eb8395';
export default node;
