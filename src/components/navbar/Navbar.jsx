function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo-text">Daryo</h2>
        <ul className="navbar-list">
          <li className="navbar-item">O'zbekiston</li>
          <li className="navbar-item">Markaziy Osiyo</li>
          <li className="navbar-item">Dunyo</li>
          <li className="navbar-item">Pul</li>
          <li className="navbar-item">Madaniyat</li>
          <li className="navbar-item">Sport</li>
          <li className="navbar-item">Layfstyle</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search">⌕</div>
        <button className="login">👤Login</button>
      </div>
    </nav>
  );
}
export default Navbar;
