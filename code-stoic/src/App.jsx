import HelloDemo from './components/HelloDemo'
import Hello from './components/Hello'
import FruitsArray from './components/FruitsArray'
import FruitsObject from './components/FruitsObject'
import UseStateCount from './components/UseStateCount'
import UseStateObject from './components/UseStateObject'

function App() {
  const seatNumbers = [2, 3, 1];
  const person = {
    typess : "perosn object",
    name : "sarath kumar",
    message : "please have a seat",
    emoji : ":)",
    seatNo : seatNumbers
}
  return (
    <>
      <HelloDemo />
      <Hello name = "sarath" message = "welcome to react" emoji=":P" seatNo={seatNumbers} propsCondition="true"/>
      {/* We can send the properties as a object like this */}
      <Hello peroson={person} />
      <FruitsArray />
      <FruitsObject />
      <UseStateCount />
      <UseStateObject />
    </>
  )
}

export default App
