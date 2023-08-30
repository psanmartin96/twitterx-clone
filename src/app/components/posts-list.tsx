import PostCard from '@/app/components/post-card'
import { type Post } from '../types/posts'

export default function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map(post => {
        const {
          id,
          user,
          content
        } = post

        const {
          avatar_url: avatarUrl,
          name: userFullName,
          user_name: userName
        } = user

        return (<PostCard
          avatarUrl={avatarUrl}
          content={content}
          key={id}
          userFullName={userFullName}
          userName={userName}
        />)
      })}
    </>
  )
}
