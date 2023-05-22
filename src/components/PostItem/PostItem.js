import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsRequest } from '../../actions/commentActions';
import { Link } from 'react-router-dom';
import { Button, Card, Spinner } from 'react-bootstrap';

export const PostItem = ({ post }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);
    const users = useSelector((state) => state.user.users);
    const [commentsShown, setCommentsShown] = useState(false);
    const [loadingComments, setLoadingComments] = useState(false);

    const user = users.find((user) => user.id === post.userId);

    const handleCommentsClick = () => {
        setCommentsShown((prevState) => !prevState);

        if (!comments[post.id]) {
            setLoadingComments(true); // Set loading state to true
            dispatch(fetchCommentsRequest(post.id));
            // Simulate a delay of 1.5 seconds before setting loading state to false
            setTimeout(() => {
                setLoadingComments(false);
            }, 1500);
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                {user && (
                    <Link to={`/user/${post.userId}`}>
                        <img src="https://via.placeholder.com/50" alt="User Avatar" />
                        <p>{user.name}</p>
                    </Link>
                )}
                <Button onClick={handleCommentsClick}>Comments</Button>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {loadingComments && (
                        <Spinner animation="border" variant="primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    )}
                    {comments[post.id] && commentsShown && (
                        <div>
                            {comments[post.id].map((comment) => (
                                <div key={comment.id}>
                                    <h5>{comment.email}</h5>
                                    <p>{comment.body}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};
