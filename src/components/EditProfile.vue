<template>
  <div class="px-4 md:px-16 pt-16 pb-12 relative overflow-y-auto">
    <button @click="$modal.hide('profile-edit')" class="close-btn">
      <img src="/img/icons/close-3.svg" />
      <span class="sr-only">close</span>
    </button>
    <div class="flex">
      <h1 class="text-xxl font-semibold capitalize">Edit Personal Information</h1>
      <div class="flex-grow"></div>
      <profile-pic-icon />
    </div>

    <form @submit.prevent class="mt-6 flex flex-wrap">
      <div class="w-full md:w-1/2 md:pr-4">
        <label for="full_name" class="form-label mb-1">
          Full name
        </label>

        <input
          class="form-control"
          name="full_name"
          id="full_name"
          v-model="full_name" />
      </div>

      <div class="mt-4 w-full flex flex-wrap">
        <div class="w-full md:w-2/3">
          <label class="form-label">
            Address
          </label>
          <input
            class="form-control"
            name="address"
            id="address"
            v-model="address" />
        </div>

        <div class="w-full md:w-1/3 md:pl-2">
          <label class="form-label">city</label>
          <select
            class="form-control-select w-32"
            id="city"
            name="city">
          </select>
        </div>

        <div class="w-1/3">
          <label class="form-label">state</label>
          <select
            class="form-control-select w-40"
            id="state"
            name="state" >
          </select>
        </div>
      </div>

      <div class="mt-6 md:mt-8 w-full md:w-1/2 md:pr-4">
        <label for="email" class="form-label mb-1">
          Email
        </label>

        <input
          class="form-control"
          name="email"
          id="email"
          v-model="email" />
      </div>

      <div class="mt-4 md:mt-8 w-full md:w-1/2 md:pl-4">
        <label for="phone" class="form-label mb-1">
          Phone
        </label>

        <input
          class="form-control"
          name="phone"
          id="phone"
          v-model="phone" />
      </div>

      <div class="w-full mt-8 md:mt-32 flex items-center justify-center">
        <button class="btn btn--primary text-lg">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ProfilePicIcon from '@/components/ProfilePicIcon.vue';

export default {
  props: ['profile'],
  components: {
    ProfilePicIcon,
  },
  data() {
    return {
      first_name: this.profile.first_name,
      last_name: this.profile.last_name,
      email: this.profile.email,
      phone: this.profile.phone,
      address: this.profile.address,
    };
  },
  computed: {
    full_name() {
      return `${this.first_name} ${this.last_name}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.close-btn {
  top: 14px;
  right: 17px;
  @apply absolute;
}
</style>
