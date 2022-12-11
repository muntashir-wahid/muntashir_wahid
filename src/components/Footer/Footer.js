import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/waid.muntasir420"
          >
            <GrFacebook className="text-xl" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/muntashir-wahid/"
          >
            <BsLinkedin className="text-xl" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/8801703607476"
          >
            <FaWhatsappSquare className="text-xl" />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Muntashir Wahid</p>
      </div>
    </footer>
  );
};

export default Footer;
