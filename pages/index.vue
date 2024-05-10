<template>
  <div class="wrapper h-screen w-full bg-[url('/images/bg.svg')] md:py-52">
    <div
      class="container mx-auto bg-[#EFECE7] px-12 py-24 md:flex md:max-w-[860px] md:space-x-12 md:border-2 md:border-gray-800 md:shadow-[-8px_8px_0px_0px_#00040029]"
    >
      <div class="mx-auto mb-6 flex align-middle md:w-1/2">
        <img
          src="/images/login-bg.svg"
          alt="login-bg-img"
          class="mx-auto max-h-full max-w-full"
        />
      </div>
      <div class="container mx-auto md:w-1/2">
        <div class="container mx-auto">
          <img
            src="/images/MetaWall.png"
            class="mx-auto max-h-full max-w-full"
          />
        </div>
        <span class="mx-auto mb-6 block text-center text-xl font-bold"
          >到元宇宙展開全新社交圈</span
        >
        <div class="mb-8 space-y-4">
          <input
            class="mx-auto block h-12 w-full border-2 border-solid border-black py-4 pl-6"
            type="email"
            placeholder="Email"
          />
          <input
            class="mx-auto block h-12 w-full border-2 border-black py-4 pl-6"
            type="password"
            placeholder="Password"
          />
        </div>
        <a
          href="#"
          alt="button for login to the system"
          disabled
          class="mb-4 flex justify-center items-center  h-12 w-full rounded-lg border-2 border-solid border-black bg-primary py-4 text-center text-white shadow-[-2px_2px_0px_0px_#000400]"
          >登入</a
        >
        <a
          href="/register"
          alt="button for register an account"
          class="mx-auto block text-center text-base"
          >註冊帳號</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  // Your code here
  // layout: "login",
  layout: false,
});
</script>
