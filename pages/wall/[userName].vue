<!-- 個人動態牆: 根據帶入帳號顯示內容 -->
<template>
  <div class="h-screen bg-[url('~/assets/images/bg.svg')]">
    <div class="mx-auto lg:flex max-w-[872px] lg:space-x-7">
      <section class="container mx-auto p-3 lg:w-2/3 lg:px-0">
        <div class="space-y-2">
          <!-- 查詢 Start -->
          <!-- <Searchbar /> -->
          <!-- <div
            class="query space-y-2 lg:flex lg:justify-between lg:space-x-2 lg:space-y-0"
          >
            <select
              class="w-full appearance-none border-2 border-black px-4 py-3 lg:w-1/3"
            >
              <option class="text-base">最新貼文</option>
              <option class="text-base">查詢用戶</option>
            </select>
            <div class="flex lg:w-2/3">
              <input
                class="w-full border-2 border-r-[1px] border-black px-4 py-3"
                type="text"
                placeholder="搜尋貼文"
              />
              <button
                class="block h-14 w-14 border-2 border-l-[1px] border-black bg-primary p-2 text-base font-bold text-white"
              >
                查
              </button>
            </div>
          </div> -->
          <!-- 查詢 End -->
          <!-- 貼文 start -->
          <div class="space-y-5">
            <Post v-for="post in posts" :key="post.date" :post="post" />
          </div>
          <!-- 貼文 end -->
        </div>
      </section>
      <!-- sidebar start -->
      <sidebar />
      <!-- sidebar end -->
    </div>
  </div>
</template>

<script lang="ts" setup>

// 登入時: jwt 取出 id, name ，name 帶入路由 => 跳轉到本頁面，用 name 取得 user 資料
// 查詢他人頁面，路由帶他人的 name，敲 api 取得他人資料

const route = useRoute();
const routeName = route.params.userName;
const postsData = [
  {
    name: "shuantt",
    userPhoto: "/images/user_default.png",
    date: "2022/11/05 09:25",
    content: "外面看起來就超冷... <br /> 我決定回被窩繼續睡....>.<",
    image: "https://images.unsplash.com/photo-1713528193388-6396f3cce0bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shuantt",
    userPhoto: "/images/user_default.png",
    date: "2022/12/25 09:25",
    content: "好累喔，想睡覺",
    image: "",
  },
];

const posts = ref(postsData);
const user = postsData[0].name;

console.log(routeName);

// if (routeName !== user) {
//   await navigateTo("/error");
// }
</script>
