export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publicshedAt: string;
  createdAt: string;
};
