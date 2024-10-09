import Exam from "@/Pages/Exam";
import ExamSuccess from "@/Pages/ExamSuccess";
import Home from "@/Pages/Home/Home";
import Profile from "@/Pages/Profile";
import StartQuiz from "@/Pages/StartQuiz";

type RouteConfig = {
  name: string;
  path: string;
  component: React.ComponentType;
  Layout?: "MainLayout" | "LayoutRoot";
  authRequire: boolean;
};

export const PublicRoute: RouteConfig[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
    Layout: "MainLayout",
    authRequire: false,

  },
  {
    name: "Exam",
    path: "/exams",
    component: Exam,
    Layout: "MainLayout",
    authRequire: false,
  },
  {
    name: "StartQuiz",
    path: "/exams/:examId",
    component: StartQuiz,
    Layout: "LayoutRoot",
    authRequire: true,
  },
  {
    name: "exam",
    path: "/examsuccess/:examId",
    component: ExamSuccess,
    Layout: "MainLayout",
    authRequire: true,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    Layout: "MainLayout",
    authRequire: false,
  },
];


export const NavRouter = [
  {
    title : 'Home',
    path: '/'
  },
  {
    title : 'Exams',
    path: '/exams'
  },
  {
    title : 'Contact Us',
    path: '/contactus'
  }
]