<template>
  <div
    class="query space-y-2 lg:flex lg:justify-between lg:space-x-2 lg:space-y-0"
  >
    <select
      class="w-full appearance-none border-2 border-solid border-black px-4 py-3 lg:w-1/3"
    >
      <option
        class="text-base"
        v-for="item in searchTypes"
        :value="item"
        :selected="item"
      >
        {{ item }}
      </option>
    </select>
    <div class="flex lg:w-2/3">
      <input
        class="w-full border-r-[1px] border-2 border-solid border-black px-4 py-3"
        type="text"
        placeholder="搜尋貼文"
      />
      <button
        class="block h-14 w-14 border-2 border-solid border-l-[1px] border-black bg-primary p-2 text-base font-bold text-white"
      >
        <Icon name="material-symbols:search"  class=" text-2xl" />
      </button>
    </div>
  </div>
</template>

<script setup>
  const searchTypes = ["最新貼文", "查詢用戶", "查詢貼文"];
</script>
