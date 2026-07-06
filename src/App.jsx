import "./App.css";
import Header from "./components/header/Header";
import "./components/header/Header.css";
import Main from "./components/main/Main";
import Swiper from "./components/swiper/Swiper";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Swiper />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
