import { fetchNews } from "@/lib/fetchNews";
import { News } from "../../../typings/news";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const dynamic = "force-dynamic";

async function page() {
  const data: News[] = await fetchNews();
  return (
    <>
      <Separator />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
        {data
          .filter((news) => !news.image.endsWith("comundefined"))
          .filter(
            (news, index, self) =>
              index === self.findIndex((t) => t.title === news.title)
          )
          .map((news, index) => (
            <News {...news} key={index} />
          ))}
      </section>
    </>
  );
}

export default page;
const News = (news: News) => {
  return (
    <Card className="flex flex-col  gap-2">
      <CardHeader>
        <CardTitle className=" hover:underline underline-offset-4 text-xl capitalize">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            {news.title}
          </a>
        </CardTitle>
        <CardDescription className="">
          {news.description.slice(0, 100) + "..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-clip group w-full">
        <img
          src={news.image}
          alt={news.title}
          className=" w-full group-hover:scale-105 transition-transform   mx-auto  object-cover"
        />
      </CardContent>
    </Card>
  );
};
