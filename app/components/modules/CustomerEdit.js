"use client";
import React, { useState } from "react";
import Form from "./Form";
import moment from "moment";

export default function CustomerEdit({ form, setForm }) {
  const newForm = moment(form.date).format("YYYY-MM-DD");
  // utc() ==> error while picking date
  console.log(newForm);
  form.date ? (form.date = newForm) : (form.date = "");
  return (
    <div>
      <Form form={form} setForm={setForm} />
    </div>
  );
}
