"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/navigation";

export default function Card({ item }) {
  const [del, setDel] = useState();

  const data = item;
  const deleteHandler = async () => {
    const res = await fetch("/api/", {
      method: "DELETE",
      body: JSON.stringify({ id: data._id }),
      headers: { "Content-Type": "application/json" },
    });
    const mes = await res.json();
    console.log(mes.status);
    if (mes.status === 200) {
      setDel(true);
    }
  };
  const router = useRouter();
  const editHandler = () => {
    router.push(`/editcustomer/${data._id}`);
  };
  const detailHandler = () => {
    router.push(`/${item._id}`);
  };
  if (!del) {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.name}>
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>
          <div className={styles.button}>
            <button onClick={() => deleteHandler()}>Delete</button>
            <button onClick={() => editHandler()}>Edit</button>
            <button onClick={() => detailHandler()}>Details</button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
