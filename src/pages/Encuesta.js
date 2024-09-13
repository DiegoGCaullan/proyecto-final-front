import React from "react";
import { useLoaderData } from "react-router-dom";

const Encuesta = () => {
  const { encuesta } = useLoaderData();

  console.log(encuesta);
  return (
    <div>
      <h2>Encuesta!!! </h2>
      <div>
        <h3>{encuesta.name}</h3>
      </div>
    </div>
  );
};

export default Encuesta;
