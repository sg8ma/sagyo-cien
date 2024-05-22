import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';
import matter from "gray-matter"
import { useState, useEffect } from 'react';
interface Props {
    menu?: string,
    category?: string,
    slug?: string,
}

export const LinkText = ({
    menu,
    category,
    slug
  }: Props) => {

    const [document, setDocument] = useState(null);
    useEffect(() => {
      async function loadMarkdown() {
        const data = await import(`/tests/md/${menu}/${category}/${slug}.md`);
        const doc = matter(data.default);
        setDocument(doc);
      }
      loadMarkdown();
    }, []);  // categoryやslugが変更された時に再読込
    console.log(document)
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
                <SList>
                    <SBadge theme={theme}>{menu}</SBadge>
                    {document ? 
                        <a href={`/${menu}/${document.data.category}/${document.data.slug}`}>{document.data.title}</a>:
                        <></>
                    }
                </SList>
            </div>
        </>
    );
}

const SList = styled.li `
    font-size: 16px;
    line-height: 1.8;
    margin: 6px 0;
    list-style: none;
    &:before {
        content:  ""; 
        width:  6px;
        height:  6px; 
        display:  inline-block;
        // background-color: ${UiConf.dev.light};
        background-color: #222;
        border-radius:  50%;
        position:  relative;
        top: -3px;
        margin-right: 12px;
        margin-left: 16px;
    }
`

const SBadge = styled.label`
    background: ${({theme}) => theme.color};
    font-size: 12px;
    padding: 0.5px 6px;
    margin-right: 12px;
    // margin-left: 4px;
    color: white;
    border-radius: 4px;
`;

SBadge.defaultProps = {
    theme: {
        color: '#000'
    }
}

export default LinkText