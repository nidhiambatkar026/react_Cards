import {createRoot}  from  "react-dom/client";
import MenuCard from "./card";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
      <MenuCard title="Chinese items" imagUrl="./src/images/Chinese_items.jpg" isVeg="yes" price={250}  rating={4.5}/>
      <MenuCard title="South Indian" imagUrl="./src/images/south_indian.avif" isVeg="yes" price={200}  rating={5}/>
    </>
)