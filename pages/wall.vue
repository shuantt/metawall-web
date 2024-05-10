<!-- 全體動態牆: 根據帶入帳號顯示內容 -->
<!-- 想辦法讓 url 為 "/" -->
<template>
  <div class="space-y-2">
    <!-- 查詢 Start -->
    <Searchbar :searchType="searchTypes"></Searchbar>
    <!-- 查詢 End -->

    <!-- 貼文 start -->
    <div class="posts space-y-5">
      <Post v-for="post in posts" :key="post.date" :post="post" />
    </div>
    <!-- 貼文 end -->
  </div>
</template>

<script lang="ts" setup>
const postsData = [
  {
    name: "邊緣小杰",
    userPhoto: "/images/user.png",
    date: "2022/11/05 09:25",
    content: "外面看起來就超冷... <br /> 我決定回被窩繼續睡....>.<",
    image:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "波吉",
    userPhoto: "/images/user6.png",
    date: "2022/12/25 09:25",
    content: "今天找到一張大海的照片 <br /> 太美啦～～～",
    image:
      "https://images.unsplash.com/photo-1713528193388-6396f3cce0bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
//defined posts on instance
const posts = ref(postsData);
const searchTypes = ref(["關鍵字", "最新貼文", "查詢用戶"]);
</script>

<style></style>
