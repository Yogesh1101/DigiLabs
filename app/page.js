import Image from "next/image";
import styles from "./page.module.css";
import BgImage from "./Error msg/Illustration.png";
import Notification from "./notification.png";
import SendButton from "./button.png";

// ("use client");

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Lorem Ipsum...</p>
      <p className={styles.description}>Lorem ipsum dolor sit amet.</p>
      <Image src={BgImage} className={styles.bgImage} alt="title"></Image>
      <Image
        src={Notification}
        className={styles.notification}
        alt="description"
      ></Image>
      <button className={styles.sendBtn}>
        <Image src={SendButton} alt="submit"></Image>
      </button>
    </main>
  );
}
