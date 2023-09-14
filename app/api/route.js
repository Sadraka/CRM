import Customers from "@/models/Customers";
import dbconnection from "../utils/dbconnection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbconnection();
    try {
      const customers = await Customers.find();
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
export async function POST(req, { params }) {
  try {
    await dbconnection();

    try {
      const data = await req.json();
      console.log(data);
      const customers = new Customers(data);
      await customers.save();
      return NextResponse.json(
        { message: "success", customers },
        { status: 201 }
      );
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "connection to DB has beed failed", status: 500 },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await dbconnection();
    try {
      const { id } = await req.json();

      console.log(id);
      await Customers.findOneAndDelete({ _id: id });
      return NextResponse.json(
        { message: "Deleted data was Successfully", status: 200 },
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { message: "There was an error Deleting data", error: err },
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
