import { Dispatch, SetStateAction } from 'react';

type AdPriceProps = {
    price: number;
    total: number;
    setTotal: Dispatch<SetStateAction<number>>;
}

function AdPrice(props: AdPriceProps) {

  return (
      <>
            <button 
                className="btn btn-outline-secondary m-1"
                onClick={() => props.setTotal(props.total + props.price)}>
                Ajouter au panier
            </button>
      </>
  );
}

export default AdPrice


