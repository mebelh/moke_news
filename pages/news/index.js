import {Navbar} from '../../components/Navbar'
import Head from 'next/head'
import {Post} from '../../components/Post'
import {Button, Container} from '../../components/styled'
import {connect, useDispatch} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {fetchNews, loadNews} from '../../redux/actions'
import {initializeStore} from '../../redux/store'
import {FETCH_NEWS, LOAD_NEWS} from '../../redux/types'
// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71'

function Index({showNews, newsData}) {

   const dispatch = useDispatch()
   // useEffect(()=>{
   //    dispatch(fetchNews())
   // },[])
   // !showNews.length && dispatch(fetchNews())

   return (
      <>
         <Head>
            <title>
               News for Boss
            </title>
         </Head>
         <Navbar/>
         <Container>
            {showNews ? showNews.map((el, id) => <Post {...el} id={id} key={el.title}/>) : <h3>Загрузка...</h3>}
            {showNews.length < newsData.length &&
            <Button
               onClick={()=>{
               dispatch(loadNews())
            }}>
               Загрузить еще...
            </Button>}
         </Container>
      </>
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

const mapStateToProps = ({showNews, newsData}) => {
   return {showNews, newsData}
}

export default connect(mapStateToProps, null)(Index)