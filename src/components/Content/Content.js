import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title/Title";
import CustomizedTable from "./CustomizedTable/CustomizedTable";
import Api from "../../servises/api";

function Content() {
  
  const dataTitle = {
    name: "Task names",
  };
  
  const titlePage = {
    title: "TODO List is empty"
  };

  const [ dataTable, setDataTable ] = useState([]);
  let customTable;
  
  // Получение данных 
  useEffect(() => {
    const url = "http://localhost:3004/posts";
    axios(url)
      .then(res => {
        setDataTable(res.data);
      })
      .catch(console.error);
  }, []);

  // Удаление записи
  const handleDelete = React.useCallback((id) => {
    Api.deleteJsonRecord(id)
      .then(() => Api.getRequest())
      .then((res) => {
        setDataTable(res.data);
      });
  }, [id]);

  // Добавление записи

  // Редактирование записи

  if(dataTable.length) {
     titlePage.title = "TODO List";
     customTable = <CustomizedTable data={dataTable} title={dataTitle} deletejson={handleDelete} />;
  }

  return (
    <>
      <Title data={titlePage} />
      {customTable}
    </>
  );
}
export default Content;