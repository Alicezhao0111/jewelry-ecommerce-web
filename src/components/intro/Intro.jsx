import React from "react";
import "./intro.scss";
import intro from "../../assets/intro.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="left">
          <div className="title">
            <div className="title-top">
              <h3>About</h3>
              <h3>關於我們</h3>
            </div>
            <div className="title-bottom">
              <h3>Boho Daze</h3>
            </div>
          </div>
          <div className="text">
            <div className="chn">
              <p>
              Boho Daze 的飾品，是獻給所有身處在這變動時代的自由靈魂。 <br />
                Boho Daze主理人Alice，曾經在韓國、澳洲、印尼長期旅居，並將旅遊經驗、所見所聞化為靈感，再運用古老的花邊結技巧(Macrame)，編織成各類波希米亞飾品。<br />
                Boho Daze每件飾品的背後都賦予著一個意義，身處在社會主流觀念為追求穩定工作、穩定人生的時代，相信許多自由靈魂們在成長過程中，會不斷的自我懷疑，我們希望戴上Boho
                Daze飾品的你們，在感到情緒低落的時候，看著它們就能再次憶起初衷，並得到安慰與勇氣，朝著理想的目標前進。
              </p>
            </div>
            <div className="eng">
              <p>
                I'm Alice, the owner of Boho Daze, based in Taiwan. Traveling
                has always been a passion of mine. From each journey, I draw
                inspiration from every little moment and transform them into
                bohemian accessories through the ancient art of macramé
                knotting. Each piece of Boho Daze jewelry carries a meaningful
                purpose. In a society where the mainstream emphasis is on
                pursuing stable jobs and lives, we understand that many free
                spirits, like myself, often find themselves questioning their
                path during their journey of growth. We hope that when you wear
                our jewelry, it serves as a comforting reminder in times of
                emotional lows, reigniting your initial passion and providing
                you the courage to move towards your ideal goals.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={intro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
