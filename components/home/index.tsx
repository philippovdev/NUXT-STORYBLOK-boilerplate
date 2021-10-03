import { Component, Vue } from 'nuxt-property-decorator'
const s = require('./home.css?module')

@Component
export default class Index extends Vue {
  render () {
    return (
      <div class={s.home}>
        <p class={s.nested}>123 nested</p>
        Home Component
      </div>
    )
  }
}
