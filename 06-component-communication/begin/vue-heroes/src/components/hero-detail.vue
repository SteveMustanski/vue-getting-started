<template>
  <div>
    Hello {{ hero.firstName }}!
  </div>
</template>

<script>
  export default {
    name: 'HeroDetail',
    props: {
      hero: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

