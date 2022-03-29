<template>
    <q-page class="q-pa-md">
        <div class="q-pa-md">
            <video 
                v-show="!imageCaptured"
                ref="video"
                class="full-width bg-white"
                autoplay
            />
            <canvas
                v-show="imageCaptured"
                ref="canvas"
                class="bg-white full-width"
            />
            <p class="flex flex-center text-bold">FRONT</p>
                <div class="flex flex-center fixed-bottom z-top bg-wh"
                     style="margin-bottom: 20px;">
                    <q-btn
                    v-if="hasCameraSupport"
                        @click="captureImage"
                        :disable="imageCaptured"
                        class="bg-white"
                        round
                        icon="eva-camera-outline"
                        size="20px" />
                    </div>

        </div>

    </q-page>
</template>

<script>
let faceapi
let img
let detections
let context

const detection_options = {
    withLandmarks: true,
    withDescriptors: false,
}
export default {
    name: 'FaceRegisteration',
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

            
        },
        captureImage() {
            let video = this.$refs.video
            let canvas = this.$refs.canvas
            canvas.width = video.getBoundingClientRect().width
            canvas.height = video.getBoundingClientRect().height
            context = canvas.getContext('2d')
            context.drawImage(video, 0, 0, canvas.width, canvas.height)
            img = new Image();
            img.src = canvas.toDataURL();
            faceapi = ml5.faceApi(this.detection_options, this.modelReady)
            this.imageCaptured = true
            this.disableCamera()
        },
         disableCamera() {
            this.$refs.video.srcObject.getVideoTracks().forEach(track => {
                track.stop()
            })
        },
        
        modelReady() {
            console.log('ready!')
            console.log(faceapi)
            faceapi.detectSingle(img, this.gotResults)

        },
         gotResults(err, result) {
            if (err) {
                console.log(err)
                return
            }
            detections = result;

            if (detections) {
                if (Object.keys(detections).length > 0) {
                    // console.log(detections)
                    this.drawBox(detections)
                }

            }
        },
        drawBox(detections){
            const alignedRect = detections.alignedRect;
            const {_x, _y, _width, _height} = alignedRect._box;

            context.rect(_x, _y, _width, _height);
            context.lineWidth = "2";
            context.strokeStyle = "cyan";    
            context.stroke();
        }
            
        },
    mounted() {
        this.initCamera()
    },
}
</script>