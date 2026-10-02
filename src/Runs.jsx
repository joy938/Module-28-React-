import React, { useState } from 'react';

const Runs = () => {
    const [run , setRun]=useState(0)
    const inCreaseRun = () => {
        setRun(run+1);
    }
    return (
        <div>
            <h3>Run : {run} </h3>
            <button onClick={inCreaseRun}>Add Run 1</button>
        </div>
    );
};

export default Runs;