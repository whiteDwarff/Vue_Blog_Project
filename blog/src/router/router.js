import { createWebHistory, createRouter } from "vue-router";
import List from "@/components/BlogList.vue";
import Home from "@/components/HomeCmp.vue";
import Detail from "@/components/ListDetail.vue";
import Test from "@/components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    // router내 또 다른 router를 나눈다. (여려개 가능)
    children: [
      {
        path: "test",
        component: Test,
      },
    ],
  },
  // {
  //   path: "/anything(.*)",
  //   component: 404component
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
- path: "경로/:key"
- :는 뭘 입력하든 해당 컴포넌트를 보여주겠다 ~
- key는 작명 가능
- 정규식 입력가능
  # (\\d+) : 숫자가 들어올 때 detail 컴포넌트를 보여준다.
  # *      : 파라미터를 중복해서 입력가능


*/
