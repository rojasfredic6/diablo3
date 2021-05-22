<template lang="pug">
    .text-center 
        p.text-muted Powered by 
        ul.list-inline 
            li.list-inline-item.mx-2(v-for="(icon, idx) in icons", :key="idx")
                a(:href="icon.href", target="_blank", :title="icon.href")
                    font-awesome-icon.fa-lg(:icon="icon.classes", :style="{'color': icon.color}")
</template>

<script>
export default {
    name: 'PoweredByFoot',
    props: {
        icons: {
            required: true,
            type: Array
        }
    }
}
</script>