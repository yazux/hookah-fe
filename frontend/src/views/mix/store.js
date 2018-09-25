import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'mix',
      mix: {},
      mixes: {
        total: 1,
        last_page: 1,
        data: []
      },
      sortTypes: {
        id_asc:  {label: 'По очереди', dir: 'asc',  field: 'rating'},
        id_desc: {label: 'По очереди, в обратном порядке', dir: 'desc',  field: 'rating'},
        name_asc:  {label: 'По алфавиту',  dir: 'asc',  field: 'price'},
        name_desc: {label: 'По алфавиту, в обратном порядке',  dir: 'desc',  field: 'price'},
        rating_asc:  {label: 'По рейтингу',  dir: 'asc',  field: 'rating'},
        rating_desc: {label: 'По рейтингу, в обратном порядке',  dir: 'desc',  field: 'rating'}
      },
      sortType: 'rating_desc',
    },
    actions: {
      getMixes({ state, dispatch, rootState }, options) {
          let params = {
            page:       (options && options.page)  ? options.page  : 1,
            count:      (options && options.count) ? options.count : 100,
            order_by:   state.sortTypes[state.sortType]['field'],
            order_type: state.sortTypes[state.sortType]['dir'],
            filter:     (options.filter) ? options.filter : {model: [], relation: []}
          };
          return Vue.http.get(rootState.endpoint + '/mix', {params: params}).then(
            response => {
              Vue.set(state, 'mixes', response.body.response);
              return response.body.response;
            }, response => {
              Vue.set(state, 'mixes', false);
              this.commit('showSnackbar', [response.body.errors.messages, 6000]);
            }
          );
      },
      getMix({ state, dispatch, rootState }, id) {
        return Vue.http.get(rootState.endpoint + '/mix/' + id).then(
          response => {
            Vue.set(state, 'mix', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'mix', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      }
    }
  }
}