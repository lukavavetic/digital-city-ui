<template>
    <div>

        <!-- Permissions added success alert -->
        <v-alert :if="showAlert" type="success">
            Korisnik uspješno izmijenjen.
        </v-alert>

        <!-- Add permission form -->
        <div>
            <div class="flex justify-center">
                <div class="flex-col w-1/2">
                    <div class="form-heading">
                        Izmjena korisnika
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <label class="form-label">Ime</label>
                            <input type="text" class="form-text-input" :model="permissionUpdateData.name" :placeholder="permission.name">
                        </div>
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <button @click.prevent="post" class="form-submit-button form-submit-button:hover">Izmijeni</button>
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
    import permissionRepository from "../../../repositories/permissionRepository";

    export default {
        data () {
            return {
                permission: {},
                permissionUpdateData: {
                    identifier: this.$route.params.identifier
                },
                showAlert: false,
            }
        },
        methods: {
            post: function() {
                let self = this;
                permissionRepository.update(this.permissionUpdateData)
                    .then(function() {
                        self.successAlert();
                    });
            }
        },
        created () {
            permissionRepository.info(this.permissionUpdateData.identifier)
                .then((response) => {
                    this.permission = response;
                })
        }
    }
</script>