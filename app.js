const { React, ReactDOM } = window;

const Markdown = ({ value, update }) => {
  return /*#__PURE__*/React.createElement("textarea", { rows: "22", type: "text", value: value, onChange: update, className: "markdwn", id: 'editor' });
};

const HTML = ({ markup }) => {
  return /*#__PURE__*/React.createElement("div", { id: 'preview', className: "markup", dangerouslySetInnerHTML: markup });
};

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `\# Heading

\#\# Sub-heading


Markdown style of [GitHub](http://github.com)

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

This is how \`\`\` code \`\`\` is represented inline.

Or how a block code is represented:

\`\`\`ES6
const test = () => {
 console.log("look ma’, no spaces");
}
\`\`\`

Shopping list:
* apples
* oranges
* pears

Numbered list:

1. apples
2. oranges
3. pears

Here is an image:

![GitHub Logo](/images/logo.png)

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Here is a block quote:

> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, neque dolor. Optio, sunt suscipit voluptate, debitis animi quasi sapiente et, tempore assumenda ipsam temporibus doloribus minima sit libero! Consequatur, necessitatibus!` };

    this.updateText = this.updateText.bind(this);
  }
  updateText({ target }) {
    this.setState({ value: target.value });
  }
  markup(value) {
    const markedUp = marked(value, { sanitize: true });
    return { __html: markedUp };
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
      React.createElement(Markdown, {
        value: this.state.value,
        update: this.updateText }), /*#__PURE__*/
      React.createElement(HTML, { markup: this.markup(this.state.value) })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Display, null),
document.querySelector("#root"));