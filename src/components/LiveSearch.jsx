import React, { useState } from 'react';
import { useGetAllPokemonQuery } from '../services/pokemon'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';

function LiveSearch({ selectedPoke, setSelectedPoke }) {
  const { data, error, isLoading } = useGetAllPokemonQuery()

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      console.log('Selected Pokemon:', value.name);
      setSelectedPoke(value); 
    }
  };

  return (
    <Stack sx={{width:300,margin: "auto"}}>
      <Autocomplete
        id="poke-box-demo"
        getOptionLabel = {(option) => option.name}
        options = {data.results}
        sx={{ width: 300 }}
        noOptionsText={"I don't have this pokemon."}
        renderOption={(props,option) => (
          <Box component="li" {...props} key={option.id}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Pokemon name"  />}
        onChange={handleAutocompleteChange}
      />
    </Stack>
  )
}

export default LiveSearch