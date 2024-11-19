import React from "react";
import { useContext } from "react";
import Kosar from "../components/Kosar";
import { ApiContext } from "../context/ApiContext";
import { KosarContext } from "../context/KosarContext";
import Termekek from "../components/Termekek";

function Public() {
  const { termekLista } = useContext(ApiContext);
  const { kosarLista } = useContext(KosarContext);
  return (
    <main className="row">
      <article className="col-lg-8">
        <h4>Termékek</h4>
        <Termekek termekLista={termekLista} />
      </article>
      <aside className="col-lg-4">
        <h4>Kosár</h4>
        {/* <Kosar kosarLista={kosarLista} /> */}
      </aside>
    </main>
  );
}

export default Public;
