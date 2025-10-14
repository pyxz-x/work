delete __dirname
delete __filename
var globalvalue = {
    obj_getOwnPropertyNames: {
        performance: [
            "timeOrigin",
            "onresourcetimingbufferfull",
            "clearMarks",
            "clearMeasures",
            "clearResourceTimings",
            "getEntries",
            "getEntriesByName",
            "getEntriesByType",
            "mark",
            "measure",
            "setResourceTimingBufferSize",
            "toJSON",
            "now",
            "constructor",
            "timing",
            "navigation",
            "memory",
            "eventCounts",
            "addEventListener",
            "dispatchEvent",
            "removeEventListener",
            "when",
            "__defineGetter__",
            "__defineSetter__",
            "hasOwnProperty",
            "__lookupGetter__",
            "__lookupSetter__",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toString",
            "valueOf",
            "__proto__",
            "toLocaleString"
        ],
        crypto: [
            "getRandomValues",
            "constructor",
            "subtle"
        ],
        contentWindow: [
            "Object",
            "Function",
            "Array",
            "Number",
            "parseFloat",
            "parseInt",
            "Infinity",
            "NaN",
            "undefined",
            "Boolean",
            "String",
            "Symbol",
            "Date",
            "Promise",
            "RegExp",
            "Error",
            "AggregateError",
            "EvalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError",
            "globalThis",
            "JSON",
            "Math",
            "Intl",
            "ArrayBuffer",
            "Atomics",
            "Uint8Array",
            "Int8Array",
            "Uint16Array",
            "Int16Array",
            "Uint32Array",
            "Int32Array",
            "BigUint64Array",
            "BigInt64Array",
            "Uint8ClampedArray",
            "Float32Array",
            "Float64Array",
            "DataView",
            "Map",
            "BigInt",
            "Set",
            "Iterator",
            "WeakMap",
            "WeakSet",
            "Proxy",
            "Reflect",
            "FinalizationRegistry",
            "WeakRef",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
            "eval",
            "isFinite",
            "isNaN",
            "console",
            "Option",
            "Image",
            "Audio",
            "webkitURL",
            "webkitRTCPeerConnection",
            "webkitMediaStream",
            "WebKitMutationObserver",
            "WebKitCSSMatrix",
            "XSLTProcessor",
            "XPathResult",
            "XPathExpression",
            "XPathEvaluator",
            "XMLSerializer",
            "XMLHttpRequestUpload",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequest",
            "XMLDocument",
            "WritableStreamDefaultWriter",
            "WritableStreamDefaultController",
            "WritableStream",
            "Worker",
            "WindowControlsOverlayGeometryChangeEvent",
            "WindowControlsOverlay",
            "Window",
            "WheelEvent",
            "WebSocket",
            "WebGLVertexArrayObject",
            "WebGLUniformLocation",
            "WebGLTransformFeedback",
            "WebGLTexture",
            "WebGLSync",
            "WebGLShaderPrecisionFormat",
            "WebGLShader",
            "WebGLSampler",
            "WebGLRenderingContext",
            "WebGLRenderbuffer",
            "WebGLQuery",
            "WebGLProgram",
            "WebGLObject",
            "WebGLFramebuffer",
            "WebGLContextEvent",
            "WebGLBuffer",
            "WebGLActiveInfo",
            "WebGL2RenderingContext",
            "WaveShaperNode",
            "VisualViewport",
            "VisibilityStateEntry",
            "VirtualKeyboardGeometryChangeEvent",
            "ViewTransitionTypeSet",
            "ViewTransition",
            "ViewTimeline",
            "VideoPlaybackQuality",
            "VideoFrame",
            "VideoColorSpace",
            "ValidityState",
            "VTTCue",
            "UserActivation",
            "URLSearchParams",
            "URLPattern",
            "URL",
            "UIEvent",
            "TrustedTypePolicyFactory",
            "TrustedTypePolicy",
            "TrustedScriptURL",
            "TrustedScript",
            "TrustedHTML",
            "TreeWalker",
            "TransitionEvent",
            "TransformStreamDefaultController",
            "TransformStream",
            "TrackEvent",
            "TouchList",
            "TouchEvent",
            "Touch",
            "ToggleEvent",
            "TimeRanges",
            "TextUpdateEvent",
            "TextTrackList",
            "TextTrackCueList",
            "TextTrackCue",
            "TextTrack",
            "TextMetrics",
            "TextFormatUpdateEvent",
            "TextFormat",
            "TextEvent",
            "TextEncoderStream",
            "TextEncoder",
            "TextDecoderStream",
            "TextDecoder",
            "Text",
            "TaskSignal",
            "TaskPriorityChangeEvent",
            "TaskController",
            "TaskAttributionTiming",
            "SyncManager",
            "Subscriber",
            "SubmitEvent",
            "StyleSheetList",
            "StyleSheet",
            "StylePropertyMapReadOnly",
            "StylePropertyMap",
            "StorageEvent",
            "Storage",
            "StereoPannerNode",
            "StaticRange",
            "SourceBufferList",
            "SourceBuffer",
            "ShadowRoot",
            "Selection",
            "SecurityPolicyViolationEvent",
            "ScrollTimeline",
            "ScriptProcessorNode",
            "ScreenOrientation",
            "Screen",
            "Scheduling",
            "Scheduler",
            "SVGViewElement",
            "SVGUseElement",
            "SVGUnitTypes",
            "SVGTransformList",
            "SVGTransform",
            "SVGTitleElement",
            "SVGTextPositioningElement",
            "SVGTextPathElement",
            "SVGTextElement",
            "SVGTextContentElement",
            "SVGTSpanElement",
            "SVGSymbolElement",
            "SVGSwitchElement",
            "SVGStyleElement",
            "SVGStringList",
            "SVGStopElement",
            "SVGSetElement",
            "SVGScriptElement",
            "SVGSVGElement",
            "SVGRectElement",
            "SVGRect",
            "SVGRadialGradientElement",
            "SVGPreserveAspectRatio",
            "SVGPolylineElement",
            "SVGPolygonElement",
            "SVGPointList",
            "SVGPoint",
            "SVGPatternElement",
            "SVGPathElement",
            "SVGNumberList",
            "SVGNumber",
            "SVGMetadataElement",
            "SVGMatrix",
            "SVGMaskElement",
            "SVGMarkerElement",
            "SVGMPathElement",
            "SVGLinearGradientElement",
            "SVGLineElement",
            "SVGLengthList",
            "SVGLength",
            "SVGImageElement",
            "SVGGraphicsElement",
            "SVGGradientElement",
            "SVGGeometryElement",
            "SVGGElement",
            "SVGForeignObjectElement",
            "SVGFilterElement",
            "SVGFETurbulenceElement",
            "SVGFETileElement",
            "SVGFESpotLightElement",
            "SVGFESpecularLightingElement",
            "SVGFEPointLightElement",
            "SVGFEOffsetElement",
            "SVGFEMorphologyElement",
            "SVGFEMergeNodeElement",
            "SVGFEMergeElement",
            "SVGFEImageElement",
            "SVGFEGaussianBlurElement",
            "SVGFEFuncRElement",
            "SVGFEFuncGElement",
            "SVGFEFuncBElement",
            "SVGFEFuncAElement",
            "SVGFEFloodElement",
            "SVGFEDropShadowElement",
            "SVGFEDistantLightElement",
            "SVGFEDisplacementMapElement",
            "SVGFEDiffuseLightingElement",
            "SVGFEConvolveMatrixElement",
            "SVGFECompositeElement",
            "SVGFEComponentTransferElement",
            "SVGFEColorMatrixElement",
            "SVGFEBlendElement",
            "SVGEllipseElement",
            "SVGElement",
            "SVGDescElement",
            "SVGDefsElement",
            "SVGComponentTransferFunctionElement",
            "SVGClipPathElement",
            "SVGCircleElement",
            "SVGAnimationElement",
            "SVGAnimatedTransformList",
            "SVGAnimatedString",
            "SVGAnimatedRect",
            "SVGAnimatedPreserveAspectRatio",
            "SVGAnimatedNumberList",
            "SVGAnimatedNumber",
            "SVGAnimatedLengthList",
            "SVGAnimatedLength",
            "SVGAnimatedInteger",
            "SVGAnimatedEnumeration",
            "SVGAnimatedBoolean",
            "SVGAnimatedAngle",
            "SVGAnimateTransformElement",
            "SVGAnimateMotionElement",
            "SVGAnimateElement",
            "SVGAngle",
            "SVGAElement",
            "Response",
            "ResizeObserverSize",
            "ResizeObserverEntry",
            "ResizeObserver",
            "Request",
            "ReportingObserver",
            "ReportBody",
            "ReadableStreamDefaultReader",
            "ReadableStreamDefaultController",
            "ReadableStreamBYOBRequest",
            "ReadableStreamBYOBReader",
            "ReadableStream",
            "ReadableByteStreamController",
            "Range",
            "RadioNodeList",
            "RTCTrackEvent",
            "RTCStatsReport",
            "RTCSessionDescription",
            "RTCSctpTransport",
            "RTCRtpTransceiver",
            "RTCRtpSender",
            "RTCRtpReceiver",
            "RTCPeerConnectionIceEvent",
            "RTCPeerConnectionIceErrorEvent",
            "RTCPeerConnection",
            "RTCIceTransport",
            "RTCIceCandidate",
            "RTCErrorEvent",
            "RTCError",
            "RTCEncodedVideoFrame",
            "RTCEncodedAudioFrame",
            "RTCDtlsTransport",
            "RTCDataChannelEvent",
            "RTCDTMFToneChangeEvent",
            "RTCDTMFSender",
            "RTCCertificate",
            "PromiseRejectionEvent",
            "ProgressEvent",
            "Profiler",
            "ProcessingInstruction",
            "PopStateEvent",
            "PointerEvent",
            "PluginArray",
            "Plugin",
            "PictureInPictureWindow",
            "PictureInPictureEvent",
            "PeriodicWave",
            "PerformanceTiming",
            "PerformanceServerTiming",
            "PerformanceScriptTiming",
            "PerformanceResourceTiming",
            "PerformancePaintTiming",
            "PerformanceObserverEntryList",
            "PerformanceObserver",
            "PerformanceNavigationTiming",
            "PerformanceNavigation",
            "PerformanceMeasure",
            "PerformanceMark",
            "PerformanceLongTaskTiming",
            "PerformanceLongAnimationFrameTiming",
            "PerformanceEventTiming",
            "PerformanceEntry",
            "PerformanceElementTiming",
            "Performance",
            "Path2D",
            "PannerNode",
            "PageTransitionEvent",
            "OverconstrainedError",
            "OscillatorNode",
            "OffscreenCanvasRenderingContext2D",
            "OffscreenCanvas",
            "OfflineAudioContext",
            "OfflineAudioCompletionEvent",
            "Observable",
            "NodeList",
            "NodeIterator",
            "NodeFilter",
            "Node",
            "NetworkInformation",
            "NavigatorUAData",
            "Navigator",
            "NavigationTransition",
            "NavigationHistoryEntry",
            "NavigationDestination",
            "NavigationCurrentEntryChangeEvent",
            "NavigationActivation",
            "Navigation",
            "NavigateEvent",
            "NamedNodeMap",
            "MutationRecord",
            "MutationObserver",
            "MouseEvent",
            "MimeTypeArray",
            "MimeType",
            "MessagePort",
            "MessageEvent",
            "MessageChannel",
            "MediaStreamTrackVideoStats",
            "MediaStreamTrackProcessor",
            "MediaStreamTrackGenerator",
            "MediaStreamTrackEvent",
            "MediaStreamTrackAudioStats",
            "MediaStreamTrack",
            "MediaStreamEvent",
            "MediaStreamAudioSourceNode",
            "MediaStreamAudioDestinationNode",
            "MediaStream",
            "MediaSourceHandle",
            "MediaSource",
            "MediaRecorder",
            "MediaQueryListEvent",
            "MediaQueryList",
            "MediaList",
            "MediaError",
            "MediaEncryptedEvent",
            "MediaElementAudioSourceNode",
            "MediaCapabilities",
            "MathMLElement",
            "Location",
            "LayoutShiftAttribution",
            "LayoutShift",
            "LargestContentfulPaint",
            "KeyframeEffect",
            "KeyboardEvent",
            "IntersectionObserverEntry",
            "IntersectionObserver",
            "InputEvent",
            "InputDeviceInfo",
            "InputDeviceCapabilities",
            "Ink",
            "ImageData",
            "ImageBitmapRenderingContext",
            "ImageBitmap",
            "IdleDeadline",
            "IIRFilterNode",
            "IDBVersionChangeEvent",
            "IDBTransaction",
            "IDBRequest",
            "IDBOpenDBRequest",
            "IDBObjectStore",
            "IDBKeyRange",
            "IDBIndex",
            "IDBFactory",
            "IDBDatabase",
            "IDBCursorWithValue",
            "IDBCursor",
            "History",
            "HighlightRegistry",
            "Highlight",
            "Headers",
            "HashChangeEvent",
            "HTMLVideoElement",
            "HTMLUnknownElement",
            "HTMLUListElement",
            "HTMLTrackElement",
            "HTMLTitleElement",
            "HTMLTimeElement",
            "HTMLTextAreaElement",
            "HTMLTemplateElement",
            "HTMLTableSectionElement",
            "HTMLTableRowElement",
            "HTMLTableElement",
            "HTMLTableColElement",
            "HTMLTableCellElement",
            "HTMLTableCaptionElement",
            "HTMLStyleElement",
            "HTMLSpanElement",
            "HTMLSourceElement",
            "HTMLSlotElement",
            "HTMLSelectElement",
            "HTMLScriptElement",
            "HTMLQuoteElement",
            "HTMLProgressElement",
            "HTMLPreElement",
            "HTMLPictureElement",
            "HTMLParamElement",
            "HTMLParagraphElement",
            "HTMLOutputElement",
            "HTMLOptionsCollection",
            "HTMLOptionElement",
            "HTMLOptGroupElement",
            "HTMLObjectElement",
            "HTMLOListElement",
            "HTMLModElement",
            "HTMLMeterElement",
            "HTMLMetaElement",
            "HTMLMenuElement",
            "HTMLMediaElement",
            "HTMLMarqueeElement",
            "HTMLMapElement",
            "HTMLLinkElement",
            "HTMLLegendElement",
            "HTMLLabelElement",
            "HTMLLIElement",
            "HTMLInputElement",
            "HTMLImageElement",
            "HTMLIFrameElement",
            "HTMLHtmlElement",
            "HTMLHeadingElement",
            "HTMLHeadElement",
            "HTMLHRElement",
            "HTMLFrameSetElement",
            "HTMLFrameElement",
            "HTMLFormElement",
            "HTMLFormControlsCollection",
            "HTMLFontElement",
            "HTMLFieldSetElement",
            "HTMLEmbedElement",
            "HTMLElement",
            "HTMLDocument",
            "HTMLDivElement",
            "HTMLDirectoryElement",
            "HTMLDialogElement",
            "HTMLDetailsElement",
            "HTMLDataListElement",
            "HTMLDataElement",
            "HTMLDListElement",
            "HTMLCollection",
            "HTMLCanvasElement",
            "HTMLButtonElement",
            "HTMLBodyElement",
            "HTMLBaseElement",
            "HTMLBRElement",
            "HTMLAudioElement",
            "HTMLAreaElement",
            "HTMLAnchorElement",
            "HTMLAllCollection",
            "GeolocationPositionError",
            "GeolocationPosition",
            "GeolocationCoordinates",
            "Geolocation",
            "GamepadHapticActuator",
            "GamepadEvent",
            "GamepadButton",
            "Gamepad",
            "GainNode",
            "FormDataEvent",
            "FormData",
            "FontFaceSetLoadEvent",
            "FontFace",
            "FocusEvent",
            "FileReader",
            "FileList",
            "File",
            "FeaturePolicy",
            "External",
            "EventTarget",
            "EventSource",
            "EventCounts",
            "Event",
            "ErrorEvent",
            "EncodedVideoChunk",
            "EncodedAudioChunk",
            "ElementInternals",
            "Element",
            "EditContext",
            "DynamicsCompressorNode",
            "DragEvent",
            "DocumentType",
            "DocumentTimeline",
            "DocumentFragment",
            "Document",
            "DelegatedInkTrailPresenter",
            "DelayNode",
            "DecompressionStream",
            "DataTransferItemList",
            "DataTransferItem",
            "DataTransfer",
            "DOMTokenList",
            "DOMStringMap",
            "DOMStringList",
            "DOMRectReadOnly",
            "DOMRectList",
            "DOMRect",
            "DOMQuad",
            "DOMPointReadOnly",
            "DOMPoint",
            "DOMParser",
            "DOMMatrixReadOnly",
            "DOMMatrix",
            "DOMImplementation",
            "DOMException",
            "DOMError",
            "CustomStateSet",
            "CustomEvent",
            "CustomElementRegistry",
            "Crypto",
            "CountQueuingStrategy",
            "ConvolverNode",
            "ContentVisibilityAutoStateChangeEvent",
            "ConstantSourceNode",
            "CompressionStream",
            "CompositionEvent",
            "Comment",
            "CommandEvent",
            "CloseWatcher",
            "CloseEvent",
            "ClipboardEvent",
            "CharacterData",
            "CharacterBoundsUpdateEvent",
            "ChannelSplitterNode",
            "ChannelMergerNode",
            "CaretPosition",
            "CanvasRenderingContext2D",
            "CanvasPattern",
            "CanvasGradient",
            "CanvasCaptureMediaStreamTrack",
            "CSSViewTransitionRule",
            "CSSVariableReferenceValue",
            "CSSUnparsedValue",
            "CSSUnitValue",
            "CSSTranslate",
            "CSSTransition",
            "CSSTransformValue",
            "CSSTransformComponent",
            "CSSSupportsRule",
            "CSSStyleValue",
            "CSSStyleSheet",
            "CSSStyleRule",
            "CSSStyleDeclaration",
            "CSSStartingStyleRule",
            "CSSSkewY",
            "CSSSkewX",
            "CSSSkew",
            "CSSScopeRule",
            "CSSScale",
            "CSSRuleList",
            "CSSRule",
            "CSSRotate",
            "CSSPropertyRule",
            "CSSPositionValue",
            "CSSPositionTryRule",
            "CSSPositionTryDescriptors",
            "CSSPerspective",
            "CSSPageRule",
            "CSSNumericValue",
            "CSSNumericArray",
            "CSSNestedDeclarations",
            "CSSNamespaceRule",
            "CSSMediaRule",
            "CSSMatrixComponent",
            "CSSMathValue",
            "CSSMathSum",
            "CSSMathProduct",
            "CSSMathNegate",
            "CSSMathMin",
            "CSSMathMax",
            "CSSMathInvert",
            "CSSMathClamp",
            "CSSMarginRule",
            "CSSLayerStatementRule",
            "CSSLayerBlockRule",
            "CSSKeywordValue",
            "CSSKeyframesRule",
            "CSSKeyframeRule",
            "CSSImportRule",
            "CSSImageValue",
            "CSSGroupingRule",
            "CSSFontPaletteValuesRule",
            "CSSFontFaceRule",
            "CSSCounterStyleRule",
            "CSSContainerRule",
            "CSSConditionRule",
            "CSSAnimation",
            "CSS",
            "CSPViolationReportBody",
            "CDATASection",
            "ByteLengthQueuingStrategy",
            "BrowserCaptureMediaStreamTrack",
            "BroadcastChannel",
            "BlobEvent",
            "Blob",
            "BiquadFilterNode",
            "BeforeUnloadEvent",
            "BeforeInstallPromptEvent",
            "BaseAudioContext",
            "BarProp",
            "AudioWorkletNode",
            "AudioSinkInfo",
            "AudioScheduledSourceNode",
            "AudioProcessingEvent",
            "AudioParamMap",
            "AudioParam",
            "AudioNode",
            "AudioListener",
            "AudioDestinationNode",
            "AudioData",
            "AudioContext",
            "AudioBufferSourceNode",
            "AudioBuffer",
            "Attr",
            "AnimationTimeline",
            "AnimationPlaybackEvent",
            "AnimationEvent",
            "AnimationEffect",
            "Animation",
            "AnalyserNode",
            "AbstractRange",
            "AbortSignal",
            "AbortController",
            "window",
            "self",
            "document",
            "name",
            "location",
            "customElements",
            "history",
            "navigation",
            "locationbar",
            "menubar",
            "personalbar",
            "scrollbars",
            "statusbar",
            "toolbar",
            "status",
            "closed",
            "frames",
            "length",
            "top",
            "opener",
            "parent",
            "frameElement",
            "navigator",
            "origin",
            "external",
            "screen",
            "innerWidth",
            "innerHeight",
            "scrollX",
            "pageXOffset",
            "scrollY",
            "pageYOffset",
            "visualViewport",
            "screenX",
            "screenY",
            "outerWidth",
            "outerHeight",
            "devicePixelRatio",
            "event",
            "clientInformation",
            "offscreenBuffering",
            "screenLeft",
            "screenTop",
            "styleMedia",
            "onsearch",
            "trustedTypes",
            "performance",
            "onappinstalled",
            "onbeforeinstallprompt",
            "crypto",
            "indexedDB",
            "sessionStorage",
            "localStorage",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncommand",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onscrollend",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onhashchange",
            "onlanguagechange",
            "onmessage",
            "onmessageerror",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpopstate",
            "onrejectionhandled",
            "onstorage",
            "onunhandledrejection",
            "onunload",
            "isSecureContext",
            "crossOriginIsolated",
            "scheduler",
            "alert",
            "atob",
            "blur",
            "btoa",
            "cancelAnimationFrame",
            "cancelIdleCallback",
            "captureEvents",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "createImageBitmap",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "postMessage",
            "print",
            "prompt",
            "queueMicrotask",
            "releaseEvents",
            "reportError",
            "requestAnimationFrame",
            "requestIdleCallback",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
            "structuredClone",
            "webkitCancelAnimationFrame",
            "webkitRequestAnimationFrame",
            "SuppressedError",
            "DisposableStack",
            "AsyncDisposableStack",
            "Float16Array",
            "chrome",
            "WebAssembly",
            "caches",
            "cookieStore",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "documentPictureInPicture",
            "sharedStorage",
            "AbsoluteOrientationSensor",
            "Accelerometer",
            "AudioDecoder",
            "AudioEncoder",
            "AudioWorklet",
            "BatteryManager",
            "Cache",
            "CacheStorage",
            "Clipboard",
            "ClipboardItem",
            "CookieChangeEvent",
            "CookieStore",
            "CookieStoreManager",
            "Credential",
            "CredentialsContainer",
            "CryptoKey",
            "DeviceMotionEvent",
            "DeviceMotionEventAcceleration",
            "DeviceMotionEventRotationRate",
            "DeviceOrientationEvent",
            "FederatedCredential",
            "GPU",
            "GPUAdapter",
            "GPUAdapterInfo",
            "GPUBindGroup",
            "GPUBindGroupLayout",
            "GPUBuffer",
            "GPUBufferUsage",
            "GPUCanvasContext",
            "GPUColorWrite",
            "GPUCommandBuffer",
            "GPUCommandEncoder",
            "GPUCompilationInfo",
            "GPUCompilationMessage",
            "GPUComputePassEncoder",
            "GPUComputePipeline",
            "GPUDevice",
            "GPUDeviceLostInfo",
            "GPUError",
            "GPUExternalTexture",
            "GPUInternalError",
            "GPUMapMode",
            "GPUOutOfMemoryError",
            "GPUPipelineError",
            "GPUPipelineLayout",
            "GPUQuerySet",
            "GPUQueue",
            "GPURenderBundle",
            "GPURenderBundleEncoder",
            "GPURenderPassEncoder",
            "GPURenderPipeline",
            "GPUSampler",
            "GPUShaderModule",
            "GPUShaderStage",
            "GPUSupportedFeatures",
            "GPUSupportedLimits",
            "GPUTexture",
            "GPUTextureUsage",
            "GPUTextureView",
            "GPUUncapturedErrorEvent",
            "GPUValidationError",
            "GravitySensor",
            "Gyroscope",
            "IdleDetector",
            "ImageCapture",
            "ImageDecoder",
            "ImageTrack",
            "ImageTrackList",
            "Keyboard",
            "KeyboardLayoutMap",
            "LinearAccelerationSensor",
            "MIDIAccess",
            "MIDIConnectionEvent",
            "MIDIInput",
            "MIDIInputMap",
            "MIDIMessageEvent",
            "MIDIOutput",
            "MIDIOutputMap",
            "MIDIPort",
            "MediaDeviceInfo",
            "MediaDevices",
            "MediaKeyMessageEvent",
            "MediaKeySession",
            "MediaKeyStatusMap",
            "MediaKeySystemAccess",
            "MediaKeys",
            "NavigationPreloadManager",
            "NavigatorManagedData",
            "OrientationSensor",
            "PasswordCredential",
            "ProtectedAudience",
            "RelativeOrientationSensor",
            "ScreenDetailed",
            "ScreenDetails",
            "Sensor",
            "SensorErrorEvent",
            "ServiceWorkerRegistration",
            "StorageManager",
            "SubtleCrypto",
            "VideoDecoder",
            "VideoEncoder",
            "VirtualKeyboard",
            "WGSLLanguageFeatures",
            "WebTransport",
            "WebTransportBidirectionalStream",
            "WebTransportDatagramDuplexStream",
            "WebTransportError",
            "Worklet",
            "XRDOMOverlayState",
            "XRLayer",
            "XRWebGLBinding",
            "AuthenticatorAssertionResponse",
            "AuthenticatorAttestationResponse",
            "AuthenticatorResponse",
            "PublicKeyCredential",
            "BarcodeDetector",
            "Bluetooth",
            "BluetoothCharacteristicProperties",
            "BluetoothDevice",
            "BluetoothRemoteGATTCharacteristic",
            "BluetoothRemoteGATTDescriptor",
            "BluetoothRemoteGATTServer",
            "BluetoothRemoteGATTService",
            "CaptureController",
            "CreateMonitor",
            "DevicePosture",
            "DocumentPictureInPicture",
            "EyeDropper",
            "FetchLaterResult",
            "FileSystemDirectoryHandle",
            "FileSystemFileHandle",
            "FileSystemHandle",
            "FileSystemWritableFileStream",
            "FileSystemObserver",
            "FontData",
            "FragmentDirective",
            "HID",
            "HIDConnectionEvent",
            "HIDDevice",
            "HIDInputReportEvent",
            "IdentityCredential",
            "IdentityCredentialError",
            "IdentityProvider",
            "NavigatorLogin",
            "LanguageDetector",
            "Lock",
            "LockManager",
            "ServiceWorker",
            "ServiceWorkerContainer",
            "NotRestoredReasonDetails",
            "NotRestoredReasons",
            "OTPCredential",
            "PaymentAddress",
            "PaymentRequest",
            "PaymentRequestUpdateEvent",
            "PaymentResponse",
            "PaymentManager",
            "PaymentMethodChangeEvent",
            "Presentation",
            "PresentationAvailability",
            "PresentationConnection",
            "PresentationConnectionAvailableEvent",
            "PresentationConnectionCloseEvent",
            "PresentationConnectionList",
            "PresentationReceiver",
            "PresentationRequest",
            "PressureObserver",
            "PressureRecord",
            "Serial",
            "SerialPort",
            "SharedWorker",
            "StorageBucket",
            "StorageBucketManager",
            "Summarizer",
            "Translator",
            "USB",
            "USBAlternateInterface",
            "USBConfiguration",
            "USBConnectionEvent",
            "USBDevice",
            "USBEndpoint",
            "USBInTransferResult",
            "USBInterface",
            "USBIsochronousInTransferPacket",
            "USBIsochronousInTransferResult",
            "USBIsochronousOutTransferPacket",
            "USBIsochronousOutTransferResult",
            "USBOutTransferResult",
            "WakeLock",
            "WakeLockSentinel",
            "XRAnchor",
            "XRAnchorSet",
            "XRBoundedReferenceSpace",
            "XRCPUDepthInformation",
            "XRCamera",
            "XRDepthInformation",
            "XRFrame",
            "XRHand",
            "XRHitTestResult",
            "XRHitTestSource",
            "XRInputSource",
            "XRInputSourceArray",
            "XRInputSourceEvent",
            "XRInputSourcesChangeEvent",
            "XRJointPose",
            "XRJointSpace",
            "XRLightEstimate",
            "XRLightProbe",
            "XRPose",
            "XRRay",
            "XRReferenceSpace",
            "XRReferenceSpaceEvent",
            "XRRenderState",
            "XRRigidTransform",
            "XRSession",
            "XRSessionEvent",
            "XRSpace",
            "XRSystem",
            "XRTransientInputHitTestResult",
            "XRTransientInputHitTestSource",
            "XRView",
            "XRViewerPose",
            "XRViewport",
            "XRWebGLDepthInformation",
            "XRWebGLLayer",
            "fetchLater",
            "getScreenDetails",
            "queryLocalFonts",
            "showDirectoryPicker",
            "showOpenFilePicker",
            "showSaveFilePicker",
            "originAgentCluster",
            "viewport",
            "onpageswap",
            "onpagereveal",
            "credentialless",
            "fence",
            "launchQueue",
            "speechSynthesis",
            "onscrollsnapchange",
            "onscrollsnapchanging",
            "BackgroundFetchManager",
            "BackgroundFetchRecord",
            "BackgroundFetchRegistration",
            "BluetoothUUID",
            "CSSFontFeatureValuesRule",
            "CSSFunctionDeclarations",
            "CSSFunctionDescriptors",
            "CSSFunctionRule",
            "ChapterInformation",
            "CropTarget",
            "DocumentPictureInPictureEvent",
            "Fence",
            "FencedFrameConfig",
            "HTMLFencedFrameElement",
            "HTMLSelectedContentElement",
            "IntegrityViolationReportBody",
            "LaunchParams",
            "LaunchQueue",
            "MediaMetadata",
            "MediaSession",
            "Notification",
            "PageRevealEvent",
            "PageSwapEvent",
            "PeriodicSyncManager",
            "PermissionStatus",
            "Permissions",
            "PushManager",
            "PushSubscription",
            "PushSubscriptionOptions",
            "QuotaExceededError",
            "RTCDataChannel",
            "RemotePlayback",
            "RestrictionTarget",
            "SharedStorage",
            "SharedStorageWorklet",
            "SharedStorageAppendMethod",
            "SharedStorageClearMethod",
            "SharedStorageDeleteMethod",
            "SharedStorageModifierMethod",
            "SharedStorageSetMethod",
            "SnapEvent",
            "SpeechGrammar",
            "SpeechGrammarList",
            "SpeechRecognition",
            "SpeechRecognitionErrorEvent",
            "SpeechRecognitionEvent",
            "SpeechSynthesis",
            "SpeechSynthesisErrorEvent",
            "SpeechSynthesisEvent",
            "SpeechSynthesisUtterance",
            "SpeechSynthesisVoice",
            "Viewport",
            "WebSocketError",
            "WebSocketStream",
            "webkitSpeechGrammar",
            "webkitSpeechGrammarList",
            "webkitSpeechRecognition",
            "webkitSpeechRecognitionError",
            "webkitSpeechRecognitionEvent",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL"
        ],
        window: [
            "0",
            "1",
            "2",
            "Object",
            "Function",
            "Array",
            "Number",
            "parseFloat",
            "parseInt",
            "Infinity",
            "NaN",
            "undefined",
            "Boolean",
            "String",
            "Symbol",
            "Date",
            "Promise",
            "RegExp",
            "Error",
            "AggregateError",
            "EvalError",
            "RangeError",
            "ReferenceError",
            "SyntaxError",
            "TypeError",
            "URIError",
            "globalThis",
            "JSON",
            "Math",
            "Intl",
            "ArrayBuffer",
            "Atomics",
            "Uint8Array",
            "Int8Array",
            "Uint16Array",
            "Int16Array",
            "Uint32Array",
            "Int32Array",
            "BigUint64Array",
            "BigInt64Array",
            "Uint8ClampedArray",
            "Float32Array",
            "Float64Array",
            "DataView",
            "Map",
            "BigInt",
            "Set",
            "Iterator",
            "WeakMap",
            "WeakSet",
            "Proxy",
            "Reflect",
            "FinalizationRegistry",
            "WeakRef",
            "decodeURI",
            "decodeURIComponent",
            "encodeURI",
            "encodeURIComponent",
            "escape",
            "unescape",
            "eval",
            "isFinite",
            "isNaN",
            "console",
            "Option",
            "Image",
            "Audio",
            "webkitURL",
            "webkitRTCPeerConnection",
            "webkitMediaStream",
            "WebKitMutationObserver",
            "WebKitCSSMatrix",
            "XSLTProcessor",
            "XPathResult",
            "XPathExpression",
            "XPathEvaluator",
            "XMLSerializer",
            "XMLHttpRequestUpload",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequest",
            "XMLDocument",
            "WritableStreamDefaultWriter",
            "WritableStreamDefaultController",
            "WritableStream",
            "Worker",
            "WindowControlsOverlayGeometryChangeEvent",
            "WindowControlsOverlay",
            "Window",
            "WheelEvent",
            "WebSocket",
            "WebGLVertexArrayObject",
            "WebGLUniformLocation",
            "WebGLTransformFeedback",
            "WebGLTexture",
            "WebGLSync",
            "WebGLShaderPrecisionFormat",
            "WebGLShader",
            "WebGLSampler",
            "WebGLRenderingContext",
            "WebGLRenderbuffer",
            "WebGLQuery",
            "WebGLProgram",
            "WebGLObject",
            "WebGLFramebuffer",
            "WebGLContextEvent",
            "WebGLBuffer",
            "WebGLActiveInfo",
            "WebGL2RenderingContext",
            "WaveShaperNode",
            "VisualViewport",
            "VisibilityStateEntry",
            "VirtualKeyboardGeometryChangeEvent",
            "ViewTransitionTypeSet",
            "ViewTransition",
            "ViewTimeline",
            "VideoPlaybackQuality",
            "VideoFrame",
            "VideoColorSpace",
            "ValidityState",
            "VTTCue",
            "UserActivation",
            "URLSearchParams",
            "URLPattern",
            "URL",
            "UIEvent",
            "TrustedTypePolicyFactory",
            "TrustedTypePolicy",
            "TrustedScriptURL",
            "TrustedScript",
            "TrustedHTML",
            "TreeWalker",
            "TransitionEvent",
            "TransformStreamDefaultController",
            "TransformStream",
            "TrackEvent",
            "TouchList",
            "TouchEvent",
            "Touch",
            "ToggleEvent",
            "TimeRanges",
            "TextUpdateEvent",
            "TextTrackList",
            "TextTrackCueList",
            "TextTrackCue",
            "TextTrack",
            "TextMetrics",
            "TextFormatUpdateEvent",
            "TextFormat",
            "TextEvent",
            "TextEncoderStream",
            "TextEncoder",
            "TextDecoderStream",
            "TextDecoder",
            "Text",
            "TaskSignal",
            "TaskPriorityChangeEvent",
            "TaskController",
            "TaskAttributionTiming",
            "SyncManager",
            "Subscriber",
            "SubmitEvent",
            "StyleSheetList",
            "StyleSheet",
            "StylePropertyMapReadOnly",
            "StylePropertyMap",
            "StorageEvent",
            "Storage",
            "StereoPannerNode",
            "StaticRange",
            "SourceBufferList",
            "SourceBuffer",
            "ShadowRoot",
            "Selection",
            "SecurityPolicyViolationEvent",
            "ScrollTimeline",
            "ScriptProcessorNode",
            "ScreenOrientation",
            "Screen",
            "Scheduling",
            "Scheduler",
            "SVGViewElement",
            "SVGUseElement",
            "SVGUnitTypes",
            "SVGTransformList",
            "SVGTransform",
            "SVGTitleElement",
            "SVGTextPositioningElement",
            "SVGTextPathElement",
            "SVGTextElement",
            "SVGTextContentElement",
            "SVGTSpanElement",
            "SVGSymbolElement",
            "SVGSwitchElement",
            "SVGStyleElement",
            "SVGStringList",
            "SVGStopElement",
            "SVGSetElement",
            "SVGScriptElement",
            "SVGSVGElement",
            "SVGRectElement",
            "SVGRect",
            "SVGRadialGradientElement",
            "SVGPreserveAspectRatio",
            "SVGPolylineElement",
            "SVGPolygonElement",
            "SVGPointList",
            "SVGPoint",
            "SVGPatternElement",
            "SVGPathElement",
            "SVGNumberList",
            "SVGNumber",
            "SVGMetadataElement",
            "SVGMatrix",
            "SVGMaskElement",
            "SVGMarkerElement",
            "SVGMPathElement",
            "SVGLinearGradientElement",
            "SVGLineElement",
            "SVGLengthList",
            "SVGLength",
            "SVGImageElement",
            "SVGGraphicsElement",
            "SVGGradientElement",
            "SVGGeometryElement",
            "SVGGElement",
            "SVGForeignObjectElement",
            "SVGFilterElement",
            "SVGFETurbulenceElement",
            "SVGFETileElement",
            "SVGFESpotLightElement",
            "SVGFESpecularLightingElement",
            "SVGFEPointLightElement",
            "SVGFEOffsetElement",
            "SVGFEMorphologyElement",
            "SVGFEMergeNodeElement",
            "SVGFEMergeElement",
            "SVGFEImageElement",
            "SVGFEGaussianBlurElement",
            "SVGFEFuncRElement",
            "SVGFEFuncGElement",
            "SVGFEFuncBElement",
            "SVGFEFuncAElement",
            "SVGFEFloodElement",
            "SVGFEDropShadowElement",
            "SVGFEDistantLightElement",
            "SVGFEDisplacementMapElement",
            "SVGFEDiffuseLightingElement",
            "SVGFEConvolveMatrixElement",
            "SVGFECompositeElement",
            "SVGFEComponentTransferElement",
            "SVGFEColorMatrixElement",
            "SVGFEBlendElement",
            "SVGEllipseElement",
            "SVGElement",
            "SVGDescElement",
            "SVGDefsElement",
            "SVGComponentTransferFunctionElement",
            "SVGClipPathElement",
            "SVGCircleElement",
            "SVGAnimationElement",
            "SVGAnimatedTransformList",
            "SVGAnimatedString",
            "SVGAnimatedRect",
            "SVGAnimatedPreserveAspectRatio",
            "SVGAnimatedNumberList",
            "SVGAnimatedNumber",
            "SVGAnimatedLengthList",
            "SVGAnimatedLength",
            "SVGAnimatedInteger",
            "SVGAnimatedEnumeration",
            "SVGAnimatedBoolean",
            "SVGAnimatedAngle",
            "SVGAnimateTransformElement",
            "SVGAnimateMotionElement",
            "SVGAnimateElement",
            "SVGAngle",
            "SVGAElement",
            "Response",
            "ResizeObserverSize",
            "ResizeObserverEntry",
            "ResizeObserver",
            "Request",
            "ReportingObserver",
            "ReportBody",
            "ReadableStreamDefaultReader",
            "ReadableStreamDefaultController",
            "ReadableStreamBYOBRequest",
            "ReadableStreamBYOBReader",
            "ReadableStream",
            "ReadableByteStreamController",
            "Range",
            "RadioNodeList",
            "RTCTrackEvent",
            "RTCStatsReport",
            "RTCSessionDescription",
            "RTCSctpTransport",
            "RTCRtpTransceiver",
            "RTCRtpSender",
            "RTCRtpReceiver",
            "RTCPeerConnectionIceEvent",
            "RTCPeerConnectionIceErrorEvent",
            "RTCPeerConnection",
            "RTCIceTransport",
            "RTCIceCandidate",
            "RTCErrorEvent",
            "RTCError",
            "RTCEncodedVideoFrame",
            "RTCEncodedAudioFrame",
            "RTCDtlsTransport",
            "RTCDataChannelEvent",
            "RTCDTMFToneChangeEvent",
            "RTCDTMFSender",
            "RTCCertificate",
            "PromiseRejectionEvent",
            "ProgressEvent",
            "Profiler",
            "ProcessingInstruction",
            "PopStateEvent",
            "PointerEvent",
            "PluginArray",
            "Plugin",
            "PictureInPictureWindow",
            "PictureInPictureEvent",
            "PeriodicWave",
            "PerformanceTiming",
            "PerformanceServerTiming",
            "PerformanceScriptTiming",
            "PerformanceResourceTiming",
            "PerformancePaintTiming",
            "PerformanceObserverEntryList",
            "PerformanceObserver",
            "PerformanceNavigationTiming",
            "PerformanceNavigation",
            "PerformanceMeasure",
            "PerformanceMark",
            "PerformanceLongTaskTiming",
            "PerformanceLongAnimationFrameTiming",
            "PerformanceEventTiming",
            "PerformanceEntry",
            "PerformanceElementTiming",
            "Performance",
            "Path2D",
            "PannerNode",
            "PageTransitionEvent",
            "OverconstrainedError",
            "OscillatorNode",
            "OffscreenCanvasRenderingContext2D",
            "OffscreenCanvas",
            "OfflineAudioContext",
            "OfflineAudioCompletionEvent",
            "Observable",
            "NodeList",
            "NodeIterator",
            "NodeFilter",
            "Node",
            "NetworkInformation",
            "NavigatorUAData",
            "Navigator",
            "NavigationTransition",
            "NavigationHistoryEntry",
            "NavigationDestination",
            "NavigationCurrentEntryChangeEvent",
            "NavigationActivation",
            "Navigation",
            "NavigateEvent",
            "NamedNodeMap",
            "MutationRecord",
            "MutationObserver",
            "MouseEvent",
            "MimeTypeArray",
            "MimeType",
            "MessagePort",
            "MessageEvent",
            "MessageChannel",
            "MediaStreamTrackVideoStats",
            "MediaStreamTrackProcessor",
            "MediaStreamTrackGenerator",
            "MediaStreamTrackEvent",
            "MediaStreamTrackAudioStats",
            "MediaStreamTrack",
            "MediaStreamEvent",
            "MediaStreamAudioSourceNode",
            "MediaStreamAudioDestinationNode",
            "MediaStream",
            "MediaSourceHandle",
            "MediaSource",
            "MediaRecorder",
            "MediaQueryListEvent",
            "MediaQueryList",
            "MediaList",
            "MediaError",
            "MediaEncryptedEvent",
            "MediaElementAudioSourceNode",
            "MediaCapabilities",
            "MathMLElement",
            "Location",
            "LayoutShiftAttribution",
            "LayoutShift",
            "LargestContentfulPaint",
            "KeyframeEffect",
            "KeyboardEvent",
            "IntersectionObserverEntry",
            "IntersectionObserver",
            "InputEvent",
            "InputDeviceInfo",
            "InputDeviceCapabilities",
            "Ink",
            "ImageData",
            "ImageBitmapRenderingContext",
            "ImageBitmap",
            "IdleDeadline",
            "IIRFilterNode",
            "IDBVersionChangeEvent",
            "IDBTransaction",
            "IDBRequest",
            "IDBOpenDBRequest",
            "IDBObjectStore",
            "IDBKeyRange",
            "IDBIndex",
            "IDBFactory",
            "IDBDatabase",
            "IDBCursorWithValue",
            "IDBCursor",
            "History",
            "HighlightRegistry",
            "Highlight",
            "Headers",
            "HashChangeEvent",
            "HTMLVideoElement",
            "HTMLUnknownElement",
            "HTMLUListElement",
            "HTMLTrackElement",
            "HTMLTitleElement",
            "HTMLTimeElement",
            "HTMLTextAreaElement",
            "HTMLTemplateElement",
            "HTMLTableSectionElement",
            "HTMLTableRowElement",
            "HTMLTableElement",
            "HTMLTableColElement",
            "HTMLTableCellElement",
            "HTMLTableCaptionElement",
            "HTMLStyleElement",
            "HTMLSpanElement",
            "HTMLSourceElement",
            "HTMLSlotElement",
            "HTMLSelectElement",
            "HTMLScriptElement",
            "HTMLQuoteElement",
            "HTMLProgressElement",
            "HTMLPreElement",
            "HTMLPictureElement",
            "HTMLParamElement",
            "HTMLParagraphElement",
            "HTMLOutputElement",
            "HTMLOptionsCollection",
            "HTMLOptionElement",
            "HTMLOptGroupElement",
            "HTMLObjectElement",
            "HTMLOListElement",
            "HTMLModElement",
            "HTMLMeterElement",
            "HTMLMetaElement",
            "HTMLMenuElement",
            "HTMLMediaElement",
            "HTMLMarqueeElement",
            "HTMLMapElement",
            "HTMLLinkElement",
            "HTMLLegendElement",
            "HTMLLabelElement",
            "HTMLLIElement",
            "HTMLInputElement",
            "HTMLImageElement",
            "HTMLIFrameElement",
            "HTMLHtmlElement",
            "HTMLHeadingElement",
            "HTMLHeadElement",
            "HTMLHRElement",
            "HTMLFrameSetElement",
            "HTMLFrameElement",
            "HTMLFormElement",
            "HTMLFormControlsCollection",
            "HTMLFontElement",
            "HTMLFieldSetElement",
            "HTMLEmbedElement",
            "HTMLElement",
            "HTMLDocument",
            "HTMLDivElement",
            "HTMLDirectoryElement",
            "HTMLDialogElement",
            "HTMLDetailsElement",
            "HTMLDataListElement",
            "HTMLDataElement",
            "HTMLDListElement",
            "HTMLCollection",
            "HTMLCanvasElement",
            "HTMLButtonElement",
            "HTMLBodyElement",
            "HTMLBaseElement",
            "HTMLBRElement",
            "HTMLAudioElement",
            "HTMLAreaElement",
            "HTMLAnchorElement",
            "HTMLAllCollection",
            "GeolocationPositionError",
            "GeolocationPosition",
            "GeolocationCoordinates",
            "Geolocation",
            "GamepadHapticActuator",
            "GamepadEvent",
            "GamepadButton",
            "Gamepad",
            "GainNode",
            "FormDataEvent",
            "FormData",
            "FontFaceSetLoadEvent",
            "FontFace",
            "FocusEvent",
            "FileReader",
            "FileList",
            "File",
            "FeaturePolicy",
            "External",
            "EventTarget",
            "EventSource",
            "EventCounts",
            "Event",
            "ErrorEvent",
            "EncodedVideoChunk",
            "EncodedAudioChunk",
            "ElementInternals",
            "Element",
            "EditContext",
            "DynamicsCompressorNode",
            "DragEvent",
            "DocumentType",
            "DocumentTimeline",
            "DocumentFragment",
            "Document",
            "DelegatedInkTrailPresenter",
            "DelayNode",
            "DecompressionStream",
            "DataTransferItemList",
            "DataTransferItem",
            "DataTransfer",
            "DOMTokenList",
            "DOMStringMap",
            "DOMStringList",
            "DOMRectReadOnly",
            "DOMRectList",
            "DOMRect",
            "DOMQuad",
            "DOMPointReadOnly",
            "DOMPoint",
            "DOMParser",
            "DOMMatrixReadOnly",
            "DOMMatrix",
            "DOMImplementation",
            "DOMException",
            "DOMError",
            "CustomStateSet",
            "CustomEvent",
            "CustomElementRegistry",
            "Crypto",
            "CountQueuingStrategy",
            "ConvolverNode",
            "ContentVisibilityAutoStateChangeEvent",
            "ConstantSourceNode",
            "CompressionStream",
            "CompositionEvent",
            "Comment",
            "CommandEvent",
            "CloseWatcher",
            "CloseEvent",
            "ClipboardEvent",
            "CharacterData",
            "CharacterBoundsUpdateEvent",
            "ChannelSplitterNode",
            "ChannelMergerNode",
            "CaretPosition",
            "CanvasRenderingContext2D",
            "CanvasPattern",
            "CanvasGradient",
            "CanvasCaptureMediaStreamTrack",
            "CSSViewTransitionRule",
            "CSSVariableReferenceValue",
            "CSSUnparsedValue",
            "CSSUnitValue",
            "CSSTranslate",
            "CSSTransition",
            "CSSTransformValue",
            "CSSTransformComponent",
            "CSSSupportsRule",
            "CSSStyleValue",
            "CSSStyleSheet",
            "CSSStyleRule",
            "CSSStyleDeclaration",
            "CSSStartingStyleRule",
            "CSSSkewY",
            "CSSSkewX",
            "CSSSkew",
            "CSSScopeRule",
            "CSSScale",
            "CSSRuleList",
            "CSSRule",
            "CSSRotate",
            "CSSPropertyRule",
            "CSSPositionValue",
            "CSSPositionTryRule",
            "CSSPositionTryDescriptors",
            "CSSPerspective",
            "CSSPageRule",
            "CSSNumericValue",
            "CSSNumericArray",
            "CSSNestedDeclarations",
            "CSSNamespaceRule",
            "CSSMediaRule",
            "CSSMatrixComponent",
            "CSSMathValue",
            "CSSMathSum",
            "CSSMathProduct",
            "CSSMathNegate",
            "CSSMathMin",
            "CSSMathMax",
            "CSSMathInvert",
            "CSSMathClamp",
            "CSSMarginRule",
            "CSSLayerStatementRule",
            "CSSLayerBlockRule",
            "CSSKeywordValue",
            "CSSKeyframesRule",
            "CSSKeyframeRule",
            "CSSImportRule",
            "CSSImageValue",
            "CSSGroupingRule",
            "CSSFontPaletteValuesRule",
            "CSSFontFaceRule",
            "CSSCounterStyleRule",
            "CSSContainerRule",
            "CSSConditionRule",
            "CSSAnimation",
            "CSS",
            "CSPViolationReportBody",
            "CDATASection",
            "ByteLengthQueuingStrategy",
            "BrowserCaptureMediaStreamTrack",
            "BroadcastChannel",
            "BlobEvent",
            "Blob",
            "BiquadFilterNode",
            "BeforeUnloadEvent",
            "BeforeInstallPromptEvent",
            "BaseAudioContext",
            "BarProp",
            "AudioWorkletNode",
            "AudioSinkInfo",
            "AudioScheduledSourceNode",
            "AudioProcessingEvent",
            "AudioParamMap",
            "AudioParam",
            "AudioNode",
            "AudioListener",
            "AudioDestinationNode",
            "AudioData",
            "AudioContext",
            "AudioBufferSourceNode",
            "AudioBuffer",
            "Attr",
            "AnimationTimeline",
            "AnimationPlaybackEvent",
            "AnimationEvent",
            "AnimationEffect",
            "Animation",
            "AnalyserNode",
            "AbstractRange",
            "AbortSignal",
            "AbortController",
            "window",
            "self",
            "document",
            "name",
            "location",
            "customElements",
            "history",
            "navigation",
            "locationbar",
            "menubar",
            "personalbar",
            "scrollbars",
            "statusbar",
            "toolbar",
            "status",
            "closed",
            "frames",
            "length",
            "top",
            "opener",
            "parent",
            "frameElement",
            "navigator",
            "origin",
            "external",
            "screen",
            "innerWidth",
            "innerHeight",
            "scrollX",
            "pageXOffset",
            "scrollY",
            "pageYOffset",
            "visualViewport",
            "screenX",
            "screenY",
            "outerWidth",
            "outerHeight",
            "devicePixelRatio",
            "event",
            "clientInformation",
            "offscreenBuffering",
            "screenLeft",
            "screenTop",
            "styleMedia",
            "onsearch",
            "trustedTypes",
            "performance",
            "onappinstalled",
            "onbeforeinstallprompt",
            "crypto",
            "indexedDB",
            "sessionStorage",
            "localStorage",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncommand",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onscrollend",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onhashchange",
            "onlanguagechange",
            "onmessage",
            "onmessageerror",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpopstate",
            "onrejectionhandled",
            "onstorage",
            "onunhandledrejection",
            "onunload",
            "isSecureContext",
            "crossOriginIsolated",
            "scheduler",
            "alert",
            "atob",
            "blur",
            "btoa",
            "cancelAnimationFrame",
            "cancelIdleCallback",
            "captureEvents",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "createImageBitmap",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "postMessage",
            "print",
            "prompt",
            "queueMicrotask",
            "releaseEvents",
            "reportError",
            "requestAnimationFrame",
            "requestIdleCallback",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
            "structuredClone",
            "webkitCancelAnimationFrame",
            "webkitRequestAnimationFrame",
            "SuppressedError",
            "DisposableStack",
            "AsyncDisposableStack",
            "Float16Array",
            "chrome",
            "WebAssembly",
            "caches",
            "cookieStore",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "documentPictureInPicture",
            "sharedStorage",
            "AbsoluteOrientationSensor",
            "Accelerometer",
            "AudioDecoder",
            "AudioEncoder",
            "AudioWorklet",
            "BatteryManager",
            "Cache",
            "CacheStorage",
            "Clipboard",
            "ClipboardItem",
            "CookieChangeEvent",
            "CookieStore",
            "CookieStoreManager",
            "Credential",
            "CredentialsContainer",
            "CryptoKey",
            "DeviceMotionEvent",
            "DeviceMotionEventAcceleration",
            "DeviceMotionEventRotationRate",
            "DeviceOrientationEvent",
            "FederatedCredential",
            "GPU",
            "GPUAdapter",
            "GPUAdapterInfo",
            "GPUBindGroup",
            "GPUBindGroupLayout",
            "GPUBuffer",
            "GPUBufferUsage",
            "GPUCanvasContext",
            "GPUColorWrite",
            "GPUCommandBuffer",
            "GPUCommandEncoder",
            "GPUCompilationInfo",
            "GPUCompilationMessage",
            "GPUComputePassEncoder",
            "GPUComputePipeline",
            "GPUDevice",
            "GPUDeviceLostInfo",
            "GPUError",
            "GPUExternalTexture",
            "GPUInternalError",
            "GPUMapMode",
            "GPUOutOfMemoryError",
            "GPUPipelineError",
            "GPUPipelineLayout",
            "GPUQuerySet",
            "GPUQueue",
            "GPURenderBundle",
            "GPURenderBundleEncoder",
            "GPURenderPassEncoder",
            "GPURenderPipeline",
            "GPUSampler",
            "GPUShaderModule",
            "GPUShaderStage",
            "GPUSupportedFeatures",
            "GPUSupportedLimits",
            "GPUTexture",
            "GPUTextureUsage",
            "GPUTextureView",
            "GPUUncapturedErrorEvent",
            "GPUValidationError",
            "GravitySensor",
            "Gyroscope",
            "IdleDetector",
            "ImageCapture",
            "ImageDecoder",
            "ImageTrack",
            "ImageTrackList",
            "Keyboard",
            "KeyboardLayoutMap",
            "LinearAccelerationSensor",
            "MIDIAccess",
            "MIDIConnectionEvent",
            "MIDIInput",
            "MIDIInputMap",
            "MIDIMessageEvent",
            "MIDIOutput",
            "MIDIOutputMap",
            "MIDIPort",
            "MediaDeviceInfo",
            "MediaDevices",
            "MediaKeyMessageEvent",
            "MediaKeySession",
            "MediaKeyStatusMap",
            "MediaKeySystemAccess",
            "MediaKeys",
            "NavigationPreloadManager",
            "NavigatorManagedData",
            "OrientationSensor",
            "PasswordCredential",
            "ProtectedAudience",
            "RelativeOrientationSensor",
            "ScreenDetailed",
            "ScreenDetails",
            "Sensor",
            "SensorErrorEvent",
            "ServiceWorkerRegistration",
            "StorageManager",
            "SubtleCrypto",
            "VideoDecoder",
            "VideoEncoder",
            "VirtualKeyboard",
            "WGSLLanguageFeatures",
            "WebTransport",
            "WebTransportBidirectionalStream",
            "WebTransportDatagramDuplexStream",
            "WebTransportError",
            "Worklet",
            "XRDOMOverlayState",
            "XRLayer",
            "XRWebGLBinding",
            "AuthenticatorAssertionResponse",
            "AuthenticatorAttestationResponse",
            "AuthenticatorResponse",
            "PublicKeyCredential",
            "BarcodeDetector",
            "Bluetooth",
            "BluetoothCharacteristicProperties",
            "BluetoothDevice",
            "BluetoothRemoteGATTCharacteristic",
            "BluetoothRemoteGATTDescriptor",
            "BluetoothRemoteGATTServer",
            "BluetoothRemoteGATTService",
            "CaptureController",
            "CreateMonitor",
            "DevicePosture",
            "DocumentPictureInPicture",
            "EyeDropper",
            "FetchLaterResult",
            "FileSystemDirectoryHandle",
            "FileSystemFileHandle",
            "FileSystemHandle",
            "FileSystemWritableFileStream",
            "FileSystemObserver",
            "FontData",
            "FragmentDirective",
            "HID",
            "HIDConnectionEvent",
            "HIDDevice",
            "HIDInputReportEvent",
            "IdentityCredential",
            "IdentityCredentialError",
            "IdentityProvider",
            "NavigatorLogin",
            "LanguageDetector",
            "Lock",
            "LockManager",
            "ServiceWorker",
            "ServiceWorkerContainer",
            "NotRestoredReasonDetails",
            "NotRestoredReasons",
            "OTPCredential",
            "PaymentAddress",
            "PaymentRequest",
            "PaymentRequestUpdateEvent",
            "PaymentResponse",
            "PaymentManager",
            "PaymentMethodChangeEvent",
            "Presentation",
            "PresentationAvailability",
            "PresentationConnection",
            "PresentationConnectionAvailableEvent",
            "PresentationConnectionCloseEvent",
            "PresentationConnectionList",
            "PresentationReceiver",
            "PresentationRequest",
            "PressureObserver",
            "PressureRecord",
            "Serial",
            "SerialPort",
            "SharedWorker",
            "StorageBucket",
            "StorageBucketManager",
            "Summarizer",
            "Translator",
            "USB",
            "USBAlternateInterface",
            "USBConfiguration",
            "USBConnectionEvent",
            "USBDevice",
            "USBEndpoint",
            "USBInTransferResult",
            "USBInterface",
            "USBIsochronousInTransferPacket",
            "USBIsochronousInTransferResult",
            "USBIsochronousOutTransferPacket",
            "USBIsochronousOutTransferResult",
            "USBOutTransferResult",
            "WakeLock",
            "WakeLockSentinel",
            "XRAnchor",
            "XRAnchorSet",
            "XRBoundedReferenceSpace",
            "XRCPUDepthInformation",
            "XRCamera",
            "XRDepthInformation",
            "XRFrame",
            "XRHand",
            "XRHitTestResult",
            "XRHitTestSource",
            "XRInputSource",
            "XRInputSourceArray",
            "XRInputSourceEvent",
            "XRInputSourcesChangeEvent",
            "XRJointPose",
            "XRJointSpace",
            "XRLightEstimate",
            "XRLightProbe",
            "XRPose",
            "XRRay",
            "XRReferenceSpace",
            "XRReferenceSpaceEvent",
            "XRRenderState",
            "XRRigidTransform",
            "XRSession",
            "XRSessionEvent",
            "XRSpace",
            "XRSystem",
            "XRTransientInputHitTestResult",
            "XRTransientInputHitTestSource",
            "XRView",
            "XRViewerPose",
            "XRViewport",
            "XRWebGLDepthInformation",
            "XRWebGLLayer",
            "fetchLater",
            "getScreenDetails",
            "queryLocalFonts",
            "showDirectoryPicker",
            "showOpenFilePicker",
            "showSaveFilePicker",
            "originAgentCluster",
            "viewport",
            "onpageswap",
            "onpagereveal",
            "credentialless",
            "fence",
            "launchQueue",
            "speechSynthesis",
            "onscrollsnapchange",
            "onscrollsnapchanging",
            "BackgroundFetchManager",
            "BackgroundFetchRecord",
            "BackgroundFetchRegistration",
            "BluetoothUUID",
            "CSSFontFeatureValuesRule",
            "CSSFunctionDeclarations",
            "CSSFunctionDescriptors",
            "CSSFunctionRule",
            "ChapterInformation",
            "CropTarget",
            "DocumentPictureInPictureEvent",
            "Fence",
            "FencedFrameConfig",
            "HTMLFencedFrameElement",
            "HTMLSelectedContentElement",
            "IntegrityViolationReportBody",
            "LaunchParams",
            "LaunchQueue",
            "MediaMetadata",
            "MediaSession",
            "Notification",
            "PageRevealEvent",
            "PageSwapEvent",
            "PeriodicSyncManager",
            "PermissionStatus",
            "Permissions",
            "PushManager",
            "PushSubscription",
            "PushSubscriptionOptions",
            "QuotaExceededError",
            "RTCDataChannel",
            "RemotePlayback",
            "RestrictionTarget",
            "SharedStorage",
            "SharedStorageWorklet",
            "SharedStorageAppendMethod",
            "SharedStorageClearMethod",
            "SharedStorageDeleteMethod",
            "SharedStorageModifierMethod",
            "SharedStorageSetMethod",
            "SnapEvent",
            "SpeechGrammar",
            "SpeechGrammarList",
            "SpeechRecognition",
            "SpeechRecognitionErrorEvent",
            "SpeechRecognitionEvent",
            "SpeechSynthesis",
            "SpeechSynthesisErrorEvent",
            "SpeechSynthesisEvent",
            "SpeechSynthesisUtterance",
            "SpeechSynthesisVoice",
            "Viewport",
            "WebSocketError",
            "WebSocketStream",
            "webkitSpeechGrammar",
            "webkitSpeechGrammarList",
            "webkitSpeechRecognition",
            "webkitSpeechRecognitionError",
            "webkitSpeechRecognitionEvent",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL",
            "KPSDK",
            "_cf",
            "bmak",
            "_sdTrace"
        ]
    },
    obj_keys: {
        contentWindow: [
            "window",
            "self",
            "document",
            "name",
            "location",
            "customElements",
            "history",
            "navigation",
            "locationbar",
            "menubar",
            "personalbar",
            "scrollbars",
            "statusbar",
            "toolbar",
            "status",
            "closed",
            "frames",
            "length",
            "top",
            "opener",
            "parent",
            "frameElement",
            "navigator",
            "origin",
            "external",
            "screen",
            "innerWidth",
            "innerHeight",
            "scrollX",
            "pageXOffset",
            "scrollY",
            "pageYOffset",
            "visualViewport",
            "screenX",
            "screenY",
            "outerWidth",
            "outerHeight",
            "devicePixelRatio",
            "event",
            "clientInformation",
            "screenLeft",
            "screenTop",
            "styleMedia",
            "onsearch",
            "trustedTypes",
            "performance",
            "onappinstalled",
            "onbeforeinstallprompt",
            "crypto",
            "indexedDB",
            "sessionStorage",
            "localStorage",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncommand",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onscrollend",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onhashchange",
            "onlanguagechange",
            "onmessage",
            "onmessageerror",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpopstate",
            "onrejectionhandled",
            "onstorage",
            "onunhandledrejection",
            "onunload",
            "isSecureContext",
            "crossOriginIsolated",
            "scheduler",
            "alert",
            "atob",
            "blur",
            "btoa",
            "cancelAnimationFrame",
            "cancelIdleCallback",
            "captureEvents",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "createImageBitmap",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "postMessage",
            "print",
            "prompt",
            "queueMicrotask",
            "releaseEvents",
            "reportError",
            "requestAnimationFrame",
            "requestIdleCallback",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
            "structuredClone",
            "webkitCancelAnimationFrame",
            "webkitRequestAnimationFrame",
            "chrome",
            "caches",
            "cookieStore",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "documentPictureInPicture",
            "sharedStorage",
            "fetchLater",
            "getScreenDetails",
            "queryLocalFonts",
            "showDirectoryPicker",
            "showOpenFilePicker",
            "showSaveFilePicker",
            "originAgentCluster",
            "viewport",
            "onpageswap",
            "onpagereveal",
            "credentialless",
            "fence",
            "launchQueue",
            "speechSynthesis",
            "onscrollsnapchange",
            "onscrollsnapchanging",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL"
        ],
        window: [
            "0",
            "1",
            "2",
            "window",
            "self",
            "document",
            "name",
            "location",
            "customElements",
            "history",
            "navigation",
            "locationbar",
            "menubar",
            "personalbar",
            "scrollbars",
            "statusbar",
            "toolbar",
            "status",
            "closed",
            "frames",
            "length",
            "top",
            "opener",
            "parent",
            "frameElement",
            "navigator",
            "origin",
            "external",
            "screen",
            "innerWidth",
            "innerHeight",
            "scrollX",
            "pageXOffset",
            "scrollY",
            "pageYOffset",
            "visualViewport",
            "screenX",
            "screenY",
            "outerWidth",
            "outerHeight",
            "devicePixelRatio",
            "event",
            "clientInformation",
            "screenLeft",
            "screenTop",
            "styleMedia",
            "onsearch",
            "trustedTypes",
            "performance",
            "onappinstalled",
            "onbeforeinstallprompt",
            "crypto",
            "indexedDB",
            "sessionStorage",
            "localStorage",
            "onbeforexrselect",
            "onabort",
            "onbeforeinput",
            "onbeforematch",
            "onbeforetoggle",
            "onblur",
            "oncancel",
            "oncanplay",
            "oncanplaythrough",
            "onchange",
            "onclick",
            "onclose",
            "oncommand",
            "oncontentvisibilityautostatechange",
            "oncontextlost",
            "oncontextmenu",
            "oncontextrestored",
            "oncuechange",
            "ondblclick",
            "ondrag",
            "ondragend",
            "ondragenter",
            "ondragleave",
            "ondragover",
            "ondragstart",
            "ondrop",
            "ondurationchange",
            "onemptied",
            "onended",
            "onerror",
            "onfocus",
            "onformdata",
            "oninput",
            "oninvalid",
            "onkeydown",
            "onkeypress",
            "onkeyup",
            "onload",
            "onloadeddata",
            "onloadedmetadata",
            "onloadstart",
            "onmousedown",
            "onmouseenter",
            "onmouseleave",
            "onmousemove",
            "onmouseout",
            "onmouseover",
            "onmouseup",
            "onmousewheel",
            "onpause",
            "onplay",
            "onplaying",
            "onprogress",
            "onratechange",
            "onreset",
            "onresize",
            "onscroll",
            "onscrollend",
            "onsecuritypolicyviolation",
            "onseeked",
            "onseeking",
            "onselect",
            "onslotchange",
            "onstalled",
            "onsubmit",
            "onsuspend",
            "ontimeupdate",
            "ontoggle",
            "onvolumechange",
            "onwaiting",
            "onwebkitanimationend",
            "onwebkitanimationiteration",
            "onwebkitanimationstart",
            "onwebkittransitionend",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerrawupdate",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onselectstart",
            "onselectionchange",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "ontransitionrun",
            "ontransitionstart",
            "ontransitionend",
            "ontransitioncancel",
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onhashchange",
            "onlanguagechange",
            "onmessage",
            "onmessageerror",
            "onoffline",
            "ononline",
            "onpagehide",
            "onpageshow",
            "onpopstate",
            "onrejectionhandled",
            "onstorage",
            "onunhandledrejection",
            "onunload",
            "isSecureContext",
            "crossOriginIsolated",
            "scheduler",
            "alert",
            "atob",
            "blur",
            "btoa",
            "cancelAnimationFrame",
            "cancelIdleCallback",
            "captureEvents",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "createImageBitmap",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "postMessage",
            "print",
            "prompt",
            "queueMicrotask",
            "releaseEvents",
            "reportError",
            "requestAnimationFrame",
            "requestIdleCallback",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
            "structuredClone",
            "webkitCancelAnimationFrame",
            "webkitRequestAnimationFrame",
            "chrome",
            "caches",
            "cookieStore",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "documentPictureInPicture",
            "sharedStorage",
            "fetchLater",
            "getScreenDetails",
            "queryLocalFonts",
            "showDirectoryPicker",
            "showOpenFilePicker",
            "showSaveFilePicker",
            "originAgentCluster",
            "viewport",
            "onpageswap",
            "onpagereveal",
            "credentialless",
            "fence",
            "launchQueue",
            "speechSynthesis",
            "onscrollsnapchange",
            "onscrollsnapchanging",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL",
            "KPSDK",
            "_cf",
            "bmak",
            "_sdTrace"
        ]
    },
    onlubKeys: ['onbeforeinstallprompt', 'onbeforexrselect', 'onbeforeinput', 'onbeforematch', 'onbeforetoggle', 'onblur', 'onbeforeprint', 'onbeforeunload', 'onunhandledrejection', 'onunload', 'opener', 'oncontentvisibilityautostatechange', 'onsecuritypolicyviolation', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend', 'ondeviceorientationabsolute', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onseeked', 'onseeking', 'onselect', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwheel', 'onauxclick', 'ongotpointercapture', 'onlostpointercapture', 'onpointerdown', 'onpointermove', 'onpointerrawupdate', 'onpointerup', 'onpointercancel', 'onpointerover', 'onpointerout', 'onpointerenter', 'onpointerleave', 'onselectstart', 'onselectionchange', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'ontransitionrun', 'ontransitionstart', 'ontransitionend', 'ontransitioncancel', 'onafterprint', 'onhashchange', 'onlanguagechange', 'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'XRLightProbe', 'XRPose', 'XRRay', 'XRReferenceSpace', 'XRReferenceSpaceEvent', 'XRRenderState', 'XRRigidTransform', 'onpopstate', 'onrejectionhandled', 'onstorage', 'frameElement', 'onmouseup', 'onmouseover', 'onmouseout', 'onmousemove', 'onmouseleave', 'onmouseenter', 'onmousedown', 'onscrollend', 'onscroll', 'onfocus', 'onclose', 'onload', 'ondevicemotion', 'ondeviceorientation', 'onpageswap', 'onpagereveal', 'fence', 'onscrollsnapchange'],
    getEntriesByType: {
        navigation: [
            {
                "name": "// fp_js_url",
                "entryType": "navigation",
                "startTime": 0,
                "duration": 0,
                "initiatorType": "navigation",
                "deliveryType": "",
                "nextHopProtocol": "",
                "renderBlockingStatus": "non-blocking",
                "workerStart": 0,
                "workerRouterEvaluationStart": 0,
                "workerCacheLookupStart": 0,
                "workerMatchedSourceType": "",
                "workerFinalSourceType": "",
                "redirectStart": 0,
                "redirectEnd": 0,
                "fetchStart": 1.300000011920929,
                "domainLookupStart": 1.300000011920929,
                "domainLookupEnd": 1.300000011920929,
                "connectStart": 1.300000011920929,
                "secureConnectionStart": 1.300000011920929,
                "connectEnd": 1.300000011920929,
                "requestStart": 1.300000011920929,
                "responseStart": 389.4000000357628,
                "firstInterimResponseStart": 0,
                "finalResponseHeadersStart": 0,
                "responseEnd": 389.4000000357628,
                "transferSize": 1362,
                "encodedBodySize": 1062,
                "decodedBodySize": 1062,
                "responseStatus": 200,
                "serverTiming": [
                    {
                        "name": "cdn-cache",
                        "duration": 0,
                        "description": "MISS"
                    },
                    {
                        "name": "edge",
                        "duration": 13,
                        "description": ""
                    },
                    {
                        "name": "origin",
                        "duration": 97,
                        "description": ""
                    },
                    {
                        "name": "ak_p",
                        "duration": 1,
                        "description": "1757743932000_34696052_164368592_11092_32505_227_0_255"
                    }
                ],
                "unloadEventStart": 0,
                "unloadEventEnd": 0,
                "domInteractive": 1338.9000000357628,
                "domContentLoadedEventStart": 0,
                "domContentLoadedEventEnd": 0,
                "domComplete": 0,
                "loadEventStart": 0,
                "loadEventEnd": 0,
                "type": "navigate",
                "redirectCount": 0,
                "activationStart": 0,
                "criticalCHRestart": 0,
                "notRestoredReasons": null
            }
        ],
        resource: [
            {
                "name": "// ips_js_url",
                "entryType": "resource",
                "startTime": 924.1999999992549,
                "duration": 1165.8999999985099,
                "initiatorType": "script",
                "deliveryType": "",
                "nextHopProtocol": "",
                "renderBlockingStatus": "non-blocking",
                "workerStart": 0,
                "workerRouterEvaluationStart": 0,
                "workerCacheLookupStart": 0,
                "workerMatchedSourceType": "",
                "workerFinalSourceType": "",
                "redirectStart": 0,
                "redirectEnd": 0,
                "fetchStart": 924.1999999992549,
                "domainLookupStart": 924.1999999992549,
                "domainLookupEnd": 924.1999999992549,
                "connectStart": 924.1999999992549,
                "secureConnectionStart": 924.1999999992549,
                "connectEnd": 924.1999999992549,
                "requestStart": 924.1999999992549,
                "responseStart": 2090.099999997765,
                "firstInterimResponseStart": 0,
                "finalResponseHeadersStart": 0,
                "responseEnd": 2090.099999997765,
                "transferSize": 361248,
                "encodedBodySize": 360948,
                "decodedBodySize": 360948,
                "responseStatus": 200,
                "serverTiming": [
                    {
                        "name": "cdn-cache",
                        "duration": 0,
                        "description": "MISS"
                    },
                    {
                        "name": "edge",
                        "duration": 228,
                        "description": ""
                    },
                    {
                        "name": "origin",
                        "duration": 229,
                        "description": ""
                    },
                    {
                        "name": "ak_p",
                        "duration": 1,
                        "description": "1757917548261_400032814_1036985309_45834_21963_1_0_219"
                    }
                ]
            },
            {
                "name": "https://akamai-gw.dbaas.aircanada.com/SG5cl/bmm/b13f/9Bkl/p-sH/9SEJ2kcttYDwLk/UmhvDi0VAQM/Eg/haPj9WGnk",
                "entryType": "resource",
                "startTime": 924.3999999985099,
                "duration": 1159.1000000014901,
                "initiatorType": "script",
                "deliveryType": "",
                "nextHopProtocol": "",
                "renderBlockingStatus": "non-blocking",
                "workerStart": 0,
                "workerRouterEvaluationStart": 0,
                "workerCacheLookupStart": 0,
                "workerMatchedSourceType": "",
                "workerFinalSourceType": "",
                "redirectStart": 0,
                "redirectEnd": 0,
                "fetchStart": 924.3999999985099,
                "domainLookupStart": 924.3999999985099,
                "domainLookupEnd": 924.3999999985099,
                "connectStart": 924.3999999985099,
                "secureConnectionStart": 924.3999999985099,
                "connectEnd": 924.3999999985099,
                "requestStart": 924.3999999985099,
                "responseStart": 2083.5,
                "firstInterimResponseStart": 0,
                "finalResponseHeadersStart": 0,
                "responseEnd": 2083.5,
                "transferSize": 394556,
                "encodedBodySize": 394256,
                "decodedBodySize": 394256,
                "responseStatus": 200,
                "serverTiming": [
                    {
                        "name": "cdn-cache",
                        "duration": 0,
                        "description": "HIT"
                    },
                    {
                        "name": "edge",
                        "duration": 1,
                        "description": ""
                    },
                    {
                        "name": "ak_p",
                        "duration": 1,
                        "description": "1757917548259_400032814_1036985312_81_11058_1_0_219"
                    }
                ]
            }
        ],
        visibilitystate: [
            {
                "name": "visible",
                "entryType": "visibility-state",
                "startTime": 0,
                "duration": 0
            },
            {
                "name": "hidden",
                "entryType": "visibility-state",
                "startTime": 25964.5,
                "duration": 0
            }
        ]
    },
    panda_vm: {
        storage: {}
    },
    clientHeightIndex: 0,
    clientWidthIndex: 0,
    styleSheetsIndex: 0,
    origin: 0,
    setTimeout_count: 0,
    setInterval_count: 0,
}


