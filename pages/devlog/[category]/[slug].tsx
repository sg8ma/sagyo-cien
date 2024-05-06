import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/components/atoms/CodeBlock';
import Header from '@/components/templates/Header';
import { GetStaticPropsContext } from 'next';
import styled from "styled-components"
import Menu from '@/components/templates/Menu';
import Seo from '@/components/templates/Seo';
import Footer from '@/components/templates/Footer';
import Sidebar from '@/components/templates/Sidebar';
import SideIndex from '@/components/templates/SideIndex';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { format } from 'date-fns'
import { UiConf } from '@/constants/uiconf'

interface Props {
    frontmatter: any;
    markdownBody: any;
    contents: any;
}

export const SinglePage = (props: Props) => {
    return (
        <>               
            <Header 
            currentPage={'devlog'}
            />
            <SContentsWrap>
                <SideIndex
                    currentPage={'devlog'}
                    currentCategory={props.frontmatter.category}
                    contents={props.contents}
                />
                <SContents>
                    <Seo
                        pageTitle={props.frontmatter.title}
                        pageDescription={props.frontmatter.summary}
                    />
                    <SContentsBody>
                        <STitle>{props.frontmatter.title}</STitle>
                        <SDate><SFontAwesomeIcon icon={faCalendar} />{format(props.frontmatter.created_at, 'yyyy-M-dd')}</SDate>
                        <SReactMarkdown 
                            remarkPlugins={[remarkGfm]} 
                            className='content'
                            children={props.markdownBody}
                            components={{code: CodeBlock}}
                        />
                    </SContentsBody>
                </SContents>
                <Sidebar
                    currentPage={'devlog'}
                    />
            </SContentsWrap>
            <Footer 
            currentPage={'devlog'}
            />
        </>  
    )
}

export default SinglePage

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
    width: 818px;
    margin: 0 auto;
    margin-bottom: 300px;
`;

const STitle = styled.h1`
    font-size: 48px;
    margin: 0 auto;
    width: 800px;
    text-align: center;
    line-height: 1.4;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
`;

const SDate = styled.div`
    font-size: 16px;
    margin: 16px auto 0;
    width: 800px;
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
        margin: 48px 0 16px;
        // padding-bottom: 0.2em;
        // padding-bottom: 0.2em;
        // box-shadow: 0px 3px 2px -2px rgba(0, 0, 0, 0.15);
        &:before {
            content:  ""; 
            width:  16px;
            height:  16px; 
            display:  inline-block;
            background-color: ${UiConf.devlog.light};
            position:  relative;
            top: -1px;
            margin-right: 11px;
        }
    }
    h3 {
        font-size: 25px;
        line-height: 1.4;
        margin: 32px 0 16px;
        position:relative;
        &:before {
            content:  ""; 
            position:  relative;
            top: 28px;
            margin-right: 8px;
            width: 0;
            height: 0;
            border-style: solid;
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            border-top: 14px solid ${UiConf.devlog.light};
            border-bottom: 0;
        }
    }
    h4 {
        font-size: 22px;
        line-height: 1.4;
        margin: 32px 0 16px;
        &:before {
            content:  ""; 
            width:  4px;
            height:  14px; 
            display:  inline-block;
            background-color: ${UiConf.devlog.light};
            position:  relative;
            top: -1px;
            margin-right: 11px;
            margin-left: 5px;
        }
    }
    p {
        font-size: 16px;
        line-height: 1.8;
    }
    li p {
        font-size: 16px;
        line-height: 1.8;
        &:before {
            content:  ""; 
            width:  6px;
            height:  6px; 
            display:  inline-block;
            background-color: ${UiConf.devlog.light};
            border-radius:  50%;
            position:  relative;
            top: -3px;
            margin-right: 10px;
        }
    }
    table {

        font-size: 16px;
        width: auto;
        margin: 1.5em auto;
        thead {
            background: ${UiConf.devlog.light};
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





export async function getStaticPaths() {
    const content = ((context) => {
        const keys = context.keys();
        const data = keys.map((key: string, index: number) => {
            let slugs = key.slice(0, -3).slice(2).split('/')
            return slugs
        })
        return data
    })(require.context('/markdown/private/devlog/', true, /\.md$/));
    const paths = content.map((slugs) => ({
        params: {
          category: slugs[0],
          slug: slugs[1],
        },
      }));
    return {
        paths: paths, 
        fallback: false,
    };
}

interface ModuleWithDefault {
    default: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {    
    const { category, slug } = context.params as {
        category: string;
        slug: string;
    };
    const data = await import(`/markdown/private/devlog/${category}/${slug}.md`)
    const document = matter(data.default)

    //allpage
    const contents = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            let slugs = key.slice(0, -3).slice(2).split('/')
            const value = values[index]
            const document = matter((value as ModuleWithDefault).default)
            return {
                frontmatter: document.data,
                category: slugs[0],
                slug: slugs[1],

            }
        })
        return data
    })(require.context('/markdown/private/devlog/', true, /\.md$/))
    const sortingContents = contents.sort((a, b) => {
        return b.frontmatter.created_at - a.frontmatter.created_at
    });

    return {
      props: {
        frontmatter: document.data,         
        markdownBody: document.content,     
        contents: JSON.parse(JSON.stringify(sortingContents)) 
      }
    }
}