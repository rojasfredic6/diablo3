<template lang="pug">
    .d-flex.flex-column(:title="actTitle")
        .boss-img.pt-2
            .act(:class="actClass")
        p.d-block.text-center.m-0.lead.font-weight-bold {{ fullActName }}
</template>

<script>
const acts = {
  act1: "I",
  act2: "II",
  act3: "III",
  act4: "IV",
  act5: "V"
};

export default {
    name: 'ProgressItem',
    props: {
        act: {
            require: true,
            type: Object,
            validator: (obj) => {
                return Object.keys(obj).length === 2
            }
        }
    },
    computed:{
        fullActName(){
            return `Act ${acts[this.act.actNum]}`
        },
        actClass(){
            const status = this.act.value ? 'done' : 'pending';
            return `${this.act.actNum} ${status}`
        },
        actTitle(){
            return this.act.value ? 'Act completed 💃' : 'Act uncompleted 🙈'
        }
    }
};
</script>
