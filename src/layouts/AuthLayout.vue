<template>
    <q-layout 
      view="lHh Lpr lFf"
      class="auth-layout"
    >
      <div class="auth-2nd-layer">
      </div>
        <q-page-container>
      <router-view />
    </q-page-container>
    </q-layout>
</template>
<script>
export default {
    name: 'AuthLayout'
}
</script>
<style lang="scss" scoped>
.auth-layout {
  padding-top: 15px;
  background-image: url("~assets/aipass-bg.jpeg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.auth-2nd-layer {
  border: solid #000000;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #000000;
  mix-blend-mode: darken;
  opacity: 0.8;
}
</style>