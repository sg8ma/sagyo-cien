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
    currentPage?: string,
    currentCategory: string,
    contents: any,
}

export const SideIndex = ({
    currentPage,
    currentCategory,
    contents,
  }: Props) => {
    var theme = {};
    if(currentPage == 'about')
        theme = {color: UiConf.badge.about}
    else if(currentPage == 'works')
        theme = {color: UiConf.badge.works}
    else if(currentPage == 'lab')
        theme = {color: UiConf.badge.lab}
    else if(currentPage == 'report')
        theme = {color: UiConf.badge.report}
    else if(currentPage == 'devlog')
        theme = {color: UiConf.badge.devlog}
    else if(currentPage == 'article')
        theme = {color: UiConf.badge.article}
    else if(currentPage == 'blog')
        theme = {color: UiConf.badge.blog}
    const categories: string[] = [...new Set(contents.map((content: any) => content.category))];
    const sideIndexes = () => {
        var data: { category: string, posts: { url: string, title: string }[] }[] = [];
        categories.forEach((category: string, i: number) => {
            const categoryData = { category: category, posts: [] as { url: string, title: string }[] };
            contents.forEach((content: any, j: number) => {
                if (category === content.frontmatter.category) {
                    var postsItem = {
                        url: `/${currentPage}/${content.frontmatter.category}/${content.slug}`,
                        title: content.frontmatter.title
                    };
                    categoryData.posts.push(postsItem);
                }
            });
            data.push(categoryData);
        });
        return data;
    }
    return (
        <>
            <SAside>
                <SAsideContent>
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


const SAside = styled.aside`
    position: relative;
    background-color: ${UiConf.badge.devlog};
    color: #ffffff;
    width: 320px;
    max-width: 320px;
    z-index: 1;
`;

const SAsideContent = styled.div`
    position: sticky;
    position: -webkit-sticky;
    top: 64px;
`

const SAccordionItemButton = styled(AccordionItemButton)`
    font-size: 19px;
    padding: 20px 0 20px 15px;
`

const SAccordionSubItemButton = styled.a`
    display: block;
    font-size: 16px;
    padding: 8px 0 8px 20px;
    background-color: ${UiConf.devlog.light};
`

export default SideIndex

interface ModuleWithDefault {
    default: string;
}


