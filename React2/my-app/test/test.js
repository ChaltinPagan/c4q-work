const React = require('react');
const ReactDom = require('react-dom');

class Test extends React.Component {
    render() {
        return (
        <h1>This is a test</h1>
        )
    }
}

ReactDom.render(
    <Test />,
    document.getElementById('root')
);