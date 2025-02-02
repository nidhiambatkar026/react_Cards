import {createRoot}  from  "react-dom/client";
import MenuCard from "./card";
import chinese from "./images/Chinese_items.jpg";
import south_indian from "./images/south_indian.avif";
import marathi_food from "./images/maharastrian_food.avif";
import { AddItem, Order } from "./card";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
      <MenuCard title="Chinese items" imagUrl={chinese} price={250}  rating={4.5}/>
      <MenuCard title="South Indian" imagUrl={south_indian} price={200}  rating={5}/>
      <MenuCard title="Maharashtrian Food" imagUrl={marathi_food} price={150}  rating={4.7}/>
    </>
)