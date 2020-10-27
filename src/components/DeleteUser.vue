<template>
  <div class="delete-user">
    <button @click="$modal.hide('delete-user')" class="close-btn">
      <img src="/img/icons/close-3.svg" />
      <span class="sr-only">close</span>
    </button>
    <div>
      <img src="/img/icons/signs.svg" aria-hidden="true" />
    </div>

    <p class="mt-6 text-center text-lg">
      You're about to delete this User.<br>
      Are you sure?
    </p>
    <div class="flex w-full mt-10">
      <button class="action-btn">
        Yes
      </button>
      <div class="flex-grow"></div>
      <button @click="$modal.hide('delete-user')" class="action-btn">
        No
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.delete-user {
  @apply flex flex-col items-center py-10 px-8 mx-auto w-full;
  @screen md {
    @apply w-9/12;
  }
}

.close-btn {
  top: 14px;
  right: 17px;
  @apply absolute;
}

.action-btn {
  border-width: 1px;
  @apply shadow-md border-primary text-lg font-semibold capitalize rounded;
  @apply py-2 px-10;
}
</style>
