import AdCategory from '../molecules/AdCategory';
import { Link } from "react-router-dom";
import { Search } from '../molecules/Search';
import { useGetCategoriesQuery } from '../libs/graphql/generated/graphql-types';
import DropdownMenu from '../molecules/DropDownMenu';

function Header() {
  const { loading, error, data } = useGetCategoriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
      <>
        <header className="header p-3">
          <div className="main-menu">
            <h1>
              <Link to="/" className="button logo link-button">
                <span className="mobile-short-label">TGC</span>
                <span className="desktop-long-label">THE GOOD CORNER</span>
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
