import { fetchNews } from "@/lib/fetchNews";
import { News } from "../../../typings/news";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

async function page() {
  const data: News[] = await fetchNews();
  return (
    <>
      <Separator />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {data.map((news, index) => (
          <News {...news} key={index} />
        ))}
      </section>
    </>
  );
}

export default page;
const News = (news: News) => {
  if (news.image.endsWith("comundefined")) return null;
  return (
    <Card className="flex flex-col gap-2">
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
      <img
        src={news.image}
        alt={news.title}
        className=" w-fit h-60 m-6  mt-0 object-cover"
        height={400}
      />
    </Card>
  );
};