function myProxy(obj_, obj_name, proxy = false) {
    debugger

    function set_traverse_object(tarrget, obj, recursion_layers) {
        recursion_layers -= 1;
        for (let prop in obj) {
            const value = obj[prop];
            const tg_name = `${tarrget}.${prop.toString()}`;
            const value_type = get_value_type(value);
            if (value && value_type === "object" && recursion_layers >= 1) {
                set_traverse_object(tg_name, value, recursion_layers);
                continue
            }
            if (value && value.toString() !== '[object Object]') {
                my_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                continue
            }
            my_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
        }
    }

    function new_handel(target_name, obj, number) {
        return new Proxy(obj, my_handler(target_name, number))
    }

    function get_value_type(value) {
        if (Array.isArray(value)) {
            return 'Array'
        }
        return typeof value;
    }

    function my_handler(target_name, number) {
        return {
            set: function (obj, prop, value) {
                const value_type = get_value_type(value);
                const tg_name = `${target_name}.${prop.toString()}`;

                if (value && value_type === "object") {
                    set_traverse_object(tg_name, value, number)
                } else {
                    if (tg_name.toString().indexOf('tuKr9') != -1) {

                    }
                    my_log(`setter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`)
                }
                return Reflect.set(obj, prop, value);
            },
            get: function (obj, prop) {
                const tg_name = `${target_name}.${prop.toString()}`;
                const value = Reflect.get(obj, prop);
                let value_type = get_value_type(value);
                if (value && value_type === 'object') {
                    return new_handel(tg_name, value, number)
                }
                my_log(`getter  hook->${tg_name};  value-> ${value};  typeof-> ${value_type}`);
                return value
            },
            deleteProperty(target, propKey) {
                // 没有实现链式输出
                let result = Reflect.deleteProperty(target, propKey);
                let value_type = get_value_type(result);

                my_log(`delete hook-> ${propKey}, result-> ${result};  typeof-> ${value_type}`);
                return result;
            }
        }
    }

    if (!(proxy === true)) {
        return obj_;
    }
    return new Proxy(obj_, my_handler(obj_name, 30));
};
!function () {
    const $toString = Function.prototype.toString;
    const symbol = Symbol();
    let myToString = function myToString() {
        return typeof this === 'function' && this[symbol] || $toString.call(this);
    }
    myToString.toString = new Proxy(Date.toString, {
        get: function (target, property) {
            if (typeof property === 'symbol') {
                return function () {
                    return '[object Object]'
                }
            }
            if (property === 'name') {
                return 'toString'
            }
            if (property === 'toString') {
                return function () {
                    return "function toString() { [native code] }"
                }
            }
            // debugger
            // 对于除了 'arguments' 外的属性，返回原始函数对象的属性值
            return target[property];
        }
    });
    myToString = new Proxy(myToString, {
        get: function (target, property) {
            // if (property === 'arguments') {
            //     throw new TypeError('\'caller\', \'callee\', and \'arguments\' properties may not be accessed on strict mode functions or the arguments objects for calls to them');
            // }
            // if (typeof property === 'symbol') {
            //     return function () {
            //         return '[object Object]'
            //     }
            // }
            if (property === 'name') {
                return 'toString'
            }
            if (property === 'call') {
                return function () {
                    if (arguments[0] === 1) {
                        throwCustomTypeError("Function.prototype.toString requires that 'this' be a Function", `\n    at Number.toString (<anonymous>)\n    at eval (eval at <anonymous> (eval at get (// ips_js_url:1:352112)), <anonymous>:3:16)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:290)\n    at l (// ips_js_url:5:116)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:254)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:39)\n    at l (// ips_js_url:5:116)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:254)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:290)\n    at l (// ips_js_url:5:116)`)
                    } else if (arguments[0] === undefined) {
                        throwCustomTypeError("Function.prototype.toString requires that 'this' be a Function", `\n    at toString (<anonymous>)\n    at eval (eval at <anonymous> (eval at get (// ips_js_url:1:352112)), <anonymous>:3:29)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:290)\n    at l (// ips_js_url:5:116)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:254)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:39)\n    at l (// ips_js_url:5:116)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:254)\n    at eval (eval at get (// ips_js_url:1:352112), <anonymous>:3:290)\n    at l (// ips_js_url:5:116)`)
                    } else if (arguments[0].name === 'refresh') {
                        return 'function refresh() { [native code] }'
                    } else if (arguments[0].name === 'namedItem') {
                        return 'function namedItem() { [native code] }'
                    } else if (arguments[0].name === 'getDetails') {
                        return 'function getDetails() { [native code] }'
                    } else if (arguments[0].name === 'createElement') {
                        return 'function createElement() { [native code] }'
                    } else if (arguments[0].name === 'canPlayType') {
                        return 'function canPlayType() { [native code] }'
                    } else if (arguments[0].toString() === '[object Navigator]') {
                        throw new TypeError("Function.prototype.toString requires that 'this' be a Function")
                    } else if (arguments[0].name === 'stringify') {
                        return 'function stringify() { [native code] }'
                    } else if (arguments[0].name === 'getOwnPropertyDescriptor') {
                        return 'function getOwnPropertyDescriptor() { [native code] }'
                    } else if (arguments[0].name === 'call') {
                        return 'function call() { [native code] }'
                    } else if (arguments[0].name === 'apply') {
                        return 'function apply() { [native code] }'
                    } else if (arguments[0].name === 'bind') {
                        return 'function bind() { [native code] }'
                    } else if (arguments[0].name === 'getParameter') {
                        return 'function getParameter() { [native code] }'
                    } else if (arguments[0].name === 'getBattery') {
                        return 'function getBattery() { [native code] }'
                    } else if (arguments[0].name === 'debug') {
                        return 'function () { [native code] }'
                    } else if (arguments[0].name === '') {
                        return 'function () { [native code] }'
                    } else if (arguments[0].name === 'get window') {
                        return arguments[0] + ''
                    } else if (arguments[0].name === 'toString') {
                        return 'function toString() { [native code] }'
                    } else {
                        my_log("myToString>>>" + arguments[0])
                        debugger
                    }
                }
            }
            if (property === 'toString') {
                return function () {
                    return "function toString() { [native code] }"
                }
            }
            // 对于除了 'arguments' 外的属性，返回原始函数对象的属性值
            return target[property];
        }
    });

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    }

    var stringify_toString = JSON.stringify.toString
    // Object.defineProperty(Object.getOwnPropertyDescriptor, 'name', {
    //     get(){return ''},
    //     set(){}
    // });
    var get_window = function () {
    }
    var getOwnPropertyDescriptor__ = Object.getOwnPropertyDescriptor
    Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor() {
        if (arguments[1] === 'window') {
            return {
                get: get_window,
                configurable: false,
                enumerable: false
            }
        }
        if (arguments[1] === 'permission') {
            return {
                configurable: true,
                enumerable: true,
                set: undefined,
                get: function () {
                }
            }
        }
        return getOwnPropertyDescriptor__.apply(this, arguments)
    }
    // Object.getOwnPropertyDescriptor.toString = function toString() {
    //     return 'function(t,e){const n=tt(t,e);return n&&rt(t,e)&&(n.configurable=!1),n}'
    // }
    delete Function.prototype.toString;
    set_native(Function.prototype, "toString", myToString);
    set_native(Function.prototype.toString, symbol, "function toString() { [native code] }");
    set_native(Function.prototype.toString.toString, 'toString', myToString)

    setNative = function (func, funcname) {
        set_native(func, symbol, `function ${funcname || func.name || ''}() { [native code] }`);
    }

    JSON.stringify.toString = stringify_toString
    setNative(get_window, 'get window')
    Object.defineProperty(get_window, 'name', {
        get() {
            return 'get window'
        }
    })
    setNative(Object.getOwnPropertyDescriptor, 'getOwnPropertyDescriptor')
}();

