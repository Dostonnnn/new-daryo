import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <p>
              “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot
              agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti
              Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar
              agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma
              bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli
              materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga,
              shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan
              foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan
              va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi
              yozuv ilova qilingan taqdirda yo‘l qo‘yiladi.
            </p>
          </div>
          <div className="footer-meta">
            <div className="footer-error">
              <span>Xato topdingizmi?</span>
              <kbd>Ctrl+Enter</kbd>’ni bosing
            </div>
            <div className="footer-age">
              <span className="age-badge">18+</span>
              <p>
                Chop etiladigan ba’zi ma’lumotlar 18 yoshga to‘lmagan
                foydalanuvchilarga mo‘ljallanmagan bo‘lishi mumkin.
              </p>
            </div>
            <div className="footer-email">
              <span>Elektron manzil:</span>
              <a href="mailto:info@daryo.uz">info@daryo.uz</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © «Simple Networking Solutions» MChJ, 2013–2026
          </div>
          <div className="footer-developer">
            Ishlab chiquvchi:Online Service Group
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
