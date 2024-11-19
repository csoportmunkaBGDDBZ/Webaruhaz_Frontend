import React from "react";
import Termek from "./Termek";

function Termekek() {
  return (
    <div className="row gap-2 d-flex justify-content-center">
      {termekLista.map((termek) => {
        return <Termek key={termek.id} termek={termek} />;
      })}
    </div>
  );
}

export default Termekek;
