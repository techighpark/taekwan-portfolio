import { useEffect, useRef, useState } from "react";

const useSticky = (defaultValue = false, listItem) => {
  const [fixedPosition, setFiexPosition] = useState(defaultValue);
  const stickyRef = useRef([]);
  useEffect(() => {
    const initialTop = stickyRef.current.getBoundingClientRect().top;
    const offSet = listItem ? 30 : 190;

    const handleScroll = () => {
      setFiexPosition(window.scrollY + offSet > initialTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [listItem]);
  return { fixedPosition, stickyRef };
};

export default useSticky;
