import React from "react";
import "../styles/globals.css";

import AlpacaImage from "../componens/alpaca";

// TODO: load all StaticImageData
import accessory from "../public/images/accessories/headphone.png";
import background from "../public/images/backgrounds/blue70.png";
import hair from "../public/images/hair/default.png";
import eye from "../public/images/eyes/default.png";
import ear from "../public/images/ears/default.png";
import neck from "../public/images/neck/default.png";
import mouth from "../public/images/mouth/default.png";
import leg from "../public/images/leg/default.png";
import nose from "../public/images/nose.png";

function Home() {
  return (
    // TODO: set 'use client'
    // TODO: load all staticImageData using setState
    <div className="bg-slate-400 p-5 flex flex-col gap-4">
      <h1 className="text-3xl font-bold bg-yellow-500 p-2">
        AlPACA IMAGE GENERATOR
      </h1>

      <div className="p-2 flex gap-10">
        <div className="flex-1 gap-10 relative h-300">
          <AlpacaImage
            params={{
              bgImage: background,
              accessory: accessory,
              hair: hair,
              eye: eye,
              ear: ear,
              neck: neck,
              mouth: mouth,
              leg: leg,
              nose: nose,
            }}
          />
        </div>

        <div className="flex-1">
          {/* TODO: add buttons */}
          {/* TODO: new component 'setStyle' */}
          buttons
        </div>
      </div>
    </div>
  );
}

export default Home;
