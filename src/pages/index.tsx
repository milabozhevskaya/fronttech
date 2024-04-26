import type { PageProps } from "@/shared/types";
import { UserPage } from "./user-page";
import { LoadingPage } from "./loading-page";
import { NotFoundPage } from "./not-found-page";
import { EmptyPage } from "./empty-page";

const Page = ({ userQuery, user, loading, fetching, notFound }: PageProps) => {
  if (loading || fetching) {
    return <LoadingPage />;
  }
  if (!loading && notFound && !user) {
    return <NotFoundPage />;
  }
  if (!loading && !notFound && user) {
    return <UserPage {...user} userQuery={userQuery} />;
  }
  return <EmptyPage />;
};

export { Page };
