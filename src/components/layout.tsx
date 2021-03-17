import * as React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";
import { Container, Header, Main } from "./styles";
import { Bio } from "./Bio";

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header>
          <Bio />
        </Header>
        <Main>
          <button onClick={themeToggler}>Switch Theme</button>
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
