import { searchMovies } from '@/lib/tmdb'
import Link from 'next/link'
import { Suspense } from 'react'
import { SearchForm } from './search-form'

export default function SearchMoviePage({
  params: { query },
}: {
  params: { query: string[] | undefined }
}) {
  const query_ = decodeURIComponent(query?.[0] ?? '')

  return (
    <>
      <h1>Search Movies (2nd version)</h1>

      <SearchForm query={query_} />

      <Suspense fallback={<p>Loading…</p>}>
        <MovieResults query={query_} />
      </Suspense>
    </>
  )
}

async function MovieResults({ query }: { query: string }) {
  const movies = query ? await searchMovies(query) : []
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}
