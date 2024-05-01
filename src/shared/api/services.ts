import axios from "axios";
import { useMutation } from "@tanstack/react-query";
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

const useCreateOrGetUser = () => useMutation({ mutationFn: services.getUser });
const useCreateOrGetRepos = () =>
  useMutation({ mutationFn: services.getRepos });

export { useCreateOrGetUser, useCreateOrGetRepos };
