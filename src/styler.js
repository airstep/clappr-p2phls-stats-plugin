// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import { $ } from 'clappr'
import { _ } from 'underscore'
//import JST from '.././jst'

export let Styler = {
  getStyleFor(name, options) {
    options = options || {};
    return $('<style></style>').html(_.template(JST.CSS[name])(options));
  }
}
