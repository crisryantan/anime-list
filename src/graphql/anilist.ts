import { gql } from '@apollo/client';

export const MEDIA_FRAGMENT = gql`
  fragment MediaFragment on Media {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
      medium
      color
    }
    bannerImage
    description
    episodes
    status
    genres
    averageScore
    popularity
    seasonYear
    format
  }
`;

export const GET_ANIME_LIST = gql`
  ${MEDIA_FRAGMENT}
  query GetAnimeList($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search, type: ANIME, sort: $sort) {
        ...MediaFragment
      }
    }
  }
`;

export enum MediaSort {
  POPULARITY_DESC = "POPULARITY_DESC",
  SCORE_DESC = "SCORE_DESC",
  TRENDING_DESC = "TRENDING_DESC",
  UPDATED_AT_DESC = "UPDATED_AT_DESC",
  START_DATE_DESC = "START_DATE_DESC"
} 