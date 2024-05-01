import { useCreateOrGetRepos, useCreateOrGetUser } from "@/shared/api/services";
import type { Repo, User } from "@/shared/types";
import { useState } from "react";
import { toast } from "react-toastify";

export const useGitHubUser = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isUserError, setIsUserError] = useState(false);
  const [reposTotalCount, setReposTotalCount] = useState(0);
  const [userRepos, setUserRepos] = useState<Array<Repo>>([]);
  const [isReposError, setIsReposError] = useState(false);
  const { isPending: isPendingUser, mutate: orderGetUser } =
    useCreateOrGetUser();
  const { isPending: isPendingRepos, mutate: orderGetRepos } =
    useCreateOrGetRepos();

  const onGetRepos = (page: number, searchInput = search) => {
    setIsReposError(false);
    setUserRepos([]);
    orderGetRepos(
      { user: searchInput, perPage: 4, page },
      {
        onSuccess: (data) => {
          setUserRepos(data.data);
        },
        onError: (error) => {
          setIsReposError(true);
          toast.error(error.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
      }
    );
  };

  const onGetUser = (value: string) => {
    if (!value) {
      setSearch("");
      setUser(null);
      setReposTotalCount(0);
      setUserRepos([]);
      return;
    }
    setSearch(value);
    setIsUserError(false);
    setReposTotalCount(0);

    orderGetUser(
      { user: value },
      {
        onSuccess: (data) => {
          setUser(data.data);
          setReposTotalCount(data.data.public_repos || 0);
          onGetRepos(1, value);
        },
        onError: (error) => {
          setUser(null);
          setIsUserError(true);
          toast.error(error.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
      }
    );
  };

  return {
    search,
    user,
    onGetUser,
    isPendingUser,
    isUserError,
    reposTotalCount,
    userRepos,
    onGetRepos,
    isPendingRepos,
    isReposError,
  };
};
