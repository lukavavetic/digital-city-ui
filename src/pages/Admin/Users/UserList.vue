<template>
    <div>
        <div class="flex flex-row">
            <div class="w-1/2">
                <h1 class="content-heading">Korisnici</h1>
            </div>
            <div class="w-1/2">
                <router-link to="/admin/permissions/add" exact>
                    <button class="submit-request-button submit-request-button:hover">
                        Dodaj korisnika
                    </button>
                </router-link>
            </div>
        </div>

        <div class="mt-2">
            <h1 class="content-subheading">Ovo je pregled registriranih korisnika.</h1>
        </div>

        <div class="mt-20">
            <table class="table">
                <thead class="table-head">
                <tr>
                    <th class="th text-left">Ime i prezime</th>
                    <th class="th" colspan="3"></th>
                </tr>
                </thead>
                <tbody class="table-body">
                <tr class="tr tr:hover" v-for="user in users" v-bind:key="user.identifier">
                    <td class="td text-left">{{ user.firstName }} {{ user.lastName }}</td>
                    <td class="td">
                        <router-link :to="'/admin/user/' + user.identifier">
                            <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
                        </router-link>
                    </td>
                    <td class="td">
                        <router-link :to="'/admin/users/edit/' + user.identifier">
                            <i class="fas fa-pen fa-lg hover:text-blue-800 cursor-pointer" ></i>
                        </router-link>
                    </td>
                    <td class="td" @click="destroy(user.identifier)">
                        <i class="fas fa-trash fa-lg text-red-600 hover:text-red-700 cursor-pointer"></i>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import userRepository from '../../../repositories/userRepository';

    export default {
        data() {
            return {
                users: []
            }
        },
        created () {
            userRepository.list()
                .then((response) => {
                    this.users = response;
                })
        },
        updated() {
            userRepository.list()
                .then((response) => {
                    this.users = response;
                })
        },
        methods: {
            destroy: function($identifier) {
                userRepository.delete($identifier)
            }
        }
    }
</script>


