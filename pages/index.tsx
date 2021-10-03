import { Vue, Component } from 'nuxt-property-decorator'
import Home from '~/components/home'

@Component
export default class App extends Vue {
  render () {
    return (
      <div id="app">
        <Home />
      </div>
    )
  }
}
