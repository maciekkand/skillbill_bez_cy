<template src="./Filter.html"></template>

<script>
export default {
  data() {
    return {
      skill1: '',
      rank1: '',
      skill2: '',
      rank2: '',
      skill3: '',
      rank3: '',
      ranks: [5, 4, 3, 2, 1],
      skills1: ['Android', 'C', 'CPP', 'Go', 'JS', 'Java', 'ObjC', 'Ruby', 'Swift'],
      skills2: [],
      skills3: [],
      title: ['Junior', 'Mid', 'Senior', 'Consultant', 'Architect'],
      selectedSkills: {},
    }
  },

  methods: {
    onSkill1(skill) {
      this.selectedSkills.skill1 = skill
      const arr = this.skills1.filter(el => el !== skill)
      this.skills2 = arr
    },

    onRank1(rank) {
      this.selectedSkills.rank1 = rank
    },

    onSkill2(skill) {
      this.selectedSkills.skill2 = skill
      const arr = this.skills2.filter(el => el !== skill)
      this.skills3 = arr
    },

    onRank2(rank) {
      this.selectedSkills.rank2 = rank
    },

    onSkill3(skill) {
      this.selectedSkills.skill3 = skill
    },

    onRank3(rank) {
      this.selectedSkills.rank3 = rank
    },

    onSearch() {
      this.$store.dispatch('progressBar', true)
      this.$store.dispatch('readDevs', this.selectedSkills)
    },
    onClear() {
      this.selectedSkills = {}
      this.skill1 = null
      this.skill2 = null
      this.skill3 = null
      this.rank1 = null
      this.rank2 = null
      this.rank3 = null
    },
  },
}
</script>

<style scoped>
#filter {
  font-family: 'Roboto';
}

.filters {
  transform: scale(1, 1);
  transform-origin: left;
}

.filters-row {
  background-color: grey;
}

</style>
