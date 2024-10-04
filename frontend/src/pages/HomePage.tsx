import axios from "axios";
import {AdCardProps} from '../molecules/AdCard';
import { useEffect, useState } from "react";
import AdGallery from "../organisms/AdGallery";

function HomePage () {

    const [ads, setAds] = useState<AdCardProps[]>([]);
  
  
    const fetchData = async () => {
      const { data } = await axios.get<AdCardProps[]>("http://localhost:4000/ads")
      setAds( data );
   }
    useEffect(() => {
      fetchData()
    }, [ads])

    return <AdGallery title="Les annonces les plus récentes" ads={ads}/>


}

export default HomePage;