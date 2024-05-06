import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark, vscDarkPlus, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from 'react-markdown/lib/ast-to-react'

const CodeBlock: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return <code className={className}>{children}</code>;
    }
    const match = /language-(\w+)/.exec(className || "");
    const param = match && match[1] ? match[1] : "";
    if(param == 'sa-link-text') {

    }
    else if(param == 'sa-link-card') {

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

