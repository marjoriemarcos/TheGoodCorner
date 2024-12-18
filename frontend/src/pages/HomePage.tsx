import AdGallery from "../organisms/AdGallery";
import { Ad, useGetAdsQuery } from "../libs/graphql/generated/graphql-types";

function HomePage () {

const { loading, error, data } = useGetAdsQuery();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    if (!data) return <p>Somethin wrong...</p>;

    return <AdGallery title="Les annonces les plus récentes" ads={data.getAds as Ad[]}/>
}

export default HomePage;