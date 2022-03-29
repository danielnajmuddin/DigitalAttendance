<template>
  <q-layout view="lHh Lpr lFf" class="bg-secondary">
    <q-header class="bg-secondary">
      <q-toolbar class="constrain">
        <q-tabs class="text-grey-10">
          <q-route-tab to="/">
            <q-btn
              class="text-bold fixed-top-right q-pt-md q-pr-md"
              icon-right="eva-log-out"
              label="Log Out"
              size="12px"
              dense
              flat
            />
          </q-route-tab>
        </q-tabs>
      </q-toolbar>
      <Avatar v-if="pageName == 'Home' || pageName == 'Profile' || pageName == 'EditProfile'"/>
    </q-header>

    <div class="flex flex-center fixed-bottom z-top qr-button">
      <q-btn
        round
        label="QR"
        color="grey-10"
        size="20px" />
    </div>

    <q-footer class="bg-secondary">
      <q-tabs
        class="text-grey-10"
        active-color="white"
        indicator-color="transparent"
      >
        <q-route-tab to="/home">
          <q-icon name="eva-home" size="40px" />
        </q-route-tab>

        <q-route-tab to="/profile">
          <q-icon name="eva-person" size="40px" />
        </q-route-tab>
      </q-tabs>
    </q-footer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import Avatar from "../components/Avatar.vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name:"MainLayout",
  components: {Avatar},
  setup() {
    const route = useRoute();

    const pageName = computed({
      get: () => route.name,
    });

    return {
      pageName,
    };
  }
}
</script>
<style lang="scss" scoped>
.qr-button {
  left: 50%;
  right: 50%;
}
.q-tabs__content{
  overflow:auto !important;
}
.qr-btn {
  position: absolute;
  z-index: 1000;
  
}
.themed-tab {
  position:absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
</style>