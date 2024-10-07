import { Link } from 'react-router-dom';
import axios from 'axios';
import Category from '../types/Category';

export type AdCardProps = {
  id: number;
  title: string;
  description: string;
  picture: string;
  owner: string;
  price: number;
  location: string;
  createdAt: string;
  category: Category;
};


function AdCard( props: AdCardProps ) {
  const hRemove = async (id: number) => {
    await axios.delete(`http://localhost:4000/ads/${id}`)
   }

  return (
      <>
            <Link className="ad-card-link" to={`/ads/${props.id}`}>
            <img className="ad-card-image" src={props.picture} />
            <div className="ad-card-text">
                <div className="ad-card-title">{props.title}</div>
                <div className="ad-card-price">{props.price} €</div>
                <div className="ad-card-price">{props.category.name} </div>
            </div>
            </Link>
              <button className="btn btn-outline-danger m-1" type="button" onClick={ () => hRemove(props.id)}>Supprimer</button>
            <Link className="ad-card-link" to={`/ads/edit/${props.id}`}>
                <button className="btn btn-outline-warning m-1" type="button">Modifer</button>
            </Link>
              
      </>
  );
}



export default AdCard;
