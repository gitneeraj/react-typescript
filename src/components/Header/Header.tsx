import { useTranslation } from 'react-i18next'

const lngs: any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
}

export default function Header() {
  const { i18n } = useTranslation()

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type='submit'
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}{' '}
      Header
    </div>
  )
}
