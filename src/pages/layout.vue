<template>
  <div id="wrapper" class="toggled">
    <Sidebar title="Admin" />

    <div id="page-content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';

export default {
  name: 'Layout',
  components: {
    Sidebar,
  },
};
</script>

<style lang="css">
#wrapper {
padding-left: 0;
-webkit-transition: all 0.5s ease;
-moz-transition: all 0.5s ease;
-o-transition: all 0.5s ease;
transition: all 0.5s ease;
}

#page-content-wrapper {
width: 100%;
position: absolute;
padding: 15px;
}

@media(min-width:768px) {
#wrapper {
  padding-left: 0;
}
#wrapper.toggled {
  padding-left: 250px;
}

#page-content-wrapper {
  padding: 20px;
  position: relative;
}
#wrapper.toggled #page-content-wrapper {
  position: relative;
  margin-right: 0;
}
}
</style>
