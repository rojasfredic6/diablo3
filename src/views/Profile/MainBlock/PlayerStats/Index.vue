<template lang="pug">
    .multistats.pl-lg-4
        hr.bg-white.mt-5.d-lg-none 
        h2.font-diablo.my-4 Stats 
        .stats.d-flex.flex-column.bg-dark.p-3
            single-stat.mb-3(
                ico-name="skull",
                ico-color="#9E9E9E",
                :info="{value: stats.kills.monster, text: 'Lifetime Kills'}"
                )
            single-stat.mb-3(
                ico-name="crown",
                ico-color="#ffc107",
                :info="{value: stats.kills.elites, text: 'Elite Kills'}"
            )
            single-stat(
                ico-name="dungeon",
                ico-color="#795548",
                :info="{value: stats.paragonLevel, text: 'Paragon Level'}"
            )

            time-played(:timePlayed="timePlayed")
</template>

<script>
import heroName from '@/mixins/heroName'
import SingleStat from './SinglesStat'
import TimePlayed from './TimePlayed'
import { HeroData } from '@/utils/typeValidation'

export default {
    name: 'PlayerStats',
    mixins: [ heroName],
    components: {
        TimePlayed,
        SingleStat
    },
    props: {
        stats: {
            required: true,
            type: Object
        }
    },
    computed: {
        timePlayed(){
            return Object.keys(this.stats.timePlayed)
                .sort()
                .map(hero => {
                    return new HeroData(
                        this.classToName(hero),
                        this.stats.timePlayed[hero],
                        hero
                    )
                })
        }
    }
}
</script>