import React, { useState } from 'react';

const AirdropForm = ({ onAirdrop }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleAirdrop = () => {
        // Perform validation if needed
        onAirdrop(recipient, amount);
    };

    return (
        <div>
            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder="Recipient Address" />
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <button onClick={handleAirdrop}>Airdrop</button>
        </div>
    );
};

export default AirdropForm;
