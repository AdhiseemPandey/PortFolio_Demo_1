"use client";

import React, { useState, useEffect } from 'react';
import { Wallet, Bitcoin, Send, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Loader } from 'lucide-react';
import { ethers } from 'ethers';

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
  const [amount, setAmount] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Your actual wallet addresses (replace with your real addresses)
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
    },
    {
      name: "Solana",
      symbol: "SOL",
      network: "Solana Mainnet",
      address: "8bXn4vcf8aYwTT9zeGrmUmsEur2zs9FM4Hu4mFamr91b",
      icon: "◎",
      minAmount: 0.01
    }
  ];

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window !== 'undefined' && window.ethereum;
  };

  // Connect to MetaMask
  const connectMetaMask = async () => {
    if (!isMetaMaskInstalled()) {
      setErrorMessage('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletAddress(accounts[0]);
      setErrorMessage('');
    } catch (error: any) {
      setErrorMessage('Failed to connect wallet: ' + error.message);
    }
    setIsConnecting(false);
  };

  // Send Ethereum payment
  const sendEthereumPayment = async () => {
    if (!selectedCrypto || !amount || !walletAddress) return;

    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const transaction = {
        to: selectedCrypto.address,
        value: ethers.parseEther(amount),
        gasLimit: 21000,
      };

      const tx = await signer.sendTransaction(transaction);
      setTransactionHash(tx.hash);
      
      // Wait for confirmation
      await tx.wait();
      setPaymentStatus('success');
    } catch (error: any) {
      setPaymentStatus('error');
      setErrorMessage('Payment failed: ' + error.message);
    }
    setIsProcessing(false);
  };

  // Send USDC payment (ERC-20 token)
  const sendUSDCPayment = async () => {
    if (!selectedCrypto || !amount || !walletAddress) return;

    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // USDC contract address on Ethereum mainnet
      const usdcAddress = "0xA0b86a33E6417c8f4c8B4B4B4B4B4B4B4B4B4B4B";
      const usdcAbi = [
        "function transfer(address to, uint256 amount) returns (bool)",
        "function decimals() view returns (uint8)"
      ];

      const usdcContract = new ethers.Contract(usdcAddress, usdcAbi, signer);
      const decimals = await usdcContract.decimals();
      const amountInWei = ethers.parseUnits(amount, decimals);

      const tx = await usdcContract.transfer(selectedCrypto.address, amountInWei);
      setTransactionHash(tx.hash);
      
      await tx.wait();
      setPaymentStatus('success');
    } catch (error: any) {
      setPaymentStatus('error');
      setErrorMessage('USDC payment failed: ' + error.message);
    }
    setIsProcessing(false);
  };

  // Handle payment based on selected crypto
  const handlePayment = async () => {
    if (!selectedCrypto || !amount) return;

    if (parseFloat(amount) < selectedCrypto.minAmount) {
      setErrorMessage(`Minimum amount is ${selectedCrypto.minAmount} ${selectedCrypto.symbol}`);
      return;
    }

    if (selectedCrypto.symbol === 'SOL') {
      setErrorMessage('Solana payments require Phantom wallet. Please select an Ethereum-based token for MetaMask payments.');
      return;
    }

    if (selectedCrypto.symbol === 'USDC') {
      await sendUSDCPayment();
    } else {
      await sendEthereumPayment();
    }
  };

  // Copy address to clipboard
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  // Reset payment state
  const resetPayment = () => {
    setSelectedCrypto(null);
    setAmount('');
    setTransactionHash('');
    setPaymentStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
          <Bitcoin className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Live Crypto Payments</h3>
          <p className="text-sm text-gray-400">Send payments directly to my wallet</p>
        </div>
      </div>

      {/* Wallet Connection */}
      {!walletAddress ? (
        <div className="p-6 bg-slate-800/50 rounded-xl border border-gray-700">
          <div className="text-center">
            <Wallet className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Connect Your Wallet</h4>
            <p className="text-gray-400 mb-6">Connect MetaMask to send crypto payments</p>
            
            <button
              onClick={connectMetaMask}
              disabled={isConnecting}
              className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50"
            >
              {isConnecting ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <Wallet className="w-4 h-4" />
              )}
              {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
            </button>

            {!isMetaMaskInstalled() && (
              <p className="text-sm text-orange-400 mt-4">
                MetaMask not detected. <a href="https://metamask.io" target="_blank" className="underline">Install MetaMask</a>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Connected Wallet */}
          <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Wallet Connected</span>
            </div>
            <p className="text-sm text-gray-300 mt-1">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>
          </div>

          {/* Payment Success */}
          {paymentStatus === 'success' && (
            <div className="p-6 bg-green-900/20 border border-green-500/30 rounded-xl text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-green-400 mb-2">Payment Successful!</h4>
              <p className="text-gray-300 mb-4">Thank you for your payment!</p>
              {transactionHash && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Transaction Hash:</p>
                  <code className="text-xs text-green-400 break-all bg-slate-800 p-2 rounded">
                    {transactionHash}
                  </code>
                  <a
                    href={`https://etherscan.io/tx/${transactionHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-[var(--color-primary)] hover:underline"
                  >
                    View on Etherscan →
                  </a>
                </div>
              )}
              <button
                onClick={resetPayment}
                className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                Send Another Payment
              </button>
            </div>
          )}

          {/* Payment Form */}
          {paymentStatus !== 'success' && (
            <>
              {/* Cryptocurrency Selection */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Select Cryptocurrency</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {paymentOptions.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => setSelectedCrypto(crypto)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedCrypto?.symbol === crypto.symbol
                          ? 'bg-[var(--color-primary)]/20 border-[var(--color-primary)] text-[var(--color-primary)]'
                          : 'bg-slate-800/50 border-gray-700 text-white hover:border-[var(--color-primary)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{crypto.icon}</span>
                        <div>
                          <div className="font-semibold">{crypto.name}</div>
                          <div className="text-sm opacity-70">{crypto.network}</div>
                          <div className="text-xs opacity-50">Min: {crypto.minAmount} {crypto.symbol}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Crypto Details */}
              {selectedCrypto && (
                <div className="p-4 bg-slate-800/50 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white">
                      Send to: {selectedCrypto.name} ({selectedCrypto.symbol})
                    </span>
                    <button
                      onClick={() => copyAddress(selectedCrypto.address)}
                      className="text-[var(--color-primary)] text-sm hover:underline"
                    >
                      Copy Address
                    </button>
                  </div>
                  <code className="text-sm text-gray-400 break-all bg-slate-900 p-2 rounded block">
                    {selectedCrypto.address}
                  </code>
                </div>
              )}

              {/* Amount Input */}
              {selectedCrypto && (
                <div className="space-y-3">
                  <label className="text-sm text-white font-medium">
                    Amount ({selectedCrypto.symbol})
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={`Min ${selectedCrypto.minAmount} ${selectedCrypto.symbol}`}
                    min={selectedCrypto.minAmount}
                    step="0.001"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                  />
                </div>
              )}

              {/* Payment Button */}
              {selectedCrypto && amount && (
                <button
                  onClick={handlePayment}
                  disabled={isProcessing || paymentStatus === 'processing'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Processing Payment...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send {amount} {selectedCrypto.symbol}
                    </>
                  )}
                </button>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-medium">Error</span>
                  </div>
                  <p className="text-sm text-red-300 mt-1">{errorMessage}</p>
                </div>
              )}

              {/* Processing Status */}
              {paymentStatus === 'processing' && (
                <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Loader className="w-5 h-5 text-blue-400 animate-spin" />
                    <span className="text-blue-400 font-medium">Processing Transaction</span>
                  </div>
                  <p className="text-sm text-blue-300 mt-1">
                    Please confirm the transaction in your wallet and wait for blockchain confirmation...
                  </p>
                </div>
              )}
            </>
          )}

          {/* Important Notes */}
          <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <h5 className="text-yellow-400 font-medium mb-2">⚠️ Important Notes</h5>
            <ul className="text-sm text-yellow-300 space-y-1">
              <li>• Payments are sent directly to my wallet addresses</li>
              <li>• Transactions are irreversible once confirmed</li>
              <li>• Network fees apply and are paid by the sender</li>
              <li>• Use correct network to avoid losing funds</li>
              <li>• Test with small amounts first</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoPayment;