import { fetchMovies } from '@/lib/tmdb'
import { NextResponse } from 'next/server'

export async function GET() {
  const movies = await fetchMovies()
  return NextResponse.json(movies)
}
