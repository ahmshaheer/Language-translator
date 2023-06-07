import { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [text, setText] = useState('')
  const [showAfterTranslation, setShowAfterTranslation] = useState('')
  const [multipleLanguagesArray, setMultipleLanguagesArray] = useState([])
  const [selectedTargetedLanguage, setSelectedTargetedLanguage] = useState('');
  const [selectedSourcedLanguage, setSelectedSourcedLanguage] = useState('');

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


  const handleLanguageChangeSourced = (event) => {
    setSelectedSourcedLanguage(event.target.value);
  };

  const handleLanguageChangeTargeted = (event) => {
    setSelectedTargetedLanguage(event.target.value);
  };

  const tranlatingData = async (textValue, selectedTargetedLanguage1, selectedTargetedLanguage2) => {
    const url = 'https://text-translator2.p.rapidapi.com/translate';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ee7f409780mshf5b89eddc2790f1p1813c6jsn67caa6f07a7d',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
      },
      body: new URLSearchParams({
        source_language: selectedTargetedLanguage1,
        target_language: selectedTargetedLanguage2,
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
    <div className="container">
      <div className="language-select">
        <select value={selectedSourcedLanguage} onChange={handleLanguageChangeSourced}>
          <option>Select a Sourced language</option>
          {multipleLanguagesArray.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>

      <div className="input-container">
        <input value={text} name='inputingText' onChange={(e) => setText(e.target.value)} size="50" />
        <button onClick={() => tranlatingData(text, selectedSourcedLanguage, selectedTargetedLanguage)}> Submit </button>
      </div>

      <div className="language-select selectedTargetedLanguage">
        <select value={selectedTargetedLanguage} onChange={handleLanguageChangeTargeted}>
          <option>Select a Targeted language</option>
          {multipleLanguagesArray.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>


      <div className="translation-result">
        {showAfterTranslation}
      </div>
    </div>
  );
}

export default App;
