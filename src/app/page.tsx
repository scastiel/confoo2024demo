import Link from 'next/link'

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/popular-movies-1">Popular Movies (1st version)</Link>
      </li>
      <li>
        <Link href="/popular-movies-2">Popular Movies (2nd version)</Link>
      </li>
      <li>
        <Link href="/search-movies">Search Movies (1st version)</Link>
      </li>
      <li>
        <Link href="/search-movies-2">Search Movies (2nd version)</Link>
      </li>
      <li>
        <Link href="/my-favorite-movies">My Favorite Movies</Link>
      </li>
    </ul>
  )
}
