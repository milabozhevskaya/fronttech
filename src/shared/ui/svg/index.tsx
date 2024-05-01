import Logo from "./logo.source.svg";
import Search from "./search.source.svg";
import Loading from "./loading.source.svg";
import NotFound from "./union.source.svg";
import Followers from "./followers.source.svg";
import Following from "./following.source.svg";
import EmptyList from "./empty-list.source.svg";
import ArrowLeft from "./arrow-left.source.svg";

const SVGSelector = ({ id }: { id: string }) => {
  switch (id) {
    case "logo":
      return <Logo />;
    case "search":
      return <Search />;
    case "loading":
      return <Loading />;
    case "not-found":
      return <NotFound />;
    case "followers":
      return <Followers />;
    case "following":
      return <Following />;
    case "empty-list":
      return <EmptyList />;
    case "arrow-left":
      return <ArrowLeft />;
    default:
      return <svg></svg>;
  }
};

export { SVGSelector };
