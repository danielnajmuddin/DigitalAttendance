<template>
    <q-page class="q-pa-lg bg-white border-round">
        <div >
            <p class="row justify-center q-ma-md text-bold">Change Password</p>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="New Password" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Confirm Password" 
                dense
                />
            </div>
            <q-tabs>
                <q-route-tab>
                    <q-btn
                        class="btn-bottom"
                        label="Save" 
                        color="primary"/>
                </q-route-tab>
            </q-tabs>
        </div>
    </q-page>
</template>