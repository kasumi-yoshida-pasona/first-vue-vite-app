<script>
  import { Calendar, DatePicker } from 'v-calendar';

  export default {
    components: {
      Calendar,
      DatePicker,
    },
    data() {
      return {
        date: new Date(),
      };
    },
  };

  // var date = new Date()
  // var year = date.getFullYear()
  // console.log(year);
</script>

<template>
  <Calendar />
  <DatePicker v-model="date" />


</template>

<style lang="scss" scoped></style>