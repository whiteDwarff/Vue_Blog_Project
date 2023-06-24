# Vue_Blog_Project
Vue.js를 활용한 Blog 구축


### vue-router 설치
- 동작중인 서버 멈추기
- New Terminal
- cd '프로젝트명' *** 생성된 프로젝트 폴더로 반드시 이동해야 함
- npm install vue-router@4
- 프로젝트 내 src 폴더 내부에 폴더 및 파일 생성 (router -> router.js)
- router.js에 하단 코드 작성
```ruby
import { createWebHistory, createRouter } from "vue-router";
// import 컴포넌트명 from 경로
import Detail from "@/components/DetailList.vue"

const routes = [
  {
    path: "/경로",
    component: import해온 컴포넌트,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
```
<br>

### path: "/경로:key"는 사용자가 URL로 검색된 값으로 페이지를 이동시킬 수 있다.
- : 는 어떤 값을 입력받아도 페이지를 이동시키겠다 ~
- : key는 자유롭게 작명가능하고 정규식을 사용할 수 있다.
  1.  (\\d+) : 숫자만 입력받는다.
  2.  asterisk  : 경로 내 파라미터를 중복하여 사용할 수 있다 등등..
