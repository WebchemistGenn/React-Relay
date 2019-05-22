/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Link_link$ref = any;
export type Link_link = {
    readonly id: string;
    readonly description: string;
    readonly url: string;
    readonly " $refType": Link_link$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Link_link",
  "type": "Link",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4db5e0eb9875bd761c8f8ef68ea507f3';
export default node;
