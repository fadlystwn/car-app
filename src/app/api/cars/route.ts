
import { NextRequest, NextResponse } from "next/server";
import cars from '@/data/cars.json';

export async function GET(request: NextRequest) {
  const query = request.nextUrl.search.split('?').join('');
  const result = cars.filter(item => item.model.toLowerCase().includes(query?.toLowerCase()));

  if (query) {
    return NextResponse.json(result)

  } else {

    return NextResponse.json(cars)
  }

}