<template>
  <div>
    <div
      v-for="(data, i) in list"
      @click="$router.push('/detail/' + i)"
      :key="i"
      class="thum"
    >
      <div class="flex-box">
        <span>{{ data.number }}</span>
        <span>{{ data.date }}</span>
      </div>
      <h4 class="title">{{ data.title }}</h4>
      <p class="content">{{ data.content }}</p>
    </div>
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
.thum {
  width: 90%;
  padding: 20px;
  margin: 0 auto 20px auto;
  border: 1px solid #bbb;
  border-radius: 10px;
}
.flex-box {
  display: flex;
  justify-content: space-between;
}
.flex-box * {
  font-size: 12px;
  color: #bbb;
}
.title {
  margin: 5px 0 20px 0;
}
.content {
  font-size: 14px;
}
</style>
<!-- 

-->