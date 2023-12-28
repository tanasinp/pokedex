import React, { useState, useEffect } from 'react';
import { useGetPokemonByNameQuery } from '../services/pokemon'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function DetailCard({ selectedPoke, shiny }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(selectedPoke?.name || '')

  const [pokemonDescription,setPokemonDescription] = useState({
    img:"",
    img_shiny:"",
  })
  console.log(data);

  useEffect(() => {
    if (data) {
      setPokemonDescription({
        img: data?.sprites?.other['official-artwork'].front_default || "",
        img_shiny: data?.sprites?.other['official-artwork'].front_shiny || "",
      });
    }
  }, [data]);

  if (!selectedPoke) {
    return (
      <div>
        <p>Please Choose Poke</p>
      </div>
    );
  }

  return (
    <div>
      <Card sx={{ minWidth: 364 }}>
        <CardMedia
        component="img"
        height="140"
        width="240"
        // sx={{ width: 300, height: 184 }}
        sx={{ width: '100%', height: 184, objectFit: 'contain' }}
        image={
          shiny 
          ? pokemonDescription.img_shiny
          : pokemonDescription.img
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {selectedPoke ? selectedPoke.name : 'None'}
          </Typography>
          {data && data.types && (
            <Typography variant="body2" color="text.secondary">
              POKEMON TYPES : 
              {data.types.map((type, index) => (
                <span key={index}>
                  {type.type.name}
                  {index < data.types.length - 1 ? ', ' : ''}
                </span>
              ))}
            </Typography>
          )}
            
          <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              {data.abilities && (
                 <Stack direction="row" spacing={1}>
                  {data.abilities.map((ability, index) => (
                    <Chip
                      key={index}
                      label={ability.ability.name}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
              )}
            </CardContent>
          </Card>

        </CardContent>

      </Card>
    </div>
  )
}

export default DetailCard