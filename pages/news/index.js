import {Navbar} from '../../components/Navbar'
import Head from 'next/head'
import {Post} from '../../components/Post'
import {Container} from '../../components/styled'
import {connect, useDispatch} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {fetchNews, loadNews} from '../../redux/actions'
import {initializeStore} from '../../redux/store'
import {FETCH_NEWS, LOAD_NEWS} from '../../redux/types'
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71'

function Index({showNews}) {

   const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(fetchNews())
   },[])

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
         </Container>
      </>
   )
}

export function getServerSideProps() {
   const reduxStore = initializeStore()

   return { props: { initialReduxState: reduxStore.getState() } }
}

const mapStateToProps = ({showNews}) => {
   return {showNews}
}

export default connect(mapStateToProps, null)(Index)