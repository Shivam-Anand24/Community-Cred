import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { HederaTestnet } from "@thirdweb-dev/chains";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={HederaTestnet}>
      <div className="navbar bg-primary">
        <div className="flex-1">
          <a className="text-white normal-case text-xl">
            Community Cred &nbsp; <i class="fa-solid fa-crown"></i>
          </a>
        </div>
        <div className="flex-none">
          <ConnectWallet theme="light" />
        </div>
      </div>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
