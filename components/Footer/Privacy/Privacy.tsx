import { useTranslation } from "next-i18next";
import { Divider } from "../Divider/Divider";
import styles from "./Privacy.module.scss";

export const Privacy: React.FC = () => {
  const { t } = useTranslation("footer");

  return (
    <div className={styles.Privacy}>
      <Divider />

      <div className={styles.Privacy__Content}>
        <div className={styles.Privacy__Text}>{t("rights")}</div>

        <div className={styles.Privacy__Text}>{t("privacy")}</div>
      </div>
    </div>
  );
};
