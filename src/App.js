
import './App.css';
import { useState } from 'react';
// import foodCard from './components/Fooditem';

// screen of food items in a menu
// when you click a button it shows an image of the item 
// Have different buttons and whatever button you clicked show different food. 
// Have 

function App() {

  let foods = {
   mexican: '/food1.webp',
   chinese: '/chinese.jpeg',
   italian: '/italian.jpeg'
}

  const [show, setShow] = useState(true);
  const [food, setFood] = useState(foods.mexican);

  const toggleShow = () => {
    console.log(10);
    // setShow(!show);

    // let index = foods.indexOf(food);
    setFood(foods.chinese);
  }


  return (
    <div className="App-header">
      { show ? 
        <img src={food} alt='food'/>
        : null
      }
      

      <button onClick={toggleShow} >See Food Options</button> 
      

    </div>
    
  );
}

export default App;
