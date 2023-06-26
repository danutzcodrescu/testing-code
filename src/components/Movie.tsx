import { useQuery } from "@tanstack/react-query";
import { useMatch } from "@tanstack/router";
import { Film } from "../types";
import { CircularProgress } from "@mui/material";

export function Movie() {
  const {params: {id}} = useMatch()
  const {data, isFetching} = useQuery(['movie', id], () => fetch(`https://swapi.dev/api/films/${id}`).then(resp => resp.json() as Promise<Film>))
  if (isFetching) {
    return <CircularProgress />
  }
  return <h1>{data?.title}</h1>
}
