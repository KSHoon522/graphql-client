import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieID: String!) {
    movie(id: $movieID) {
      id
      title
      small_cover_image
    }
  }
`;

export default function Movie() {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_MOVIE, {
    variables: { movieID: id },
  });
  console.log(data, loading);
  if (loading) {
    return <h1>Fetching moive...</h1>;
  }
  return <h1>{data.movie.title}</h1>;
}
