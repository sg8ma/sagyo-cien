import 'modern-css-reset/dist/reset.min.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UiConf } from '@/constants/uiconf';
import profile from '@/public/images/profile.jpg'

interface Props {
    currentMenu?: string,
}

export const Header = ({
    currentMenu,
  }: Props) => {
    var theme = {};
    if(currentMenu == 'works')
        theme = {color: UiConf.works.regular}
    else if(currentMenu == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(currentMenu == 'analysis')
        theme = {color: UiConf.analysis.regular}
    else if(currentMenu == 'dev')
        theme = {color: UiConf.dev.regular}
    else if(currentMenu == 'method')
        theme = {color: UiConf.methods.regular}
    return (
        <>
            <SAside>
                <SAsideContent>
                <SProfile theme={theme}>自己紹介</SProfile>
                <SProfileOverview >
                    <SProfileImg src={'/images/profile.jpg'}></SProfileImg>
                    <div>
                        <SProfileId theme={theme}>杉山大知</SProfileId>
                        <SProfileJob>Webエンジニア</SProfileJob>
                    </div>
                </SProfileOverview>
                <SProfileDetail>
                東京都内でWebサービスを作るバックエンド兼フロントエンド技術者です。
                新規Webサービスの立ち上げや使いやすいSPAの開発が得意です。
                </SProfileDetail>
                <SPickupTitle theme={theme}>広告</SPickupTitle>
                {/* <SPickupContent>
                    <SPickupTag>#php</SPickupTag>
                    <SPickupTag>#markdown</SPickupTag>
                </SPickupContent> */}
                {/* <SAdsTitle></SAdsTitle> */}
                <SAds src={'/images/banner01.png'} height="90"></SAds>
                <SAds src={'/images/banner02.jpg'} height="90"></SAds>
                <SAds src={'/images/banner03.jpg'} height="90"></SAds>
                {/* <SAds src={'/images/banner04.jpg'} height="90"></SAds> */}
                </SAsideContent>
            </SAside>
        </>
    );
}


const SAside = styled.aside`
position: relative;
    background-color: #f0f0f0;
    // background-color: #f6f6f6;
    width: 320px;
    z-index: 1;
`;

const SAsideContent = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    position: sticky;
    position: -webkit-sticky;
    top: 90px;
`

const SProfile = styled.div`
    font-size: 24px;
    color: ${({theme}) => theme.color};
    // color: #222;
    // margin-top: 40px;
`;

SProfile.defaultProps = {
    theme: {
        color: '#000'
    }
}

const SPickupTitle = styled.div`
    font-size: 24px;
    color: ${({theme}) => theme.color};
    margin-top: 32px;
    margin-bottom: 8px;
`;


SProfile.defaultProps = {
    theme: {
        color: '#000'
    }
}

const SPickupContent = styled.div`
    display: flex;
    margin-bottom: 12px;
`;

const SPickupTag = styled.div`
    font-size: 14px;
    background-color: white;
    color: #222;
    padding: 4px 6px;
    margin: 4px 8px 8px 0;
    border: 1px solid #eee;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
`;

const SAdsTitle = styled.div`
    font-size: 24px;
    color: ${UiConf.dev.regular};
    margin-top: 32px;
    margin-bottom: 12px;
`;

const SAds = styled.img`
    margin-bottom: 16px;
    width: 270px !important;
    height: 88px !important;
`


const SProfileOverview = styled.div`
    display: flex;
    margin-top: 10px;
`

const SProfileImg = styled.img`
    margin-right: 10px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
`

const SProfileId = styled.div`
    font-size: 17px;
    color: ${({theme}) => theme.color};
`

SProfileId.defaultProps = {
    theme: {
        color: '#000'
    }
}

const SProfileJob = styled.div`
    font-size: 15px;
`

const SProfileDetail= styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.8;
`



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