const renderPosts = (posts) =>{
    const appDiv = document.getElementById('app');

    let postLsit = '';
    posts.forEach(element => {
        postLsit += `
            <div>
                <h2> ${element.id} : ${element.title} </h2>
                <p> ${element.body} </p>
            </div>
        `
    });

    appDiv.innerHTML = postLsit;
}

const fetchPosts = async() =>{
    
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        renderPosts(json);

        if(!response.ok){
            throw new Error('ERROR HTTP: ', response.status);
        }

    }catch(erorr){

        console.error(erorr);

    }
}

fetchPosts();