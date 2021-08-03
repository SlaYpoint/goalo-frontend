export const ProductCard = ({ product }) => {
    
    return (
      <div className="product-card flex-col p-2 box-shadow bg-color-white cur-point">
        <div className="">
          <div className="flex-grow pos-rel">
            <img
              className="img-res"
              src={product.imageUrl}
              alt={product.name}
              loading="lazy"
            />
            {!product.inStock && (
              <div className="pos-abs top h-full w-full flex center">
                <div className="w-full text-bold p-2 color-3 bg-color-2">
                  Out of stock!
                </div>
              </div>
            )}
          </div>
          <h3 className="card-heading m-1">{product.name}</h3>
        </div>
        <div className="card-price m-h-1">
          <span className="price-discounted">{product.discountPrice}</span>
          <span className="price-original">{product.price}</span>
        </div>
        <div className="flex center">Add to cart</div>
      </div>
    );
}
