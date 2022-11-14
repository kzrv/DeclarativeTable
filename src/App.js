import logo from './logo.svg';
import './App.css';
import Error from "./components/Error";
import ListItem from "./components/list/ListItem";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import MyTable from "./components/list/MyTable";

function App() {

  const columns = [
    {
      attribute: "title"
    },
    {
      attribute: "id",
      component: (item) => <button>{item.id}</button>
    }
  ]
  return (
      <div className="App">
        <h1>Poznámky</h1>
        <MyTable uri={`http://localhost:3004/todos`} columns={columns} />
        <MyTable uri={`http://localhost:3004/todos`} columns={columns} />
      </div>
  );
}

export default App;
