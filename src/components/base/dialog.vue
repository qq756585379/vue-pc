<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content" v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {}
    },
    methods: {
      closeMyself () {
        this.$emit('on-close')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scope>

</style>
