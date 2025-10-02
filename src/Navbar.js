import { useState, useEffect } from "react";

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // runs once

  return (
    <nav>
      <h1>My App</h1>
      <p>Window width: {width}px</p>
    </nav>
  );
}
