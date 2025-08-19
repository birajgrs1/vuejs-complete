export default {
  install(app, options = {}) {
    const defaultConfig = {
      position: 'top',
      delay: 300,
      permissionResolver: () => Promise.resolve(true),
      ...options
    }

    const tooltipEl = document.createElement('div')
    tooltipEl.className = 'v-smart-tooltip'
    document.body.appendChild(tooltipEl)

    let timeoutId = null

    const showTooltip = (event, content, permissionKey) => {
      clearTimeout(timeoutId)

      defaultConfig.permissionResolver(permissionKey)
        .then(hasPermission => {
          if (!hasPermission) return

          tooltipEl.innerHTML = content
          tooltipEl.style.display = 'block'
          positionTooltip(event)
        })
        .catch(() => {})
    }

    const hideTooltip = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        tooltipEl.style.display = 'none'
      }, defaultConfig.delay)
    }

    const positionTooltip = (event) => {
      const { pageX, pageY } = event
      tooltipEl.style.top = `${pageY - tooltipEl.offsetHeight - 10}px`
      tooltipEl.style.left = `${pageX - tooltipEl.offsetWidth / 2}px`
    }

    app.directive('smart-tooltip', {
      mounted(el, binding) {
        const { value } = binding
        const content = value.content || ''
        const permissionKey = value.permission || ''

        const onEnter = (e) => showTooltip(e, content, permissionKey)
        const onLeave = hideTooltip
        const onMove = positionTooltip

        el.__tooltipHandlers__ = { onEnter, onLeave, onMove }

        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
        el.addEventListener('mousemove', onMove)
      },
      beforeUnmount(el) {
        const { onEnter, onLeave, onMove } = el.__tooltipHandlers__ || {}
        if (onEnter) el.removeEventListener('mouseenter', onEnter)
        if (onLeave) el.removeEventListener('mouseleave', onLeave)
        if (onMove) el.removeEventListener('mousemove', onMove)
        delete el.__tooltipHandlers__
      }
    })
  }
}
