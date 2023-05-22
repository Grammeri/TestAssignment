import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsRequest } from '../../actions/commentActions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import {fetchUserRequest} from "../../actions/userActions";

export const PostItem = ({ post }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comments);
    const users = useSelector(state => state.user.users);
    const [commentsShown, setCommentsShown] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = users.find(u => u.id === post.userId);
        setUser(user);
    }, [post.userId, users]);

    const handleCommentsClick = async () => {
        setCommentsShown(prevState => !prevState);

        if (!comments[post.id]) {
            await dispatch(fetchUserRequest(post.userId));
            dispatch(fetchCommentsRequest(post.id));
        }
    };

    return (
        <ListGroup.Item key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {user && (
                <Link to={`/user/${post.userId}`}>
                    <img src="https://via.placeholder.com/50" alt="User Avatar" />
                    <p>{user.name}</p>
                </Link>
            )}
            <Button onClick={handleCommentsClick}>Comments</Button>
            {comments[post.id] && commentsShown && (
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
    );
};
