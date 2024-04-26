import axios from "axios";
import type { Repo, ReposQuery, User, UserQuery } from "../types";

const services = {
  getUser: async ({ user }: UserQuery) =>
    axios.get<User>(`https://api.github.com/users/${user}`),

  getRepos: async ({ user, perPage, page }: ReposQuery) =>
    axios.get<Array<Repo>>(
      `https://api.github.com/users/${user}/repos?per_page=${perPage}&page=${page}&type=public`
    ),
};

export { services };
