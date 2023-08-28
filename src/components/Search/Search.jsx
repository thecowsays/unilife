import axios from "axios";

import SearchCSS from "./Search.module.css";
import { useEffect, useState } from "react";

function Search() {
  // when I select a city, I want to see the details for that city
  // how to select a city? build the ui
  // endpoint: https://unilife-server.herokuapp.com/cities
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // make api call to find all city names
    axios
      .get(`https://unilife-server.herokuapp.com/cities`)
      .then((res) => {
        // console.log(res.data.response);
        const citiesList = [];

        res?.data?.response?.map((city) => {
          citiesList.push(city.name);
          setCities(citiesList);
        });
        // console.log(`my array: ${citiesList}`);
      })
      .catch((err) => console.log(err));
  }, []);

    

  return (
    <div className={SearchCSS.container}>
      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default Search;
