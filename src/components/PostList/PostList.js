import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../../actions/postActions';
import { fetchCommentsRequest } from '../../actions/commentActions';
import { fetchUsersRequest } from "../../actions/userActions";
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

export const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.post.loading);
    const comments = useSelector(state => state.comment.comments);
    const [commentsShown, setCommentsShown] = useState({});

    useEffect(() => {
        dispatch(fetchPostsRequest());
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    const handleCommentsClick = (postId) => {
        setCommentsShown(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));

        if(!comments[postId]) {
            dispatch(fetchCommentsRequest(postId));
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <ListGroup>
                {posts.map((post) => (
                    <ListGroup.Item key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/user/${post.userId}`}>
                            <img src="https://via.placeholder.com/50" alt="User Avatar" />
                        </Link>
                        <Button onClick={() => handleCommentsClick(post.id)}>Comments</Button>
                        {comments[post.id] && commentsShown[post.id] && (
                            <div>
                                {comments[post.id].map((comment) => (
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
        </div>
    );
};
