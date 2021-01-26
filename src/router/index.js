import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue';
import page404 from '../views/404.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: `Test vue`,
      metaTags: [
        {
          name: 'description',
          content: 'This is a test for vue app'
        },
        {
          property: 'og:description',
          content: 'This is a test for vue app.'
        }
      ]
    }
  },
  {
    path: '/profile',
    name : 'users_page',
    component : ()=> import('@/views/showProfile.vue'),
    meta: {
      title: `Test vue | users page`,
      metaTags: [
        {
          name: 'description',
          content: 'This is list of users page.'
        },
        {
          property: 'og:description',
          content: 'This is list of users page.'
        }
      ]
    }
  },
  {
    path: '/material',
    
    name : 'materialPage',
    
    component : ()=> import('@/views/materialTest.vue'),
    
    meta: {

      title: `Test vue | prime vue`,
      metaTags: [
        {
          name: 'description',
          content: 'This is prime vue page.'
        },
        {
          property: 'og:description',
          content: 'This is prime vue page.'
        }
      ]

    }


  },
  {path: '/*',
  name: 'PageNotFound',
  component: page404
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else { // ← here ↓
    document.title = previousNearestWithMeta.meta.title
  }

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});



export default router
