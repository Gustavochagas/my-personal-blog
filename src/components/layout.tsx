import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../assets/styles/globalStyles";
import { lightTheme, darkTheme } from "../assets/styles/themes";
import { Container, Main } from "./styles";
import { Header } from "./Header";
import { GitHubCorner } from "./GithubCorner";

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header onChangeTheme={setTheme} theme={theme} />
        <Main>
          {children}
        </Main>
      </Container>
      <GitHubCorner projectUrl="https://github.com/Gustavochagas/my-personal-blog" />
    </ThemeProvider>
  );
};

export default Layout;
