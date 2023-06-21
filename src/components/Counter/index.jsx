import React, { useState } from 'react';

Count.propTypes = {
    
};

function Count(props) {
    const [count,setCount] = useState(0);
    return (
        <div>
            {count} 

            <button onClick={()=>setCount(x=> x+1)}>Icrease</button>
        </div>
    );
}

export default Count;