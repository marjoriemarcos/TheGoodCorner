import { Link } from "react-router-dom";

export type CategoriesCardProps = {
    id: number;
    name: string;
};

function AdCategory( props: CategoriesCardProps ) {
  return (
      <>
          <nav className="categories-navigation">
                <Link to="#" className="category-navigation-link" key={ props.id }> 
                    { props.name }
                </Link> 
          </nav>
      </>
  );
}

export default AdCategory
