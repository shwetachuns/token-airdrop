import React, { useState } from 'react';
import AirdropForm from '../components/AirdropForm';
import WalletConnectButton from '../components/WalletConnectButton';

const Index = () => {
    const [connected, setConnected] = useState(false);

    const handleAirdrop = (recipient, amount) => {
        // Implement airdrop logic here
        console.log(`Airdrop ${amount} tokens to ${recipient}`);
    };

    const handleConnect = () => {
        // Implement wallet connect logic here
        console.log('Wallet connected');
        setConnected(true);
    };

    return (
        <div>
            <h1>Token Airdrop</h1>
            {!connected && <WalletConnectButton onConnect={handleConnect} />}
            {connected && <AirdropForm onAirdrop={handleAirdrop} />}
        </div>
    );
};

export default Index;
