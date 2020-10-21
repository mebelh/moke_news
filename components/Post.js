import React from 'react'
import Link from 'next/link'
import {Body, Image, Title} from './styled'

function Post({title, description, author, urlToImage, publishedAt, content, id}) {
   console.log(id)
   return (
      <div >
         <Link href={'/news/[id]'} as={`/news/${id}`}>
            <Title>{title}</Title>
         </Link>
         <Body>{author}</Body>
         <Link href={'/news/[id]'} as={`/news/${id}`}>
            <Image src={urlToImage}/>
         </Link>
         <Link href={'/news/[id]'} as={`/news/${id}`}>
            <Body>{description}</Body>
         </Link>
         {publishedAt}
         <hr/>
      </div>
   )
}

export {Post}