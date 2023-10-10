import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import View from './Pages/View';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/view/:id' element={<View></View>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>


  );
}


export default App;
