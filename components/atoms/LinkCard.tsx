import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';

interface Props {
    menu?: string,
    category?: string,
    title?: string,
    slug?: string,
}

export const LinkCard = ({
    menu,
    category,
    title,
    slug
  }: Props) => {
    var theme = {};
    if(menu == 'about')
        theme = {color: UiConf.info.regular}
    else if(menu == 'works')
        theme = {color: UiConf.works.regular}
    else if(menu == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(menu == 'report')
        theme = {color: UiConf.report.regular}
    else if(menu == 'devlog')
        theme = {color: UiConf.devlog.regular}
    else if(menu == 'article')
        theme = {color: UiConf.article.regular}
    else if(menu == 'blog')
        theme = {color: UiConf.blog.regular}
    return (
        <>
            <div>fullimage</div>
        </>
    );
}



export default LinkCard