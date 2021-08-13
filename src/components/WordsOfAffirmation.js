import { useState } from "react";

const WordsOfAffirmation = () => {
  const [words, setWords] = useState([
    "I love you so much!",
    "You are my star!",
    "You are loved more than you can fathom.",
    "You are chosen and wanted.",
    "I miss you!",
    "You are important and valued.",
    "You are not alone even when you feel lonely.",
    "I admire how strong you are!",
    "I love how you love on the forgotten and care for the afflicted.",
    "Your ability to make the ordinary beautiful is a true gift!",
    "I admire how you’ve taken care of yourself!",
    "You are a fighter and you never give up.",
    "You never give up even when the way before you is uncertain.",
    "I admire your tenacity and courage!",
    "Your beauty and personality is unique!",
    "You have great style!",
    "I am so proud of the woman you’ve become.",
    "Your grace and meekness are inspiring.",
  ]);

  const [num, setNum] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBlockEnd: "5rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontFamily: "Dancing Script" }}>
        Words Of Affirmation
      </h1>

      <p style={{ paddingBlockEnd: "1rem" }}>{words[num]}</p>

      <button
        onClick={() => {
          setNum(Math.floor(Math.random() * (words.length - 1)));
        }}
        style={{
          background: "transparent",
          border: "5px solid red",
          padding: "1rem 2rem",
          fontWeight: "bold",
          color: "red",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        Get Affirmation!
      </button>
    </div>
  );
};

export default WordsOfAffirmation;
