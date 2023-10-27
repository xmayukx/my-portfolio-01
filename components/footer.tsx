import React from "react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className=" text-gray-300 mb-10 px-4 text-center">
      <small className="mb-2 text-xs">
        &copy; {year} Mayukh Hazari. All rights reserved.
      </small>
      <p className="text-xs font-semibold">
        Designed and built with ❤️ by{" "}
        <span className=" text-white">Mayukh Hazari</span>
      </p>
    </footer>
  );
}
