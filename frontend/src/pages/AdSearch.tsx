import { useParams } from "react-router-dom";
import AdGallery from "../organisms/AdGallery";
import { Ad, useGetAdByCategoryIdQuery } from "../libs/graphql/generated/graphql-types";

export default function AdSearch() {
	const { categoryId } = useParams();

  const { loading, error, data } = useGetAdByCategoryIdQuery(
    {
      variables: { getAdByCategoryIdId: categoryId ?? '' }
    }); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data) return <p>Something wrong...</p>;

	return <AdGallery title={`Les annonces de la catégorie : ${categoryId}`} ads={data.getAdByCategoryId as Ad[]} />
}
