<template>
  <q-page class="q-pa-lg bg-white border-round">
    <div class="page-header q-mb-lg">
      <p class="q-mb-none font-bold big-font">John Doe</p>
      <p>SOFTWARE ENGINEER</p>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <h5 class="q-mt-none q-mb-sm">History</h5>
        <q-list class="">
          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption lines="2"
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                adipiscit elit.</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
              <q-icon name="star" color="yellow" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                adipiscit elit.</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>Voted!</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                adipiscit elit.</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-badge color="teal" label="10k" />
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item class="q-px-none">
            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                adipiscit elit.</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>2 min ago</q-item-label>
              <div class="text-orange">
                <q-icon name="star" />
                <q-icon name="star" />
                <q-icon name="star" />
              </div>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-tabs style="top: 40px;">
                <q-route-tab to="/face-registeration">
                    <q-btn
                        class="btn-bottom"
                        label="Register My Face" 
                        color="primary"/>
                </q-route-tab>
            </q-tabs>

          <!-- <q-item class="q-px-none">
            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption
                >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                adipiscit elit.</q-item-label
              >
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item> -->
        </q-list>
      </div>
    </div>
    <!-- <div>
            <q-card class="q-pa-none my-card border-round relative-position" flat >
                <q-card-section>
                    <q-avatar
                    class="z-top avatar"
                    size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                </q-card-section>
                <div style="margin: 50px;">
                    <div class="text-bold">John Doe</div>
                    <p>SOFTWARE ENGINEER</p>
                </div>
            </q-card>
            <q-btn class="history-btn" elevated label="My History" />
            <q-scroll-area class="history-panel">
                <div v-for="n in 90" :key="n" class="q-py-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </div>
            </q-scroll-area>
            <q-btn class="btn-bottom" color="primary" text-color="white" label="Register My Face" />
        </div> -->
  </q-page>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Home",

  setup() {
    const route = useRoute();

    const pageName = computed({
      get: () => route.name,
    });

    return {
      pageName,
    };
  },
};
</script>
<style lang="scss">
.history-btn {
  background: #ddefe3;

  position: absolute;
  width: 170px;
  height: 50px;
  left: 45px;
  top: 170px;
  border-radius: 15px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.history-panel {
  position: absolute;
  width: 320px;
  height: 300px;
  left: 45px;
  top: 245px;
}

.q-page {
  padding-top: 80px;
}
</style>