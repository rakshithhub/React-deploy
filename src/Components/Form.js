import axios from "axios";
import React, { useState } from "react";

export const Form = () => {
    const [data,setData] = useState({});

    const handlechange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct()
    }

    const addProduct = async() => {
        const response = await axios.post('http://localhost:8080/product',data);
        console.log(response);

    }


  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            onChange={handlechange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            onChange={handlechange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={handlechange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="discountPercentage" className="form-label">
            DiscountPercentage
          </label>
          <input
            type="text"
            className="form-control"
            id="discountPercentage"
            name="discountPercentage"
            onChange={handlechange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            name="rating"
            onChange={handlechange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="brand" className="form-label">
            Brand
          </label>
          <input
            type="text"
            className="form-control"
            id="brand"
            name="brand"
            onChange={handlechange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            onChange={handlechange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            onChange={handlechange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};
