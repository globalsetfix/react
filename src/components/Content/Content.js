import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title/Title";
import CustomizedTable from "./CustomizedTable/CustomizedTable";


function Content() {
  const dataTitle = {
    name: "Task names",
    
  };
  
  const titlePage = {
    title: "TODO List is empty"
  };

  const [dataTable, setDataTable] = useState([]);
  let customTable;
  

  useEffect(() => {
    const url = "http://localhost:3004/posts";
    axios(url)
      .then(res => {
        setDataTable(res.data);
      })
      .catch(console.error);
  }, []);

  if (dataTable.length) {
    titlePage.title = "TODO List";
    customTable = <CustomizedTable data={dataTable} title={dataTitle} />;
     
  }

  return (
    <>
      <Title data={titlePage} />
      {customTable}
    </>
  );
}


export default Content;
