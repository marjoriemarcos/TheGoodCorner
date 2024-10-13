import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";

const AdEditForm = () => {
    const { adId } = useParams();
    const navigate = useNavigate()
    const [categories, setCategories] = useState([]);
    const [tags, steTags] = useState([]);
    const [ad, setAd] = useState<AdEditionFormType>();

    type ApiResult = {
        id:number,
        name:string
    }

    type AdEditionFormType={
        id:number,
        title:string,
        picture:string,
        price:number,
        description:string,
        owner:string,
        createdAt:string,
        location:string,
        category:ApiResult,
        tags:ApiResult[]
    }

    useEffect(() => {
        const fetchAd = async () => {
            const {data} = await axios.get<AdEditionFormType>(`http://localhost:4000/ads/${adId}`);
            setAd(data)
            console.log('ads' ,data)
        };
        const fetchCategories = async () => {
            let {data} = await axios.get('http://localhost:4000/categories');
            data = data.map((cat: ApiResult) => ({value:cat.id, label:cat.name}))
            console.log('dataCat', data)
            setCategories(data)
        };
        const fetchTags = async () => {
            let {data} = await axios.get('http://localhost:4000/tags');
            data = data.map((tag: ApiResult) => ({value:tag.id, label:tag.name}))
            console.log('dataTag', data)
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
       console.log('ad?.category.id', ad?.category.id)
       console.log('ad?.category.name', ad?.category.name)
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
                <Select 
                    name="categoryId"
                    options={categories}
                    className="basic-multi-select"
                   defaultValue={{value:ad?.category.id, label:ad?.category.name}}
                />

                <label>Tags :</label>
                <Select 
                    isMulti
                    name="tags"
                    options={tags}
                    className="basic-multi-select"
                    delimiter=","
                    defaultValue={ ad?.tags.map((tag: ApiResult) => ({value:tag.id, label:tag.name}))}
                />
               
                <label>Date :</label>
                <input className="text-field" type="date" name='createdAt' defaultValue={ad?.createdAt} />

                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default AdEditForm;