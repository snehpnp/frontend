// types/course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  videoUrl?: string;
  instructor: {
    name: string;
    avatar: string;
    title: string;
  };
  price: {
    current: number;
    original: number;
    currency: string;
  };
  rating: {
    score: number;
    count: number;
  };
  tags: string[];
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  lastUpdated: string;
  bestseller?: boolean;
  trending?: boolean;
  new?: boolean;
  whatYouLearn: string[];
  requirements: string[];
  syllabus: {
    title: string;
    lessons: string[];
  }[];
  reviews: {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export const categories = [
  "All",
  "Python",
  "JavaScript",
  "Artificial Intelligence",
  "Digital Marketing",
  "Microsoft Excel",
  "Web Development",
  
];