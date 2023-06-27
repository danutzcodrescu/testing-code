# Testing case

Dependencies can be installed by creating a new terminal and running `yarn add dep-name`.

## Requirement 1: retrieve movies from SWAPI and display them as a list of cards

Retrieve data from https://swapi.dev/api/films and display them as a list of cards. The card should contain the title as h3 bolded text, a row with 3 columns containing information about release date, director and producers. Last paragraph should contain the opening crawl.

While loading the data a circular spinner should be displayed in the middle of the screen (centered both horizontal and vertical).

** Nice to have ** -> ellipsise the text of opening crawl if it is longer than 1 line
** Nice to have ** -> the color of the title should use the main primary color defined in the theme object.

The shape of the data is available is src/types/movies

```
    FilmsResponse {
        count:    number;
        next:     null;
        previous: null;
        results:  Film[];
    }
    
    Film {
        title:         string;
        episode_id:    number;
        opening_crawl: string;
        director:      string;
        producer:      string;
        release_date:  string;
        characters:    string[];
        planets:       string[];
        starships:     string[];
        vehicles:      string[];
        species:       string[];
        created:       Date;
        edited:        Date;
        url:           string;
    }
```

Example of the card ![Movie Card](./public/card.png "Film Card")




## Requirement 2: responsive design 

Display the list of cards as 3 columns if the screen is bigger than 1200px and as 1 column if the screen is smaller.




## Requirement 3: filtering

Create a text input above the list of movies. Based on the query provided in the input, the list should be filtered. The list should be filtered on the title propery, and the filter should be case insensitive.



## Requirement 4: routing