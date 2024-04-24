import type { User } from "../types";

const getUser = async ({ query }: { query: string }): Promise<User> => {
  const response = await fetch(`https://api.github.com/users/${query}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong!");
  }

  const {
    name,
    login,
    avatar_url: avatarURL,
    html_url: htmlURL,
    public_repos: publicRepos,
    followers,
    following
  } = await response.json();
  return {
    name,
    login,
    avatarURL,
    htmlURL,
    publicRepos,
    followers,
    following
  };
};

export { getUser };
