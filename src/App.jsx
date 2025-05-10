import './App.css'
import Header from './assets/components/header/Header';
import Navs from './assets/components/navbar/Navbar';
import About from './assets/components/about/About';
import Body from './assets/components/body/Body';
import Menu from './assets/components/menu/Menu';
import Special from './assets/components/special/Special'
import Slide from './assets/components/slidImage/Slide'
import Gallery from './assets/components/gallery/Gallery'
import Team from './assets/components/team/Team'
import Location from './assets/components/location/Location'
import Footer from './assets/components/footer/Footer'


function App() {

  return (
    <>
      <Navs />
      <Header />
      <About />
      <Body />
      <Menu />
      <Special />
      <Slide />
      <Gallery />
      <Team />
      <Location />
      <Footer />
    </>
  );
}

export default App
