import { h } from "preact";
import { Router } from "preact-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material/Container";
import htm from "htm";
const html = htm.bind(h);
import Header from "./header";
import Footer from "./footer";
import { makeStyles } from "@mui/styles"
import theme from "./theme";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import CountryBridges from "../routes/country";
import StateBridges from "../routes/state";
import About from "../routes/about";
import BridgeTypes from "../routes/bridgeTypes";

const THEME = createTheme(theme);

const App = () => (
html`
<${ThemeProvider} theme=${THEME}>
  <div id="app">
    <${Header} />
    <div style=${"position: relative; min-height: 100vh;"}>
    <${Router}>
      <${CountryBridges} path="/" />
      <${About} path="/about" />
      <${BridgeTypes} path="/bridge_types" />
      <${CountryBridges} path="/country" />
      <${StateBridges} path="/state" />
    </${Router}>
    </div>
    <div style=${"bottom: 0; left: 0; right; 0"}>
    <${Footer} />
    </div>
  </div>
</${ThemeProvider}>`
);

export default App;