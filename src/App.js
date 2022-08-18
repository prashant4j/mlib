
import './App.css';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (

    <>

      <div className='app'>
        <Container>
          <BrowserRouter>
            <Header />
            {/* <Navigation /> */}
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movie" element={<Movies />} />
              <Route path="/search" element={<Search />} />
              <Route path="/series" element={<Series />} />
            </Routes>
          </BrowserRouter >
        </Container>
        {/* <Navbar /> */}
      </div>

    </>


  );
}
export default App;
