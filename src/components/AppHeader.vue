<template>
  <header>
    <div class="topbar">
      <div class="flex items-center">
        <a href="#blank" class="mr-2 relative">
          <img src="/img/icons/notifications.svg" />
          <div class="notification-badge">99+</div>
        </a>
        <span style="color: #848589; font-size: 0.65rem;" class="font-semibold hidden md:block">
          Updated 29 mins ago
        </span>
      </div>

      <div class="flex-grow"></div>

      <div>
        <a class="flex items-center" href="#blank">
          <img class="md:mr-2" src="/img/icons/user-small.svg" />
          <span class="ml-2 sr-only md:not-sr-only text-sm font-medium">Hi, Moshood</span>
        </a>
      </div>

      <div class="ml-4 md:ml-10">
        <a class="flex items-center" href="#blank">
          <img class="md:mr-2" src="/img/icons/question-2.svg" />
          <span class="sr-only md:not-sr-only text-sm font-medium">Help</span>
        </a>
      </div>

      <button @click="toggleSidenav" class="md:hidden">
        <span class="sr-only">toggle sidenav</span>
      </button>
    </div>

    <nav class="sidebar" :data-opened="sidenavIsOpen">
      <div class="py-4">
        <div class="logo-container">
          logo
        </div>

        <ul class="nav">
          <li class="nav__item">
            <a class="nav__link active" href="#dashboard">
              <img class="nav__icon" src="/img/icons/window.svg" />
              <span class="nav__text">
                dashboard
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#clients">
              <img class="nav__icon" src="/img/icons/company.svg" />
              <span class="nav__text">
                clients
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#campaigns">
              <img class="nav__icon" src="/img/icons/campaign.svg" />
              <span class="nav__text">
                campaigns
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#audience">
              <img class="nav__icon" src="/img/icons/target.svg" />
              <span class="nav__text">
                audience
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#games">
              <img class="nav__icon" src="/img/icons/dice.svg" />
              <span class="nav__text">
                games
              </span>
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#redemption">
              <img class="nav__icon" src="/img/icons/coupon.svg" />
              <span class="nav__text">
                redemption
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
.topbar {
  height: 50px;
  background: #EDF0F0;
  @apply w-full px-4 py-3 flex items-center shadow fixed top-0 z-30;
  @screen xl {
    @apply px-16;
    left: 200px;
    width: calc(100% - 200px);
  }
}

.notification-badge {
  @apply bg-red-600 text-gray-100 rounded-full h-5 w-5;
  @apply absolute flex items-center justify-center;
  font-size: 0.5rem;
  top: -6px;
  right: -6px;
}

.logo-container {
  height: 125px;
}

.sidebar {
  @apply z-30 fixed top-0 left-0 h-full text-white transition-all duration-300;
  background-color: #2F323A;
  width: 200px;
  transform: translateX(-200px);
  &[data-opened] {
    transform: translateX(0);
  }

  @screen xl {
    transform: translateX(0);
  }
}

.nav {
  &__item {
    border-bottom: 1px solid #707070;
    @apply w-full;
  }

  &__link {
    height: 60px;
    @apply flex items-center px-6;
    &.active {
      @apply bg-white font-semibold;
      color: #44099F;
    }
  }

  &__link.active &__text {
    color: #44099F;
  }

  &__icon {
    @apply mr-5;
  }

  &__text {
    @apply text-gray-300 text-xs capitalize;
  }
}
</style>

<script>
export default {
  data: () => ({
    sidenavIsOpen: false,
  }),

  methods: {
    toggleSidenav() {
      if (this.sidenavIsOpen === false) {
        this.sidenavIsOpen = true;
      } else if (this.sidenavIsOpen === true) {
        this.sidenavIsOpen = false;
      }
    },
  },
};
</script>
