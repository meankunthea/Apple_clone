import PropTypes from "prop-types";

const BigCard = ({
  title,
  description,
  subtitle,
  image,
}) => {
  return (
    <div
      className="
        shrink-0
        w-[618px]
        h-[623px]
        rounded-[28px]
        overflow-hidden
        bg-white
        shadow-lg
      "
    >
      {/* Text Section */}
      <div className="h-[280px] px-8 pt-8 text-center">
        <h2
          className="
            text-[#1d1d1f]
            text-[28px]
            font-semibold
            leading-tight
            whitespace-pre-line
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-4
            text-[#6e6e73]
            text-[17px]
            leading-relaxed
          "
        >
          {description}
        </p>

        <p
          className="
            mt-4
            text-[#0066cc]
            text-[17px]
            
          "
        >
          {subtitle}
        </p>
      </div>


      {/* Image Section */}
      <div
        className="
          h-[343px]
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
    </div>
  );
};


BigCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BigCard;