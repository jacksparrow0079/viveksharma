import React from 'react';

const field = () => {
    const isAvl = false;
    const isDefined = "YES";
    const isNotDefined = "NO";
    return(
        <div>
            {/* <p> This is note 1 */}
            <p>{(isAvl)?isDefined:isNotDefined}</p>
        </div>
    )
}
export default field