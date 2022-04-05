import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ExWeb() {
  const { url } = useParams();

  useEffect(() => {
    window.location.href = `https://${url}.netlify.app`;
  }, [url]);

  return (
    <div>
      <h2>loading</h2>
    </div>
  );
}

export default ExWeb;
