import styled from 'styled-components'

export const Title = styled.div`
    font-size: 46px;
    max-width: 680px;
    margin: 10px auto;
    font-family: sans-serif;
    line-height: 56px;
    cursor: pointer;
`
export const Body = styled.div`
    font-size: 21px;
    margin: 10px auto 60px;
    word-break: break-word;
    max-width: 680px;
     cursor: pointer;
`
export const Image = styled.img`
    width: 1070px;
    min-width: 680px;
    margin: 10px auto;
    cursor: pointer;
`

export const Container = styled.div`
      max-width: 1070px;
      margin: 100px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
`

export const Nav = styled.nav`
       display: flex;
       background-color: #ffffff;
       border-bottom: 1px solid #f0f0f0;
       height: 80px;
       top: 0;
       position: fixed;
       width: 100%;
    `
export const StyledLink = styled.a`
       font-size: 1.2rem;   
       font-family: sans-serif;
       cursor: pointer;
       &:hover{
          color: #0072b7;
       }
    `

export const NavContainer = styled.div`
       width: 870px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       margin: 0 auto;
`

export const Button = styled.button`
       width: 200px;
       height: 40px;
       background-color: #ececec;
       outline: none;
       font-size: 24px;
       border: 1px solid #eeeeee;
       margin-bottom: 20px;
`