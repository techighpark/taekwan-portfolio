import { useRef, useState } from "react";

const useScroll = defaultValue => {
  const portfolioRef = useRef([]);
  const [currentTab, setCurrentTab] = useState(defaultValue);
  const onClickList = index => {
    portfolioRef.current[index].scrollIntoView({ behavior: "smooth" });
    setCurrentTab(portfolioRef.current[index]);
  };
  return { portfolioRef, currentTab, onClickList };
};

export default useScroll;
