import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);
  // const [kosarOsszeg, setKosarOsszeg] = useState(0);

  function kosarba(termek) {
    setKosarLista((elozoLista) => {
      const ujLista = [...elozoLista];
      if (ujLista.includes(termek)) {
        termek.darab = termek.darab + 1;
        termek.ar = termek.price * termek.darab;
      } else {
        termek.ar = termek.price;
        termek.darab = 1;
        ujLista.push(termek);
      }
      return ujLista;
    });
  }
  function kosarTorles(id) {
    setKosarLista(kosarLista.filter((termek) => id !== termek.id));
  }

  return (
    <KosarContext.Provider value={{ kosarLista, kosarba, kosarTorles }}>
      {children}
    </KosarContext.Provider>
  );
};
