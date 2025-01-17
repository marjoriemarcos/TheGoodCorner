import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TagInput, useCreatedTagMutation } from "../libs/graphql/generated/graphql-types";
import { GET_TAGS } from "../libs/graphql/operations";

const TagCreatForm = () => {
    const [createdTagMutation, { data, loading, error }] = useCreatedTagMutation({
        refetchQueries: [{ query: GET_TAGS }]
})

    const navigate = useNavigate()
    
    const hSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        createdTagMutation({ 
            variables: {data: formJson as TagInput},
            }); 
       }


    useEffect(() => {
		if (!data) return;
		navigate(`/`);

	}, [data, navigate]);
	console.log("🚀 ~ TagCreatForm ~ data:", data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label htmlFor="name">Nom du tag</label>
                <input className="text-field" type="string" name='name' />
                <button className="button my-2" disabled={loading}>Submit</button>
            </form>
        </div>
    );
};

export default TagCreatForm;