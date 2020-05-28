<template>
    <v-app>
        <div>
            <Header></Header>

            <div class="flex flex-row">
                <Sidebar></Sidebar>

                <div class="page-content">
                    <router-view :key="$route.path"></router-view>
                </div>
            </div>
        </div>
    </v-app>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: {
    Header,
    Sidebar
  },
})
export default class App extends Vue {}
</script>
