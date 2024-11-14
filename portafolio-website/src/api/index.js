export default async function getRepos() {
  try {
    const apiURL = 'https://api.github.com/users/JavyGR/repos';
    const response = await fetch(apiURL);
    const repos = await response.json();
    const reposList = [];
    const reposCount = repos.length;
    for (let i = 0; i < reposCount; i++) {
      reposList.push({
        id: repos[i].id,
        name: repos[i].name,
        link: repos[i].html_url,
        description: repos[i].description,
        mainLanguage: repos[i].language,
        lastUpdated: repos[i].updated_at
      });
    }
    return reposList;
  }
  catch (error) {
    console.error(`Error\n${error}`);
    throw error;
  }
}