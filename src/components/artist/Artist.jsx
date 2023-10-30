import React from "react";
import "./Artist.scss";
import artist from "../../assets/artist.png";
import artist2 from "../../assets/artist2.png";
import artist3 from "../../assets/artist3.png";

const Artist = () => {
  return (
    <div className="artist">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={artist} alt="" />
          </div>
          <div className="right">
            <div className="content">
              <h2>Meet the Artist</h2>
              <p>
                I’m Alice, the owner of Boho Daze, based in Taiwan. Traveling is
                more than just a hobby for me; it's a source of inspiration. I
                take the little moments from each journey and transform them
                into bohemian accessories through the ancient art of macramé
                knotting. In every design at Boho Daze, you'll find reflections
                of beautiful nature and the essence of a free spirit.
              </p>
              <div className="button">
                <span>Learn More</span>
                <svg
                  width="31"
                  height="8"
                  viewBox="0 0 31 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z"
                    fill="#B14E31"
                  />
                </svg>
              </div>
            </div>
            <div className="pic">
                <img src={artist2}alt="" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <h3>Handmade with love and good vibes</h3>
          <img src={artist3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Artist;
