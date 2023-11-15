import React from 'react';

const Committee = ({committeeInfo}) => {
    console.log("committeeInfo",committeeInfo[0].mainCommittee.committeeName);
    return (
        <div>
            <h1>COMITIES NAME : {committeeInfo[0].mainCommittee.committeeName}</h1>
            {
                committeeInfo[0].mainCommittee?.members.map((members, index) =>(
                    <div>
                        <p>{members.name}</p>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Committee;