# Pokemon App
This project is a Pokemon-themed React application built with TypeScript, leveraging React Query for efficient API calls and Redux Toolkit for state management. The app features filtering, searching, infinite scrolling, and a modal for detailed Pokémon statistics.

# Demo
Demo Link - https://kartikay-pokedex.netlify.app/

https://github.com/kartikayasija/Pokedex/assets/115306535/c131e658-c71c-4c51-8bdc-f212b84cb7d3

# Tech Stack

- **React**:  *A JavaScript library used to create user interfaces in a declarative and efficient way. It is a component-based front-end library.*
- **TypeScript**:  *A superset of JavaScript that adds static typing and other features to the language.*
- **Redux Toolkit**:  *A library that is made to simplify the creation of redux store and provide easy state management.*
- **React Query**:  *A library for managing and caching server state in React applications.*

# Project initialization

Clone the project

```bash
  git clone https://github.com/kartikayasija/Pokedex
```
Install dependencies

```bash
  yarn
```

Start Application
```bash
  yarn dev
```

# Features

## Filtering

Easily find specific groups of Pokemon by filtering them based on their types.

## Search

Utilize the search box to find Pokemon by their name or id. The search functionality makes it easy to locate your favorite Pokémon or discover new ones.

## Infinite Scrolling

As you scroll down, additional Pokémon will be loaded, providing a smooth and continuous exploration experience.

## Modal for Detailed Pokémon Statistics

Get a comprehensive overview of each Pokémon by accessing detailed statistics in a modal. This feature allows you to delve into the specific attributes and characteristics of your favorite Pokémon.

## Dark Mode

The Pokémon Explorer App supports Dark Mode for a comfortable and visually pleasing experience in low-light environments. Toggle Dark Mode on or off in the settings to customize your viewing experience.

# Project Structure
```bash
  |-- src
  |   |-- Components
  |   |   |-- Loader
  |   |       |-- Skeleton.tsx
  |   |       |-- Spinner.tsx
  |   |       |-- Error.tsx
  |   |   |-- UI
  |   |       |-- Modal.tsx
  |   |       |-- Progress.tsc
  |   |       |-- Theme.tsc
  |   |   |-- Feed.tsx
  |   |   |-- Filter.tsx
  |   |   |-- GetDetails.tsx
  |   |   |-- Header.tsx
  |   |   |-- SearchBox.tsx
  |   |   |-- PokeCard.tsx
  |   |   |-- SearchCard.tsx
  |   | 
  |   |-- Constants
  |   |   |-- colorMap.ts
  |   |   |-- types.ts
  |   |   |-- url.ts
  |   |
  |   |-- Hooks
  |   |   |-- useDebounce.tsx
  |   |   |-- useAppDispatch.tsx
  |   |   |-- useAppSelector.tsx
  |   |   |-- usePokemonData.tsx
  |   |   
  |   |-- Redux
  |   |   |-- pokemonSlice.ts
  |   |   |-- store.ts
  |   |
  |   |-- Utils
  |   |   |-- apiCalls.ts
  |   |   |-- capitalizeFirst.ts
  |   |   |-- theme.ts
  |   |
  |   |-- App.tsx
  |   |-- index.tsx

```


