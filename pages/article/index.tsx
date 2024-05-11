import styled from "styled-components"
import matter from "gray-matter"
import Collection from '@/components/pages/Collection';


interface Props {
    contents: any;
}

export const CollectionPage = (props: Props) => {
    const currentMenu = 'article';
    const currentCategory = '';
    const pageTitle = 'Article';
    const pageDescription = '技術記事';
    return (
        <Collection 
            currentMenu={currentMenu}
            currentCategory={currentCategory}
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            contents={props.contents}
        />
    )
}
export default CollectionPage

export async function getStaticProps() {
    const context = require.context('/tests/md/article/', true, /\.md$/)
    const contents = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            let slugs = key.slice(0, -3).slice(2).split('/')
            const value = values[index]
            const document = matter((value as ModuleWithDefault).default)
            return {
                frontmatter: document.data,
                category: slugs[0],
                slug: slugs[1],
            }
        })
        return data
    })(context)
    const sortingContents = contents.sort((b, a) => {
        return a.frontmatter.created_at - b.frontmatter.created_at
    });
    return {
      props: {
        contents: JSON.parse(JSON.stringify(sortingContents))
      }
    }
}

interface ModuleWithDefault {
    default: string;
}

