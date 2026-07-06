import HeaderImages from "./HeaderImages/world-cup.png";
import Navbar from "../navbar/Navbar";
import "../navbar/Navbar.css";
function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <div className="forecast">☀️ 35°C Toshkent </div>
          <div className="bank">🏦 Milliy Bank</div>
          <ul className="exchange">
            <li className="exchange-rate">USD : 12,178.85 so'm</li>
            <li className="exchange-rate">EUR : 14,053.18 so'm</li>
            <li className="exchange-rate">RUB : 146.54 so'm</li>
          </ul>
        </div>
        <div className="header-right">
          <img src={HeaderImages} alt="World Cup" className="world-cup" />
          <select name="languages" id="languages">
            <option value="uzbek">O'zbekcha</option>
            <option value="russian">Ruscha</option>
            <option value="english">Inglizcha</option>
          </select>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
