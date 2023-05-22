import React from 'react';
import { Container, Card } from 'react-bootstrap';

export const About = () => {
    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>About</Card.Title>
                    <Card.Text>
                        This is the about page content.
                    </Card.Text>
                    <Card.Link href="https://grammeri.github.io/Portfolio/">Visit My GitHub Portfolio</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
};
