import React from 'react';
import Counter from './Counter';

class App extends React.Component {

  state = {
    title: 'Lifecycle Of Components',
    posts: [],
    showCounter: true,
    somekey: 0
  }

  componentDidMount() {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res=>res.json())
    //   .then(json=>this.setState({posts:json}))
  }

  componentDidUpdate(previousProps,previousState) {
    if(previousState.somekey!==1){
      this.setState({somekey:1})
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <ul>
          <li>initialisation: render</li>
          <li>mounting: componentDidMount</li>
          <li>updation: componentDidUpdate</li>
          <li>un-mounting: componentWillUnmount</li>
        </ul>
        <button onClick={()=>this.setState({showCounter: !this.state.showCounter})}>
          Toggle Counter
        </button>
        {this.state.showCounter && <Counter count={5} />}
        <div>
          {
            this.state.posts.map(data => {
              return <p key={data.id}>{data.title}</p>
            })
          }
        </div>
      </div>
    )
  }
}

export default App;
