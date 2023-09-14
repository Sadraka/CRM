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
      { message: "connection to DB has beed failed", status: 500 },
      { status: 500 }
    );
  }
}
