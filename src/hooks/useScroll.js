import { useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

const useScroll = (defaultValue, screenWidth) => {
  const [currentTab, setCurrentTab] = useState(defaultValue);
  const onClickList = (index, ref) => {
    const tab = ref.current[index];
    const headerOffset = screenWidth ? 250 : 150;
    const tabPosition = tab.getBoundingClientRect().top;
    const offsetPosition = tabPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    smoothscroll.polyfill();

    setCurrentTab(tab);
  };
  return { currentTab, onClickList };
};

export default useScroll;