function setPrototypeNative(Obj) {
    setNative(Obj, Obj.name)

    for (let i in Obj.prototype) {
        let value = Object.getOwnPropertyDescriptor(Obj.prototype, i)
        if (value.get) {
            setNative(value.get, 'get ' + i);
        }
        if (value.value) {
            setNative(value.value, i);
        }
    }
}

function setNameEmpty(fun) {
    Object.defineProperty(fun, 'name', {
            get() {
                return ''
            }
        }
    )
}

function setPlugin(obj, name, value) {
    let tmp = {}
    Object.setPrototypeOf(tmp, Plugin.prototype)
    Object.defineProperty(tmp, name, {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    })
    Object.setPrototypeOf(obj, tmp)
}

my_log = console.log
console.log = function () {
    if (arguments[0].__proto__.name === "Error") {
        arguments[0].name
        arguments[0].name
        arguments[0].message
        arguments[0].message
    }
}
setNative(console.log, 'log')

function definedWindow(name) {
    Object.defineProperty(window, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return null
        },
        set: function () {
        }
    })
}

class NotSupportedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotSupportedError';
    }
}

class DataCloneError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataCloneError';
    }
}

function throwCustomTypeError(message, stack) {
    const err = new TypeError(message);
    Error.captureStackTrace(err, throwCustomTypeError);
    err.stack = "TypeError: " + message + stack;
    throw err;
}

const NativeFunction = Function;
Function = new Proxy(NativeFunction, {
    construct(target, args) {
        const code = args[0];
        if (code?.includes('class Blah extends document.createElement')) {
            return new Proxy(function () {
            }, {
                apply: () => {
                    throw new TypeError("Class extends value function createElement() { [native code] } is not a constructor or null");
                }
            });
        }
        return Reflect.construct(target, args);
    }
});

const Date_ = Date.prototype.toString;
Date.prototype.toString = function () {
    const originalStr = Date_.call(this);
    return originalStr.replace(/China Standard Time/, '中国标准时间');
};

Object.defineProperty(global, Symbol.toStringTag, {
    value: 'Window',
    writable: true,
});
Object.defineProperty(globalThis, Symbol.toStringTag, {
    value: 'Window',
    writable: true,
});
window = globalThis
window.globalCanvas = {}
window.CanvasObj = {}
window.chrome = {
    loadTimes: function () {
    },
    csi: function csi() {
    },
    app: {
        isInstalled: false,
        getDetails() {
        },
        getIsInstalled() {
        },
        installState() {
        },
        runningState() {
            throw new TypeError("Error in invocation of app.runningState()")
        },
        InstallState: {DISABLED: "disabled", INSTALLED: "installed", NOT_INSTALLED: "not_installed"},
        RunningState: {"CANNOT_RUN": "cannot_run", "READY_TO_RUN": "ready_to_run", RUNNING: "running"},
    }
}

for (let i of globalvalue.onlubKeys) {
    definedWindow(i)
}

Object["getOwnPropertyNames_"] = Object["getOwnPropertyNames"]
Object["getOwnPropertyNames"] = function () {
    if (arguments[0] === crypto) {
        return globalvalue.obj_getOwnPropertyNames.crypto
    } else if (arguments[0].name === "contentWindow") {
        return globalvalue.obj_getOwnPropertyNames.contentWindow
    } else if (arguments[0] === window) {
        return globalvalue.obj_getOwnPropertyNames.window
    } else if (arguments[0] === performance) {
        return globalvalue.obj_getOwnPropertyNames.performance
    }
    return Object["getOwnPropertyNames_"].apply(this, arguments)
}

Object["keys_"] = Object["keys"]
Object['keys'] = function () {
    if (arguments[0].name === "contentWindow") {
        return globalvalue.obj_keys.contentWindow
    } else if (arguments[0] === window) {
        return globalvalue.obj_keys.window
    } else if (arguments[0].name === "Notification") {
        return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    }
    return Object["keys_"].apply(this, arguments)
}

setNameEmpty(window.chrome.loadTimes)
setNameEmpty(window.chrome.csi)

// postMessage
window.postMessage = function () {
    if (arguments[0].toString() === '[object PluginArray]') {
        throw new DataCloneError("Failed to execute 'postMessage' on 'Window': PluginArray object could not be cloned.")
    } else {
        return undefined
    }
}
setNative(postMessage, 'postMessage')
window.alert = function () {
}
setNative(alert, 'alert')
window.blur = function () {
}
setNative(blur, 'blur')
window.close = function () {
}
setNative(close, 'close')
window.confirm = function () {
}
setNative(confirm, 'confirm')
window.focus = function () {
}
setNative(focus, 'focus')
window.getSelection = function () {
}
setNative(getSelection, 'getSelection')
window.matchMedia = function () {
}
setNative(matchMedia, 'matchMedia')
window.moveBy = function () {
}
setNative(moveBy, 'moveBy')
window.moveTo = function () {
}
setNative(moveTo, 'moveTo')
window.open = function () {

}
setNative(open, 'open')
window.print = function () {

}
setNative(print, 'print')
window.prompt = function () {

}
setNative(prompt, 'prompt')
window.resizeBy = function () {

}
setNative(resizeBy, 'resizeBy')
window.resizeTo = function () {

}
setNative(resizeTo, 'resizeTo')
window.scroll = function () {

}
setNative(scroll, 'scroll')
window.scrollBy = function () {

}
setNative(scrollBy, 'scrollBy')
window.scrollTo = function () {

}
setNative(scrollTo, 'scrollTo')
window.HTMLElement = function () {

}
setNative(HTMLElement, 'HTMLElement')
window.onscrollstart = function () {
}
setNative(onscrollstart, "onscrollstart")
window.CaretPosition = function () {
}
setNative(CaretPosition, "CaretPosition")
window.getComputedStyle = function () {
    return div.style
}
setNative(getComputedStyle, 'getComputedStyle')
window.webkitResolveLocalFileSystemURL = function () {
}
setNative(webkitResolveLocalFileSystemURL, 'webkitResolveLocalFileSystemURL')
window.createImageBitmap = function () {
}
setNative(createImageBitmap, 'createImageBitmap')
window.releaseEvents = function () {
}
setNative(releaseEvents, 'releaseEvents')
window.reportError = function () {
}
setNative(reportError, 'reportError')
window.requestIdleCallback = function () {
}
setNative(requestIdleCallback, 'requestIdleCallback')
window.find = function () {
}
setNative(find, 'find')
window.stop = function () {
}
setNative(stop, 'stop')
window.SharedStorageWorklet = function () {
    return div.style
}
setNative(SharedStorageWorklet, 'SharedStorageWorklet')
window.webkitRequestFileSystem = function () {
}
setNative(webkitRequestFileSystem, 'webkitRequestFileSystem')
window.requestAnimationFrame = function () {
    return 1
}
setNative(requestAnimationFrame, 'requestAnimationFrame')
setNative(clearTimeout, 'clearTimeout')
setNative(clearInterval, 'clearInterval')

setTimeout = function (fn, delay, ...args) {
    globalvalue.setTimeout_count++
    if (globalvalue.setTimeout_count > 30) {
        return 39
    } else {
        return 1
    }
};
setNative(setTimeout, 'setTimeout')

setInterval = function () {
    globalvalue.setInterval_count++
    if (globalvalue.setInterval_count == 1) {
        return 38
    } else {
        return 1
    }
}
setNative(setInterval, 'setInterval')

setNative(Object.keys, 'keys')

// Scheduling
window.Scheduling = function Scheduling() {
    throw new TypeError('Illegal invocation')
}
Scheduling.prototype = {
    isInputPending() {
        if (!(this instanceof Scheduling)) throw new TypeError('Illegal invocation')
        debugger;
    }
}
Scheduling.prototype[Symbol.toStringTag] = "Scheduling"
setPrototypeNative(Scheduling)

// Scheduler
window.Scheduler = function () {
}
Scheduler.prototype = {
    postTask() {
    },
    yield() {
    }
}
Scheduler.prototype[Symbol.toStringTag] = "Scheduler"
setPrototypeNative(Scheduler)
window.scheduler = {}
Object.setPrototypeOf(scheduler, Scheduler.prototype)

// TrustedTypePolicyFactory
window.TrustedTypePolicyFactory = function () {
}
TrustedTypePolicyFactory.prototype = {
    createPolicy() {
    },
    getAttributeType() {
    },
    getPropertyType() {
    },
    getTypeMapping() {
    },
    isHTML() {
    },
    isScript() {
    },
    isScriptURL() {
    },
    get defaultPolicy() {
        return null
    },
    get emptyHTML() {
        return ""
    },
    get emptyScript() {
        return ""
    }
}
TrustedTypePolicyFactory.prototype[Symbol.toStringTag] = "TrustedTypePolicyFactory"
setPrototypeNative(TrustedTypePolicyFactory)
window.trustedTypes = {}
Object.setPrototypeOf(trustedTypes, TrustedTypePolicyFactory.prototype)

// DocumentPictureInPicture
window.DocumentPictureInPicture = function () {
}
DocumentPictureInPicture.prototype = {
    tmp: {
        onenter: null
    },
    requestWindow() {
    },
    get onenter() {
        return this.tmp.onenter
    },
    set onenter(arg) {
        this.tmp.onenter = arg
    },
    get window() {
        return null
    }
}
DocumentPictureInPicture.prototype[Symbol.toStringTag] = "DocumentPictureInPicture"
setPrototypeNative(DocumentPictureInPicture)
window.documentPictureInPicture = {}
Object.setPrototypeOf(documentPictureInPicture, DocumentPictureInPicture.prototype)

// StyleMedia
window.StyleMedia = function () {
}
StyleMedia.prototype = {
    matchMedium() {
    },
    get type() {
        return "screen"
    }
}
StyleMedia.prototype[Symbol.toStringTag] = "StyleMedia"
setPrototypeNative(StyleMedia)
window.styleMedia = {}
Object.setPrototypeOf(styleMedia, StyleMedia.prototype)

// VisualViewport
window.VisualViewport = function () {
}
VisualViewport.prototype = {
    tmp: {
        onresize: null,
        onscroll: null,
        onscrollend: null,
    },
    get height() {
        return 0
    },
    get offsetLeft() {
        return 0
    },
    get offsetTop() {
        return 0
    },
    get onresize() {
        return this.tmp.onscroll
    },
    set onresize(arg) {
        this.tmp.onresize = arg
    },
    get onscroll() {
        return this.tmp.onscroll
    },
    set onscroll(arg) {
        this.tmp.onscroll = arg
    },
    get onscrollend() {
        return this.tmp.onscrollend
    },
    set onscrollend(arg) {
        this.tmp.onscrollend = arg
    },
    get pageLeft() {
        return 0
    },
    get pageTop() {
        return 0
    },
    get scale() {
        return 1
    },
    get width() {
        return 0
    }
}
VisualViewport.prototype[Symbol.toStringTag] = "VisualViewport"
setPrototypeNative(VisualViewport)
window.visualViewport = {}
Object.setPrototypeOf(visualViewport, VisualViewport.prototype)

// CookieStore
window.CookieStore = function () {
}
CookieStore.prototype = {
    delete: function () {
    },
    get: function () {
    },
    getAll: function () {
    },
    set: function () {
    },
    addEventListener: function () {
    },
    removeEventListener: function () {
    },
    get onchange() {
    },
    set onchange(arg) {
    },
}
CookieStore.prototype[Symbol.toStringTag] = "CookieStore"
setPrototypeNative(CookieStore)
window.cookieStore = {}
Object.setPrototypeOf(cookieStore, CookieStore.prototype)

// SharedStorage
window.SharedStorage = function () {
}
SharedStorage.prototype = {
    append() {
    },
    batchUpdate() {
    },
    clear() {
    },
    createWorklet() {
    },
    delete() {
    },
    get() {
    },
    run() {
    },
    selectURL() {
    },
    set() {
    },
    get worklet() {
        return SharedStorageWorklet
    }
}
SharedStorage.prototype[Symbol.toStringTag] = "SharedStorage"
setPrototypeNative(SharedStorage)
window.sharedStorage = {}
Object.setPrototypeOf(sharedStorage, SharedStorage.prototype)

// IDBFactory
window.IDBFactory = function () {
}
IDBFactory.prototype = {
    cmp() {
    },
    databases() {
    },
    deleteDatabase() {
    },
    open() {
    }
}
IDBFactory.prototype[Symbol.toStringTag] = "IDBFactory"
setPrototypeNative(IDBFactory)
window.indexedDB = {}
Object.setPrototypeOf(indexedDB, IDBFactory.prototype)

// SpeechSynthesis
window.SpeechSynthesis = function () {
}
SpeechSynthesis.prototype = {
    cancel() {
    },
    getVoices() {
    },
    pause() {
    },
    resume() {
    },
    speak() {
    },
    get onvoiceschanged() {
    },
    set onvoiceschanged(arg) {
    },
    get paused() {
        return false
    },
    get pending() {
        return false
    },
    get speaking() {
        return false
    },
}
SpeechSynthesis.prototype[Symbol.toStringTag] = "SpeechSynthesis"
setPrototypeNative(SpeechSynthesis)
window.speechSynthesis = {}
Object.setPrototypeOf(speechSynthesis, SpeechSynthesis.prototype)

// Navigation
window.Navigation = function () {
}
Navigation.prototype = {}
Navigation.prototype[Symbol.toStringTag] = "Navigation"
setPrototypeNative(Navigation)
window.navigation = {}
Object.setPrototypeOf(navigation, Navigation.prototype)

// Element
window.Element = function () {
}
Element.prototype = {
    attachShadow() {
        if (!(this instanceof Element))
            throw new TypeError('Illegal invocation')
    }
}
Element.prototype[Symbol.toStringTag] = "Element"
setPrototypeNative(Element)

// External
window.External = function () {
}
External.prototype = {
    AddSearchProvider() {
        if (!(this instanceof External))
            throw new TypeError('Illegal invocation')
    },
    IsSearchProviderInstalled() {
        if (!(this instanceof External))
            throw new TypeError('Illegal invocation')
    }
}
External.prototype[Symbol.toStringTag] = "External"
setPrototypeNative(External)

// BarProp
window.BarProp = function () {
}
BarProp.prototype = {
    get visible() {
        if (!(this instanceof BarProp))
            throw new TypeError('Illegal invocation')
        return true
    }
}
BarProp.prototype[Symbol.toStringTag] = "BarProp"
setPrototypeNative(BarProp)

