import { FormEvent, useEffect } from "react";
import Select from 'react-select';
import { useSignupMutation, UserInput, useGetRolesQuery } from "../libs/graphql/generated/graphql-types";
import { useUserStore } from "../libs/zustand/useUserStore";

const Signup = () => {
    const {loading, error, data} = useGetRolesQuery()
    const [signupSub, { loading: loadingSub, error: errorSub, data: dataSub }] = useSignupMutation();
    const currentUser = useUserStore((state) => state.user);
    const setUserToStore = useUserStore((state) => state.login);
    
    const hSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        await signupSub({ 
            variables: {data: formJson as UserInput},
            }); 
    }
    
    useEffect(() => {
        if (dataSub) {
          const profile = JSON.parse(dataSub.singUp);
          setUserToStore(profile);
        }
      }, [dataSub, setUserToStore]);

    if (loadingSub || loading) return <p>Loading...</p>;
    if (errorSub || error) return <p>Error :</p>;
    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label htmlFor="email">Adresse email :</label>
                <input className="text-field" type="string" name='email' />

                <label htmlFor="name">Nom :</label>
                <input className="text-field" type="string" name='name' />

                <label htmlFor="hashedPassword">Mot de passe :</label>
                <input className="text-field" name="hashedPassword" ></input>


                <label htmlFor="roles">Roles :</label>
                <Select
                isMulti
                name="roles"
                options={data?.getRoles.map((role) => ({
                    value: role.id,
                    label: role.name
                }))}
                delimiter=","
                />

                <button className="button my-2" disabled={loadingSub}>Submit</button>
            </form>
            {currentUser && <p>Hello {currentUser.name}</p>} 
        </div>
    );
};


export default Signup;