import React from 'react';

const WalletConnectButton = ({ onConnect }) => {
    const handleConnect = () => {
        // Implement wallet connect logic here
        onConnect();
    };

    return (
        <button onClick={handleConnect}>Connect Wallet</button>
    );
};

export default WalletConnectButton;
