import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from 'next/head';
import theme from "../style/default";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        background-color: ${theme.colors.black};
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: 'Inter';
        font-weight: 300;
    }
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 300;
        font-display: swap;
        src:    url("../static/fonts/Inter-Regular.woff2") format("woff2"),
                url("../static/fonts/Inter-Regular.woff") format("woff");
    }
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 500;
        font-display: swap;
        src:    url("../static/fonts/Inter-Medium.woff2") format("woff2"),
                url("../static/fonts/Inter-Medium.woff") format("woff");
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default ({ children }) => (
	<>
        <Head>
            <link prefetch rel="manifest" href="/static/manifest.json"></link>
        </Head>
		<GlobalStyle />
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</>
);
