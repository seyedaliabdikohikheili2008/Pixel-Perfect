import React, { useEffect, useRef, useState } from "react";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import nmp_mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";

import Button from "../../../../atoms/Butoon/Button";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useUpdateProfileInfo } from "../../../../../core/hooks/queries/user-panel/profile/useUpdateProfileInfo";

import toast from "react-hot-toast";

const HomeAddress = () => {
  const { data: ProfileInfo } = useProfileInfo();

  const { mutate: updateProfile, isPending } = useUpdateProfileInfo();

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // گرفتن موقعیت ذخیره شده کاربر
  useEffect(() => {
    if (ProfileInfo?.data?.latitude && ProfileInfo?.data?.longitude) {
      setLocation({
        latitude: Number(ProfileInfo.data.latitude),
        longitude: Number(ProfileInfo.data.longitude),
      });
    }
  }, [ProfileInfo]);

  // بروزرسانی مارکر و مرکز نقشه هنگام تغییر location
  useEffect(() => {
    if (!mapRef.current) return;
    if (!location.latitude || !location.longitude) return;

    mapRef.current.flyTo({
      center: [location.longitude, location.latitude],
      zoom: 15,
    });

    if (!markerRef.current) {
      markerRef.current = new nmp_mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(mapRef.current);
    } else {
      markerRef.current.setLngLat([location.longitude, location.latitude]);
    }
  }, [location]);

  // زمانی که نقشه ساخته شد
  const mapSetter = (map) => {
    mapRef.current = map;

    // اگر مختصات قبلاً وجود داشت
    if (location.latitude && location.longitude) {
      markerRef.current = new nmp_mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);

      map.flyTo({
        center: [location.longitude, location.latitude],
        zoom: 15,
      });
    }

    // انتخاب موقعیت با کلیک روی نقشه
    map.on("click", (e) => {
      const { lng, lat } = e.lngLat;

      setLocation({
        latitude: lat,
        longitude: lng,
      });
    });
  };

  const handleSubmit = () => {
    if (!location.latitude || !location.longitude) {
      toast.error("لطفا موقعیت خود را انتخاب کنید");
      return;
    }

    const formData = new FormData();

    formData.append("FName", ProfileInfo?.data?.fName);
    formData.append("LName", ProfileInfo?.data?.lName);
    formData.append("BirthDay", ProfileInfo?.data?.birthDay);

    formData.append("Latitude", String(location.latitude));
    formData.append("Longitude", String(location.longitude));

    updateProfile(formData, {
      onSuccess: () => {
        toast.success("موقعیت مکانی آپدیت شد");
      },
      onError: (err) => {
        toast.error("ابتدا تاریخ تولد خود را وارد کنید");
        console.log(err?.response?.data);
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 items-start">
      <h2 className="text-lg flex flex-wrap gap-5 items-center text-primary-500 font-bold">
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
        <Button
          onClick={() => {
            if (!isPending) {
              handleSubmit();
            }
          }}
        >
          {isPending ? "درحال ارسال..." : "تایید موقعیت مکانی"}
        </Button>
      </h2>

      <div className="w-full h-70 rounded-2xl overflow-hidden">
        <MapComponent
          options={{
            mapKey: import.meta.env.VITE_MAP_API_KEY,
            mapType: MapTypes.neshanVector,
            center: [53.06460213556759, 36.59729612973962],
            zoom: 15,
          }}
          mapSetter={mapSetter}
        />
      </div>
    </div>
  );
};

export default HomeAddress;
