import AdCard, {AdCardProps}  from '../molecules/AdCard';
import AdPrice from '../molecules/AdPrice';
import {useState} from 'react';


export type AdGalleryProps = {
    title: string;
    ads: AdCardProps[];
};

function AdGallery(props: AdGalleryProps) {
  const [total, setTotal] = useState(0);
  return (
      <>
        <main className="w-100 flex">
            <h2 className='m-3'>{props.title}</h2>
            <p className='m-3'>Prix total : {total}  euros </p>
            <section className="w-100 d-flex flex-wrap flex-row justify-content-center">
                  {props.ads.map((ad) => (
                    <div className="container w-25 h-25 bg-light-subtle rounded p-4 m-3" key={ad.id}>
                      <div key={ad.id}>
                          <AdCard 
                            key={ad.id}
                            picture={ad.picture}
                            price={ad.price}
                            title={ad.title}
                            id={ad.id}
                            location={ad.location}
                            description={ad.description}
                            owner={ad.owner}
                            createdAt={ad.createdAt}
                            category={ad.category}
                          />
                          <AdPrice
                            price={ad.price}
                            total={total}
                            setTotal={setTotal}
                          />
                      </div>
                  </div>
                  ))}
            </section>
          </main>
      </>
    );
}  

export default AdGallery;

