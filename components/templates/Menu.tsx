import styled from "styled-components"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faDiceD20, faFileLines, faPenNib, faFlask, faBookTanakh, faNewspaper, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { UiConf } from '@/constants/uiconf'
interface Props {
    currentPage?: string,
}
export const Menu = ({
    currentPage,
  }: Props) => {
    const currentPageName = currentPage;
    return (
        <SSection>
            <SNavi>
                <ul>
                    <li>
                        <SLink href={`/works`} theme={{color: UiConf.works.regular}}>
                            {/* <SFontAwesomeIcon icon={faCircleInfo} /> */}
                            概要</SLink>
                    </li>
                    <li>
                    {(currentPage == 'works') ? 
                        <SLink href={`/works`} theme={{color: UiConf.works.regular}}>
                            {/* <SFontAwesomeIcon icon={faDiceD20} /> */}
                            作品</SLink>:
                        <SLink href={`/works`}>
                            {/* <SFontAwesomeIcon icon={faDiceD20} /> */}
                            作品</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'lab') ? 
                        <SLink href={`/lab`} theme={{color: UiConf.lab.regular}}>
                            {/* <SFontAwesomeIcon icon={faFlask} /> */}
                            試作品</SLink>:
                        <SLink href={`/lab`}>
                            {/* <SFontAwesomeIcon icon={faFlask} /> */}
                            試作品</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'analysis') ? 
                        <SLink href={`/analysis`} theme={{color: UiConf.analysis.regular}}>
                            {/* <SFontAwesomeIcon icon={faFileLines} /> */}
                            報告</SLink>:
                        <SLink href={`/analysis`}>
                            {/* <SFontAwesomeIcon icon={faFileLines} /> */}
                            報告</SLink>
                    }
                    </li>                    <li>
                    {(currentPage == 'dev') ? 
                        <SLink href={`/dev`} theme={{color: UiConf.dev.regular}}>
                            {/* <SFontAwesomeIcon icon={faBookTanakh} /> */}
                            開発</SLink>:
                        <SLink href={`/dev`}>
                            {/* <SFontAwesomeIcon icon={faBookTanakh} /> */}
                            開発</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'methods') ? 
                        <SLink href={`/methods`} theme={{color: UiConf.methods.regular}}>
                            {/* <SFontAwesomeIcon icon={faNewspaper} /> */}
                            手順</SLink>:
                        <SLink href={`/methods`}>
                            {/* <SFontAwesomeIcon icon={faNewspaper} /> */}
                            手順</SLink>
                    }
                    </li>
                    <li>
                        <SFontAwesomeIcon icon={faMoon} />
                        
                        {/* <FontAwesomeIcon icon={faSun} /> */}
                    </li>
                    <li>
                    <SFontAwesomeIcon icon={faGithub} />
                        {/* <FontAwesomeIcon icon={faSun} /> */}
                    </li>
                    
                </ul>
            </SNavi>
        </SSection>
    );
}

const SLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    // color: ${({theme}) => theme.color};
    color: #eeeeee;
`;

SLink.defaultProps = {
    theme: {
        color: "#eeeeee"
    }
}

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    margin-right: 4px;
`;

const SSection= styled.section`
    height: 48px;
    // background: linear-gradient(45deg, #222 50%, #444);
    color: #eee;
`;

const SNavi= styled.nav`
    height: 100%;
    ul {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            margin-left: 30px;
            font-size: 15px;
        }
    }
`;


export default Menu