// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// const fetchingData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// fetchingData();

const fetchingData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  const userListEl = document.querySelector(".user-list");
  console.log(result);
  //   const resultMapped = result
  //     .map((user) => {
  //       return `<div class="user-card">
  //         <div class="user-card__container">
  //           <h3>User's Name</h4>
  //             <p><b>Email:</b> email@email.com</p>
  //             <p><b>Phone:</b> 0000000000</p>
  //             <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
  //         </div>
  //       </div>`;
  //     })
  //     .join("");
  //   userListEl.innerHTML = resultMapped;
  // };

  result.map((user) => {
    return (userListEl.innerHTML += `<div class="user-card">
    <div class="user-card__container">
      <h3>User's Name</h4>
        <p><b>Email:</b> email@email.com</p>
        <p><b>Phone:</b> 0000000000</p>
        <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
    </div>
  </div>`);
  });
};

fetchingData();
