<template>
  <section class="container mx-auto hidden py-3 lg:block lg:w-1/3">
    <div
      class="space-y-6 border-2 border-solid border-black bg-white px-6 py-8"
    >
      <a
        href="/createPost"
        alt="button for create a new post"
        disabled
        class="flex h-12 w-full items-center justify-center self-center rounded-lg border-2 border-solid border-black bg-primary py-4 text-center text-white shadow-[-2px_2px_0px_0px_#000400]"
        >張貼動態
      </a>
      <a href="#" class="flex">
        <div
          class="mr-4 h-12 w-12 rounded-full border-2 border-solid border-black bg-red-200 bg-[url('/assets/images/user.png')] bg-cover bg-center"
        ></div>
        <span class="block self-center text-base font-bold">邊緣小杰</span>
      </a>
      <a href="#" class="flex align-middle">
        <div
          class="mr-4 h-12 w-12 rounded-full border-2 border-solid border-black bg-[#E2EDFA] bg-cover bg-center"
        ></div>
        <span class="block self-center text-base font-bold">追蹤名單</span>
      </a>
      <a href="#" class="flex align-middle">
        <div
          class="mr-4 h-12 w-12 rounded-full border-2 border-solid border-black bg-[#E2EDFA] bg-cover bg-center"
        ></div>
        <span class="block self-center text-base font-bold">按讚貼文</span>
      </a>
    </div>
  </section>
</template>
