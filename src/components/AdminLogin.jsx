import React, { useState } from 'react';
import { login } from '../api/api';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Yönlendirme için useNavigate

  const handleLogin = async () => {
    try {
      const { data } = await login(form);
      localStorage.setItem('token', data.token); // Token'i kaydediyoruz
      setMessage('Başarılı giriş!');
      navigate('/hash'); // Başarılı giriş sonrası yönlendirme
    } catch (error) {
      setMessage('Hatalı giriş!');
    }
  };

  return (
    <div>
      <h2>Admin Paneli</h2>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Şifre"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminLogin;
