"use client";
import React, { useEffect, useState } from "react";
import styles from "../home/Homepage.module.css";

import Card from "../../modules/Card";

export default function Homepage() {
  const [customer, setCustomer] = useState(false);

  useEffect(() => {
    fetch("/api/", { method: "GET" }, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setCustomer(data));
  }, []);

  if (!customer) {
    return <h1>loading ...</h1>;
  }
  if (customer.message === "success")
    return (
      <>
        <div className={styles.container}>
          {customer.data &&
            customer.data.map((item) => (
              <div key={item._id}>
                <Card item={item} />
              </div>
            ))}
        </div>
      </>
    );
  if (customer.status === 500) {
    return <h1>{customer.message}</h1>;
  }
}
