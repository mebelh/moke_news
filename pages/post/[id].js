import {useRouter} from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
export default function Post (){
   const route = useRouter()
   console.log(route.query)
   return (
      <div>
         <Head>
            <title>Hello</title>
         </Head>
         Post {route.query.id}
         <Link href={'/post/123'}><a>Go to post</a></Link>
      </div>
   )
}