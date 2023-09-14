import React from "react";
import Forminput from "./Forminput";
import Itemlist from "./Itemlist";
import styles from "./Form.module.css";
export default function Form({ form, setForm }) {
  const array = Object.keys(form).filter(
    (item) =>
      item !== "products" &&
      item !== "_id" &&
      item !== "CreateAt" &&
      item !== "UpdateAt" &&
      item !== "__v"
  );
  const changeHander = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className={styles.container}>
      {array.map((item) => (
        <div key={item} className={styles.input}>
          <Forminput
            label={item}
            value={form[item]}
            onChange={(e) => changeHander(e)}
            type={item === "date" ? "date" : "text"}
          />
        </div>
      ))}
      <Itemlist form={form} setForm={setForm} />
    </div>
  );
}
