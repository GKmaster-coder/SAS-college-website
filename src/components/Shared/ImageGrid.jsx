import React from "react";
import PropTypes from "prop-types";

const ImageGrid = ({ imageGroups, columns = "grid-cols-2 md:grid-cols-4", gap = "gap-4", containerClass = "" }) => {
  return (
    <div className={`container mx-auto p-4 ${containerClass}`}>
      <div className={`grid ${columns} ${gap}`}>
        {imageGroups.map((group, index) => (
          <div key={index} className="grid gap-4">
            {group.map((src, i) => (
              <div key={i}>
                <img
                  className="h-auto max-w-full rounded-lg drop-shadow-lg"
                  src={src}
                  alt={`Image ${index}-${i}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ImageGrid.propTypes = {
  imageGroups: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ).isRequired,
  columns: PropTypes.string,
  gap: PropTypes.string,
  containerClass: PropTypes.string,
};

export default ImageGrid;

