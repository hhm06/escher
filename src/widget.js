/* global ESCHER_VERSION */

import { default as Builder } from './Builder'
import { select as d3Select } from 'd3-selection'
import _ from 'underscore'

const version = ESCHER_VERSION

/**
 * @jupyter-widgets/base is optional, so only initialize if it's called
 */
export default function initializeJupyterWidget () {
  const base = require('@jupyter-widgets/base')

  class EscherMapView extends base.DOMWidgetView {
    render () {
      const sel = d3Select(this.el).append('div')
      sel.style('height', `${this.model.get('height')}px`)
      Builder(null, null, null, sel, {})
    }
  }

  class EscherMapModel extends base.DOMWidgetModel {
    defaults () {
      return _.extend(super.defaults(), {
        _model_name: 'EscherMapModel',
        _view_name: 'EscherMapView',
        _model_module: 'escher',
        _view_module: 'escher',
        _model_module_version: version,
        _view_module_version: version,
        height: 500
      })
    }
  }

  return { EscherMapView, EscherMapModel }
}
