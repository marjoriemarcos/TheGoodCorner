import AdCategory from '../molecules/AdCategory';
import { Link } from "react-router-dom";
import { Search } from '../molecules/Search';
import { useGetCategoriesQuery } from '../libs/graphql/generated/graphql-types';
import DropdownMenu from '../molecules/DropDownMenu';
import { useUserStore } from '../libs/zustand/useUserStore';

function Header() {
  const { loading, error, data } = useGetCategoriesQuery();
  const setUserToStore = useUserStore((state) => state.logout);

  const logout = () => {
    setUserToStore()
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
      <>
        <header className="header p-3">
          <div className="main-menu">
            <h1>
              <Link to="/" className="button logo link-button">
                <span className="mobile-short-logo">TGC</span>
                <span className="desktop-long-logo">THE GOOD CORNER</span>
              </Link>
            </h1>
            <div className='link-header'>
            <Link to="/ads/new" className="button link-button">
              <span className="mobile-short-label">Publier</span>
              <span className="desktop-long-label">Publier une annonce</span>
            </Link>
            <Link to="/tags/new" className="button link-button">
              <span className="mobile-short-label">Publier</span>
              <span className="desktop-long-label">Ajouter un tag</span>
            </Link>
            <Link to="/login" className="button link-button">
              <span className="mobile-short-label">Login</span>
              <span className="desktop-long-label">Se connecter</span>
            </Link>
            <Link to="/signup" className="button link-button">
              <span className="mobile-short-label">Signup</span>
              <span className="desktop-long-label">Créer un compte</span>
            </Link>
            <button className="button" onClick={logout}>Logout</button>
            </div>
          </div>
          <div className="d-flex justify-content-between">   
            {data?.getCategories.map((cat) => {
              return <div key={cat.id}>
                  <AdCategory
                    name={cat.name}
                    id={Number(cat.id)}
                  />
                </div>
                })
              } 
          </div>
          <DropdownMenu></DropdownMenu>
        </header>
          <Search /> 
      </>
  );
}



export default Header
