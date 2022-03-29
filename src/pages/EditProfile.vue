<template>
    <q-page class="q-pa-lg bg-white border-round">
        <div >
            <p class="row justify-center q-ma-md text-bold">Edit Profile</p>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Name" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Position" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Staff ID" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Department" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Email" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Phone Number" 
                dense
                />
            </div>
            <div class="row justify-center q-ma-md">
                <q-input 
                class="col col-sm-6"
                label="Nationality" 
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