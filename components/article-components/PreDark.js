import Highlight, { defaultProps } from "prism-react-renderer";

const theme = {
  plain: {
    color: "#9CDCFE",
    // Changed
    backgroundColor: "#121C26",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment"],
      style: {
        // Changed
        color: "rgb(128, 128, 128)",
        // Changed
        fontStyle: "italic",
      },
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)",
      },
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "rgb(206, 145, 120)",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)",
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
  ],
};

const PreDark = ({ children }) => {
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
        theme={theme}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="p-5 text-sm overflow-x-scroll" style={style}>
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

export default PreDark;