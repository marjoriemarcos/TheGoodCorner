import axios from 'axios';
import AdCard, {AdCardProps} from './AdCard';
import { useEffect, useState } from 'react';

function RecentAds() {
  const [total, setTotal] = useState(0);
  const [ads, setAds] = useState<AdCardProps[]>([]);


  const fetchData = async () => {
    const { data } = await axios.get<AdCardProps[]>("http://localhost:4000/ads")
    setAds( data );
 }
  useEffect(() => {
    fetchData()
  }, [])

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

