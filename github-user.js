const enterBtn = document.getElementById("enterBtn");
enterBtn.addEventListener("click",buttonHandler)
function buttonHandler() {
    const username = document.getElementById("username").value; 

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {

      const githubUser_card_container = document.getElementById("githubUser_card_container");
      const userCard = `
      <div class="card">
        <img src="${data.avatar_url}" alt="Avatar" class="image">
        <h3>${data.name}</h3>
        <p>Followers: ${data.followers}</p>
        <p>Repositories: ${data.public_repos}</p>
        <p>Bio: ${data.bio}</p>
      </div>      
    `;
      
    githubUser_card_container.innerHTML = userCard;

    })
}            
