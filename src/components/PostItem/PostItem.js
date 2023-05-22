import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsRequest } from '../../actions/commentActions';
import { Button, Card } from 'react-bootstrap';
import Loader from '../share/loader/Loader';

export const PostItem = ({ post }) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);
    const loadingComments = useSelector((state) => state.comment.loadingComments[post.id] || false);
    const [commentsShown, setCommentsShown] = useState(false);

    const handleCommentsClick = () => {
        console.log("Comments button clicked.");
        setCommentsShown(!commentsShown);
        if (!comments[post.id]) {
            console.log("Dispatching fetchCommentsRequest");
            dispatch(fetchCommentsRequest(post.id));
        }
    };

    return (
        <Card>
            <Button onClick={handleCommentsClick}>Comments</Button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {loadingComments && <Loader />}
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
        </Card>
    );
};
