import React, {useState} from 'react';
function MyList() {
    const [text, setText] = useState('');
    // Save input element value to state when it has been
    //changed
    const inputChanged = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = (event) => {
        alert('You typed: '+text);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={event => setText(event.target.value)}
                value={text} />
            <input type="submit" value="Press me" />
        </form>
    );
};

/**
 const data = [1, 2, 3, 4, 5];
 return (
     <div>
         <ul>
             {
                 data.map((number, index) =>
                     <li key={index}>Listitem {number}</li>)
             }
         </ul>
     </div>
 );
  */


export default MyList;