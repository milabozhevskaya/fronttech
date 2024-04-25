import type { Repo } from "../../../shared/types";

const getRepos = async ({ query }: { query: string }): Promise<Array<Repo>> => {
  const response = await fetch(`https://api.github.com/users/${query}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong!");
  }

  return (await response.json()).map(
    ({
      id,
      name,
      description,
      html_url: htmlURL,
    }: {
      id: number;
      name: string;
      description: string;
      html_url: string;
    }) => ({ id, name, description, htmlURL })
  );
};

export { getRepos };
