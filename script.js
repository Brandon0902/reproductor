new Vue({

    el: "#app",
  
    data() {
  
      return {
  
        audio: null,
  
        circleLeft: null,
  
        barWidth: null,
  
        duration: null,
  
        currentTime: null,
  
        isTimerPlaying: false,
  
        tracks: [
  
          {
  
            name: "No Hablare de mi Amor",
  
            artist: "Tu eres mi Megara💝✨" ,
  
            cover: "https://drive.google.com/uc?export=download&id=1TQVeryWaYgOzilWQ90DpRIm8z6-KT5Nl",
  
            source: "https://drive.google.com/uc?export=download&id=1MqaRNtkb0SHPCLFr3stSU0dybwRtTofl",
  
            url: "https://www.youtube.com/watch?v=gYU7NGUq3N0&list=RDMMgYU7NGUq3N0&start_radio=1",
  
            favorited: false
  
          },
  
          {
  
            name: "Ella(Zuliey💝✨)",
  
            artist: "Paulo Londra",
  
            cover: "https://drive.google.com/uc?export=download&id=1YIvJSPXYkfBG5-FvO9N-RQi4qCda5fhe",
  
            source: "https://drive.google.com/uc?export=download&id=1a2-efo6T92yDNP6ejqcjtQrGW4bKVIcJ",
  
            url: "https://www.youtube.com/watch?v=qz0WjbGlmv0",
  
            favorited: false
  
          },
  
          {
  
            name: "Bemaste(Tu me viste diferente✨)",
  
            artist: "Tiago PZK",
  
            cover: "https://drive.google.com/uc?export=download&id=1sIuA0cP2QSAIyA5nOjOA2JCNYImrQuZZ",
  
            source: "https://drive.google.com/uc?export=download&id=1MLFsBf-yKfYuwaOjd2heO5hew614SLnk",
  
            url: "https://www.youtube.com/watch?v=PlyL4LaH9zU",
  
            favorited: false
  
          },
  
          {
  
            name: "Solo por vos💝✨",
  
            artist: "Trueno",
  
            cover: "https://drive.google.com/uc?export=download&id=122b6cDvBSuRvsluJPBGqynZUf2X-szyu",
  
            source: "https://drive.google.com/uc?export=download&id=16hNELuVJ5qjjPDiSoViDTC1epqsWJpCM",
  
            url: "https://www.youtube.com/watch?v=2aksg6gYUU4",
  
            favorited: false
  
          },
  
          {
            
            name: "Te necesito💝✨",
  
            artist:"Luis Miguel",
  
            cover: "https://drive.google.com/uc?export=download&id=1_fAiU1jIKIsSPlXvCSYRQr57aIbhog44",
  
            source: "https://drive.google.com/uc?export=download&id=16BTHGfiAF-kO7f3OUBpC0txWCTrYvNpY",
            
  
            url: "https://www.youtube.com/watch?v=J0qbS8HeAIQ",
  
            favorited: false
  
          },
  
          {
            
            name: "Tu eres algo aparte💝✨",
  
            artist: "Khea",
  
            cover: "https://drive.google.com/uc?export=download&id=1QSq5fF4OAsOlXMSFphwxpAGz5IjFYAHc",
  
            source: "https://drive.google.com/uc?export=download&id=1t12-cN_TQFR4ChwkJnkgjbh-2ywC1OGA",
  
            
  
            url: "https://www.youtube.com/watch?v=Za2CkwudiNQ",
  
            favorited: false
  
          },
  
          {
            
            name: "Si me sobrara el tiempo(te quiero a mi lado💝✨)",
  
            artist: "Duki",
  
            cover: "https://drive.google.com/uc?export=download&id=1pmjcI6NnrtXyuHoIr5Fnuh4uUnxIYNsK",
  
            source: "https://drive.google.com/uc?export=download&id=1qujfTEN8KelqP3kjXQJdAyspblaNvcJ8",
  
            
  
            url: "https://www.youtube.com/watch?v=Ez2j2qhAl9g",
  
            favorited: false
  
          },
  
          {
            
            
            name: "Nena maldicion(para hacerle ternuras💝)",
  
            artist: "Paulo Londra",
  
            cover: "https://drive.google.com/uc?export=download&id=1UE0PfYnL-cp3c-ZCoZ6BlViaMmGP4Wyo",
  
            source: "https://drive.google.com/uc?export=download&id=14vzpMzg4lDqFE47Y3Ny5zebm1-VxdEin",
  
            
  
            url: "https://www.youtube.com/watch?v=bX3S-_jUauc",
  
            favorited: false
  
          },
  
          {
            name : "Song For you💝✨",
  
            artist: "Big Time Rush",
  
            cover: "https://drive.google.com/uc?export=download&id=1KXSKUwCUQLgZk_E_bepO-Vlsftu8lTCX",
  
            source: "https://drive.google.com/uc?export=download&id=1YUnSbaYQ_HZJHicMxtaXHZ4fmIjvyclm",
  
            
  
            url: "https://www.youtube.com/watch?v=8f6jLZ86dF4",
  
            favorited: false
  
          },
  
          {
            
            name: "Simplemente gracias💝✨",
  
            artist: "Calibre 50",
  
            cover: "https://drive.google.com/uc?export=download&id=1eAnwbiu7UO3ITRwXQCnnSxwRHJF44KJh",
  
            source: "https://drive.google.com/uc?export=download&id=1BjyADq6dIRaOE0-rsAPGaFTEYBjiJoYK",
  
            
  
            url: "https://www.youtube.com/watch?v=Y8P191pylHc",
  
            favorited: false
  
          },
  
          {
            name: "Lo que quiero (contigo💝)",
  
            artist: "Natanael Cano",
  
            cover: "https://drive.google.com/uc?export=download&id=1ydsb8EK1YM9gC9piKEJwvqSdWJS3gQi6",
  
            source: "https://drive.google.com/uc?export=download&id=1QBdwna-CkI1a7zBGH1dTZuSunxSWn2JL",
  
            
  
            url: "https://www.youtube.com/watch?v=4Ih7rTrG9MY",
  
            favorited: false
  
          },
  
          {
            name: "Vamonos a marte💝✨",
  
            artist: "Kevin Karl",
  
            cover: "https://drive.google.com/uc?export=download&id=16RzxtGZo_1sFrEuEFTU1Zjo7HZ9qdo_u",
  
            source: "https://drive.google.com/uc?export=download&id=1MBWEf2e7qQjhtNMdK06bdZDzSs-2Zryu",
  
            
  
            url: "https://www.youtube.com/watch?v=a__hyy3TrGQ",
  
            favorited: false
  
          },
  
          {
  
            name: "Solo pienso en ti💝",
  
            artist: "Paulo Londra",
  
            cover: "https://drive.google.com/uc?export=download&id=1YALTktVT6i1JhxbA_hhbktVTRtkAqX-e",
  
            source: "https://drive.google.com/uc?export=download&id=1LSpcEjlf01LGugdjzYX5QMT_rOE5y315",
  
            url: "https://youtu.be/1GS7wxWPaxc",
  
            favorited: true
  
          },
  
          {
  
            name: "Me tiene mal💝✨(y no es broma)",
  
            artist: "Paulo Londra",
  
            cover: "https://drive.google.com/uc?export=download&id=1RM9NB5Qex7AAStCxzceXAx7sBUstUayp",
  
            source: "https://drive.google.com/uc?export=download&id=1icRr6vO6ikSgwFIWWt3IyYRY0UiOmjoa",
  
            url: "https://www.youtube.com/watch?v=U28pYrR8TI0",
  
            favorited: false
  
            
            }
          ],
          
  
           
  
  
        currentTrack: null,
  
        currentTrackIndex: 0,
  
        transitionName: null
  
      };
  
    },
  
    methods: {
  
      play() {
  
        if (this.audio.paused) {
  
          this.audio.play();
  
          this.isTimerPlaying = true;
  
        } else {
  
          this.audio.pause();
  
          this.isTimerPlaying = false;
  
        }
  
      },
  
      generateTime() {
  
        let width = (100 / this.audio.duration) * this.audio.currentTime;
  
        this.barWidth = width + "%";
  
        this.circleLeft = width + "%";
  
        let durmin = Math.floor(this.audio.duration / 60);
  
        let dursec = Math.floor(this.audio.duration - durmin * 60);
  
        let curmin = Math.floor(this.audio.currentTime / 60);
  
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
  
        if (durmin < 10) {
  
          durmin = "0" + durmin;
  
        }
  
        if (dursec < 10) {
  
          dursec = "0" + dursec;
  
        }
  
        if (curmin < 10) {
  
          curmin = "0" + curmin;
  
        }
  
        if (cursec < 10) {
  
          cursec = "0" + cursec;
  
        }
  
        this.duration = durmin + ":" + dursec;
  
        this.currentTime = curmin + ":" + cursec;
  
      },
  
      updateBar(x) {
  
        let progress = this.$refs.progress;
  
        let maxduration = this.audio.duration;
  
        let position = x - progress.offsetLeft;
  
        let percentage = (100 * position) / progress.offsetWidth;
  
        if (percentage > 100) {
  
          percentage = 100;
  
        }
  
        if (percentage < 0) {
  
          percentage = 0;
  
        }
  
        this.barWidth = percentage + "%";
  
        this.circleLeft = percentage + "%";
  
        this.audio.currentTime = (maxduration * percentage) / 100;
  
        this.audio.play();
  
      },
  
      clickProgress(e) {
  
        this.isTimerPlaying = true;
  
        this.audio.pause();
  
        this.updateBar(e.pageX);
  
      },
  
      prevTrack() {
  
        this.transitionName = "scale-in";
  
        this.isShowCover = false;
  
        if (this.currentTrackIndex > 0) {
  
          this.currentTrackIndex--;
  
        } else {
  
          this.currentTrackIndex = this.tracks.length - 1;
  
        }
  
        this.currentTrack = this.tracks[this.currentTrackIndex];
  
        this.resetPlayer();
  
      },
  
      nextTrack() {
  
        this.transitionName = "scale-out";
  
        this.isShowCover = false;
  
        if (this.currentTrackIndex < this.tracks.length - 1) {
  
          this.currentTrackIndex++;
  
        } else {
  
          this.currentTrackIndex = 0;
  
        }
  
        this.currentTrack = this.tracks[this.currentTrackIndex];
  
        this.resetPlayer();
  
      },
  
      resetPlayer() {
  
        this.barWidth = 0;
  
        this.circleLeft = 0;
  
        this.audio.currentTime = 0;
  
        this.audio.src = this.currentTrack.source;
  
        setTimeout(() => {
  
          if(this.isTimerPlaying) {
  
            this.audio.play();
  
          } else {
  
            this.audio.pause();
  
          }
  
        }, 300);
  
      },
  
      favorite() {
  
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
  
          this.currentTrackIndex
  
        ].favorited;
  
      }
  
    },
  
    created() {
  
      let vm = this;
  
      this.currentTrack = this.tracks[0];
  
      this.audio = new Audio();
  
      this.audio.src = this.currentTrack.source;
  
      this.audio.ontimeupdate = function() {
  
        vm.generateTime();
  
      };
  
      this.audio.onloadedmetadata = function() {
  
        vm.generateTime();
  
      };
  
      this.audio.onended = function() {
  
        vm.nextTrack();
  
        this.isTimerPlaying = true;
  
      };
  
      // this is optional (for preload covers)
  
      for (let index = 0; index < this.tracks.length; index++) {
  
        const element = this.tracks[index];
  
        let link = document.createElement('link');
  
        link.rel = "prefetch";
  
        link.href = element.cover;
  
        link.as = "image"
  
        document.head.appendChild(link)
  
      }
  
    }
  
  });
  
  