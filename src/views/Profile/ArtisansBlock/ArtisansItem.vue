<template lang="pug">
    .artisan-item.d-flex.bg-dark.p-3.mb-2.rounded
        .icon.d-flex.justify-content-center.align-items-center.rounded-circle.mr-2
            span.display-4 {{ artisan.emoji }} 
        .content
            h5.font-weight-bold.text-capitalize {{ artisan.name }}
            p.m-0.font-weight-normal(v-if="artisan.normal.level") Level {{ artisan.normal.level }} (normal)
            p.mb-0.font-weight-normal.text-muted(v-if="artisan.normal.level") Level {{ artisan.hardcore.level }}
                span.text-danger (hardcore)
</template>

<script>
export default {
    name: 'ArtisanItem',
    props:{
        artisan: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="stylus" scoped>
.artisan-item
    .icon
        width 80px
        height 80px
        background-color #404850
</style>