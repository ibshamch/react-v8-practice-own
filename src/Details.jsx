import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetchPet";
const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  // useQuery hamein aik {data:} object return kregi jisme data property hogi or usi property main sara fetch kia hua saman hoga

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  console.log(results);
  const pet = results.data.pets[0];
  console.log(pet);

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
