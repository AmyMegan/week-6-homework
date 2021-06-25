import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";
import Meaning from "./Meaning";

export default function Results(props){
    console.log(props.results);
    if (props.results) {
        return <div className="Results">
            <h2>{props.results.word}</h2>
            <Meaning />
            {props.results.phonetics.map(function (phonetic, index ){
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                        <Synonyms />
                        </div>
                );
            }
            )}
            </div>
    } else {
        return null;
    }
};
