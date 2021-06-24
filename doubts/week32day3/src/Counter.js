import { useState, useEffect } from 'react';
let dateInterval;
const Counter = (props) => {

  const [state, setState] = useState({
    secoundcounter:0,
    count: props.count,
    dateTime: (new Date()).toTimeString()
  });

  // const abc = () => {
  //   clearInterval(dateInterval);
  // }

  // useEffect(() => {
  //   console.log("useeffect componentdidupdate")
  // })

  useEffect(() => {
    if (state.count >= 10) {
      console.log("useeffect componentdidupdate")
    }
  }, [state.count])

  useEffect(() => {
    console.log('2nd useEffect')
  }, []);

  useEffect(() => {
    console.log('1st useEffect')
    dateInterval = setInterval(() => {
      // setState({
      //   ...state,
      //   dateTime: (new Date()).toTimeString()
      // })
      // setState((s)=>(
      //   {...s,dateTime: (new Date()).toTimeString()}
      // ));
    }, 1000);
    return clearInterval(dateInterval);;
  }, []);

  useEffect(() => {
    console.log('3rd useEffect')
  }, []);

  const counterIncrement = (key) => {
    const name = key || 'count'
    // console.log(name)
    setState({
      ...state,
      [name]:state[name] + 1
    })

  }

  // const counterIncrement2 = () => {
  //   setState({
  //     ...state, secoundcounter: state.secoundcounter + 1
  //   })
  // }

  return (
    <div>
      <h4>{state.dateTime}</h4>
      {/* <button onClick={counterIncrement2}>Clicked {state.secoundcounter} times</button> */}
      <button onClick={() => counterIncrement("secondcounter") }>Clicked {state.secoundcounter} times</button>
      <button onClick={counterIncrement}>Clicked {state.count} times</button>
    </div>
  )
}

export default Counter
