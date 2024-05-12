<!-- 全體動態牆: 根據帶入帳號顯示內容 -->
<!-- 想辦法讓 url 為 "/" -->
<template>
  <div class="space-y-4">
    <!-- 查詢 Start -->
    <Searchbar :searchType="searchTypes"></Searchbar>
    <!-- 查詢 End -->

    <!-- 貼文 start -->
    <div v-if="posts.length > 0" class="posts space-y-5">
      <Post v-for="post in posts" :key="post.date" :post="post" />
    </div>
    <div
      v-else
      class="rounded-lg border-2 border-black bg-white shadow-[0px_3px_0px_0px_#000400]"
    >
      <div class="flex w-full space-x-1 border-b-2 border-black p-4">
        <div
          class="h-2 w-2 rounded border-[1px] border-solid border-[#707070] bg-[#DE4B63]"
        ></div>
        <div
          class="h-2 w-2 rounded border-[1px] border-solid border-[#707070] bg-[#FAA722]"
        ></div>
        <div
          class="h-2 w-2 rounded border-[1px] border-solid border-[#707070] bg-[#83C51D]"
        ></div>
      </div>
      <div class="flex items-center justify-center px-36 py-8">
        <span class="text-gray">目前尚無動態，新增一則貼文吧！</span>
      </div>
    </div>
    <!-- 貼文 end -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const postsData = [
  {
    name: "邊緣小杰",
    userPhoto: "/images/user.png",
    date: "2022/11/05 09:25",
    content: "外面看起來就超冷... /r/n 我決定回被窩繼續睡....>.<",
    image:
      "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comments: [
      {
        name: "波吉",
        userPhoto: "/images/user6.png",
        content: "真的～我已經準備要冬眠了",
        createAt: "2022/01/11 10:00",
      },
      {
        name: "希琳",
        userPhoto: "../public/images/user_default.png",
        content: "會嗎？我沒穿衣服都不覺得冷",
        createAt: "2022/01/12 18:00",
      },
    ],
    likes: 14,
  },
  {
    name: "波吉",
    userPhoto: "/images/user6.png",
    date: "2022/12/25 09:25",
    content: "今天找到一張大海的照片 <br /> 太美啦～～～",
    image:
      "https://images.unsplash.com/photo-1713528193388-6396f3cce0bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 20,
  },
];
//defined posts on instance
const posts = ref(postsData);
const searchTypes = ref(["關鍵字", "最新貼文", "查詢用戶"]);
</script>

<style></style>
