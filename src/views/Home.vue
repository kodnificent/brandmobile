<template>
  <div>
    <app-header />
    <app-main aria-live="polite">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 md:mt-12">
          <div class="flex items-center">
            <div class="mr-8">
              <button>
                <profile-pic-icon />
              </button>
            </div>

            <div class="username relative">
              {{ profile.first_name }} {{ profile.last_name }}

              <button class="edit-button" @click="$modal.show('profile-edit')">
                <img src="/img/icons/edit.svg" />
                <span class="sr-only">edit personal information</span>
              </button>
            </div>
          </div>

          <!-- Personal info -->
          <ul class="mt-16" aria-label="Personal information">
            <li class="flex">
              <img class="mr-3" src="/img/icons/mail.svg" alt="mail" />
              <span>{{ profile.email }}</span>
            </li>
            <li class="flex mt-10">
              <img class="mr-2" src="/img/icons/phone.svg" alt="phone" />
              <span>{{ profile.phone }}</span>
            </li>
            <li class="flex mt-10">
              <img class="mr-4" src="/img/icons/pin.svg" />
              <span>
                {{ profile.address }}
              </span>
            </li>
            <li class="flex mt-10" v-if="showPasswordForm === false">
              <img class="mr-4" src="/img/icons/lock.svg" />
              <button
                @click="showPasswordForm = true"
                class="underline italic text-primary">
                Change password?
              </button>
            </li>
          </ul>

          <form v-if="showPasswordForm" @submit.prevent class="password-form mt-10">
            <div class="flex">
              <label for="old_password" class="mr-4">
                <span class="sr-only">Old password</span>
                <img src="/img/icons/lock.svg" />
              </label>
              <input
                class="form-control form-control--bottom-border form-control--styled-placeholder"
                type="password"
                name="old_password"
                id="old_password"
                placeholder="Old password">
            </div>
            <div class="flex mt-10">
              <label for="new_password" class="mr-4">
                <span class="sr-only">New password</span>
                <img src="/img/icons/lock.svg" />
              </label>
              <input
                class="form-control form-control--bottom-border form-control--styled-placeholder"
                type="password"
                name="new_password"
                id="new_password"
                placeholder="New password">
            </div>
            <div class="flex mt-10">
              <label for="confirm_password" class="mr-4">
                <span class="sr-only">Confirm password</span>
                <img src="/img/icons/lock.svg" />
              </label>
              <input
                class="form-control form-control--bottom-border form-control--styled-placeholder"
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm password">
            </div>

            <div class="flex justify-end">
              <button
                @click="showPasswordForm = false"
                class="mt-4 btn btn--primary">
                Update password
              </button>
            </div>
          </form>
        </div>

        <!-- Users -->
        <div class="w-full md:w-2/3 mt-6 md:mt-0">
          <div v-if="!showInviteForm" class="flex justify-end">
            <button class="btn btn--primary flex items-center justify-center py-1">
              <span>resend invitation</span>
              <img class="ml-3" src="/img/icons/sent.svg" />
            </button>

            <button
              class="btn btn--primary ml-6 flex items-center py-1"
              @click="showInviteForm = true"
              >
              <span class="ml-auto">invite user</span>
              <img class="ml-auto" src="/img/icons/more.svg" />
            </button>
          </div>

          <div v-else class="flex justify-end">
            <button @click="showInviteForm = false">
              <img src="/img/icons/more-cancel.svg" alt="cancel" />
              <span class="sr-only">close invitation form</span>
            </button>
          </div>

          <div class="mt-3 rounded-md bg-white px-8 py-6 shadow-lg overflow-auto">
            <h1 class="text-primary text-lg font-medium">Users</h1>

            <form
              @submit.prevent class="w-full md:w-5/6 mx-auto flex flex-wrap mt-8"
              v-if="showInviteForm">
              <div class="mb-4 md:mb-0 w-2/5">
                <label for="email" class="sr-only">Email</label>
                <input
                  class="form-control form-control--bottom-border form-control--styled-placeholder"
                  name="email"
                  id="email"
                  placeholder="type email address"
                />
              </div>

              <div class="mb-4 md:mb-0 md:pl-8 w-1/3">
                <select class="form-control-select w-full">
                  <option class="capitalize">Admin</option>
                </select>
              </div>

              <div class="md:pl-6 w-auto">
                <button class="btn btn--primary" style="min-width: 120px;">Invite user</button>
              </div>
            </form>

            <ol class="mt-16 w-full">
              <li class="user-item" v-for="user in sub_users" :key="user.user_id">
                <user :user="user" />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </app-main>

    <modal
      name="profile-edit"
      :scrollable="true"
      :reset="true"
      :click-to-close="false"
      width="750px"
      height="auto">
      <edit-profile :profile="profile" />
    </modal>

    <modal
      name="delete-user"
      :scrollable="true"
      :reset="true"
      :click-to-close="false"
      :classes="['v--modal', 'delete-user-modal']"
      height="auto">
      <delete-user />
    </modal>
  </div>
</template>

<script>
import AppMain from '@/components/AppMain.vue';
import AppHeader from '@/components/AppHeader.vue';
import EditProfile from '@/components/EditProfile.vue';
import DeleteUser from '@/components/DeleteUser.vue';
import ProfilePicIcon from '@/components/ProfilePicIcon.vue';
import User from '@/components/User.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    AppMain,
    AppHeader,
    DeleteUser,
    EditProfile,
    ProfilePicIcon,
    User,
  },
  data: () => ({
    showInviteForm: false,
    showPasswordForm: false,
  }),
  computed: mapState({
    profile: (state) => state.profile,
    sub_users: (state) => state.subUser.sub_users,
  }),
  mounted() {
    this.$store.dispatch('fetchProfile');
  },
};
</script>

<style lang="postcss" scoped>
.username {
  font-size: 24px;
  color: #44099F;
  border-bottom: 2.5px solid #44099F;
  @apply py-1 font-semibold;
  @screen md {
    font-size: 28px;
  }
}

.edit-button {
  background: #848589;
  width: 26px;
  height: 26px;
  top: -35px;
  right: -25px;
  @apply rounded-full absolute flex items-center justify-center;
}

.password-form {
  @apply w-full;
  @screen md {
    width: 280px;
  }
}

.user-item {
  @apply pb-3 border-gray-400 border-b-2;
  &:not(:first-child) {
    @apply mt-8;
  }
}
</style>
