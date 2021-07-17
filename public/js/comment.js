const commentName = document.querySelector("input [name=commentName]").value;
const newComment = document.querySelector("input name=comment").value;
const makeComment = async ()=>{
    const comment = await fetch ('/api/comment', {
        method: 'POST',
        headers: {'Content-type': 'application/json'}
    });
    if(comment.ok) {
        document.location.replace('/allposts')
    } else {
        alert(comment.statusText);
    }
};
document.querySelector(".submitComment").addEventListener('click', makeComment);