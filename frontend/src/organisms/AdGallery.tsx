import { Ad } from '../libs/graphql/generated/graphql-types';
import AdCard from '../molecules/AdCard';
import AdPrice from '../molecules/AdPrice';
import { useState } from 'react';


export type AdGalleryProps = {
    title: string;
    ads: Ad[];
};

function AdGallery(props: AdGalleryProps) {
  const [total, setTotal] = useState(0);
  return (
      <div>
        <main className="w-100 flex">
            <h2 className='m-3'>{props.title}</h2>
            <p className='m-3'>Prix total : {total}  euros </p>
            <section className="w-100 d-flex flex-wrap flex-row justify-content-center">
                  {props.ads.map((ad) => (
                    <div className="container w-25 h-25 bg-light-subtle rounded p-4 m-3" key={ad.id}>
                          <AdCard
                            key={ad.id} {...ad}
                          />
                          <AdPrice
                            price={ad.price}
                            total={total}
                            setTotal={setTotal}
                          />
                    </div>
                  ))}
            </section>
          </main>
      </div>
    );
}  

export default AdGallery;

