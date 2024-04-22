import HelloDemo from './components/HelloDemo'
import Hello from './components/Hello'
import FruitsArray from './components/FruitsArray'
import FruitsObject from './components/FruitsObject'

function App() {
  const seatNumbers = [1, 2, 3];
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
      <Hello name = "sarath" message = "welcome to react" emoji=":P" seatNo={seatNumbers} />
      {/* We can send the properties as a object like this */}
      <Hello peroson={person} />
      <div>Keys are inserted in fruits list component and iterated to print different fruits</div>
      <FruitsArray />
      <FruitsObject />
    </>
  )
}

export default App
