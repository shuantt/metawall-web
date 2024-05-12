<template>
  <PageHeader :heading="'張貼貼文'" />
  <div
    class="rounded-lg border-2 border-solid border-black bg-white p-8 shadow-[-2px_2px_0px_0px_#000400]"
  >
    <span class="mb-1 block"> 貼文內容 </span>
    <textarea
      class="no-scrollbar mb-4 h-40 w-full resize-none overflow-scroll border-2 border-solid border-black p-4"
      placeholder="請輸入貼文內容"
    ></textarea>
    <label
      class="mb-4 inline-block rounded-lg border-2 border-black bg-black px-8 py-1 text-white"
      for="uploadImg"
    >
      上傳圖片
      <input id="uploadImg" type="file" class="hidden" />
    </label>
    <div
      class="mb-8 max-h-[156px] rounded-lg border-2 border-black overflow-hidden"
    >
      <img
        class="mx-auto w-full object-cover"
        src="https://images.unsplash.com/photo-1715276611597-048987ab7d97?q=80&w=2819&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
    <button
      alt="button for create a new post"
      disabled
      class="bg-gray-disabled mx-auto flex h-12 w-2/3 items-center justify-center self-center rounded-lg border-2 border-solid border-black py-4 text-center text-white"
    >
      送出貼文
    </button>
    <button
      alt="button for create a new post"
      disabled
      class="bg-secondary mx-auto flex h-12 w-2/3 items-center justify-center self-center rounded-lg border-2 border-solid border-black py-4 text-center text-white"
    >
      送出貼文
    </button>
  </div>
</template>

<style></style>
