import 'modern-css-reset/dist/reset.min.css'
import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';

interface Props {
    currentPage?: string,
}

export const Footer = ({
    currentPage,
  }: Props) => {
    var theme = {};
    if(currentPage == 'about')
        theme = {color: UiConf.info.regular}
    else if(currentPage == 'works')
        theme = {color: UiConf.works.regular}
    else if(currentPage == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(currentPage == 'report')
        theme = {color: UiConf.report.regular}
    else if(currentPage == 'devlog')
        theme = {color: UiConf.devlog.regular}
    else if(currentPage == 'article')
        theme = {color: UiConf.article.regular}
    else if(currentPage == 'blog')
        theme = {color: UiConf.blog.regular}
    return (
        <>
        <SFooterWrap theme={theme}>
            <SFooter>
                <SAds>
                <img src="https://placehold.jp/600x200.png"></img>
                </SAds>
                <SCopyright>© 2024 Sashiatari <p style={{'color': '#c8c8c8'}}></p></SCopyright>
            </SFooter>
        </SFooterWrap>
        </>
    );
}

const SAds = styled.div`
    margin: 20px 0;
`

const SCopyright = styled.div`
    margin: 20px 0;
    color: black;
`

const SFooterWrap = styled.footer`
    background-color:  #c8c8c8;
    color: #eeeeee;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const SFooter = styled.div`
    text-align: center;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column
`;


export default Footer