import React from 'react';

const BroomRace = () =>{

    const users = [
        { name: 'Nymphadora Tonks', time: 9 },
        { name: 'Cedric Diggory', time: 28 },
        { name: 'Cho Chang', time: 35 },
        { name: 'Luna Lovegood', time: 45 },
        { name: 'Gregory Goyle', time: 56 }
    ];

    // Ejercicio 4
    // const [first,second,third] = users

    // return(
    //     <div>
    //         <p>The third position is for {third.name}.</p> 
    //         <p>The second one is for {second.name}.</p>
    //         <p>And the winner is... {first.name}!!!</p>
    //     </div>
    // )

    // Ejercicio 5
    const [
        {name: first},
        {name: second},
        {name: third}
    ] = users

    return(
        <div>
             <p>The third position is for {third}.</p> 
             <p>The second one is for {second}.</p>
             <p>And the winner is... {first}!!!</p>
         </div>
    )
}

export default BroomRace;