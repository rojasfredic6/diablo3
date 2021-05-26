<template lang="pug">
  .active-skills
    h4.my-5 Active
    .skills
      b-row 
        b-col(v-for="(skill, idx) in skills", :key="idx", cols="6", lg="12")
          active-skill(:skill="skill.skill", :rune="skill.rune", :slot-num="idx+1")
</template>

<script>
import ActiveSkill from './ActiveSkill'

export default {
  name: 'ActiveSkills',
  components: { ActiveSkill },
  props: {
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>