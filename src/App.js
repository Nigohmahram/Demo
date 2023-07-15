import './App.css';
// import Book from './Book'
// import Loader from './Loader'
import {Component} from 'react';

// export default function App(props) {
//   return props.isLoading ? (
//     <Loader/>
//   ) : (
//     <div>
//     <Book name="Js for beginner" year="2021" price="50">
//       Extra inform
//     </Book>
//     <Book name="React for beginner" year="2022" price="60"/>
//     <Book name="Vue for beginner" year="2023" price="70"/>
//     </div>
//   )
// }

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      key: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    // this.setState({count: this.state.count + 1})
    // this.setState({count: this.state.count + 1})
    // this.setState({count: this.state.count - 1})
    // this.setState((prevState) => ({count: prevState.count + 15}))
    // this.setState((prevState) => ({count: prevState.count + 10}))
    // this.setState((prevState) => ({count: prevState.count + 10}))
  }
  handleClick = (val) => {
    this.setState({count: val})
  }
  // incr = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // decr = () => {
  //   this.setState({count: this.state.count - 1})
  // }
  resetCount = () => {
    this.setState({count: 0})
  }
  render(){
    return(
      <div className='App'>
      <h1>{this.state.count}</h1>
      <button className='block' onClick={() => this.handleClick(this.state.count + 1)}>incr</button>
      <button className='block_b' onClick={() => this.handleClick(0)}>Reset</button>
      <button className='block_i' onClick={() => this.handleClick(this.state.count - 1)}>decr</button>
      </div>
    )
  }
}
export default App;
