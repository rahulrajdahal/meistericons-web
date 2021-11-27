import { render } from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalstyles";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
