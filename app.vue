<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Profile',
  meta: [
    {
      name: 'description',
      content: 'Profile page',
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Paytone+One&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=Paytone+One&display=swap",
    },
    {
      rel:"stylesheet",
      hre:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
      integrity:"sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==",
      crossorigin:"anonymous",
      referrerpolicy:"no-referrer"
    }
  ],
  // script:[
  //   {
  //     src: "https://kit.fontawesome.com/a076d05399.js",
  //     crossorigin: "anonymous",
  //   }
  // ]
  })
</script>
