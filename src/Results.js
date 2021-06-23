
import Phonetic from "./Phonetic";

export default function Results(props){
    console.log(props.results);
    if (props.results) {
        return <div className="Results">
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index ){
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                        </div>
                );
            }
            )}
            </div>
    } else {
        return null;
    }
};
