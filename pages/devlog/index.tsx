import styled from "styled-components"
import Link from 'next/link'
import matter from "gray-matter"
import Header from '@/components/templates/Header';
import Menu from '@/components/templates/Menu';
import Footer from '@/components/templates/Footer';
import Sidebar from '@/components/templates/Sidebar';
import SideIndex from '@/components/templates/SideIndex';
import Seo from '@/components/templates/Seo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { format } from 'date-fns'
import { UiConf } from '@/constants/uiconf'

interface Props {
    contents: any;
}

export const CollectionPage = (props: Props) => {
    return (
        <>
            <Seo
                pageTitle={'Devlog'}
                pageDescription={'Devlog'}
            />
            <Header
            currentPage={'devlog'}
            />
            <SContentsWrap>
            <SideIndex
                    currentPage={'devlog'}
                    currentCategory={''}
                    contents={props.contents}
                />
                <SContents>
                    <SContentsBody>
                        <SPageTitle>Devlog</SPageTitle>
                        <SPageDesc>開発における設計、実装、環境構築のログ</SPageDesc>
                        <SCardGroup>
                        {props.contents.map((content: any, index: number) => (
                            <SCardWrap>
                                <Link href={`/devlog/${content.category}/${content.slug}`}>
                                    <SCard key={index}>
                                        <SCategoryWrap>
                                            <SCategoryBg></SCategoryBg>
                                            <SCategory>{content.frontmatter.category}</SCategory>
                                            </SCategoryWrap>
                                        <STitleWrap>
                                            <STitle>{content.frontmatter.title}</STitle>
                                        </STitleWrap>
                                        <SThumbnail src="https://placehold.jp/264x176.png"></SThumbnail>
                                        <SDateWrap>
                                            <SDate><SFontAwesomeIcon icon={faCalendar} />{format(content.frontmatter.created_at, 'yyyy/M/dd')}</SDate>
                                        </SDateWrap>
                                    </SCard>
                                </Link>
                            </SCardWrap>
                        ))}
                        </SCardGroup>
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
export default CollectionPage

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
    // color: ${UiConf.devlog.regular};
`;

const SPageDesc = styled.p`
    margin-top: 4px;
    font-size: 15px;
`;

const SThumbnail = styled.img`
    border-radius: 0 0 0 0;
    padding: 0 10px;
    width: 264px;
`;

const STitle = styled.h2`
    font-size: 18px;
    padding: 0 16px 0;
    line-height: 1.41;
`;

const STitleWrap = styled.div`
    // position: relative;
    padding-top: 16px;
    padding-bottom: 16px;
`

const SDateWrap = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 4px;
`;

const SDate = styled.div`
    font-size: 13px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 12px;
    height: 12px;
    margin-right: 4px;
`;


const SCardGroup = styled.div`
    margin-top: 56px;
    padding-left: 16px;
    // display: grid;
    // grid-template-columns: repeat(4, 1fr);
    // gap: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-inline: auto;
`;

const SCardWrap = styled.div`
    position: relative;
    margin: 0 24px 24px 0;
`;

const SCard = styled.div`
    display: block;
    width: 280px;
    height: 304px;
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    background: #ffffff;

`;

const SCategoryWrap = styled.div`
    position: absolute;
    display: block;
    left: 50%;
    transform: translate(-50%, 0);
    top: -7px;
`;

const SCategory = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
	margin: auto;
    font-size: 12px;
    color: white;
`;

const SCategoryBg = styled.div`
    position: relative;
    z-index: 0;
    background: ${UiConf.badge.devlog};
    background: linear-gradient(45deg, ${UiConf.badge.devlog} 30%, ${UiConf.badge.devlog});
    width: 256px;
    height: 16px;
    border-radius: 4px;
`;




interface ModuleWithDefault {
    default: string;
}

export async function getStaticProps() {
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
    const sortingContents = contents.sort((b, a) => {
        return a.frontmatter.created_at - b.frontmatter.created_at
    });
    return {
      props: {
        contents: JSON.parse(JSON.stringify(sortingContents))
      }
    }
}

