<template lang="pug">
    .heroes-list.border-top.border-secondary.mt-5.pt-5 
        b-table(dark, :items="heroes", :fields="fields",
        hover,
        small,
        striped,
        stacked="sm"
        )
            template(v-slot:cell(name)="data")
                hero-ico(:hero="data.item")
            template(v-slot:cell(class)="data")
                hero-class-level(:hero="{class: data.item.class, level: data.item.level}")
            template(v-slot:cell(kills)="data")
                span {{ data.item.kills.elites | formatNumber }}
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from  '@/filters/Numeral'

export default {
    name: 'HeroesList',
    filters:{
        formatNumber
    },
    props: {
        heroes: {
            required: true,
            type: Array
        }
    },
    components:{
        HeroIco,
        HeroClassLevel
    },
    data() {
        return {
            fields: [
                {
                    key: 'name',
                    label: 'Name'
                },
                {
                    key: 'class',
                    label: 'Class',
                    sortable: true
                },
                {
                    key: 'kills',
                    label: 'Elite Kills',
                    sortable: true
                }
            ]
        }
    },
}
</script>