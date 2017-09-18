const SHOW_ABOUTDIALOG_CLICK = 'SHOW_ABOUTDIALOG_CLICK';
const SHOW_LOGIN_CLICK = 'SHOW_LOGIN_CLICK';
const SHOW_REG_CLICK = 'SHOW_REG_CLICK';

const state = {
  isShowAboutDialog: false,
  isShowLogDialog: false,
  isShowRegDialog: false,
  username: 'yangjun'
};

const getters = {
  isShowAboutDialog: state => state.isShowAboutDialog,
  isShowLogDialog: state => state.isShowLogDialog,
  isShowRegDialog: state => state.isShowRegDialog,
  username: state => state.username
};

const actions = {
  aboutClick ({commit}) {
    commit(SHOW_ABOUTDIALOG_CLICK);
  },
  logClick ({commit}) {
    commit(SHOW_LOGIN_CLICK);
  },
  regClick ({commit}) {
    commit(SHOW_REG_CLICK);
  }
};

const mutations = {
  [SHOW_ABOUTDIALOG_CLICK] (state) {
    state.isShowAboutDialog = !state.isShowAboutDialog;
  },
  [SHOW_LOGIN_CLICK] (state) {
    state.isShowLogDialog = !state.isShowLogDialog;
  },
  [SHOW_REG_CLICK] (state) {
    state.isShowRegDialog = !state.isShowRegDialog;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
