<template>
  <!-- 貼文 start -->
  <div
    class="space-y-4 rounded border-2 border-black bg-white p-6 shadow-[0px_3px_0px_0px_#000400]"
  >
    <div class="flex">
      <a
        :href="`/${post.name}`"
        class="mr-4 h-12 w-12 space-x-4 rounded-full border-2 border-solid border-black bg-red-200 bg-cover bg-center"
      >
        <img
          :src="post.userPhoto"
          class="mx-auto max-h-full max-w-full"
          alt=""
        />
      </a>
      <div class="flex-col justify-center">
        <a :href="`/${post.name}`" class="block text-base font-bold">{{
          post.name
        }}</a>
        <span class="block text-sm text-[#9B9893]">{{ post.date }}</span>
      </div>
    </div>
    <p class="text-base">
      {{ post.content }}
    </p>

    <!-- 無貼文 -->
    <div
      v-if="post.image !== ''"
      class="mx-auto max-h-[156px] w-full overflow-hidden rounded-lg border-2 border-solid border-black"
    >
      <img class="mx-auto w-full object-cover" :src="post.image" />
    </div>

    <div class="">
      <div v-if="post.likes > 0" class="space-x-2">
        <Icon name="ph:thumbs-up-bold" class="text-2xl text-primary" />
        <span>{{ post.likes }}</span>
      </div>
      <div v-else class="space-x-2">
        <Icon name="ph:thumbs-up-bold" class="text-2xl text-gray" />
        <span>成為第一位按讚的朋友</span>
      </div>
    </div>


    <div class="flex w-full">
      <div class="mr-2">
        <img
          :src="post.userPhoto"
          class="mx-auto max-h-full max-w-full"
          alt=""
        />
      </div>
      <input
        class="w-2/3 border-2 border-solid border-black px-4 py-2"
        placeholder="留言..."
      />
      <button
        class="w-1/3 border-y-2 border-r-[2px] border-solid border-black bg-primary text-white"
      >
        留言
      </button>
    </div>
    <!-- 留言start -->
    <div
      v-for="comment in post.comments"
      class="flex rounded-lg bg-[#EFECE7] p-4"
    >
      <a
        :href="`/${comment.name}`"
        class="mr-4 h-12 w-12 space-x-4 rounded-full border-2 border-solid border-black bg-red-200 bg-cover bg-center"
      >
        <img
          :src="comment.userPhoto"
          class="mx-auto max-h-full max-w-full"
          alt=""
        />
      </a>
      <div class="flex-col justify-center">
        <a :href="`/${comment.name}`" class="block text-base font-bold">{{
          comment.name
        }}</a>
        <span class="mb-1 block text-sm text-[#9B9893]">{{
          comment.createAt
        }}</span>
        <p>{{ comment.content }}</p>
      </div>
    </div>
    <!-- 留言 end -->
  </div>
  <!-- 貼文 end -->
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

//get props from parent
const props = defineProps({
  post: {
    type: Object as PropType<{
      name: string;
      userPhoto: string;
      date: string;
      content: string;
      image: string;
      likes: Number;
    }>,
    required: true,
  },
});

console.log(props.post);
</script>
