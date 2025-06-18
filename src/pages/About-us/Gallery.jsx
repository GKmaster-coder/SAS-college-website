import React from "react";
import ImageGrid from "../../components/Shared/ImageGrid";

const Gallery = () => {
  const imageGroups = [
    [
      "https://i.pinimg.com/736x/8b/d8/0c/8bd80c0475cc6cbe04c007b84a6826dc.jpg",
      "https://i.pinimg.com/736x/52/36/a4/5236a4859fe2fb8c83c398f0bb8d64b1.jpg",
      "https://i.pinimg.com/736x/8a/94/4b/8a944b2c15ad363a450d3a5bb575201c.jpg",
    ],
    [
      "https://i.pinimg.com/736x/d4/f5/87/d4f58749352ae733ac086954d782f320.jpg",
      "https://i.pinimg.com/736x/ee/58/ff/ee58ffdaa69cd20af0312f5c6da0a068.jpg",
      "https://i.pinimg.com/736x/25/62/5f/25625f11c63977a85403e6fdc4b77297.jpg",
    ],
    [
      "https://i.pinimg.com/736x/ab/f3/e6/abf3e6b020c3976b54fb018a9934c695.jpg",
      "https://i.pinimg.com/736x/a0/40/8d/a0408d45d0122b60677254fa36fa4ce3.jpg",
      "https://i.pinimg.com/736x/d4/f5/87/d4f58749352ae733ac086954d782f320.jpg",
    ],
    [
      "https://i.pinimg.com/736x/1f/9f/08/1f9f08c6f7ba5fbdf552ee8aabe394ed.jpg",
      "https://i.pinimg.com/736x/34/b6/98/34b6986967eedeee472168626f4a2708.jpg",
      "https://i.pinimg.com/736x/3a/68/44/3a68440ff2d5f4ffa4e1f5563a83c5e6.jpg",
    ],
    [
      "https://i.pinimg.com/736x/6e/12/eb/6e12eb309e1cc3fee613f0f1eb5ac034.jpg",
      "https://i.pinimg.com/736x/c1/e2/bd/c1e2bda65737aee4c0a9c0058aa3f112.jpg",
      "https://i.pinimg.com/736x/c1/e2/bd/c1e2bda65737aee4c0a9c0058aa3f112.jpg",
    ],
    [
      "https://i.pinimg.com/736x/1f/9f/08/1f9f08c6f7ba5fbdf552ee8aabe394ed.jpg",
      "https://i.pinimg.com/736x/34/b6/98/34b6986967eedeee472168626f4a2708.jpg",
      "https://i.pinimg.com/736x/3a/68/44/3a68440ff2d5f4ffa4e1f5563a83c5e6.jpg",
    ],
    [
      "https://i.pinimg.com/736x/8b/d8/0c/8bd80c0475cc6cbe04c007b84a6826dc.jpg",
      "https://i.pinimg.com/736x/52/36/a4/5236a4859fe2fb8c83c398f0bb8d64b1.jpg",
      "https://i.pinimg.com/736x/8a/94/4b/8a944b2c15ad363a450d3a5bb575201c.jpg",
    ],
    [
      "https://i.pinimg.com/736x/d4/f5/87/d4f58749352ae733ac086954d782f320.jpg",
      "https://i.pinimg.com/736x/ee/58/ff/ee58ffdaa69cd20af0312f5c6da0a068.jpg",
      "https://i.pinimg.com/736x/25/62/5f/25625f11c63977a85403e6fdc4b77297.jpg",
    ],
  ];

  return (
    <div className="py-10 bg-[#fefaf6]">
      <h2 className="text-center text-4xl font-bold mb-8 text-amber-700">Campus Gallery</h2>
      <ImageGrid imageGroups={imageGroups} />
    </div>
  );
};

export default Gallery;
