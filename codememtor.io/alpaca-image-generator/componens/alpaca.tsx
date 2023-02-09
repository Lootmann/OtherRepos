import React from "react";
import Image, { StaticImageData } from "next/image";

// alpaca images
type Props = {
  params: {
    bgImage: StaticImageData;
    accessory: StaticImageData;
    hair: StaticImageData;
    eye: StaticImageData;
    ear: StaticImageData;
    neck: StaticImageData;
    mouth: StaticImageData;
    leg: StaticImageData;
    nose: StaticImageData;
  };
};

function AlpacaImage({ params }: Props) {
  return (
    <>
      <Image
        src={params.bgImage}
        alt="Background"
        className="absolute top-0 left-0"
      />
      <Image src={params.ear} alt="Ears" className="absolute top-0 left-0" />
      <Image src={params.leg} alt="Leg" className="absolute top-0 left-0" />
      <Image src={params.neck} alt="Neck" className="absolute top-0 left-0" />
      <Image src={params.hair} alt="Hair" className="absolute top-0 left-0" />
      <Image
        src={params.accessory}
        alt="Accessory"
        className="absolute top-0 left-0"
      />
      <Image src={params.eye} alt="Eyes" className="absolute top-0 left-0" />
      <Image src={params.nose} alt="Nose" className="absolute top-0 left-0" />
      <Image src={params.mouth} alt="Mouth" className="absolute top-0 left-0" />
    </>
  );
}

export default AlpacaImage;
