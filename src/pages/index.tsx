import type { PageProps } from "@/shared/types";
import { UserPage } from "./user-page";
import { LoadingPage } from "./loading-page";
import { NotFoundPage } from "./not-found-page";
import { EmptyPage } from "./empty-page";

const Page = ({ user, loading, notFound }: PageProps): JSX.Element => {
  if (loading) {
    return <LoadingPage />;
  }
  if (!loading && notFound && !user) {
    return <NotFoundPage />;
  }
  if (!loading && !notFound && user) {
    return <UserPage {...user} />;
  }
  return <EmptyPage />;
};

export { Page };
