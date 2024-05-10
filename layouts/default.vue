<template>
  <Navbar />
  <main>
    <div class="h-screen bg-[url('~/assets/images/bg.svg')]">
      <div class="mx-auto max-w-[872px] lg:flex lg:space-x-7 lg:py-12">
        <!-- panel start -->
        <section
          class="mx-auto max-w-[872px] p-3 md:px-3 lg:w-2/3 lg:px-0"
        >
          <slot />
        </section>
        <!-- panel End -->
        <!-- sidebar start -->
        <Sidebar />
        <!-- sidebar end -->
      </div>
    </div>
  </main>
</template>
