import { useState } from "react";

const useScroll = defaultValue => {
  const [currentTab, setCurrentTab] = useState(defaultValue);
  const onClickList = (index, ref) => {
    const tab = ref.current[index];
    const headerOffset = 200;
    const tabPosition = tab.getBoundingClientRect().top;
    const offsetPosition = tabPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setCurrentTab(tab);
  };
  return { currentTab, onClickList };
};

export default useScroll;
