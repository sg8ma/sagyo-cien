import 'modern-css-reset/dist/reset.min.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { UiConf } from '@/constants/uiconf';
import Menu from '@/components/templates/Menu';

interface Props {
    currentPage?: string,
}

export const Header = ({
    currentPage,
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
    return (
        <>
        <SHeaderWrap>
            <SHeader>
                <SLeftArea theme={theme}>
                    <strong>Sagyo-cien</strong>
                </SLeftArea>

                <SRightArea>
                    <Menu 
                        currentPage={currentPage}
                    />
                    {/* <SFontAwesomeIcon icon={faDiscord} style={{color: "#5865f2"}}/> */}
                    {/* <SFontAwesomeIcon icon={faYoutube} style={{color: "#DA1725"}} /> */}
                    {/* <SFontAwesomeIcon icon={faYoutube} theme={{color: "#DA1725"}} /> */}
                </SRightArea>
            </SHeader>
        </SHeaderWrap>
        </>
    );
}


const SHeaderWrap = styled.header`
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
`;

const SHeader = styled.div`
    height: 64px;
    // background-color: #ffffff;
    // background: linear-gradient(45deg, #222 50%, #444);
    background-color: ${UiConf.badge.devlog};
    display: flex;
    justify-content: space-between;
`;

const SLeftArea = styled.div`
    margin: 16px 16px;
    color: ${({theme}) => theme.color};
    strong {
        font-size: 21px;
        color: ${({theme}) => theme.color};
        color: #eeeeee;
    }
`;
SLeftArea.defaultProps = {
    theme: {
        color: "#eeeeee"
    }
}

const SCenterArea = styled.div`
    margin: 8px 0 0 0;
`;

const SRightArea = styled.div`
    margin: 8px 32px 16px 16px;
    display: flex;
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 32px;
    height: 32px;
    margin-top: 8px;
    margin-left: 24px;
    color: #DA1725;
    &:hover {
        color: ${({theme}) => theme.color};
    }
`;

SFontAwesomeIcon.defaultProps = {
    theme: {
        color: "#000000"
    }
}

export default Header