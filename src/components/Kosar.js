import React from "react";
import KosarTermek from "./KosarTermek";
import Button from "react-bootstrap/Button";

function Kosar({ kosarLista }) {
  return (
    <>
      <div>
        {kosarLista.length === 0 ? (
          <div className="d-flex vh-100 w-100 justify-content-center pt-5">
            <h2 className="display-6 lead ">Üres a kosár!</h2>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div>
              {kosarLista.map((termek) => {
                return <KosarTermek key={termek.id} termek={termek} />;
              })}
            </div>
            <div>
              <Button variant="outline-primary">Rendelés!</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Kosar;
