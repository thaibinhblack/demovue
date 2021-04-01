import {
  STATE,
  GETTERS,
  MUTATIONS,
  ACTIONS,
} from '@/store/modules/Global.d';

const state = {
  [STATE.isLoading]: false,
}

const getters = {

}

const mutations = {
  [MUTATIONS.setLoading](st, payload) {
    st[STATE.isLoading] = payload;
  },
}

const actions = {
  [ACTIONS.setLoading]( {commit}, payload ) {
    commit(MUTATIONS.setLoading, payload);
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
