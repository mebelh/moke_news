import {Navbar} from '../../components/Navbar'
import {Post} from '../../components/Post'
import {Container} from '../../components/styled'
import {connect} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {fetchNews} from '../../redux/actions'


function Index({newsData: newsDataServer}){
   const [newsData, setNewsData] = useState(newsDataServer)
   useEffect(()=>{
      const load = async () => {
         try {
            const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
            const newsData = await res.json()
            setNewsData(newsData['articles'])
         } catch (e) {
            throw e
         }
      }
      if (!newsDataServer) {
         load()
      }
   },[])

   return (
      <>
         <Navbar/>
         <Container>
            {newsData ? newsData.map((el, id) => <Post {...el} id={id} key={el.title}/>) : <h3>Загрузка...</h3>}
         </Container>
      </>
   )
}

Index.getInitialProps = async ({query, req}) => {
   if (!req) {
      return {
         newsData: null
      }
   }
   const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
   const newsData = await res.json()
   return {newsData: newsData['articles']}
}

const mapStateToProps = (news) => {
   return {}
}

export default connect(mapStateToProps, null)(Index)