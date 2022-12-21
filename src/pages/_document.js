import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={process.env.HTML_LANG}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
