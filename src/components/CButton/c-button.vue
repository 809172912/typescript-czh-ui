<template>
    <div class="c-button">
        {{text}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'CButton',
        data: {
            text: 'CButton'
        }
    });
</script>

<style scoped lang="scss">
    .c-button {
        color: red;
        font-size: 50px;
    }
</style>
