import { create } from 'zustand'

const useStore = create((set) => ({
    connected: false,
    connectUser: () => set({ connected: true }),
    disconnectUser: () => set({ connected: false })
}))

export default useStore;