import React, { createContext, useEffect, useState } from 'react';
import {useFetch} from '../hooks/useFetch'

export const TwitterContext = createContext();

const TwitterContextProvider = ({ children }) => {

    const [ data, loading ] = useFetch('/tweets') 
    const [ buzzWords, setBuzzWords ] = useState([])
    const stopWords = ['i', "", "RT", "A", "The", "&amp;",'me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']
    
    useEffect(() => {
        if( data ) {

            
            let buzzWordsArr = [];

            //data is looped through to pull words that are not stopwords
            data.forEach((instance) => {

               instance.text.split(" ").forEach((word) => {
                   
                   //isStopword?
                   if(stopWords.includes(word)) return

                   //buzzwords are stored in buzzWordsArr
                   //check to see if word is already stored, if not create an object {word: word, count: 1}
                   let index = buzzWordsArr.findIndex(buzzWord => buzzWord.word === word)
                   index === -1 ? buzzWordsArr.push({word: word, count: 1}) : buzzWordsArr[index].count++ 
               })
            })

            //array is sorted and then stored in state
            buzzWordsArr.sort((a,b) => b.count - a.count)
            setBuzzWords(buzzWordsArr)
        }
    }, [loading])

    return ( 
        <TwitterContext.Provider value={{buzzWords, loading}}>
            {children}
        </TwitterContext.Provider>
     );
}
 
export default TwitterContextProvider;