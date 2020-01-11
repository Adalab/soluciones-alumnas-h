import React from 'react';

const People = props => {

    const people = props.people;

    const renderPerson = (person, index) => {
        return(
            <li key={index}>
                <h2>{person.name.title} {person.name.first} {person.name.last}.</h2>
                <p>Sex: {person.gender}</p>
            </li>
        )
    }

    const renderPeople = () => {
        return(
            people.map((person, index) => renderPerson(person, index))
        )
    }

    return(
        <ul className="people">
            {renderPeople()}
        </ul>
    )
}

export default People;