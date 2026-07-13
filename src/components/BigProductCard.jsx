import PropTypes from "prop-types";

const BigProductCard = ({
  title,
  description,
  image,
  badge,
}) => {
  return (
    <div className="shrink-0 w-[480px] h-[500px] rounded-[20px] overflow-hidden shadow-lg">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {badge && (
          <span className="absolute left-6 top-5 text-[14px]  text-[#424245] z-10">
            {badge}
          </span>
        )}

        <div className="absolute inset-0  px-6 py-6 ">
          <div className="pt-8 space-y-1">
            <h3 className="text-[28px] text-[#1d1d1f] font-semibold">
              {title}
            </h3>

            <p className="text-[14px] ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

BigProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  badge: PropTypes.string,
};

BigProductCard.defaultProps = {
  badge: "",
};

export default BigProductCard;