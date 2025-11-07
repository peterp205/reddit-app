import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const fetchHotPosts = createAsyncThunk('reddit/fetchHotPosts', async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
    const data = await response.json();
    return json.data.children.map(post => ({
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        // add other post fields 
    }));
});

const searchPosts = createAsyncThunk('reddit/searchPosts', async ({subreddit, query}) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/search.json?q=${query}&restrict_sr=1`);
    const data = await response.json();
    return data.data.children.map(child => child.data);
});

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {
    },
});
export default redditSlice.reducer;