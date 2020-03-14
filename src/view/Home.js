import React, { useState, useEffect } from "react";
import { Objectives } from "../components";

const Home = () => {
  const [objectives, setobjectives] = useState([]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      async function fetchData() {
        const res = await fetch(
          "https://okrcentral.github.io/sample-okrs/db.json"
        );
        res.json().then(res => setobjectives(res.data));
      }
      fetchData();
    }

    return () => {
      mounted = false;
    };
  }, []);

  var newobjective = objectives.reduce(function(acc, curr) {
    var findIfIDExist = acc.findIndex(function(item) {
      return item.id === curr.parent_objective_id;
    });

    if (findIfIDExist === -1) {
      let obj = {
        id: curr.id,
        title: curr.title,
        value: [curr]
      };
      acc.push(obj);
    } else {
      acc[findIfIDExist].value.push(curr);
    }
    return acc;
  }, []);

  console.log(newobjective);

  return (
    <div>
      <Objectives objectives={newobjective} />
    </div>
  );
};

export default Home;
