import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, vscDarkPlus, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import FullImage from '@/components/elements/FullImage';
import Image from '@/components/elements/Image';
import LinkCard from '@/components/elements/LinkCard';
import LinkText from '@/components/elements/LinkText';
import Youtube from '@/components/elements/Youtube';
import Badge from '@/components/elements/Badge';

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return <code className={className}>{children}</code>;
    }
    const match = /language-(\w+)/.exec(className || "");
    const param = match && match[1] ? match[1] : "";
    console.log(param);
    if(param == 'sa_link_text') {
        return (
            <LinkText
                menu={'devlog'}
                category={'MarkdownTest'}
                slug={'test'}
            />
        );
    }
    else if(param == 'sa_link_card') {
        return (
            <LinkCard
                menu={''}
                title={''}
                category={''}
                slug={''}
            />
        );
    }
    else if(param == 'sa_youtube') {
        return (
            <Youtube
                url={''}
            />
        );
    }
    else if(param == 'sa_full_image') {
        return (
            <FullImage
                url={''}
                alt={''}
            />
        );
    }
    else if(param == 'sa_image') {
        return (
            <Image
                url={''}
                alt={''}
            />
        );
    }
    else if(param == 'badge') {
        return (
            <Badge
                menu={String(children).replace(/\n$/, '')}
            />
        );
    }

    return (
        <SyntaxHighlighter
            style={coldarkDark}
            language={param}
            children={String(children).replace(/\n$/, '')}
        />
    );
};

export default CodeBlock;

