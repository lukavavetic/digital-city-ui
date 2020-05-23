<template>
    <div>
        <div class="flex space-x-3">
            <router-link to="/admin/users" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje korisnicima
                </button>
            </router-link>
            <router-link to="/admin/roles" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje ulogama
                </button>
            </router-link>
            <router-link to="/admin/permissions" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje dozvolama
                </button>
            </router-link>
            <router-link to="/admin/tenders" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje natječajima
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ManageMain'
    }
</script>

