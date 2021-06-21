const github_token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const github = {
  baseURL: "https://api.github.com/graphql",
  username: "abhishek1998",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${github_token}`
  },
};

export default github;