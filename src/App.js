// import './App.css';
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
      count: 0
    }
  }
  handleClick = () => {
    this.setState((prevState) => ({count: prevState.count + 15}), () => {
      console.log('setState complated');
    })
    console.log('sdsdfsdfds');
    // this.setState((prevState) => ({count: prevState.count + 10}))
    // this.setState((prevState) => ({count: prevState.count + 10}))
  }
  render(){
    return(
      <div>
      <h1>Hello World</h1>
      <button onClick={this.handleClick} >{this.state.count}</button>
      </div>
    )
  }
}
export default App;
