import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import { Details } from "./pages/Details";
import { NewMovie } from "./pages/NewMovie";
import { MyMovies } from "./pages/MyMovies";
import { Profile } from "./pages/Profile";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

import theme from "./styles/theme";
import { Container } from "./components/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <SignUp />
    </ThemeProvider>
  </React.StrictMode>
);
