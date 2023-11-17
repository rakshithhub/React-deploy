import axios from "axios";
import React, { useEffect, useState } from "react";

export const Card = () => {
  const [pro, setPro] = useState([]);
  const [total, setTotal] = useState([]);
  const getApi = async () => {
    const response = await axios.get("http://localhost:8080/product");
    setPro(response.data);
    setTotal(response.data.length);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleSubmit = async(e) => {
    const field = e.target.value.split('.');
    console.log(field);
    const res = await axios.get(`http://localhost:8080/product?sort=${field[0]}&order=${field[1]}`);
    setPro(res.data);
  }
  const handleChange = async(page) => {
    const res = await axios.get(`http://localhost:8080/product?page=${page}`);
    setPro(res.data);
  }

  return (
    <>

      <select onChange={handleSubmit}>
        <option value="rating.desc">Rating High to low</option>
        <option value="rating.asc">Rating low to High</option>
        <option value="price.desc">Price High to low</option>
        <option value="price.asc">Price low to High</option>
      </select>
      {Array(Math.ceil(total/4)).fill(0).map((e,i) => (
        <button onClick={() => handleChange(i+1)}>{i+1}</button>
      ))}
      <div className="container">
        <div className="row">
          {pro.map((currElem, i) => {
            const {thumbnail,title,description,price,rating} = currElem;
            return (
              <div className="card" style={{ width: "18rem" }} key={currElem.id}>
                <img src={thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h5 className="card-title">{price}</h5>
                  <p className="card-text">{description}</p>
                  <h5 className="card-title">{rating}</h5>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
