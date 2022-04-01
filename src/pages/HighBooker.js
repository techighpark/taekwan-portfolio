import { useEffect } from "react";

const HighBooker = () => {
  useEffect(() => {
    window.location.replace("https://high-booker.netlify.app/");
  }, []);
  return <div>Loding...</div>;
};

export default HighBooker;
