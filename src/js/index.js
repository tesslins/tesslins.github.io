// Based on the tutorial at https://reactjs.org/docs/add-react-to-a-website.html & https://upmostly.com/tutorials/build-a-react-switch-toggle-component
'use strict';

// https://reactjs.org/docs/react-api.html#createelement
const e = React.createElement;

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // Default loads as the minimalist page.
    this.state = { minimalist: true, maximalist: false };
  }

  render() {
    return e(
      'label', {className: 'toggle-switch'}, [
        e('checkbox', 
          { 
            checked: () => this.setState({ maximalist: true }), 
            onChange: () => null 
          }, 
          null),
        e('span', {className: 'slider round'}, null)
      ]
    );
  }
}

const domContainer = document.querySelector('#toggle-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Toggle));