// import React from 'react';

import { useState } from "react";
const App = () => {
  const [text, setText] = useState('')
  const [showAfterTranslation, setShowAfterTranslation] = useState('')

  const fetchingData = async (textValue) => {
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
        target_language: 'eu',
        text: textValue
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setShowAfterTranslation(result.data.translatedText)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input value={text} name='inputingText' onChange={(e) => setText(e.target.value)} />
      <button onClick={() => fetchingData(text)}> Submit </button>

      {showAfterTranslation}
    </div>
  );
}

export default App;
