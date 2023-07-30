import { gql, useQuery } from "@apollo/client";

const GET_ANIMES = gql`
query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          english
          native
        }
        status
        season
        seasonYear
        genres
        episodes
        duration
        bannerImage
      }
    }
  }
`

export const useGetAnimePage = (page: number, perPage: number) => {
    const { data, loading } = useQuery(GET_ANIMES, {
        variables: { page, perPage }
    });

    return { AnimePage: data, loading };
}