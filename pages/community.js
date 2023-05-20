import React from "react";
import CommunityCard from "../components/CommunityCard";

const community = () => {
  return (
    <div className="p-8 pt-12">
      <div className="grid grid-cols-2 gap-4">
        {nftRewards.map((nftReward, index) => (
          <CommunityCard image={`/image${index}.svg`} />
        ))}
      </div>
    </div>
  );
};

export default community;
