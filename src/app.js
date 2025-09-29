import { http } from './http';
import { ui } from  './ui ' ;
document.addEventListener('DOMContentLoaded',getposts);
 function getposts(){
    http.get('http:// localhosts:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));

 }