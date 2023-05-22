import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../../actions/postActions';
import { fetchCommentsRequest } from '../../actions/commentActions';
import { fetchUserRequest } from '../../actions/userActions';
import { Link } from 'react-router-dom';
import { ListGroup, Button, Col, Row } from 'react-bootstrap';
import Loader from "../share/loader";

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.post.loading);
    const comments = useSelector(state => state.comment.comments);
    const [commentsShown, setCommentsShown] = useState({});
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        dispatch(fetchPostsRequest());
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2000); // Simulated delay of 0.5 seconds
        return () => clearTimeout(timer);
    }, [dispatch]);

    const handleCommentsClick = (postId, userId) => {
        setCommentsShown(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));

        if (!comments[postId]) {
            dispatch(fetchUserRequest(userId));
            dispatch(fetchCommentsRequest(postId));
        }
    };

    if (showLoader) {
        return <Loader />;
    }

    return (
        <Row>
            <Col>
                <ListGroup>
                    {posts.map(post => (
                        <ListGroup.Item key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link to={`/user/${post.userId}`}>
                                <img src="https://via.placeholder.com/50" alt="User Avatar" />
                            </Link>
                            <Button onClick={() => handleCommentsClick(post.id, post.userId)}>Comments</Button>
                            {comments[post.id] && commentsShown[post.id] && (
                                <div>
                                    {comments[post.id].map(comment => (
                                        <div key={comment.id}>
                                            <h5>{comment.email}</h5>
                                            <p>{comment.body}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    );
};
