<template>
  <!-- <sidebar-menu :menu="menu"/> -->
  <div class="w-1/4 bg-black h-full shadow-md"></div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
export default {
  components: {
    SidebarMenu
  },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          header: true,
          title: "Main Navigation"
          // component: componentName
          // visibleOnCollapse: true
          // class: ''
          // attributes: {}
        },
        {
          href: "/",
          title: "Dashboard"
          // icon: "fa fa-user"
          /* 
                        // custom icon
                        icon: {
                            element: 'span',
                            class: 'fa fa-user',
                            attributes: {}
                        }
                        */
          // disabled: true
          // class: ''
          // attributes: {}
          // alias: '/path'
          /*
                        badge: {
                            text: 'new',
                            class: 'default-badge'
                            // attributes: {}
                            // element: 'span'
                        }
                        */
        },
        {
          title: "Charts",
          // icon: "fa fa-chart-area",
          child: [
            {
              href: "/charts/sublink",
              title: "Sub Link"
            }
          ]
        }
      ]
    };
  }
};
</script>
