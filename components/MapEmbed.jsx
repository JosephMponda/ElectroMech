"use client";
import { useState } from "react";

const query = "Guoji Shopping Complex Area 49 Lilongwe Malawi";

export function MapEmbed() {
  const [load, setLoad] = useState(false);
  const external = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  return (
    <div className="map-wrap">
      {load ? (
        <iframe
          title="ElectroMech Solutions location in Kawale, Lilongwe"
          src={"https://www.google.com/maps?q=" + encodeURIComponent(query) + "&output=embed"}
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="map-placeholder">
          <p>Shop A2, Guoji Shopping Complex, Area 49, Kawale, Lilongwe</p>
          <div className="map-actions">
            <button className="button" type="button" onClick={() => setLoad(true)}>
              Show map
            </button>
            <a className="button button--outline" href={external} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
