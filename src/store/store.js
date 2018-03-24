import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

	strict: true,
	state: {

		products: [
          {name: 'Red Banana', price: 25},
          {name: 'Yellow Banana', price: 30},
          {name: 'Green Banana', price: 35},
          {name: 'Blue Banana', price: 35}
        ]
	},

	getters: {
		saleProducts: state => {
			var saleProducts = state.products.map(product => {
				return {
					name	: '**' + product.name + '**',
					price	: 'Rp ' + product.price / 2
				}
			})
			return saleProducts
		}
	},

	mutations: {
		reducePrice: (state, payload) => {
			state.products.forEach( product => {
          		product.price -= -1
        	})
		}
	},

	actions: {
		reducePrice: (context, payload) => {
			setTimeout( function() {
				context.commit('reducePrice')
			}, 2000)
		}
	}
})