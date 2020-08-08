import React from 'react';
import { Image } from 'react-bootstrap';

export default function EventListAttendee({attendee,...props}) {
    return(
            <Image
                width={25}
                height={25}
                className="mr-3"
                src={attendee.photoURL}
                alt="Event Img"
                title={attendee.name}
                roundedCircle
            />
    )
}