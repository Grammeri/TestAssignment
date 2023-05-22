import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUserRequest } from '../../actions/userActions';
import { fetchPostsRequest } from '../../actions/postActions';
import Loader from "../share/loader";
import {Card} from "react-bootstrap";



export const UserDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.user.loading);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        dispatch(fetchUserRequest(id));
        dispatch(fetchPostsRequest());
        setTimeout(() => {
            setShowContent(true);
        }, 1000); // 1 second delay
    }, [dispatch, id]);

    const userPosts = posts.filter(post => post.userId.toString() === id);

    if (!showContent) {
        return <Loader />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <Card>
                <Card.Body>
                    <Card.Title>User Information</Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}
                        <br />
                        <strong>Website:</strong> {user.website}
                    </Card.Text>
                </Card.Body>
            </Card>

            <h2>Posts:</h2>
            {userPosts.length > 0 ? (
                userPosts.map(post => (
                    <Card key={post.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>No posts found for this user.</p>
            )}
            <Link to="/" className="btn btn-primary">Back</Link>
        </div>
    );
};
