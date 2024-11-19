import React from "react";
import Table from 'react-bootstrap/Table';

function TablazatAdmin() {
  /* const { termekLista } = useContext(ApiContext); */
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th scope="col1">ID</th>
            <th scope="col1">Title</th>
            <th scope="col1">Price</th>
            <th scope="col1">Description</th>
            <th scope="col1">Category</th>
          </tr>
          +
          <tbody>
          {/*   {termekLista.map((termek) => {
            return <TermekekAdminSor lista={termekLista} termek={termek} key={termek.id}/>
        })}; */}
          </tbody>
        </thead>
      </Table>
    </>
  );
}

export default TablazatAdmin;
