import React from "react";
import EncuestaCard from "../components/EncuestaCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { encuestas } = useLoaderData();
  console.log(encuestas);
  return (
    <>
      <div className="container my-5 text-center">
        <h2 className="py-5 text-danger">
          Encuestas de los juegos mas populares
        </h2>
        <div className="row">
          {encuestas.map((encuesta) => (
            <EncuestaCard key={encuesta._id} encuesta={encuesta} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