window.personalbar = {}
Object.setPrototypeOf(personalbar, BarProp.prototype)
window.toolbar = {}
Object.setPrototypeOf(toolbar, BarProp.prototype)
window.scrollbars = {}
Object.setPrototypeOf(scrollbars, BarProp.prototype)
window.locationbar = {}
Object.setPrototypeOf(locationbar, BarProp.prototype)
window.menubar = {}
Object.setPrototypeOf(menubar, BarProp.prototype)
window.statusbar = {}
Object.setPrototypeOf(statusbar, BarProp.prototype)

// Screen
window.Screen = function Screen() {
    throw new TypeError('Illegal invocation')
}
Screen.prototype = {
    get width() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 1920;
    },
    get pixelDepth() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        if (navigator.userAgent.indexOf("Windows") !== -1) {
            return 24
        } else {
            return 24
        }
    },
    get availHeight() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 1055;
    },
    get availLeft() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get availTop() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get availWidth() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 1920;
    },
    get isExtended() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return false
    },
    get orientation() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return {
            angle: 0,
            type: "landscape-primary",
            onchange: null
        }
    },
    get onchange() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return null
    },
    get height() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        return 1080;
    },
    get colorDepth() {
        if (!(this instanceof Screen))
            throw new TypeError('Illegal invocation')
        if (navigator.userAgent.indexOf("Windows") !== -1) {
            return 24
        } else {
            return 24
        }
    },
}
Screen.prototype[Symbol.toStringTag] = "Screen"
setPrototypeNative(Screen)
window.screen = {}
Object.setPrototypeOf(screen, Screen.prototype)

// XRSystem
window.XRSystem = function XRSystem() {
    throw new TypeError('Illegal invocation')
}
XRSystem.prototype = {
    isSessionSupported() {
        if (!(this instanceof XRSystem))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            reject(true)
        })
    },
    get ondevicechange() {
        if (!(this instanceof XRSystem))
            throw new TypeError('Illegal invocation')
        return null
    },
    supportsSession() {
        if (!(this instanceof XRSystem))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            resolve(true)
        })
    },
    requestSession() {
        if (!(this instanceof XRSystem))
            throw new TypeError('Illegal invocation')
        debugger
        return new Promise(function (resolve, reject) {
            reject(true)
        })
    }
}
XRSystem.prototype[Symbol.toStringTag] = "XRSystem"
setPrototypeNative(XRSystem)

// USB
window.USB = function USB() {
    throw new TypeError('Illegal invocation')
};
USB.prototype = {
    getDevices() {
        if (!(this instanceof USB))
            throw new TypeError('Illegal invocation')
        return new Promise(function (resolve, reject) {
            resolve([])
        })
    },
    requestDevice() {
        if (!(this instanceof USB))
            throw new TypeError('Illegal invocation')
        return new Promise(function (resolve, reject) {
            resolve({
                addEventListener: function addEventListener() {
                },
                configuration: {
                    configurationValue: 1,
                    interface: {}
                }
            })
        })
    },
    get onconnect() {
        if (!(this instanceof USB))
            throw new TypeError('Illegal invocation')
        return null
    },
    get ondisconnect() {
        if (!(this instanceof USB))
            throw new TypeError('Illegal invocation')
        return null
    }
}
USB.prototype[Symbol.toStringTag] = "USB"
setPrototypeNative(USB)

// MimeTypeArray
window.MimeTypeArray = function MimeTypeArray() {
    throw new TypeError('Illegal invocation')
}
MimeTypeArray.prototype = {
    item() {
        if (!(this instanceof MimeTypeArray))
            throw new TypeError('Illegal invocation')
        return {
            description: 'description',
            suffixes: 'suffixes',
            type: 'type',
        }
    },
    namedItem() {
        if (!(this instanceof MimeTypeArray))
            throw new TypeError('Illegal invocation')
        return {
            description: 'description',
            suffixes: 'suffixes',
            type: 'type',
        }
    },
    get length() {
        if (!(this instanceof MimeTypeArray))
            throw new TypeError('Illegal invocation')
        let tmp = Object.keys(this)
        return tmp.length / 2
    },
}
MimeTypeArray.prototype[Symbol.toStringTag] = "MimeTypeArray"
setPrototypeNative(MimeTypeArray)

// UserActivation
window.UserActivation = function UserActivation() {
    throw new TypeError('Illegal invocation')
}
UserActivation.prototype = {
    get hasBeenActive() {
        if (!(this instanceof UserActivation))
            throw new TypeError('Illegal invocation')
        return false
    },
    get isActive() {
        if (!(this instanceof UserActivation))
            throw new TypeError('Illegal invocation')
        return false
    }
}
UserActivation.prototype[Symbol.toStringTag] = "UserActivation"
setPrototypeNative(UserActivation)

// DeprecatedStorageQuota
window.DeprecatedStorageQuota = function DeprecatedStorageQuota() {
    throw new TypeError('Illegal invocation')
}
DeprecatedStorageQuota.prototype = {
    queryUsageAndQuota() {
        if (!(this instanceof DeprecatedStorageQuota))
            throw new TypeError('Illegal invocation')
        debugger
    },
    requestQuota() {
        if (!(this instanceof DeprecatedStorageQuota))
            throw new TypeError('Illegal invocation')
        debugger
    }
}
DeprecatedStorageQuota.prototype[Symbol.toStringTag] = "DeprecatedStorageQuota"
setPrototypeNative(DeprecatedStorageQuota)

// Geolocation
window.Geolocation = function Geolocation() {
    throw new TypeError('Illegal invocation')
}
Geolocation.prototype = {
    getCurrentPosition() {
        if (!(this instanceof Geolocation))
            throw new TypeError('Illegal invocation')
        return {
            coords: {
                latitude: 0,
                longitude: 0,
            },
            timestamp: 0,
        }
    },
    watchPosition() {
        if (!(this instanceof Geolocation))
            throw new TypeError('Illegal invocation')
        return 0
    },
    clearWatch() {
        if (!(this instanceof Geolocation))
            throw new TypeError('Illegal invocation')
        debugger
    }
}
Geolocation.prototype[Symbol.toStringTag] = "Geolocation"
setPrototypeNative(Geolocation)

// NetworkInformation
window.NetworkInformation = function NetworkInformation() {
    throw new TypeError('Illegal invocation')
}
NetworkInformation.prototype = {
    get downlink() {
        if (!(this instanceof NetworkInformation))
            throw new TypeError('Illegal invocation')
        return 3.85
    },
    get rtt() {
        if (!(this instanceof NetworkInformation))
            throw new TypeError('Illegal invocation')
        return 100
    },
    get onchange() {
        if (!(this instanceof NetworkInformation))
            throw new TypeError('Illegal invocation')
        return null
    },
    get effectiveType() {
        if (!(this instanceof NetworkInformation))
            throw new TypeError('Illegal invocation')
        return "4g"
    },
    get saveData() {
        if (!(this instanceof NetworkInformation))
            throw new TypeError('Illegal invocation')
        return false
    }
}
NetworkInformation.prototype[Symbol.toStringTag] = "NetworkInformation"
setPrototypeNative(NetworkInformation)

// WindowControlsOverlay
window.WindowControlsOverlay = function WindowControlsOverlay() {
    throw new TypeError('Illegal invocation')
}
WindowControlsOverlay.prototype = {
    getTitlebarAreaRect() {
        if (!(this instanceof WindowControlsOverlay))
            throw new TypeError('Illegal invocation')

    },
    get ongeometrychange() {
        if (!(this instanceof WindowControlsOverlay))
            throw new TypeError('Illegal invocation')
        return null
    },
    get visible() {
        if (!(this instanceof WindowControlsOverlay))
            throw new TypeError('Illegal invocation')
        return false
    }
}
WindowControlsOverlay.prototype[Symbol.toStringTag] = "WindowControlsOverlay"
setPrototypeNative(WindowControlsOverlay)

// Bluetooth
window.Bluetooth = function Bluetooth() {
    throw new TypeError('Illegal invocation')
}
Bluetooth.prototype = {
    getAvailability() {
        if (!(this instanceof Bluetooth))
            throw new TypeError('Illegal invocation')
        return {
            addEventListener: function addEventListener() {
            },
            removeEventListener: function removeEventListener() {
            },
            onsuccess: function onsuccess() {
            },
            onerror: function onerror() {
            },
        }
    },
    requestDevice() {
        if (!(this instanceof Bluetooth))
            throw new TypeError('Illegal invocation')

    }
}
Bluetooth.prototype[Symbol.toStringTag] = "Bluetooth"
setPrototypeNative(Bluetooth)

// GPU
window.GPU = function GPU() {
    throw new TypeError('Illegal invocation')
}
GPU.prototype = {
    getPreferredCanvasFormat() {
        if (!(this instanceof GPU))
            throw new TypeError('Illegal invocation')

        return []
    },
    requestAdapter() {
        if (!(this instanceof GPU))
            throw new TypeError('Illegal invocation')

        return {}
    },

    get wgslLanguageFeatures() {
        if (!(this instanceof GPU))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, WGSLLanguageFeatures.prototype)
        return tmp
    }
}
GPU.prototype[Symbol.toStringTag] = "GPU"
setPrototypeNative(GPU)

// CredentialsContainer
window.CredentialsContainer = function CredentialsContainer() {
    throw new TypeError('Illegal invocation')
}
CredentialsContainer.prototype = {
    get() {
        if (!(this instanceof CredentialsContainer)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve({})
        })
    },
    preventSilentAccess() {
        if (!(this instanceof CredentialsContainer)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve({})
        })
    },
    create() {
        if (!(this instanceof CredentialsContainer)) throw new TypeError('Illegal invocation')

        return {}
    },
    store() {
        if (!(this instanceof CredentialsContainer)) throw new TypeError('Illegal invocation')

        return {}
    },
}
CredentialsContainer.prototype[Symbol.toStringTag] = "CredentialsContainer"
setPrototypeNative(CredentialsContainer)

// MediaDevices
window.MediaDevices = function MediaDevices() {
    throw new TypeError('Illegal invocation')
}
MediaDevices.prototype = {
    getDisplayMedia() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve({})
        })
    },
    getUserMedia() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve({})
        })
    },
    get ondevicechange() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')
        return null
    },
    enumerateDevices() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')

    },
    setCaptureHandleConfig() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')

    },
    getSupportedConstraints() {
        if (!(this instanceof MediaDevices)) throw new TypeError('Illegal invocation')

    }
}
MediaDevices.prototype[Symbol.toStringTag] = "MediaDevices"
setPrototypeNative(MediaDevices)

// NavigatorLogin
window.NavigatorLogin = function NavigatorLogin() {
    throw new TypeError('Illegal invocation')
}
NavigatorLogin.prototype = {
    get setStatus() {
        if (!(this instanceof NavigatorLogin)) throw new TypeError('Illegal invocation')
        return {}
    },
}
NavigatorLogin.prototype[Symbol.toStringTag] = "NavigatorLogin"
setPrototypeNative(NavigatorLogin)

// StorageManager
window.StorageManager = function StorageManager() {
    throw new TypeError('Illegal invocation')
}
StorageManager.prototype = {
    persist() {
        if (!(this instanceof StorageManager)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve(false)
        })
    },
    persisted() {
        if (!(this instanceof StorageManager)) throw new TypeError('Illegal invocation')

        return new Promise((resolve, reject) => {
            resolve(false)
        })
    },
    estimate() {
        if (!(this instanceof StorageManager)) throw new TypeError('Illegal invocation')

    },
    getDirectory() {
        if (!(this instanceof StorageManager)) throw new TypeError('Illegal invocation')

    }
}
StorageManager.prototype[Symbol.toStringTag] = "StorageManager"
setPrototypeNative(StorageManager)

// DOMRectReadOnly
window.DOMRectReadOnly = function DOMRectReadOnly() {
    throw new TypeError('Illegal invocation')
}
DOMRectReadOnly.prototype = {
    toJSON() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
    },
    get bottom() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get top() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get left() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get right() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get height() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get width() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get x() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
    get y() {
        if (!(this instanceof DOMRectReadOnly)) throw new TypeError('Illegal invocation')
        return 0
    },
}
DOMRectReadOnly.prototype[Symbol.toStringTag] = "DOMRectReadOnly"
setPrototypeNative(DOMRectReadOnly)

// DOMRect
window.DOMRect = function DOMRect() {
    throw new TypeError('Illegal invocation')
}
DOMRect.prototype = {
    get height() {
        if (!(this instanceof DOMRect)) throw new TypeError('Illegal invocation')
        return 0
    },
    get width() {
        if (!(this instanceof DOMRect)) throw new TypeError('Illegal invocation')
        return 0
    },
    get x() {
        if (!(this instanceof DOMRect)) throw new TypeError('Illegal invocation')
        return 0
    },
    get y() {
        if (!(this instanceof DOMRect)) throw new TypeError('Illegal invocation')
        return 0
    }
}
DOMRect.prototype[Symbol.toStringTag] = "DOMRect"
setPrototypeNative(DOMRect)
Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype)

// HID
window.HID = function HID() {
    throw new TypeError('Illegal invocation')
}
HID.prototype = {
    getDevices() {
        if (!(this instanceof HID))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    requestDevice() {
        if (!(this instanceof HID))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    get onconnect() {
        if (!(this instanceof HID))
            throw new TypeError('Illegal invocation')
        return null
    },
    get ondisconnect() {
        if (!(this instanceof HID))
            throw new TypeError('Illegal invocation')
        return null
    }
}
HID.prototype[Symbol.toStringTag] = "HID"
setPrototypeNative(HID)

// LockManager
window.LockManager = function LockManager() {
    throw new TypeError('Illegal invocation')
}
LockManager.prototype = {
    request() {
        if (!(this instanceof LockManager))
            throw new TypeError('Illegal invocation')
        debugger;
        return new Promise((resolve, reject) => {
            let tmp = {}
            Object.setPrototypeOf(tmp, Lock.prototype)
            resolve(tmp)
        })
    },
    query() {
        if (!(this instanceof LockManager))
            throw new TypeError('Illegal invocation')
        debugger;
        return new Promise((resolve, reject) => {
            resolve({})
        })
    }
}
LockManager.prototype[Symbol.toStringTag] = "LockManager"
setPrototypeNative(LockManager)

// MediaSession
window.MediaSession = function MediaSession() {
    throw new TypeError('Illegal invocation')
}
MediaSession.prototype = {
    setActionHandler() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    setCameraActive() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    setMicrophoneActive() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    setPositionState() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    get playbackState() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        return "none"
    },
    get metadata() {
        if (!(this instanceof MediaSession))
            throw new TypeError('Illegal invocation')
        return null
    },
}
MediaSession.prototype[Symbol.toStringTag] = "MediaSession"
setPrototypeNative(MediaSession)

// Presentation
window.Presentation = function Presentation() {
    throw new TypeError('Illegal invocation')
};
Presentation.prototype = {
    get defaultRequest() {
        if (!(this instanceof Presentation))
            throw new TypeError('Illegal invocation')
        return null
    },
    get receiver() {
        if (!(this instanceof Presentation))
            throw new TypeError('Illegal invocation')
        return null
    }
}
Presentation.prototype[Symbol.toStringTag] = "Presentation"
setPrototypeNative(Presentation)

// ServiceWorkerContainer
window.ServiceWorkerContainer = function ServiceWorkerContainer() {
    throw new TypeError('Illegal invocation')
}
ServiceWorkerContainer.prototype = {
    get ready() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')
        return new Promise((resolve, reject) => {
            resolve({})
        })
    },
    get onmessageerror() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')
        return null
    },
    get onmessage() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')
        return null
    },
    get controller() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')
        return null
    },
    getRegistration() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')

    },
    getRegistrations() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')

    },
    get oncontrollerchange() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')
        return null
    },
    register() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')

    },
    startMessages() {
        if (!(this instanceof ServiceWorkerContainer)) throw new TypeError('Illegal invocation')

    }
}
ServiceWorkerContainer.prototype[Symbol.toStringTag] = "ServiceWorkerContainer"
setPrototypeNative(ServiceWorkerContainer)

// CanvasRenderingContext2D
window.CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    throw new TypeError('Illegal invocation')
}
CanvasRenderingContext2D.prototype = {
    get canvas() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        return CanvasObj[this.__canvas_id]
    },
    set canvas(canvas) {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        this.__canvas_id = canvas.canvas_id
    },
    rect() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> rect', [...arguments])
    },
    isPointInPath() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> isPointInPath', [...arguments])
        return false
    },
    fillRect() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> fillRect', [...arguments])
        // return false
    },
    fillText() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> fillText', [...arguments])
    },
    beginPath() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> beginPath', [...arguments])
    },
    arc() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> arc', [...arguments])
    },
    closePath() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> closePath', [...arguments])
    },
    fill() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> fill', [...arguments])
    },
    getImageData() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> getImageData', [...arguments])
        // debugger
        let tmp = {
            'data': new Uint8ClampedArray(64)
        }
        Object.setPrototypeOf(tmp, ImageData.prototype)
        return tmp
    },
    putImageData() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> putImageData', [...arguments])
        // debugger
    },
    createImageData() {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        my_log('调用 --> createImageData', [...arguments])
        let tmp = {
            'data': new Uint8ClampedArray(64)
        }
        Object.setPrototypeOf(tmp, ImageData.prototype)
        return tmp
    },
    measureText(v) {
        if (!(this instanceof CanvasRenderingContext2D)) throw new TypeError('Illegal invocation')
        // my_log('measureText参数 --> ', v)
        // my_log('this.font --> ', this.font)
        if (this.font === '72px Calibri, serif') {
            return {
                actualBoundingBoxAscent: 51,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 399,
            }
        } else if (this.font === '72px Century, monospace') {
            return {
                actualBoundingBoxAscent: 53,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 399,
            }
        } else if (this.font === '72px Marlett, serif') {
            return {
                actualBoundingBoxAscent: 51,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 399,
            }
        } else if (this.font === '72px Pristina, serif') {
            return {
                actualBoundingBoxAscent: 51,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 399,
            }
        } else if (this.font === '72px SimHei, serif') return {
            actualBoundingBoxAscent: 51,
            actualBoundingBoxDescent: -1,
            actualBoundingBoxLeft: 0,
            actualBoundingBoxRight: 389,
            alphabeticBaseline: -0,
            fontBoundingBoxAscent: 62,
            fontBoundingBoxDescent: 10,
            hangingBaseline: 49.599998474121094,
            ideographicBaseline: -10,
            width: 399,
        }
        if (this.font.indexOf('monospace') !== -1) {
            return {
                actualBoundingBoxAscent: 51,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 396,
            }
        } else if (this.font.indexOf('sans-serif') !== -1) {
            return {
                actualBoundingBoxAscent: 58,
                actualBoundingBoxDescent: 0,
                actualBoundingBoxLeft: -5,
                actualBoundingBoxRight: 593.0390625,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 76,
                fontBoundingBoxDescent: 19,
                hangingBaseline: 60.79999923706055,
                ideographicBaseline: -19,
                width: 597.19921875,
            }
        } else if (this.font.indexOf('serif') !== -1) {
            return {
                actualBoundingBoxAscent: 51,
                actualBoundingBoxDescent: -1,
                actualBoundingBoxLeft: 0,
                actualBoundingBoxRight: 389,
                alphabeticBaseline: -0,
                fontBoundingBoxAscent: 62,
                fontBoundingBoxDescent: 10,
                hangingBaseline: 49.599998474121094,
                ideographicBaseline: -10,
                width: 396,
            }
        }
    }
}
CanvasRenderingContext2D.prototype[Symbol.toStringTag] = "CanvasRenderingContext2D"
setPrototypeNative(CanvasRenderingContext2D)

// WebGLRenderingContext
window.WebGLRenderingContext = function WebGLRenderingContext() {
    throw new TypeError('Illegal invocation')
}
WebGLRenderingContext.prototype = {
    get DEPTH_BUFFER_BIT() {
        return 256
    }, get STENCIL_BUFFER_BIT() {
        return 1024
    }, get COLOR_BUFFER_BIT() {
        return 16384
    }, get POINTS() {
        return 0
    }, get LINES() {
        return 1
    }, get LINE_LOOP() {
        return 2
    }, get LINE_STRIP() {
        return 3
    }, get TRIANGLES() {
        return 4
    }, get TRIANGLE_STRIP() {
        return 5
    }, get TRIANGLE_FAN() {
        return 6
    }, get ZERO() {
        return 0
    }, get ONE() {
        return 1
    }, get SRC_COLOR() {
        return 768
    }, get ONE_MINUS_SRC_COLOR() {
        return 769
    }, get SRC_ALPHA() {
        return 770
    }, get ONE_MINUS_SRC_ALPHA() {
        return 771
    }, get DST_ALPHA() {
        return 772
    }, get ONE_MINUS_DST_ALPHA() {
        return 773
    }, get DST_COLOR() {
        return 774
    }, get ONE_MINUS_DST_COLOR() {
        return 775
    }, get SRC_ALPHA_SATURATE() {
        return 776
    }, get FUNC_ADD() {
        return 32774
    }, get BLEND_EQUATION() {
        return 32777
    }, get BLEND_EQUATION_RGB() {
        return 32777
    }, get BLEND_EQUATION_ALPHA() {
        return 34877
    }, get FUNC_SUBTRACT() {
        return 32778
    }, get FUNC_REVERSE_SUBTRACT() {
        return 32779
    }, get BLEND_DST_RGB() {
        return 32968
    }, get BLEND_SRC_RGB() {
        return 32969
    }, get BLEND_DST_ALPHA() {
        return 32970
    }, get BLEND_SRC_ALPHA() {
        return 32971
    }, get CONSTANT_COLOR() {
        return 32769
    }, get ONE_MINUS_CONSTANT_COLOR() {
        return 32770
    }, get CONSTANT_ALPHA() {
        return 32771
    }, get ONE_MINUS_CONSTANT_ALPHA() {
        return 32772
    }, get BLEND_COLOR() {
        return 32773
    }, get ARRAY_BUFFER() {
        return 34962
    }, get ELEMENT_ARRAY_BUFFER() {
        return 34963
    }, get ARRAY_BUFFER_BINDING() {
        return 34964
    }, get ELEMENT_ARRAY_BUFFER_BINDING() {
        return 34965
    }, get STREAM_DRAW() {
        return 35040
    }, get STATIC_DRAW() {
        return 35044
    }, get DYNAMIC_DRAW() {
        return 35048
    }, get BUFFER_SIZE() {
        return 34660
    }, get BUFFER_USAGE() {
        return 34661
    }, get CURRENT_VERTEX_ATTRIB() {
        return 34342
    }, get FRONT() {
        return 1028
    }, get BACK() {
        return 1029
    }, get FRONT_AND_BACK() {
        return 1032
    }, get TEXTURE_2D() {
        return 3553
    }, get CULL_FACE() {
        return 2884
    }, get BLEND() {
        return 3042
    }, get DITHER() {
        return 3024
    }, get STENCIL_TEST() {
        return 2960
    }, get DEPTH_TEST() {
        return 2929
    }, get SCISSOR_TEST() {
        return 3089
    }, get POLYGON_OFFSET_FILL() {
        return 32823
    }, get SAMPLE_ALPHA_TO_COVERAGE() {
        return 32926
    }, get SAMPLE_COVERAGE() {
        return 32928
    }, get NO_ERROR() {
        return 0
    }, get INVALID_ENUM() {
        return 1280
    }, get INVALID_VALUE() {
        return 1281
    }, get INVALID_OPERATION() {
        return 1282
    }, get OUT_OF_MEMORY() {
        return 1285
    }, get CW() {
        return 2304
    }, get CCW() {
        return 2305
    }, get LINE_WIDTH() {
        return 2849
    }, get ALIASED_POINT_SIZE_RANGE() {
        return 33901
    }, get ALIASED_LINE_WIDTH_RANGE() {
        return 33902
    }, get CULL_FACE_MODE() {
        return 2885
    }, get FRONT_FACE() {
        return 2886
    }, get DEPTH_RANGE() {
        return 2928
    }, get DEPTH_WRITEMASK() {
        return 2930
    }, get DEPTH_CLEAR_VALUE() {
        return 2931
    }, get DEPTH_FUNC() {
        return 2932
    }, get STENCIL_CLEAR_VALUE() {
        return 2961
    }, get STENCIL_FUNC() {
        return 2962
    }, get STENCIL_FAIL() {
        return 2964
    }, get STENCIL_PASS_DEPTH_FAIL() {
        return 2965
    }, get STENCIL_PASS_DEPTH_PASS() {
        return 2966
    }, get STENCIL_REF() {
        return 2967
    }, get STENCIL_VALUE_MASK() {
        return 2963
    }, get STENCIL_WRITEMASK() {
        return 2968
    }, get STENCIL_BACK_FUNC() {
        return 34816
    }, get STENCIL_BACK_FAIL() {
        return 34817
    }, get STENCIL_BACK_PASS_DEPTH_FAIL() {
        return 34818
    }, get STENCIL_BACK_PASS_DEPTH_PASS() {
        return 34819
    }, get STENCIL_BACK_REF() {
        return 36003
    }, get STENCIL_BACK_VALUE_MASK() {
        return 36004
    }, get STENCIL_BACK_WRITEMASK() {
        return 36005
    }, get VIEWPORT() {
        return 2978
    }, get SCISSOR_BOX() {
        return 3088
    }, get COLOR_CLEAR_VALUE() {
        return 3106
    }, get COLOR_WRITEMASK() {
        return 3107
    }, get UNPACK_ALIGNMENT() {
        return 3317
    }, get PACK_ALIGNMENT() {
        return 3333
    }, get MAX_TEXTURE_SIZE() {
        return 3379
    }, get MAX_VIEWPORT_DIMS() {
        return 3386
    }, get SUBPIXEL_BITS() {
        return 3408
    }, get RED_BITS() {
        return 3410
    }, get GREEN_BITS() {
        return 3411
    }, get BLUE_BITS() {
        return 3412
    }, get ALPHA_BITS() {
        return 3413
    }, get DEPTH_BITS() {
        return 3414
    }, get STENCIL_BITS() {
        return 3415
    }, get POLYGON_OFFSET_UNITS() {
        return 10752
    }, get POLYGON_OFFSET_FACTOR() {
        return 32824
    }, get TEXTURE_BINDING_2D() {
        return 32873
    }, get SAMPLE_BUFFERS() {
        return 32936
    }, get SAMPLES() {
        return 32937
    }, get SAMPLE_COVERAGE_VALUE() {
        return 32938
    }, get SAMPLE_COVERAGE_INVERT() {
        return 32939
    }, get COMPRESSED_TEXTURE_FORMATS() {
        return 34467
    }, get DONT_CARE() {
        return 4352
    }, get FASTEST() {
        return 4353
    }, get NICEST() {
        return 4354
    }, get GENERATE_MIPMAP_HINT() {
        return 33170
    }, get BYTE() {
        return 5120
    }, get UNSIGNED_BYTE() {
        return 5121
    }, get SHORT() {
        return 5122
    }, get UNSIGNED_SHORT() {
        return 5123
    }, get INT() {
        return 5124
    }, get UNSIGNED_INT() {
        return 5125
    }, get FLOAT() {
        return 5126
    }, get DEPTH_COMPONENT() {
        return 6402
    }, get ALPHA() {
        return 6406
    }, get RGB() {
        return 6407
    }, get RGBA() {
        return 6408
    }, get LUMINANCE() {
        return 6409
    }, get LUMINANCE_ALPHA() {
        return 6410
    }, get UNSIGNED_SHORT_4_4_4_4() {
        return 32819
    }, get UNSIGNED_SHORT_5_5_5_1() {
        return 32820
    }, get UNSIGNED_SHORT_5_6_5() {
        return 33635
    }, get FRAGMENT_SHADER() {
        return 35632
    }, get VERTEX_SHADER() {
        return 35633
    }, get MAX_VERTEX_ATTRIBS() {
        return 34921
    }, get MAX_VERTEX_UNIFORM_VECTORS() {
        return 36347
    }, get MAX_VARYING_VECTORS() {
        return 36348
    }, get MAX_COMBINED_TEXTURE_IMAGE_UNITS() {
        return 35661
    }, get MAX_VERTEX_TEXTURE_IMAGE_UNITS() {
        return 35660
    }, get MAX_TEXTURE_IMAGE_UNITS() {
        return 34930
    }, get MAX_FRAGMENT_UNIFORM_VECTORS() {
        return 36349
    }, get SHADER_TYPE() {
        return 35663
    }, get DELETE_STATUS() {
        return 35712
    }, get LINK_STATUS() {
        return 35714
    }, get VALIDATE_STATUS() {
        return 35715
    }, get ATTACHED_SHADERS() {
        return 35717
    }, get ACTIVE_UNIFORMS() {
        return 35718
    }, get ACTIVE_ATTRIBUTES() {
        return 35721
    }, get SHADING_LANGUAGE_VERSION() {
        return 35724
    }, get CURRENT_PROGRAM() {
        return 35725
    }, get NEVER() {
        return 512
    }, get LESS() {
        return 513
    }, get EQUAL() {
        return 514
    }, get LEQUAL() {
        return 515
    }, get GREATER() {
        return 516
    }, get NOTEQUAL() {
        return 517
    }, get GEQUAL() {
        return 518
    }, get ALWAYS() {
        return 519
    }, get KEEP() {
        return 7680
    }, get REPLACE() {
        return 7681
    }, get INCR() {
        return 7682
    }, get DECR() {
        return 7683
    }, get INVERT() {
        return 5386
    }, get INCR_WRAP() {
        return 34055
    }, get DECR_WRAP() {
        return 34056
    }, get VENDOR() {
        return 7936
    }, get RENDERER() {
        return 7937
    }, get VERSION() {
        return 7938
    }, get NEAREST() {
        return 9728
    }, get LINEAR() {
        return 9729
    }, get NEAREST_MIPMAP_NEAREST() {
        return 9984
    }, get LINEAR_MIPMAP_NEAREST() {
        return 9985
    }, get NEAREST_MIPMAP_LINEAR() {
        return 9986
    }, get LINEAR_MIPMAP_LINEAR() {
        return 9987
    }, get TEXTURE_MAG_FILTER() {
        return 10240
    }, get TEXTURE_MIN_FILTER() {
        return 10241
    }, get TEXTURE_WRAP_S() {
        return 10242
    }, get TEXTURE_WRAP_T() {
        return 10243
    }, get TEXTURE() {
        return 5890
    }, get TEXTURE_CUBE_MAP() {
        return 34067
    }, get TEXTURE_BINDING_CUBE_MAP() {
        return 34068
    }, get TEXTURE_CUBE_MAP_POSITIVE_X() {
        return 34069
    }, get TEXTURE_CUBE_MAP_NEGATIVE_X() {
        return 34070
    }, get TEXTURE_CUBE_MAP_POSITIVE_Y() {
        return 34071
    }, get TEXTURE_CUBE_MAP_NEGATIVE_Y() {
        return 34072
    }, get TEXTURE_CUBE_MAP_POSITIVE_Z() {
        return 34073
    }, get TEXTURE_CUBE_MAP_NEGATIVE_Z() {
        return 34074
    }, get MAX_CUBE_MAP_TEXTURE_SIZE() {
        return 34076
    }, get TEXTURE0() {
        return 33984
    }, get TEXTURE1() {
        return 33985
    }, get TEXTURE2() {
        return 33986
    }, get TEXTURE3() {
        return 33987
    }, get TEXTURE4() {
        return 33988
    }, get TEXTURE5() {
        return 33989
    }, get TEXTURE6() {
        return 33990
    }, get TEXTURE7() {
        return 33991
    }, get TEXTURE8() {
        return 33992
    }, get TEXTURE9() {
        return 33993
    }, get TEXTURE10() {
        return 33994
    }, get TEXTURE11() {
        return 33995
    }, get TEXTURE12() {
        return 33996
    }, get TEXTURE13() {
        return 33997
    }, get TEXTURE14() {
        return 33998
    }, get TEXTURE15() {
        return 33999
    }, get TEXTURE16() {
        return 34000
    }, get TEXTURE17() {
        return 34001
    }, get TEXTURE18() {
        return 34002
    }, get TEXTURE19() {
        return 34003
    }, get TEXTURE20() {
        return 34004
    }, get TEXTURE21() {
        return 34005
    }, get TEXTURE22() {
        return 34006
    }, get TEXTURE23() {
        return 34007
    }, get TEXTURE24() {
        return 34008
    }, get TEXTURE25() {
        return 34009
    }, get TEXTURE26() {
        return 34010
    }, get TEXTURE27() {
        return 34011
    }, get TEXTURE28() {
        return 34012
    }, get TEXTURE29() {
        return 34013
    }, get TEXTURE30() {
        return 34014
    }, get TEXTURE31() {
        return 34015
    }, get ACTIVE_TEXTURE() {
        return 34016
    }, get REPEAT() {
        return 10497
    }, get CLAMP_TO_EDGE() {
        return 33071
    }, get MIRRORED_REPEAT() {
        return 33648
    }, get FLOAT_VEC2() {
        return 35664
    }, get FLOAT_VEC3() {
        return 35665
    }, get FLOAT_VEC4() {
        return 35666
    }, get INT_VEC2() {
        return 35667
    }, get INT_VEC3() {
        return 35668
    }, get INT_VEC4() {
        return 35669
    }, get BOOL() {
        return 35670
    }, get BOOL_VEC2() {
        return 35671
    }, get BOOL_VEC3() {
        return 35672
    }, get BOOL_VEC4() {
        return 35673
    }, get FLOAT_MAT2() {
        return 35674
    }, get FLOAT_MAT3() {
        return 35675
    }, get FLOAT_MAT4() {
        return 35676
    }, get SAMPLER_2D() {
        return 35678
    }, get SAMPLER_CUBE() {
        return 35680
    }, get VERTEX_ATTRIB_ARRAY_ENABLED() {
        return 34338
    }, get VERTEX_ATTRIB_ARRAY_SIZE() {
        return 34339
    }, get VERTEX_ATTRIB_ARRAY_STRIDE() {
        return 34340
    }, get VERTEX_ATTRIB_ARRAY_TYPE() {
        return 34341
    }, get VERTEX_ATTRIB_ARRAY_NORMALIZED() {
        return 34922
    }, get VERTEX_ATTRIB_ARRAY_POINTER() {
        return 34373
    }, get VERTEX_ATTRIB_ARRAY_BUFFER_BINDING() {
        return 34975
    }, get IMPLEMENTATION_COLOR_READ_TYPE() {
        return 35738
    }, get IMPLEMENTATION_COLOR_READ_FORMAT() {
        return 35739
    }, get COMPILE_STATUS() {
        return 35713
    }, get LOW_FLOAT() {
        return 36336
    }, get MEDIUM_FLOAT() {
        return 36337
    }, get HIGH_FLOAT() {
        return 36338
    }, get LOW_INT() {
        return 36339
    }, get MEDIUM_INT() {
        return 36340
    }, get HIGH_INT() {
        return 36341
    }, get FRAMEBUFFER() {
        return 36160
    }, get RENDERBUFFER() {
        return 36161
    }, get RGBA4() {
        return 32854
    }, get RGB5_A1() {
        return 32855
    }, get RGB565() {
        return 36194
    }, get DEPTH_COMPONENT16() {
        return 33189
    }, get STENCIL_INDEX8() {
        return 36168
    }, get DEPTH_STENCIL() {
        return 34041
    }, get RENDERBUFFER_WIDTH() {
        return 36162
    }, get RENDERBUFFER_HEIGHT() {
        return 36163
    }, get RENDERBUFFER_INTERNAL_FORMAT() {
        return 36164
    }, get RENDERBUFFER_RED_SIZE() {
        return 36176
    }, get RENDERBUFFER_GREEN_SIZE() {
        return 36177
    }, get RENDERBUFFER_BLUE_SIZE() {
        return 36178
    }, get RENDERBUFFER_ALPHA_SIZE() {
        return 36179
    }, get RENDERBUFFER_DEPTH_SIZE() {
        return 36180
    }, get RENDERBUFFER_STENCIL_SIZE() {
        return 36181
    }, get FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE() {
        return 36048
    }, get FRAMEBUFFER_ATTACHMENT_OBJECT_NAME() {
        return 36049
    }, get FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL() {
        return 36050
    }, get FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE() {
        return 36051
    }, get COLOR_ATTACHMENT0() {
        return 36064
    }, get DEPTH_ATTACHMENT() {
        return 36096
    }, get STENCIL_ATTACHMENT() {
        return 36128
    }, get DEPTH_STENCIL_ATTACHMENT() {
        return 33306
    }, get NONE() {
        return 0
    }, get FRAMEBUFFER_COMPLETE() {
        return 36053
    }, get FRAMEBUFFER_INCOMPLETE_ATTACHMENT() {
        return 36054
    }, get FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT() {
        return 36055
    }, get FRAMEBUFFER_INCOMPLETE_DIMENSIONS() {
        return 36057
    }, get FRAMEBUFFER_UNSUPPORTED() {
        return 36061
    }, get FRAMEBUFFER_BINDING() {
        return 36006
    }, get RENDERBUFFER_BINDING() {
        return 36007
    }, get MAX_RENDERBUFFER_SIZE() {
        return 34024
    }, get INVALID_FRAMEBUFFER_OPERATION() {
        return 1286
    }, get UNPACK_FLIP_Y_WEBGL() {
        return 37440
    }, get UNPACK_PREMULTIPLY_ALPHA_WEBGL() {
        return 37441
    }, get CONTEXT_LOST_WEBGL() {
        return 37442
    }, get UNPACK_COLORSPACE_CONVERSION_WEBGL() {
        return 37443
    }, get BROWSER_DEFAULT_WEBGL() {
        return 37444
    }, get RGB8() {
        return 32849
    }, get RGBA8() {
        return 32856
    },
    createBuffer() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, WebGLBuffer.prototype)
        return tmp
    },
    bindBuffer() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('bindBuffer -> ', [...arguments])
        //
    },
    bufferData() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('bufferData -> ', [...arguments])
        //
    },
    createProgram() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('createProgram -> ', [...arguments])
        let tmp = {}
        Object.setPrototypeOf(tmp, WebGLProgram.prototype)
        return tmp
    },
    createShader() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('createShader -> ', [...arguments])
        let tmp = {}
        Object.setPrototypeOf(tmp, WebGLShader.prototype)
        return tmp
    },
    shaderSource() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('shaderSource -> ', [...arguments])
        //
    },
    compileShader() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('compileShader -> ', [...arguments])
        //
    },
    attachShader() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('attachShader -> ', [...arguments])
        //
    },
    linkProgram() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('linkProgram -> ', [...arguments])
        //
    },
    useProgram() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('useProgram -> ', [...arguments])
        //
    },
    getAttribLocation() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        if (arguments[1] === 'attrVertex') {
            return 0
        }
    },
    getUniformLocation() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        if (arguments[1] === 'uniformOffset') {
            let tmp = {}
            Object.setPrototypeOf(tmp, WebGLUniformLocation.prototype)
            return tmp
        }
    },
    enableVertexAttribArray() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        // debugger
    },
    vertexAttribPointer() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        // debugger
    },
    uniform2f() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        // debugger
    },
    drawArrays() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        // debugger
    },
    set canvas(canvas) {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        this.__canvas_id = canvas.canvas_id
    },
    get canvas() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        return CanvasObj[this.__canvas_id]
    },
    readPixels() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('readPixels -> ', [...arguments])
        //
    },
    getSupportedExtensions() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        my_log('getSupportedExtensions -> ', [...arguments])
        return ['EXT_clip_control', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_conservative_depth', 'EXT_depth_clamp', 'EXT_disjoint_timer_query_webgl2', 'EXT_float_blend', 'EXT_polygon_offset_clamp', 'EXT_render_snorm', 'EXT_texture_compression_bptc', 'EXT_texture_compression_rgtc', 'EXT_texture_filter_anisotropic', 'EXT_texture_mirror_clamp_to_edge', 'EXT_texture_norm16', 'KHR_parallel_shader_compile', 'NV_shader_noperspective_interpolation', 'OES_draw_buffers_indexed', 'OES_sample_variables', 'OES_shader_multisample_interpolation', 'OES_texture_float_linear', 'OVR_multiview2', 'WEBGL_blend_func_extended', 'WEBGL_clip_cull_distance', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_debug_renderer_info', 'WEBGL_debug_shaders', 'WEBGL_lose_context', 'WEBGL_multi_draw', 'WEBGL_polygon_mode', 'WEBGL_provoking_vertex', 'WEBGL_stencil_texturing']
    },
    getShaderPrecisionFormat(v1, v2) {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        let tmp = [v1, v2]
        if ((window['__23127'] + '').includes(tmp + ''))
            return {precision: 23, rangeMax: 127, rangeMin: 127}
        else if ((window['__030'] + '').includes(tmp + '')) {
            return {precision: 0, rangeMax: 30, rangeMin: 31}
        } else {

        }
    },
    getParameter() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        if (arguments[0] === 36348) {
            return 30
        } else if (arguments[0] === 3386) {
            return new Int32Array([32767, 32767])
        } else if (arguments[0] === 7937) {
            return "WebKit WebGL"
        } else if (arguments[0] === 35724) {
            return "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)"
        } else if (arguments[0] === 3415) {
            return 0
        } else if (arguments[0] === 7936) {
            return "WebKit"
        } else if (arguments[0] === 7938) {
            return "WebGL 2.0 (OpenGL ES 3.0 Chromium)"
        } else if (arguments[0] === 37445) {
            if (navigator.userAgent.indexOf("Windows") !== -1) {
                return "Google Inc. (Intel)"
            } else {
                return "Google Inc. (Apple)"
            }
        } else if (arguments[0] === 37446) {
            if (navigator.userAgent.indexOf("Windows") !== -1) {
                return "ANGLE (Intel, Intel(R) HD Graphics 4600 (0x00000412) Direct3D11 vs_5_0 ps_5_0, D3D11)"
            } else {
                return "ANGLE (Apple, ANGLE Metal Renderer: Apple M3 Pro, Unspecified Version)"
            }
        } else if (arguments[0] === 33902) {
            return new Float32Array([1, 1])
        } else if (arguments[0] === 33901) {
            if (navigator.userAgent.indexOf("Windows") !== -1) {
                return new Float32Array([1, 1024])
            } else {
                return new Float32Array([1, 511])
            }
        } else if (arguments[0] === 36349) {
            return 1024
        } else if (arguments[0] === 35375) {
            return 24
        } else if (arguments[0] === 35379) {
            return navigator.userAgent.indexOf("Windows") !== -1 ? 200704 : 53248
        } else if (arguments[0] === 35377) {
            return navigator.userAgent.indexOf("Windows") !== -1 ? 212992 : 53248
        } else if (arguments[0] === 35374) {
            return 24
        } else {
            my_log('getParameter 对应值未实现 -> ', arguments[0])
            debugger;
        }
    },
    getExtension() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        if (arguments[0] === 'EXT_texture_filter_anisotropic') {
            let tmp = {}
            Object.setPrototypeOf(tmp, EXTTextureFilterAnisotropic.prototype)
            return tmp
        } else if (arguments[0] === "WEBGL_debug_renderer_info") {
            let tmp = {}
            Object.setPrototypeOf(tmp, WebGLDebugRendererInfo.prototype)
            return tmp
        }
    },
    getContextAttributes() {
        if (!(this instanceof WebGLRenderingContext))
            throw new TypeError('Illegal invocation')
        return {
            "alpha": true,
            "antialias": true,
            "depth": true,
            "desynchronized": false,
            "failIfMajorPerformanceCaveat": false,
            "powerPreference": "default",
            "premultipliedAlpha": true,
            "preserveDrawingBuffer": false,
            "stencil": false,
            "xrCompatible": false
        }
    },
}
WebGLRenderingContext.prototype[Symbol.toStringTag] = "WebGLRenderingContext"
setNative(WebGLRenderingContext, "WebGLRenderingContext")
setPrototypeNative(WebGLRenderingContext)

