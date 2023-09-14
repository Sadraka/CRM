"use client";
import React, { useState } from "react";
import styles from "./Itemlist.module.css";
import Forminput from "./Forminput";
export default function Itemlist({ form, setForm }) {
  const addHandler = () => {
    setForm({
      ...form,
      products: [
        ...form.products,
        {
          productName: "",
          price: "",
          Qty: "",
        },
      ],
    });
  };
  const deleteHandler = (index) => {
    const newProducts = [...form.products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });

    // newProducts.splice(e)
  };
  const changeHander = (e, index) => {
    const newProducts = [...form.products];
    newProducts[index][e.target.name] = e.target.value;
    setForm({ ...form, products: newProducts });
  };

  return (
    <>
      <div className={styles.container}>
        <h3>Products List</h3>
        {form.products &&
          form.products.map((item, index) => (
            // console.log(index),
            <div className={styles.input} key={index}>
              <div className={styles.name}>
                <Forminput
                  label="product Name"
                  name="productName"
                  type="text"
                  value={item.productName}
                  onChange={(e) => changeHander(e, index)}
                />
              </div>

              <div className={styles.price}>
                <Forminput
                  label="price"
                  name="price"
                  type="text"
                  value={item.price}
                  onChange={(e) => changeHander(e, index)}
                />
                <Forminput
                  label="Qty"
                  name="Qty"
                  type="number"
                  value={item.Qty}
                  onChange={(e) => changeHander(e, index)}
                />
              </div>
              <button onClick={() => deleteHandler(index)}>Delete Item</button>
            </div>
          ))}
        <div className={styles.addItemButton}>
          <button onClick={() => addHandler()}>Add Item</button>
        </div>
      </div>
    </>
  );
}
