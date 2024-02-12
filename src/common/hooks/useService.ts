import { useState } from 'react'

export const useService = <T, J extends string>(
  serviceFunc: (...args: unknown[]) => Promise<T>
) => {
  const [data, setData] = useState<T | null>()
  const [error, setError] = useState<J | null>()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const call = (...callArgs: unknown[]) => {
    setIsLoading(true)

    return serviceFunc(...callArgs)
      .then((data) => {
        setData(data)
        setIsSuccess(true)
        return data
      })
      .catch((err) => {
        setError(err)
        setIsSuccess(false)
        throw err
      })
      .finally(() => setIsLoading(false))
  }

  return {
    call,
    data,
    error,
    isSuccess,
    isLoading,
  }
}
