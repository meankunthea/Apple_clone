import PropTypes from "prop-types";

const BigCard = ({ title, description, image, subtitle }) => {
  return (
   
  <div className="shrink-0 w-[618px] h-[623px] rounded-[20px] overflow-hidden bg-white shadow-lg">
    <div className="p-6 text-center">
      <h3 className="text-[28px] font-semibold text-[#1d1d1f] whitespace-pre-line">
        {title}
      </h3>

      <p className="mt-2 text-[17px] text-[#1d1d1f] whitespace-pre-line">
        {description}
      </p>

      <p className="mt-3 text-[17px] text-[#0066CC]">
        {subtitle}
      </p>
    </div>

    <img
      src={image}
      alt={title}
      className="w-full h-[360px] object-cover"
    />
  </div>

  );
};

BigCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

BigCard.defaultProps = {
  badge: "",
};

export default BigCard;
