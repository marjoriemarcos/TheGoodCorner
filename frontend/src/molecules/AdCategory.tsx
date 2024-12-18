import { Link } from "react-router-dom";
import Category from "../types/Category";

function AdCategory( props: Category ) {
  return (
      <div>
          <nav className="categories-navigation">
                <Link to={`/categories/${props.id}`} className="category-navigation-link" key={ props.id }> 
                    { props.name }
                </Link> 
          </nav>
      </div>
  );
}

export default AdCategory
