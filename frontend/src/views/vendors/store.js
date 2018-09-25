import Vue from 'vue'

export default {
  store: {
    namespaced: true,
    state: {
      endpoint: 'vendors',
      vendors: {
        total: 1,
        last_page: 1,
        data: []
      },
      sortTypes: {
        rating_asc:  {label: 'По рейтингу', dir: 'asc',  field: 'rating'},
        rating_desc: {label: 'По рейтингу, в обратном порядке', dir: 'desc',  field: 'rating'},
        name_asc:    {label: 'По алфавиту',  dir: 'asc',  field: 'price'},
        name_desc:    {label: 'По алфавиту, в обратном порядке',  dir: 'desc',  field: 'price'},
      },
      sortType: 'rating_desc',
    },
    actions: {
        getVendors({ state, dispatch, rootState }, options) {
            let params = {
              page:       (options && options.page)  ? options.page  : 1,
              count:      (options && options.count) ? options.count : 100,
              order_by:   state.sortTypes[state.sortType]['field'],
              order_type: state.sortTypes[state.sortType]['dir'],
              filter:     {model: [], relation: []}
            };
            return Vue.http.get(rootState.endpoint + '/vendor', {params: params}).then(
              response => {
                Vue.set(state, 'vendors', response.body.response);
                return response.body.response;
              }, response => {
                Vue.set(state, 'vendors', false);
                this.commit('showSnackbar', [response.body.errors.messages, 6000]);
              }
            );
        },
    }
  }
}