import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUsersRequest } from '../../actions/userActions';
import { fetchPostsRequest } from '../../actions/postActions';
import { Card, Button, Spinner } from 'react-bootstrap';

export const UserDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.user.loading);

    useEffect(() => {
        dispatch(fetchUsersRequest());
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    const user = users.find(user => user.id.toString() === id);
    const userPosts = posts.filter(post => post.userId.toString() === id);

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/150" /> {/* User avatar */}
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        {/* User information */}
                        <p>{user.email}</p>
                        <p>{user.address.city}, {user.address.street}</p>
                    </Card.Text>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </Card.Body>
            </Card>

            <h2>Posts:</h2>
            {userPosts.map(post => (
                <Card key={post.id} className="mb-4">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Button variant="primary">Comments</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
