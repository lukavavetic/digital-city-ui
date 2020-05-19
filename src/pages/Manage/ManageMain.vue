<template>
    <div>
        <div class="flex space-x-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">Manage users</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">Manage roles</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1"><router-link to="/manage/permissions" exact>Manage permissions</router-link></button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1">Manage tenders</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        name: 'ManageMain',
        created() {
        },
    }
</script>

