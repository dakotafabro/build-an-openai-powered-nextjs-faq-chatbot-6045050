import { NextResponse } from "next/server";
import faqsData from "../../../data/faqs.json";

export async function GET() {
  return NextResponse.json(faqsData);
}