// WebGLDebugRendererInfo
window.WebGLDebugRendererInfo = function WebGLDebugRendererInfo() {
    throw new TypeError('Illegal invocation')
}
WebGLDebugRendererInfo.prototype = {
    get UNMASKED_RENDERER_WEBGL() {
        return 37446
    },
    get UNMASKED_VENDOR_WEBGL() {
        return 37445
    }
}
WebGLDebugRendererInfo.prototype[Symbol.toStringTag] = "WebGLDebugRendererInfo"
setPrototypeNative(WebGLDebugRendererInfo)

// StorageBucketManager
window.StorageBucketManager = function StorageBucketManager() {
    throw new TypeError('Illegal invocation')
}
StorageBucketManager.prototype = {
    delete() {
        if (!(this instanceof StorageBucketManager))
            throw new TypeError('Illegal invocation')
        debugger;
        return {}
    },

    keys() {
        if (!(this instanceof StorageBucketManager))
            throw new TypeError('Illegal invocation')
        debugger;
        return {}
    },
    open() {
        if (!(this instanceof StorageBucketManager))
            throw new TypeError('Illegal invocation')
        debugger;
        return {}
    }

}
StorageBucketManager.prototype[Symbol.toStringTag] = "StorageBucketManager"
setPrototypeNative(StorageBucketManager)

// Clipboard
window.Clipboard = function Clipboard() {
    throw new TypeError('Illegal invocation')
}
Clipboard.prototype = {
    read() {
        if (!(this instanceof Clipboard))
            throw new TypeError('Illegal invocation')
        debugger
        return new Promise(function (resolve, reject) {
            resolve({
                types: ['text/plain'],
                getType: function getType() {
                    return 'text/plain'
                }
            })
        })
    },
    readText() {
        if (!(this instanceof Clipboard))
            throw new TypeError('Illegal invocation')
        debugger
        return new Promise(function (resolve, reject) {
            resolve('text')
        })
    },
    write() {
        if (!(this instanceof Clipboard))
            throw new TypeError('Illegal invocation')
        debugger;
        return new Promise(function (resolve, reject) {
            resolve()
        })
    },
    writeText() {
        if (!(this instanceof Clipboard))
            throw new TypeError('Illegal invocation')
        debugger;
        return new Promise(function (resolve, reject) {
            resolve()
        })
    }
}
Clipboard.prototype[Symbol.toStringTag] = "Clipboard"
setPrototypeNative(Clipboard)

// Keyboard
window.Keyboard = function Keyboard() {
    throw new TypeError('Illegal invocation')
}
Keyboard.prototype = {
    getLayoutMap() {
        if (!(this instanceof Keyboard))
            throw new TypeError('Illegal invocation')
        debugger
        return []
    },
    lock() {
        if (!(this instanceof Keyboard))
            throw new TypeError('Illegal invocation')
        debugger;
        return false
    },
    unlock() {
        if (!(this instanceof Keyboard))
            throw new TypeError('Illegal invocation')
        debugger;
        return null
    }
}
Keyboard.prototype[Symbol.toStringTag] = "Keyboard"
setPrototypeNative(Keyboard)

// NavigatorManagedData
window.NavigatorManagedData = function NavigatorManagedData() {
    throw new TypeError('Illegal invocation')
}
NavigatorManagedData.prototype = {
    get onmanagedconfigurationchange() {
        if (!(this instanceof NavigatorManagedData))
            throw new TypeError('Illegal invocation')
        return null
    },
    getManagedConfiguration() {
        if (!(this instanceof NavigatorManagedData))
            throw new TypeError('Illegal invocation')
        return new Promise(function (resolve, reject) {
            resolve({})
        })
    },
}
NavigatorManagedData.prototype[Symbol.toStringTag] = "NavigatorManagedData"
setPrototypeNative(NavigatorManagedData)

// VirtualKeyboard
window.VirtualKeyboard = function VirtualKeyboard() {
    throw new TypeError('Illegal invocation')
}
VirtualKeyboard.prototype = {
    get boundingRect() {
        if (!(this instanceof VirtualKeyboard))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, DOMRect.prototype)
        return tmp
    },
    hide() {
        if (!(this instanceof VirtualKeyboard))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    get ongeometrychange() {
        if (!(this instanceof VirtualKeyboard))
            throw new TypeError('Illegal invocation')
        return null
    },
    get overlaysContent() {
        if (!(this instanceof VirtualKeyboard))
            throw new TypeError('Illegal invocation')
        return false
    },
    show() {
        if (!(this instanceof VirtualKeyboard))
            throw new TypeError('Illegal invocation')
        debugger;
    }
}
VirtualKeyboard.prototype[Symbol.toStringTag] = "VirtualKeyboard"
setPrototypeNative(VirtualKeyboard)

// WakeLock
window.WakeLock = function WakeLock() {
    throw new TypeError('Illegal invocation')
}
WakeLock.prototype = {
    request() {
        if (!(this instanceof WakeLock))
            throw new TypeError('Illegal invocation')
        debugger
    },
}
WakeLock.prototype[Symbol.toStringTag] = "WakeLock"
setPrototypeNative(WakeLock)

// NavigatorUAData
window.NavigatorUAData = function NavigatorUAData() {
    throw new TypeError('Illegal invocation')
}
NavigatorUAData.prototype = {
    get brands() {
        if (!(this instanceof NavigatorUAData))
            throw new TypeError('Illegal invocation')
        return [
            {brand: 'Chromium', version: '140'},
            {brand: 'Microsoft Edge', version: '140'},
            {brand: 'Not-A.Brand', version: '99'}
        ]
    },
    getHighEntropyValues() {
        if (!(this instanceof NavigatorUAData))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    get platform() {
        if (!(this instanceof NavigatorUAData))
            throw new TypeError('Illegal invocation')
        return 'sec-ch-ua-platform'
    },
    get mobile() {
        if (!(this instanceof NavigatorUAData))
            throw new TypeError('Illegal invocation')
        return false
    },
    toJSON() {
        if (!(this instanceof NavigatorUAData))
            throw new TypeError('Illegal invocation')
        return {
            brands: this.brands,
            mobile: this.mobile,
            platform: this.platform
        }
    }
}
NavigatorUAData.prototype[Symbol.toStringTag] = "NavigatorUAData"
setPrototypeNative(NavigatorUAData)

// Ink
window.Ink = function Ink() {
    throw new TypeError('Illegal invocation')
}
Ink.prototype = {
    requestPresenter() {
        if (!(this instanceof Ink))
            throw new TypeError('Illegal invocation')
        debugger;
        return new Promise((resolve, reject) => {
            let tmp = {}
            Object.setPrototypeOf(tmp, DelegatedInkTrailPresenter.prototype)
            resolve(tmp)
        })
    }
}
Ink.prototype[Symbol.toStringTag] = "Ink"
setPrototypeNative(Ink)

// MediaCapabilities
window.MediaCapabilities = function MediaCapabilities() {
    throw new TypeError('Illegal invocation')
}
MediaCapabilities.prototype = {
    decodingInfo() {
        if (!(this instanceof MediaCapabilities))
            throw new TypeError('Illegal invocation')
        debugger;
        return {
            supported: true,
            smooth: true,
            powerEfficient: true,
            keySystemAccess: {
                keySystem: 'com.widevine.alpha',
                getConfiguration: function getConfiguration() {
                    return {
                        audioRobustness: 'SW_SECURE_CRYPTO',
                        videoRobustness: 'SW_SECURE_CRYPTO',
                    }
                }
            }
        }
    },
    encodingInfo() {
        if (!(this instanceof MediaCapabilities))
            throw new TypeError('Illegal invocation')
        debugger;
    }
}
MediaCapabilities.prototype[Symbol.toStringTag] = "MediaCapabilities"
setPrototypeNative(MediaCapabilities)

// EXTTextureFilterAnisotropic
window.EXTTextureFilterAnisotropic = function EXTTextureFilterAnisotropic() {
    throw new TypeError('Illegal invocation')
}
EXTTextureFilterAnisotropic.prototype = {
    get MAX_TEXTURE_MAX_ANISOTROPY_EXT() {
        return 34047
    },
    get TEXTURE_MAX_ANISOTROPY_EXT() {
        return 34046
    },
}
EXTTextureFilterAnisotropic.prototype[Symbol.toStringTag] = "EXTTextureFilterAnisotropic"
setPrototypeNative(EXTTextureFilterAnisotropic)

// Notification
window.Notification = function Notification(arg) {
    my_log("Notification>>>" + arg)
    return {
        configurable: true,
        enumerable: true,
        set: undefined,
        get: function permission() {
        }
    }
}
Notification.prototype = {
    get actions() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get badge() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get body() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get data() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get dir() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get icon() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get lang() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get onclick() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    set onclick(arg) {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get onclose() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    set onclose(arg) {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get onerror() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    set onerror(arg) {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get onshow() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    set onshow(arg) {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get renotify() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get silent() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get tag() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get timestamp() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get title() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
    get vibrate() {
        if (!(this instanceof Notification))
            throw new TypeError('Illegal invocation')
        return undefined
    },
}
Notification.prototype[Symbol.toStringTag] = "Notification"
setPrototypeNative(Notification)

// localStorage
window.Storage = function Storage() {
    throw new TypeError('Illegal invocation')
};
Storage.prototype = {
    getItem() {
        let key = arguments[0];
        return globalvalue.panda_vm.storage[key] ? globalvalue.panda_vm.storage[key] : null;
    },
    setItem() {
        globalvalue.panda_vm.storage[arguments[0]] = arguments[1]
    }
};
Storage.prototype[Symbol.toStringTag] = "Storage"
setPrototypeNative(Storage)
localStorage = {};
localStorage.__proto__ = Storage.prototype;
sessionStorage = {};
sessionStorage.__proto__ = Storage.prototype;

// HTMLCollection
window.HTMLCollection = function HTMLCollection() {
    throw new TypeError('Illegal invocation')
}
HTMLCollection.prototype = {
    item() {
        if (!(this instanceof HTMLCollection))
            throw new TypeError('Illegal invocation')
        debugger
    },
    get length() {
        if (!(this instanceof HTMLCollection))
            throw new TypeError('Illegal invocation')
        return this.length
    },
    namedItem() {
        if (!(this instanceof HTMLCollection))
            throw new TypeError('Illegal invocation')
        debugger
    }
}
HTMLCollection.prototype[Symbol.toStringTag] = "HTMLCollection"
setPrototypeNative(HTMLCollection)

// HTMLMediaElement
window.HTMLMediaElement = function HTMLMediaElement() {
    throw new TypeError('Illegal invocation')
}
HTMLMediaElement.prototype = {
    canPlayType(v) {
        if (!(this instanceof HTMLMediaElement))
            throw new TypeError('Illegal invocation')
        if (v === "audio/wave; codecs=2" || v === "audio/x-mpeg" || v === "audio/wave;" || v === "audio/x-mpegurl" || v === 'audio/wav; codecs="2"' || v === "audio/wave; codecs=0" || v === "audio/wave; codecs=1" || v === 'audio/wav; codecs="0"' || v === 'video/3gpp; codecs="mp4v.20.8, samr"' || v === 'video/ogg; codecs="theora, speex"' || v === "video/mpeg;" || v === 'video/mp4; codecs="mp4v.20.240, mp4a.40.2"' || v === 'video/mp2t; codecs="avc1.42E01E,mp4a.40.2"' || v === 'video/ogg; codecs="theora"' || v === 'video/mp4; codecs="mp4v.20.8, mp4a.40.2"' || v === 'video/mp4; codecs=bogus' || v === "video/ogg; codecs=speex" || v === "video/x-mpeg" || v === 'video/x-matroska; codecs="theora, vorbis"' || v === undefined) {
            return ""
        } else if (v instanceof Array && v.length === 0) {
            return ''
        } else if (v === "audio/wav;" || v === "audio/x-m4a;" || v === "audio/webm;" || v === "video/mp4;") {
            return "maybe"
        } else if (v === 'video/mp4; codecs="avc1.64001E, mp4a.40.2"' || v === 'video/webm; codecs="vorbis,vp9"' || v === "video/webm; codecs=vorbis" || v === 'video/webm; codecs="vp8, vorbis"' || v === "video/mp4" || v === 'audio/mp4; codecs="mp4a.40.2"' || v === "video/ogg; codecs=opus" || v === 'video/mp4; codecs=mp4a.40.2' || v === 'video/mp4; codecs="avc1.42c00d"' || v === 'video/mp4; codecs="avc1.42E01E"' || v === "audio/aac;" || v === 'audio/ogg; codecs="vorbis"' || v === "audio/mpeg;" || v === 'audio/wav; codecs="1"') {
            return "probably"
        } else {
            my_log("canPlayType>>>" + v)
            return "probably"
        }
    },
    get HAVE_CURRENT_DATA() {
        return 2
    }, get HAVE_ENOUGH_DATA() {
        return 4
    }, get HAVE_FUTURE_DATA() {
        return 3
    }, get HAVE_METADATA() {
        return 1
    }, get HAVE_NOTHING() {
        return 0
    }, get NETWORK_EMPTY() {
        return 0
    }, get NETWORK_IDLE() {
        return 1
    }, get NETWORK_LOADING() {
        return 2
    }, get NETWORK_NO_SOURCE() {
        return 3
    }, get __zone_symbol__ononencryptedpatched() {
        return true
    }, get __zone_symbol__ononwaitingforkeypatched() {
        return true
    },
}
HTMLMediaElement.prototype[Symbol.toStringTag] = "HTMLMediaElement"
setPrototypeNative(HTMLMediaElement)

// XMLHttpRequest
window.XMLHttpRequest = function () {
}
XMLHttpRequest.prototype = {
    open: function () {
        my_log(arguments[1])
    },
    setRequestHeader: function () {
        my_log(arguments[1])
    },
    send: function () {
        my_log(arguments[0].toString())
    }
}
XMLHttpRequest.prototype.open.toString = function () {
    return 'function(R,O,wa,Ga,Wa){function Eb(Nb,ac,rc){"apply"in Nb?Za.callOpen(Nb,rc,ac):4<ac.length?Nb(R,O,wa,Ga,Wa):3<ac.length?Nb(R,O,wa,Ga):Nb(R,O,wa)}x.aborted=!1;3>arguments.length&&(wa=!0);x.async=wa;ca&&wa&&x.Lh();x.I.onreadystatechange=x.Ab;x.url=""+O;var Lb=ba(y,"open");Lb?Eb(Lb,arguments,y):Eb(x.I.open,arguments,x.I);y.readyState=x.I.readyState}'
}
XMLHttpRequest.prototype[Symbol.toStringTag] = 'XMLHttpRequest'
setNative(XMLHttpRequest, 'XMLHttpRequest')

// WebSocket
window.WebSocket = function () {
}
WebSocket.prototype = {
    open: function () {
        my_log(arguments[1])
    },
    setRequestHeader: function () {
        my_log(arguments[1])
    },
    send: function () {
        my_log(arguments[0].toString())
    }
}
XMLHttpRequest.prototype[Symbol.toStringTag] = 'WebSocket'
setNative(WebSocket, 'WebSocket')

// Location
window.Location = function () {
}
Location.prototype = {
    get ancestorOrigins() {
        return ["https://www.aircanada.com"]
    },
    get href() {
        return "// fp_js_url"
    },
    get origin() {
        return "https://akamai-gw.dbaas.aircanada.com"
    },
    get protocol() {
        return "https:"
    },
    get host() {
        return "akamai-gw.dbaas.aircanada.com"
    },
    get hostname() {
        return "akamai-gw.dbaas.aircanada.com"
    },
    get port() {
        return ""
    },
    get pathname() {
        return "/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp"
    },
    get search() {
        return "// fp_js_url"
    },
    get hash() {
        return ""
    }
}
Location.prototype[Symbol.toStringTag] = "Location"
setPrototypeNative(Location)
window.location = {}
Object.setPrototypeOf(location, Location.prototype)

// PerformanceTiming
window.PerformanceTiming = function PerformanceTiming() {
}
PerformanceTiming.prototype = {
    get navigationStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date() - Math.floor(Math.random()) * 5000
    },
    get fetchStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get domainLookupStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get domainLookupEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get domLoading() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date() + 1024
    },
    get domContentLoadedEventStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domContentLoadedEventEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domComplete() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domInteractive() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date() + 2048
    },
    get redirectStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get redirectEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get unloadEventStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get loadEventStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get loadEventEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get unloadEventEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get secureConnectionStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get responseStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get responseEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get requestStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get connectStart() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
    get connectEnd() {
        if (!(this instanceof PerformanceTiming))
            throw new TypeError('Illegal invocation')
        return +new Date()
    },
}
PerformanceTiming.prototype[Symbol.toStringTag] = "PerformanceTiming"

// PerformanceNavigation
window.PerformanceNavigation = function () {
}
PerformanceNavigation.prototype = {
    get redirectCount() {
        if (!(this instanceof PerformanceNavigation))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get type() {
        if (!(this instanceof PerformanceNavigation))
            throw new TypeError('Illegal invocation')
        return 0
    }
}
PerformanceNavigation.prototype[Symbol.toStringTag] = "PerformanceNavigation"
setPrototypeNative(PerformanceNavigation)

// PerformanceNavigationTiming
window.PerformanceNavigationTiming = function PerformanceNavigationTiming() {
}
PerformanceNavigationTiming.prototype = {
    get connectEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get connectStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get decodedBodySize() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 875
    },
    get deliveryType() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return ""
    },
    get domainLookupEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get domainLookupStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get duration() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get encodedBodySize() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 875
    },
    get entryType() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return "navigation"
    },
    get fetchStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get finalResponseHeadersStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get firstInterimResponseStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get initiatorType() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return "navigation"
    },
    get name() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return "// fp_js_url"
    },
    get nextHopProtocol() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return ""
    },
    get redirectEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get redirectStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get renderBlockingStatus() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return "non-blocking"
    },
    get requestStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get responseEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 530.7000000476837
    },
    get responseStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 530.7000000476837
    },
    get responseStatus() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 200
    },
    get secureConnectionStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0.6000000238418579
    },
    get serverTiming() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return [
            {
                "name": "cdn-cache",
                "duration": 0,
                "description": "MISS"
            },
            {
                "name": "edge",
                "duration": 235,
                "description": ""
            },
            {
                "name": "origin",
                "duration": 93,
                "description": ""
            },
            {
                "name": "ak_p",
                "duration": 1,
                "description": "1750473655316_399266054_1334846001_32760_17103_147_0_255"
            }
        ]
    },
    get startTime() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get transferSize() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return [
            {
                "name": "// fp_js_url",
                "entryType": "navigation",
                "startTime": 0,
                "duration": 0,
                "initiatorType": "navigation",
                "deliveryType": "",
                "nextHopProtocol": "",
                "renderBlockingStatus": "non-blocking",
                "workerStart": 0,
                "workerRouterEvaluationStart": 0,
                "workerCacheLookupStart": 0,
                "workerMatchedSourceType": "",
                "workerFinalSourceType": "",
                "redirectStart": 0,
                "redirectEnd": 0,
                "fetchStart": 0.7999999970197678,
                "domainLookupStart": 0.7999999970197678,
                "domainLookupEnd": 0.7999999970197678,
                "connectStart": 0.7999999970197678,
                "secureConnectionStart": 0.7999999970197678,
                "connectEnd": 0.7999999970197678,
                "requestStart": 0.7999999970197678,
                "responseStart": 916.8999999985099,
                "firstInterimResponseStart": 0,
                "finalResponseHeadersStart": 0,
                "responseEnd": 916.8999999985099,
                "transferSize": 1368,
                "encodedBodySize": 1068,
                "decodedBodySize": 1068,
                "responseStatus": 200,
                "serverTiming": [
                    {
                        "name": "cdn-cache",
                        "duration": 0,
                        "description": "MISS"
                    },
                    {
                        "name": "edge",
                        "duration": 225,
                        "description": ""
                    },
                    {
                        "name": "origin",
                        "duration": 100,
                        "description": ""
                    },
                    {
                        "name": "ak_p",
                        "duration": 1,
                        "description": "1757917547587_400032814_1036979904_32506_21509_1_82_255"
                    }
                ],
                "unloadEventStart": 0,
                "unloadEventEnd": 0,
                "domInteractive": 2178.599999997765,
                "domContentLoadedEventStart": 0,
                "domContentLoadedEventEnd": 0,
                "domComplete": 0,
                "loadEventStart": 0,
                "loadEventEnd": 0,
                "type": "navigate",
                "redirectCount": 0,
                "activationStart": 0,
                "criticalCHRestart": 0,
                "notRestoredReasons": null
            }
        ]
    },
    get workerStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get activationStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get criticalCHRestart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domComplete() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domContentLoadedEventEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domContentLoadedEventStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get domInteractive() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 4280.299999952316
    },
    get loadEventEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get loadEventStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get notRestoredReasons() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return null
    },
    get redirectCount() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get type() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return "navigate"
    },
    get unloadEventEnd() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get unloadEventStart() {
        if (!(this instanceof PerformanceNavigationTiming))
            throw new TypeError('Illegal invocation')
        return 0
    }
}
PerformanceNavigationTiming.prototype[Symbol.toStringTag] = "PerformanceNavigationTiming"
setPrototypeNative(PerformanceNavigationTiming)
const performanceNavigationTimingInstance = new PerformanceNavigationTiming();

