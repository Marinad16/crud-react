import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

class PostService {
    static async getPosts(limit = 5, page = 1) {
        const response = await axios.get(`${baseUrl}`, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }
    static async addPost(body) {
        const response = await axios.post(`${baseUrl}`, {body} )
        return response;
    }

    static async deletePost(id) {
        const response = await axios.delete(`${baseUrl}/${id}` )
        return response;
    }

    static async editPost() {
        const response = await axios.put(`${baseUrl}`)
        return response;
    }
}
export default PostService;