<template lang="pug">
  b-row.hero-detail-header.my-5
    b-col(cols="12")
      .d-flex.justify-content-center.mb-3
        .hero-detail-avatar(:class="heroClass")
      .text-center 
        h1.font-diablo.text-truncate.text-bone {{ detail.name }}
        .text-monospace
          small 
            span {{ detail.level }}
            span.text-info(v-if="detail.paragonLevel")
              span.text-white .
            | ({{ detail.paragonLevel }})
            span . {{ classToName(detail.classSlug)}}
            span.text-succes(v-if="detail.seasonal")
            span.text-danger(v-if="detail.hardcore")
          div 
            small.text-muted Season created
            b-badge {{ detail.seasonCreated }}
        hr
</template>

<script>
import heroName from '@/mixins/heroName'

export default {
  name: 'HeroDetailHeader',
  mixins: [ heroName ],
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  computed: {
    heroClass(){
      const gender = this.detail.gender === 0 ? 'male' : 'female'
      return `hero-${this.detail.classSlug} ${gender}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .hero-detail-avatar
    width 138px
    height 105px
    background-size 280px

  .text-bone
    color #e8dcc2
</style>