import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
  ]
}

interface TicketFetch {
  tickets: Ticket[]
  stop: boolean
}

interface TicketState {
  tickets: Ticket[]
  searchID: string
  loadingID: 'idle' | 'pending' | 'succeeded' | 'failed'
  loadingTickets: 'idle' | 'pending' | 'succeeded' | 'failed'
  isAllTicketsHere: boolean
}

interface SearchID {
  searchId: string
}

const initialState: TicketState = {
  tickets: [],
  searchID: '',
  loadingID: 'idle',
  loadingTickets: 'idle',
  isAllTicketsHere: false,
}

export const fetchAllTickets = createAsyncThunk('ticket/fetchAllTickets', async (_, thunkAPI) => {
  // Fetch searchID first
  const searchIdResponse = await fetch('https://aviasales-test-api.kata.academy/search')
  if (!searchIdResponse.ok) {
    return thunkAPI.rejectWithValue(new Error('Unable to fetch searchId'))
  }

  const searchIdData = (await searchIdResponse.json()) as SearchID
  const searchID = searchIdData.searchId

  let allTickets: Ticket[] = []
  let stop = false

  const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

  const fetchTicketsWithRetry = async (url: string, maxRetries: number) => {
    let retries = 0

    while (retries < maxRetries) {
      try {
        const ticketsResponse = await fetch(url)

        if (ticketsResponse.status === 500) {
          retries++
          const waitTime = 2 ** retries * 1000
          await wait(waitTime)
          continue
        }

        return (await ticketsResponse.json()) as TicketFetch
      } catch (error) {
        retries++
        if (retries >= maxRetries) {
          throw error
        }
      }
    }
    throw new Error('Failed to fetch tickets after maximum retries')
  }

  while (!stop) {
    try {
      const ticketsData = await fetchTicketsWithRetry(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchID}`,
        5,
      )

      allTickets = [...allTickets, ...ticketsData.tickets]
      stop = ticketsData.stop
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }

  return allTickets
})

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTickets.fulfilled, (state, action) => {
      state.loadingTickets = 'succeeded'
      const tickets = action.payload
      state.tickets.push(...tickets)
      state.isAllTicketsHere = true
    })
  },
})

export default ticketSlice.reducer
