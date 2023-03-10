import { createRoot } from "react-dom/client";

const App = () => {
  return <div>App</div>;
};
const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}

const root = createRoot(container);
root.render(<App />);
