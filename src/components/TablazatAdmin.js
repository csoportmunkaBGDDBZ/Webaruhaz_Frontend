import React, { useContext } from "react";
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
            <th scope="col1">Edit</th>
            <th scope="col1">Delete</th>
          </tr>
        </thead>
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
          </tbody>
      </table>
    </>
  );
}

export default TablazatAdmin;
