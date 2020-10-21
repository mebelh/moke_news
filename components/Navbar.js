import styled from 'styled-components'

import React from 'react'
import Link from 'next/link'
import {Nav, NavContainer, StyledLink} from './styled'

export function Navbar() {

   return (
      <>
         <Nav>
            <NavContainer>
               <Link href={'/news'}><StyledLink>Все новости</StyledLink></Link>
               <Link href={'/about'}><StyledLink>О нас</StyledLink></Link>
            </NavContainer>
         </Nav>
      </>
   )
}