import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import TermekAdminSor from "./TermekAdminSor";
import { ApiContext } from "../context/ApiContext";

function TablazatAdmin() {
  const { termekLista } = useContext(ApiContext);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col1">ID</th>
            <th scope="col1">Title</th>
            <th scope="col1">Price</th>
            <th scope="col1">Description</th>
            <th scope="col1">Category</th>
          </tr>
          <tbody>
            {termekLista.map((termek) => {
              return (
                <TermekAdminSor
                  lista={termekLista}
                  termek={termek}
                  key={termek.id}
                />
              );
            })}
            ;
          </tbody>
        </thead>
      </table>
    </>
  );
}

export default TablazatAdmin;
