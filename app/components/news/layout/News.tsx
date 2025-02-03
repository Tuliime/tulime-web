import { newsData } from "~/data/news";
import { NewsComponent } from "../UI/NewsComponent";

export const News = () => {
  return (
    <div className="lg:px-12 md:px-8 sm:px-6 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-8 mb-8 w-[100%]">
      {newsData.map((item) => (
        <NewsComponent
          key={item.id}
          headline={item.headline}
          image={item.image}
          date={item.date}
        />
      ))}
    </div>
  );
};
