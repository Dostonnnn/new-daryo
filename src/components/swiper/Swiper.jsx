import "./Swiper.css";
function Swiper() {
  return (
    <div className="swiper main-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-card">
            <img src="https://picsum.photos/800/450" alt="Yangilik" />
            <div className="slider-content">
              <h2 className="slider-title">
                O‘zbekistonda qaysi yoshdagi aholi soni eng ko‘pligi ma‘lum
                bo‘ldi
              </h2>
              <p className="slider-text">
                O‘zbekistonda yosh guruhi jihatidan aholining eng ko‘p ulushini
                0-4 yoshlilar tashkil etadi. Bu haqda Statistika qo‘mitasi xabar
                berdi.
              </p>
              <span className="date">Bugun, 00:10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}

export default Swiper;
