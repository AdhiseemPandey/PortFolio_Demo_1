"use client";

import React, { useState } from "react";
import {
  Wallet,
  Bitcoin,
  Send,
  CircleCheck as CheckCircle,
  CircleAlert as AlertCircle,
  Loader
} from "lucide-react";
import { ethers } from "ethers";

/* ---------- Types ---------- */
interface PaymentOption {
  name: string;
  symbol: string;
  network: string;
  address: string;
  icon: string;
  minAmount: number;
}

const CryptoPayment = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<PaymentOption | null>(null);
  const [amount, setAmount] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [paymentStatus, setPaymentStatus] =
    useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------- Payment Options ---------- */
  const paymentOptions: PaymentOption[] = [
    {
      name: "Ethereum",
      symbol: "ETH",
      network: "Ethereum Mainnet",
      address: "0x80dcddF902C067Eb87eae3dD83b969270f64351a",
      icon: "⟠",
      minAmount: 0.001
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      network: "Polygon Network",
      address: "0x80dcddF902C067Eb87eae3dD83b969270f64351a",
      icon: "⬟",
      minAmount: 1
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      network: "Ethereum Mainnet",
      address: "0x80dcddF902C067Eb87eae3dD83b969270f64351a",
      icon: "$",
      minAmount: 1
    }
  ];

  /* ---------- Helpers ---------- */
  const isMetaMaskInstalled = () =>
    typeof window !== "undefined" && Boolean(window.ethereum);

  const connectMetaMask = async () => {
    if (!isMetaMaskInstalled()) {
      setErrorMessage("MetaMask is not installed.");
      return;
    }

    try {
      setIsConnecting(true);
      const accounts = (await window.ethereum!.request({
        method: "eth_requestAccounts"
      })) as string[];

      setWalletAddress(accounts[0]);
      setErrorMessage("");
    } catch (err: any) {
      setErrorMessage(err.message || "Wallet connection failed");
    } finally {
      setIsConnecting(false);
    }
  };

  /* ---------- Native ETH / MATIC ---------- */
  const sendNativePayment = async () => {
    if (!selectedCrypto || !amount) return;

    try {
      setIsProcessing(true);
      setPaymentStatus("processing");

      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();

      const tx = await signer.sendTransaction({
        to: selectedCrypto.address,
        value: ethers.parseEther(amount)
      });

      setTransactionHash(tx.hash);
      await tx.wait();

      setPaymentStatus("success");
    } catch (err: any) {
      setPaymentStatus("error");
      setErrorMessage(err.message || "Transaction failed");
    } finally {
      setIsProcessing(false);
    }
  };

  /* ---------- USDC (ERC-20) ---------- */
  const sendUSDCPayment = async () => {
    if (!selectedCrypto || !amount) return;

    try {
      setIsProcessing(true);
      setPaymentStatus("processing");

      const provider = new ethers.BrowserProvider(window.ethereum!);
      const signer = await provider.getSigner();

      const USDC_ADDRESS =
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

      const abi = [
        "function transfer(address to, uint256 amount) returns (bool)",
        "function decimals() view returns (uint8)"
      ];

      const contract = new ethers.Contract(USDC_ADDRESS, abi, signer);
      const decimals = await contract.decimals();
      const value = ethers.parseUnits(amount, decimals);

      const tx = await contract.transfer(selectedCrypto.address, value);
      setTransactionHash(tx.hash);
      await tx.wait();

      setPaymentStatus("success");
    } catch (err: any) {
      setPaymentStatus("error");
      setErrorMessage(err.message || "USDC transfer failed");
    } finally {
      setIsProcessing(false);
    }
  };

  /* ---------- Main Handler ---------- */
  const handlePayment = async () => {
    if (!selectedCrypto) return;

    if (parseFloat(amount) < selectedCrypto.minAmount) {
      setErrorMessage(
        `Minimum amount is ${selectedCrypto.minAmount} ${selectedCrypto.symbol}`
      );
      return;
    }

    selectedCrypto.symbol === "USDC"
      ? await sendUSDCPayment()
      : await sendNativePayment();
  };

  const resetPayment = () => {
    setSelectedCrypto(null);
    setAmount("");
    setTransactionHash("");
    setPaymentStatus("idle");
    setErrorMessage("");
  };

  /* ---------- UI ---------- */
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
          <Bitcoin className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Live Crypto Payments</h3>
          <p className="text-sm text-gray-400">
            Send payments directly to my wallet
          </p>
        </div>
      </div>

      {!walletAddress ? (
        <button
          onClick={connectMetaMask}
          disabled={isConnecting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg"
        >
          {isConnecting ? <Loader className="animate-spin" /> : <Wallet />}
          {isConnecting ? "Connecting..." : "Connect MetaMask"}
        </button>
      ) : paymentStatus === "success" ? (
        <div className="text-center space-y-4">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto" />
          <p className="text-green-400 font-semibold">
            Payment Successful 🎉
          </p>
          <a
            href={`https://etherscan.io/tx/${transactionHash}`}
            target="_blank"
            className="text-[var(--color-primary)] underline"
          >
            View on Etherscan
          </a>
          <button
            onClick={resetPayment}
            className="block mx-auto mt-4 px-4 py-2 bg-slate-700 rounded-lg"
          >
            Send Another Payment
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentOptions.map((crypto) => (
              <button
                key={crypto.symbol}
                onClick={() => setSelectedCrypto(crypto)}
                className={`p-4 rounded-lg border ${
                  selectedCrypto?.symbol === crypto.symbol
                    ? "border-[var(--color-primary)]"
                    : "border-gray-700"
                }`}
              >
                {crypto.icon} {crypto.name}
              </button>
            ))}
          </div>

          {selectedCrypto && (
            <>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={`Min ${selectedCrypto.minAmount}`}
                className="w-full px-4 py-3 bg-slate-800 border rounded-lg"
              />

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg"
              >
                {isProcessing ? <Loader className="animate-spin" /> : <Send />}
                Send Payment
              </button>
            </>
          )}

          {errorMessage && (
            <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex gap-2">
              <AlertCircle className="text-red-400" />
              <span className="text-red-300">{errorMessage}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CryptoPayment;
