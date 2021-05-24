<template lang="pug">
    .time-played.mt-3
        hr.bg-white.mt-5
        h2.font-diablo.my-4 Time Played 
        .bg-dar.p-3 
            div(v-for="hero in timePlayed" :key="hero.classSlug")
                time-played-hero(:hero-time="hero")
</template>

<script>
import TimePlayedHero from './TimePlayedHero'

export default {
  name: 'TimePlayed',
  components: { TimePlayedHero },
  props: {
    timePlayed: {
      required: true,
      type: Array
    }
  }
}
</script>