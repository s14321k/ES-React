import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';


function App() {

  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container> {/* Nested container : passing the FoodList as a props */}
        <FoodList foodData={foodData} />
      </Container>
    </>
  )
}

export default App
