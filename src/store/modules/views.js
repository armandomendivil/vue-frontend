const state = {
  currentView: null,
};

const mutations = {
  // eslint-disable-next-line
  currentView(state, currentView) {
    Object.assign(state, { currentView });
  },
};

const actions = {

};

export default {
  state,
  mutations,
  actions,
};
