import React from "react";
import { MdOutlineLaptopMac } from "react-icons/md";

function IntroConnection() {
  return (
    <section className="intro-wrapper flex center">
      <div className="intro-content flex center col">
        <div className="img-connection"></div>
        <div className="intro-title">Keep your phone connected</div>
        <div className="subtitle">
          WhatsApp connects to your phone to sync messages. To reduce data
          usage, connect your phone to Wi-Fi.
        </div>
        <div className="more-txt">
          <MdOutlineLaptopMac/> Make calls from desktop with WhatsApp for Windows.
          <a href="https://www.whatsapp.com/download"> Get it here.</a>
        </div>
      </div>
    </section>
  );
}

export default IntroConnection;
