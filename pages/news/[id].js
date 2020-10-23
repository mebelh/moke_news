import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Body, Container, Image, Title} from '../../components/styled'
import {connect} from 'react-redux'
import {Navbar} from '../../components/Navbar'
import {useRouter} from 'next/router'

function Post({post}) {
   const [data, setData] = useState(post)
   const router = useRouter()
   useEffect(() => {
      async function load() {
         try {
            const request = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
            const json = await request.json()
            setData(
               json['articles'].filter(el => el.publishedAt === router.query.id)
            )
         } catch (e) {
            throw e
         }
      }

      if (!post) {
         load()
      }
   }, [])
   const {title, description, author, urlToImage, publishedAt, content} = data ? data[0] : []
   return (
      <Container>
         <Head>
            <title>{title}</title>
         </Head>
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

Post.getInitialProps = async ({query, req}) => {
   if (!req) {
      return {
         data: null
      }
   }
   const request = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
   const json = await request.json()
   return {
      data: json['articles'].filter(el => el.publishedAt === query.id)
   }
}

const mapStateToProps = ({news}) => {
   return {
      news
   }
}

export default connect(mapStateToProps, null)(Post)