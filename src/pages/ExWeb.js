import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ExWeb() {
  const { title } = useParams();

  useEffect(() => {
    window.location.href = `http://${title}.netlify.app`;
  }, [title]);

  return (
    <div>
      <h2>loading</h2>
    </div>
  );
}

export default ExWeb;
