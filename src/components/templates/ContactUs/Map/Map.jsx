import React from "react";
import telephon from "../../../../assets//images/contactUs/telephon.png";
import telegram from "../../../../assets//images/contactUs/telegram.png";
import instagram from "../../../../assets//images/contactUs/instagram.png";
import web from "../../../../assets//images/contactUs/web.png";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {

  return (
    <div className="w-11/12 p-5 m-auto flex flex-col md:flex-row gap-10 mb-10">
      <div className=" w-full xl:w-1/4 bg-primary-200 p-5 rounded-xl flex flex-col gap-5">
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={web} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">ادرسه سایت</p>
            <p className="font-bold text-sm text-neutral-300">WWW.BaHr-AC.iR</p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={telephon} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">شماره</p>
            <p className="font-bold text-sm text-neutral-300">0933-296-5018</p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={telegram} alt="" />
          <div className="text-right">
            <p className="font-bold text-lg text-textC">ادرس تلگرام</p>
            <p className="font-bold text-sm text-neutral-300">
              https://t.me/Bahr_AC
            </p>
          </div>
        </div>
        <div className="flex items-center bg-background p-1.5 rounded-lg gap-3">
          <img src={instagram} alt="" />
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
      center={[36.59729612973962,53.06460213556759]}
      zoom={15}
      style={{height:"100%",width:"100%", borderRadius:"20px"}}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>

      </div>
    </div>
  );
};

export default Map;
