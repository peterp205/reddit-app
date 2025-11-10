import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/type';

const fetchHotPosts = createAsyncThunk('reddit/fetchHotPosts', async (subreddit = 'popular') => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`);
    const data = await response.json();
    return data.data.children.map(post => ({
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        votes: post.data.score,
        content: post.data.selftext,
        postType: post.data.post_hint,
        url: post.data.url,
        thumbnail: post.data.thumbnail,
        relUrl: post.data.permalink,
    }));
});

const searchPosts = createAsyncThunk('reddit/searchPosts', async ({ subreddit = 'popular', query }) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/search.json?q=${query}&restrict_sr=1`);
    const data = await response.json();
    return data.data.children.map(post => ({
        id: post.data.id,
        title: post.data.title,
        author: post.data.author,
        votes: post.data.score,
        content: post.data.selftext,
        postType: post.data.post_hint,
        url: post.data.url,
        thumbnail: post.data.thumbnail,
        relUrl: post.data.permalink,
    }));
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHotPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchHotPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(searchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(searchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(searchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });                 

    },
});

// Selectors
export const selectPosts = (state) => state.reddit.posts;
export const selectStatus = (state) => state.reddit.status;
export const selectError = (state) => state.reddit.error;

// Export the async thunks
export { fetchHotPosts, searchPosts };

export default redditSlice.reducer;