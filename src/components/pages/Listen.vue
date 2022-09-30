<script>
  import '@fullcalendar/core/vdom'; // solves problem with Vite
  import FullCalendar from '@fullcalendar/vue3';
  import dayGridPlugin from '@fullcalendar/daygrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import { useRouter } from 'vue-router';

  export default {
    components: {
      FullCalendar,
    },
    data() {
      const router = useRouter();
      return {
        calenderOptions: {
          plugins: [ dayGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',
          eventRender: function(events, element) {
            console.log(element);
          },
          dateClick: function (info) {
            console.log(info.dateStr);
            // router.push(`/${info.dateStr}`);
            router.push({path:'/', query: {date: `${info.dateStr}`}});
            // console.log(params);
          },
        }
      };
    },
    // methods: {
    //   handleDateClick: function (info) {
    //     console.log(FullCalendar.props);
    //     alert(info);
    //   }
    // }
  };
</script>

<template>
  login
  <FullCalendar :options="calenderOptions" />
</template>

<style lang="scss" scoped></style>