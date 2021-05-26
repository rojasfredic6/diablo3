<template lang="pug">
  .skills-wrapper.mt-5 
    h2.font-diablo Skills 
    hr.bg-white
    b-nav(pills, small)
      b-nav-item(:active="!isPassiveSkillsActive",
        @click="changeComponent('ActiveSkills')") Active
      b-nav-item(:active="isPassiveSkillsActive",
        @click="changeComponent('PassiveSkills')") Passive
    keep-alive
      component(:is="activeComponent",:skills="componentProps")
</template>

<script>
// import ActiveSkills from './ActiveSkills'
// import PassiveSkills from './PassiveSkills'

export default {
  name: 'HeroSkills',
  data(){
    return {
      activeComponent: 'ActiveSkills'
    }
  },
  components: {
    ActiveSkills: () => import(/* webpackChunkName: "ActiveSkills"*/'./ActiveSkills'),
    PassiveSkills: () => import(/* webpackChunkName: "PassiveSkills"*/'./PassiveSkills')
  },
  props: {
    skills: {
      required: true,
      type: Object
    }
  },
  computed:{
    componentProps(){
      return this.activeComponent === 'ActiveSkills' ? this.skills.active : this.skills.passive
    },
    isPassiveSkillsActive(){
      return this.activeComponent === 'PassiveSkills'
    }
  },
  methods: {
    changeComponent(component){
      this.activeComponent = component
    }
  }
}
</script>