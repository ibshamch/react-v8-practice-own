import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams.";
const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};

const root = document.querySelector("#root");
const container = createRoot(root);
container.render(<App />);
export default App;
