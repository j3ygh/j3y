import Highlight, { defaultProps } from "prism-react-renderer";
import themeDark from "./themeDark";

const CodeBlockDark = ({ children }) => {
  const code = children.props.children.trim();
  const className = children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang || "";
  return (
    <div className="relative">
      <span className="text-xs absolute -top-2 right-2 text-pencil select-none">
        {language ? language.toUpperCase() : ""}
      </span>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={themeDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlockDark;
