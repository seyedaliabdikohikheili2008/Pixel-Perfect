import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import Button from "../../../../atoms/Butoon/Button";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import toast from "react-hot-toast";
import { useUpdateProfileInfo } from "../../../../../core/hooks/queries/user-panel/profile/useUpdateProfileInfo";

const HomeAddress = () => {
  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
  } = useProfileInfo();

  const { mutate: updateProfile, isPending } = useUpdateProfileInfo();

  const [location, setlocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    if (ProfileInfo?.data?.latitude && ProfileInfo?.data?.longitude) {
      setlocation({
        latitude: Number(ProfileInfo.data.latitude),
        longitude: Number(ProfileInfo.data.longitude),
      });
    }
  }, [ProfileInfo]);

  const ChangeView = () => {
    const map = useMap();
    const center = [Number(location.latitude), Number(location.longitude)];
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, []);

    return null;
  };

  const HandleLocation = () => {
    useMapEvent({
      click(e) {
        const { lat, lng } = e.latlng;
        setlocation({
          latitude: lat,
          longitude: lng,
        });
      },
    });
    return null;
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
  console.log(location);

  return (
    <>
      <div className="w-full flex flex-col gap-6 items-start">
        <h2 className="text-lg flex gap-5 items-center text-primary-500 font-bold">
          داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
          <Button
            onClick={() => {
              if (!isPending) {
                handleSubmit();
              }
            }}
            children={`${isPending ? "درحال ارسال..." : "تایید موقعیت مکانی"}`}
          />
        </h2>
        <div className="w-full h-70">
          <MapContainer
            className="z-10"
            center={[36.59729612973962, 53.06460213556759]}
            zoom={15}
            style={{ height: "100%", width: "100%", borderRadius: "20px" }}
          >
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <HandleLocation />
            {location?.latitude && location?.longitude && <ChangeView />}
            {location?.latitude && location?.longitude && (
              <Marker position={[location.latitude, location.longitude]} />
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default HomeAddress;
