import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const projectAPI = {
    getPosts() {
        return instance.get("/posts");
    },
    getUsers() {
        return instance.get("/users");
    },
    getUser(userId) {  // new function to get single user
        return instance.get(`/users/${userId}`);
    },
    getComments(postId) {
        return instance.get(`/posts/${postId}/comments`);
    }
};
