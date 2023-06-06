// import React from 'react';

import { useState, useEffect } from "react";
const App = () => {
  const [text, setText] = useState('')
  const [showAfterTranslation, setShowAfterTranslation] = useState('')
  const [multipleLanguagesArray, setMultipleLanguagesArray] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    const multipleLanguages = async () => {
      const url = 'https://text-translator2.p.rapidapi.com/getLanguages';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ee7f409780mshf5b89eddc2790f1p1813c6jsn67caa6f07a7d',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        }
      };
      try {
        const response2 = await fetch(url, options);
        const result = await response2.json();
        setMultipleLanguagesArray(result.data.languages)
      } catch (error) {
        console.error(error);
      }


    }

    setTimeout(multipleLanguages, 1000); // run it, run it
  }, []);


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const tranlatingData = async (textValue) => {
    const url = 'https://text-translator2.p.rapidapi.com/translate';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ee7f409780mshf5b89eddc2790f1p1813c6jsn67caa6f07a7d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: 'en',
        target_language: 'ur',
        text: textValue
      })
    };

    try {
      const response1 = await fetch(url, options);

      const result1 = await response1.json();

      setShowAfterTranslation(result1.data.translatedText)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option>Select a language</option>
        {multipleLanguagesArray.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>

      <input value={text} name='inputingText' onChange={(e) => setText(e.target.value)} />
      <button onClick={() => tranlatingData(text)}> Submit </button>



      {showAfterTranslation}
    </div>
  );
}

export default App;
