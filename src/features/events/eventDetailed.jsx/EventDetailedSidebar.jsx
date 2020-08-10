import React from 'react';
import { Media } from 'react-bootstrap';

export default function EventDetailedSideBar(){
    const headStyle={
        backgroundColor: 'teal',
        marginBottom : 0,
    }
    return(
        <>
            <h4 className="text-white p-2" style={headStyle}>Attendees</h4>
            <ul className="list-group bg-white">
                <Media as="li" className="list-group-item">
                    <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="/assets/user.png"
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                    <h5>Bob</h5>
                    </Media.Body>
                </Media>

                <Media as="li" className="list-group-item">
                    <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="/assets/user.png"
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                    <h5>Robert</h5>
                    </Media.Body>
                </Media>

                <Media as="li" className="list-group-item">
                    <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="/assets/user.png"
                    alt="Generic placeholder"
                    />
                    <Media.Body>
                    <h5>James</h5>
                    </Media.Body>
                </Media>
            </ul>
        </>
    )
}