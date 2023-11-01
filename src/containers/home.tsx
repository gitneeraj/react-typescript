import { Header } from '@/components/Header'
import { Container } from '@mui/material'
import { useTranslation, Trans } from 'react-i18next'

export default function Root() {
  const { t } = useTranslation()

  return (
    <Container>
      <Header />
      <Trans i18nKey='description.part1'>
        Edit <code>src/App.js</code> and save to reload.
      </Trans>
      Home page
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        {t('description.part2')}
      </a>
    </Container>
  )
}
