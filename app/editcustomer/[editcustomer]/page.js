import EditCustomer from "@/app/components/templates/EditCustomer";
import React from "react";

export default function page({ params }) {
  const { editcustomer } = params;

  return (
    <div>
      <EditCustomer id={editcustomer} />
    </div>
  );
}
