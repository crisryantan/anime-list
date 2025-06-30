# Anime List

A modern web application built with Next.js that allows users to browse, search, and discover anime using the AniList GraphQL API. To view this live via Vercel, go to this [link](https://anime-list-five-mocha.vercel.app/)

## Features

- Browse anime with pagination controls
- Search for specific titles
- View detailed information about each anime
- Responsive media grid layout
- User authentication

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [GraphQL](https://graphql.org/) with [Apollo Client](https://www.apollographql.com/docs/react/)
- [AniList API](https://anilist.gitbook.io/anilist-apiv2-docs/) - Anime database API
- [Chakra UI](https://chakra-ui.com/) - Component library
- TypeScript
- CSS Modules

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/components` - UI components organized in three categories:
  - `features/` - Feature-specific components (auth, homepage, information)
  - `ui/` - Reusable UI components (MediaCard, SearchBar, etc.)
  - `layout/` - Layout components (Header)
- `src/graphql` - GraphQL queries and mutations
- `src/hooks` - Custom React hooks
- `src/context` - React context providers
- `src/lib` - Utility functions and configurations
- `src/types` - TypeScript type definitions

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [AniList API Documentation](https://anilist.gitbook.io/anilist-apiv2-docs/)
- [Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)
