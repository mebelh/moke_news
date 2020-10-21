import React from 'react'
import Link from 'next/link'
import {Body, Container, Image, Title} from '../../components/styled'
import {connect} from 'react-redux'
import {Navbar} from '../../components/Navbar'

function Post({data}) {
   const {title, description, author, urlToImage, publishedAt, content} = data[0]
   return (
      <Container>
         <Title>{title}</Title>
         <Navbar/>
         <Body>{author}</Body>
         <Image src={urlToImage}/>
         <Body>{description}</Body>
         <Body>{content}</Body>
         {publishedAt}
         <hr/>
      </Container>
   )
}

Post.getInitialProps = async (ctx) => {
   console.log(ctx.query)
   const request = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
   const json = await request.json()
   return {
      data: json['articles'].filter(el => el.publishedAt === ctx.query.id)
   }
}

const mapStateToProps = ({news}) => {
   return {
      news
   }
}

export default connect(mapStateToProps, null)(Post)