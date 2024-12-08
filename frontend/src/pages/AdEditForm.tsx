import { FormEvent } from "react";
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";
import { AdInput, useGetAdByIdQuery, useGetTagAndCategoriesQuery, useReplaceAdMutation } from "../libs/graphql/generated/graphql-types";
import { REPLACE_AD_BY_ID } from "../libs/api";

const AdEditForm = () => {
    const { adId } = useParams();
    console.log('id', adId)
    const navigate = useNavigate()

    const { loading, error, data } = useGetTagAndCategoriesQuery();
    const { loading: loadingAd, error: errorAd, data: dataAd } = useGetAdByIdQuery({
        variables: { getAdByIdId : `${adId}` }
    });
    const [replaceAd, { loading: loadingSub, error: errorSub }] = useReplaceAdMutation({
        refetchQueries: [
            REPLACE_AD_BY_ID, // DocumentNode object parsed with gql
            'GetAds'
          ],
    });

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
        console.log('formattedData', formattedData)
        replaceAd({ 
            variables: {data: formattedData as AdInput, adId:  `${adId}`},
            });  
        navigate(`/ads/${dataAd?.getAdById?.id}`);
       }

    if (loading || loadingAd || loadingSub) return <p>Loading...</p>;
    if (error || errorAd || errorSub) return <p>Error :</p>;
    if (!data) return <p>Something wrong...</p>;

    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label htmlFor="title">Titre de l'annonce :</label>
                <input className="text-field" type="string" name='title'  defaultValue={dataAd?.getAdById?.title}/>

                <label htmlFor="description">Description :</label>
                <textarea name="description" placeholder="Je vends ..." defaultValue={dataAd?.getAdById?.description}></textarea>

                <label htmlFor="owner">Propriétaire :</label>
                <input className="text-field" type="string" name='owner' defaultValue={dataAd?.getAdById?.owner}/>

                <label htmlFor="location">Localisation :</label>
                <input className="text-field" type="string" name='location' defaultValue={dataAd?.getAdById?.location}/>

                <label htmlFor="picture">Picture :</label>
                <input className="text-field" type="string" name='picture' defaultValue={dataAd?.getAdById?.picture} />

                <label htmlFor="price">Prix :</label>
                <input className="text-field" type="number" name='price' defaultValue={dataAd?.getAdById?.price} />

                <label htmlFor="category">Categorie :</label>
                <select className="text-field" name="category" defaultValue={dataAd?.getAdById?.category.id}>
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
                    className="basic-multi-select"
                    delimiter=","
                    defaultValue={ dataAd?.getAdById?.tags?.map((tag) => ({value:tag.id, label:tag.name}))}
                />

                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default AdEditForm;