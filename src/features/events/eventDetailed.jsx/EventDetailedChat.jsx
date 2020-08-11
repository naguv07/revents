import React from 'react';
import { Media, Image, Form, Button } from 'react-bootstrap';

export default function EventDetailedChat(){
    const headStyle={
        backgroundColor: 'teal',
        marginBottom : 0,
    }
    return(
        <Media className="mt-2">
            <Media.Body >
                <h4 className="text-white p-2" style={headStyle}>Chat about this Event</h4>
                <Media className="bg-white p-2">
                    <Media.Body>
                        <Media>
                            <Image src={process.env.PUBLIC_URL+"/assets/user.png"}
                            width="30"
                            height="30"
                            className="mr-2"
                            />
                            <Media.Body>
                                <h6 style={{marginBottom:0,}}>Jenny Hess <span className="text-muted" style={{fontSize:13,}}>Yesterday at 12:00 pm</span></h6>
                                <p className="mb-0">Awesome!</p>
                                <p className="text-muted mt-0">Reply</p>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Image src={process.env.PUBLIC_URL+"/assets/user.png"}
                            width="30"
                            height="30"
                            className="mr-2"
                            />
                            <Media.Body>
                                <h6 style={{marginBottom:0,}}>Matt <span className="text-muted" style={{fontSize:13,}}>Today at 7:11 pm</span></h6>
                                <p className="mb-0">How Attracted!</p>
                                <p className="text-muted mt-0">Reply</p>
                                <Media>
                                    <Image src={process.env.PUBLIC_URL+"/assets/user.png"}
                                    width="30"
                                    height="30"
                                    className="mr-2"
                                    />
                                    <Media.Body>
                                        <h6 style={{marginBottom:0,}}>Henry <span className="text-muted" style={{fontSize:13,}}>Just now</span></h6>
                                        <p className="mb-0">Awesome!</p>
                                        <p className="text-muted mt-0">Reply</p>
                                    </Media.Body>
                                </Media>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Body>
                                <Form.Control as="textarea" rows="3"/>
                                <Button variant="primary" className="mt-2">Add Comment</Button>
                            </Media.Body>
                        </Media>
                    </Media.Body>
                </Media>
            </Media.Body>
        </Media>
    )
}