// PerformanceResourceTiming
window.PerformanceResourceTiming = function PerformanceResourceTiming() {
}
PerformanceResourceTiming.prototype = {
    get connectEnd() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get connectStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get decodedBodySize() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 336275
    },
    get deliveryType() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return ""
    },
    get domainLookupEnd() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get domainLookupStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get duration() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 2482.4000000953674
    },
    get encodedBodySize() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 336275
    },
    get entryType() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return "resource"
    },
    get fetchStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get finalResponseHeadersStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get firstInterimResponseStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get initiatorType() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return "script"
    },
    get name() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 'PerformanceResourceTiming'
    },
    get nextHopProtocol() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return ""
    },
    get redirectEnd() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get redirectStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get renderBlockingStatus() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return "non-blocking"
    },
    get requestStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get responseEnd() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 3022.7000000476837
    },
    get responseStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 3022.7000000476837
    },
    get responseStatus() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 200
    },
    get secureConnectionStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get serverTiming() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return [
            {
                "name": "cdn-cache",
                "duration": 0,
                "description": "MISS"
            },
            {
                "name": "edge",
                "duration": 230,
                "description": ""
            },
            {
                "name": "origin",
                "duration": 206,
                "description": ""
            },
            {
                "name": "ak_p",
                "duration": 1,
                "description": "1750473655857_399266054_1334847310_43564_15555_146_0_219"
            }
        ]
    },
    get startTime() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 540.2999999523163
    },
    get transferSize() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 336575
    },
    get workerStart() {
        if (!(this instanceof PerformanceResourceTiming))
            throw new TypeError('Illegal invocation')
        return 0
    }
}
PerformanceResourceTiming.prototype[Symbol.toStringTag] = "PerformanceResourceTiming"
setPrototypeNative(PerformanceResourceTiming)
const performanceResourceTimingInstance = new PerformanceResourceTiming();

performance.timing = {}
Object.setPrototypeOf(performance.timing, PerformanceTiming.prototype)

// EventCounts
window.EventCounts = function () {
};
EventCounts.prototype = {
    get size() {
        if (!(this instanceof EventCounts))
            throw new TypeError('Illegal invocation');
        return 36;
    },
    entries: function () {
        if (!(this instanceof EventCounts))
            throw new TypeError('Illegal invocation');
        const eventTypes = [
            'pointerdown',
            'pointerdown',
            'pointerdown',
            'keydown',
            'mouseleave',
            'mouseenter',
            'drop',
            'beforeinput',
            'pointerenter',
            'dragend',
            'pointercancel',
            'compositionupdate',
            'mousedown',
            'dragleave',
            'dragover',
            'mouseup',
            'pointerover',
            'lostpointercapture',
            'mouseover',
            'gotpointercapture',
            'dblclick',
            'keyup',
            'keypress',
            'pointerup',
            'compositionstart',
            'auxclick',
            'dragstart',
            'touchstart',
            'compositionend',
            'pointerout',
            'dragenter',
            'touchcancel',
            'click',
            'contextmenu',
            'mouseout',
            'pointerleave'
        ];
        let index = 0;
        return {
            next: () => {
                if (index < eventTypes.length) {
                    const value = [
                        eventTypes[index],
                        0
                    ];
                    index++;
                    return {value, done: false};
                }
                return {value: undefined, done: true};
            },
            [Symbol.iterator]: function () {
                return this;
            }
        };
    },
    [Symbol.iterator]: function () {
        return this.entries();
    }
};
Object.defineProperty(EventCounts.prototype.entries, Symbol.iterator, {
    value: EventCounts.prototype.entries,
    writable: true,
    configurable: true,
    enumerable: false
});
EventCounts.prototype[Symbol.toStringTag] = "EventCounts";
performance.eventCounts = {};
Object.setPrototypeOf(performance.eventCounts, EventCounts.prototype);

performance.memory = {
    jsHeapSizeLimit: 4294705152,
    totalJSHeapSize: Math.floor(Math.random() * (234353109 - 153613098 + 1)) + 153613098,
    usedJSHeapSize: Math.floor(Math.random() * (132413806 - 186315433 + 1)) + 186315433
}
performance.navigation = {}
Object.setPrototypeOf(performance.navigation, PerformanceNavigation.prototype)
const originalPerformanceNow = performance.now.bind(performance);
performance.now = function () {
    const t = originalPerformanceNow();
    const str = t.toString();
    let [integerPart, decimalPart = ''] = str.split('.');
    if (decimalPart.length > 5) {
        decimalPart = decimalPart.substring(0, 5);
    }
    if (!decimalPart) {
        return parseInt(integerPart, 10);
    }
    const firstDigit = decimalPart.charAt(0);
    const remainingDigits = decimalPart.substring(1);
    if (firstDigit === '0') {
        return parseInt(integerPart, 10);
    } else if (firstDigit === '5') {
        return parseFloat(integerPart + '.' + firstDigit);
    } else {
        return parseFloat(integerPart + '.' + firstDigit + '000000' + remainingDigits);
    }
};
setNative(performance.now, 'now')
performance.getEntries = function () {
    return [
        globalvalue.getEntriesByType.navigation[0],
        globalvalue.getEntriesByType.visibilitystate[0],
        globalvalue.getEntriesByType.resource[0],
        globalvalue.getEntriesByType.resource[1],
        globalvalue.getEntriesByType.visibilitystate[1]
    ]
}
setNative(performance.getEntries, 'getEntries')
performance.getEntriesByType = function (arg) {
    if (arg === 'navigation') {
        return globalvalue.getEntriesByType.navigation
        // return [performanceNavigationTimingInstance]
    }
    if (arg === 'resource') {
        return globalvalue.getEntriesByType.resource
        // return [performanceResourceTimingInstance, performanceResourceTimingInstance]
    }
    if (arg === 'visibility-state') {
        return globalvalue.getEntriesByType.visibilitystate
    } else {
        my_log("getEntriesByType>>>" + arg)
    }
}
setNative(performance.getEntriesByType, 'getEntriesByType')

delete Performance.prototype.eventLoopUtilization
delete Performance.prototype.nodeTiming
delete Performance.prototype.markResourceTiming
delete Performance.prototype.timerify

// WebGL2RenderingContext
window.WebGL2RenderingContext = function () {
}
WebGL2RenderingContext.prototype = WebGLRenderingContext.prototype
WebGL2RenderingContext.prototype[Symbol.toStringTag] = "WebGL2RenderingContext"

// HTMLCanvasElement
window.HTMLCanvasElement = function HTMLCanvasElement() {
    throw new TypeError('Illegal invocation')
}
HTMLCanvasElement.prototype = {
    getContext(tag) {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        // debugger;
        if (tag === '2d') {
            let tmp = {}
            Object.setPrototypeOf(tmp, CanvasRenderingContext2D.prototype)
            window.CanvasObj[this.canvas_id] = this
            tmp.__canvas_id = this.canvas_id
            return tmp
        } else if (tag === 'webgl') {
            let tmp = {}
            Object.setPrototypeOf(tmp, WebGLRenderingContext.prototype)
            window.CanvasObj[this.canvas_id] = this
            tmp.__canvas_id = this.canvas_id
            return tmp
        } else if (tag === 'webgl2') {
            let tmp = {}
            Object.setPrototypeOf(tmp, WebGLRenderingContext.prototype)
            window.CanvasObj[this.canvas_id] = this
            tmp.__canvas_id = this.canvas_id
            tmp.MAX_UNIFORM_BUFFER_BINDINGS = 35375
            tmp.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379
            tmp.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377
            tmp.MAX_COMBINED_UNIFORM_BLOCKS = 35374
            return tmp
        } else {
            debugger;
            my_log("getContext>>>" + tag)
        }
    },
    transferControlToOffscreen() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        debugger;
    },
    get height() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        // debugger
        return window.globalCanvas[this.canvas_id].height
    },
    set height(value) {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        // debugger;
        window.globalCanvas[this.canvas_id].height = value
    },

    toDataURL() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        // debugger;
        if (arguments[0] === "image/webp" && this.width === 1 && this.height === 1) {
            return "data:image/webp;base64,UklGRhACAABXRUJQVlA4WAoAAAAwAAAAAAAAAAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIAgAAAAAAVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/v02aAA="
        } else if (this.width === 4 && this.height === 4) {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAA9JREFUGFdjZEADjKQLAAAA7gAFLaYDxAAAAABJRU5ErkJggg=="
        } else if (this.width === 600 && this.height === 160) {
            return 'data:image/png;base64,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'
        } else if (this.width === 0 && this.height === 0) {
            return "data:image/png;base64,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"
        }
    },
    captureStream() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        debugger;

    },
    get width() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        return window.globalCanvas[this.canvas_id].width

    },
    set width(value) {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        // debugger;
        window.globalCanvas[this.canvas_id].width = value
    },
    toBlob() {
        if (!(this instanceof HTMLCanvasElement))
            throw new TypeError('Illegal invocation')
        debugger;
    }
}
HTMLCanvasElement.prototype[Symbol.toStringTag] = "HTMLCanvasElement"
setPrototypeNative(HTMLCanvasElement)

// HTMLAudioElement
window.HTMLAudioElement = function HTMLAudioElement() {
}
HTMLAudioElement.prototype[Symbol.toStringTag] = "HTMLAudioElement"
setPrototypeNative(HTMLAudioElement)
Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype)

// HTMLIFrameElement
HTMLIFrameElement = function () {
}
HTMLIFrameElement.prototype = {}

Object.defineProperties(HTMLIFrameElement.prototype, {
    contentWindow: {
        get() {
            if (/^\d+(,\d+)+$/.test(this.srcdoc)) {
                return null;
            } else {
                let content_window = Object.create(Object.getPrototypeOf(window));
                Object.defineProperties(content_window, Object.getOwnPropertyDescriptors(window));
                content_window.name = "contentWindow"
                delete content_window[0];
                delete content_window[1];
                delete content_window.Window;
                delete content_window.frames;
                delete content_window.top;
                delete content_window.self;
                delete content_window.XRSystem;
                content_window.document = {
                    location: location,
                    referrer: 'https://www.aircanada.com/',
                    URL: 'about:blank',
                    activeElement: body,
                    alinkColor: "",
                    all: [[], head, body, script[0], script[1], iframe, iframe],
                    baseURI: "// fp_js_url",
                    bgColor: "",
                    characterSet: "UTF-8",
                    charset: "UTF-8",
                }
                Object.setPrototypeOf(content_window.document, Document.prototype)
                return content_window;
            }
        }
    },
    nodeType: {
        get() {
            return 1
        }
    },
    attributeStyleMap: {
        get() {
            return {
                size: 1
            }
        }
    },
    outerHTML: {
        get() {
            return "<iframe src=\"javascript:;\" style=\"display: none;\"></iframe>"
        }
    },
    outerText: {
        get() {
            return ""
        }
    },
    style: {
        get() {
            return {
                0: "width",
                1: "height",
                2: "display",
                display: "none",
                width: "0px",
                height: "0px",
                border: "0px"
            }
        }
    },
    tabIndex: {
        get() {
            0
        }
    },
    tagName: {
        get() {
            return "IFRAME"
        }
    },
    textContent: {
        get() {
            return ""
        }
    },
    title: {
        get() {
            return ""
        }
    },
    translate: {
        get() {
            return true
        }
    },
    virtualKeyboardPolicy: {
        get() {
            return ""
        }
    },
    width: {
        get() {
            return ""
        }
    },
    writingSuggestions: {
        get() {
            return "true"
        }
    },
    innerHTML: {
        get() {
            return ""
        }
    },
    innerText: {
        get() {
            return ""
        }
    },
    inputMode: {
        get() {
            return ""
        }
    },
    src: {
        get() {
            return "javascript:;"
        }
    },
    cssFloat: {
        get() {
            return ""
        }
    },
    cssText: {
        get() {
            return "width: 0px; height: 0px; display: none;"
        }
    },
    length: {
        get() {
            return 3
        }
    },
    srcdoc: {
        get() {
            return this._srcdoc || '';
        },
        set(arg) {
            this._srcdoc = arg;
        }
    },
    toString: {
        get() {
            return function () {
                return '[object HTMLIFrameElement]'
            }
        }
    }
});
HTMLIFrameElement.prototype[Symbol.toStringTag] = "HTMLIFrameElement"

// HTMLVideoElement
window.HTMLVideoElement = function HTMLVideoElement() {
}
HTMLVideoElement.prototype[Symbol.toStringTag] = "HTMLVideoElement"
setPrototypeNative(HTMLVideoElement)
Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype)

// CSSStyleDeclaration
window.CSSStyleDeclaration = function CSSStyleDeclaration() {
    throw new TypeError('Illegal constructor')
}
CSSStyleDeclaration.prototype = {
    getPropertyValue(arg) {
        if (arg === 'color') {
            var rgb_obj = {
                "ActiveBorder": "rgb(0, 0, 0)",
                "ActiveCaption": "rgb(0, 0, 0)",
                "AppWorkspace": "rgb(255, 255, 255)",
                "Background": "rgb(255, 255, 255)",
                "ButtonFace": "rgb(239, 239, 239)",
                "ButtonHighlight": "rgb(239, 239, 239)",
                "ButtonShadow": "rgb(239, 239, 239)",
                "ButtonText": "rgb(0, 0, 0)",
                "CaptionText": "rgb(0, 0, 0)",
                "GrayText": "rgb(128, 128, 128)",
                "Highlight": "rgba(128, 188, 254, 0.6)",
                "HighlightText": "rgb(0, 0, 0)",
                "InactiveBorder": "rgb(0, 0, 0)",
                "InactiveCaption": "rgb(255, 255, 255)",
                "InactiveCaptionText": "rgb(128, 128, 128)",
                "InfoBackground": "rgb(255, 255, 255)",
                "InfoText": "rgb(0, 0, 0)",
                "Menu": "rgb(255, 255, 255)",
                "MenuText": "rgb(0, 0, 0)",
                "Scrollbar": "rgb(255, 255, 255)",
                "ThreeDDarkShadow": "rgb(0, 0, 0)",
                "ThreeDFace": "rgb(239, 239, 239)",
                "ThreeDHighlight": "rgb(0, 0, 0)",
                "ThreeDLightShadow": "rgb(0, 0, 0)",
                "ThreeDShadow": "rgb(0, 0, 0)",
                "Window": "rgb(255, 255, 255)",
                "WindowFrame": "rgb(0, 0, 0)",
                "WindowText": "rgb(0, 0, 0)",
                "FakeColor": "rgb(0, 0, 0)",
                "-moz-ButtonDefault": "rgb(0, 0, 0)",
                "-moz-ButtonHoverFace": "rgb(0, 0, 0)",
                "-moz-ButtonHoverText": "rgb(0, 0, 0)",
                "-moz-CellHighlight": "rgb(0, 0, 0)",
                "-moz-CellHighlightText": "rgb(0, 0, 0)",
                "-moz-Combobox": "rgb(0, 0, 0)",
                "-moz-ComboboxText": "rgb(0, 0, 0)",
                "-moz-Dialog": "rgb(0, 0, 0)",
                "-moz-DialogText": "rgb(0, 0, 0)",
                "-moz-dragtargetzone": "rgb(0, 0, 0)",
                "-moz-EvenTreeRow": "rgb(0, 0, 0)",
                "-moz-Field": "rgb(0, 0, 0)",
                "-moz-FieldText": "rgb(0, 0, 0)",
                "-moz-html-CellHighlight": "rgb(0, 0, 0)",
                "-moz-html-CellHighlightText": "rgb(0, 0, 0)",
                "-moz-mac-accentdarkestshadow": "rgb(0, 0, 0)",
                "-moz-mac-accentdarkshadow": "rgb(0, 0, 0)",
                "-moz-mac-accentface": "rgb(0, 0, 0)",
                "-moz-mac-accentlightesthighlight": "rgb(0, 0, 0)",
                "-moz-mac-accentlightshadow": "rgb(0, 0, 0)",
                "-moz-mac-accentregularhighlight": "rgb(0, 0, 0)",
                "-moz-mac-accentregularshadow": "rgb(0, 0, 0)",
                "-moz-mac-chrome-active": "rgb(0, 0, 0)",
                "-moz-mac-chrome-inactive": "rgb(0, 0, 0)",
                "-moz-mac-focusring": "rgb(0, 0, 0)",
                "-moz-mac-menuselect": "rgb(0, 0, 0)",
                "-moz-mac-menushadow": "rgb(0, 0, 0)",
                "-moz-mac-menutextselect": "rgb(0, 0, 0)",
                "-moz-MenuHover": "rgb(0, 0, 0)",
                "-moz-MenuHoverText": "rgb(0, 0, 0)",
                "-moz-MenuBarText": "rgb(0, 0, 0)",
                "-moz-MenuBarHoverText": "rgb(0, 0, 0)",
                "-moz-nativehyperlinktext": "rgb(0, 0, 0)",
                "-moz-OddTreeRow": "rgb(0, 0, 0)",
                "-moz-win-communicationstext": "rgb(0, 0, 0)",
                "-moz-win-mediatext": "rgb(0, 0, 0)",
                "-moz-win-accentcolor": "rgb(0, 0, 0)",
                "-moz-win-accentcolortext": "rgb(0, 0, 0)",
                "-moz-activehyperlinktext": "rgb(0, 0, 0)",
                "-moz-default-background-color": "rgb(0, 0, 0)",
                "-moz-default-color": "rgb(0, 0, 0)",
                "-moz-hyperlinktext": "rgb(0, 0, 0)",
                "-moz-visitedhyperlinktext": "rgb(0, 0, 0)"
            }
            return rgb_obj[this['color']];
        }
    }
}
CSSStyleDeclaration.prototype[Symbol.toStringTag] = "CSSStyleDeclaration";
setPrototypeNative(CSSStyleDeclaration);
var style_obj = {};
Object.setPrototypeOf(style_obj, CSSStyleDeclaration.prototype);

// HTMLDivElement
window.HTMLDivElement = function HTMLDivElement() {
    throw new TypeError('Illegal invocation')
}
Object.defineProperties(HTMLDivElement.prototype, {
    tagName: {
        get() {
            return "DIV"
        }
    },
    children: {
        get() {
            return {
                "0": iframe,
                "1": audio
            }
        }
    },
    innerHTML: {
        get() {
            return '<iframe src="javascript:;"></iframe>'
        }
    },
    style: {
        value: style_obj
    }
});
HTMLDivElement.prototype[Symbol.toStringTag] = "HTMLDivElement"
setPrototypeNative(HTMLDivElement)

// HTMLHeadElement
window.HTMLHeadElement = function HTMLHeadElement() {
    throw new TypeError('Illegal invocation')
}
HTMLHeadElement.prototype = {
    innerHTML: ""
}
HTMLHeadElement.prototype[Symbol.toStringTag] = "HTMLHeadElement"
setPrototypeNative(HTMLHeadElement)

// HTMLBodyElement
window.HTMLBodyElement = function HTMLBodyElement() {
    throw new TypeError('Illegal invocation')
}
HTMLBodyElement.prototype = {
    style: {
        get: function () {
            return {'0': 'display', display: 'none'}
        }
    },
    children: {
        get: function () {
            return {
                "0": script[0],
                "1": script[1],
                "2": iframe
            }
        }
    },
    appendChild: function (arg) {
        if (arg.toString() === '[object HTMLDivElement]') {
            return div
        }
        if (arg.toString() === '[object HTMLIFrameElement]') {
            return iframe
        }
        if (arg.toString() === '[object HTMLInputElement]') {
            return input
        } else {
            my_log("appendChild>>>" + arg.toString())
        }
    },
    onscrollstart: function () {
    },
    onmousewheel: function () {
    },
    __proto__: {
        insertBefore: function () {
            debugger;
        }
    },
    toString: function () {
        return '[object HTMLBodyElement]'
    },
    contains: function () {
        return false
    },
    onload: null,
    onclose: null,
    onfocus: null,
    onblur: null,
    onscroll: null,
    onscrollend: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    checkVisibility: function () {
        return true
    },
    get __zone_symbol__ononafterprintpatched() {
        return true
    },
    get __zone_symbol__ononbeforeprintpatched() {
        return true
    },
    get __zone_symbol__ononbeforeunloadpatched() {
        return true
    },
    get __zone_symbol__ononblurpatched() {
        return true
    },
    get __zone_symbol__ononerrorpatched() {
        return true
    },
    get __zone_symbol__ononfocuspatched() {
        return true
    },
    get __zone_symbol__ononhashchangepatched() {
        return true
    },
    get __zone_symbol__ononlanguagechangepatched() {
        return true
    },
    get __zone_symbol__ononloadpatched() {
        return true
    },
    get __zone_symbol__ononmessageerrorpatched() {
        return true
    },
    get __zone_symbol__ononmessagepatched() {
        return true
    },
    get __zone_symbol__ononofflinepatched() {
        return true
    },
    get __zone_symbol__onononlinepatched() {
        return true
    },
    get __zone_symbol__ononpagehidepatched() {
        return true
    },
    get __zone_symbol__ononpageshowpatched() {
        return true
    },
    get __zone_symbol__ononpopstatepatched() {
        return true
    },
    get __zone_symbol__ononresizepatched() {
        return true
    },
    get __zone_symbol__ononrejectionhandledpatched() {
        return true
    },
    get __zone_symbol__ononscrollpatched() {
        return true
    },
    get __zone_symbol__ononstoragepatched() {
        return true
    },
    get __zone_symbol__ononunhandledrejectionpatched() {
        return true
    },
    get __zone_symbol__ononunloadpatched() {
        return true
    },
    removeChild(child) {
    }, // todo
    insertBefore(child) {
    }, // todo
}
Object.defineProperties(HTMLBodyElement.prototype, {
    clientWidth: {
        get() {
            return 0
        }
    },
    clientHeight: {
        get() {
            if (this.innerHTML === "") {
                return 0;
            }
            return 22;
        }
    }
})
HTMLBodyElement.prototype[Symbol.toStringTag] = "HTMLBodyElement"
setPrototypeNative(HTMLBodyElement)

