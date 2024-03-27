import baseConfig from "@/util/baseConfig";
import React from "react";
import TelegramLogo from "./TelegramLogo";
import TwitterLogo from "./TwitterLogo";
import DiscordLogo from "./DiscordLogo";

const SocialsButtonGroup = () => {
  return (
    <>
      <a href={baseConfig.twitter} target="_blank">
        <button className="btn btn-secondary w-full">
          <TwitterLogo /> Follow us on X
        </button>
      </a>
      <a href={baseConfig.telegram} target="_blank">
        <button className="btn btn-secondary w-full">
          <TelegramLogo /> Join our Telegram
        </button>
      </a>
      <a href={baseConfig.discord} target="_blank">
        <button className="btn btn-secondary w-full">
          <DiscordLogo /> Join our Discord
        </button>
      </a>
    </>
  );
};

export default SocialsButtonGroup;
