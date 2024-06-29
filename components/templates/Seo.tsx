import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProps {
    pageTitle?: string,
    pageDescription?: string,
    pageImg?: string,
    pageImgWidth?: string,
    pageImgHeight?: string
}

const Seo = ({
    pageTitle,
    pageDescription,
    pageImg,
    pageImgWidth,
    pageImgHeight,
  }: SeoProps) => {
    const router = useRouter();
    const siteUrl = 'https://daichisugiyama.com';
    const url = `${siteUrl}${router.asPath}`;
    const defaultTitle = '差し当たり'
    const defaultDescription = ''
    const title = pageTitle ? `${pageTitle}｜${defaultTitle}` : defaultTitle
    const description = pageDescription ? pageDescription : defaultDescription
    const imgUrl = pageImg
    const imgWidth = pageImgWidth ? pageImgWidth : 1280
    const imgHeight = pageImgHeight ? pageImgHeight : 640
    return (
      <Head>
        <title key="title">{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={defaultTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:width" content={String(imgWidth)} />
        <meta property="og:image:height" content={String(imgHeight)} />
        <link rel="canonical" href={url} />
      </Head>
    )
  }
  
  export default Seo