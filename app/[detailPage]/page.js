import React from "react";
import DetailPage from "../components/templates/DetailPage";

export default function page({ params }) {
  return (
    <>
      <DetailPage params={params} />
    </>
  );
}
