import Image, { StaticImageData } from 'next/image'

type PostProps = {
  id: string
  date: string
  title: string
  image: string | StaticImageData
  href?: string
}

function BigPostCard({ post }: { post: PostProps }) {
  return (
    <article className="mb-[clamp(24px,3vw,36px)]">
      <Image
        width={640}
        height={245}
        src={post.image}
        alt={post.title}
        sizes="(min-width:1024px) 640px, 100vw"
      />
      <time className="font-plex mt-3 block text-base leading-[30px]">
        {post.date}
      </time>
      <h3 className="font-gilroy mt-1.5 text-[clamp(18px,1.6vw,22px)] leading-[33px] font-bold">
        {post.title}
      </h3>
    </article>
  )
}

export default BigPostCard
