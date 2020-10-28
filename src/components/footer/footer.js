import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// card images
import IPay from "../../images/i-pay.png";
import PayPal from "../../images/paypal.png";
import Master from "../../images/master.png";
import GooglePay from "../../images/google-pay.png";
import AMX from "../../images/amx.png";

import { Image } from "react-bootstrap";

function Footer() {
  return (
    <div>
      {/* follow section  */}
      <div className="row border-top" style={{ borderTop: 10 }}>
        <div className="col-xl-4 col-lg-4 col-sm d-flex flex-column mx-4 mt-4">
          <p style={{ fontFamily: "Arial", fontSize: 18,userSelect:'none' }}>Follow</p>
          <FacebookIcon className="m-3" style={{ fontSize: 45 }} />
          <InstagramIcon className="m-3" style={{ fontSize: 45 }} />
        </div>
        <div className="col-xl-7 col-lg-7 col-sm  d-flex flex-column mx-4 mt-4">
          <p style={{ fontFamily: "Arial", fontSize: 18, userSelect: "none" }}>
            Payment Methods
          </p>
          {/* list of cards  */}
          <div className="d-flex flex">
            <Image
              src={PayPal}
              className="mx-2"
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
            <Image
              src={IPay}
              className="mx-2"
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
            <Image
              src={Master}
              className="mx-2"
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
            <Image
              src={GooglePay}
              className="mx-2"
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
            <Image
              src={AMX}
              className="mx-2"
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
          </div>
          <p style={{userSelect:'none'}}>© 2020 Liberte Apparel | Engineered for the Modern Day Athlete.</p>
          <a href="#">Terms and Policy</a>
        </div>
      </div>
      {/* payment cards  */}
    </div>
  );
}

export default Footer;
