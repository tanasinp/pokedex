// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

  endpoints: (builder) => ({
    // Existing endpoint for single Pokemon by name
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    // New endpoint for fetching a list of Pokemon
    getAllPokemon: builder.query({
      query: () => 'pokemon?limit=100000&offset=0',
    }),
  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const useGetAllPokemonQuery = pokemonApi.endpoints.getAllPokemon.useQuery
export const useGetPokemonByNameQuery = pokemonApi.endpoints.getPokemonByName.useQuery