import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);

  function kosarba(termek) {
    setKosarLista((elozoLista) => {
      const ujLista = [...elozoLista];
      ujLista.push(termek);
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
