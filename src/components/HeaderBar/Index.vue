<template lang="pug">
    .header-bar 
        .navigation-bar 
            b-navbar(toggleable="lg", type="dar", variant="dark")
                b-navbar-brand(:to="{ name: 'Home'}")
                    img(src="@/assets/img/diablo-iii.svg", alt="D3", width="30")
                    span.font-diablo.ml-2 D3PF
</template>

<script>
export default {
    name: 'HeaderBar'
}
</script>