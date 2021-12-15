class FuncA {
  static init () {
    const box = document.createElement('div')
    box.innerHTML = 'func-a'
    console.log('func-a')
    return box
  }
}

export default /*#__PURE__*/ FuncA.init()
