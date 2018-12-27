// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {clipboard} = require('electron')
const Vue = require('vue/dist/vue.js')
const moment = require('moment')

const App = new Vue({
  el: '#app',
  data: {
    title: 'AligatorClips',
    history: []
  },
  mounted() {
    const time = moment(new Date()).format('h:mma MMM Do, YYYY')
    this.history.push({text: clipboard.readText(), time: time})
    setInterval(this.checkClipboard, 500)
  },
  computed: {
    revHistory() {
      return this.history.slice().reverse()
    }
  },
  methods: {
    checkClipboard() {
      const text = clipboard.readText()
      if(this.history[this.history.length - 1].text !== text) {
        const time = moment(new Date()).format('h:mma MMM Do, YYYY')
        this.history.push({text, time: time})

      }
    },
    itemClicked(item) {
      if(item.text !== this.history[this.history.length - 1].text) {
        const index = this.history.indexOf(item)
        clipboard.writeText(item.text)
        window.scrollTo(0, 0)
        this.history.splice(index, 1)
      }
    }
  }
})