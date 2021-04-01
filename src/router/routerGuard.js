import router from '@/router';
import store from '@/store';
import {
  MUTATIONS,
} 
from '@/store/modules/Global.d';

//set loading
router.afterEach(() => {
  store.dispatch(`global/${MUTATIONS.setLoading}`,true, {root: true});
});

//close loading
router.beforeEach((to, from, next) => {
  store.dispatch(`global/${MUTATIONS.setLoading}`,false, {root: true});
})