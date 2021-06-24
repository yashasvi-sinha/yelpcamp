import { Component } from 'react';
class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
      dateTime: (new Date()).toTimeString()
    }
    this.counterIncrement = this.counterIncrement.bind(this);
  }

  componentDidMount() {
    this.dateInterval = setInterval(() => {
      this.setState({dateTime: (new Date()).toTimeString()})
    }, 1000);
  }

  componentDidUpdate() {
    console.log('[Counter componentDidUpdate]');
  }

  componentWillUnmount() {
    clearInterval(this.dateInterval);
  }

  counterIncrement(){
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    return (
      <>
        <h4>{this.state.dateTime}</h4>
        <button onClick={this.counterIncrement}>Clicked {this.state.count} times</button>
      </>
    )
  }
}

export default Counter;
