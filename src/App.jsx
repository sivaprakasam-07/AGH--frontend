import React from "react";
import Heatmap from "./components/heatmap/Heatmap";
import { generateMockData } from "./utils/data";

function App() {
  const data = generateMockData();
  return <Heatmap data={data} />;
}

export default App;