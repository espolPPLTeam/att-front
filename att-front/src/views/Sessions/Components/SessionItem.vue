<template>
  <div
    class="min-h-4 bg-white border-b border-grey-lighter relative"
    :class="{'cursor-pointer hover:shadow-inner': this.state !== 'terminated'}"
  >
    <div class="min-h-4 flex justify-start">
      <div
        class="my-auto ml-4 text-lg capitalize"
        :class="{'text-grey-dark': this.state === 'terminated', 'text-blue': this.state === 'onSession'}"
      >{{this.message}}</div>
    </div>
    <div class="flex justify-end text-xs mr-2 text-grey-dark">{{this.date}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onSessionStyle: "text-blue"
    };
  },
  props: {
    type: String,
    message: String,
    state: String,
    date: String
  }
};
</script>

// :class="{ 'w-1/2 ': mobile, 'w-1/3': !mobile }