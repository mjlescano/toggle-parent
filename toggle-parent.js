;(function(){

  var o = typeof module != 'undefined' ? require('dom') : jQuery

  /**
   * Expose `ToggleParent`.
   */

  if (typeof module != 'undefined') module.exports = ToggleParent;
  else if (typeof define == 'function' && typeof define.amd == 'object') define(ToggleParent);
  else window.ToggleParent = ToggleParent;

  function parent(el) {
    return el.parentNode ? el.parentNode : el.parent()
  }

  function ToggleParent(btn, opts) {
    if (!(this instanceof ToggleParent)) return new ToggleParent(btn, opts)

    this.btn = o(btn)
    this.options = opts || {}

    if (!this.options.parent) this.options.parent = parent(btn)
    if (!this.options.toggleClass) this.options.toggleClass = 'active'

    this.parent = o(this.options.parent)

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.toggle = this.toggle.bind(this)

    this.init()
  }

  ToggleParent.prototype.backdrop = null
  ToggleParent.prototype.showing = false

  ToggleParent.prototype.init = function init(){
    this.btn.on('click', this.toggle)
  }

  ToggleParent.prototype.destroy = function destroy(){
    this.btn.off('click', this.toggle)
    this.hide()
  }

  ToggleParent.prototype.show = function show(){
    if (this.showing) return

    this.backdrop = o('<div class="toggle-parent-backdrop"></div>')
      .insertAfter(this.parent)
      .on('click', this.hide)

    this.parent.addClass(this.options.toggleClass)

    this.showing = true
    return this
  }

  ToggleParent.prototype.hide = function hide(){
    if (!this.showing) return

    this.backdrop
      .off('click', this.hide)
      .remove()
    this.backdrop = null

    this.parent.removeClass(this.options.toggleClass)

    this.showing = false
    return this
  }

  ToggleParent.prototype.toggle = function toggle(){
    return this.showing ? this.hide() : this.show()
  }
})();