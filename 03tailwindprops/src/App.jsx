import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: "John",
    age: 30,
  }
  
  let myArray = [1, 2, 3, 4, 5] 

  return (
    <>
    <h1 className='bg-blue-200 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
    <Card username="Ritik" btnText="click me"/>
    <Card username="Ritik Jangra" object={myObj} />
    </>
  )
}

export default App
