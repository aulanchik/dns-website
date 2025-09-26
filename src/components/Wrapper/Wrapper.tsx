import { FC } from "react";
import styles from "./Wrapper.module.scss";

type Props = {
    children: React.ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
