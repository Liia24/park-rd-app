import React, { useState } from 'react';

function App() {
  const [login, setLogin] = useState('');
  const [haslo, setHaslo] = useState('');
  const [zalogowany, setZalogowany] = useState(false);

  const handleLogin = () => {
    if (login === 'admin' && haslo === 'admin123') {
      setZalogowany(true);
    } else {
      alert('Niepoprawny login lub hasło');
    }
  };

  if (!zalogowany) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Logowanie – PARK R&D</h2>
        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Hasło"
          value={haslo}
          onChange={(e) => setHaslo(e.target.value)}
        /><br />
        <button onClick={handleLogin}>Zaloguj się</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>PARK R&D – Panel główny</h1>
      <ul>
        <li>📊 Rentowność firmy</li>
        <li>🚛 Pojazdy</li>
        <li>📦 Zlecenia</li>
        <li>💸 Koszty</li>
        <li>📈 Raporty</li>
      </ul>
    </div>
  );
}

export default App;