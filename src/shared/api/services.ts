import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { Repo, ReposQuery, User, UserQuery } from "../types";
import { BASE_URL } from "../constants";

const { get } = axios.create({
  baseURL: `${BASE_URL}/users`,
  timeout: 1000,
});

const services = {
  getUser: async ({ user }: UserQuery) => get<User>(`/${user}`),

  getRepos: async ({ user, perPage, page }: ReposQuery) =>
    get<Array<Repo>>(
      `/${user}/repos?per_page=${perPage}&page=${page}&type=public`
    ),
};

const useCreateOrGetUser = () => useMutation({ mutationFn: services.getUser });
const useCreateOrGetRepos = () =>
  useMutation({ mutationFn: services.getRepos });

export { useCreateOrGetUser, useCreateOrGetRepos };
