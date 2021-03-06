import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
