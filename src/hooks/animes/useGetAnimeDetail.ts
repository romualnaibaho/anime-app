import { gql, useQuery } from "@apollo/client";

const GET_DETAIL = gql`
query ($id: Int) {
    Media (id: $id, type: ANIME) {
      id
      title {
        english
        native
      }
      description
      genres
      isAdult
      duration
      chapters
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      format
      status
      episodes
      duration
      chapters
      volumes
      isAdult
      genres
      bannerImage
    }
  }
`

export const useGetAnimeDetail = (id: string) => {
    const { data, loading } = useQuery(GET_DETAIL, {
        variables: { id: parseInt(id) }
    });

    return { anime: data?.Media, loading };
}