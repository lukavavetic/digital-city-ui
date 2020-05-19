<template>
    <div>
        <div>
            <div class="flex flex-row justify-content-between">
                <h1 class="content-heading">Dozvole</h1>
            </div>

            <permission-create-form></permission-create-form>

            <div class="mt-4">
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
                    <tr class="tr tr:hover" v-for="permission in permissions" v-bind:key="permission.id">
                        <td class="td text-left">{{ permission.name }}</td>
                        <td class="td">
                            <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import PermissionCreate from "./PermissionCreate";

    export default {
        data() {
            return {
                permissions: [],
                search: '',
                addFormActive: false,
                formActive: false
            }
        },
        name: 'PermissionList',
        components: {
            'permission-create-form': PermissionCreate
        },
        created () {
            axios.get('http://192.168.1.12:80/api/permission.list', {
            }).then(response => {
                this.permissions = response.data.data;
            })
        },
        computed: {
            filteredBlogs: function() {
                return this.permissions.filter((permission) => {
                    return permission.name.toLowerCase().startsWith(this.search.toLowerCase());
                })
            }
        }
    }
</script>

