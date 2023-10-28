import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuCard from "../Compnents/Cards/menuCard";
import WifiLoader from "../Compnents/Loaders/WifiLoader";
import "./Menu.css";
function Menu() {
  const [filteredMenuItems, setfilteredMenuItems] = useState([]);
  const [MenuItems, setMenuItems] = useState([]);

  function filterData(e) {
    const data = MenuItems.filter((items) => {
      return items.type.includes(e.target.value);
    });
    setfilteredMenuItems(data);
  }
  useEffect(() => {
    axios
      .get("http://localhost:3500/menu")
      .then((response) => {
        console.log(response.data);
        setMenuItems(response.data);
        setfilteredMenuItems(response.data);
      })
      .catch((err) => {
        if (!err.response) {
          alert("server not working");
        } else {
          alert("something went wrong");
        }
      });
  }, []);
  return MenuItems.length === 0 ? (
    <WifiLoader />
  ) : (
    <>
      <div className="filter-btns">
        <div>
          <input type="radio" value="" name="filter" onClick={filterData} />
          <span>All</span>
        </div>
        <div>
          <input
            type="radio"
            value="Starter"
            name="filter"
            onClick={filterData}
          />
          <span>Starters</span>
        </div>
        <div>
          <input
            type="radio"
            value="Breakfast"
            name="filter"
            onClick={filterData}
          />
          <span>Breakfast</span>
        </div>
        <div>
          <input type="radio" value="Biryani" name="filter" />
          <span>Biryani</span>
        </div>
      </div>
      <div className="restarents">
        {filteredMenuItems.map((cardItem, index) => {
          return (
            <Link to={`single/${cardItem.id}`} key={index + 1}>
              <MenuCard {...cardItem} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
