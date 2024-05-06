import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="ja-jp">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href='' />
          <link rel="apple-touch-icon" href='' />
          <title key="title">SagyoCien</title>
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Zen+Kaku+Gothic+Antique&display=swap" rel="stylesheet"/>
        </Head>
      <body style={{"position": "relative"}}>
        <Main />
        <NextScript  />
      </body>
    </Html>
  )
}
