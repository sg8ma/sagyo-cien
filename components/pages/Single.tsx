import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import ThreeColLayout from '@/components/templates/ThreeColLayout';
import CodeBlock from '@/components/elements/CodeBlock';
import styled from "styled-components"
import Sidebar from '@/components/templates/Sidebar';
import SideIndex from '@/components/templates/SideIndex';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { format } from 'date-fns'
import { UiConf } from '@/constants/uiconf'

interface Props {
    currentMenu: string,
    pageTitle: string,
    pageDescription: string,
    frontmatter: any,
    markdownBody: any,
    contents: any,
}

export const Single = ({
    currentMenu,
    pageTitle,
    pageDescription,
    frontmatter,
    markdownBody,
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
                    currentCategory={frontmatter.category}
                    contents={contents}
                />
                <SContents>
                    <SContentsBody>
                        <STitle>{pageTitle}</STitle>
                        <SDate><SFontAwesomeIcon icon={faCalendar} />{format(frontmatter.created_at, 'yyyy-MM-dd')}</SDate>
                        <SReactMarkdown 
                            remarkPlugins={[remarkGfm]} 
                            className='content'
                            children={markdownBody}
                            components={{code: CodeBlock}}
                        />
                    </SContentsBody>
                </SContents>
                <Sidebar
                    currentMenu={currentMenu}
                />
            </SContentsWrap>
        </ThreeColLayout>
    )
}

export default Single


const SContentsWrap = styled.div`
    display: flex;
`;
const SContents = styled.div`
    padding-top: 16px;
    background-color: #f6f6f6;
    padding-bottom: 56px;
    padding-left: 64px; 
    width: calc(100vw - 320px - 320px);
`;

const SContentsBody = styled.div`
    padding-top: 24px;
    padding-bottom: 16px;
    width: 840px;
    margin: 0 auto;
    margin-bottom: 300px;
`;

const STitle = styled.h1`
    font-size: 40px;
    margin: 0 auto;
    width: 690px;
    text-align: center;
    line-height: 1.4;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

const SDate = styled.div`
    font-size: 14px;
    margin: 16px auto 0;
    width: 690px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SReactMarkdown = styled(ReactMarkdown)`
    padding-top: 16px;
    h2 {
        font-size: 28px;
        line-height: 1.4;
        margin: 48px 0 24px;
        letter-spacing: 0.07em;
        // padding-bottom: 0.2em;
        padding-bottom: 0.2em;
        box-shadow: 0px 3px 2px -2px rgba(0, 0, 0, 0.15);
        // &:before {
        //     content:  ""; 
        //     width:  16px;
        //     height:  16px; 
        //     display:  inline-block;
        //     background-color: ${UiConf.dev.light};
        //     position:  relative;
        //     top: -1px;
        //     margin-right: 11px;
        // }
    }
    h3 {
        font-size: 23px;
        line-height: 1.4;
        margin: 32px 0 16px;
        letter-spacing: 0.09em;
        position:relative;
        &:before {
            // content:  ""; 
            // position:  relative;
            // top: 28px;
            // margin-right: 8px;
            // width: 0;
            // height: 0;
            // border-style: solid;
            // border-right: 8px solid transparent;
            // border-left: 8px solid transparent;
            // border-top: 14px solid ${UiConf.dev.regular};
            // border-bottom: 0;
            // content:  ""; 
            // width:  12px;
            // height:  12px; 
            // display:  inline-block;
            // background-color: ${UiConf.dev.regular};
            // position:  relative;
            // top: -1px;
            // margin-right: 11px;
            // // margin-left: 8px;
        }
    }
    h4 {
        font-size: 18px;
        line-height: 1.4;
        margin: 32px 0 16px;
        letter-spacing: 0.1em;
        &:before {
            // content:  ""; 
            // width:  4px;
            // height:  14px; 
            // display:  inline-block;
            // background-color: ${UiConf.dev.regular};
            // position:  relative;
            // top: -1px;
            // margin-right: 11px;
            // margin-left: 8px;
        }
    }
    p {
        font-size: 16px;
        line-height: 1.8;
        letter-spacing: 0.11em;
    }
    ul {
        margin: 16px 0;
    }
    li p {
        font-size: 16px;
        line-height: 1.8;
        margin: 3px 0;
        &:before {
            content:  ""; 
            width:  6px;
            height:  6px; 
            display:  inline-block;
            // background-color: ${UiConf.dev.light};
            background-color: #222;
            border-radius:  50%;
            position:  relative;
            top: -3px;
            margin-right: 12px;
            margin-left: 16px;
        }
    }
    table {

        font-size: 16px;
        width: auto;
        margin: 1.5em auto;
        thead {
            background: ${UiConf.dev.light};
            padding: 0.3em 1.0em;
                th {
                    vertical-align: bottom;
                    border-bottom: 2px solid #cecece;
                    text-align: center;
                    font-weight: normal;
                    padding: 0.5em;
                    border: 1px solid #cecece;
                }

        }
        tbody {
            td {
                padding: 0.3em 1.0em;
                vertical-align: middle;
                border: 1px solid #cecece;
            }
            tr:nth-child(2n)  {
                background-color: #f6f6f6;
            }
            tr:hover {
                background-color: #dddddd !important;
            }
        }
    }
    a {
        color: ${UiConf.link.normal};
        &:hover {
            background-color: ${UiConf.link.normal};
            color: ${UiConf.link.hover};
        }
    }
    pre {
        margin: 24px 0;
    }

`;
