<template>
  <PageHeader :heading="'張貼貼文'" />
  <div class="rounded-lg border-2 border-solid border-black bg-white p-8">
    <span class="mb-1 block"> 貼文內容 </span>
    <textarea
      class="mb-4 w-full resize-none border-2 border-solid border-black p-4"
      placeholder="請輸入貼文內容"
    ></textarea>
    <label
      class="mb-4 inline-block rounded-lg border-2 border-black bg-black px-8 py-1 text-white"
      for="uploadImg"
    >
      上傳圖片
      <input id="uploadImg" type="file" class="hidden" />
    </label>
    <div class="rounded-lg border-2 border-black p-4">
      <img />
    </div>
  </div>

</template>

<style></style>
