<template>
   <!-- <div>
        <div>
            <div class="flex flex-row">
                <div class="w-1/2">
                    <h1 class="content-heading">Dozvole</h1>
                </div>
                <div class="w-1/2">
                    <router-link to="/admin/permissions/add" exact>
                        <button class="submit-request-button submit-request-button:hover">
                            Dodaj dozvolu
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="mt-2">
                <h1 class="content-subheading">Ovo je pregled dostupnih dozvola.</h1>
            </div>

            <div class="mt-10">
                <table class="table">
                    <thead class="table-head">
                    <tr>
                        <th class="th text-left">Ime dozvole</th>
                        <th colspan="1"></th>
                    </tr>
                    </thead>
                    <tbody class="table-body">
                    <tr class="tr tr:hover" v-for="permission in permissions" v-bind:key="permission.identifier">
                        <td class="td text-left">
                            <router-link :to="'/admin/permissions/edit/' + permission.identifier">
                            {{ permission.name }}
                            </router-link>
                        </td>
                        <td class="td">
                            <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
                        </td>
                        <td class="td text-left">
                            <button v-on:click.prevent="destroy(permission.identifier)" class="form-submit-button form-submit-button:hover">x</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> -->

    <div>
        <div class="flex flex-row">
            <div class="w-1/2">
                <h1 class="content-heading">Dozvole</h1>
            </div>
            <div class="w-1/2">
                <button class="submit-request-button submit-request-button:hover">Dodaj dozvolu</button>
            </div>
        </div>

        <div class="mt-2">
            <h1 class="content-subheading">Ovo je pregled dostupnih dozvola.</h1>
        </div>

        <div class="mt-20">
            <table class="table">
                <thead class="table-head">
                <tr>
                    <th class="th text-left">Dozvola</th>
                    <th class="th" colspan="3"></th>
                </tr>
                </thead>
                <tbody class="table-body">
                <tr class="tr tr:hover" v-for="permission in permissions" v-bind:key="permission.identifier">
                    <td class="td text-left">{{ permission.name }}</td>
                    <td class="td">
                        <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
                    </td>
                    <td class="td">
                        <i class="fas fa-pen fa-lg hover:text-blue-800 cursor-pointer"></i>
                    </td>
                    <td class="td">
                        <i class="fas fa-trash fa-lg text-red-600 hover:text-red-700 cursor-pointer"></i>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import permissionRepository from '../../../repositories/permissionRepository';

    export default {
        data() {
            return {
                permissions: []
            }
        },
        name: 'PermissionList',
        created () {
            permissionRepository.list()
                .then((response) => {
                    this.permissions = response;
            })
        },
        updated() {
            permissionRepository.list()
                .then((response) => {
                    this.permissions = response;
                })
        },
        methods: {
            destroy: function($identifier) {
                permissionRepository.delete($identifier)
            }
        }
    }
</script>