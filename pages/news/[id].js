import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Body, Container, Image, Title} from '../../components/styled'
import {connect, useDispatch} from 'react-redux'
import {Navbar} from '../../components/Navbar'
import {useRouter} from 'next/router'
import {initializeStore} from '../../redux/store'
import {fetchNews} from '../../redux/actions'

function Post({newsData}) {
   const router = useRouter()
   useEffect(() => {
      !newsData.length && dispatch(fetchNews())
   }, [])
   const dispatch = useDispatch()
   console.log(newsData)
   const post = newsData.filter(p => {
      if(p.publishedAt === router.query.id){
         return p
      }
   })[0]
   console.log(post)
   const {title, description, author, urlToImage, publishedAt, content} = post || []
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


export function getServerSideProps() {
   const reduxStore = initializeStore()

   return { props: { initialReduxState: reduxStore.getState() } }
}

const mapStateToProps = ({newsData}) => {
   return {
      newsData
   }
}

export default connect(mapStateToProps, null)(Post)