import { type ReactNode } from 'react'
import { Header } from '../Header'
import { Container } from '@mui/material'

interface IParams {
  children?: ReactNode | null | undefined
}

export default function Layout({ children }: IParams) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}
