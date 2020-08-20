import React from "react";
import logo from "./Icon.svg";
import { TinaProvider, TinaCMS, useCMS } from "tinacms";
import { PageContent } from "../src/components/PageContent";
import "./App.css";
function App() {
  const cms = new TinaCMS({
    sidebar: true,
  });
  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <PageContent />
      </div>
    </TinaProvider>
  );
}

export default App;
