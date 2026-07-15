import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const SmallProductCard = ({ badge, image, title, price, variants = [] }) => {
  return (
    <div className="w-[313px] h-[500px] bg-white rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-6 shrink-0 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.01]">
      {/* Product Image */}
      <div className="flex justify-center items-center h-[270px]">
        <img src={image} alt={title} className="max-h-[220px] object-contain" />
      </div>

      {/* Variant Images */}
      {variants.length > 0 && (
        <div className="flex justify-center items-center gap-2 mb-6">
          {variants.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Variant ${index + 1}`}
              className="w-4 h-4 object-contain"
            />
          ))}
        </div>
      )}

      {/* Product Info */}
      <div className="flex flex-col flex-1">
        {badge && <p className="text-[12px] text-[#b64400]">{badge}</p>}

        <h3 className="text-[17px] font-semibold text-[#1d1d1f]">{title}</h3>

        <p className="mt-auto text-[14px] text-[#1d1d1f]">{price}</p>
      </div>
    </div>
  );
};

SmallProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
};

SmallProductCard.defaultProps = {
  variants: [],
};

export default SmallProductCard;
