import React from 'react';
import { Media, Image } from 'react-bootstrap';

export default function EventDetailedChat(){
    const headStyle={
        backgroundColor: 'teal',
        marginBottom : 0,
    }
    return(
        <Media className="mt-2">
            <Media.Body fluid>
                <h4 className="text-white p-2" style={headStyle}>Chat about this Event</h4>
                <Media className="bg-white p-2">
                    <Media.Body>
                        <Media>
                            <Image src="/assets/user.png"
                            width="30"
                            height="30"
                            className="mr-2"
                            />
                            <Media.Body>
                                <h6 style={{marginBottom:0,}}>Matt <span className="text-muted" style={{fontSize:13,}}>Today at 7:11 pm</span></h6>
                                <p>How Attracted!</p>
                                <Media>
                                    <Image src="/assets/user.png"
                                    width="30"
                                    height="30"
                                    className="mr-2"
                                    />
                                    <Media.Body>
                                        <h6 style={{marginBottom:0,}}>Henry <span className="text-muted" style={{fontSize:13,}}>Today at 7:11 pm</span></h6>
                                        <p>Awesome!</p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media>
            </Media.Body>
        </Media>
    )
}