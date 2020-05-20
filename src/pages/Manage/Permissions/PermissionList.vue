<template>
    <div>
        <div>
            <div class="flex flex-row">
                <div class="w-1/2">
                    <h1 class="content-heading">Dozvole</h1>
                </div>
                <div class="w-1/2">
                    <router-link to="/manage/permissions/add" exact>
                        <button class="submit-request-button submit-request-button:hover">
                            Predaj zahtjev
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
    export default {
        data() {
            return {
                permissions: [],
            }
        },
        name: 'PermissionList',
        created () {
            this.$http
                .get('permission.list')
                .then(response => {
                this.permissions = response.data.data;
            })
        }
    }
</script>

