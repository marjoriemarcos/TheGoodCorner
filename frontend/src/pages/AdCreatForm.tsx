import { FormEvent, useEffect } from "react";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { AdInput, useCreatedAdMutation, useGetTagAndCategoriesQuery } from "../libs/graphql/generated/graphql-types";
import { GET_ADS } from "../libs/graphql/operations";

const AdCreatForm = () => {
    const { loading, error, data } = useGetTagAndCategoriesQuery();
    const [createdAd, { loading: loadingSub, error: errorSub, data: dataSub }] = useCreatedAdMutation(
        {
        refetchQueries: [GET_ADS, 'GetAds'],
    });
    const navigate = useNavigate()
    
    const hSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        const formattedData = {
            ...formJson,
            price: parseFloat(formData.get("price") as string),
            tags: formJson.tags ? formJson.tags.toString().split(',') : [],
        }
        createdAd({ 
            variables: {data: formattedData as AdInput},
            }); 
       }
    useEffect(() => {
		if (!dataSub) return;
		navigate(`/`);

	}, [dataSub, navigate]);

    if (loading || loadingSub) return <p>Loading...</p>;
    if (error || errorSub) return <p>Error :</p>;
    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label htmlFor="title">Titre de l'annonce :</label>
                <input className="text-field" type="string" name='title' />

                <label htmlFor="description">Description :</label>
                <textarea name="description" placeholder="Je vends ..."></textarea>

                <label htmlFor="owner">Propriétaire :</label>
                <input className="text-field" type="string" name='owner' />

                <label htmlFor="location">Localisation :</label>
                <input className="text-field" type="string" name='location' />

                <label htmlFor="picture">Picture :</label>
                <input className="text-field" type="string" name='picture' />

                <label htmlFor="price">Prix :</label>
                <input className="text-field" type="number" name='price' />

                <label htmlFor="category">Categorie :</label>
                <select className="text-field" name="category">
                    {data?.getCategories.map((cat) => 
                        <option value={cat.id} key={cat.id}>{cat.name}</option>        
                    )}
                </select>

                <label htmlFor="tags">Tags :</label>
                <Select 
                    isMulti
                    name="tags"
                    options={data?.getTags.map((tag) => ({
                        value: tag.id,
                        label: tag.name,
                    }))}
                    delimiter=","
                />

                <button className="button my-2" disabled={loadingSub}>Submit</button>
            </form>
        </div>
    );
};


export default AdCreatForm;