"use client";
import React from "react";
import styles from "./CustomersDetails.module.css";
import { useRouter } from "next/navigation";
import moment from "moment/moment";
export default function CustomersDetails(data) {
  const { name, lastname, email, phone, address, postalcode, products, date } =
    data.data;
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch("/api/", {
      method: "DELETE",
      body: JSON.stringify({ id: data.data._id }),
      headers: { "Content-Type": "application/json" },
    });
    const mes = await res.json();
    console.log(mes);
    if (mes.status === 200) {
      router.replace("/");
    }
  };

  const editHandler = () => {
    router.push(`/editcustomer/${data.data._id}`);
  };
  return (
    <div className={styles.container}>
      <h1>Detail Page</h1>

      <div className={styles.box_1}>
        <p>
          Name : <span>{name}</span>
        </p>
        <p>
          Lastname : <span>{lastname}</span>
        </p>
        <p>
          Email : <span>{email}</span>
        </p>
        <p>
          Phone : <span>{phone}</span>
        </p>
        <p>
          Address : <span>{address}</span>
        </p>
        <p>
          Postalcode : <span>{postalcode}</span>
        </p>
        <p suppressHydrationWarning>
          Date : <span>{date && moment(date).utc().format("YYYY-MM-DD")}</span>
        </p>
      </div>
      <div className={styles.box_2}>
        <div className={styles.box_2_title}>
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>
        </div>
        {products.map((item, index) => (
          <div className={styles.box_2_item} key={index}>
            <p>{item.productName}</p>
            <span>{item.price}</span>
            <span>{item.Qty}</span>
          </div>
        ))}
      </div>
      <div className={styles.box_3}>
        <p>Edit or Delete</p>
        <div className={styles.box_3_button}>
          <button onClick={() => deleteHandler()}>Delete</button>
          <button onClick={() => editHandler()}>Edit</button>
        </div>
      </div>
    </div>
  );
}
