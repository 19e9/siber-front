import React, { useState } from 'react';
import { sqlLogin } from '../api/api';

const SqlInjection = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await sqlLogin(form);
      setMessage('Başarılı giriş!');
    } catch (error) {
      setMessage('Hatalı giriş!');
    }
  };

  return (
    <div>
      <h2>SQL Injection Testi</h2>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="text"
        placeholder="Şifre"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SqlInjection;
