import React from "react";

const year = new Date().getFullYear();

function MyFooter() {
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default MyFooter;
