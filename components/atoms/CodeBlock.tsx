import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, vscDarkPlus, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from 'react-markdown/lib/ast-to-react'
import FullImage from '@/components/atoms/FullImage';
import Image from '@/components/atoms/Image';
import LinkCard from '@/components/atoms/LinkCard';
import LinkText from '@/components/atoms/LinkText';
import Youtube from '@/components/atoms/Youtube';

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return <code className={className}>{children}</code>;
    }
    const match = /language-(\w+)/.exec(className || "");
    const param = match && match[1] ? match[1] : "";
    if(param == 'sa-link-text') {
        return (
            <LinkText
                menu={''}
                title={''}
                category={''}
                slug={''}
            />
        );
    }
    else if(param == 'sa-link-card') {
        return (
            <LinkCard
                menu={''}
                title={''}
                category={''}
                slug={''}
            />
        );
    }
    else if(param == 'sa-youtube') {
        return (
            <Youtube
                url={''}
            />
        );
    }
    else if(param == 'sa-full-image') {
        return (
            <Image
                url={''}
                alt={''}
            />
        );
    }
    else if(param == 'sa-image') {
        return (
            <FullImage
                url={''}
                alt={''}
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

