// localStorage.getItem("idString");

// console.log(typeof localStorage.getItem("idString"));

const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("idString");

const onSearchChange = (event) => {
  const id = event.target.value;

  //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return (postListEl.innerHTML = data
  //         .map(
  //           (singleData) => `<div class="post">
  //             <div class="post__title">${singleData.title}</div>
  //             <p class="post__body">${singleData.body}</p>
  //           </div>`
  //         )
  //         .join(""));
  //     });
  return renderPost(id);
};

const renderPost = async (userId) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postsData = await post.json();
  postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
};

const postHTML = (post) => {
  return `<div class="post">
    <div class="post__title">${post.title}</div>
    <p class="post__body">${post.body}</p>
  </div>`;
};

renderPost(id);
