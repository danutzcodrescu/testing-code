export interface FilmsResponse {
  message: string;
  apiVersion: string;
  timestamp: string;
  result: Film[];
}

export interface Film {
  description: string;
  properties: Properties;
  uid: string;
}

export interface Properties {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}
