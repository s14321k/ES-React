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
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container> {/* Nested container : passing the FoodList as a props */}
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail />
        </InnerContainer>
      </Container>
    </>
  )
}

export default App