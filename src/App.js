import "./App.css";
import { useEffect, useState } from "react";
import Category from "./components/Category";

import { fetcher, fetcherAsync } from "./fetcher";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const CATEGORIES_URL = "categories";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcherAsync(CATEGORIES_URL);
      setCategories(data);
    };

    fetchData();
    console.log("INIT PAGE");
  }, []);

  const PRODUCT_BY_ID = "products?catId=";
  const handleCategoryClick = (id) => {
    console.log(id);
    fetcher(PRODUCT_BY_ID + id, setProducts);
  };

  const renderCategories = () => {
    return categories.map((d) => (
      <Category
        key={d.id + "_" + d.title.toString()}
        id={d.id}
        title={d.title}
        onClick={() => handleCategoryClick(d.id)}
      />
    ));
  };
  const renderProducts = () => {
    return products.map((p) => (
      <Category
        key={p.id + "_" + p.title.toString()}
        id={p.id}
        title={p.title}
        onClick={() => handleCategoryClick(p.id)}
      />
    ));
  };
  return (
    <>
      <header>My Store</header>

      <section>
        <nav>{categories && renderCategories()}</nav>
        <article>
          <h1>Products</h1>
          {products && renderProducts()}
        </article>
      </section>

      <footer>footer</footer>
    </>
  );
}

export default App;
