<template>
    <div>

        <!-- User added success alert -->
        <v-alert v-if="showAlert" type="success">
            Korisnik uspješno dodan.
        </v-alert>

        <!-- Add permission form -->
        <div>
            <div class="flex justify-center">
                <div class="flex-col w-1/2">
                    <div class="form-heading">
                        Dodavanje novog korisnika
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <label class="form-label">Ime korisnika</label>
                            <input type="text" class="form-text-input" v-model.lazy="user.firstName">
                        </div>
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <button v-on:click.prevent="post" class="form-submit-button form-submit-button:hover">Dodaj</button>
                        </div>

                        <div class="form-box">
                            <router-link to="/admin/users">
                                <button class="form-submit-button form-submit-button:hover">Odustani</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import userRepository from "../../../repositories/userRepository";

    export default {
        data () {
            return {
                user: {},
                showAlert: false,
            }
        },
        methods: {
            post: function() {
                const self = this;
                userRepository.create(this.permission)
                    .then(function() {
                        self.fireAlert();
                    });
            },
            fireAlert() {
                this.showAlert = true;
                setTimeout(() => {
                    this.showAlert = false
                }, 3000);
            },
        }
    }
</script>
