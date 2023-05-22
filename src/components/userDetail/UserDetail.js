import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchUserRequest } from '../../actions/userActions';
import { fetchPostsRequest } from '../../actions/postActions';
import { Card, Button, Spinner } from 'react-bootstrap';
import PaginationComponent from '../share/Pagination/PaginationComponent';

export const UserDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const posts = useSelector(state => state.post.posts);
    const loading = useSelector(state => state.user.loading);
    const [showContent, setShowContent] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        dispatch(fetchUserRequest(id));
        dispatch(fetchPostsRequest());
        setTimeout(() => {
            setShowContent(true);
        }, 2000); // 2-second delay
    }, [dispatch, id]);

    const userPosts = posts.filter(post => post.userId.toString() === id);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = userPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
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
            {currentPosts.length > 0 ? (
                currentPosts.map(post => (
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
            <PaginationComponent
                postsPerPage={postsPerPage}
                totalPosts={userPosts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
    );
};
