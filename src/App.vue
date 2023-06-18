<script setup lang="ts">
import song1 from './assets/Arctic theme.mp3'
import song2 from './assets/nausea_emoji.mp3'
import song3 from './assets/tension.mp3'
import song4 from './assets/discostuffidk.mp3'
import song5 from './assets/Arctic theme.mp3'
import song6 from './assets/piano loop1.mp3'
import song7 from './assets/heartbeat.wav'
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
      audio7: new Audio(song7)
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
    }
  }
}
</script>
<template>
  <div
    class="bg-[url('https://cdn.discordapp.com/attachments/653610813281796136/1120019468152754276/patterns.png')] bg-cover -mt-6 -mx-2 p-5"
  >
    <div class="min-h-screen font-roboto text-black pl-4 pt-2 m-4 break-words">
      <span
        class="text-xl text-bgc w-100 box-decoration-clone bg-gradient-to-r from-pulsed to-accent hover:box-decoration-slice hover:text-red"
      >
        <span class="">Apes and music <br /></span>
        <span class="text-huge">Apes and music <br /></span>
        <span class="text-giant">Apes and music <br /></span>
      </span>
      <div
        class="items-center flex flex-1 flex-row text-sm text-black text-pulsed cursor-vertical-text"
      >
        <div class="flex-1 rounded-lg">by robert</div>
        <div class="flex-1"><img width="20px" height="20px" src="./assets/EU.jpg" /></div>
      </div>
      <button class="sticky top-0 w-16 h-16 z-30 rounded-md bg-bgc" @click="endAll()">
        Stop all
      </button>
      <br />
      <div class="items-center grid grid-cols-4 w-full">
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="">
          <button @click="clickSong1()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="">
          <button @click="clickSong2()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="">
          <button @click="clickSong3()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="">
          <button @click="clickSong4()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="">
          <button @click="clickSong5()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="">
          <button @click="clickSong6()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <!-- ========================================================================================================================================================
        ========================================================================================================================================================
        ======================================================================================================================================================== -->
        <div class="col-span-2 relative first-letter:text-xl first-letter:text-pulsed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa obcaecati, rerum
          minima laborum commodi ipsa tempore consectetur animi quod perspiciatis, ab maiores atque
          quisquam saepe deserunt nemo explicabo optio.
        </div>
        <div>
          <!-- spacing for grid -->
        </div>
        <div class="">
          <button @click="clickSong7()">
            <img class="rounded-lg" src="./assets/forza.png" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
