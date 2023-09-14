"use client";
import React from "react";
import styles from "../modules/Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/addcustomer");
  };
  return (
    <>
      <div className={styles.container}>
        <Link href={{ pathname: "/" }}>
          <h1>CRM</h1>
        </Link>

        <button onClick={() => clickHandler()}>Add customer</button>
      </div>
    </>
  );
}
