"use client";
import Form from "../modules/Form";
import { useState } from "react";
import styles from "./Addcustomer.module.css";
import { useRouter } from "next/navigation";
export default function Addcustomer() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    postalcode: "",
    date: "",
    products: [],
  });

  const saveHandler = async () => {
    const res = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "success") {
      router.push("/");
    }
  };
  const cancelHandler = () => {
    router.push("/");
  };
  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  return (
    <>
      <div className={styles.container}>
        <h1>Add Customers</h1>

        <Form form={form} setForm={setForm} />

        <div className={styles.button}>
          <button onClick={() => cancelHandler()} className={styles.cancel}>
            Cancel
          </button>
          <button onClick={() => saveHandler()} className={styles.save}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
