import { useInternationalization } from '../hooks/useInternationalization'

export function TranslationTest() {
  const { changeLanguage, display } = useInternationalization()

  return (
    <div className="p-4  w-[320px]">
      <h1 className="text-center font-bold text-xl">
        {display('welcomeMessage')}
      </h1>

      <div className="flex items-center justify-between w-full mt-8">
        <button
          onClick={() => changeLanguage('zh')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          中文
        </button>
        <button
          onClick={() => changeLanguage('de')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          DE
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          EN
        </button>
      </div>
    </div>
  )
}
