import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: document.location.href.split('/')[3]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3002/api/sizes/${this.state.id}`)
      .then((res) => console.log('Successfully found item.', res))
      .catch((err) => console.error('GET FAILED', err));
  }

  render() {
    return (<h1>Hello</h1>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));