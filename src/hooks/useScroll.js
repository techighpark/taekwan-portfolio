import { useRef, useState } from "react";

const useScroll = defaultValue => {
  const portfolioRef = useRef([]);
  const [currentTab, setCurrentTab] = useState(defaultValue);
  const onClickList = index => {
    const tab = portfolioRef.current[index];
    const headerOffset = 200;
    const tabPosition = tab.getBoundingClientRect().top;
    const offsetPosition = tabPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setCurrentTab(tab);
  };
  return { portfolioRef, currentTab, onClickList };
};

export default useScroll;
