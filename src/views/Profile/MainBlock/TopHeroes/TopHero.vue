<template lang="pug">
    .hero-portrait-wrapper.mb-5.mb-sm-0.hover-cursor-pointer(@click="goToHero(hero.id)")
        .bg-secondary.d-flex.justify-content-center.p-3.p-sm-0
            div(:class="heroClass")
        .p-2.bg-dark 
            h5.text-truncate.m-0.text-center.title-name.font-diablo(:class="{'bg-danger': hero.hardcore}") {{ hero.name }}
                img(
                    v-if="hero.seasonal",
                    src="../../../../assets/img/leaf.png",
                    width="12px"
                )
            .d-flex.justify-content-between.border-top.border-secondary.pt-2.align-items-center.mt-2
                small.elite-kills
                    span.text-monospace {{ hero.kills.elites }}
                    |   Elite kills
                small.level-circle(:class="{'text-danger': hero.dead}") {{ hero.level }}
</template>

<script>
import goToHero from '@/mixins/goToHero'

export default {
    name: 'TopHero',
    mixins: [ goToHero ],
    props: {
        hero: {
            type: Object,
            required: true
        }
    },
    computed: {
     heroClass(){
         const gender = this.hero.gender === 0 ? 'male' : 'female'
         return `hero-${this.hero.classSlug} ${gender}`
     }   
    }
}
</script>

<style lang="stylus">
.hero-portrait-wrapper
  .title-name
    color white
    font-weight 900
    
  .level-circle
    width 26px
    height 26px
    padding 4px
    font-weight bold
    text-align center
    border-radius 13px
    background-color #15202b
    box-shadow 0 0 0 2px #6c757d
</style>