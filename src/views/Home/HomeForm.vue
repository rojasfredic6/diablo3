<template lang="pug">
    .search-fomr.my-5
        .row
            .col-12.col-md-8.offset-md-2
                b-form(@submit.prevent="onSubmit")
                    b-form-group(
                        id="input-group-1",
                        label="BattleTag:",
                        label-for="input-text",
                        description="Format: YourProfile#1234"
                    )
                        b-form-input(
                            id="input-text",
                            v-model="form.battleTag"
                            type="text",
                            size="lg",
                            required,
                            placeholder="BattleTag"
                        )
                    b-form-group(
                        id="input-group-3",
                        label="Region:",
                        label-for="input-region"
                    )
                        b-form-select(
                            id="input-region",
                            v-model="form.region",
                            size="lg",
                            :options="regions",
                            required
                        )
                    .d-flex.justify-content-end.mt-5
                        b-button(
                            type="submit",
                            variant="primary",
                            size="lg"
                        ) Submit
</template>

<script>
import { regions } from '@/utils/regions'

export default {
    name: 'MainForm',
    data(){
        return{
            form:{
                battleTag: '',
                region: 'eu'
            }
        }
    },
    computed:{
        regions(){
            return regions.map(region => ({
                value: region,
                text: region.toUpperCase()
            }))
        }
    },
    methods: {
        onSubmit(){
            const { region, battleTag } = this.form;
            this.$router.push({
                name: 'Profile',
                params: {
                    region,
                    battleTag: battleTag.replace('#', '-')
                }
            })
        }
    }
}
</script>