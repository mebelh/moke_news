import React from 'react'
import Link from 'next/link'
import {Body, Image, Title} from './styled'

function Post({title, description, author, urlToImage, publishedAt, content}) {
   return (
      <div >
         <Link href={'/news/[id]'} as={`/news/${publishedAt}`}>
            <Title>{title}</Title>
         </Link>
         <Body>{author}</Body>
         <Link href={'/news/[id]'} as={`/news/${publishedAt}`}>
            <Image src={urlToImage}/>
         </Link>
         <Link href={'/news/[id]'} as={`/news/${publishedAt}`}>
            <Body>{description}</Body>
         </Link>
         {publishedAt}
         <hr/>
      </div>
   )
}

export {Post}