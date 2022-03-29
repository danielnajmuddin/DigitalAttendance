<template>
<q-layout  view="lHh Lpr lFf" class="bg-secondary">

    <q-header class="bg-secondary text-black">
            <q-tabs>
            <q-route-tab to="/home">
                <q-btn
                    class="fixed-top-left"
                    style="padding: 20px; z-top;"
                    icon="eva-close-circle-outline"
                    flat
                    dense/>
            </q-route-tab>
        </q-tabs>
    </q-header>

    <q-page-container >
      <router-view />
    </q-page-container>
</q-layout>
</template>