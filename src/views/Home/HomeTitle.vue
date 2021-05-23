<template lang="pug">
    .home-title.text-center
        h1.my-5.font-diablo Diablo 3 Profile Finder
        p.lead.text-muted Enter your 
            em
                a(href="https://eu.battle.net/support/es/article/75767", target="_blank", title="Form: YourProfile#") battle-tag
            |   and select your region to see your profile  
        hr.mt-5          
</template>

<script>
export default {
    name: "HomeTitle"
}
</script>