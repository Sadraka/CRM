import dbconnection from "@/app/utils/dbconnection";
import Customers from "@/models/Customers";
import { NextResponse } from "next/server";
export async function GET(req) {
  const url = new URL(req.url);
  const id = url.pathname.split("/")[3];

  try {
    await dbconnection();
    try {
      const customers = await Customers.findById(id);
      return NextResponse.json(
        { message: "success", data: customers },
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { message: "There was an error Getting data", error: err },
        { status: 500 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "connection to DB has beed failed" },
      { status: 500 }
    );
  }
}
export async function PATCH(req, { params }) {
  try {
    await dbconnection();
    try {
      const id = await params.edit;
      const data = await req.json();
      const customers = await Customers.findById(id);
      customers.name = data.name;
      customers.lastname = data.lastname;
      customers.phone = data.phone;
      customers.postalcode = data.postalcode;
      customers.products = data.products;
      customers.email = data.email;
      customers.address = data.address;
      customers.date = data.date;
      customers.UpdateAt = Date.now();
      customers.save();

      return NextResponse.json(
        { message: "success", status: 201, data },
        { status: 201 }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { message: "Updating data acourd Eror", err, staus: 401 },
        { status: 401 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "connection to DB has beed failed", status: 500 },
      { status: 500 }
    );
  }
}
