import React from "react";
import "/public/styles.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