// HTMLUnknownElement
window.HTMLUnknownElement = function HTMLUnknownElement() {
    throw new TypeError('Illegal invocation')
}
HTMLUnknownElement.prototype = {
    get style() {
        return {
            "accentColor": "",
            "additiveSymbols": "",
            "alignContent": "",
            "alignItems": "",
            "alignSelf": "",
            "alignmentBaseline": "",
            "all": "",
            "anchorName": "",
            "anchorScope": "",
            "animation": "",
            "animationComposition": "",
            "animationDelay": "",
            "animationDirection": "",
            "animationDuration": "",
            "animationFillMode": "",
            "animationIterationCount": "",
            "animationName": "",
            "animationPlayState": "",
            "animationRange": "",
            "animationRangeEnd": "",
            "animationRangeStart": "",
            "animationTimeline": "",
            "animationTimingFunction": "",
            "appRegion": "",
            "appearance": "",
            "ascentOverride": "",
            "aspectRatio": "",
            "backdropFilter": "",
            "backfaceVisibility": "",
            "background": "",
            "backgroundAttachment": "",
            "backgroundBlendMode": "",
            "backgroundClip": "",
            "backgroundColor": "",
            "backgroundImage": "",
            "backgroundOrigin": "",
            "backgroundPosition": "",
            "backgroundPositionX": "",
            "backgroundPositionY": "",
            "backgroundRepeat": "",
            "backgroundSize": "",
            "basePalette": "",
            "baselineShift": "",
            "baselineSource": "",
            "blockSize": "",
            "border": "",
            "borderBlock": "",
            "borderBlockColor": "",
            "borderBlockEnd": "",
            "borderBlockEndColor": "",
            "borderBlockEndStyle": "",
            "borderBlockEndWidth": "",
            "borderBlockStart": "",
            "borderBlockStartColor": "",
            "borderBlockStartStyle": "",
            "borderBlockStartWidth": "",
            "borderBlockStyle": "",
            "borderBlockWidth": "",
            "borderBottom": "",
            "borderBottomColor": "",
            "borderBottomLeftRadius": "",
            "borderBottomRightRadius": "",
            "borderBottomStyle": "",
            "borderBottomWidth": "",
            "borderCollapse": "",
            "borderColor": "",
            "borderEndEndRadius": "",
            "borderEndStartRadius": "",
            "borderImage": "",
            "borderImageOutset": "",
            "borderImageRepeat": "",
            "borderImageSlice": "",
            "borderImageSource": "",
            "borderImageWidth": "",
            "borderInline": "",
            "borderInlineColor": "",
            "borderInlineEnd": "",
            "borderInlineEndColor": "",
            "borderInlineEndStyle": "",
            "borderInlineEndWidth": "",
            "borderInlineStart": "",
            "borderInlineStartColor": "",
            "borderInlineStartStyle": "",
            "borderInlineStartWidth": "",
            "borderInlineStyle": "",
            "borderInlineWidth": "",
            "borderLeft": "",
            "borderLeftColor": "",
            "borderLeftStyle": "",
            "borderLeftWidth": "",
            "borderRadius": "",
            "borderRight": "",
            "borderRightColor": "",
            "borderRightStyle": "",
            "borderRightWidth": "",
            "borderSpacing": "",
            "borderStartEndRadius": "",
            "borderStartStartRadius": "",
            "borderStyle": "",
            "borderTop": "",
            "borderTopColor": "",
            "borderTopLeftRadius": "",
            "borderTopRightRadius": "",
            "borderTopStyle": "",
            "borderTopWidth": "",
            "borderWidth": "",
            "bottom": "",
            "boxDecorationBreak": "",
            "boxShadow": "",
            "boxSizing": "",
            "breakAfter": "",
            "breakBefore": "",
            "breakInside": "",
            "bufferedRendering": "",
            "captionSide": "",
            "caretAnimation": "",
            "caretColor": "",
            "clear": "",
            "clip": "",
            "clipPath": "",
            "clipRule": "",
            "color": "",
            "colorInterpolation": "",
            "colorInterpolationFilters": "",
            "colorRendering": "",
            "colorScheme": "",
            "columnCount": "",
            "columnFill": "",
            "columnGap": "",
            "columnRule": "",
            "columnRuleColor": "",
            "columnRuleStyle": "",
            "columnRuleWidth": "",
            "columnSpan": "",
            "columnWidth": "",
            "columns": "",
            "contain": "",
            "containIntrinsicBlockSize": "",
            "containIntrinsicHeight": "",
            "containIntrinsicInlineSize": "",
            "containIntrinsicSize": "",
            "containIntrinsicWidth": "",
            "container": "",
            "containerName": "",
            "containerType": "",
            "content": "",
            "contentVisibility": "",
            "cornerBlockEndShape": "",
            "cornerBlockStartShape": "",
            "cornerBottomLeftShape": "",
            "cornerBottomRightShape": "",
            "cornerBottomShape": "",
            "cornerEndEndShape": "",
            "cornerEndStartShape": "",
            "cornerInlineEndShape": "",
            "cornerInlineStartShape": "",
            "cornerLeftShape": "",
            "cornerRightShape": "",
            "cornerShape": "",
            "cornerStartEndShape": "",
            "cornerStartStartShape": "",
            "cornerTopLeftShape": "",
            "cornerTopRightShape": "",
            "cornerTopShape": "",
            "counterIncrement": "",
            "counterReset": "",
            "counterSet": "",
            "cursor": "",
            "cx": "",
            "cy": "",
            "d": "",
            "descentOverride": "",
            "direction": "",
            "display": "",
            "dominantBaseline": "",
            "dynamicRangeLimit": "",
            "emptyCells": "",
            "fallback": "",
            "fieldSizing": "",
            "fill": "",
            "fillOpacity": "",
            "fillRule": "",
            "filter": "",
            "flex": "",
            "flexBasis": "",
            "flexDirection": "",
            "flexFlow": "",
            "flexGrow": "",
            "flexShrink": "",
            "flexWrap": "",
            "float": "",
            "floodColor": "",
            "floodOpacity": "",
            "font": "",
            "fontDisplay": "",
            "fontFamily": "",
            "fontFeatureSettings": "",
            "fontKerning": "",
            "fontOpticalSizing": "",
            "fontPalette": "",
            "fontSize": "",
            "fontSizeAdjust": "",
            "fontStretch": "",
            "fontStyle": "",
            "fontSynthesis": "",
            "fontSynthesisSmallCaps": "",
            "fontSynthesisStyle": "",
            "fontSynthesisWeight": "",
            "fontVariant": "",
            "fontVariantAlternates": "",
            "fontVariantCaps": "",
            "fontVariantEastAsian": "",
            "fontVariantEmoji": "",
            "fontVariantLigatures": "",
            "fontVariantNumeric": "",
            "fontVariantPosition": "",
            "fontVariationSettings": "",
            "fontWeight": "",
            "forcedColorAdjust": "",
            "gap": "",
            "grid": "",
            "gridArea": "",
            "gridAutoColumns": "",
            "gridAutoFlow": "",
            "gridAutoRows": "",
            "gridColumn": "",
            "gridColumnEnd": "",
            "gridColumnGap": "",
            "gridColumnStart": "",
            "gridGap": "",
            "gridRow": "",
            "gridRowEnd": "",
            "gridRowGap": "",
            "gridRowStart": "",
            "gridTemplate": "",
            "gridTemplateAreas": "",
            "gridTemplateColumns": "",
            "gridTemplateRows": "",
            "height": "",
            "hyphenateCharacter": "",
            "hyphenateLimitChars": "",
            "hyphens": "",
            "imageOrientation": "",
            "imageRendering": "",
            "inherits": "",
            "initialLetter": "",
            "initialValue": "",
            "inlineSize": "",
            "inset": "",
            "insetBlock": "",
            "insetBlockEnd": "",
            "insetBlockStart": "",
            "insetInline": "",
            "insetInlineEnd": "",
            "insetInlineStart": "",
            "interactivity": "",
            "interpolateSize": "",
            "isolation": "",
            "justifyContent": "",
            "justifyItems": "",
            "justifySelf": "",
            "left": "",
            "letterSpacing": "",
            "lightingColor": "",
            "lineBreak": "",
            "lineGapOverride": "",
            "lineHeight": "",
            "listStyle": "",
            "listStyleImage": "",
            "listStylePosition": "",
            "listStyleType": "",
            "margin": "",
            "marginBlock": "",
            "marginBlockEnd": "",
            "marginBlockStart": "",
            "marginBottom": "",
            "marginInline": "",
            "marginInlineEnd": "",
            "marginInlineStart": "",
            "marginLeft": "",
            "marginRight": "",
            "marginTop": "",
            "marker": "",
            "markerEnd": "",
            "markerMid": "",
            "markerStart": "",
            "mask": "",
            "maskClip": "",
            "maskComposite": "",
            "maskImage": "",
            "maskMode": "",
            "maskOrigin": "",
            "maskPosition": "",
            "maskRepeat": "",
            "maskSize": "",
            "maskType": "",
            "mathDepth": "",
            "mathShift": "",
            "mathStyle": "",
            "maxBlockSize": "",
            "maxHeight": "",
            "maxInlineSize": "",
            "maxWidth": "",
            "minBlockSize": "",
            "minHeight": "",
            "minInlineSize": "",
            "minWidth": "",
            "mixBlendMode": "",
            "navigation": "",
            "negative": "",
            "objectFit": "",
            "objectPosition": "",
            "objectViewBox": "",
            "offset": "",
            "offsetAnchor": "",
            "offsetDistance": "",
            "offsetPath": "",
            "offsetPosition": "",
            "offsetRotate": "",
            "opacity": "",
            "order": "",
            "orphans": "",
            "outline": "",
            "outlineColor": "",
            "outlineOffset": "",
            "outlineStyle": "",
            "outlineWidth": "",
            "overflow": "",
            "overflowAnchor": "",
            "overflowBlock": "",
            "overflowClipMargin": "",
            "overflowInline": "",
            "overflowWrap": "",
            "overflowX": "",
            "overflowY": "",
            "overlay": "",
            "overrideColors": "",
            "overscrollBehavior": "",
            "overscrollBehaviorBlock": "",
            "overscrollBehaviorInline": "",
            "overscrollBehaviorX": "",
            "overscrollBehaviorY": "",
            "pad": "",
            "padding": "",
            "paddingBlock": "",
            "paddingBlockEnd": "",
            "paddingBlockStart": "",
            "paddingBottom": "",
            "paddingInline": "",
            "paddingInlineEnd": "",
            "paddingInlineStart": "",
            "paddingLeft": "",
            "paddingRight": "",
            "paddingTop": "",
            "page": "",
            "pageBreakAfter": "",
            "pageBreakBefore": "",
            "pageBreakInside": "",
            "pageOrientation": "",
            "paintOrder": "",
            "perspective": "",
            "perspectiveOrigin": "",
            "placeContent": "",
            "placeItems": "",
            "placeSelf": "",
            "pointerEvents": "",
            "position": "",
            "positionAnchor": "",
            "positionArea": "",
            "positionTry": "",
            "positionTryFallbacks": "",
            "positionTryOrder": "",
            "positionVisibility": "",
            "prefix": "",
            "printColorAdjust": "",
            "quotes": "",
            "r": "",
            "range": "",
            "readingFlow": "",
            "readingOrder": "",
            "resize": "",
            "result": "",
            "right": "",
            "rotate": "",
            "rowGap": "",
            "rubyAlign": "",
            "rubyPosition": "",
            "rx": "",
            "ry": "",
            "scale": "",
            "scrollBehavior": "",
            "scrollInitialTarget": "",
            "scrollMargin": "",
            "scrollMarginBlock": "",
            "scrollMarginBlockEnd": "",
            "scrollMarginBlockStart": "",
            "scrollMarginBottom": "",
            "scrollMarginInline": "",
            "scrollMarginInlineEnd": "",
            "scrollMarginInlineStart": "",
            "scrollMarginLeft": "",
            "scrollMarginRight": "",
            "scrollMarginTop": "",
            "scrollMarkerGroup": "",
            "scrollPadding": "",
            "scrollPaddingBlock": "",
            "scrollPaddingBlockEnd": "",
            "scrollPaddingBlockStart": "",
            "scrollPaddingBottom": "",
            "scrollPaddingInline": "",
            "scrollPaddingInlineEnd": "",
            "scrollPaddingInlineStart": "",
            "scrollPaddingLeft": "",
            "scrollPaddingRight": "",
            "scrollPaddingTop": "",
            "scrollSnapAlign": "",
            "scrollSnapStop": "",
            "scrollSnapType": "",
            "scrollTargetGroup": "",
            "scrollTimeline": "",
            "scrollTimelineAxis": "",
            "scrollTimelineName": "",
            "scrollbarColor": "",
            "scrollbarGutter": "",
            "scrollbarWidth": "",
            "shapeImageThreshold": "",
            "shapeMargin": "",
            "shapeOutside": "",
            "shapeRendering": "",
            "size": "",
            "sizeAdjust": "",
            "speak": "",
            "speakAs": "",
            "src": "",
            "stopColor": "",
            "stopOpacity": "",
            "stroke": "",
            "strokeDasharray": "",
            "strokeDashoffset": "",
            "strokeLinecap": "",
            "strokeLinejoin": "",
            "strokeMiterlimit": "",
            "strokeOpacity": "",
            "strokeWidth": "",
            "suffix": "",
            "symbols": "",
            "syntax": "",
            "system": "",
            "tabSize": "",
            "tableLayout": "",
            "textAlign": "",
            "textAlignLast": "",
            "textAnchor": "",
            "textAutospace": "",
            "textBox": "",
            "textBoxEdge": "",
            "textBoxTrim": "",
            "textCombineUpright": "",
            "textDecoration": "",
            "textDecorationColor": "",
            "textDecorationLine": "",
            "textDecorationSkipInk": "",
            "textDecorationStyle": "",
            "textDecorationThickness": "",
            "textEmphasis": "",
            "textEmphasisColor": "",
            "textEmphasisPosition": "",
            "textEmphasisStyle": "",
            "textIndent": "",
            "textOrientation": "",
            "textOverflow": "",
            "textRendering": "",
            "textShadow": "",
            "textSizeAdjust": "",
            "textSpacingTrim": "",
            "textTransform": "",
            "textUnderlineOffset": "",
            "textUnderlinePosition": "",
            "textWrap": "",
            "textWrapMode": "",
            "textWrapStyle": "",
            "timelineScope": "",
            "top": "",
            "touchAction": "",
            "transform": "",
            "transformBox": "",
            "transformOrigin": "",
            "transformStyle": "",
            "transition": "",
            "transitionBehavior": "",
            "transitionDelay": "",
            "transitionDuration": "",
            "transitionProperty": "",
            "transitionTimingFunction": "",
            "translate": "",
            "types": "",
            "unicodeBidi": "",
            "unicodeRange": "",
            "userSelect": "",
            "vectorEffect": "",
            "verticalAlign": "",
            "viewTimeline": "",
            "viewTimelineAxis": "",
            "viewTimelineInset": "",
            "viewTimelineName": "",
            "viewTransitionClass": "",
            "viewTransitionGroup": "",
            "viewTransitionName": "",
            "visibility": "",
            "webkitAlignContent": "",
            "webkitAlignItems": "",
            "webkitAlignSelf": "",
            "webkitAnimation": "",
            "webkitAnimationDelay": "",
            "webkitAnimationDirection": "",
            "webkitAnimationDuration": "",
            "webkitAnimationFillMode": "",
            "webkitAnimationIterationCount": "",
            "webkitAnimationName": "",
            "webkitAnimationPlayState": "",
            "webkitAnimationTimingFunction": "",
            "webkitAppRegion": "",
            "webkitAppearance": "",
            "webkitBackfaceVisibility": "",
            "webkitBackgroundClip": "",
            "webkitBackgroundOrigin": "",
            "webkitBackgroundSize": "",
            "webkitBorderAfter": "",
            "webkitBorderAfterColor": "",
            "webkitBorderAfterStyle": "",
            "webkitBorderAfterWidth": "",
            "webkitBorderBefore": "",
            "webkitBorderBeforeColor": "",
            "webkitBorderBeforeStyle": "",
            "webkitBorderBeforeWidth": "",
            "webkitBorderBottomLeftRadius": "",
            "webkitBorderBottomRightRadius": "",
            "webkitBorderEnd": "",
            "webkitBorderEndColor": "",
            "webkitBorderEndStyle": "",
            "webkitBorderEndWidth": "",
            "webkitBorderHorizontalSpacing": "",
            "webkitBorderImage": "",
            "webkitBorderRadius": "",
            "webkitBorderStart": "",
            "webkitBorderStartColor": "",
            "webkitBorderStartStyle": "",
            "webkitBorderStartWidth": "",
            "webkitBorderTopLeftRadius": "",
            "webkitBorderTopRightRadius": "",
            "webkitBorderVerticalSpacing": "",
            "webkitBoxAlign": "",
            "webkitBoxDecorationBreak": "",
            "webkitBoxDirection": "",
            "webkitBoxFlex": "",
            "webkitBoxOrdinalGroup": "",
            "webkitBoxOrient": "",
            "webkitBoxPack": "",
            "webkitBoxReflect": "",
            "webkitBoxShadow": "",
            "webkitBoxSizing": "",
            "webkitClipPath": "",
            "webkitColumnBreakAfter": "",
            "webkitColumnBreakBefore": "",
            "webkitColumnBreakInside": "",
            "webkitColumnCount": "",
            "webkitColumnGap": "",
            "webkitColumnRule": "",
            "webkitColumnRuleColor": "",
            "webkitColumnRuleStyle": "",
            "webkitColumnRuleWidth": "",
            "webkitColumnSpan": "",
            "webkitColumnWidth": "",
            "webkitColumns": "",
            "webkitFilter": "",
            "webkitFlex": "",
            "webkitFlexBasis": "",
            "webkitFlexDirection": "",
            "webkitFlexFlow": "",
            "webkitFlexGrow": "",
            "webkitFlexShrink": "",
            "webkitFlexWrap": "",
            "webkitFontFeatureSettings": "",
            "webkitFontSmoothing": "",
            "webkitHyphenateCharacter": "",
            "webkitJustifyContent": "",
            "webkitLineBreak": "",
            "webkitLineClamp": "",
            "webkitLocale": "",
            "webkitLogicalHeight": "",
            "webkitLogicalWidth": "",
            "webkitMarginAfter": "",
            "webkitMarginBefore": "",
            "webkitMarginEnd": "",
            "webkitMarginStart": "",
            "webkitMask": "",
            "webkitMaskBoxImage": "",
            "webkitMaskBoxImageOutset": "",
            "webkitMaskBoxImageRepeat": "",
            "webkitMaskBoxImageSlice": "",
            "webkitMaskBoxImageSource": "",
            "webkitMaskBoxImageWidth": "",
            "webkitMaskClip": "",
            "webkitMaskComposite": "",
            "webkitMaskImage": "",
            "webkitMaskOrigin": "",
            "webkitMaskPosition": "",
            "webkitMaskPositionX": "",
            "webkitMaskPositionY": "",
            "webkitMaskRepeat": "",
            "webkitMaskSize": "",
            "webkitMaxLogicalHeight": "",
            "webkitMaxLogicalWidth": "",
            "webkitMinLogicalHeight": "",
            "webkitMinLogicalWidth": "",
            "webkitOpacity": "",
            "webkitOrder": "",
            "webkitPaddingAfter": "",
            "webkitPaddingBefore": "",
            "webkitPaddingEnd": "",
            "webkitPaddingStart": "",
            "webkitPerspective": "",
            "webkitPerspectiveOrigin": "",
            "webkitPerspectiveOriginX": "",
            "webkitPerspectiveOriginY": "",
            "webkitPrintColorAdjust": "",
            "webkitRtlOrdering": "",
            "webkitRubyPosition": "",
            "webkitShapeImageThreshold": "",
            "webkitShapeMargin": "",
            "webkitShapeOutside": "",
            "webkitTapHighlightColor": "",
            "webkitTextCombine": "",
            "webkitTextDecorationsInEffect": "",
            "webkitTextEmphasis": "",
            "webkitTextEmphasisColor": "",
            "webkitTextEmphasisPosition": "",
            "webkitTextEmphasisStyle": "",
            "webkitTextFillColor": "",
            "webkitTextOrientation": "",
            "webkitTextSecurity": "",
            "webkitTextSizeAdjust": "",
            "webkitTextStroke": "",
            "webkitTextStrokeColor": "",
            "webkitTextStrokeWidth": "",
            "webkitTransform": "",
            "webkitTransformOrigin": "",
            "webkitTransformOriginX": "",
            "webkitTransformOriginY": "",
            "webkitTransformOriginZ": "",
            "webkitTransformStyle": "",
            "webkitTransition": "",
            "webkitTransitionDelay": "",
            "webkitTransitionDuration": "",
            "webkitTransitionProperty": "",
            "webkitTransitionTimingFunction": "",
            "webkitUserDrag": "",
            "webkitUserModify": "",
            "webkitUserSelect": "",
            "webkitWritingMode": "",
            "whiteSpace": "",
            "whiteSpaceCollapse": "",
            "widows": "",
            "width": "",
            "willChange": "",
            "wordBreak": "",
            "wordSpacing": "",
            "wordWrap": "",
            "writingMode": "",
            "x": "",
            "y": "",
            "zIndex": "",
            "zoom": ""
        }
    }
};
HTMLUnknownElement.prototype[Symbol.toStringTag] = "HTMLUnknownElement"
setPrototypeNative(HTMLUnknownElement)

// HTMLInputElement
var tmpInput = {
    value: '',
    type: '',
    style: {
        "0": "margin-top",
        "1": "margin-right",
        "2": "margin-bottom",
        "3": "margin-left",
        "accentColor": "",
        "additiveSymbols": "",
        "alignContent": "",
        "alignItems": "",
        "alignSelf": "",
        "alignmentBaseline": "",
        "all": "",
        "anchorName": "",
        "anchorScope": "",
        "animation": "",
        "animationComposition": "",
        "animationDelay": "",
        "animationDirection": "",
        "animationDuration": "",
        "animationFillMode": "",
        "animationIterationCount": "",
        "animationName": "",
        "animationPlayState": "",
        "animationRange": "",
        "animationRangeEnd": "",
        "animationRangeStart": "",
        "animationTimeline": "",
        "animationTimingFunction": "",
        "appRegion": "",
        "appearance": "",
        "ascentOverride": "",
        "aspectRatio": "",
        "backdropFilter": "",
        "backfaceVisibility": "",
        "background": "",
        "backgroundAttachment": "",
        "backgroundBlendMode": "",
        "backgroundClip": "",
        "backgroundColor": "",
        "backgroundImage": "",
        "backgroundOrigin": "",
        "backgroundPosition": "",
        "backgroundPositionX": "",
        "backgroundPositionY": "",
        "backgroundRepeat": "",
        "backgroundSize": "",
        "basePalette": "",
        "baselineShift": "",
        "baselineSource": "",
        "blockSize": "",
        "border": "",
        "borderBlock": "",
        "borderBlockColor": "",
        "borderBlockEnd": "",
        "borderBlockEndColor": "",
        "borderBlockEndStyle": "",
        "borderBlockEndWidth": "",
        "borderBlockStart": "",
        "borderBlockStartColor": "",
        "borderBlockStartStyle": "",
        "borderBlockStartWidth": "",
        "borderBlockStyle": "",
        "borderBlockWidth": "",
        "borderBottom": "",
        "borderBottomColor": "",
        "borderBottomLeftRadius": "",
        "borderBottomRightRadius": "",
        "borderBottomStyle": "",
        "borderBottomWidth": "",
        "borderCollapse": "",
        "borderColor": "",
        "borderEndEndRadius": "",
        "borderEndStartRadius": "",
        "borderImage": "",
        "borderImageOutset": "",
        "borderImageRepeat": "",
        "borderImageSlice": "",
        "borderImageSource": "",
        "borderImageWidth": "",
        "borderInline": "",
        "borderInlineColor": "",
        "borderInlineEnd": "",
        "borderInlineEndColor": "",
        "borderInlineEndStyle": "",
        "borderInlineEndWidth": "",
        "borderInlineStart": "",
        "borderInlineStartColor": "",
        "borderInlineStartStyle": "",
        "borderInlineStartWidth": "",
        "borderInlineStyle": "",
        "borderInlineWidth": "",
        "borderLeft": "",
        "borderLeftColor": "",
        "borderLeftStyle": "",
        "borderLeftWidth": "",
        "borderRadius": "",
        "borderRight": "",
        "borderRightColor": "",
        "borderRightStyle": "",
        "borderRightWidth": "",
        "borderSpacing": "",
        "borderStartEndRadius": "",
        "borderStartStartRadius": "",
        "borderStyle": "",
        "borderTop": "",
        "borderTopColor": "",
        "borderTopLeftRadius": "",
        "borderTopRightRadius": "",
        "borderTopStyle": "",
        "borderTopWidth": "",
        "borderWidth": "",
        "bottom": "",
        "boxDecorationBreak": "",
        "boxShadow": "",
        "boxSizing": "",
        "breakAfter": "",
        "breakBefore": "",
        "breakInside": "",
        "bufferedRendering": "",
        "captionSide": "",
        "caretColor": "",
        "clear": "",
        "clip": "",
        "clipPath": "",
        "clipRule": "",
        "color": "",
        "colorInterpolation": "",
        "colorInterpolationFilters": "",
        "colorRendering": "",
        "colorScheme": "",
        "columnCount": "",
        "columnFill": "",
        "columnGap": "",
        "columnRule": "",
        "columnRuleColor": "",
        "columnRuleStyle": "",
        "columnRuleWidth": "",
        "columnSpan": "",
        "columnWidth": "",
        "columns": "",
        "contain": "",
        "containIntrinsicBlockSize": "",
        "containIntrinsicHeight": "",
        "containIntrinsicInlineSize": "",
        "containIntrinsicSize": "",
        "containIntrinsicWidth": "",
        "container": "",
        "containerName": "",
        "containerType": "",
        "content": "",
        "contentVisibility": "",
        "counterIncrement": "",
        "counterReset": "",
        "counterSet": "",
        "cursor": "",
        "cx": "",
        "cy": "",
        "d": "",
        "descentOverride": "",
        "direction": "",
        "display": "",
        "dominantBaseline": "",
        "emptyCells": "",
        "fallback": "",
        "fieldSizing": "",
        "fill": "",
        "fillOpacity": "",
        "fillRule": "",
        "filter": "",
        "flex": "",
        "flexBasis": "",
        "flexDirection": "",
        "flexFlow": "",
        "flexGrow": "",
        "flexShrink": "",
        "flexWrap": "",
        "float": "",
        "floodColor": "",
        "floodOpacity": "",
        "font": "",
        "fontDisplay": "",
        "fontFamily": "",
        "fontFeatureSettings": "",
        "fontKerning": "",
        "fontOpticalSizing": "",
        "fontPalette": "",
        "fontSize": "",
        "fontSizeAdjust": "",
        "fontStretch": "",
        "fontStyle": "",
        "fontSynthesis": "",
        "fontSynthesisSmallCaps": "",
        "fontSynthesisStyle": "",
        "fontSynthesisWeight": "",
        "fontVariant": "",
        "fontVariantAlternates": "",
        "fontVariantCaps": "",
        "fontVariantEastAsian": "",
        "fontVariantEmoji": "",
        "fontVariantLigatures": "",
        "fontVariantNumeric": "",
        "fontVariantPosition": "",
        "fontVariationSettings": "",
        "fontWeight": "",
        "forcedColorAdjust": "",
        "gap": "",
        "grid": "",
        "gridArea": "",
        "gridAutoColumns": "",
        "gridAutoFlow": "",
        "gridAutoRows": "",
        "gridColumn": "",
        "gridColumnEnd": "",
        "gridColumnGap": "",
        "gridColumnStart": "",
        "gridGap": "",
        "gridRow": "",
        "gridRowEnd": "",
        "gridRowGap": "",
        "gridRowStart": "",
        "gridTemplate": "",
        "gridTemplateAreas": "",
        "gridTemplateColumns": "",
        "gridTemplateRows": "",
        "height": "",
        "hyphenateCharacter": "",
        "hyphenateLimitChars": "",
        "hyphens": "",
        "imageOrientation": "",
        "imageRendering": "",
        "inherits": "",
        "initialLetter": "",
        "initialValue": "",
        "inlineSize": "",
        "inset": "",
        "insetBlock": "",
        "insetBlockEnd": "",
        "insetBlockStart": "",
        "insetInline": "",
        "insetInlineEnd": "",
        "insetInlineStart": "",
        "interpolateSize": "",
        "isolation": "",
        "justifyContent": "",
        "justifyItems": "",
        "justifySelf": "",
        "left": "",
        "letterSpacing": "",
        "lightingColor": "",
        "lineBreak": "",
        "lineGapOverride": "",
        "lineHeight": "",
        "listStyle": "",
        "listStyleImage": "",
        "listStylePosition": "",
        "listStyleType": "",
        "margin": "-9999px",
        "marginBlock": "",
        "marginBlockEnd": "",
        "marginBlockStart": "",
        "marginBottom": "-9999px",
        "marginInline": "",
        "marginInlineEnd": "",
        "marginInlineStart": "",
        "marginLeft": "-9999px",
        "marginRight": "-9999px",
        "marginTop": "-9999px",
        "marker": "",
        "markerEnd": "",
        "markerMid": "",
        "markerStart": "",
        "mask": "",
        "maskClip": "",
        "maskComposite": "",
        "maskImage": "",
        "maskMode": "",
        "maskOrigin": "",
        "maskPosition": "",
        "maskRepeat": "",
        "maskSize": "",
        "maskType": "",
        "mathDepth": "",
        "mathShift": "",
        "mathStyle": "",
        "maxBlockSize": "",
        "maxHeight": "",
        "maxInlineSize": "",
        "maxWidth": "",
        "minBlockSize": "",
        "minHeight": "",
        "minInlineSize": "",
        "minWidth": "",
        "mixBlendMode": "",
        "navigation": "",
        "negative": "",
        "objectFit": "",
        "objectPosition": "",
        "objectViewBox": "",
        "offset": "",
        "offsetAnchor": "",
        "offsetDistance": "",
        "offsetPath": "",
        "offsetPosition": "",
        "offsetRotate": "",
        "opacity": "",
        "order": "",
        "orphans": "",
        "outline": "",
        "outlineColor": "",
        "outlineOffset": "",
        "outlineStyle": "",
        "outlineWidth": "",
        "overflow": "",
        "overflowAnchor": "",
        "overflowClipMargin": "",
        "overflowWrap": "",
        "overflowX": "",
        "overflowY": "",
        "overlay": "",
        "overrideColors": "",
        "overscrollBehavior": "",
        "overscrollBehaviorBlock": "",
        "overscrollBehaviorInline": "",
        "overscrollBehaviorX": "",
        "overscrollBehaviorY": "",
        "pad": "",
        "padding": "",
        "paddingBlock": "",
        "paddingBlockEnd": "",
        "paddingBlockStart": "",
        "paddingBottom": "",
        "paddingInline": "",
        "paddingInlineEnd": "",
        "paddingInlineStart": "",
        "paddingLeft": "",
        "paddingRight": "",
        "paddingTop": "",
        "page": "",
        "pageBreakAfter": "",
        "pageBreakBefore": "",
        "pageBreakInside": "",
        "pageOrientation": "",
        "paintOrder": "",
        "perspective": "",
        "placeContent": "",
        "placeItems": "",
        "placeSelf": "",
        "pointerEvents": "",
        "position": "",
        "positionAnchor": "",
        "positionArea": "",
        "positionTry": "",
        "positionTryFallbacks": "",
        "positionTryOrder": "",
        "positionVisibility": "",
        "prefix": "",
        "quotes": "",
        "r": "",
        "range": "",
        "resize": "",
        "right": "",
        "rotate": "",
        "rowGap": "",
        "rubyAlign": "",
        "rubyPosition": "",
        "rx": "",
        "ry": "",
        "scale": "",
        "scrollBehavior": "",
        "scrollInitialTarget": "",
        "scrollMargin": "",
        "scrollMarginBlock": "",
        "scrollMarginBlockEnd": "",
        "scrollMarginBlockStart": "",
        "scrollMarginBottom": "",
        "scrollMarginInline": "",
        "scrollMarginInlineEnd": "",
        "scrollMarginInlineStart": "",
        "scrollMarginLeft": "",
        "scrollMarginRight": "",
        "scrollMarginTop": "",
        "scrollPadding": "",
        "scrollPaddingBlock": "",
        "scrollPaddingBlockEnd": "",
        "scrollPaddingBlockStart": "",
        "scrollPaddingBottom": "",
        "scrollPaddingInline": "",
        "scrollPaddingInlineEnd": "",
        "scrollPaddingInlineStart": "",
        "scrollPaddingLeft": "",
        "scrollPaddingRight": "",
        "scrollPaddingTop": "",
        "scrollSnapAlign": "",
        "scrollSnapStop": "",
        "scrollSnapType": "",
        "scrollTimeline": "",
        "scrollTimelineAxis": "",
        "scrollTimelineName": "",
        "scrollbarColor": "",
        "scrollbarGutter": "",
        "scrollbarWidth": "",
        "shapeImageThreshold": "",
        "shapeMargin": "",
        "shapeOutside": "",
        "shapeRendering": "",
        "size": "",
        "sizeAdjust": "",
        "speak": "",
        "speakAs": "",
        "src": "",
        "stopColor": "",
        "stopOpacity": "",
        "stroke": "",
        "strokeDasharray": "",
        "strokeDashoffset": "",
        "strokeLinecap": "",
        "strokeLinejoin": "",
        "strokeMiterlimit": "",
        "strokeOpacity": "",
        "strokeWidth": "",
        "suffix": "",
        "symbols": "",
        "syntax": "",
        "system": "",
        "tabSize": "",
        "tableLayout": "",
        "textAlign": "",
        "textAlignLast": "",
        "textAnchor": "",
        "textBox": "",
        "textBoxEdge": "",
        "textBoxTrim": "",
        "textCombineUpright": "",
        "textDecoration": "",
        "textDecorationColor": "",
        "textDecorationLine": "",
        "textDecorationSkipInk": "",
        "textDecorationStyle": "",
        "textDecorationThickness": "",
        "textEmphasis": "",
        "textEmphasisColor": "",
        "textEmphasisPosition": "",
        "textEmphasisStyle": "",
        "textIndent": "",
        "textOrientation": "",
        "textOverflow": "",
        "textRendering": "",
        "textShadow": "",
        "textSizeAdjust": "",
        "textSpacingTrim": "",
        "textTransform": "",
        "textUnderlineOffset": "",
        "textUnderlinePosition": "",
        "textWrap": "",
        "textWrapMode": "",
        "textWrapStyle": "",
        "timelineScope": "",
        "top": "",
        "touchAction": "",
        "transform": "",
        "transformBox": "",
        "transformOrigin": "",
        "transformStyle": "",
        "transition": "",
        "transitionBehavior": "",
        "transitionDelay": "",
        "transitionDuration": "",
        "transitionProperty": "",
        "transitionTimingFunction": "",
        "translate": "",
        "types": "",
        "unicodeBidi": "",
        "unicodeRange": "",
        "userSelect": "",
        "vectorEffect": "",
        "verticalAlign": "",
        "viewTimeline": "",
        "viewTimelineAxis": "",
        "viewTimelineInset": "",
        "viewTimelineName": "",
        "viewTransitionClass": "",
        "viewTransitionName": "",
        "visibility": "",
        "webkitAlignContent": "",
        "webkitAlignItems": "",
        "webkitAlignSelf": "",
        "webkitAnimation": "",
        "webkitAnimationDelay": "",
        "webkitAnimationDirection": "",
        "webkitAnimationDuration": "",
        "webkitAnimationFillMode": "",
        "webkitAnimationIterationCount": "",
        "webkitAnimationName": "",
        "webkitAnimationPlayState": "",
        "webkitAnimationTimingFunction": "",
        "webkitAppRegion": "",
        "webkitAppearance": "",
        "webkitBackfaceVisibility": "",
        "webkitBackgroundClip": "",
        "webkitBackgroundOrigin": "",
        "webkitBackgroundSize": "",
        "webkitBorderAfter": "",
        "webkitBorderAfterColor": "",
        "webkitBorderAfterStyle": "",
        "webkitBorderAfterWidth": "",
        "webkitBorderBefore": "",
        "webkitBorderBeforeColor": "",
        "webkitBorderBeforeStyle": "",
        "webkitBorderBeforeWidth": "",
        "webkitBorderBottomLeftRadius": "",
        "webkitBorderBottomRightRadius": "",
        "webkitBorderEnd": "",
        "webkitBorderEndColor": "",
        "webkitBorderEndStyle": "",
        "webkitBorderEndWidth": "",
        "webkitBorderHorizontalSpacing": "",
        "webkitBorderImage": "",
        "webkitBorderRadius": "",
        "webkitBorderStart": "",
        "webkitBorderStartColor": "",
        "webkitBorderStartStyle": "",
        "webkitBorderStartWidth": "",
        "webkitBorderTopLeftRadius": "",
        "webkitBorderTopRightRadius": "",
        "webkitBorderVerticalSpacing": "",
        "webkitBoxAlign": "",
        "webkitBoxDecorationBreak": "",
        "webkitBoxDirection": "",
        "webkitBoxFlex": "",
        "webkitBoxOrdinalGroup": "",
        "webkitBoxOrient": "",
        "webkitBoxPack": "",
        "webkitBoxReflect": "",
        "webkitBoxShadow": "",
        "webkitBoxSizing": "",
        "webkitClipPath": "",
        "webkitColumnBreakAfter": "",
        "webkitColumnBreakBefore": "",
        "webkitColumnBreakInside": "",
        "webkitColumnCount": "",
        "webkitColumnGap": "",
        "webkitColumnRule": "",
        "webkitColumnRuleColor": "",
        "webkitColumnRuleStyle": "",
        "webkitColumnRuleWidth": "",
        "webkitColumnSpan": "",
        "webkitColumnWidth": "",
        "webkitColumns": "",
        "webkitFilter": "",
        "webkitFlex": "",
        "webkitFlexBasis": "",
        "webkitFlexDirection": "",
        "webkitFlexFlow": "",
        "webkitFlexGrow": "",
        "webkitFlexShrink": "",
        "webkitFlexWrap": "",
        "webkitFontFeatureSettings": "",
        "webkitFontSmoothing": "",
        "webkitHyphenateCharacter": "",
        "webkitJustifyContent": "",
        "webkitLineBreak": "",
        "webkitLineClamp": "",
        "webkitLocale": "",
        "webkitLogicalHeight": "",
        "webkitLogicalWidth": "",
        "webkitMarginAfter": "",
        "webkitMarginBefore": "",
        "webkitMarginEnd": "",
        "webkitMarginStart": "",
        "webkitMask": "",
        "webkitMaskBoxImage": "",
        "webkitMaskBoxImageOutset": "",
        "webkitMaskBoxImageRepeat": "",
        "webkitMaskBoxImageSlice": "",
        "webkitMaskBoxImageSource": "",
        "webkitMaskBoxImageWidth": "",
        "webkitMaskClip": "",
        "webkitMaskComposite": "",
        "webkitMaskImage": "",
        "webkitMaskOrigin": "",
        "webkitMaskPosition": "",
        "webkitMaskPositionX": "",
        "webkitMaskPositionY": "",
        "webkitMaskRepeat": "",
        "webkitMaskSize": "",
        "webkitMaxLogicalHeight": "",
        "webkitMaxLogicalWidth": "",
        "webkitMinLogicalHeight": "",
        "webkitMinLogicalWidth": "",
        "webkitOpacity": "",
        "webkitOrder": "",
        "webkitPaddingAfter": "",
        "webkitPaddingBefore": "",
        "webkitPaddingEnd": "",
        "webkitPaddingStart": "",
        "webkitPerspective": "",
        "webkitPerspectiveOrigin": "",
        "webkitPerspectiveOriginX": "",
        "webkitPerspectiveOriginY": "",
        "webkitPrintColorAdjust": "",
        "webkitRtlOrdering": "",
        "webkitRubyPosition": "",
        "webkitShapeImageThreshold": "",
        "webkitShapeMargin": "",
        "webkitShapeOutside": "",
        "webkitTapHighlightColor": "",
        "webkitTextCombine": "",
        "webkitTextDecorationsInEffect": "",
        "webkitTextEmphasis": "",
        "webkitTextEmphasisColor": "",
        "webkitTextEmphasisPosition": "",
        "webkitTextEmphasisStyle": "",
        "webkitTextFillColor": "",
        "webkitTextOrientation": "",
        "webkitTextSecurity": "",
        "webkitTextSizeAdjust": "",
        "webkitTextStroke": "",
        "webkitTextStrokeColor": "",
        "webkitTextStrokeWidth": "",
        "webkitTransform": "",
        "webkitTransformOrigin": "",
        "webkitTransformOriginX": "",
        "webkitTransformOriginY": "",
        "webkitTransformOriginZ": "",
        "webkitTransformStyle": "",
        "webkitTransition": "",
        "webkitTransitionDelay": "",
        "webkitTransitionDuration": "",
        "webkitTransitionProperty": "",
        "webkitTransitionTimingFunction": "",
        "webkitUserDrag": "",
        "webkitUserModify": "",
        "webkitUserSelect": "",
        "webkitWritingMode": "",
        "whiteSpace": "",
        "whiteSpaceCollapse": "",
        "widows": "",
        "width": "",
        "willChange": "",
        "wordBreak": "",
        "wordSpacing": "",
        "wordWrap": "",
        "writingMode": "",
        "x": "",
        "y": "",
        "zIndex": "",
        "zoom": ""
    },
    status: {}
}
HTMLInputElement = function () {
};
Object.defineProperties(HTMLInputElement.prototype, {
    getClientRects: {
        get() {
            return function () {
                return {
                    "0": {
                        width: tmpInput.status.width,
                        height: tmpInput.status.height
                    }
                }
            }
        }
    },
    tagName: {
        get() {
            return tmpInput.tagName;
        }
    },
    value: {
        get() {
            return tmpInput.value;
        },
        set(newValue) {
            tmpInput.value = newValue;
        }
    },
    type: {
        get() {
            return tmpInput.type;
        },
        set(newValue) {
            if (newValue === 'color') {
                tmpInput.status = {
                    width: 50,
                    height: 27,
                    clientWidth: 48,
                    clientHeight: 25
                }
            } else if (newValue === 'checkbox') {
                tmpInput.status = {
                    width: 13,
                    height: 13,
                    clientWidth: 13,
                    clientHeight: 13
                }
            } else if (newValue === 'range') {
                tmpInput.status = {
                    width: 129,
                    height: 16,
                    clientWidth: 129,
                    clientHeight: 16
                }
            } else if (newValue === 'file') {
                tmpInput.status = {
                    width: 253,
                    height: 25,
                    clientWidth: 253,
                    clientHeight: 25
                }
            } else if (newValue === 'time') {
                tmpInput.status = {
                    width: 78,
                    height: 24,
                    clientWidth: 74,
                    clientHeight: 20
                }
            } else if (newValue === 'submit') {
                tmpInput.status = {
                    width: 42.671875,
                    height: 25,
                    clientWidth: 39,
                    clientHeight: 21
                }
            } else if (newValue === 'reset') {
                tmpInput.status = {
                    width: 42.671875,
                    height: 25,
                    clientWidth: 39,
                    clientHeight: 21
                }
            } else if (newValue === 'search') {
                tmpInput.status = {
                    width: 153,
                    height: 21,
                    clientWidth: 149,
                    clientHeight: 17
                }
            } else if (newValue === 'password') {
                tmpInput.status = {
                    width: 153,
                    height: 21,
                    clientWidth: 149,
                    clientHeight: 17
                }
            } else if (newValue === 'tel') {
                tmpInput.status = {
                    width: 153,
                    height: 21,
                    clientWidth: 149,
                    clientHeight: 17
                }
            } else if (newValue === 'button') {
                tmpInput.status = {
                    width: 81,
                    height: 123,
                    clientWidth: 112,
                    clientHeight: 133,
                }
            } else {
                my_log(newValue)
                tmpInput.type = newValue;
                debugger
            }


        }
    },
    style: {
        get() {
            return {...tmpInput.style};
        },
        set(newValue) {
            debugger
            if (typeof newValue === 'object' && newValue !== null) {
                Object.assign(tmpInput.style, newValue);
            } else {
                const [prop, val] = newValue.split(':');
                tmpInput.style[prop.trim()] = val.trim();
            }
        }
    },
    clientWidth: {
        get() {
            if (tmpInput.type === "button") {
                globalvalue.clientWidthIndex++
                if (globalvalue.clientWidthIndex === 11) {
                    return 62
                } else if (globalvalue.clientWidthIndex === 19) {
                    return 81
                } else if (globalvalue.clientWidthIndex === 12 || globalvalue.clientWidthIndex === 13 || globalvalue.clientWidthIndex === 14 || globalvalue.clientWidthIndex === 15 || globalvalue.clientWidthIndex === 16 || globalvalue.clientWidthIndex === 17 || globalvalue.clientWidthIndex === 18 || globalvalue.clientWidthIndex === 20) {
                    return 112
                }
                return globalvalue.clientWidthIndex
                // return globalvalue.clientWidthIndex
            } else if (tmpInput.type === "") {
                globalvalue.clientWidthIndex++
                if (globalvalue.clientWidthIndex === 1) {
                    return 62
                } else if (globalvalue.clientWidthIndex === 2 || globalvalue.clientWidthIndex === 3 || globalvalue.clientWidthIndex === 4 || globalvalue.clientWidthIndex === 5 || globalvalue.clientWidthIndex === 6 || globalvalue.clientWidthIndex === 7 || globalvalue.clientWidthIndex === 8 || globalvalue.clientWidthIndex === 10) {
                    return 112
                } else if (globalvalue.clientWidthIndex === 9) {
                    return 81
                } else if (globalvalue.clientWidthIndex === 11) {
                    return 48
                } else if (globalvalue.clientWidthIndex === 12) {
                    return 13
                } else if (globalvalue.clientWidthIndex === 13) {
                    return 129
                } else if (globalvalue.clientWidthIndex === 14) {
                    return 253
                } else if (globalvalue.clientWidthIndex === 15) {
                    return 74
                } else if (globalvalue.clientWidthIndex === 16 || globalvalue.clientWidthIndex === 17) {
                    return 39
                } else if (globalvalue.clientWidthIndex === 18 || globalvalue.clientWidthIndex === 19 || globalvalue.clientWidthIndex === 20) {
                    return 149
                }
                return globalvalue.clientWidthIndex
                // return globalvalue.clientWidthIndex
            }
            return tmpInput.status.clientWidth;
        },
    },
    clientHeight: {
        get() {
            if (tmpInput.type === "button") {
                globalvalue.clientHeightIndex++
                if (globalvalue.clientHeightIndex === 11) {
                    return 117
                } else if (globalvalue.clientHeightIndex === 13 || globalvalue.clientHeightIndex === 15 || globalvalue.clientHeightIndex === 17) {
                    return 152
                } else if (globalvalue.clientHeightIndex === 12 || globalvalue.clientHeightIndex === 14 || globalvalue.clientHeightIndex === 16 || globalvalue.clientHeightIndex === 18 || globalvalue.clientHeightIndex === 20) {
                    return 133
                } else if (globalvalue.clientHeightIndex === 19) {
                    return 123
                }
                return globalvalue.clientHeightIndex
                // return globalvalue.clientHeightIndex
            } else if (tmpInput.type === "") {
                globalvalue.clientHeightIndex++
                if (globalvalue.clientHeightIndex === 1) {
                    return 117
                } else if (globalvalue.clientHeightIndex === 3 || globalvalue.clientHeightIndex === 5 || globalvalue.clientHeightIndex === 7) {
                    return 152
                } else if (globalvalue.clientHeightIndex === 2 || globalvalue.clientHeightIndex === 4 || globalvalue.clientHeightIndex === 6 || globalvalue.clientHeightIndex === 8 || globalvalue.clientHeightIndex === 10) {
                    return 133
                } else if (globalvalue.clientHeightIndex === 9) {
                    return 123
                } else if (globalvalue.clientHeightIndex === 11 || globalvalue.clientHeightIndex === 14) {
                    return 25
                } else if (globalvalue.clientHeightIndex === 12) {
                    return 13
                } else if (globalvalue.clientHeightIndex === 13) {
                    return 16
                } else if (globalvalue.clientHeightIndex === 15) {
                    return 20
                } else if (globalvalue.clientHeightIndex === 16 || globalvalue.clientHeightIndex === 17) {
                    return 21
                } else if (globalvalue.clientHeightIndex === 18 || globalvalue.clientHeightIndex === 19 || globalvalue.clientHeightIndex === 20) {
                    return 17
                }
                return globalvalue.clientHeightIndex
            }
            return tmpInput.status.clientHeight;
        }
    }
});
HTMLInputElement.prototype[Symbol.toStringTag] = "HTMLInputElement"
setPrototypeNative(HTMLInputElement)

