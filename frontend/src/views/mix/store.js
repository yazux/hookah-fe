import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'mix',
      mix: {
        id: null,
        stowage: [],
        rating: 0
      },
      mixes: {
        total: 1,
        last_page: 1,
        data: []
      },
      sortTypes: {
        id_asc:  {label: 'По очереди', dir: 'asc',  field: 'rating'},
        id_desc: {label: 'По очереди, в обратном порядке', dir: 'desc',  field: 'rating'},
        name_asc:  {label: 'По алфавиту',  dir: 'asc',  field: 'name'},
        name_desc: {label: 'По алфавиту, в обратном порядке',  dir: 'desc',  field: 'name'},
        rating_asc:  {label: 'По рейтингу',  dir: 'asc',  field: 'rating'},
        rating_desc: {label: 'По рейтингу, в обратном порядке',  dir: 'desc',  field: 'rating'}
      },
      sortType: 'rating_desc',
    },
    mutations: {
      /**
       * Обновляет значение рейтинга микса в хранилище
       * @param state
       * @param value
       */
      setMixRating(state, value) {
        Vue.set(state, 'mix.rating', value);
        state.mix.rating = value;
        this.commit('mix/setMixRatingInMixes', {mix_id: state.mix.id, value: value});
        this.commit('bookmark/setMixRatingInMixes', {mix_id: state.mix.id, value: value});
      },
      /**
       * Обновляет значение рейтинга микса в списке миксов
       * @param state
       * @param data
       */
      setMixRatingInMixes(state, data) {
        if (state.mixes.data.length && data.mix_id) {
          state.mixes.data.map(mix => {
            if (parseInt(mix.id) === parseInt(data.mix_id)) {
              mix.rating = data.value;
            }
          });
        }
      }
    },
    actions: {
      getMixes({ state, dispatch, rootState }, options) {
          let params = {
            page:       (options && options.page)  ? options.page  : 1,
            count:      (options && options.count) ? options.count : 100,
            order_by:   state.sortTypes[state.sortType]['field'],
            order_type: state.sortTypes[state.sortType]['dir'],
            filter:     (options && options.filter) ? options.filter : {model: [], relation: []}
          };
          return Vue.http.get(rootState.endpoint + '/mix', {params: params}).then(
            response => {
              Vue.set(state, 'mixes', response.body.response);
              return response.body.response;
            }, response => {
              Vue.set(state, 'mixes', false);
              this.commit('showSnackbar', [response.body.errors.messages, 6000]);
              return false;
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
            return false;
          }
        );
      }
    }
  }
}
