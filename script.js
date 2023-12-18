const postsButton = document.getElementById("postsBtn");
const albumsButton = document.getElementById("albumsBtn");
const photosButton = document.getElementById("photosBtn");
const dataList = document.getElementById("dataList");
const typeHeading = document.getElementById("typeHeading");

const fetchData = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      dataList.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        dataList.appendChild(li);
      });
    })
    .catch((error) => console.error("Fetch Error:", error));
};

const renderUI = () => {
  fetchData("https://jsonplaceholder.typicode.com/posts");
};

postsButton.addEventListener("click", () => {
  fetchData("https://jsonplaceholder.typicode.com/posts");
  toggleButton(postsButton);
  changeType(postsButton);
});

albumsButton.addEventListener("click", () => {
  fetchData("https://jsonplaceholder.typicode.com/albums");
  toggleButton(albumsButton);
  changeType(albumsButton);
});

photosButton.addEventListener("click", () => {
  fetchData("https://jsonplaceholder.typicode.com/photos");
  toggleButton(photosButton);
  changeType(photosButton);
});

function toggleButton(activeButton) {
  const buttons = [postsButton, albumsButton, photosButton];
  buttons.forEach((button) => {
    if (button === activeButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Cập nhật nội dung của button
function changeType(button) {
  const type = button.getAttribute("data-type");
  typeHeading.textContent = `Type: ${type}`;
}

renderUI();
