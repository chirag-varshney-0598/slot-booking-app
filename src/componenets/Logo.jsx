import React from "react";

export default function Logo(props) {
  return (
    <img
      className="Logoimg"
      src={"/images/logo.png"}
      {...props}
      alt="site_logo"
    />
  );
}
