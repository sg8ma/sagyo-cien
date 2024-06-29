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
    if(currentPage == 'works')
        theme = {color: UiConf.works.regular}
    else if(currentPage == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(currentPage == 'analysis')
        theme = {color: UiConf.analysis.regular}
    else if(currentPage == 'dev')
        theme = {color: UiConf.dev.regular}
    else if(currentPage == 'methods')
        theme = {color: UiConf.methods.regular}
    return (
        <>
        <SFooterWrap theme={theme}>
            <SFooter>
                <SAds>
                <img src={'/images/banner04.jpg'}></img>
                </SAds>
                <SCopyright>© 差し当たり  All Rights Reserved.<p style={{'color': '#c8c8c8'}}></p> </SCopyright>
            </SFooter>
        </SFooterWrap>
        </>
    );
}

const SAds = styled.div`
    margin: 20px 0 0;
    img {
        width: 600px !important;
        height: 200px !important;
    }
`

const SCopyright = styled.div`
    margin: 20px 0;
    color: black;
`

const SFooterWrap = styled.footer`
background-color: #f6f6f6;

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