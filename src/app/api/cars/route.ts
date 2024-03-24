
import { NextRequest, NextResponse } from "next/server";
import cars from '@/data/cars.json';

export async function GET(request: NextRequest) {
    return NextResponse.json(cars)
}