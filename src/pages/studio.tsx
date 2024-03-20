import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Studio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('https://studio.tonnipaul.com/');
  }, []);

  return null;
};

export default Studio;
