import React from "react";
import telephon from "../../../../assets/images/contactUs/telephon.png";
import darktelephon from "../../../../assets/images/contactUs/darktelephon.png";
import telegram from "../../../../assets/images/contactUs/telegram.png";
import darktelegram from "../../../../assets/images/contactUs/darktelegram.png";
import instagram from "../../../../assets/images/contactUs/instagram.png";
import darkinstagram from "../../../../assets/images/contactUs/darkinstagram.png";
import web from "../../../../assets/images/contactUs/web.png";
import darkweb from "../../../../assets/images/contactUs/drakweb.png";
import { useSelector } from "react-redux";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { Button } from "@heroui/react";
import { FaRoute } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Map = () => {
  const mode = useSelector((state) => state.DarkFlag.value);
  const { t } = useTranslation("contactUs");
  const position = {
    latitude: 36.59729612973962,
    longitude: 53.06460213556759,
  };

  const mapSetter = (map) => {
    const popup = new nmp_mapboxgl.Popup({
      offset: 25,
    }).setText("📍 آکادمی کد نویسی بحر");

    new nmp_mapboxgl.Marker()
      .setLngLat([position.longitude, position.latitude])
      .setPopup(popup)
      .addTo(map);
  };

  const handleNavigation = () => {
    window.location.href = `neshan://routing?destination=${position.latitude},${position.longitude}`;

    setTimeout(() => {
      window.open(
        `https://neshan.org/maps/routing/car?destination=${position.latitude},${position.longitude}`,
        "_blank",
      );
    }, 1000);
  };

  return (
    <div className="w-11/12 p-5 m-auto flex flex-col md:flex-row gap-10 mb-10">
      <div className="w-full xl:w-1/4 bg-primary-200 p-5 rounded-xl flex flex-col gap-5">
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode === "light" ? web : darkweb} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">{t("side.address")}</p>
            <p className="font-bold text-sm text-neutral-300">WWW.BaHr-AC.iR</p>
          </div>
        </div>

        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode === "light" ? telephon : darktelephon} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">{t("side.phone")}</p>
            <p className="font-bold text-sm text-neutral-300">0933-296-5018</p>
          </div>
        </div>

        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode === "light" ? telegram : darktelegram} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">{t("side.telegram")}</p>
            <p className="font-bold text-sm text-neutral-300">
              https://t.me/Bahr_AC
            </p>
          </div>
        </div>

        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode === "light" ? instagram : darkinstagram} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">{t("side.instagram")}</p>
            <p className="font-bold text-[12px] text-neutral-300">
              https://instagram.com/bahr_ac
            </p>
          </div>
        </div>
      </div>

      <div className="xl:w-2/3 relative w-full h-85.5 rounded-xl overflow-hidden">
        <MapComponent
          options={{
            mapKey: import.meta.env.VITE_MAP_API_KEY,
            mapType: MapTypes.neshanVector,
            center: [position.longitude, position.latitude],
            zoom: 15,
          }}
          mapSetter={mapSetter}
        />
        <Button
          className="absolute flex items-center justify-center bottom-20 right-5.25 w-12.75 h-12.75 bg-white rounded-full shadow-lg"
          color="primary"
          onPress={handleNavigation}
        >
          <FaRoute size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Map;
