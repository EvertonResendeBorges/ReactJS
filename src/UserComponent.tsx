import React, { useState } from 'react';

function UserComponent() {
  const [username, setUsername] = useState(''); // inicializa o estado com um valor vazio

  function handleUsernameChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setUsername(event.target.value); // atualiza o valor do estado com o valor do input
  }

  return (
    <div>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <p>Olá, {username}!</p>
    </div>
  );
}

export default UserComponent
