import React from 'react';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass ='';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold)
    }
    return ();
}

export default cockpit