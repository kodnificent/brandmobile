<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="postcss">
#app {
  background-color: #EDF0F0;
  color: #2F323A;
}

button, input, select {
  &:hover, &:focus, &:active {
    @apply outline-none shadow-outline !important;
  }

  &:focus, &:active {
    @apply shadow-outline;
  }
}

.btn {
  min-width: 150px;
  @apply shadow-md rounded text-center capitalize px-3 py-2 text-xs;
  &--primary {
    @apply bg-primary text-white;
  }
}

.form-control {
  border-width: 1px;
  @apply py-2 px-3 bg-transparent rounded-lg border-primary w-full block;
  &:focus {
    @apply outline-none;
  }
  &--bottom-border {
    @apply px-0 pt-0 rounded-none border-0 border-b-2;
  }
  &--styled-placeholder::placeholder {
    @apply italic capitalize;
  }
}

.form-control-select {
  border-width: 1px;
  @apply appearance-none py-2 px-2 border-primary rounded-lg block;
  &--bottom-borderless {
    @apply px-0 pt-0 border-0;
  }
}

.v--modal {
  margin-top: 32px !important;
  margin-bottom: 32px !important;
  @media (max-width: 767.9px) {
    @apply mx-auto;
    width: 90% !important;
  }
}

.delete-user-modal {
  @apply rounded-lg border-2 relative border-primary;
  @screen md {
    width: 437px !important;
  }
}

.form-label {
  @apply text-xs text-gray-600 capitalize inline-block;
}
</style>

<script>
export default {
  name: 'App',
  components: {
    //
  },
};
</script>
