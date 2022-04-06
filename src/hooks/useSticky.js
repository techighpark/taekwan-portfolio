import { useEffect, useRef, useState } from "react";

const useSticky = (defaultValue = false) => {
  const [fixedPosition, setFiexPosition] = useState(defaultValue);
  const stickyRef = useRef([]);
  useEffect(() => {
    const initialTop = stickyRef.current.getBoundingClientRect().top;
    console.log(initialTop);
    console.log(window.scrollY);

    const handleScroll = () => {
      setFiexPosition(window.scrollY + 190 > initialTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { fixedPosition, stickyRef };
};

export default useSticky;
