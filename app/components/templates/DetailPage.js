"use client";
import React, { useEffect, useState } from "react";
import CustomersDetails from "../modules/CustomersDetails";
import { notFound } from "next/navigation";
export default function DetailPage({ params }) {
  const { detailPage } = params;
  const [customer, setCustomer] = useState("");
  const [notFount, setNoutFount] = useState(false);

  useEffect(() => {
    fetch(`/api/get/${detailPage}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          setCustomer(data.data);
        } else {
          setNoutFount(true);
        }
      });
  }, []);

  if (customer) {
    return <CustomersDetails data={customer} />;
  }
  if (notFount) {
    notFound();
  }
}
