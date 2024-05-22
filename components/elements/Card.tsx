import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { format } from 'date-fns'
import Link from 'next/link'
import Image from "next/image";

interface Props {
    menu?: string,
    index?: number,
    category?: string,
    slug?: string,
    title?: string,
    thumbnail?: string,
    summary?: string,
    created_at: string,
}

export const Card = ({
    menu,
    index,
    category,
    slug,
    title,
    thumbnail,
    summary,
    created_at,
  }: Props) => {
    var theme = {};
    if(menu == 'works')
        theme = {color: UiConf.works.regular}
    else if(menu == 'lab')
        theme = {color: UiConf.lab.regular}
    else if(menu == 'analysis')
        theme = {color: UiConf.analysis.regular}
    else if(menu == 'dev')
        theme = {color: UiConf.dev.regular}
    else if(menu == 'methods')
        theme = {color: UiConf.methods.regular}
    const thumbnailPath = "/data/thumbnail/" + thumbnail;
    return (
        <SCardWrap>
            <Link href={`/${menu}/${category}/${slug}`}>
                <SCard key={index}>
                    <SCategoryWrap>
                        <SCategoryBg theme={theme}></SCategoryBg>
                        <SCategory>{category}</SCategory>
                        </SCategoryWrap>
                    <STitleWrap>
                        <STitle>{title}</STitle>
                    </STitleWrap>
                    <SThumbnail src={thumbnailPath}></SThumbnail>
                    <SDateWrap>
                        <SDate><SFontAwesomeIcon icon={faCalendar} />{format(created_at, 'yyyy/MM/dd')}</SDate>
                    </SDateWrap>
                </SCard>
            </Link>
        </SCardWrap>
    );
}

const SCategoryBg = styled.div`
    position: relative;
    z-index: 0;
    background: ${({theme}) => theme.color};
    width: 256px;
    height: 16px;
    border-radius: 4px;
`;

SCategoryBg.defaultProps = {
    theme: {
        color: '#000'
    }
}

const SCardWrap = styled.div`
    position: relative;
    margin: 0 24px 24px 0;
`;

const SThumbnail = styled.img`
    border-radius: 0 0 0 0;
    padding: 0 16px;
    width: 280px;
    max-width: 280px;
`;

const SSummary = styled.p`
    border-radius: 0 0 0 0;
    padding: 0 16px;
    width: 280px;
    font-size: 15px;
`;

const STitle = styled.h2`
    font-size: 20px;
    padding: 0 16px 0;
    line-height: 1.41;
`;

const STitleWrap = styled.div`
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

const SCard = styled.div`
    display: block;
    width: 280px;
    height: 312px;
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


export default Card