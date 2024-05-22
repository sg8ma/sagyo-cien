import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';

interface Props {
    menu?: string,
    category?: string,
    title?: string,
    slug?: string,
}

export const LinkCard = ({
    menu,
    category,
    title,
    slug
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
    return (
        <>
            <div>fullimage</div>
        </>
    );
}



export default LinkCard