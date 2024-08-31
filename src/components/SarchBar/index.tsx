import { useState } from 'react';
import './styles.css';


type Props = {
    onSearch: (text: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        setText(event.target.value);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleResetBtn () {
        setText("");
        onSearch(text);
    }


    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
                onChange={handleInputChange}
                type="text"
                value={text}
                placeholder="Nome do produto"
            />
            <button onClick={handleResetBtn} >X</button>
        </form>
    );
}