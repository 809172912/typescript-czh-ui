<template>
    <div class="home">
        <div>
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div>
            <c-button></c-button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import CButton from '@/components/CButton/c-button.vue';

    export default Vue.extend({
        name: 'home',
        components: {
            CButton
        },
    });
</script>
