import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Yönlendirme için React Router
import { fetchHashes } from '../api/api';

const RandomHash = () => {
  const [hashData, setHashData] = useState({ algorithm: '', hash: '', original: '' });
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Kullanıcıyı yönlendirmek için kullanılır

  // Hash ve algoritma bilgisini backend'den al
  useEffect(() => {
    const getHashes = async () => {
      try {
        const { data } = await fetchHashes();
        setHashData(data); // Backend'den gelen veriyi kaydet
      } catch (error) {
        console.error('Hash verileri alınamadı:', error);
      }
    };
    getHashes();
  }, []);

  // Kullanıcı girdisini doğrula
  const handleVerify = () => {
    const correctAnswer = document.getElementById('correct-answer').textContent; // Cevabı span'dan al
    if (input === correctAnswer) {
      setMessage('Doğrulama başarılı!');
      setTimeout(() => {
        navigate('/sql-injection'); // Başarılı doğrulama sonrası bir sonraki adıma yönlendir
      }, 1000); // 1 saniye bekle ve yönlendir
    } else {
      setMessage('Hatalı giriş!');
    }
  };

  return (
    <div>
      <h2>Hash Doğrulama</h2>
      <p>Algoritma: {hashData.algorithm.toUpperCase()}</p>
      <p>Hash Değeri: {hashData.hash}</p>

      {/* Cevabı HTML içinde sakla */}
      <span id="correct-answer" style={{ display: 'none' }}>
        {hashData.original}
      </span>

      <input
        type="text"
        placeholder="Metni girin"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleVerify}>Doğrula</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RandomHash;
