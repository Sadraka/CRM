import { useRef } from "react";
import styles from "../modules/Forminput.module.css";
import moment from "moment";
export default function Forminput(data) {
  const input = useRef(null);
  const focusHandler = () => {
    input.current.showPicker();
    //mohem
  };

  return (
    <div className={styles.container}>
      <label htmlFor={data.label}>{data.label}</label>
      <input
        onChange={data.onChange}
        name={data.name}
        id={data.label}
        type={data.type}
        value={data.value}
        onFocus={data.label === "date" ? () => focusHandler() : null}
        ref={data.label === "date" ? input : null}
      />
    </div>
  );
}
