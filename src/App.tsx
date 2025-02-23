import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import CreateAgent from "./pages/CreateAgent";
import YourAgent from "./pages/YourAgent";
import Profile from "./pages/Profile";
import Start from "./pages/Start.tsx";
import Manage from "./pages/Manage.tsx";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";

type Network = "mainnet-beta" | "testnet" | "devnet";

function App() {
  const network: Network = "devnet";
  const endpoint = clusterApiUrl(network);

  const wallets = useMemo(
    () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <MainContent />
          </Router>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function MainContent() {
  const location = useLocation();
  const isStartPage = location.pathname === "/";

  return (
    <>
      <div className="pt-20">
        <Header />
        {isStartPage ? (
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
        ) : (
          <Layout>
            <Routes>
              <Route path="/createagent" element={<CreateAgent />} />
              <Route path="/youragent" element={<YourAgent />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        )}
      </div>
    </>
  );
}

export function WalletConnector() {
  const { publicKey, connect, disconnect, connected } = useWallet();

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <div className="wallet-connector">
      {connected && publicKey ? (
        <>
          <span>
            Connected: {publicKey.toBase58().slice(0, 4)}...
            {publicKey.toBase58().slice(-4)}
          </span>
          <button
            onClick={handleDisconnect}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={handleConnect}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

export default App;