import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'bookmark',
      bookmark: {
        stowage: [],
      },
      bookmarks: {
        total: 1,
        last_page: 1,
        data: []
      },
      sortTypes: {
        id_asc:  {label: 'По очереди', dir: 'asc',  field: 'rating'},
        id_desc: {label: 'По очереди, в обратном порядке', dir: 'desc',  field: 'rating'},
        name_asc:  {label: 'По алфавиту',  dir: 'asc',  field: 'price'},
        name_desc: {label: 'По алфавиту, в обратном порядке',  dir: 'desc',  field: 'name'},
        rating_asc:  {label: 'По рейтингу',  dir: 'asc',  field: 'name'},
        rating_desc: {label: 'По рейтингу, в обратном порядке',  dir: 'desc',  field: 'rating'}
      },
      sortType: 'rating_desc',
    },
    mutations: {
      /**
       * Обновляет значение рейтинга микса в списке закладок
       * @param state
       * @param data
       */
      setMixRatingInMixes(state, data) {
        if (state.bookmarks.data.length && data.mix_id) {
          state.bookmarks.data.map(bookmark => {
            if (parseInt(bookmark.mix_id) === parseInt(data.mix_id)) {
              bookmark.mix.rating = data.value;
            }
          });
        }
      }
    },
    actions: {
      getBookmarks({ state, dispatch, rootState }, options) {
        let params = {
          page:       (options && options.page)  ? options.page  : 1,
          count:      (options && options.count) ? options.count : 100,
          order_by:   state.sortTypes[state.sortType]['field'],
          order_type: state.sortTypes[state.sortType]['dir'],
          filter:     (options && options.filter) ? options.filter : {model: [], relation: []}
        };
        return Vue.http.get(rootState.endpoint + '/bookmark', {params: params}).then(
          response => {
            Vue.set(state, 'bookmarks', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'bookmarks', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },
      getBookmark({ state, dispatch, rootState }, id) {
        return Vue.http.get(rootState.endpoint + '/bookmark/' + id).then(
          response => {
            Vue.set(state, 'bookmark', response.body.response);
            return response.body.response;
          }, response => {
            Vue.set(state, 'bookmark', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
          }
        );
      },
      postBookmark({ state, dispatch, rootState }, data) {
        return Vue.http.post(rootState.endpoint + '/bookmark', data).then(
          response => {
            return this.dispatch('mix/getMix', data.mix_id).then(r => !!(r));
          }, response => {
            //Vue.set(state, 'bookmark', false);
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
            return false;
          }
        );
      },
      deleteBookmark({ state, dispatch, rootState }, data) {
        return Vue.http.delete(rootState.endpoint + '/bookmark', {params: data}).then(
          response => {
            return this.dispatch('mix/getMix', data.mix_id).then(r => !!(r));
          }, response => {
            this.commit('showSnackbar', [response.body.errors.messages, 6000]);
            return false;
          }
        );
      }
    }
  }
}
