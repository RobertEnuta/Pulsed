<script setup lang="ts">
import song1 from './assets/Arctic theme.mp3'
import song2 from './assets/nausea_emoji.mp3'
import song3 from './assets/better drums.mp3'
import song4 from './assets/tension.mp3'
import song5 from './assets/discostuffidk.mp3'
import song6 from './assets/heartbeat.wav'
import song7 from './assets/piano loop1.mp3'
import song8 from './assets/honk.mp3'
</script>
<script lang="ts">
export default {
  name: 'Play',
  data() {
    return {
      playing: false,
      audio1: new Audio(song1),
      audio2: new Audio(song2),
      audio3: new Audio(song3),
      audio4: new Audio(song4),
      audio5: new Audio(song5),
      audio6: new Audio(song6),
      audio7: new Audio(song7),
      audio8: new Audio(song8)
    }
  },
  methods: {
    endAll() {
      this.audio1.pause()
      this.audio2.pause()
      this.audio3.pause()
      this.audio4.pause()
      this.audio5.pause()
      this.audio6.pause()
      this.audio7.pause()
      this.audio8.pause()
      this.playing = false
    },
    clickSong1() {
      if (this.playing == true) {
        this.playing = false
        this.audio1.pause()
      } else {
        this.playing = true
        this.audio1.play()
      }
      // alert(this.playing)
    },
    clickSong2() {
      if (this.playing == true) {
        this.playing = false
        this.audio2.pause()
      } else {
        this.playing = true
        this.audio2.play()
      }
      // alert(this.playing)
    },
    clickSong3() {
      if (this.playing == true) {
        this.playing = false
        this.audio3.pause()
      } else {
        this.playing = true
        this.audio3.play()
      }
      // alert(this.playing)
    },
    clickSong4() {
      if (this.playing == true) {
        this.playing = false
        this.audio4.pause()
      } else {
        this.playing = true
        this.audio4.play()
      }
      // alert(this.playing)
    },
    clickSong5() {
      if (this.playing == true) {
        this.playing = false
        this.audio5.pause()
      } else {
        this.playing = true
        this.audio5.play()
      }
      // alert(this.playing)
    },
    clickSong6() {
      if (this.playing == true) {
        this.playing = false
        this.audio6.pause()
      } else {
        this.playing = true
        this.audio6.play()
      }
      // alert(this.playing)
    },
    clickSong7() {
      if (this.playing == true) {
        this.playing = false
        this.audio7.pause()
      } else {
        this.playing = true
        this.audio7.play()
      }
      // alert(this.playing)
    },
    clickClown() {
      if (this.playing == true) {
        this.playing = false
        this.audio8.pause()
      } else {
        this.playing = true
        this.audio8.play()
      }
    }
  }
}
</script>
<template>
  <div
    class="bg-[url('https://cdn.discordapp.com/attachments/653610813281796136/1120341771394752575/90s_pattern.png')] bg-cover"
  >
    <div class="bg-hwite bg-opacity-40 -mt-6 p-5">
      <div class="min-h-screen font-roboto text-black pl-4 pt-2 m-4 break-words">
        <span
          class="text-xl font-bold text-bgc w-100 box-decoration-clone bg-gradient-to-r from-pulsed to-accent hover:box-decoration-slice hover:text-red"
        >
          <span class="">Apes and music <br /></span>
          <span class="text-huge">Apes and music <br /></span>
          <span class="text-giant">Apes and music <br /></span>
        </span>
        <div
          @click="clickClown()"
          class="items-center flex flex-1 flex-row text-sm text-black text-pulsed cursor-vertical-text"
        >
          <div class="flex-1 rounded-lg">by robert</div>
          <div class="flex-1">
            <img class="w-10 h-10" src="./assets/EU.jpg" />
          </div>
        </div>
        <button class="sticky top-0 w-16 h-16 z-30 rounded-md bg-accent" @click="endAll()">
          Stop all
        </button>
        <br />
        <div class="text-black first-letter:text-pulsed text-dark text-base font-bold font-black">
          <div class="items-center grid grid-cols-4 w-full">
            <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
              During my time at
              <span class="text-lg text-blue font-black">pulsed</span>
              I learned a lot of things, but I mostly focused and learning and discoverying more
              about music and composition. In this website you can listen to a few of the tracks
              that I created with the intention of sharing and adding to my games. <br />
              <span class="text-sm">(click on the images to play music/ click again to pause)</span>
            </div>
            <div>
              <!-- spacing for grid -->
            </div>
            <div class="">
              <button @click="clickSong1()">
                <img class="rounded-lg" src="./assets/penguin_render.png" />
              </button>
            </div>
            <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
            <div class="">
              <button @click="clickSong3()">
                <img class="rounded-lg" src="./assets/happy_coco.png" />
              </button>
            </div>
            <div>
              <!-- spacing for grid -->
            </div>
            <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
              Music can be a very powerful tool if used properly. That's why I wanted to spend this
              semester learning more about music and how to use sound to create an impact. I wanted
              to understand how to use and create audio that can create an impact on others. I am
              planning of also sharing the stuff I create with others through services like Steam
              and Itch.io.
            </div>
            <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
            <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
              Most things I experimented with I didn't end up liking but it was still a great
              opportunity to learn something new. Since failure is the best teacher, here are some
              more songs and SFX I didn't end up liking or using:
            </div>
            <div>
              <!-- spacing for grid -->
            </div>
            <div class="">
              <button @click="clickSong2()">
                <img class="rounded-lg" src="./assets/sad_coco.png" />
              </button>
            </div>
            <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
            <div class="p-5">
              <button @click="clickSong4()">
                <img class="" src="./assets/running.png" />
              </button>
            </div>
            <div class="p-5">
              <button @click="clickSong5()">
                <img class="" src="./assets/cpu.png" />
              </button>
            </div>
            <div class="p-5">
              <button @click="clickSong6()">
                <img class="" src="./assets/heart.png" />
              </button>
            </div>
            <div class="p-5">
              <button @click="clickSong7()">
                <img class="" src="./assets/piano.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
