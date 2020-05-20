<template>
    <div>
        <div class="flex space-x-4">
            <router-link to="/manage/users" exact>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">
                    Manage users
                </button>
            </router-link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">
                Manage roles
            </button>
            <router-link to="/manage/permissions" exact>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">
                    Manage permissions
                </button>
            </router-link>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">
                Manage tenders
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ManageMain'
    }
</script>

