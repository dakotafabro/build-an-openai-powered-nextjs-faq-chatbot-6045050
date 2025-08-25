import { NextResponse } from "next/server";
import faqsData from "../../../data/faqs.json";

/**
 * Dakota: Simple file-backed data source is perfect at this stage of the course.
 * It gives us a stable API without introducing a database yet.
 */
export async function GET() {
  return NextResponse.json(faqsData);
}
