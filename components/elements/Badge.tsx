import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';
import matter from "gray-matter"
import { useState, useEffect } from 'react';

interface Props {
    menu?: string,
}

export const Badge = ({
    menu
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
            
            <div>
                <SBadge theme={theme}>{menu}</SBadge>
            </div>
        </>
    );
}

const SBadge = styled.label`
    display: inline;
    background:${({theme}) => theme.color};
    font-size: 12px;
    padding: 1px 18px;
    margin-right: 12px;
    color: white;
    border-radius: 4px;
`;

SBadge.defaultProps = {
    theme: {
        color: '#000'
    }
}

export default Badge