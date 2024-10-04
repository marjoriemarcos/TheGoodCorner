import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import category from '../types/Category';
import tag from '../types/Tag';
import Select from 'react-select';

const AdCreatForm = () => {
    const [categories, setCategories] = useState<category[]>([]);
    const [tags, steTags] = useState<tag[]>([]);

    useEffect(() => {
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
    }, [])


    const hSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        // class qui est faites pour formater les données d'un formulaire
        const formData = new FormData(form as HTMLFormElement);
        // va mettre les données en json
        const formJson = Object.fromEntries(formData.entries())
        axios.post('http://localhost:4000/ads', formJson)
       }

    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label>Titre de l'annonce :</label>
                <input className="text-field" type="string" name='title' />

                <label>Description :</label>
                <textarea name="description" value="Je vends ..."></textarea>

                <label>Propriétaire :</label>
                <input className="text-field" type="string" name='owner' />

                <label>Localisation :</label>
                <input className="text-field" type="string" name='location' />

                <label>Picture :</label>
                <input className="text-field" type="string" name='picture' />

                <label>Prix :</label>
                <input className="text-field" type="number" name='price' />

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

export default AdCreatForm;