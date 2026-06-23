import React from "react";
import telephon from "../../../../assets/images/contactUs/telephon.png";
import darktelephon from "../../../../assets/images/contactUs/darktelephon.png";
import telegram from "../../../../assets/images/contactUs/telegram.png";
import darktelegram from "../../../../assets/images/contactUs/darktelegram.png";
import instagram from "../../../../assets/images/contactUs/instagram.png";
import darkinstagram from "../../../../assets/images/contactUs/darkinstagram.png";
import web from "../../../../assets/images/contactUs/web.png";
import darkweb from "../../../../assets/images/contactUs/drakweb.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector } from "react-redux";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const Map = () => {
  const position = [36.59729612973962, 53.06460213556759];
  const mode = useSelector((state) => state.DarkFlag.value);

  return (
    <div className="w-11/12 p-5 m-auto flex flex-col md:flex-row gap-10 mb-10">
      <div className="w-full xl:w-1/4 bg-primary-200 p-5 rounded-xl flex flex-col gap-5">
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode == "light" ? web: darkweb} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">ادرس سایت</p>
            <p className="font-bold text-sm text-neutral-300">WWW.BaHr-AC.iR</p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode == "light" ? telephon: darktelephon} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">شماره</p>
            <p className="font-bold text-sm text-neutral-300">0933-296-5018</p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode == "light" ? telegram: darktelegram} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">ادرس تلگرام</p>
            <p className="font-bold text-sm text-neutral-300">
              https://t.me/Bahr_AC
            </p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={mode == "light" ? instagram: darkinstagram} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">ادرس اینستاگرام</p>
            <p className="font-bold text-[12px] text-neutral-300">
              https://instagram.com/bahr_ac
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-2/3 w-full h-85.5 rounded-xl">
        <MapContainer
          className="z-10"
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%", borderRadius: "20px" }}
        >
          <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              موقعیت ما 📍
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
