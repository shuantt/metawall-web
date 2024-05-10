<template>
  <!-- <div class="">
    <div
      class="relative z-10 w-full border-2 border-solid border-black bg-white py-4 text-center"
    >
      <h2 class="text-xl font-bold">{{ heading }}</h2>
    </div>
    <div
      class="relative bottom-12 right-2 h-14 w-full border-2 border-solid border-black bg-white py-4 text-center"
    ></div>
  </div> -->
  <div class="relative mb-4 text-[20px] font-bold">
    <div class="border-2 border-black bg-white py-[18px] text-center">
      張貼動態
    </div>
    <div
      class="absolute inset-0 top-0 -translate-x-1 translate-y-1 transform border-2 border-black bg-white py-[18px] text-center"
    >
      張貼動態
    </div>
    <div
      class="absolute inset-0 border-2 border-black bg-white py-[18px] text-center"
    >
      張貼動態
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
};
</script>
