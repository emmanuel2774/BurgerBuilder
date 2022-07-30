import {Route, Routes} from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  exact element={<Home/>}></Route>
        <Route path='/about'   element={<About/>}></Route>
        <Route path='/orders'   element={<Orders/>}></Route>
        <Route path='/BurgerBuilder'   element={<BurgerBuilder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
