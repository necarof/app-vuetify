<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div class="carousel-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-row>
        <v-col
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.imageSrc"
            >
              <v-card-title>{{ ad.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ ad.title }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/' + ad.id">
                open
              </v-btn>

              <v-btn
                class="primary"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'First ad description',
          promo: true,
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
          imageSrc: 'https://img4.goodfon.ru/original/1920x1280/f/e1/burgery-bulochki-ovoshchi-miaso.jpg',
          id: 'img3'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px 20px;
    background: rgba(0, 0, 0, .3);
  }
</style>