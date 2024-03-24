
import { NextRequest, NextResponse } from "next/server";
import cars from '@/data/cars.json';

export async function GET(request: NextRequest) {
    const url = request.nextUrl.pathname;
    const id = url.match(/\d+/)?.[0];

    const carDetails = cars.filter(item => item.car_id === `car${id}`)

    return NextResponse.json(carDetails)
}