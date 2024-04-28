import axios from "axios";
import type { Repo, ReposQuery, User, UserQuery } from "../types";
import { BASE_URL } from "../constants";

const services = {
  getUser: async ({ user }: UserQuery) =>
    axios.get<User>(`${BASE_URL}/users/${user}`),

  getRepos: async ({ user, perPage, page }: ReposQuery) =>
    axios.get<Array<Repo>>(
      `${BASE_URL}/users/${user}/repos?per_page=${perPage}&page=${page}&type=public`
    ),
};

export { services };
