import { Link } from 'react-router-dom';
import { Ad, useDeleteAdMutation, useGetAdsQuery } from '../libs/graphql/generated/graphql-types';
import { GET_ADS } from "../libs/graphql/operations";;

function AdCard( props: Ad ) {

  const { loading, error } = useGetAdsQuery();
  const [deleteAd] = useDeleteAdMutation({
    refetchQueries: [
        GET_ADS, // DocumentNode object parsed with gql
        'GetAds'
      ],
});

  const handleDelete = async (adId: string) => {
    try {
      await deleteAd({ variables: { deleteAdByIdId: adId } });
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
      <div>
            <Link className="ad-card-link" to={`/ads/${props.id}`}>
            <img className="ad-card-image" src={props.picture}  alt={props.title}/>
            <div className="ad-card-text">
                <div className="ad-card-title">{props.title}</div>
                <div className="ad-card-price">{props.price} €</div>
                <div className="ad-card-price">{props.category.name}</div>
            </div>
                {props.tags.map((tag) => {
                  return <div key={`${props.id}-${props.title}`} className="ad-card-price">{tag.name} </div>
                })}
            </Link>
              <button className="btn btn-outline-danger m-1" type="button" onClick={() => handleDelete( props.id.toString() )}>Supprimer</button>
            <Link className="ad-card-link" to={`/ads/edit/${props.id}`}>
                <button className="btn btn-outline-warning m-1" type="button">Modifer</button>
            </Link> 
      </div>
  );
}



export default AdCard;
