import { useEffect, useState } from 'react';

const useToggleStylesheet = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    Array.from(document.getElementsByClassName('theme-stylesheet')).forEach(
      link => link.remove()
    );
    const link = document.createElement('link');
    link.href = `${process.env.PUBLIC_URL}/css/theme.min.css`;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.className = 'theme-stylesheet';
    link.onload = () => {
      setIsLoaded(true);
    };

    document.getElementsByTagName('head')[0].appendChild(link);
    document
      .getElementsByTagName('html')[0]
      .setAttribute('dir', 'ltr');
  }, []);

  return { isLoaded };
};

export default useToggleStylesheet;
