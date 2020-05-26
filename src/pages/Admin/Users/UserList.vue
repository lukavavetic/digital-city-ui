<template>
    <div>
        <div>
            <div class="flex flex-row">
                <div class="w-1/2">
                    <h1 class="content-heading">Korisnici</h1>
                </div>
                <div class="w-1/2">
                    <router-link to="/admin/users/add" exact>
                        <button class="submit-request-button submit-request-button:hover">
                            Dodaj korisnika
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="mt-2">
                <h1 class="content-subheading">Ovo je pregled registriranih korisnika.</h1>
            </div>

            <div class="mt-10">
                <table class="table">
                    <thead class="table-head">
                    <tr>
                        <th class="th text-left">Ime i prezime</th>
                        <th colspan="1"></th>
                    </tr>
                    </thead>
                    <tbody class="table-body">
                    <tr class="tr tr:hover" v-for="user in users" v-bind:key="user.identifier">
                        <td class="td text-left">
                            <router-link :to="'/admin/permissions/edit/' + user.identifier">
                                {{ user.firstName }} {{ user.lastName }}
                            </router-link>
                        </td>
                        <td class="td">
                            <i class="far fa-eye fa-lg hover:text-blue-800 cursor-pointer"></i>
                        </td>
                        <td class="td text-left">
                            <button v-on:click.prevent="destroy(user.identifier)" class="form-submit-button form-submit-button:hover">x</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
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


