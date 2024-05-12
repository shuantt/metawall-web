<template>
  <div
    class="query space-y-2 lg:flex lg:justify-between lg:space-x-2 lg:space-y-0"
  >
    <div
      class="jus flex w-full items-center justify-between border-2 border-solid border-black bg-white px-4 py-2 lg:w-1/3"
    >
      最新貼文
      <Icon name="mingcute:down-line" class="text-2lg" />
      <!-- <option
        class="text-base"
        v-for="item in searchTypes"
        :value="item"
        :selected="item"
      >
        {{ item }}
      </option> -->
    </div>
    <div class="flex lg:w-2/3">
      <input
        class="w-full border-2 border-r-[1px] border-solid border-black px-4 py-2"
        type="text"
        placeholder="搜尋貼文"
      />
      <button
        class="h-12 w-12 border-2 border-l-[1px] border-solid border-black bg-primary p-2 text-base font-bold text-white"
      >
        <Icon name="material-symbols:search" class="text-2xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
const searchTypes = ["最新貼文", "查詢用戶", "查詢貼文"];
</script>
