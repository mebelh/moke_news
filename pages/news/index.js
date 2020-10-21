import {Navbar} from '../../components/Navbar'
import {Post} from '../../components/Post'
import {Container} from '../../components/styled'
import {connect} from 'react-redux'
import React from 'react'
import {fetchNews} from '../../redux/actions'

class Index extends React.Component {
   static getInitialProps({news}){
      return {news}
   }
   constructor(props) {
      super(props)
   }
   render(){
      console.log(this.props.news)
      return (
         <>
            <Navbar />
            {/*<Container>*/}
            {/*   {posts.map((el, id) => <Post {...el} id={id} key={el.title}/>)}*/}
            {/*</Container>*/}
         </>
      )
   }
}

const mapStateToProps = ({news}) => {
   return {
      news
   }
}

export default connect(mapStateToProps, null)(Index)