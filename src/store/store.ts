// store/store.js
import { create } from 'zustand'

type Store = {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
}

const useStore = create<Store>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}))

export default useStore
