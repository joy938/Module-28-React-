import React, { use, useState } from 'react';

const Card = () => {
const [count , SetCount] = useState(0)
const Added = () => {
    SetCount(count+1);
}


    return (
        <div>
            <h3>Counting</h3>
            <h2>Now Running count is : {count}  </h2>
            <button onClick={Added}>Add 1</button>
        </div>
    );
};

export default Card;






// git add .
// git commit -m "use of useState"
// git push

