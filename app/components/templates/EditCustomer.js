"use client";
import styles from "./EditCustomer.module.css";
import React, { useEffect, useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/navigation";
import CustomerEdit from "../modules/CustomerEdit";

export default function EditCustomer({ id }) {
  const [form, setForm] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/edit/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setForm(data.data));
  }, []);

  const detailHanlder = () => {
    router.push(`/${id}`);
  };
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (data.status === 201) {
      router.push("/");
    }
  };
  if (form)
    return (
      <>
        <CustomerEdit form={form} setForm={setForm} />
        <div className={styles.container}>
          <button onClick={() => detailHanlder()}>Detail</button>
          <button onClick={() => editHandler()}>Edit</button>
        </div>
      </>
    );
}
