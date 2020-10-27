<template>
  <div class="flex font-semibold">
    <img src="/img/icons/user.svg" :alt="user.first_name" />

    <div class="ml-5" :class="{
      'text-gray-500': !user.has_activated || !user.is_active
      }">
      {{ user.first_name }}
    </div>

    <div class="ml-5 hidden md:block" :class="{
      'text-gray-500': !user.has_activated || !user.is_active
      }">
      {{ user.email }}
    </div>

    <div class="ml-5 hidden md:block">
      <select class="form-control-select form-control-select--bottom-borderless" :class="{
      'text-gray-500': !user.has_activated && user.is_active
      }">
        <option class="capitalize" selected>{{ user.role.name }}</option>
      </select>
    </div>
    <div class="flex-grow"></div>

    <div v-if="user.has_activated" class="ml-5 flex items-center justify-end">
      <button v-if="user.is_active">
        <span class="sr-only">block user</span>
        <img src="/img/icons/block.svg" alt="block" />
      </button>

      <button v-else>
        <span class="sr-only">unblock user</span>
        <img src="/img/icons/unblocked.svg" alt="unblock" />
      </button>

      <button @click="$modal.show('delete-user')" class="ml-4">
        <span class="sr-only">delete user</span>
        <img src="/img/icons/trash.svg" alt="trash" />
      </button>
    </div>

    <div class="ml-5" v-else>
      <button class="btn btn--primary" style="min-width: 50px;">
        Resend invitation
      </button>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.user-data {
  @apply flex;
}
</style>

<script>
export default {
  name: 'User',
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
};
</script>
