import store from '@/store';
import {
  STATE,
  MUTATIONS,
} 
from '@/store/modules/Global.d';
import { mapMutations, mapState } from 'vuex';

export const global = {
  data: () => ({
    ...mapState('global', {
      loading: [STATE.isLoading],
    })
  }),

  methods: {
    ...mapMutations('global', {
      setLoading: [MUTATIONS.setLoading],
    }),

    startLoading() {
      this.setLoading(true);
    },
    closeLoading() {
      this.setLoading(false);
    }
  },
}