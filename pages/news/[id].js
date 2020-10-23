import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Body, Container, Image, Title} from '../../components/styled'
import {connect, useDispatch} from 'react-redux'
import {Navbar} from '../../components/Navbar'
import {useRouter} from 'next/router'
import {initializeStore} from '../../redux/store'
import {FETCH_NEWS, LOAD_NEWS} from '../../redux/types'

function Post({newsData}) {
   const router = useRouter()

   const post = newsData.filter(p => {
      if(p.publishedAt === router.query.id){
         return p
      }
   })[0]
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


export async function getServerSideProps() {
   const reduxStore = initializeStore()

   const load = async ()=>{
      const res = await fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
      const posts = await res.json()
      reduxStore.dispatch({
         type: FETCH_NEWS,
         payload: posts['articles']
      })
      reduxStore.dispatch({
         type: LOAD_NEWS
      })
   }
   await load()
   return { props: { initialReduxState: reduxStore.getState() } }
}

const mapStateToProps = ({newsData}) => {
   console.log(newsData)
   return {
      newsData
   }
}

export default connect(mapStateToProps, null)(Post)