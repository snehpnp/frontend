// data/courses.ts
import { Course } from "@/src/types/course";

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Complete Python Bootcamp: Zero to Hero",
    description:
      "Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games.",
    fullDescription:
      "Become a Python programmer and learn one of employer's most requested skills of 2025! This is the most comprehensive, yet straightforward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you!",
    image:
      "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg",
    videoUrl:
      "https://v.ftcdn.net/18/98/54/87/700_F_1898548774_6XkyLSbTO0fUlCzw4AYulPLFKmoFkuId_ST.mp4",
    instructor: {
      name: "Jose Portilla",
      avatar: "https://i.pravatar.cc/150?img=12",
      title: "Head of Data Science",
    },
    price: {
      current: 599,
      original: 3999,
      currency: "₹",
    },
    rating: {
      score: 4.6,
      count: 512847,
    },
    tags: ["Bestseller", "Most Popular"],
    category: "Python",
    level: "Beginner",
    duration: "22 hours",
    students: 1876543,
    lastUpdated: "January 2025",
    bestseller: true,
    whatYouLearn: [
      "Learn to use Python professionally",
      "Create games with Python, like Tic Tac Toe and Blackjack",
      "Learn advanced Python features, like the collections module",
      "Use Object Oriented Programming with classes",
      "Understand complex topics, like decorators",
      "Build GUIs in the Jupyter Notebook system",
    ],
    requirements: [
      "Access to a computer with an internet connection",
      "No prior programming experience needed",
    ],
    syllabus: [
      {
        title: "Course Introduction",
        lessons: [
          "Introduction to the Course",
          "Course Curriculum Overview",
          "Introduction to Python",
        ],
      },
      {
        title: "Python Setup",
        lessons: [
          "Command Line Basics",
          "Installing Python",
          "Running Python Code",
          "Getting the Notebooks",
        ],
      },
      {
        title: "Python Object and Data Structure Basics",
        lessons: [
          "Introduction to Python Data Types",
          "Python Numbers",
          "Variable Assignments",
          "Introduction to Strings",
          "Indexing and Slicing with Strings",
          "String Properties and Methods",
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Rajesh Kumar",
        avatar: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        date: "2 weeks ago",
        comment:
          "Excellent course! Jose explains everything so clearly. I went from knowing nothing about Python to building my own projects. Highly recommended!",
      },
      {
        id: "r2",
        author: "Priya Sharma",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        date: "1 month ago",
        comment:
          "This course is amazing! The instructor is very knowledgeable and the content is well-structured. Worth every penny!",
      },
      {
        id: "r3",
        author: "Amit Patel",
        avatar: "https://i.pravatar.cc/150?img=8",
        rating: 4,
        date: "3 weeks ago",
        comment:
          "Great course for beginners. Some sections could be more detailed, but overall a solid introduction to Python.",
      },
    ],
  },
  {
    id: "2",
    title: "The Complete JavaScript Course 2025",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
    fullDescription:
      "JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world. That's why you want to learn JavaScript too. And you came to the right place!",
    image:
      "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
    instructor: {
      name: "Jonas Schmedtmann",
      avatar: "https://i.pravatar.cc/150?img=14",
      title: "Web Developer & Designer",
    },
    price: {
      current: 599,
      original: 4999,
      currency: "₹",
    },
    rating: {
      score: 4.7,
      count: 189234,
    },
    tags: ["Bestseller", "Highest Rated"],
    category: "JavaScript",
    level: "Intermediate",
    duration: "69 hours",
    students: 892341,
    lastUpdated: "December 2024",
    bestseller: true,
    trending: true,
    whatYouLearn: [
      "Become an advanced, confident, and modern JavaScript developer",
      "Build 6 beautiful real-world projects",
      "Think like a developer: problem-solving, researching, workflows",
      "JavaScript fundamentals: variables, if/else, operators, boolean logic",
      "Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining",
    ],
    requirements: [
      "No coding experience is necessary",
      "Basic understanding of HTML and CSS is a plus",
    ],
    syllabus: [
      {
        title: "Welcome, Welcome, Welcome!",
        lessons: ["Course Structure and Projects", "Watch Before You Start!"],
      },
      {
        title: "JavaScript Fundamentals - Part 1",
        lessons: [
          "Hello World!",
          "A Brief Introduction to JavaScript",
          "Linking a JavaScript File",
          "Values and Variables",
        ],
      },
    ],
    reviews: [
      {
        id: "r4",
        author: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        date: "1 week ago",
        comment:
          "Jonas is an exceptional teacher! This course transformed my understanding of JavaScript. The projects are challenging but so rewarding!",
      },
    ],
  },
  {
    id: "3",
    title: "Machine Learning A-Z: AI, Python & R",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
    fullDescription:
      "Interested in the field of Machine Learning? Then this course is for you! This course has been designed by two professional Data Scientists so that we can share our knowledge and help you learn complex theory, algorithms, and coding libraries in a simple way.",
    image:
      "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
    instructor: {
      name: "Kirill Eremenko",
      avatar: "https://i.pravatar.cc/150?img=15",
      title: "Data Scientist",
    },
    price: {
      current: 599,
      original: 5999,
      currency: "₹",
    },
    rating: {
      score: 4.5,
      count: 178956,
    },
    tags: ["Bestseller"],
    category: "Artificial Intelligence",
    level: "Beginner",
    duration: "44 hours",
    students: 1234567,
    lastUpdated: "November 2024",
    bestseller: true,
    whatYouLearn: [
      "Master Machine Learning on Python & R",
      "Make accurate predictions",
      "Make powerful analysis",
      "Make robust Machine Learning models",
      "Create strong added value to your business",
    ],
    requirements: [
      "Just some high school mathematics level",
    ],
    syllabus: [
      {
        title: "Welcome to the course!",
        lessons: ["Applications of Machine Learning", "Why Machine Learning"],
      },
    ],
    reviews: [
      {
        id: "r5",
        author: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        date: "5 days ago",
        comment: "Best ML course I've taken. Very practical and hands-on!",
      },
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Masterclass 2025",
    description:
      "23 Courses in 1: SEO, YouTube, Social Media, Google Ads, Facebook Ads, Email & More!",
    fullDescription:
      "Learn Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
    image:
      "https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
    instructor: {
      name: "Phil Ebiner",
      avatar: "https://i.pravatar.cc/150?img=16",
      title: "Marketing Expert",
    },
    price: {
      current: 599,
      original: 3499,
      currency: "₹",
    },
    rating: {
      score: 4.4,
      count: 87654,
    },
    tags: ["New", "Hot & New"],
    category: "Digital Marketing",
    level: "Beginner",
    duration: "37 hours",
    students: 456789,
    lastUpdated: "January 2025",
    new: true,
    trending: true,
    whatYouLearn: [
      "23 digital marketing courses in 1",
      "Professional SEO training",
      "YouTube marketing",
      "Social media marketing",
    ],
    requirements: ["No prior experience needed"],
    syllabus: [
      {
        title: "Getting Started",
        lessons: ["Introduction", "Course Overview"],
      },
    ],
    reviews: [],
  },
  {
    id: "5",
    title: "Microsoft Excel - From Beginner to Advanced",
    description:
      "Learn Microsoft Excel from Beginner to Advanced level with this comprehensive course.",
    fullDescription:
      "This Microsoft Excel course combines 4 different courses for a complete training covering Excel from Beginner through Advanced to Expert level.",
    image:
      "https://img-c.udemycdn.com/course/750x422/1565838_e54e_12.jpg",
    instructor: {
      name: "Kyle Pew",
      avatar: "https://i.pravatar.cc/150?img=17",
      title: "Excel Instructor",
    },
    price: {
      current: 599,
      original: 2999,
      currency: "₹",
    },
    rating: {
      score: 4.6,
      count: 123456,
    },
    tags: ["Bestseller"],
    category: "Microsoft Excel",
    level: "Beginner",
    duration: "18 hours",
    students: 678901,
    lastUpdated: "October 2024",
    bestseller: true,
    whatYouLearn: [
      "Master Microsoft Excel",
      "Build a solid understanding of Excel basics",
      "Learn the most common Excel functions",
      "Create dynamic reports with pivot tables",
    ],
    requirements: ["Microsoft Excel installed"],
    syllabus: [
      {
        title: "Introduction",
        lessons: ["Welcome to the Course", "Excel Basics"],
      },
    ],
    reviews: [],
  },
  {
    id: "6",
    title: "Web Development Bootcamp 2025",
    description:
      "The only course you need to become a full-stack web developer. HTML, CSS, Javascript, Node, and more!",
    fullDescription:
      "Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer.",
    image:
      "https://img-c.udemycdn.com/course/750x422/1565838_e54e_12.jpg",
    instructor: {
      name: "Angela Yu",
      avatar: "https://i.pravatar.cc/150?img=18",
      title: "Developer and Lead Instructor",
    },
    price: {
      current: 599,
      original: 4999,
      currency: "₹",
    },
    rating: {
      score: 4.7,
      count: 345678,
    },
    tags: ["Bestseller", "Trending"],
    category: "Web Development",
    level: "Beginner",
    duration: "65 hours",
    students: 987654,
    lastUpdated: "December 2024",
    bestseller: true,
    trending: true,
    whatYouLearn: [
      "Build 16 web development projects",
      "Learn the latest technologies",
      "Build fully-fledged websites and web apps",
    ],
    requirements: ["No programming experience needed"],
    syllabus: [
      {
        title: "Front-End Web Development",
        lessons: ["Introduction to HTML", "Intermediate HTML", "Introduction to CSS"],
      },
    ],
    reviews: [],
  },
];