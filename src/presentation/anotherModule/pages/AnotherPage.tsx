import useStore from '../../../store/store'

export function AnotherPage() {
  const { count, increaseCount, decreaseCount } = useStore()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
