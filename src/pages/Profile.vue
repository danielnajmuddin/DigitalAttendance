<template>
  <q-page class="q-pa-lg bg-white border-round">
    <div>
      <!-- <q-card class="my-card border-round relative-position" flat >
                <q-card-section>
                    <q-avatar
                    class="z-top avatar"
                    size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                </q-card-section>
            </q-card> -->
      <div style="">
        <div class="wrap q-py-lg">
          <p class="q-mb-sm text-bold">John Doe</p>
          <p class="q-mb-sm">SOFTWARE ENGINEER</p>
          <p class="q-mb-sm">SDSASB1012XXX</p>
        </div>

        <div class="text-bold gap">DEPARTMENT</div>
        <div>IT, EDUCATION & TRAINING</div>
        <div class="text-bold gap">EMAIL</div>
        <div>johndoe@email.com</div>
        <div class="text-bold gap">MOBILE</div>
        <div>012-34567890</div>
        <div class="text-bold gap">DATE OF BIRTH</div>
        <div>1 JAN 1980</div>
        <div class="text-bold gap">NATIONALITY</div>
        <div>MALAYSIA</div>
      </div>
      <div class="flex justify-md-center q-mt-lg">
        <q-tabs>
            <q-route-tab to="/edit-profile">
                <q-btn
                    class="text-bold"
                    style=""
                    icon="eva-person-outline"
                    label="Edit My Profile"
                    dense
                    flat
                    no-caps
                />
            </q-route-tab>
            <q-route-tab to="/change-password">
                 <q-btn
                    class="text-bold q-ml-md"
                    style=""
                    icon="eva-lock-outline"
                    label="Change My Password"
                    dense
                    flat
                    no-caps
                    />
            </q-route-tab>
        </q-tabs>
        
       
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.gap {
  margin-top: 20px;
}
</style>
