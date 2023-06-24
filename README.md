# Vue_Blog_Project
Vue.js를 활용한 Blog 구축


### vue-router 설치
- 동작중인 서버 멈추기
- New Terminal
- cd '프로젝트명' _*** 생성된 프로젝트 폴더로 반드시 이동해야 함_
- npm install vue-router@4
- 프로젝트 내 src 폴더 내부에 폴더 및 파일 생성 (router -> router.js)
- router.js에 하단 코드 작성
```ruby
import { createWebHistory, createRouter } from "vue-router";
# import 컴포넌트명 from 경로
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
<br>

### path: "/경로:key"는 사용자가 URL로 검색된 값으로 페이지를 이동시킬 수 있다.
- : 는 어떤 값을 입력받아도 페이지를 이동시키겠다 ~
- : key는 자유롭게 작명가능하고 정규식을 사용할 수 있다.
  1.  (\\d+) : 숫자만 입력받는다.
  2.  asterisk  : 경로 내 파라미터를 중복하여 사용할 수 있다 등등..
<br>
<br>
<br>

### router로 등록한 컴포넌트의 사용
```ruby
 # 를 작성하여 해당 자리에 보여줄 수 있고,
 <router-view></router-view>
```
```ruby

# link-to=""속성을 통해 컴포넌트간 화면이동을 시킬 수 있다.
<router-link to="/">Home</router-link>
<router-link to="/list">List</router-link>
```

<br>
<br>
<br>


### BlogList.vue 컴포넌트의 구성

![스크린샷 2023-06-24 오후 8 55 03](https://github.com/whiteDwarff/Vue_Blog_Project/assets/115057117/2ad14355-10e4-4e46-a6f8-6e310b853dcd)



```ruby
<template>
  <div>
    <div
      v-for="(data, i) in list"
      @click="$router.push('/detail/' + i)"
      :key="i"
      class="thum">
      <div class="flex-box">
        <span>{{ data.number }}</span>
        <span>{{ data.date }}</span>
      </div>
      <h4 class="title">{{ data.title }}</h4>
      <p class="content">{{ data.content }}</p>
    </div>
  </div>
</template>

# 위에서 설명한 <router-link-to=""> 를 사용하여 페이지 전환도 가능하지만
# @click="" 메서서드를 사용하여 URL을 동적으로 변경시키고 값을 추가하여 화면을 전환시킨다.
# 사용한 i는 for문을 사용할 때 사용한 key 값이다.
```


<br>
<br>
<br>

### ListDetail.vue 컴포넌트의 구성

![스크린샷 2023-06-24 오후 9 07 44](https://github.com/whiteDwarff/Vue_Blog_Project/assets/115057117/224dbe97-9f41-43ea-bab4-c1f93c2b056d)


```ruby
<template>
  <div>
    <div class="flex-box">
      <span>{{ list[$route.params.id].number }}</span>
      <span>{{ list[$route.params.id].date }}</span>
    </div>
    <h4 class="title">{{ list[$route.params.id].title }}</h4>
    <p class="content">{{ list[$route.params.id].content }}</p>
    <router-view></router-view>
  </div>
</template>

# BlogList 컴포넌트에서 라우팅을 통해 경로에서 전달된 매개벼수를 사용하여 데이터를 받은 후 화면에 출력
# $route.params은 현재 라우트의 매겨변수를 나타내는 Vue 라우트 객체이고 id는 key이다.
# BlogList 컴포넌트에서 각 리스트를 클릭하면 해당 컴포넌트 하나에서 데이터를 받는다 **
```
