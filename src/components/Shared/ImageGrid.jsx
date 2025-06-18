import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ImageGrid = ({ imageGroups, columns = "grid-cols-2 md:grid-cols-4", gap = "gap-4", containerClass = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const allImages = imageGroups.flat();

  const openModal = (index) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className={`container mx-auto p-4 ${containerClass}`}>
      <div className={`grid ${columns} ${gap}`}>
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-4">
            {group.map((src, i) => {
              const flatIndex = groupIndex * group.length + i;
              return (
                <div key={i}>
                  <img
                    className="h-auto max-w-full rounded-lg drop-shadow-lg cursor-pointer hover:scale-105 transition"
                    src={src}
                    alt={`Image ${groupIndex}-${i}`}
                    onClick={() => openModal(flatIndex)}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Swiper */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal} className="fixed inset-0 z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="max-w-5xl w-full relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 text-white bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Swiper Slider */}
              <Swiper
                initialSlide={startIndex}
                modules={[Navigation, Keyboard]}
                navigation
                keyboard
                spaceBetween={30}
              >
                {allImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`Slide ${i}`}
                      className="max-h-[90vh] mx-auto rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
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

