import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';
import {projectAPI} from "../../services/api/api";


export const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            await new Promise((r) => setTimeout(r, 500)); // Artificial delay of 0.5s
            const response = await projectAPI.getPosts();
            setPosts(response.data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const handleCommentsClick = async (post) => {
        if (!post.comments) {
            const response = await projectAPI.getComments(post.id);
            post.comments = response.data;
        } else {
            post.comments = undefined;
        }
        setSelectedPost({...post});
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
                        <Button onClick={() => handleCommentsClick(post)}>Comments</Button>
                        {post.id === selectedPost?.id && selectedPost?.comments && (
                            <div>
                                {selectedPost.comments.map((comment) => (
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


