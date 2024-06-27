import useSWR from "swr";
import { Link } from "react-router-dom";

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Filternav = () => {
  const {
    data: navItems,
    error,
    isValidating,
  } = useSWR("https://fakestoreapi.com/products/categories", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">fehler beim Laden</div>;
  if (isValidating) return <div className="Loading">Wird geladen...</div>;

  //console.log(navItems)

  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      {navItems &&
        navItems.map((item) => (
          <li key={item} className="menu-title">
            <Link to={`category/${item}`}>{item}</Link>
            {/* <a href={`category/${item}`} className="justify-between">{item}</a> */}
          </li>
        ))}
    </ul>
  );
};

export default Filternav;
