import React from "react";
import { Link } from "react-router-dom";
import { useWishList } from "../context/WishListContext";

const HorSlider = ({ product, home,filter }) => {
    // Destructure the product properties
    const { id,src,name,to } = product;

    // Destructure wishlist context methods and state
    const { toggleItemWishList, list } = useWishList();

    return (
        // Link to the product details page
        <div>
            <div className="xs:m-2 xs:text-xs md:text-sm xs:w-[180px] xs:h-[250px] md:w-[250px] md:h-[300px] flex justify-between flex-col border-1 hover:border-black p-2 relative">


                {/* Product image */}
                <div className="xs:h-2/3 sm:h-1/2 md:h-2/3 md:w-5/6 xs:text-sm md:text-base flex items-center ">
                    <Link to={`/product-details/${product.id}`}>
                        <img src={src} alt={name} />
                    </Link>
                </div>

                {/* Product title */}
                <p>{name}</p>
            </div>
        </div>
    );
};

export default HorSlider;
