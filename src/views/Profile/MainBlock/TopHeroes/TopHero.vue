<template lang="pug">
    div 
        h1 Top Hero 
</template>

<script>
export default {
    name: 'TopHero',
    props: {
        hero: {
            type: Object,
            required: true
        }
    }
}
</script>