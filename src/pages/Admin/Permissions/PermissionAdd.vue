<template>
    <div id="app">

        <!-- Permissions added success alert -->
        <v-alert v-if="showAlert" type="success">Korisnik uspješno dodan.</v-alert>

        <!-- Add permission form -->
        <div>
            <div class="flex justify-center">
                <div class="flex-col w-1/2">
                    <div class="form-heading">
                        Dodavanje nove dozvole
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <label class="form-label">Ime dozvole</label>
                            <input type="text" class="form-text-input" v-model.lazy="permission.name">
                        </div>
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <button v-on:click.prevent="post" class="form-submit-button form-submit-button:hover">Dodaj</button>
                        </div>

                        <div class="form-box">
                            <router-link to="/admin/permissions">
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
    import permissionRepository from '../../../repositories/permissionRepository';

    export default {
        data () {
            return {
                permission: {},
                showAlert: false,
            }
        },
        methods: {
            post: function() {
                let self = this;
                permissionRepository.create(this.permission)
                    .then(function() {
                        self.fireAlert();
                    })
            },
        },
    }
</script>
