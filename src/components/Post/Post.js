
function Post({ post }) {
    return (    
    <article className="post">  
        <h2 className="post-title">{post.title}</h2>
        <p className="post-author">by {post.author}</p>
        <p className="post-votes">Votes: {post.votes}</p>
        <img src={post.thumbnail} alt="Post thumbnail" className="post-thumbnail" />
        <p className="post-content">{post.content}</p>
        <a href={`https://reddit.com${post.relUrl}`} target="_blank" rel="noopener noreferrer" className="post-link">
            View on Reddit
        </a>
    </article>
    );
    };
        
        export default Post;        