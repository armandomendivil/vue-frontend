<template>
  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
          <li>
            <router-link to="/">
              <span>{{title}}</span>
            </router-link>
          </li>
          <li v-for="route in routes" @click="activar">
              <router-link :to="route.path" :class="{'active': current === route.name}">
                <span>{{route.name}}</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['title'],
  data() {
    return {
      routes: [{}],
      current: this.$router.currentRoute.name,
    };
  },
  computed: {
    // currentView() {
    //   return this.$store.state.views.currentView;
    // },
    // isActive() {
    //   return this.$router.currentRoute.name;
    // }
  },
  created() {
    this.routes = this.$router.options.routes[0].children.filter(route => route.hasMenu);
  },
  methods: {
    activar() {
      return this.current = this.$router.currentRoute.name;
    }
  }
};
</script>

<style lang="css">
  .active: {
    color: 'red',
  }

  #sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }

  #sidebar-wrapper {
    width: 0;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }

  /* Sidebar Styles */

  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
  }

  .sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
  }

  .sidebar-nav li a.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }

  .sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }

  .sidebar-nav li a:active, .sidebar-nav li a:focus {
    text-decoration: none;
  }

  .sidebar-nav>.sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
  }

  .sidebar-nav>.sidebar-brand a {
    color: #999999;
  }

  .sidebar-nav>.sidebar-brand a:hover {
    color: #fff;
    background: none;
  }

  .sidebar-nav>.sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
  }

  .sidebar-nav>.sidebar-brand a {
    color: #999999;
  }

  .sidebar-nav>.sidebar-brand a:hover {
    color: #fff;
    background: none;
  }
</style>
