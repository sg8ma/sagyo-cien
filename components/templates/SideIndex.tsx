import 'modern-css-reset/dist/reset.min.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UiConf } from '@/constants/uiconf';
import matter from "gray-matter"
import Link from 'next/link'
import parse from 'html-react-parser';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { NextDataPathnameNormalizer } from 'next/dist/server/future/normalizers/request/next-data';

interface Props {
    currentMenu: string,
    currentCategory: string,
    contents: any,
}

export const SideIndex = ({
    currentMenu,
    currentCategory,
    contents,
  }: Props) => {
    var theme = {};
    if(currentMenu == 'works')
        theme = {color: UiConf.works.regular}
    else if(currentMenu == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(currentMenu == 'analysis')
        theme = {color: UiConf.analysis.regular}
    else if(currentMenu == 'dev')
        theme = {color: UiConf.dev.regular}
    else if(currentMenu == 'methods')
        theme = {color: UiConf.methods.regular}

    const categories: string[] = [...new Set(contents.map((content: any) => content.category))];
    const sideIndexes = () => {
        var data: { category: string, posts: { url: string, title: string }[] }[] = [];
        categories.forEach((category: string, i: number) => {
            const categoryData = { category: category, posts: [] as { url: string, title: string }[] };
            contents.forEach((content: any, j: number) => {
                if (category === content.frontmatter.category) {
                    var postsItem = {
                        url: `/${currentMenu}/${content.frontmatter.category}/${content.slug}`,
                        title: content.frontmatter.title
                    };
                    categoryData.posts.push(postsItem);
                }
            });
            data.push(categoryData);
        });
        return data;
    }
    function capitalize(str: string) 
    {
        if (typeof str !== 'string' || str.length === 0) {
          return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <SAside theme={theme}>
                <SAsideContent>
                    <SIndex>
                    <Link href={`/${currentMenu}`}>Index</Link>
                    </SIndex>
                    <Accordion allowZeroExpanded preExpanded={[currentCategory]}>
                        {sideIndexes().map((content: any, index: number) => {
                            return (
                            <AccordionItem uuid={content.category}>
                                <AccordionItemHeading>
                                    <SAccordionItemButton>
                                    {content.category}
                                    </SAccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="menuWrap">
                                    {content.posts.map((post: any, index: number) => (    
                                        <SAccordionSubItemButton href={post.url}>{post.title}</SAccordionSubItemButton>
                                    ))}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                            )
                        })}
                    </Accordion>
                </SAsideContent>
            </SAside>
        </>
    );
}

const SIndex = styled.div`
    padding: 12px 4px 4px 16px;
`

const SAside = styled.aside`
    position: relative;
    background-color: ${({theme}) => theme.color};
    color: #ffffff;
    width: 320px;
    max-width: 320px;
    z-index: 1;
`;

SAside.defaultProps = {
    theme: {
        color: '#000'
    }
}

const SAsideContent = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 64px;
`

const SAccordionItemButton = styled(AccordionItemButton)`
    font-size: 18px;
    padding: 12px 16px 12px 16px;
`

const SAccordionSubItemButton = styled.a`
    display: block;
    font-size: 16px;
    padding: 8px 20px 8px 20px;
    background-color: ${UiConf.dev.light};
`

export default SideIndex

interface ModuleWithDefault {
    default: string;
}


