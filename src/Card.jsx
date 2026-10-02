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








// git remote add origin https://github.com/joy938/Module-28-React-.git
// git branch -M main
// git push -u origin main


// git commit -m "use of UseState"
// git branch -M main
// git remote add origin https://github.com/joy938/Module-28-React-.git
// git push -u origin main