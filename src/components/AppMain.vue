<template>
  <main class="main container mx-auto">
    <slot></slot>
  </main>
</template>

<style lang="postcss" scoped>
.main {
  min-height: 100vh;
  margin-top: 50px;
  @apply w-full px-4 py-10;
  @screen xl {
    margin-left: 200px;
    width: calc(100% - 200px);
    @apply px-16 py-24;
  }
}
</style>
