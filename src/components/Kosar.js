import React, { useContext } from "react";
import KosarTermek from "./KosarTermek";
import Button from "react-bootstrap/Button";
import { KosarContext } from "../context/KosarContext";

function Kosar({ kosarLista }) {
  const { kosarElkuld, isSubmitting } = useContext(KosarContext);

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
              <Button
                onClick={kosarElkuld}
                variant="outline-primary"
                disabled={console.log(isSubmitting)}
              >
                Rendelés!
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Kosar;
