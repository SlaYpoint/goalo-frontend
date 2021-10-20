import { trimmer } from "../../helpers";

export const ProductCard = ({ product }) => {
    
    return (
      <>
        <div className="card-vertical default-container shadow-box">
          <div className="img-container badge-container">
            <img
              className="img-res card-img product-card-img"
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
            />
            <span
              style={{display : product.inStock ? "none" : "block"}}
              className="badge">
              sold out              
            </span>
          </div>
          <div className="text-container">
            <div className="text-container-title">
              <h6 className="product-title">
                {trimmer(product.name)}
                <button className="like-btn">
                  {/* <span>like</span> */}
                </button>
              </h6>
            </div>
            <div className="text-container-desc">
              <p className="flex-grow">
                Rs.{product.discountPrice}
                <span className="font-light font-striked">
                  {' '}
                  Rs.{product.price}
                </span>
              </p>
            </div>
            <div className="cta-container">
              <button className="btn btn-icon btn-primary">
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
