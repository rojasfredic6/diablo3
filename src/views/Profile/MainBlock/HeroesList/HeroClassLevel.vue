<template lang="pug">
    .hero-name-level
        span {{ classToName(hero.class) }} 
        span . 
        span.text-monospace.font-weight-bold  {{ hero.level }}
</template>

<script>
import heroName from '@/mixins/heroName';
export default {
    name: 'HeroNameLevel',
    mixins: [ heroName ],
    props: {
        hero: {
            required: true,
            type: Object
        }
    }
}
</script>