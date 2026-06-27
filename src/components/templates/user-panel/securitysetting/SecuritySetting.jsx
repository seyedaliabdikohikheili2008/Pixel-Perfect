import React, { useEffect, useState } from "react";
import ChangePassword from "./changePassword/ChangePassword";
import Input from "../../../atoms/Input/Input";
import Button from "../../../atoms/Butoon/Button";
import { updateTwoFactorAuth } from "../../../../core/services/user-panel/dashboard/putEditSecurity";
import toast from "react-hot-toast";
import Loading from "../../../atoms/loading/Loading";
import { getUserSecuritySettings } from "../../../../core/services/user-panel/dashboard/getUserSecuritySettings";
import { useTranslation } from "react-i18next";

const SecuritySetting = () => {
  const { t } = useTranslation("userPanel");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTwoFactorChange = async (e) => {
    const checked = e.target.checked;

    if (checked) {
      setTwoFactorEnabled(true);
      setShowForm(true);
    } else {
      setLoading(true);
      try {
        await updateTwoFactorAuth({
          twoStepAuth: false,
          recoveryEmail: recoveryEmail,
          telegramUsername: telegramUsername,
        });
        setTwoFactorEnabled(false);
        setRecoveryEmail("");
        setTelegramUsername("");
        setShowForm(false);
      } catch (error) {
        setTwoFactorEnabled(true);
        toast(t("securitySettings.errorOne"));
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmitTwoFactor = async () => {
    if (!recoveryEmail || !telegramUsername) {
      toast(t("securitySettings.errorTwo"));
      return;
    }

    setLoading(true);
    try {
      await updateTwoFactorAuth({
        twoStepAuth: true,
        recoveryEmail: recoveryEmail,
        telegramUsername: telegramUsername,
      });
      setTwoFactorEnabled(true);
      setShowForm(false);
    } catch (error) {
      toast(t("securitySettings.errorThree"));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const fetchSecurityStatus = async () => {
      try {
        const response = await getUserSecuritySettings();
        const data = response.data;

        setTwoFactorEnabled(data.twoStepAuth || false);
        setRecoveryEmail(data.recoveryEmail || "");
        setTelegramUsername(data.userTelegrams?.telegramId || "");

        if (data.twoStepAuth) {
          setShowForm(true);
        }
      } catch (error) {
        toast(t("securitySettings.errorFour"));
      }
    };

    fetchSecurityStatus();
  }, []);

  return (
    <div className="m-auto w-11/12 flex flex-col gap-5">
      <h2 className="text-textC text-3xl font-bold text-right">
        {t("layout.securitySettings")}
      </h2>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h3 className="font-normal text-right text-textC text-nowrap">
            {t("securitySettings.changePassword")}
          </h3>
          <div className="w-full h-px bg-gray-300 my-3"></div>
        </div>
        <ChangePassword />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h3 className="font-normal text-right text-textC text-nowrap">
            {t("securitySettings.title")}
          </h3>
          <div className="w-full h-px bg-gray-300 my-3"></div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="twoFactor"
            id="twoFactor"
            className="w-4 h-4"
            checked={twoFactorEnabled}
            onChange={handleTwoFactorChange}
            disabled={loading}
          />
          <label className="text-textC" htmlFor="twoFactor">
            {t("securitySettings.checkBox")}
          </label>
        </div>

        {showForm && (
          <div className="bg-background rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] p-4 flex flex-col gap-4 w-full max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <div className="  flex flex-col justify-start gap-1 ">
                <label className="text-neutral-400 text-sm flex justify-start px-3">
                  {t("securitySettings.recoveryEmail")}
                </label>
                <Input
                  label={t("securitySettings.recoveryEmail")}
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  boxClassname="text-right border-t-2 border-solid border-gray-500 text-sm transition-all duration-200"
                  dir="ltr"
                />
              </div>
              <div className=" flex flex-col justify-start gap-1 ">
                <label className="text-neutral-400 text-sm flex justify-start px-3">
                  {t("securitySettings.telegramUsername")}
                </label>
                <Input
                  label={t("securitySettings.telegramUsername")}
                  type="text"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  placeholder="username"
                  boxClassname="text-right border-t-2 border-solid border-gray-500 text-sm transition-all duration-200"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowForm(false);
                  setTwoFactorEnabled(false);
                }}
                disabled={loading}
              >
                {t("securitySettings.cancel")}
              </Button>

              <Button
                variant="primary"
                onClick={handleSubmitTwoFactor}
                disabled={loading}
                loading={loading}
              >
                {loading ? (
                  <Loading size={3} circleSize={3} />
                ) : (
                  t("securitySettings.enable")
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecuritySetting;
