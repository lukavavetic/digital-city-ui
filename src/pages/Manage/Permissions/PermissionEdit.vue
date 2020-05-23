<template>
    <div>

        <!-- Permissions added success alert -->
        <div v-if="showSuccessAlert" class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 rounded mt-1" role="alert">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
            <p>Dozvola uspješno izmijenjena.</p>
        </div>

        <!-- Add permission form -->
        <div>
            <div class="flex justify-center">
                <div class="flex-col w-1/2">
                    <div class="form-heading">
                        Izmjena dozvole
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <label class="form-label">Ime dozvole</label>
                            <input type="text" class="form-text-input" v-model.lazy="permissionUpdateData.name" :placeholder="permission.name">
                        </div>
                    </div>

                    <div class="flex">
                        <div class="form-box mr-3">
                            <button v-on:click.prevent="post" class="form-submit-button form-submit-button:hover">Izmijeni</button>
                        </div>

                        <div class="form-box">
                            <router-link to="/manage/permissions">
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
                showSuccessAlert: false,
            }
        },
        methods: {
            post: function() {
                let self = this;
                permissionRepository.update(this.permissionUpdateData)
                    .then(function() {
                        self.successAlert();
                    });
            },
            successAlert() {
                this.showSuccessAlert = true;
                setTimeout(() => {
                    this.showSuccessAlert = false
                }, 3000);
            },
        },
        created () {
            permissionRepository.info(this.permissionUpdateData.identifier)
                .then((response) => {
                    this.permission = response;
                })
        }
    }
</script>