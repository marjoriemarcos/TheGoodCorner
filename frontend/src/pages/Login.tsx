import { FormEvent, useEffect } from "react";
import { useLogInMutation, UserInputBis } from "../libs/graphql/generated/graphql-types";
import { useUserStore } from "../libs/zustand/useUserStore";

const Login = () => {
    const [loginSub, { loading: loadingSub, error: errorSub, data: dataSub }] = useLogInMutation();
    const currentUser = useUserStore((state) => state.user);
    const setUserToStore = useUserStore((state) => state.login);
    
    const hSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        await loginSub({ 
            variables: {data: formJson as UserInputBis},
            }); 
       }

       useEffect(() => {
        if (dataSub) {
          const profile = JSON.parse(dataSub.logIn);
          setUserToStore(profile);
        }
      }, [dataSub, setUserToStore]);

    if (loadingSub) return <p>Loading...</p>;
    if (errorSub) return <p>Error :</p>;
    return (
        <div className="form-container">
            <form onSubmit={hSubmit}>
                <label htmlFor="email">Adresse email :</label>
                <input className="text-field" type="string" name='email' />

                <label htmlFor="hashedPassword">Mot de passe :</label>
                <input className="text-field" name="hashedPassword" ></input>

                <button className="button my-2" disabled={loadingSub}>Submit</button>
            </form>
            {currentUser && <p>Hello {currentUser.name}</p>} 
        </div>
    );
};


export default Login;