import './App.css';
import Book from './Book'

export default function App() {
  return (
    <div>
    <Book name="Js for beginner" year="2021" price="50">
      Extra inform
    </Book>
    <Book name="React for beginner" year="2022" price="60"/>
    <Book name="Vue for beginner" year="2023" price="70"/>
    </div>
  )
}
