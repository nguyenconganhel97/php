<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Home HOME</div>
                    <v-btn
                        color="primary"
                        depressed
                    >
                        Normal
                    </v-btn>

                    <div class="card-body">
                        I'm an example home.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.1111");
    },
};
</script>
