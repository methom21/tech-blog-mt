const newName = document.querySelector("input[name=postName]").value;
const newPost = document.querySelector("input[name=postText]").value;
const createPost = async () => {
    const post = await fetch ('/api/post', {
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    });
    if (post.ok) {
        document.location.replace('/allposts');
    } else {
        alert(post.statusText);
    }
};
document.querySelector(".submitBtn").addEventListener('click', createPost);