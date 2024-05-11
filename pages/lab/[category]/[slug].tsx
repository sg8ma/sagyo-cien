import matter from "gray-matter"
import { GetStaticPropsContext } from 'next';
import Single from '@/components/pages/Single';

interface Props {
    frontmatter: any;
    markdownBody: any;
    contents: any;
}

export const SinglePage = (props: Props) => {
    const currentMenu = 'lab';
    const pageTitle = props.frontmatter.title;
    const pageDescription = props.frontmatter.summary;
    return (
        <Single 
            currentMenu={currentMenu}
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            frontmatter={props.frontmatter}
            markdownBody={props.markdownBody}
            contents={props.contents}
        />

    )
}

export default SinglePage


export async function getStaticPaths() {
    const content = ((context) => {
        const keys = context.keys();
        const data = keys.map((key: string, index: number) => {
            let slugs = key.slice(0, -3).slice(2).split('/')
            return slugs
        })
        return data
    })(require.context('/tests/md/labs/', true, /\.md$/));
    const paths = content.map((slugs) => ({
        params: {
          category: slugs[0],
          slug: slugs[1],
        },
      }));
    return {
        paths: paths, 
        fallback: false,
    };
}

interface ModuleWithDefault {
    default: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {    
    const { category, slug } = context.params as {
        category: string;
        slug: string;
    };
    const data = await import(`/tests/md/labs/${category}/${slug}.md`)
    const document = matter(data.default)

    //allpage
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
    })(require.context('/tests/md/labs/', true, /\.md$/))
    const sortingContents = contents.sort((a, b) => {
        return b.frontmatter.created_at - a.frontmatter.created_at
    });

    return {
      props: {
        frontmatter: document.data,         
        markdownBody: document.content,     
        contents: JSON.parse(JSON.stringify(sortingContents)) 
      }
    }
}