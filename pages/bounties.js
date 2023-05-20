import React from "react";
import styles from "../styles/Home.module.css";
import BountyCard from "../components/BountyCard";

const bounties = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex flex-col gap-[50px]">
          <BountyCard />
          <BountyCard />
          <BountyCard />
          <BountyCard />
          <BountyCard />
          <BountyCard />
        </div>
      </main>
    </div>
  );
};

export default bounties;
