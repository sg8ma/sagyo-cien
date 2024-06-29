import styled from "styled-components"
import matter from "gray-matter"
import ThreeColLayout from '@/components/templates/ThreeColLayout';
import Card from '@/components/elements/Card';
import Card02 from '@/components/elements/Card02';
import Sidebar from '@/components/templates/Sidebar';
import SideIndex from '@/components/templates/SideIndex';
import { UiConf } from '@/constants/uiconf'

interface Props {
    currentMenu: string,
    currentCategory: string,
    pageTitle: string,
    pageDescription: string,
    contents: any,
}

export const Collection = ({
    currentMenu,
    currentCategory,
    pageTitle,
    pageDescription,
    contents
  }: Props) => {
    return (
        <ThreeColLayout
            currentMenu={currentMenu}
            pageTitle={pageTitle}
            pageDescription={pageDescription}
        >
            <SContentsWrap>
                <SideIndex
                    currentMenu={currentMenu}
                    currentCategory={currentCategory}
                    contents={contents}
                />
                <SContents>
                    <SContentsBody>
                        <SPageTitle>{pageTitle}</SPageTitle>
                        <SPageDesc>{pageDescription}</SPageDesc>
                        <SCardGroup>
                        {contents.map((content: any, index: number) => (
                            <Card02 
                                index={index}
                                menu={currentMenu}
                                category={content.category}
                                slug={content.slug}
                                title={content.frontmatter.title}
                                thumbnail={content.frontmatter.thumbnail}
                                summary={content.frontmatter.summary}
                                created_at={content.frontmatter.created_at}
                            />
                        ))}
                        </SCardGroup>
                    </SContentsBody>
                </SContents>
                <Sidebar
                    currentMenu={currentMenu}
                />
            </SContentsWrap>
        </ThreeColLayout>
    )
}

export default Collection

const SContentsWrap = styled.div`
    display: flex;
`;

const SContents = styled.div`
    padding-top: 48px;
    background-color: #f6f6f6;
    padding-bottom: 56px;
    padding-left: 64px; 
    width: calc(100vw - 320px - 320px);
`;

const SContentsBody = styled.div`
    padding-bottom: 16px;

    margin: 0 auto;
    margin-bottom: 300px;
`;

const SPageTitle = styled.h1`
    font-size: 36px;
`;

const SPageDesc = styled.p`
    margin-top: 4px;
    font-size: 15px;
`;

const SCardGroup = styled.div`
    margin-top: 56px;
    padding-left: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-inline: auto;
`;