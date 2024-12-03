import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);
  // const [kosarOsszeg, setKosarOsszeg] = useState(0);
  const { postAdat } = useContext(ApiContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function kosarba(termek) {
    console.log(termek);

    setKosarLista((elozoLista) => {
      const ujLista = [...elozoLista];

      const termekIndex = ujLista.findIndex((item) => item.id === termek.id);

      if (termekIndex !== -1) {
        ujLista[termekIndex].darab += 1;
        ujLista[termekIndex].ar =
          ujLista[termekIndex].price * ujLista[termekIndex].darab;
      } else {
        termek.darab = 1;
        termek.ar = termek.price;
        ujLista.push(termek);
      }

      console.log(ujLista);

      return ujLista;
    });
  }

  // function osszegSzamitas(ar) {
  //   // setKosarOsszeg((elozoOsszeg) => {
  //   //   let ujOsszeg = elozoOsszeg + ar;
  //   //   return ujOsszeg;
  //   // });
  // }

  function kosarTorles(id) {
    setKosarLista(kosarLista.filter((termek) => id !== termek.id));
  }

  function kosarElkuld() {
    setIsSubmitting(true);
    const elkuldLista = [];
    kosarLista.map((kosarSor) => {
      elkuldLista.push({ product_id: kosarSor.id, amount: kosarSor.darab });
    });

    postAdat("fill-basket", elkuldLista)
      .then(() => {
        setKosarLista([]);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Hiba:", error);
      });
  }

  return (
    <KosarContext.Provider
      value={{ kosarLista, kosarba, kosarTorles, kosarElkuld, isSubmitting }}
    >
      {children}
    </KosarContext.Provider>
  );
};
