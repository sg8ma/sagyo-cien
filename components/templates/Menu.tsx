import styled from "styled-components"
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-brands-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo, faDiceD20, faFileLines, faPenNib, faFlask, faBookTanakh, faNewspaper } from "@fortawesome/free-solid-svg-icons";
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
                    {(currentPage == 'works') ? 
                        <SLink href={`/works`} theme={{color: UiConf.works.regular}}><SFontAwesomeIcon icon={faDiceD20} />Works</SLink>:
                        <SLink href={`/works`}><SFontAwesomeIcon icon={faDiceD20} />Works</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'analysis') ? 
                        <SLink href={`/analysis`} theme={{color: UiConf.analysis.regular}}><SFontAwesomeIcon icon={faFileLines} />Analysis</SLink>:
                        <SLink href={`/analysis`}><SFontAwesomeIcon icon={faFileLines} />Analysis</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'lab') ? 
                        <SLink href={`/lab`} theme={{color: UiConf.lab.regular}}><SFontAwesomeIcon icon={faFlask} />Lab</SLink>:
                        <SLink href={`/lab`}><SFontAwesomeIcon icon={faFlask} />Lab</SLink>
                    }
                    </li>
                    {/* <li><SLink href={`/lab`}><SFontAwesomeIcon icon={faFlask} />Labs</SLink></li> */}
                    <li>
                    {(currentPage == 'dev') ? 
                        <SLink href={`/dev`} theme={{color: UiConf.dev.regular}}><SFontAwesomeIcon icon={faBookTanakh} />Dev</SLink>:
                        <SLink href={`/dev`}><SFontAwesomeIcon icon={faBookTanakh} />Dev</SLink>
                    }
                    </li>
                    <li>
                    {(currentPage == 'methods') ? 
                        <SLink href={`/methods`} theme={{color: UiConf.methods.regular}}><SFontAwesomeIcon icon={faNewspaper} />Methods</SLink>:
                        <SLink href={`/methods`}><SFontAwesomeIcon icon={faNewspaper} />Methods</SLink>
                    }
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
    width: 16px;
    height: 16px;
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
            margin-left: 40px;
            font-size: 19px;
        }
    }
`;


export default Menu