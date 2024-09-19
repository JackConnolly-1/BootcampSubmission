import { create } from 'zustand'

export const useProductStore = create((set) => ({
    tickets: [],
    setTickets: (tickets) => set({ products }),
    createTicket: async (newTicket) => {
        const res = await fetch("http://localhost:1080/tickets", {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(newTicket)
        })
        console.log(res)
        const data = await res.json()
        set((state) => ({ tickets: [...state.tickets, data.data] }));
        return { successs: true, message: "New Ticket Created" };
    }
}))