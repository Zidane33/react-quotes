import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    }

    this.newQuote = this.newQuote.bind(this);
  }
  
  async random() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    this.setState({quote: data.content, author: data.author})
  }

  newQuote() {
    this.random()
  }

  componentDidMount(){
    this.random()
  }

  render(){
    return (
      <div id="quote-box">
        <div id='text'>
          {this.state.quote}
        </div>
        <div id='author'>
          {this.state.author}
        </div>
        <div id="new-quote">
          <button onClick={this.newQuote}>New Quote</button>
        </div>
        <div>
          <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text="+encodeURIComponent(this.state.quote)+' -- ' + encodeURIComponent(this.state.author)}>Tweet this</a>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
export default App;
