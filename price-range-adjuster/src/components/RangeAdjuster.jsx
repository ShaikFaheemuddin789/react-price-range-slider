import React from "react";
import { useState, useEffect } from "react";
const RangeAdjuster = () => {
  const [range, setRange] = useState(0);
  const [emoji, setEmoji] = useState("🥲");
  const emojiList = ["🥰", "👍", "🤩", "❤️", "😂", "😎", "😇", "🙌", "🎉", "🔥"];
  function handleChange(e) {
    setRange(e.target.value);
  }
  useEffect(() => {
    const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
    setEmoji(randomEmoji);
  }, [range]);

  return (
    <div>
      <h1>{emoji}</h1>
      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        onChange={handleChange}
      />
      <h1>{range}</h1>
    </div>
  );
};

export default RangeAdjuster;
