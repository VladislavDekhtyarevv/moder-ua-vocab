import EventService from "../services/EventService";
import router from "@/router";

export default {
  login({ commit }, user) {
    return EventService.loginUser(user).then(({ data }) => {
      commit("setUser", data);
      return data;
    });
  },
  register({ commit }, user) {
    return EventService.registerUser(user).then(({ data }) => {
      commit("setUser", data);
      return data;
    });
  },
  getProjects({ commit }) {
    EventService.getProjects().then(({ data }) => {
      commit("setProjects", data.projects);
      commit("hidePreloader");
    });
  },
  getProjectsPage({ commit }, page) {
    EventService.getProjectsPage(page).then(({ data }) => {
      commit("setProjects", data.projects);
      commit("hidePreloader");
    });
  },
  getConfiguration({ commit }) {
    EventService.getConfiguration().then(({ data }) => {
      commit("setConfiguration", data);
      commit("hidePreloader");
    });
  },
  getDoorConfiguration({ commit }, id) {
    return new Promise((resolve, reject) => {
      EventService.getDoorConfiguration(id).then(
        ({ data }) => {
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  createProject({ commit }, proj) {
    return new Promise((resolve, reject) => {
      EventService.createProject(proj).then(
        ({ data }) => {
          router.push({
            name: "Project",
            params: { id: data.id },
          });
          commit("showNotification", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
    duplicateDoor({ commit }, idDoor) {
    return new Promise((resolve, reject) => {
      EventService.duplicateDoor(idDoor).then(
        ({ data }) => {
          commit("showNotification", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  duplicateDoors({ commit }, doorIds) {
    return new Promise((resolve, reject) => {
      EventService.duplicateDoors(doorIds).then(
        ({ data }) => {
          commit("showNotification", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  deleteDoors({ commit }, doorIds) {
    return new Promise((resolve, reject) => {
      EventService.deleteDoors(doorIds).then(
        ({ data }) => {
          commit("showNotification", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
          commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  createDoor({ commit }, config) {
      return new Promise((resolve, reject) => {
          EventService.createDoor(config, config.id)
              .then(({ data }) => {
                      router.push({
                          name: "Project",
                          params: { id: config.id },
                      });
                      commit("showNotification", data);
                      commit("hidePreloader");
                      resolve(data);
                  },
                  (error) => {
                      commit("showNotification", error.response.data);
                      commit("hidePreloader");
                      reject(error);
                  })
      });

  },
  validateStepDoor({ commit }, config) {
      return new Promise((resolve, reject) => {
          EventService.validateStepDoor(config)
              .then(({ data }) => {
                      commit("hidePreloader");
                      resolve(data);
                  },
                  (error) => {
                      commit("hidePreloader");
                      commit("showNotification", error.response.data);
                      reject(error);
                  })
      });

  },
  updateProject({ commit }, proj) {
    return new Promise((resolve, reject) => {
      EventService.updateProject(proj).then(
        ({ data }) => {
          router.push({
            name: "Project",
            params: { id: data.id },
          });
          commit("showNotification", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  updateDoor({ commit }, config) {
    EventService.updateDoor(config)
      .then(({ data }) => {
        router.push({
          name: "Project",
          params: { id: config.idProj },
        });
        commit("showNotification", data);
        commit("hidePreloader");
      })
      .catch((res) => {
        commit("hidePreloader");
        commit("showNotification", res.response.data);
      });
  },
  getProject({ commit }, id) {
    return new Promise((resolve, reject) => {
      EventService.getProject(id).then(
        ({ data }) => {
          commit("setProject", data);
          commit("hidePreloader");
          resolve(data);
        },
        (error) => {
            commit("showNotification", error.response.data);
          reject(error);
        }
      );
    });
  },
  getCalculatedValue({ commit }, values) {
    return EventService.getCalculatedValue(values).then(
      ({ data }) => {
        commit("hidePreloader");
        return data;
      },
      (error) => {}
    );
  },
  uploadFile({ commit }, fd) {
    return EventService.uploadFile(fd).then(
      ({ data }) => {
        commit("hidePreloader");
        return data;
      },
      (error) => {
          commit("hidePreloader");
          commit("showNotification", error.response.data);
      }
    );
  },
  getNewOptions({ commit }, values) {
    return EventService.getNewOptions(values).then(
      ({ data }) => {
        commit("hidePreloader");
        return data;
      },
      (error) => {}
    );
  },
  getTemplate({ commit }) {
    return EventService.getTemplate().then(
      ({ data }) => {
        commit("hidePreloader");
        return data;
      },
      (error) => {
          commit("hidePreloader");
          commit("showNotification", error.response.data);
      }
    );
  },
  performProject({ commit }, proj) {
    return EventService.performProject(proj).then(
      ({ data }) => {
        commit("hidePreloader");
        commit("showNotification", data);
        return data;
      },
      (error) => {
          commit("hidePreloader");
          commit("showNotification", error.response.data);
      }
    );
  },
  deleteDoor({ commit }, id) {
        return EventService.deleteDoor(id).then(
            ({ data }) => {
                commit("showNotification", data);
                commit("hidePreloader");
                return data;
            },
            (error) => {
                commit("hidePreloader");
                commit("showNotification", error.response.data);
            }
        );
    },
  deleteProj({ commit }, id) {
        return EventService.deleteProj(id).then(
            ({ data }) => {
                commit("showNotification", data);
                commit("hidePreloader");
                return data;
            },
            (error) => {
                commit("hidePreloader");
                commit("showNotification", error.response.data);
            }
        );
    },
  showPreloader({ commit }) {
    commit("showPreloader");
  },
  showNotificationErrorProject({ commit }) {
      commit("showNotification", {'status' : 'error', 'message': 'Your project contains invalid data to complete'});
  },
  showNotification({ commit }, data) {
      commit("showNotification", data);
  },
  hidePreloader({ commit }) {
    commit("hidePreloader");
  },
  closeNotification({ commit }) {
    commit("closeNotification");
  },

    reset({ commit }, body) {
        return EventService.reset(body).then(
            ({ data }) => {
                commit("showNotification", data);
                commit("hidePreloader");
                return data;
            },
            (error) => {
                commit("hidePreloader");
                commit("showNotification", error.response.data);
                throw error.response.data;
            }
        );
    },
    updatePass({ commit }, body) {
        return EventService.updatePass(body).then(
            ({ data }) => {
                commit("showNotification", data);
                commit("setUser", data);
                commit("hidePreloader");
                return data;
            },
            (error) => {
                commit("hidePreloader");
                commit("showNotification", error.response.data);
                throw error.response.data;
            }
        );
    },

  logout({ commit }) {
    return EventService.logout()
      .then(() => {
        commit("clearUserData");
      })
      .catch(() => {
        commit("clearUserData");
      });
  },
};
