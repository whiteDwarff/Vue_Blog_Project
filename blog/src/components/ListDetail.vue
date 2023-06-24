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

<script>
export default {
  props: {
    list: Object,
  },
};
</script>

<style>
</style>
<!-- 
{{ $route.params.id }}
$route.params : router의 파라미터 변수를 받는다. 

-->