import '@/styles/global.css'

import * as Utils from '@/utils'

const fragment = document.createDocumentFragment()

fragment.append(
  Utils.FuncA
)

const app = document.querySelector('#app')
app.appendChild(fragment)

