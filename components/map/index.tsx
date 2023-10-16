import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

const GoogleMapComponent = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          zoom: 17,
          center: { lat: 37.5407622, lng: 127.0706095 },
        }
      );
    };

    if (typeof google !== "undefined") {
      initMap();
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "500px", width: "80%" }} />

      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}&callback=initMap`}
        async
      />
    </div>
  );
};

export default GoogleMapComponent;
