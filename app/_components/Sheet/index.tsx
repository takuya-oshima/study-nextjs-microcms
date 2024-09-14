import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({children} : Props) {
  return <div id="aaa" className={styles.container}>{children}</div>
}
