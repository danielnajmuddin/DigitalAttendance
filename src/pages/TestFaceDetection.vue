<template>
    <q-page class="q-pa-md">
        <div>
            <video 
                ref="video"
                class="full-width bg-white"
                autoplay
            />
            <canvas
                ref="canvas"
                class="full-width bg-white"
                autoplay
            />
        </div>
    </q-page>
</template>

<script>
let canvas
let context
export default {
    name: 'TestFaceDetection',
    data() {
        return {
            imageCaptured: false,
            hasCameraSupport: true
        }
    },
    methods: {
        initCamera() {
            navigator.mediaDevices.getUserMedia({
                video: true
            }).then(stream => {
                this.$refs.video.srcObject = stream
            }).catch(error => {
                this.hasCameraSupport = false
            })
            let video = this.$refs.video
            let canvas = this.$refs.canvas
            canvas.width = video.getBoundingClientRect().width
            canvas.height = video.getBoundingClientRect().height
            let context = canvas.getContext('2d')
            context.drawImage(video, 0, 0, canvas.width, canvas.height)
            console.log(context)
            
        },
    },
    mounted() {
        this.initCamera()
    },
}
</script>