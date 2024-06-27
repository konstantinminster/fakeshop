export const ProductCard = ({ title, img, price, categoryName }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="h-48 bg-white">
        <img src={img} alt="{title}" className="object-contain w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <a href={categoryName} className="btn btn-ghost">
          alle Produkte aus {categoryName} anzeigen
        </a>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
