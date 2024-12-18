import { useParams } from "react-router-dom";
import AdDetail from "../organisms/AdDetail";
import { useGetAdByIdQuery } from "../libs/graphql/generated/graphql-types";

export default function AdPage() {
	const { adId } = useParams();

	const { loading, error, data } = useGetAdByIdQuery({
		variables: {getAdByIdId: `${adId}`}
	});
	

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :</p>;
	if (!data) return <p>Somethin wrong...</p>;

	return (
		<div>
			<AdDetail {...data.getAdById}  />
		</div>
	);
}
