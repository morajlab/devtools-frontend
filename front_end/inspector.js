// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './devtools_app.js';
import './screencast/screencast-meta.js';
import * as Startup from './startup/startup.js';

Startup.RuntimeInstantiator.startApplication('inspector');
