import { Divider } from '@nextui-org/react'

import PostCreateForm from '@/components/posts/PostCreateForm'
import PostList from '@/components/posts/PostList'
import { fetchPostsByTopicSlug } from '@/db/queries/posts'

interface TopicShowPageProps {
  params: {
    slug: string
  }
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-2xl font-bold mb-2 capitalize'>{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>

      <div className='border shadow py-3 px-2'>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}
