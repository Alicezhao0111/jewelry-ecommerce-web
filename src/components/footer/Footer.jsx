import React from "react";
import "./Footer.scss";
import sign from "../../assets/sign.png"

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="item">
          <h3>LET'S SHOP</h3>
          <span>ALL</span>
          <span>Earrings</span>
          <span>Bracelet</span>
          <span>Necklace</span>
          <span>Anklet</span>
          <span>Mama's bag</span>
        </div>
        <div className="item">
          <div className="shop">
            <h3>YOU CAN ALSO SHOP ON...</h3>
            <span>Shopee (Taiwan only)</span>
            <span>Pinkoi (Worldwide shipping)</span>
          </div>
          <div className="email">
            <h3>Email us</h3>
            <span>bohodaze.alice@gmail.com</span>
          </div>
        </div>
        <div className="item">
          <h3>QUICK LINK</h3>
          <span>About</span>
          <span>Blog</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="right">
      <div className="signature">
            <img src={sign} alt="" />
          </div>
        <div className="icon">

          <div className="ig">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9851 15.4445C14.6815 15.4445 16.8674 13.4546 16.8674 11.0001C16.8674 8.5455 14.6815 6.55566 11.9851 6.55566C9.28871 6.55566 7.10284 8.5455 7.10284 11.0001C7.10284 13.4546 9.28871 15.4445 11.9851 15.4445Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 15.4444V6.55553C1 3.4873 3.73234 1 7.10285 1H16.8674C20.2379 1 22.9702 3.4873 22.9702 6.55553V15.4444C22.9702 18.5126 20.2379 20.9999 16.8674 20.9999H7.10285C3.73234 20.9999 1 18.5126 1 15.4444Z"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M18.6982 4.90038L18.7111 4.8877"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="fb">
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.9256 6.94542V15.594C23.9256 18.5793 21.1933 20.9994 17.8228 20.9994H8.05823C4.68773 20.9994 1.95538 18.5793 1.95538 15.594V6.94542C1.95538 3.96011 4.68773 1.54004 8.05823 1.54004H17.8228C21.1933 1.54004 23.9256 3.96011 23.9256 6.94542Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.7199 20.9998C11.7199 17.7566 11.7199 14.5133 11.7199 11.2701C11.7199 8.90525 12.3302 6.9458 16.6022 6.9458"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.27875 12.3516H11.7199H16.6022"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="youtube">
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0929 11.2695L11.2481 14.0103V8.52881L15.0929 11.2695Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.91077 12.2393V10.3001C1.91077 6.33242 1.91077 4.34859 2.90546 3.07214C3.90016 1.79568 5.46617 1.74043 8.59817 1.62992C10.0823 1.57756 11.5983 1.54004 12.8959 1.54004C14.1935 1.54004 15.7095 1.57756 17.1936 1.62992C20.3256 1.74043 21.8916 1.79568 22.8863 3.07214C23.881 4.34859 23.881 6.33242 23.881 10.3001V12.2393C23.881 16.207 23.881 18.1908 22.8863 19.4672C21.8916 20.7437 20.3257 20.7989 17.1937 20.9095C15.7095 20.9619 14.1935 20.9994 12.8959 20.9994C11.5983 20.9994 10.0822 20.9619 8.59807 20.9095C5.46611 20.7989 3.90014 20.7437 2.90545 19.4672C1.91077 18.1908 1.91077 16.207 1.91077 12.2393Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <span>© 2023 Boho Daze All rights reserved</span>
      </div>
    </div>
  );
}

export default Footer;
