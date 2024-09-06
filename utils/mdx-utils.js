import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
      const { data } = await api.get(`/post?id=eq.${id}`);
      
      return data; 
    } catch (error) {
      console.error("Error fetching post:", error);
      return null; 
    }
  };