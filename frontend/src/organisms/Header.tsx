import { useEffect, useState } from "react";
import axios from 'axios';
import AdCategory from '../molecules/AdCategory';
import { Link } from "react-router-dom";
import Category from "../types/Category";
import { Search } from "../molecules/Search";

function Header() {

  const [categories, setCategories] = useState<Category[]>([]);


  const fetchData = async () => {
    const { data } = await axios.get<Category[]>("http://localhost:4000/categories")
    setCategories( data );
 }
  useEffect(() => {
    fetchData()
  }, [])

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
            <Link to="/ads/new" className="button link-button">
              <span className="mobile-short-label">Publier</span>
              <span className="desktop-long-label">Publier une annonce</span>
            </Link>
          </div>
          <div className="d-flex justify-content-between">   
            {categories.map((cat) => {
              return <div key={cat.id}>
                  <AdCategory
                    name={cat.name}
                    id={cat.id}
                  />
                </div>
                })
              } 
          </div>
        </header>
          <Search /> 
      </>
  );
}



export default Header
