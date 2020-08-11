import React from 'react';
import { Media } from 'react-bootstrap';

export default function EventDetailedSideBar({attendees}){
    const headStyle={
        backgroundColor: 'teal',
        marginBottom : 0,
    }
    return(
        <>
            <h6 className="text-white text-center p-2" style={headStyle}>
                {attendees.length} {attendees.length > 1 ? 'People ' : 'Person ' }
                Going
            </h6>
            <ul className="list-group bg-white">
                {
                    attendees.map(attendee => (
                        <Media as="li" className="list-group-item" key={attendee.id}>
                            <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={ attendee.photoURL || process.env.PUBLIC_URL+"/assets/user.png"}
                            alt="Generic placeholder"
                            />
                            <Media.Body>
                            <h5>{attendee.name}</h5>
                            </Media.Body>
                        </Media>
                    ))
                }
                </ul>
        </>
    )
}