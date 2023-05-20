import React from "react";
import styles from "../styles/Home.module.css";
import BountyCard from "../components/BountyCard";

const bounty_items = [
  {
    title: "Community Cleanup Initiative",
    description:
      "Reward individuals who organize and lead community cleanup events, fostering a cleaner and more sustainable local environment.",
  },
  {
    title: "Supporting Small Businesses",
    description:
      "Recognize community members who frequently shop at local businesses, boosting the local economy and supporting entrepreneurship.",
  },
  {
    title: "Volunteer Spotlight",
    description:
      "Highlight exceptional volunteers making a difference in the community, rewarding their dedication and inspiring others to get involved.",
  },
  {
    title: "Promoting Arts and Culture",
    description:
      "Acknowledge individuals organizing events or initiatives that promote local art, culture, and heritage, nurturing a vibrant community.",
  },
  {
    title: "Sustainable Innovations",
    description:
      "Reward innovative ideas or projects focused on sustainability, encouraging environmentally friendly practices within the community.",
  },
  {
    title: "Community Wellness Advocacy",
    description:
      "Recognize individuals who actively promote wellness and healthy living in the community, inspiring others to prioritize their well-being.",
  },
  {
    title: "Education Outreach Program",
    description:
      "Reward community members conducting educational workshops or programs, empowering others through knowledge and skills development.",
  },
  {
    title: "Community Garden Project",
    description:
      "Recognize individuals creating and maintaining community gardens, fostering a sense of shared responsibility and sustainable food production.",
  },
  {
    title: "Digital Inclusion Initiative",
    description:
      "Reward projects or efforts aimed at bridging the digital divide within the community, ensuring equal access to technology and digital resources.",
  },
  {
    title: "Social Impact Documentary",
    description:
      "Support individuals creating impactful documentaries that shed light on local social issues, inspiring positive change and community action.",
  },
];

const bounties = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="flex flex-col gap-[50px]">
          {bounty_items.map((bounty_item, index) => (
            <BountyCard
              title={bounty_item.title}
              description={bounty_item.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default bounties;
