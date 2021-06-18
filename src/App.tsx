import * as React from "react";

interface Props {
  name: string;
}

function App({ name }) {
  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
}

export default App;
