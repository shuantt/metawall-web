<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

// const token = ref('');
// onMounted(async () => {
//     const {req}=$fetch.context;
//     token.value = req.headers.authorization.split(' ')[1];
//     console.log(token.value);
// }),
const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <Navbar />
  <div>
    <div class="flex h-screen items-center justify-center bg-gray-200">
      <div class="text-center">
        <h1 class="text-4xl font-medium">404</h1>
        <p class="m-6 text-xl font-medium">
          Sorry, the page you're looking for can't be found.
        </p>
      </div>
    </div>
    <!-- <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Clear errors</button> -->
  </div>
</template>
