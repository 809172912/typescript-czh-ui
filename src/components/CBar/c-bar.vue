<template>
    <div class="c-bar">
        {{text}}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'CBar',
        data() {
            return {
                text: 'CBar'
            };
        }
    });
</script>

<style scoped lang="scss">
    .c-bar {
        color: red;
        font-size: 50px;
    }
</style>
