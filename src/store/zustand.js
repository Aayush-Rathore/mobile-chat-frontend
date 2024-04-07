import { create } from 'zustand'
import { io } from "socket.io-client"

const useStore = create((set) => ({
    socket: io("http://192.168.211.211:8000"),
    connected: false,
    username: "",
    roomId: "",
    id: "",
    connectUser: (roomId, username, id) => set({ connected: true, roomId: roomId, username: username, id: id }),
    disconnectUser: () => set({ connected: false, roomId: "" })
}))

export default useStore;