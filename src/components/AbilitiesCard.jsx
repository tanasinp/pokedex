import React from 'react'
import { useGetPokemonByNameQuery } from '../services/pokemon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const Abilities = [
  'Hp',
  'Attack',
  'Defense',
  'Special-Attack',
  'Special-Defense',
  'Speed',
];

function AbilitiesCard({ selectedPoke }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(selectedPoke?.name || '');

  const getPokemonStat = (statName) => {
    if (!data || !data.stats) return null;

    const stat = data.stats.find(stat => stat.stat.name === statName.toLowerCase());
    return stat ? stat.base_stat : null;
  };

  if (!selectedPoke) {
    return (
      <div>
        <p>Poke Poke Mon Name</p>
      </div>
    );
  }

  return (
    <div className="AbilitiesCard">
      <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {Abilities.map((value) => (
                <ListItem key={value} disablePadding>
                  <ListItemButton>
                    <Box key={value}>
                      <Typography variant="h6" sx={{ ml: 1 }} className="nomes">
                        {value} : {getPokemonStat(value)}
                      </Typography>

                      <LinearProgress
                        variant="determinate"
                        value={getPokemonStat(value) || 0}
                        sx={{
                          width: 200,
                          height: 10,
                          mr: 5,
                          ml: 1,
                          background: 'aliceblue',
                        }}
                      />
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
    </div>
  )

}

export default AbilitiesCard