import baseConfig from "@/util/baseConfig";
import DiscordLogo from "./Logos/DiscordLogo";
import RedditLogo from "./Logos/RedditLogo";
import TelegramLogo from "./Logos/TelegramLogo";
import TwitterLogo from "./Logos/TwitterLogo";

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
      <a href={baseConfig.reddit} target="_blank">
        <button className="btn btn-secondary w-full">
          <RedditLogo /> Join our Reddit
        </button>
      </a>
    </>
  );
};

export default SocialsButtonGroup;
