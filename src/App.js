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
      key: true,
      // data: 'Usmonov Khojikbar'
      post: [],
      loading: true,
      comment: []

    }
    this.handleClick = this.handleClick.bind(this)
  }

  // getData() {
  //   setTimeout(() => {
  //     console.log('Our data is updata');
  //     this.setState({data: 'Jon Doe'})
  //   }, 3000)
  // }
  componentDidMount(){
    // this.getData  ()
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading: false}))

      this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => this.setState({comment: data}))
      }, 3000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  handleClick = () => {
    // this.setState({count: this.state.count + 1})
    // this.setState({count: this.state.count + 1})
    // this.setState({count: this.state.count - 1})
    // this.setState((prevState) => ({count: prevState.count + 15}))
    // this.setState((prevState) => ({count: prevState.count + 10}))
    // this.setState((prevState) => ({count: prevState.count + 10}))
  }
   handleClick = (val) => {this.setState({count: val})}
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
      {this.state.loading ?  <h3>Lodading...</h3> : <h3>{this.state.posts.length} Was Loaded, and have {this.state.comment.length} comments</h3>}
      <h1>{this.state.count}</h1>
      <button className='block' onClick={() => this.handleClick(this.state.count + 1)}>incr</button>
      <button className='block_b' onClick={() => this.handleClick(0)}>Reset</button>
      <button className='block_i' onClick={() => this.handleClick(this.state.count - 1)}>decr</button>
      </div>
    )
  }
}
export default App;
