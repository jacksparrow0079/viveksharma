import React from 'react';

//RaghaGupta - pasclecase
//raghavGupta - camelcase
//raghavgupta - snake case
const Nesting =  () => {
    const user = false;
    if(user == true){
        return <p>yes the user is logged In</p>    
    }
    else{
        return <p>The user is logged out</p>
    }
}
export default Nesting;