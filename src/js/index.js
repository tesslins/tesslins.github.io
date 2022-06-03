'use strict';

const e = React.createElement;

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // Default loads as the minimalist page.
    this.state = { minimalist: true, maximalist: false };
  }

  render() {
    return e(
      // HTML translation of the following:
      // <label class="toggle-switch">
      //   <input type="checkbox">
      //   <span class="slider round"></span>
      // </label>
      'label', {className: 'toggle-switch'}, [
        e('input', 
          { 
            type: 'checkbox',
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