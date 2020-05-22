<template>
    <div>
        <div class="flex space-x-3">
            <router-link to="/manage/users" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje korisnicima
                </button>
            </router-link>
            <router-link to="/manage/roles" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje ulogama
                </button>
            </router-link>
            <router-link to="/manage/permissions" exact>
                <button class="submit-request-button submit-request-button:hover">
                    Upravljanje dozvolama
                </button>
            </router-link>
            <router-link to="/manage/tenders" exact>
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

