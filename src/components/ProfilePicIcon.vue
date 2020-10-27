<template>
  <div>
    <div class="image-icon" aria-hidden="true">
      <div class="image-icon__yellow-layer"></div>
      <div class="image-icon__blue-layer"></div>
      <div class="image-icon__white-layer">
        <img src="/img/icons/arrow-up.svg" aria-hidden="true" />
      </div>
    </div>
    <div class="mt-4 text-xxs font-medium capitalize">upload picture</div>
  </div>
</template>

<style lang="postcss" scoped>
.image-icon {
  height: 86px;
  width: 75px;
  background: #4A566E;
  @apply rounded-lg relative;
  &__blue-layer {
    width: 75px;
    height: 39px;
    background: #5064CC;
    @apply rounded-b-lg absolute bottom-0;
  }
  &__yellow-layer {
    width: 13px;
    height: 13px;
    background: #FFCC03;
    top: 21px;
    left: calc((100% - 13px)/2);
    @apply absolute mx-auto rounded-full;
  }
  &__white-layer {
    width: 35px;
    height: 35px;
    left: calc(100% - (35px * 0.6));
    @apply absolute bottom-0 rounded-full bg-white flex items-center justify-center;
  }
}
</style>
