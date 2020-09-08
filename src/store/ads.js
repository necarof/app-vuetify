import * as fb from 'firebase'

class Ad {
  constructor({title, description, imageSrc = '', promo = false, id = null}) {
    this.title = title
    this.description = description
    // this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [{
        title: 'First ad',
        description: 'First ad description',
        promo: false,
        imageSrc: 'https://avatars.mds.yandex.net/get-pdb/33827/4003fa51-0bba-4007-b6da-ee88d2ddb99f/s1200',
        id: 'img1'
      },
      {
        title: 'Second ad',
        description: 'Second ad description',
        promo: true,
        imageSrc: 'https://im0-tub-ru.yandex.net/i?id=15268ef922a90109a7054a5af9736ab2-l&n=13',
        id: 'img2'
      },
      {
        title: 'Third ad',
        description: 'Third ad description',
        promo: true,
        imageSrc: 'https://a.d-cd.net/X4AAAgP1QeA-960.jpg',
        id: 'img3'
      },
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad({
          imageSrc: payload.imageSrc, 
          title: payload.title, 
          description: payload.description, 
          promo: payload.promo,
          id: getters.user.id
        })

        const ad = await fb.database().ref('ads').push(newAd)
        
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds(state) {
      return state.ads
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}