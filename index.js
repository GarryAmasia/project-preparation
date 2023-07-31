// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// const fetchingData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// fetchingData();

let userListEl = document.querySelector(".user-list");

const fetchingData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
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
    return userHtml(user);
  });
};

const showUserPost = (id) => {
  console.log(id);
  //   console.log(typeof id);

  console.log(window.location);
  localStorage.setItem("idString", id);
  window.location.href = `${window.location.origin}/user.html`;
};

const userHtml = (user) => {
  console.log(user);
  return (userListEl.innerHTML += `<div class="user-card" onclick="showUserPost('${user.id}')" >
    <div class="user-card__container">
      <h3>${user.name}</h4>
        <p><b>${user.email}</p>
        <p><b>${user.phone}</p>
        <p><b>Website:</b> <a href="${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>`);
};

fetchingData();
