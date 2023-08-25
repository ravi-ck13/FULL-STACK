document.addEventListener('DOMContentLoaded', function()
{
 const postForm=document.getElementById('postForm');
 const postContent=document.getElementById('postContent');
 const feed=document.getElementById('feed');

 postForm.addEventListener('submit', function(e)
{
 e.preventDefault();
 const content=postContent.value;
		
const newPost=document.createElement('div');
newPost.classList.add('post');
newPost.textContent=content;

feed.appendChild(newPost);
postContent.value='';
});
});