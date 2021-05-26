<template lang="pug">
  .resource-wrapper
    .resource 
      .d-flex.justify-content-start.align-items-center
        .resource-icon.resource-life 
        .ml-3.text-uppercase.name-text
          span {{resources.resources.life.name}}
        .ml-3
          span.text-monospace {{ resources.resources.life.val | formatNumber }}
    hr 
    .resource 
      .d-flex.justify-content-start.align-items-center 
        .resource-icon(:class="classResourceName")
        .ml-3.text-uppercase.name-text(:class="'resource-name-' + resources.classSlug")
          span {{ displayResourceName }}
        .ml-3
          span.text-monospace {{resources.resources.primaryResource.val | formatNumber }}
          template(v-if="hasSecondaryResource")
            span.mx-0.text-muted /
            span {{ resources.resources.secondaryResource.val | formatNumber }}
</template>

<script>
import resources from '@/mixins/resources'
import { formatNumber } from '@/filters/Numeral'

export default {
  name: 'HeroResources',
  mixins: [resources],
  filters: { formatNumber },
  props: {
    resources: {
      required: true,
      type: Object
    }
  },
  computed: {
    classResourceName(){
      return `resource-${this.resourceClassName(this.resources.classSlug)}`
    },
    displayResourceName(){
      return this.resourceDisplayName(this.resources.classSlug)
    },
    hasSecondaryResource(){
      return this.resources.classSlug === 'demon-hunter'
    }
  }
}
</script>

<style lang="stylus">
  .resource
    .name-text
      color #efb45d

    .resource-name-demon-hunter
      width auto

  @media (min-width: 992px)
    .resource
      .resource-name-demon-hunter
        width 100px
</style>