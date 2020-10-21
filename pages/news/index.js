import {Navbar} from '../../components/Navbar'
import {Post} from '../../components/Post'
import {Container} from '../../components/styled'
import {connect} from 'react-redux'
import React from 'react'
import {fetchNews} from '../../redux/actions'

class Index extends React.Component {
   static async getInitialProps(){
      const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
      const newsData = await res.json()
      return {newsData: newsData['articles']}
   }
   constructor(props) {
      super(props)
   }
   render(){
      console.log(this.props)
      return (
         <>
            <Navbar />
            <Container>
               {this.props.newsData.map((el, id) => <Post {...el} id={id} key={el.title}/>)}
            </Container>
         </>
      )
   }
}

const mapStateToProps = (news) => {
   return {

   }
}

export default connect(mapStateToProps, null)(Index)