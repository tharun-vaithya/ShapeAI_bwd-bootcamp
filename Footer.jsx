import React from "react";

function Footer() {
  var curnyear = new Date().getFullYear();
  return (
    <footer>
      <p> copyright @ {curnyear} </p>
    </footer>
  );
}

export default Footer;
