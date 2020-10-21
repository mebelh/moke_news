import React from 'react'
import Link from 'next/link'
import {Body, Image, Title} from '../../components/styled'
import {connect} from 'react-redux'

function Post(props) {
   const {title, description, author, urlToImage, publishedAt, content} = props
   console.log(props)
   return (
      <div>
         <Title>{title}</Title>
         <Body>{author}</Body>
         <Image src={urlToImage}/>
         <Body>{description}</Body>
         {publishedAt}
         <hr/>
      </div>
   )
}

const mapStateToProps = ({showNews}) => {
   return {
      showNews
   }
}

export default connect(mapStateToProps, null)(Post)