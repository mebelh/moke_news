import React from 'react'
import styled from 'styled-components'
import {Post} from './Post'
import {Title} from './styled'

function Posts({title, description, author, urlToImage, publishedAt, index}) {

   styled(Post)

   return (
      <div>
         <Title>{title}</Title>
         <Image src={urlToImage}/>
         <Body>{description}</Body>
      </div>
   )
}

Posts.getInitialProps = ({title, body}) => {
   return {
      title,
      body
   }
}

export {Post}

export function createPost(props) {
   return <Post {...props} />
}