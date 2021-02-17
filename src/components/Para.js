import React, { useState, useEffect } from 'react';

function Para(props) {

    const [end, setEnd] = useState(1);
    const [shownText, setShownText] = useState("");
    const text = props.text;
    const wordLength = text.length;
    const symbols = "。？！；";

    const typewrite = () => {
        let word = text.substring(0, end);
        setShownText(word);
        setEnd(end + 1);
    }

    useEffect(() => {
        // If there's still word to show
        if(end <= wordLength) {
            const itv = end > 1 && symbols.includes(text.charAt(end-2)) ? 600 : 75;
            const TimerID = setTimeout(() => typewrite(), itv);
            return () => {
                clearTimeout(TimerID);
            }
        } 
    })

    return (
        <p style={props.style}>{shownText}</p>
    );
}

export default Para;