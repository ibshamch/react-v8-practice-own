// url ka unique part jese id , useQuery hamein object return jisme pehle se kuch properties hongi jese data , status
// useQuery ko custom hook main b dal k function pass kr skte ho or directly

import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../fetchBreedList";
export default function useBreedList(animal) {
  // koi b aesi chz jo url/fetch dalne se data change krde wo unique hai
  const results = useQuery(["breeds", animal], fetchBreedList);

  // breed ko data main dekho or data ko results object main dekho, agar in teeno main se koi b chz undefined ya null hai to empty [] return krdo index 0 main,

  return [results?.data?.breeds ?? [], results.status];
}
