import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/router'
import { MovieList } from '../components/MovieList'
import { Movie } from '../components/Movie'

const rootRoute = new RootRoute({
  component: Outlet,
})

const listRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: MovieList,
})

const filmRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/movies/$id',
  component: Movie
})

const routeTree = rootRoute.addChildren([filmRoute, listRoute])

export const router = new Router({ routeTree })
