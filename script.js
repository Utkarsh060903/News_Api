// const apiKey = 'fca3393a88994db8858b667517c3d5f6'
// const blogContainer = document.querySelector('#blog-container')
// const searchBox = document.querySelector('.searchBox')
// const searchBtn = document.querySelector('.searchBtn')

// async function fetchRandomNews(){
//     try{
//        const apiUrl =  `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`
//        const response = await fetch(apiUrl)
//        const data = await response.json()
//        return data.articles
//     }
//     catch(error){
//         console.error("Error fetching random news" , error);
//         return [];
//     }
// }

// searchBtn.addEventListener('click' , async ()=>{
//     const query = searchBox.value.trim()
//     if(query !== ""){
//         try{
//             const articles = await fetchNewsQuery(query)
//             displayBlogs(articles)
//         }
//         catch(error){
//             console.log("error fetching news by query" , error)
//         }
//     }
// })

// async function fetchNewsQuery(query){
//     try{
//        const apiUrl =  `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apiKey}`
//        const response = await fetch(apiUrl)
//        const data = await response.json()
//        return data.articles
//     }
//     catch(error){
//         console.log("error fetching news by query" , error)
//     }
// }

// function displayBlogs(articles){
//     blogContainer.innerHTML = ""
//     articles.forEach((article) => {
//         const blogCard = document.createElement("div")
//         blogCard.classList.add("blog-card")
//         const img = document.createElement("img")
//         img.src = article.urlToImage
//         img.alt = article.title
//         const title = document.createElement("h2")
//         const truncatedTitle = article.title.length > 30 ? article.title.slice(0,30) + "..." : article.title
//         title.textContent = truncatedTitle
//         const description = document.createElement("p")
//         const truncatedDescription = article.description.length > 120 ? article.description.slice(0,120) + "..." : article.description

//         description.textContent = truncatedDescription

//         blogCard.appendChild(img)
//         blogCard.appendChild(title)
//         blogCard.appendChild(description)
//         blogCard.addEventListener('click' , ()=>{
//             window.open(article.url , "_blank")
//         })
//         blogContainer.appendChild(blogCard)
//     })
// }

// (async ()=>{
//     try{
//        const articles = await fetchRandomNews()
//        displayBlogs(articles)
//     }
//     catch(error){
//         console.error("error fetching random news" , error)
//     }
// })();

const apiKey = 'fca3393a88994db8858b667517c3d5f6';
const blogContainer = document.querySelector('#blog-container');
const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');

async function fetchRandomNews(){
    try{
        const apiUrl =  `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
        console.log("hello")
    }
    catch(error){
        console.error("Error fetching random news", error);
        return [];
    }
}

searchBtn.addEventListener('click', async ()=>{
    const query = searchBox.value.trim();
    if(query !== ""){
        try{
            const articles = await fetchNewsQuery(query);
            displayBlogs(articles);
        }
        catch(error){
            console.log("Error fetching news by query", error);
        }
    }
});

async function fetchNewsQuery(query){
    try{
        const apiUrl =  `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }
    catch(error){
        console.log("Error fetching news by query", error);
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage || 'https://via.placeholder.com/150'; // Use a placeholder image URL if article.urlToImage is null
        img.alt = article.title || 'No title'; // Add a default alt text if article.title is null

        const title = document.createElement("h2");
        const truncatedTitle = article.title && article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title || 'No title'; // Handle null title
        title.textContent = truncatedTitle;

        const description = document.createElement("p");
        const truncatedDescription = article.description && article.description.length > 120 ? article.description.slice(0, 120) + "..." : article.description || 'No description'; // Handle null description

        description.textContent = truncatedDescription;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', ()=>{
            window.open(article.url, "_blank");
        });
        blogContainer.appendChild(blogCard);
    });
}

(async ()=>{
    try{
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }
    catch(error){
        console.error("Error fetching random news", error);
    }
})();