// ShadowRoot
window.ShadowRoot = function () {
}
ShadowRoot.prototype = {}
ShadowRoot.prototype[Symbol.toStringTag] = 'ShadowRoot'
setNative(ShadowRoot, 'ShadowRoot')

var document_fragment = {}
Object.setPrototypeOf(document_fragment, ShadowRoot.prototype)

// HTMLParagraphElement
HTMLParagraphElement = function () {
};
HTMLParagraphElement.prototype = {
    attachShadow: function attachShadow() {
        if (typeof arguments[0] === 'object' && arguments[0]?.mode === 'closed') {
            return document_fragment
        }
    }
}
HTMLParagraphElement.prototype[Symbol.toStringTag] = "HTMLParagraphElement"
setPrototypeNative(HTMLParagraphElement)

var p = {
    tabIndex: -1,
    tagName: "P",
    textContent: "",
    title: "",
    translate: true,
    virtualKeyboardPolicy: "",
    writingSuggestions: "true",
}
Object.setPrototypeOf(p, HTMLParagraphElement.prototype)

var invalidTag = {}
Object.setPrototypeOf(invalidTag, HTMLUnknownElement.prototype)

var iframe = {}
Object.setPrototypeOf(iframe, HTMLIFrameElement.prototype)

div = {}
Object.setPrototypeOf(div, HTMLDivElement.prototype)

var input = {}
Object.setPrototypeOf(input, HTMLInputElement.prototype)

var body = {
    innerHTML: `\x3Cscript>// fp_js_code\x3C/script>\x3Cscript src="// ips_js_uri">\x3C/script><iframe src="javascript:;" style="display: none;"></iframe><iframe src="javascript:;" style="display: none;"></iframe>`
}

Object.defineProperty(body, 'childElementCount', {
    get() {
        return 6;
    }
});
Object.setPrototypeOf(body, HTMLBodyElement.prototype)
setNative(body.appendChild, 'appendChild')

var audio = {}
Object.setPrototypeOf(audio, HTMLAudioElement.prototype)
var video = {}
Object.setPrototypeOf(video, HTMLVideoElement.prototype)
var head = {
    childElementCount: 0
}
Object.setPrototypeOf(head, HTMLHeadElement.prototype)
var script = [{
    tagName: "SCRIPT",
    innerHTML: "<script>// fp_js_code</script><script src=\"// ips_js_uri\"></script><iframe src=\"javascript:;\" style=\"display: none;\"></iframe>",
    innerText: "// fp_js_code",
    src: "",
    toString: function () {
        return '[object HTMLScriptElement]'
    }
}, {
    tagName: "SCRIPT",
    innerHTM: "",
    innerText: "",
    src: "// ips_js_url",
    toString: function () {
        return '[object HTMLScriptElement]'
    }
}]
var p = {}
Object.setPrototypeOf(p, HTMLParagraphElement.prototype)
var template = {
    tagName: "TEMPLATE",
    innerHTML: "",
    toString: function () {
        return '[object HTMLTemplateElement]'
    }
}

// Document
window.Document = function Document() {
}
Document.prototype = {
    childNodes: script,
    getElementsByTagName(arg) {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        if (arg === 'script') {
            return script[0]
        } else {
            my_log("getElementsByTagName>>>" + arg)
        }
    },
    createElement(arg) {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        if (arg === 'canvas') {
            let tmp = {
                style: {}
            }
            tmp.canvas_id = Math.random() * +new Date()
            Object.setPrototypeOf(tmp, HTMLCanvasElement.prototype)
            window.globalCanvas[tmp.canvas_id] = {width: 300, height: 150}
            return tmp
            // return canvas
        }
        if (arg === 'p') {
            return p
        }
        if (arg === 'div') {
            return div
        }
        if (arg === 'iframe') {
            return iframe
        }
        if (arg === 'input') {
            return input
        }
        if (arg === 'audio') {
            return audio
        }
        if (arg === 'video') {
            return video
        }
        if (arg === 'template') {
            return template
        }
        if (arg === 'invalidTag') {
            return invalidTag
        }
        my_log("createElement>>>" + arg)
    },
    addEventListener() {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        // debugger;
        if (arguments[0] === "mousemove") {
            /*
            arguments[1]({
                isTrusted: true,
                altKey: false,
                bubbles: true,
                button: 0,
                buttons: 0,
                cancelBubble: false,
                cancelable: true,
                clientX: 919,
                clientY: 375,
                composed: true,
                ctrlKey: false,
                currentTarget: document,
                defaultPrevented: false,
                detail: 0,
                eventPhase: 3,
                fromElement: null,
                layerX: 919,
                layerY: 375,
                metaKey: false,
                movementX: 0,
                movementY: 0,
                offsetX: 919,
                offsetY: 375,
                pageX: 919,
                pageY: 375,
                relatedTarget: null,
                returnValue: true,
                screenX: 923,
                screenY: 483,
                shiftKey: false,
                sourceCapabilities: {firesTouchEvents: false},
                srcElement: document.documentElement, // html 元素
                target: document.documentElement, // html 元素
                timeStamp: 65490.89999985695,
                toElement: document.documentElement, // html 元素
                type: "mouseover",
                view: window,
                which: 0,
                x: 919,
                y: 375
            });
            arguments[1]({
                isTrusted: true,
                altKey: false,
                bubbles: true,
                button: 0,
                buttons: 0,
                cancelBubble: false,
                cancelable: true,
                clientX: 919,
                clientY: 375,
                composed: true,
                ctrlKey: false,
                currentTarget: document,
                defaultPrevented: false,
                detail: 0,
                eventPhase: 3,
                fromElement: null,
                layerX: 919,
                layerY: 375,
                metaKey: false,
                movementX: 0,
                movementY: 0,
                offsetX: 919,
                offsetY: 375,
                pageX: 919,
                pageY: 375,
                relatedTarget: null,
                returnValue: true,
                screenX: 923,
                screenY: 483,
                shiftKey: false,
                sourceCapabilities: {firesTouchEvents: false},
                srcElement: document.documentElement, // html 元素
                target: document.documentElement, // html 元素
                timeStamp: 65490.89999985695,
                toElement: document.documentElement, // html 元素
                type: "mouseover",
                view: window,
                which: 0,
                x: 919,
                y: 375
            });
            arguments[1]({
                isTrusted: true,
                altKey: false,
                bubbles: true,
                button: 0,
                buttons: 0,
                cancelBubble: false,
                cancelable: true,
                clientX: 1010,
                clientY: 475,
                composed: true,
                ctrlKey: false,
                currentTarget: document,
                defaultPrevented: false,
                detail: 0,
                eventPhase: 3,
                fromElement: null,
                layerX: 1010,
                layerY: 475,
                metaKey: false,
                movementX: 0,
                movementY: 0,
                offsetX: 1010,
                offsetY: 475,
                pageX: 1010,
                pageY: 475,
                relatedTarget: null,
                returnValue: true,
                screenX: 923,
                screenY: 483,
                shiftKey: false,
                sourceCapabilities: {firesTouchEvents: false},
                srcElement: document.documentElement, // html 元素
                target: document.documentElement, // html 元素
                timeStamp: 65495.89999985695,
                toElement: document.documentElement, // html 元素
                type: "mouseover",
                view: window,
                which: 0,
                x: 1010,
                y: 475
            });

             */
        }
    },
    get body() {
        if (this.URL === 'about:blank') {
            let content_window_body = {innerHTML: ''};
            Object.defineProperty(content_window_body, 'childElementCount', {
                get() {
                    // debugger;
                    return 0;
                }
            });
            Object.setPrototypeOf(content_window_body, HTMLBodyElement.prototype)
            setNative(content_window_body.appendChild, 'appendChild')
            return content_window_body;
        }

        return body;
    },
    documentElement: {
        clientHeight: 0,
        clientWidth: 0,
        outerHTML: {
            length: 2
        },
        innerHTML: {
            length: 2
        }
    },
    createEvent(arg) {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        if (arg === "TouchEvent") {
            throw new NotSupportedError("Failed to execute 'createEvent' on 'Document': The provided event type ('TouchEvent') is invalid.")
        } else if (arg === "Event") {
            return {
                "isTrusted": false,
                bubbles: false,
                cancelBubble: false,
                cancelable: false,
                composed: false,
                currentTarget: null,
                defaultPrevented: false,
                eventPhase: 0,
                returnValue: true,
                srcElement: null,
                target: null,
                timeStamp: performance.now(),
                type: ""
            }
        } else {
            my_log('createEvent --> ', [...arguments])
        }
    },
    createElementNS(v) {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        my_log('createElementNS ', v, ' 未实现')
    },
    createAttribute(v) {
        if (!(this instanceof Document))
            throw new TypeError('Illegal invocation')
        my_log('createAttribute ', v, ' 未实现')

    },
    currentScript: {
        textContent: "    KPSDK.configure([{\n" +
            "      method: 'POST',\n" +
            "      domain: 'akamai-gw.dbaas.aircanada.com',\n" +
            "      path: '/loyalty/dapidynamic/1ASIUDALAC/v2/search/air-bounds'\n" +
            "    },\n" +
            "    {\n" +
            "      method: 'POST',\n" +
            "      domain: 'akamai-gw.dbaas.aircanada.com',\n" +
            "      path: '/loyalty/dapidynamicplus/1ASIUDALAC/v2/purchase/orders'\n" +
            "    }]);\n" +
            "   ",
        innerHTML: '',
        innerText: '',
        getAttribute: function () {
            return 'https://www.aircanada.com/assets/d0cf02c79e32edec2065f3c335af8c367001194a011'
        }
    },
    all: [[], [], [], []],
    onmousewheel: {
        get: function () {
            return null
        }
    },
    querySelectorAll: function () {
        return script
    },
    appendChild(arg) {
    },
    childElementCount: 10,
    get head() {
        return head
    },
    get styleSheets() {
        return globalvalue.styleSheetsIndex++ ? {length: 0} : {length: 2}
    },
    visibilityState: 'visible',
    hasFocus: function () {
        if (this.flag === "parent") {
            return null
        }
        return false
    },
    readyState: 'complete',
    hidden: false,
    onload: null,
    onclose: null,
    onfocus: null,
    onblur: null,
    onscroll: null,
    onscrollend: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null
}
Document.prototype[Symbol.toStringTag] = "HTMLDocument"
Document.prototype.querySelectorAll.name = 'querySelectorAll'
setNative(Document.prototype.createElement, 'createElement')
document = {
    location: location,
    referrer: 'https://www.aircanada.com/',
    URL: "// fp_js_url",
    activeElement: body,
    alinkColor: "",
    all: [[], head, body, script[0], script[1], iframe, iframe],
    baseURI: "// fp_js_url",
    bgColor: "",
    characterSet: "UTF-8",
    charset: "UTF-8"
}
Object.setPrototypeOf(document, Document.prototype)

// History
window.History = function History() {
}
History.prototype = {
    length: 0
}
setNative(History, 'History')
History.prototype[Symbol.toStringTag] = "History"
window.history = {
    length: 26
}
Object.setPrototypeOf(history, History.prototype)

// Permissions
window.Permissions = function Permissions() {
    throw new TypeError('Illegal invocation')
}
Object.defineProperties(Permissions.prototype, {
    query: {
        get() {
            if (!(this instanceof Permissions))
                throw new TypeError("Class extends value function query() { [native code] } is not a constructor or null")
            return function () {
                return new Promise(function (resolve, reject) {
                    resolve({
                        state: 'granted'
                    })
                })
            }
        }
    }
})
Permissions.prototype[Symbol.toStringTag] = "Permissions"
setPrototypeNative(Permissions)

// Plugin
window.Plugin = function Plugin() {
    throw new TypeError('Illegal constructor')
}
Plugin.prototype = {
    get description() {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
        return "Portable Document Format"
    },
    get filename() {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
        return "internal-pdf-viewer"
    },
    get length() {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
        return 2
    },
    get name() {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
    },
    item(index) {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
    },
    namedItem(name) {
        if (!(this instanceof Plugin))
            throw new TypeError('Illegal invocation')
    }
}
Plugin.prototype[Symbol.toStringTag] = "Plugin"
setPrototypeNative(Plugin)

// PluginArray
window.PluginArray = function PluginArray() {
    throw new TypeError('Illegal constructor')
}
PluginArray.prototype = {
    get length() {
        if (!(this instanceof PluginArray))
            throw new TypeError('Illegal invocation')
        return Object.keys(this).length / 2
    },
    refresh() {
        if (!(this instanceof PluginArray))
            throw new TypeError('Illegal invocation')
        debugger
    },
    item(index) {
        if (!(this instanceof PluginArray))
            throw new TypeError('Illegal invocation')
        return this[index * 2]
    },
    namedItem(name) {
        if (!(this instanceof PluginArray))
            throw new TypeError('Illegal invocation')
        return this[name]
    },
}
setNative(PluginArray, 'PluginArray')
PluginArray.prototype[Symbol.toStringTag] = "PluginArray"
setPrototypeNative(PluginArray)

// Navigator
window.Navigator = function Navigator() {
    throw new TypeError('Illegal invocation')
};
Navigator.prototype = {
    get wirelessDevices() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return true
    },
    get vendorSub() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return ''
    },
    get productSub() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return '20030107'
    },
    get vendor() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 'Google Inc.'
    },
    get maxTouchPoints() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 0
    },
    get scheduling() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, Scheduling.prototype)
        return tmp
    },
    get userActivation() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, UserActivation.prototype)
        return tmp
    },
    get doNotTrack() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return null
    },
    get geolocation() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Geolocation.prototype)
        return tmp
    },
    get connection() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, NetworkInformation.prototype)
        return tmp
    },
    get plugins() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let PDF_Viewer = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            // 'application/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "application/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
            // 'text/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: 'text/pdf',
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
        }
        setPlugin(PDF_Viewer, 'name', "PDF Viewer")
        let Chrome_PDF_Viewer = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            // 'application/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "application/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
            // 'text/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "text/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            //
            // },
        }
        setPlugin(Chrome_PDF_Viewer, 'name', "Chrome PDF Viewer")
        let Chromium_PDF_Viewer = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            // 'application/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "application/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
            // 'text/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "text/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            //
            // },
        }
        setPlugin(Chromium_PDF_Viewer, 'name', "Chromium PDF Viewer")
        let Microsoft_Edge_PDF_Viewer = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            // 'application/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "application/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
            // 'text/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     type: "text/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            //
            // },
        }
        setPlugin(Microsoft_Edge_PDF_Viewer, 'name', "Microsoft Edge PDF Viewer")
        let WebKit_built_in_PDF = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            // 'application/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     // type: "application/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            // },
            // 'text/pdf': {
            //     description: "Portable Document Format",
            //     suffixes: "pdf",
            //     // type: "text/pdf",
            //     enabledPlugin: {filename: "internal-pdf-viewer"},
            //
            // },
        }
        setPlugin(WebKit_built_in_PDF, 'name', "WebKit built-in PDF")

        let tmp = {
            0: PDF_Viewer,
            1: Chrome_PDF_Viewer,
            2: Chromium_PDF_Viewer,
            3: Microsoft_Edge_PDF_Viewer,
            4: WebKit_built_in_PDF,
            'Chrome PDF Viewer': Chrome_PDF_Viewer,
            'Chromium PDF Viewer': Chromium_PDF_Viewer,
            'Microsoft Edge PDF Viewer': Microsoft_Edge_PDF_Viewer,
            'PDF Viewer': PDF_Viewer,
            'WebKit built-in PDF': WebKit_built_in_PDF,
        }

        Object.setPrototypeOf(tmp, PluginArray.prototype)
        Object.defineProperty(tmp, 'constructor', {
            value: PluginArray,
            configurable: true,
            enumerable: false,
            writable: true
        });
        return tmp
    },
    get mimeTypes() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {
            0: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            1: {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            'application/pdf': {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "application/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},
            },
            'text/pdf': {
                description: "Portable Document Format",
                suffixes: "pdf",
                type: "text/pdf",
                enabledPlugin: {filename: "internal-pdf-viewer"},

            },
        }
        Object.setPrototypeOf(tmp, MimeTypeArray.prototype)
        Object.defineProperty(tmp, 'constructor', {
            value: MimeTypeArray,
            configurable: true,
            enumerable: false,
            writable: true
        });
        return tmp
    },
    get pdfViewerEnabled() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return true
    },
    get webkitTemporaryStorage() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, DeprecatedStorageQuota.prototype)
        return tmp
    },
    get webkitPersistentStorage() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, DeprecatedStorageQuota.prototype)
        return tmp
    },
    get windowControlsOverlay() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, WindowControlsOverlay.prototype)
        return tmp
    },
    get hardwareConcurrency() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        if (this.userAgent.indexOf("Windows") !== -1) {
            return 4
        } else {
            return 11
        }
    },
    get cookieEnabled() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return true
    },
    get appCodeName() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 'Mozilla'
    },
    get appName() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 'Netscape'
    },
    get appVersion() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return this.userAgent.slice(8)
    },
    get platform() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 'sec-ch-ua-platform' === "macOS" ? 'MacIntel' : 'sec-ch-ua-platform' === "Windows" ? "Win32" : 'sec-ch-ua-platform'
    },
    get product() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 'Gecko'
    },
    get userAgent() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return "useragent params"
    },
    get language() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return "zh-CN"
    },
    get languages() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return ['zh-CN', 'en', 'zh', 'en-US', 'zh-TW']
    },
    get onLine() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return true
    },
    get webdriver() {
        return false
    },
    getGamepads() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    javaEnabled() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return false
    },
    sendBeacon() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    vibrate() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    get deprecatedRunAdAuctionEnforcesKAnonymity() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return false
    },
    get protectedAudience() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        return tmp
    },
    get bluetooth() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Bluetooth.prototype)
        return tmp
    },
    get storageBuckets() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, StorageBucketManager.prototype)
        return tmp
    },
    get clipboard() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Clipboard.prototype)
        return tmp
    },
    get credentials() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, CredentialsContainer.prototype)
        return tmp
    },
    get keyboard() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Keyboard.prototype)
        return tmp
    },
    get managed() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, NavigatorManagedData.prototype)
        return tmp
    },
    get mediaDevices() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, MediaDevices.prototype)
        return tmp
    },
    get storage() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, StorageManager.prototype)
        return tmp
    },
    get serviceWorker() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, ServiceWorkerContainer.prototype)
        return tmp
    },
    get virtualKeyboard() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, VirtualKeyboard.prototype)
        return tmp
    },
    get wakeLock() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, WakeLock.prototype)
        return tmp
    },
    get deviceMemory() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return 8
    },
    get userAgentData() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, NavigatorUAData.prototype)
        return tmp
    },
    get login() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, NavigatorLogin.prototype)
        return tmp
    },
    get ink() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Ink.prototype)
        return tmp
    },
    get mediaCapabilities() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, MediaCapabilities.prototype)
        return tmp
    },
    get devicePosture() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        return {}
    },
    get hid() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, HID.prototype)
        return tmp
    },
    get locks() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, LockManager.prototype)
        return tmp
    },
    get gpu() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, GPU.prototype)
        return tmp
    },
    get mediaSession() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, MediaSession.prototype)
        return tmp
    },
    get permissions() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
        let tmp = {}
        Object.setPrototypeOf(tmp, Permissions.prototype)
        return tmp
    },
    get presentation() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Presentation.prototype)
        return tmp
    },
    get usb() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, USB.prototype)
        return tmp
    },
    get xr() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, XRSystem.prototype)
    },
    get serial() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        let tmp = {}
        Object.setPrototypeOf(tmp, Serial.prototype)
        return tmp
    },
    get brave() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get duckduckgo() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get rnd() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get v() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get ln() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get globalPrivacyControl() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get dateTimeString() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get rml() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    get mobileNetworkHash() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return undefined
    },
    adAuctionComponents() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    runAdAuction() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    canLoadAdAuctionFencedFrame() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    canShare() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return false
    },
    share() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            reject()
            resolve({})
        })
    },
    clearAppBadge() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    getBattery() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            resolve({
                charging: false,
                chargingTime: 0,
                dischargingTime: 0,
                level: 0.5
            })
        })
    },
    getUserMedia() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    requestMIDIAccess() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    requestMediaKeySystemAccess() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    setAppBadge() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    webkitGetUserMedia() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    clearOriginJoinedAdInterestGroups() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    createAuctionNonce() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    joinAdInterestGroup() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    leaveAdInterestGroup() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    updateAdInterestGroups() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    deprecatedReplaceInURN() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    deprecatedURNToURL() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            resolve([])
        })
    },
    getInstalledRelatedApps() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

        return new Promise(function (resolve, reject) {
            resolve([])
        })
    },
    getInterestGroupAdAuctionData() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')
    },
    registerProtocolHandler() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    },
    unregisterProtocolHandler() {
        if (!(this instanceof Navigator))
            throw new TypeError('Illegal invocation')

    }
}
Navigator.prototype[Symbol.toStringTag] = "Navigator"
setPrototypeNative(Navigator)
navigator = {}
navigator.constructor = Navigator;
Object.setPrototypeOf(navigator, Navigator.prototype)

window.clientInformation = {}
Object.setPrototypeOf(clientInformation, Navigator.prototype)

window.parent = Object.create(Object.getPrototypeOf(window));
Object.defineProperties(parent, Object.getOwnPropertyDescriptors(window));
parent.document = {
    flag: 'parent'
}
Object.setPrototypeOf(parent.document, Document.prototype)
window.parent.location = {
    get origin() {
        throw new Error(`Failed to read a named property 'origin' from 'Location': Blocked a frame with origin "https://akamai-gw.dbaas.aircanada.com" from accessing a cross-origin frame.`)
    }
}

window.top = Object.create(Object.getPrototypeOf(window));
Object.defineProperties(top, Object.getOwnPropertyDescriptors(window));
window.top.location = {
    get origin() {
        throw new Error(`Failed to read a named property 'origin' from 'Location': Blocked a frame with origin "https://akamai-gw.dbaas.aircanada.com" from accessing a cross-origin frame.`)
    }
}
window[0] = Object.create(Object.getPrototypeOf(window));
window[1] = Object.create(Object.getPrototypeOf(window));
window[2] = Object.create(Object.getPrototypeOf(window));
window.Window = Object.create(Object.getPrototypeOf(window));
window.frames = Object.create(Object.getPrototypeOf(window));
window.self = Object.create(Object.getPrototypeOf(window));

const Number_ = Number.prototype.toString;
Number.prototype.toString = function (radix) {
    let num = Number_.call(this, radix);
    if (radix === 16 && num.indexOf(".") !== -1) {
        function hexToDecimal(hex) {
            let [integerPart, fractionalPart = ''] = hex.split('.');
            let maxFractionalDigits = 20; // 限制最多解析 20 位小数

            let integer = parseInt(integerPart, 16);
            let fractional = 0;

            for (let i = 0; i < Math.min(fractionalPart.length, maxFractionalDigits); i++) {
                let digit = parseInt(fractionalPart[i], 16);
                fractional += digit / (16 ** (i + 1));
            }

            return integer + fractional;
        }

        function modifiedDecimal(decimal) {
            let [integerPart, decimalPart] = String(hexToDecimal(decimal)).split('.');
            let modifiedDecimal = `${integerPart}.${decimalPart.slice(0, 8)[0]}99999${decimalPart.slice(1, 8)}`;
            return modifiedDecimal
        }

        Number.prototype.toString = Number_;
        let [integerPart, decimalPart] = Number(modifiedDecimal(num)).toString(16).split('.');
        if (Number(decimalPart) === 0) {
            return integerPart
        }
        return decimalPart[5] === decimalPart[6] ? `${integerPart}.${decimalPart.slice(0, 8)}` : `${integerPart}.${decimalPart.slice(0, 6)}`;
    }
    return num;
};

// Hook resolvedOptions方法
const originalResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;
Intl.DateTimeFormat.prototype.resolvedOptions = function () {
    const resultMap = {
        locale: "zh-CN",
        numberingSystem: "latn",
        calendar: "gregory",
        timeZone: "Asia/Shanghai",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    const base = originalResolvedOptions.call(this);
    for (const key in resultMap) {
        base[key] = resultMap[key];
    }

    return base;
};

// Hook NumberFormat
const originalNumOptions = Intl.NumberFormat.prototype.resolvedOptions;
Intl.NumberFormat.prototype.resolvedOptions = function () {
    const base = originalNumOptions.call(this);
    return {
        ...base,
        locale: "zh-CN",
        numberingSystem: "latn",
        maximumFractionDigits: 3,
        useGrouping: "auto"
    };
};

// Hook Collator
const originalCollatorOptions = Intl.Collator.prototype.resolvedOptions;
Intl.Collator.prototype.resolvedOptions = function () {
    const base = originalCollatorOptions.call(this);
    return {
        ...base,
        locale: "zh-CN",
        sensitivity: "variant",
        ignorePunctuation: false,
        caseFirst: "false"
    };
};

// Hook PluralRules
const originalPluralOptions = Intl.PluralRules.prototype.resolvedOptions;
Intl.PluralRules.prototype.resolvedOptions = function () {
    const base = originalPluralOptions.call(this);
    return {
        ...base,
        locale: "zh-CN",
        type: "cardinal",
        maximumFractionDigits: 3,
        pluralCategories: ["other"],
        roundingIncrement: 1,
        roundingMode: "halfExpand",
        roundingPriority: "auto",
        trailingZeroDisplay: "auto"
    };
};

window.pageXOffset = window.scrollX = 0
window.pageYOffset = window.scrollY = 0
window.screenX = window.screenLeft = -1279
window.screenY = window.screenTop = -28
window.devicePixelRatio = 2
window.outerHeight = 873;
window.outerWidth = 1279
window.innerHeight = 0
window.innerWidth = 0
window.length = 0
window.isSecureContext = true
window.crossOriginIsolated = false
window.originAgentCluster = true
window.credentialless = false
window.closed = false
window.origin = 'https://akamai-gw.dbaas.aircanada.com'
window.vilame_setter = []
window._cf = []
window.bmak = {
    firstLoad: false,
    startTs: Date.now()
}
window._sdTrace = '<init/>'
window.name = ''
window.status = ''
window.onappinstalled = window.onabort = window.oncancel = window.oncanplay = window.oncanplaythrough = window.onchange = window.onclick = window.oncontextlost = window.oncontextmenu = window.oncontextrestored = window.oncuechange = window.ondblclick = window.ondrag = window.ondragend = window.ondragenter = window.ondragleave = window.ondragover = window.ondragstart = window.ondrop = window.ondurationchange = window.onemptied = window.onended = window.onerror = window.onformdata = window.oninput = window.oninvalid = window.onkeydown = window.onkeypress = window.onkeyup = window.onloadeddata = window.onloadedmetadata = window.onloadstart = window.onmousewheel = window.onscrollsnapchanging = window.onsearch = window.oncommand = null

// fp_js_code

// ips_js_code