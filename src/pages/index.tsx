import type { Repo, User } from "@/shared/types";
import { UserPage } from "./user-page";
import { LoadingPage } from "./loading-page";
import { NotFoundPage } from "./not-found-page";
import { EmptyPage } from "./empty-page";

type PageProps = {
  user: User | null;
  isPendingUser: boolean;
  isUserError: boolean;
  reposTotalCount: number;
  userRepos: Array<Repo>;
  onGetRepos: (page: number) => void;
  isPendingRepos: boolean;
  isReposError: boolean;
};

export const Page = ({
  user,
  isPendingUser,
  isUserError,
  reposTotalCount,
  userRepos,
  onGetRepos,
  isPendingRepos,
  isReposError,
}: PageProps) => {
  if (isPendingUser) {
    return <LoadingPage />;
  }
  if (!isPendingUser && isUserError) {
    return <NotFoundPage />;
  }
  if (!isPendingUser && user) {
    return (
      <UserPage
        {...{
          user,
          reposTotalCount,
          userRepos,
          onGetRepos,
          isPendingRepos,
          isReposError,
        }}
      />
    );
  }
  return <EmptyPage />;
};
