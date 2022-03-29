<template>
  <q-page class="flex flex-center">
    <div class="text-center text-white form-wrapper q-pa-md">
      <h3>AI-PASS</h3>
      <q-form ref="refLoginForm" @submit="onSubmit">
        <q-input
          label-color="white"
          outlined
          v-model="email"
          label="Email"
          :rules="[(val) => !!val || 'Email is required']"
          lazy-rules
        />
        <q-input
          label-color="white"
          outlined
          v-model="password"
          label="Password"
          type="password"
          class="q-mt-md"
          :rules="[(val) => !!val || 'Password is required']"
          lazy-rules
        />
        <div
          class="row justify-end items-center text-right q-mt-md font-regular-2"
        >
          <q-btn
            dense
            flat
            no-caps
            color="primary"
            label="Forgot password?"
            class="big-font text-white"
            @click="forgotPassword"
          />
        </div>
        <div class="row justify-end q-mt-xl">
          <q-btn
            type="submit"
            unelevated
            no-caps
            label="Sign In"
            color="primary"
            class="themed-btn long font-bold-2 big-font"
          />
        </div>
      </q-form>
      <div
        class="row justify-end items-center text-right q-mt-xl"
      >
        <p class="big-font no-margin">Don’t have an account?</p>
        <q-btn
          dense
          flat
          no-caps
          color="primary"
          label="Request an Account"
          class="big-font"
          :to="{ name: 'Register' }"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar, QSpinnerOval } from "quasar";
import { api } from "../boot/axios";
export default {
  name: "Login",
  setup() {
    const $store = useStore();
    const $router = useRouter();
    const $q = useQuasar();

    /** Login form ref */
    const refLoginForm = ref();

    /** Tallying this email with auth.login.email in store */
    const email = computed({
      get: () => $store.getters.getLoginEmail,
      set(val) {
        $store.commit("SET_LOGIN_EMAIL", val);
      },
    });
    /** Tallying this password with auth.login.password in store */
    const password = computed({
      get: () => $store.getters.getLoginPassword,
      set(val) {
        $store.commit("SET_LOGIN_PASSWORD", val);
      },
    });

    function forgotPassword() {
      $q.dialog({
        title: "Forgot password",
        message: "Enter your email to get a temporary password",
        prompt: {
          model: "",
          type: "text", // optional
        },
        ok: {
          label: "Send temporary password",
          noCaps: true,
          flat: true,
        },
        cancel: false,
        persistent: false,
      }).onOk((data) => {
        sendEmail(data);
      });
    }

    function sendEmail(email) {
      $q.loading.show({
        spinner: QSpinnerOval,
        spinnerColor: "primary",
        spinnerSize: 140,
        message: "Sending you a temporary password..",
        messageColor: "white",
      });
      /** Calling 'Forgot Password' API */
      api
        .post("/api/auth/password/forgot", {
          email: email,
        })
        .then((response) => {
          $q.loading.hide();
          $q.dialog({
            title: "Temporary password sent",
            message:
              "Please check your email and sign in using the temporary password.",
            ok: {
              label: "Okay",
              noCaps: true,
              flat: true,
            },
            cancel: false,
            persistent: false,
          });
        })
        .catch((err) => {
          $q.loading.hide();
          let errMsg = null;
          if (err.response) {
            errMsg = err.response.data.error;
          }
          $q.notify({
            type: "negative",
            position: "top",
            message: `${errMsg || err}`,
          });
        });
    }

    function onSubmit() {
      let promise = refLoginForm.value.validate();

      console.log(promise)
      if (promise) {
        console.log("Proceed to login");$router.push({ name: "Dashboard" });
        /** Using store to submit login 
        $store
          .dispatch("LOGIN")
          .then((promise) => {
            $q.loading.hide();
            
          })
          .catch((err) => {
            let errMsg = null;
            if (err.response) {
              errMsg = err.response.data.error;
            }
            $q.loading.hide();
            $q.notify({
              type: "negative",
              position: "top",
              message: `${errMsg || err}`,
            });
          });
        */
      }
    }

    return {
      refLoginForm,
      email,
      password,
      onSubmit,
      forgotPassword,
    };
  },
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  width: 100%;
  max-width: 500px;
}
</style>