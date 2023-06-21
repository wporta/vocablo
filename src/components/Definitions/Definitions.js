import React from 'react';
import './Definitions.css';

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === 'en' && (
        <audio
          style={{ backgroundColor: '#fff', borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls>
          Your Browser doesn't support audio element
        </audio>
      )}
      {word === '' ? (
        <span className="subTitle">Start by typing a word in Search Field</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={def.definition}
                className="singleMeaning"
                style={{ backgroundColor: 'white', color: 'black' }}>
                <p>{def.definition}</p>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
