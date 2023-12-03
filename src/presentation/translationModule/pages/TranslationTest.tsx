import { useInternationalization } from '../hooks/useInternationalization'

export function TranslationTest() {
  const { changeLanguage, display } = useInternationalization()

  return (
    <>
      <h1>{display('welcomeMessage')}</h1>
      <button onClick={() => changeLanguage('zh')}>中文</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </>
  )
}
