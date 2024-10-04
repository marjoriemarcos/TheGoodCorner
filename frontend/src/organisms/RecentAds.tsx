import axios from 'axios';
import AdCard from '../molecules/AdCard';
import { useEffect, useState } from 'react';
import ad from '../types/Ad';

function RecentAds() {
  const [total, setTotal] = useState(0);
  const [ads, setAds] = useState<ad[]>([]);


  const fetchData = async () => {
    const { data } = await axios.get<ad[]>("http://localhost:4000/ads")
    setAds( data );
 }
  useEffect(() => {
    fetchData()
  }, [ads])

  return (
      <>
        <main className="main-content">
            <h2>Annonces récentes</h2>
            <p>Prix total : {total} euros </p>
            <section className="recent-ads">
                  {ads.map((ad) => (
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
                      />
                      <button 
                      className="button"
                      onClick={() => setTotal(total + ad.price)}>
                        Add price to total
                      </button>
                    </div>
                  ))}
            </section>
          </main>
      </>
    );
}  

export default RecentAds

