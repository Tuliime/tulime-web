import React from "react";
import { News } from "~/components/news/layout/News";
import { AppLayout } from "~/components/shared/layout/AppLayout";

const news = () => {
  return (
    <AppLayout>
      <p className="lg:px-12 md:px-8 sm:px-6">
        Recent farming trends and updates
      </p>
      <News />
    </AppLayout>
  );
};

export default news;
