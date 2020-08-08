import React from 'react';
import { Media, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import EventListAttendee from './EventListAttendee';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RoomIcon from '@material-ui/icons/Room';

export default function EventListItem({event,...props}) {
    return(
        <>
            <ListGroup className="m-2 p-2">
                <ListGroupItem>
                    <Media className="bg-white mt-2 p-2 rounded">
                        <Image
                            width={64}
                            height={64}
                            className="mr-3"
                            src={event.hostPhotoURL}
                            alt="Event Img"
                            roundedCircle
                        />
                        <Media.Body>
                            <h5>{event.title}</h5>
                            <p>
                                Hosted by <b>{event.hostedBy}hostedBy</b>
                            </p>
                        </Media.Body>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media >
                        <span>
                            <WatchLaterIcon /> {event.date}
                            <RoomIcon /> {event.venue}
                        </span>
                    </Media>
                </ListGroupItem>
                <ListGroupItem disabled>
                    <Media >
                        <ListGroup horizontal>
                            {event.attendees.map(attendee=>
                                <EventListAttendee className="m-auto" attendee={attendee} key={attendee.id}/>
                            )}
                        </ListGroup>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media >
                        <div>{event.description}</div>
                        <Button className="float-right" variant="info">View</Button>
                    </Media>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}