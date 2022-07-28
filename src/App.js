import {Route, Routes} from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  exact element={<Home/>}></Route>
        <Route path='/about'   element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
