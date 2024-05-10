<template>
  <!-- 貼文 start -->
  <div
    class="rounded border-2 border-black bg-white p-6 shadow-[0px_3px_0px_0px_#000400]"
  >
    <div class="flex">
      <a
        :href="`/${post.name}`"
        class="mr-4 h-12 w-12 rounded-full border-2 border-solid border-black bg-red-200 bg-cover bg-center"
      >
        <img
          :src="post.userPhoto"
          class="mx-auto max-h-full max-w-full"
          alt=""
        />
      </a>
      <div class="mb-4 flex-col justify-center">
        <a  :href="`/${post.name}`"
            class="block text-base font-bold">{{ post.name }}</a>
        <span class="block text-sm text-[#9B9893]">{{ post.date }}</span>
      </div>
    </div>
    <p class="mb-4 text-base">
      {{ post.content }}
    </p>
    <div v-if="post.image !== ''"
      class="border-soli container mx-auto max-h-[156px] w-full overflow-hidden rounded-lg border-2 border-black"
    >
      <img class="mx-auto w-full object-cover" :src="post.image" />
    </div>
  </div>
  <!-- 貼文 end -->
</template>

<script lang="ts" setup>
//get props from parent
const props = defineProps({
  post: {
    type: Object as PropType<{
      name: string;
      userPhoto: string;
      date: string;
      content: string;
      image: string;
    }>,
    required: true,
  },
});

console.log(props.post);
</script>
