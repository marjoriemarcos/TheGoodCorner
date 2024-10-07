import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AdGallery from "../organisms/AdGallery";
import { AdCardProps } from "../molecules/AdCard";

export default function AdSearch() {
    const [ads, setAds] = useState<AdCardProps[]>([]);
	const { categoryId } = useParams();

	const fetchData = async () => {
	  const { data } = await axios.get<AdCardProps[]>(
        `http://localhost:4000/ads?categoryId=${categoryId}`, 
      );
	  setAds( data );
    console.log('data from cat', data)
   }
   useEffect(() => {
    fetchData()
  }, [ads])

  	if (!ads) return <p>Loading...</p>
	return <AdGallery title={`Les annonces de la catégorie : ${categoryId}`} ads={ads}/>
}