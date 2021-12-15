class FuncB {
  static init () {
    const box = document.createElement('div')
    box.innerHTML = 'func-b'
    console.log('func-b')
    return box
  }
}

export default /*#__PURE__*/ FuncB.init()
