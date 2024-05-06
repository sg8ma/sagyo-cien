import 'modern-css-reset/dist/reset.min.css'
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UiConf } from '@/constants/uiconf';
import profile from '@/public/images/profile.jpg'

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
            <SAside>
                <SAsideContent>
                <SProfile>Profile</SProfile>
                <SProfileOverview >
                    <SProfileImg src={'/images/profile.jpg'}></SProfileImg>
                    <div>
                        <SProfileId>@sg8ma</SProfileId>
                        <SProfileJob>Webエンジニア</SProfileJob>
                    </div>
                </SProfileOverview>
                <SProfileDetail>
                都内でWebサービスを作るフロントエンド兼バックエンドエンジニアです。
                新規Webサービスの爆速立ち上げや、使いやすいSPAの開発が得意です。
                </SProfileDetail>
                <SPickupTitle>Ads</SPickupTitle>
                {/* <SPickupContent>
                    <SPickupTag>#php</SPickupTag>
                    <SPickupTag>#markdown</SPickupTag>
                </SPickupContent> */}
                {/* <SAdsTitle></SAdsTitle> */}
                <SAds src="https://placehold.jp/270x90.png"></SAds>
                <SAds src="https://placehold.jp/270x180.png"></SAds>
                <SAds src="https://placehold.jp/270x90.png"></SAds>
                <SAds src="https://placehold.jp/270x90.png"></SAds>
                </SAsideContent>
            </SAside>
        </>
    );
}


const SAside = styled.aside`
position: relative;
    background-color: #f0f0f0;
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
    color: ${UiConf.badge.devlog};
    // color: #222;
    // margin-top: 40px;
`;

const SPickupTitle = styled.div`
    font-size: 24px;
    color: ${UiConf.badge.devlog};
    margin-top: 32px;
    margin-bottom: 8px;
`;

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
    color: ${UiConf.badge.devlog};
    margin-top: 32px;
    margin-bottom: 12px;
`;

const SAds = styled.img`
    margin-bottom: 16px;
    // width: 270px;
    // height: 88px;
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
    color: ${UiConf.badge.devlog};
`

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