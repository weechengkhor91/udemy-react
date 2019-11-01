import React from 'react';
import Person from './Person/Person';

const persons = (props) => 
    props.persons.map((p, index) => {
         
        return (
          <Person 
          click={() => props.clicked(index)} 
          name={p.name} key={index} 
          key={p.id}
          changeName={(e) =>  props.changed(e, p.id)  }
 
           />
        )
      }
    )


export default persons;