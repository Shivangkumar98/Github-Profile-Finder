 //search query from the URL parameter
        const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const username = urlParams.get('username');

      // Fetch user details and repos from the given username
      fetchUserDetails(username);
      fetchRepos(username);

      function fetchUserDetails(username) {
        fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => {
            const userDetails = document.getElementById('user-details');
            userDetails.innerHTML = `
              <img src="${data.avatar_url}" alt="${data.login}" width="100" height="100">
              <h4>${data.login}</h4>
              <p>Bio: ${data.bio || 'N/A'}</p>
              <p>Location: ${data.location || 'N/A'}</p>
              <p>Profile: <a href="${data.html_url}>${data.html_url}</a></p>
              <p>Blog: <a href="${data.blog}" target="_blank">${data.blog}</a></p>
              <p>Followers: ${data.followers}</p>
              <p>Following: ${data.following}</p>
            `;
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          });
      }

      function fetchRepos(username) {
        fetch(`https://api.github.com/users/${username}/repos`)
          .then((response) => response.json())
          .then((data) => {
            const repoList = document.getElementById('repo-list');
            data.forEach((repo) => {
              const repoElement = document.createElement('div');
              repoElement.className = 'repo';
              repoElement.innerHTML = `
                <h3>${repo.name}</h3>
                <p1>${repo.description}</p1>
                <a href="${repo.html_url}">View on GitHub</a>
              `;
              repoList.appendChild(repoElement);
            });
          })
          .catch((error) => {
            console.error('Error fetching repos:', error);
          });
      }
