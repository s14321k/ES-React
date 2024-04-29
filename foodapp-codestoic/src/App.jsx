import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetail from './components/FoodDetail';


function App() {

  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("")
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container> {/* Nested container : passing the FoodList as a props */}
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  )
}

export default App