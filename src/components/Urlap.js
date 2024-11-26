import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import { ApiContext } from "../context/ApiContext";

function Urlap() {
  const { katLista } = useContext(ApiContext);

  const [adat,setAdat] = useState({
    title: "Ez a termék neve",
    price: 100,
    category: "....",
    description: "Ez a termék leírása",
    image: ".....",
  });

  function valtoztatasKezeles(event){
    const segedObj = {...adat};
    segedObj[event.target.id] = event.target.value;
    setAdat({ ...segedObj })
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Termék neve
          </label>
          <input
            type="text"
            value={adat.title}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">
            Termék ára
          </label>
          <input
            type="number"
            min={100}
            max={100000}
            value={adat.price}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">
            Termék leírás
          </label>
          <textarea
            type="text"
            value={adat.description}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="description"
            aria-describedby="descriptionHelp"
            rows={3}
          />
        </div>
        <div>
          <Form.Select aria-label="Default select example">
           {/*  {katLista.map((kategoria, index) => {
              return (
                <option key={index} value={kategoria}>
                  {kategoria}
                </option>
              );
            })} */}
          </Form.Select>
          <button type="submit" class="btn btn-primary">
            Küldés
          </button>
        </div>
      </form>
    </div>
  );
}

export default Urlap;
