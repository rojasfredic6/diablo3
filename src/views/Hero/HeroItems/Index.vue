<template lang="pug">
    section.hero-items.mb-5
        h2.font-diablo Items
        hr.bg-white
        b-row
            b-col(cols="4", offset="4")
                item-detail(:item="itemsData.head")
        hr
        b-row
            b-col
                item-detail(:item="itemsData.shoulders")
            b-col
                item-detail(:item="itemsData.torso")
            b-col
                item-detail(:item="itemsData.neck")
        hr
        b-row
            b-col
                item-detail(:item="itemsData.hands")
            b-col
                item-detail(:item="itemsData.waist")
            b-col
                item-detail(:item="itemsData.bracers")
        b-row
            b-col
                item-detail(:item="itemsData.leftFinger")
            b-col
                item-detail(:item="itemsData.legs")
            b-col
                item-detail(:item="itemsData.rightFinger")
        b-row
            b-col
                item-detail(:item="itemsData.mainHand")
            b-col
                item-detail(:item="itemsData.feet")
            b-col
                item-detail(:item="itemsData.offHand")
</template>

<script>
import ItemDetail from './ItemDetail'

const defaultItems = {
  head: {
    slotName: 'head'
  },
  shoulders: {
    slotName: 'Shoulders'
  },
  torso: {
    slotName: 'Torso'
  },
  neck: {
    slotName: 'Neck'
  },
  hands: {
    slotName: 'Hands'
  },
  waist: {
    slotName: 'Waist'
  },
  bracers: {
    slotName: 'Bracers'
  },
  leftFinger: {
    slotName: 'Left Finger'
  },
  legs: {
    slotName: 'Legs'
  },
  rightFinger: {
    slotName: 'Right Finger'
  },
  mainHand: {
    slotName: 'Main Hand'
  },
  feet: {
    slotName: 'Feet'
  },
  offHand: {
    slotName: 'Off Hand'
  }
}

export default {
    name: 'HeroItems',
    components:{
        ItemDetail
    },
    props:{
        items:{
            type:Object,
            required: true
        }
    },
    computed:{
        itemsData(){
            return {
                ...defaultItems,
                ...this.items
            }
        }
    }
}
</script>