import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomizedTables from "./Table/Table";

function Content() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3004/posts";

    axios(url)
      .then(res => {
        setDataTable(res.data);
      })
      .catch(console.error);
  }, []);

  console.log(dataTable);

  return <CustomizedTables data={dataTable} />;
}

export default Content;
