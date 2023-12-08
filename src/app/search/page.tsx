import { redirect } from 'next/navigation'

import PostList from '@/components/posts/PostList'
import { fetchPostsBySearchTerm } from '@/db/queries/posts'

interface SearchPageProps {
  searchParams: {
    term: string
  }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams

  if (!term) {
    redirect('/')
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  )
}
