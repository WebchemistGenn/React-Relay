import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch("http://localhost:60000/relay/v1/cjvy0ipwg00040165x0en7qn8", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store
});

export default environment;
