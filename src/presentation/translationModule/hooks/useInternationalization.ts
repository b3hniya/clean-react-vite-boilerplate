import i18n from '@/config/i18n'
import { useTranslation } from 'react-i18next'

export const useInternationalization = () => {
  const { t } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return {
    display: t,
    changeLanguage,
  }
}
