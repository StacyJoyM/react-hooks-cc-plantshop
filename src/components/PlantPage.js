import React , {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import plantsArr from "../db.json"

function PlantPage() {
  const [plants, setPlants ] = useState(plantsArr)
  const [search, setSearch] = useState("")

  function onSubmitPlant(newPlant){
    setPlants((prevPlants)=> [...prevPlants, newPlant])
  }

  function handleSearch(event){
    setSearch(event.target.value)
  }

  const plantsToDisplay= plants.filter((plant)=>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <main>
      <NewPlantForm 
      onSubmitPlant={onSubmitPlant}/>
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
