import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagenation from "@/app/_components/Pagination";
import SeachField from "@/app/_components/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 60;

export default async function page(){
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SeachField />
      <NewsList news={news} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
