import { useQuery } from "@tanstack/react-query";
import { Box, Card, CardContent, CardHeader, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import type {FilmsResponse} from '../types'
import { useState } from "react";
import { Link } from "@tanstack/router";

export function MovieList() {
  const [filter, setFilter] = useState<string>("");
  const { data, isFetching } = useQuery(["movies"], () => {
    return fetch("https://swapi.dev/api/films").then((resp) => resp.json() as Promise<FilmsResponse>);
  }, {select: (data) => {
    if (filter) {
      return {...data, results: data.results.filter(film => film.title.toLowerCase().includes(filter.toLocaleLowerCase()))}
    }
    return data;
  }});

  if (isFetching) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  return <Box>
    <TextField  label="Search" variant="outlined" onChange={(e) => setFilter(e.target.value)} sx={{my: 2.5}} />
    <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: {lg: 'repeat(3, 1fr)', xs: '1fr'}}}>

    {data?.results.map(film => <Card key={film.episode_id}>
     
      <CardContent>
        <Stack spacing={1}>
        <Typography gutterBottom variant="h3">
          {film.title}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Box>Released on: {film.release_date}</Box>
          <Box>Director: {film.director}</Box>
          <Box>Producer: {film.producer}</Box>
        </Stack>
        <Typography sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{film.opening_crawl}</Typography>
        <Link to={`/movies/${film.episode_id}`}>More details here</Link>
        </Stack>
        
      </CardContent>
    </Card>)}
    </Box>
  </Box>;
}
