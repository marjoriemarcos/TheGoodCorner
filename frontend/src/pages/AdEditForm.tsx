import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import category from '../types/Category';
import tag from '../types/Tag';
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";
import Ad from "../types/Ad";

const AdEditForm = () => {
    const { adId } = useParams();
    console.log('adId', adId)
    const navigate = useNavigate()
    const [categories, setCategories] = useState<category[]>([]);
    const [tags, steTags] = useState<tag[]>([]);
    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        const fetchAd = async () => {
            const {data} = await axios.get<Ad>(`http://localhost:4000/ads/${adId}`);
            setAd(data)
            console.log('data' ,data)
        };
        const fetchCategories = async () => {
            const {data} = await axios.get<category[]>('http://localhost:4000/categories');
            setCategories(data)
        };
        const fetchTags = async () => {
            let {data} = await axios.get('http://localhost:4000/tags');
            type apiTags = {
                id: number;
                name: string;
            }
            data = data.map((tag: apiTags) => ({value:tag.id, label:tag.name}))
            steTags(data)
        };
        fetchCategories();
        fetchTags();
        fetchAd();
    }, [])


    const hSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;

        // class qui est faites pour formater les données d'un formulaire
        const formData = new FormData(form as HTMLFormElement);
        // va mettre les données en json
        const formJson = Object.fromEntries(formData.entries())
        axios.put(`http://localhost:4000/ads/${adId}`, formJson)
        console.log('formJson', formJson)
        navigate("/")
       
       }

    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label>Titre de l'annonce :</label>
                <input className="text-field" type="string" name='title'  defaultValue={ad?.title}/>

                <label>Description :</label>
                <textarea name="description" placeholder="Je vends ..." defaultValue={ad?.description}></textarea>

                <label>Propriétaire :</label>
                <input className="text-field" type="string" name='owner' defaultValue={ad?.owner}/>

                <label>Localisation :</label>
                <input className="text-field" type="string" name='location' defaultValue={ad?.location}/>

                <label>Picture :</label>
                <input className="text-field" type="string" name='picture' defaultValue={ad?.picture} />

                <label>Prix :</label>
                <input className="text-field" type="number" name='price' defaultValue={ad?.price} />

                <label>Categorie :</label>
                <select className="text-field" name="categoryId">
                    {categories.map((cat) => 
                        <option value={cat.id} key={cat.id}>{cat.name}</option>        
                    )}
                </select>

                <label>Tags :</label>
                <Select 
                    isMulti
                    name="tags"
                    options={tags}
                    className="basic-multi-select"
                    delimiter=","
                />
               
                <label>Date :</label>
                <input className="text-field" type="week" name='createdAt' />

                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default AdEditForm;