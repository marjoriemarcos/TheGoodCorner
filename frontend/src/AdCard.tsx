export type AdCardProps = {
    id: number;
    title: string;
    picture: string;
    price: number;
};

function AdCard( props: AdCardProps ) {
  return (
      <>
        <div className="ad-card-container">
            <a className="ad-card-link" href={`/ads/${props.id}`}>
            <img className="ad-card-image" src={props.picture} />
            <div className="ad-card-text">
                <div className="ad-card-title">{props.title}</div>
                <div className="ad-card-price">{props.price} €</div>
            </div>
            </a>
        </div>
      </>
  );
}



export default AdCard
