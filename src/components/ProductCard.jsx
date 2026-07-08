import PropTypes from "prop-types";

const ProductCard = ({
  title,
  description,
  price,
  image,
  badge,

}) => {
//   const cardBg = variant === "dark" ? "bg-[#111111]" : "bg-white";

  return (
   <div
  className={`shrink-0 w-[400px] h-[500px] rounded-[20px] overflow-hidden shadow-lg `}
>
  <div
    className="relative w-full h-full bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    {badge && (
      <span className="absolute left-6.5 top-5 text-[14px] font-semibold text-[#b64400] z-10">
        {badge}
      </span>
    )}

    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 px-6 py-6 text-white">
      <div className="pt-8 space-y-1">
        <h3 className="text-[28px] font-semibold">
          {title}
        </h3>

        <p className="text-[14px] font-semibold text-white">
          {description}
        </p>

        {price && (
          <p className="text-[14px] ">
            {price}
          </p>
        )}
      </div>
    </div>
  </div>
</div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  image: PropTypes.string.isRequired,
  badge: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark"]),
};

ProductCard.defaultProps = {
  price: "",
  badge: "",
  variant: "light",
};

export default ProductCard;