import { Suspense } from 'react'
import Link from 'next/link'

import PostShow from '@/components/posts/PostShow'
import CommentList from '@/components/comments/CommentList'
import CommentCreateForm from '@/components/comments/CommentCreateForm'
import paths from '@/paths'
import PostShowLoading from '@/components/posts/PostShowLoading'

interface PostShowPageProps {
  params: {
    slug: string
    postId: string
  }
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params

  return (
    <div className='space-y-3'>
      <Link
        className='capitalize decoration-solid'
        href={paths.topicShow(slug)}
      >
        {'< '}Back to {slug}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  )
}
