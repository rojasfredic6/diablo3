<template lang="pug">
  .h-attributes
    h2.font-diablo Attributes 
    hr.bg-white 
    .attributes 
      .core 
        hero-attribute-list(:attributes="coreAttributes")
      hr 
      .secondary 
        hero-attribute-list(:attributes="secondaryAttributes")
    hr 
    .resources 
      hero-resources(:resources="resources")
</template>

<script>
import HeroAttributeList from './HeroAttributeList'
import HeroResources from './HeroResources'
const coreAttributes = ['strength', 'dexterity', 'vitality', 'intelligence']
const secondaryAttributes = ['damage', 'toughness', 'healing']
const resources = ['life', 'primaryResource', 'secondaryResource']

export default {
  name: 'HeroAttributes',
  components: { HeroResources, HeroAttributeList },
  props:{
    attributes:{
      type: Object,
      required: true
    }
  },
  computed:{
    coreAttributes(){
      return coreAttributes.map(item => ({name: item, val: this.attributes[item]}))
    },
    secondaryAttributes(){
      return secondaryAttributes.map(item => ({name: item, val: this.attributes[item]}))
    },
    resources(){
      const data = {
        classSlug: this.attributes.classSlug,
        resources:{}
      };

      resources.forEach(item =>{
        data.resources[item] = { name: item, val: this.attributes[item]}
      })

      return data
    }
  }
}
</script>