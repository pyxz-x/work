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
                "name": "https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ",
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
                        throwCustomTypeError("Function.prototype.toString requires that 'this' be a Function", `\n    at Number.toString (<anonymous>)\n    at eval (eval at <anonymous> (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112)), <anonymous>:3:16)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:290)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:254)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:39)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:254)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:290)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)`)
                    } else if (arguments[0] === undefined) {
                        throwCustomTypeError("Function.prototype.toString requires that 'this' be a Function", `\n    at toString (<anonymous>)\n    at eval (eval at <anonymous> (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112)), <anonymous>:3:29)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:290)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:254)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:39)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:254)\n    at eval (eval at get (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:1:352112), <anonymous>:3:290)\n    at l (https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:5:116)`)
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
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAACgCAYAAADQOBKBAAAAAXNSR0IArs4c6QAAIABJREFUeF7tnQmcFNW1h7/bw+YCYlRcQAXRqChurBoX0IhKokaNa9yfgEZNTAwucQNxN2rcIoMLGI0m4bnFF3CLgqKyuYELxoVRAWVRWUTZpuv1qa7qqa6p7q7urp7p7jn391Nguurec79bM/Wfc84911DmzcLaEugJ7AxsD2wDbAVsCnQE1gdaO9NYC3wPLAWWAAuAz4GPgQ+A2QbzpTtlC6ur83f58wDn7wM8SLyfu1+u83zu//tk57M6g5mUhtaKdh6YhnmU+RKqeUpACSgBJaAEWhwBU24ztrB2Ag4E9gP6A67IicpUEV9rgE5RdRjUzxzg3x34+oWu1L/Rg/UXH8KGnB7piCLupgKvAC9ijAwZqllDsUJdWGUXmTGU3fNeZYh1OkpACSgBJeAQKIsXjoXVDzgKOBzoUamrMw14AngaeD/TJEQuio9M/GXu36OZsAwpQz+BMWJKxqYCKxrg2osSUAJKQAkogUwEmk1gWVgS4hOfzskJUbB7pS6RxCHHJWKXDycU4juFTEJEllAQweUNThbSV8M9YoqYNA5jxMS0pgKrOLh6txJQAkpACSiBXASCBdaw0ZdjmVGemz8jFv8Jo8+Zn6vDXJ9bWJJPdW4iP2oohAvZXMObXMFMNqINJ7Ad77GUCRxG+1TqVa5Rs38+nUUcywuM56d0ZgN+wlPcyt4cTbeMN84G7k4kg42BAuJtbwLzgMM86WOOR0vE1ml5BEaXroSbnoJj94Y9G9kroUAx8W6MEZPtlklgTacrxzKM8dTSF296WXF8S3H3CtoxjW781E6tC9fyChEmvwcOYV2rwTzwPyvCjaBXKQEloASUgBJIEkgXWGff05l47FXgi7QXS/Jl8wdi8UGMPmd6IfAcYTUcOCWf++ezMpTgyadP/7X5CCxRKTcDDxUzIBkElrdP8Wxd5Xi3so2VXWB57xSTbxahVekCS8TVYM7nEN7jciaEXom8BFboXvVCJaAElIASUAKNCaQLrCFjHsFYWwf+1p7tsyxknVCgSIXzClkAr/jpW6K89DAC6+uE8SMSWxfvKmQSje4JIbDce9wQohAMauEFlnv3XYuHmfMkPttYaFaGB0sFViQPoXaiBJSAElACJSTQILBc75Wxfk/t2Y9nHHPY6KOxzK1pIUMRX9LuHXqS/efZ9/QlHhs/5l/7/f35JfMvWLluXZvlrGEKX9kfj6I3g+jCICawjDV26O85BuMXUI8zl2N4PmXKiWxPDzryLPNSIcIVrGUwE1N9b8uGvMqRdqhPvF+HMZFD2ZqbeQf3M/m6O7Z0Ppzd+QefpIUIj6M7Y/jAtk/aBhzMylTIUKpBTExMNDmfZNsQONK+Ujb1NTSpECFtC09I0C+w5N8znSoUsoHS3xZBhwmwwxr4caLYxDG7w8xPYNhPoeMGDSFCue3ByXDBYOjqbJKsWwS1LySvfX8evDeP1h+/wFp2tQfZl4+ZwJ20ZxVuiPB4ZnIzg+zPN+IHnuPPqZDh4+zJMZztWZMZPMJ9jSyW637PsbzKTXS2q2aAXxjJeIO4gGWsZ39+Ig19ncRZTGDX1NjuvfXE7GtfZ7tG9vuNuIbBXGGvSXKeU9j+ZizTxX5Og0KA3q+1XvvbVIgw+XdvyDw5lGUeTT3zAaumX1ICSkAJKIGWS8ArsGxRRCx+bNYwoF+IBYQVuw9+5M8bvNn61ClfHbnxMF7hUT7mMQ62c5pc0bQvW6RE0km8yBd8F5hX5fdgST6WK7BEtEm+1D5swSN2ZQeQvl7jK1tkSZPPt2bDVN9uyPEsduJy9rJFmFyzlDW2yHNzsGytwpHcwAY8w1xASlwNdqo7uALKFUMrgaccESVfk89FWB2c6EXyotzPpQLFXpAWIpSg4yxP3/6H0XfvNith26dg+zVw5eB0gdWtU1Js7bsTDJZxgAlv2qKK8w+DF2fDUyLkZgD3cTDt+Ibz+THf2iLJFTw9mZ8SXSJS7mNfWyjNp2Najpb8+ydcxK2M52jeSjPc/ewspqTCeN4cr3lszJmc1khAbe3Y4goqewrcye0cmLKjQ0IM5goReu0WgZcSW64oykdg+XOwkr9kPFBMyLzl/sjRmSsBJaAEWgYBv8C6j1j8sJzJ7F6Plbxs4rH/sXHV1I/8bOzJ/U5a++Lth8a7GBEwfvEUlFPlFU3+xPVsAut55vF7Xk95rMQEb//96GSLJ1dMyedBY4noO5PJaQJrMHtzP90c/5Xc6RdV/gfE+7n8/TtfErv3c9eDtblT/9QVbkEPXVA4cS50mAxnDoarPB4sSXK/70X49rukoJJ250TYpUtScInYmjIHvpY9BkmvUiu60oFhTKTW/rd4lB7gwZRgyiaKcn2LiKh5ll3SxJr772GcTA8WpOVQ+ZPsXcE3mHd5lD48xmjbrlwhwiDhJ/d04PYpWOaLvD1YXoGV9M4+h7HOzOrpzQVHP1cCSkAJKIGqJpC/B0twJH+D/52dqyXhE2nxWI8z/+/H21/9Ze8+Epa7j/3tkJ8ILGmuhylKgXU7s9PChe5KyZgSSjyDHRslyPvtkXv8OVi7MZFv2N9XizRI6LihPXdkKTTverDka95wn19giSdJmje0GPSsBQm7RYmg1wvAT2GbDWC/p+BCZxfhW3MbwoTSnRselJCh6836+HhglTOYFMO/iEGMZxTfNtpF6BU9O/OV7TmaYhfUTw/pBVkedK8kpv+WF9P68d7rD0m6nidv+DCXwMq0G9KY0VfIc1qwwGrw3t5H7dnXVPVPBp2cElACSkAJFEUgfA5W8jf3pIcLZLfh+IQ3QDxXv/v5f7uMPmpGtxte+H5Bj1/SjduYnRb+a0qB5eZkHUKXvAXWXfyU69iAqXZ+VTaBJcXTJQQYlHcVVmBJWFBCiG84/QTlXgm5HALLzvl6Co7YG27vBlusbfBaye1ueLBd66wCC8azJ9+ykGE84SnTkEmseHOxvOLH+zR6hdAg3ucsTmUid9iXSGjRGz7M9BRLLpZ4r7y5YrkElniwDuM33Mdf08pNFCWwzry/Pa3WTUh5wIr6ttOblYASUAJKoNoJpO8izFb7x7uLUKgkXzbLN/uiXcePnj2+y3fW2m1O4D82L8l58uZElUpghQ0RemtaZQoRnsZk2jOYL13Bwt5O/pT7CLhCR4rOS76V93M36V0EV1iB5dbBkj8lkd/N1/I/chlChKmcMEdgiT1duyWLlvZ5Ez5ZBKvWNIQHpduAEGGynPwwcXXZA7diGGOo5QynDlau2lhByezeGbhhQsmbEu+U5Hq5AsnNt8r0TeaKuDv4O7dwcEqQ5RJYmT431phH7bEyJbl7n3FvkruECAvcRVvtP0B0fkpACSgBJRBMoPA6WCLGvjCjjnu2+7p/1B/Uyrubz01olyFLGSIMm+TuFVhBSe578RSLWYNlJ7G7gkWsd3cFepPc3c/dhHW5zk1qzydE6C00KvfLjkR3PO9i+RPk3X/L7kavvR7B138R7DwBOiRSrbw7CkVgeZLcoR1wPvCtnfTuiq31qOVJ6ux9hLlysMTDlBTQjXcSytfdfKjP2CSVQyVfd8WTm1clX/Mmpsu/vV4uud6bFJ9rXP/1KY9bQ5K7hLkfw1jH2LlUbm4VzE6Fvt1Co0mxVVQdOP0BpASUgBJQAi2LQHAl9+Rv6yd6UDSq5H7tdm/87qZPZ936AAekKp6Ld+g+5qQlnZdSYElCfK4yDUFV2V2R9ZmdiC5NTur5JJnTlBJY3Z0EdBEybXy7/CQHSgpcJks4YOckSS6TnLcsIsk9CjBbDpZXYLmiSTxgvurudv/+8YLs9XnUNp6YdIo9eBhIeFBaKgdL8reSZRrcHYXJvzd4swx19sGGm/mqu3tLH8gd3tBdpm8dEUOvsV1ayQavyHLv25av7WvcXYK2yU4JCfm7tx+p4i7lItx73FIQXhu8YUy57jM2aUhylwvTTyyYYld/ENekm1toC6z6s2hV8yywbcD8pjjXHtyodEnL+jmis1UCSkAJKAEfgYLOIrSwxLnxTNijbqKknm3HYb7jPAccWtBRN/mOFPX1IrhedsSYeNT8zQlZbt4FztkrWRHeVitOyYa0JPfMtsnDIYucrIhV+S0tRBj1dIbW3kgsfkfOHbhRj6v9KQEloASUQFkSyFtgWViShCTJVkFv9pJPMmgXYCGDio/pIKdCVSH3N909koPlesYEuT/fK8gSnwATx9RLwPv5CSzpWUaUxZZFr/RWMoEluwvra26mvmaYnltY6U+J2q8ElIASiIZAXgLLwtrGqbgpr+wmbVJKQaqvSwuq+p6PMZ87ewQ/y+emZr3WzfFyjXBzvYKM8hc5da6RFbvyTVgyD0J6sNzeJTYm/jJZ/EpuJRRYfbFMP2rPvrOS+ajtSkAJKAElEB2BfAWWlDOX+gUV3Q5wBENFT6IQ40VkjQUezWvZ7ZFk0WXxK7npYc+VvHpquxJQAkqgsgiEftNaWKOd/fyVNUOftXKKXrIgQQttIrI2MdAr//lLMQd5CCq1qcCq1JVTu5WAElAClUcglMCysIYAYypveukW3wsMrfRJRGF/e5M8NLoAkSUPgTwMldhUYFXiqqnNSkAJKIHKJJBTYFlYUvDpHadWQWXO0kkTl+IGbmGFip1IlIaPSGyhdHcYhu9XEO6OMZJ5r00JKAEloASUgBIIIBBGYElmuXNycOUylAlIyQFtPgKFiayJGCNVTrUpASWgBJSAElAC+QosC+vXiVqTd1c6ub8A51b6JEppf2Ei61yMEbTalIASUAJKQAkoAR+BjB4sC2tT4COnRHnFglsC7JA4MWZpxc6gCQyXxHc5wzC/cKEg3QFjBLE2JaAElIASUAJKwEMgm8CSmj7nVTotOWnvrkqfRFPY75ZwGJDXYHdhjCDWpgSUgBJQAkpACeQSWBZWT2BWpZOanThUeLdKn0RT2l+YyNoNYwS1NiWgBJSAElACSsAhEOjBsrD+mjj9+JRKp3Qq8FClT6Kp7XeP1Qlfq/8hjBHU2pSAElACSkAJKIFMAivIe/UlH/AWj/El77Oa77CwiNGKDfgRO7Afe3I07ehQVlAL816tA+53Du5b6ZxlLQWjJB3tVUAqVtzczPMc7hSdkFjehY4ttwCTorNPxNXcvKaZ1Ys1ZDrHxWK2YJ9T2xuZQJO2oTO50IAAa/Lxh820H5idLJg0pjeyUNqAc2awY73hV/F6xt7XL8+nrcQEh86ku4FRMowFV4zpzSclHlK7VwJKoAoJNPJgeSu2f8+3PM+tzLPLYFm24GjL+vaf61hDvVNVaj02Yn+GsT37lQ2iwiq2Pwg85sy1HdAK6AH2nCMUMEVRagKBJfblt7OwFmMEeWBTgaUCy/tgnDWNbrEarjFgylHAqMAq6geU3qwElIBDIE1gOTsHF4mCWsEi/o+RfMPntKItPfkZfTiR1ojwSP5u9wmvM4V7+Y4liMg6lEvZil2aHa5sa+vkyKT8jHE9QVKSVH6BzVkmLL/uI7m6iQRWfvlYor47ZdpRqAJLBZb30VcBE8kPAu1ECSiBMifgF1h/SMbALCZwHXOZagung/kDW7NH4FSW8KktxFbyDZ3YgaO43hZkzdn+BAXGoVyB5Q2/NedMgsZuIoElQ+eXjzUcYwR9o6YCSwWWCqxy+zmi9igBJVBqAn6B9bYcgzKf2UzkOtawkt35BT/hzKx2vM6DvMdENqU7B3I+b/EE7zKBLuzBkclUhlT7L5N5kTvs8OKuDOYAzvF8avEUV9ghSfezxxjOV8yhH6ewCdvyKvezjK9s39L6bMxe/JLd+Dnfs5SXuIv5zOJqVjHf9rTt5ZQYzZUf5gor/zTbO56sJ7OECMXh9zAwE/jO6WBDYO9EItNp0Cg3zRVIJziJTnKftG2B3zmqRnLBHgWeS3xtGRADtnOqZtyTIwdLxpTjrL8A4sBGwCDgRCfk6Z+jjP94Yk+DpJl873woodEuwC9gwIHwkucxmTccVs2BH50CbbeFrx+CtfPoUL9i+QnLX5xoDK+2WceDd/ZnuTtSJoF19jt0stbyx8RehO5YLI7Bjff04cNcD/2Il2g1f0NONDDIwEbJ4DWLTIzx9fVs5M/38udg/Xo2W9ev5hosNsbib7V9+Yd/zGFvsQPrGImhdcxwS73FYjcvJx7nWmMYCOxrDBtYIAs2p8ZinN9+bw4WMMVYnIKx4dY4wKe1Wcd9Xl5ii5OjdDoWPzaGNpaFZQzfYvFym3rG+6/3229ZmGEzudEYdibOa7V9ud5/zflT6bCmFddjsbVleGxMbyRGbrehM+mH4WQsuhhoZc/RMA+Lh8f0Zpp73dlvcKBlcQ4Wba0YL47pxZ+945z9JqfE6/mlMawxhnviFns6+XCpyyyLNZbFHff2ZXKutT/7VTrVt+bsWAzZ6Szf5KssmFVj8bc4XGzBpt6+cuXABX0e5GHzPEO5TGzyPL9cBunnSkAJNA+B1JvTwuoHTBUzJnOPLZDa0Z7DGWl7pvJprohan404kmvZiC1Tt7t9yxcknHgUN6Q++5YveIrLWcP3HMyFdKM/rsASG8RbJq0167GWVcRZR4waW2R9zBSWsYB5rMf1trBY5fQrhRquhKxeNREtLzsnFcpRe22c/0Rgyftf8rKCcrBeSUTGpJi5CKuk5Evmqv3g/PmjxDv0IkgLm7oCSxLnvwbWc4TQFomZXeuMOxJ417Ff3iHuu1iEongHRdQFJbnL52udubv9uhx2dSqJuiFe6f5vCdvGA/WO+JLPxH4RWvKnjHssjPhVQxFSV2C13QHWzAWrHmrWh3g9h303eco26xYvteJ82jbOFa4ICBJYzstd4O6Sj7g6fS7t2n3DFVacnhgMFquIUW/FWd8Y4pbFp8bYD2zqRReU5D5sJpcD/SyLD2p7c7GRnjxt2HSOx/Ar4PO1q7m0VTs62QLLELPittja1jLUy/jG2IsosOTv94zuxYtuV54XuCz2RljUmBjfE6cGk4y3+3mlRAu0s4VNcowYFuvJnC34sO06rs4lss5+g6PicbuE7JJYGy4dvbv94KTaOW/QP25xIRZracVVtXvykSPMzjWGn8qc3PHlwRShJw+LZfFCbW/udpkNfYMLTJwDLWN/093iCrD/mcGuNYZLjUV7V3wNnck5xnCArJcY4rBYHbeovbcvr2X7OTNkOrvEYlwqHG3BGeN7K05rxy7JDIhZFhuWSGCJiNw/yD4RoPZaWlhBIjOfn516rRJQAtVDwCuwROlcLFN7gktYwHtsRneO5sa8Q36Sv/UEl9pepQP5DT/mAIeYxf8ynIWOk6I9m6UJsPd4hleopT2d+AXXsQGbpASWdLA5O3IIF9mfr2I5/+JKFvOJvPNoy4YM4FzuZR9utN+VUmlCPDPy7pP3eJiKWJlChEG79OY7wk3eWZ0d79OOzjxFHN2a8J4tdjxB1wCbOJ+5Aku8UkcDboUDEWXyzhGxN9ERUiclvUi2ePP2KV0FCSz5ekfxfyS8X/s4Ikm8b48Aq50jJV2PoeyzvM4RU3JS41keD5fMTR6HuuTctr0eJm2cDBm6AkuGarcjbH4RtE5mvG315RX/PnzBtevkJW3ggdo+PCWX+QWWiKQ2X3OVAVF938Tj3HRvX94L8201ZAZnxgSKYXW8nkfG9OVJedGLxydu7G2VrprPLrBmcDDG9ryscsWFO/75H9F29VKuN7C969nxeDXa29toDa+3WcfdInLEqxJvy0UG5AH4xtRw1eg9bXi4AssVUrHW3CafCaNz3uJkK84xXl7esTG8vOUK/jxioO0hY1jS5qGWRZtYjHGje/FENmZ2MnmMq8XLhsU9tX143nv90BmcZwyHWBbv1PbmCuE4bAZHYjjDttcwYavlPCDji9fwqw6cHI9zuDGYuMW99/axH1TOncYm62qQh7wLFh+v3tQWQbRdwvUYtne/Nq5b8reeQnKwRJCvbs21xrKfwi9jFreIt1Ds+nJDTrIMR9meNp83LCoPVibO4oWNr7EZd7bg3TWbMNKdZ5jnWa9RAkqgegl4BZa84HqsYgVPcilf81lgiC8siglcw1ympYUBXQ9V3P7FX/6/lkFcRFf62N0+zy38l0l0Zx87YV6a68Faj44cwdVsSreUCW/yGFPtqIZhH05nD46yfUXv21dIiEycFHKii4Q4jwxhej4Cy91xKF6jy4Cdff1LtFVEiggncSIc5RNYWzkCxxVe8rGINZm3CDMRVv7QrDgYxUZ5TwUJLHEw/CZRZsIVtK5JDwAitDZLvPYkUiSCSKJiIkDFkyZf84dR5WhsCTWKQB0Fp3eHsR6BVdMRtroa2jasB9aqD4a9uZ7ENbtbFv8Z0ycZLvIKrNWbcIXHA7U8Huf6sOLKeZmJ8NksDk/e2weZWKoNmc4esRouwWKDXB4sWxTEbIW5ZUB4rCeWrcrl0bpuTG9m+wSWLSK8L9Kz36ZzvJ6rjUUn4jxe29emlRJYlsXSeJwrvSUJREytWcaNXl4euza1DHeN6c1L3jnanjeL3a0Yr/rDcUEPuOup84cJ3XEs2MIVa2dOoX3rtrYoknj15NG9uMXv2XO9gZbFR207cumdO9jKnWHT2Z8Y59vir4b/jcfZ0FgcZhlW1Ftcf3+flEu2IIHliMtznHBsykvmztljV1q4sZQCy/H2/dEY+sv61sA1YULcIX4Q6SVKQAlUAQFbYFlYUuDpA/n7Sr7mSf7IUhbwYwbYobpC2js8xas8YAsi1wv2IS8xibvYkh6s4QcW8V/68it6czyusFvKfPZjGLtwaJrA2oKdOMZXg8oNRbamLUcwiq/p7pE5EpGRd+QCp2bqcSGmEVZgiYdMPFGSLiSRVRFyQe2KhFASoSUbBNxcNNeDJVKwITyavHtKwgMlmqR14h9SJ8H1iLl9y7tMnIySLxUksLonBJG8r/2bDMRO6U/ChxdI6lAIFpIOc4fTl9jeHftVv72Tg7XeLtDZbz/8/N2u93Ve/dkW3rpPrsCS0JaBr+xQiyEvcSUGD53JvlhcYGCN3+tkP8fJvKNRxiDbQLN6sOz+Gjw4aWJh6ExOMxbHWMk+7PChK7Asiw283jkvyNRLHj6s7cVw2yPk1MFKxFrfq+3NJX7wqVClUycrTeRYfBa3eKTzSqa7XqwQC5d2iStMEtyWWobLxvTmS7lgyHQOMIbfGMN3NW25/C89+eKsqexW05o/Svgy3oqb7t2TGf7x3DVwPIiXewVjKlQoD5ohJmUY4nHG39vXjkWnWiEerKEzuMAYDpKHv81GXOwKO7dT13YJGZYiRBjEfch0fhWLSQydtf7QcL7rpNcrASVQfQRcgfXrhHvjbpneOlbzOBfbobegJPWwCJYw1w7hWdSn8rjc/Csp9yBhxDn8h270YzCXU8cMnuMm2rA+R3ING7O1PZTrwQoSe36BNZ7unJsysJQCK2zfEu6b4CSwi5dIcrqCdgG6Rkuul3jGJMolzhWvd8u9RupWSr5YkMCSFJGgOp5h7P3KEaMSipT/PnPCh26if/dkiPAVR2C1HwCbNxbfO3163OMHfDu+TaDAkrwZmUYyj0hce408Edmer5QnzGJBqzh/vLufncSW1jwv4pwCy81Bsiw7gdv2VLleJcuyw2upMFxKFBhi9Wu57r7+jY+SCrIvlwfFI8pShUilHxOzk/hlt4EEvNcZ+U0hzuumLc/5c6myMUt5/Qw/Ik5tbV/ENSkep0uJ2XHkabW97fCefO1QYgyznDwxK56el2YvXQzj5E+t9Semp4UKk3YHhswKEVjDZtq/jchvJSl7vfP2eORKkuTuZ+zJk2sdJCLD/pzU65SAEqheAq7Aki1rsq3NbsmdfG8XnIOV7MXiMS62861kF6J4pES4iYdKwoKSkC4eLkmAl9IOb/Mkb/F4I1GXj8D6Dd35e1kJrH86h/V4w4HZBFbQ9f6HL8jLlqu8RCaBJZ6tcc6uRDvNx9Pk3S7J77Ij0vFgyae3DofD50AGgbXpvN+/fczC2+YFCSxHLCzHsMoOpTn5OmFzVsIIrKCE+kyV3FPeItjGDRMOeYs+sXVchOF717MjdocRBVEJLGe8fr4dh8nvKsn/go9ja7ll9D5IslzO5nrqXHHiEV2yizKVm+Vhl7PPTDv/UqyzJHyHYek3IJdQbUqBlUq2t+iAYdLoXtzmD6XmBKgXKAElUPUEXIElB6OkTp+byT+Yzt/sxPEwuwgX8ZFd1kHKJuzN6XRxEsqlfIMcsdOVvuzNafYOQSlUKgnsUpz0aTtsBT/jSl5jLAuZkwoZuuTzEVh96Z7MLLZbGK9NGPEi1/iT3MP27XqwvKG7MB4s2VEoHizJjwpjo2tfLg+WRIekjMMxErFycq+kDITkbkmivjwCUg5CQprySNyVHiIUU7oMh4fmwM7BHqw2X1777RkLLn81g8BalsjN+ZORPQlwobFoF5RLlem7LozAsnepweAwIUJHyLjhwI8lp2j1Ms507k/zlHhChCaxXXBEUK5NlALLZeBsCNjbirOfMfSwE9aTQistrJntJ5Vnt+AKCRMai12dBP/FXk+gJLhbkvhn+C5eT1r4L8xPQjcPyymfILfIVt87a/vaLtdUK0RgDZnOqFjMfjCb1YOlSe1hngS9RgkoASFgLCyJR0miUqrlWwdLPFHv8KS929CbtD6PWTzDdXax0p0ZxHQeZkt2tWtjuTlX3yRKM8hZhh/yop307hd0YQVWP0bRU/KEUi2sCPLOPJ8cLMmFkrS1TDlY4miQHCw5ZigoByuomKmkvNzk7PgP2vnozf0KChFKzpaEEP0V6Gc5gk28VG4OlpsfJsLqaifx3ctCEq4CBJaEII+eA38JFlgsvIUTF1z5fPv498+6Z+8FepUatvY3SoLOIrCSeUOyJdIpK+C/1vMizhkidASWndBuh74sbnO8Rlv5d915RMF63lCbTzi4Zx6m8q1yeV6CQoSZ5m/nmL3BqVgcbQwrwx4z48lHOeHbAAAf6klEQVTr6iy2J5zUe0p40LJ4dkwfe5Ht5nrvrGS5g1B1qdx7veFBC96yf7jIODCvVT2Xe8O5hQislHC2+EzKZjywLyu8nNzaZvmUafDmu3l/Ichkn3f3q2UxP9aGK/MJ1+orRwkogZZFQASWVKF81j9td0dfrkruUs7hGa7nB5axNXtyBFLDKfmCd0XUchbaye5SMNRNapfP3Z2GG9OF5XzFj9i2UVmIsAKrA6M4rskEllgfdheh1JSSckrHO4izebCkNqfsIvwcOMQpLOpdGXdnohxEHSSwxLkhedT+qvtu6Qc3t0v6dDcABAk9EXLiQZNdi54cLNuU4dB5Djw5AHoHbIBYeAsHLrxt2vZr54/PJrCcIqOS+7Nl2O3tuXYRnvU6O9e0trd0SnXVUAIrVZAzeSDzSyZGP+Is8+d4eXcRWhZTa3tznTcslNpFGGcz767EfAXWkOnsE4sxTIqj1ddztf8gZE9y+uqwAssRkranzsSYHY+zhTF0kAKq9/RK1r6Tlio8KiHTgDk6/Zxk4JdYfEMrbpTaWfbXXcEMy2Q3nXytHi63C8H6CpAWIrA8+XKxRHj5L7V9+Y/3O8MtaCpppF5xOPQNhhuL/YPqnXl3neYSWPKcnP0Gv8NigCT4B3nmWtarQ2erBJRALgIisH7rbF1Lu1aS0CVJXXKmgs4ilCKfs/k3M/g7q/ku41mEUl39fUe/SXjQ6+Fyyywk00rk192j2SdZgifVwgqsrxjF5U0qsIqtg5XpOB4pnyApcVK3UnY+yn8iWCVfSjxs9iawLHWwRESJ8BFvlnCVvC75T/KppJq7CD35uuuBk5INokkkNCjtW+B+Z0ej3BMgsJgDxw+AvwcLrD2X3Pden1VzxmYTWDLSkBkcFjMMsUvVx3k0qKK6/wHOVgerHn4n9Yice0IJLLnWLchp706EthY85/XsOMKiu1PJXYDUe2tEpdXB8iXg5yuwPPlRnSyL92vacsM9u9mL4goguzirZahru5bLchUbdfkNnUnSU2dYz7LsHX52AVW/J8gusBqzHxRpU9qsY4yMIQJj6EwOMvA/xrCheKlqe3GVvVPSKdFgb3/1rKO3irtXkKQEllR/DyhFEfRDy/HejRSvmAXLrRruvndPXrPtms4vYjVI0bh2jepguQVjRRRZPOzWZvPXTcslsNwdg1bym0d+eZDictqUgBJQAhkJiMC6M8BVYt8g4upZbkpVUJcXfVu7GKZhLT/YlaykdWBzBjHcLgTqb96jcTqyVaqAqFznhhBXs9LOzfKKL7efsALrdUZxf5MKLLGwmErumQSW/Py+zakcL3+X/Cgp2+AeYyN1qeTvQR4syaGS3YBSzkHWSdZHamaJQJP8LAkP2hvTEv+WYuPi2XI/twtre8aRXZzyXhfN4S3t4Hjgth4AnwcLrO7fPFJ30PdvSg0nUYSNCo26a+t9afoLdGZ6YrNVckcqq8MyA5v4Xphu6C7wGJPU0TkgpfdX+T07Yos3RGhZrDCGjeVlLoDcSu7Oi//P3vIG+Qosm9c0jjIxTk4dkZOsWC5H5dgV4y2L72pi/OWeXvYDGKqlHZ0jCei+o3HS1uRNfkucA6WgaKqSvFutPHnh56Y1IyU8lpaTZPHBmk250t20IGvlFhv1htRStb4MWzn9fxeLMdZbAT9oUo7X8ypgG6fY6w9YxJyK+MssqXSfzE9LhTd9RVClQKzsXhWZtJ4lVWkMiwxsl01gxeuJx2q4xkAHT2X7QO7GsMLUcJ0Uk/WExlfk420MtaB6kRJQAmVPQASWVNs+IpOl4qmaw4t2IFAKhcoRNdJitEIE044MZA9+Yf87qC3jS57iMlawuNEOQW/NrR+xjb2bsJ2v4GVYgTWeUTzb5AJLZizFQcXjI5XR3bMIJULV36m/5S/gmS1EmHrNOdXcpRCoe7rJxonyCb90PFlSoypIYMnXpMaV2CNCS5p4qKRivFRr9+dmyZFyD9lSt+G4HOcMQn7ihBul5pY3XOmxf+yFyRqq3rbwFrb49vGFR6x87eZcAktus8/ck1CSoaPXK5LtOyfwLELDVxbcb+Bg+wgcp66U9JNpF6F3jFRBzgw5Pp4k97axGGMsyy4ZIAdO2ufhxePMrlnL6NE/ST+OphCBJXYNm0ZvK8ZxBrq5R+qI+o3HeS9onDA/aTxH53zvlqUIus/2Cr3N3ibOiamzCJ2zEOMWL3T+jkelLlda2CzG9/F6bri3r134LdVSYTg5Gsez4+6cN9gvbnGWfR6kHHnkKc6abS5OGPM0y+InnnMgZ5t6/kUNv7fEK+bLHztnFhvXr2aIMfSS3zy8Z0fWG34uZyNmE1hij8d7mQt1SkypwMqFSj9XAtVNQASWZFb3rvRpSi1499jk6OcSdFRO9KNUXI/iMJPNho3bTIxJludv4pYSNJ5K8mFMcCqk983k2fEKrHwTwMOMr9cUR6Bc10dqi1mGkxIicuSY3naFYG1KQAm0EAIisNJKNFTqvOXAloYSDVHPQgVWRqKy2VAcZ+mtDmM8Z+hEsx5ytl5NLFnbI+hwYDfRnDibZqq2HmRJ6sw+SXzLsDuxXF/g0ZCt/F7KcX0cz9klEtpdu4rL/PlulU9dZ6AElEA2AiKwJNFGTgiu6CYBNDl1MPrmLbeQqc5U9KNWTI8irtJOy7MtX4oxsiSRtrRt9b4EcPtltoaLjMUuFiyOteHSbFvoj/2nndzGFtvQbk0rzsVibytZYyltd6A7gXJ8gUcKt8I7K8f1cTZxHLHO4m7vWYwVjlrNVwJKICQBEViSEW2/bCq5SeVKyTiOronuFGeJ5DJJXqzkmJ1DMsVHWxqBxl6sNRjjPxAxEmieI0ok96nesvjBPb7FScqWxbrHf0iyf3BPuQP32ZciqBkPni7HF3gkQKukE12fKllInYYSqCICIrDiAdnPFTfFmFN8IDrDJeAoG5a+cXbk/TxxQsnJ1YAqOkRuT6JDBVVDszBGlqQkzUmMP9UYtncWR8bJKwFcXsiJnWhXGehoxVhsxbhftv1nMlhf4CVZysg61fWJDKV2pASUQEQEVGDZIKW2lOwClMrsHzuFPqW4/RIn8ChlEdY6yKVkgpQ0kKiqHGUj5wxuA/a7fufE8dQ9ncOaI1qhSuimcZiwpAKrEpCojUpACSgBJdCyCbTQEOEcpw6UlBGSQtZRp8fL9jop07AfcCCwU/U/ZelhwpKFCKsfpM5QCSgBJaAEqoFAC0pyl5pPT0DiiGl4v4nXrgdweOJcwqOcswubePimGC49TFiSJPemmIaOoQSUgBJQAkogCgJVXqZBQnzjEuG7h51Dl6NAVmwfuzu5XFKhU0KMVdLSa2KVpExDlZDSaSgBJaAElEALIFClhUYln+ruRH7UmMhT36N7JqSq+lDgXCdvK7qem62nhjBhsxUabba568BKQAkoASWgBDwEch6VUym0jgT+ZSeq3+wc/1IploudpwByBI0kyFdwaxBY/8IYWRJtSkAJKAEloARaJIGshz1XDpElnM9I7uKuyjE5yNK+58F0qXdQoaHDht2Ed2HM+ZW9GGq9ElACSkAJKIHCCYjA+m2i5sCfC++iue/8S6KEwmXczlIuaG5Tih1fVuHIjvDgtTDi18X21vT3N+RhXZCo5H570xugIyoBJaAElIASKA8CIrAGAc+Whzn5WCGlFn6XKIfwjH3Tc8Ah+dxejtfKKshqSKs7FAbeBnUVVuJBThaSpTBGlkSbElACSkAJKIEWSUAE1paJbGupqllB7d5EEdDz0g7HkVKhUvKzopusgqyG2+rawIOJsOeIIZUzrWQe1lYYI0uiTQkoASWgBJRAiyQgW9kSJ4ZYK4ANK4PA2QkVUhtoarcSlAxtMibpZQ7Shx05DEaMbjJTihlo44tZ+u2N0R/0XIxNeq8SUAJKQAkogaYm4AqshUCnph48v/E+d3bbvZzxthMTNdP/nl+n5XP1CcCjWcyp2x8GPgR1cixP+bZDd2PRM7PM5uVroVqmBJSAElACSqD0BFyBJRU5Nyn9cIWOIFXYjwc+y9qBpLtLVamKbFK2K1dee922MPAfUNevbKf4pw58/YflpkK3QZYtVjVMCSgBJaAEKoyAK7CSqcll2SRX+uhEnaiVOa2TtHc5brkim5wzHSafvW4DGPg41LnZ8OU1W5nGzhj7udKmBJSAElACSqClEpAk92zZP83M5d/OGX7h9d8uzXDSYNGQOgLf5tFLnYEznoZJP8vjptJfKicuvpccZqDBTCr9iDqCElACSkAJKIHyJCACSw7FG1t+5onn6tC8j7q5BLix/CaT3aKNgLcTxyaK1A3bbJH1DEwqH0/WxcANKrDCrqBepwSUgBJQAlVMoEwFluRcHRQqLOhfG7mzfyUu2IiElpQi7vk0O1z4n7LJyZoKONlhIwxmZD5T0WuVgBJQAkpACVQTARFY4r0SL1aZNNktuH/OhPZsxu4BvFMmswltRsMxM6FvsS+0E99fbvbdhbs7TjjH+HEGc0Z+E9GrlYASUAJKQAlUD4EyFFgHAJlLMYRB/yfn6OQw15bNNcVkwkkJh26Tm3UqcsT2HxosmGQwA5vVIB1cCSgBJaAElEAzEhCBlay9XRYtcxHRfMyTmhNS1Ct8anw+vZfw2mJWYtwwOKN5ipHKlsFF6UdUq8Aq4WOiXSsBJaAElED5EygjgSXH3wyNjFg0Ui0yc8J1VEgelrfngWNgUtMfq5OoM49P2qnACrfiepUSUAJKQAlUKQERWHPz3L9WAhRSwUqyeNZE1vdsYLfIemuijgrNw3LNk7MLB77T5AdEzwJ6piOqMxg5uUibElACSkAJKIEWSaBMBNZhib1/z0S+AKcCD0Xeawk7LFZgiWmTDoWBE0toZHrXpwB/bTyaCqwmWwEdSAkoASWgBMqRQBkIrNIdcFNxXqxiEt29T9cZd8O4XOfuRPM4BnivpGMVWNHg1V6UgBJQAkqgQgmIwGrGXHBJR98BWFoyfOcnkq/vKlnvEXcclcCq6wjdPkpPO4/YVOnuvMQBlndm6DdRB0uPyykBc+1SCSgBJaAEKoNAMwus0suf0ku4iBdaEt3lv2Lb6efB2Ezyp9jO7ftFFe+AMYI4rUltNa2DFQlj7UQJKAEloAQqlEAzhgibLoBXuiBkxKvuerCkBnqxIkv6GjsLBvjSz6Mz+VyMEbSNxJUUrlUPVnSgtScloASUgBKoPALNKLCaNgV9cOIYl6ZL/S7wQfAmuUchsk4/BcYGpKAXaJ7ntokYI0gDxZXmYBUPWHtQAkpACSiByibQTAKr6bxX7vJEXwiiBAvvP3a7WJElXqyXZkHXSL1YUktjd4wRpKnmO3JJk9xL8Hhol0pACSgBJVA5BJqp0GjzlAGNtpRpCRbZL7BkiGJF1unDYGykFd6HYoygzCSu5OtaaLQEj4d2qQSUgBJQApVDoBkEVvMeZNM80i7kA5Hp2O1iRFZXA3N9B9mENCfgslqMEYTZxJUKrML56p1KQAkoASVQJQSaQWA1/1HMxR8nXaLVz1YwoxiRNfZmON1zFHNh5r+MMYIul7iSz8fpLsLCIOtdSkAJKAElUB0ERGBl8puUaIZ7AO+UqO9w3X4O7A98Fu7yprkqKDzoH7lQkdV1d5j7djHzqEtkcx2AMYLObjmeGxVYxdDWe5WAElACSqDiCYjAuioxi2KLAoQEMS1xJE7/kNeW9jKx5CBgZWmHCd97WJlbqMh6aSoM6BfenoYrBdFBGCPIwogrueYMgxlXyGB6jxJQAkpACSiBaiAgAiuKE/BCsrgEuDHktaW/7DngUNsbUwYtnyO3CxFZIy6Gq27Id6KC5lCMEVRhxZUKrHwp6/VKQAkoASVQdQREYEV1QEsIOLsA74e4ruku+TdweHOLrDDhQT+SfEVW1x4w9718wIq4OhxjBFE+4kqu7WYwElbUpgSUgBJQAkqgRRJoQoElZZN2LkvI4p45ujnDhfl4r7wE8xVZL30AA3YKswYSFjy6AM+V3bdWcQ+DWK9RAkpACSiBaiZgH8hrYRX6is+DTXkfWCMJRsc3R+J7Id6rQkXWS3fDgF/nWjPxPJ2QZ85VWp8qsHIh1s+VgBJQAkqg2gm4AuulRHFIycUqYTsR+HsJ+y++a9kidwrwcvFdhe8higSwsJ6s00+AsY9ms02mfkoeuwWD+tIdhOFXX69UAkpACSiBKiXgCqwm2EnYTY6oqwiMTVaMNEpZG0Zkde0Kc8VZGdjCFhHNtYYqsHIR0s+VgBJQAkqg6gm4AqvEOwm/BLaqKJhyFsx5gBy8V5ImhTFE1kbZwogsawGwpXdUmeJ5IY6/CWuplmgIS0qvUwJKQAkogaol4AqsEu8klDTyQyoOoqTl/y5RueuZqC0vpZzNJbJeehYGDHJnNBH4fY6Dm/Odve4gzJeYXq8ElIASUAJVR8AWWNIsrCgDVj5QtwMXVCw8Sc+/LDGDpVHMoJTiyrUvm8ga+2c4/bcylcswRqaW1oqt7K8J7lE8JNqHElACSkAJVDoBr8AKW0s8/zlvd+pCPn1o8/xvLJ87vk6YIlG9u4oxqdgdg/mMnUFknXLhKQsf+tNfd8UYOXU7UnGlZxDms0B6rRJQAkpACVQzAa/AKp1v5YYd3mLwx3tyM/BQZeOcDYVNoxQ5V7lQekSW7I4cDvTc44Al5u3Jm5VAXEmXmn+Va030cyWgBJSAEmgRBLwCq3R5WE93/JCfL9vRJioK5e5EzvuY5i6fXtz6hp6GUBXfYImLYATNRhZ36Eg4dwT0dC/ou/MKM/2DDt7riw0LevrS/KviHiu9WwkoASWgBKqEQEpgyXxKlof1Uet5bL+uSxozCVDJccAPA+9ULs2s02gOrxWwO3ByoiiGRCQ3FbTecGGXLuvMvHmtXeIRiqtJBjOwcldSLVcCSkAJKAElEB0Bv8AqTT2sT2qWs108zWuSNgUpo/4E8HQzHFUowbLF0QBNTWMEvB91CYYcJvZwzlQ8CugXdK0rsrbpEDefL69xBHWUeXcaHozmMdJelIASUAJKoAoI+AVWacKEn8bW0s1KeU2ycpPaCC8CrwBTS1CbVGbYH9gvUbL9wERxeTmaT+qfTkocUfyg82chCyv9isvotIRnris0xzRymi0ia2xry3y2Nhah58odVsODORdAL1ACSkAJKIGWQiBNYDlejejLNVhGDoRpNFYoyFKjVBKePkjEvT4G5DwbqZUpsTkpNvB9ouDAWqcnkXDrAx2d2JjUNt0mEYbc3jlnWhKR0mpsBljgiq3Jzmfyb/c/EVHS5E/3vwPC5Vc19TQysh2JxQhLpKTIwaiahgejIqn9KAEloASUQFUQCBJY0RcTKEZgVQXmspqEhbEKE7uZp6HhwbJaYjVGCSgBJaAEmptAkMCKPkyYT4iwuYlU//hrMFabiKep4cGIgWp3SkAJKAElUNkEAj0Zke8mzJXkXtkMK8v6T2PL6V6fecNB/rPRw53zZ6Z3KAEloASUQJUTyCSwoi06GlSmocrBlu30Pm41jx3WppfMKM7YgQYjWwS0KQEloASUgBJQAg6BTAIr2vKY3kKjir55CfzfRh9y+NJk0dfiW53BdCu+G+1BCSgBJaAElEB1EciY7GxhRZfs/r+dX+OYBftUF7oKnc2N27/FJR/tGZH1mtweEUjtRgkoASWgBKqLQDaBFV2y+6mDpvPg832rC12Fzua0g6fz1+ciWQuDiXo3YoVCVbOVgBJQAkpACaQTyPqCjMyL1efC6Uy/NZKXui5gkQT6/n46M26JYi1GJASWlC7VpgSUgBJQAkpACfgI5BJY0XixOo2fxcLjdlP6ZUBg83/OYtGxUayFlmYog+VUE5SAElACSqA8CeQM8URypErNvC9Yt/XW5YmghVnV6osvqO9S7FpoaYYW9tjodJWAElACSiA/AmEEVjRerGfW/4pDftgiP/P06ogJ1GEs98CfgrvW3KuC0emNSkAJKAEl0EII5BRYwiGSXKyhfd+ldsauLYRreU7zuh7TuOy9fkUapzsHiwSotysBJaAElED1EwgrsIqvi9X1mo+Ye8UO1Y+0jGfY++KpvHFD/yIs1EOdi4CntyoBJaAElEDLIRBKYDlerOKqu7eZPZ/Vu3VuOWjLcKZtZ81nTc9i1kCrtpfhsqpJSkAJKAElUH4EQgssR2SNBaQAaWFtQoc6DltRdA5QYYO38Lsmtq9j8PJi2Gtiewt/hHT6SkAJKAElEJ5AvgKruIT3E4+YwiNP7xvePL0yMgIHnDSbl//Ws4j+tCxDEfD0ViWgBJSAEmhZBPISWI4Xq/AjdNq98iU/7L9ly0JcJrNd7+UvWbVfoey1qGiZLKOaoQSUgBJQApVBIG+B5YislwDJycq//XujTxi8vHv+N+odBROY0OETfrasUOaa2F4weL1RCSgBJaAEWiqBQgWWhApFZOWf09PvNzOZemfvlgq8Webd//yZTLujEOZ1BtOtWWzWQZWAElACSkAJVDCBggSW48UqbFdhbNHn1G8ulcQLHruCeTeH6RZmsYFNCxlbdw0WQk3vUQJKQAkogRZPoCiRY2FdlSA4Im+Kpw2cybhJhXhU8h6qxd8wovckRs4oJJyreVct/uFRAEpACSgBJVAogWIFVmEFSNu+uYBVvbYq1Gi9Lw8C7d5YwOq98mWteVd5INZLlYASUAJKQAn4CRQlsKQzC/tsu/zzsUbt9hqXz95Hl6SEBK7p+RpXzMqXcR0goUH5U5sSUAJKQAkoASVQAIGiBZZHZM3Na3z1YuWFq6CLC/Nead5VQbD1JiWgBJSAElACDQQiEVgFi6xTB03nwef76oKUgMBpB0/nr8/ly1bFVQmWQrtUAkpACSiBlkcgMoHliKz8ipDKjsKPtuzIdvEOLQ99CWf8aWw53Rd2yHPnoIqrEi6Jdq0ElIASUAIti0CkAssRWfntLOx1yVRm3ti/ZWEv8Wy7jfqIust3yGOUMwxmXB7X66VKQAkoASWgBJRAFgKRC6yCRNZjW0zj6IX9dKUiIPD45tM45qt8WGo5hgiwaxdKQAkoASWgBLwESiKw8hZZbWbPZ87unehmtdblKYrAGtrOWsyanp1D9qLiKiQovUwJKAEloASUQD4ESiaw8hZZ29z4IZ9dsmM+xuu1PgLb3vAhn18clqGGBfUBUgJKQAkoASVQIgIlFViOyAqf+K4V3gtf5tMHzOTBl8JWx9eE9sJJ651KQAkoASWgBHISKLnAckSWFCMNUyerjqc2W84RS3bLable0EDgX5vO4sjFYZmpuNJnRwkoASWgBJRAiQk0icDyiKzcFd9bfTqPD3aE7dd1KfHcq6P7j1vNY4dPusA2ueYjldklLDgp14X6uRJQAkpACSgBJVAcgSYTWB6RNRbIfvhwu1e+5P0DNqKbtX5x06vyu+ea7+kxeRmr9tsyx0z1+JsqfxR0ekpACSgBJVBeBJpUYHlE1mmJv4/IimL9pxey8ohOQJPbWF5LlNEai83/OZtFx+YKDepOwQpZUDVTCSgBJaAEqodAs4mXUIdEr//4QlYeoyKr8fNmscXD77LwVz2zPIoaEqye71OdiRJQAkpACVQYgWYTWKG9WeLJevfI9houdJ4sCQv2/8fHOTxXkwxmYIU9i2quElACSkAJKIGqIdCsAsulaGFlP15HcrJmH1jf4hPfJaG954s1OXKuNCRYNd+eOhEloASUgBKoVAJlIbBCebNkd+Fj/b5psSUc7FIMb+yWZbeg7A6UXYISGtSmBJSAElACSkAJNCOBshFYHm+W1MzKVM6hjtMGLmHcpLAFNZsRbYRDZy8iqrlWEaLWrpSAElACSkAJREGg7ARWKG+WHKsz6dLtqv7swrlmLQOu/zTD8TcirMYZzMgoHgTtQwkoASWgBJSAEoiOQFkKLJ83K7ikgxwQfc2RXzN8bq4yBdHRasqeHt98GsdM6gc7BY2qeVZNuRY6lhJQAkpACSiBPAmUtcAKJbR6XTKVf97cg+3iHfKce3le/mlsOb8Z9gr//svPfAaqx6o8V0ytUgJKQAkoASXQiEBFCCyf0JIq8LLrUHK1ki226HNOPvkrHny+b0Wv8WkHT+evj/SFTb3TUGFV0YuqxisBJaAElEBLJFBRAitAaEn4sOHYnbZvLuDkcxdz39TdK2oxz+r/Dg/fvRmr99rKY7cIq5EGM66i5qLGKgEloASUgBJQApV/DI1TEV5EVoPYEqF1woULGDepV9ketVOHxYgBb/DgHb0hVZBdvVX6TakElIASUAJKoAoIVKQHKxN3R2y5QmuAHTo84qI5DHmiO4OXdy+L9fpv2w+4+IQvePJPg5xQoC2qgAe1hlVZrJAaoQSUgBJQAkqgaAJVJbC8NDyerQPsfK12r+zIUTd/wimTunDYiob8raIRhujgozYfcdUhC3lieHdW7bfaEVRoiYUQ7PQSJaAElIASUAIVSKBqBZZ/LdIEV6dXN6LP39qwz+RN6TV3Ww75YYtI106OtLl5z6XEur/F3/6wIyt6TQAmG4xUW9emBJSAElACSkAJVDmBFiOwgtbREV2wz9O9OP+W9Vlo9WXfOe1pu6ozuy7vSDKGJ3+uD7R2+lgLfA8sBZbwboelvLnVCk6dM5kLh7Rm6uFzee3wr1VMVfl3jk5PCSgBJaAElEAWAi1aYOmToQSUgBJQAkpACSiBUhBQgVUKqtqnElACSkAJKAEl0KIJqMBq0cuvk1cCSkAJKAEloARKQUAFVimoap9KQAkoASWgBJRAiyagAqtFL79OXgkoASWgBJSAEigFARVYpaCqfSoBJaAElIASUAItmoAKrBa9/Dp5JaAElIASUAJKoBQEVGCVgqr2qQSUgBJQAkpACbRoAiqwWvTy6+SVgBJQAkpACSiBUhBQgVUKqtqnElACSkAJKAEl0KIJ/D/NCb8JWPRzqAAAAABJRU5ErkJggg=='
        } else if (this.width === 0 && this.height === 0) {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADN1JREFUeF7tnV2IJUcVx0/dmUHyEFBEokjQoLIPi2IURRGxRxEJKCh5iKAgAQVFg4gKCsrtoA8iEkFBhQj6oCIKKiLiBzgDghE0mWV23YGZJeNmdFwTMUs+dkk2bnvrdt+dO3fuR997u6vqVP32aWG7q875/w+/rT5d1dcIf1AABVBAiQJGSZyEiQIogAICsCgCFEABNQoALDVWESgKoADAogZQAAXUKACw1FhFoCiAAgCLGkABFFCjAMBSYxWBogAKACxqAAVQQI0CAEuNVQSKAigAsKgBFEABNQoALDVWESgKoADAogZQAAXUKACw1FhFoCiAAgCLGkABFFCjAMBSYxWBogAKACxqAAVQQI0CAEuNVQSKAigAsKgBFEABNQoALDVWESgKoADAogYaV6AoJBORtxkj9zY+OAMmrQDAStr+dpKvgLUhIuvGyGY7szBqigoArBRdbznn64VsGOmvsqS3yqLGWtY7peEpppTcdpTrMLB6U+Y8GjoSPoFpAFYCJrtO8XohxUhhAS3XJkQ6H8CK1FhfaV0rJFuR/iPh6B+g5cuUiOYFWBGZGUIqzxWy0RHJJhQWTfgQTFIcA8BSbF6Ioc8AFk34EE1TFBPAUmSWhlCfK6To2LeDk4PdNEbWNeRCjOEpALDC80RtRLZ/ZaT/SDhrLwP9LLUu+w0cYPnVP6rZr1X7r2oAy+YNtKJy300yAMuNzknMMiewrCY04ZOojOaSBFjNaZn8SNeq/Vc1V1h9vdgJn3zZzCUAwJpLLi6epMDVQrLVav/VPMASEZrwlFVtBQBWbam4cJoCzxTS7YEqtwU1J7DoZ1FatRUAWLWl4sJpCjxbNdwXBBbQorxqKQCwasnERbMU6K2wbuy/WmCFNRieN4ezhE783wFW4gXQRPq2f9UZ2n+1BLBowjdhSMRjAKyIzXWV2tWqfzUA1TLAognvyjWd8wAsnb4FFfXV6sBzQ8CinxWUu2EFA7DC8kNlNL0VVr9/1SCwgJbKSmg/aIDVvsZRz/Bktf+qBWABragrZ7HkANZiunFXpYDtX/X+mrcELJrwVNoxBQAWBbGUAleGDjw3/Eg4iIud8Es5FNfNACsuP51nc2Xo/GBLwOLR0Lmr4U4IsML1JvjIbP9q8P32th4Jh0RgU2nwFdF+gACrfY2jneHpQrq9ArpxfrDFFdZAQ6AVbTXVSwxg1dOJq8Yo8NTQD044WGENIuAbWglXI8BK2PxlU39q5PyggxWWDZkm/LLGKb4fYCk2z2fojxeSrY2cH3QELJrwPo33PDfA8myA1uk9AwtoaS2cJeMGWEsKmOrtT4w5P+hwhUUTPtHCA1iJGr9s2k+MOT/oAVg2DZrwy5qp6H6ApcisUEK1j4N2/9Xom0FPwOL4TiiF4SAOgOVA5NimCA1YPX3ZnxVbkU3IB2AlYnSTaV4e6l8Nr6p8rbCq3IBWkyYHOhbACtSYkMO6PNS/CghYvDkMuWgaig1gNSRkKsPYx0Ez1L8KDFg04SMvRIAVucFNp6cAWDThmzY9oPEAVkBmaAjl8ZHvXwW4wrIycnxHQzEtECPAWkC0lG9RAiz6WZEWKcCK1Ng20nqs+n774NedQ9mHNSVX3hy2UQgexwRYHsXXNrVCYNGE11ZkM+IFWJEZ2mY6/636V4pWWH05jBHqvM3CcDg2RjoUW/tUWoFFE1575R3FD7Di8bLVTOzjYGfM968CfUs4Tgv6Wa1WiJvBAZYbndXPEgGweHOovgqFZ/sIPHSSwmMTvn+laIU10ImVlpOKaWcSVljt6BrdqBEBiya84uoEWIrNcxX6v6r9V+P2XSlcYVnZ2AnvqngangdgNSxojMNFCCz6WUoLFWApNc5l2I+OnB/Utg9rilb0s1wWUgNzAawGRIx9iIiBxUpLWfECLGWG+Qj30UKK4VVVRCusvpzshPdRVYvNCbAW0y2Zu2z/yv7gRMzAogmvp5wBlh6vvER66bpsdMqvjEpEbwnHaZmbFbnXi8hMWlsBgFVbqjQvvPRs/+e8UgCW3UadmzWgFXKlA6yQ3QkgtktXpJi010rB97DmV9BC6yagNb9wbu4AWG50VjnLwZOSrY058Bxb032MOevmZtlUaVrkQQOsyA1eJr3Dy+XjYFIrrFKwTfN8WV9GO+5tRwGA1Y6uUYx6+J9kgVX2s17Io2FohQywQnMkoHgO/132rxJcYQ1cyM0tQCugkuTzMiGZEVIsBweSrXT6K6yUgWUtyc1LgVYotckKKxQnAovj8BHZ6PVy+v2rhFdYpSv/k3VzG034EEoUYIXgQoAxHO4DrGFbzG08jYRQpgArBBcCjOGfe5PPDyawrWGcI7l5FY+GvksVYPl2IMD5D3Yk65jJ5wcTBVb55vAU0PJZsgDLp/qBzn3wN+l2CsknnR9MFljWLwut00DLV+kCLF/KBzzvwfb0A89JA8v6dl3Wze004X2UMMDyoXrgcx48NP38YPLAsgut19GE91HGAMuH6gHPuf+AZKsr5f4rHgmnGrVp3sjxHdelDLBcKx74fBcfkG4PVjnAqmVUbt5MP6uWUg1dBLAaEjKWYR75Y//t4NQDzzwSHnM7N28FWq7qH2C5UlrJPBc3Z58fBFgjZhaybtZpwrsocYDlQmUlc+z/XrJOjfODAOuEobl5B6ssF2UOsFyorGSOi7+Vbi/Ufv+KHlZt03LzLmBVW60lLwRYSwoY0+37vz76/hXAmuGs3UB6B6ByXf8Ay7XiAc+3/8uj/hXAmmCUBdV7AJWvMgZYvpQPbN69n0u2Wn2/nUfCsebk5n2AynfZAizfDgQy/95PJVs1Rx/sY4VVGWNXVHcCqkDKlOMFoRjhO46Hf3y0/4oVVnXI+S5A5bsuR+dnhRWaI57iefiHx79/lfAKKzcfAFSeynDmtABrpkTxX7D3vfL77XX2V42CbBLYFBZWbp02HwJWIVe8wroKWU6dse3dL9nKSsLAsn2quwGVhuoFWBpcajnGC/eX+68SXGHl5iOAquXyanR4gNWonDoHu/Dtk9+/iryHlZuPASqN1QqwNLrWYMw735RsrdrOEP0Kyz76fRxQNVg+zocCWM4lD2vCna8nACwLqk8CqrAqb7FoANZiukVz1+595ffb6779q3tdIIWVm08DqmiKtfoKbkz5kMucCux+dfz3r1T3sOyK6rOAas5SUHF5IP8RqtAquiB3vlRuZxi3s10lsIyUe6k+D6yiK9YqIYAVq7M18uoDa+jAs/Kme26+CKhq2K76EoCl2r7lgt/tyoZU32+v25uqe52zwupIbrqAarlK0HO3s7rSI0k6ke5+QTWwcvNlQJVOtZaZAqzUHK/y3fmcZB1z/DiOikfCQnLzFUCVaNkCrFSN3/mMMmBZUH0NUKVar4O8WWElWgE7n5KNjjl+fjDQFVZu7gNUiZbpibQBVqKVsHNP8MDKzTcAVaLlOTFtgJVgRZz9hGSrRbn/anhVFcQKq6j2Un0LWCVYmjNTBlgzJYrvgrMfPfrBicCAlZvvAKr4Kq65jABWc1qqGen8h4++3x4IsHLzXUClpoA8BgqwPIrva+rzdwcCLPvm7/uAylcdaJwXYGl0bYmYz36w3M4w65dxWj1LaEH1A0C1hI3J3gqwErP+7Psl63S8ASs3PwJUiZVco+kCrEblDH+wc3cd//1BJz0su6L6CaAKvzrCjxBghe9RoxGeu9MhsCyofgaoGjUw8cEAVmIFcO69x38wtY0V1opUe6l+AawSK6/W0wVYrUsczgRb75ZsTSYfeG5i42ivWZ+v/ApQheN6XJEArLj8nJrN9h0nf3+wsRVWIfnzfgOoEionL6kCLC+y+5l0+53Tzw8ussKyj383/Q5Q+XE0vVkBVkKeb7/95A+mLrrCsqC6+Q+AKqHyCSJVgBWEDe0HsZVJtjLjwHOtFZaR/AWbgKp9x5hhnAIAK5G6OPOWsn+18A72QvIX/QlQJVIuwaYJsIK1ptnAzrxpMWDZR79b/gyomnWD0RZVAGAtqpyy+868YfwPpk7sYRWS29XYS/4KrJRZHXW4ACtqe8vktl4rmalx4PkGvArJbz0DqBIoDXUpAix1ls0f8NZrpNszur9imtbDso9/L9sGVPMrzB2uFABYrpT2OM/WadkwRdlwHwcsC6pXnAdUHi1i6poKAKyaQmm+bOvUhPODheSndgGVZm9Tix1gRe74X15Zfr99pLmen74AqCK3Psr0AFaUth4l9eDLpWsPJFuj7aPfq/8OqCK3POr0AFbU9oo8dGu/f7V5+z8AVeRWJ5EewIrc5gdfLN3XXwJWkducTHoAKxmrSRQF9CsAsPR7SAYokIwCACsZq0kUBfQrALD0e0gGKJCMAgArGatJFAX0KwCw9HtIBiiQjAIAKxmrSRQF9Cvwf5Sw9aZdePLEAAAAAElFTkSuQmCC"
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
    innerHTML: `\x3Cscript>window.KPSDK={};KPSDK.now=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):Date.now.bind(Date);KPSDK.start=KPSDK.now();window.parent.postMessage('KPSDK:MC:AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:X1dTUCEJXFFfFQ:R1FhVxAMRUBC:WlZGURAXWlNQFVlcVw:VlZRRhsVQXVfBWNWV1M', '*');\x3C/script>\x3Cscript src="// ips_js_uri">\x3C/script><iframe src="javascript:;" style="display: none;"></iframe><iframe src="javascript:;" style="display: none;"></iframe>`
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
    innerHTML: "<script>window.KPSDK={};KPSDK.now=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):Date.now.bind(Date);KPSDK.start=KPSDK.now();window.parent.postMessage('KPSDK:MC:AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:X1dTUCEJXFFfFQ:R1FhVxAMRUBC:WlZGURAXWlNQFVlcVw:VlZRRhsVQXVfBWNWV1M', '*');</script><script src=\"// ips_js_uri\"></script><iframe src=\"javascript:;\" style=\"display: none;\"></iframe>",
    innerText: "window.KPSDK={};KPSDK.now=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):Date.now.bind(Date);KPSDK.start=KPSDK.now();window.parent.postMessage('KPSDK:MC:AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ:X1dTUCEJXFFfFQ:R1FhVxAMRUBC:WlZGURAXWlNQFVlcVw:VlZRRhsVQXVfBWNWV1M', '*');",
    src: "",
    toString: function () {
        return '[object HTMLScriptElement]'
    }
}, {
    tagName: "SCRIPT",
    innerHTM: "",
    innerText: "",
    src: "https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/ips.js?KP_UIDz=0dkzPSW5PDgE9ck9WVrpioc9SfkiRb67gzk9M4xczgpYLIcFvB1ZoDrZV7gWUWN6EDtbm50ouwjUhaTfFQ190UBc13T1N7RUsX4timsP4Ztlk33BOOLAd4JpmDD2an8Bya3DVLrsLcKiSCItRhPALvcNybo7e6m8zjlKjLHaRSw&x-kpsdk-v=j-1.1.28649&x-kpsdk-im=AALzHpXljhHmduIaF-_dqQqBYzfDKk5P0JKI_yptdmmNAp-733IgXOdcZkd7I_MJUb_2gUZ5AaFTENf3HA1i7uhm56IcQsWUdgewCobbjTe-NiSPqcwf1DUalarY01B9iXM1XeGyB8YOjQ",
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

window.KPSDK={};KPSDK.now=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):Date.now.bind(Date);KPSDK.start=KPSDK.now();window.parent.postMessage('KPSDK:MC:AAI1UcfgG77Rk5jSN_4dJwrc7jMYIrMIvQ5v43yZumuU2_ZUs_nHRB6zV5TL63KYN2FZj7sATf6dURrn4BEGsUn0U7u14inui7kYv1ze0Z13EcVaFlcn0_6CoxzfZoxXlTJ0eSZOG21LQw:X1dTUCEJXFFfFQ:R1FhVxAMRUBC:WlZGURAXWlNQFVlcVw:VlZRRhsVQXVfBWNWV1M', '*');


KPSDK.scriptStart=KPSDK.now();
"use strict";
(function() {
  var u;
  var S=function(u,r,e) {
    for(var n=r.length,t=n-e,a=2,i=[Math.round(+new Date/18000081)*a],f=1;
    f<2;
    f++)i.push(i[0]-a*f),i.push(i[0]+a*f);
    for(var o=948611978,v=function(O) {
      for(var b=function(u) {
        var r=Array.from(u.toString(),Number),e=r.length,n=0;
        return function(t) {
          return t-r[n++%e]
        }

      }
      (O),E=[],g=0;
      g<u.length;
      ) {
        var L=0,l=1;
        if(o!==void 0&&E.length===19) {
          for(var m=149034102-801611248+1779803475+1145636903+1300478493-153922266-1253283198,_=new TextEncoder().encode(E.join(",")),h=0;
          h<_.length;
          h++)m^=_[h],m*=-20487688+14133581+2623763+1344222+7086815+12076926;
          if(m>>>=0,m!==o)return;
          o=void 0
        }
        for(;;) {
          var A=r.indexOf(u[g++]);
          if(L+=l*(A%e),A<e) {
            E.push(b(L|0));
            break
          }
          L+=e*l,l*=t
        }

      }
      return E
    }
    ,c=i.length,d=0;
    d<c;
    d++) {
      var s=v(i[d]);
      if(d===i.length-1&&(o=void 0),s!==void 0)return s
    }
    return[]
  };
  u=function(v,u,f) {
    for(var a=u.length,r=a-f,t=[],M=0;M<v.length;)for(var h=0,l=1;;) {
      var x=u.indexOf(v[M++]);
      if(h+=l*(x%f),x<f) {
        t.push(h|0);
        break
      }
      h+=f*l,l*=r
    }
    return t
  };
  var h="O$KouCKS+^kCZ$KlZCKs+^kDA$KHRCKlM^kSk$K$qCKEM^kDu$KtCKF^kVu$K=>CKGq^kGK$Kl>CKyZ^ksd$K2+CKDu^k$g$KNuX+gV>HkoACKNgCK8AHkXkCKNACKrAHkVACKo+CKT+HklqeK^M4AsXOvqCKyqCKekHkNkCKoOCK8OHkHZCK=RCK8dHkX+CKyMeKV>xRv>CK$>CK8kHkVdCKGRCKedHkCqCK$g~ZHksgCKCRCK~HkXdCKJFVqHkFCKSdCKQkHkH>CK2uCKTdHkERCKoKG+Zxq$KyKCKyR^kXd$KDACK$R^kH>$KCZCKCg^kSg$KEZCKHq^kNk$KOCKHZ^ksk$KN+CK2K=+>u^RCKEK^ks+$KGKCKVg^kF$KCMCK$M^k$M8+^qCKE>^kE>2K^M^>^qZsryMOV^TkZ^MVRxKX+XHZ^Ky+UHZxqG+XHZ^gZVqxgvg$k^Z^qXkxqmAHzu^ZdxZGIgH3y+UHZxqG+XHZ^gZVqxgvgh4uTrLxZvuu^dH3z+2HZvgy+XHZ^qRxZvR^gZ^gBRNrL^q$k^qVZ9kvg4AHyRVqRvRSigH3z+=HZvgZ^Z4qyU1vdy+XHZ^Zz+2HZvRy+XHZ^uRxqvA^dZ^dBRNrL^Axk^gVZxAG+lHZ^qZVqfI9Dh^Zy+UHZxgG+XHZ^uZVgxuvuZ^d4dDrLvA2k^Z^uVujkvR4u9DhVuokvZg^RFVRx>vR7^qSOz+=HZv>Z^M4dYDhvMP+^K=qVM2+yHZ^MS+^Kz+lHZv>xk^K4A|vuv>y+lI^>Rx>mIxDZ^qy+>vZy+lHZ^ZskxRu^ZR^>VqxRF^+^MxkVKfOv$I^MxkVKfIQsLboKVK>C6BY+vkVKx+HkR^KS+VMjkv>4OzvupE+u^qZ^qBd8Qg^Rek^ZqxqvZ^Zp^+VKjkv>4gv$IVKjkv>4uQsLJVkv>BY+skskxMmZQCK^KD+H6mqSsLgVK>X$MTkVHZGk^HZxKUkoPZ8k$PZ$koPZUk=PZ8kDPZ$k=PZUkXPZ8kEPZ$kXPZUkyPZ8kSPZ$kyPZUksPZ8kHPZ$ksPZUkCVZ8koVZ$kCVZUk2VZ8k=VZ$k2VZUklVZ8kXVZ$klVZUkNVZ8kyVZ$kNVZ|+2=K4qrsL>v>D+XPZ^MU+VHZGkD+$PZZTEDCjmxGGGsbX+2PZZG$=sSmVGGG2C+2+lPZZy9XUjm^GGGNHkU+2PZolXlzC+D+lPZoylNv3z+HHZvM$k^K^Mc+xMmAVyI^>dx>sC+y+XPZ^qz+HHZv>=+^q^MV>Jvq^Kgoe+z+HHZv>p^M^KU+HHZvMy+CPZ^KU+lPZvMy+oPZ^Kz+=PZv>e+^K^MV>s+vqZVGGGjm^GGGSGKVM2+SPZ^MD+yPZqE+yPZ^KZ^KBZS^A^MP+^MnxKI^KD$kr+7xKG+oPZ^>y+vPZxq8+^>^q^Mz+oPZvqe+^M^>Vqs+vRZVGGGjm^GGGSGKV>jkvMR^>y+ePZxMG+2PZ^>e+VMx>vRV+^qZPGGGjmxGGGSGKvqxk^KgV>E+2PZ^MvK^Mqx>ok^>ZVGGGjmVGGGSGKxq^k^Ku^qz+VHZv>y+$PZ^qzkxMvR^>V+^>RsGGGjmvcGGSGK^Mxk^KAxMX+SPZ^Ky+^HZxMX+GPZ^My+jPZxKA^K4AQ^AxM9+^MC+^KU+SPZvMD+HPZRU+EPZuy+yPZ^KP+xKAVGGGjm^GGGGjK^qz+SPZvMck^q^KVMRv>EH+y+yPZVK2+oVZ^Ky+GPZVKE+oVZ^>vK^>qxqA^K^q^Mz+yPZvqy+VPZ^KoKxKO^RZ^>VRxqNk^qa^KC+xMvM^qD+CVZVqE+HPZ^My+VPZVq^kvRu^RZVMxRvMy+GPZ^>z+sPZvZvK^ROVMMvq^M^qXkVqLvqe+^K^>Vq2+2VZ^qy+CVZVKE+DPZ^MA^KVMx>G+oVZ^Ky+8PZxM1^K^M^qTkxq$+^Ke+^>VKxMX+$VZ^My+rPZxKG+HPZ^RZVKxRv>y+$VZ^>C+xMvq^qV+^qRsGGGjmvcGGSGK^KD+2VZVKE+DVZ^KXk^Kmx>G+2VZ^Kz+VKo+v>E+^>^MVK2+DVZ^Ky+2VZVKs+vMVGGK^MD+YVZxMG+2VZ^Mz+VM5vMD+DVZ^Kz+NPZv>y+HPZ^Kz+$VZvqy+$PZ^qux>vR^Ry+DVZVZE+=PZ^qA^ZVqx>Nk^>C+^qC+xRvR^>V+^>RsGGGjmvcGGSGK^qxk^MVKxqG+HPZ^KvKVK>vqV+^>OVK2+CVZ^Ky+yPZVKJL^M2k^KVMxMX+yPZ^Mg99+E+sPZ^MZ^MqxKNk^Kg^Mz+NPZvMZ^KRV>|+vqV+^KE+VMxKvqy+SPZ^MRxMO^KXk^KhxMG+SPZ^KZVK>vZz+^RN+Vgl+v>^g^qe+V>xqvMy+SPZ^>Rx>I^MXk^MWx>G+SPZ^MZVMRvRz+^q=+VZl+vq^Z^Re+VKxRvqy+SPZ^KRxKt^RXk^Rv+xMG+SPZ^KZVKgvRz+^q5VZl+v>^Z^Ke+V>xKvZV+^RZPGGGjmxGGGSGKvqD+NPZ^>z+XPZvMy+CPZ^RRxRmAN^A^qC+xKvR^MV+^MRsGGGjmvcGGSGK^KD+NPZVKE+$PZ^>Z^>BZS^A^KY+^K7x>X+lVZ^>y+zPZxKG+lVZ^MckVKxMvqu^>$rkz+EPZvMD+XVZ^Kz+lPZvRy+XVZ^KoKxKu^>Z^qV>xMG+EPZ^qy+TVZxRYK^Rg^ZRxqvg^KXk^K3x>8+^M^>^qU+lVZvRy+EPZ^Kz+DVZvqvK^>uVqMvM^q^My+|PZxKG+XVZ^qvKVqgvZZ^K^RV>Dkvqa^Ke+VMxKvqD+NVZ^>z+lVZvMy+=PZ^>uxKvq^My+NVZVKE+lPZ^>A^KV>xqNk^qC+^>C+xMvq^qD+yVZVqE+SPZ^My+yVZVK~v>^K^>V+V>MocGGjm^GGGSGK^KD+QPZxKG+NPZ^KXkVKwvqy+NPZ^KN+xKo+^ME+^>VMxKX+NPZ^Ky+QPZxKok^KVGGK^Mz+2PZvMA^M^KV>E+SPZ^Kz+^KnxMG+DPZ^KAVMxKvRXk^qC+VK~vq^K^MV+VMMocGGjm^GGGSGK^KD+QPZxKG+yPZ^Kp7xMDk^K^M^MU+EPZv>gH2ky+zPZx>G+EPZ^KZVKf1N^A^Ml+V>xMvZu^R=Pkz+lPZvMy+yPZ^MRxKv>^qD+SVZVqE+SPZ^>y+SVZVqE+EPZ^KA^qVKxg8+^>^g^MU+XPZv>y+NPZ^KTkxK<^>y+NPZVK|+vMD+^qE+V>xqvMD+NPZ^Kz+XPZvMV+^KVGGKVME+=PZ^KA^MVKxZG+NPZ^Kz+VK5v>y+$PZ^>uxMvq^KXk^KnxM8+^Z^M^KP+xKAVGGGjm^GGGSGK^MU+XPZv>y+yPZ^K8kxKO^KD+yPZVK>=rky+NPZ^Mz+XPZvMz+^KwV>T+v>^>^RD+QPZxRG+NPZ^KV+VKsGGKv>y+2PZ^KuxMvM^>V+^>RsGGGjmvcGGSGK^Ky+NPZVM|+v>C+^qy+8PZxM1^q^M^RTkxR$+^>e+^KV>xMX+NPZ^My+QPZxMG+NPZ^Kz+VKFvqQ+^M^>VK2+SPZ^Ky+NPZVKs+vMVGGK^>y+YPZxK1^>^K^MP+xMAVGGGjm^GGGSGK^dz+XPZvMz+^KC+VME+lPZ^KA^MVKxRNk^RC+^MC+xdv>^KD+NPZVKE+SPZ^Ky+NPZVM|+v>C+^qQ+VKxqv>D+NPZ^Mz+XPZvM1^KRVMRv>NYKy+NPZVM^kv>Z^GGGjmqV>Jvq^qgVYKz+XPZvMp^K^qeKxqOD$MGk2^ZVKekl^Z8kD^Z8k9^ZekN^Z8kE^ZekVK2+l^Z^KD+D^ZqE+D^Z^KZ^KBZS^A^>D+l^ZV>E+X^Z^My+l^ZVK=+v>^K^>uV>HoMG+2^Z^KZVKfhJ^>r+ZxqG+D^Z^ZxkVqKvgR^K^>VqJvk^MD+X^ZVME+N^Z^>1^>^RxqI^q=|Ky+Y^Zx>A^>4dxygxqc+g^Zy+T^Zxg^k^ZR^gqx>vR^Zp^+VM>loMy+X^Z^RIxR$cK^Zu^ZezKE+l^Z^qZ^qBqCrg^Zr+uVgE+N^Z^d6^dixuCKCA^u^dskxgu^dy+X^ZVds+vuVK^RHk^RxRvAxk^ggVuKvR^Z^gpV+xMO=oMy+X^ZVMAv>Cc$K^Z7VZ2yKG+X^Z^gP+VgHG=KvZp^R^ZdxZCcKy+=^Z^RRxRmdHyg^gy+gvuy+X^Z^ZWxZ5^AHkC7VAxZ^k^dR^Zz+D^Zvg6^ZLVus+vAVK^ZHk^RxZvAxk^dgVuE+N^Z^uV+^uPKxZCKCZ^Z^uskxdI^uR^RVgxdF^+^MgYoME+N^Z^MV+^MPG+xdNk^dB^Az+o^ZvdZ^g4Itvur+g^Zz+2^ZvA2k^ugVu2+X^Z^uxk^Zqxuu^g^d^Zfx+v>V+^MVG+Vdl+vO^d^Mzk^GGKxMvgD+E^Z^Zz+$^ZvgZ^Z4gGygvur+I^uz+l^ZvO6^A$+VOs+v7J^7Hk^7x7v7xk^uRVOE+y^Z^A6^AWxOok^OVK^7xkHRvI^Axk^uZxAG+E^Z^A6VAIv1V+^IVKVOGk$Z^O^AxkVuRvOy+E^Z^AP+xAoM^OHkCZVOxA^k^uO^AqxZvu^up^+VME+X^Z^d2k^dZxdX+D^Z^dgYDKC+m1vE+^My+>vOy+=^Z^uskxAu^urk^MVAxd2K^dxk^MBRsSR^K9+=8MBkssLR^>gPUMUkoCgL^KZVKf7$ju^M$+BuxK^K5^MVKxqI^qHUM$+BdNlO^>Z^>Bq^m^MZ^MBOjNu^Rr+gV>IvgZ^Z4gCjuvuxk^>RVdKv>^R^>pV+xKa^K$+47zKvqxk^K4gCjuvqskxk^MBqcsd^>D+XsZVMaDVReKNvZ$+BqQM^MZ^MBZNvd^>ek^qqxMvq^qp^+VKAvMg^>uV>VPR|+CTM4qrsL>vMgoSMTkYCgykXCg^K8klCg$kDCgG+DCg^MZVMf1CDI^qZVqfFQjt^Mr+Zx>G+DCg^RxkV>KvZR^q^MV>Jvk^KD+lCgVKC+mACDI^MRxMmdT|+^>y+>vZy+DCg^ZskxRu^ZR^MV>xRF^+^KD+TCgxKs+^>y+lCgVRMvZ4uSEgVgQ+I^Zxk^ZqK^k^ZgtqxRvd^Zp^+VKjkvq4Z$E1VKE+NCg^gZ^gBRsEg^Kr+gVdhut^uxkVdKvAR^g^KVdJvk^Zxk^>BMErL^ZoK^>U+NsZvM9+sSM4>NsLu^Kgl9>lkXCgUkyCg8kSCg$kyCgUksCgB2=>U+ECgWy+XsZ^MRxMmgjzg^qCkx>u^M^q^>fx+vMD+SCg^Kz+NsZvMy+SCg^qRxqmL|zu^ZY+xKvg^>D+GCgV>N+vMy+XsZ^qRxqmuSSR^gy+>vZy+GCg^dRxdmZ$E1^ORxOm7eQg^dCkxuu^O^d^ufx+vgxk^RRVZKvR^g^RpV+x>^k^K4gsyOx>G+XsZ^>ZV>fISSR^Zr+ZxgG+GCg^dZVdfAlrL^7ZV7fieQg^dekVIKvI^d^IpV+xu^k^gR^uqx>vg^gp^+VRjkvM4g9cIVR2+VCg^Ky+sCgVZMvg4gxyOVKS+vMVTVGry+^R7VRov>G+sCg^ZZVZfOxyO^Ks+VKVEQ2x1vdp^g^RdxRy$>y+sCg^KRxKmg9cI^Zc+xZAcYeTSm^GGG=UK^KfxKvZu^RH$>U+ECgbS+^Zy+zCgxK^k^Z4ONvuxKG+lI^RZVRfLxDZ^dr+ZxAG+sCg^uxkVAKvAR^R^dVAJvk^Kxk^ZB>Y$I^Kxk^ZBRrsLboK^ZZo9>6Y+vk^KV+yku^KS+^KskxKmOzvubz+KvgZ^Z4OPEgvAek^dRVZxuvup^+^gskxKmgv$I^gskxKmuQsL3eKxK6Y+skD+jsZxK|+$l>4qrsL>vqgVoRTk8egykleg^K8kDeg$k=egUkXeg$+4gD=Iv>Z^M4Z=xOvqek^RRVMx>vZp^+^KU+2egvMS+^>D+9egx>6$E>y+=egV>E+DsZ^R=+^>VRxKi^Ks|>S+V>Jvq^KD+legVK>Dz>BY+vkVKx+HkR^KS+VKjkvM4OzvupE+u^gZ^gBd8Qg^Rek^qqxgvZ^qp^+V>jkvM4gv$IV>jkvM4uQsLJ2+Eeg^KBY+bXXq8k^KD+XegVKE+Eeg^qZ^qB>Y$I^>$k^>VK9kvM4AVyIVqRvRyc>y+legV>E+EI^RZ^RBu^DZ^Zr+gVdE+Eeg^uZ^uB>Y$I^qxk^dqxqu^R^Z^dfx+vMxk^>4Z^vIvMy+Xeg^>Rx>mdHyg^dy+>vRy+=sZ^ZRxZmgz2h^uskxqu^uR^>VdxqF^+^Ky+9egxKA^K4ONvuxq=k^q^Z|kVZftlcR^KuVKsH>G+Xeg^qZVqf7Hyg^Zr+ZxdG+=sZ^uZVufOjTu^OxkVdKv7R^q^ZVdJvk^Ky+legVZMvg4uQsLVKCkvM^Z|k^ZBgEcR^Ku^KYCqE+Neg^ZZ^ZBqCrg^ur+gVdE+lsZ^OZ^OB>Pcu^Axk^dqxAu^Z^u^dfx+vMy+leg^dLfIXrL^d^KdxKXoqy+leg^dRxdmuXrL^Ov+fLjK^d5VOxdvAp^u^KdxKVvqy+leg^dRxdmuXrL^AvkxAvI|k^74uGyRvup^d^KdxK$2qy+Xeg^uRxumdHyg^dy+>v7y+=sZ^ARxAmgy8k^7skxOu^7R^uVdxOF^+^Ky+9egxKA^K4uEsLxAV+^A3^KdxK$=qy+leg^ARxAmOzvu^dc+xdb^Ap^AVKRvM2Dqy+XegVKMvM4dHygVAQ+O^1y+=sZVdMvu4gxeZV7jkvtR^7RVKxAvtp^+^Oz+DegvuZ^d4uX^AvOU+^ARVORv7XXqy+legVdE+Neg^AZ^ABqXGt^7r+gV1jkvtR4ZD^+KvO^7^1pV+xO^k^d47ycOxOG+leg^dxkVdftzvuby+9egxd^k^d4uEsLiOHQqBY+okxdvkGkR^dz+=egvuy+R^7Rx7m7eQg^ICkxtu^7^I^tfx+v7xk^d4OQcOv7y+leg^dskxdmOzvubz+=egvuxk^d4dTsLbBY+y+9egxOG+leg^dZVdftzvu^IuVI$zqFg^dgTzqJu^dxk^OBKHU1^dy+legVdE+Eeg^OZ^OBRrsL^Iu^IerqJO^1g=rqfKvtxk^d4qUy1vty+leg^1z+=egvuZ^d4Z^vIv1xk^14q=$7v1y+leg^dFxdmOzvu^Iz+=egv7W^O4dTsLv1y+leg^IFxImgv$I^tz+=egviZ^t4qyU1vhjk^L^JdxJosqy+leg^1Fx1mRGU1^tz+=egviZ^t4qUy1vLjk^i^tdxtNxqy+leg^LFxLmRTy1^tz+=egviZ^t4q=$7vLs+^i4>NsLviu^t$Pqz+=egviW^t4q=$7vLy+leg^iv+f7X=I^3ZV3fOlxO^bekVJKva^b^JpV+xhG+Deg^JykVhxJvpxk^i4gC|gvpy+leg^iz+=egvJZ^h4gC|gvfxk^i4qycuvfy+leg^iFximd$|g^hz+=egvJZ^h4qycuv3s+^JRVaRvfyoRy+legVJbv34RGcuVhE+Eeg^hoK^hU+SsZvq9+SvR4>NsLO^KgNDRlkNogHkGog^Ky+jogxK^k^K4Rxjg>G+Gog^KZVKfuGU1^Ms+VMivM7^KN2Rz+yogv>Z^M4qyU1vqs+^>gVMJv>^K7^KjYRE+Hog^MZ^MBgjvu^>s+^>JxqF^q^K7VKs=RG+Gog^MZVMftzvu^>s+V>>vZp^R^KdxKlDRy+2sZ^Kz+2sZv>Z^M4Zv>vRxk^K4uvvkvRy+Gog^KeKxKX+HsZ^K$+BqN=I^qZ^qB>ExO^>ek^Rqxqvq^Rp^+VK2+oxZ^Ky+XsZV>Mvq4gjzgVuP+vZR^>^uVRJvk^Ky+2sZVRE+EsZ^KZ^KB>$|t^Zxk^RBqsjZ^Zy+2sZVKE+XsZ^gZ^gB>sX7^Axk^KBZ9vk^Ay+2sZVKC+mA=^d^RRxRm7xUu^ZRxZmAGY+^RskxKmZ9M^Rz+osZvZxk^R4Z2=umncrty+eIxKI^KCzRy+8sZxgG+oI^RxkVgfOzc1^Ry+8sZxKG+HsZ^Ry+csZxgG+GsZ^d=+VgxdvA=+^R^uVZjkvM4OTjOVZE+DsZ^R$+4gD=IvgZ^Z4Z=xOvdek^uRVZxgvAp^+^Kz+ssZvuyk^K^dVgjkvZ4d$|gVgE+DsZ^RZ^RBZ9vk^Ky+DsZVRMvZ4gY>Vg8kvM^g^RuVRXxRG+2sZ^KZVKf7SjZ^uy+9sZxgA^g4g^XtxKTk^u^K^RdxRHsRy+s7^KRxKmgQ9d^gU+CIvdy+ysZ^gz+osZvMCK^g^KJxROoVR$+4gUMvZZ^R4uDvdvdek^dRVRxgvup^+^KIxKAG8^9r6c8^9N8k^ddxd2VRy+ysZ^dz+osZvdCK^d^gJxKONvZBNvZokxgvkGkR^gbsoZG+2sZ^KxkVKfIQsL3y+8sZxKG+R^dZVdfieQg^AekVOKvu^A^OpV+xg^k^K4I|YIxgG+2sZ^gy+qxAA^A4uyoIxK^k^g4tPT1xKG+NsZ^Ky+8sZxul+^K^u^gZDvZ6Y+vk^gV+yku^gBY+bv+8KY+y+XsZVKMvM4drsdVgP+vOR^K^gVAJvk^OokB2+>slZGklvg^K$kDvgUkEvgZ^kBZS^A^KU+^KZxMI^MEYZZVk>vR$+4ISKxKC+^q^K^RfxRv>u^M==ZRxkO^Mp^MVK>N=Zpb^KU+DvgvM$+4dlMx>A^>4ATvdxM8k^qR^>VMxqF^+^KYkVKav>D+Evg^Mv+fhv3^Z9+89ZfdSsLR^MZClZG+NsZ^My+9vgx>G+Xvg^qCKVMx>vR^Ksky+|vgxq$K^Z^M^qVKSkVkek^>RD+xMvqp^+^KD+GTZmqSsLRVK>GEJ8kVvg8k^vgek2$g8k$$g8k8$gekl$g8kD$g8k9$gekN$g8kE$g8kQ$gekG$g8kS$g9+YrgfdSsLu^KU+$$gvM9+EQZ4>NsLO^MD+D$gVMY+=UJ4qSsLZxKX+l$g^Kg^Qgyko8g^K8kC8g$kV$gUk$8g8k28g$k$8gA^k4AQ^AxMT+^Mg^KdxK=yZZ^kgVMC+mIjK^>0xMvq^Rp^RVKRvMHyZZ^kZxRF^R^MgerZJW^MD+C8gVME+EI^>Z^>Bu^DZ^qr+gVZE+o8g^dxk^Zqxdu^>^q^Zfx+v>D+o8g^Mv+fLN^k^Ay+e8gxOl+^A^O^uRxumO=81^Iy+Rv7w4gC=ZfuYUg^AxkVOKvOxk^OgBKjygR^u^IVOJvk^dZ^dBgl81^Ar+uV7<mgPUt4qvUgv7xk^7RVOjkvIg4RDaKvu^A^7pV+xgA^g4OY81xAc+u^OwB>VDt4RYUgV7jkv7R^7xkVO>mRvuRVgxAv7p^+^RRxRmO=81^Ay+RvIw4gCPkfuYUg^txkV7Kvixk^7gBKezOR^R^AV7Jvk^ZZ^ZBgl81^Ar+uVO<mgTs+4qvUgvIxk^ORV7jkv7g4Rco7Kvg^A^OpV+xqA^q4OY81xAc+u^7wB>2Z4RYUgVIjkvIR^IxkV7>mRT$+RVqxAvIp^+^MRxMmO=81^Oy+RvOw4gXDgfuYUg^7xkVAKvIxk^AgBKeZR^M^OVAJvk^KD+o8gVKE+l$g^Ky+o8gV7mmuG^A4gHy7v1CK^K^7VIxAX+$8g^A$+Bqcrd^Oy+$8gVA$+v7^A^KD+88gxK=+4hDUOVAP+vtrk^A^1VK2+l8g^Ky+=8gVAMvO4dx$hVOQ+t^7xk^7qf7U$hxk^7Zf$+Sehy+C8gVIjkvIu^IRVAxOvIp^+^Kz+$8gvMZ^K4JU~vIr+u^1skx1u4iVXkskx1O4~=|gqxKvI^1p^+VOE+l8g^7Z^7BqSyk^Ir+gVtE+EI^LZ^LBu^DZ^hr+gViN+v3y+28g^fskxJmdcQ+^fskxiu^JR^LVhxiF^+^1xkVtKvtR^7^IVtJvk^OskS+V>2+o$g^>S+^KskxKmgz2h4ZyyO^k^K4gSTufOXSOxk^KB>Pcu4gGcAskxKmgy8k4Z2ru^k^K4gseZfO|4D+C$gVK>X^gGkX8g^Kjkl8gv>8kN8g8kz8g2+S8g4qSsLU+E8guy+y8g^Kz+D8gvqZ^>4uX^Av>l+^K^MV>RvqC^gy+N8gVqC+mAj=g^MRxMmiGlO^Ry+>vdy+X8g^>Rx>m1J^uy+>vuy+y8g^Askxdu^AR^>VuxdF^+^Zy+|8gxAA^A41hxuc+g^Oy+z8gx7G+E8g^1ZV1f1N^A^ICkV7xIvtxk^ORV1KvO^u^OpV+xdr+^Z^d^uskxgu^uR^MVRxgF^+^K2kVqxKvMD+N8g^Kz+E8gvMp^K^q8kxKO^KD+y8gVK>ESgy+N8g^KeKxKs+^Kxk^KB>sX74uGE7skxKmgY>4dvChX+o$g^KS+VKjkvM4gUz1BMX9hxk^K4Z$zOmZYzIxkVKfOC|t4ZYcO2+=$g^KS+^Kv+fLjK^MxkVKf7$ju^M9+cvdfdSsLR^MZSldQks8gL^MRxMmd$ju^>v+fLjK^KUkV>xKv>u^M2ldixM=+47XlOV>Mvq4LrPZVRQ+O^qxk^qqf1oyZR^>VRxqF^+^KxkVMf7$ju^KLVKMvM4d$juVMMv>4uXbVKjkvM4O2^kBqGDkL^qZVqf7$ju^KxkVKfO8zd4iTYgC+m7XlO^qRxqmdxm^KRxKmtsxu^qy+>vZL^ZZVZf7$ju^uxkVRKvAR^K^qVRJvk^ML^MRxMmd$ju^qeKxq^k^K4gSzgxM|+GTd4qrsL>v>gEouTk^8gyk22g^K8k$2g$ko2gUk=2gBD^dr+xKs+^>xk^KBKHU1^>xk^KBR|DhRD+$2gVKE+22g^KJ^KVMMv>4AN^AVKo+vMR^q7VqHsdFR^qZVMxqvqD+22g^>z+V8gvZy+22g^ZRxRvg^d$k^dVZ9kvg4AHzuVRRvZozdgDsdz+V8gvdy+22g^ZRxgvg^Rh4dDrLvZ^Zu^ZUsdE+22g^Ry+22gVgMvZ^g^ZZVZfIXrL^R$kVRxZzk^Z4AxyRxRI^R$SdgUsdE+=2g^RZ^RBKHU1^dy+22gVgE+22g^Zy+22gVRMvg^R^AZVAfIXrL^RxkVdxgvZy+$2g^RRxRmu9Dh^Zz+V8gvdy+22g^uRxgvA^dZ^dBRNrL^g2k^ZVgxg^k^R4uDDhxgDk^qg^q4xqvM^g7^gvQdE+=2g^KZ^KBR|Dh^>P+^>YqxKX+=2g^KS+VME+l2g^Kxk^MBgjvu^Ky+lIVKMvM4IxDZV>Q+O^gy+$2gVRjkvdR^RRVKx>vdp^+^qskxMmgv$I^qskxMmuQsLbeKxMODouBY+okxMvkGkR^Mr+xM^k^M4ONvu3G+R^qZVqfieQg^RekVdKvR^R^dpV+x>^k^M4go$Ix>^k^M4uEsLi2K^MBY+ckjkvM4ZQCKVMY+Nvu4qSsLZx>OGX7TkS2gjky2gvM8ks2g8kx2gekoYg8kCYg8keYgek=Yg8k2Yg8kYYgekXYg8klYg8kTYgekyYg8kNYg8kzYgeksYg8kGYg8kcYgekC=g8kVYg8k^Ygek2=g8k$=g8k8=gekl=g8kD=g8k9=gekN=g9+yNO4>NsLO^KD+2YgVK2+V2gykD+H2gRDEDCjmvcGGsbD+V2gZj$=sSmxGGG2C+X+CYgZy9XUjmVGGGNHk2+2YgV9XlzC+D+$YgeylNv3E+H2g^K$k^KVMS+v>4AVyIVKRvM$9uy+2YgVqE+H2g^K=+^qVKx>F^>^Mg|9uE+H2g^Kp^KVM2+H2g^My+G2gV>2+lYg^>y+s2gVME+=Yg^Ke+^MVKx>ok^>ZVGGGjmVGGGSGKxKX+DYg^KD+9YgKG+=Yg^MZVMf1N^A^KP+VK5v>u^MGXAy+uvMy+s2g^Mz+G2gvRe+^M^qV>E+oYg^qe+^>VqxMok^MZVGGGjmVGGGSGKx>^k^KR^>z+S2gv>y+V2g^>C+xMvq^RV+^RRsGGGjmvcGGSGK^Mxk^KZxMG+s2g^MvKVMKvRV+^qZPGGGjmxGGGSGKvZxk^KuVRE+V2g^My+H2gVREkv>^R^>V+V>MocGGjm^GGGSGK^MxkVKgv>D+XYg^Kz+y2gvMD+EYg^Kz+lYgv>Z^M4uX^AvMY+^KC+VM2+SYg^MD+yYgq2+EYgRy+lYgVKs+vMZVGGGjm^GGGGjKV>E+SYg^Kck^>VKxMI^MV2Ay+9YgxKX+SYg^Ky+|YgxKG+SYg^>vKV>Kv>Z^K^MVqE+yYg^Ky+SYgVM^kv>g^RZVKxRvqXk^>aVM~vR^M^KD+jYgxKG+EYg^Ky+rYgxqYK^qu^MRxKv>^>y+EYgVKE+sYg^qvK^qAxRA^K^R^MTkxMB^Ke+^>VKxMX+sYg^My+jYgxKG+V2g^>AVKx>vRy+sYg^Mz+s2gvMA^M^KV>DkvqC+^Ke+VqxKv>D+HYg^Mz+DYgvMy+yYg^>RxKvq^My+HYgV>~v>^>^qV+VqMocGGjm^GGGSGK^KD+PYgxKG+VYg^KXkVKFv>y+VYg^KN+xKD+^>E+^MV>xKX+VYg^Ky+PYgxKok^KVGGK^MU+HYgv>y+VYg^KN+xK$+^>D+o=gV>E+NYg^Ky+yYgVME+$=g^>y+H2gVqZvq^q^Zy+e=gx>G+H2g^qAV>xqvdXk^gC+V>~vg^>^qV+VqMocGGjm^GGGSGK^>xkVKxMvqy+yYg^MoKxMO^KV+^KAxMX+yYg^My+9YgxKFI^>2kVKx>vqD+lYg^>ZSruG+XYg^KZVKKv>Xk^MgVKE+NYg^MZ^Mqx>j+^>V+^M|+xKv>^>y+XYgVKMvMg^MXkVMtvRy+XYg^MRxMO^Rz+^RQ+xKy+^q^K^MC+x>v>^qy+XYgVKMvMu^MXkVMBvMy+XYg^MRxMI^>z+^>Y+xgy+^K^g^MC+xqv>^Ky+XYgVMMv>O^>XkV>C+vRy+XYg^>Rx>t^Rz+^R0xMy+^q^M^>C+xKvq^qV+^qRsGGGjmvcGGSGK^>D+DYgV>E+XYg^Ky+G2gVMMv>4AN^AVR~vM^R^MV+VMMocGGjm^GGGSGK^KD+UYgxKG+G2g^>ZV>f1N^A^KY+VKuvqD+$=g^>z+=YgvMy+$=g^MGkxKv>^qu^qQ^AE+EYg^KD+2=gVKE+lYg^Ky+2=gVq^kvRR^>ZVKx>v>y+=Yg^Kz+o=gvZvK^RgVZMvM^Z^qXkVqLvMe+^M^KVR2+l=g^Ry+=YgVKE+D=g^>vK^>dxqA^K^q^Mz+$YgvRy+2=g^>oKx>t^RZ^qVRxKNk^Ka^qC+xMvR^KD+D=gVKE+l=g^Ky+CYgV>ZvM^>^My+U=gxqG+CYg^KAVqxKvuXk^dC+VK~v>^K^>D+9=gx>G+DYg^Ky+9=gxM8+^K^M^>P+x>AVGGGjm^GGGSGK^KU+2YgvMy+DYg^KTkxK2+^>y+DYgVK|+vMw^RE+V>xRvMD+DYg^Kz+2YgvMV+^KVGGKV>E+2Yg^KA^>VKxMG+DYg^Kz+VK5vqy+oYg^Kux>vM^RXk^RnxK8+^M^K^RP+xRAVGGGjm^GGGSGK^KU+2YgvMy+lYg^Kfuv>2k^K^MVM2+EYg^MgDQAz+=YgvMy+=Yg^MRxMmAN^A^>9+xKvq^Mu^MrYOE+lYg^Ky+lYgVMMvM^M^qD+T=gxqG+DYg^Ky+T=gxMG+$Yg^>AVMx>vRe+^K^qV>2+XYg^>y+DYgVKDkvMF^My+UYgxKj+^KD+^>|+xMvq^KD+DYgVKE+XYg^KV+^KPGGKxMG+H2g^>AVMx>vMy+DYg^>N+x>$+^qy+H2gV>ZvR^>^MXkVM5vqe+^K^>VRs+vZZVGGGjm^GGGSGKVK2+XYg^Ky+lYgVMokv>g^MD+9YgxMON^Ay+DYgVKE+XYg^Mz+^M~x>r+^K^>^qU+2YgvRy+DYg^KP+xKocGK^qy+V2gVKZvR^K^MV+VMMocGGjm^GGGSGK^Ky+UYgxMj+^MC+^>z+s2gv>A^>^MVZDkvgC+^Me+VKxMvZD+DYg^Rz+2YgvMy+DYg^MN+xMw^>Q+^KV>xMX+DYg^My+UYgxKok^KVGGK^qz+H2gvMA^q^KVMs+v>ZVGGGjm^GGGSGKVKE+XYg^Mz+^Mnx>G+CYg^MAV>xMvZXk^RC+VM~vM^M^>D+UYgx>G+DYg^>y+UYgxKj+^KC+^ME+x>v>^qD+DYgVqE+XYg^K1^Kqx>I^>CNOy+UYgxKYK^KZ^GGGjm>x>F^>^qg9NOE+XYg^Kp^KVqVkvRgGX7GkP=gxKUkCUg8koUg$kCUgUk2Ug8k=UgCkxKX+CUg^KD+eUgKG+V=g^MZVMf1N^A^KD+vUgxKG+oUg^Ky+vUgx>E+^K^>^qdxqNT7y+V=g^RRxRm1J^My+>vgy+oUg^>skxZu^>R^RVMxZF^+^KD+8UgxKG+2Ug^K1VKHRv>u^MScOz+H=gvRZ^q4gGygv>r+g^>z+oUgvgxk^>RVZKvR^M^>pV+xKOSl7y+2UgVMAv>CcK^KuVKlPOG+CUg^MZVMf7Hyg^gr+dx>G+2Ug^Z6VZIvuHkCA^dVZjkvqR^Zy+8UgxZok^ZVK^dxkHRvu^Zxk^>ZxZu^M^g^>fx+vMgSl7y+8UgxKh^KCc$K^gOxgHVOy+2Ug^KH+xK$c=K^>p^>VgRvdDv7y+CUgVZMvg4dHygVdQ+t^>y+2UgVuBvA6^gHk^OxgvAxk^>RVuE+DUg^g6^gix7ok^7VK^gxkHRvd^uxk^>ZxuG+2Ug^uV+VusKvdHkCZ^gVujkvqu^uRVZxdvqp^+^KZNl7G+2Ug^gV+VgsG+vMXk^KBV>E+oUg^gZ^gBAp^dr+gVOE+2Ug^u2k^uZxuX+oUg^uxkVOKvAR^g^dVOJvk^KV+^KPG+xdy+^>^d^KNkHGGKvM^dD+=UgVdE+$Ug^dZ^dBqCrg^Ar+IV>E+lUg^u6^uv+xOok^OJ^uxkH7vA^Oxk^>qxOG+=Ug^u6VuBv7V+^OVKV7Gk$Z^7^uxkV>>vAy+=Ug^uWxua^IV+^IPKxOCKCZ^O^uskx>I^uy+=UgVOs+v7VK^uHk^Rxuv7xk^>OVOKvu^A^>pV+xKG+oUg^>2kV>>vqD+oUg^>ZNyO=+41vE+VuQ+O^>y+CUgVOjkvqR^OrkVux>vMoK^KxkVKfISSR^>9+r|7fdSsLR^qZ=y7QkSUgL^KRxKmd$ju^Mv+fLjK^>5VMx>vMu^KDy7v+fiXlO^MZVMf7xm^qZVqfJzNu^Rr+ZxMa^>Z^>Bq=ju^Zxk^MqxZu^q^R^Mfx+vML^M$+BuxK^Kxk^MBq=ju^KskxkVKf7rsd^qD+8$gxK6ooJeKXYJv+f7TM^KZVKf1Xvd^>ekVqKvM^>^qpV+xMh^Mg^>dx>ooJ9+Xj74>NsLu^MgyStlkHUgUkoDg8k$Dg$koDgUk=Dg8kDDg$k=DgUkXDg8kEDg$kXDgUkyDg8kSDg$kyDgUksDg8kHDg$ksDgUkC9g8ko9gv+fiXlO^MZVMfarPZ^dr+Zx>^k^>R4dQo1u^M^d^>fx+vMD+oDg^Kz+VUgvZZ^R4dDbvMxk^K4uojZmOGYuy+eDgxK^k^K4drjZf18SO$+4ODlOvqZ^>4gjmvZZ^R41Sxuvqr+g^Zz+VUgvRxk^ZRVqKvZ^>^ZpV+xK|+CCI4qrsL>vMgGNITk89gykl9g^K8kD9g$k=9gUkX9g8kE9gbVEIG+oDg^RZVRfIXb^Ky+Y9gxMYK^M4ZTvgx>^k^K47HTZx>G+oDg^MZVMffET1^>ekVqKv>^>^qpV+xKA^KR^>U+29gvqS+^Kfq>vqxk^K4gssLvqfRgV>jkvM4uvxkV>2+E9g^Ky+D9gVKRvMyEIy+l9gVKC+mA=^d^>Rx>m3NPg^gy+>vAy+oDg^Zskxuu^ZR^>VgxuF^+^RZVRfiPTZ^ZZVZft=81^Rr+dxg^k^gR4RDvg^k^gg4>NsLu^Z^R^gfx+vRD+X9g^qXkxq9+^Ru^RT9IE+N9g^dp9+Vq6vu^q^gpVgxRI^R$lIy+T9gxRF^R^qgQlIhug^gpVgxq^k^K4dPsLxqG+l9g^Ky+U9gxgA^g4uoxkxqX+E9g^q|kVqv+vZu^R$|Iz+l9gvRp9+^u0xqvA^gp^gVRRvZs|Iy+E9gVRJvZ^qg=EIaKO^Rp^RVqjkvM4uvxkVqE+E9g^KoK^KZXNI6Y+vk^KV+yku^KS+^KskxKmdVsLbskxKmuvxkbeKxK6Y+skD+vDgxK|+EzI4qrsL>vRgXcITk^9gyk2lg^Ky+olgVK8+vMR^MuVMorIG+olg^K|kVKfA=Th^>pV>xMI^MDcIy+8$gx>A^>4urSRxqc+g^Zy+elgxgA^g47CQgxu8k^dR^gVuxdF^+^RxkVZKvZR^>^qVZJvk^MZ^MBd8Qg^Rr+gVujkvARC+RVMxRvAp^+^KeKxK2KbD+2DgVqQ+L^Kxk^KqF^k^KgZxDxlx68QXCvQ+^k^KuZj8^lx6r8^9N8k^k^KOZzCvTx6$s|jeskX+=Dg^KS+VKjkvM4gcs7qjkvM4gT=AqP+vRxk^K4R8HkvRxk^K4ZeN1uD+DDg^Kz+$DgvMJ^K^>Rx>mAN^A^K8+xKu^g7^gvetJu^gZ^>VgxqX+lDg^qS+VZjkvg4glCOBMePuxk^Z4Rv$ImZPHuxkVZfAGNL4ZHHu2+NDg^Zy+$DgVdE+lDg^Ay+lDgVIMvO^I^iZViftzrg^Ar+ZxO^k^ORuqxivO^Op^+Vu$+vu^u^ZD+|DgxZG+EDg^uZVuf7VsL^dD+QDgxdG+EDg^ZZVZfIvxk^dD+zDgxdG+$Dg^uy+YDgxAG+lDg^IZVAxIvIvK^7Z^|jeQ6SHPyz5vOZ^A4A|rgvur+g^1skx1uuR^AVdx1F^+^O=+VuxOvgD+SDg^Zz+NDgvgZ^Z4gssLvuD+GDg^dz+NDgvgZ^Z4d^skvuD+sDg^dz+XDgvgs+^ZbVddvuND1y+GDgVuS+vAb^ZpVZxdi^dl91y+zDgxuV+^ub^OfxOvu7^d2l1z+SDgvgs+^ZbVuJvA^dD+HDgVdE+C9g^Zu^ZxX1E+XDg^ZZ^ZBMTHk^uZ^uBqCrg^7r+gVOE+NDg^Zxk^OqxZu^u^7^Ofx+vugXCt$+BZ$DI^dZ^dBZ9c7^7r+uVOE+NDg^Ixk^OqxIs+^1Z4>NsLmAECA^ty+RvJy+NDg^Jskxhu^Jxk^hZfuX8dR4>NsLvi^hp^+VLMvh4AECAVhQ+O^ty+GDgVJjkviR^JRVLxhvip^+^Iskx1mglCO^Iz+EDgv1y+sDg^t0xIvi^hu^hrc1MmqSsL4ulCAv3r+u^fz+oDgvby+yDg^aY+xpvf^3xk^fqx3^k^fg4q2T7u4qSsLVJxfF^+^hZVhf1ECA^Jr+Zx3G+2Dg^ay+cDgxpl+^a^p^fskx3u^fR^hVJx3F^+^tpVtxIOlH1Z4>NsLmAECA^Jy+Rvay+2Dg^pz+EDgvB=+^p^bVfjkvaR^fxkV3>mZ=$ZRBkssL^J^3pV+xtF^t^IxkV1fAY$I^Iy+cDgxIG+yDg^tykVIxtv3xk^14RyNLv3xk^OgV1Kvu^7^OpV+xZG+DDg^ZZVZfAUHk^7ZV7f7Hyg^1r+ZxZG+XDg^IxkVZKv1R^7^1VZJvk^O2k^gZxg<^g^K^OOxOsVIy+oDg^KdxKy$tBHvt$+BdNlO^qZ^qBq^m^gZ^gBOjNu^>r+gVqE+2Dg^Zxk^qqxZu^g^>^qfx+vMgl$tB2+^+vM^+GkRVKa9+S+^KD+PDgxKG+DDg^KZVKfAUHk^>JV>xKA^K4AQ^AxZD+^ZR^qOxqGDtpR^qRxKvR^>D+C9gV>E+XDg^OZ^OBMTHk^Iy+C9gV1Mv1^1^OZVOfAY$I^JD+e9gxJG+o9g^O|kVOfAPHu^IuVIsUtG+VDg^Oy+e9gxI^k^O^I38kxqO^qF^qVZxOi^ON2ty+UDgx>=+4ACDIVqMvR4dT|+VOQ+O^Zy+VDgVIjkvgR^IRVqxOvgp^+^KRxKmAN^A^Zskx>mg8N1^Zz+2DgvMy+DDg^>Rx>mZUHk^ORxOmAcV+^Iy+>vq9+2|t4>NsLO^tgDEtjkHlgvMy+CTg^KRxKmZGNL^M=+xMu^>oK^>skx>u^tR^OVIx>F^+^ZZVZf1N^A^>xkVKfOcs7^>y+UDgxZG+DDg^KZVKfAUHk^IZVIf1cV+^Kr+Zxt|+yzt4qrsL>vtgHytGk8TgxKG+2Tg^KZVKfAGNL^>s+V>fAPHu^KoKVKjkviR^1RVIxKvip^+^>Rx>mAN^A^KskxZmgT=A^Kz+2DgvMoK^KD+T$gxM|+ljt4qrsLKv>glEiTkUTgekETg8kXTgB8TiN+vMxk^K4Rvl7W$+4I$ehxMA^M47svdx>^k^K4Z8Vtx>=+4A=^dVMMv>43EDhV>jkvM4ZSTOV>jkvM4gGmpE+N$g^>i^>VMjkvM4grz7VM2+ETg^KD+XTgpC+mI8eh^MRxMmI$y1^>Rx>mu=$+^My+>vRw4JlsZfdSsL^ZxkVqKvgR^>^MVqJvk^Ku^KxUiE+ETg^Kxk^KBM9l73y+lTgVKMvM4grz7VqMvR4gcs7VKS+vMR^MuVMseiG+lTg^KZVKfOrz7^qZVqfOT=A^Ks+VKKvRp^q^MdxMSYiy+lTg^RRxRmZ2Vt^qRxqmOEQg^Ry+>vgxk^ZRB>XT+R^q^RVZJvk^KfRZxZC+^K^Z^gOxgEYiy+lTg^KRxKmZ2Vt^uRxumOEQg^Ky+>vgxk^ZRB>GVdR^u^KVZJvk^RfRZxKC+^R^K^dfxdvdp^g^MdxMCDiy+lTg^MRxMmgrz7^KRxKmg8N1^M=+xMO^Ku^KxUiE+ETg^Kxk^KB>Hm3D+XTgJN+vgy+XTg^RskxZmOzvu^Rz+=IvZZ^R47jDZvMr+g^gz+=TgvOxk^gRVAKvZ^K^gpV+xM^k^Z4go$IxM^k^Z4uEsL32K^Zg2Eibv+Yk^K^+GkqxKs+^Kxk^KBgjvuby+RVZMvg47eQgVgP+vuR^Z^gVdJvk^Mxk^KB>Y$I^Mxk^KBRrsL3oK^Kbv+VkD+E$g^MD+CQimqSsLgV>>o=hTkCXgGkeXgxKUk$Xg8k2Xg$k$Xg=+4dX=IVMMv>4glxOV>P+vRR^M^>VqJvk^KD+$XgVKN+vgD+2Xg^ZbCriG+oXg^>y+Pvgxql+^>^q^KOxKVyiS+^RpVRxKX+2Xg^Kg8Gia9+vk^K^+jkKvMS+^>xkV>ftzvuby+qxuA^u47CQgxq8k^RR^uVqxRF^+^KxkV>fOv$I^KxkV>fIQsL3D+8Xgx>6Y+BNzLCkxKX+=Xg^Ky+8XgxKA^K4go$Ixq=k^q^>|kV>f1VyI^KuVKEViG+2Xg^Ky+9IxqA^q4IsDZxRc+g^gy+8XgxZA^Z4go$Ixd^k^gR^dqxqvZ^gp^+V>jkvM4gv$IV>E+lXg^>Z^>BqCrg^Rr+gVZE+$$g^gZ^gB>j2h^dxk^Zqxdu^>^R^Zfx+vMy+2Xg^KRxKmOzvu^AvkxAvM|k^K4A=cRvZu^RVeLz+$XgvMZ^K4gGygvgr+g^Rz+HvgvdZ^g4ZzTuvOxk^RRVAKvM^Z^RpV+xdG+2Xg^RZVRfIQsL^g$kVgxRzk^R4O9cRxZI^Z=8Ly+YXgxgA^g4dxygxAc+g^Ry+^vgxdA^d4gGcuxO^k^RR^OqxgvO^Rp^+VZE+DXg^dh4dDrLvu^Ru^RUYLE+DXg^ZZ^ZBRNrL^O$+47zKvg5^O^ZV7JvI^Ru^Rc=LE+DXg^dZ^dBRNrL^A$k^AVZ9kvg4AHyRVdJvu^Ru^R^DLE+lXg^RZ^RBqCrg^Ar+gV7E+$$g^dZ^dB>G8k^Oxk^7qxOu^R^A^7fx+vgy+2Xg^ZRxZmuQsL^dc+xdb^Zu^Z^lLE+DXg^dZ^dBgjvu^As+^AJxOF^O^ZuVZo|LG+=Xg^AZVAf7Hyg^dr+ZxOG+C$g^tZVtfOxeZ^7xkVOKvIR^A^dVOJvk^Zy+=XgVZMvg4AN^AVd8+vuR^IuVIDzLG+2Xg^Zy+YXgxdA^d4dUGtxIc+g^OxkVOKmZ9^+RVdxIv7p^+^7skxZm7rcO^7z+oXgvgxk^Z4A|vuWy+2Xg^ZskxZmuQsL3ZGSL6Y+vk^ZV+yku^Zy+2XgVZE+u^IZ^IBd8Qg^tek^7qxIvi^7p^+VOjkvg47rcOVOE+DXg^Zxk^ZBgjvuby+2XgVtjkvi4uQsLJa9+y+2Xg^Zz+oXgv7Z^O4A|vuvtu^1=GLf>v7gXGLpqxO^k^Z4RjU1xOG+2Xg^Zy+8XgxOA^O4uEsLx7I^7osLpZxOO=sLpRVOjkvg4RTy1VOE+DXg^Oy+2XgV7MvI4gv$IV1jkv74Rl$7V1E+DXg^ZW^ZBgjvu^Oy+2XgVObv74uQsLV7E+DXg^7W^7B>Y$I^1y+2XgV1Mvt4RGU1Vtzkvi^Lu^LPVLE+DXg^1W^1BKHU1^iy+2XgVtMvi4RTy1VizkvL^Lu^LTChE+DXg^tW^tBKQy1^Ly+2XgVLMvh4Rl$7VhS+vJ4qSsLViRvL$ohy+2XgVibvL4Rl$7VhE+DXg^L$+4gD=Iv3Z^J4Z=xOvaek^fRVJx3vpp^+^hz+CXgvayk^h^3Vfjkvh4d$|gVfE+DXg^Ly+2XgVhMvJ4d$|gVajkvh4RGcuVaE+DXg^hW^hBq=|g^Ly+2XgVLMvh4RGcuV3S+vaR^LuVLEYhG+2Xg^LWVLfuGcu^ay+8Xgx32K^3D+N$gV>Y+s=h4qSsLZxMON|hTkE|gjkX|gvMy+N|g^KskxKmRHjggz+X|gvMZ^K4qyU1v>s+^M3VKdvMN9hy+N|gVMMv>4RGU1V>S+vqg^MpVMxKi^KGlhy+Q|gxMA^M4ONvux>V+^>3^MfxMvM7^KVThz+X|gvqZ^>4A|vuvRs+^qgVMJv>^Ku^KY|hE+o$g^Ky+o$gVMMv>4gY>V>jkvM4AYvkV>E+S|g^KoK^KU+E$gv>$+4dT=IxMA^M4g9xOxq8k^RR^MVqxRF^+^>D+r$gx>G+Vvg^>y+v$gxqA^q4gYzOxR^k^>4drjZxRG+Vvg^qy+e$gx>A^>4grX7xR^k^q4A2vkxRG+Vvg^>$+BZl^d^qZ^qBd^Uu^gZ^gBZHY+^qxk^>BM|M^qy+VvgVqjkvR4gD=uBW=e7y+oI^qdxqCjhy+Vvg^>z+V7vRxk^>4Z|c1vRy+Vvg^>z+E$gvZy+N$g^dz+l$gvd=+^d^gVZ$+vZ^Z^qxkV>ftzN+^qy+Pvgx>=+4dX=IVqMvR4glxOVZP+vdR^q^ZVgJvk^Ry+S$gVZEkvZ^Z^dxkV>f7$|g^dy+PvgxRA^R4A2vkxgG+o$g^>ZV>fOY>^RUkVgxRvqu^>X^hz+svgvqZ^>4gNjZvZy+$$g^>Rx>mgC|t^Z=kxRvg^gu^gzVhE+V7^>Z^>B>r9d^RD+$IVRE+E$g^Ry+VvgVZHkvZ^Z3^>ZseJ=+4dTMV>Mvq4AXvdVgP+vuR^>^gVdJvk^R1^RRy8^9r6P8^9N8k^Zu^ZPeJE+E$g^Ry+VvgVZHkvZ^Z3^gZDYJ6XYJvk^RV+yku^RBs2Jz+svgvZxk^R4dTsLby+Vvg^Zz+KvZZ^R4OPEgvuek^ARVRxdvOp^+^gskxZmIEYI^gz+svgvdy+R^ZRxZmuroI^dskxgmtVT1^dz+2$gvuy+Vvg^ZY+xdvg^ggDYJbv+Yk^Z^+GkqxZ6Y+BY+CKv+G+2$g^ZZVZf7rsd^uekVgKvg^u^gpV+xd2kBY+gQEJykDEg^K8k=Eg$k2EgA^k4AQ^AxKT+^Kg^MdxME9JZ^kgVKC+mIjK^q0xKvR^>p^>VMRv>$lJZ^kZxqF^q^KgUlJJW^KD+=EgVKC+mdTM^MRxMmAXvd^>Ckxqu^M^>^qfx+vMYk^KBV>2+XEg^>$+4I^JvM9+o|J4>NsLu^qgCEJz+2$gv>y+2Eg^>z+$EgvRCK^M^>VqxKVky+DEg^R^kxKvR^R^>skckP+v>R9+^KVMJvk^>9+GQJBkssLR^MgTHYuekHEg8ksEg8kxEgekoQg8kCQg8keQgek=Qg8k2Qg8kYQgekXQg8klQg8kTQgekyQg9+$c34>NsLI^KD+oQgVKY+ErJ4qSsLZxMX+$Qg^M9+PyYufdSsLg^KU+oQgvMgHr3GkjQgxKUksQg8kHQg$ksQgUkCNg8koNgRxkmAN^A^K=+xKO^Mu^M^jJMvKg^>$+BuxK^K5^>VKxqF^q^MuVMyGJA^kg^>fx>vMgVGJppxKX+sQg^Ky+9IxMA^M4IsDZxqc+g^>y+jQgxR^k^>R^RqxMvR^>p^+VK2+CNg^K$+47X^kvOy+HQg^uY+xAvA^OZ^OBgl81^ur+uV7<mge=Z4qvUgvOxk^7RVAjkvIg4RNygKv7^u^7pV+xdA^d4OY81xAc+u^uwB>eDt4RYUgVIjkvAR^IxkVu>mR9aRVdxAvAp^+^gRxgmO=81^uy+RvOw4gcDtfuYUg^IxkVAKv1xk^AgBKYuR^g^uVAJvk^ZZ^ZBgl81^7r+uVu<mgePk4qvUgvOxk^uRVAjkvAg4RHNOKvg^7^upV+xqA^q4OY81xIc+u^uwB>Qs+4RYUgV7jkvAR^7xkVu>mRso7RVqxIvAp^+^RRxRmO=81^Ay+RvAw4geZfuYUg^1xkVuKvtxk^ugBKQ$+R^R^AVuJvk^>Z^>Bgl81^ur+uV7<mg|Dg4qvUgv1xk^7RVIjkvIg4RHRKvq^u^7pV+xKX+HQg^Ky+eQgxAG+HQg^u~BRH^A4dCr7V7HkvO^u^7^KU+sQgvM$+4dyrdx7G+VQg^I=+V7xIvMD+CNg^Kv+ffDUO^KekV7QkvM^7^uD+eNgxuG+oNg^uZVuf7x$h^Ar+AxI^k^IR4g8$h^k^Ig4nNehG+sQg^7xkVIRvIR^u^AVIJvk^Ky+oNgVIMv143T~VKQ+I^7xk^7qf3VXkxk^7Zfe+=|gR^IVKx7F^+^Ay+eNgxKA^K4dQykx7c+g^1y+9IxiA^i4IsDZxLc+g^JS+VhE+$Ng^axk^hBqPQ+^axk^Jqxhu^i^L^Jfx+vixk^1RVtKvM^7^1pV+xAVkS+^KD+jEgxKs+^Kxk^KB>j2h4gGyOskxKmgjTu4ZDSO^k^K4gGcufOGcAxk^KB>G8k4gDruskxKmgxeZ4Z94X+sEg^Kg8vayklNg^KGkDNgVMekENg8kXNgD+9NgfdSsLD+XNgqE+NNg^Ky+=NgVMMv>4AN^AVq=+vM^q^MuVMGoaG+lNg^M$+BZx=g^KZ^KB7HlO^qr+gVRE+lNg^gZ^gBAp^dr+gVuE+NNg^Oxk^uqxOu^g^d^ufx+vgy+DNg^ARxAm1J^dy+>vAy+XNg^7z+2Ngv1Z^I4uX^AvtCk^7^1VIjkvAR^IRVAxdvAp^+^OE+xZv7^uxk^Rqxuu^K^q^Rfx+vq2k^M^>V>2+ENg^>y+XNgV>Jvq^M2k^>Zx>X+XNg^>gYs3E+ENg^RoK^Rr+xK^k^K4grX7fIGE7xk^KB>9>4uYChU+GEgvMS+^KxkVKfOUz14ZU9hjkvM4g=zOBM9zIxk^K4ZHXtmZ=cOD+PEgxKs+^K9+CYaBkssLR^Mg|QaUkGNgy+H7^MRxMmg=E1^>v+fLjK^KUkV>xKv>u^MS|az+G7vM$+47TlOx>A^>4LyPZxqc+g^RxkVRKmAoyZRV>xqvZp^+^MskxKmg=E1^Mz+G7vMZ^K4Z$E1v>Z^M4dDbvMxk^K4Ao^kmdyDky+x7xKA^K4gYE1xM^k^M4g$zdf3XYg$+4ODlOv>Z^M4gjmvRZ^q41Sxuv>r+g^Rz+G7vdZ^g4Z$E1vgxk^RRVZKvR^M^RpV+xKG+CQg^MZVMfOC|L^RekVZKv>^R^ZpV+xKG+H7^KZVKfO=E1^RoKVRjkvM4g=E1VMY+NNa4qSsLqxMOVjaTksNgz+G7v>Z^M4ZCPkvM$+4ISKx>Tk^K^>^MdxM=Say+H7^Kv+fiXlO^>ZV>farPZ^qr+ZxR^k^RR4u^ERu^>^q^Rfx+v>xk^K4ZCPkv>y+CQg^MRxMmgC|L^qCkxRu^M^q^Rfx+vMy+H7^KRxKmg$Pk^qeKxq^k^K4gvPkxM|+HGa4qrsLKv>gVYfTk^Ngek2zg8k$zgy+x7xKA^K4g2ytxM=+4IjKV>8kv>^>^KuVKC2fG+CQg^MZVMfO$Pk^>ekVqKv>^>^qpV+xKX+ozg^Ky+ezgx>A^>41y|uxqc+g^RxkVRKmAjNORV>xqvZp^+^KOxKE^ay+ozg^RRxRm1r|u^gy+>vuxk^dRBJcaR^R^gVdJvk^qp^qVKdvMDefy+ozgVZMvg41r|uVdQ+O^gxk^gqfIr9+R^ZVdxgF^+^qpVqxKi^K=vfy+ezgxgA^g41y|uxtc+g^AxkVAKmfzNhRVgxtvOp^+^qfxqvM7^K28fz+VNgvuZ^d4IQ|uvAr+g^AskxAu4IGCuqxdvA^Ap^+VqJvR^KD+$zgVKE+CI^Oy+$zgVKjkv74gYytVKE+$Qg^uZ^uB>$|L^Aek^IqxuvO^Ip^+VqE+CI^qZ^qB>9yt^KoK^KskxKmgYyt^MD+G=fmqSsLgVM>GPfTkNzgGkzzgxKUkSzg8kGzg$kSzg6XsfS+^Kr+xM^k^K4RjU1xM^k^K4uDDhKX+Szg^Ky+zzgxKp^K^MZVMf1N^A^>2+V>Kvg7^Z$SffKvgZ^M^ZVK2+Hzg^Ky+yzgVqE+Hzg^RZ^qVRxg=k^g^q|kVqf1Hzu^RuVRoXfOXrfy+yzgVgE+Hzg^qZ^gVqxRf4uXrLVRxqI^qXrfy+zzgxqG+Gzg^dZVqxdvdZ^g4dDrLvZ$k^R^qXkxqmAHyR^RdxRlQfgXrfy+rzgxqA^q4RjU1xRG+Gzg^qy+zzgxAG+Gzg^dZVAxdvdZ^g4dDrLvuxk^R^qVdE+szg^RZ^RBR|Dh^qy+yzgVgE+Hzg^uZ^gVuxdA^d4uTrLxgDk^q^g^gskxRmu9Dh^g8kxZO^ZF^ZV>xqi^q=lfy+rzgxKA^K4uDDhxMek^M=q^KU+SzgvMS+^Ky+czgxM^k^K4ONvuxMG+lI^MZVMfLxDZ^qr+ZxZG+Szg^RxkVZKvZR^M^qVZJvk^>xk^KB>Y$I^>xk^KBRrsLboK^KZDPf6Y+vk^>V+yku^>S+^KskxKmOzvubz+KvRZ^q4OPEgvZek^ZRVqxRvgp^+^>skxKmgv$I^>skxKmuQsL3eKxK6Y+skxkVKfO$1^M9+QVffdSsLg^>ZGU4Qk=ygGkDygVKekEyg8kXyg8k|ygekSyg8kyyg8krygekHyg8ksyg8kxygekorg8kCrg8kergek=rg8k2rg8kYrgekXrg8klrg8kTrgekyrg8kNrg8kzrgeksrg8kGrg8kcrgekCSg8kVrg8k^rgY+HTB4qSsLZxKX+Gyg^KD+9ygEkX+XygZXEDCjmVGGGsb2+yygZG$=sSm^GGG2C+U+XygAy9XUjm^GGGNHkD+zygs9XlzC+X+SygoylNv3y+UygxK=k^K^>s+V>f1VyI^KuVK$2pG+Gyg^My+Uygxql+^M^q^KfxKvqgy2py+UygxMF^M^>D+Uygx>G+Dyg^KD+cygxKG+lyg^Ky+rygxM8+^K^M^>P+x>AVGGGjm^GGGSGK^KU+GygvMD+VygRz+SygvMZ^K4uX^Av>P+^MC+V>RvqHUbr+IVKE+Eyg^>y+XygVq~vq^q^My+|ygx>8+^M^>^qP+xqAVGGGjm^GGGSGK^MskxKu^My+lygVME+yyg^>e+^MV>xRok^RZVGGGjmVGGGSGKxZ^k^Kg^Zz+=ygv>vK^MRV>s+vqZVGGGjm^GGGSGKVMjkvMu^My+9ygx>G+Xyg^MykV>xMvRV+^qZPGGGjmxGGGSGKv>xk^KOVM2+$rg^Ky+DygVM2+2rg^My+orgVMMv>4AN^AVKv+vMC+^MD+vrgxMX+2rgRD+PygKG+Vyg^KV+VKMocGGjm^GGGGjK^My+vrgxKPk^M^K^qdxq2oby+Vyg^MU+$rgv>y+org^Mz+$rgvqvK^>RVqMv>^q^Ky+ergxMG+=rg^qvKVq>vdZ^M^gV>Dkvqa^Me+VKxMvgD+Drg^Zz+VygvMy+=rg^ZoKxZI^RZ^KVRxMG+org^Ky+Yrgx>YK^>O^qRxKvR^ZXk^Z3xK8+^M^K^>U+=rgvqy+Drg^Kz+lygv>A^K^MV>E+Erg^Ky+EygVqZvM^q^MXkVM5vMe+^>^KVM2+Nrg^My+CrgVKE+Drg^MZ^KVMxqG+Xrg^Me+VqxMvMV+^KZPGGGjmxGGGSGKv>D+Erg^Mz+lrgvMXk^K<V>E+yrg^Kz+^K8+xMy+^>^M^KU+lrgvMy+Erg^MP+xMocGK^KD+NrgVKE+yrg^Mz+^MnxKX+yrg^Ky+^ygx>G+2rg^My+QrgxKG+Xyg^gAVKxgvRy+yrg^Rz+DygvMA^R^KVZDkvgC+^Re+VqxRvgV+^ZZPGGGjmxGGGSGKvRxk^>^MVqE+Drg^KvK^KZxMok^MO^KU+orgvMy+Vyg^MfuvM2k^M^KVK2+org^KgVEpz+HygvZZ^RRVKDkvMg^My+^ygxZA^ZR^KN+xKok^>E+^MV>xKG+Crg^>ZV>>vRXk^qJV>E+$rg^MZ^MZxZj+^ZN+^g|+x>vd^Me+^KVMx>G+Crg^KZVKRvZXk^R6VKE+$rg^qZ^qdxMj+^M=+^q|+xKvR^Me+^>VMxKG+Crg^MZVMgvqXk^>$+VqE+$rg^MZ^MAxgj+^g5^M|+xqv>^>e+^KV>xRok^RZVGGGjmVGGGSGKxKX+Hyg^Ky+xygxKG+Dyg^MZVMf1N^A^>e+VKx>vgV+^ZZPGGGjmxGGGSGKv>D+Hyg^Mz+2ygvMZ^K4uX^Av>Y+^MIV>2+srg^>y+VygVKE+srg^>ck^KV>xMI^MSsby+Pygx>X+Grg^>y+cygxKG+Grg^qvKVqKv>Z^K^MV>E+Vyg^My+GrgVK^kvMg^RZVMxRvRXk^qaVK~vq^K^MD+crgxMG+syg^Ky+jrgxMYK^Mu^>RxKvq^qy+sygVME+Hrg^>vK^>AxZA^M^Z^KTkxKB^Me+^qVMxKX+Hrg^Ky+crgxKG+Nyg^MAVKxMvqy+Hrg^Kz+Xygv>A^K^MVqDkvRC+^Ke+V>xKv>D+Vrg^Mz+GygvMy+Vrg^>C+xKvq^MV+^MRsGGGjmvcGGSGK^KD+HygVKE+Crg^KXk^Ke+xMG+Hyg^qz+Vq<vZE+^M^RVq2+Crg^qy+HygVKs+vMVGGK^My+zygxK1^M^K^>z+Gygv>z+^MC+VKE+Gyg^MA^KVMxqNk^qC+^KC+x>vM^qV+^qRsGGGjmvcGGSGK^KD+HygVKE+org^MpIV>okv>^>^>D+Pygx>OXlby+VygVME+Vyg^KZ^KBZS^A^>l+^MV>xKI^KsoBy+cygxKG+Vyg^>ZVKx>v>D+CSg^Mz+GygvMy+CSg^Mz+NygvqA^M^>Vq~vM^q^ZD+xygxZG+Hyg^KXkVKpv>y+Hyg^KN+xKX+^RE+^MVRxKX+Hyg^Ky+xygxKok^KVGGK^qz+DygvMA^q^KVME+Crg^Kz+^KnxZG+Xyg^>AVZx>vZXk^RC+VK~v>^K^>V+V>MocGGjm^GGGSGK^KD+xygxKG+Vyg^M2kVM>v>D+Vyg^MZNsbG+Hyg^Ky+xygxMj+^Mw^>E+xKvq^MD+HygVME+Crg^KV+^KPGGKx>G+Eyg^qAV>xqvMV+^KZPGGGjmxGGGSGKv>y+Hyg^KN+xK$+^>y+EygVKZvq^K^qXkVq5vMe+^M^KV>2+Crg^>y+HygVKE+Crg^Mz+^MmxRr+^K^R^>U+Gygvqy+Hyg^KP+xKocGK^>y+NygVKZvq^K^MV+VMMocGGjm^GGGSGK^Ky+xygxMj+^MC+^qz+XygvqA^q^>VZDkvgC+^Me+VKxMvRD+Hyg^qz+GygvMy+Hyg^MN+xM$+^>Q+^KV>xqX+Hyg^qy+xygxMh^MR^KdxK=TBy+Hyg^KoKxKA^GGGjmq^MfxMvqgETBy+xygxMF^M^>oKV>>CD4GkESg^K$kXSgUkySg8kSSg$kySgUksSgek^MU+XSgv>D+ySgRz+lSgv>Z^M4uX^AvMD+SSg^Kz+ESgvMy+SSg^M9+xKv>^>u^>Q=4E+ySg^KZ^KBAp^Mr+gVqE+GSg^Rxk^qqxRu^K^M^qfx+vqD+GSg^>z+ySgv>1^MCZV>RvqsyBy+NSgVqMvR4dHygV>Q+O^Ry+GSgVgjkvZR^gRVqx>vZp^+^MZSY4G+GSg^M1VMHGKvdu^gyGBz+XSgvqZ^>4gGygvZr+u^Zz+ySgvd6^gLVuGk$A^u^gxkVZKvdy+GSg^gP+xgoM^uHkCZVuxO^k^Zg^Oqx>vZ^Zp^+VM>VY4y+GSg^RIxR$c$K^M7^MxcBE+HSg^RP+^R^G=KxZF^Z^MuVMDVBG+NSg^RZVRf7Hyg^Zr+AxgG+GSg^d6VdBvAHkC7^uVAjkvdR^Ay+jSgxu5^uL^AP+xAoM^dHkCZVdxu^k^gg^uz+ySgvAV+^uVKVdGk$Z^d^AxkVgRvOR^R^ZVgJvk^MgsY4z+ySgvgV+^ZVG+VMDkv>B^Zy+|SgxgA^g41hxdc+g^uy+zSgxADk^Ag^AU+ESgvOxk^uRVAKvd^d^upV+xMok^MVG+^d|+xZvu^uzkCcGKVuxMX+sSg^My+QSgxMA^M4dxygxdc+I^uy+cSgxO5^O$+^7P+x7p^AHkCIVAxO^k^uR^Oz+SSgv76^O6VAs+vOVK^1Hk^Rx1v7xk^ugVOE+VSg^A6^AixIok^IVK^AxkHRvO^Oxk^udxOG+sSg^AV+VAsKv7HkCZ^OVIjkvAO^IRVMxdvAp^+^Zz+ESgvg2k^ZgVZ2+GSg^Zgs|Bv+fhvE+^ur+ZxAG+NSg^ZxkVAKvgrk^u^AVdVkvuxk^K4ZX8gvq9+sD44>NsLu^MgEE4lk$jgG+H7^KZVKfO=E1^quVqoX4=+47XlOVMMv>4dxmV>Mvq4tzNuVqQ+O^My+H7VRMvZ4g=E1VZjkv>R^ZRV>xqv>p^+^Kz+G7vMW^K4Z$E1v>y+H7^qFxqmg$Pk^Mz+G7v>W^M4ZvytvZy+H7^RFxRmgvQu^dckjkvM4gDHAVMY+NQ44qSsLqxMOsr4TkXjgz+G7v>Z^M4Z^EuvM$+4ISKxMC+^K^M^>dx>$y4$+4iPlLxMG+H7^>ZV>fOvQu^q=+VMxqvMy+H7^Kv+fhv3^My+^EgxRA^R4gUHAx>$K^M^>GSkVqjkvM4gvQuVqSk^k^K4g^XLxMX+CQg^KBU|YuY+2j44qSsLqxKOlyFTkSjg$kyjgUksjg8kHjg$ksjgs+^Kxk^KBK=SORxk^KBKelARxk^KBKD$IRD+GjgVKC+muX2Z^MCkxKck^M^K^>U+Sjgvq$+4A^UIxMA^M4hezLx>c+O^Ry+cjgxZ^k^RR^ZskxRO4uroIr+xq|+lH44qrsLKvggDV4TkeGgE+Hjg^KZ^KBK=SO^Mp^MVKokv>g^My+jjgxq^k^q4RvSOxM2K4qSsLskxqmgXDu^ZskxRI^qR^MV>xRF^+^K$+BZ$DI^>Z^>B12zL^qr+OVRE+Vjg^Zxk^RqxZ^k^Rg4g9Hus+^Z9+GeFBkssLR^ggrvFUkDGgy+Gjg^KRxKmRP9A^MfxMvM2k^MgVME+Hjg^>xk^>BKelA^MoK4>NsL^k^Z4gTDuxg^k^Ru^Zqx>vR^Rp^+VKC+mACDI^qRxqmhozL^Ky+gvZy+sjg^gskxRu^gxk^RZftxVkS+^gD+CYFmqSsLRVd>2UFTkDGgy+jjgxKA^K4R8$IxMF^M^K2kVM>v>y+Gjg^>skx>mR2$I^MeKfdSsLxk^gB>NDu^dxk^Rdxgu^q^K^Rfx+vg$+4O9XZxRA^R4gzKxZc+g^gy+cjgxu^k^gR^uqxRvg^gp^+VKE+Hjg^ZZ^ZBK=SO^KU+^KqxZI^ZHTFy+jjgxKA^K4RH9AxgT+^gR^KfxKvgu^Zo|Fz+yjgvuZ^d4qo$IvMU+^KRVgJvd^ZD+HjgVZE+CGg^Ku^KP|FJ=K^ggXEFv+fLjK^ZpVZxgX+Vjg^gS+VKE+CGg^gxk^KBgjvu^gy+lIVgMvd4IxDZVdQ+O^uy+GjgVOjkvAR^ORVgxdvAp^+^ZskxKmgv$I^Zz+sjgvuxk^K4dDrLvuxk^K4dTsLWoK^KD+YQgxK|+$rF4qrsLKv>gNs6TkzGgeksGg8kGGg8kcGgekCcg8kVGg8k^Ggek2cg8k$cg8k8cgeklcg8kDcg8k9cgN+vMxk^K4gCrImqSsLxkVKfAVzZ4qrsL2+sGg^Kek^KU+yGgvMek^>D+cGgx>=+4uX2ZVMP+vRrk^M^qVK2+Ccg^Kek^MRxMmAECA^qy+Rvqy+u^Rv+f1CDI^uZVufFQjt^Ar+ZxZ=+4uX2ZVOMv74IDNhV7jkvgR^7RVuxAvgp^+^dY+xRvu^gxk^>qxgG+u^Z$+BZ$DI^7Z^7BJrjt^Ar+gVdE+Ccg^Oxk^dqxOu^7^A^dfx+vd=+^Z^gVRjkvqg^RRVMxqvqp^+^KU+sGgvMy+C+^qz+sGgvZ=+^q^RVK2+$cg^KBlQWCKlzW|+HeW4qrsLKvMglTWTkQcgekGcgy+ocg^KRxKmu^1^MU+Ecgv>y+sGg^>Rx>mdHyg^My+>vRy+ycg^Rskxqu^RR^>VMxqF^+^K$+BZ$DI^qZ^qB12zL^Kr+OVRE+Ccg^Zxk^RqxZG+ycg^gxkVR>vdS+^d9+P2WfdSsLR^uZ$lWQkGcgy+ycgVKE+sGg^MT+^KVMxqxk^q^KuVKN=WG+SGg^Ky+zcgxM^k^K^MRz+NGgvMy+ycg^MRxKv>^>p^>VMokvqg^>y+rGgxqG+ycg^RxkVqxRvqy+GGg^KRxKmdHyg^qy+>vqy+ycg^Rskx>u^RR^KVqx>F^+^MoKBkssLxk^d4ZDDuvAxk^RuVdKvR^K^RpV+xMVkD+$cg^Kz+HGgvgZ^Z4qCSOvqek^qRVZx>vRp^+^Kz+HGgvRZ^q4qc9Avdek^ARVqxgvOp^+^>U+VGgvqZ^>4gSPdvdjk^g^>dx>lQWy+$cg^RtxRvdgSXWg|zWayzWvk^>^+jkKvqy+Ccg^RRxRmRTy1^>y+>vuy+R^Askxdu^AR^RV>xdF^+^gB2+Pk9+y+Ccg^gRxgmRNDt^dCkxOu^g^d^Ofx+vqokBY+z+RvO$+4A^UIxOA^O4pEjtxIc+g^t$+BZHSO^1xk^tqx1u^O^I^tfx+vu=+^A^dV>2+Dcg^>y+C+VIE+Dcg^A=+^IVAx>X+=cg^>BxT6Pk$E69+2cW4>NsLu^>gHU6lkVcgUk$sgy+DcgVKMvM4u^1VM2+=sg^MB2U6v+f1GSO^Ky+vsgx>A^K^>^MvkxMvMs+^K4uzRvRu^qoU6v+f1CDI^MZVMffozL^>r+AxqG+HGg^RxkVqKvZ$+4AjSOxRG+$sg^uZVRxuvuxk^qgVdN+vZ9+sVW4>NsLu^ggC26lk=sgG+$sg^KzkBM9z1^K^My+rGgxKQ+^M^K^>Skx>vMu^KDe6z+NGgv>y+$sg^KNkfAYz1^K^qskxMvRRy+SGgVKE+=sg^Rzk4Rvz1vZ^qZ^KVqxMF^M^K2kVM>v>y+SGg^>z+CsgvZzk4Z2z1xRvRxk^>^qVME+HGg^>Z^>BqCrg^Mr+gVqE+=sg^Rzk4Rvz1vZ^Zxk^qqxZu^>^M^qfx+vMoK4qrsLjkvZ4gXDuVgjkvRu^RRVMx>vRp^+^Kz+SGgvqZ^>4gGygvRr+g^Rz+Csgvgzk4Z2z1xZvuxk^RRVdKvq^q^RpV+xKOSU6BY+okxRvkGkR^Rbv+VkD+lcg^>z+$cgv1Z^I4qCSOvOek^dRVIxAvup^+^>z+$cgvOZ^A4qc9AvLek^tRVAxivip^+^dU+2cgvuZ^d4gSPdvLjk^i^ddxdHT6y+lcg^1tx1vug296g^|6a$E6vk^t^+jkKviy+=cg^tRxtmRTy1^iy+>vty+R^Jskx1u^JR^tVix1F^+^dB2+Pk9+y+=cg^dRxdmRNDt^iCkxLu^d^i^Lfx+vtokBY+v+ftlXZ^iZVifOyK^Jr+ZxLG+HGg^pxkVLKvbR^i^JVLJvk^1y+SGgVLE+HGg^JZ^JBqXGt^hr+gVajkvfR4REGLKv3^h^apV+x1^k^L4dvrIx1G+SGg^1y+cGgxhA^h4dUGtx3c+g^axkVaKmRQGLRVhx3vfp^+^Lskx1mZVzZ^Lr+x1^k^14ONvu3G+lI^fZVffLxDZ^Lr+Zx3G+SGg^pxkV3KvbR^f^LV3Jvk^axk^1B>Y$I^axk^1BRrsLboK^1U+2Qgv>9+Dx64>NsLO^KgCy2ulkEsgHkSsg^K8kjsgekVsg8kHsg$+BqN=I^KZ^KB>ExO^>ek^qqxKvq^qp^+VM2+Hsg^MS+^MU+Ssgv>BD^6y+rsgxgG+GEg^q=+Vgxqvq7^>C^6r+xMF^M^>D+csgx>OlomBY+okx>vkGkR^>r+x>^k^>4ONvu3G+R^qZVqfieQg^gekVRKvR^g^RpV+xM^k^>4go$IxM^k^>4uEsLiX+ssg^>B2+aHPmek^MD+xsgxMG+ssg^MZVMfOv$I^R$kVRxMzk^M4APyIx>I^>s=my+csgxMG+lI^RZVRfLxDZ^Zr+ZxgG+ssg^uZVufOv$I^dxkVgKvuR^R^ZVgJvk^>xk^MB>Y$I^>y+HsgV>Mvq4dHygVZQ+O^dy+sEgVgMvd4gz2hVujkvuR^uRV>xZvup^+^Mz+Ssgv>Z^M4A|vuvg$k^Z^MXkxMmOlcR^ZdxZ=lmy+Hsg^ZRxZmdHyg^gy+>vAy+sEg^dRxdmgjTu^Askxuu^AR^ZVgxuF^+^My+csgxuA^u4uEsLxM=k^M^g|kVgftlcR^MuVMD|mG+Hsg^gZVgf7Hyg^dr+ZxuG+sEg^AZVAfOccu^OxkVuKv7R^g^dVuJvk^My+ssgVM1muXrL^MVdRvuEQmy+ssgVMMv>4uXrLVuC+mIjK^M0xuv>^Ap^AVdRvuCzmy+ssgVuMvA4uXrLVMCkv>^u|k^uBZCrR^Mp^MVdRvu2rmy+HsgVdMvu4dHygVuQ+O^Ay+sEgVOMv74gy8kV1jkvOR^1RVdxuvOp^+^Mz+Ssgv>Z^M4dTsLvAs+^u3VMRv>2jmy+ssgVuMvA4OzvuVOS+v73^ApVAxMI^Mlcmy+xsgxuA^u4dxygxAc+g^Oy+cEgxIA^I4gseZx1^k^OR^1qxuvO^Op^+VME+Cxg^MZ^MBZS^A^AU+^AqxMI^MyPmy+csgxMG+Hsg^7ZV7f7DGt^Or+ZxI^k^IR4RY^+u^7^O^Ifx+vOxk^M4OQcOvOy+ssg^MskxMmOzvubz+Ssgv>xk^M4dTsLbgoe<B2+^+v>^+GkRVME+Vsg^My+RVIMv147eQgVAP+viR^I^AVtJvk^1xk^MBdccO^1y+ssgVMjkv>4OzvupE+Vsg^Mxk^MBRrsL3BY+z+Ssgv7y+ssg^ARxAmOzvu^MdxMNo<pg^AZEo<FR^AxkVOfuGU1^Ay+csgxMG+ssg^AZVAfIQsL^1uV1$$<Fg^AgT$<Ju^Axk^MBKQy1^Ay+ssgVME+Vsg^OZ^OB>Y$I^Axk^MBKE$7^Ay+ssgVMbv>4OzvuV1E+Vsg^AW^ABRrsL^1y+ssgVObv74gv$IV1E+Vsg^1Z^1BKHU1^tjk^tViRvL$U<y+ssgV1bvt4RGU1VtE+Vsg^LZ^LBKQy1^tjk^tViRvLyD<y+ssgVtbvi4RTy1ViE+Vsg^iZ^iBKE$7^Ls+^LBkssL^iu^i8X2uE+Vsg^iW^iBKE$7^LgojxkZsD2>OVj2KgyeekfY+vq5^M^>VRJvZ^Ku^KvX<E+sSk^Kp^KVM>NX<p4ZGVkxM2K^Mxk^Aqxuc+O^uy+jEkx7^k^uR^7z+SEkv7xk^ugVOE+CQk^Oxk^udxO^k^Ag^uskxAIDdy+DQkVIjkvOO^IRD+xdvOp^+^gskxZ<^gy+CQkVdQ+L^A9+HN<BkssLO^ugPS<yk$jk^KGkojkVMyk=jk^>8k2jkz+Cjkv>Z^M4qCSOvMZ^K4ZDDuvqD+2jk^>Xkx>9+^Ku^KPr<E+Djk^>p9+VM6vq^M^qpVqxKI^KyS<y+8jkxKF^K^MgcS<Ju^MoK^MskxAu^ur+OVuE+HEk^7xk^uqx7G+sEk^OxkVu>v7y+HEk^OskxuI^Oxk^AZxu^k^AuNdz+2QkvAxk^AOVuK|+^d^ApV+xg^k^Z6^gz+HEkvdr+I^dD+$x<mqSsLRVA>=V<y+oI^MvkxMvq|k^>4usyIvMu^KDH<eKv+G+oI^qZVqfISEg^Kr+dx>^k^>RRskx>OC1R^qVKx>F^+^MoKVMjkvuR^Ar+AxAG+GEk^7xkVAKvIy+sEk^7skxAO^7y+HEkVOjkvOu^OxkVd>vOxk^duUuE+XQk^Axk^dAxAu9+^g^dfx+vAxk^Z<VuE+$Qk^Ar+IVgY+No04qSsLAxOOE20GkSjkVKykHjk^MGksjkV>ekCGky+sjk^KRxKmR$SO^MRxMmADou^RU+GjkvZ|k^RY+VMRv>E80y+HjkVKJ|+^q5^KVqx>F^>^MuVMo20G+Hjk^MpVMxKOl20pRVKVkvMxk^gRVOQ+t^7y+GEkVujkvIR^uy+cEkxu^k^7g^uz+GEkvAxk^7uVujkvdg^7xkVgREuy+DQk^uskxgt^uR9+VAxgF^+^dxkVZ6vuy+CQk^gy+uvO9+sD04>NsLt^ugVl0jkoGkvMGk=Gk^Mjk2Gkvq8klGky+UGkxKA^K4ReSZxMX+lGk^My+9GkxKA^K4gso7xq2K^qxk^Aqxuc+O^uy+jEkxO^k^uR^Oz+SEkv7xk^ugVOE+CQk^Oxk^udxO^k^Ag^uskxAI$7y+DQkVujkvOO^uRD+xgvOp^+^dskxZo+^dy+CQkVdQ+L^u9+=Q0BkssLg^Ag|N0ykSGk^Ky+NGkVKMvM4g=E1V>Mvq4OH=AVKVkvMxk^uRVAQ+t^Ay+GEkVIjkvOR^Iy+cEkx7^k^Ag^7z+GEkv7xk^AuVOjkvAg^AxkVuRE7y+DQk^Askxut^AR9+VdxuF^+^gxkVZ5vdy+CQk^dy+uvO9+sS04>NsLt^ugVG0jkyGkvMGksGk^MjkGGkvq8kVGky+xGkxKA^K4Z8E1xMX+VGk^My+PGkxKA^K4gC1x>2K^>xk^Aqxuc+O^uy+jEkx7^k^uR^7z+SEkvIxk^ugV7E+CQk^Oxk^udxO^k^Ag^uskxAI$1y+DQkVujkvOO^uRD+xdvOp^+^gskxZ2+^gy+CQkVdQ+L^u9+=P0BkssLO^Agz^0yk=ck^KGk2ckVMyklck^>y+=ckVMMv>4R887V>Mvq4g$j+VKMvMO^>7V>l^0F4gCERV>Vkvqxk^uRVAQ+t^7y+GEkVAjkvIR^Ay+cEkxA^k^7g^Az+GEkvOxk^7uVAjkvAg^7xkVuRH1y+DQk^Oskxut^OR9+VdxuF^+^gxkVZC+vdy+CQk^gy+uvI9+Vv54>NsLt^ug$U5jklckvMGkNck^MjkEckvq8kScky+zckx>A^>4RjU1xRA^R4tl|RxMc+g^>xkV>Km<DPuRVRxMvqp^+^KU+NckvM|k^KY+V>RvqC=5y+SckVKJ|+^M5^KVMxqF^q^>uV>N=5G+Sck^>pV>xKOCU5p4RrVkvMoK^KxkV7KvAr+O^uz+yEkvuxk^uRVdE+VEk^dxk^uZxdG+HEk^dxkVuRvuxk^7gVujkvIuDty+UQkxu^k^7O^uqY+vd^7p^+VAjkvg2+^Ay+^Ekxuc+I^d9+TT5fdSsLO^IZ2Q5HkCsk^KGkeskxMHk$sk^>y+vskx>A^>4R$87xqA^q4gTsLxMA^M4urEgxZc+g^>fqOvRxk^>RVqKv>^Z^>pV+xKA^KR^ZOxZDQ5p4g^|RxZ2K^Zxk^dqxIc+O^Ay+jEkx7^k^AR^7z+SEkvIxk^AgV7E+CQk^Oxk^AdxO^k^dg^AskxdIGiy+DQkVAjkvuO^ARD+xuvup^+^gskxZl+^gy+CQkVdQ+L^u9+yr5BkssLg^AgYj5ykEsk^Ky+lskVKMvM4g=E1VMMv>4AljAVKMvM41$ckVMVkv>xk^uRVAQ+t^Oy+GEkVAjkv7R^Ay+cEkxA^k^Og^Az+GEkvIxk^OuV7jkvAg^OxkVuR$3y+DQk^Oskxut^OR9+VdxuF^+^gxkVZ2+vdy+CQk^Oy+uvu9+Nx54>NsLt^7gy^5jkXskvMGkysk^MjkNskvq8kGsky+rskxKA^K4RvSOxMA^M4OrEZxKX+Gsk^K|kVKv+v>u^MyV5z+yskvMp9+^>0xKvq^qp^qVMRv>D^5y+GskV>Jvq^KgE^5fKvMoK^KxkVdKvIr+O^Az+yEkvAxk^ARVuE+VEk^uxk^AZxuG+HEk^uxkVARvAxk^dgVAjkvuuo3y+UQkxu^k^dO^uqY+v7^dp^+Vgjkvgl+^gy+^Ekxgc+I^u9+Pv~fdSsLu^AZ$Y~Hkoxk^KGkvxkxMUk2xky+$xkVKMvM4grSOVM2+Dxk^My+2xkVMQ+t^>xk^>qf7yDkxk^>Zf3Yxtxk^>dftYYgCK^MBuc8h^>^KoKVKjkvAR^Ar+AxAG+GEk^OxkVAKv7y+sEk^OskxAO^Oy+HEkV7jkvOu^7xkVu>vOxk^uu|3E+XQk^Oxk^uAxOu9+^g^ufx+vuxk^ZX+VdjkvRR^ZRV>xRvRp^+^MRxMmdycA^qy+>vZ9+Xl~4>NsLu^ggGX~z+oQkvR$+4A^UIxRA^R4AYlLx>c+g^gy+UQkxZ^k^gR^ZqxRvq^gp^+VM$+vR^M^KoKVKjkvZR^gRVMxqvZp^+^KZsvwHklxk^K8kTxkekyxk8kNxk8kzxkeksxk8kGxk9+cr~fdSsLg^>U+lxkvqZ^k4uX^AvMU+^KgVMRv>VN~Z^kZx>=+4IjKVq6vq^q^KpVKxMI^MSz~ZVk>v>p^M^KZGz~FE=TrC>^KD+TxkxKG+lxk^MZVMfISEg^>r+ZxZ^k^ZRRqxMvq^Zp^+VK2+Sxk^Kg=x~jkHxkvM8koHk$+BqQM^MZ^MB>rDk^>r+gVqE+$Hk^Rp^RVgokvZg^RD+^xkxR^k^qR^gqxMvq^qp^+VKvkvMCDL^>D+eHkx>G+oHk^K$+BqQM^RZ^RBRjeu^qr+gVZE+2Hk^gxk^Zqxgu^R^q^Zfx+vqyk^K^>VZVkvgy+Nxk^KRxKmAN^A^>U+Exkvqy+yxk^KdxKGvw$+4dlMx>A^>4uNeuxRc+g^qy+|xkxZG+Xxk^d=+VZxdvdy+yxk^ZfxZvuf^ZgVZ2+Gxk^ZA^gVdxZ^k^qR^Zqx>vZ^qp^+VK2+Hxk^Ky+NxkVKE+Gxk^RZ^KVRxqX+Sxk^qy+QxkxKG+yxk^qy+QxkxRG+Gxk^gZVRxgvAxk^K^qVuE+Sxk^qy+GxkVKE+sxk^Zxk^qVKxZG+Xxk^KpZxqDk^K^q^qU+DxkvRgCH~y+QxkxK2K^KskxkVqKvgrk^M^qV>Vkvqxk^qJVZY+N8w4qSsLZxZOHj8+GkDHkVKekEHk8kXHk8k|HkekSHk8kyHky+UHkxKA^K4g^ohxRX+lHk^Ry+UHkxKA^K4gelLxMX+XHk^My+UHkxKA^K4g|sgxMX+EHk^My+UHkx>A^>4gDDuxKX+NHk^Ky+UHkxKA^K4gQvZxMX+yHk^MdVMQ+O^q9+HDwBkssLg^>gYj8+ykVHk^K8kHHk$ksHk|+so8+4qrsL>v>D+HHk^Mz+GHkv>y+NHk^>Y+xMvq^KD+VHkVKqvMZ^K4ZHeOvdr+g^qy+l+vgy+yHk^dy+uvA9+NXw4>NsLI^AgEEwjkoPkvMGk=Pk^M$k2PkG+=Pk^KZVKfO|DZ^MD+UPkxMG+DPk^K=+VKfmQ|A^MoKVMjkvAR^Ar+AxAG+lHk^OxkVAKv7y+XHk^OskxAO^Oy+EHkVOjkvOu^OxkVu>vOxk^uu8kE+oPk^Oxk^uAxOu9+^d^ufx+vZxk^ZRVRE+GHk^ur+IVdY+Vyw4qSsLZxAOoSwGkEPkVKE+yPk^KZ^KB>ssk^MZ^MBO2cL^KoK^Kskxdu^Ar+OVAE+EHk^7xk^Aqx7G+XHk^OxkVA>v7y+EHk^7skxAI^7xk^dZxA^k^duNkz+sHkvOxk^dOVAK|+^u^dpV+xR^k^Zg^Rz+EHkvZr+I^dD+=swmqSsLgVO>$HwGkSPk^Kz+NPkv>Z^M4Z$E1vqZ^>47eehvMZ^K4tGHAv>oK^MxkVdKv7r+O^Az+=HkvIxk^ARV7E+NHk^Oxk^AZxOG+EHk^OxkVARv7xk^dgVAjkvuuEKy+PHkxA^k^dO^AqY+vZ^dp^+Vujkvgu^uy+zHkxuc+I^R9+UCnfdSsLO^AZo$nHkHPk^KGkPPkxMHkCVk^>y+^PkxMA^M4R$87x>A^>4gTsLxMA^M4urEgx>c+g^qfqOvgxk^qRVZKv>^>^qpV+xKA^KI^qOxq2$np4g^|Rxq2K^qxk^RqxAc+O^Ay+9HkxO^k^AR^Oz+DHkv7xk^AgVOE+yHk^Oxk^AdxO^k^Rg^AskxRI$>y+VHkVAjkvZO^ARD+xuvZp^+^dskxZt^dy+yHkVRQ+L^d9+E=nBkssLO^OgQlnyklVk^KGkDVkVMykEVk^>8kXVkz+=VkvMZ^K4qCSOvZZ^R4dYzOvMD+XVk^KXkxK9+^Mu^MQ9nE+NVk^>p9+VK6vq^K^RpVRxMI^M=lny+TVkxMF^M^KgTlnJu^KoK^Kskxdu^Or+OVOE+EHk^Axk^OqxAG+XHk^AxkVO>vOy+EHk^AskxOI^Axk^dZxO^k^duHqz+sHkvOxk^dOVAK|+^R^dpV+xu^k^ZI^uz+EHkvur+I^AD+GEnmqSsLOVu>lznGkGVk^KjkSVkv>GkHVk^>z+GVkv>Z^M4qe87vMZ^K4ZDsLv>Z^MgV>dvq$znp4ZH|RvqoK^>xkVAKvAr+O^uz+=Hkv7xk^uRVOE+NHk^7xk^uZx7G+EHk^OxkVuRv7xk^AgVujkvOuoRy+PHkxu^k^AO^uqY+vu^Ap^+VRjkvgt^Ry+zHkxdc+I^u9+QjnfdSsLR^AZN^nUk$^k8k2^kv+f1jQ1^KZVKfpVS1^>r+Zxq=+4t$9AVRQ+O^Zxk^Zq>ck^R^Z^dskxqu^dR^KV>xqF^+^MZVMKvqD+$^k^>U+o^k$cGK$+4dlMx>A^>4uNeuxqc+g^R$+BqQM^gZ^gB>Q=u^dr+uVAE+=^k^uy+2^kVOfvA^O^7xkVAKvIxk^AgRxGGGS6dR^g^dVAJvk^Zy+2^kVdZvg^d^uxkVRKvAR^>^qVRJvk^MoK^Mskxuu^Ar+OVOE+EHk^7xk^Oqx7G+XHk^AxkVO>vOy+EHk^7skxOI^7xk^uZxO^k^uuDZz+sHkvOxk^uOVAK|+^d^upV+xR^k^ZL^Rz+EHkvur+I^uD+HvC+mqSsLOVA>DUC+Gkl^k^KjkD^kv>GkE^k^>$kX^kG+E^k^MZVMfuVGA^>ZV>fJT|R^Mr+Zxq^k^qR41T8Au^>^M^qfx+vMD+N^k^KXkxK9+^Mu^Me=C+E+S^k^Kp9+Vq6vM^q^RpVRxMI^MG=C+y+Q^kxMF^M^KgeUC+JmZcVk^KeKxK^k^uR^Ay+gvOy+lHk^OskxAu^Oy+XHkVOjkvOg^Oy+|HkxO^k^Au^OskxuO^Axk^udlZG+VHk^AxkVugvOR9+^dVuJvk^Rxk^ZhxRG+yHk^dr+7xu|+ETC+4qrsLgvOgy|C+Gkx^kxKHkV^k^MGk^^kx>UkoCKy+CCKVKMvM4RTy1VM2+2CK^My+oCKVKMvM4gQN1V>Vkvqxk^uRVAQ+t^Oy+lHkV7jkv7R^7y+THkxA^k^Og^Az+lHkvOxk^OuVAjkvAg^OxkVuRDgy+VHk^Askxut^AR9+VdxuF^+^RxkVZLvZy+yHk^Ry+uvu9+VzC+4>NsLt^AgCGC+jk$CKvMGkDCK^Mjk=CKvq8kXCKy+9CKxKA^K4RvSOxMA^M4dczdxKX+XCK^K|kVKv+vRu^qCjC+z+DCKvMp9+^>0xKvq^Mp^MVqRvRSjC+y+XCKV>Jvq^MgHjC+fKv>oK^MxkVdKvOr+O^Az+=Hkv7xk^ARVOE+NHk^Oxk^AZxOG+EHk^7xkVARvIxk^dgVAjkvuuDgy+PHkxO^k^dO^OqY+vZ^dp^+Vujkvgp^uy+zHkxdc+I^u9+UHC+fdSsLg^AZ2VC+HkGCK^Ky+jCKxMA^M4grskxKA^K47TlOxMA^M4teeKx>A^>4AQ^AxK2K^Kxk^uqxAc+O^Oy+9HkxA^k^OR^Az+DHkvOxk^OgVAE+yHk^Axk^OdxA^k^ug^OskxuIGgy+VHkVAjkvAO^ARD+xdvAp^+^RskxZ6^Ry+yHkVuQ+L^O9+yoe+BkssLg^RgT=e+ykoeK^K8kCeKU+HCKmLoQhy+PCKxKA^K4gYE1x>A^>47TlOxKA^K4dsmxMI^M$=e+ZBkssL4AECAVMQ+O^qy+VCKV>Mvq4g=E1VRMvZ47XlOV>Mvq4dxmVRMvZ4tcVZV>jkvRR^>RBkssL^M^qpV+xKX+CeK^Ky+^CKxK2K^Kxk^OqxRc+O^Ry+9Hkx7^k^RR^7z+DHkvOxk^RgVAE+yHk^Axk^RdxA^k^Og^RskxOICuy+VHkVAjkv7O^ARD+xuv7p^+^dskxZ<^dy+yHkVdQ+L^u9+Gle+BkssLO^AgzEe+ykleK^KGkDeKVMykEeK^>y+leKVMMv>4R887V>Mvq4gjctVqMvR4uSEgVMQ+O^RfR1x>^k^RR^>qxqv>^Rp^+VKMvMR^M7VMlEe+F4gCERVMVkv>xk^uRVAQ+t^7y+lHkVAjkvIR^Ay+THkxA^k^7g^Az+lHkv7xk^7uVOjkvAg^7xkVuR$Ay+VHk^Askxut^AR9+VdxuF^+^RxkVZBvZy+yHk^dy+uvA9+Vye+4>NsLu^Agloo+$kEeKUkSeK$+4gUjtv>Z^M4O2ytvqek^qRVMx>vRp^+^KU+EeKvMr+O^KskxKu4IosOskxKO4O8ZskxKI4uyQ+U+NeKvM$+4A^UIx>A^>4Or<xZc+g^gy+zeKxAA^A4J99hxu8k^7R^AVux7F^+^dxkVgKvuR^>^ZVgJvk^RZ^RBZPV+^Zr+gVuY+oHe+4qSsLZxgODVe+GkHeKVKE+seK^MZ^MBdUC+^>r+gVRE+CoK^qZ^qqxZ^k^RR^ZqxMvq^Rp^+VKzkvM^qoK^qskxuu^gR^RVZxuF^+^KZVKfOevu^Zr+Zxg|+$Co+4qrsL>vugNeo+GkeoKxKG+ooK^KZVKfieQg^>ekVqKvM^>^qpV+xM2K^Mxk^gqxdu^K^Z^gfx+vRoK^qxkVuKvOr+O^Az+=Hkv7xk^ARVOE+NHk^txk^AZxtG+EHk^OxkVARv7xk^ugVAjkvAu2Oy+PHkxA^k^uO^AqY+vu^up^+VRjkvg<^Ry+zHkxdc+I^u9+r2o+fdSsLg^AZ=Do+Hk=oK^K8kUoKE+loK^KZ^KB>lE1^MZ^MBt^YA^KD+DoKVK9kvMY+^MuVM=Uo+G+DoK^qpD+xKC+^q^K^>fx>v>u^MoDo+z+2oKv>p^M^KZ$Do+Fb^KoKVKjkvAR^Ar+AxAG+lHk^OxkVAKv7y+XHk^OskxAO^Oy+EHkVOjkvOu^OxkVu>vOxk^uurOE+oPk^Axk^uAxAu9+^d^ufx+vZxk^Z5VRE+GHk^Or+IVdY+sXo+4qSsLAxAONNo+GkyoKVKyksoK^MGkGoKV>E+HoK^>Z^>BKU87^MZ^MB>xct^>Z^>BRsEg^Mr+gVqhut^RxkVqKvZR^>^MVqJvk^KZ^KZxMi^MXNo+pB>$ER^MoK^Mskxdu^Ar+OVuE+EHk^Axk^uqxAG+XHk^AxkVu>vOy+EHk^AskxuI^Axk^dZxu^k^du2Iz+sHkvAxk^dOVuK|+^O^dpV+xR^k^Zw^Rz+EHkvAr+I^RD+GSo+mqSsLOVI>2Ho+GkCvK^KjkVoKv>Gk$vK^>$kovKG+$vK^MZVMfuGU1^>ZV>fJT|R^Mr+Zxq^k^qR4I$Yuu^>^M^qfx+vMD+2vK^KXkxK9+^Mu^MPso+E+DvK^qp9+VK6vR^K^RpVRxMI^Myxo+y+8vKxqF^q^KgPxo+JmZcVk^KeKxK^k^RR^Iy+gv7y+lHk^AskxOu^Ay+XHkV7jkv7g^7y+|HkxA^k^Ou^AskxRO^Oxk^RdV1G+VHk^OxkVRgv7R9+^uVRJvk^dxk^ZnxdG+yHk^Ar+7xO|+lCv+4qrsLgvugN8v+Gk|vKxKHkNvK^MGkzvKx>UkSvKy+yvKVMMv>4RVGAVqMvR4tT|RVMQ+O^>xk^>qfC+r=hR^qVMx>F^+^KD+rvKxKzk^KY+^MdxMN$v+y+SvK^RfY+vg5^R^ZVgJvd^Mu^Mv8v+E+svK^dp^dV>>N8v+p4ZGVkx>2K^>xk^Oqxdc+O^dy+9Hkxu^k^dR^uz+DHkvAxk^dgVuE+yHk^uxk^ddxu^k^Og^dskxOIGty+VHkVujkv7O^uRD+xAv7p^+^RskxZ2+^Ry+yHkVdQ+L^u9+HUv+BkssLg^OgYTv+yk$$K^Ky+C$KVMMv>4gSskV>Mvq47xUuVMMv>4dD9ZV>Mvq41o=kVMQ+I^qxk^qqflk$vOxk^qZf18MR^>VMxqF^+^KoKVKjkvAR^Or+AxAG+lHk^OxkVAKv7y+XHk^OskxAO^Oy+EHkVOjkvOu^OxkVu>vOxk^uuQLE+oPk^Axk^uAxAu9+^d^ufx+vZxk^Z$+VRE+GHk^ur+IVdY+SQv+4qSsLAxAOGSv+Gk2$KVKykl$K^MGkD$KV>ekE$Ky+D$K^>Rx>mRVGA^MRxMmtT|R^qy+>vqxk^>RBOXwR^M^qV>Jvk^KD+l$KVK9kvMY+^quVqErv+G+l$K^KpD+x>C+^K^>^gfxgvRu^qDSv+z+=$KvRp^q^KZESv+F4ZcVkVKVkvMxk^dRVAQ+t^Ay+lHkVOjkvOR^Oy+THkxO^k^Ag^Oz+lHkvIxk^AuV7jkvug^AxkVdRohy+VHk^Askxdt^AR9+VuxdF^+^RxkVZo+vZy+yHk^dy+uvA9+oxv+4>NsLt^AgoPv+jkN$KvMGkG$K^MjkS$Kvqy+s$K^KRxKmR$Eu^MRxMmg=E1^qRxqmgV$g^KeKxK^k^uR^Ay+gvOy+lHk^1skxAu^1y+XHkVOjkvOg^Oy+|Hkx7^k^Au^7skxuO^Axk^udSJG+VHk^AxkVugvOR9+^dVuJvk^Rxk^ZY+xRG+yHk^dr+7xO|+le$+4qrsL>vAgX8$+Gk^$KxKUko8Ky+C8KVKMvM4gSskVMMv>4I8ehVKMvM4JsvuVq2+28K^q|k^q2+xKI^KX$$+y+e8Kx>F9+^R5V>xRv>p^M^KdxK=8$+y+o8K^KfxKv>gD8$+p2+xM2K^Mxk^Oqxuc+O^uy+9HkxA^k^uR^Az+DHkvOxk^ugVAE+yHk^Axk^udxA^k^Og^uskxOIX3y+VHkVujkv7O^uRD+xdv7p^+^RskxZX+^Ry+yHkVdQ+L^u9+GU$+BkssLu^AgvN$+ykE8K^KGkX8KVMeky8K8kN8K8kz8Keks8Ky+X8K^MRxMmgyNO^KU+l8KvM$+4dlMxMA^M4uNeux>c+g^q$+BqN=I^ZZ^ZB>ExO^gek^uqxZvd^up^+VRxkvZCc2NPM^gxkVqKvdR^M^>VqJvk^KD+N8KVKE+y8K^Ky+N8KVq$+vM^q^>D+z8Kx>X+S8KCcGK$+BqQM^KZ^KBRjeu^Rr+gVgE+G8K^qi^qVAE+s8K^qA^AVqxu^k^gR^uqxKvZ^gp^+V>Vkvqxk^uRVAQ+t^Ay+lHkVOjkvOR^Oy+THkx7^k^Ag^7z+lHkv7xk^AuVOjkvAg^AxkVuRy3y+VHk^Askxut^AR9+VdxuF^+^RxkVZ=+vZy+yHk^uy+uvu9+XS$+4>NsLt^AgEs$+jkG8KvMGkV8K^MjkH8Kvq8ko2Ky+^8KxKA^K4RvSOxMA^M4dHGdx>X+o2K^>|kV>v+vMu^KEc$+z+V8Kv>p9+^>0xMvq^qp^qVKRvM2s$+y+o2KVMJv>^Rgls$+fKvZoK^RxkVdKvOr+O^Az+=Hkv7xk^ARVOE+NHk^7xk^AZx7G+EHk^7xkVARvIxk^dgVAjkvuuS3y+PHkxA^k^dO^AqY+vA^dp^+VRjkvgX+^RxkVqKvgR^K^gVqJvk^>Z^>BqGcA^Zr+gVqY+s^$+4qSsLqxdOCo8+y+sHkVMC+mACDI^qRxqmA=lL^Ry+>vgy+VHk^dskxZu^dR^qVRxZF^+^>=+VMx>vMoK^KxkVqKvuR^>^ZVqJvk^Mg2j8+jk=2KvM8kX2K8k|2KekS2K8ky2K8kr2KekH2K9+oU8+4>NsLO^KD+E2KVKMvK4AN^AVM8+v>g^>uV>o28+A^kg^Mv+fLjK^K5VMxKvZp^R^>dx>oY8+Z^kgVMJv>^Kg$Y8+fl=TrC>vMD+X2K^Kz+=2Kv>Z^M4dNEgvqr+g^qskxquRR^MV>xqF^+^KD+Q2KxKOEX8+GkCYKVKek2YK$+4dlMxMA^M4gEDkx>c+g^qy+^2KxZF^Z^R2kVZ>vgD+CYK^Zskxqu^RR^MV>xqF^+^KYkVKHULvqD+oYK^>z+V2Kvq$+4dlMxqA^q4uNeuxZc+g^Ry+eYKxg^k^RR^gqxqvg^Rp^+VKEkvq^K^RoKVRE+S2K^KZ^KBZS^A^>D+y2KV>E+G2K^Ku^KxS8+C+mdTM^>Rx>muzeu^qy+>vuy+E2K^Rz+D2Kvd=+^R^gVZE+G2K^Rp^RVghvZg^RD+z2KxR1^Z^g^Rskxdu^RR^>VqxdF^+^KD+j2KxKG+N2K^Ky+z2KxRA^K^R^qU+N2KvRy+N2K^Kz+E2Kvgy+N2K^qz+y2KvdZ^q^gVRjkvM^Z^Ry+Q2KxKG+G2K^Ry+r2Kxq^k^K^R^qz+D2KvMpg^q8kxKvR^qD+X2KVq>l|8+y+N2K^KeKxKVkxk^qRV>Qkv>^q^KoKVKjkvRa^Z9+rG8+fdSsLg^ZZ=Tl+HkDYK^K8k9YKekNYK8kEYK8kQYKekGYKy+DYK^KRxKmgCvh^MU+=YKv>y+DYK^MRxMmgolL^KU+DYKvMy+DYK^KRxKmgEsg^MU+lYKv>y+DYK^KRxKmg9Du^MU+XYKv>y+DYK^KRxKmgNvZ^MU+EYKv>d^Mr+Zx>|+$V8+4qrsL>vRgGll+GkcYKxKUkHYK8kVYKD+2G9+mqSsLgVK2+C=K^Ky+HYKVKE+SYK^>=+^KV>xMX+VYK^MdV>Mvq4gCoOVqQ+O^Rr+l+VZE+GYK^dr+IVuY+Ve2+4qSsLAxAOHD2+Gk2=KVKykl=K^MGkD=KV>ekE=K8kX=K8k|=KE+X=K^MZ^MBK^DA^KD+l=KVKE+E=K^KZ^KB>o9+^MD+X=KVME+E=K^KZ^KB>$|I^MD+E=KVME+N=K^Ku^Kj82+E+y=K^Mp^MVKRvMND2+y+X=KV>Mvq4iQSdVqQ+O^Ry+E=KVZS+vgY+^g7VgC=2+G+E=K^upD+x1Tk^u^1^ZfxZvdu^gs=2+fY+vdp^g^ZZXU2+G+E=K^gZVgf<DPk^upVuxZ^k^RR^Zqx>vR^Rp^+VKJvM^MgGD2+fv+v>oK^MxkVuKvOr+O^1z+=YKv7xk^1RVOE+NYK^Oxk^1ZxOG+EYK^AxkV1RvOxk^ugV1jkvAuS+y+PYKxA^k^uO^AqY+vu^up^+VgjkvgR^gy+zYKxgc+I^d9+8|2+fdSsLO^AZ$z2+HkV=K^KGk^=KxMHkoUK^>8kvUKE+2UK^KZ^KBK=SO^MZ^MBqv2h^>D+$UKV>9kvqY+^MuVM$N2+G+$UK^>pD+xKC+^>^K^qfxqv>u^MVN2+z+CUKv>p^M^KZCz2+FR^KoKVKjkvuR^Ar+AxAG+lYK^OxkVAKv7y+XYK^OskxAO^Oy+EYKVOjkvOu^OxkVd>vOxk^du9kE+o=K^Axk^dAxAu9+^g^dfx+vAxk^ZgVuE+GYK^ur+IVAY+Sj2+4qSsLdxOO=x2+GkXUKVKykyUK^M8kNUKz+lUKvMZ^K4ZYbv>D+NUK^Mz+XUKvMr+t^>skx>u41c91skx>ORxk^>dH6^k^>Ogskx>L4gcvIqY+vM^>p^+VMVkv>xk^ARVOQ+t^dy+lYKVOjkvuR^Oy+TYKxO^k^dg^Oz+lYKv7xk^duVOjkvOg^dxkVAR2Ky+VYK^dskxAt^dR9+VuxAF^+^gxkVZRvdy+yYK^dy+uvO9+N^2+4>NsLO^ug2eY+jkyUKvMy+GUK^KRxKmg=E1^MRxMmI8eh^KRxKm7yGu^MeKxM^k^AR^uy+gv7y+lYK^uskxOu^uy+XYKVujkv7g^uy+|YKxu^k^Ou^uskxAO^Oxk^AdCKG+VYK^OxkVAgv7R9+^dVAJvk^gxk^ZAxgG+yYK^Ar+7xd|+E8Y+4qrsLgv1gSDY+GkPUKxKHkCDK^MGkeDKx>Uk$DKy+oDKVMMv>4RVGAV>Mvq4tT|RVMQ+O^qxk^qqfp=viR^>VMxqF^+^KD+vDKxKzk^KY+^MdxMSUY+y+$DK^KfY+vR5^K^qVRJvZ^Mu^MYDY+E+=DK^Kp^KVR>SDY+p4ZGVkxR2K^Rxk^dqxIc+O^uy+9YKxO^k^uR^Oz+DYKv7xk^ugVOE+yYK^Oxk^udxO^k^dg^uskxdINKy+VYKVujkvuO^uRD+xAvup^+^gskxZL^gy+yYKVdQ+L^u9+C|Y+BkssLO^Og^EY+ykNDK^KGkEDKVMykSDK^>y+NDKVKMvM4R$EuVMMv>4g=E1VKMvM4gs9AVMVkv>xk^uRVOQ+t^Ay+lYKVOjkvOR^Oy+TYKxO^k^Ag^Oz+lYKvIxk^AuV7jkvAg^AxkVuR$My+VYK^Askxut^AR9+VdxuF^+^gxkVZOvdy+yYK^uy+uvI9+DrY+4>NsLO^AglcY+jkyDKvM8ksDKy+jDKxMA^M4grskxRA^R4I$ehxKA^K4hoekx>X+sDK^>|kV>v+v>u^MlGY+z+SDKvMp9+^>0xKvq^qp^qVMRv>ocY+y+sDKVqJvR^Kg=cY+fv+vMoK^KxkV7KvOr+O^dz+=YKv7xk^dRVOE+NYK^Axk^dZxAG+EYK^AxkVdRvOxk^7gVdjkvIuNMy+PYKxA^k^7O^AqY+vA^7p^+VgjkvgL^gy+zYKxdc+I^A9+rPY+fdSsLO^uZV^Y+Hk$9K^KGk89KxMHk=9K^>y+Y9KxKA^K4R$87xMA^M4g^Bx>A^>4AQ^AxKi^KV^Y+pqxK2K^Kxk^Aqxuc+O^uy+9YKxO^k^uR^Oz+DYKv7xk^ugVOE+yYK^7xk^udx7^k^Ag^uskxAIsMy+VYKVujkvOO^uRD+xdvOp^+^gskxZp^gy+yYKVdQ+L^u9+l$=+BkssLR^Og|l=+eky9K8kN9K8kz9Keks9KD+E9KRU+X9K=K$+4dlMxMA^M4ATvdxgA^g4dyjdxMc+g^>$+BqQM^Zxk^>qxZu^g^M^>fx+vMD+y9K^KU+N9Kuy+S9K^Mz+X9KvMl+^M^KVqRvRyD=+y+E9KVKE+G9K^qi^qVMokvM^M^MD+|9KxMG+S9K^MpZxKDk^M^K^KU+N9KvMgHY=+$+BqQM^KZ^KBRjeu^>r+gVRE+y9K^Zxk^RqxZu^K^>^Rfx+v>oK^MxkVuKv7r+O^Oz+=YKvOxk^ORVAE+NYK^Axk^OZxAG+EYK^7xkVORvIxk^ugVOjkvAuG>y+PYKxA^k^uO^AqY+vu^up^+Vgjkvga^gy+zYKxuc+I^A9+cE=+fdSsLO^OZHr=+HkV9K^KGk^9KxMHkolK^>8kvlKE+2lK^>Z^>BKocA^MZ^MBOQ|R^>r+gVZjkvgR4mQ|hKv>^>^ZpV+xKX+$lK^K|kVKv+vqu^>Hy=+z+ClKvMp9+^R0xKvZ^qp^qV>RvqNr=+y+$lKV>Jvq^KgHr=+ffAcVk^KoKVKjkvOR^Or+AxdG+lYK^OxkVdKv7y+XYK^OskxdO^Oy+EYKV1jkvuu^1xkVA>vuxk^Au|qE+o=K^dxk^AAxdu9+^u^Afx+vdxk^ZpVgE+GYK^dr+IVuY+Xs=+4qSsLdxOOCV=+GkXlKVKykylK^M8kNlKz+llKvMZ^K4ZYbv>D+NlK^Mz+XlKv>r+t^>skx>u4uvxkskx>ORxk^>dHlI^k^>Ogskx>L4ZXvgqY+v>^>p^+VKVkvMxk^uRVOQ+t^Ay+lYKV7jkvOR^7y+TYKx7^k^Ag^7z+lYKv7xk^AuVOjkvAg^AxkVuRHZy+VYK^Askxut^AR9+VdxuF^+^gxkVZavdy+yYK^gy+uvu9+DoU+4>NsLu^AgX=U+$kylKUkslKD+GlK^GGKC+mdTM^>Rx>mAXvd^MCkxRu^>^M^Rfx+vMD+slK^Kv+f7TM^MZVMfIzeu^qr+ZxR=+4dTMVZMvg4gT=uVuQ+I^gy+slKVAjkvdR^AxkVg>A^GGGS6qRVZxuvdp^+^dz+ylKvdA^d^gVujkvZR^uRVMxqvZp^+^KeKxK^k^dR^Ay+gvOy+lYK^OskxAu^Oy+XYKVOjkvOg^Oy+|YKxO^k^Au^OskxdO^Axk^ddlAG+VYK^OxkVdgv7R9+^gVdJvk^uxk^Z4xuG+yYK^ur+7xg|+GlU+4qrsLgvOgsEU+Gk^lKxKHkoTK^MGkvTKx>Uk2TKy+$TKVKMvM4R$SOVMMv>41zU7VK2+DTK^K|k^K2+xMI^Ms|U+y+8TKx>F9+^q5V>xqvMp^K^MdxMyEU+y+2TK^KfxKvqgSEU+pqx>2K^>xk^gqxAc+O^Oy+9YKxA^k^OR^Az+DYKvIxk^OgV7E+yYK^Axk^OdxA^k^gg^OskxgINAy+VYKVAjkvdO^ARD+xuvdp^+^dskxZ5^dy+yYKVdQ+L^u9+$rU+BkssLg^AgTjU+ykyTK^Ky+ETKVKMvM4gSskVMMv>4I8ehVKMvM41PsgVMRv>$jU+p3VK>XjU+pY+^KeKxK^k^uR^Ay+gvOy+lYK^7skxAu^7y+XYKVOjkvOg^Oy+|YKx7^k^Au^7skxuO^Axk^udXOG+VYK^AxkVugvOR9+^dVuJvk^gxk^ZmxgG+yYK^dr+7xu|+GxU+4qrsL>vOgCPU+GkjTKxKG+GTK^KZVKfOSsk^MZVMfhD|k^>oKV>jkvAR^Ar+AxAG+lYK^OxkVAKv7y+XYK^OskxAO^Oy+EYKVOjkvOu^OxkVu>vOxk^uucOE+o=K^Oxk^uAxOu9+^d^ufx+vdxk^Z5VgE+GYK^dr+IVuY+XeD+4qSsLZxOOs$D+GkVTKVKMmqSsL4ulCAv>r+g^>z+sTKvZZ^R4ZNskvdZ^g4ODlOvRZ^q4gjmvZZ^R4tVluvRxk^>RVqKmqSsL^MV>Jvk^KoK^Kskxuu^Or+OVAE+EYK^Oxk^AqxOG+XYK^OxkVA>v7y+EYK^OskxAI^Oxk^uZxA^k^uuVOz+sYKv7xk^uOVOK|+^d^upV+xg^k^Zw^gz+EYKvur+I^AD+CUD+mqSsLuVu>29D+Gk$XK^KjkoXKv>8k=XKy+8XKxKA^K4gXDZxMX+=XK^My+YXKxMl+^M4a8EIxK2K^Kxk^Aqxuc+O^uy+9YKxO^k^uR^Oz+DYKv7xk^ugVOE+yYK^Oxk^udxO^k^Ag^uskxAIN7y+VYKVOjkvOO^ORD+xdvOp^+^gskxZ$+^gy+yYKVdQ+L^A9+l|D+BkssLu^ugrND+ykNXK^KGkEXKVMekSXKy+EXK^>Rx>mgrSO^MU+XXKv>y+NXK^>y+gv>xk^MRBqGDkxk^MgBZ=9Zxk^MuBqUE7CK^>41c<v>^goK^gskxAu^ur+OVuE+EYK^Oxk^uqxOG+XYK^OxkVu>v7y+EYK^OskxuI^Oxk^AZxu^k^AuXIz+sYKvAxk^AOVuK|+^d^ApV+xg^k^Zo+^gz+EYKvur+I^uD+HSD+mqSsLOVA>=cD+GkGXK^KjkSXKv>GkHXK^>$ksXKG+HXK^MZVMfuoSZ^KD+PXKxKG+VXK^KZVKfO2$d^MoKVMjkvAR^Ar+AxAG+lYK^IxkVAKv1y+XYK^OskxAO^Oy+EYKVOjkvOu^OxkVu>vOxk^uuUtE+o=K^Axk^uAxAu9+^d^ufx+vdxk^Z$+VgE+GYK^dr+IVuY+NPD+4qSsLdxAOs^D+Gk$|KVKykD|K^M8k=|Kz+o|KvMZ^K4ZDY1v>D+=|K^Mz+$|KvMy+$|K^>Rx>mg=E1^qY+xKvR^MoK^Mskxuu^Ar+OVAE+EYK^Oxk^AqxOG+XYK^OxkVA>v7y+EYK^IskxAI^Ixk^uZxA^k^uu=Lz+sYKvOxk^uOVAK|+^d^upV+xg^k^Z2+^gz+EYKvdr+I^uD+C$9+mqSsLOVA>y29+GkX|K^Kjkl|Kv>GkN|K^>z+X|KvMZ^K4qe87vRZ^q4ZHBvMZ^KuV>dvql29+p4ZH|RvqoK^>xkVuKvOr+O^Oz+=YKvOxk^ORVAE+NYK^Axk^OZxAG+EYK^AxkVORvOxk^ugVOjkvAuDLy+PYKxO^k^uO^OqY+vd^up^+Vdjkvg=+^dy+zYKxgc+I^u9+cD9+fdSsLO^OZH|9+Hks|K^KGkx|KxMHkV|K^>8k^|KE+oEK^MZ^MBKHU1^qZ^qBOQ|R^Mr+gVRjkvZR4wTc+KvR^M^RpV+xKX+CEK^K|kVKv+v>u^MHX9+z+H|Kvqp9+^K0x>vM^Rp^RVMRv>N|9+y+CEKVMJv>^KgH|9+ffAcVk^KoKVKjkvAR^Or+AxAG+lYK^IxkVAKv1y+XYK^OskxAO^Oy+EYKVOjkvOu^OxkVu>vOxk^uuYJE+o=K^Axk^uAxAu9+^g^ufx+vuxk^ZD+VdjkvZR^ZRV>xqvZp^+^MRxMmdycA^qy+>vZ9+2r9+4>NsLu^ZgEj9+z+SYKv>$+4A^UIxqA^q4AYlLxRc+g^Zy+PYKxg^k^ZR^gqxqvZ^Zp^+V>$+v>^>^KoKVKjkvZR^ZRVMxqvZp^+^KZNll+HkDEK^K8k9EKekNEK8kEEK8kQEKekGEK8kSEK9+QV9+fdSsLg^MU+DEKv>Z^k4uX^AvMU+^KgV>RvqSx9+Z^kZxq=+4IjKVK6vR^K^MpVMx>I^>XH9+ZVk>vMp^K^MZEH9+FE=TrC>^MD+9EKxMG+DEK^MZVMfISEg^qr+ZxR^k^RRRqxMvR^Rp^+VK2+yEK^KgC$l+jksEKvM8kCQK$+BqQM^qZ^qB>rDk^Mr+gV>E+oQK^Zp^ZVRokvgg^ZD+PEKxZ^k^>R^Rqxqv>^>p^+VKvkvMCDL^RD+^EKxRG+CQK^K$+BqQM^>Z^>BRjeu^Rr+gVgE+$QK^dxk^gqxdu^>^R^gfx+v>yk^K^MVZVkvgy+EEK^KRxKmAN^A^>U+XEKvqy+NEK^KdxKEll+$+4dlMxqA^q4uNeux>c+g^Ry+TEKxgG+lEK^d=+Vgxdvgy+NEK^dfxdvdf^dgVd2+SEK^dA^ZVgxd^k^RR^dqxqvq^Rp^+VK2+sEK^Ky+EEKVKE+SEK^>Z^KV>xRX+yEK^Ry+|EKx>G+NEK^Ky+|EKxRG+SEK^dZVRxdvgxk^>^KVZE+yEK^Ky+SEKV>E+GEK^Rxk^KV>xRG+lEK^KpZxdDk^K^d^dU+=EKvugG$l+y+|EKx>2K^>skxkV>KvRrk^M^>VKVkvMxk^qpVZY+DXl+4qSsLZxgOlc$MGk=QKVKekXQK8klQK8kTQKekyQK8kNQKy+YQKxKA^K4g^ohxMX+DQK^My+YQKxKA^K4gelLxMX+lQK^My+YQKx>A^>4g|sgxKX+XQK^Ky+YQKxqA^q4gDDuxKX+EQK^Ky+YQKxMA^M4gQvZxKX+NQK^KdVMQ+O^R9+yzl+BkssLg^ZgjG$MykHQK^K8ksQK$kGQK|+D$$M4qrsL>vMD+sQK^Kz+SQKvqy+EQK^KY+x>vM^MD+HQKVMqvZZ^R4ZHeOvMr+g^qy+2+vgy+NQK^dy+uvA9+Djl+4>NsLt^Ag2xl+jkCNKvMGk2NK^Mjk$NKvqy+=NK^MRxMmR887^>Rx>mgXsL^MRxMmuSEg^Ry+>vgfRtV>jkvgR^>RVMxRvgp^+^KRxKO^>7^>exl+JmgCER^>eKx>^k^uR^Ay+gvIy+DQK^1skx7u^1y+lQKVAjkvIg^Ay+TQKxA^k^7u^AskxuO^7xk^udSkG+HQK^OxkVugv7R9+^dVuJvk^gxk^ZqxgG+NQK^ur+7xd|+E^l+4qrsLgvIgNvT+Gk|NKxKHkNNK^MGkzNKx>UkSNKy+yNKVKMvM4R$SOVMMv>4A2jZVK2+sNK^K|k^K2+xMI^MNoT+y+rNKxKF9+^>5VKx>vRp^q^MdxMlvT+y+SNK^KfxKvqgXvT+pqx>2K^>xk^dqx7c+O^Ay+UQKxO^k^AR^Oz+=QKv7xk^AgVOE+NQK^1xk^Adx1^k^dg^AskxdISMy+HQKVAjkvuO^ARD+xuvup^+^gskxZO^gy+NQKVdQ+L^O9+HYT+BkssLu^ugcDT+yk$zK^KGkozKVMek=zKy+ozK^MRxMmgrSO^>U+CzKvqy+$zK^My+Rvqxk^>RBqGDkxk^>gBZEPLCK^M4hyXhvq^KoK^KskxOu^ur+OVuE+XQK^Axk^uqxAG+lQK^AxkVu>vOy+XQK^AskxuI^Axk^OZxu^k^OuVMz+GQKvAxk^OOVuK|+^d^OpV+xg^k^Zu^gz+XQKvdr+I^uD+C|T+mqSsLOV7>DzT+GkDzK^Kjk=zKv>GkXzK^>$klzKG+XzK^KZVKfu$SO^MZVMfOvl1^KD+|zKxKzk^KY+^>dx>DNT+y+EzK^KfY+v>5^K^MVqJvR^>u^>xNT+E+yzK^Mp^MVK>2zT+pR^KeKxK^k^uR^7y+gvOy+DQK^OskxAu^Oy+lQKV7jkvOg^7y+TQKxO^k^Au^OskxuO^Axk^udyqG+HQK^OxkVugv7R9+^gVuJvk^dxk^ZAxdG+NQK^Ar+7xd|+EjT+4qrsL>vAg$cT+GkczKxKG+szK^MZVMfOSsk^KZVKf1ljA^MZVMfh$ck^KoKVKjkvuR^ur+AxuG+DQK^7xkVuKvIy+lQK^7skxuO^7y+XQKVOjkvAu^OxkVd>vAxk^duxqE+CNK^Oxk^dAxOu9+^A^dfx+vdxk^ZIVgE+SQK^ur+IVdY+NPT+4qSsLAxAON^T+GkCyKVKyk2yK^MGk$yKV>ekDyKy+$yK^KRxKmRoSZ^>U+oyKvqy+2yK^KRxKmgzCK^MeKxM^k^dR^Ay+gvOy+DQK^7skxAu^7y+lQKV7jkvOg^7y+TQKxO^k^Au^OskxdO^Axk^dd2RG+HQK^AxkVdgvOR9+^uVdJvk^gxk^Z1xgG+NQK^ur+7xg|+HvX+4qrsLgvOgoUX+Gk9yKxKHkXyK^MGk|yKx>UkNyKy+EyKVKMvM4RVGAVqMvR4tT|RVKQ+O^Mxk^MqfJ29dR^qVKxMF^+^>D+QyKx>zk^>Y+^KdxKo=X+y+NyK^MfY+vq5^M^>VRJvZ^Ku^Kz=X+E+SyK^Kp^KVM>oUX+p4ZGVkxM2K^Mxk^gqxAc+O^Oy+UQKx7^k^OR^7z+=QKv1xk^OgVIE+NQK^Axk^OdxA^k^gg^OskxgIlRy+HQKVOjkvdO^ORD+xuvdp^+^dskxZa^dy+NQKVAQ+L^d9+lTX+BkssLO^ugYQX+ykCrK^KGkVyKVMyk$rK^>y+CrKVqMvR4R887VMMv>4gC4V>Mvq4uSEgVRQ+O^MfR1xg^k^MR^gqx>vZ^Mp^+VKMvMI^M7VMCQX+F4gCERVMVkv>xk^dRVuQ+t^Oy+DQKV7jkv7R^7y+9QKxu^k^Og^uz+DQKvIxk^OuV7jkvug^OxkVdR=Zy+HQK^uskxdt^uR9+VAxdF^+^gxkVZtvdy+NQK^gy+uvI9+NrX+4>NsLI^ugVjX+jk$rKvMGkDrK^M$k=rKG+DrK^>ZV>fOoxZ^KD+9rKxKG+lrK^Ky+YrKxqA^q4grskxZl+^K^Z^>eKx>^k^7R^uy+gvAy+DQK^Oskxuu^Oy+lQKVOjkvAg^Oy+TQKxA^k^uu^Askx7O^uxk^7dGZG+HQK^OxkV7gv7R9+^gV7Jvk^dxk^Z3xdG+NQK^dr+7xI|+=HX+4qrsLRvigV^X+GkQrKxKHkyrK^M8krrKE+GrK^KZ^KB>|b^>D+SrKV>E+srK^Kr+tV>jkvqR4teYhjkvqgRxkV>RBxk^>OqjkvqI4qrsLK|+^K^>pV+xM2K^Mxk^Iqxtc+O^uy+UQKxA^k^uR^Az+=QKv7xk^ugVOE+NQK^Axk^udxA^k^Ig^uskxII2uy+HQKVAjkv1O^ARD+xdv1p^+^gskxZF^gy+NQKVdQ+L^u9+=$|+BkssLO^OgU=|+ykCSK^KGkVrKVMyk$SK^>8koSKz+HrKvMZ^K4qCSOvqZ^>4dsvkvMD+oSK^KXkxK9+^>u^>UY|+E+2SK^Kp9+VM6vM^M^qpVqx>I^>C=|+y+eSKxMF^M^qg8=|+Ju^qoK^qskxuu^Or+OVAE+XQK^Oxk^AqxOG+lQK^OxkVA>v7y+XQK^OskxAI^Oxk^uZxA^k^uuGOz+GQKvOxk^uOVAK|+^d^upV+xg^k^ZB^gz+XQKvAr+I^gD+El|+mqSsLOVA>sE|+GklSK^KjkDSKv>GkESK^>$kXSKG+ESK^KZVKfu$SO^MZVMfhvsZ^KD+QSKxKzk^KY+^MdxMs||+y+NSK^>fY+vM5^>^KVqJvR^Mu^M9E|+E+SSK^qp^qVK>SE|+pR^KeKxK^k^gR^Ay+gvOy+DQK^OskxAu^Oy+lQKVOjkvOg^Oy+TQKxO^k^Au^OskxgO^Axk^gd=1G+HQK^AxkVggvOR9+^uVgJvk^dxk^Z4xdG+NQK^ur+7xg|+Cr|+4qrsL>vugyS|+GkxSKxKG+HSK^qZVqfO=E1^KZVKf1ljA^>ZV>fhsyL^KoKVKjkvdR^dr+Ax7G+DQK^dxkV7Kvuy+lQK^dskx7O^dy+XQKVdjkvIu^dxkVg>vIxk^gu|1E+CNK^dxk^gAxdu9+^u^gfx+vOxk^Z6VAE+SQK^dr+IVuY+ox|+4qSsLAxOOC^|+GkojKVKyk=jK^MGk2jKV>ekljKy+2jK^KRxKmR$SO^MRxMmu=e+^qU+$jKvR|k^qY+VKRvMCV|+y+=jKVMJ|+^q5^MVqxRF^R^KuVKNV|+G+=jK^KpVKxMOHV|+pRVMVkv>xk^uRVOQ+t^Ay+DQKVOjkvOR^Oy+9QKxO^k^Ag^Oz+DQKv7xk^AuVOjkvAg^AxkVuRs1y+HQK^Askxut^AR9+VdxuOS^TkgNP2KZGN=qOEvoMp^+VMjkvR4RVGAVME+HDu^>Z^>BZ^Eg^qZ^qBd8Qg^>ek^gqxqvq^gp^+VMC+mI8eh^uz+C9uvqZ^u^>VdMvu47eQgV>P+vAR^d^>VuJvk^g5^MVgx>I^>s2E+D+cDuiG+C9u^MpVMxgDk^Mg^MU+HDuv>gs$sdS+V>E+VDu^gxk^>Bgjvu^gy+lIVMMv>4IxDZVgQ+O^Ay+HDuVOjkvOR^ORVMxgvOp^+^uskx>mgv$I^uskx>muQsLbeKx>X+yCd^K9+r9E+fdSsLR^KZHoQ+Qkl9u8kX9u$kl9uUkN9uS+^KskxKmOzvubCkxM^k^K4go$IxM^k^K4uEsL3X+X9u^KB8PE+C+m7XlO^>Rx>m3Evg^My+>vRxk^qRBZ8PtR^>^MVqJvk^KD+E9uVK2+S9uRy+N9uVME+y9u^KZ^KBZS^A^ql+^MVqxKI^K2sE+y+|9uxMG+N9u^RZVMxRvRZ^q4Zezdv>Z^M4OeC+vRr+g^RskxRu4LD1qxMvR^Rp^+VKdvM=SE+y+E9uVRE+S9u^gZ^RVgxZA^Z4g$zdxgA^g47$C+xRc+g^dxkVdKm3cU1RVgxRvup^+^qfxqvMu^K=cE+z+D9uvRZ^q4Z^vIvZZ^R4gGygvRr+g^Zz+l9uvuy+N9u^uRxdvA^AZ^AB>Uzd^dxk^Zqxdu^R^q^Zfx+vMy+N9u^KfxKvg2k^KgVK2+S9u^KgV|E+z+D9uvRy+lI^KRxKmIxDZ^uy+>vOy+X9u^dRxdmgv$I^OskxAu^OR^KVuxAF^+^ZxkVqfOv$I^Zy+T9uxZ2K^ZgsoQ+bv+Yk^q^+GkqxqG+X9u^AxkVAfIQsL3y+T9uxqG+R^dZVdfieQg^uekVAKvu^u^ApV+xZ^k^q4AQHgxZG+X9u^uy+9IxZA^Z4IsDZxqc+g^Oy+T9ux7A^74go$IxI^k^OR^IqxZvR^Op^+VAjkvA4gv$IVAE+N9u^qoK^qbv+VkD+SCd^KD+yvQ+mqSsLRVK>DlN+TkV9u8k^9uek2lu8k$lu8k8luekllu8kDlu8k9luekNlu8kEluekV>2+$lu^>$+4ODlOvRZ^q4pSQgvqr+g^ZskxZu4AePtqxqvq^Zp^+VK2+2lu^KD+$lupE+$+^My+oluVR$+v>^R^KD+8luxK6D8N+eKXYN+z+oluvgZ^Z4qCSOvMek^RRVZxKvZp^+^Mz+oluvdZ^g4qc9AvMek^ARVgxKvOp^+^>U+$luvqZ^>4gSPdvujk^d^KdxKD8N+y+=lu^KRxKmu^1^>U+2luvqy+Dlu^RRxRmg8zd^KU+=luvMy+llu^>Rx>mOEQg^Ry+>vuxk^dRB$k=vOR^>^RVdJvk^KfRZxRC+^K^R^ddxdy|Q+go8N+y+9luxdV+^d4qrsLxRI^RENQ+y+UluxKA^K4IjouxRA^R4AYyZxKc+u^AxkVAKuxk^AgzIKvZ^K^ApV+xdX+llu^dD+Tlu36CSQ+$+4Z|r+vAr+g^Az+2luvIZ^74AP$gvMxk^ARVKQkvA^A^dD+|luxdG+Elu^KZVKfiG9O^us+VufL2yI^KuVKGrQ+X+Xlu3g^GQ+aX8N+vk^K^+jkKvMy+Dlu^KRxKmOe8g^ARxAmdPsO^Ky+>vAw4Fx8AfuYUg^7xkVuKvIR^A^KVuJvk^dD+XluVdaX8N+y+Dlu^dRxdmOe8g^uRxumOEQg^dy+>v7xk^ORBuy6R^u^dVOJvk^KfRZxdC+^K^d^OOxOEVQ+y+Dlu^dRxdmOe8g^7Rx7mOEQg^dy+>vtxk^1RBgjHuR^7^dV1Jvk^KfRZxdC+^K^d^IfxIv77^OVVQ+z+DluvMp^K^OOxOGeN+w4C+NbfdSsL^KZVKf7PsO^Ir+Zx1G+Dlu^tZVtfte8g^ixkV1KvLR^K^IV1Jvk^dp^dVORv7CoN+D+$luJE+$lu^OZ^OBqCrg^Ir+gV1N+viy+Dlu^iRximOe8g^hskxtmOe8g^hz+=luvLxk^t4ZezdvLxk^1RVtKv7^I^1pV+xdONUQ+gXYN+bDYN+Yk^d^+GkqxdG+2lu^dZVdfuTy1^1r+ZxtG+R^LxkVtKvhR^d^1VtJvk^IBY+CKv+G+2lu^1ZV1fuNDt^tekVLKvt^t^LpV+xI2kBY+S+VtE+=lu^Lxk^tBgjvu^Ly+lIVhMvJ4IxDZViQ+O^Ly+CluVJjkvhR^JRVhxivhp^+^Iskxtmgv$I^IskxtmuQsLbeKxtX+GCd^K9+PlN+fdSsLR^MZCTz+Qk=Tu8kDTu$k=TuUkXTu8kETu$kXTus+^KS+^>skxKmuDPd^>skxKmuVzdRU+2TuvMD+lTuRv+f1CDI^KZVKf7T|+^Mr+Zxq=+4A=^dVRjkvRR^RRVKxMvRp^+^>U+DTuvqy+lTu^Mz+DTuvqZ^>4uX^AvRl+^M^qV>RvqHCz+y+XTuVME+ETu^qZ^MVqx>X+ETu^>$+BZl^d^My+ETuVqMv>^q^>$kV>xMV+^M47=Xux>I^>V^N+$+BZl^d^Ry+ETuVqMvZ^q^>ZV>fieQg^qekVZKvq^q^ZpV+xM=+4uX2ZVZMvg47eQgVgP+vuR^Z^gVdJvk^qZ^qBgl81^gr+uVd<muX2Z4qvUgvAxk^dRVuE+yTu^Axk^dZxAu^q^g^dfx+vZ5^M^RVgRvdV^N+y+DTuVMMv>4uDPdVRE+yTu^g$+4u$^dvAy+ETu^ARxuvO^tZ^tBd8Qg^uek^7qxtvA^7p^+VdMvu4A=yZVAQ+I^Oxk^OqK^k^Og=qqxdvO^Op^+VMjkvZ^g^My+UTuxMA^M4uPzdxRF^R^M2kVR>vZy+DTu^gskxgmuVzd^Rz+=Tuv>p^M^R8kxMO^MD+lTuVM>=QN+9+Xez+4>NsLO^MgDUz+lkGTuHkVTu^K8k^Tuek2Xu8k$Xu8k8XuP+vMD+CXu^KU+VTuWy+VTu^MRxMmuVzd^K=+xKu^Mu^M^=z+E+$Xu^KJ^KVMMv>4AN^AV>o+vqR^q7VqH=z+FR^qZVMxqvMD+$Xu^Kz+HTuvdy+$Xu^ARxgvO^RD+2XuVRE+oXu^RZ^RBRXPd^Zy+2XuVRMvg^R^g$+BuxK^R5^gVRxZI^ZD=z+D+eXuiDk^qg^q4xqvq^R7^Rv8z+E+2Xu^MoK^MU+XTuv>S+^My+QTuxRG+DTu^A=+VRxAvdxk^M4A|vuvdy+lI^gRxgmIxDZ^uy+>vOy+DTu^OskxAu^OR^gVuxAF^+^RxkVMfOv$I^RxkVMfIQsLboKVM2+VCd^M9+HTz+BkssLR^KgYer+UkyXu8kNXu8kzXueksXu8kGXu8kcXuN+vMS+^RxkVKfuGcu^RS+V>jkvM4R2$IV>2+SXu^KS+^MskxMmuSc14O8Xu^k^M4dNxtfiUXuxk^MBIX747UXuskxMmiVlL4O8Xu^k^M4ao|tf1Hzuxk^MBRz$u47UXuskxMmASxZ4A=cR^k^M4Or9gfiUXuxk^MBdNlO4AHzuskxMmuXPI4O8Xu^k^M4i$C1f1Hzuxk^MBZNUg4AHzuskxMmiHUh4O8Xu^k^M4ODvhf1Hzuxk^MBOcHZ4AHyRskxMm1CYZ4uGyR^k^M4AQ^Af1HyRxk^MBd^Uu4AHzuskxMm1|=14O8Xu^k^M4AX=LfiUXuxk^MBZUTZ47UXuskxMmd|Hu4usyI^k^M4I$ehf1Hzuxk^MBq^$h47UXuskxMmtQ2+4uGyR^k^M41U|kf1HyRxk^MBO2cL4AHyRskxMmt8S14uGyR^k^M4ANY7f1Hzuxk^MBO|xI4AHzuskxMmtcz14O8Xu^k^M4urX+fiUXuxk^MBZXQk47UXuskxMm7lUL4O8Xu^k^M47cctfiUXuxk^MBZEjA4AHzuskxMm12Eg4uGyR^k^M4Il$kf1HyRxk^MBgCUA4AHyRskxMmO$U+4uGyR^k^M4A9PLfiUXuxk^MBdlrI47UXuskxMm79PO4O8Xu^k^M4dvQ+f1Hzuxk^MBOzNR47UXuskxMm1v34O8Xu^k^M4Ay9If1VyIxk^MB>8eu4AHzuskxMmA=^d4uGzu^k^M4pr4fLjKxk^MB1Q$h4IjKskxMmL=f47zK^k^M4J$cufLjKxk^MB7TUu4IjKskxMmIzeO47zK^k^M4OTYOfLjKxk^MBtYQI4IjKskxMmJosk47zK^k^M4tVEdfLjKxk^MBq$$g4IjKskxMmOxf47zK^k^M4LTl+fLjKxk^MBg9EA4IjKskxMmLrog47zK^k^M4f9QRfLjKxk^MBIXTh4IjKskxMm3Q=+47zK^k^M4fYEtfLjKxk^MBI|NL4IjKskxMmJ$D747zK^k^M41$|OfLjKD+yXuVME+GXu^KJ^KVMMv>4AN^AVKo+vMR^q7Vq$Vy+FR^qZVMxqvqD+SXu^>v+f1=^d^Ry+rXuxdA^R^d^ZvkxZvZD+GXu^Rz+EXuvZy+SXu^dRxRvu^ZD+sXuVZE+HXu^Ry+sXuVZ6vZ^Z^guVgXPy+G+NXu^ZZVZfuGcu^dy+rXuxRs+^Zy+GXuVuMvA4uSEgVAQ+I^Oxk^OqK^k^OguqxuvO^Op^+Vgjkvg4RYUgVgE+VXu^AZ^ABRsEg^Or+uV7jkvIRRxkV7>IR^A^OV7Jvk^gxk^ZBKQy1^gxk^dVRxZDk^qg^q4xqvM^R7^Rvry+N+vMxk^K4A|vuWy+lI^MRxMmIxDZ^Ry+>vgy+NXu^dskxZu^dR^MVRxZF^+^>xkVKfOv$I^>xkVKfIQsLboKVK2+Ced^K9+Cor+BkssLR^MgTxS+Uk2|u8k$|u8k8|uekl|u8kD|u$+BuUeh^KZ^KBd^vd^MD+$|uVMN+vMxk^K4ReYAWxk^K4Z^D7Wxk^K4ZNCAWxk^K4ZXHtWxk^K4ZzVdWxk^K4R|27Wxk^K4g$Q+Wxk^K4ZoDIWy+$|u^MskxKmRP9A^MU+o|uvMBV=r+y+v|ux>V+^>4qrsLxKI^Ks=r+y+8|uxM^k^M4Z$YAiO$9r+BY+okxKvkGkR^Kz+o|uvRy+R^MRxMm7eQg^>CkxRu^M^>^Rfx+vMxk^q4ReYAvMBY+Bclr+E+=|u^Ks+^KBdCEL^Ru^Rrlr+E+D|u^qxk^qB>xVd3gC|r+bv+Yk^R^+GkqxRG+2|u^>y+qxqA^q47CQgxR8k^ZR^qVRxZF^+^KxkV>fOjVd^KB2+asEr+y+$|u^Kc+xKmLQx+^ZdxZSEr+y+2|u^gskxgmZz273ZGNr+6Y+vk^gV+yku^gy+2|uVKE+u^>Z^>Bd8Qg^gek^dqx>vd^dp^+VRjkvM4Zz27VRa9+B$Gr+wBZTsI4qSsLVKMvM4dPsOVgQ+O^Zy+$|uVujkvgR^uRVKxgvgp^+^R~f1UsI4ReSZxdA^d4dHsOxgc+g^7y+v|uxu^k^7R^uqxdvd^7p^+VZ6vZ^Z^guVgHjr+G+2|u^AxkVAfOv973gUsr+a9+vk^Z^+jkKvgy+2|u^Rz+KvdZ^g4OPEgvAek^ARVgxuvOp^+^ZskxRmgv97^Zbv+6N^r+w4do|1mqSsL^ZRxZmdPsO^uy+>vOy+$|u^OskxAu^OR^ZVuxAF^+^RwBRD|14RoSZVuMvA4dPsOVOQ+O^7y+$|uVIjkvIR^IRVuxOvIp^+^A0xRvO^Ou^OT^r+E+D|u^Axk^AB>SHt3gGeS+bv+Yk^R^+GkqxRG+2|u^Ry+qxAA^A47CQgx78k^IR^AV7xIF^+^OxkVRfONHt^OB2+a$YS+w4dcNRfdSsL^OZVOf7PsO^7r+ZxIG+$|u^ixkVIKvLR^O^7VIJvk^Rw4gSNRmRoSZ^1Rx1mdPsO^Iy+>vLy+$|u^tskxiu^tR^1VIxiF^+^75VRx7v1u^IH2S+z+o|uvZxk^R4ZNCAbg2US+B2+^+vZ^+GkRVRE+D|u^Ry+RVIMv147eQgVtP+vLR^I^tViJvk^7xk^RB>sCA^7BY+bGDS+G+$|u^Rs+VRft|DI^7uV7yDS+G+2|u^7xkV7f7=Q+3geTS+a9+vk^R^+jkKvZy+2|u^Rz+KvIZ^74OPEgvhek^hRV7xLvJp^+^tskxRmd=Q+^tbv+6DES+w4IQERmRYUg^iRximdPsO^ty+>vhy+$|u^hskxLu^hR^iVtxLF^+^RjkVRxLI^L2ES+y+8|uxR^k^R4g8DIiOENS+BY+okxRvkGkR^Rz+o|uvZy+R^LRxLm7eQg^hCkxJu^L^h^Jfx+vixk^R4ZoDIviBY+D+Y|u3G+2|u^RJVRxhA^h4AQ^AxtD+^tR^JOxJlGS+pR^JRxhv3^RD+D|uVRE+D|u^3y+D|uVaMva^a^f$kVfx3V+^34O9cRxaI^aojS+y+8|ux3G+D|u^pZV3xpvps+^f3V3Jva^au^aQjS+2+l|u3g=GS+8kxJO^JF^JVtx3i^32yS+S+VhE+l|u^3xk^hBgjvu^3y+lIVtMvi4IxDZVJQ+O^ay+2|uVbjkvfR^bRVtxJvfp^+^Rskxhmgv$I^RskxhmuQsLbeKxhX+VCd^M9+8HS+fdSsLR^MZsCc+QkyEu8kSEu$kyEuUksEu8kHEu$ksEuUkCQu8koQuD+lXG+mqSsLgVK2+VEu^K9+XCj+BkssLg^KD+xEuxKc+I^KxkVKKmu9sdxkVK>mu8T+xkVKRmONQIxkVKgmLTT+D+rEuxKOCEj+Gk=QuVKekXQu8klQuy+YQuxMA^M4tCSuxq8k^>R^MVqx>F^+^KD+UQuxKX+lQuY+y+rEux>A^>47$C+xqc+g^Ay+UQuxR^k^AR^Rqx>vR^Ap^+VKRvMN8j+S+^Ky+>vRxk^qRBuVEtxk^K47yVuvRD+lQu^KZN|j+G+GEu^KZVKfi8C+^Zr+ZxgG+DQu^uxkVgKvAR^K^ZVgJvk^Ru^Rj=j+N+vRr+g^RskxRu4uT3skxqmIGVu^RU+=QuvRgS|j+y+UQuxRV+^R4ATKxqI^qHDj+S+VqQ+O^Rxk^Rqf1UsIxk^qBuHVu^RD+lQuVq>s|j+y+DQu^qc+xqmdXyk^ZdxZ$Tj+S+^qr+ZxR^k^RR4gSNR^k^q4IjVuxRX+lQu^qgr|j+E+XQu^qs+^qBd5^Ru^R||j+N+vRr+u^ZskxZu4gyVdskxZO4dsNRskxqmIGVu^ZU+=QuvRgS|j+D+9Quv+G+lQu^ZoKVZQ+L^Kxk^Kqf3vzgxk^KZf3vjRxk^KdfaUrtxk^KAf3vjRD+GEuVKE+VEu^M$+47eehvqZ^>47Cy1vR=+^M^qVK2+oQu^Ky+HEuVMC+mI8eh^qRxqm7xvd^>Y+xMvq^KD+CQuVKE+$Qu^M|k^M2+xKI^KGrj+y+PEux>zk^>Y+^qfxqvMu^KNCG+U+VEuuy+oQu^Kz+HEuv>Z^M47yVuvqZ^>4uX^Av>l+^K^MV>RvqXCG+y+CQuVMMv>4IGVuVKE+2Qu^qZ^KVqxMG+VEu^ZbVMxZvMu^KE^j+r+xK^k^K4ONvu3G+lI^qZVqfLxDZ^>r+ZxRs+^Z$+47eehvdZ^g47Cy1vuxk^Z4R9T7vu$+4I$ehxgA^g47svdxu^k^Z4dX2hxuG+VEu^gxkVZfJexO^gy+^Euxg^k^Z41rBxg^k^RR^Zqxqvq^Rp^+VMjkvM4gv$IVMjkvM4uQsLpVkvMy+oQu^KfxKvq2k^KgVK2+2Qu^Kg$Sj+Zo=G+G+CQu^Ks+VKv+v>7^MseG+z+sEuvqs+^>Y+VRJvZ^Mu^M8=G+N+vMxk^K4A|vuWy+lI^RRxRmIxDZ^uy+>vqS+^Z$+BuUeh^gZ^gBu=y1^dxk^ZBMzT7^d$+47eehvdZ^g4Ojvdvuxk^Z4g92hvuy+VEu^dskxZmtexO^dz+HEuvdxk^Z4INBvdxk^>RVZKvZ^u^>pV+xM^k^K4go$IxM^k^K4uEsL32K^KS+^MskxMmOzvu3z+=IvuZ^d47jDZvqr+g^Zr+xu=+4I8ehVgMvd4I$y1VAjkvA4Z|T7VAC+mI8eh^ORxOm7xvd^Askxumd|2h^Az+sEuvdxk^u41PsOvdy+CQu^gskxum1SB^gskxZu^uR^dV>xZF^+^KxkVMfOv$I^KxkVMfIQsLboKVM>oec+Gk$Nu^K$koNuX+2NuY+wBZTsI4qSsLVMMv>4dPsOV>Q+O^qy+$NuVRjkvRR^RRVMx>vRp^+^KdxKSQG+D+2Nu4u8sIOyCc+w4gSNRmqSsL^>Rx>mdPsO^Ry+>vMy+$Nu^ZskxKu^ZR^>VRxKF^+^quVqCyG+X+2Nu4dcNR>GCc+w4gzVdfdSsL^dZVdf7PsO^qr+ZxRG+$Nu^ZxkVRKvgR^d^qVRJvk^K7^K9GG+<mI$EL4>NsLvZZ^R4gcsOvgr+g^gz+CNuvAxk^gRVuKvZ^Z^gpV+xqF^q^KuVKHGG+X+2Nu4gzVd>GCc+w4OXDIfdSsL^qZVqf7PsO^Zr+ZxAG+$Nu^gxkVAKvdR^q^ZVAJvk^Ku^KQxG+2+DNu4IsEtZECc+o+4uT3BkssL^KZ^KBqexO^gr+gVuE+=Nu^Axk^uqxAu^K^g^ufx+vg7^Zs^G+~f7Yog4qrsLxgA^g4dHsOxuc+g^7y+vNuxO^k^7R^OqxgvA^7p^+VAJvO^Zu^ZTCc+2+DNu4uT3ZECc+X+2NuY+y+8Nuxu2K^uD+CedVMY+sec+4qSsLqxKO22s+TkGNu$kSNuUkHNu8kVNu$kHNuUkozu8k$zu$kozuUk=zuS+^Kv+f1=^d^MZVMfiXlO^qZVqfJoeK^>ZV>f1N^A^MxkVKfuVQd^MekV>jkvM4Zvz1V>P+vRxk^K4qCEuvRD+sNu^KU+GNuWy+C+^Kv+f1=^d^>ZV>fiXlO^qZVqfJoeK^R=+VKxRv>D+VNu^Mb2^c+8KXes+y+VNuVRMvZ4R$SOVKP+vgR^R^KVZJvk^My+VNuVZMvg4RP9AV>P+vdR^Z^>VgJvk^KD+CzuVKMvM4dsPdV>zkvq^Ku^K8^c+E+$zu^KZ^KBRvt^qD+ozuVqE+2zu^KZ^KBqX9Z^>u^>Y|c+E+VNu^>Z^>BK=Eu^qZ^qBqCrg^gr+gV>E+2zu^dZ^dBqX9Z^uxk^>qxuu^q^g^>fx+vMgo^c+y+nxKG+ozu^gZVgfiyju^u=+VKxuvqD+$zu^>b=xc+8KEPc+y+$zuV>Mvq4R$SOVgP+vuR^>^gVdJvk^Ky+$zuVgMvd4RP9AVuP+vOR^g^uVAJvk^dD+2zuVdMvu4dsPdVAzkvO^du^dYxc+E+Dzu^uZ^uBRvt^dD+=zuVdE+lzu^dZ^dB7lju^A$k^AVuS+vA4AVyIVARvODGc+y+sNuVuMvA4Zvz1V7MvI4dHygVuQ+O^Ay+=zuVOMv74i=juVIjkvOR^IRV7xuvOp^+^dz+$zuvAZ^u4ArXtv7Z^O4AlQgvAr+g^AskxAu4JC9IqxOvA^Ap^+Vdhug^uSkVdxuvOu^A$xc+U+GNubgsQc+g|Pc+ayPc+vk^d^+jkKvuy+$zu^ARxAmRTy1^uy+>v1y+R^tskxIu^tR^AVuxIF^+^dBU^c+PkNes+y+$zu^uRxumRNDt^ICkx1u^u^I^1fx+vuokBD^c+ZoUc+OXes+BXes+okxdvkGkR^dz+sNuv1Z^I4qUy1vtr+g^tz+KvLxk^tRViKv1^1^tpV+xd6Y+eKY+z+sNuvtZ^14qXDtviek^iRV1xtvLp^+^deka9+S+^hy+xNuxd^k^h4ONvuxdG+lI^tZVtfLxDZ^ir+ZxLG+sNu^JxkVLKv3R^t^iVLJvk^dxk^hB>Y$I^dxk^hBRrsLboK^hU+VCdvM9+V2s+4>NsLu^>gCrs+lkSzuUkHzuS+^KU+GzuvMy+Hzu^Kz+SPgvRZ^q4ZX8gvqr+g^Rv+f7X=I^dr+ZxO4RZcDz8^mVGGGcyKxu^k^OR^uykxdv7^gZ^gBd8Qg^dek^7qxgvu^7p^+VZjkvZR^ZRVqx>vZp^+^MskxKmRP9A^Mz+GzuvMy+sPg^RRxRmgN8g^My+>vu$+4dT=IxO8k^Irk^OVIx7A^74ilPtxO8k^IR^7VOxIF^+^AZVAfI=$+^Or+Zx1^k^1R4t|eku^A^O^1fx+vAZ^ugVIMv147eQgV1P+v7R^I^1VOJvk^Zxk^dqxZu^R^M^dfx+vqxk^K4qEavqS+^KxkVKftzvuby+9Ix>A^>4IsDZxZc+g^uy+xzuxd^k^uR^dqx>vg^up^+VMjkvM4gv$IVMjkvM4uQsLpVkvMD+$ed^>D+yrs+mqSsLRVK>s2x+TkCyu8keyuek=yu8kCyu8k8yueklyu8kDyu9+Pcs+fdSsLg^MU+Vzuv>$+4I$ehxKA^K47svdxMX+$yu^M$+BuUeh^>Z^>B1VGO^KD+CyuVKE+2yu^My+$yuV>$+v>^>^KD+8yuxKO=^s+GkXyuVKekyyur+O^KskxKu4AXKskxKO4dXykskxKI41CruU+lyuvMy+Eyu^MRxMmOEQg^>y+>vRy+Xyu^ZRxZmteSu^gCkxuu^Z^g^ufx+vZxk^qRVRKv>^>^qpV+xK4Rg^q=kxKvR^>u^>v^s+VkWoK3y+^zux>T+^>B^KU+$yuvMy+2yu^Kc+xKb^Mu^Mvex+E+$yu^Ks+^Kqx>F^>^MuVMlex+X+=yu3S+VKE+=yu^Mxk^KBMrek^My+CyuVMjkvM4gsTZVME+Dyu^>xk^KB>zNZ^>D+DyuVKN+vMy+=yu^>skxKmOzvu^>z+=IvqZ^>47jDZvRr+g^Rz+2yuvdxk^RRVgKvq^q^RpV+xM^k^K4go$IxM^k^K4uEsL32K^KD+2edVKY+NYx+4qSsLqxKOE28uTksyu$kGyuUkVyu8kCru$kVyu|+o9x+4qrsLKvMD+Hyu^KU+syumae9+$+B7yHA^MZ^MBgVYZ^qr+gV>E+oru^Rxk^>qxRu^M^q^>fx+vMD+Cru^KZNyH+Uk2ru8k=ru$k2ruUklru8kXru$klru8k^KD+2ruVK2+lruC1D+Dru3asQx+y+2ru^>Rx>mdHyg^Ky+>vR$+4dlMxZA^Z4uNeuxgc+g^d$+BqN=I^AZ^AB>ExO^7ek^OqxAvI^Op^+VuxkvA=q^OxkVdKv7R^Z^gVdJvk^Ry+=ruVgH+vZ^g^dxkVqKvuR^>^KVqJvk^MgHSx+bv+Yk^K^+GkqxKG+2ru^MZVMf7Hyg^qr+ZxR=+4dTMVdMvu4uzeuVOQ+O^u$+4gUMv1Z^I4uDvdviek^1RVIxtvtp^+^7z+$ruvtA^7^1VtjkvAR^tRVdxOvAp^+^gskxRu^gR^MVqxRF^+^KB2+ayxx+y+2ru^RRxRmdHyg^qy+>vA$+4ASQ1x7A^74JPS1xOc+g^1$+BAYE+^tr+gVLjkvhRgrkVtxLvLxk^1RViKvI^O^1pV+xgA^gR^tskxuu^tR^RVqxuF^+^KgrCH+a9+vk^K^+jkKvMy+2ru^gRxgmdHyg^qy+>vt$+4dlMxtA^t4uNeuxLc+g^O$+BqQM^iZ^iBZNvd^Jek^3qxiv3^3p^+VhE+lru^JA^hVJx3^k^OR^3qxtvh^Op^+VujkvtR^uRVgxqvtp^+^Kbv+6X$H+y+2ruVKMvM4dHygVqQ+O^u$+4dPPkvtr+g^hskxhu4dsoIykx1vJ^LZ^LBuv|u^1y+=ruVLH+vt^L^hxkVuKvJR^K^qVuJvk^OgyUH+bv+Yk^q^+GkqxqG+2ru^qZVqf7Hyg^Or+Zx1=+4dTMVhMvJ4uzeuV3Q+O^J$+4gUMvfZ^a4uDvdvbek^bRVaxpvBp^+^fz+$ruvbA^f^pVbjkv3R^bRVhx3v3p^+^Lskx1u^LR^qVOx1F^+^uB2+E+Dru^1Z^1BqCrg^Or+gV3jkvaRRRV1xOvap^+^uU+=ruuD+XruRU+lruuy+Eru^uz+oruv7Z^O4uX^Avhl+^u^LVORv7$zH+y+2ruVLE+Dru^uZ^uBZS^A^OY+^OZxuG+Xru^Oy+Urux3$k^O^3^JskxLvA^Jy+XruVLE+Dru^Jy+EruVuMv3^u^O2kVLxOv7D+Xru^Oz+=ruvhy+2ru^Oz+lruvaZ^O^3VuE+yru^Oy+DruV3Zv7^3^JaVuxJva2k^L^3V32+Eru^3y+EruVOJv7^u2k^OZxOX+Eru^Ogj9H+E+Eru^uZ^uBd8Qg^Lr+gV3jkvaRCkRVuxLvap^+^OeKxOX+oru3y+^yuxKV+^KY+^>dx>ye8uD+orubz+GyuvMgXryMgcG9RE+XT+^MZ^MBK=SO^KZ^KBZEPL^MD+lT+VM9kv>Y+^KuVKlGH+G+lT+^>pD+xMC+^>^M^qfxqvMu^K2cH+z+=T+vMp^K^MZ=cH+FR^MoKVMjkv7R^ur+AxuG+E2+^7xkVuKvIy+N2+^AskxuO^Ay+y2+V7jkvAu^7xkVO>vAxk^OuctE+2Y+^uxk^OAxuu9+^d^Ofx+vdxk^RwVgE+H2+^dr+IVuY+VPH+4qSsLAxAOSeP+GkST+VKykHT+^MGksT+V>E+VT+^qZ^qBKU87^MZ^MB>$4^qZ^qBRsEg^Mr+gV>hut^ZxkV>KvgR^q^MV>Jvk^KZ^KdxMi^MNeP+pB>$ER^MoK^Mskxuu^Ar+OVOE+y2+^Axk^OqxAG+N2+^AxkVO>vOy+y2+^7skxOI^7xk^uZxO^k^uuoiz+V2+vOxk^uOVAK|+^d^upV+xg^k^RC+^gz+y2+vur+I^uD+H8P+mqSsLOVA>==P+GkoX+^KjkCX+v>Gk2X+^>$k$X+G+2X+^KZVKfuoSZ^MD+YX+xMG+=X+^KZVKfOEEg^>oKV>jkvAR^Ar+Ax7G+E2+^AxkV7KvOy+N2+^Askx7O^Ay+y2+VAjkvIu^AxkVu>vIxk^uujLE+2Y+^Axk^uAxAu9+^d^ufx+vdxk^Ro+VgE+H2+^dr+IVuY+2c9R4qSsLAxOOXx9Rgoc9RZsP2KONjxky+oIVKRvMlXP+y+CjRVME+XjR^KZ^KB>ToO^Ry+oIVgjkv>^R^gy+^SRxMG+2jR^RxkVMfAc|Z^Ry+^SRxRG+oGR^gZVgf7DGt^Mr+Zxd^k^dR4qTGLu^g^M^dfx+vMxk^R4R$U7vMy+CjR^KskxKmu8Pu3D+=NP+mqSsLRVK>llV+8kXYZy+~xML^RZ^RBqSR^qr+gVgY+oyP+4qSsLqxZOl=V+TkNYZ$kEYZUkSYZI^qRxqmdGHd^My+Rvq9+NrP+4>NsLO^Rg$YV+lkSYZHkHYZ^KuZV2V+G+HYZ^Ky+xYZxMA^M4dUl+xq^k^K4dSxtxqD+^qR^KdxKDHP+S+^Ky+xjRx>G+GjR^R=+V>xRv>xk^K4RrStv>y+HjR^>z+SjRvZ=+^>^RVMjkvM4ZlykVM2+GYZ^Ky+HYZVKuvqZ^>4gU|+vgr+g^gz+EYZvZxk^gRVRKvq^Z^gpV+xM^k^K4ZzBxMOyHP+2+^qdxKI^K$oV+y+xYZxKG+HYZ^gZVgfAyB^ZekVdKvd^Z^dpV+xM^k^K4ZG$uxMA^M4dcPdxKI^KN^P+y+xYZxM^k^M4dUl+JOV2V+y+HYZVMMv>4Zc$uVKMvM4u^1VM2+sYZ^My+HYZVKjkvM4dDl+iE+GYZ^Ky+SYZVZMvM^Z^MoKVM>SoV+2+^qLVMRv>N$V+y+CjRVKE+sYZ^My+HYZVRMvZ4dlIVujkvM^M^uy+xYZxK^k^K4dUl+ROV2V+gC8V+8+xqF^Ku^Kv8V+>s8V+2+^q4Z^X+v>u^MV2V+z+GYZv>Z^M4gyyRvgek^dRVMxZvup^+^KeKxKOHrP+skxkV>KvZy+NYZ^Rskx>O^RR^qVMx>F^+^KoKVKjkvdR^ZRVRxqvdp^+^>Y+xMvq^KD+XYZVKY+2DV+4qSsLqxKO$lV+Tk2=Zz+DYZvqZ^>4dDGtv>r+u^qixR^k^qR^RskxqO^kR^>VMxqF^+^KoKVKVkvMek^dRD+xKvup^+^MU+oGRv>d^Kr+ZxR|+HTV+4qrsL>vugCzV+Gk9=ZxKG+2GR^qiVqxMA^M4dzcAxRc+g^>9+Q|V+fdSsLR^qZ$NV+G+CjR^K$+BqN=I^>Z^>B>ExO^qek^Zqx>vR^Zp^+VME+$GR^qyk^MVqxR^k^K4I=|hxRG+l=Z^MiVMxKVkxk^>RVqKv>^R^>pV+xKVkxk^RRVdQkvM^R^MD+YGRxMG+V7^MZVMf7Hyg^Kr+ZxdG+=GR^uxkVdKvAR^M^KVdJvk^Ry+=GRVKMvM4dycAVdQ+O^O9+ySV+BkssLR^ugjVV+E+$jR^My+DjRV>Mvq4g=2gVqMv>^q^Ky+9jRxMA^M4g2>x>Tk^K^>^MdxMDHV+y+CjR^Kz+2jRvqZ^>4ZNDAvZZ^K^RVME+NjR^>Z^>B>$|t^KUk^MVKx>I^>lxV+y+c7x>A^>4gE9dxqX+$I^qy+zjRxMG+CjR^>CKVMx>b^KgSVV+v+f7TM^MZVMf1Xvd^KekVqKv>^K^qpV+x>h^>ZG8^9r6G8^9N8kxKI^KSVV+y+rjRxqG+CjR^RCKVqxRb^KskxkVOKvAR^K^dVOJvk^Ry+CjRVdE+XjR^uZ^uB>vVd^R$+4gD=IvOZ^A4Z=xOv7ek^IRVAxOv1p^+^uz+HjRv7yk^u^OV7jkvu^R^7gzY^+a9+vk^R^+jkKvZBCY^+y+^SRxd^k^d4uEsLiG+CjR^dy+qxOA^O47CQgxI8k^uR^OVIxuF^+^RxkVdfLEYI^Ry+^SRxRG+R^7ZV7fIroI^uxkVRfJVT1^uy+zjRxdG+CjR^t=+VdxtvZgEY^+B2+^+vZ^+GkRVRa9+BY+skCkx>u9+^M^>fx+vM9+V=^+4>NsLu^KgVDx>$kV=ZUk$UZ8k2UZ$k$UZUkDUZ8klUZ$kDUZUkEUZ8kNUZ$kEUZUkSUZ8kGUZ$kSUZ6=Dx>9+=9^+BkssLg^Kg9XCkUk$DZGkoDZ^K$kCDZUk2DZ8k=DZ$k2DZUklDZ8kXDZ$klDZUkNDZZ^kBZS^A^KU+^KZxMI^MlX^+ZVk>vM$+4ISKx>C+^K^>^RfxRv>u^M$|^+RxkO^>p^>VK>X|^+pCPB^KU+CDZvMr+N+^KskxKuXe|v+xk^KZSeNn^k^Kuo8zFskxKto92axk^K7DDy1^k^KtVCG6skxKa2vC4xk^KhozGv+^k^KaoYDe+skxKFNHeo+xk^KbsYY6^k^KFDxVtskxK52y9e+xk^KmNUc3^k^K5oVHdskxKo+2ecY+xk^KnNTH|+^k^Ko+NY=5skxK=+Drso+xk^K8+oGU8+^k^K=+NQGv+skxKX+S9lU+xk^K9+VC85^k^KX+Sjo=+skxKy+sUjtD+2DZVKC+mdTM^>Rx>muzeu^qy+>vg$+4dT=IxRA^R4g9xOxA8k^dR^RVAxdF^+^g^kVglj+vuy+$DZ^uBxdvA^gxk^Zqxgu^>^q^Zfx+v>Z^M4OPEgvgek^dRVMxZvup^+^KU+$DZvM$+47UegxqG+=DZ^Zy+YDZxdA^d4AQ^Axu9+^ug^dRxZvu^g=+^qVgxKX+DDZ^K$+BdXeg^gy+=DZVqE+lDZ^dZ^dBZS^A^AY+^AdxdA^q^d^ZY+xgvg^KD+lDZVK2+NDZRD+EDZqE+yDZ^qy+=DZVKMvM4AN^AVZ=+vR^Z^KuVKXYCkG+XDZ^Ky+YDZxgA^g41hxuc+g^dy+|DZxZ^k^dR^ZqxgvA^dp^+VqE+2DZ^dZ^dBAp^ur+gVOE+yDZ^7y+DDZVA~vI^A^Iy+eDZx1A^14AQ^AxA$k^I^A^7skxOu^7R^dVuxOF^+^ZQ+VqxZvAy+EDZ^qS+xqI^ZYk^Z3xqB^u^q^Z8kxKvg^ZD+XDZVZE+yDZ^Kp^KVZokvMg^KD+|DZxKO$^^+y+XDZVqE+DDZ^Ky+DDZVZE+EDZ^ue+^ZVux7G+2DZ^ZZVZf1N^A^uCkV7xuvgZ^K^ZVAivR^A^AD+TDZxAG+XDZ^Kp^Hcr+xq|k^K^q^qU+DDZvRy+XDZ^qRxqm7eQg^ZCkxuu^q^Z^ufx+vMD+NDZ^Kz+XDZvMZ^K4uX^AvA1^uLVZRvgoXCky+NDZVK|kmRC8k^KVZ2+SDZ^Zg2lCkz+XDZvgoK^ZD+eUZxK|+$|Ck4qrsL>vMgS$c>TkPDZyk$9Z^K8ko9Z$kC9ZUk29Z8k=9Z$k29ZUkl9Z8kX9Z$kl9ZUkN9Z8ky9Z$kN9ZUkG9Z8ks9Z$kG9ZUkV9Z8kClZ$kV9ZUk$lZ8k2lZ$k$lZUkDlZ8kllZ$kDlZUkElZ8kNlZ$kElZUkSlZ9+N=G>BkssLg^KD+T9ZxKX+o9ZykD+v9ZMNEDCjm^GGGsbD+29ZRy$=sSmvcGG2C+D+=9ZZz9XUjmxGGGNHkX+D9ZV9XlzC+D+99ZVzlNv3G+C9Z^K$kVKxMV+^M4APyIxKI^KsSCky+T9ZxRG+C9Z^q=+VRxqvMp^K^MZojCkG+C9Z^KpVKxMX+C9Z^My+^DZxKX+E9Z^Ky+e9ZxKG+l9Z^qe+VKxqv>V+^MZPGGGjmxGGGSGKvMD+N9Z^KU+E9Zuy+E9Z^qRxqmAN^A^KH+xK$+^Mu^Mr$j>Q+L^Ky+o9ZV>E+=9Z^Me+^>VMxqG+29Z^Re+VqxRv>V+^MZPGGGjmxGGGSGKvqxk^KRV>E+29Z^My+29ZV>~v>^>^qV+VqMocGGjm^GGGSGK^MxkVK>v>y+o9Z^MoKxMu^>V+^>RsGGGjmvcGGSGK^Rxk^KdxRG+o9Z^My+v9Zx>Gk^M^>^qP+xqAVGGGjm^GGGSGK^MskxKt^MD+S9ZVKE+$9Z^KD+G9ZVKE+H9Z^KZ^KBZS^A^dY+^dnxKX+s9Z^KgQj2K>s2sKgSX2Zgcl<>2X2uR9+^AVuJvk^gxk^ZdxgG+y|M^dr+7xu|+lvek4qrsLgvOgl8ekGkYQMxKHkDQM^MGk9QMx>G+lQM^MZVMfu$Eu^KZVKfO=E1^MZVMfOleI^KoKVKjkvAR^Ar+AxAG+l|M^OxkVAKv7y+X|M^OskxAO^Oy+E|MV7jkvOu^7xkVu>vOxk^uuzKE+oEM^Axk^uAxAu9+^d^ufx+vdxk^ZOVgE+G|M^Ar+IVOY+sUek4qSsLAxgOGTekGkNQMVKykGQM^MGkSQMV>ekHQMy+SQM^KRxKmR$SO^MRxMmucD+^KU+yQMvM|k^KY+VRRvZGleky+GQMVqJ|+^>5^qV>xMF^M^RuVRDTekG+GQM^MpVMxKOyTekpRVKVkvMxk^ORVgQ+t^gy+l|MV7jkvdR^7y+T|Mxu^k^gg^uz+l|MvAxk^guVujkv7g^gxkVORoMy+V|M^gskxOt^gR9+VAxOF^+^dxkVZuvuy+y|M^uy+uvu9+oNek4>NsLt^AgoyekjkVQMvMGk$NM^MjkoNMvqy+2NM^KRxKmR$Eu^MRxMmgSsk^>Rx>mgy=7^MeKxM^k^dR^Ay+gv1y+l|M^AskxIu^Ay+X|MVAjkv1g^Ay+||MxA^k^Iu^AskxdO^Ixk^ddHKG+V|M^AxkVdgvOR9+^uVdJvk^gxk^Z1xgG+y|M^ur+7xg|+lGek4qrsL>vOgCHekGk9NMxK62xeky+lNMVMMv>4gSskV>Mvq4AzY7VqMvR47XlOVMMv>47GCkV>P+vRR^M^>VqJvk^KoK^KZSxek6Y+vk^>V+yku^>oKY+bv+Vkxk^gRVAQ+t^Ay+l|MVOjkvOR^Oy+T|Mx7^k^Ag^7z+l|Mv7xk^AuVOjkvdg^AxkVgREMy+V|M^Askxgt^AR9+VuxgF^+^dxkVZIvuy+y|M^uy+uvu9+DCok4>NsLO^Agl$okjkENMvM8kSNMy+zNMxKA^K4grskx>A^>4I$ehxMA^M4g|QkxKX+SNM^K|kVKv+v>u^Mlvokz+NNMvMp9+^>0xKvq^qp^qVMRv>o$oky+SNMVKJvM^>g=$okfv+vqoK^>xkVdKvOr+O^7z+=|MvOxk^7RVAE+N|M^Axk^7ZxAG+E|M^AxkV7RvOxk^dgV7jkvuuNMy+P|MxA^k^dO^AqY+vA^dp^+VgjkvgJ^gy+z|Mxuc+I^A9+r=okfdSsLu^dZXlokHkCzM^KGkezMxMUk$zMy+ozMVKMvM4gHDAV>2+=zM^>y+$zMV>E+$zM^MZ^MB>ssk^R9+=9okBkssLg^MgvlokykXzM^Ky+DzMVMMv>4t9xIVKVkvMCK^>^RVMxK2K^Kxk^Aqxdc+O^Oy+9|Mx7^k^OR^7z+D|Mvuxk^OgVdE+y|M^dxk^Odxd^k^Ag^OskxAIERy+V|MVdjkvOO^dRD+xuvOp^+^gskxZB^gy+y|MVuQ+L^d9+HEokBkssLg^Ag|NokykyzM^Ky+EzMVMMv>4g=E1V>Mvq4I8ehVKMvM4I$y1VMVkv>xk^dRVAQ+t^Oy+l|MVAjkv7R^Ay+T|Mx7^k^Og^7z+l|MvOxk^OuVAjkvug^OxkVdRsZy+V|M^Askxdt^AR9+VuxdF^+^gxkVZJvdy+y|M^dy+uv79+sSok4>NsLt^7gHsokjkNzMvMGkGzM^MjkSzMvq8kHzMy+czMxKA^K4RvSOxMA^M4uEXIxKX+HzM^K|kVKv+v>u^MHcokz+GzMvMp9+^q0xKvR^Rp^RVMRv>Nsoky+HzMV>Jvq^qgGsokfKvRoK^qxkVOKvIr+O^uz+=|Mv1xk^uRVIE+N|M^Ixk^uZxIG+E|M^AxkVuRvOxk^OgVujkv7usZy+P|MxA^k^OO^AqY+vu^Op^+VgjkvgB^gy+z|Mxdc+I^O9+8^okfdSsLO^uZ$vvkHk2yM^KGkYyMxMHkDyM^>8k9yME+XyM^MZ^MBK=SO^KZ^KBuEHZ^qD+lyMVq9kvRY+^KuVK$ovkG+lyM^MpD+x>C+^M^>^RfxRvMu^KVovkz+=yMvMp^K^MZCvvkFR^MoKVMjkv7R^ur+AxuG+l|M^7xkVuKvIy+X|M^AskxuO^Ay+E|MV7jkvAu^7xkVO>vAxk^OuUgE+oEM^uxk^OAxuu9+^d^Ofx+vdxk^ZFVgE+G|M^dr+IVuY+SYvk4qSsLZxOOVlvkGkSyMVKekHyMy+SyM^MRxMmgSsk^KRxKmt||O^>dx>yDvky+SyM^KRxKmgSsk^MRxMmt||O^qRxqmOc2h^KfxKvqD+GyM^>Xkx>9+^qu^qP9vkE+HyM^Kp9+VM6vM^M^ZpVZxqI^qylvky+jyMxMF^M^KgclvkJW^KoK^Kskxuu^Or+OVAE+E|M^7xk^Aqx7G+X|M^OxkVA>v7y+E|M^OskxAI^Oxk^uZxA^k^uuEdz+s|MvOxk^uOVAK|+^d^upV+xg^k^Z6^gz+E|Mvur+I^uD+$QvkmqSsLuVA>EzvkGk$rM^KjkorMv>8k=rMy+8rMxKA^K4gXVIxMX+=rM^My+YrMxM3^M^KZVKf5Eld^MoKVMjkvAR^Ar+AxAG+l|M^OxkVAKv7y+X|M^OskxAO^Oy+E|MVOjkvOu^OxkVu>vOxk^uueAE+oEM^Axk^uAxAu9+^d^ufx+vdxk^Z<VgE+G|M^dr+IVAY+sjvk4qSsLdxuOlPvkGkXrMVKykyrM^M8kNrM$kErMUkSrMy+ErMVKMvM4g=zdV>2+SrM^>y+XrMVqMvR4gSskVMMv>4LD7V>Mvq47eQgVMP+vZR^>^MVRJvk^KD+yrMVKE+SrM^M=+^MBIX7^KD+SrMVKE+srM^My+yrMVq8kv>^q^KuVKVHvk2K4qSsLz+ErMv>oK^MxkVAKvAr+O^uz+=|Mv7xk^uRVOE+N|M^7xk^uZx7G+E|M^IxkVuRv1xk^AgVujkvOuyAy+P|MxO^k^AO^OqY+vu^Ap^+Vgjkvg5^gy+z|Mxdc+I^u9+re$kfdSsLg^AZ2v$kHkVrM^Ky+PrMx>A^>4grskxKA^K4A9jAx>A^>41ytxK2K^Kxk^uqxAc+O^Ay+9|Mx7^k^AR^7z+D|Mv7xk^AgVOE+y|M^Oxk^AdxO^k^ug^AskxuICOy+V|MVAjkvAO^ARD+xdvAp^+^gskxZo+^gy+y|MVdQ+L^A9+yY$kBkssLO^Ogr9$kyk=SM^KGk2SMVMyklSM^>8kDSMz+$SMv>Z^M4qCSOvMZ^K4gyyRvRD+DSM^qXkxq9+^Mu^MrD$kE+XSM^Kp9+V>6vM^>^qpVqxMI^Ml9$ky+USMxKF^K^>gQ9$kJu^>oK^>skxAu^Or+OV7E+E|M^uxk^7qxuG+X|M^uxkV7>vAy+E|M^Oskx7I^Oxk^AZx7^k^AuoOz+s|Mv7xk^AOVOK|+^d^ApV+xg^k^ZC+^gz+E|Mvur+I^uD+H|$kmqSsLgVA>Er$kGkySM^K$kNSMG+ySM^MZVMfOSsk^KZVKftsHk^MuVMsN$kG+ySM^>ZV>fOSsk^qZVqftsHk^RZVRftc2h^>pV>xMX+SSM^M|kVMv+vMu^Kly$kz+NSMv>p9+^>0xMvq^qp^qVKRvMor$ky+SSMVKJvM^Mg=r$kf3v>oK^MxkVuKvOr+O^Oz+=|MvOxk^ORVAE+N|M^Axk^OZxAG+E|M^AxkVORvOxk^ugVOjkvAuS7y+P|MxA^k^uO^AqY+vu^up^+Vgjkvgo+^gy+z|Mxdc+I^u9+rc$kfdSsLg^AZNx$kHkojM^Ky+ejMxKA^K4grskxMA^M47TlOxKA^K4dsmx>A^>4aDCgxM2K^Mxk^uqxAc+O^Ay+9|MxO^k^AR^Oz+D|Mv7xk^AgVOE+y|M^Oxk^AdxO^k^ug^AskxuIN1y+V|MVAjkvAO^ARD+xdvAp^+^gskxZ=+^gy+y|MVdQ+L^A9+CC8kBkssLO^ugvo8kykljM^KGkDjMVMykEjM^>8kXjMz+=jMvMZ^K4qVrZv>D+XjM^Mz+DjMvMZ^K4ZzPdv>oK^MxkVAKvAr+O^Oz+=|MvAxk^ORVuE+N|M^uxk^OZxuG+E|M^uxkVORvAxk^AgVOjkvOuCty+P|MxO^k^AO^OqY+vu^Ap^+Vgjkvg2+^gy+z|Mxdc+I^u9+T28kfdSsLO^AZS=8kHkyjM^KGkrjMxMHkGjM^>y+jjMxKA^K4R$87xMA^M4g^BxKA^KI^qOxqs=8kp4g^|Rxq2K^qxk^uqxAc+O^Oy+9|MxA^k^OR^Az+D|MvOxk^OgVAE+y|M^Axk^OdxA^k^ug^OskxuI=Ly+V|MVAjkvAO^ARD+xdvAp^+^gskxZl+^gy+y|MVdQ+L^u9+$T8kBkssLO^Ag||8kyk$GM^KGkoGMVMyk=GM^>y+$GMVKMvM4R887VMMv>4gXsLVKMvMR^M7VM=|8kF4gCERVMVkv>xk^uRVAQ+t^Ay+l|MV1jkvOR^1y+T|MxO^k^Ag^Oz+l|Mv7xk^AuVOjkvAg^AxkVuRVJy+V|M^Askxut^AR9+VdxuF^+^gxkVZ2+vdy+y|M^dy+uvO9+sz8k4>NsLt^ugSj8kjk=GMvMGkXGM^MjklGMvqy+EGM^KRxKmR887^>Rx>mgC4^qRxqmuSEg^>y+>vMfRtVRjkvMR^RRVqx>vMp^+^MRxMu^K7^KQj8kJmgCER^KeKxK^k^AR^uy+gvAy+l|M^7skxuu^7y+X|MV7jkvAg^7y+||Mx7^k^uu^7skxAO^uxk^AdGJG+V|M^uxkVAgvAR9+^dVAJvk^gxk^Z9+xgG+y|M^ur+7xd|+CH8k4qrsLgvIg2e2kGkjGMxKHksGM^MGkxGMx>UkVGMy+HGMVqMvR4RGU1VMMv>4tT|RVRQ+O^>xk^>qfo+9DLR^MVRx>F^+^KD+PGMxKzk^KY+^ZdxZ2C2ky+VGM^>fY+vM5^>^KVqJvR^Zu^ZjC2kE+ocM^>p^>VK>2e2kp4ZGVkxK2K^Kxk^dqx7c+O^Ay+9|MxO^k^AR^Oz+D|Mv7xk^AgVOE+y|M^Oxk^AdxO^k^dg^AskxdI2ay+V|MVOjkvuO^ORD+xuvup^+^gskxZN+^gxk^RqxZu^>^M^Rfx+vRZ^q4gEcAv>r+g^RD+=22kmqSsLRVZ>s=2ky+s|M^Mv+f1CDI^qZVqf1=lL^Zr+ZxgG+V|M^dxkVgKvuR^q^ZVgJvk^>=+^MV>xK2K^Kxk^RqxZu^q^M^Rfx+vMgHP2kGkYcMxKUkDcM8klcM$kDcMUkEcM8kNcM$kEcM|+G|2k4qrsL>vMD+lcM^KRxkmAN^A^K=+xKO^>u^>xl2kMvKg^M$+BuxK^q5^MVqxKF^K^>uV>ET2kA^kg^MfxMvMgsT2kp|=TrC>xKX+DcM^Ky+YcMx>A^>4urEgxMc+g^qxkVqKuR^>^MVqJvk^KD+XcMVK>Dr2kGkHcM^K$kscM=+4dTMVMMv>4gQDkVRQ+O^>y+HcMVZJvg^q2k^ZZxZX+HcM^ZxkV>KvRR^M^RV>Jvk^KYk^K^ULx>X+VcM^>y+PcMxK=+4dTMVRMvZ4uzeuVqQ+O^Zy+VcMVgjkvgR^gRVRxqvgp^+^>zkxKvq^ZoK^Zz+DcMvMZ^K4uX^AvRD+EcM^qz+lcMvMu^KNP2kv+f7TM^ZZVZfIzeu^Mr+ZxRG+lcM^gy+UcMxul+^g^u^qz+lcMvup^d^gaxdO^dD+EcMVdZvR^g^dxkVRKvuR^Z^MVRJvk^KD+ycMVKE+NcM^Ky+EcMVqMvM^q^MD+QcMxMG+XcM^My+|cMxgG+XcM^Ky+zcMxdA^K^d^qskxMvd^qy+XcMVKE+GcM^My+NcMVRjkvM^M^Ry+UcMxKFg^R2kVKxRvZD+DcM^RZsr2kG+XcM^KoKVKSk^k^>R^qykxMvq^KoK^Kskxqw^Z9+l^2kBkssLg^ZgTQTkykDsM^K8k=sM$k2sMUklsM8kXsM$klsMG+2sM^KZVKfOCvh^MD+YsMxMG+2sM^KZVKfOolL^MD+UsMxMG+2sM^KZVKfOEsg^MD+9sMxMG+2sM^KZVKfO9Du^MD+TsMxMG+2sM^KZVKfONvZ^>D+|sMx>7^Mr+gV>Y+V$Yk4qSsLZxAOsETkGkSsMVKekHsM8kssM9+9HlkfdSsLg^KU+ysMvMy+GsM^Mz+DsMvq=+^M^>VK2+VsM^Kd^>Rx>mgCoO^qy+>vZr+X+^Zz+lsMvur+I^uD+l=YkmqSsLuVO>C9YkGkoxM^KjkCxMv>8k2xMy+vxMxMA^M4gzy+xKX+2xM^Ky+8xMx>G+oxM^MZVMfO=E1^q=+V>xqvMoK^KxkVuKv7r+O^Az+$sMvIxk^ARV7E+XsM^Oxk^AZxOG+lsM^OxkVARv7xk^ugVAjkvAuRy+csMxA^k^uO^AqY+vu^up^+VgjkvgR^gy+|sMxdc+I^O9+8|YkfdSsLu^AZXQYkHklxM^KGkTxMxMUkExMy+XxMVKMvM4gygV>2+yxM^>y+ExMVKE+ExM^MZ^MB>ssk^q=+^KVqx>2K^>xk^OqxAc+O^uy+YsMxA^k^uR^Az+2sMvOxk^ugVAE+EsM^7xk^udx7^k^Og^uskxOIJy+ssMVujkv7O^uRD+xdv7p^+^gskxZO^gy+EsMVdQ+L^79+HrYkBkssLg^AgvjYkyksxM^Ky+SxMVKMvM4g=E1V>Mvq4tQ2+VKVkvMxk^7RVAQ+t^uy+=sMVAjkvAR^Ay+UsMxA^k^ug^Az+=sMvOxk^uuVAjkvIg^uxkV7R<y+ssM^uskx7t^uR9+Vdx7F^+^gxkVZRvdy+EsM^gy+uvA9+XxYk4>NsLO^AgSHYkjkGxMvMy+HxM^qRxqmg=E1^KRxKm3EDh^qeKxq^k^uR^Ay+gvOy+=sM^7skxAu^7y+DsMVOjkvOg^Oy+9sMxO^k^Au^OskxuO^Axk^ud6G+ssM^AxkVugvOR9+^gVuJvk^dxk^ZAxdG+EsM^gr+7xu|+Ce=k4qrsL>vOg=o=kGkeHMxKG+oHM^KZVKfO=E1^MZVMfJocL^KoKVKjkvAR^Ar+AxAG+=sM^OxkVAKv7y+DsM^OskxAO^Oy+lsMVtjkvOu^txkVu>vOxk^uuU+E+VsM^Axk^uAxAu9+^g^ufx+vuxk^ZIVdE+ysM^ur+IVdY+S2=k4qSsLdxOODU=kGk=HMVKykXHM^M8klHMz+2HMvMZ^K4Zz^ZvqD+lHM^>z+=HMvMy+=HM^>Rx>mgSsk^qY+xKvR^MZ^MB>o1^KoK^Kskxdu^Or+OVAE+lsM^Oxk^AqxOG+DsM^OxkVA>v7y+lsM^OskxAI^Oxk^dZxA^k^duyKz+SsMvIxk^dOV7K|+^u^dpV+xg^k^Zt^gz+lsMvdr+I^uD+ET=kmqSsLgVA>$z=kGkNHM^K$kEHMG+NHM^MZVMfOSsk^KZVKfh|k^MuVMXE=kG+NHM^KZVKfOSsk^qZVqfh|k^KZVKftc2h^RpVRxMX+yHM^M|kVMv+vMu^KCN=kz+EHMv>p9+^>0xMvq^qp^qVKRvMSN=ky+yHMVKJvM^>gHN=kf3vqoK^>xkVuKvOr+O^Az+$sMv7xk^ARVOE+XsM^7xk^AZx7G+lsM^7xkVARvIxk^ugVAjkvAuCMy+csMxA^k^uO^AqY+vd^up^+VdjkvgL^dy+|sMxdc+I^A9+Uj=kfdSsLO^OZ=x=kHkCPM^KGkePMxMHk$PM^>8k8PME+=PM^MZ^MBK=SO^>Z^>BResO^KD+2PMVK9kvMY+^MuVM=s=kG+2PM^>pD+xKC+^>^K^qfxqv>u^Mox=kz+oPMv>p^M^KZ$x=kFR^KoKVKjkvOR^Or+AxuG+=sM^OxkVuKv7y+DsM^OskxuO^Oy+lsMV7jkvAu^7xkVA>vAxk^AuvME+VsM^uxk^AAxuu9+^d^Afx+vdxk^ZJVgE+ysM^gr+IVdY+s^=k4qSsLZxAODeUkGkEPMVKE+yPM^KZ^KB>ssk^MZ^MBuUeh^>Z^>Bd^vd^MoK^Mskxdu^Ar+OVAE+lsM^Oxk^AqxOG+DsM^OxkVA>v7y+lsM^OskxAI^Oxk^dZxA^k^duE>z+SsMvOxk^dOVAK|+^g^dpV+xu^k^Za^uz+lsMvIr+I^dD+E8UkmqSsLOVu>yUUkGkSPM^KjkyPMv>GksPM^>z+SPMv>Z^M4qe87vqZ^>4ZzctvgZ^Z4dNEgv>r+g^qaKJ^>xk^qqx>u^Z^M^qfx+vMZ^KIVMdv>lUUkp4ZH|Rv>oK^MxkVdKvAr+O^Az+$sMv7xk^ARVOE+XsM^uxk^AZxuG+lsM^OxkVARv7xk^dgVAjkvuuy>y+csMxu^k^dO^uqY+vI^dp^+Vgjkvgp^gy+|sMxdc+I^u9+cTUkfdSsLg^AZozUkHkoVM^K8kvVME+2VM^KZ^KB>lE1^MZ^MBgVHk^Ku^KjEUkE+2VM^MZ^MB>lE1^qZ^qBgVHk^MZ^MBgP2h^Rp^RVK2+=VM^K|k^K2+xqI^q2NUky+vVMxMF9+^>5VMx>vMp^K^qdxqCzUky+$VM^MfxMvMgozUkppxK2K^Kxk^uqxAc+O^Ay+YsMxO^k^AR^Oz+2sMvIxk^AgV7E+EsM^Oxk^AdxO^k^ug^AskxuIs>y+ssMV7jkvAO^7RD+xdvAp^+^gskxZ6^gy+EsMVdQ+L^A9+EjUkBkssLg^Og8xUkykyVM^K8kNVMz+lVMvMZ^K4ZNskvqZ^>4hjYAvRD+NVM^qXkxq9+^Ku^K8sUkE+SVM^>p9+Vq6vq^q^RpVRxKI^KHsUky+QVMx>F^>^MgexUkJW^MoK^MskxAu^Or+OVuE+lsM^Oxk^uqxOG+DsM^OxkVu>v7y+lsM^OskxuI^Oxk^AZxu^k^Auoqz+SsMvAxk^AOVuK|+^d^ApV+xg^k^ZF^gz+lsMvur+I^uD+l^UkmqSsLgVA>HCDkGkHVM^Kz+GVMv>Z^M4Z$E1vMZ^K4IH2Zv>oK^MxkVuKvOr+O^1z+$sMvOxk^1RVAE+XsM^Axk^1ZxAG+lsM^AxkV1RvOxk^ugV1jkvAuVqy+csMxA^k^uO^AqY+vu^up^+Vgjkvg6^gy+|sMxdc+I^A9+e8DkfdSsLO^uZCUDkHko^M^KGkv^MxMHk2^M^>8kY^ME+D^M^>Z^>BK=SO^KZ^KBADsg^MD+=^MVM9kv>Y+^KuVKC=DkG+=^M^>pD+xMC+^>^M^qfxqvMu^Ks=Dkz+$^MvMp^K^>ZH=DkFR^>oKV>jkvOR^ur+AxtG+=sM^uxkVtKvAy+DsM^uskxtO^uy+lsMVOjkviu^OxkVA>vixk^AurRE+VsM^uxk^AAxuu9+^d^Afx+vdxk^Z<VgE+ysM^ur+IVAY+NTDk4qSsLAxdOyNDkGkN^MVKykG^M^MGkS^MV>ekH^My+S^M^qRxqmRGU1^KRxKmtT|R^>y+>vRxk^qRBpVSgR^K^>VqJvk^MD+G^MVM9kv>Y+^>uV>lQDkG+G^M^MpD+xqC+^M^q^ZfxZvqu^>2NDkz+y^Mvqp^>^MZlNDkF4ZcVkVMVkv>xk^ARVdQ+t^7y+=sMVdjkvIR^dy+UsMxd^k^7g^dz+=sMvuxk^7uVdjkvOg^7xkVARsZy+ssM^OskxAt^OR9+VuxAF^+^gxkVZ6vdy+EsM^dy+uvA9+VSDk4>NsLt^OgocDkjkV^MvMGk$C>^MjkoC>vq8k=C>y+8C>xKA^K4Z8E1xMX+=C>^My+YC>xKA^K4g8|IxM2K^Mxk^uqxOc+O^Ay+YsMxO^k^AR^Oz+2sMv7xk^AgVOE+EsM^Oxk^AdxO^k^ug^AskxuIEgy+ssMVOjkvAO^ORD+xdvAp^+^gskxZo+^gy+EsMVdQ+L^u9+lPDkBkssLg^Og^VDkykNC>^Ky+XC>VKMvM4gSskV>Mvq4AljAVKMvM4uvxkVMVkv>xk^uRVOQ+t^Ay+=sMVOjkvOR^Oy+UsMx7^k^Ag^7z+=sMv7xk^AuVOjkvAg^AxkVuRsgy+ssM^Askxut^AR9+VdxuF^+^gxkVZ5vdy+EsM^gy+uvO9+Dv9k4>NsLt^OglY9kjkEC>vMGkSC>^MjkyC>vq8ksC>y+jC>xKA^K4RvSOx>A^>4AzckxMX+sC>^M|kVMv+vMu^Kl29kz+SC>v>p9+^>0xMvq^qp^qVKRvMoY9ky+sC>VKJvM^>g=Y9kfKvqoK^>xkVAKv7r+O^uz+$sMv7xk^uRVOE+XsM^7xk^uZx7G+lsM^OxkVuRv7xk^AgVujkvOuGAy+csMxu^k^AO^uqY+vd^Ap^+Vdjkvgo+^dy+|sMxAc+I^d9+r99kfdSsLO^OZy|9kHk$e>^KGk8e>xMHk=e>^>8kUe>E+le>^MZ^MBK=SO^KZ^KB>v|R^MD+De>VM9kv>Y+^KuVKyX9kG+De>^MpD+x>C+^M^>^qfxqvMu^KX|9kz+2e>vMp^K^>ZE|9kFR^>oKV>jkvuR^Or+AxuG+=sM^IxkVuKv1y+DsM^OskxuO^Oy+lsMVOjkvAu^OxkVd>vAxk^duxAE+VsM^uxk^dAxuu9+^A^dfx+vdxk^Z$+VgE+ysM^ur+IVdY+2y9k4qSsLdxAOXH9kGkye>VKykse>^M8kGe>$kSe>UkHe>8kVe>z+Ne>v>Z^M4ZENOvZD+Ge>^Rv+f7TM^qZVqfIzeu^>r+ZxZ=+4dX=IVMMv>4glxOVgP+vuR^M^gVdJvk^R^k^R^CEyqxd^k^ZR^dqxqvq^Zp^+VK2+Ve>^Ky+Ge>VKE+Ve>^R=+^KVRx>X+He>^>D+Pe>HGGK=+4dTMV>Mvq4uzeuVRQ+O^Zy+He>Vd7vu^gy+Ve>VdZvd^d^uxkVZKvAR^>^RVZJvk^KoK^Kskxdu^Ar+OVAE+lsM^7xk^Aqx7G+DsM^7xkVA>vIy+lsM^OskxAI^Oxk^dZxA^k^duCOz+SsMvOxk^dOVAK|+^u^dpV+xg^k^Z2+^gz+lsMvur+I^uD+yClkmqSsLgVO>EolkGk$o>^Kz+Co>vMZ^K4ZNskv>Z^M4OjUuvMZ^K4gPNOv>oK^MxkVuKv7r+O^Az+$sMv7xk^ARVOE+XsM^Ixk^AZxIG+lsM^OxkVARv7xk^ugVAjkvAulOy+csMxO^k^uO^OqY+vu^up^+Vgjkvg=+^gy+|sMxdc+I^u9+r2lkfdSsLO^AZG9lkHkDo>^KGk9o>xMHkXo>^>8k|o>E+No>^MZ^MBKHU1^RZ^RBOQ|R^Mr+gVqjkvRR4tVEkKvZ^M^qpV+xKX+Eo>^K|kVKv+vqu^>GDlkz+lo>vMp9+^Z0xKvg^gp^gV>RvqX9lky+Eo>VMJv>^KgG9lkffAcVk^KoKVKjkvAR^Ar+AxAG+=sM^OxkVAKv7y+DsM^7skxAO^7y+lsMVIjkvOu^IxkVu>vOxk^uuctE+VsM^Axk^uAxAu9+^d^ufx+vdxk^ZD+VgE+ysM^gr+IVuY+DElk4qSsLAxOOoylkGkso>VKykCv>^MGkVo>V>E+ov>^KZ^KBKU87^>Z^>B>=j+^KZ^KBRsEg^>r+gVqhut^RxkVqKvZR^K^>VqJvk^MZ^M7x>i^>VzlkpB>$ER^>oK^>skxuu^Or+OV7E+lsM^Axk^7qxAG+DsM^OxkV7>v7y+lsM^Iskx7I^Ixk^uZx7^k^uuCiz+SsMvOxk^uOVAK|+^g^upV+xd^k^Zl+^dskxRu^ZR^>VqxRF^+^KZVKf7ycA^Zr+ZxR|+=clk4qrsLKvRgNxlky+rsMx>=+4ACDIVqMvR4A=lLVZQ+O^gy+ssMVRjkvdR^RRVqxZvdp^+^KY+x>vM^MoK^MskxRu^qR^KVZxRF^+^MgjETkykDv>^K8k=v>$k2v>Uklv>8kXv>$klv>UkNv>9+yoTkBkssLg^KD+Uv>xKA^k4AQ^AxKT+^Kg^qdxqH^lkZ^kgVKC+mIjK^>0xKvq^Rp^RVqRvRECTkZ^kZxMF^M^KgrCTkJy=TrC>^KD+=v>VKE+Dv>^MZ^MBRsEg^Rr+gVqjkvRRRRVMxRvRp^+^KU+=v>vMgo=TkGkcv>xKUkHv>$+4gUMvqZ^>4ZTDkv>r+g^qz+Sv>vup^d^R8kxdO^dD+sv>VdjkvRR^RRV>xMvRp^+^K2kxK$DL^qD+Hv>VqE+C$>^M$+4gUMvRZ^q4d|euvZr+g^Zz+Gv>vdxk^ZRVgKvR^R^ZpV+xKGk^M^K^ReKxRG+lv>^KZVKf1N^A^>D+Tv>x>G+Xv>^KuVKDETk=+4dTMVqMvR4uzeuV>Q+O^Ry+Dv>VgE+lv>^d=+^gVdxZG+Xv>^gpVgxd4^gg^gU+Dv>vdA^Z^dVgjkvZR^gRVqx>vZp^+^KU+Xv>vMy+lv>^>z+Dv>vgZ^>^ZVR2+yv>^Ry+lv>VKE+Nv>^>y+lv>VZE+Sv>^gZ^ZVgxR^k^K^>^Rz+=v>vMy+Nv>^>z+lv>vZxk^K^>VRE+lv>^KpgVRokvM^R^RD+Yv>xROs=Tky+lv>VKVkvMskxk^>qxAck^M^>^KeKxK^k^q5^ZD+$NTkmqSsLgVA>X^TqGk$$>^K$ko$>Uk=$>8kD$>$k=$>UkX$>y+$$>VMMv>4gCvhVK2+D$>^Ky+$$>VMMv>4golLVq2+l$>^qy+$$>VKMvM4gEsgVM2+X$>^My+$$>VKMvM4g9DuV>2+E$>^>y+$$>VKMvM4gNvZVM2+N$>^Md^Ky+>v>9+SjTk4>NsLO^RgSVTqjkE$>vM8kS$>8kj$>Y+lDTq4qSsLZxMX+S$>^My+r$>xMG+l$>^>=+VMx>vMD+G$>^KgxMA^M4g^eOxqc+g^Rr+Y+xZG+X$>^ur+7x7|+lxTk4qrsLgvugEy=qGk^$>xKHko8>^MGkv8>x>Uk28>y+$8>VMMv>4RGU1V>Mvq4tT|RVMQ+O^qxk^qqfY+CeiR^>VMxqF^+^KD+88>xKzk^KY+^MdxMEz=qy+28>^KfY+vZ5^K^RVgJvd^Mgs9DuZVeE+OGN=qgSOZsX2ZA^M41HDtxqF^q^>uV>XvXkA4qSsLBZyCA^Mr+gVRE+NGq^ZZ^ZBAe9t^gZ^gB>lQ7^dxk^Rqxdu4qSsLVMxRF^+^>pV>xqOHvXkp4iVEhvRxk^K4Z=eIvRoK^Kgj=XkC+muQ9g^MRxMmdGCh^>y+>vZ$+4ASQ1xZA^Z4JPS1xuc+g^g$+BAYE+^Ar+gV7jkvIRarkVAx7vuxk^gRVdKvg^u^gpV+xq^k^RR^qqxMvq^Rp^+VKVkvMglrNkGk^GqxKHkocq^M8kvcqekDcq8k=cq8kUcqekEcq8kXcq8k|cqekScq8kycq8krcqekHcqD+$cq4sIjc1X+2cq492MleKalTXky+lI^>Rx>musEk^Ky+>vRxk^qRBSqjcRR^>^KVqJvk^MD+=cqVM>2XXkBY+vkVKx+HkR^KS+VM2+lcq^MBY+z+yx>v>r+g^qz+Hx>vgxk^qRVZQkv>^q^KD+UcqxKG+Nx>^Kr+ZxqA4qSsLBZyCA^Rr+uVgE+Dx>^dxk^gqxd^k^gg4ZlGdu4qSsLVRxgF^+^ZxkVqKvgrk^K^qVM2+Ecq^Mr+XaVKjkvMRRxkVK>uxk^KupjkvMORxkVKuuxk^KtqjkvMLRxkVKtuxk^KaqjkvMpRxkVKauxk^KFqjkvM6RxkVKFuxk^K5qjkvMwRxkVK5uxk^Ko+qjkvM$+RxkVKo+uxk^K=+qjkvMD+RxkVK=+uxk^KX+qjkvME+RxkVKX+uxk^Ky+qjkvMS+RxkVKy+uxk^Ks+qjkvMH+RxkVKs+uxk^KCkqjkvMokRxkVKCkuxk^K2kqjkvM=kRxkVK2kuxk^KlkqjkvMXkRxkVKlkuxk^KNkqjkvMykRxkVKNkuxk^KGkqjkvMskRxkVKGkuxk^KVkqjkvMCKRxkVKVkuxk^K$KqjkvM2KRxkVK$Kuxk^KDKqjkvMlKRxkVKDKuxk^KEKqjkvMNKRxkVKEKuxk^KSKhjkvMGKRxkVKSKuxk^KHKqjkvMVKRxkVKHKuxk^KoMqjkvM$MRxkVKoMuxk^K=MqjkvMDMRxkVK=Muxk^KXMqjkvMEMRxkVKXMuxk^KyMqjkvMSMRxkVKyMuxk^KsMqjkvMHMRxkVKsMuxk^KC>qjkvMo>RxkVKC>bxk^K2>qjkvM=>RxkVK2>uxk^Kl>qjkvMX>RxkVKl>uxk^KN>qjkvMy>RxkVKN>uxk^KG>qjkvMs>RxkVKG>uxk^KV>qjkvMCqRxkVKV>uxk^K$qqjkvM2qRxkVK$quxk^KDqqjkvMlqRxkVKDquxk^KEqqjkvMNqRxkVKEquxk^KSqqjkvMGqRxkVKSquxk^KHqqjkvMVqRxkVKHquxk^KoRqjkvM$RRxkVKoRuxk^K=RqjkvMDRRxkVK=Ruxk^KXRqjkvMERRxkVKXRuxk^KyRUKjkvMSRRxkVKyRuxk^KsRqjkvMHRRxkVKsRuxk^KCZqjkvMoZRxkVKCZuxk^K2ZqjkvM=ZRxkVK2Zuxk^KlZqjkvMXZRxkVKlZuxk^KNZqjkvMyZykxkVKNZuxk^KGZqjkvMsZRxkVKGZuxk^KVZqjkvMCgRxkVKVZuxk^K$gqjkvM2g3xkVK$guxk^KDgqjkvMlgRxkVKDguxk^KEgqjkvMNgRxkVKEguxk^KSgqjkvMGgRxkVKSguxk^KHgqjkvMVgRxkVKHguxk^KodqjkvM$dRxkVKoduxk^K=dqjkvMDdRxkVK=duxk^KXdqjkvMEdRxkVKXduxk^KydqjkvMSdRxkVKydbxk^KsdqjkvMHdRxkVKsduxk^KCuqjkvMouRxkVKCuuxk^K2uqjkvM=uRxkVK2uuxk^KluqjkvMXuRxkVKluuxk^KNuqjkvMyuRxkVKNuuxk^KGuqjkvMsuRxkVKGuuxk^KVuqjkvMCARxkVKVuuxk^K$AqjkvM2ARxkVK$Auxk^KDAqjkvMlARxkVKDAuxk^KEAqjkvMNARxkVKEAuxk^KSAqjkvMGARxkVKSAuxk^KHAqjkvMVARxkVKHAuxk^KoOqjkvM$ORxkVKoOuxk^K=OqjkvMDORxkVK=Ouxk^KXOqjkvMEORxkVKXOuxk^KyOqjkvMSORxkVKyOuxk^KsOqjkvMHORxkVKsOuxk^KC7qjkvMo7RxkVKC7uxk^K27qjkvM=7RxkVK27uxk^Kl7qjkvMX7RxkVKl7uxk^KN7qjkvMy7RxkVKN7uxk^KG7qjkvMs7RxkVKG7uxk^KV7JjkvMCIRxkVKV7uxk^K$IqjkvM2IRxkVK$Iuxk^KDIqjkvMlIRxkVKDIuxk^KEIqjkvMNIRxkVKEIuxk^KSIJjkvMGIRxkVKSIuxk^KHIqjkvMVIRxkVKHIuxk^Ko1qjkvM$1RxkVKo1uxk^K=1qjkvMD1RxkVK=1uxk^KX1qjkvME1RxkVKX1uxk^Ky1qjkvMS1RxkVKy1uxk^Ks1qjkvMH1RxkVKs1uxk^KCtqjkvMotRxkVKCtuxk^K2tqjkvM=tRxkVK2tuxk^KltqjkvMXtRxkVKltuxk^KNtqjkvMytRxkVKNtuxk^KGtqjkvMstRxkVKGtuxk^KVtqjkvMCibxkVKVtuxk^K$iqjkvM2iRxkVK$iuxk^KDiqjkvMliRxkVKDiuxk^KEiqjkvMNiRxkVKEiuxk^KSiqjkvMGiRxkVKSiuxk^KHiqjkvMViRxkVKHibxk^KoLQ>jkvM$LRxkVKoLuxk^K=LqjkvMDLRxkVK=Luxk^KXLqjkvMELRxkVKXLuxk^KyLqjkvMSLRxkVKyLuxk^KsLqjkvMHLRxkVKsLuxk^KChqjkvMohRxkVKChuxk^K2hqjkvM=hRxkVK2huxk^KlhqjkvMXhRxkVKlhuxk^KNhqjkvMyhRxkVKNhuxk^KGhqjkvMshRxkVKGhuxk^KVhqjkvMCJRxkVKVhuxk^K$JqjkvM2JRxkVK$Juxk^KDJqjkvMlJRxkVKDJuxk^KEJqjkvMNJRxkVKEJuxk^KSJqjkvMGJRxkVKSJuxk^KHJqjkvMVJRxkVKHJuxk^Ko3qjkvM$3RxkVKo3uxk^K=3qjkvMD3RxkVK=3uxk^KX3qjkvME3RxkVKX3uxk^Ky3qjkvMS3RxkVKy3uxk^Ks3j>jkvMH3RxkVKs3uxk^KCaqjkvMoaRxkVKCauxk^K2aqjkvM=aRxkVK2auxk^Klaq2+Ncq^KD+EcqBiGs+D+NcqXiy+av>xk^MRBKocAxk^MgBMDE1xk^MuBK^DAxk^MOBKQy1xk^MIBK=Euxk^MtBK2SZxk^MLBK=SOxk^MJBKHcuxk^MaBKHU1xk^MpBKU87D+ycq^Mv+f1x9I^R=+VRly>vMD+Scq^Kv+fhyXk^K$kVKxMzk^M4ISKxKI^K$GQk$+BAGXk^KZ^KBZl^d^qp^qVM>GGQk$+4AY^dxKF^K^MD+jcqxMG+$x>^ZS+VqE+2cq^gxk^qB>vQh^gy+EcqVgjkvR4gyTuVgE+$cq^gxk^qB>yDA^gy+2cqVgjkvR4g^D1VgE+2H>^gxk^qB>vTu^gy+ScqVdjkvR4gv2hVdE+Scq^gxk^qB>zxO^gy+$cqVujkvR4gNqVuN+vdy+y7^dskxgmgxI^dskxqmgjxu^gz+Dcqvdxk^q4ZSvivdy+ycq^dskxqmg^~^dY+xZvR^RZ^RBqGcA^gr+gVqY+DeNk4qSsLZxZOEENkGkosqVKE+DH>^My+GcqV>Hkv>^>4<=GgxKG+osq^KZVKfO9GI^q$kVqxMV+^M4AxzuxKI^KoUNk$+BZ$DI^gZ^gBZ9c7^Kr+OVqE+s7^Rxk^qqxRG+osq^>ZV>fO9GI^dxkVq>vuS+^Ry+esqx>A^>4gDGIxZA^Z4gG8ux>^k^R4gDvdx>G+osq^>ZV>fO9GI^dZVdfOssg^>xkVRfOG$g^>xkVqRvZR^g^KVqJvk^My+lcqVKMvM4ge9AVRQ+O^qS+^Zz+VcqvOZ^A4Z^zIvqZ^>4ZS9+vuxk^Z4Z2jtvu9+s9Nk4>NsLu^dgHlNklk$sqG+2H>^My+jcqxq$K^M^q4<ST+vMoK^KxkVZfOYPt^dy+^7x>^k^Z4gN2Zx>G+osq^>ZV>fOvyI^uZVufOQck^>xkVZfOD~^>y+Ycqx>^k^Z4gNrOx>^k^qR^ZqxKvZ^qp^+VMVkv>xk^qRVZKvZ^g^qpV+xMA^M4uTc1xqc+g^Z9+UNNkfdSsLg^dZEyNkHkXsq^Ky+Ucqx>A^>4AQxOxKc+u^qy+TsqxR^k^qR^RskxqODqR^>VKxqF^+^MpD+xKVkxk^ZRVdKv>^q^ZpV+xKVkg=XzkGkQsqxKHkysq^MGkrsqx>7^Kr+gV>Y+ojNk4qSsLdxqOyTzkGkHsqVKykoxq^M8kCxqb2lzk=+4hDUOVMP+vqrk^M^>VK2+$xq^Ky+CxqVKMvM4dx$hV>Q+t^Ry+ysqVZjkvZR^Zy+QsqxZ^k^Rg^ZskxRI3R^KV>xRF^+^My+rsqxMA^M4O|r7x>F9+^M5V>xMvZu^R2PNkz+Dx>vqy+Cxq^qz+NsqvZZ^R4Alr7vgCK^>^qVZxMG+Cxq^M9+PPNkfdSsLR^ZZSUzkUkDxqy+CxqVKMvM41SNtVMS+v>I^KuVKyUzkA4qSsLBZyCA^>r+gVqE+$xq^RZ^RBZc9I^Mxk^qqxMu4qSsLV>xqF^+^KD+UxqxKG+Dxq^MZVMf1^lh^>r+Zxq^k^qRRqxMvq^qp^+VKS+vM4RQouV>dvqD8zky+DxqVqMvR4A^lhVRQ+O^gxk^gqKu^q^R^gfx+vMs+^K4qr9uvZp^R^>dx>=Uzky+Vsq^>v+fIX2Z^Zr+ZxdA4=+QGZBZyCA^ur+uVAE+Xxq^Oxk^AqxO^k^Ag4qUHdu4=+QGZVuxAF^+^gxkVdKvdrk^Z^dVR$+vq^R^KgjUzkE+Cxq^Ky+CxqVR$+vM^R^>skskxMmfvz7^Zz+HsqvRZ^q4gXykvqr+g^Rz+NsqvgZ^Z4gjmvdxk^RRVgKvR^>^RpV+xMOXTzkBY+okxMvkGkR^Mz+ssqv>y+R^>Y+xMvq^ZBY+ckjkvqR^qrkVKx>v>oK^MgYyrkykSxq^KGkyxqVMeksxq8kGxq8kcxqekCHq8kVxq8k^xqek2Hq8k$Hq8k8HqeklHq8kDHq8k9HqekNHq8kEHq$+BqQM^KZ^KBRjeu^MD+SxqVMC+mdTM^MRxMmuVd^qU+yxqvR$+4dlMxKA^K4ATvdxMX+sxq^MD+xxq>X+VxqCkr+7xK^k^KR4qe87^k^Kg4qD8d^k^Ku4qUC+^k^KO4qEaX+CHq^Kr+3xKc+u^>xkV>Kuy+Nxq^MRxMmgVx+^qz+XxqvZZ^R4ZGXRvdyk^q^gVMjkvqg^MxkVKKvqr+u^MskxMugy+NxqVqMvR4gxTuV>E+Sxq^RZ^RB>C|R^qyk^>VqxZ^k^Mg^ZskxKO^Mr+uVqjkvRRuy+QxqxMA^M4gcvhxRG+Nxq^MZVMfOxTu^>ykVRx>v>xk^qgVMjkvMu^qr+dxM^k^MROz+XxqvqZ^>4ZorgvRy+Nxq^>Rx>mgsvh^gzkxqvd^Rxk^MZxR^k^KO^My+Rv>xk^MR7E+Sxq^>Z^>B>St^Ry+NxqV>Mvq4g2rgVZEkvZ^Z^>xkVM>vqxk^KIVMQ+I^Mxk^MqOG+Nxq^qZVqfOG$g^gy+Qxqx>A^>4gQtxqGk^g^q^>skxMO^>xk^K1xMc+u^MxkVMKay+Nxq^>Rx>mgXst^qz+XxqvqZ^>4Zy$gvZyk^q^RVgjkv>g^gxkVKIv>r+u^MskxMuJy+NxqV>Mvq4gVx+VRE+Sxq^qZ^qB>T=O^gyk^RVgx>^k^Mg^>skxKp^MD+oHqVKE+Gxq^K|k^K2+x>I^>SUyky+zxqxKF9+^M5VKxMvgp^Z^>dx>GDyky+yxq^MRxMmgCM^ZfxZvqu^>=Sykz+Exqv>Z^M4ZHKvMD+$Hq^Kz+Vxqv>Z^M4gGygvqr+O^qy+Rvgxk^ZR3E+=Hq^RZ^RB7PlZ^gy+$HqVRMvZ41|jRVdEkvd^d^RxkVZ>vZxk^qRVZQ+I^Rxk^RqJG+$Hq^gZVgfaSoZ^Zy+vHqxgA^g4iGlZxAGk^Z^A^dskxRO^dxk^qZxRc+u^RxkVRK6y+$Hq^uRxumt^$u^gz+CHqvgZ^Z4iNoZvIyk^g^7VZjkvZg^ZxkVqRvZR^M^>VqJvk^Ky+oHqVKMvMR^>ZV>>vMy+$Hq^qRxqmt^$u^Zz+CHqvZZ^R4I9jRvRyk^Z^qVRokvM^R^RxkV>>vZy+yxq^>Xkx>9+^Ku^KrjykE+Gxq^Rp9+Vq6vZ^q^>pV>xKI^KyGyky+zxqx>A^>4gSThxqF^q^KuVKNerkG+yxq^KZVKfOjTh^>D+8Hqx>G+oHq^>ZV>f7Hyg^Zr+AxKc+u^RxkVRK<y+2Hq^gRxgmiclZ^dz+oHqvdZ^g4I9jRvOyk^d^AVOjkvZg^OxkVKKvZr+u^gskxgu6y+2HqVdMvu4LSoZVRE+DHq^OZ^OB7PlZ^dyk^RVdxu^k^gg^uskxKO^gr+uVRjkvZR<y+8HqxdA^d4tV$uxgG+2Hq^dZVdfaSoZ^uykVgxuvOxk^RgVAjkvMu^RRV>xZvMp^+^qz+GxqvRZ^q4OPEgvgr+g^Rz+sxqvdxk^RRVgKvR^Z^RpV+xKX+=Hq^KD+UHq3G+oHq^KZVKf1N^A^RD+9HqxRG+lHq^RU+VRKvMu^KVzrkz+NxqvMy+sxq^ZtxZvdy+lHq^Zuxgvg^u=+^KVuxRX+XHq^Ry+jxqxRG+oHq^gy+THqxZA^g^Z^dRxdO^Z=+^RVZxKX+EHq^K$+Bd=eu^Ry+EHqVZ$+vZ^Z^KuVKCQrkG+DHq^KuVKClrkG+=Hq^Zy+^xqxRG+Sxq^Ay+cxqxu3^u^dy+^xqxOA^O4AQ^Axu1^d^u^OY+xAv7^gZ^RVgxKDk^Z^K^KU+$HqvMgDlrkD+UHqiG+=Hq^gy+eHqxRG+XHq^dZVRxdvgZ^ZRVuMvA47eQgVRQ+O^Zy+VxqVdjkvgR^dRVuxRvgp^+^Kz+lHqvuZ^d4OPEgvgr+g^Az+sxqv1xk^ARVIKvu^Z^ApV+xR8+^K^R^Z8kxgvg^ZD+=HqVZE+2Hq^RZ^RBZjY1^Zr+uVAE+NHq^gxk^Aqxg^k^AggqxRvg^Ap^+VKE+EHq^KpgVZhvM^Z^ZD+9HqxZOX$rky+=HqVKVkvM9+ErNk4>NsLt^MD+Ex>VMY+2Drq4qSsLZxRX+yx>^Rgxcrkyk=Pq^KGk2PqVMeklPqB2jrky+8PqxMG+$Pq^Z=+VMxZvMD+=Pq^KZsjrk6Y+vk^KV+yku^KoK4iVEh6Y+y+=PqVKJ|+^MUk^KVMx>I^>$crkoKBI2Qhy+yG>^Mz+$PqvR=+^M^qVKVkvMgSTjkGkTPqxKUkEPq8kNPq$kEPqUkSPq8kGPq$kSPqG+XPq^KZVKfOsvi^qD+|PqxqG+XPq^KZVKfO^lu^MD+QPqxMG+XPq^KZVKfO^D1^MD+zPqxMG+XPq^KZVKfONq^MD+rPqxMG+XPq^ZZVZfOyTu^KD+jPqxK=+4uX2ZVMP+vqrk^M^>VK2+VPq^K$+4uHUIv>Z^M4LVNLvqr+O^qz+SPqvZxk^qRVRjkvRg4OsVkN+vZ9+VeSk4>NsLu^ggXoSklksPqIgloSkgeoSkSk^k^R4gTDuxg^k^qu^RqxMvq^qp^+VKC+muD9L^>y+RvRek^RxkVqKvZS+^Ry+cPqxg^k^R4R^$kxgG+EPq^ZZVZfISEg^dr+Zxu^k^uRRqxZvu^up^+VgjkvZ4gsHuVgE+SPq^gxk^RB>vTu^gy+SPqVgjkvZ4gNqVgE+GPq^dxk^RB>v91^dy+GPqVgjkvZ4gyTuVgY+sUSk4qSsLdxdOH$jkTk$VqjkoVqvMGk=Vq^M$k2VqUklVqy+2VqV>E+lVq^MZ^>VMxKX+DVq^KLVM2+EVq^My+DVqVMCkv>^qs+^qBdTXu^Ku^KQ$jkE+lVq^Ks+^KBd8Qg^Mu^MzXSkE+EVq^qZ^qB>VHu^KZ^KBZS^A^>U+^>qxKF^K^MuVMSojk|+l|Sk4qrsLKvMgSojk8kjVqekVVq8kHVq8kPVqek$^qy+2s>^Kz+=VqvRZ^q4Zxluvdr+g^Rz+=IvuZ^d4dSEkvAr+g^Oz+=VqvOZ^A4ZXqv1xk^ORVIKvu^u^OpV+xZ^k^RR^Zqxqvd^Rp^+V>$+vM^>^MD+jVqxMG+GVq^MZVMKvqD+sVq^>z+yVqvMZ^KgVM2+C^q^My+Cs>V>E+VVq^Ry+=s>VZ7vg^M$+4uHUIvdZ^g4u$lLvAr+g^Ay+RvIy+lVq^IRxImg^D1^1skx7u^1y+lVqVIMv14gyTuV1jkvIg^1ZV7f1ECA^1r+ZxIG+lVq^tZVtfOsHu^ixkVIKvLR^7^1VIJvk^Oxk^AqxOu^g^u^Afx+vgv+^>^RVMxZvMD+VVq^KCkxKA^K4A|CAxRc+u^uy+vs>xO^k^uR^Oz+RvOy+HVq^1Y+xAvt^Oxk^uZxOu^K^R^ufx+vqZ^>4ulCAvZr+g^Zz+sVqvOxk^ZRVAKvq^R^ZpV+xMX+C^q^My+9VqxMA^M4gcHuxZA^Z4dzYuxOc+g^uxkVuKuR^Z^OVuJvk^Ry+lVqVRP+v>xk^R4ZSHuv>y+C^q^MeKxM2K^Ky+DVqVKMvM4drjdVMQ+O^qy+2VqVRjkvRR^RRVKxMvRp^+^>eKx>G+DVq^MoKVMjkvZ4gXDuVdY+V8jk4qSsLAxgOSljkTk$^qjko^qvMGk=^q^Mjk2^qvq8kl^qLVK2+E^q^Ky+l^qVKMvM4gsHuVME+l^q^Ky+D^qV>jkv>^K^>y+8^qxKG+=^q^>y+U^qxR^k^K^>^Rz+o^qvMZ^K4uX^AvRU+^qgVKRvMG9jk$+4gUMvRZ^q4uDvdvqek^RRVqx>vZp^+^MH+xMA9^9Nj6l^9N8^k^>fx>vMu^KNljkz+2s>vMy+2^q^>Y+xKvq^MoK3skxRmgUPL^gskxqO^Rrk^>VqxK2K^Kg2zjkjkX^qvMGky^q^MbSEjkG+N^q^>ZV>fm=GA^KZVKfLDNh^MZVMf3QSd^Kr+Zx>G+y^q^gxkV>KvdR^M^KV>Jvk^qgVNjkbv+Yk^K^+GkqxKG+R^R$+BRN2Z^KN+^RVKx>I^>VNjky+qxKA^K4OsVkx>2K^>BY+eKv+OlcjkGks^qVKekCCRy+s^q^qRxqmdX=I^RCkxqck^R^q^>Rx>m7eQg^qCkxgu^>^q^gfx+v>Z^M4d$$+vRr+g^R~fiYXd4qrsLxg^k^RR^gqxMvR^Rp^+VK2+CCR^Ky+H^qVKS+vMY+^RuVR2Gjk2K4gGz7z+G^qvMZ^KgVqdvR=cjkp4Zyz7vRoK^q9+e2PqfdSsLg^ZU+sx>vg9+C$$K4>NsLO^MD+oH>VM>2TGk8k$CR8k8CReklCR8kDCR8k9CR2+ECRY+y+Gj>VKzkvM^>u^>PCGka2Vjk$+47jTtxRc+g^KxkVKKme+YHOrkVRxKvqek^KRD+x>vMp^+^MZNCGk6Y+vk^KV+yku^Ky+RV>C+muX2Z^KQ+x>vM^Mu^MrCGkE+lj>^Ky+RV>$+vM^>^MD+9CRxMG+lCR^MD+jj>xM6Y+gDeGkz+yj>vMD+lCR^Kr+xMG+lCR^>D+8CRx>V+^>Y+^KOxK2vGky+2CR^qfY+vqUk^q^>VRJvZ^Ku^KjvGkJ|+^Zp^ZV>>y$Gky+2CR^KRxKmicNd^qfxqvqD+$CR^>Xkx>9+^qu^qP8GkE+=CR^Kp9+V>6vM^>^RpVRxqI^qy2Gky+vCRxqF^q^>gc2GkJ9+^>xk^MBpS^O^>y+lCRVK2+XCR^Ks+^K2+xqi^qs=Gky+UCRxKF9+^>UkVKx>vZp^R^qdxqyUGkp9+^>fx>vMg=DGky+UCRxqA^q41r$kxRF^R^KD+YCRxKzk^KY+^>dx>s9Gky+=CR^KfY+vZ5^K^RVqJvR^>u^>9lGkE+lCR^Rp^RVK>SlGkpY+^KskxMm6Eld^KeKxMOHYckGk$eRVKE+Xj>^>y+$eRVKY+XXGk4qSsLZxgOXYckGkDeRVKekEeR8kXeR8k|eRekSeR8kyeR8kreRekHeRy+Xj>^KSkxKvRu^qG2ckv+f1CDI^MZVMf0YTI^qr+dxZG+DeR^>xkVZKvqxk^ZgBZ^EgR^M^qVZJvk^KD+EeRVKS+vMY+^Z7VZlzGkG+EeR^KpD+x>Tk^K^>^gfxgvg7^ZHrGkz+leRvMZ^K4ZDDuvqD+EeR^>c+x>9+^K7^KrrGkE+yeR^>p9+Vq8kvq^q^gpVgxKF^K^ZuVZXSGkF9+^>pV>xKOHjGky+EeRVqMvR47eQgVZP+vZR^q^ZVRJvk^>p^>VK2+NeR^K|k^K2+x>I^>DcGky+TeRxKF9+^R5VKxRvup^d^>dx>$sGky+XeR^RfxRvMg2sGkp2+xKX+SeR^K$+BZ$DI^ZZ^ZBb9TI^Kr+uV>E+XeR^Rxk^>qxR^k^>g4ujEgu^Z^K^>fx+vdD+yeR^gc+xg9+^>7^>PPGkE+GeR^Kp9+VR8kvM^R^dpVdx>i^>DCcky+zeRxKA^K4g=PLxRX+yeR^Rs+VRv+vd7^g$Cckz+EeRvMp9+^d=kxKvu^Rp^RVgJvd^>u^>^CckJ|+^>p^>VK>Xocky+yeR^>Rx>m7eQg^gCkxAu^>^g^Afx+vZp^R^KU+XeRvM|k^KY+VRRvZGvcky+NeRVKJ|+^g5^KVgxAF^A^RuVRD$ckG+NeR^RpVRxKOy$ckpY+VK2+HeR^KS+^Rz+NeRvMxk^R4ZyUuvMy+GeR^KskxRmgVI^KU+=eRvZy+leR^KU+Dj>vMg$Ycky+Tj>xKX+leR^Ky+9eRxK2K^KCK^>VKxgv>oK^M9+x=XkfdSsLu^KU+$H>vMgVsck8kzoReksoR8kGoR8kcoRekCvRD+HoRY+z+Ej>vqjk^>^KdxKVXckBV9ck$+BdHTt^>r+gVqjkvRR44=|IQkvq^q^MekV>K|+^M^>pV+xKONXckBY+okxKvkGkR^Kz+KvM$+4uT2ZxMS+^K^M^RdxRSXcky+=j>^Mz+KvM=+^M^KV>2+CvR^>y+HoRVM2+Gj>^MBY+Zo|ckG+yj>^MD+xoRxMs+^qy+HoRVM2+soR^Ms+^M2+x>i^>VEcky+roRxKF9+^MUkVKxMvZp^R^>dx>GQckp9+^>fx>v>glNcky+roRxKA^K4iGNdx>F^>^MD+zoRxMzk^MY+^KdxKVzcky+yoR^RfY+v>5^R^MVZJvg^Ku^K|yckE+GoR^>p^>VM>syckpY+^Mskxqm4C+^Mz+GoRvMD+soR^Kc+xK9+^>7^>rSckE+VoR^Kp9+VM8kvM^M^RpVRx>I^>ljckpD+x>F^>^KgvGckE+VoR^MZ^MBAs$k^>p^>VK2+HoR^K|k^K2+xMI^MNccky+joRxKF9+^>5VKx>vZp^R^MdxMlscky+GoR^MfxMvqgXsckp2+x>^k^q4W2lhx>2K^q$+4uHUIvMZ^K4LVNLv>D+ES>^MZVQskHkyvR^K8krvRekHvR8ksvR8kxvR<m4Yed4>NsLvMD+SvR^Kz+EvRv>Z^M4Z$E1vRZ^q4ODlOvgZ^Z4iQPZv>r+g^RskxRu41|hqxZv>^Rp^+VK2+HvR^K$+4uHUIv>Z^M4gU|+vRr+g^>z+yvRvZZ^R4dDbvuxk^>RVdKv>^q^>pV+xKX+svR^Ky+cvRxKA^K4AQ^Ax>V+^>R^KdxK$Ysk$+4A^UIxdA^d4dl|+x>c+g^q$+BZ$DI^RZ^RB1X8u^ur+gVOE+HvR^AZ^ABRNb^Ixk^OqxIu^R^u^Ofx+vdxk^qRVgKvu^>^qpV+xKX+svR^KS+VK2+C$R^Ky+svRVKMvM4OyYhVgQ+O^q9+y=skBkssLg^ugeQskyk=$R^K8k2$R$k$$RUkD$Ry+SvRVMMv>4dU|+V>Q+O^Ry+$$RVqjkvZR^qRVMx>vZp^+^KU+o$RvMy+2$R^KXkxK9+^>u^>^EskE+D$R^>Z^>ZxqA^q4t987x>8k^ZR^qV>xZF^+^KD+U$RxKG+HvR^>y+U$RxRG+HvR^Ky+U$RxZA^K^Z^dU+$$Rvu|k^dY+VKRvMy|sky+=$RVZJ|+^g5^ZVgxAF^A^KuVK2EskG+=$R^KpVKxZOEEskpRVZ^kvgg^dxkV>xRvuskxk^qqxuu^K^g^qfx+vqy+HvR^>eKx>=+4ACDIVKMvM4WYTIV>2+SS>^>$+4uHUIvqZ^>4fTjtvMD+yS>^Kv+f1CDI^>ZV>fLDNh^MZVMffz|+^>D+rS>x>ODjskGkN$RVKE+2x>^qZ^qBRNGt^Mr+uV>IvZxk^>RVRjkvqg^kRVqxMvqp^+^KeKxK|+Hjsk4qrsLRvMgEPskTkr$RykH$R^KGks$RVMekC8Ry+s$R^KhxKvqZ^>4uX^Av>2+^MRVqdvRXPskpRVqMvq^q^KD+x$RxKG+ES>^gy+j$RxZG+H$R^dS+VuE+V$R^Ay+H$RVOMvO^O^1xkVufOXDu^1xkVufhe8I3v+VgxZvu^u^R2kVq>vRF^q^MVRdvZHcskskD+jS>xKOG=xkGkC8RVKek28R8k$8R8k88Rekl8R8kD8RD+e8RgG+SG>^My+^$Rx>l+^M^>^KU+C8RvMD+28RbU+$8Ruy+=8R^Kz+V$Rv>l+^K^MV>RvqX2xky+SG>VME+$8R^q=+^MVqxKX+D8R^Ky+v8RxqA^q4dUGtxZc+g^KxkVKKmqSsLRVqxZvMp^+^>z+28Rv>Z^M4g2GtvZr+g^ZskxZu4qSsLqxMvZ^Zp^+VK6vq^K^RuVRl8xkX+28R3gT2xkE+l8R^RpgVKokvZ^K^KD+Y8RxKOCCxky+28RVKRvM==xky+$8RVZMvg4d8NdVRP+vdR^Z^RVgJvk^Kp^KV>>G=xky+$8R^KfxKvqoK^>gvXxkykS8R^K8ky8Rz+X8RvMD+y8R^KD+CDxkmqSsLRV>>$Xxk$+4dlMx>A^>4dPUgxMc+u^qxkVqKoojky+y8R^RskxqO^RR^>VMxqF^+^KnqMocGGSm^GGGyGK^RE+VKxRv>D+y8R^Mz+E8RvMV+^KZPGGGSmxGGGyGKvR^k^qZVGGGSmkv>oK^MoKV>Y+sXxk4qSsL7xKODYHkTkH8Rjks8RvMGkC2R^MjkV8RvqGk$2R^q$ko2RUk=2R8kD2Rz+H8RvMu^K=Qxkz+H8RvR$k^q^Zc+xZmAHzu^MfxMvM7^KlNxkz+H8Rv>$k^M^>c+x>m7UXu^MfxMvMu^KCYHkz+5v>y+yS>^>z+H8RvZ=+^>^RVq$+v>^q^KD+82RxK6DvHkeKX8HkD+EyxkmqSsLRVK>X^xkTkS2R8kj2RE+l2R^KZ^KBRvt^>D+G2RV>E+sS>^MZ^MBq9Nt^qr+uV>E+o2R^Zxk^>qxZOHQYZgXl<ZsG9ROVT2ug2G2KZSlP+G+G2R^ZxkV>>vgR^M^qV>Jvk^Kjk^KVqRvRycxky+G2RVKE+22R^Z5^KVZxRF^R^quVq$^xkG+ES>^qy+P8RxKG+G2R^ZS+VgY+2xxk4qSsLqxROVxxkTkCYRz+H8RvMy+G2R^MRxKv>^qoK^qskxgmgXDu^Rz+XS>v7y+C2R^dz+y2RvACK^O^dVuxRX+$2R^RjkVRxdi^dEVxky+v2RxRA^R41C8IxuF^u^dxkVgfhe8I^dv+VqxKvg^g^>skU+22RvMy+22R^MRxMmR$SO^>Ckxqu^M^>^qfx+vMy+22R^qRxqmRP9A^ZCkxgu^q^Z^gfx+vqD+=2R^>Rx>mdsPd^RSkxRvgu^Z2vHkz+22RvZi^R^>ZECHkOX8HkBX8Hkokx>vkGkR^>z+o2RvZZ^R4qUy1vdr+g^Zz+Kvuxk^ZRVdKvZ^g^ZpV+x>6Y+eKY+z+o2RvgZ^Z4qXDtvdek^uRVZxgvAp^+^>eka9+y+V8R^>eKx>X+sS>^K9+e=HkfdSsLg^KZlDHkQk=YRGkDYRVKE+VS>^My+ES>VqN+vZS+^gxkVgfI^13v+VqxRm1^cI^gV>E+XYR^qCK^MV>xqvMoK^KD+xS>xKs+^KD+VS>VK>yEHkGklYR^KjkDYRv>B$XHky+9YRx>A^>4BjQOxKA^K4IUNhx>A^>4iESdxKc+g^Zy+TYRxq^k^ZR^qqx>vM^Zp^+VM>lEHkBY+vkVMx+HkR^My+qxK=+4uX2ZVMX+vM^M^ZuVZ$EHkG+R^KZVKftxVk^MoKVMa9+oKY+y+jS>xMG+VS>^qS+VRY+SQHk4qSsLqxgOCNHkTkSYRz+CH>vMoK^KxkVRfOQ9O^g9+PNHkfdSsLR^>Z=zHkQksYRy+2H>VMVkv>xk^R4Z|DAvq9+DyHk4>NsLu^>gGyHklksYRG+=H>^KoKVKjkvZ4gUDZV>Hkv>^q^R^KZGGHkG+2G>^KjkVKx>I^>NGHk$+BZl^d^qZ^qBAz=1^MZ^MBqcjd^>r+gVqC+mA=^d^Rskxqu^RR^MV>xqF^+^KD+8G>xKG+2G>^KoKVK<mC+jg4qvUgv>D+$j>^M~fTkDlk4R2UgxKX+2j>^KS+VKE+oG>^Mxk^KB>NY1^My+EG>VMjkvM4gr$gVME+SG>^>xk^KB>S9+^>y+GG>V>jkvM4gHDAV>E+2G>^Mxk^KB>ra^My+Ej>VMjkvM4gj^ZVME+Sj>^Mxk^KB>lzd^My+Hj>VMjkvM4goxZVME+sj>^Mxk^KB>jEZ^My+sj>V>jkvM4g|VIV>E+2j>^Mxk^KB>zDZ^My+HG>V>jkvM4gSrOV>E+VG>^Mxk^KB>U^I^My+=j>VMjkvM4gYPkVME+Xj>^qxk^KB>=t^qy+$G>VMjkvM4gyy+VME+$G>^Mxk^KB>Gg^My+Cj>VMjkvM4gYEdVME+NG>^Mxk^KB>GNO^My+DG>VMjkvM4grSOVME+EG>^Mxk^KB>|b^M9+G2PkBkssLg^>gUYPkUk==RGk2=R^KeKfdSsLxk^KB>vTu^>D+VG>VKE+oc>^KD+Cc>VKN+vMy+Ec>^>skxKmRVGA^>z+VG>vqxk^K4RoE1vqy+Nc>^MskxKmRGU1^Mz+Nc>v>xk^K4qCSOv>y+yc>^>skxKmR887^>z+Dc>v>xk^K4qjDAv>y+Dc>^MskxKmRoSZ^Mz+Cc>v>xk^K4qUy1v>y+=c>^MskxKmR$Eu^Mz+=c>vqxk^K4qycuvqD+Gc>^Kv+fiGTt^qZVqfIXGt^Zr+dxg^k^gRY+y+>vZxk^RRBT~e$ixk^ggVRKvR^Z^gpV+x>8k^RR9+V>xRF^+^MekVRK|+^M^RpV+xKX+Hc>^Ky+xc>xKA^KR^>U+sc>vqD+os>uy+RvMy+os>^ZWxZB^MV+^MPIx>^k^KR^>z+Vc>v>V+^MVIV>jkvMg^>D+vs>xK|+=rPk4qrsL>vMgSxPkTkU=RykE=R^K8kX=Rz+=Iv>Z^M4dSEkvRr+g^dz+==Rvqxk^dRV>Kv>^q^dpV+xKX+X=R^Kr+dx>G+X=R^qZVqfISEg^Rr+dxg^k^gRRskxgOC+R^qVRxgF^+^KxkV>KvMy+X=R^KRxKmuSEg^Zy+>vdfRaVdjkvdR^dRVKxZvdp^+^Rskx>O^RoK^>U+os>vMD+Es>uy+RvMy+Es>^>Wx>B^MV+^MPIxR^k^KR^Rz+ls>v>V+^MVIVRjkvMg^RD+Qs>xKO=YVkGkE=RVKekS=R8ky=R8kr=RekH=Ry+E=R^KRxKmgXsO^qU+X=RvRy+E=R^MRxMmg9xA^KU+E=RvMy+E=R^KRxKmgrm^>U+N=Rvqy+E=R^MRxMmg8lL^KU+y=RvMr+a^MskxMu4uXrgskxMO4dxcAv+f4zrI^Ky+Q=RxRl+^K^R^qskxMI^qxk^MAfdSsLy+y=RVRjkv>I^RxkVMOIy+S=R^KskxMa^Ky+G=RVKjkv>J^KZVMf7DGt^Kr+Zxq^k^qR4qSTuu^M^K^qfx+vqoK^>9+cYVkfdSsLR^>Z=NVk=+4t9xIVKCkvM^M|k^MBuxK^Ru^RjUVkC+mt9xI^KRxKmglxO^ZfxZvZu^RDlVkv+fJ9xI^MZVMfOlxO^>ZV>f7rjd^Mr+Zxq=+4t9xIVujkvRR^uRV>xMvRp^+^KeKxK=+4dX=IVKMvM4glxOVMRv>G|Vk$+4gD=IvZZ^R4Z=xOvRZ^q4gQjdvZr+g^Zv+f7X=I^gxkVZKvdR^q^RVZJvk^Mp^MVK>lNVk9+DEVk4>NsLu^MgoNVkv+f7X=I^qekVZQkvR^Z^MZVMft9R^>ekVRKv>^>^RpV+xK2K^Kp^MVKVkvMek^MRD+x>v>p^+^KU+Ns>vMgNHVkGkYURxKUkDURy+=URVMMv>47XlOV>Mvq4LrPZVqQ+O^Rxk^Rqf1oyZR^>VqxRF^+^KD+UURxKs+^My+DURVRjkv>4g=E1VRY+ojVk4qSsLqxKOoHVkTkXURz+$URv>Z^M4ODlOvqZ^>4gjmv>Z^M4OYTOvqr+g^qz+2URvZxk^qRVRKv>^>^qpV+xKI^KCHVky+YURx>A^>47TlOxqA^q4dsmx>A^>4tNNuxgc+g^qy+UURxZ^k^qR^Zqx>vd^qp^+VKSk^k^M4g|U+xK2K^M9+$PVkBkssLg^Kg8e^kUkGURGkSUR^K$kyURG+SUR^MZVMfieQg^>ekVdKv>^>^dpV+xKX+GUR^KS+VKjkvM4gQckBbS^+$+41oE+xqc+g^Ry+jURxZ^k^RR^ZykxqvZ^>xk^KB>V9+^>oK^KU+Ss>vMD+Hs>4Z8X1X+Vs>gy+^s>xMX+$x>^MD+8x>fTkUH79+$v^kBkssLR^Mgc9oKekoDR9+C$^k4>NsLI^KD+VURVK>oE^kGkoDR^KjkCDRv>y+a^>ixqG+VUR^KCKV>xqvM^My+FVMIvqp9+^qo+xMvq4gUQRVqxKG+F^MLV>J|+^qv+^MV>f1=^d^q^KixKG+oDR^MxkVKfOUQR^MLV>E+=DR^K|k^K2+xRI^RXU^ky+vDRxKF9+^M5VKxMvgp^Z^RdxR=D^ky+$DR^KfxKv>gHl^k$+BAGXk^K$k^KVq9kvR4IjKVKRvM2l^k$+4IEXkvMZ^K4u$^dvRp^q^ZZNl^k=+4A=^dVKJvM^Zp^ZVMjkvq4A=^dVMIvqZ^>4u$^dvMZ^K4dDrgv>$k^M^Kc+xKmIjK^MdxMCE^kL^MZVMf1=^d^RS+VMjkvZ4uXrgVMSkG+B^My+PURx>c+I^qS+VRjkvZ4g2DZB>89A9+SQ^k4>NsLO^dgDlCKlklDRHkNDR^K8kzDReksDR8kGDR8kcDRekC9R8kVDR8k^DRek29R8k$9R8k89Rekl9R8kD9RLVK2+GDR^Ky+NDRVMMv>4gDjtVK2+sDR^Ky+NDRVKMvM4gD~VM2+HDR^My+NDRVKMvM4gzrOV>2+VDR^>y+NDRVKMvM4gz2ZVM2+C9R^My+NDRVMMv>4gYPtV>2+o9R^>S+^Kz+yDRv>xk^K4tsXkv>D+C9R^KU+VDRu$+4A^UIxMA^M4dl|+x>c+g^qy+cDRxg^k^qR^gqxMvq^qp^+VK2+=9R^Ky+o9RV>E+=9R^KZ^KBZS^A^Rl+^>VRxKI^KD^^ky+v9Rx>G+o9R^RZV>xRvMD+29R^Kz+HDRvqy+29R^Kv+fLN^k^Ry+cDRxdG+29R^OZVdxOvg=+^R^ZVqjkvq^K^qy+e9RxKF^K^>2kVK>vMD+o9R^KZXs^kG+HDR^KuVKHCCKG+C9R^K$+BuS^k^Zy+HDRVq$+vg^q^>xkVKfhSlt^>y+z7xqI^qGeCKy+r7xKF^K^quVqC$CKG+C9R^Ky+Yx>xqG+S7^Ry+Ux>xga^ZZ^ZBZl^d^u=+^gVuxd$K^q^R^dV>jkvM41Co7V>N+vMy+C9R^qskxKmOEr7^qz+NDRvRxk^K4gjmvRD+=9R^Kz+lx>vML^qZVqfOUQR^Ry+Y9RxdY+^K^R4g8$hvu^>D+D9RV>E+o9R^Ku^KxYCKE+o9R^Ki^KV>E+X9R^KZ^KBqGcA^qr+gVZY+DUCK4qSsLZxgOE9CKGks9RVKE+GDR^qZ^qB>D=O^Rr+uVME+V9R^>xk^Mqx>G+HDR^>xkVM>vqR^q^RVMJvk^KskxkVZKvdR^K^qVZJvk^>oK^>skxRmu^1^dskxqu^RS+^RskxRmg2DZ4Zo=O|+$XCK4qrsLRvugXxCKTkP9Ryk$lR^KGkolRVMek=lR8k2lRLVMMv>4A=^dVKMvM47xUuVM2+=lR^My+$lRVKMvM47SsLVMMv>R^Ks+VKfuV8h^MuVMoNCKG+$lR^qZVqfiSsL^KpVKx>OXyCKZ4qs8hmAECA^Ky+>vRy+$lR^ZRxZm7SsL^Rskxqu^RR4qs8hvM^qp^+VMJv>^>D+2lRV>E+DlR^KZ4>NsLmAECA^>y+RvRy+2x>^Rskxqu^Rxk^qZfOvrtR4>NsLvq^qp^+VM8kvM^M^>uV>HGCKa^MZ^MB>91^>r+gVqE+$lR^Rxk^qqxRu^M^>^qfx+vMglxCKLV>Mvq4gUeIVRQ+I^qy+ClRVZMvg4iXEkVgjkvRR^gy+elRxZ^k^qg^Zqx>vZ^qp^+VKSk^k^R4uV1xd^k^qg^Rr+xR^k^R4g8DZfOUeI9+=PCKBkssLu^ZgjzeKUkNlRGkElR^KjkXlRv>8kylR8krlRekHlR8kslRy+|lRxKxk^K^MuVMGVCKVkBVCeKy+9IxZA^Z4ucEkxqc+g^dy+|lRxM^k^dR^MqxZvR^dp^+VK2+slR^KgXeeKbv+Yk^K^+GkqxK6Y+y+SlRV>2+GlR^>|k^>2+xKI^K2veKy+zlRxMF9+^q5VMxqvqp^>^KdxK=$eKy+ylR^>Rx>mAoNI^RfxRvMu^KSzeKixKA^K4AY^dxMA^M47TlOx>A^>479xLxKX+GlR^KLVMMv>4A=^dV>Mvq4drrdVMQ+O^qy+GlRVRjkvRR^RRV>xMvRp^+^KU+SlRvML^KZVKf1=^d^MZVMfiXlO^KZBgGUg4AECAVRQ+I^gy+slRVAjkvdR^AxkVg>mfPEZRBgGUg^R^gpV+xqA^q4A|CAxRc+g^d=k1yKv7xk^dRVOKvR^R^dpV+xM^k^K4AHAxMG+NlR^MuVMGQeKa^KZ^KBZl^d^MZ^MBdNlO^RZ4uoVkmAECA^gy+Rvuy+NlR^uskxdu^uxk^dZf4PEZR4uoVkvd^dp^+VMMv>4AECAVgQ+O^d=ktjKxu^k^dR^uqxMvd^dp^+VKjkvZ4APAVKIvZZ^R4u$^dvdZ^g4OjUuvZZ^R4uVQIvdek^ARVRxgvOp^+^KckjkvZ4u^1VZjkvRu^RS+VRjkvZ4g2DZB>919+NreK4>NsLO^ggGDoKlk2TRHklTR^K8kTTRekyTR8kNTR8kzTRE+Ex>^MS+^qz+=TRvgZ^Z43S^Zvdr+g^>skx>u41X9ZqxZvd^>p^+VR2+NTR^R|k^R2+x>I^>SceKy+TTRxRF9+^g5VRxgvup^d^>dx>EseKy+XTR^gfxgvZgSseKpBkssL^Rxk^qB>NsO^Ry+lTRVgMvd4as^ZVRQ+O^dxk^dqfhsG+R^gVRxdF^+^>s+V>f7T$7^RxkVqfO9xA^Ry+9TRx>A^>4ac^Zxuc+g^dxkVdKm1DYkRV>xuvup^+^RU+lTRvZ|k^RY+VdRvulCoKy+ETRVRJ|+^A5^RVAxuF^u^duVdVCoKG+ETR^RpVRxuOleoKp4>NsLvAxk^q4ZQmvAy+lTR^RRxRmas^Z^Ay+>v7xk^ORBuv2gR^R^AVOJvk^dD+NTRVd9kvuY+^uuVuy$oKG+NTR^dpD+xOC+^d^O^IfxIvAu^uX8oKz+XTRvup^d^AZy8oKF4qSsLVAjkvR4g8lLVA$+v>^q^KD+zTRxKa^KZ^KBZl^d^qZ^qBRNrg^Ky+yTRVMjkvM4OxVkVMIv>Z^M4u$^dvRZ^q4u|Y7v>Z^M41rz1vRr+u^Az+ETRvuxk^ARVdjkvOg4RcN+Kv>^q^ApV+xKVkxk^R4dx1vdxk^qOVRHkv>^>^q^KeKxK8k^>R9+VMx>F^+^KD+Qx>xKA4qSsLBZyCA^>r+uVME+Dx>^Rxk^MqxR^k^Mg4R^Au4qSsLV>xMF^+^KD+rx>xK|+l|oK4qrsLKv>g$v$K8k8XRY+lEoK4qSsLqxMX+2XR^MgTVoKekXXR8klXRZVkf1N^A^MU+VMKvZu^RDNoKRxku^K$+47zKvq5^K^>VMJv>^Ru^RezoKMvKR^MpVMxKO=zoKpbVK2+XXR^KZ^kBZS^A^MU+^MZx>I^>syoKZVk>vqp^>^KZ2roK=+4IjKVMJv>^KD+lXRVKE+B^KL^>z+oXRvRCK^K^>VqxMG+F^MLV>J|+^qv+^MV>f3NVI^q^Kz+pvML^MpD+xqY+^K^M4u$^dvR^>L^Kz+2XRvqxk^K4tXVIvqL^Ky+9XRxMzk^MY+^RdxRSsoKy+lXR^MfY+vq5^M^>VZJvg^Ru^RYxoKE+EXR^>p^>VM>$VoK$+41zXkx>=k^>^R|kVRfLjK^>uV>2PoK=+41yXkVRMvZ4A=^dV>Jvq^qgsPoKv+f1=^d^>pV>xqF^q^MxkVKf1=^d^Mskz+avMy+2XR^>y+RvRS+^RxkVRfO2DZ4AQxOY+DCvK4qSsLZxZOCxvKTkHXRjksXRvM8kC|R8ke|Rek=|RZ^k4uX^AvMU+^KgV>RvqSovKZ^kZxK=+4IjKVM6vM^M^qpVqx>I^>XvvKZVk>v>p^M^KZEvvKF=q^KD+^XRxKa^KZ^KB7SVI^Mjk^MVKRvMH8vKd^KRxKmOy|t^MCkxqu^K^M^qfx+vqoK^>y+PXRx>=+4uX2ZVMX+vq^M^qD+e|Rxqa^>Z^>B1QQd^qr+gVZN+vdy+o|R^ddxdN=vKp418ltxROG=vKp4AyxOvZxk^g4dQoIvZy+o|R^ddxdEDvKy+VXR^uRxumOxVk^dfxdvZg=lvKZBkssL4AECAVAQ+O^Oy+VXRVujkv7R^uRBkssL^A^OpV+xdF^d^RxkVgftxVk^Ry+e|RxRI^RHTvKy+PXRxRA^R4dXHuxuF^u^dg8XvKJmOGxO^dskxgmd|Hu^dz+HXRvZxk^g4gE8OvZxk^ZRVgKvq^q^ZpV+xMX+$|R^My+|x>xgG+Sx>^dS+VZN+vAxk^u4tsXkm1x^kxkVZftEr7^uy+v|RxA^k^Z4dsmxAY+^g^d4g8$hvg^qZ^qBqGcA^Zr+gVgY+szvK4qSsLqxdOGzvKskxkVgKvuR^q^ZVgJvk^RZ^RBRNc1^dr+gVZY+SrvK4qSsLqxgO2svK$+4dx|uv>ek^>rkVMx>vMZ4qrsLf1ECA^Rr+dxqG+Sx>^ZxkVqKvgxk^qgB>TXZR4qrsLxRvRp^+^MRxMmAECA^qy+>vZy+$|R^ZskxRu^ZR^MVqxRF^+^>xkVKfO8zd^>skskxZu^gR^RVdxZF^+^MoKVMjkvZ4u^1VZjkvRR^RS+Vgjkvd4g2DZB1QQd9+sHvK4>NsLO^Zgoo$KlkG|RHkV|R^K8k^|Rek2ERy+lI^>Rx>mIxDZ^Ky+>vZy+V|R^qskxRu^qR^>VKxRF^+^MD+^|RxMG+yx>^My+^|Rxql+^M^q^KU+V|RvML^MZVMf1=^d^qZVqf7rrd^Mr+ZxRG+oER^ZxkVRKvgR^q^MVRJvk^KoK^Kskxgmu^1^ZskxqO^gCK^KV>xqv>oK^MekV>K|+^M^>pV+xKX+Gx>^KgYHsdyk=ER^K8k2ER$k$ERUkDERy+$ERVKMvMR^MD+8ERxMG+$ER^MZVMfISEg^>r+Zxq^k^qRgqxMvq^qp^+VK2+lER^Kr+OVKY+SY$K4qSsLZxqO2v8KGkEERVKekSER8kyER8krERekHER8ksER8kxERE+yER^MZ^MqxKX+NER^Ky+|ERxKA^Kg^MU+EERv>y+EER^RRxRmuSEg^My+>vqxk^>RdKvZ^M^>pV+xKX+SER^KD+jERK8k^KD+sERVKE+sER^KZ^KBZS^A^MY+^MZxKX+HER^Ky+xERxK4Rg^>rkxKvq^qu^q|e8KE+sER^Ky+HERV>MvM^>^MD+jERxMG+NER^Ky+xERxqU+^q^ZfVKxZvgD+NER^Zz+yERv>V+^MVGGKVKBvMu^My+jERxKNk^K5^>|+xMvq^qV+^qPGGKxMX+GER^My+QERxKG+HER^MfVKxMv>D+NER^Mz+yERv>y+HER^KaxMvM^KD+GERVKE+SER^Kp^KV>okvMg^KD+QERxKG+yER^K8+9xXKxM$+^K^M^MU+EERv>y+GER^Mz+GERvM2k^M^KVK2+HER^Ky+GERVKJvM^M2k^KZxKX+GER^Ky+jERxKok^KVGGK^MWxM5^qy+GERVKDkvMI^ME+VqxMvMV+^KVGGKVM2+HER^My+GERVKJvM^M2k^KZxKX+GER^Ky+QERxKG+HER^MfVKxMv>D+NER^Mz+yERvMpN9jK^>axKvq^>D+GERV>E+HER^KXk^KdxMG+GER^KV+VKsGGKvq6^>5VKl+v>^K^>V+V>sGGKvMD+GER^Kz+yERvRpyXM^K8kxqvM^KD+GERVKE+VER^MZ^MBgzsI^>r+gVqC+mAj=g^gRxgmiGlO^dy+>vAy+GER^AP+xAocGK^7xk^uqx7u^g^d^ufx+vgxk^qRVZKv>^>^qpV+xKG+HER^KpZxq4^K^q^qU+GERvRgHl$Ky+cERx>A^>4dUGtxqc+g^ZxkVZKmqSsLRV>xqvgp^+^KeKxK^k^KR^qD+Hv8KmqSsLgV>>2v2KGk$QR^K$koQRUk=QR8kDQR$k=QRUkXQR8kEQRz+CQRv>Z^MRV>2+DQR^>y+$QRVKMvMg^MD+YQRxMG+$QR^MZVMfISEg^>r+Zxq^k^qRuqxMvq^qp^+VK2+XQR^KD+lQRqP+vMD+XQR^Kz+2QRvqZ^>4uX^AvMY+^KgVq2+yQR^qy+EQRVKhug^>SkVKx>vdu^gle2Kz+2QRvqy+EQR^RRx>vZ^KD+lQRVKE+EQR^KV+^KPGGKx>5^>t^Kz+=QRvqXk^>FVql+vM^q^>V+V>sGGKvMD+lQR^Kz+oQRvMpVcS+^qnxKvR^qD+2QRVqE+lQR^>p^>VKhvqg^>D+YQRx>G+=QR^KXkVKFvqy+=QR^KP+xKocGK^q6^qAxZy+^>^Z^RP+xRocGK^KD+=QRVKE+lQR^>y+2QRVKokvq^K^KD+YQRxKG+lQR^>V+V>sGGKvM6^KtVqE+EQR^>Xk^>4xRy+^q^R^>P+x>ocGK^RD+lQRVRE+lQR^Ky+lQRVqokvM^q^qD+YQRxqG+lQR^KpVKx>4^Kg^KU+=QRvMy+2QR^KfxKvqf^KgVK2+DQR^Ky+=QRVKJvM^>f^KZxKX+=QR^Ky+YQRxKNk^KF^qz+$QRvqV+^>VGGKVKBvMt^>E+Vqx>vMV+^KVGGKV>2+lQR^>y+2QRVKJvM^>f^KZxKX+2QR^Ky+YQRx>F^>^K2kV>>vqD+=QR^>z+oQRvMy+EQR^>axKvq^>D+2QRV>E+DQR^Kps|oKV>okvM^>^>D+8QRx>G+lQR^KXkVKuvqy+lQR^KP+xKocGK^q6^qWxKy+^>^K^qP+xqocGK^KD+lQRVKE+NQR^>Z^>BgzsI^qr+gVgC+mAj=g^uRxumiGlO^Zy+>vuy+lQR^OP+xOocGK^Axk^dqxAu^u^Z^dfx+vZxk^gRVRKvq^q^gpV+xKG+EQR^qpZxR4^q^R^RU+lQRvZgDU8Ky+TQRxqA^q4dUGtxRc+g^ZxkVZKmqSsLRVqxRvgp^+^KeKxK^k^Kg^>D+Gv2KmqSsLgV>>$ssdGkGQR^K$kSQRUkHQR8kVQR$kHQRUkoNR8k$NRz+yQRvMZ^KRV>2+VQR^>y+GQRVKMvMg^MD+xQRxMG+GQR^MZVMfISEg^>r+ZxZ^k^ZRuqxMvq^Zp^+VK2+oNR^KD+CNRqP+vMD+oNR^Kz+sQRvMZ^K4uX^AvqY+^>gVq2+=NR^qy+$NRVKhug^>SkVKx>vRu^qDGsdz+sQRvMy+$NR^qRxKvR^>D+CNRV>E+CNR^Kp^KV>hvMg^KD+xQRxKG+sQR^KpzCN+x>$+^K^>^>U+SQRvqy+HQR^Kfs8XKvZC+^K^RVR2+CNR^Ry+HQRVKE+=NR^Zf^KVZxZX+HQR^Zy+^QRxKFVlm^R2kVKxRvZD+CNR^Rz+GQRvMy+$NR^>8kxKvq^>D+HQRV>E+VQR^KpS2ZV>hvM^>^>D+cQRx>G+CNR^KV+VKsGGKvR6^qtVKE+$NR^>Xk^>4xRy+^K^R^>P+x>ocGK^KD+CNRVKE+VQR^qy+CNRVKe+vM^>f^qV>x>X+sQR^>y+cQRxKok^KVGGK^>Wx><^Ky+sQRV>Dkvqt^qE+VKxqvqV+^>VGGKVK2+VQR^Ky+sQRVKE+=NR^>2k^KV>x>X+sQR^>y+xQRxKG+CNR^qfVKxqvRD+HQR^qz+HQRvMy+sQR^>axKvq^>g=eekZ2P2KOV9DugSl<ZNN=>OXjxkgoSyM$kRUkO8kI$kOUkL8kJ$kLUkp8kB$kpUk68k<$k6Ukw8kC+$kwUk$+8k2+ZHz=>HkD+^Ky+ixMG+D+^>=+VMx>vM7^KEH2Kz+OvRy+D+^>Y+xqvq^Mp^MVKdvM$z=>y+IVqE+X+^>gsD2>ZNj2KO$9S>g2oE+ZNryMOoYsKgSlP+Z$z=q^k^Ag^uskxAI21y+V1VujkvOO^uRD+xdvOp^+^gskxZo+^gy+y1VgQ+L^u9+yCYKBkssLu^AgQoYKykNa^KGkEaVMekSay+Ea^KRxKmg|DZ^MU+Xav>y+Na^>Y+x>mpYUA^KeKxK^k^uR^Ay+gvOy+l1^OskxAu^Oy+X1VOjkvOg^Oy+|1xO^k^Au^OskxuO^Axk^udotG+V1^AxkVugvOR9+^gVuJvk^dxk^ZnxdG+y1^gr+7xd|+H2YK4qrsLRvOgNlYKGkjaxKHksa^M8kxaekof8kCfy+caxMA^M4gYzdxKX+Ha^Ky+jaxMA^M4gYE1x>A^>4LU7xMA^M47CQgxR8k^qR^MVRxqF^+^KD+PaxKG+Ha^>=+V>faD7^KD+^axKG+Cf^qy+Pax>Tk^q^>^KdxKllYKoK4qrsLE+of^>oK^>skxdu^Ar+OVAE+E1^7xk^Aqx7G+X1^OxkVA>v7y+E1^OskxAI^Oxk^dZxA^k^du=3z+s1vOxk^dOVAK|+^g^dpV+xu^k^Zo+^uz+E1vdr+I^uD+GEYKmqSsLgVA>yNYKGk=f^Kz+$fvqZ^>4ZNskvMZ^K4OjUuv>Z^M4uyY+vMoK^KxkVuKvOr+O^Az+=1v7xk^ARVOE+N1^Oxk^AZxOG+E1^7xkVARvIxk^ugVAjkvAuV3y+P1xA^k^uO^AqY+vd^up^+Vdjkvg$+^dy+z1xdc+I^u9+cSYKfdSsLu^AZy^=KHkXf^KGk|fxMUkNf8kyf$kNfUkGfy+XfVKMvM4gSskVM2+Sf^My+XfVKMvM4g=E1V>2+Gf^>ek^MU+Nfv>BDV=K9+8sYKfdSsLu^MZVH=KHkCp^KGkepxMUk$p9+=y=KBkssLu^>D+vpx>G+Ef^MZVMfO^lu^>r+Zxqc+o+^RxkVRKIxk^RgPszz|E+huZ9cQoSm^GGG=ZVgjkvZu^gxkVRgVDU+xk^RIzszKjkvZt$vmxkVRIo|8Kxk^RJr$2KjkvZa=VkxkVRJV|=+xk^RBxeXkjkvZF2zS+xkVRByGY+xk^R<rrE+jkvZ5Cr=+xkVR<Svqxk^RC+UQ=+jkvRR^RRVMx>vRp^+^KU+yfvMy+Sf^KRxKmdHyg^gy+>vqy+Gf^Rskx>u^RR^KVgx>F^+^qy+^fx>X+Gf^>y+jfxqG+$p^dy+zfxRA^R4A9jAxgA^g4tEjgxRI^RE2=Ky+zfxgA^g4A9jAxAA^A4tEjgxRF^R^Zgr2=KJL^ZCK^dVZOvqA^q^>VR2+Hf^Ry+GfV>E+=p^Zy+NfVdMvu4AljAVqMvR4uvxkVgRvd2D=Ky+NfVdMvu4AljAVgMvd4uvxkVdJvu^qglD=KfuvRCK^Z^qdxR1^>^R^ZU+yfvgy+Gf^>z+CpvZy+yf^ZRxZmI8eh^gRxgm7xvd^ZdxZCX=Ky+yf^ZRxZmI8eh^dRxdm7xvd^ufxuvdgoX=Kp7xg$K^R^guVq~vq^q^ZD+jfxZG+Gf^>y+vpxZG+yf^RZVRfL8eh^gZVgfiyGu^RuVRXQ=KG+yf^RZVRfL8eh^uZVufiyGu^dpVdxgOGQ=KpIVgHkvg^gO^qzkx>vR^RD+GfVRE+sf^RZ^RBqCrg^Zr+gVqE+Hf^gxk^qqxgu^R^Z^qfx+vqgCP=KGk|pxKHkNp^M8kzpeksp8kGpD+zpKG+Ep^>$kV>xKzk^K4APyIxMI^MNj=Ky+|px>A^>47CQgxq8k^RR^>VqxRF^+^MpVMxKOVj=Ky+EpVMJv>^KD+SpVK2+HpRy+GpVKE+sp^qZ^qBZS^A^Ml+^KVMxqI^qSH=Ky+zpxKG+Sp^RZVRfhJ^7r+ZxqG+Gp^gxkVqKvdR^R^7VqJvk^M2k^KVMxMX+yp^My+jpxKG+Np^M2kVKxMv>D+Gp^MZ2G=KG+yp^KoKVKSkc+u^>xkV>KHl2+xk^>gj|jKK|+^M^>pV+xKOsV=KBY+okxKvkGkR^Kbv+s+^Ky+SfVMjkvM4u^1VMVkvMxk^uRVAQ+t^Oy+l1VAjkv7R^Ay+T1xA^k^Og^Az+l1vOxk^OuVAjkvAg^OxkVuR2ay+V1^Oskxut^OR9+VdxuF^+^gxkVZo+vdxk^RRVZKvq^q^RpV+xKA^K4dzcAxgc+g^q9+P$UKfdSsLR^RZ$YUKG+s1^Z$+BZ$DI^MZ^MBZllL^dr+gVRE+ot^gxk^Rqxgu^M^d^Rfx+vR=+^Z^qVKVkvMxk^qRVRKvM^g^qpV+xMOXHUKGkobVKek=b8k2b8kYbekXb8klb8kTbY+XXUK4qSsLZxMX+2b^MZVkf1N^A^KU+VK>v>u^MX9UKRxkO^K$+47zKvR5^K^qV>Jvq^Mu^M8lUKMvKg^MpVMxKOllUKpE=TrC>VK2+=b^Ky+obVKMvM4uSEgV>Q+O^qxk^qqKu^K^>^qfx+v>D+=b^MZyzUKHkSb^K8kjbC+mdTM^MRxMmgQDk^>y+>vRy+Sb^RfxRvg2k^RgVR2+sb^Rxk^qqxZu^M^>^qfx+vMYk^KCDLVZ2+Hb^Zy+GbVKC+mdTM^>Rx>muzeu^Ry+>vuy+Gb^Zskxdu^ZR^>VRxdF^+^qykVKxqvZoK^Ry+YbxMA^M4AQ^AxRX+Db^Ry+UbxMI^M$HUK$+BqQM^MZ^MBRjeu^qr+gV>E+Db^Zy+$bVd$+vg^d^gy+UbxZF^Z^dfVZ>vgD+Db^Zuxgvu^Zxk^>qxZu^M^q^>fx+vZD+Xb^Rz+$bvqy+Db^ZRx>vg^qD+lbVqE+lb^>y+DbVqE+lb^Ry+XbVgMvZ^g^ZxkV>xqvgy+=b^qz+Dbvqy+lb^Zskxqvq^Zy+$bVqJO^>2k^qV>x>X+$b^>g|yUKE+lb^ZoK^ZckjkvqR^qrkVMx>vMoK^KxkVqKvg9+VPUK4>NsLO^ZgNoEKjkHbvM8koB8kvBekDB8k=B8kUBE+$B^KZ^KB>$vh^MD+oBVME+$B^KZ^KB>2lL^MD+$BVME+$B^>Z^>B>ysg^KD+2BVKE+$B^MZ^MB>|Du^KD+=BVKE+$B^KZ^KB>SvZ^>D+DBV>qv>r+g^RD+=vDKmqSsLgV>>ooEKGkEB^K$kXBUkyB9+ET|KBkssLg^KD+QBxKG+NB^My+YBx>l+^M^>^KU+EBvMd^KZVKfOCoO^qr+ZxRc+l+^gy+UBxdc+I^u9+eYDKfdSsLO^OZoUDKHkHB^KGkPBxMHkC4^>8ke4E+$4^KZ^KBKQy1^MD+o4VME+24^MZ^MB>lNR^goK^gskxuu^Or+OVAE+2B^7xk^Aqx7G+$B^OxkVA>v7y+2B^OskxAI^Oxk^uZxA^k^uutz+EBv7xk^uOVOK|+^d^upV+xZ^k^gR^Zz+2Bvur+I^AD+lTDKmqSsLOVu>EQDKGk=4^Kjk24v>Gkl4^>z+=4v>Z^M4qe87vqZ^>4Zzctv>Z^M4dNEgvqr+g^qaKJ^Zxk^qqxZu^M^>^qfx+vMZ^KuVqdvR=QDKp4ZH|RvRoK^qxkVAKvAr+O^uz+Vbv7xk^uRVOE+=B^Ixk^uZxIG+2B^OxkVuRv7xk^AgVujkvOu2ky+zBxu^k^AO^uqY+vu^Ap^+VZjkvdg^Zy+UBxdc+I^u9+rrDKfdSsLg^AZsSDKHky4^Ky+z4xMA^M4grskxKA^K4t$S1x>2K^>xk^uqxAc+O^Oy+eBx7^k^OR^7z+CBvOxk^OgVAE+DB^Axk^OdxA^k^ug^OskxuISMy+yBVAjkvAO^ARD+xdvAp^+^ZskxgI^Zy+DBVZQ+L^d9+=xDKBkssLO^AgTC9KykV4^KGkH4VMykoF^>8kCFz+s4vMZ^K4qyU1v>Z^M41U|RvMr+g^RskxRu4Frv7qxMvM^Rp^+V>2+$F^>|k^>2+xRI^RD^DKy+^4xKF9+^g5VKxgvqp^>^RdxR$C9Ky+CF^KfxKvggDC9KpBMPVk^ZoK^Zskxdu^Ar+OVAE+2B^Oxk^AqxOG+$B^1xkVA>vty+2B^OskxAI^Oxk^dZxA^k^duN>z+EBv7xk^dOVOK|+^Z^dpV+xu^k^gO^uz+2BvAr+I^ZD+y$9KmqSsLOVA>CY9KGkDF^Kjk=Fv>GkXF^>$klFG+XF^KZVKfuoSZ^>D+|Fx>G+EF^MZVMfO^Pd^KoKVKjkvgR^Ar+AxAG+oB^OxkVAKv7y+$B^OskxAO^Oy+2BVOjkvOu^OxkVZ>vOxk^Zu|qE+GB^7xk^ZAx7u9+^u^Zfx+vuxk^gIVdE+XB^dr+IVuY+D99K4qSsLAxAODT9KGkSFVKykHF^MGksFV>ekCWy+sF^MRxMmRoSZ^KU+GFvMy+HF^>Rx>mg9zd^KeKxK^k^uR^Ay+gvIy+oB^Askx7u^Ay+$BVAjkvIg^Ay+8BxO^k^7u^OskxuO^7xk^udEqG+yB^AxkVugvOR9+^dVuJvk^Zxk^g1xZG+DB^dr+7xO|+yQ9K4qrsL>vAg2r9KGkeWxKG+oW^MZVMfOSsk^KZVKfOC97^M$kVMxKzk^K4APyIxMI^MVz9KpBkssL^Kgor9Kz+VFvqZ^>4ZNskvRZ^q4ZHD7v>p^M^KeKxK^k^OR^uy+gvAy+oB^Askxuu^Ay+$BVAjkvAg^Ay+8Bx7^k^uu^7skxOO^uxk^OdCRG+yB^uxkVOgvAR9+^dVOJvk^Zxk^gixZG+DB^dr+7xu|+Ec9K4qrsLgvIgXP9KGkUWxKHklW^MGkTWx>UkEWy+XWVKMvM4RxDAVMMv>4gVD+Vq2+yW^qy+EWVMMv>4iQSdV>Q+O^qy+EWVZMvg4<vXOVRjkvRR^RRVMx>vRp^+^KeKxK^k^uR^7y+gvOy+oB^OskxAu^Oy+$BVOjkvOg^Oy+8Bx7^k^Au^7skxuO^Axk^udDRG+yB^AxkVugvOR9+^dVuJvk^Zxk^ghxZG+DB^dr+7xu|+GelK4qrsL>vOglvlKGkrWxKG+SW^KZVKfOSsk^MZVMfixUu^>ZV>f7EcA^qoKVqjkvAR^Ar+AxAG+oB^OxkVAKv7y+$B^OskxAO^Oy+2BVOjkvOu^OxkVu>vOxk^uuvZE+GB^Oxk^uAxOu9+^d^ufx+vgxk^gaVZE+XB^Ar+IVZY+sYlK4qSsLdxuOlTlKGkHWVKyko6^M8kC6$kVWUk$6y+VWVKMvM4g=zdVq2+$6^qy+HWVKMvM4g=E1VqMvR41v3VKMvM47eQgVRP+vqR^K^RV>Jvk^MD+o6VME+$6^q=+^qBAY3^MD+$6VME+=6^My+o6V>8kv>^>^quVqVllK2K4qSsLz+VWv>oK^MxkVZKvAr+O^Oz+VbvAxk^ORVuE+=B^7xk^OZx7G+2B^uxkVORvAxk^ZgVOjkvgu$gy+zBxI^k^ZO^IqY+vO^Zp^+Vdjkvdp^dy+UBxdc+I^u9+rQlKfdSsLO^AZyrlKHkl6^KGkT6xMHkE6^>8kQ6E+y6^qZ^qBK=SO^KZ^KBqoZ^MD+N6VM9kv>Y+^KuVKyylKG+N6^MpD+x>C+^M^>^qfxqvMu^KXrlKz+X6v>p^M^ZZErlKFR^ZoKVZjkvAR^Ar+AxAG+oB^OxkVAKv7y+$B^OskxAO^Oy+2BVOjkvOu^OxkVu>vOxk^uu8gE+GB^Axk^uAxAu9+^d^ufx+vgxk^gBVZE+XB^dr+IVuY+2slK4qSsLAxAONHlKGkH6VKykom^MGkCmV>ek2my+Cm^KRxKmRGcu^MU+V6v>y+om^KRxKmg=E1^RRxRmgo|R^KeKxK^k^uR^Ay+gvOy+oB^OskxAu^Oy+$BVOjkvOg^Oy+8BxO^k^Au^OskxuO^Axk^ud$dG+yB^AxkVugvOR9+^dVuJvk^Zxk^g4xZG+DB^dr+7xu|+HCTK4qrsLgvOg=vTKGkYmxKHkDm^MGk9mx>G+lm^KZVKfu887^MZVMfO$j+^>ZV>uvM7^K$vTKffOCER^KoKVKjkvAR^Ar+AxAG+oB^OxkVAKv7y+$B^OskxAO^Oy+2BVOjkvOu^OxkVu>vOxk^uucdE+GB^Axk^uAxAu9+^d^ufx+vgxk^g6VZE+XB^dr+IV7Y+SYTK4qSsLAxAONUTKGkymVKyksm^MGkGmV>E+Hm^>Z^>BK=Eu^KZ^KB>lE1^qZ^qB>e~^MoK^Mskx7u^Ar+OVuE+2B^Axk^uqxAG+$B^OxkVu>v7y+2B^AskxuI^Axk^7Zxu^k^7uEAz+EBvAxk^7OVuK|+^d^7pV+xZ^k^g<^Zz+2Bvgr+I^dD+GTTKmqSsLgV7>=|TKGkVm^Kz+smvMZ^K4ZNskv>Z^M4ACU+vqoK^>xkVdKvIr+O^Az+Vbv7xk^ARVOE+=B^Oxk^AZxOG+2B^OxkVARv7xk^dgVAjkvuulIy+zBxA^k^dO^AqY+vg^dp^+Vujkvd5^uy+UBxAc+I^u9+TzTKfdSsLg^ZZHrTKHk$<^Ky+v<x>A^>4grskxqA^q4dT=Ix>8k^Zrk^>VZxMA^M4aQ=Ix>8k^qR^MV>xqF^+^KoKVKjkvAR^Zr+AxZG+oB^7xkVZKvIy+$B^7skxZO^7y+2BVOjkvgu^OxkVu>vgxk^uuPtE+GB^Zxk^uAxZu9+^A^ufx+vuxk^gwVdE+XB^dr+IVOY+XsTK4qSsLZxuOsPTKGkD<VKMmqSsL4ulCAv>r+g^Rz+2<vRZ^q4ZNskvqZ^>4ODlOvgZ^Z4gjmvqZ^>41rVZvRxk^RRVqKmqSsL^MVRJvk^KoK^KskxOu^ur+OVAE+2B^7xk^Aqx7G+$B^uxkVA>vAy+2B^uskxAI^uxk^OZxA^k^OuCiz+EBvAxk^OOVuK|+^d^OpV+xZ^k^gC+^Zz+2Bvgr+I^uD+CoXKmqSsLgV1>DUXKGkE<^K$kX<Uky<y+E<VKMvM4gSskVMMv>4I8ehV>Mvq4hX|LVK2+G<^Ks+^K2+x>i^>D8XKy+z<xgF9+^KUkVgxKv>p^M^>dx>$2XKp9+^MfxMvMgG2XKy+z<xMA^M4LQS7x>F^>^KD+Q<xKzk^KY+^MdxMD=XKy+N<^>fY+vM5^>^KVqJvR^Mu^Mx=XKE+S<^Kp^KVq>2UXKpY+^qeKxq^k^uR^1y+gv7y+oB^AskxOu^Ay+$BV1jkv7g^1y+8Bx7^k^Ou^7skxuO^Oxk^udyiG+yB^AxkVugvOR9+^ZVuJvk^dxk^ge+xdG+DB^Zr+7xu|+ETXK4qrsLgvOgy|XKGke0xKHk$0^MGk80x>Uk=0y+20VKMvM4Z2E1VM2+l0^My+=0VKMvM4gl=1VMVkv>xk^uRVAQ+t^Ay+oBVOjkvOR^Oy+vBxO^k^Ag^Oz+oBv7xk^AuVOjkvAg^AxkVuRChy+yB^Askxut^AR9+VZxuF^+^dxkVgC+vuy+DB^Zy+uvA9+VzXK4>NsLu^AgHSXKv+f1jQ1^MZVMfpVS1^>r+Zxq=+4t$9AVdQ+O^uxk^uq>ck^d^u^Rskxqu^RR^MV>xqF^+^KZVKKvRoK^qxkVuKvOr+O^Az+Vbv7xk^ARVOE+=B^Oxk^AZxOG+2B^OxkVARv7xk^ugVAjkvAuXhy+zBxO^k^uO^OqY+vg^up^+Vdjkvd2+^dy+UBxdc+I^u9+8xXKfdSsLu^AZCVXKHkN0^KGkz0xMUkS0y+y0VKMvM4grSOVM2+s0^My+S0VKQ+I^>xk^>qfi$rLxk^>ZfLXQ1CK^KBOsXg^>^MoKVMjkvAR^Ar+AxAG+oB^7xkVAKvIy+$B^OskxAO^Oy+2BV7jkvOu^7xkVu>vOxk^uueJE+GB^Axk^uAxAu9+^d^ufx+vgxk^g=+VZE+XB^Zr+IVuY+No|K4qSsLdxAO28|KGkH0VKyko5^M8kC5z+s0vMZ^K4Zz^ZvqD+C5^>z+H0v>y+H0^>Rx>mgSsk^qY+xMvR^KZ^KB>HUu^MoK^Mskxuu^Ar+OVAE+2B^7xk^Aqx7G+$B^OxkVA>v7y+2B^7skxAI^7xk^uZxA^k^uuVJz+EBvOxk^uOVAK|+^Z^upV+xd^k^gD+^dskxRu^gR^KVqxRF^+^>ZV>f7ycA^Rr+Zxg|+lD|K4qrsLKvRgSl|Ky+|BxK=+4ACDIV>Mvq4A=lLVRQ+O^Zy+yBVdjkvgR^dRV>xRvgp^+^qY+xKvR^MoK^Mskxgu^qR^>VRxgF^+^MgxeEKykD5^K8k=5$k25Ukl58kX5$kl5UkN59+Gz|KBkssLg^KD+U5xKA^k4AQ^AxKT+^Kg^MdxMCQ|KZ^kgV>C+mIjK^K0x>vM^Rp^RVMRv>yQ|KZ^kZxMF^M^KgcQ|KJy=TrC>^KD+=5VKE+D5^>Z^>BRsEg^Mr+gVqjkvRRRRV>xMvRp^+^KU+=5vMg2c|KGkc5xKUkH5$+4gUMvqZ^>4ZTDkv>r+g^qz+S5vZp^R^Z8kxRO^RD+s5VRjkvRR^ZRV>xMvRp^+^K2kxK$DL^MD+H5VME+C~^q$+4gUMv>Z^M4d|euvZr+g^Zz+G5vuxk^ZRVdKv>^R^ZpV+xKGk^q^K^ZeKxZG+l5^MZVMf1N^A^KD+T5xKG+X5^KuVKXeEK=+4dTMVqMvR4uzeuVKQ+O^Ry+D5VuE+l5^Z=+^uVZxgG+X5^ZpVZxd4^Zg^ZU+D5vgA^g^dVZjkvZR^ZRVqxKvZp^+^MU+X5v>y+l5^Kz+D5v>Z^K^MVR2+y5^Ry+l5VRE+N5^Ky+l5VME+S5^gZ^MVgxZ^k^R^K^Zz+=5vMy+N5^Mz+l5vZxk^K^MVRE+l5^KpgVZokvM^Z^ZD+Y5xZOVc|Ky+l5VKVkvMskxk^Rqx>ck^M^R^KeKxK^k^qg^ZD+=vEKmqSsLgVZ>XCSKGk$~^K$ko~Uk=~8kD~$k=~UkX~y+$~VMMv>4gCvhVK2+D~^Ky+$~VKMvM4golLVM2+l~^My+$~VMMv>4gEsgVK2+X~^Ky+$~VKMvM4g9DuVM2+E~^My+$~VKMvM4gNvZV>2+N~^>d^Ky+>vq9+s=EK4>NsLO^qgS^rKjkE~vM8kS~8kj~Y+l9rK4qSsLZxMX+S~^My+r~xKG+l~^>=+VKx>v>D+G~^Mgx>A^>4g^eOxgc+g^Zr+U+xRG+X~^qr+7xu|+ElEK4qrsLgvOgEXEKGk^~xKHkow^MGkvwx>G+$w^MZVMfu$Eu^KZVKfOSsk^>ZV>fONxu^KoKVKjkvAR^Ar+AxOG+2~^AxkVOKvOy+=~^AskxOO^Ay+D~VAjkv7u^AxkVu>v7xk^uu3E+H~^Axk^uAxAu9+^q^ufx+vuxk^RRVdE+N~^dr+IVuY+VNEK4qSsLqxAOVNEKoKY+skxuu^Ar+OVOE+D~^7xk^Oqx7G+=~^AxkVO>vOy+D~^7skxOI^7xk^uZxO^k^uus+z+y~vOxk^uOVAK|+^d^upV+xq^k^Rg^qz+D~vRr+I^dD+$jEKmqSsLOVA>NHEKGkXw^Kjklwv>GkNw^>$kEwG+Nw^MZVMfuVGA^>ZV>fJT|R^qr+ZxM^k^MR4tTVAu^>^q^Mfx+vMD+yw^KXkxK9+^qu^qUxEKE+Gw^Kp9+VM6vM^M^RpVRxqI^qCHEKy+zwxMF^M^KgUHEKJmZcVk^KeKxK^k^dR^Ay+gvOy+2~^OskxAu^Oy+=~VOjkvOg^Oy+U~xO^k^Au^OskxdO^Axk^ddG+G+G~^AxkVdgvOR9+^qVdJvk^uxk^RdxuG+X~^dr+7xA|+GCQK4qrsLgv7gGoQKGkPwxKHkCn^MGkenx>G+on^KZVKfu$Eu^MZVMfOSsk^KZVKfOs9A^MoKVMjkvOR^Or+AxuG+2~^IxkVuKv1y+=~^7skxuO^7y+D~VOjkvAu^OxkVA>vAxk^AuUkE+H~^uxk^AAxuu9+^d^Afx+vRxk^ROVqE+N~^qr+IVuY+2YQK4qSsLAxOO$9QKGk=nVKykXn^MGklnV>ekNny+ln^KRxKmR$SO^>Rx>mO2l1^KU+DnvM|k^KY+V>Rvq$DQKy+XnVKJ|+^M5^KVMxqF^q^>uV>SDQKG+Xn^KpVKxMOC9QKpRVMVkv>xk^uRVOQ+t^Ay+2~VIjkvOR^Iy+Y~xO^k^Ag^Oz+2~vIxk^AuV7jkvAg^AxkVuR=My+G~^Askxut^AR9+VqxuF^+^dxkVRuvuy+X~^dy+uvA9+X|QK4>NsLt^AgsQQKjkynvMGksn^MjkGnvqy+Hn^MRxMmR887^KRxKmgjct^MRxMmAN^A^KOxKsQQKpR^KeKxK^k^uR^Ay+gvOy+2~^OskxAu^Oy+=~VOjkvOg^Oy+U~x7^k^Au^7skxuO^Axk^udD>G+G~^AxkVugvOR9+^dVuJvk^qxk^R1xqG+X~^dr+7xu|+$SQK4qrsL>vOgGjQKGkvC+xKG+$C+^KZVKfOSsk^MZVMfiXlO^KZVKfilxL^MoKVMjkvAR^Ar+AxAG+2~^OxkVAKv7y+=~^OskxAO^Oy+D~VOjkvOu^OxkVu>vOxk^uuP>E+H~^7xk^uAx7u9+^d^ufx+vRxk^RLVqE+N~^ur+IVdY+2HQK4qSsLZxOOSPQKGkDC+VKE+XC+^KZ^KB>ssk^qZ^qBuUeh^MZ^MBAl8g^KoK^Kskxdu^Or+OVOE+D~^Axk^OqxAG+=~^7xkVO>vIy+D~^7skxOI^7xk^dZxO^k^dulqz+y~vOxk^dOVAK|+^u^dpV+xq^k^RJ^qz+D~vOr+I^dD+HeNKmqSsLuVu>o8NKGkEC+^KjkXC+v>8kyC+y+QC+xKA^K4gySOxMX+yC+^My+zC+xMc+u^KxkVKKm72c+xkVK>md|XgCKVMfFP^u^K^>eKx>^k^dR^uy+gvAy+2~^7skxuu^7y+=~VOjkvAg^Oy+U~xO^k^uu^OskxdO^uxk^ddHqG+G~^uxkVdgvAR9+^AVdJvk^qxk^R3xqG+X~^ur+7xd|+=UNK4qrsLgvOgy9NKGkcC+xKHkHC+^MGkPC+x>G+VC+^KZVKfu887^MZVMfOXsL^KZVKf1N^A^M7VMl9NKFR^MoKVMjkvuR^Ar+AxAG+2~^OxkVAKv7y+=~^OskxAO^Oy+D~VOjkvOu^OxkVd>vOxk^duYZE+H~^Axk^dAxAu9+^u^dfx+vRxk^RpVqE+N~^ur+IVdY+oENK4qSsLAxOOVQNKGk2e+VKykle+^MGkDe+V>E+Xe+^KZ^KBK=Eu^MZ^MB>lE1^qZ^qB>Sxu^KoK^Kskxdu^Or+OVIE+D~^Axk^IqxAG+=~^OxkVI>v7y+D~^AskxII^Axk^dZxI^k^dulZz+y~vOxk^dOVAK|+^u^dpV+xq^k^RB^qz+D~vur+I^uD+$SNKmqSsLgVO>GxNKGkEe+^K$kXe+G+Ee+^>ZV>fO=E1^KZVKfJ||O^MuVMocNKG+Ee+^qZVqfO=E1^KZVKfJ||O^qZVqftc2h^KpVKxMX+Ne+^M|kVMv+vRu^qysNKz+Xe+vMp9+^M0xKv>^>p^>VqRvRDxNKy+Ne+VMJv>^KgExNKf3vMoK^KxkVuKv7r+O^Az+o~vIxk^ARV7E+l~^7xk^AZx7G+D~^7xkVARvIxk^ugVAjkvAuXgy+j~xA^k^uO^AqY+vu^up^+VqjkvZF^qy+T~xdc+I^u9+P^NKfdSsLu^7ZGezKHkVe+^KGk^e+xMUkoo+y+Co+VMMv>4g|DZVK2+2o+^Ky+oo+VM$+v>4<ookVKVkvMxk^uRV7Q+t^Ay+2~VOjkvOR^Oy+Y~xI^k^Ag^Iz+2~v7xk^AuVOjkvAg^AxkVuRDuy+G~^Askxut^AR9+VdxuF^+^qxkVRBvRy+X~^Ay+uvu9+22zK4>NsLt^ugN=zKjk$o+vMGkDo+^Mjk=o+vqy+lo+^KRxKmR887^MRxMmgjct^KRxKI^M7^MT=zKJmgCER^MeKxM^k^dR^uy+gvAy+2~^Oskxuu^Oy+=~V7jkvAg^7y+U~xO^k^uu^OskxdO^uxk^ddNuG+G~^7xkVdgvIR9+^AVdJvk^qxk^RmxqG+X~^dr+7xO|+HlzK4qrsLgvIgoNzKGkzo+xKHkSo+^MGkjo+x>Ukso+y+Go+VKMvM4RVGAVqMvR4tT|RVKQ+O^>xk^>qfWPeIR^qVKx>F^+^MD+co+xMzk^MY+^KdxKoQzKy+so+^MfY+vq5^M^>VZJvg^Ku^KzQzKE+Vo+^Kp^KVM>oNzKp4ZGVkxM2K^Mxk^Oqx7c+O^uy+8~xA^k^uR^Az+$~vOxk^ugVAE+X~^Axk^udxA^k^Og^uskxOIHAy+G~Vujkv7O^uRD+xdv7p^+^qskxRC+^qy+X~VqQ+L^d9+lSzKBkssLO^Ag|GzKyk=v+^KGk2v+VMyklv+^>8kDv+z+$v+v>Z^M4qVrZvMD+Dv+^Kz+2v+vMZ^K4Zr=1vqoK^>xkVdKvOr+O^Az+o~v7xk^ARVOE+l~^Oxk^AZxOG+D~^OxkVARv7xk^dgVAjkvuuXOy+j~xA^k^dO^AqY+vR^dp^+VujkvZw^uy+T~xqc+I^d9+cHzKfdSsLu^AZlCyKHkEv+^KGkQv+xMUkyv+y+Nv+VKMvM4g9bVM2+Gv+^My+yv+VMQ+J^qxk^qqfIQXIxk^qZK^k^quCMskxqtgxk^q7fdSsLR9+VMxqF^+^KoKVKjkvuR^Ar+AxAG+2~^OxkVAKv7y+=~^OskxAO^Oy+D~VOjkvOu^OxkVd>vOxk^duxOE+H~^Oxk^dAxOu9+^q^dfx+vAxk^RC+VuE+N~^qr+IVOY+V$yK4qSsLAxuOH=yKGksv+VKykC$+^MGkVv+V>ek$$+y+Vv+^KRxKmR$SO^qRxqmdQoI^KU+Hv+vM|k^KY+VMRv>HYyKy+C$+VKJ|+^>5^KV>xqF^q^MuVMX=yKG+C$+^MpVMxKOG=yKpRVKVkvMxk^ORVuQ+t^Ay+2~VujkvOR^uy+Y~xu^k^Ag^uz+2~vAxk^AuVujkv7g^AxkVORNIy+G~^7skxOt^7R9+VqxOF^+^dxkVRwvuy+X~^dy+uvA9+2TyK4>NsLt^AgoQyKjk2$+vMGkl$+^MjkD$+vqy+X$+^MRxMmR887^>Rx>mgC4^MRxMmuSEg^>y+>vZfRtVqjkvZR^qRVMx>vZp^+^KRxKO^>7^>PEyKJmgCER^>eKx>^k^uR^Ay+gv7y+2~^AskxOu^Ay+=~VIjkv7g^Iy+U~x1^k^Ou^1skxuO^Oxk^udEtG+G~^AxkVugvOR9+^dVuJvk^qxk^Rv+xqG+X~^dr+7xq|+lryK4qrsL>vOgGsyKGkr$+xKUkG$+y+S$+VKMvM4g=E1VMMv>41|kVKRvMDGyKy+S$+VMMv>4g=E1V>Mvq41|kVqMvR4Oc2hVMJv>^KD+G$+VK9kvMY+^MuVMycyKG+G$+^KpD+x>C+^K^>^ZfxZv>u^MXsyKz+y$+vqp^>^KZEsyKFb^KoKVKjkvRR^Ar+AxAG+2~^7xkVAKvIy+=~^OskxAO^Oy+D~VOjkvOu^OxkVq>vOxk^qujhE+H~^Ixk^qAxIu9+^d^qfx+vAxk^R2+VuE+N~^ur+IVdY+2^yK4qSsLAxOOVorKGk$8+VKykD8+^MGk=8+V>E+l8+^MZ^MBKU87^ZZ^ZB>NsL^MZ^MBRsEg^>r+gVqhut^RxkVqKvZR^M^>VqJvk^KZ^Kdx>i^>sorKpB>$ER^>oK^>skxdu^Or+OVAE+D~^Oxk^AqxOG+=~^OxkVA>v7y+D~^7skxAI^7xk^dZxA^k^duoJz+y~vOxk^dOVAK|+^u^dpV+xq^k^R=+^qskxZu^RR^>VgxZF^+^MZVMf7ycA^qr+ZxR|+$=rK4qrsLKvdgXDrKy+z~xM=+4ACDIV>Mvq4A=lLVqQ+O^gy+G~VZjkvdR^ZRV>xqvdp^+^RY+xMvZ^KoK^KskxRu^gR^MVqxRF^+^Kgz^rKyky8+^K8kN8+$kE8+UkS8+8kG8+$kS8+UkH8+9+EQrKBkssLg^KD+z8+xKA^k4AQ^Ax>T+^>g^KdxKGXrKZ^kgVMC+mIjK^>0xMvq^qp^qVKRvMl|rKZ^kZxKF^K^>gQ|rKJy=TrC>^>D+N8+V>E+y8+^MZ^MBRsEg^>r+gVqjkvRRRRVMx>vRp^+^KU+N8+vMgVSrKGkv2+xKUk22+$+4gUMvMZ^K4ZTDkvqr+g^qz+C2+vZp^R^Z8kxRO^RD+$2+VRjkvRR^ZRVKx>vRp^+^M2kxM$DL^>D+22+V>E+D2+^M$+4gUMvZZ^R4d|euvRr+g^Zz+o2+vdxk^ZRVgKvZ^q^ZpV+x>Gk^M^>^qeKxqG+S8+^KZVKf1N^A^>D+j8+x>G+G8+^KuVK2^rK=+4dTMV>Mvq4uzeuVqQ+O^Zy+y8+VdE+S8+^u=+^dVuxgG+G8+^RpVRxd4^Rg^RU+y8+vZA^g^dVRjkvgR^RRV>xqvgp^+^KU+G8+vMy+S8+^qz+y8+vdZ^q^gVK2+V8+^Ky+S8+VqE+H8+^Ky+S8+VZE+C2+^dZ^ZVdxR^k^q^K^Rz+N8+vRy+H8+^Kz+S8+vZxk^q^KVRE+S8+^ZpgVqokvg^q^qD+Q8+xqOSjrKy+S8+VKVkvMskxk^>qxqck^K^>^MeKxM^k^qu^ZD+CeSKmqSsLgVO>N2TRGkX2+^K$kl2+UkN2+8ky2+$kN2+UkG2+y+X2+VKMvM4gCvhVq2+y2+^qy+X2+VMMv>4golLVK2+S2+^Ky+X2+VKMvM4gEsgVM2+G2+^My+X2+VKMvM4g9DuVM2+s2+^My+X2+VKMvM4gNvZVM2+H2+^Md^Ky+>vq9+N2SK4>NsLO^Zgs8TRjks2+vM8kCY+8keY+Y+EQlR4qSsLZxMX+CY+^My+^2+xMG+S2+^>=+VMx>vMD+oY+^KgxqA^q4g^eOx>c+g^Zr+Y+xRG+G2+^dr+7xO|+=DSK4qrsLgvOgDXSKGkUY+xKHklY+^MGkTY+x>UkEY+y+XY+VKMvM4R$SOV>Mvq4u2xuVq2+yY+^q|k^q2+xKI^KDTSKy+|Y+xRF9+^M5VRxMvqp^>^KdxK$XSKy+EY+^KfxKv>g2XSKpqxM2K^Mxk^OqxAc+O^uy+|2+x7^k^uR^7z+X2+vOxk^ugVAE+G2+^7xk^udx7^k^Og^uskxOIDky+oY+VIjkv7O^IRD+xdv7p^+^gskxRu^gy+G2+VdQ+L^u9+yNSKBkssLO^OgrSSKykVY+^KGkHY+VMyko=+^>8kC=+z+sY+vMZ^K4qCSOv>Z^M4RUrRvMD+C=+^KXkxK9+^Mu^MrrSKE+$=+^Kp9+Vq6vM^q^ZpVZxMI^MlSSKy+^Y+xMF^M^KgQSSKJu^KoK^Kskxuu^Or+OVAE+y2+^7xk^Aqx7G+N2+^OxkVA>v7y+y2+^OskxAI^Oxk^uZxA^k^uuskz+V2+vOxk^uOVAK|+^d^upV+xg^k^Rg^gz+y2+vdr+I^uD+HsSKmqSsLOV7>C^SKGkD=+^Kjk==+v>GkX=+^>z+D=+vMZ^K4qe87vqZ^>4ZHBvMZ^K4dNEgvqr+g^qaKJ^Zxk^qqxZu^K^>^qfx+v>Z^MOV>dvqGVSKp4ZH|RvqoK^>xkVuKvIr+O^Az+l2+v7xk^ARVOE+S2+^Oxk^AZxOG+y2+^OxkVARv7xk^ugVAjkvAuHky+eY+xI^k^uO^IqY+vd^up^+VdjkvZu^dy+j2+xuc+I^d9+8vjKfdSsLO^AZ$YjKHkS=+^KGkj=+xMHks=+^>8kx=+E+V=+^MZ^MBK=SO^KZ^KBqEVk^MD+H=+VM9kv>Y+^KuVK$2jKG+H=+^MpD+xqC+^M^q^>fx>vMu^KV2jKz+G=+vMp^K^MZCYjKFR^MoKVMjkvuR^Ar+AxAG+E2+^OxkVAKv7y+N2+^OskxAO^Oy+y2+V7jkvOu^7xkVd>vOxk^du8KE+2Y+^Axk^dAxAu9+^u^dfx+vdxk^ROVgE+H2+^dr+IVAY+S9jK4qSsLAxuONTjKGk2U+VKyklU+^MGkDU+V>E+XU+^KZ^KBK=Eu^MZ^MB>ssk^>Z^>B>ETL^KoK^KskxAu^ur+OVuE+y2+^Ixk^uqxIG+N2+^OxkVu>v7y+y2+^1skxuI^1xk^AZxu^k^Au=Kz+V2+v7xk^AOVOK|+^d^ApV+xg^k^RI^gz+y2+vur+I^uD+GQjKmqSsLgVA>yzjKGkEU+^Kz+lU+vqZ^>4Z$E1v>Z^M47eehvMZ^K4I$8gvqoK^>xkVuKvOr+O^Az+l2+vIxk^ARV7E+S2+^Oxk^AZxOG+y2+^OxkVARv7xk^ugVAjkvAusMy+eY+xA^k^uO^AqY+vu^up^+VgjkvZt^gy+j2+xgc+I^u9+cjjKfdSsLg^OZDcjKHkSU+^Ky+rU+xMA^M4grskxKA^K4I$ehx>A^>4hcGOxK2K^Kxk^uqxOc+O^Ay+|2+x7^k^AR^7z+X2+vIxk^AgV7E+G2+^Oxk^AdxO^k^ug^AskxuI=Zy+oY+VAjkvAO^ARD+xgvAp^+^dskxRa^dy+G2+VdQ+L^A9+GPjKBkssLR^ug^UGKekCD+8kVU+$+BqQjt^>Z^>B1VVd^Rek^Mqx>vZ^Mp^+VK2+CD+^Kek^KU+sU+vM$+4A^UIxRA^R4Or<xZc+g^uy+xU+xdA^d4J99hxO8k^AR^dVOxAF^+^gxkVuKvdR^R^ZVuJvk^MZ^MBZPV+^Zr+gVgY+SvGK4qSsLZxuOV8GKGk$D+VKE+oD+^MZ^MBdUC+^qr+gV>E+=D+^ZZ^ZqxR^k^>R^RqxMvR^>p^+VKzkvM^>oK^>skxgu^uR^MVZxgF^+^qZVqfOevu^ur+ZxZ|+GYGK4qrsL>vdg2UGKGkUD+xKG+DD+^>ZV>fieQg^MekVqKvq^M^qpV+xK2K^Kxk^Zqxgu^q^u^Zfx+vMoK^KxkVAKvAr+O^uz+l2+v7xk^uRVOE+S2+^Oxk^uZxOG+y2+^OxkVuRv7xk^AgVujkvOuNZy+eY+xu^k^AO^uqY+vu^Ap^+VgjkvZJ^gy+j2+xdc+I^A9+UXGKfdSsLg^OZNzGKHkED+^K8kQD+E+yD+^KZ^KB>lE1^qZ^qBOz9A^Ku^KYQGKE+yD+^MZ^MB>lE1^>Z^>BOz9A^MZ^MBgP2h^>p^>VK2+SD+^K|k^K2+xMI^MSNGKy+QD+xKF9+^>5VKx>vRp^q^MdxMEzGKy+ND+^KfxKvqgNzGKppx>2K^>xk^AqxOc+O^7y+|2+xu^k^7R^uz+X2+vAxk^7gVuE+G2+^uxk^7dxu^k^Ag^7skxAI2gy+oY+VOjkvOO^ORD+xdvOp^+^gskxRB^gy+G2+VgQ+L^79+CGGKBkssLO^ug9sGKyko9+^KGkC9+VMyk29+^>y+o9+VKMvM4R887VMMv>4gjctVKMvMO^M7VM$sGKF4gCERVMVkv>xk^7RVuQ+t^Ay+E2+VOjkvOR^Oy+Q2+xu^k^Ag^uz+E2+vAxk^AuVujkvIg^AxkV7Rsdy+oY+^uskx7t^uR9+Vgx7F^+^dxkVRJvuy+G2+^gy+uvA9+SVGK4>NsLt^AgyocKjk29+vMGkl9+^MjkD9+vq8kE9+y+T9+xKA^K4RsDAxMA^M4gPD+xKX+E9+^Ky+|9+x>A^>4iESdxMc+g^qy+|9+xRA^R4ONDtxZ^k^qR^Zqx>v>^qp^+VKVkvMxk^uRVAQ+t^7y+E2+VAjkvIR^Ay+Q2+xA^k^7g^Az+E2+vOxk^7uVAjkvAg^7xkVuRyuy+oY+^Askxut^AR9+VgxuF^+^dxkVRavuy+G2+^dy+uvA9+V2cK4>NsLt^AgsDcKjkN9+vMGkG9+^MjkS9+vqy+s9+^MRxMmR887^>Rx>mg$j+^MRxMmuSEg^>y+>vRfRtVRjkvRR^RRVMx>vRp^+^KRxKu^q7^qrDcKJmgCER^qeKxq^k^uR^Ay+gvOy+E2+^1skxAu^1y+N2+VOjkvOg^Oy+z2+xO^k^Au^OskxuO^Axk^udlAG+oY+^AxkVugvOR9+^dVuJvk^gxk^R4xgG+G2+^Ar+7xO|+$|cK4qrsLgvugDycKGkel+xKHk$l+^MGk8l+x>Uk=l+y+2l+VqMvR4RVGAVKMvM4tT|RV>Q+O^qxk^qqf3cj7R^KV>xqF^+^MD+Yl+xMzk^MY+^qdxqDzcKy+=l+^>fY+v>5^>^MVRJvZ^qu^qxzcKE+ll+^>p^>VM>DycKp4ZGVkxM2K^Mxk^Oqxdc+O^dy+|2+x7^k^dR^7z+X2+vAxk^dgVuE+G2+^1xk^ddx1^k^Og^dskxOIyOy+oY+Vdjkv7O^dRD+xAv7p^+^gskxR5^gy+G2+VdQ+L^u9+yGcKBkssLu^OgjscKykSl+^KGkyl+VMeksl+y+yl+^MRxMmgzEZ^>U+Nl+vqy+Sl+^qtxqvMZ^K4B5v>oK^MxkVuKv7r+O^Az+l2+v7xk^ARVOE+S2+^Ixk^AZxIG+y2+^OxkVARv7xk^ugVAjkvAuE1y+eY+xA^k^uO^AqY+vu^up^+VgjkvZ<^gy+j2+xdc+I^u9+e^cKfdSsLu^OZDesKHkHl+^KGkPl+xMUkCT+y+Vl+V>Mvq4gygVq2+$T+^qy+CT+VME+CT+^>Z^>B>lE1^q=+^MVqxK2K^Kxk^uqxOc+O^Ay+|2+xO^k^AR^Oz+X2+v7xk^AgVOE+G2+^Oxk^AdxO^k^ug^AskxuIyty+oY+VAjkvAO^ARD+xdvAp^+^gskxRC+^gy+G2+VdQ+L^O9+G8sKBkssLO^ug|cH+ykDT+^KGk=T+VMykXT+^>8klT+ZDG9ROleekg=voMZo92>OsP2Kg=9S>Z=9S>G+lxR^My+THRx>E+^M^>^KdxK2|sKy+=xR^Kz+=xRvqZ^K^>VM2+yHR^My+DxRVKE+yHR^My+$xRV>Zv>^>^qe+VKxqv>D+DxR^Mz+2xRv>Xk^MFVKE+XxR^>z+^>U+xqy+^K^q^MU+2xRv>y+DxR^KP+xKocGK^My+HsRVKZv>^K^>y+UxRxKj+^KC+^Mz+GsRvMA^M^KVqDkvRC+^Ke+V>xKv>V+^MZPGGGjmxGGGSGKvqD+DxR^>z+=xRv>2k^MgVM2+ExR^MgsV$uz+2xRvMy+DxR^MN+xMo+^qQ+^KVqxRX+DxR^Ry+UxRxRok^RVGGK^Kz+ssRv>A^K^MV>s+vqZVGGGjm^GGGSGKVKE+XxR^Mz+^Mnx>G+VsR^MAV>xMvRXk^qC+V>~vM^>^MD+UxRxMG+DxR^Ky+UxRxMj+^M<^>E+xKvq^MD+DxRVME+XxR^KV+^KPGGKxMG+CxR^KAVMxKvqV+^>ZPGGGjmxGGGSGKvRy+DxR^KN+xK$+^My+CxRVRZv>^R^KXkVK5v>e+^q^MVK2+XxR^Ky+DxRV>E+XxR^Kz+^KnxMr+^>^M^KU+2xRvMy+DxR^KIxKu^Mu^M9csKE+XxR^KvK^KRxGGGjmd^qp^qV>>HcsKy+DxR^KfxKvqoK^>xkVRfON8g^K9+cssKfdSsLR^KZlCxKQkVPRy+H7VKMvM4g=E1VqRvR2VsK$+4ODlOvqZ^>4gjmv>Z^M41|Nuvqr+g^Rz+G7vRZ^q4Z$E1vgxk^RRVZKv>^>^RpV+xKG+H7^RWVRfO=E1^Ky+x7xK0^K4gvPkx>G+H7^qWVqfOYyt^>y+x7x>0^>4goQuxuVkxk^R4Z2HAvM9+XexK4>NsLu^Kgs8xKlkCVRG+H7^KZVKfOvQu^M$+BuxK^K5^MVKx>I^>C$xK$+B7oTL^My+H7V>Mvq4gvQuVq$+v>^q^Ky+x7xK=+41v3V>E+yjR^qZ^qB>XHA^ZCK^>VZySkv>xk^K4Z^Euv>skxk^RB>$|L^KD+EjRVR>oXxKGk=VR^K$k2VRUklVRZ^kBZS^A^KU+^KZxMI^MG=xKZVk>vq$+4ISKxKC+^>^K^RfxRv>u^MEUxKRxkO^qp^qVK>sUxKpb^KU+2VRvM$+4dlMxKA^K4ATvdxq8k^MR^KVqxMF^+^>YkV>av>D+lVR^Mv+fhv3^M9+TlxKfdSsLR^qZ=TxKG+yjR^Ky+YVRx>G+DVR^qCKVKx>vR^Msky+9VRxZ$K^M^q^ZV>SkOyHxKGkSVRVKykHVR^M8ksVR$kGVRUkVVR8kC^R$kVVRUk$^R8k2^RU+SVRmqSsL$+BZx=g^KZ^KB7HlO^MD+HVRVMC+mAj=g^MRxMmIDNh^>Rx>m1J^RRxRmdrjd^My+>vqy+SVR^Zskx>u^ZR^RVMx>F^+^KD+PVRxK=+4Aj=gVqMvR4IDNhVMMv>41JV>Mvq4drjdVqQ+O^Zy+GVRVMjkvgR^MRV>xqvgp^+^KU+HVRvMy+GVR^KRxKmAN^A^MU+VVRv>y+SVR^KRxKmAN^A^MU+C^Rv>D+2^RRz+o^RvMy+$^R^M9+xKv>^qu^qUHxKE+VVR^My+HVRVqE+o^R^gy+2^RVu$+vd^u^Zy+^VRxdG+2^R^uy+e^RxA$k^u^A^OY+xdv7^gQ+^ZVgxul+^q^u^K8kxMvM^KD+sVRVKE+D^R^Kp^KVMokvMg^KD+8^RxKONjxKy+sVRVKVkvMB=o^+9+UPxKfdSsLR^MZHPHKUkE^Ry+wVKuvgZ^Z4gXRvdr+g^qD+GVxKmqSsLRVR>=sHKTky^R8kr^RekH^RI^KZVKf7GHd^>r+dxq|+ECHK4qrsL>vggHGHKTkx^RykoCZ^KugcGHKE+oCZ^Ky+V^RVMMv>4dDl+V>jkvM4djxtV>o+vqR^KuVK=2HK=+4I8ehVKMvM41QzkVMzkv>^Ku^KU$HKE+oCZ^Kxk^KBqXl+LgSGHKz+s^RvRxk^q4g2l+t$+4I$ehxqA^q41EzkxK8k^RR^qVKxRF^+^MoKVM>V2HK2+^>OVKRvMXNHKy+V^RVKMvM4dlIVM2+s^R^MS+^Kz+N^Rv>Z^M4O^XLvZxk^K4qjDAvZy+S^R^MRxMmuUQg^RskxKmRVQd^Rz+N^RvZZ^R4tesuvgZ^Z4OPEgvZek^gRVZxRvdp^+^MskxKmZQY1^Mz+N^RvdZ^g4h$D+vAZ^u4OPEgvZek^gRVuxRvdp^+^MskxKmZj2u^MU+y^RvMy+V^R^MRxMmAzsg^gy+RvZxk^RRBZG97S+^AxkVAftzvuby+9Ix7A^74IsDZxdc+g^Iy+j^Rxt^k^IR^tqx7vu^Ip^+VOjkvO4gv$IVOjkvO4uQsLpjkvZg^ARVMxgvZp^+^KeKxKOHNHK2+^>ixKI^KDSHKy+P^RxRA^R4ANsgxgc+u^OxkVOKmAy97S+VIjkv14Ozvupjkv14gv$IBMlThxk^I4dTsLWxk^OgVIKvZ^g^OpV+xK2K^KgGSHK8+x>p^Ku^KxSHK>NjHK2+^>4Z^X+vuu^dSGHKz+s^RvMZ^K4gyyRvOek^ORVKxAv7p^+^geKxgOsCHKskxkVqKvgy+y^R^RskxqO^RR^KV>xqF^+^MoKVMjkvRR^RRVZxgvRp^+^>Y+xKvq^MD+E^RVMY+VxHK4qSsLqxMOHPHKTk=CZz+l^RvMZ^K4dDGtvqr+u^Rixq^k^RR^qskxRO^kR^KV>xRF^+^MoKVMVkv>ek^qRD+xMvRp^+^KU+yjRvM9+D^HK4>NsLu^MgXX^K$kDCZG+w^KIVqMvR4dNRVRQ+O^Z9+HCPKBkssLR^ggQD^KUkSCZ8kyCZ8krCZekHCZ8ksCZ8kxCZekoeZ8kCeZ8keeZek=eZ8k2eZ8kYeZekXeZ8kleZ8kTeZekyeZI^MZVMf7GHd^qr+dx>|+$$PK4qrsL>vZgDU^KTkzeZykseZ^KugYU^KE+seZ^My+SeZVKMvM4dDl+V>jkv>4djxtV>o+vqR^KuVKo9PK=+4I8ehVK1mgoR^KVMRv>GYPKy+SeZVKjkvM4dDl+d>=U^Ky+SeZ^MRxMmAzsg^qy+RvZxk^RRBZG97S+^ZxkVZftzvubxkVZfOv$I4ZYThjkvg4uQsLpjkvZg^ZRVMxqvZp^+^KeKxKOy9PK2+^>dxKI^KoXPKy+reZxK^k^K4dUl+u=+4I8ehVKMvM4goRVZMvg4hDCkVKP+vRR^Z^KVqJvk^RoK^RZlXPKD+^>I^KdxKHzPKy+SeZ^KRxKmdlI^qU+ECZvRy+yCZ^KdxKXEPKy+SeZ^KskxKmdDl+JZCU^KG+SeZ^qZVqf1zsg^Rr+dxg^k^gR4uE97s+^dxk^dBgjvubxk^dB>Y$I4d^TOskxdmuQsLbskxgO^dR^qVRxgF^+^KoKVK>DyPK2+^>JVKRvMy=VKy+yCZVRMvZ4LjDgVgP+vuR^R^gVdJvk^KD+SCZVKE+GCZ^KZ^KBqQYh^gD+GCZVgP+vMD+sCZ^Kv+fL8eh^gZVgfOoR^uZVufWsjZ^gZVgftyYh^ur+Zxd|+GGPK4qrsL>vOgysPKGkvoZxKG+sCZ^>ZV>f7Hyg^Mr+ZxqG+$oZ^RxkVqKvZR^>^MVqJvk^KskxkVdKvOR^g^uVdJvk^Kek^KU+GCZvMy+yCZ^dRxdm7ow^uRxumOyYh^Oy+>vu9+DPPK4>NsLO^Ag2^PKjk2oZvMy+HCZ^MRxMmdHyg^>y+>vRy+DoZ^Rskxqu^RR^MV>xqF^+^Kskskxdu^AR^uVOxdF^+^KS+Vd2+oeZ^dD+CeZqC+mACDI^dRxdmdT|+^Ay+>v7y+yCZ^7Rx7mA$jt^IRxImIlu^7skxOu^7R^dVAxOF^+^KD+eeZxKG+CeZ^Ay+eeZxOA^O4AQ^AxLE+^A^L^OdxOGYVKy+oeZ^Oz+HCZvIZ^O^7VA2+=eZ^Ay+VCZVAE+=eZ^Oy+yCZV7MvI4A$jtVIE+=eZ^iZ^IVix7^k^A^O^7z+HCZvIp^7^A8kx7O^7D+CeZV7>2vVKy+SeZ^OskxOmdDl+o+z+NCZvOoK^AgeUVKo+vqo+^AuVAy2^KG+SeZ^AZVAf7lI^7D+8eZx78k^AD+=eZVAE+DeZ^7Z^7Bd2w^OZ^OBgGYh^Ir+gV7Y+V9VK4qSsLZxtOSTVKGkNoZVKE+leZ^KZ^KBqCrg^qr+gV>E+SoZ^Rxk^>qxRu^K^q^>fx+v>skxk^7qxtu^O^I^7fx+vOS+^AD+UeZxAX+leZR$+BZ$DI^7Z^7BqQ|+^1r+gVIE+DeZ^tZ^tBZ=jt^iZ^iBuEu^txk^Iqxtu^7^1^Ifx+vOD+XeZ^Az+=eZviy+XeZ^IRxImAN^A^19+xtvt^Iu^IvSVKE+NeZ^Iy+leZVtMv1^t^hD+|eZxhG+DeZ^Iy+|eZx1G+2eZ^tZVtf1$jt^iy+|eZxhA^i^h^tskxIvt^ty+leZVIJv1^12k^IZxIX+leZ^IgQQVKE+seZ^LZ^LBZjsg^1r+uVtjkviR4Az97N+vLxk^i4A|vuWy+lI^JRxJmIxDZ^3y+>vfS+^fS+VpE+CeZ^Bxk^pB>$jR^By+VCZVbjkvb4gQ|1VbE+GCZ^bZ^bBLy=u^4xk^pB>$yR^4xk^fBKocA^pS+^pz+$eZv4xk^p4ZHSRv4y+DeZ^bskxpmgQ|1^bz+oeZv4Z^B4dE$uvBxk^p4ZEYZvBy+2eZ^4Rx4muPEL^BRxBmuy$u^bskxpmdxw^bskxfmREou^pr+xbG+sCZ^pxkVbfOCjR^pxkVffuVQd^bS+VbE+HCZ^4Z^4B7rsO^pxk^bB>=cI^py+GCZVBMv44tcQkVFjkvB4g2N+VFE+HCZ^pZ^pBZ=Gt^Bxk^bB>DH7^By+GCZVpMvb4ANvhV4jkvB4gXEAV4jkvp4RoSZVbjkvfR^fRVJx3vfp^+^hskximgv$I^hskximuQsLbskxtO^iR^LV1xtF^+^IoKVI>DY^K2+^>X+VIRv1DY^KgHY^K8+x>mgv|+^IdxI=U^Ky+SeZ^1Rx1mdGyR^tCkxiu^1^t^ifx+v1oK^IgT$PKSk^k^>R^Rz+XCZvgxk^>gVZKv>^q^>pV+xK2K^Kxk^Zqxgu^q^R^Zfx+v>=+^K^MV>2+NCZ^>9+=l^KBkssLR^KgUX^KUkHoZy+XCZ^MRxMmuXGt^>y+RvZL^qxkVRKvRxk^RgVkKv>^>^RpV+xK2K^KoK^KCkxqu9+^M^qfx+vMD+sjR^KD+y|^KmqSsLgVK>ojeMTkHoZGkPoZxKUkCvZ8kovZ$kCvZUk2vZ8k=vZ$k2vZUklvZ$+4gD=Iv>Z^M4Z=xOvqek^qRVMx>vRp^+^KU+HoZvMd^Kr+Zxq|+=z^K4qrsLRvggXy^KGkQvZxKHkyvZ^My+QvZxMX+ovZ^My+zvZxKX+$vZ^Kskskxqu^Zrk^KVqx>X+2vZ^>$+BuxK^KD+=vZVKN+vMD+DvZ^Kblj^KG+VoZ^>y+^SRxRl+^>^R^KOxKDj^KS+^>pV>xKX+=vZ^Kgvx^Ka9+vk^q^+jkKvRy+ovZ^>r+xq^k^q4ONvu3G+R^ZZVZfieQg^gekVdKvg^g^dpV+xR^k^q4go$IxR^k^q4uEsLil+^>^q^Kz+ovZvqoK^>B2+C+m1v3^qD+CH^KmqSsLRVR>$V^Ky+ovZ^qr+xK^k^K4ONvu3^k^K4go$Iftyvdxk^KBRrsL3=+^qVKxMVky+ojR^>^kxqvZ^>^KD+9vZxKG+=vZ^KZVKfIXc1^>r+ZxR|+CCCM4qrsL>vug2$CMGke$ZxK=+4iVlLV>E+EvZ^q=+^>VqxKs+^Kxk^KBgjvuby+o$ZVqMvR47eQgV>P+vZR^q^>VRJvk^Mxk^KB>Y$I^Mxk^KBRrsL3D+DvZVKE+2vZ^>y+DvZVd$+vq^d^KskskxRu^dR^KV>xRF^+^qy+YvZxqA^q4dzcAxgc+g^R9+82CMfdSsLg^OZsreMHk=$Z^K8kU$ZC+miVlL^Kz+=vZv>=+^K^MVqE+l$Z^KD+DvZVKaCveMek^KD+U$ZxKG+DvZ^KZVKfOv$I^M$kVMxKzk^K4APyIxMI^MVTCMy+UvZxKG+lI^qZVqfLxDZ^>r+ZxRG+DvZ^dZVdfOv$I^ZxkVRKvgR^q^>VRJvk^Mxk^KB>Y$I^My+D$ZVZMvg4dHygV>Q+O^My+$jRVRMvZ4gz2hVgjkv>R^gRVZx>v>p^+^Kz+2vZvMZ^K4A|vuvq$k^>^KXkxKmOlcR^MdxMlQCMy+D$Z^>Rx>mdHyg^Ry+>v>y+$jR^gRxgmgjTu^dskxMu^dR^>VRxMF^+^Ky+UvZxKA^K4uEsLxu=k^u^K|kVKftlcR^MuVMXyCMG+D$Z^RZVRf7Hyg^ur+ZxKG+$jR^gZVgfOccu^dxkVKKvuR^R^uVKJvk^My+DvZVM1muXrL^MVdRvuySCMy+DvZVKMvM4uXrLVMC+mIjK^K0xMvM^gp^gVdRvu$GCMy+DvZVKMvM4uXrLVuCkvA^M|k^MBZCrR^Kp^KVdRvuDsCMy+D$ZVMMv>4dHygVgQ+O^dy+$jRVuMvA4gy8kVAjkvuR^ARVMxgvup^+^Kz+2vZvMZ^K4dTsLvds+^g3VKRvMDHCMy+DvZVdMvu4OzvuVgS+vd3^dpVdxKI^KEVCMy+U$ZxdA^d4dxygxgc+g^uy+vjRxIA^I4gseZxA^k^uR^Aqxdvd^up^+VKE+X$Z^KZ^KBZS^A^gU+^gqxKI^KGoeMy+UvZxuG+D$Z^gZVgf7DGt^Ar+ZxO^k^OR4RY^+u^g^A^Ofx+vMxk^u4OQcOvMy+DvZ^KskxKmOzvubz+2vZvMxk^K4dTsLbg22eMB2+^+vA^+GkRVuE+XvZ^Ky+RVAMvO47eQgVOP+vIR^A^OV7Jvk^uxk^KBdccO^uy+DvZVujkvA4OzvupE+XvZ^Kxk^KBRrsL3BY+z+2vZvMy+DvZ^uRxumOzvu^OdxOSYeMpg^1ZyYeMFR^1xkVKfuGU1^1y+UvZxuG+DvZ^OZVOfIQsL^IuVI=UeMFg^7gQUeMJu^7xk^uBKQy1^7y+DvZVKE+XvZ^uZ^uB>Y$I^Oxk^KBKE$7^Oy+DvZVKbvM4OzvuVuE+XvZ^OW^OBRrsL^uy+DvZV7bvI4gv$IVuE+XvZ^uZ^uBKHU1^Ijk^IV1Rvt=XeMy+DvZVubvA4RGU1VIE+XvZ^IZ^IBKQy1^1jk^1VIRv1G|eMy+DvZVIbv14RTy1V1E+XvZ^1Z^1BKE$7^ts+^tBkssL^iu^iTQeME+XvZ^tW^tBKE$7^1y+DvZVLC+mdX=I^1Rx1mglxO^hCkxJu^1^h^Jfx+vLy+CvZ^hzkxivJ^pxk^LBKHcu^py+DvZVLMvh4RGcuVhS+vJR^JuVJ$reMG+DvZ^iWVifuGcu^Ly+evZxLG+DvZ^J=+VLxJvJskxk^RqxOu^q^g^Rfx+vqy+2vZ^>eKx>X+HjR^K9+rjeMfdSsLR^>ZXeYZUkE8Zy+wVKuvRZ^q4gXRvZr+g^ZD+$ceMmqSsLgVg>yP2ZTky8ZGkr8ZxKUkG8Z8ks8Z$kG8ZL^>Z^>BqHHd^qr+uVMY+DxeM4qSsLZxRO=H2ZTkC2ZjkV8ZvMug2H2Zz+V8ZvZy+o2Z^MRxMmdDl+^KskxRmdjxt^K8+xKu^Mu^MzS2Zqvqr+g^qD+CVeMmqSsLuVR>X^eMGkl2Z^KjkD2Zv>y+l2Z^MU+y8Zv>y+X2Z^MU+S8Zv>skxk^qqxRck^>^q^MU+G8Zv>y+S8Z^>Rx>mdycA^qy+>vZ9+DeoM4>NsLO^ZgVy2ZjkE2ZvMy+y2Z^KskxKmRHjggz+E2Zv>Z^M4qyU1vMs+^K3Vq>yN=qgyN=qgc2sK>y|sdgXoE+pV+xg^k^Z<^gz+XQKvdr+I^dD+G$oMmqSsLuV7>XYoMGkNjK^KjkEjKv>8kSjKy+zjKxKA^K4grrOxqX+SjK^qy+rjKxMG+NjK^ZZVZfOSsk^>CKVMx>EPek^KoK^Kskxdu^7r+OVuE+XQK^Oxk^uqxOG+lQK^OxkVu>v7y+XQK^IskxuI^Ixk^dZxu^k^du2tz+GQKvAxk^dOVuK|+^g^dpV+xA^k^Z5^Az+XQKvur+I^uD+E9oMmqSsLRVA>X|oM8kHjKD+xjKHGR=+4dTMVqMvR4uzeuVMQ+O^K$+4gUMvgZ^Z4uDvdvuek^gRVZxdvdp^+^Rz+GjKvdA^R^gVdjkvMR^dRVqxMvMp^+^>eKx>^k^uR^Ay+gvOy+DQK^7skxAu^7y+lQKV1jkvOg^1y+TQKxI^k^Au^IskxuO^Axk^udEtG+HQK^AxkVugvOR9+^dVuJvk^gxk^Z~xgG+NQK^Ar+7xg|+yzoM4qrsL>vAgSPoMGkeGKxKUk$GKy+uVqE+2GK^RZ^RB>ssk^ZZ^ZBO|xI^gZ^gBOPYI^RD+$GKVR9kvZY+^guVgGSoMG+$GK^RpD+xZC+^R^Z^dfxdvdu^gNjoMz+CGKvgp^Z^RZGjoM8k^gp^gVR$+vR^R^>ZV>f1cV+^qr+Zxd|+=coM4qrsL>vZgExoMGkTGKxKUkEGK8kNGKz+DGKvMZ^KRVM2+yGK^My+XGKVKMvMg^RD+QGKxRG+NGK^K|kVKKvRoK^qxkVdKvZR^>^qVdJvk^KZ^KBqXGt^Zr+gVqjkvRR4RS8dKvM^Z^qpV+xM2K^Mxk^gqxuc+O^Oy+UQKx7^k^OR^7z+=QKvAxk^OgVuE+NQK^7xk^Odx7^k^gg^OskxgISiy+HQKVujkvdO^uRD+xAvdp^+^dskxZ$+^dy+NQKVdQ+L^u9+CovMBkssLO^Oge2vMykHGK^KGksGKVMykCcK^>8kVGKz+GGKvMZ^K4qCSOv>Z^M4gxGAvMD+VGK^KXkxK9+^Mu^Me8vME+ocK^Kp9+V>6vM^>^RpVRxMI^MG8vMy+PGKxMF^M^KgP8vMJu^KoK^Kskxuu^Or+OV7E+XQK^Axk^7qxAG+lQK^AxkV7>vOy+XQK^Askx7I^Axk^uZx7^k^uulLz+GQKvOxk^uOVAK|+^d^upV+xg^k^Zo+^gz+XQKvur+I^uD+=DvMmqSsLuVO>2XvMGk=cK^Kjk2cKv>8klcKy+UcKxKA^K4gySOxMX+lcK^My+9cKx>c+I^MxkVMKmdyDkxkVM>mAlPLxkVMRmhCluxkVMgmu$TOCKV>ffQXu^M^KeKxK^k^uR^Oy+gvOy+DQK^OskxAu^Oy+lQKV7jkvOg^7y+TQKx7^k^Au^7skxuO^Axk^udlhG+HQK^AxkVugvOR9+^dVuJvk^gxk^Zv+xgG+NQK^ur+7xd|+lNvM4qrsLRvOgoSvMGkQcKxKHkycK^M8krcKE+GcK^KZ^KB>|b^MD+ScKVME+scK^Rr+tVMjkv>R4iV=Zjkv>gRxkVMR$cIxk^MOZjkv>I4ZTvgK|+^R^MpV+xK2K^Kxk^dqxAc+O^Ay+UQKxO^k^AR^Oz+=QKv7xk^AgVOE+NQK^txk^Adxt^k^dg^AskxdIlJy+HQKVAjkvuO^ARD+xuvup^+^gskxZD+^gy+NQKVdQ+L^u9+lsvMBkssLg^Og^xvMykCsK^Ky+HcKVKMvM4gSskVMMv>4I8ehV>Mvq4iHHAVMVkv>xk^uRVOQ+t^Oy+DQKV7jkv7R^7y+9QKx7^k^Og^7z+DQKvOxk^OuVAjkvAg^OxkVuRVJy+HQK^Askxut^AR9+VdxuF^+^gxkVZ$+vdxk^qRVZKvZ^K^qpV+xMA^M4dzcAxKc+g^q9+8e$MfdSsLR^dZlv$MG+GQK^K$+BZ$DI^>Z^>BZllL^Rr+gVZE+CNK^gxk^Zqxgu^>^R^Zfx+v>=+^K^MVqVkvRxk^qRVdKv>^K^qpV+x>OSG$MGkosKVKek=sK8k2sK8kYsKekXsK8klsK8kTsKY+SD$M4qSsLZxMX+2sK^MZVkf1N^A^KU+VK>v>u^MSY$MRxkO^K$+47zKvq5^K^>VqJvR^Mu^MT=$MMvKg^MpVMxKOy=$MpE=TrC>VK2+=sK^Ky+osKVMMv>4uSEgVqQ+O^>xk^>qKu^M^q^>fx+vMD+=sK^KZH|$MHkSsK^K8kjsKC+mdTM^qRxqmgQDk^My+>vqy+SsK^gfxgvu2k^ggVg2+ssK^gxk^>qxdu^q^M^>fx+vMYk^KCDLVu2+HsK^uy+GsKVKC+mdTM^RRxRmuzeu^My+>vgy+GsK^dskxZu^dR^RVMxZF^+^>ykVKx>vdoK^gy+YsKx>A^>4AQ^AxKX+DsK^Ky+UsKx>I^>lG$M$+BqQM^qZ^qBRjeu^>r+gVRE+DsK^dy+$sKVu$+vu^u^Zy+UsKxgF^g^dfVg>vdD+DsK^guxZvu^gxk^Rqxgu^q^>^Rfx+vMD+XsK^Kz+$sKvMy+DsK^RRxKvZ^>D+lsKV>E+lsK^>y+DsKVRE+lsK^Ky+XsKVgMvM^g^ZxkV>xRvgy+=sK^Kz+DsKvqy+lsK^RskxKvq^Ry+$sKV>JO^K2k^>VKxKX+$sK^KgjE$ME+lsK^KoK^KckjkvZR^ZrkVMxRvMoK^KxkVqavd9+2s$M4>NsLO^ZgsGlMjkHsKvM8koxK8kvxKekDxK8k=xK8kUxKE+$xK^KZ^KB>$vh^>D+oxKV>E+$xK^KZ^KB>2lL^MD+$xKVME+$xK^KZ^KB>ysg^MD+2xKVME+$xK^KZ^KB>|Du^MD+=xKVME+$xK^KZ^KB>SvZ^>D+DxKV>qv>r+g^>D+E^$MmqSsLgVq>DGlMGkExK^K$kXxKUkyxK9+GvlMBkssLg^KD+QxKxKG+NxK^My+YxKx>l+^M^>^KU+ExKvMd^>ZV>fOCoO^Rr+ZxZc+X+^qy+UxKxAc+I^d9+Uv8MfdSsLu^uZE28MHkHxK^KGkPxKxMUkCHKy+VxKVKMvM4grSOVM2+$HK^My+CHKV>Q+t^Mxk^Mqf7yDkxk^MZf1$9Zxk^Mdf78E7CK^>BgGy7^M^KoKVKjkvuR^ur+AxuG+oxK^7xkVuKvIy+$xK^OskxuO^Oy+2xKVOjkvAu^OxkVd>vAxk^duv+E+GxK^uxk^dAxuu9+^A^dfx+vdxk^qRVgE+XxK^gr+IVdY+o98M4qSsLdxuO=r8MGk2HKVKyklHK^M8kDHK$k=HKUkXHKy+=HKV>Mvq4gYPkVq2+XHK^qy+=HKVKMvM4g$tVM2+EHK^My+lHKVME+DHK^>Z^>B>ssk^q9+EX8MBkssLg^RgYN8MykGHK^K8kSHKbS|8MG+yHK^KZVKf1xEg^MD+rHKxMOCN8MBY+okxKvkGkR^Kz+KvR$+4uT2ZxMS+^q^M^RdxR$N8My+DHK^>z+Kv>=+^>^MVKVkvMBY+oK2+Hkv>^q^R^KU+DHKvMy+XHK^KdxKCy8My+XHK^MRxMmicNd^>fx>vMu^KVy8Mz+DHKvMZ^K4trNdvqp^>^MZCr8MFY+^MoKVMjkvuR^ur+AxOG+oxK^IxkVOKv1y+$xK^uskxOO^uy+2xKV7jkv7u^7xkVd>v7xk^duQ+E+GxK^Oxk^dAxOu9+^g^dfx+vOxk^qgVAE+XxK^ur+IVdY+Sc8M4qSsLZxIO2x8MGk$PKVKE+=PK^KZ^KB>ssk^>Z^>BuUeh^KZ^KBdGGu^MoK^Mskxdu^Ir+OVAE+2xK^Ixk^AqxIG+$xK^7xkVA>vIy+2xK^OskxAI^Oxk^dZxA^k^duG+z+ExKvOxk^dOVAK|+^u^dpV+xg^k^qu^gz+2xKvAr+I^dD+l^8MmqSsLuVA>D82MGkDPK^Kjk=PKv>8kXPK8k|PKekSPKy+lPK^MRxMmg=zd^KU+DPKvMy+DPK^>Rx>mgSsk^MRxMm1v3^qRxqm7eQg^MCkx>u^q^M^>fx+vMD+EPK^Kz+DPKv>=+^M4I^JvMD+NPK^Kz+XPKvMy+EPK^M=kxKv>^Zu^Zx$2MVkmqSsLy+|PKxK2K^Kxk^dqxAc+O^Ay+exKxO^k^AR^Oz+CxKvIxk^AgV7E+DxK^Oxk^AdxO^k^dg^AskxdIV+y+yxKVOjkvuO^ORD+xuvup^+^gskxqt^gy+DxKVuQ+L^d9+EU2MBkssLg^OgrjYMykVPK^K8kHPK$ksPKUkCVK8koVK$kCVKUk2VK8k=VKz+SPKvMZ^K4ZNskv>Z^M4ODlOvqD+HPK^>z+GPKvMZ^K4iQPZvRr+g^RskxRu4gopqxKvR^Rp^+V>2+oVK^>S+^>U+HPKvqr+EM^MskxMu4iovgskxMO4LNGLskxMI4irHtskxMt41zGdskxML41C~skxMJ4JrxAskxMa4iGSIskxMp41UydskxMB4tDmskxMF47UzIskxM64I22hskxM<4L9Q7skxM54hjvZskxMw4J|81skxMC+4pPl1skxMo+4hSC7skxM$+472=IskxM2+4dSTZskxM=+47UVAskxMD+4Ij=OskxMl+43HjuskxMX+41UcgskxME+4J$vuskxMN+4aruskxMy+4ixxtskxMS+4A^l+skxMG+4tYHtskxMs+41l=kskxMH+4Ix9hskxMV+4fregskxMCk4bTe+skxMok4bz$dskxM$k4fvERskxM2k44csdskxM=k4L=|uskxMDk4azU+skxMlk4tUy+skxMXk4JQ$7skxMEk4pNPLskxMNk432oZskxMyk419ogskxMSk4hP9gskxMGk4FyULskxMsk4<VXdskxMHk40jy+skxMVk46N3skxMCK4pG8dskxMoK4nQNkskxM$K4mEzOskxM2K4wY9tskxM=K40elIskxMDK44UD1skxMlK4WCTtskxMXK4fCDtskxMEK4p=e1skxMNK4pUx7skxMyK4Fy9dskxMSK4hxzkskxMGK4fzPIskxMsK43V9AskxMHK4B|E+skxMVK4WSXZskxMCM4JUE7skxMoM4<XVgskxM$M4fHrAskxM2M4bC=7skxM=M4WXUZskxMDM4WXSAskxMlM45$v1skxMXM4fQTgskxMEM4frMskxMNM46lLU+VPKv>y+sPK^qRxqmgSsk^MRxMm3NPg^qSkxqv>u^MGDYMz+HPKv>oK^My+xPKxgA^g4dsmxqA^q4tcxux>c+g^Ry+PPKxZ^k^RR^Zqxqvq^Rp^+VM2+=VKRy+oVKVM2+DVK^My+$VKVME+DVK^>Z^>BZS^A^Zl+^MVZx>I^>lrYMy+8VKxMG+$VK^RZVMxRvqD+=VK^>z+sPKvqZ^>4dDbv>y+=VK^>skxMmuQXI^>z+HPKv>y+=VK^>z+SPKvAZ^u4ZNskvZZ^R4JXPgvur+g^uz+sPKvOxk^uRVAKvZ^d^upV+xgA^g43C=+xdc+g^AxkVAKmuQXIRVgxdvOp^+^ZskxMvq^Zy+$VKVMJv>^>2k^MZxMX+$VK^MgUTYME+CVK^>Z^>Bq^m^ZZ^ZBOjNu^>r+gVdE+oVK^uxk^dqxuu^Z^>^dfx+v>y+CVK^MeKxM^k^dR^Oy+gvOy+oxK^OskxAu^Oy+$xKV7jkvOg^7y+8xKxO^k^Au^OskxdO^Axk^ddCkG+yxK^AxkVdgvOR9+^uVdJvk^gxk^q7xgG+DxK^gr+7xu|+CHYM4qrsLKv7gX^YM$+BqQM^MZ^MBRjeu^Kr+gVqC+mdX=I^gRxgmglxO^ZCkxdu^g^Z^dfx+vZ^k^RBVujkvRR^uRVMxKvRp^+^>S+x>yj+^qoK^qskxuu^Or+OVAE+2xK^Oxk^AqxOG+$xK^OxkVA>v7y+2xK^7skxAI^7xk^uZxA^k^uu$Kz+ExKvOxk^uOVAK|+^g^upV+xd^k^qt^dz+2xKvdr+I^uD+yv=MmqSsLuVA>s2=MGkSVK^KjkyVKv>8ksVKy+jVKxMA^M4gySOxKX+sVK^Ky+cVKxKc+u^>xkV>KmL$j7xkV>>mA$oiCKVKfmcVL^>^MeKxM^k^uR^Ay+gvOy+oxK^OskxAu^Oy+$xKV7jkvOg^7y+8xKxO^k^Au^OskxuO^Axk^ud2MG+yxK^AxkVugvOR9+^gVuJvk^dxk^qixdG+DxK^ur+7xd|+C9=M4qrsLgvIgo|=MGk^VKxKHko^K^MGkv^Kx>Uk2^Ky+$^KVMMv>4R$SOVKMvM4IyCdVM2+D^K^M|k^M2+xKI^KoX=My+8^KxMF9+^>5VMx>vRp^q^KdxKHX=My+2^K^KfxKvqgVX=Mpqx>2K^>xk^dqx7c+O^Ay+exKx7^k^AR^7z+CxKv7xk^AgVOE+DxK^Oxk^AdxO^k^dg^AskxdIEMy+yxKVAjkvuO^ARD+xuvup^+^gskxqp^gy+DxKVuQ+L^d9+lz=MBkssLg^Agrr=Myky^K^Ky+E^KVKMvM4g=E1VMMv>4I8ehVqMvR4u$XuVKRvMlr=Mp3VM>Sr=MpY+^MeKxM^k^dR^Ay+gvOy+oxK^7skxAu^7y+$xKVOjkvOg^Oy+8xKx7^k^Au^7skxdO^Axk^ddD>G+yxK^AxkVdgvOR9+^uVdJvk^gxk^q3xgG+DxK^gr+7xA|+Cs=M4qrsLgvAgoV=MGkj^KxKHks^K^MGkx^Kx>UkV^Ky+H^KVKMvM4R$SOV>Mvq4ANHkVK2+oCM^K|k^K2+x>I^>oP=My+P^KxKF9+^M5VKxMvZp^R^>dx>HP=My+V^K^>fx>v>gVP=MpqxM2K^Mxk^Aqxuc+O^Oy+exKxu^k^OR^uz+CxKvIxk^OgV7E+DxK^uxk^Odxu^k^Ag^OskxAIVqy+yxKVujkvOO^uRD+xgvOp^+^dskxqF^dy+DxKVgQ+L^u9+loUMBkssLO^AgQYUMyklCM^KGkDCMVMykECM^>8kXCMz+=CMvqZ^>4qsGAv>Z^M41U|Rvqr+g^qskxqu4BvyRqxMvq^qp^+VK2+NCM^K|k^K2+x>I^>X2UMy+TCMxKF9+^q5VKxqvAp^u^>dx>=YUMy+XCM^RfxRvMgXYUMpBMPVk^KoK^Kskxuu^Ar+OVAE+2xK^7xk^Aqx7G+$xK^1xkVA>vty+2xK^OskxAI^Oxk^uZxA^k^uuldz+ExKv7xk^uOVOK|+^g^upV+xd^k^qB^dz+2xKvur+I^OD+G9UMmqSsLOVA>lXUMGkGCM^KjkSCMv>GkHCM^>z+GCMvMZ^K4qe87v>Z^M4ZHBvRZ^qOVMdv>$XUMp4ZH|Rv>oK^MxkVOKvOr+O^7z+VsKvAxk^7RVuE+=xK^Ixk^7ZxIG+2xK^uxkV7RvAxk^OgV7jkv7u=uy+zxKxA^k^OO^AqY+vu^Op^+VgjkvRF^gy+UxKxdc+I^u9+QNUMfdSsLg^AZSzUMHk$eM^Ky+veMxqA^q4grskxKA^K4Ox=AxM2K^Mxk^uqxAc+O^Oy+exKxA^k^OR^Az+CxKvIxk^OgV7E+DxK^Ixk^OdxI^k^ug^OskxuIlAy+yxKV1jkvAO^1RD+xdvAp^+^gskxq5^gy+DxKVuQ+L^A9+$GUMBkssLg^dgjcUMykXeM^Ky+DeMVMMv>4g=E1V>Mvq4I8ehVKMvM47xvdVMVkv>xk^ARVdQ+t^dy+oxKVOjkvuR^Oy+vxKxO^k^dg^Oz+oxKv7xk^duVOjkvOg^dxkVARNAy+yxK^dskxAt^dR9+VuxAF^+^gxkVqFvdy+DxK^dy+uvA9+oVUM4>NsLO^ggS^UMjkleMvMy+EeM^KRxKmgSsk^MRxMmI8eh^>Rx>mpGQ7^KeKxK^k^uR^gy+gvIy+oxK^gskx7u^gy+$xKVtjkvIg^ty+8xKxg^k^7u^gskxuO^7xk^udN7G+yxK^7xkVugvIR9+^dVuJvk^Axk^q0xAG+DxK^ur+7xA|+C$DM4qrsLgvIg$2DMGkreMxKHkGeM^MGkceMx>UkHeMy+seMVqMvR4RoSZVM2+CoM^My+HeMVMMv>4grJV>Vkvqxk^ARV7Q+t^Oy+oxKVdjkv7R^dy+vxKxd^k^Og^dz+oxKvIxk^OuV7jkvOg^OxkVAR$Iy+yxK^dskxAt^dR9+VuxAF^+^gxkVq<vdy+DxK^uy+uvu9+XDDM4>NsLt^AgEXDMjkVeMvMGk$oM^MjkooMvq8k=oMy+8oMxKA^K4RvSOx>A^>4dUY1xKX+=oM^K|kVKv+vqu^>ETDMz+$oMvMp9+^Z0xKvg^Mp^MV>Rvq2XDMy+=oMVMJv>^KglXDMfKvMoK^KxkVdKvOr+O^Az+VsKv7xk^ARVOE+=xK^Oxk^AZxOG+2xK^7xkVARvIxk^dgVAjkvuuyty+zxKxA^k^dO^AqY+vA^dp^+VgjkvRC+^gy+UxKxOc+I^u9+cNDMfdSsLO^gZGSDMHkNoM^KGkzoMxMHkSoM^>8kjoME+soM^KZ^KBK=SO^>Z^>BZj2A^KD+GoMVK9kvMY+^quVqGrDMG+GoM^KpD+xMC+^K^M^>fx>vRu^qNSDMz+yoMv>p^M^KZySDMFR^KoKVKjkvAR^gr+AxgG+oxK^AxkVgKvOy+$xK^7skxgO^7y+2xKVAjkvdu^AxkVu>vdxk^uuxtE+GxK^gxk^uAxgu9+^O^ufx+vuxk^qo+VdE+XxK^dr+IVuY+DxDM4qSsLZxOO2PDMGkovMVKE+2vM^qZ^qB>lE1^MZ^MBdNlO^KZ^KBqPTd^>Z^>BL|Cg^KoK^Kskxuu^Or+OVAE+2xK^Oxk^AqxOG+$xK^7xkVA>vIy+2xK^OskxAI^Oxk^uZxA^k^uu$iz+ExKv7xk^uOVOK|+^d^upV+xg^k^q$+^gz+2xKvOr+I^uD+le9MmqSsLuVd>X89MGk=vM^Kjk2vMv>8klvMy+UvMxKA^K4gDbxqX+lvM^qy+9vMxMc+t^>xkV>Kmpov7xkV>>A^GGGr6qxkV>RLxk^>OAjkvqI4qrsLK|+^M^>pV+xK2K^Kxk^uqxdc+O^dy+exKxO^k^dR^Oz+CxKvIxk^dgV7E+DxK^Ixk^ddxI^k^ug^dskxuIGiy+yxKVdjkvAO^dRD+xAvAp^+^gskxqD+^gy+DxKVAQ+L^d9+yU9MBkssLg^ugzl9MykSvM^Ky+NvMVMMv>4gSskV>Mvq4t9xIVMMv>43PyZV>Q+O^qxk^qqfbT^uR^MV>xqF^+^KZVKf1N^A^>oKV>jkvuR^ur+AxuG+oxK^IxkVuKv1y+$xK^OskxuO^Oy+2xKVOjkvAu^OxkVd>vAxk^duUhE+GxK^uxk^dAxuu9+^A^dfx+vdxk^q=+VgE+XxK^dr+IVuY+oQ9M4qSsLdxAOGy9MGkGvMVKykVvM^M8kHvMz+SvMvMZ^K4ZYbv>D+HvM^Mz+GvMvMr+t^>skx>u4illgskx>OZ^GGGr6qskx>IIxk^>Ag^k^>I4>NsLu9+^K^>fx+v>oK^MxkVuKvOr+O^Az+VsKv1xk^ARVIE+=xK^7xk^AZx7G+2xK^IxkVARv1xk^ugVAjkvAushy+zxKxA^k^uO^AqY+vu^up^+VgjkvRD+^gy+UxKxuc+I^d9+ec9MfdSsLO^OZDx9MHko$M^KGkv$MxMHk2$M^>y+8$MxRA^R4R$87x>A^>4gSctxMA^Mg^KOxKXx9Mp4g^|RxK2K^Kxk^dqxOc+O^Ay+exKxO^k^AR^Oz+CxKv7xk^AgVOE+DxK^Oxk^AdxO^k^dg^AskxdISJy+yxKVAjkvuO^ARD+xuvup^+^gskxqE+^gxk^Zqxqu^>^R^Zfx+v>Z^M4gEcAvRr+g^RD+EClMmqSsLRVZ>ovlMy+ExK^Kv+f1CDI^MZVMf1=lL^Rr+Zx>G+yxK^gxkV>KvdR^M^RV>Jvk^q=+^KVqxZ2K^Zxk^RqxZu^M^q^Rfx+vMg$GlMGkT$MxKUkE$M8kN$M$kE$MUkS$M8kG$M$kS$M|+CDlM4qrsL>vMD+N$M^KRxkmAN^A^K=+xKO^Zu^ZvYlMMvKg^K$+BuxK^M5^KVMxRF^R^ZuVZGYlMA^kg^KfxKv>go=lMp|=TrC>xMX+E$M^My+T$MxMA^M4urEgx>c+g^qxkVqKuR^M^>VqJvk^KD+y$MVK>N|lMGko8M^K$kC8M=+4dTMVKMvM4gQDkV>Q+O^qy+o8MVZJvg^u2k^ZZxZX+o8M^ZxkVqKvAR^K^>VqJvk^MYk^M^ULx>X+$8M^>y+v8MxM=+4dTMVqMvR4uzeuVZQ+O^Ry+$8MVgjkvZR^gRVqxZvZp^+^>zkxMvq^RoK^Rz+E$MvqZ^>4uX^AvMD+S$M^Kz+N$MvMu^KsjlMv+f7TM^qZVqfIzeu^>r+ZxRG+N$M^gy+|$MxAl+^g^A^Zz+N$MvAp^u^gaxuO^uD+S$MVuZvg^g^uxkVRKvAR^q^>VRJvk^KD+s$MVKE+G$M^Ky+S$MVZMvM^Z^>D+j$Mx>G+y$M^>y+r$MxKG+y$M^Zy+c$MxgA^Z^g^Rskx>vM^Ry+y$MVKE+V$M^>y+G$MVRjkvM^>^Ry+|$MxKFg^Z2kVKxZvgD+E$M^ZZoElMG+y$M^KoKVKSk^k^>R^qykxMvq^KoK^Kskxq<^Z9+yclMBkssLg^gg^jzMykE8M^K8kX8M$kl8MUkN8M8ky8M$kN8MG+l8M^MZVMfOCvh^KD+T8MxKG+l8M^KZVKfOolL^MD+|8MxMG+l8M^KZVKfOEsg^>D+Q8Mx>G+l8M^KZVKfO9Du^MD+z8MxMG+l8M^qZVqfONvZ^KD+r8MxK7^Kr+gV>Y+2^lM4qSsLZxqOljzMGkH8MVKeko2M8kC2M9+PozMfdSsLg^MU+s8Mv>y+V8M^Mz+E8Mvq=+^M^>VK2+$2M^Kd^>Rx>mgCoO^qy+>vZr+=+^Zz+N8Mvdr+I^uD+yoTMmqSsLgVA>V2TMGk=2M^K$k22MG+=2M^qZVqfOSsk^KZVKfL8eh^qZVqfBzyd^KD+U2MxKzk^KY+^MdxMV8TMy+D2M^KfY+vq5^K^>VqJvR^Mu^M|2TME+X2M^Kp^KV>>s2TMpY+^>eKx>^k^uR^Ay+gv7y+X8M^7skxOu^7y+E8MVAjkv7g^Ay+Q8MxA^k^Ou^AskxuO^Oxk^udC+G+C2M^AxkVugvOR9+^gVuJvk^dxk^ZqxdG+S8M^dr+7xu|+$9TM4qrsLgvOgDETMGkz2MxKHkS2M^MGkj2Mx>Uks2My+G2MVMMv>4RVGAV>Mvq4tT|RVMQ+O^Rxk^RqfhcjdR^>VMxRF^+^KD+c2MxKzk^KY+^qdxqD|TMy+s2M^KfY+v>5^K^MVRJvZ^qu^qx|TME+V2M^Mp^MVK>DETMp4ZGVkxK2K^Kxk^uqxAc+O^Ay+T8MxO^k^AR^Oz+l8MvIxk^AgV7E+S8M^Oxk^AdxO^k^ug^AskxuICky+C2MVAjkvAO^ARD+xdvAp^+^gskxZO^gy+S8MVdQ+L^u9+yyTMBkssLg^AgxrTMyk=YM^Ky+$YMVKMvM4gSskVMMv>4tQ2+VKVkvMxk^uRVAQ+t^Ay+X8MVOjkvOR^Oy+|8Mx7^k^Ag^7z+X8Mv7xk^AuVOjkvAg^AxkVuRDky+C2M^Askxut^AR9+VdxuF^+^gxkVZRvdy+S8M^dy+uvA9+2sTM4>NsLt^Agl^TMjk2YMvMGklYM^MjkDYMvq8kEYMy+TYMxMA^M4RPGAx>A^>4tl|Rxqc+g^MxkVMKmbyjARV>xqv>p^+^KU+lYMvM|k^KY+VqRvR=VTMy+EYMVMJ|+^K5^MVKxZF^Z^quVqsVTMG+EYM^qpVqxKO=^TMp4RrVkvMoK^KxkVuKvOr+O^Oz+D8MvOxk^ORVAE+y8M^Axk^OZxAG+N8M^AxkVORvOxk^ugVOjkvAuEky+^8MxA^k^uO^AqY+vu^up^+VgjkvgO^gy+r8Mxuc+I^A9+rvXMfdSsLO^dZG=XMHksYM^KGkxYMxMHkVYM^>8k^YME+o=M^MZ^MBKocA^>Z^>BOQ|R^qr+gVdjkvuR4BNQLKvq^q^dpV+xKX+C=M^K|kVKv+v>u^MGYXMz+HYMvZp9+^K0xRvM^qp^qVMRv>X=XMy+C=MVMJv>^KgG=XMffAcVk^KoKVKjkvOR^dr+AxdG+X8M^OxkVdKv7y+E8M^OskxdO^Oy+N8MVOjkvuu^OxkVA>vuxk^Au|ME+$2M^dxk^AAxdu9+^u^Afx+vdxk^ZIVgE+s8M^dr+IVuY+DTXM4qSsLAxAOD|XMGkD=MVKykE=M^MGkX=MV>eky=My+X=M^>Rx>mZ2E1^KU+l=MvMy+E=M^KRxKmgyN1^>eKx>^k^uR^Ay+gvOy+X8M^OskxAu^Oy+E8MVIjkvOg^Iy+Q8MxO^k^Au^OskxuO^Axk^udsMG+C2M^AxkVugvOR9+^dVuJvk^gxk^Z1xgG+S8M^Ar+7xd|+yzXM4qrsLgv7gSjXMGkr=MxKHkG=M^MGkc=Mx>UkH=My+s=MVKMvM4R$SOVMMv>4dYQLVK2+CUM^K|k^K2+xMI^MSSXMy+x=Mx>F9+^K5V>xKvRp^q^MdxMEjXMy+H=M^KfxKvZgNjXMpqxR2K^Rxk^dqxOc+O^uy+T8MxI^k^uR^Iz+l8MvIxk^ugV7E+S8M^7xk^udx7^k^dg^uskxdIC>y+C2MVujkvuO^uRD+xAvup^+^gskxZa^gy+S8MVdQ+L^O9+CHXMBkssLg^ugTe|MykDUM^Ky+uVqE+DUM^gZ^gB>ssk^ZZ^ZBd^Uu^RZ^RBtvi^Z7^Z8VXMP+vZp^R^ZY+xqvg^>Z^>BRsEg^Rr+uVqjkvRRRxkVq>6R^>^RVqJvk^MZ^MBqXGt^qr+gVZjkvgR4REGLKv>^q^ZpV+xK2K^Kxk^Oqxuc+O^uy+T8MxA^k^uR^Az+l8MvOxk^ugVAE+S8M^7xk^udx7^k^Og^uskxOISZy+C2MVAjkv7O^ARD+xdv7p^+^gskxZp^gy+S8MVuQ+L^d9+G8|MBkssLu^Ag8D|MykNUM^KGkEUMVMekSUMy+EUM^MRxMmgrSO^KU+XUMvMy+NUM^My+IvRxk^qRBgT^Zxk^qgBASrAxk^quBAUzhxk^qOBhGjIxk^qIBADQuxk^qtBp2VZCK^M4tCr7vR^KoK^Kskxdu^Ar+OVAE+N8M^1xk^Aqx1G+E8M^7xkVA>vIy+N8M^OskxAI^Oxk^dZxA^k^dusZz+H8Mv7xk^dOVOK|+^u^dpV+xg^k^Za^gz+N8Mvur+I^uD+lX|MmqSsLOVA>SN|MGkGUM^KjkSUMv>GkHUM^>$ksUMG+HUM^KZVKfu$SO^ZZVZfJSxd^KD+PUMxKzk^KY+^MdxMSQ|My+VUM^>fY+vM5^>^KVqJvR^Mu^MYN|ME+oDM^>p^>VK>NN|MpR^KeKxK^k^uR^Ay+gvOy+X8M^OskxAu^Oy+E8MVOjkvOg^Oy+Q8MxO^k^Au^OskxuO^Axk^udSuG+C2M^AxkVugvOR9+^dVuJvk^gxk^ZfxgG+S8M^dr+7xu|+HS|M4qrsL>v7g$G|MGkYDMxKG+=DM^MZVMfO=E1^KZVKft$U+^>oKV>jkvAR^Or+AxAG+X8M^7xkVAKvIy+E8M^IskxAO^Iy+N8MVOjkvOu^OxkVu>vOxk^uuQAE+$2M^Axk^uAxAu9+^d^ufx+vdxk^ZBVgE+s8M^dr+IVAY+NH|M4qSsLAxuOVV|MGkXDMVKykyDM^MGkNDMV>ekGDMy+NDM^MRxMmRGcu^>U+EDMvqy+yDM^KRxKmg=E1^qRxqmgvXg^MeKxM^k^AR^uy+gvAy+X8M^Oskxuu^Oy+E8MVOjkvAg^Oy+Q8Mx7^k^uu^7skxAO^uxk^AdGAG+C2M^uxkVAgvAR9+^dVAJvk^gxk^Z4xgG+S8M^dr+7xu|+=vEM4qrsLgvOgl8EMGkcDMxKHkHDM^MGkPDMx>UkC9My+VDMVKMvM4RTy1VM2+$9M^My+C9MVMMv>4g=vdVKVkvMxk^uRVAQ+t^Ay+X8MVOjkvOR^Oy+|8MxO^k^Ag^Oz+X8Mv7xk^AuVOjkvAg^AxkVuRC7y+C2M^Oskxut^OR9+VdxuF^+^gxkVZBvdy+S8M^uy+uvO9+SUEM4>NsLt^ggGTEMjko9MvMGk=9M^Mjk29Mvq8kl9My+U9Mx>A^>4RvSOxMA^M4OGXIxRX+l9M^R|kVRv+vMu^KGlEMz+=9Mvqp9+^M0x>v>^qp^qVKRvMXTEMy+l9MVKJvM^MgyTEMfKv>oK^MxkVAKvdr+O^gz+D8Mv7xk^gRVOE+y8M^7xk^gZx7G+N8M^OxkVgRv7xk^AgVgjkvOu=Iy+^8Mxg^k^AO^gqY+vA^Ap^+Vdjkvg<^dy+r8MxAc+I^d9+eNEMfdSsLu^uZHlQMHkS9M^KGkj9MxMUks9M8kH9M$ks9MUkClMy+G9MVKMvM4gr$gV>2+V9M^>r+OVKjkvMRRxkVK>uxk^Kuq2+ClM^KD+V9M^RC+muX2Z^KCkxMck^K^M^>U+H9Mvq$+4A^UIxMA^M4hezLx>c+O^qy+^9MxR^k^qR^RskxqO4uroIr+xR|+=GEM4qrsLKvdgGcEMTkvlME+ClM^KZ^KqxMFg^>2kVMx>vqxk^KRV>VkmqSsLxkVRfOXDu^gxkVqRvZR^M^>VqJvk^K$+4uHUIvRZ^q4LVNLvdr+O^Rz+H9MvMxk^RRVKjkvZg4dXHuN+vM9+2PEM4>NsLu^ZgSVEMlk$lMG+H9M^KZVK>vqpg^q8kx>vR^qxk^KZxq2K4qSsLskxKmgXDu^ZskxRI^KR^qVgxRF^+^>$+BZ$DI^KZ^KB12zL^Zr+OV>E+$lM^gxk^>qxg^k^>g4AjVks+^g9+$oQMBkssLR^ugzvQMUkElMy+H9M^MRxMI^KpgV>okvM^>^>xkVMRvqoK4qrsLjkvd4gXDuVujkvqu^gRVKxZvqp^+^Rv+ftlXZ^RZVRfOyK^Zr+ZxuG+ClM^OxkVuKv7R^R^ZVuJvk^>y+H9MVgMvdR^>y+P9MxZeK^>^Z^gdxgE=QMy+H9M^>z+s9MvgY+^ZgVgjkvqR^gy+x9Mx>A^>g^Zz+s9MvqPk^Z^>VgRvdDDQMy+H9MV>E+olM^ZY+^ZZxg^k^>g^gz+G9MvqZ^>uVZE+olM^>Pk^ZV>xdI^d=lQMy+x9Mx>G+V9M^ZY+VZ>vdxk^>uVgE+V9M^Zy+H9MVg$+vg^g^>oKV>jkvuR^ur+AxuG+X8M^OxkVuKv7y+E8M^OskxuO^Oy+N8MVOjkvAu^OxkVd>vAxk^duz1E+$2M^uxk^dAxuu9+^A^dfx+vdxk^Z5VgE+s8M^dr+IVuY+XQQM4qSsLdxOOCjQMGkGlMVKykVlM^M8kHlM$kslMUkCTMy+slMVKMvM4g=zdVM2+CTM^My+GlMVMMv>4gSskV>Mvq4t|NRVMMv>47eQgV>P+vZR^M^>VRJvk^KD+VlMVKE+CTM^>=+^>BOzNR^KD+CTMVKE+$TM^Ky+VlMV>8kvM^>^quVqNSQM2K4qSsLz+slMvMoK^KxkVuKv7r+O^Az+D8MvIxk^ARV7E+y8M^Oxk^AZxOG+N8M^OxkVARv7xk^ugVAjkvAulhy+^8MxA^k^uO^AqY+vu^up^+Vgjkvgw^gy+r8Mxuc+I^d9+UxQMfdSsLg^AZ$2NMHk=TM^K8kUTME+lTM^>Z^>B>ssk^qZ^qBO|xI^>Z^>BierZ^Rr+gVdjkvuR47|zLKvq^R^dpV+xMA^M4AGV+xqc+g^Z9+e^QMfdSsLg^RZXeNMHkETM^Ky+|TMx>A^>4dXHuxMA^M4O|Qgx>c+g^qxkVqKmAQvIRVMx>vRp^+^KH+xKu^>oK^>skxZu^RR^MVqxZF^+^KZVKKvRD+DTM^qz+2TMvMu^K$2NMv+f7TM^qZVqfIVd^Rr+ZxZG+DTM^gZVgf3e^u^dy+UTMxuA^u47=Ukxgm^d^g^uskxZu^uR^qVRxZF^+^KoKVKVk9+xk^dRVAQ+t^Ay+X8MVOjkvOR^Oy+|8MxO^k^Ag^Oz+X8Mv7xk^AuVOjkvug^AxkVdRShy+C2M^Askxdt^AR9+VuxdF^+^gxkVZ5vdy+S8M^uy+uvu9+NDNM4>NsLO^Ags9NMjkyTMvMy+GTM^KRxKmgSsk^qRxqm3EDh^MeKxM^k^dR^Ay+gvOy+X8M^OskxAu^Oy+E8MVOjkvOg^Oy+Q8MxO^k^Au^OskxdO^Axk^ddEJG+C2M^AxkVdgvOR9+^uVdJvk^gxk^Ze+xgG+S8M^dr+7xu|+$ENM4qrsL>vOgGQNMGkPTMxKG+VTM^KZVKfO=E1^RZVRf1ljA^KZVKfJQjg^MoKVMjkvAR^Ar+AxOG+X8M^AxkVOKvOy+E8M^7skxOO^7y+N8MV1jkv7u^1xkVu>v7xk^uurJE+$2M^Axk^uAxAu9+^d^ufx+vdxk^Z$+VgE+s8M^dr+IVuY+2SNM4qSsLZxAOysNMGk$XMVKE+=XM^KZ^KB>ssk^MZ^MBdNlO^KZ^KBq^m^Mh4hr2uv>^Ku^K|sNME+=XM^MZ^MB>ssk^>Z^>BdNlO^MZ^MBq^m^>Z^>BtP2u^Mek^qqx>v>^qp^+VKVkvMoKY+xkVuKvOr+O^Az+D8Mv1xk^ARVIE+y8M^Oxk^AZxOG+N8M^7xkVARvIxk^ugVAjkvAuV3y+^8MxA^k^uO^AqY+vu^up^+Vgjkvg2+^gxkVRKvgR^>^qVRJvk^MZ^MBqGcA^qr+gVRY+V^NM4qSsLqxZO$ozMy+H8MVgC+mACDI^>Rx>mA=lL^Ry+>vRy+C2M^Zskxqu^ZR^>VRxqF^+^K=+VgxKv>oK^MxkVRKvgR^M^qVRJvk^KgDjzMjk=XMvM8kXXM8k|XMekSXM8kyXM8krXMekHXM9+2UzM4>NsLO^>D+EXMV>MvK4AN^AVK8+vMg^MuVM22zMA^kg^>v+fLjK^K5V>xKvRp^q^MdxM2YzMZ^kgVMJv>^Kg=YzMfl=TrC>vMD+XXM^Kz+=XMvMZ^K4dNEgv>r+g^qskxquRR^KVMxqF^+^>D+QXMx>OyXzMGkC|MVKek2|M$+4dlMxMA^M4gEDkx>c+g^qy+^XMxRF^R^Z2kVR>vZD+C|M^Rskxqu^ZR^MV>xqF^+^KYkVKHULvqD+o|M^>z+VXMvM$+4dlMx>A^>4uNeuxRc+g^Ay+e|MxZ^k^AR^Zqx>vZ^Ap^+VqEkvM^q^RoKVRE+SXM^>Z^>BZS^A^MD+yXMVME+GXM^Mu^M^SzMC+mdTM^>Rx>muzeu^qy+>vgy+EXM^gz+DXMvu=+^g^dVRE+GXM^Ap^AVghvOg^AD+zXMxA1^R^g^AskxZu^AR^>VqxZF^+^MD+jXMxMG+NXM^My+zXMxqA^M^q^RU+NXMvZy+NXM^Rz+EXMv>y+NXM^qz+yXMvdZ^q^gVZjkvZ^M^Zy+QXMxMG+GXM^qy+rXMxR^k^M^q^Rz+DXMvRpg^M8kxqv>^MD+XXMVM>E|zMy+NXM^MeKxMVkxk^>RVqQkvM^>^RoKVRjkvR6^g9+cGzMfdSsLg^ZZXV2kHkD|M^K8k9|MekN|M8kE|M8kQ|MekG|My+D|M^KRxKmgCvh^MU+=|Mv>y+D|M^KRxKmgolL^MU+D|Mv>y+D|M^KRxKmgEsg^MU+l|Mv>y+D|M^KRxKmg9Du^MU+X|Mv>y+D|M^KRxKmgNvZ^>U+E|Mvqd^Mr+Zx>|+=VzM4qrsL>vRgVP2kGkc|MxKUkH|M8kV|MD+lU2kmqSsLgVM2+CEM^My+H|MVME+S|M^>=+^MV>xKX+V|M^KdV>Mvq4gCoOVMQ+O^Rr+E+VZE+G|M^ur+IVdY+ooyM4qSsLAxAOD$yMGk2EMVKyklEM^MGkDEMV>E+XEM^KZ^KBKU87^>Z^>B>NsL^KZ^KAxMi^M2$yMpB>$ER^MoK^Mskxdu^Ar+OVAE+E|M^Oxk^AqxOG+X|M^OxkVA>v7y+E|M^7skxAI^7xk^dZxA^k^duaz+s|MvIxk^dOV7K|+^u^dpV+xg^k^ZR^gz+E|Mvur+I^AD+E=yMmqSsLOVu>slyMGkNEM^KjkEEMv>GkSEM^>$kyEMG+SEM^MZVMfu$SO^KZVKf1Hzu^MD+jEMxMzk^MY+^KdxKs9yMy+GEM^MfY+vq5^M^>VRJvZ^Ku^K9lyME+HEM^Kp^KV>>SlyMpR^>eKx>^k^AR^uy+gvAy+l|M^Oskxuu^Oy+X|MVOjkvAg^Oy+||MxO^k^uu^OskxAO^uxk^AdCkG+V|M^uxkVAgvAR9+^dVAJvk^gxk^ZZxgG+y|M^Ar+7xu|+CQyM4qrsL>v7gyNyMGkeQMxKG+oQM^KZVKfO=E1^>ZV>fL8eh^KZVKfFGQ7^MoKVMjkvAR^Or+AxOG+l|M^7xkVOKvIy+X|M^dskxOO^dy+E|MV7jkv7u^7xkVu>v7xk^uuQKE+oEM^Oxk^uAxOOCSH+gVV$uZNP2KOD92>gNOZ2G2KG+$=d^KD+z=dxKG+2=d^Ky+|=dx>8+^K^>^RP+xRAVGGGjm^GGGSGK^MU+N=dv>D+G=dRz+E=dvMZ^K4uX^Av>P+^MC+V>Rvq$crMr+IVKE+D=d^My+==dV>~v>^>^qy+U=dxM8+^q^M^>P+x>AVGGGjm^GGGSGK^qskxKu^qy+2=dV>E+X=d^Me+^>VMxqok^qZVGGGjmVGGGSGKxR^k^Kg^Rz+o=dv>vK^MRVqs+vRZVGGGjm^GGGSGKVMjkvMu^My+8=dxMG+==d^>ykVMx>vRV+^qZPGGGjmxGGGSGKv>xk^KOVM2+V=d^Ky+$=dVK2+CUd^Ky+H=dVKMvM4AN^AVMv+v>C+^KD+P=dxKX+CUdRD+j=dKG+G=d^MV+VMMocGGjm^GGGGjK^>y+P=dxMPk^>^M^KdxKXQrMy+G=d^KU+V=dvMy+H=d^Kz+V=dvRvK^qRVMMvM^M^>y+x=dxKG+oUd^qvKVq>vZZ^K^RVMDkv>a^Ke+V>xKvRD+$Ud^qz+G=dvMy+oUd^>oKx>I^qZ^KVqxRG+H=d^>y+eUdxqYK^qO^ZRx>vg^KXk^K3xM8+^R^M^KU+oUdvMy+$Ud^Kz+2=dv>A^K^MVRE+DUd^>y+D=dVKZvq^K^qXkVq5vMe+^R^KVM2+lUd^My+s=dVKE+$Ud^>Z^KV>xMG+=Ud^>e+VMx>vMV+^KZPGGGjmxGGGSGKvqD+DUd^>z+2UdvMXk^K<VME+XUd^Kz+^K8+x>y+^M^>^KU+2UdvMy+DUd^KP+xKocGK^MD+lUdVME+XUd^Kz+^KnxMX+XUd^My+c=dxMG+CUd^Ky+9UdxqG+==d^RAVqxRvqy+XUd^qz+$=dvgA^q^ZVRDkvZC+^ge+V>xgvRV+^qZPGGGjmxGGGSGKvqxk^M^KV>E+$Ud^KvK^KZxMok^MO^KU+H=dvMy+G=d^MfuvM2k^M^KVK2+H=d^Kg2CrMz+S=dv>Z^MRV>Dkvqg^My+c=dxKA^KR^>N+x>ok^KE+^MVKx>G+s=d^KZVK>v>Xk^MJVKE+V=d^MZ^MZxqj+^qN+^R|+xKvZ^qe+^>VqxMG+s=d^>ZV>RvMXk^K6VqE+V=d^KZ^Kdx>j+^>=+^K|+xqvM^Re+^MVRxKG+s=d^MZVMgvqXk^>$+VME+V=d^>Z^>AxRj+^R5^>|+xMvq^qe+^KVqx>ok^>ZVGGGjmVGGGSGKxKX+S=d^Ky+r=dxKG+$=d^MZVMf1N^A^>e+VKx>v>V+^MZPGGGjmxGGGSGKvMD+S=d^Kz+C=dvMZ^K4uX^AvRY+^qIVK2+yUd^Ky+G=dVME+yUd^qck^MVqx>I^>VUSMy+j=dxKX+NUd^Ky+z=dxKG+NUd^qvKVqKvZZ^K^RVME+G=d^Ky+NUdVR^kvZg^gZVKxgvRXk^qaVK~v>^K^RD+zUdxRG+y=d^My+QUdx>YK^>u^RRxMvZ^Ky+y=dV>E+SUd^RvK^RAxqA^>^q^MTkxMB^>e+^KV>xqX+SUd^qy+zUdxKG+l=d^MAVKxMvRy+SUd^Kz+==dv>A^K^MVdDkvuC+^Ke+VqxKv>D+GUd^Mz+N=dvMy+GUd^MC+xKv>^>V+^>RsGGGjmvcGGSGK^KD+S=dVKE+s=d^MXk^Me+xRG+S=d^Kz+VK<v>E+^R^MVK2+s=d^Ky+S=dVKs+vMVGGK^My+T=dxK1^M^K^>z+N=dvMz+^KC+VqE+N=d^KA^qVKxMNk^MC+^KC+x>vM^MV+^MRsGGGjmvcGGSGK^KD+S=dVKE+H=d^KpIVMokvM^M^MD+j=dxMOSxrMy+y=dVKMvM4AN^AV>2+VUd^>g$YjMjk$DdvM8kDDd8k9DdekNDd8kEDd8kQDdekGDd8kSDd8kjDdP+vMD+DDd^Kv+fIQ9g^qZVqfLDNh^MZVMf7Hyg^>ZV>f7rjd^Mr+ZxqG+DDd^RxkVqKvZR^>^MVqJvk^KD+lDdVKE+lDd^RZ^RBZS^A^KD+XDdVKC+mAj=g^RRxRmIDNh^MRxMm1J^RRxRmdrjd^Zy+>vRy+=Dd^Mskxqu^MR^RVZxqF^+^KD+|DdxKX+NDdRy+TDdxKX+yDd^Ky+QDdxKG+yDd^Ml+VKxMvRu^qs8jMz+lDdv>y+NDd^qY+xMvR^KD+SDdVKE+sDd^M1^M^RxKI^KCSSMy+9DdxKG+SDd^q=+VKxqv>go8jMy+rDdxMh^MCcK^KdxKGGSMy+lDd^Mz+NDdvR6^qLVZGk$A^Z^qy+rDdxZok^ZVK^dxkHRvu^ZCK^MVqxZvMgo8jMy+rDdxKh^KCc$K^MOxMCsSMy+SDd^KH+xK$c=K^Zp^ZVMRv>oPSMy+lDdVME+sDd^q6^qWxZCKC7^Z^gz+NDdvR6^qLVZs+vgVK^qHk^Rxqvgy+SDd^qP+xqoM^dHkCZVdxuY+^M^g^ZVuxKOo8jMy+SDdVKs+vMVG+^qXkVqavMy+EDd^qz+XDdvg2k^ZgVZ2+SDd^Z=+^qVZxMok^MVG+^q|+xKvR^MzkCcGKVMxKX+GDd^Ky+9DdxMc+I^gy+jDdxZ5^Z$+^qP+xqp^OHkCIVOxq^k^gR^qz+yDdvR6^q6Vds+vuVK^ZHk^RxZvuxk^ggVdE+HDd^q6^qixZok^ZVK^qxkHRvR^Zxk^gdxZG+GDd^ZV+VZsKvuHkCZ^dVqjkvdO^qRD+xMvdp^+^Kz+XDdvM2k^KgVK2+SDd^KgCzSMv+fhvE+^Kr+ZxqG+DDd^ZxkVqKvgrk^K^qVMVkv>y+G=d^Kz+SUdv>l+^K^MV>RvqHXjMy+y=dVKE+H=d^MZ^KVMx>X+HUd^>y+r=dxMG+HUd^>y+|=dxK1^>^K^qC+xMvR^KD+S=dVKE+s=d^KXk^K4x>G+S=d^Mz+VM2+vME+^>^KVM2+s=d^My+S=dVKs+vMVGGK^My+Y=dxK1^M^K^>z+N=dvRz+^qC+VKE+l=d^qA^KVqxMNk^MC+^qC+x>vR^KV+^KRsGGGjmvcGGSGK^MD+S=dVME+H=d^K2k^KZxKX+G=d^KgvYjME+s=d^My+S=dV>|+vqw^KQ+VMxKvqD+S=d^>z+N=dvMV+^KVGGKVME+X=d^KA^MVKx>ok^>ZVGGGjmVGGGSGKxKG+S=d^Mz+VM5vqy+D=d^Mux>v>^RXk^RnxM8+^K^M^>U+N=dvqy+S=d^Kz+N=dv>z+^M<V>T+vM^>^MD+r=dxMG+S=d^KV+VKsGGKv>y+l=d^KuxMvM^RV+^RRsGGGjmvcGGSGK^Ky+S=dVM|+v>C+^Ry+9=dxM1^R^M^qTkxq$+^Me+^KVMx>X+S=d^>y+r=dxKG+S=d^Mz+VM5vgQ+^K^ZVM2+s=d^My+S=dVMAv>R^KuVKocjMG+S=d^KvKVKMvcGGjmq^qpVqxMONcjMy+S=dVKJvM^MoK^MskxKmgN8g^ZD+EsjMmqSsLRVM>XCGMTkD9dy+x7xMA^M4gYE1xKI^KCVjM$+BdNlO^KZ^KBq^m^>Z^>BOjNu^Rr+gVKE+CI^qZ^qB>lE1^gxk^Kqxgu^>^R^Kfx+v>y+H7^qFxqmg=E1^Mz+G7vMW^K4ZCPkvZy+H7^RFxRmgYyt^Mz+G7v>W^M4Z^Euvgskxk^KB>XHA^M9+=eGMBkssLR^Mgz8GMUky9dy+H7^KRxKmgvQu^>v+fLjK^K5V>xKv>u^MsvGMv+f3VlL^>y+x7xMA^M4goQuxZl+^>^Z^Kz+G7v>$+41o3xKG+sPg^qZVqfODHA^RCKVKxRHSk^>xk^MB>YQu^>skxkVKfOC|L^MD+cPgxKOGTGMGky9dVKeks9d8kG9dZVkf1N^A^KU+VK>vRu^qN=GMRxkO^M$+47zKvM5^M^KVRJvZ^qu^qUUGMMvKg^qpVqxKOEUGMpbVK2+s9d^K$+4gUMv>Z^M4uDvdvqek^RRVMx>vZp^+^K2kxK6^>D+G9dV>C+m1v3^>D+$lGMmqSsLRVq>DTGMy+VPg^>z+E9dv>y+S9d^q^kx>v>^q^Kskz+y9dvgCK^>^qVZxKVkB=z$d9+TXGMfdSsLR^KZ2NGMQk2ld$+4gD=IvRek^>rkVqx>vMZ^K4OPEgvqek^ZRVKx>vgp^+^RRxRmu=$+^gy+>vRw472XdfdSsL^ZxkVqKvgR^R^gVqJvk^MZ^MZx>2K^>D+oVgVKY+2zGM4qSsLZxKOEjGMTkDldjk=ldvMBlrGM$+BZ$DI^KZ^KBqXYO^qr+gVME+Eld^Rxk^MqxRu^K^q^Mfx+vqg$jGMB2+^+vR^+GkRVqE+u^qZ^qBd8Qg^Zek^Mqxqvg^Mp^+V>VkvqBY+oKBkssLD+$Vg^KD+$GGMmqSsLRVK>DQsMTkNld8kzldalEsM9+2cGM4>NsLu^KgX|sMlkSldUkHld8kVld$kHldUkoTd8k$TdU+GldmqSsL9+csGMfdSsLg^KZo$cMQk=TdGkDTdVKekETdD+lTdRbV^GMG+DTd^K$+BZxQ1^>Z^>Btoj1^qr+gVZC+m1vE+^gy+>vuxk^dRZQkvd^d^RxkVZKvZR^>^qVZJvk^MZ^MqxRG+DTd^M^kVMuvgH+w^ZVgWvZ^g^MQ+VKxMvRD+lTd^qZlocM6Y+vk^KV+yku^K$+4gUMvRZ^q4uDvdv>ek^RRVqxMvZp^+^K2kxK$+^ZDk^ZqxKX+lTd^KB2+E+ETd^MZ^MBd8Qg^Rr+gVgjkvdRC+RVMxRvdp^+^KeKxKX+Vld^K9+P$cMfdSsLg^MZ29cMQkNTdGkyTdVKeksTd8kGTd$+BqQM^MZ^MBZNvd^>ek^qqxMvq^qp^+VKvkvMC+^>DkV>KvMD+STd^Kz+ETdvMX+^K4qD8dvqu^>S=cMz+NTdvqp^>^KZXUcMG+STd^>V+V>gvZDk^RaV>Jvq^KD+GTdVKE+HTd^KZ^KBd8Qg^Rr+gVqjkvRRC+RVKxRvRp^+^>eKx>X+CTd^M9+elcMfdSsLg^qZ=ccMQkVTdGkCXdVKek2Xd8k$Xd8k8XdeklXd8kDXdD+eXd$$+X+$XdXNQUD+D+8XdKG+2Xd^My+^TdxKA^K4AQ^Ax>E+^M^>^qdxqNycMy+2Xd^KS+xKI^MX+^Mqx>I^>yQcMy+vXdxK=+47DegVME+$Xd^Ry+2XdVZMvZ^Z^qCKVMxq$+^>2k^KV>x>X+$Xd^>g|zcME+2Xd^K$+4O2egvRy+CXd^>z+oXdvdZ^>^gVRHkvR^RC+^M8kxKv>^MD+oXdVME+DXd^Kp^KVMokvMg^KD+8XdxKONTcMy+oXdVKz+vMC+^MZVMfieQg^Kr+Zxq^k^qRC+qxMvM^qp^+V>2+lXd^>y+$XdV>z+vqC+^qZVqfieQg^>r+ZxR^k^RRC+qxqvq^Rp^+VK2+XXd^Ky+DXdVKE+$Xd^>e+^KV>xRG+=Xd^>e+VRx>vgoK^ZD+eTdxq|+$scM4qrsLKvMgEUsMTkQXdekGXd8kSXd8kjXdekVXdD+yXd4>NsLX+SXdbD+jXdKG+Hld^MZVMf1N^A^Ks+VKKvRu^qVHcMU+yXdaD+SXd3ZGvsMG+Hld^KZVKf1N^A^Ms+VMJvMu^KsVcMU+yXdty+CTd^MtxMvMD+yXd^KZGvsMG+Hld^MZVMf1N^A^>s+V>6vMu^KXCsMU+yXdtD+yXd4qTouOHvsMy+HldV>Mvq4AN^AVKS+vM2+^>uV>2osMX+GXdOy+^ldxM3^M^KD+zXdxKOHvsMy+HldVKMvM4AN^AV>S+vqE+^KuVKSvsMX+GXdBD+rXdiOHvsMskD+cXdKG+sXd^Ky+jXdxME+^K^M^>dx>V2sMy+yXd^Kz+sldvqi^>^q8kxKvR^qD+yXdVqE+VXd^Mp^MVKokv>g^MD+cXdxMOo$sMy+SXdVKS+vM3^MuVM$=sMG+oTd^My+zXdx>l+^M^>^KU+EXdvMy+Hld^Mz+EXdvRzk4Rj8uxqvM2k^M^KVK2+CTd^KskD+vTdxKG+$Td^KiVKxqG+$Td^KiVKxMG+$Td^MiVMxKG+$Td^MiVMxKG+$Td^KiVKx>G+$Td^MiVMxKG+$Td^MiVMxKG+$Td^qiVqxKG+$Td^KiVKxMG+Hld^KZVKfISEg^qr+dx>^k^>Rgz+GldvZZ^R4uX^Avgxk^>gVZKvM^q^>pV+xM2K^MD+yldVKE+Gld^Mi^MVKVkvMgCQsMB2+^+vM^+GkRVKVkm1Y|AB2+SkX+2Vg^K9+PQsMfdSsLR^KZVzHMQkl|d8kX|d$kl|dUkN|d8ky|d$kN|dUkG|d8ks|d$kG|dUkV|d8kCEd$kV|dUk$Ed8k2EdD+s|xMmqSsLRVK2+y|d^K9+SrsMBkssLR^MD+Q|dxM|+XexM4qrsLKvMD+y|d^KZNGsM6GSsM$+4gyztvM=+^K4RjD7v>oK^Mg|GsMa9+vk^q^+jkKvRy+R^>Rx>m7eQg^MCkxqu^>^M^qfx+vMoK^KB2+Sk|+XzxM4qrsLKvMD+S|d^KD+HUHMmqSsLRVK2+H|d^KS+^MU+D|dv>$+4I$ehxKA^K47svdxMX+s|d^M$+BuUeh^KZ^KBu=y1^MD+H|dVMC+mdX=I^>Ckxqck^>^q^MRxMmaN=I^>Ckxqu^M^>^qfx+vMD+V|d^Kz+VPgvqi^>^KU+H|dvM$+4I$ehxKA^K4hcGOx>i^>S^sMfq>vMp^K^>U+V|dvqy+E|d^>tx>vMD+$Ed^Kv+fiXlO^KZVKfhSNt^qD+8EdxqOo|xM8kSEd$kyEd6y9xMy+sPgV>Mvq4gYytVqP+vMR^>^qVKJvk^MD+SEdVME+sEd^Ku^KYDxME+sEd^MZ^MB7rT7^qr+gVRjkvZR46EOKv>^q^RpV+xKX+GEd^KS+VKE+sEd^ZZ^ZB7rSd^Rr+gVgE+HEd^dZ^dBaYCu^uxk^gqxuu^Z^R^gfx+vRxk^K4uXvhvRy+SEd^gRxgmiQSd^qy+>vuy+GEd^uRxumFDPk^Askxdu^AR^gVqxdF^+^RxkVKfiGYO^RoKVKN+vMxk^K4uXvhmOGxOxkVKfiGYO4OjxOVkvMgHXxMB2+^+vu^+GkRVdN+vRxk^q4uXvhmOGxOxkVqfiGYO4OjxOE+u^RZ^RBd8Qg^uek^AqxRvA^Ap^+VKjkvR4gU87VKVkvRBY+skz+D|dvMy+s|d^>skxKmR9Hk^>Z2zxM6lNxM$+4ODlOv>Z^M41QqvRr+g^>skx>u4ueVkqxMvR^>p^+VKMvM4I^XuV>Vkvqg$zxMB2+^+vM^+GkRVKVkmOGxOB2+SkOGrxMBHyxMv+fJ9xI^KZVKf1rw^MZVMfplyu^KoKVK>ErxMBY+vkVKx+HkR^KB2+VkmZPHuy+T|dx>G+H|d^KxkV>fA|T7^Ky+T|dx>G+V|d^gxkV>fAS+^gy+T|dxKG+CEd^>xkVKfAUyL^>y+T|dxKG+N|d^ZiVZx>^k^K4Zv=Ix>G+X|d^Ky+eEdx>^k^K4gcTZx>G+X|d^Ky+vEdxq^k^K4Zv9dxqG+X|d^K$+BZ$DI^qZ^qB1X8u^Rr+gVZC+mA=^d^gRxgmI8eh^dskxZu^dR^qVRxZF^+^>hBu|N7^>^ZxkVKfOxe1^Zy+T|dxK=+47XlOVRMvZ4dcTdVZMvg4IGouV>Mvq4AN^AVgjkvM4gCvIVgE+N|d^K$+4ODlOvZZ^R4gjmvqZ^>47youvZZ^R4uX^Avqxk^K4ZojAvqy+X|d^>z+oEdvgxk^>4Zxekvgy+X|d^Kv+fL8eh^>ZV>fFGQ7^RxkVKfAUPO^Ry+T|dxK=+47XlOV>Mvq47lxLVZjkvM4ge|gVZE+N|d^Ky+y|dV>7vq^Rxk^KB>2R^Ry+X|dVKE+s|d^Ri^RV>jkvM4geSOV>E+N|d^Ky+G|dVu7vA^>xk^KBMSyt^>y+X|dVKC+mdX=I^ZCkxgck^Z^g^>Rx>m7eQg^ZCkxdu^>^Z^dfx+vZxk^K4ZzYZvZgoQHMB8EHMQ+I^M$+41YxIvMZ^K4I8N+vZZ^R4gNjZvMxk^MRVKC+mA=^d^>Rx>mt9xI^ZRxZm3PyZ^>y+>vZxk^RRBATN+R^Z^>VRJvk^KZ^Kqx>A^>4drjZxK^k^Mg^KRxMmdDGt^Ky+>vqxk^>RBKrGLR^M^KV>Jvk^qoK^qZNEHM6Y+vk^KV+yku^KBY+eKfAPHuS+^KskxKmOzvubz+=IvgZ^Z47jDZvdr+g^7z+D|dvuxk^7RVdKvg^g^7pV+xR^k^K4go$IxR^k^K4uEsL32K^KD+=VgVKY+VyHM4qSsLqxKOysPMTk2Qd$k$QdUkDQdy+sPgV>Mvq4g=E1VKP+vRR^>^KVqJvk^MD+=QdVMN+v>D+DQd^Mv+f1=^d^KZVKf1Tyg^MuVMEjPMG+DQd^Ky+YQdxqA^q4LXzuxRA^R47jTtxuA^u4IUNhxqA^q47CQgxRA^R4d2Ntxqc+g^g$+BZl^d^ZZ^ZBZQyg^uZ^uB>$ek^dxk^gqxdu^R^q^gfx+v>xk^K4ZHCkv>y+DQd^Mz+$QdvMZ^K4i9zuvgZ^Z4OyTtvdZ^g472NhvMZ^K4OPEgvgZ^Z4gvNtvMr+g^dv+f1=^d^gZVgf1Tyg^uZVufOVz+^AZVAfh^V+^gxkVdKvdR^Z^KVdJvk^qxk^MBAv^+^qy+DQdVKE+lQd^gZ^gBIzzu^AZ^ABdHTt^MZ^MBuXNh^gZ^gBd8Qg^MZ^MBq9Nt^gr+gVuC+mA=^d^ORxOmATyg^dRxdmICzt^Askxuu^AR^MVgxuF^+^qxkVKfLCzt^qy+UQdxKG+=Qd^uZVufa|zu^gZVgfiGTt^dZVdfLDNh^gZVgfieQg^dZVdf7YNt^Ar+Zxg=+47XlOVuMvA4LrPZVOjkvdR^ORVdxAvdp^+^qskxKmOljZ^qz+2QdvMy+=Qd^ARxAmL|zu^gRxgm7GTt^uRxumIDNh^gRxgm7eQg^uRxumdYNt^Ay+>v7$+43|QuxgA^g4IUNhx7A^74tl|Rxg^k^OR^gqxuvO^Op^+VqjkvM4OTrZVqE+XQd^Ky+=QdVgMvd4L|zuVAMvO47GTtVgMvd4IDNhVAMvO47eQgVgMvd4dYNtVAQ+O^O$+47eehv1Z^I41o^7vIZ^74dDzdv1xk^ORVIKvd^A^OpV+xq^k^K4OTC+xqG+DQd^Ky+YQdx7A^74LXzuxAA^A47jTtxOA^O4IUNhxAA^A47CQgxOA^O4d2NtxAc+g^7$+BflGA^IZ^IBuXNh^1Z^1B7rSd^Ixk^7qxIu^O^A^7fx+vRxk^K4AE5vRS+^KxkVKftzvuby+9IxAA^A4IsDZx7c+g^Ly+UQdx1^k^LR^1qxAvI^Lp^+VqjkvM4gv$IVqjkvM4uQsLpVkvMD+DVg^KD+=xPMmqSsLRVK>G8VMTkEQd8kQQdekGQd8kSQdy+cPgxMA^M4gYE1xq8k^>R^MVqx>F^+^KD+QQdxK=+4ACDIVqMvR4dT|+VRQ+O^Zy+NQdVgMvd4L|zuVdjkvgR^dRVqxRvgp^+^>Rx>mdDGt^Ry+>vgxk^ZRBKrGLR^>^RVZJvk^KD+yQdVKE+SQd^KZ^KBIzzu^RZ^RqxK=+4IjKVR6vM^R^gD+rQdxgs+^Ky+SQdVRjkvM4OzvuVRE+EI^RZ^RBu^DZ^dr+gVgE+GQd^uxk^gqxuu^R^d^gfx+vgxk^K4Z^vIvgxk^K4dTsLWoK^KD+9VgxK|+l2VM4qrsLKv>g$sVMTkcQdekCNd8kVQd8k^QdaSDVM$+43|QuxMA^M4IUNhx>A^>4tl|RxMc+g^qxkVqKOR^>^MVqJvk^KS+^KskxKmOzvubskxKmgv$I4IeHu^k^K4uEsLi2K^KgVcVMbv+Yk^q^+GkqxqG+R^KZVKfIroI^qZVqftEQg^Kr+ZxR^k^RR4OSjOu^q^K^Rfx+v>D+HQd^Mz+KvMZ^K4dQoIvZD+VQd^Rz+GQdvMfRgVMNkvM^M^RD+^QdxRG+HQd^Kfq>vZSk^K^RVZRvgoNVMy+RVRMvZ4uroIVMMv>4A=yZVRQ+I^Zxk^ZqK^k^ZgyIqxMvZ^Zp^+VK2+oNd^KgGyVMz+KvMZ^K4dQoIvAZ^u4u$yZvMr+u^ZskxZuRy+HQdVd^kvu=q^gxkVZ>vdR^u^KVZJvk^RD+VQdVRN+vMy+CNd^RskxKmOzvu^Rz+=IvZZ^R47jDZvdr+g^Ar+xdG+R^7ZV7fieQg^IekVtKvI^I^tpV+xO^k^d4g=87xOG+VQd^IxkVdfIroI^IxkVAKvuR^R^gVAJvk^Zxk^KB>Y$I^Zxk^KBRrsLboK^Kbv+VkD+XVg^MD+GsVMmqSsLRVK>=j^MTk=Nd8kUNdekENd8kXNd8k|NdekSNd8kyNdwBQ+^vA4qSsLVK2+XNd^KS+^>U+=Ndvqr+a^KskxKu41$ckskxKO4tQjgskxKI4uvxkskxKt4A9N1skxKL41CYZskxKJ4trHZskxKa41D|kskxKp4tQ2+U+DNdvMD+ENdbU+XNduy+NNd^qz+DNdvqZ^>4uX^AvMl+^q^KVMRv>=N^My+XNdVKE+SNd^>Z^KV>xMX+yNd^My+9NdxKG+yNd^M$+BZ$DI^qZ^qBb9TI^>r+uVZC+mA=^d^uRxumAljA^RskxZu^Ry+yNdVRjkvgg^RRVqx>vgp^+^gdxg$U^M$+4A^UIx>A^>4W2TIxZc+u^d$+BZl^d^AZ^ABZEjA^Oxk^dqxOG+yNd^uxkVd>vAR^>^ZVdJvk^RZ^RB>NDu^Zp^ZVgRvdlT^M$+4uHUIvuZ^d4FvTIvAr+u^Av+f1=^d^OZVOf1ljA^IxkVAKv1y+yNd^7skxAO^7R^dVuxAF^+^RZVRfOXDu^AZVAfieQg^RekVuKvO^R^upV+xZF^Z^g7VgGT^MF4gCERVgjkvM^M^gy+|NdxKxk^K^MuVMsE^MG+DNd^RZVRf7PsO^Zr+ZxgG+lNd^uy+zNdx7A^u^7^Oskxgu^OR^RVZxgF^+^KpVKxMI^MDQ^MD+|NdiG+NNd^KpVKxMDk^Kg^KU+XNdvMgEC^My+|NdxKi^KGz^My+9NdxMA^M41vckxZzk^Z4g^|RxgF^g^KD+|NdxKs+^Ky+ENdVMjkvM4OzvuVME+EI^gZ^gBu^DZ^Mr+gVuE+ENd^Oxk^uqxOu^g^M^ufx+vgxk^K4Z^vIvgxk^K4dTsLWoK^KD+|VgxK|+Hj^M4qrsLKv>gDvC>Tk8zdeklzd8kDzdS+VKC+mA=^d^MRxMmtrHZ^qskxKmZ8VL^qv+f1=^d^MZVMfJQ2+^>xkVKfAx5^>$+BZl^d^MZ^MBA$YZ^>xk^KBMXTL^>$+4u$^dv>Z^M4I2|kvqxk^K4RyyZvqD+=zd^Kz+$zdv>Z^M4ReVLvMy+=zd^MRxMmZx5^>rkxKvq^q7^qP^^ME+lzd^KZ^KBMXTL^Zy+=zdVKMvM4ZGyZVMNkvg^M^KpVKxqX+Dzd^qS+VKE+Xzd^Mxk^KBgjvu^My+lIV>Mvq4IxDZVqQ+O^Zy+=zdVgjkvgR^gRV>xqvgp^+^MskxKmgv$I^MskxKmuQsLbeKxKX+NVg^M9+e$C>fdSsLR^KZC$e>QkEzd8kNzd$kEzdUkSzd8kGzd$kSzdUkHzd8kVzdD+CzC>mqSsLRVM2+Szd^MgVUC>jkCydvM8k2ydy+vydxMp^M^>ZV>f1N^A^M2+VMKvZ7^RsUC>fKvZZ^>^RVK2+Dyd^Ky+$ydVqE+Dyd^ZZ^qVZxdh^dR^qdxq=UC>oK32kVR>vZF^R^MVqdvREYC>oKbD+NDC>mqSsLRVM2+Gzd^MgE|C>$kDydc+L^KxkVKK$kxk^Kg|+jkvMuH+xkVKg$+xk^KIqjkvMtaD+TydxKG+Xyd^MZVMfi8C+^>r+ZxR=+4A=^dVqMvR4AljAVZMvg41syLVqjkvZR^qRVMx>vZp^+^KSkxKvqoK^>9+c8C>fdSsLg^KU+NzdvMy+Nzd^MtxMvMD+Gzd^Kz+Ezdv>i^M^KU+SzdvMy+Szd^Mz+yzdvq=+^M^>VK2+Cyd^Ky+HzdVKdvMsNC>y+szdV>Jvq^KD+VzdVK>CVC>8kNydS+VMC+mA=^d^KRxKmAljA^>Rx>mtQjg^KskxMmZHCh^Kv+f1=^d^KZVKf1ljA^qZVqfh$ck^>xkVMfAz=h^>$+BZl^d^KZ^KBZEjA^>Z^>BZ|N1^Kxk^MBK=Eu^K$+4u$^dvqZ^>4u=jAvdZ^g4d^skvMxk^M4qe87vM$+4AY^dxKA^K4tyHZxq^k^M4Z$VLxq=+4A=^dVKMvM41CYZV>jkv>4ZDTLV>C+mA=^d^>Rx>mtQ2+^KskxMmZx5^Kv+f1=^d^KZVKfhD|k^>xkVMfAGyZ^>D+QydxMG+Nyd^KoKVKN+v>y+Vzd^>skxMmOzvu^>z+=IvRZ^q47jDZvqr+g^Rr+xZG+Gzd^uxkVZfuEou^uy+xzdxg^k^Z4ZrlOxg=+4A=^dVuMvA4AljAVOMv741syLVdjkvg4RxDAVdE+Vzd^dxk^ZBMcvZ^dxk^RqxZu^q^>^Rfx+vMxk^M4Z^vIvMxk^M4dTsLWoK^MD+zVgxK|+H$e>4qrsLKvMgVUe>TkrydN+vM$+4I$ehx>A^>4IDN7xMxk^M^>jkV>xM^k^K4ONvuxMG+lI^>ZV>fLxDZ^Rr+Zxq=+4I8ehVZMvg4I9N7VgjkvRR^gRV>xRvRp^+^MNkfdSsL^M^qskxKmgv$I^qskxKmuQsLbeKxKX+SVg^K9+rDe>fdSsLR^KZ2Do>Qksyd8kHyd$ksydUkCrdy+sPgVMMv>4g=E1V>P+vZR^M^>VRJvk^KD+HydVKN+vqxk^>4dSeuWxk^>4depWxk^>4uNr+Wxk^>4A991Wxk^>4OHE7WD+Vyd^>U+HydWy+Hyd^KRxKmL|zu^>dx>=Yo>y+Vyd^>v+f1=^d^qZVqfBv|t^KuVKsQe>=+4A=^dVgMvd4av|tVqMvR4I9N7VRJvZ^K7^KUNe>JW^Kxk^>BRVeu^Ky+VydVZE+Crd^KZ^KBIzzu^>Z^>BuUeh^qu^q|re>E+Crd^KZ^KBIzzu^>Z^>BuUeh^RZ^RBu|N7^Kp^KVqdvRHre>pbVqjkvg4u8pVqE+ord^Ky+HydV>Mvq4L|zuVqMvR4av|tV>Rvqoce>y+HydVqMvR4L|zuVRMvZ4av|tVqMvR4I9N7VgJvd^>7^>Tce>JW^>xk^KBZsr+^>y+VydV>C+mA=^d^KRxKmI8eh^qRxqmI9N7^KvkxKvRy+Hyd^KRxKmL|zu^RRxRmI8eh^dRxdmI9N7^KvkxKvZ5^q^RVKjkvq4O|91VKE+ord^>$+4u$^dvMZ^K43^XtvRu^qyeo>v+f1=^d^ZZVZfBv|t^KZVKfL9N7^Z$kVZxgG+Hyd^KZVKfa|zu^RZVRfBv|t^KZVKfL9N7^R$kVRxKC+^g^K^RfxRvR7^qCoo>f3vRxk^>4OHE7vRy+Vyd^>Rx>museu^qOxqC$o>y+Vyd^KRxKmu8p^>fx>vR7^qs$o>z+sydvqZ^>4uNr+vMp^K^qOxqH8o>y+Vyd^KRxKmO|91^>fx>vR7^qS2o>z+sydvMZ^K4OHE7vgp^Z^qc+xqb^KD+CrdVKN+vMy+Crd^>skxKmOzvu^>z+=IvqZ^>47jDZvZr+g^Zz+sydvdxk^ZRVgKvq^R^ZpV+xq^k^K4go$Ixq^k^K4uEsL32K^KD+GVgVKY+29o>4qSsLqxKO$Yv>TkVrd$kHrdUkoSd8k$Sd$koSdUk=Sd8kDSd$k=SdUkXSdek^KU+HrdvMD+oSdb~f8+VNR4qrsLxKX+$Sd^Ky+vSdxMA^M4dHsOx>A^>4dyjdxqc+g^Ry+vSdxM^k^RR^Mqx>vR^Rp^+VK2+DSd^K$+4uz=gvMZ^K472Nhv>Z^M4AlQgvMD+=Sd^Kz+HrdvMZ^K4gGygvZZ^R4gQjdvdr+g^Mz+Hrdvgxk^MRVZKvZ^g^MpV+xqX+DSd^q$+BZl^d^MJ^MVKMvM4AN^AVMo+v>R^d7VdHvv>FR^dZVKxdvgD+lSd^Zz+$SdvdZ^g4gQjdvOr+g^qz+=Sdv7xk^qRVOKvd^A^qpV+xuX+XSd^uy+TSdxul+^u4AD|1xq4Rg^ArkxqvO^Iu^IPGo>E+XSd^uy+lSdVA$+vA^A^qD+eSdiODvv>y+XSdVu$+vA47oouVqhug^uSkVqxuvOu^A$xo>z+2SdvOy+lSd^uY+xAvA^qD+oSdJ>Xvv>y+XSd^uY+xumOXxA^qaKO^uSk^qVuxAI^ADPo>y+USdxqG+lSd^A=+VqxAvAD+oSd3Z2vv>G+XSd^u=+Vuf192d^qfq>vISk^q^7VuRvAE^o>y+DSdVAE+ESd^O=+^AVOxqX+oSd3gUvv>E+NSd^u=+^uBgeD7^qfRZxAsk^q^A^OdxOsev>y+DSd^Az+=SdvI=+^A^7Vq2+2Sd3gDvv>z+oSdvRy+lSd^OY+xqv7^uu^uUvv>E+XSd^uy+lSdVA$+vA^A^qD+eSdiDk^dg^d4xdv>^q7^q|yo>N+vRy+oSd^MskxqmOzvu^Mz+HrdvgZ^Z4g2GtvIr+g^dskxdu4RQGLqxZvI^dp^+VKjkvR4gv$IVKjkvR4uQsLpVkvRD+sVg^KD+GYv>mqSsLRVK>DHv>TkCjd8kejd2+2jd4qSsLb=lv>=+4BGQOV>Mvq4IDNhVqMvR4iQSdV>Q+O^Mxk^Mq2Peku^q^>^Mfx+vMD+ojd^Kr+xM^k^M4ONvuiG+ojd^KxkVMfOv$I^KxkVMfIQsLboKVM>CTv>BY+vkVKx+HkR^KB2+aoQv>$+4BjQOxMA^M4IUNhx>A^>4iESdxRc+g^MxkVMKEPekR^>^RVMJvk^KD+ojdVKN+vMxk^K4A|vuby+ojd^MskxKmgv$I^MskxKmuQsLbeKxKOXQv>BY+okxKvkGkR^Kbv+6Erv>$+4B$GAvMZ^K472Nhv>Z^M4tTSdvgr+g^KskxKuDPekR^MVZxKF^+^RD+ejdxRs+^Kxk^KBgjvu3y+ojdVRjkvM4gv$IVRjkvM4uQsLpVkvMgCSv>B2+^+vM^+GkRVKa9+Bosv>$+BflGA^RZ^RBuXNh^ZZ^ZB7rSd^Rr+gVgjkvdRlPekRVZxRvdp^+^KU+VSdvMS+^KxkVKftzvu3y+ejdxR^k^K4go$IxR^k^K4uEsL32K^KgNsv>bv+Yk^d^+Gkqxd6Y+S+^gskxgmOzvubskxgmgv$I4>NsL^k^g4uEsL32K^gD+HVgVKY+oPv>4qSsLqxMOS=$>TkXjd$kljdUkNjdBX^v>v+fiGTt^Mr+Zx>^k^>R4E+y8Ock^M^>^qCkx>u9+^q^>fx+vMD+Ejd^KZNC$>6Y+vk^KV+yku^Ky+RVMMv>4uroIVR2+yjd^RBY+U+XjdWy+Ejd^KdxK22$>y+Ejd^qRxqmOEQg^>y+>vgxk^ZRBZ|SdR^q^>VZJvk^MfRZx>sk^M^>^gOxgC2$>y+Ejd^>Rx>mOEQg^Ry+>vgxk^ZRBZ2NRR^>^RVZJvk^MfRZxRsk^M^R^AfxAvdp^g^KdxKN2$>D+Njd3r+xKG+Njd^RxkVKftzvu^Ry+|jdxMi^MsY$>pBkssL^Mxk^KB>Y$I^Mxk^KBRrsLboK^KU+sVgv>9+XU$>4>NsLu^Mg$H$>lkHjdUkoGd8k$Gd$koGd=+4ACDIVKMvM4WYTIV>Q+I^q$+47eehvgZ^Z47=uvZxk^qRVRjkvRg4I$sLKvM^>^qpV+xMX+oGd^My+eGdxqxk^q^MuVMV|$>=+4I8ehVRMvZ4I$y1VqMvR4OEQgVZQ+O^Axk^AqfiyygR^qVZxAF^+^>fq>vZSk^>^RVZJvg^Mu^MjQ$>N+vqxk^>4A|vuWxk^>4Z^vImO9xuxkV>fIQsLboKV>E+2Gd^>Z^>B>NDu^MZ^MBd8Qg^>ek^RqxMvq^Rp^+VZ2+=Gd^Zy+$GdVZMvg4OEQgVgQ+O^Rxk^RqffHxZR^ZVgxRF^+^>fq>vZSk^>^RVudvAXS$>y+$GdV>S+vq4B|^LVRJvZ^u7^u9j$>E+=Gd^Rs+^RBir8I^>p^>VudvADG$>y+$GdV>S+vq4mlX1VRJvZ^u7^uYc$>E+=Gd^>s+^>B~U8Z^Rp^RVudvA2s$>y+$GdV>S+vq4bXy1VRJvZ^uD+2GdVuN+vqy+2Gd^Rskx>mOzvu^Rz+CGdvZxk^>4Z^vIvZxk^>4dTsLWoK^>D+^VgxM|+HH$>4qrsLKvMg==2>TkjGdekVGd8kHGd8kPGdek$cd8kocd8kvcdekDcd8k=cd8kUcdC+mI8eh^KRxKm7xvd^Mc+xMmijEI^KOxK$88>w4IDTZfdSsL^MZVMf7PsO^>r+ZxR=+4I8ehVZMvg4I$y1VujkvZR^uRVMx>vZp^+^qdxqV$8>w4O=$dfdSsL^RZVRf7PsO^gr+Zxd=+4I8ehVZMvg4I$y1VujkvuR^uRVRxgvup^+^>Skx>vdp^g^qfxqvMjk^K^>Skx>vRD+sGd^qy+2+vMxk^KRRP2QjjmvcGGVIxk^KgRGNU2jmvcGGHl+xk^Kuc=^^eWjkvMOZU|e8SmVGGGy=KjkvMINj=8HixkVKOANcs2jm^GGGEGKxkVKIsHEDzwxk^KJRQrYrSmvcGG$Nkxk^KaRSCY8jmvcGG=eKxk^KpReSGcrmvcGGly+xk^KBQU2y$WjkvMFZH2=8SmVGGGG4jkvM6y=GNS2+xkVKFAG8PSjm^GGG2=+xkVK6osQYoIxk^KwReX^xSmvcGGVjKxk^KC+RlCNCjmvcGGVKxk^Ko+RC2GojmvcGG=4xk^K$+RzyUSSmvcGG$QKxk^K2+TvjCHpjkvM=+Z|HxPrmVGGGC=+2+Ccd^KD+VGdpE+2+^qw4h=eZmqSsL^Zr+xg^k^g4g|rI>$K^q^Z^gVKMvM4dU|+VZQ+O^q$+47eehvdZ^g47Cy1vOxk^qRVAKvM^Z^qpV+x>X+Ccd^>y+^Gdx>I^>HQ8>y+^GdxqA^q4AeVgxZF^Z^>uV>oz8>G+Ccd^qZVqf1oVg^gZVgfOErI^qpVqx>I^>Hr8>$+BdXeg^Zy+CcdVgMvd4AoVgVdMvu4gErIVq$+vg^q^>D+ecdx>G+ocd^q1VqVMvgu^ZHr8>U+sGdb$+4dT=Ixu8k^grk^uVgx>A^>47CQgxg8k^dR^>VgxdF^+^qZVqfI=$+^dr+ZxAo+47YXdBkssL^gxk^Aqxgu^q^d^Afx+vgZ^ZgVg2+=cd^gy+HGdVZMvg4OEQgVuQ+O^dy+sPgVOMv74gN8gV7Q+O^1y+$cdVIjkvtR^IRVOx7vtp^+^Askxdu^AR^ZVuxdF^+^gfq>vuSk^g^dVu2+Dcd^uy+2cdVgRvdGV8>y+sGdVAdvONV8>y+VGdVdJvu^Ap^AVg2+lcd^g$+47zKvuD+Dcd^dz+$cdvAjk^u^gdxgEC2>y+2cd^7fx7vdu^gGC2>U+2cd=KS+^gy+Ycdxd^k^g4ONvuxdG+lI^AZVAfLxDZ^ur+Zx7s+^I$+47eehvtZ^147Cy1vixk^I4R9T7vi$+4I$ehx1A^147svdxt^k^I4dX2hxtG+$cd^1xkVIfAllO^1y+PGdx1^k^I4g9$ux1G+2cd^txkVIfAU^+^txkV7Kv1R^A^uV7Jvk^dxk^gB>Y$I^dy+DcdVdjkvd4uXrLVdjkvd4uQsLpVkvdD+o^g^KD+H=2>mqSsLRVK>Xj2dTkosd8kvsdekDsd8k=sd8kUsdekEsdy+sPg^MRxMmg=E1^>CkxRu^M^>^RZoP2KONl<gNN=>Zs2sKOsryMgsX2ZoKxMmg^Pd^>skxKmg^Pd^>U+EPgvMS+^My+zPgxKA^K4gS87x>^k^M4grX7x>G+yPg^KZVKfO2rt^>xkVMfOY>^>D+rPgxMs+^My+yPgV>Mvq4gr=LVqjkv>4gUz1VqE+GPg^KZ^KB>SPZ^>xk^MB>lzO^>y+yPgV>Mvq4g=PAVKjkv>4gC|tVK2+HPg^MS+^KD+=N2>mqSsLRVM>CP2>TkX2dy+x7xMA^M4gYE1xK=+4IjKVM8kvM^M^>uV>Vs2>G+H7^K$+BdNlO^RZ^RBIcPZ^>r+gVqjkvRR4AeyZKvZ^>^qpV+xM^k^K4gYE1xMG+H7^KZVKfO=E1^MZVMfIXb^KxkVKft2^k4dzDkE+CI^KZ^KB>lE1^Mxk^MB>Uzd4iXYgv+fiXlO^MZVMf7xm^>ZV>fJsxu^Mr+ZxqG+H7^ZZVZfO=E1^gxkVqKvdR^>^MVqJvk^Ky+sPgVMMv>4gC|LVqP+vgR^M^qVZJvk^Ky+H7VKMvM4g=E1VqVkvRxk^K4Z$E1v>9+sP2>4>NsLu^MgDvY>lkE2dG+H7^MZVMfO$Pk^K$+BuxK^>Uk^KV>xMI^MEeY>y+x7xK=+47XlOV>Mvq4LrPZVqQ+O^Rxk^Rqf1vQRR^>VqxRF^+^MxkVKfO$Pk^My+cPgxqA^q4g^XLxM8k^RR^qVMxRF^+^Ky+x7xKA^K4gvPkxZ2K^Zxk^KB>=Pk^M9+=$Y>BkssLR^MgUzY>UkV2d8kH2d8kP2dE+CI^KZ^KB>9yt^M$+47zKvMUk^M^KV>RvqEQY>y+sPgVMMv>4g$PkV>P+vRR^M^>VqJvk^KD+H2dVKE+CYd^qZ^qBAc|u^Rr+gVZjkvgR4ASNOKvR^R^ZpV+xKi^KGDY>y+x2dx>A^>41y|uxZc+g^gxkVgKmpraRV>xZvdp^+^RfxRvM7^KSlY>z+G2dvZZ^R4IQ|uvgr+g^dskxdu4ur9+qxRvg^dp^+VgJvd^K7^KzXY>E+CYd^gZ^gBAc|u^dr+gVOjkv7R4fNNhKvd^d^OpV+xZF^Z^K7VKXEY>G+H2d^uZVufhr|u^Ar+ZxZ^k^ZR47yCuu^u^A^Zfx+vup^d^KU+s2dvMy+H7^Kz+s2dvgxk^K4Zvytvgy+sPg^KRxKmgC|L^dCkxOu^K^d^Ofx+vgy+H7^dRxdmgYyt^ZeKxZ^k^K4g2ytxM|+=yY>4qrsL>vqgCU=>Tk9YdykNYd^K8kEYd$kXYdUkyYdBs8=>r+xKs+^Mxk^KBKHU1^Mxk^KBR|DhRD+EYdVKE+NYd^KJ^KV>Mvq4AN^AVMo+v>R^R7VRle=>FR^RZV>xRvMD+NYd^Kz+DYdvRy+NYd^ZRxqvg^g$k^gVq9kvR4AHzuVZRvgNcY>gsC=>z+DYdvRy+NYd^ZRxqvg^gh4dDrLvd^Zu^ZcC=>E+NYd^qy+NYdVgMvR^g^ZZVZfIXrL^d$kVdxqzk^q4AxyRxZI^ZyHY>gcC=>E+yYd^qZ^qBKHU1^Zy+NYdVqE+NYd^gy+NYdVAMvd^A^uZVufIXrL^gxkVZxqvdy+EYd^qRxqmu9Dh^Zz+DYdvdy+NYd^uRxgvA^dZ^dBRNrL^g2k^ZVgxg^k^q4uDDhxgDk^Rg^R4xRv>^q7^qzjY>E+yYd^>Z^>BR|Dh^KP+^KYqxMX+yYd^MS+VKE+GYd^>xk^KBgjvu^>y+lIV>Mvq4IxDZVRQ+O^gy+EYdVqjkvdR^qRV>xRvdp^+^MskxKmgv$I^MskxKmuQsLbeKxKOs==>BY+okxMvkGkR^Mr+xK^k^K4ONvu3G+R^MZVMfieQg^dekVRKv>^d^RpV+xq^k^K4go$Ixq^k^K4uEsLi2K^KBY+ckjkvM4g$1V>Y+oD=>4qSsLZxZOScjMTko=djkC=dvM8k2=d8kY=dekX=d8kl=d8kT=deky=d8kN=d8kz=deks=d8kG=d8kc=dekCUd8kV=d8k^=dek2Ud8k$Ud8k8UdeklUd8kDUd8k9UdekNUd8kEUd8kQUdekGUd8kSUd8kjUdekVUd8kHUd9+cDSMfdSsLg^KU+X=dvMD+2=dykU+$=dAXEDCjm^GGGsbD+U=dMH$=sSm^GGG2C+D+l=dRE9XUjmvcGGNHkD+X=dV9XlzC+U+l=d2ylNv3y+$=d^KvkxKv>s+^M4usyIvqu^>GQ=>z+X=dvRy+$=d^>Y+xqvq^Kp^KVM>=N=>y+$=d^qfxqv>D+$=d^MZHQYZOo92>goG2KY+xqvq^Mp^MVKdvMHz=>y+OVq7vR^Mp^MVKVkvM9+Ss2K4>NsLO^KD+uVKY+Er=>4qSsLqxqX+O^qgrS=>C+mI^v+^qy+>vMxk^KRBVKj2drk^q^KVMlkv>sk9+syD>BkssLu^KD+7xK|+lcX>4qrsL>vMD+t^KD+s2|>mqSsLgVq2+a^qg$UU>jkG+vM9+Xc=>4>NsLu^KgCUU>$kV+Uk$kL^KU+V+vMD+$k^kgxKc+g^M9+ex=>fdSsLu^>Z==U>HkDk^KGk9kxMUkXk8kEk$kXk|+leU>4qrsL>vMD+Ek^KZECU>HkGk^Ky+0xKc+J^>y+TkxR^k^>R^Rz+2kvRxk^>gVqE+Ek^qxk^>dxqG+Ek^qxkV>gvRy+Nk^qskx>L^qxk^>1fIU^gy+GkVqjkvqL^qRD+xKvqp^+^MckY+SH=>4qSsLZxMX+Nk^MgT8U>ykVk^Ky+5VqQ+p^Ky+XkV>jkvMR^>y+Ukx>^k^Kg^>z+=kvqxk^KuV>E+yk^>xk^KAx>G+Nk^>xkVKuvqxk^KtBqXl+y+sk^>skxKa^>R9+VqxKF^+^Mskz+G+v>Z^M4dDGtvqr+u^qz+V+vZxk^qRVRE+=k^Rxk^qZxRu^M^>^qfx+vMD+Xk^Kz+lkvMp9+^qY+xKvR^>skxkVMKvqrk^K^MVqVkvRoK^K9+9s9>fdSsLu^>U+tvqgyjU>Gk^kxKHkoK^My+eKxK=k^K^>NkBdTXu^>^MuVMS9U>G+oK^qG+2+xqvMp^K^MdxMlTU>$+4IVv+xKc+g^>xkV>KmQ+s|OrkVKx>v>Ek^My+^kxM=+4ACDIVqMvR4AVTuVZQ+I^Ky+oKVgRvdX|U>y+oKVdMvu4IDNhVRJvZ^gxk^Kqxgs+^RS+^gz+Hkvuxk^g4dx1vujkR^tskxgm7P^I^tSkKvuxk^g4t2yOvuxk^R41PCZvdxk^KgVRKvR^Z^KpV+x>^k^M4IUNhx>=+4ACDIVKMvM4hozLV>Q+t^Ry+CKVZjkvZR^ZxkVR>mIDNhS+VZzkO^gxk^ZBdeC1^gxk^RdxZu^K^>^Rfx+v>y+oK^MdxMSjU>y+2+^Rz+Hkvdy+oK^Z^kxRvd^Z^>pV>xMVkgs$D>GkTKxKHkEK^M8kQKekGKy+XK^>vkx>v>Nk4AxzuxMvM7^KHcU>z+DKvqjk^>^qfxqvMu^KlsU>z+DKvMoK^Ky+TKxK=+4AGSOV>Mvq4tQodVRMvM^R^MD+QKxMF9+^My+QKx>C+^M^>^KdxKHeD>y+NK^KRxKmdYNt^Ry+Rvqy+XK^qskx>u^qy+EKVqdvRlVU>p4AYAvRxk^>gVqKvM^R^>pV+xMX+yK^My+zKxM=k^M^>NkBZCyu^>^RuVRlCD>G+yK^MoKVMC+mI^v+^My+>vdxk^gRBY+SNZrk^M^gVZlkvgy+EK^M6f1VyI^M^RdxR=vD>$+4AS=gxqF^q^MgzvD>C+mAx9I^qfxqv>r+g^Rz+DKvRxk^RRVqK|+^M^RpV+x>2K^>9+$vl>BkssLu^dD+3xdO2UD>Gk2MVKeklMy+<^>z+oMvMCK^>^KBZorI^MD+=MVME+lM^q$k^qVK9+mAjR^KV>RvqD=D>y+=MVMJv>^KgoUD>z+$Mv>vK^M4>NsLvqp^>^KeKxKOSyD>GkXMVKykyM^M8kNM$kEMX+NMRy+QMxKG+EM^MZVMf1N^A^>l+VKx>vZu^RyyD>z+lMv>y+NM^ZRxMvg^KD+yMVKE+GM^My+yMVKMvM41e8IV>dvqXTD>jkgVKJvM^>xk^MBA88I^>y+yMVKzku^Mxk^KB7XyO^My+yMVK1mu^1^KV>Rvq=ED>y+yMVKzku^Rxk^KBdeC1^Rp^RV>C+mACDI^>Rx>mhozL^Ky+gvRy+XM^Rskxqu^Ry+6VuE+GM^RZ^RB>DDZ^d=+^uVdxZ^k^qg^Zz+EMvZxk^quVRKvq^K^qpV+xMG+NM^KpVKxMDk^Kg^KU+XMvMg$DD>skZ$Y9>HkHM^KGkPMxMUkC>y+HMVKRvM2Y9>y+HMVKCkvM^M|+4usyIv>^Ku^KzjD>E+p^>y+HMVME+o>^qCK^>VMxqvMoK^KS+V>Mvq47eQgVqMvR4dYNtVRQ+O^>y+HMVgjkvqR^gRVqxRvqp^+^KRxKmuSEg^gy+Rvqxk^>R3hug^ZxkV>>vgR^K^gV>Jvk^MD+C>VME+$>^>m4uHUIvq^Mu^M^HD>E+C>^>Z^>BO8eZ^Rp^RVMRv>EVD>y+HMVRMvZ4teeZVZMvg4d|HuV>2+$>^>p^>VME+$>^Mm4ZjUgv>^>7^>^^D>E+$>^Mm4ZDHdv>^Rp^RV>Rvq=o9>$+4dT9gvuZ^d4gyChvZr+g^gz+GMvgxk^gRVZKvu^R^gpV+x>F^>^MgeY9>E+$>^Rm47zohvZ^g7^gv89><mY+QDu4>NsLvqZ^>4gcsOvgr+g^Oz+HMvAxk^ORVuKvq^Z^OpV+xRF^R^guVgl29>G+J^gy+xMxuG+VM^OCKVgxuv7^Zp^ZVR>CY9>p9+^gfxgvZp^R^MeKxMVk9+DUD>4>NsLI^ZD+pVZ>D|9>Gky>^KjkN>v>GkG>^>z+N>vqu^>lD9>z+Jv>y+y>^qRxqmIDNh^Rz+N>vRCK^M^RVqxKF^K^>y+j>xMI^Ms99>y+fxKG+y>^Ry+j>xq$K^K^R^qV>Jvq^M$+4uHUIv>Z^M4LVNLvqr+O^qz+E>vZxk^qRVRjkvRg4IUNhN+vgjkg^RskxZm7P^I^RskxqI^ZR^MV>xqF^+^Ky+z>xK2K^K9+C=9>BkssLO^ZD+bxZOlG9>GkCqVKyk2q^MGk$qV>E+5^Ky+oqVR$+vM^R^MD+eqxMG+Cq^>T+VMx>vgu^Zoj9>v+f1CDI^qZVqffozL^>r+AxZG+Cq^gxkVZKvdy+oq^RskxZO^RS+^Rz+Cqvuxk^R4dx1vujkR^gskxRm1e8I^gSkKvdxk^R4t2yOvdjkR^gskxRm7P^I^gskxZI^RR^qV>xZF^+^MpVMxKOoG9>y+CqVME+2q^Zy+$qV>jkv>^Z^>pV>xKG+Cq^KoKVKY+oE9>4qSsLAxZX+F^Z9+Q8D>fdSsLg^RU+BvZ9+GjU>4>NsLI^qD+<Vq>Eol>Gk=q^Kjk2qv>8klq8kTqE+Xq^K|+Y+VKxMi^MsH9>y+UqxKG+=q^>ZV>f1N^A^ZSkVKxZvZp^R^MdxMoV9>y+=q^KRxKmAN^A^>U+2qvqp^>^MU+=qu$+4uE9gxMG+Dq^>=+VMx>vMD+Xq^Kz+=qvMy+Dq^M9+xKv>^qu^qeol>E+Nq^Ky+lqV>E+lq^Ry+lqVZMvZ^Z^MxkVKx>v>y+lq^KfxKv>2k^KgVK2+Eq^Kgo^9>z+DqvMoK^K9+8EE>fdSsLJ^qU+6vRgs8l>GkjqxKHksq^My+jqxKG+sq^MN+VKxMvRjk^q^KdxKH8l>$+4IVv+xMc+g^>xkV>KmC+$o+rkVMx>vMEk^KskZEGX>UkCR8koR$kCRUk2R9+Vcl>BkssLO^KD+vRxKO2cl>GklRVKykNR^M8kERz+VqvMZ^K4ZDDuvqr+g^qz+DRvgxk^qRVZKvM^>^qpV+xMX+ER^M$+BZ$DI^RZ^RBqQ|+^qr+gVZE+yR^gxk^Zqxgu^R^q^Zfx+vqZ^>4uCoivRr+u^ZD+=ll>mqSsLuVd>SSl>GkSR^KjkyRv>8ksR8kxRE+yR^Ky+GRV>MvM^>^MD+cRxMG+sR^K$kVKxMz+4AHyRVMx>I^>$El>y+rRxKG+GR^My+9RxdG+sR^>ZVdx>vZxk^K^MVR>lSl>D+HRRfY+vMy+lR^Mz+SRvZy+HR^ZRxRvg^qZ^MVqx>Tk^K^>^MdxMNzl>y+HR^>oKx>O^Ky+sRV>Mvq4AN^AVq=+vM^q^RpVRxMI^MNyl>y+xRxMF^M^K2kVM>v>D+HR^MZ2El>G+SR^Ky+jRxMG+lR^>y+cRxqG+HR^ZZVqxZvuZ^>^dVRjkvM^M^Ry+rRx>2K^>xk^Zqxd=+4ACDIVgMvd4AVTuVuQ+O^Axk^Aqv+u^g^u^Afx+vuxk^ZgVdKvq^q^ZpV+xM2K^M9+2Yl>BkssLu^KD+8RxKO=eT>Gk$ZVKykDZ^MGk=ZV>ekXZ$+4AX9IxMG+$Z^Ky+8Zxq$K^M^K^qVR2+XZ^Ry+oRVqMvR4gUPLVMQ+I^>y+DZVRjkvqR^Ry+YZxRi^R2^l>y+eRxgA^g4gTDuxuc+g^dy+vZx7^k^dR^7qxgvA^dp^+VZJvg^Rxk^>ZxRu^q^M^>fx+vMy+2+^>z+2Zv>y+$R^uRxumIDNh^d^kx>v>^d^KoKVKY+VeT>4qSsLdxMOl$T>TkEZjkXZvMGkyZ^Mz+CRv>r+O^>z+XZvRxk^>RVqJ|+^qxk^>ZxqG+yZ^qxkV>RvRrk^M^>VKVkvMD+o+^Mv+f1|9I^KZVKfLDNh^>D+^qx>=+4OY2IVKP+vqrk^K^>VM2+2R^My+$+VKE+=R^q$+4u99Iv>CK^K^qVMx>G+$R^KZVKfLDNh^M9+T=T>fdSsLg^>ZoET>HksZ^K8kxZekogy+CR^MRxMmdU|+^>Rx>mdYNt^Ry+RvRL^ZxkVqKvgy+sZ^MskxqO^MR^>VRxqF^+^KD+xZxKG+HZ^KuVKG|T>G+HZ^Ry+8RxZG+HZ^gLVMHkvg^g^M^KskxRmAoVg^Kz+GZvMZ^K4AGx7vZD+VZ^Rz+sZvMu^KH|T>z+sZvRy+2R^Mz+sZvdL^ZCKVMxgvg^Rxk^qBZ2Vg^Rp^RVKE+Cg^KoK^KskxMmdU|+^>z+CRvMZ^K472Nhv>$+4AjSOx>A^>4OY81xq|+lNT>4qrsLRvMgXSX>GkYgxKHkDg^M8k9gekNgy+Dg^KvkxKv>|+4APyIxMvMu^KV$X>z+Vqv>Z^M4ZDDuvqr+g^RixZ^k^RR^ZqxMvq^Rp^+VK2+Eg^Ky+CRV>C+mAGSO^RRxRmO=81^ZRx>vg^qZ^qBq9Nt^>r+OVRIvdxk^RRVgE+lg^Zxk^RZxZG+Dg^dZVdft=81^Ar+dxgo+4JXluBK9Ug^uxk^gqxu|+=sT>4qrsLgvAgXvX>GkrgxKHkGg^MGkcgx>UkHgy+sgVK4mqSsL^KVMRv>CHT>y+SgVKVkvMy+lg^Mz+ygvMZ^M^KV>2+Cd^>$+4dT9gv>Z^M4AXz1vRr+g^>z+GgvZxk^>RVRKv>^q^>pV+xKI^KCeX>y+xgxKA^K4dUGtxZc+g^RxkVRKmR=x7RVKxZvZp^+^qNkfu=x7^q^ZfxZvqgDvX>y+xgxq=k^q^R|+BZCrR^R^ZuVZSoX>G+Hg^RzkBKlx7^R^gpVgxqO$vX>p4>NsLvRp^q^>eKx>^k^gg^uqxdvO^gp^+VZjkvZu^ZRVqx>vZp^+^KeKxKG+Dg^K$kVKxRz+47UXuVRxZI^ZVNX>LVK2+Ng^Ky+CRVZC+mAGSO^gRxgmO=81^RRxZvZ^>Z^>Bq9Nt^Zr+OVgIvZxk^gRVRE+lg^Rxk^gZxR|+=UX>4qrsLKvOg$NX>8kUd2+Xd^ky+DdVME+Xd^qZ^qBZS^A^KY+^KZxqA^M^q^>vkx>v>Nk4AxzuxMvMu^KCEX>CkxqA^q4urEgxdA^d4d2Ntxqc+g^Zy+UdxR^k^ZR^RqxdvR^Zp^+V>2+Xd^>Z^>BqCrg^qr+gVRE+DR^gy+DdVAE+Ng^uCK^gVAxuvgxk^RRVZKvq^q^RpV+xMF^M^Ky+UgxMA^M4uTGtxqc+u^RLVZjkvZR^Zy+UdxZ^k^Rg^ZqxMvR^Rp^+VKVkvMxk^guVAKvq^Z^gpV+xK2K^Ky+CRVRC+mAGSO^ZRxZmO=81^ORxRv7^gZ^gBq9Nt^Rr+OVZIvAxk^ZRVuE+lg^uxk^ZZxuG+Dg^OxkVZRv7R^g^RVZJvk^KoK^KskxMvR^Ky+o+VMMv>4uXGtV>Q+I^qL^Zskxqu^Zxk^qZxku^M^>^qfx+vMoK^K9+rG=>fdSsLg^KU+<vMgE^X>GkTdxK=+4AGSOVKCkvM^>Nk47zKvq^Ku^K8HX>E+Nd^q$+4uySOvqZ^>4Oy|Rv>Z^q^MVRXk9+^R^MpVMxKi^KlPX>y+TdxMA^M41Hokx>SkY+^>^qfxqvMu^KX^X>v+fIQ9g^KZVKf7GCh^>r+ZxqG+Xd^RxkVqKvZR^K^>VqJvk^MoK^MckY+$D|>4qSsLdxRX+C+^Rgc2|>ykVd^KGkHdVMC+mACDI^KRxKmheq^>dx>Nv|>$+4A^UIx>A^>4hCqxqA^q4dyjdx>8k^gR^qV>xgF^+^MpVMxKOy8|>9+C$|>BkssLu^ZgT8|>yk=u^KGk2uVME+=u^Ky+2uVMjkvM4IluVME+=u^KoK^KfxZvMD+2+^Kz+o+v>y+sd^>z+GdvZCK^M^>VRxK2K^KgHU|>jk$uvM$+4uE9gxMA^M4OQz1x>c+g^qy+YuxR^k^qR^RqxMvq^qp^+VKRvMsU|>y+JVKE+lu^>=+^KV>xq2K^qskgeEE>ykEu^KGkXuVMekyu8kNu8kzueksu8kGu8kcuC+mAGSO^KvkxKv>Nk4ISKxMvMu^KET|>z+=uvq$+4AjSOxqA^q47j|RxRA^>^R^MfxMvM7^KXX|>z+=uvqZ^>4Icokv>p^M^KU+luvMy+Eu^MSkxMvMu^K$eE>v+fIQ9g^MZVMftNz1^>r+ZxZG+lu^qxkVZKvRR^M^>VZJvk^K7^KvN|>E+L^>y+luVR$+vq^R^qD+|uxqF^q^K7VKyy|>G+Xu^>uV>VN|>G+lu^qpVqx>I^>Ny|>y+9uxRA^R4AQ^Axq=k^q^R|+BZCrR^R^qpVqx>F^>^KuVKG^|>G+Eu^RuVRGr|>G+Eu^KD+9uxKF^K^RD+QuK|+yS|>4qrsLKvqgsS|>Tk|ASkX+yu^>S+VqE+Gu^>xk^qBK=SO^>9+=G|>BkssLR^Kg8P|>UkGAy+Nu^Kz+=uv>Z^M4uX^AvZPk^K^RVMRv>Ns|>S+^MSkKvMxk^M4gSPdvMp^M^>ZVH|>s+^KjkgVMjkvM4dsPdVME+Eu^My+NuVZJvg^R2k^ZZxZX+Nu^ZZVMxRvRxk^K4dx1vRp^K^>eKx>^k^q4RH9AxK|+$V|>4qrsL>vqgsV|>TkcAykCO^Ky+HAVqlkvRskxk^qBKQy1^>y+yuVKjkvR4RNDtVKVkvR$+4IVv+x>c+g^qxkVqKmvMXQArkV>xqvMEk^KjkqxKX+Gu^KjkZxKX+su^KS+V>Y+SoE>4qSsLqxqON$E>TkCOz+luv>Z^M4gvNtvqr+g^Rz+=uvRxk^RRVqKv>^>^RpV+xKX+Eu^Kskskx>mR$SO^qD+l8E>mqSsLRVq>==E>Tk$O8k8OE+yu^MZ^MBqXl+^>ek^qqxMvq^qp^+VK2+DO^Ky+2OV>Mvq4dsPdVK2+Hu^Ky+2OV>Vkvqxk^>4qc9AvR9+oUE>4>NsLO^qg2DE>lk2OHklO^KjkqxKX+su^Ky+9OxKX+Su^Kskskx>mRTy1^qD+C9E>mqSsLRVK>S|E>TkEOB9XE>PkEXE>y+Gu^KOxKCTE>y+Eu^MRxMmAy97^>X+v+vq^Mp^MVKdvMlXE>y+EuV>Mvq4Ay97VdP+vZR^>^dVRJvk^Mp^MVKa9+eKY+y+cuxKI^KD|E>y+ruxKyk^KokB2+Sk^k^>4RQDtxK2K^>gNxE>jkSOvMGkHO^MjksOvqGkC7^qjkVOvZGk$7^Zjko7vd8k=78kU7aGyE>y+sO^Mz+C7vqZ^M^>VqQ+O^>y+27VRjkvqR^RRVMxqvqp^+^KU+$7vMy+=7^KRxKmu^1^>U+27vqgoSE>B2+^+vM^+GkRVKE+o7^>y+RVq$+vq^q^KpD+x>2K^>BY+z+$7vqZ^>4gSPdvMu^KHjE>z+GOvgy+D7^KY+xZvM^Rp^RVq>yxE>d^RZVRfty|t^Zr+ZxdG+D7^uxkVdKvAR^R^ZVdJvk^>Z^>BqGcA^Zr+uVgE+$7^dxk^gqxdG+o7^dxkVg>vuR^>^ZVgJvk^Kp^KVqSk|+V8l>4qrsLKvRD+o+^qD+GUU>mqSsLuV>2+=+^>9+=C|>BkssLu^KD+8+xK|+CVE>4qrsLKvqg=U8dTkQ7ekG78kS78kj7ekV78kH78kP7ek$I8koI8kvIekDI8k=I8kUIekEI8kXI8k|IekSI8kyI8krIekHI9+2NQ>4>NsLu^KD+SIVKskmRGcu4qycuvMD+y7^Kr+xKX+S7^Ky+z7xMI^MNvQ>$+BRNrg^K$k^KVR9kvZ4IjKV>Jvq^Mu^McYQ>N+vM$+4uTrgx>A^>4uc1xM^k^K4gxXRxM=+4uXrgVqMvR4teXIVMjkvM4gxTuVMC+muXrg^>Rx>mglxO^ZCkxdu^>^Z^dfx+v>xk^K4ZSvhv>D+S7^Kv+f1=^d^KZVKfiXlO^MD+j7xMs+^Kxk^KB>r9d47PT7skxKmgoHg2PUKU+S7vMS+^KD+x7xK8k^MD+V7VM2+$I4TMSykU+V7mqSsLy+c7xKA^K4geHgxMX+$I^My+j7xqA^q4LyPZxMc+g^RxkVRKmgopRVqxMvZp^+^KU+oIvMy+2I^K5fu9DO4AeyZxMYK^M4RHRxRYK^R4g$zdxMYK^M4ZG|dxZYK^Z4iTYgxMYK^M4ZoMxRYK^R4RDDOxMYK^M4RP8hxgYK^g4AeyZxRYK^R4R|2+xZ^k^K4IjouxZOHjzqy+yIVMMv>4dycAV>Q+O^q9+EzQ>BkssLg^ggPSzqyk=1^Ky+EIV>Mvq4gUDZVRQ+I^Ky+$1VZjkvMR^Zr+e+xq|+yrQ>4qrsL>vgg$PUKGkU1xKUkl18kX1$kl1UkN18ky1z+21vMZ^K4ZHohvqD+l1^>z+21v>Z^M4ZV9LvMD+X1^Kz+21v>Z^M4ZlsgvqD+E1^>z+21vMZ^K4ZYDuv>D+N1^Mz+21vMZ^K4ZXvZv>D+y1^MgxMc+g^>9+exQ>fdSsLg^qZlHUKHks1^K8kx1ekot9+o=UK4>NsLO^KD+H1VKE+Ct^My+N1V>$+v>^>^KD+P1xK7^>Z^>B>$oO^qr+gVRQ+l+^Zy+y1VdQ+L^A9+GVQ>BkssLg^ug9CN>ykDt^Ky+2tVKMvM4gSskVMMv>47XlOVKMvM4JqVMVkv>xk^ARVuQ+t^Oy+l1Vujkv7R^uy+T1xI^k^Og^Iz+l1vIxk^OuV7jkvOg^OxkVARy+y+V1^uskxAt^uR9+VdxAF^+^gxkVZKvdy+y1^uy+uvu9+S$N>4>NsLt^AgS2N>jk=tvMGkXt^Mjkltvqy+Et^KRxKmR$Eu^MRxMmg=E1^>Rx>mgy=7^KeKxK^k^dR^Ay+gvOy+l1^7skxAu^7y+X1V1jkvOg^1y+|1xO^k^Au^OskxdO^Axk^ddDkG+V1^AxkVdgvOR9+^uVdJvk^gxk^ZZxgG+y1^dr+7xu|+C9N>4qrsLgvOg2EN>GkrtxKHkGt^MGkctx>UkHty+stVKMvM4RGU1VMMv>4tT|RVRQ+O^qxk^qqf5Yr1R^MVRxqF^+^>D+xtx>zk^>Y+^qdxq2|N>y+Ht^KfY+vZ5^K^RV>Jvq^qu^qj|N>E+Ci^Kp^KV>>2EN>p4ZGVkx>2K^>xk^uqxAc+O^Ay+91xO^k^AR^Oz+D1v7xk^AgVOE+y1^Oxk^AdxO^k^ug^AskxuI2My+V1VAjkvAO^ARD+xdvAp^+^gskxZI^gy+y1VdQ+L^u9+EyN>BkssLg^AgUsN>ykDi^K8k=iU+$imLoQhy+8ixKA^K4gYE1xMA^M47TlOxKA^K4dsmxMI^MCsN>ZBkssL4AECAVRQ+O^My+2iVqMvR4g=E1V>Mvq47XlOVZMvg4dxmV>Mvq4ioTuVqjkv>R^qRBkssL^R^MpV+xKX+=i^Ky+YixM2K^Mxk^uqxAc+O^Ly+91xA^k^LR^Az+D1vOxk^LgVAE+y1^Axk^LdxA^k^ug^LskxuIX>y+V1VAjkvAO^ARD+xdvAp^+^gskxZt^gy+y1VgQ+L^u9+yVN>BkssLO^AgQoz>ykyi^KGkNiVMykGi^>8kSiz+EivqZ^>4qjDAvMZ^K4ZsD+v>D+Si^Mz+NivqZ^>4tTSdv>r+g^qz+NivZZ^R4$+D$+vgxk^qRVZKvq^M^qpV+xK2K^Kxk^uqxAc+O^Oy+91xA^k^OR^Az+D1vIxk^OgV7E+y1^Axk^OdxA^k^ug^OskxuIy>y+V1VAjkvAO^ARD+xgvAp^+^dskxZL^dy+y1VuQ+L^A9+H2z>BkssLO^Ogelz>ykCL^KGkViVMyk$L^>8koLz+HivqZ^>4qyU1v>Z^M41U|Rvqr+g^qskxqu4wSGtqxMvq^qp^+VK2+2L^K|k^K2+xqI^qVDz>y+eLx>F9+^K5V>xKvZp^R^qdxqG9z>y+oL^>fx>vMgV9z>pBMPVk^KoK^KskxAu^Or+OVOE+E1^dxk^OqxdG+X1^dxkVO>vuy+E1^dskxOI^dxk^AZxO^k^AuXqz+s1v7xk^AOVOK|+^u^ApV+xg^k^Zt^gz+E1vAr+I^dD+=Ez>mqSsLOVA>HNz>GklL^KjkDLv>GkEL^>z+lLv>Z^M4qe87vMZ^K4ZCj+v>Z^M4uX^AvM7^KyNz>fKvMoK^KxkVdKvOr+O^Az+=1v7xk^ARVOE+N1^Oxk^AZxOG+E1^OxkVARv7xk^dgVAjkvuuEqy+P1xO^k^dO^OqY+vA^dp^+VgjkvgL^gy+z1xOc+I^d9+ejz>fdSsLO^7ZCxz>HkGL^KGkcLxMHkHL^>8kPLE+Ch^KZ^KBK=SO^MZ^MBZNTu^KD+VLVK9kvMY+^>uV>Csz>G+VL^MpD+xgC+^M^g^RfxRvqu^>ssz>z+sLvqp^>^KZHsz>FR^KoKVKjkvuR^7r+AxuG+l1^7xkVuKvIy+X1^AskxuO^Ay+E1V7jkvAu^7xkVd>vAxk^dueRE+ot^uxk^dAxuu9+^O^dfx+vdxk^ZJVgE+G1^gr+IVAY+N^z>4qSsLqxuOSly>8k=h$k2h=+4dTjtV>Mvq4tQsuVKP+vqrk^K^>VM2+lh^Mr+OV>jkvqR4BPyOjkvqg4bj=Ljkvqu47oDu2+Xh^>$+4uHUIvRZ^q4AN<vZr+g^Zz+$hvOZ^A4h=9hvuek^uRVAxdvAp^+^gskxZu^gR^qVRxZF^+^>ZV>f1cV+^Zr+Zxg|+=2y>4qrsL>vAgy=y>Gk|hxKG+Dh^KZVKfi8C+^>r+ZxRG+Eh^ZZVZKvRxk^RRVqKvM^>^RpV+xMxk^M^>oKV>jkvdR^uRV>xZvdp^+^MRxMmgevu^Ry+>vg9+XDy>4>NsLO^ggH9y>jkNhvMy+Sh^MRxMm7eQg^RCkx>u^M^R^>fx+vMoK^KxkVZKvdR^M^RVZJvk^KoK^KskxAu^ur+OV7E+E1^uxk^7qxuG+X1^uxkV7>vAy+E1^uskx7I^uxk^AZx7^k^AuDRz+s1v7xk^AOVOK|+^g^ApV+xd^k^Za^dz+E1vAr+I^gD+HEy>mqSsLgVA>ozy>GkHh^Kz+GhvMZ^K4Z$E1v>Z^M4i8xZvMu^KyNy>f>v>gsNy>pqxM2K^Mxk^gqxAc+O^Ay+91xO^k^AR^Oz+D1v7xk^AgVOE+y1^Oxk^AdxO^k^gg^AskxgIDuy+V1VAjkvdO^ARD+xuvdp^+^dskxZF^dy+y1VdQ+L^O9+=jy>BkssLu^ug8sy>yk=J^KGk2JVMeklJy+2J^KRxKmgrSO^MU+$Jv>y+=J^>y+RvRxk^qRBRzEdxk^qgBqS4CK^>4p$xkvR^MoK^MskxOu^ur+OVuE+E1^Axk^uqxAG+X1^AxkVu>vOy+E1^AskxuI^Axk^OZxu^k^OuHAz+s1vAxk^OOVuK|+^d^OpV+xg^k^ZB^gz+E1vdr+I^uD+lVy>mqSsLuVA>Ner>GkXJ^KjklJv>8kNJy+|JxKA^K4gySOxMX+NJ^My+QJx>c+u^KxkVKKm72c+xkVK>md|XgCKV>fayyt^K^MeKxM^k^uR^Ay+gvOy+l1^7skxAu^7y+X1VOjkvOg^Oy+|1xO^k^Au^OskxuO^Axk^udSOG+V1^AxkVugvOR9+^gVuJvk^dxk^Z4xdG+y1^dr+7xu|+G8r>4qrsL>vOgDQr>GkjJxKUksJ8kHJv+f1CDI^qZVqf0YTI^Kr+dxMG+GJ^RZVRfOSsk^ZZVZfL8eh^uxkVMKvAxk^MgBgsCKR^q^KVMJvk^>D+HJV>S+vqY+^K7VKlDr>G+HJ^MpD+x>Tk^M^>^RfxRvM7^KHlr>z+GJv>Z^M4ZDDuvqD+HJ^>c+x>9+^M7^Mrlr>E+C3^>p9+VR8kvq^R^ZpVZxMF^M^KuVKXTr>F9+^MpVMxROHXr>y+HJVMMv>47eQgV>P+vgR^M^>VZJvk^Kp^KVR2+VJ^R|k^R2+xKI^KDEr>y+cJxZF9+^>5VZx>vdp^g^KdxK$Qr>y+sJ^RfxRvqg2Qr>p2+x>2K^>xk^uqxAc+O^Ay+91x7^k^AR^7z+D1v7xk^AgVOE+y1^Oxk^AdxO^k^ug^AskxuIs7y+V1VOjkvAO^ORD+xdvAp^+^gskxZ5^gy+y1VdQ+L^u9+yrr>BkssLR^AgPrr>E+=I^MoK^Mskxuu^Ar+OVAE+E1^Oxk^AqxOG+X1^OxkVA>v7y+E1^IskxAI^Ixk^uZxA^k^uuDIz+s1vOxk^uOVAK|+^d^upV+xg^k^Z<^gz+E1vur+I^gD+$sr>mqSsLgVO>CHr>GkN3^Kz+X3vMZ^K4Z$E1v>Z^M47eehvMZ^K47YN7v>oK^MxkVgKv7r+O^Az+=1v7xk^ARVOE+N1^7xk^AZx7G+E1^OxkVARv7xk^ggVAjkvdulIy+P1xA^k^gO^AqY+vu^gp^+Vujkvg5^uy+z1xdc+I^A9+8CS>fdSsLg^OZ$US>HkG3^K8kc3ekCay+G3^KRxKmgSsk^MRxMmt9xI^KU+G3vMs+^KY+V>dvqCvS>y+H3VKJ|+^MUk^KVMxqF^q^>7V>=8S>G+H3^KZVKf1rw^qD+x3xqV+^qY+^KOxKD8S>y+H3^RfY+v>Uk^R^MVqJvR^Kp^KV>Rvqo2S>p9+V>Jvq^Kgs2S>z+G3v>Z^M4LHTtvqp^>^KU+S3vM|k^KY+VMRv>==S>y+s3VqJ|+^K5^qVKxRF^R^MuVMs=S>G+s3^MpVMxKO$US>pY+VKVkvMxk^ARVOQ+t^uy+l1VOjkvAR^Oy+T1xI^k^ug^Iz+l1v7xk^uuVO>NP2Kg2YsKgUYsK2+ClZRD+y9ZqE+G9Z^KV+^KRsGGGjmvcGGGjK^My+s9ZVKrkv>^K^>uV>GHS>G+y9Z^KD+P9ZxKG+G9Z^My+P9Zx>YK^>R^qRxMvR^Ky+G9ZVME+olZ^ZvK^ZZxqA^M^q^>Tkx>B^qe+^KVqxMX+ClZ^My+j9ZxKG+V9Z^>vKV>RvRZ^K^qVME+H9Z^Ky+V9ZV>^kvqO^ZZVKxZvRXk^qaVK~v>^K^qD+elZxqG+ClZ^Ky+89Zx>1^K^>^Rz+V9ZvMy+29Z^MuxKv>^qXk^qnxK8+^R^K^MU+ClZv>y+S9Z^Kz+G9ZvqZ^K^>VME+=lZ^Ke+^MVKx>ok^>ZVGGGjmVGGGSGKxKX+2lZ^Ky+8lZxKNk^K<^Rz+olZvMz+^K2+Vql+vZ^q^KD+8lZxKG+2lZ^KV+VKsGGKv>D+=lZ^Mz+olZvMz+^KC+VM2+XlZ^My+S9ZVKE+ClZ^Ry+=lZV>E+=9Z^MA^>VMxqG+DlZ^My+v9Zx>1^M^>^ZTkxZ$+^Me+^qVMx>ok^>ZVGGGjmVGGGSGKxq^k^K^R^qz+G9Zv>vK^MgVKs+vMO^MD+x9ZxMG+y9Z^Mp7xKDk^M^K^KU+E9ZvMgG9S>y+r9ZxKA^KR^MTkxMO^>y+S9ZVKMvMR^Mz+VMs+vZE+^>^RVME+s9Z^KZ^KZx>Nk^>J^qz+N9ZvqZ^>gVR|+vZN+^KE+VqxKvqe+^M^>VKE+s9Z^MZ^Mdx>Nk^>6^Mz+N9ZvqZ^>uVq|+vR=+^RE+VMxRvqe+^K^>VqE+s9Z^MZ^MAx>Nk^>$+^Kz+N9ZvqZ^>OVM|+v>5^>E+VKx>vZe+^q^RVKs+vMZVGGGjm^GGGSGKVM2+S9Z^My+N9ZVKE+$9Z^MZ^MBZS^A^Ze+^KVZx>ok^>ZVGGGjmVGGGSGKxKX+N9Z^Ky+^DZxKA^K4AQ^AxM9+^MI^>U+=lZvqy+y9Z^Mz+=lZvMck^M^KVqRvRErj>y+y9ZVK2+NlZ^Ky+E9ZVKE+NlZ^MvK^MqxqA^K^q^>z+l9ZvMy+XlZ^qoKxqO^ZZ^KVZxMNk^Ma^qC+x>vR^KD+ElZVKE+y9Z^Ky+XlZVM^kv>u^>ZVKx>vZy+E9Z^Kz+DlZvqvK^>OVZMvM^Z^MXkVMLvqe+^R^>VM2+SlZ^My+ElZVKE+l9Z^MA^KVMx>G+NlZ^Ky+Y9ZxM1^K^M^ZTkxZ$+^Ke+^>VKxMX+ylZ^My+Q9ZxKG+ylZ^>e+VKx>v>V+^MZPGGGjmxGGGSGKvMD+N9Z^Kz+X9ZvqXk^>o+VKE+S9Z^Mz+^M~x>y+^K^>^MU+X9Zv>y+N9Z^qP+xqocGK^Ky+D9ZVMZvM^M^>y+Q9Zxqj+^qC+^Kz+29Zv>A^K^MVRDkvZC+^Me+V>xMvMV+^KZPGGGjmxGGGSGKv>D+N9Z^Mz+E9ZvMpI^M8kxKv>^MD+y9ZVM>lYj>y+y9Z^Kz+l9Zv>Z^M4uX^AvZl+^K^RVMRv>yPj>y+E9ZVKE+G9Z^MZ^KVMxqX+SlZ^qy+Q9ZxMG+SlZ^Ky+99Zx>1^K^>^qC+xMvR^KD+N9ZVKE+S9Z^MXk^M4xKG+N9Z^Mz+VM2+vRE+^K^qV>2+S9Z^>y+N9ZV>s+vqVGGK^qy+v9ZxM1^q^M^Kz+X9Zv>z+^MC+V>E+=9Z^MA^>VMxZNk^ZC+^qC+xKvR^MV+^MRsGGGjmvcGGSGK^KD+N9ZVKE+G9Z^>2k^>Zx>X+y9Z^>g|rj>E+S9Z^Ky+N9ZVM|+v>w^RQ+VKxRv>D+N9Z^Mz+X9ZvqV+^>VGGKVKE+D9Z^MA^KVMx>ok^>ZVGGGjmVGGGSGKxKG+N9Z^Rz+VR5vqy+29Z^Rux>vZ^qXk^qnx>8+^K^>^MU+X9Zv>y+N9Z^Mz+X9ZvZz+^R<VKT+v>^K^>D+Q9Zx>G+N9Z^gV+VgsGGKvMy+=9Z^MuxKv>^RV+^RRsGGGjmvcGGSGK^Ky+N9ZVM|+v>C+^>y+Y9ZxM1^>^M^qTkxq$+^Me+^KVMxZX+N9Z^Zy+Q9ZxKG+N9Z^Mz+VM5vRQ+^K^qVM2+S9Z^My+N9ZVMAv>R^KuVKsYG>G+N9Z^qvKVqMvcGGjmq^KpVKxMOD=G>y+N9ZVKJvM^MoK^MZN$c>Hk2TZ^K8kYTZekXTZ8klTZ8kTTZekyTZek^KD+YTZxKX+DTZRy+8TZxKA^K4AQ^Ax>X+lTZ^>y+UTZxKG+lTZ^>l+VKx>v>u^Mlvc>z+oTZvRZ^q4Itv>r+g^>z+2TZvZxk^>RVRKvR^M^>pV+xKX+XTZ^Ky+TTZxKh^KCZ^MdxMG|G>y+=TZ^MRxMmdHyg^>y+>vZy+XTZ^gskxRu^gR^MV>xRF^+^Kgzoc>E+NTZ^K1^K^GKx>I^>XzG>y+YTZx>A^>4dxygxRc+u^gy+TTZxZ5^ZL^dxkHuvu^Zxk^gqxZG+XTZ^dV+VdsKvgHkCZ^ZVdjkvdg^dRV>xRvdp^+^KZEoc>G+XTZ^K1VKHG$KvZ7^RSyG>z+DTZvgP+^ZCc=KVKJvM^Ru^RYcG>E+lTZ^KZ^KBqCrg^gr+OVdE+NTZ^u6^uWxRCKC7^R^uskxdu^uy+XTZVRBvZL^OV+VOsKvZHkCZ^RVujkvug^uy+TTZxuok^uVK^RxkHRvZ^uxk^ddxuu^K^g^dfx+vggyoc>y+TTZxRok^RVG+^ZTkxZ6^Ry+2TZVdMvu41JVgQ+O^uy+DTZVAokvOg^AD+UTZxA^k^uR^Aqxdvd^up^+VZs+vgVG+^gE+VRxgvgzkCcGK^ZVR2+yTZ^Ry+=TZVRMvZ4dHygVgQ+L^uy+ETZVABvO$+^OV+VOtvOHkCI^AV7jkvAR^7y+|TZxA5^A6^OP+xOoM^AHkCZVAxO^k^ug^Oz+lTZvO6^ALV7s+vIVK^AHk^RxAv1xk^uuVIE+yTZ^AV+^APKxOCKCZ^O^Askxut^AR^RVgxuF^+^Zy+UTZxZDk^Zg^ZU+2TZvggyDG>$+BAYE+^gr+gVuE+lTZ^Axk^uqxAck^g^u^ZeKxZX+$UZ^K9+T8c>fdSsLu^KZoEc>QkVTZGkCXZVKyk2XZ^M8k$XZ$koXZX+$XZ4qrsL2+DXZRy+2XZVRE+$XZ^KZ^KBZS^A^Ml+^RVMxKI^KD|c>y+vXZxK=+4Aj=gV>Mvq4iGlOVRQ+O^qy+CXZVdMvu41JVAQ+O^Oy+2XZVgjkv7R^gRVdxAv7p^+^Zz+VTZvOZ^A4ItvAr+g^7z+oXZv7y+oXZ^1Rx1mAN^A^I^+xOv1^1xk^7qx1u^A^u^7fx+vdQ+^Z^gVOjkvRR^ORV>xRvRp^+^M8kxKv>^MD+$XZVME+DXZ^Kp^KVqokvMg^KD+8XZxKOS2c>$+4gQrdv>y+$XZ^RY+xMvZ^KoK^KU+$UZvM9+VEc>4>NsLI^Kgozc>lk=XZHkXXZ^KGk|XZxMG+XXZ^My+|XZxK$k^M^K^qz+lXZvMe+^q^KVME+yXZ^KCk^MVKxq2K^qD+DUZVKY+Vzc>4qSsLZxKO$|s>TkyXZjkNXZvM8kGXZ8kcXZekC|ZD+GXZ4NkcrLG+GXZ^KvKVKfiey+^qD+8UZxqs+^Kr+FV>jkvqR4Oestjkvqg4AHSZjkvqu4dz9OjkvqO4OPVIjkvqI4OxvIjkvqt4glldjkvqL4ZTcAjkvqJ4g$zOjkvqa4uDU+jkvqp4g$zOjkvqB4A^eZjkvM4RC8kV>Q+a^qxk^qqfi=0xk^qZfICS1xk^qdfLHodxk^qAfAP~xk^q7fOxQdxk^q1fIo^txk^KBK=u^qr+FVMjkv>R4gDSOjkv>g4AS=gjkv>u4AUpjkv>O4dPQRjkv>I4gvQLjkv>t4OVQ+jkv>L4g$Wjkv>J4gVsZjkv>a4uvcgjkv>p4u|sdjkv>B4uvcRjkvM4RSRVM2+VXZ^Ky+$UZVME+2UZ^>y+GXZVqHkvq^qC^o+^RY+xMvZ^KD+GXZVKE+sXZ^MJ^MVKMvM4AN^AV>o+vqR^R7VRoYs>FR^RZVKxRv>D+HXZ^Mz+NXZvRy+HXZ^gRxqvd^Zy+GXZVuokvg^u^uxkVqxgvA2k^RgVRpvZ^>^g7Vgy$s>G+sXZ^KZVKKv>y+DUZ^Kz+NXZvgZ^ZRVRE+VXZ^ZZ^ZqxgA^g4AQ^Axd$K^K^R^dVqMv>^q^>y+cXZxqA^qg^Kz+2UZvRy+SXZ^MRxMO^Ay+sXZVMMv>g^OZVOf1N^A^MCKVqxAv>^RZ^KVRxZ8+^>^Z^Kz+SXZv>Z^MuV>E+XUZ^Ry+SXZVZMvgu^gy+cXZxZA^Zu^dRxdmAN^A^Z^kxRvd^Z^qZV>xqv>e+^K^MV>VkvqD+lUZ^KU+DUZmj+SxI9+8Es>fdSsLu^MZGss>Qko|ZGk$|ZVKykD|Z^M8k=|Z$k2|ZUkl|Z8kX|Zr+xKX+=|Z^KD+U|ZKX+l|Z4qrsLE+=|Z^>J^>VKMvM4AN^AVMo+v>R^q7Vq2cs>FR^qZVKxqvqD+X|Z^>z+2|ZvIy+$UZ^Rz+C|ZvAy+X|Z^ARxuvO^gZ^gBd8Qg^Aek^IqxgvO^Ip^+Vd$+vZ^d^Z2kV7xZvgD+D|Z^Zz+=|ZvZy+$|Z^dz+D|ZvOZ^d^AVuMvA47eQgVAP+vuR^u^AVdJvk^Z2k^RVZxZX+l|Z^Z2kVq>vRF^q^MVRdvZlzs>y+D|ZVME+=UZ^qy+l|ZVZ$+vR^Z^K2kVMxKvMD+D|Z^Kz+2|ZvMoK^KD+|UZxMG+oUZ^>y+TUZxMl+^>^M^KU+DUZvMD+NUZ4s+|POX+yUZ4u2La2Vs>y+$I^>Rx>m7eQg^qCkxMu^>^q^Mfx+vMD+SUZ^KZXVs>6=Dx>vk^MV+yku^MB=Dx>y+JvM$+4I$ehxqA^q4Ivy1xM^k^KR^Mv+fL8eh^MZVMfiyGu^qxkVK>vR$+4I$ehxMA^M47svdxR^k^Ku^Rv+f1=^d^MZVMf1ljA^RZVRf19N1^MxkVKgv>$+4AY^dxqA^q4A9jAxMA^M4uoxkxR^k^KI^Rv+f1=^d^MZVMfJQ2+^qxkVKOvR$+4AY^dxMA^M41U|kxq^k^KL^qz+DUZvZxk^KJVRE+GUZ^Mxk^K3xMX+GUZ^Ky+|UZxKG+GUZ^MCKVKxMsR^qD+sUZVqE+lUZ^My+sUZVqMvR47eQgVgP+vgR^q^gVZJvk^Ry+NUZVgHkv>^R^g^KU+SUZvMgGDx>B2+^+vg^+GkRVZa9+skek^>qY+vM^>p^+VMY+2lx>4qSsLqxqOCX2q8kG|Z$kS|ZUkH|Z8kV|Z$kH|ZUkoEZ8k$EZ$koEZUk=EZ8kDEZ$k=EZUkXEZ9+DzH>BkssLu^qD+eEZxq|+N|x>4qrsL>v>D+$EZ^MD+l22qmqSsLgVK2+DEZ^KgoEH>jkNEZvM8kGEZ8kcEZekCQZ8kVEZ8k^EZMvK4AN^AV>8+vqg^MuVMoNx>A^kg^qv+fLjK^K5VqxKvqp^>^MdxMozx>Z^kgVMJv>^Kg$zx>f3vMD+GEZ^Kz+=Iv>Z^M47jDZvRr+g^>z+NEZvZxk^>RVRKv>^q^>pV+xKX+sEZ^K$+BuS^k^Oy+sEZVA$+v7^A^uZVuft=81^Ar+dxOo+4ge=ZBK9Ug^7xk^Oqx7^k^Og4q|ygu^u^A^Ofx+vuZ^d4A$81vIr+u^A~fOPUt4R2UgxO^k^AR^OskxAO4R9aqxdvI^Ap^+VgMvd4O=81VAQ+I^Ow4ZSDtmRYUg^7skxOu^7xk^OZfuvuR^gVAxOF^+^ZZVZft=81^Or+dxIo+4gePkBK9Ug^7xk^Iqx7^k^Ig4qcNOu^Z^O^Ifx+vqZ^>4A$81v7r+u^A~fOTs+4R2Ugx7^k^AR^7skxAO4Rso7qx>v7^Ap^+VRMvZ4O=81VAQ+I^7w4ZVRmRYUg^Iskx7u^Ixk^7ZfuT$+R^RVAx7F^+^qZVqft=81^Ar+dxOo+4g|DgBK9Ug^Ixk^OqxI^k^Og4qcRu^q^A^Ofx+vMD+sEZ^Kz+V|ZvOy+sEZ^O5fIG^A4d^y7x7$K^A^O^7VK2+CQZ^K$+4gQrdvMy+HEZ^OY+xKv7^AD+VEZVAC+mhDUO^KCkxAck^K^A^IU+HEZv1y+CQZ^7Rx7mdx$h^Oy+gvOxk^ARBqT$hxk^AgB5sehy+GEZ^IskxAI^IR^7VOxAF^+^Ky+^EZxKA^K43l~xAc+u^IxkVIKmiVXkxkVI>m~=|gRVKxAv1p^+^Oz+HEZv7Z^O4gXykv1r+g^1z+=IvfZ^a47jDZvLr+g^Lr+xpG+VEZ^fxkVpf7cQ+^fxkVLKvbR^a^iVLJvk^txk^1qxtu^O^I^1fx+vOskS+^KU+y|ZvMS+^RxkVRfOz2h4gjyOjkvZ4gjTuB>NSOxk^R4ZrcumgGcAxkVRfOy8k4gUrujkvZ4gxeZB>z4D+s|Z^RZ=PH>Hk2QZ^KGkYQZxMUkDQZ8klQZU+2QZmqSsLD+9QZKG+lQZ^My+8QZxKA^K4AQ^Ax>E+^M^>^KdxK2PH>y+DQZ^Kv+f1j=g^>ZV>f3GlO^qr+ZxgG+2QZ^dZVdfhJ^Zr+ZxuG+lQZ^OxkVuKv7R^d^ZVuJvk^Ry+=QZVuMvA41JVAQ+O^7y+lQZVOE+lQZ^IZ^IBZS^A^1Ck^OV1xI^k^7R^IqxuvO^7p^+VZT+vZ^Z^7xkVgKvIR^>^qVgJvk^M2k^KVMxMX+DQZ^My+9QZxMF^M^K2kVM>v>D+lQZ^MZDyH>G+DQZ^MoKVMN+vMxk^K4ZNX7muGE7xkVKfOY>4u2Ch2+CEZ^KS+^MskxMmgUz14R29h^k^M4gYzOfAYzIxk^MB>$|t4Z=cOU+s|Zv>S+^M9+8eP>fdSsLR^>ZN9P>QkNQZy+H7VKMvM4g=E1VMC+mIjK^K=kxMvM^>u^>xUP>E+CI^>$+4ODlOv>Z^M4iQPZvgr+g^gskxgu4AoyZqxMvg^gp^+VKjkvq4g=E1VKE+CI^KZ^KB>lE1^qZ^qBRNb^Kxk^KBgD^k4dyDkz+G7vqZ^>4Z$E1vMxk^K4ZezdmiXYg$+BdNlO^>Z^>Bq^m^qZ^qBOVxu^>r+gVdE+CI^RZ^RB>lE1^Zxk^dqxZu^q^>^dfx+vMy+CEZ^KRxKmgC|L^RCkxdu^K^R^dfx+vqy+H7^RRxRmg=E1^>eKx>^k^M4gYE1x>|+ylP>4qrsLKvRg$NP>TkjQZE+CI^KZ^KB>=Pk^q$+47zKvqUk^q^>VKRvMDEP>y+H7VKC+m7XlO^>Rx>mLrPZ^qy+>vgxk^ZRBZYQRR^>^qVZJvk^Mxk^KB>=Pk^My+CEZVKMvM4gC|LVqP+vZR^K^qVRJvk^My+H7VMMv>4g$PkVqVkvRxk^M4ZCPkvR9+ozP>4>NsLu^Kg$oV>lksQZUkCNZ8koNZz+G7v>Z^M4ZvytvM$+4ISKx>Tk^K^>^MdxMXCV>y+CEZ^>Rx>mg$Pk^MCkxRu^>^M^Rfx+vMD+CNZ^Kz+HQZv>Z^M4IQ|uvRr+g^RskxRu4AjNOqxMvR^Rp^+VKdvMNcP>y+CNZVZMvg41r|uVAQ+O^dxk^dqfFraR^ZVAxdF^+^qpVqxKi^KExP>y+^QZx7A^741y|uxRc+g^gxkVgKmur9+RV7xRvdp^+^qfxqvM7^KXPP>z+HQZvRZ^q4IQ|uvdr+g^dskxdu4fzNhqxqvd^dp^+VRJvZ^K7^K9^P>E+$NZ^RZ^RBAc|u^gr+gVujkvAR4IjCuKvZ^g^upV+xdF^d^KD+eNZxKG+H7^gy+eNZxd^k^g4g2ytxdG+CEZ^gZVgfOC|L^dekVuKvd^d^upV+xKG+H7^KZVKfOYyt^AoKVAjkv>4gYytVKY+2vV>4qSsLZxKOsjV>TkENZjkXNZvM8kyNZ8krNZekHNZByyV>S+VKN+vqxk^K4qyU1vqxk^K4dYDhuD+yNZ^Kz+XNZvMJ^K^MRxMmAN^A^>8+x>u^q7^qUEV>Ju^qZ^MVqxKX+SNZ^Ky+QNZxZG+SNZ^RZVZxRvu$k^d^RXkxRmAHzu^ZdxZE=V>gy|V>y+QNZxZG+SNZ^gZVZxgvZh4uTrLxRvdu^gy|V>z+XNZvuy+SNZ^ZRxdvg^RZ^RBRNrL^Z$k^ZVR9kvZ4AHyRVZRvgX9V>gy|V>z+ENZvZZ^R4qyU1vgy+SNZ^Rz+XNZvdy+SNZ^uRxgvA^dZ^dBRNrL^uxk^ZVRxuG+yNZ^ZZVZfI9Dh^Ry+QNZxdG+SNZ^AZVdxAvdZ^g4dDrLvu2k^R^dVdjkvg4u9DhVdokvRg^qFVqx>vZ7^RX2V>z+ENZvMZ^K4dYDhv>P+^M=qVK2+HNZ^KS+^Kz+yNZv>xk^K4A|vuv>y+lI^qRxqmIxDZ^>y+>vuy+yNZ^Rskxdu^RR^qV>xdF^+^MxkVKfOv$I^MxkVKfIQsLboKVK>GjV>BY+vkVKx+HkR^KS+VKjkvM4OzvupE+u^>Z^>Bd8Qg^Zek^gqx>vg^gp^+VMjkvM4gv$IVMjkvM4uQsLJVkvMBY+skskxMmg$1^KD+yGV>mqSsLgVK>2$oqTk2zZGkYzZxKUkDzZ8klzZ$kDzZUkEzZ8kNzZ$kEzZUkSzZ8kGzZ$kSzZUkHzZ8kVzZ$kHzZUkoyZ8k$yZ$koyZUk=yZ8kDyZ$k=yZUkXyZ8kEyZ$kXyZUkyyZ8kSyZ$kyyZUksyZ8kHyZ$ksyZ|+VYeq4qrsL>vMD+SzZ^KU+2zZGkD+lzZZTEDCjmxGGGsbX+XzZZG$=sSmVGGG2C+2+yzZZy9XUjm^GGGNHkU+XzZolXlzC+D+yzZoylNv3z+$zZv>$k^M^>c+x>mAVyI^RdxRNC^>y+SzZ^Mz+$zZvR=+^M^qVKJvM^>gsC^>z+$zZv>p^M^>U+$zZvqy+=zZ^qU+yzZvRy+DzZ^Kz+EzZvqe+^K^>VMs+v>ZVGGGjm^GGGSGKVK2+VzZ^KD+HzZqE+HzZ^KZ^KBZS^A^>P+^>nxKI^Ko$Cqr+7x>G+DzZ^Ky+9zZxM8+^K^M^qz+DzZvMe+^q^KVMs+v>ZVGGGjm^GGGSGKVRjkvqR^Ry+UzZxMG+XzZ^Ke+VMxKvgV+^ZZPGGGjmxGGGSGKvMxk^>gVKE+XzZ^KvK^KqxMok^MZVGGGjmVGGGSGKxK^k^>u^Kz+2zZvMy+lzZ^MzkxKv>^RV+^RRsGGGjmvcGGSGK^Kxk^>AxKX+VzZ^>y+YzZxMX+CyZ^My+^zZxKA^K4AQ^AxM9+^MC+^KU+VzZvMD+$yZRU+GzZuy+HzZ^KP+xKAVGGGjm^GGGGjK^qz+VzZvMck^q^KVMRv>=H^>y+HzZVK2+DyZ^Ky+CyZVME+DyZ^KvK^KqxqA^M^q^>z+HzZvMy+2yZ^RoKxRO^qZ^KVqxMNk^Ma^KC+x>vM^MD+=yZVME+$yZ^My+2yZV>^kvqu^qZVMxqvMy+CyZ^>z+oyZvRvK^qOVRMvq^R^MXkVMLvqe+^K^>VR2+XyZ^Ry+=yZVKE+NzZ^qA^KVqxMG+DyZ^Ky+TzZx>1^K^>^RTkxR$+^Ze+^MVZxKX+lyZ^Ky+PzZxKG+$yZ^>ZVKx>v>y+lyZ^RC+xMvZ^KV+^KRsGGGjmvcGGSGK^MD+XyZVME+NyZ^KXk^Kmx>G+XyZ^Kz+VKo+v>E+^>^MVK2+NyZ^Ky+XyZVKs+vMVGGK^>D+|yZx>G+XyZ^Kz+VK5v>D+NyZ^Mz+szZv>y+$yZ^qz+lyZvMy+lzZ^RuxKvZ^>y+NyZVKE+EzZ^dA^KVdxZNk^ZC+^gC+x>vd^KV+^KRsGGGjmvcGGSGK^>xk^MVqx>G+$yZ^KvKVK>v>V+^MOVK2+=yZ^Ky+HzZVKJL^M2k^KVMxMX+HzZ^Mgv9^>E+oyZ^>Z^>qxqNk^qg^Mz+szZvMZ^KRV>|+vqV+^qE+VMxqvqy+VzZ^qRxqO^KXk^KhxRG+VzZ^KZVK>v>z+^MN+VKl+vZ^K^qe+V>xqvMy+VzZ^MRxMI^>Xk^>WxqG+VzZ^>ZV>RvZz+^R=+VMl+vR^M^>e+VKx>v>y+VzZ^>Rx>t^qXk^qv+xKG+VzZ^>ZV>gvZz+^R5V>l+vM^>^Ze+VMxZvMV+^KZPGGGjmxGGGSGKvZD+szZ^Rz+SzZv>y+=zZ^KRxKmAN^A^>C+xMvq^KV+^KRsGGGjmvcGGSGK^MD+szZVME+lzZ^MZ^MBZS^A^KY+^K7x>X+yyZ^>y+xzZxKG+yyZ^MckVKxMvZu^RHyCqz+GzZvMD+SyZ^Kz+yzZvMy+SyZ^qoKxqu^RZ^KVRxMG+GzZ^Ky+ryZxqYK^qg^RRxKvZ^>Xk^>3xK8+^M^K^>U+yyZvqy+GzZ^Kz+NyZvqvK^>uVqMvM^q^My+jzZx>G+SyZ^qvKVqgvgZ^>^ZVKDkvMa^>e+VMx>vMD+syZ^Kz+yyZv>y+EzZ^KuxMvM^>y+syZVqE+yzZ^KA^qVKxRNk^RC+^KC+x>vM^RD+HyZVRE+VzZ^>y+HyZVK~vq^K^qV+VqMocGGjm^GGGSGK^MD+czZxMG+szZ^MXkVMwvMy+szZ^qN+xqo+^ME+^KVMx>X+szZ^>y+czZxKok^KVGGK^Mz+XzZvMA^M^KV>E+VzZ^Kz+^KnxMG+NzZ^KAVMxKvZXk^RC+VK~vq^K^MV+VMMocGGjm^GGGSGK^KD+czZxKG+HzZ^Kp7x>Dk^K^>^>U+GzZvqgy2Cqy+xzZxKG+GzZ^MZVMf1N^A^Rl+VKxRvqu^>CPCqz+yzZvMy+HzZ^qRxKvR^MD+VyZVME+VzZ^Ky+VyZVME+GzZ^>A^MV>xq8+^K^q^>U+SzZvqy+szZ^KTkxK<^My+szZVK|+vMD+^>E+VMx>vRD+szZ^qz+SzZv>V+^MVGGKVKE+EzZ^MA^KVMxRG+szZ^>z+V>5v>y+lzZ^KuxMvM^qXk^qnxZ8+^R^Z^>P+x>AVGGGjm^GGGSGK^MU+SzZv>y+HzZ^M8kxMO^MD+HzZVM>CrCqy+szZ^Kz+SzZv>z+^MwV>T+vM^>^MD+czZxMG+szZ^KV+VKsGGKv>y+XzZ^KuxMvM^>V+^>RsGGGjmvcGGSGK^Ky+szZVM|+v>C+^>y+TzZxM1^>^M^RTkxR$+^de+^KVdxMX+szZ^My+czZxKG+szZ^Mz+VMFvqQ+^K^>Vq2+VzZ^qy+szZVKs+vMVGGK^My+|zZx>1^M^>^qP+xqAVGGGjm^GGGSGK^Kz+SzZvqz+^>C+VME+yzZ^qA^MVqxgNk^gC+^MC+xKv>^gD+szZVgE+VzZ^My+szZVq|+vRC+^KQ+VMxKvRD+szZ^qz+SzZvM1^KRV>RvqDYeqy+szZVK^kvMZ^GGGjmqVMJv>^qgSYeqz+SzZvMp^K^qeKxqOo$oqGkXrZVKekyrZ8kNrZ8kzrZeksrZ8kGrZekVK2+yrZ^KD+NrZqE+NrZ^KZ^KBZS^A^MD+yrZVME+SrZ^Ky+yrZVM=+vM^M^quVqyooqG+XrZ^>ZV>fhJ^Kr+ZxZG+NrZ^qxkVZKvRR^>^KVZJvk^MD+SrZVME+srZ^q1^q^RxMI^MC|eqy+|rZxMA^M4dxygxqc+g^Ry+rrZxZ^k^RR^ZqxMvR^Rp^+VK>$ooqy+SrZ^KIxK$cK^qu^qcNeqE+yrZ^qZ^qBqCrg^Zr+uVRE+srZ^g6^gixdCKCA^d^gskxRu^gy+SrZVgs+vdVK^dHk^Rxdvdxk^RgVgKvR^Z^RpV+xKOCooqy+SrZVKAvMCc$K^R7VRVzeqG+SrZ^KP+VKHG=Kvgp^Z^RdxRGGeqy+ErZ^gRxgmdHyg^Ry+gvgy+SrZ^dWxd5^AHkC7VAxu^k^ZR^uz+NrZvu6^dLVOs+v7VK^dHk^RxdvAxk^ZgVuE+srZ^dV+^dPKxuCKCZ^u^dskxZI^dR^gVRxZF^+^Kg^eoqE+srZ^RV+^RPG+xdNk^dB^Az+DrZvuZ^d4ItvZr+g^Kz+XrZvA2k^ugVu2+SrZ^uxk^Kqxuu^d^R^Kfx+vgV+^ZVG+VKl+vO^K^Rzk^GGKxRvMD+GrZ^Kz+lrZvMZ^K4gGygvOr+I^Rz+yrZv76^O$+Vus+vAJ^OHk^7xOvIxk^RRV7E+HrZ^u6^uWxIok^IVK^uxkHRvA^7xk^RZx7G+GrZ^u6VuIv1V+^IVKVuGk$Z^u^IxkVRRv1y+GrZ^uP+xuoM^OHkCZVOxu^k^RO^uqxKvO^Rp^+VZE+SrZ^R2k^RZxRX+NrZ^Rg^UeqC+m1vE+^Zy+>vOy+ErZ^uskxAu^urk^ZVAxR2K^Rxk^MB>S8g^K9+C8oqBkssLR^qgrDoqUkDSZy+H7^KRxKmg=E1^MdxME=oq$+47TlOxMA^M4dsmx>A^>4tNNuxMc+g^gy+x7xqA^q4gYE1xR^k^gR^Rqx>v>^gp^+VKE+CI^KW^KB>lE1^qy+H7VqbvR4g$PkVME+CI^RW^RB>9yt^Zy+H7VMbv>4gvQuVZSk^k^M4gUHAxq|+y9oq4qrsLKvZgCEoqTk9SZE+CI^>Z^>B>YQu^K$+47zKv>5^K^MV>Rvq2Xoq$+4tslLv>y+H7^>Rx>mgvQu^RY+xMvZ^Ky+H7VKC+m1v3^>z+H|ZvZZ^R4Z2HAvRCK^>^qjSkxM^k^K4goQuxMVkxk^M4ZHXLvZD+CEZ^MbGC2q|+=Qoq4qrsLKvMg2|vqTkzSZeksSZ8kGSZ8kcSZN+vMxk^K4qCSOuxk^K4qc9Auxk^K4qo$Iu$+4I$ehx>A^>4Ivy1xqA^q4O|Qgx>c+g^RxkVRKmO=^IRVqx>vZp^+^MaKO^RSk^MVRx>^k^K4RQDtx>X+SSZ^K$+BRN2Z^>ek^Rykx>vZ^KD+GSZVKC+mACDI^RRxRmhozL^Ky+gvdy+GSZ^Mskxgu^Mxk^gZfIroIS+^MD+=coqmqSsLRVd>XxoqTkVSZy+rSZxKA^K4RvSOx>F^>^K2kV>>vqy+SSZ^MskxMmR$SO^>eKfdSsLxk^MB>NDu^dxk^gdxMu^R^K^gfx+vq$+4A^UIx>A^>4hezLxZc+O^My+jSZxd^k^MR^dskxMO4d|Hur+xg|+GVoq4qrsLKvugSCvqTkejZE+sSZ^KZ^KBKelA^Mp^MVKokv>g^My+rSZx>^k^>4RH9AxM2K4qSsLskxgmgXDu^dskxMI^gR^>VZxMF^+^K$+BZ$DI^MZ^MB12zL^Zr+OVgE+HSZ^uxk^gqxu^k^gg4AjVks+^d9+$$vqBkssLR^Age2vqUkDjZy+SSZ^KRxKmR2$I^>fx>vM2k^>gV>E+sSZ^Mxk^MBKD$I^>oK4>NsL^k^d4gTDuxA^k^gu^dqxMvg^gp^+VKC+mOlXZ^ZRxZmgyK^gy+>vuy+GSZ^uskxdu^uR^ZVgxdF^+^Ky+rSZxKA^K4RQDtxgI^gs9vqy+rSZxdA^d4RH9AxKT+^KR^udxuG9vqy+SSZ^KRxKmR2$I^A=+xAu^Kp^KVuJvA^gD+sSZVgN+vMy+sSZ^uskxKmOzvu^uz+=IvuZ^d47jDZvOr+g^Oz+NSZvAxk^ORVuKvu^A^OpV+xg^k^K4go$Ixg^k^K4uEsL32K^KD+=EZVKY+oEvq4qSsLZxKOG28qTkXjZjkljZvM8kNjZ8kzjZeksjZ$+4dT=IxMA^M4g9xOx>8k^RR^MV>xRF^+^KD+QjZxKs+^RD+yjZVRaoyvqy+EjZ^Kz+y|ZvR=+^K^qV>dvqyzvqS+^KfxKvqD+yjZ^>ZHSvq6Y+vk^KV+yku^KS+^KskxKmOzvubz+KvqZ^>4OPEgvZek^dRV>xRvup^+^qskxKmgv$I^qskxKmuQsL3U+EjZvMBY+B9N$qP+vMD+SjZ^Kz+EjZvMZ^K4Z^vIvZ$k^R^qXkxqmAVyI^KdxKNPvqy+yjZ^Kz+=IvgZ^Z47jDZvur+g^gz+EjZvZZ^R4Z^vIvAxk^gRVuKvg^d^gpV+xq^k^K4go$IxqG+SjZ^RZVRf7Hyg^qr+ZxdG+s|Z^gZVgfOz2h^uxkVdKvAR^R^qVdJvk^Ky+yjZVKMvM4OzvuVqCkvR^g|k^gBgEcR^Ku^KjC$qE+sjZ^gZ^gBqCrg^Kr+gVdE+V|Z^OZ^OB>xTu^uxk^dqxuu^g^K^dfx+vRy+yjZ^KRxKmuQsL^qvkxqvu|k^d4A=cRvMu^Ko$$qz+NjZvRZ^q4gGygvur+g^Az+S|Zv7Z^O4ZrcuvIxk^ARV7KvR^d^ApV+xKG+yjZ^KhBRNrL^K^uuVuC2$qG+yjZ^dZVdfIXrL^I$+BuxK^d5^IVdxKF^K^uuVuEY$qG+yjZ^KZVKfIXrL^d$kVdx7zk^74AxyRxKF^K^uuVuSU$qG+SjZ^dZVdf7Hyg^Ar+ZxOG+s|Z^7ZV7fOy8k^uxkVOKvAR^d^AVOJvk^Ky+yjZVKMvM4uQsLVuS+vA3^IuVIS9$qG+yjZ^KZVKftzvu^us+VuivMp^K^IdxI$X$qy+SjZ^uRxumdHyg^Ay+>v7y+s|Z^7Rx7mgxeZ^1skxOu^1R^uVAxOF^+^Ky+rjZxKA^K4AQ^AxOT+^OR^KdxKlN$qy+yjZ^Kz+NjZv7Z^O4g2GtvIr+g^IskxIu4Z9^+qxOvI^Ip^+VAjkvM47rcOVAE+GjZ^Kxk^KBgjvuby+yjZVKjkvM4uQsLJ>sr$qBY+vkVKx+HkR^Ky+zjZxKG+R^AZVAfieQg^7ekV1KvO^7^1pV+xI^k^K47ycOxIG+yjZ^KxkVKftzvuby+zjZxK^k^K4uEsLi6Y+y+yjZVKE+GjZ^7Z^7Bgjvu^tu^tej$qJO^7g=j$qfKvIxk^K4qyU1vIy+yjZ^Iz+EjZvMZ^K4dTsLvIu^7HG$qf>vMgoc$qpqxK^k^I4Rly1xKG+yjZ^Ky+zjZx7A^74go$IxI^k^K4R9$7xIG+yjZ^KWVKftzvu^7y+zjZx70^74uEsLx1G+yjZ^IWVIfOv$I^1y+zjZx1A^14RjU1xtxk^t^1uV1yP$qG+yjZ^1WV1fuGU1^ty+zjZxiA^i4Rly1xLxk^L^tuVt$^$qG+yjZ^LWVLfuTy1^ty+zjZxtA^t4R9$7xiV+^i4qrsLxtI^tVC8qy+zjZxt0^t4R9$7xiG+yjZ^h$+BqN=I^3Z^3B>ExO^Jek^aqx3v3^ap^+ViE+SjZ^Jyk^iVJxa^k^h4dv|gxaG+yjZ^iy+zjZxhA^h4dv|gxa^k^i4RjcuxaG+yjZ^iWVif7$|g^hy+zjZxJA^J4RjcuxaV+^aR^JdxJN28qy+yjZ^hFxhmRGcu^Jz+EjZv3oK^JD+UEZxK|+EY8q4qrsL>vMglX8qTkPGZyk$cZ^Ky+CcZVMjkv>4RHjgZE+$cZ^KZ^KBKHU1^Ms+^MJxKi^KlD8qy+^GZxMA^M4RjU1x>V+^>g^MfxMvM7^KN98qz+HGZv>Z^M4A|vuvqs+^>3VMJv>^K7^Kjl8qE+$cZ^MZ^MBgjvu^>s+^>ZxMF^M^KuVKVT8qG+G|Z^Ky+x|ZxMA^M4g2>x>^k^K4A2vkx>G+CcZ^KoKVK2+EEZ^K$+4gD=IvMZ^K4Z=xOvRek^>RVKxqvqp^+^MU+DEZv>y+G|Z^Mz+s|ZvqZ^>4ZHXtvRxk^M4gNjZvRy+G|Z^qz+G|Zv>Z^M4ZNX7vqxk^q4uvvkvqy+G|Z^qv+f1=^d^MZVMfixUu^>ZV>f1GY+^MxkVqfA9M^My+j|ZxM^k^M4gU=ufv+srgy+oIV>RvqSr8qy+G|ZVME+2I^qxk^MB>jc1^qy+G|ZVqE+EEZ^>y+DEZVgE+lEZ^Z=+^gVZxRl+^>^R^MskxqmuvSZ^Mz+y|Zv>$+4dT=Ix>A^>4g9xOxZ8k^RR^>VZxRF^+^qy+TEZxRGk^q^R^ZskxMmd$|g^Zz+y|ZvRZ^q4uvvkv>y+H|Z^RRxRmgY>^q=kxMvR^Ru^RYV8qE+H|Z^qZ^qBqsjZ^My+V|ZVgMvd4gC|tVZ8kv>^Z^quVqDP8qG+s7^MZVMfOQ9d^qD+vIxqG+2EZ^qy+j|ZxR$K^q^R3VM>HC2q$+4dlMxqA^q4ATvdxZ8k^RR^qVZxRF^+^M1VMMH8^9r6c8^9N8k^RuVRyC2qG+2EZ^gy+j|ZxR$K^g^R3VM>l22qBY+vkVZx+HkR^ZBz82qE+H|Z^Mxk^MBRrsL3y+G|ZVRE+u^MZ^MBd8Qg^gek^dqxMvd^dp^+VZjkvZ4IEYIVZE+H|Z^Zy+RVRMvZ4uroIVdjkvg4tVT1VdE+=EZ^Ry+G|ZVg$+vZ^g^Zgv22qa9+vk^Z^+jkKvgBY+B2+>oX2qGkycZ^K$kNcZUkGcZZ^kBZS^A^KU+^KZxMI^MG=2qZVk>vR$+4ISKx>C+^q^>^KfxKv>u^MEU2qRxkO^Mp^MVK>sU2qpb^KU+NcZvM$+4dlMxMA^M4ATvdx>8k^qR^MV>xqF^+^KYkVKavRD+GcZ^qv+fhv3^>9+Tl2qfdSsLR^qZ=T2qG+$EZ^My+zcZxqG+ScZ^RCKVMxqvZ^Ksky+jcZxR$K^>^q^RVKSkVkek^MRD+xqv>p^+^KD+C|2qmqSsLRVM>HlZ8k2sZ8kYsZekXsZ8klsZ8kTsZekysZ8kNsZ8kzsZekssZ8kGsZ8kcsZekCxZ8kVsZ9+|SYqfdSsLu^KU+lsZvM9+GN2q4>NsLO^KD+NsZVKY+l8Z4qSsLZxKX+ysZ^KgYzYqykDxZ^K8k=xZ$k2xZUklxZ8kXxZ$klxZA^k4AQ^AxKT+^Kg^MdxMEr2qZ^kgVqC+mIjK^K0xqvM^>p^>VMRv>$S2qZ^kZxMF^M^KgUS2qJW^KD+=xZVKE+EI^MZ^MBu^DZ^>r+gVqE+DxZ^Rxk^qqxRu^M^>^qfx+vMD+DxZ^Kv+fLN^k^Oy+UxZxAl+^O^A^dRxdmO=81^Oy+RvOw4gC=ZfuYUg^IxkVAKv1xk^AgBKjygR^d^OVAJvk^uZ^uBgl81^Ar+uV7<mgPUt4qvUgv1xk^7RVIjkvIg4RDaKvA^A^7pV+x>A^>4OY81xAc+u^OwB>VDt4RYUgV7jkv7R^7xkVO>mRvuRV>xAv7p^+^gRxgmO=81^Ay+Rv7w4gCPkfuYUg^7xkVOKvIxk^OgBKezOR^g^AVOJvk^ZZ^ZBgl81^Ar+uV7<mgTs+4qvUgv7xk^7RVOjkvIg4Rco7Kvg^A^7pV+xqA^q4OY81xAc+u^IwB>2Z4RYUgVOjkv1R^OxkVI>mRT$+RVqxAv1p^+^RRxRmO=81^Ay+Rv7w4gXDgfuYUg^IxkVOKv1xk^OgBKeZR^R^AVOJvk^KD+DxZVKE+ysZ^7y+DxZVOmmuG^A4gHy7vtCK^7^OV1xAX+lxZ^A$+Bqcrd^Ay+lxZVO$+vO^O^KD+TxZxK=+4hDUOVAP+v7rk^A^OVK2+yxZ^Ky+ExZVIMv14dx$hVKQ+t^Axk^Aqf7U$hxk^AZf$+Sehy+=xZVOjkvOu^ORVIxKvOp^+^7z+lxZvMZ^K4JU~v7r+u^7skx7u4iVXkskx7O4~=|gqxKv7^7p^+VAE+yxZ^OZ^OBqSyk^7r+gV1E+EI^iZ^iBu^DZ^Lr+gV3N+vJy+XxZ^JskxhmdcQ+^Jskx3u^hR^iVLx3F^+^txkV1KviR^O^7V1Jvk^AskS+VK2+DsZ^KS+^KskxKmgz2h4ZyyO^k^K4gSTufOXSOxk^KB>Pcu4gGcAskxKmgy8k4Z2ru^k^K4gseZfO|4D+=sZVK>SC=qGkSxZ^KjkyxZv>8ksxZ8kxxZ2+VxZ4qSsLU+GxZuy+HxZ^Kz+NxZv>Z^M4uX^Avql+^K^>VMRv>=C=qy+sxZVKC+mAj=g^MRxMmiGlO^qy+>vgy+SxZ^uRxum1J^gy+>vuy+HxZ^Askxdu^AR^uVgxdF^+^Ry+jxZxOA^O41hxdc+g^Ay+xxZx7G+GxZ^IZVIf1N^A^1CkV7x1vhxk^ARVLKv7^d^ApV+xgr+^R^g^dskxZu^dR^MVqxZF^+^>2kVKx>vqD+sxZ^>z+GxZvqp^>^K8kx>O^>D+HxZV>>GjYqy+sxZ^>eKx>s+^Kxk^KB>sX74uGE7skxKmgY>4dvChX+DsZ^KS+V>jkvq4gUz1BMX9hxk^>4Z$zOmZYzIxkV>fOC|t4ZYcO2+EsZ^>S+^Mv+fLjK^qxkVMf7$ju^q9+e8=qfdSsLR^KZVT=qQkoHZL^>Rx>md$ju^Kv+fLjK^>UkVKx>v>u^MXT=qix>=+47XlOVMMv>4LrPZVRQ+O^qxk^qqf1oyZR^MVRxqF^+^KxkV>f7$ju^KLVKMvM4d$juVqMvR4uXbVKjkvM4O2^kBqGDkL^KZVKf7$ju^>xkV>fO8zd4iTYgC+m7XlO^>Rx>mdxm^RRxRmtsxu^>y+>vRL^ZZVZf7$ju^gxkVqKvdR^R^>VqJvk^KL^>Rx>md$ju^KeKxK^k^M4gSzgxK|+C|=q4qrsL>vMgo6TkYHZykXHZ^K8klHZ$kDHZUkEHZBHBr+xKs+^>xk^KBKHU1^>xk^KBR|DhRD+lHZVKE+XHZ^KJ^KVMMv>4AN^AV>o+vqR^R7VRXaFR^Rg^ooM>=voMgs^TkgUoE+>lNYZglNYZgeV2K>DX2uu^Moy=qz+o8>v>p^M^KZ=y=qF4ZcVkVKVkvMxk^7RVdQ+t^dy+2$>VOjkvuR^Oy+Y$>xA^k^dg^Az+2$>v7xk^duVOjkvIg^dxkV7RJy+G$>^dskx7t^dR9+Vux7F^+^gxkVZKvdy+X$>^uy+uvd9+sG=q4>NsLt^Ag2x=qjkl8>vMGkN8>^MjkE8>vqy+y8>^KRxKmR887^MRxMmgC4^KRxKu^M7^Mex=qJmgCER^MeKxM^k^gR^Ay+gvOy+2$>^OskxAu^Oy+=$>VOjkvOg^Oy+U$>x7^k^Au^7skxgO^Axk^gdtG+G$>^AxkVggvOR9+^uVgJvk^dxk^ZZxdG+X$>^dr+7xu|+E^=q4qrsL>v7g$eUqGkx8>xKG+H8>^KZVKfO=E1^>ZV>f1ljA^KZVKfhrt^MoKVMjkvAR^Or+AxAG+2$>^OxkVAKv7y+=$>^7skxAO^7y+D$>VOjkvOu^OxkVu>vOxk^uuPkE+H$>^Axk^uAxAu9+^d^ufx+vdxk^ZuVgE+N$>^gr+IVuY+N8Uq4qSsLAx7OsYUqGko2>VKyk=2>^MGk22>V>E+D2>^KZ^KBKU87^MZ^MB>=j+^KZ^KZxMi^MSYUqpB>$ER^MoK^Mskxuu^7r+OVAE+D$>^Oxk^AqxOG+=$>^7xkVA>vIy+D$>^OskxAI^Oxk^uZxA^k^uu$Kz+y$>vOxk^uOVAK|+^g^upV+xd^k^ZO^dz+D$>vur+I^AD+ClUqmqSsLgVu>DEUqGkX2>^K$kl2>G+X2>^KZVKfOSsk^MZVMfL8eh^KZVKfuGU1^MD+|2>xMzk^MY+^KdxKD|Uqy+E2>^MfY+vq5^M^>VqJvR^Ku^Kx|UqE+y2>^Kp^KVq>2EUqpY+^qeKxq^k^AR^uy+gvAy+2$>^Iskxuu^Iy+=$>VOjkvAg^Oy+U$>xO^k^uu^OskxAO^uxk^Ad2KG+G$>^uxkVAgvAR9+^dVAJvk^gxk^Z7xgG+X$>^dr+7xA|+EyUq4qrsL>vAgGrUqGkc2>xKG+s2>^MZVMfO=E1^KZVKfJ8S1^MoKVMjkvOR^ur+AxuG+2$>^OxkVuKv7y+=$>^OskxuO^Oy+D$>VIjkvAu^IxkVA>vAxk^AujME+H$>^uxk^AAxuu9+^d^Afx+vdxk^ZtVgE+N$>^dr+IVuY+2sUq4qSsLAxOOCVUqGkCY>VKyk2Y>^MGk$Y>V>ekDY>y+$Y>^KRxKmRxDA^>Rx>mgVD+^KU+oY>vMy+2Y>^MRxMmiQSd^>y+>vRy+2Y>^ZRxZm0H=1^Rskxqu^RR^MV>xqF^+^KoKVKjkvAR^Or+AxOG+2$>^AxkVOKvOy+=$>^AskxOO^Ay+D$>VAjkv7u^AxkVu>v7xk^uurqE+H$>^Oxk^uAxOu9+^d^ufx+vdxk^ZLVgE+N$>^dr+IV7Y+XoDq4qSsLZxuONvDqGklY>VKE+EY>^MZ^MB>ssk^>Z^>BA$YZ^KoK^Kskx7u^ur+OVAE+D$>^Ixk^AqxIG+=$>^IxkVA>v1y+D$>^uskxAI^uxk^7ZxA^k^7uCdz+y$>vAxk^7OVuK|+^d^7pV+xg^k^ZJ^gz+D$>vur+I^AD+GYDqmqSsLOVu>olDqGkNY>^KjkEY>v>GkSY>^>$kyY>G+SY>^KZVKfu$SO^MZVMfO$Ch^>D+jY>x>zk^>Y+^KdxKo9Dqy+GY>^>fY+v>5^>^MVqJvR^Ku^Kz9DqE+HY>^Kp^KVM>V9DqpR^MeKxM^k^AR^uy+gvAy+2$>^Oskxuu^Oy+=$>V7jkvAg^7y+U$>xO^k^uu^OskxAO^uxk^AdCdG+G$>^uxkVAgvAR9+^dVAJvk^gxk^Z3xgG+X$>^gr+7xI|+=EDq4qrsL>vAgsxDqGke=>xKUk$=>8k2=>v+f1CDI^MZVMf0YTI^qr+dx>G+o=>^ZZVZfO=E1^RZVRfL8eh^ZxkV>Kvgxk^>gBgsCKR^M^qV>Jvk^KD+2=>VKS+vMY+^>7V>HyDqG+2=>^qpD+xKTk^q^K^RfxRvq7^>ljDqz+o=>vRZ^q4ZDDuvMD+2=>^Kc+xK9+^R7^R8jDqE+D=>^Kp9+Vq8kvM^q^ZpVZxRF^R^>uV>VjDqF9+^KpVKxqOlcDqy+2=>VRMvZ47eQgV>P+vdR^R^>VgJvk^Kp^KVq2+==>^q|k^q2+xKI^KssDqy+v=>xZF9+^d5VZxdvdp^g^KdxKyxDqy+$=>^KfxKvqgSxDqp2+x>2K^>xk^Iqxuc+O^uy+8$>xA^k^uR^Az+$$>vOxk^ugVAE+X$>^Axk^udxA^k^Ig^uskxIIHdy+G$>VOjkv1O^ORD+xgv1p^+^dskxZF^dy+X$>VdQ+L^u9+$C9qBkssLO^Ag^v9qykH=>^KGks=>VMykCU>^>y+H=>V>Mvq4R887VRMvZ4g$j+VMMv>4uSEgV>Q+O^qfR1xR^k^qR^RqxMvq^qp^+VKMvMu^>7V>Gv9qF4gCERV>Vkvqxk^uRVAQ+t^Iy+2$>VAjkv1R^Ay+Y$>xO^k^Ig^Oz+2$>v7xk^IuVOjkvAg^IxkVuRGOy+G$>^Askxut^AR9+VdxuF^+^gxkVZavdy+X$>^uy+uvu9+D=9q4>NsLO^AgVU9qjkCU>vMy+$U>^KRxKmg=E1^MRxMmAljA^KRxKmA9N1^MeKxM^k^dR^Ay+gvOy+2$>^OskxAu^Oy+=$>VOjkvOg^Oy+U$>xO^k^Au^OskxdO^Axk^ddX1G+G$>^AxkVdgvOR9+^uVdJvk^gxk^Z4xgG+X$>^dr+7xg|+=X9q4qrsLgvAgyE9qGkUU>xKHklU>^MGkTU>x>G+XU>^>ZV>fu887^KZVKfOjct^MZVMuvM7^KEE9qffOCER^KoKVKjkvdR^ur+AxuG+2$>^7xkVuKvIy+=$>^OskxuO^Oy+D$>VOjkvAu^OxkVg>vAxk^guziE+H$>^Oxk^gAxOu9+^d^gfx+vOxk^Z6VAE+N$>^dr+IVOY+or9q4qSsLZxAONS9qGkSU>VKE+sU>^MZ^MB>ssk^KZ^KBuUeh^MZ^MBu=y1^KoK^KskxOu^Ar+OVIE+D$>^uxk^IqxuG+=$>^uxkVI>vAy+D$>^uskxII^uxk^OZxI^k^OuGiz+y$>vAxk^OOVuK|+^d^OpV+xg^k^Z<^gz+D$>vAr+I^dD+Gs9qmqSsLOVO>$P9qGkHU>^KjksU>v>GkCD>^>$kVU>G+CD>^KZVKfA2E1^MD+eD>xMG+oD>^MZVMfO$^Z^KoKVKjkvuR^Or+AxAG+2$>^OxkVAKv7y+=$>^7skxAO^7y+D$>VOjkvOu^OxkVd>vOxk^duTLE+H$>^Axk^dAxAu9+^u^dfx+vdxk^Z5VgE+N$>^gr+IVAY+Xelq4qSsLZxdOyvlqGk=D>VKE+lD>^KZ^KB>ssk^>Z^>BuUeh^KZ^KBR=Xu^>u^>UvlqJb^KgEvlqfv+vMoK^KxkVAKvur+O^7z+o$>vuxk^7RVdE+l$>^Oxk^7ZxOG+D$>^dxkV7Rvuxk^AgV7jkvOuoJy+j$>xi^k^AO^iqY+vd^Ap^+Vujkvgw^uy+T$>xdc+I^A9+PYlqfdSsLu^uZS9lqHkED>^KGkQD>xMUkyD>y+ND>VKMvM4gHDAVM2+GD>^My+yD>VME+yD>^>Z^>B>ssk^q9+EDlqBkssLg^>g99lqykVD>^Ky+sD>VKMvM4AjQ1VMVkv>CK^M^qV>xK2K^Kxk^Aqxuc+O^uy+8$>xO^k^uR^Oz+$$>v7xk^ugVOE+X$>^7xk^udx7^k^Ag^uskxAI2Jy+G$>VujkvOO^uRD+xdvOp^+^gskxZ$+^gy+X$>VdQ+L^O9+$ElqBkssLO^ugvNlqyk$9>^KGko9>VMyk=9>^>y+$9>VKMvM4R$EuVMMv>4gSskVqMvR4gP5VMVkv>xk^ORVuQ+t^7y+2$>VujkvIR^uy+Y$>xu^k^7g^uz+2$>vAxk^7uVujkv7g^7xkVORGJy+G$>^AskxOt^AR9+VdxOF^+^gxkVZwvdy+X$>^gy+uvA9+XSlq4>NsLt^Agyxlqjk29>vMGkl9>^MjkD9>vq8kE9>y+T9>x>A^>4RjU1xKA^K4tl|Rx>c+g^qxkVqKmC+Y$1RVKx>vRp^+^MU+l9>v>|k^MY+V>RvqEslqy+E9>VqJ|+^R5^qVRxMF^M^>uV>oxlqG+E9>^>pV>xMOExlqp4RrVkv>oK^MxkVuKvOr+O^Az+o$>v7xk^ARVOE+l$>^Oxk^AZxOG+D$>^IxkVARv1xk^ugVAjkvAusJy+j$>xA^k^uO^AqY+vd^up^+Vdjkvg$+^dy+T$>xgc+I^O9+P^lqfdSsLg^uZseTqHks9>^Ky+c9>xKA^K4grskxMA^M47TlOx>A^>4dGTdxKA^K4aDCgx>2K^>xk^Oqxuc+O^Ay+8$>xI^k^AR^Iz+$$>vAxk^AgVuE+X$>^uxk^Adxu^k^Og^AskxOI2ay+G$>Vujkv7O^uRD+xgv7p^+^dskxZD+^dxk^RqxZu^M^q^Rfx+vqZ^>4gEcAvRr+g^ZD+CYTqmqSsLRVR>NUTqy+y$>^Mv+f1CDI^qZVqf1=lL^Zr+ZxgG+G$>^dxkVgKvuR^q^ZVgJvk^>=+^MV>xK2K^Kxk^ZqxRu^>^q^Zfx+vMgyVTqGk^9>xKUkol>8k$l>$kol>Uk=l>8kDl>$k=l>|+EETq4qrsL>vqD+$l>^>RxkmAN^A^K=+xKO^>u^>zTTqMvKg^K$+BuxK^M5^KVMxZF^Z^>uV>=XTqA^kg^MfxMvMgNXTqp|=TrC>xKX+ol>^Ky+^9>x>A^>4urEgxMc+g^qxkVqKuR^>^MVqJvk^KD+2l>VK>oSTqGkyl>^K$kNl>=+4dTMVMMv>4gQDkVqQ+O^Ry+yl>VZJvg^K2k^ZZxZX+yl>^ZxkVRKvMR^M^qVRJvk^>Yk^>^ULxqX+Sl>^qy+rl>x>=+4dTMVqMvR4uzeuVRQ+O^Zy+Sl>VgjkvgR^gRVqxRvgp^+^Kzkx>vM^ZoK^Zz+ol>vMZ^K4uX^Av>D+=l>^Mz+$l>v>u^MDVTqv+f7TM^KZVKfIzeu^qr+ZxRG+$l>^gy+el>xul+^g^u^Zz+$l>vdp^g^AaxgO^gD+=l>VgZvg^A^dxkVRKvuR^K^qVRJvk^MD+ll>VME+Dl>^My+=l>VqMv>^q^ZD+Ul>xZG+2l>^My+Yl>xRG+2l>^qy+9l>xdA^q^d^gskxMvZ^gy+2l>VME+El>^qy+Dl>VRjkv>^q^Ry+el>xMFg^q2kVMxqvRD+ol>^qZNSTqG+2l>^qoKVqSk^k^MR^RykxKv>^>oK^>skxqo+^A9+$CXqBkssLg^ZgPrzqykoT>^K8kCT>$kVl>Uk$T>8k2T>$k$T>G+Vl>^KZVKfOCvh^MD+^l>xMG+Vl>^KZVKfOolL^MD+eT>xMG+Vl>^KZVKfOEsg^>D+vT>x>G+Vl>^KZVKfO9Du^MD+8T>xMG+Vl>^KZVKfONvZ^MD+YT>xM7^Kr+gV>Y+S8Xq4qSsLZxqODrzqGkXT>VKekyT>8kNT>9+xCzqfdSsLg^>U+lT>vqy+ET>^Kz+oT>v>=+^K^MVq2+ST>^qd^RRxRmgCoO^qy+>vqr+=+^Zz+$T>vOr+I^dD+$UXqmqSsLOVu>l9XqGksT>^KjkGT>v>GkVT>^>z+sT>vMZ^K4qCEuvqZ^>4ZNskvMZ^K4Zs$gvqoK^>xkVdKvAr+O^uz+Hl>v7xk^uRVOE+2T>^Oxk^uZxOG+$T>^OxkVuRv7xk^dgVujkvuuwy+QT>xO^k^dO^OqY+vO^dp^+VgjkvgR^gy+YT>xdc+I^u9+Q|XqfdSsLO^AZEzXqHk$X>^KGk8X>xMHk=X>^>8kUX>E+lX>^KZ^KBK=SO^MZ^MBZ$rg^KD+DX>VK9kvMY+^MuVMENXqG+DX>^>pD+xKC+^>^K^RfxRv>u^MDzXqz+2X>v>p^M^>ZlzXqFR^>oKV>jkvAR^Ar+AxAG+CT>^OxkVAKv7y+oT>^OskxAO^Oy+$T>V7jkvOu^7xkVu>vOxk^uu|+E+ST>^Axk^uAxAu9+^d^ufx+vdxk^ZgVgE+lT>^dr+IVuY+oGXq4qSsLAxAO$PXqGkyX>VKyksX>^MGkGX>V>ekVX>y+GX>^MRxMmRVGA^>Rx>mtT|R^My+>vRxk^qRBAVoOR^>^MVqJvk^KD+sX>VK9kvMY+^MuVMHxXqG+sX>^KpD+xqC+^K^q^RfxRv>u^MSHXqz+SX>v>p^M^KZHHXqF4ZcVkVKVkvMxk^uRVAQ+t^Ay+CT>VOjkvOR^Oy+eT>x7^k^Ag^7z+CT>v7xk^AuVOjkvAg^AxkVuRoKy+NT>^Askxut^AR9+VdxuF^+^gxkVZRvdy+=T>^gy+uvu9+Xe|q4>NsLI^OgNv|qjkC|>vMGk2|>^M$k$|>G+2|>^KZVKfO|VI^RD+Y|>xRG+=|>^MiVMxKA^K4FQ^OxM2K^Mxk^dqxOc+O^uy+^l>xO^k^uR^Oz+Vl>v7xk^ugVOE+=T>^7xk^udx7^k^dg^uskxdICqy+NT>VujkvuO^uRD+xgvup^+^AskxZt^Ay+=T>VdQ+L^u9+HY|qBkssLO^7gxU|qykN|>^KGkE|>VMykS|>^>y+N|>VKMvM4R$EuVMMv>4gSskVKMvM4gleIV>Vkvqxk^uRV7Q+t^Ay+CT>V7jkvOR^7y+eT>xO^k^Ag^Oz+CT>v7xk^AuVOjkvAg^AxkVuRsRy+NT>^Oskxut^OR9+VdxuF^+^gxkVZuvdy+=T>^uy+uvu9+2X|q4>NsLO^Ag2E|qjky|>vMy+G|>^KRxKmg=E1^MRxMm7XlO^KRxKmdxm^qRxqma9Cg^KeKxK^k^dR^Ay+gv7y+CT>^7skxOu^7y+oT>VAjkv7g^Ay+vT>xA^k^Ou^AskxdO^Oxk^ddHRG+NT>^7xkVdgvIR9+^uVdJvk^gxk^Z1xgG+=T>^dr+7xu|+Ey|q4qrsL>vOg$S|qGkP|>xKG+V|>^KZVKfOSsk^>ZV>fixUu^KZVKfi|zg^MoKVMjkvAR^Ar+AxOG+CT>^AxkVOKvOy+oT>^IskxOO^Iy+$T>V7jkv7u^7xkVu>v7xk^uuPZE+ST>^Axk^uAxAu9+^d^ufx+vdxk^ZLVgE+lT>^ur+IVgY+Ns|q4qSsLZxAOXH|qGk$E>VKE+=E>^KZ^KB>ssk^>Z^>BdNlO^KZ^KBO2eK^>Z^>BZS^A^MoK^Mskxgu^Ar+OVAE+$T>^Oxk^AqxOG+oT>^7xkVA>vIy+$T>^OskxAI^Oxk^gZxA^k^gu2dz+XT>vOxk^gOVAK|+^u^gpV+xd^k^ZJ^dz+$T>vur+I^uD+yCEqmqSsLgVA>soEqGkDE>^Kz+2E>vMZ^K4ZNskv>Z^M4i8xZvqu^>loEqf>vMgNoEqpqxK2K^Kxk^uqxAc+O^Ay+^l>xO^k^AR^Oz+Vl>v7xk^AgVOE+=T>^Oxk^AdxO^k^ug^AskxuI=dy+NT>VOjkvAO^ORD+xdvAp^+^gskxZB^gy+=T>VuQ+L^g9+CYEqBkssLO^Age9EqykSE>^KGkyE>VMyksE>^>8kGE>z+NE>vRZ^q4qCSOv>Z^M4gEYuvRD+GE>^qXkxq9+^Ku^KeDEqE+HE>^Mp9+V>6v>^>^qpVqxKI^KGDEqy+jE>xKF^K^MgPDEqJu^MoK^Mskxgu^Ar+OVAE+$T>^Oxk^AqxOG+oT>^OxkVA>v7y+$T>^OskxAI^Oxk^gZxA^k^guSuz+XT>v7xk^gOVOK|+^u^gpV+xd^k^Zp^dz+$T>vur+I^uD+=|EqmqSsLuVO>2rEqGkoQ>^KjkCQ>v>8k2Q>8kYQ>ekXQ>y+$Q>^KRxKmg=zd^MU+oQ>v>y+oQ>^MRxMmg=E1^>Rx>miVlL^MRxMm7eQg^>Ckxqu^M^>^qfx+vMD+=Q>^Kz+oQ>vq=+^>4tslLvMD+DQ>^Kz+2Q>vqy+=Q>^R=kx>vZ^Ku^KjyEqVkmqSsLy+YQ>xK2K^Kxk^uqxOc+O^Oy+^l>x7^k^OR^7z+Vl>vOxk^OgVAE+=T>^Axk^OdxA^k^ug^OskxuIl7y+NT>VAjkvAO^ARD+xdvAp^+^gskxZ6^gy+=T>VdQ+L^u9+lcEqBkssLg^OgTCQqykSQ>^K8kyQ>$kNQ>G+NQ>^KZVKfOSsk^qZVqfL8eh^MZVMffX|L^>D+rQ>x>V+^>Y+^qOxqSHEqy+SQ>^KfY+v>Uk^K^MV>Jvq^qu^qYPEqJ|+^Kp^KVM>$VEqy+SQ>^KRxKm7Qj7^qfxqv>D+yQ>^MXkxM9+^>u^>T^EqE+GQ>^Kp9+VR6vM^R^MpVMx>I^>$CQqy+zQ>xqF^q^MgUCQqJ9+^MoK^Mskxuu^Or+OVAE+$T>^Oxk^AqxOG+oT>^OxkVA>v7y+$T>^OskxAI^Oxk^uZxA^k^uuHIz+XT>vOxk^uOVAK|+^d^upV+xg^k^ZF^gz+$T>vur+I^uD+y$QqmqSsLOVA>oDQqGk$N>^KjkoN>v>Gk=N>^>$k2N>G+=N>^MZVMfuVGA^>ZV>fJT|R^Mr+Zxq^k^qR4b=Suu^>^M^qfx+vMD+DN>^KXkxK9+^qu^qc=QqE+XN>^Kp9+VM6vM^M^ZpVZxqI^qEUQqy+UN>xMF^M^KgcUQqJmZcVk^KeKxK^k^uR^Ay+gvOy+CT>^OskxAu^Oy+oT>VOjkvOg^Oy+vT>xO^k^Au^OskxuO^Axk^udEtG+NT>^OxkVugv7R9+^dVuJvk^gxk^ZWxgG+=T>^ur+7xA|+=XQq4qrsLgvuglEQqGkzN>xKHkSN>^MGkjN>x>UksN>y+GN>VKMvM4Z2E1VM2+VN>^My+sN>VMMv>4gYlOV>Vkvqxk^ARVdQ+t^7y+CT>VdjkvIR^dy+eT>xd^k^7g^dz+CT>vuxk^7uVdjkvOg^7xkVARXiy+NT>^7skxAt^7R9+VuxAF^+^gxkVZFvdy+=T>^uy+uvu9+SyQq4>NsLO^AgCjQqjkHN>vMy+Cz>^MRxMmg=E1^KRxKmI8eh^>Rx>m1Psg^KdxKsSQqp3^>ZGSQqFY+^>oKV>jkvuR^Ar+AxAG+CT>^7xkVAKvIy+oT>^OskxAO^Oy+$T>VIjkvOu^IxkVd>vOxk^duciE+ST>^Axk^dAxAu9+^u^dfx+vdxk^Z5VgE+lT>^gr+IVdY+XxQq4qSsLAxAOXPQqGk=z>VKykXz>^MGklz>V>ekNz>y+lz>^KRxKmZ2E1^>U+Dz>vqy+Xz>^KRxKmgec1^MeKxM^k^dR^Ay+gvOy+CT>^OskxAu^Oy+oT>V7jkvOg^7y+vT>xO^k^Au^OskxdO^Axk^ddoJG+NT>^AxkVdgvOR9+^gVdJvk^uxk^Z~xuG+=T>^dr+7xu|+GeNq4qrsLRvOgS$NqGkzz>xKHkSz>^M8kjz>E+sz>^KZ^KB>cSO^MD+Gz>VME+Hz>^Mr+uVqjkvRR41TyZjkvRg4ADFHkv>4hSDdVqxK2K^Kxk^uqxAc+O^Ay+^l>x7^k^AR^7z+Vl>v7xk^AgVOE+=T>^Oxk^AdxO^k^ug^AskxuIyJy+NT>VAjkvAO^ARD+xdvAp^+^gskxZ$+^gy+=T>VAQ+L^d9+CUNqBkssLu^ugP9Nqykoy>^KGkCy>VMek2y>y+Cy>^qRxqmgrSO^KU+Vz>vMy+oy>^My+Rvqxk^>RBqGDkxk^>gBR2EdCK^M47sivq^KoK^Kskxdu^ur+OVuE+$T>^7xk^uqx7G+oT>^OxkVu>v7y+$T>^1skxuI^1xk^dZxu^k^duN3z+XT>vIxk^dOV7K|+^A^dpV+xg^k^Zo+^gz+$T>vir+I^uD+$ENqmqSsLOVA>GNNqGk=y>^Kjk2y>v>Gkly>^>z+=y>vMZ^K4qe87vqZ^>4ZCj+v>Z^MuVKdvMENNqp4ZH|RvMoK^KxkVuKvOr+O^Az+Hl>vuxk^ARVdE+2T>^Ixk^AZxIG+$T>^dxkVARvuxk^ugVAjkvAuCay+QT>xA^k^uO^AqY+vi^up^+Vgjkvg$+^gy+YT>xdc+I^u9+PSNqfdSsLg^AZXGNqHkyy>^Ky+zy>xKA^K4grskxqA^q4A9jAxZA^Z4tEjgxK2K^Kxk^uqxAc+O^Ay+^l>xO^k^AR^Oz+Vl>v7xk^AgVOE+=T>^Oxk^AdxO^k^ug^AskxuIDay+NT>VAjkvAO^ARD+xdvAp^+^gskxZD+^gxk^>qxZu^R^q^>fx+v>Z^M4gEcAvqr+g^qD+yPNqmqSsLRVZ>2Czqy+XT>^Mv+f1CDI^qZVqf1=lL^gr+ZxRG+NT>^dxkVRKvuR^q^gVRJvk^>=+^MV>xK2K^Kxk^qqxZu^M^>^qfx+vMg=rzqGkcy>xKUkHy>8kVy>$kHy>Ukor>8k$r>$kor>|+$Yzq4qrsL>v>D+Vy>^MRxkmAN^A^M=+xMO^Ku^KY$zqMvKg^>$+BuxK^M5^>VMxqF^q^KuVKH$zqA^kg^qfxqv>g28zqp|=TrC>xMX+Hy>^My+cy>xqA^q4urEgxMc+g^>xkV>KuR^q^MV>Jvk^KD+Cr>VK>SlzqGkXr>^K$klr>=+4dTMVMMv>4gQDkVRQ+O^Ay+Xr>V>Jvq^u2k^>Zx>X+Xr>^>xkVAKvAR^M^RVAJvk^KYk^K^ULx>X+Er>^>y+|r>x>=+4dTMVRMvZ4uzeuVqQ+O^Zy+Er>VgjkvgR^gRVRxqvgp^+^Kzkx>vM^goK^gz+Hy>vMZ^K4uX^Av>D+or>^Mz+Vy>vMu^KVyzqv+f7TM^KZVKfIzeu^>r+ZxZG+Vy>^gy+xy>xdl+^g^d^Rz+Vy>vdp^g^daxgO^gD+or>VgZvZ^d^gxkVZKvdR^K^>VZJvk^MD+2r>VME+$r>^>y+or>VZMvq^Z^MD+vr>xMG+Cr>^My+er>xRG+Cr>^>y+8r>xuA^>^u^ZskxMvZ^Zy+Cr>VME+Dr>^>y+$r>VZjkv>^>^Zy+xy>xMFg^Z2kVMxZvgD+Hy>^ZZ2TzqG+Cr>^MoKVMSk^k^>R^qykxKvq^MoK^Mskxq$+^Zxk^KZxqu^>^R^Kfx+v>skxk^qqxgu^M^>^qfx+vMp9+^>ckE+DI^MZ^MBdz8d^KZ^KqxMX+=I^My+YIxKA^K4uTbxg^k^g4O8^kf7yDky+G7VZMvg4dxmVRMvZ4tsxuVMQ+O^gy+=IVZjkvdR^ZRVRxMvdp^+^Kz+$IvgZ^Z4i9zuvID+DI^7r+xM|+lPzq4qrsLKvMgS8yqTkrr>ekHr>8ksr>8kxr>MvK4AN^AVK2+Hr>^K$+4dT9gvqr+g^Mz+yr>vRxk^MRVqQkvq^M^KD+cr>xKX+Hr>Ry+xr>xKG+Gr>^Ml+VKxMvqu^>soyqz+Sr>vMy+Hr>^Mz+Gr>vRZ^k^qV>jkvM^M^>y+xr>xKF^K^>2kVK>vMD+Hr>^KZH^zqG+DI^MZVMf7YcI^>ZV>fIsEk^MZVMfIXGt^>r+dxqa^Zxk^qqxZG+sr>^RxkVq>vZR^M^>VqJvk^KoK^KskxMmusEk^KD+E2yqmqSsLRVK>o|yqTkoS>8kvS>ekDS>8k=S>ZVkf1N^A^KD+vS>xK=+4uQ9gVMQ+O^>y+$S>VqjkvqR^qrkVMx>vMD+2S>^KU+$S>uy+=S>^Kz+CS>v>l+^K^MV>Rvqolyqy+2S>VKE+lS>^My+=S>VZMvK^Z^qxkVKxMvRy+=S>^KfxKvq2k^KgVK2+lS>^Kg=Uyqz+2Iv>Z^M4gvcIvqZ^>47jDZvRZ^q4dDGtv>r+u^Zix>^k^ZR^>z+oS>vqxk^ZgV>KvR^M^ZpV+xK2K^Kxk^MBu^DZ^KD+lIVME+XI^MZ^MBOl27^KD+XIVKY+VEyq4qSsLqxKOV=Vd8kES>$kXS>UkyS>8kSS>$kyS>UksS>8kHS>$ksS>UkCj>8koj>$kCj>Uk2j>8k=j>$k2j>Uklj>8kXj>$klj>UkNj>8kyj>$kNj>UkGj>8ksj>$kGj>UkVj>8kCG>$kVj>Uk$G>8k2G>$k$G>UkDG>8klG>$kDG>UkEG>8kNG>$kEG>UkSG>8kGG>$kSG>UkHG>8kVG>$kHG>Ukoc>8k$c>$koc>Uk=c>8kDc>$k=c>UkXc>8kEc>$kXc>Ukyc>8kSc>$kyc>Uksc>8kHc>$ksc>UkCs>8kos>$kCs>Uk2s>8k=s>$k2s>Ukls>8kXs>$kls>UkNs>8kys>$kNs>UkGs>8kss>$kGs>UkVs>8kCx>$kVs>Uk$x>8k2x>$k$x>UkDx>8klx>$kDx>UkEx>8kNx>$kEx>UkSx>8kGx>$kSx>UkHx>8kVx>$kHx>UkoH>8k$H>$koH>Uk=H>9+DPoRBkssLg^MD+^S>xMOVUrqGkXH>VKykyH>^M8kNH>$kEH>UkSH>8kGH>r+xMX+NH>^My+nx>G+EH>^M=+V>xMvMD+yH>^Kbs8rq8Ko=rqy+yH>VMMv>4R$SOVRP+vMR^M^RVKJvk^qy+yH>VKMvM4RP9AV>P+vZR^K^>VRJvk^gD+SH>VgMvd4dsPdV>zkvq^Ru^Rc8rqE+sH>^>Z^>BRvt^RD+GH>VRE+SH>^>y+GH>VRE+Hc>^gy+GH>VdMvd^d^ur+ZxAG+XH>^dxkVAKvuR^g^uVAJvk^Zxk^>VRxZONCrqgo=rqbVYrqYk^>^+Gkqx>G+yH>^RZVRfuTy1^dr+ZxZG+R^uxkVZKvAR^R^dVZJvk^>BY+CKv+G+yH>^>ZV>fuNDt^dekVAKvq^d^ApV+xZ2kBY+y+QH>xZ2K^ZgErrqjkHH>vM8koP>8kvP>2+2P>4v+vQtz+VH>v>Z^M4uX^AvMD+$P>^Kz+HH>vMZ^K4djYkv>r+g^>skx>u4qSsLqxKv>^>p^+VRMvZ4A$oiVMQ+O^>9+=XrqBkssLO^ZgryrqykXP>^KGklP>VMykNP>^>y+DP>VKC+mAj=g^>Rx>miGlO^Ry+>vgy+lP>^uRxum1J^gy+>vuxk^dRqKvA^g^dpV+xqG+oP>^dZVdfhJ^Or+ZxAG+XP>^7y+vP>xL$k^7^L^IskxAu^IR^dVOxAF^+^gQ+Vqxgv7xk^ZRVOKvq^R^ZpV+xM8+^K^M^qeKxq^k^>R^ZqxRv>^>p^+VqVkvR9+=Srq4>NsLO^>D+oj>V>>sHrqGkNP>^Kb2srq=+47GTtVqQ+O^KZ4f|V7mAECA^Ry+Rvdy+NP>^dskxgu^dxk^gZfOrY+R4f|V7vZ^gp^+VZjkvMR^ZrkVqxKvqek^KRD+x>vMp^+^MZDHrq6Y+vk^KV+yku^Ky+RVKC+muX2Z^>Q+xKvq^Ru^RTHrqE+u^KZ^KBg^Vk^MoK^Mbv+2KY+gl^SqjkSP>vM8kHP>8kPP>ek$V>8koV>8kvV>ekDV>8k=V>8kUV>ekEV>y+sP>^KXkxK9+^Mu^MQ^rqE+VP>^Kp9+VR6vM^R^>pV>xMI^M=CSqy+cP>xRF^R^>g^oSqC+m1yXk^KvkxKvR|k^q47zKvMu^KDoSqv+fhyXk^KZVKf1=^d^MpVMxROsoSq$+4u$^dv>p^M^RfxRvqD+VP>^>r+xKX+CV>^Ky+PP>xKA^K4tDxIxMX+HP>^M|kVMv+vMu^KE8Sqz+GP>v>p9+^>0xMvq^qp^qVKRvMX2Sqy+HP>V>Mvq43PyZVMJv>^Kjk^KV>RvqoYSqS+^MeKxMG+VP>^>ZV>fJ9xI^qZVqfbPyZ^Mr+ZxR^k^RR4I8N+u^q^M^Rfx+vMD+oV>^Kz+VP>vMZ^K4uX^AvqU+^>RVKRvM29Sqy+CV>VKE+2V>^MZ^Mqx>^k^K4g^Kx>G+VP>^MZVMfJ9xI^RZVRfbPyZ^Mr+Zx>^k^>R4OlzLu^R^M^>fx+vMD+$V>^KRfdSsL4A|CAxZc+g^gy+PP>x>A^>47sUuxdA^d4AjY+x>^k^gR^>qfdSsL^Z^gfx+vMZ^K4ulCAvqr+u^Zz+ox>vdxk^ZRVgjkvgg4OlNOKvM^>^ZpV+xMX+2V>^My+nxZG+$V>^>=+VZx>v>D+=V>^Mb=xSq8KEPSqy+=V>V>Mvq4R$SOVZP+vdR^>^ZVgJvk^My+=V>VgMvd4RP9AVuP+vuR^g^uVdJvk^ZD+DV>VZMvg4dsPdVAzkvO^Zu^ZYxSqE+XV>^ZZ^ZBRvt^dD+lV>VdE+EV>^ZZ^ZBI291^ds+^dBZ8Pt^Zu^ZesSqE+EV>^uZ^uBqzHu^7Z^7BAjrL^Or+gVAE+DV>^uxk^Aqxuu^7^O^Afx+vup^d^ZdxZ=xSqy+CV>^Zz+=V>vAxk^Z4ZzThvAg=xSqgPzSq>yPSqBEPSqvkVdx+HkR^dy+YV>xdA^d4Rly1xuc+g^Ay+qxO^k^AR^OqxdvA^Ap^+VZa9+eKY+y+YV>xuA^u4RQDtxA8k^OR^uVAxOF^+^Zokbv+G+CV>^AoKVA>sojqGk2^>^Kjk$^>v>y+2^>^KvkxKvqs+^>4uGzuv>u^MXejqz+o^>vM|k^KY+V>Jvq^Mu^M9ojqE+D^>^My+=^>VRMv>^R^KoKVKJ|+^KoK^KD+SoHqmqSsLgVq2+lj>^q9+GjCRBkssLu^gD+Uj>xg|+=zVk4qrsL>vRD+lj>^qZs=jq=+4uQ9gV>Mvq4dGChVMQ+O^R$+4uzQ1vgZ^Z4hsS1vdr+g^dv+fhvE+^ur+Zx7^k^7RaykxuvI^Axk^dqxAu^Z^g^dfx+vRxk^RRVqKvq^M^RpV+xK2K^K9+2TGkBkssLg^qD+|j>xq|+VVxq4qrsL>vRD+Nj>^qD+E=ckmqSsLRVq2+sj>^q9+GsjkBkssLR^qD+cj>xq|+N2Pd4qrsL>vRD+Hj>^qD+=SxqmqSsLgVg2+oG>^g9+DzjkBkssLg^qD+^j>xqO$sjqGk2CqVKC+muQ9g^>Rx>mdGCh^qy+>vZy+2Cq^dRxdmI8eh^ZRxZmOSCK^dskxRu^dR^>VqxRF^+^MZVMfOevu^qr+ZxR|+=Qjq4qrsL>vggDcjqGk9CqxKc+O^Ky+9CqxMA^M4dXHuxq^k^KR^qz+=CqvqZ^>41rQkv>xk^KgVMC+muQ9g^RRxRmdGCh^>y+>vgy+lCq^gskxZu^gR^RV>xZF^+^qZVqfOevu^dr+Zx>|+$Sjq4qrsL>vgg=GjqGkQCqxKc+u^My+QCqxKA^K4drjZxq^k^MR^qz+XCqvMZ^K4O|D7vqxk^MgV>Vkv>xk^>RVZKvR^d^>pV+xM^k^Ku^MeKxK^k^RR^ZqxMvR^Rp^+VKVkvMg2DGqGkrCqxKHkGCq^MGkcCqx>UkHCq8kVCq$kHCqUkoeq8k$eqv+f7TM^MZVMfIzeu^Rr+Zx>G+GCq^qxkV>KvRR^M^RV>Jvk^KD+HCqVKE+Ceq^>y+SCqVKMvM4AN^AVq=+vq^q^KuVKD^jq=+4Aj=gV>E+sCq^q=+^>VqxK2K^Ky+sCqVKRvMHCGq$+4uz=gvRy+sCq^RY+xqvZ^Kp^KV>>DeGqp4RHRx>X+VCq^>y+xCqx>G+SCq^KZVKf1N^A^qykV>xqvZD+Ceq^RU+VCqmqSsLD+veqKG+oeq^KZVKf1N^A^>y+^CqxqE+^>^q^KdxKGYGqy+VCq^Kz+CeqvZZ^K^RVqzkvR^Ku^KT8Gq2+=eqRy+oeqVKE+oeq^>y+$eqVqMvq^q^R2kVKxRvZD+oeq^Rz+CeqvMpg^q8kxKvR^qD+$eqVq>2vGqy+oeq^Kv+f1j=g^qy+rCqxgl+^q^g^RRxRmuSEg^qy+>vgxk^ZRqKvZ^q^ZpV+x>8+^K^>^qeKxqOHXcqGkEeqVKekSeq8kyeq8kreqekHeq8kseq8kxeqaX9cqy+Eeq^KRxKmgSsk^>Rx>m7XlO^KRxKmLrPZ^>y+>vdxk^gRB>2pR^K^>VgJvk^MD+GeqVME+Heq^RZ^RBgEeu^>r+uVqQ+I^dS+^ZskxZmOClOgskxdu^ZS+^ZskxZmOClORskxdO^Zxk^qqxds+^Zxk^ZBdTUk=6xk^ZBAPcguxk^qZxZu^R^>^qfx+v>D+seq^Mz+SeqvqZ^>4ucQ1vRD+Neq^qc+xq9+^M7^MUyGqE+Seq^>p9+Vg8kvq^g^qpVqxMI^MCrGqpD+xMF^M^qgUSGqE+Seq^>Z^>BLP2k^gek^dqx>vd^dp^+VMJv>^qD+HeqVqN+v>y+Heq^qc+xq9+^g7^geGGqE+Coq^qp9+VZ8kvR^Z^ApVAxgI^gGGGqpD+xZF^Z^qg|cGqE+Coq^ZZ^ZBdTUk^gp^gVqjkv>4gYlOVqE+Coq^qs+^q2+xZi^ZDxGqy+xeqxqF9+^gUkVqxgvOp^A^ZdxZ$HGqp9+^gfxgvRgGHGqy+xeqxgA^g4h$X7xZF^Z^qxkVMfOl=1^qy+xeqxqV+^qY+^ZOxZSVGqy+Heq^qfY+vdUk^q^gVAJvO^Zu^ZY^GqJ|+^gp^gVq>$Ccqy+Heq^gRxgmOElZ^ZfxZvRxk^M4ZPIvRy+Heq^qc+xq9+^Z7^ZcecqE+Coq^qp9+Vd8kvR^d^gpVgxZI^ZEocqpD+xZF^Z^qgYvcqE+Coq^ZZ^ZBd|EZ^gp^gVq2+Geq^q|k^q2+xZI^ZS$cqy+zeqxqF9+^g5Vqxgvup^d^ZdxZE8cqy+yeq^gfxgvugN8cqp2+xd^k^M4gCc1xdG+seq^qZVqf3eHd^ZxkVMfO2|I^Zy+ceqxZA^Z4I9QOxd^k^M4gzN1xdG+seq^gZVgfpUz+^ZD+reqxZzk^ZY+^gdxgVUcqy+Seq^qfY+vg5^q^ZVdJvu^gu^g|DcqE+seq^Zp^ZVq>sDcqpY+^qskxMmg$^Z^qeKxMOSXcqBY+okxMvkGkR^Mr+xM^k^M4g2lOv+^k^M4g9=1v+^k^M4gC1v+^k^M4gCc1v+^k^M4g8|Iv+^k^M4gzN1v+^k^M4gv^Zv+2K^MBY+ck>GQcqGkVoq^Kz+soqv>Z^M4ZNskvRZ^q4ODlOvqZ^>4iQPZv>r+g^qskxqu4uxy7qx>v>^qp^+VKVkvM9+E^Sq4>NsLI^ZD+oG>VZY+NTjq4qSsLZxqX+$G>^q9+QrHkfdSsLR^qU+$G>vR9+DUCR4>NsLI^qD+DG>VqY+Crcq4qSsL1xqX+lG>^qgvzxqykDvq^KGk=vqVMykXvq^>GklvqVqykNvq^R8kEvq$kXvqUkyvq8kSvq$kyvqUksvq8kHvq$ksvqUkC$qy+=G>V>7vq^KD+EvqVKE+yvq^MZ4qHCAmAECA^qy+Rvuy+2vq^Askxdu^Axk^dZfOeeAR4qHCAvR^dp^+VZMvg4AECAVqQ+O^gy+=vqVdjkvdR^dRVZxqvdp^+^RRxRmAECA^qy+Rvdy+Xvq^dskxgu^dxk^gZfuTHdR^RVqxgF^+^>=+VMx>vMZ^K4AexLvqu^>$Vcqz+$vqvMoK^Ky+|vqxMA4RCeABZyCA^dr+uVuE+Dvq^7xk^uqx7^k^ug4ZPCAu4RCeAVdxuF^+^gZVgf1ECA^Ar+ZxdG+Dvq^uxkVdKvAR^g^AVdJvk^qZ^qBZyCA^Ar+uVdE+Nvq^uxk^dqxu^k^dg4qUHdu^q^A^dfx+vq=+^M^>VKMvM4O8xLVMRv>G$sqy+DvqVMVkv>y+Evq^MRfuCeA4A|CAx7c+u^Ay+8vqxO^k^AR^OskxAO4gG9ZqfuCeA^7^Afx+vAZ^u4ulCAvOr+g^Oz+2vqvIxk^ORV7KvA^A^OpV+xdA^d4A|CAxAc+u^Oy+TvqxI^k^OR^IskxOO4RTHdqxdvO^Op^+V>$+v>^>^KZVKft8xL^MuVMGlsqA4RE2+BZyCA^Kr+gVAE+Xvq^>xk^Aqx>u4RE2+VKxAF^+^MoKVME+yvq^KZ4qHCAmAECA^7y+Rv1y+2vq^1skxIu^1xk^IZfOsyZR4qHCAvI^Ip^+VOMv74AECAV7Q+O^Iy+=vqV1jkv1R^1RVOx7v1p^+^>Rx>mAECA^7y+Rv1y+Xvq^1skxIu^1xk^IZfuTHdR^>V7xIF^+^M=+VKxMvOZ^A4AexLvMu^KCrsqRfu9DO4A|CAxKc+g^Ay+Yvqx7^k^AR^7qfu9DO^K^Afx+v>oK^MD+Qvq$+X+yvqRy+YvqxKX+Svq^Ky+UvqxAX+Gvq^AZBRrst4AECAVMQ+I^Ay+2vqV7jkvOR^7xkVA>mZTE+RBRrst^M^ApV+xKX+svq^KZBRGVk4AECAVIQ+I^Ay+2vqVMjkvOR^MxkVA>mZTE+RBRGVk^I^ApV+xKX+Hvq^KZBkssL4AECAVAQ+I^My+XvqV7jkv>R^7xkVM>mRTHdRBkssL^A^MpV+xKX+Vvq^Ky+zvqxKG+Nvq^Ml+VKxMvOu^Aylxqz+NvqvMy+Gvq^MC+xKv>^A^k^AdxKX+C$q^Ky+|vqxAG+svq^Ky+^vqx78+^K^7^Iz+svqvMe+^I^KV7$+vO^7^MZVMft8xL^AuVAoexqG+C$q^KD+rvqxKG+Evq^Ky+xvqxAG+C$q^7e+VAx7v1y+Vvq^AC+xIvO^7=+^KV7xMA^M4O$xLxKI^Kyvxqy+^vqxKX+Gvq^Ky+rvqxKG+Gvq^MUkVKxMvOu^AG$xqz+HvqvMoK^Ky+rvqxAA^A4ONrgxMc+g^Iy+9vqx7^k^IR^7qxAv>^Ip^+VKE+Hvq^IZ^IBgjrg^Mr+gV1E+Evq^txk^1qxtu^I^M^1fx+vIUk^K^7VMRv>S9xqZ4qyVLmAECA^My+>vhy+C$q^1Rx1mOzrg^iy+>viy+lvq^hskxtu^hR^1VixtF^+^7xkVLKvIR4RjVLxMvhp^+^KeKxKG+yvq^KpZxMDk^K^M^MU+Evqv>gHHsqZBkssL4AECAV7Q+I^ty+SvqVJMv34OzrgVfQ+O^iy+lvqVLjkvLR^LRVJxfvLp^+^hskxtu^hxk^tZfOrQOR4>NsLvI^tp^+VMMv>4AECAVtQ+O^iy+GvqVLMvh4OzrgVhQ+O^3y+lvqVajkvaR^aRVLxhvap^+^7skxiu^7R^MVtxiF^+^KoKVKY+CUxk4qSsLZxqX+XG>^q9+8PCRfdSsLg^qU+lG>vR9+=sjq4>NsLt^gD+NG>VgY+VPsk4qSsLZxqX+yG>^q9+ej$RfdSsLg^qU+NG>vRgsVxqGkx$qxKUkV$qy+H$qVKMvM4AljAVM1mh$$g^MVKRvMocxqy+H$qVKMvM4AljAVMMv>4h$$gVZ2+o8q^ZgEVxqz+G$qvMZ^K4u=jAvqh4LGsIx>vMu^KXxxqz+G$qvqZ^>4u=jAv>Z^M4irsIvqD+V$q^>ZlVxqG+H$q^>ZV>f1ljA^KZVKfJSXg^>uV>oVxqG+H$q^KZVKf1ljA^MZVMfJSXg^KZVKf7SjZ^MD+P$qxMOEVxqD+V$qBI2Qhy+V$q^KeKxKOSoHqGk28qVKC+muX2Z^>Rx>m7eQg^qCkxRu^>^q^Rfx+v>Z^M4A$81vRr+u^A~fIX2Z4R2UgxR^k^AR^Rz+o8qvZxk^AgVRKv>^q^ApV+xK2K^KgyrHqjk$8qvM8kD8q8k98qE+l8q^K$+4dD2Zv>N+^K^MV>RvqVQHqS+^Kz+$8qv>Z^M4g9Huvqxk^K47rVtvqy+=8q^>Rx>mteeZ^MRxMmd|Hu^>skxKmbEp^>z+$8qvRZ^q4AjVkv>xk^K4trNdv>y+=8q^MRxMmuroI^>U+=8qvqs+^>Y+VMdv>EUHqy+l8qV>J|+^qUk^>VqxRF^R^MuVMoDHqF9+^MpVMx>O$|Hqy+l8qVZMvg47eQgVOP+vdR^Z^OVgJvk^RZ^RBgl81^gr+uVdE+Dj>^uxk^dqxu^k^dg4uDlAu^R^g^dfx+vRZ^q4A$81vdr+u^dz+Cj>vAxk^dRVujkvug4aoXLKvR^g^dpV+xMF^M^>D+U8qx>zk^>Y+^MdxMSEHqy+D8q^>fY+vd5^>^gVdJvu^Mu^MYQHqE+X8q^Mp^MV>>NQHqpY+^>skxKm1S$k^>eKxKs+^Kxk^KBuPVt4OGxOskxKmbEp4AyxOA4qSsLBZyCA^Mr+gVgE+l8q^dxk^gqxdu4qSsLVMxgF^+^>xkVKf3cNd^>xkVKfhS$kY+oKVK>NvPqGks8q^Kr+xMs+^>y+s8qVqMvR4gSskVRMvZ4t|NRVZQ+I^q9+HjHqBkssLR^dgPjHqSk^k^qR^dskxqORR^RVZxqF^+^KxkV>fOvXg^Ky+c8qxqA^q4grskxZA^Z41o3xgc+u^q9+PsHqfdSsLR^dZHsHqVkxk^qRVdjkvRgRRVZxgvRp^+^Kskx>mgo|R^KskxMmgSsk^>r+xKG+s8q^gZVgfO=E1^uZVufJ|NR^qr+dxg|+EVHq4qrsLKvugNVHqskskxgu^dxk^gZKu^u^q^gfx+vqxk^K4Z^Tgvqy+s8q^gRxgmg=E1^dRxdm1v3^qy+Rvd9+NePq4>NsLu^AgyePqckjkvdR^AxkVg>uR^d^qVgJvk^>xk^KB>2|R^>xk^MB>lE1^KoK^MD+ErrkmqSsLuVZ2+HG>^Z9+$9HkBkssLu^ZD+cG>xZ|+sTjk4qrsLRvgD+HG>^ZD+2DGqmqSsLgVd2+2c>^dgD9VqjkE2qvM9+s2Pq4>NsLu^MgyDVq$kS2qG+w^MIVRMvZ4dNRVqQ+O^Z9+l=PqBkssLg^ggr2VqUkoYqGkCYq^K$kV2qUk$Yq8k2Yq$k$YqUkDYq8klYq7xqA^q4djHdx>c+I^M9+rDPqfdSsLg^ZZSvVqQkEYqGkNYqVKROGvVqy+NYqVKE+SYq^MZ^MBqXl+^Rxk^KBqxxt^R2+^RqxKI^KDrPqy+^2qxqA^q4gVGLxKX+oYq^Ky+^2qxKA^K4g=$uxMX+$Yq^My+^2qxqA^q4gC$1xKX+2Yq^Ky+8YqxKF9+^>UkVKx>v>u^M$EPqf$6vMgEEPqy+8Yqx>F^>^KD+YYqxKG+Gx>^Mr+ZxZG+y2q^>xkVZKvqrk^M^ZVK2+XYq^Ky+sx>VM7v>^>D+lYqV>E+SYq^qxk^qBqxxtOy+oYqV>7vq^Ky+NYqVKjkvM4dDl+hE+CH>^Ky+$YqV>7vq^qy+=YqV>HkvM^q^>^MeKxMOGrPq2+^RhxKI^KNSPqy+QYqxK^k^K4dUl+BOyvVqgCjPq8+xRF^Ku^KvHPqE+SYq^>xk^>Bqxxtpy+NYqVKE+SYq^>Z^>BRNc1^qr+gVZjkvgRORV>xqvgp^+^MskxKmZyB^Mz+2Yqv>Z^M4uXxOvRr+u^Zz+XYqvdZ^g4REBvuxk^ZRVdjkvgglqRVMxqvgp^+^KfY+vRgNHPq2+VRBvRu^q=eVqz+XYqvgZ^Z4u|sgvRr+u^gskxgu4Ay97v+f1x9I^Ay+cx>x73^7^Oy+9Yqx7Gk^O^7^IY+xAv1^uZ^uBd8Qg^7r+gVAjkvORC+RVux7vOp^+^dskxgO^dR^ZVqxgF^+^KoKVK>seVq2+^R<VKRvMseVqgloVq8+xRmgv|+^qdxqGvVqy+NYq^KRxKmdGyR^gCkxAu^K^g^Afx+vRoK^qg^DPqSk^k^MR^Zz+s2qvdxk^MgVgjkv>uY+r+ZxZc+u^gxkVgKtxk^ggfjkvgR^gxkVMgvgR^q^>VMJvk^KoK^KskxZu^gR^RVqxZF^+^>=+VMx>vMD+s2q^KD+==VqmqSsLgVK>yDVqGkVYq^Kz+S2qvqZ^>4dDGtv>r+u^Zixq^k^ZR^qskxZO^kR^>VMxZF^+^KoKVKVkvMek^>RD+xMvqp^+^KeKxK|+sQvR4qrsL>vuD+$c>^dZ$|VqHk$=q^KS+VKE+Dc>^My+$=qVqMvR4gSskVR$+v>^R^>xkVKfOSsk^>y+8c>x>G+$=q^qZVqfO=E1^R=+V>xRv>xk^K4Z$E1v>oK^KgzH^qykl=q^K8kD=qD+$EVqmqSsLgVK>VN^qTkX=qGk|=qxKUkN=q8ky=q$kN=qUkG=q8ks=q$kG=qG+==q^MZVMfOSsk^>ZV>fiXlO^MZVMfarPZ^>r+Zxq^k^qR4dQo1u^M^>^qfx+vMD+N=q^KbXT^q8KDX^qy+N=qVqE+y=q^Kxk^qBqsjZ^Ky+N=qV>Mvq4uXbVKjkvM4A2jZBgHYuy+==q^qRxqmgSsk^ZRxZm7XlO^>Rx>mdxm^RRxRmtsxu^qy+>vgy+N=q^gskxZu^gR^RVqxZF^+^Ky+Q=qxqA^q4h|T1xZ8k^dR^qVZxdF^+^KZVKKvqD+G=q^>z+y=qvMs+^KY+VgdvdyxVqy+G=qVKJ|+^ZUk^KVZx>F^>^guVg2HVqF9+^KpVKxZOoPVqy+G=qVKMvM4uvxkV>Jvq^ZD+y=qVZ9kvgY+^KuVKlVVqG+y=q^ZpD+x>C+^Z^>^gfxgvMu^K2^Vqz+E=qvMp^K^>ZE^Vq4Rg^AfxAvqD+s=q^>z+y=qvMs+^KY+V>dvq=e^qy+G=qVKJ|+^uUk^KVuxZF^Z^>uV>se^qF9+^ZpVZxKOSo^qy+G=qV>Mvq4A9N1VZJvg^KD+S=qVK9kvMY+^duVdC$^qG+S=q^ZpD+xKC+^Z^K^gfxgvuu^ds$^qz+N=qvqp^>^KZ$8^q4Rg^ZfxZvMD+H=q^KRfdSsL4A|CAxuc+u^Ay+c=qxg^k^AR^gskxAO4RX8dqfdSsL^u^Afx+vuZ^d4ulCAvdr+u^uz+G=qv7xk^uRVOjkvAg4RcTuKvu^g^upV+xKA^K4A|CAxgc+u^uy+Q=qxAA^A4tGVZxO^k^uR^OskxuO4RX8dqxKvd^up^+VZMvg4AECAVgQ+O^Oy+N=qVuMvA4ioTuVAjkv7R^ARVZxgv7p^+^>eKx>ODX^qBDX^qokxgvkGkR^geKfA=ThBY+CKv+G+N=q^>uV>XN^q6VQ^qy+==qVuMvA4gSskVgMvd47XlOVuMvA4dxmVgMvd4tzNuVuQ+O^Ay+N=qV7jkvOR^7RVgxuvOp^+^>ZDN^q6Y+vk^>V+yku^>BY+eka9+skD+D=qVKN+v>y+D=q^qY+xqmuQXI^KskxMmg9zd^Kz+2=qvR=+^q4OYQLvMxk^M4ZzPdvMy+D=q^>Y+x>mu2Sd^KskxMmgzCK^Kz+2=qvR=+^q4gzUtvqxk^M4Zjo7vqy+D=q^>Y+x>md$|g^KskxMmg^Pd^Kz+2=qvM=+^K4ueSOvqxk^M4ZlEgvqy+D=q^qY+xqmuE8h^KskxMmgrJ^Kz+2=qvM=+^K4uHYOvqxk^M4ZHUkvqy+D=q^>Y+x>m7rC+^KskxMmgc=1^Kz+2=qvq=+^>4ZQXhvMxk^M4Zo$dvMoK^M9+829RfdSsLg^OU+oc>v79+olVq4>NsLO^gD+=c>VgY+E|Vq4qSsLZxuX+Dc>^ugQ=CRykHUq^KGksUqVMekCDq8kVUq8k^Uqek2DqD+HUqRv+f1CDI^MZVMf7T|+^>r+ZxqG+sUq^ZxkVqKvgR^M^>VqJvk^KD+VUqVKE+CDq^Ky+VUqVqMvR4AN^AV>=+vM^>^quVq$=CRG+VUq^Ky+xUqxqA^K^q^>U+HUqvqy+sUq^Kz+HUqvZZ^K^RV>2+2Dq^>y+oDqVKJ|+^q5^KVqx>I^>DYCRy+jUqx>A^>43l~xRc+u^qy+^Uqxg^k^qR^gz+VUqvgxk^qgVZKvq^R^qpV+xKG+HUq^qpVqxRDk^qg^qU+GUqvRgyeCRy+jUqxK2K^K9+GrHqBkssLg^qD+9c>xqOHzCRGk=DqVKykXDq^M8klDq$kDDqA4RCeABZyCA^qr+uVRE+lDq^>xk^Rqx>^k^Rg4RUE+u4RCeAVqxRF^+^KD+9DqxKG+=G>^KiVKxMX+XDq^My+UDqxMA^M4AGV+x>c+g^R9+eXCRfdSsLg^ZZNQCRHkyDq^Ky+TDqxMA4qSsLBZyCA^qr+uVZE+EDq^Ry+yDqVd~vZ^d^AxkVZKvOxk^ZgBKQHdR4qrsLxqvgp^+^>Y+xMvq^KZ^KBgUxL^MoK^MskxRu^ZR^MV>xRF^+^qZVqf7DGt^>r+ZxR^k^RR4qTGLu^q^>^Rfx+vMoK^K9+zsxdfdSsLg^qU+Dc>vR9+yT8R4>NsLO^dD+Ec>VdY+$|cq4qSsLZxAX+Nc>^A9+^zHdfdSsLg^qU+Ec>vR9+Vxck4>NsLO^dD+Sc>VdY+DPyq4qSsLdxKX+sc>^KgTHCRyko9q^KGkC9qVMek29q8k$9q8k89qekl9qy+lj>^Mz+sDqvM=+^M^KV>2+29q^>y+o9qV>Mvq4g=E1VK2+=9q^Ky+o9qVKMvM4gEU+V>2+D9q^>y+C9qVME+=9q^>=+^MV>xKX+=9q^Ky+89qxK3^K^My+Y9qxK2K^K9+ySoRBkssLO^qD+^c>xqOHroRGkl9qVKekN9q8kE9q8kQ9qekG9q8kS9q8kj9qekV9q8kH9q8kP9qek$lq8kolq8kvlqE+E9q^KZ^KBZS^A^M1^MZxKI^KECeR$+BRN2Z^Mi^MVKlkvMr+J^KskxKuCSC>xk^KZVrC>^k^Ku2SC>skxKtXSC>xk^K7sSC>^k^KtVjC>skxKaVcC>D+X9qVKN+vMxk^K4tl=AL$+4dlMx>A^>4uNeuxqc+g^R$+BqQM^ZZ^ZBZNvd^gek^AqxZvd^Ap^+VuvkvAC+^OxkVRKv7R^>^qVRJvk^Mxk^KBd8PL^Mek^dskxKm1oyu^dU+l9qvMy+C+^qz+=9qvM=+^q^KVM2+S9q^MBH$oRCKH2oRG+N9q^KZVKfu$SO^MekVRKvM^M^RpV+xqG+N9q^RZVRfuP9A^dekVgKvZ^d^gpV+xMX+y9q^MZVMf7sPd^djkVdxgI^gG$oRy+z9qxMA^M4uV1xuX+S9q^uy+r9qxMh^MR^dOxdyTeRy+S9q^g=+xgoZ^Mp^MVdRvuEXeR$+4dD2Zv>=+^M4>NsLvdEk^gy+|9qxMA^M4i|=AxAFJ^d2kVAxdvuxk^M4tl=Avuy+E9q^gRxgmiE=A^d=+xd$+^Ou^OcooRE+y9q^gZ^gB7y=A^uY+^unxgX+G9q^gy+T9qxgA^g4urEgxuc+u^AxkVAKuy+G9q^OskxAO^OR^gVuxAF^+^dZVdfJNA^ur+dxA|+HyeR4qrsLRv7gCSeRGkrlqxKHkGlq^My+rlqxKG+Glq^Me+VKxMvqoK^>xkVAKv7xk^AgqKvu^u^ApV+xMG+G9q^uYkVusrC>vOyk^M^AVO2+V9q^Oy+E9qVME+H9q^uxk^MB7y=A^uy+E9qVuMvA47ePLVA2+Clq^Ay+E9qVME+V9q^u$+4gUMv7Z^O4d|euvIr+g^Iz+N9qvtxk^IRV1Kv7^7^IpV+xAn^u^A^7skxMm7ePL^7z+G9qvAy+G9q^MAtv>^7a^uV7xAX+V9q^A$+BqQM^MZ^MBRjeu^Ar+gV7E+s9q^1xk^7qx1u^M^A^7fx+vAy+G9q^AmxuvO^7D+ClqV7E+y9q^AZ^ABA2yu^7Z^7BqCrg^Ar+gVtE+olq^Iy+ClqV1l+v1^1^ixkVtKvLR^7^AVtJvk^uy+E9qVAE+H9q^uxk^AB7y=A^ugy$oRz+l9qvOy+E9q^uRxum7ePL^ITkxIp^ty+S9qVul+vi^u^IxkVAfiePL^IgTUeR>$YoRBCYoRvkVAx+HkR^Ay+Q9qxAA^A4Rly1xIc+g^1y+qxL^k^1R^LqxAv1^1p^+Vua9+eKY+y+Q9qxuA^u4RQDtx18k^LR^uV1xLF^+^Iokbv+G+E9q^IZVIf3E=A^1Onx1v1D+olq^Iz+V9qv1U+^IRV1RvtsNoR$+4gUMv1Z^I4d|euvir+g^iv+f7TM^3ZV3f1Xvd^hekVJKva^h^JpV+xL=+4dTMVJMv34gT=uVaQ+I^fxk^fqRG+olq^pxkVf>vbR^J^aVfJvk^hA^LVhxa^k^iR^aqxIvi^ip^+V12+=lq^1y+E9qVtMvi41oyuViMvL4dHygVtQ+O^Ly+E9qVaMvf47ePLVhE+2lq^aa^hVaxfG+$lq^pE+VfxpvJxk^LRVhKvL^t^LpV+x1O2roRy+E9qVLMvh41oyuVtMvi4dHygVLQ+O^ay+E9qVhMvJ47ePLVpjkvfR^pRVtxLvfp^+^1z+l9qvtZ^14IVzuvhoK^L9+r$jqfdSsLR^MU+$s>v>g2PoRGkxlqxKHkVlq^MGk^lqx>UkoTq8k$Tq$koTqG+lI^KZVKfLxDZ^Mr+Zx>G+CTq^RxkV>KvZR^K^MV>Jvk^qD+oTqVqE+NI^qek^>ykxqvq^MD+$TqVME+=Tq^>Z^>BZSzt^qr+gVRE+2Tq^Zxk^RqxZu^>^q^Rfx+v>D+2Tq^Mz+sc>v>y+Hlq^Rz+slqvgy+2Tq^Ao+xMvZ^Z^A^qeKxqONovRGk=TqVKalVoRy+=Tq^MtxMvMoK^Kg9ovRa9+vk^M^+jkKv>y+R^Kv+fIX2Z^MN+VKxMvqjk^>^MdxMsevRZ4qrsLf1ECA^Kr+Zx>G+R^RxkV>KvZR4qrsLxKvqp^+^MeKxMG+R^KZVKfIroI^qoKVqa9+sk9+N$vRBkssLg^MD+Us>xM|+Csrk4qrsL>vMD+ls>^KD+l$XkmqSsLRVK2+Ns>^KgoQvRjkETqvM8kSTq8kjTqekVTq$+4dlMx>A^>4uNeuxMc+g^R$+BqQM^gZ^gBZNvd^Zek^uqxgvg^up^+VqE+GTq^ZZ^ZBZS^A^dA^qVdxu^k^RR^uqx>v>^Rp^+VK2+sTq^K$+4gUMv>Z^M4d|euvRr+g^Rv+f7TM^dZVdf1Xvd^uekVOKvu^u^OpV+xZG+yTq^AZVAf1N^A^uAVZxuvOxk^RRVAKv>^q^RpV+xKX+GTq^Kr+dxKG+yTq^qy+jTqxZA^q^Z^RskxKu^Ry+yTqVqE+sTq^ZZ^qVZxR^k^Kg^RU+STqvMy+yTq^Kz+NTqvRy+sTq^RRxRu^Zxk^KVqxZG+yTq^Ky+jTqxqG+sTq^RZVR>vOxk^K^qVASk|+olPd4qrsL>v>D+ys>^MZsS$RHkVTq^K8k^Tqek2Xq8k$Xqy+PTqx>A^>4grskxMA^M47TlOx>A^>4LyPZxMc+g^qxkVqKmuro1RV>xMvRp^+^KU+HTqvMy+CXq^KskxKmdSjZ4uY=hG+CXq^qZVqfIXb^MxkVMfiPTZ4usskE+$Xq^KZ^KBRNb^qxk^qBZDjZ4OGYuz+sTqv>Z^M4ZNskvRZ^q4ODlOv>Z^M4gjmvRZ^q41Sxuv>r+g^Rz+HTqvgxk^RRVZKvR^M^RpV+xK|+CxvR4qrsL>vMgXT$RTkYXqykXXq^K8klXq$kDXq6El$Ry+CXqVKMmqSsL4ulCAvqr+u^Zz+2XqvZxk^ZRVRjkvgg4RCUuKmqSsL^>VZJvk^Mxk^KBRvt^MZ4>NsLmAECA^My+RvRy+CXq^ZRxZmtcVZ^Rskxqu^Rxk^qZfuX8dR4>NsLv>^qp^+V>Mvq4AECAVqQ+O^Ry+CXqVMMv>4ioTuVZjkvZR^ZRV>xqvZp^+^KU+=XqvMy+CXq^MRfdSsL4A|CAxZc+u^qy+UXqxR^k^qR^RskxqO4RP^AqfdSsL^Z^qfx+vMxk^M4dx1vMZ4qrsLf1ECA^qr+dxRG+CXq^gZVgfJcVZ^dxkVRKvuxk^RgBKN8dR4qrsLxqvZp^+^MRxMmAECA^Zy+>vRy+CXq^gRxgmioTu^Rskxqu^RR^MVZxqF^+^KD+TXqxKc+u^qy+9XqxR^k^qR^Rz+DXqvZxk^qgVRMvR4dDGtVZQ+O^dxk^dqfusTuR^qVZxdF^+^KoKVK>lT$RBY+vkVZx+HkR^ZoKBMlThBY+skU+VTqvMS+^Ky+eXqxRl+^R4RPPdxM^k^K4gEN1xMG+oXq^Z=+VZfuHxL^MxkVKfO=vd^My+eXqxZl+^Z4RGsgxM^k^K4gX^kxMG+oXq^R=+VRfu$c1^gxkVKfOj8k^gy+eXqxZl+^Z4R=TdxR^k^K4gYNRxRX+$Xq^Ky+^TqxKI^KyS$RB^r$RE+oXq^MZ^MB>ssk^ZZ^ZBdNlO^MZ^MBq^m^RZ^RBOjNu^Zr+gVME+$Xq^gxk^Mqxgu^R^Z^Mfx+vMgES$RB2+^+vM^+GkRVKa9+y+$Xq^KeKxKOET8RGkSXqVKekHXq8ksXq8kxXqeko|q8kC|q8ke|qC+mACDI^RRxRmpQjt^My+>vRy+SXq^>skxqu^>R^RVMxqF^+^KD+jXqxKG+SXq^KD+cXqxKG+sXq^K|kVKv+v>u^M2T8RfY+vMD+HXq^KblP$R=+4ACDIVMMv>4pQjtVgQ+O^>y+sXqVdjkvqR^dRVMxgvqp^+^KU+GXqvMg$V$RB2+^+vM^+GkRVK>DT8RBY+y+nxKG+HXq^Z=+VKxZvqD+VXq^>bDY8R8KNU8Ry+VXqV>Mvq4R$SOVqP+vgR^>^qVZJvk^Ky+VXqVdMvu4RP9AVZP+vdR^d^ZVgJvk^qD+C|qVqMvR4dsPdVuzkvA^Zu^ZUY8RE+$|q^qZ^qBRvt^ZD+o|qVZE+HXq^ZZ^ZBgyQg^qr+gVgE+2|q^uxk^gqxuu^Z^q^gfx+vOfRgVq8kvO^q^guVgoY8RG+GXq^gZVgf7Hyg^ur+ZxAG+o|q^OxkVAKv7R^g^uVAJvk^qgXC8RZXU8R6NU8Rvk^uV+yku^uy+VXqVOMv74RTy1VuQ+O^Ay+RV7jkvOR^7RVOxuvOp^+^qbv+8KY+y+VXqVAMvO4RNDtVuP+vIR^A^uV7Jvk^qokB2+C+mACDI^uRxumhD8u^Iy+>vIy+sXq^iskx7u^iR^uVIx7F^+^qD+cXqxqODs$Ry+GXqVqVkvRg=E8RGkT|qxKG+X|q^KZVKfOSsk^MZVMfiXlO^KZVKfarPZ^Mr+Zx>^k^>R4doGIu^K^M^>fx+vgoK^Z9+x|HdfdSsLu^KU+ys>vM9+2rsk4>NsLO^qD+Cx>Vq>ov9Ry+w^M7xqA^q4dQRxRc+g^d9+ez8RfdSsLg^ZZG^DRQkG|qGks|qVKekCEq8kV|q8k^|qek2Eq8k$Eq8k8EqeklEq8kDEq8k9EqekNEq8kEEq8kQEqekGEq8kSEq8kjEqekVEq8kHEq8kPEqek$Qq8koQqIV>Mvq4dGHdVMQ+I^Z9+$j8RBkssLg^RgzVDRUkDQqGk=Qq^Kd>SVDRy+=Qq^Kz+$Qqv>Z^M4g2l+vqxk^K4gzxtvq2+^>RVMRv>Sx2R9+Gc8RBkssLg^Kg8V8RUkyQqGkNQq^Kz+XQqvM$k^K^Mc+xMmAHzu^KdxKGx8Ry+NQq^MXkxM9+^>p^>VKRvMNH8Ry+NQqVM1mdycA^MV>Jvq^Ku^KeV8RE+SQq^MZ^MBqGcA^q$k^qVMS+v>47UXuV>Jvq^KoK^KU+yEqvM9+VV8R4>NsLO^Mgoe2RlkGQqHkVQq^Ky+P|qxKA^K4gsIxMI^MGC2Ry+PQqxKG+yEq^qxkVKfO9GI^qy+PQqxK2K^KD+SEqVME+V|q^KZ^KB>vTu^MD+H|qVME+V|q^KZ^KB>xxu^MD+V|qVME+V|q^KZ^KB>v91^MD+CEqVME+V|q^KZ^KB>Sq^MD+oEqVME+V|q^KZ^KB>Vvi^MD+$EqVME+V|q^MZ^MB>GTu^KD+2EqVKE+V|q^KZ^KB>vw^MD+=EqVME+V|q^KZ^KB>Y2h^qD+DEqVqE+V|q^KZ^KB>vQh^MD+lEqVME+V|q^KZ^KB>zxO^MD+XEqVME+V|q^MZ^MB>yDA^qD+EEqVqE+V|q^KZ^KB>CxZ^qD+NEqVqE+$c>^Ky+H|qVMjkvM4g^luVMN+v>D+yEq^MU+SEquy+NEq^KXkxK9+^Mu^MPl2RE+SEq^Kp9+VR6vM^R^qpVqxMI^MyT2Ry+QEqxKF^K^RgvX2RC+mA=^d^KfxKvZD+HEq^RU+sEqWy+$Eq^KU+HEqvMy+V|q^KRxKmgCsA^qdxqDz2Ry+ls>^Kr+xqG+$Eq^MxkVqfOsvi^My+x|qxM^k^q4gVluxMG+CEq^ZxkVqfO^D1^Zy+eEqxM^k^q4gQqxMG+2Eq^MxkVqfOyTu^M=+VKxqvZD+CQq^Rz+=EqvRZ^q4uX^AvMs+^KRVMzkv>^Ku^Ker2RE+lQq^Kxk^KBqXl+5gXVDRz+s|qv>Z^M4ZHcAvMjk^K^qdxqsS2Ry+=Qq^KskxKmdDl+<ZDVDRG+=Qq^MZVMf1zsg^qr+dxR^k^RR4uE977^gZ^gBgG|t^ur+gVdE+sEq^7S+^Oz+Ss>v1y+CQq^iY+xIvL^1xk^OB>YyI^1=+^7VOxA^k^dR^AqxgvA^dp^+VZjkvZg^ZRVMxqvZp^+^KeKxKO$H2R2+^>mxqI^qHvYRy+YQqxuA^u4ANsgxqc+u^RxkVRKmAy97dVAMvO4Oy|tVdQ+O^Oy+SEqV1N+v1y+ys>^ir+xhG+H|q^LxkVhfO^lu^Ly+^|qxL^k^h4gVD1xLG+oEq^JxkVhfONq^Jy+8EqxL^k^h4gzTuxLG+CQq^JxkVhfODPt^J=+Vixhvixk^I4Z^zIvi=+^1^IV7jkv7R^7RVAxdv7p^+^ZskxRO^ZR^uVqxRF^+^KoKVK>X$YR2+^>5VKRvMoHDRy+lEqVKMvM4AN^AVR2+2Qq^Ry+=QqVKMvM4AzsgVZQ+I^dxk^dqf1y97d^Ry+>v79+oYYR4>NsLI^IgysDRjklNqvMGkNNq^M$kENqUkSNq8kGNq$kSNqUkHNq8kVNq$kHNqUkozq8k$zq$kozqUk=zqD+yNqpE+ss>^Mi^MVK2+sNq^Ky+yEqVKE+sNq^>xk^KB>lDh^>9+HDYRBkssLR^Mg^NYRekNzqy+HEq^MRxMm7XlO^>Rx>mLrPZ^My+>vRxk^qRBZ2yZR^>^MVqJvk^KD+XzqVKE+Nzq^RZ^RBRNb^Kxk^KBRYxk4RC8kz+Dzqv>Z^M4dDbvMxk^K4uYN1mRC8ky+TzqxKA^K4uTbxM^k^M4AUoufuC8ky+HEqVMMv>47XlOVRMvZ4dxmVMMv>4tsxuVqQ+O^Ry+XzqVZjkvZR^ZRVMxqvZp^+^Kz+DzqvRoK^qekV>K|+^M^>pV+xKX+GNq^KS+VKE+CQq^>xk^KB>ssk^>y+GNqVMMv>4L|zuV>jkvM4g=E1V>2+VNq^Ky+yEqVKE+ss>^Mi^MV>jkvM4gc8uV>E+Vc>^>y+sNqVME+lEq^qCK^>VMxqvMD+HNq^Kz+EEqvMy+Ss>^>tx>v>xk^K4ZSsgv>9+ocYR4>NsLO^Mg2r=RlkXzqHkyzq^K8krzqekHzq8kszq8kxzqE+oQq^Ku^KUsYRSkX+VEq3Bxz=RE+CQq^MZ^MBdNlO^>Z^>Bq^m^RZ^RBd|TO^>r+gVME+HNq^Zxk^MqxZu^R^>^Mfx+vMu^KN^YRz+GEqvqZ^>4ODlOvMZ^K4gjmvqZ^>41|NuvRr+g^Zz+yNqvMxk^ZRVKKvq^q^ZpV+xMG+V|q^KZVKfOCsA^quVqSC=RG+yzq^MpVMxKOXo=Ry+yzqVqMvR4uSEgVZQ+O^gxk^gqKu^q^Z^gfx+v>p^M^KU+NzqvMy+Ss>^ZtxZvMD+Gzq^Kz+Nzqvgy+XEq^gr+xMc+I^Ky+|Eqxd^k^KR^dz+ENqvuxk^KgVdE+Hs>^dy+sEqVuE+Hzq^7CK^dVux7vOxk^KuVAE+Cx>^dxk^KAxd^k^M4RjcuxK^k^Z^g^Mz+EEqv>y+Gzq^KskxMmgXst^Kz+s|qvMZ^K4ZHcAvgu^ZGl=Rz+EEqvMy+Ss>^MtxMvdxk^K4Z8=Ovdy+ss>^Zz+Nzqv>=+^Z^MVK2+Vzq^Ky+yEqVKE+ss>^Ai^AVMjkvM4gVx+VME+yNq^Ky+SEqVdN+vAy+szq^AskxumgvyI^AY+xdvA^g=+^KVgxMVky+yEq^Kz+Ns>vui^d^MskxKmgU=O^Mz+Es>v>S+^Zy+x|qxd^k^Z4gVluxdG+CEq^gxkVZfO^D1^gy+eEqxg^k^Z4gQqxgG+2Eq^gxkVZfOyTu^gy+rzqxg^k^Z4gUPtxgl+^M^Z^KU+GzqvMy+yEq^Kz+Ns>vdi^g^MskxKmgVx+^Mz+lNqv>y+SEq^Zr+xgG+Hzq^AxkVgfOvyI^A=+VZxgvu=+^M^dVK>$r=RBY+vkVMx+HkR^My+QNqxMG+R^Z=+VMxZvMBY+skU+sNqv>9+Vr=R4>NsLO^Kg2s=Rlk2yqHklyq^Ky+UEqxMI^M2G=Ry+rs>xM3^M^Ky+rNqx>Gk^K^>^Mz+2EqvMPk^M^KV>Jvq^RglG=Rf3vZu^R$c=Rz+sEqv>jk^M^>fx>vZu^R$s=RU+ENqby+VNq^Mz+=yqvq=+^M^>VKSkX+Czq^K9+Ps=RfdSsLI^MZCeURQkSyqGkGyqVKykVyq^MGkHyqV>ykorq^q8kCrqz+ys>vMy+Vyq^>z+Ns>vZi^R^q^kxKvq^q^MD+^yqxMG+Crq^Ky+Ps>x>eK^K^>^MdxMV^=Ry+syq^Kz+Gyqvqr+u^Mz+yyqvRxk^MRVqE+$rq^Rxk^MZxR^k^K^>^MZVCURG+syq^Ky+xyqxMc+g^Zy+jyqx>^k^ZR^>skxKv>^ZskD+ezqxM|+HeUR4qrsLOvqgE2URTk8rqyklrq^KGkDrqVMykErq^>GkXrqVqykyrq^R8kNrqz+ys>v>y+Xrq^>z+Ns>vRi^q^R^kxMvq^R^KD+QrqxKG+Drq^Ky+9rqx>c+O^My+Yrqxq^k^MR^qz+lrqvRxk^MgVqE+Srq^qxk^Mdxq^k^K^>^Mck2+=zq^>9+=YURBkssLI^MgTlDRUksrqGkGrq^KjkSrqv>GkHrq^>jksrqvR8kCSq8keSqek=Sqy+Ss>^MtxMvMD+CSq^KbN8DRG+Grq^>ZV>fIXGt^Mr+dxqF9+^RxkVqKvZy+u^Zz+Srqvd=+^Z^gVRjkvRg^RRV>xMvRp^+^KU+VrqvMy+GEq^Rz+Vrqv>=+^R^MVKRvMseDRd^RRxRmdvHO^Zy+>vdr+u^dgxAc+g^O9+TXURfdSsLu^7ZGQURHkXSq^KGk|SqxM=+41v3VKY+s|UR4qSsLqx>ODQURy+ESqVMC+muX2Z^>y+>vAxk^uRBMs+rk^>^uVq$+v>^q^Kskz+2EqvZCK^K^>VRxMVkxk^ORV7QkvO^O^uxkVdKvAy+oSq^AskxdO^Axk^gqxdu^R^Z^gfx+vRZ^q4gEcAvgr+g^gD+GyURmqSsLgVd>sjURGksSq^Kz+VNqv>r+I^qz+SSqvZxk^qRVRE+oSq^>xk^qZx>G+Hrq^>xkVqRvqy+CSq^>skxqt^>R9+VMxqF^+^Kskskxgu^dR^qVZxgF^+^KZVKfIXc1^Zr+Zxg|+EcUR4qrsL>vugCeDRGk^SqxKUkojq8k$jqU+VSqmqSsLD+vjqRG+Cjq^KuVKXxURG+Cjq^MZVMftxVk^qpVqxKI^KVPURy+^SqxKA^K4OsVkxMV+^M4Zr+xRI^R2PURD+vjq>OVPURy+CjqVKMvM4OxVkVM2+2jq^My+$zqVMQ+J^>y+$jqVRjkvqR^Ry+Prqxg^k^>g^gz+GrqvZxk^>uVRE+$Sq^qxk^>AxqG+ojq^ZxkV>uvgR9+^MV>Jvk^KskxkVgKvuR^K^ZVgJvk^MoK^Mz+VNqvgr+I^gz+Vrqvuxk^gRVdE+oSq^dxk^gZxdG+Hrq^uxkVgRvAy+CSq^dskxgt^dR9+VZxgF^+^MdVMMv>4Oy|tVdP+vdR^M^dVgJvk^ZoK^ZZ$lDR6Y+vk^ZV+yku^Zy+RVg2+=Sq^gy+$SqVZRvgSYDRy+$SqVgMvd4OxVkVOJv7^Zu^Ze9DRE+=zq^Zr+tVOjkv7Ruy+Prqxd^k^Og^dz+Grqvuxk^OuVdE+$Sq^dxk^OAxdG+$Sq^uZVuftxVk^dxkVOuvuR9+^ZVOJvk^gd^ZRxZmOy|t^gCkxuu^Z^g^ufx+vuoK^dB2+SkX+2zq^M9+8TDRfdSsLu^KZCcDRQkNjqGkyjqVKyksjq^M8kGjqz+=Eqv>y+yjq^KRxMvM^ZD+GjqVZE+Hjq^ZS+^>z+SNqvRxk^>4ZHohvRy+Cc>^gskx>mgolL^gz+GNqvRxk^>4ZlsgvRy+Sjq^qskx>mg9Du^qz+ozqvRxk^>4ZXvZvR=+^Z^>VMMv>4dycAV>Q+O^q9+$zDRBkssLg^Rg8GDRykoGq^Ky+CzqVKE+oGq^M=+^KVMx>G+yNq^KuVK=yDRVky+oQq^Kf>v>f^K^MVM2+2Qq^My+oQqVKj+vMR^MuVMDSDRG+VNq^Ky+Pjqx>l+^K^>^Mz+sEqvMjk^K^>dx>=GDRy+=zq^Kz+EjqvRvK^qgVME+oGq^qCK^KVMxqvqskxk^qqxRu^M^>^qfx+vMp9+^>ck2+lzq^Ky+Ss>Vq7vR^KD+sEqVKE+lzq^My+CQqV>Hkv>R^>^Kckjkv7R^IrkVRxOvIxk^dgV7KvM^Z^dpV+xq2K^qgEHDR8+x>$+^qu^qzHDR>DPDR2+^>4Z^X+vRu^qXVDRz+$QqvZZ^R4gyyRvgek^ORVRxZv7p^+^qeKxqOXj8RskxkVZKvZy+G|q^qskxZO^qR^>VMxZF^+^KoKVKjkvuR^ZRVqxRvup^+^>Y+xMvq^KD+ox>VKE+2x>^MZ^MBRNGt^>r+uVRIvgxk^RRVZjkvZg^kRVMx>vZp^+^KeKxK|+yQ8R4qrsLKv>D+ox>^MD+=XzkmqSsLuVM2+lx>^M9+sHrqBkssLg^>D+Ux>x>|+2VPk4qrsL>vMD+lx>^KD+EV^qmqSsLuVg2+Nx>^ggl$Xkjk2GqvM8klGq8kTGqE+XGq^KZ^KBuUeh^MD+XGqVMN+vMy+XGq^MRxMmIGlg^>Rx>mAN^A^qskxKmglTL^qz+DGqv>Z^M4OEGuvqD+lGq^>Xkx>9+^Zu^ZcD9RE+EGq^>p9+VR6vq^R^MpVMxZI^ZE99Ry+9Gqx>F^>^Mgc99RJmLoQh^MskxKmgP5^Mz+DGqv>Z^M47esLvqu^>2X9Rz+DGqvqZ^>47esLvZZ^R4uX^Avqp^>^MZ=X9RFR^MxkVKfONxu^My+UGqxMA^M4Alygx>xk^>^MxkVKfOs9A^My+UGqxMA^M4tlVuxgI^goz9Ry+UGqxMA^M4tlVux>A^>4IUNhxMG+XGq^>ZV>ftSCK^RZVRfLlu^>5VMx>vRp^q^ZZ=z9RF4LoQhVZjkvM4gV$gVZE+XGq^MZ^MBINi^>u^>PS9RE+XGq^qZ^qBINi^>Z^>BuXNh^qy+XGqVRMvZ4IGlgV>Mvq4IluVR6vR^R^>pV>xMO=j9Rp4iVEhv>xk^K4ZE=7v>y+XGq^>dx>GCXky+XGq^MZN9DuON2sKgVU8dZVU8dO$SH+g2jxkZXlP+HkXX+^KGk|X+xMHkNX+^>y+QX+xKA^K4R$87xMA^M4gTsLxKA^KI^>Ox>Xx9Rp4g^|Rx>2K^>xk^uqxOc+O^Ay+|2+x7^k^AR^7z+X2+v7xk^AgVOE+G2+^7xk^Adx7^k^ug^AskxuIyJy+oY+VAjkvAO^ARD+xdvAp^+^gskxR=+^gy+G2+VgQ+L^u9+G^9RBkssLR^AgeUlRekVX+8kHX+8kPX+ek$|+D+sX+RU+GX+l+$+4ASQ1xMA^M4JPS1x>c+g^q$+BO=9A^dr+gVgE+C|+^Zxk^gqxZck^d^g^Rskxqu^RR^MV>xqF^+^KD+PX+xKX+C|+Ry+^X+xqG+HX+^Kl+VqxKvqu^>G2lRz+SX+vMy+VX+^qz+HX+vdZ^q^gVRokvM^R^RD+cX+xRG+C|+^KpZx>Dk^K^>^>U+HX+vqgGvlR$+BqQM^>Z^>BRjeu^qr+gVZE+VX+^dy+HX+VRfvu^R^gxkVZKvdR^>^qVZJvk^KoK^Kskxuu^Ar+OVAE+y2+^Ixk^AqxIG+N2+^7xkVA>vIy+y2+^7skxAI^7xk^uZxA^k^uuH3z+V2+vOxk^uOVAK|+^g^upV+xd^k^R2+^dskxZu^RR^qV>xZF^+^MZVMf7ycA^Rr+Zx>|+=XlR4qrsLKvggNElRy+P2+xM=+4ACDIVqMvR4A=lLVZQ+O^Ry+oY+VgjkvZR^gRVqxZvZp^+^>Y+xMvq^KoK^Kskx>u^ZR^MVRx>F^+^Kgj8TRykl|+^K8kD|+$k=|+UkX|+8kE|+$kX|+Uky|+9+yjlRBkssLg^KD+9|+xKA^k4AQ^AxKT+^Kg^MdxMHylRZ^kgVKC+mIjK^>0xKvq^qp^qVMRv>ErlRZ^kZx>F^>^KgrrlRJy=TrC>^KD+D|+VKE+l|+^>Z^>BRsEg^Mr+gVRjkvZRRRV>xMvZp^+^KU+D|+vMgoPlRGkx|+xKUkV|+$+4gUMv>Z^M4ZTDkvqr+g^qz+G|+vZp^R^Z8kxRO^RD+H|+VRjkvRR^ZRVMx>vRp^+^K2kxK$DL^qD+V|+VqE+oE+^>$+4gUMvRZ^q4d|euvZr+g^gz+s|+vAxk^gRVuKvR^R^gpV+xKGk^>^K^ReKxRG+X|+^KZVKf1N^A^MD+||+xMG+E|+^KuVKD8TR=+4dTMVqMvR4uzeuVMQ+O^Ry+l|+VZE+X|+^d=+^ZVdxgG+E|+^ZpVZxd4^Zg^ZU+l|+vgA^g^dVZjkvZR^ZRVqxMvZp^+^KU+E|+vMy+X|+^Kz+l|+vZZ^K^RVM2+S|+^My+X|+VKE+y|+^My+X|+VRE+G|+^ZZ^RVZxd^k^K^M^dz+D|+vMy+y|+^Mz+X|+vZxk^K^MVRE+X|+^MpgVKokv>^K^KD+U|+xKOsPlRy+X|+VKVkvMskxk^>qxZck^K^>^MeKxM^k^qO^OD+$YTRmqSsLgVZ>H|yRGk2E+^K$k$E+UkDE+8klE+$kDE+UkEE+y+2E+VMMv>4gCvhVK2+lE+^Ky+2E+VKMvM4golLVZ2+XE+^Zy+2E+VKMvM4gEsgV>2+EE+^>y+2E+VKMvM4g9DuV>2+NE+^>y+2E+VKMvM4gNvZVM2+yE+^Md^My+>vq9+SlTR4>NsLO^qg$|yRjkNE+vM8kGE+8kcE+Y+sszR4qSsLZxMX+GE+^My+jE+x>G+XE+^M=+V>xMvMD+sE+^KgxqA^q4g^eOx>c+g^Zr+|+xdG+EE+^gr+7xu|+lETR4qrsLgvOgENTRGkeQ+xKHk$Q+^MGk8Q+x>Uk=Q+y+2Q+VKMvM4RTy1VM2+lQ+^My+=Q+VMMv>4g|^kVKVkvMxk^uRVAQ+t^Ay+=E+VOjkvOR^Oy+UE+x7^k^Ag^7z+=E+v7xk^AuVOjkvAg^AxkVuRCKy+sE+^Askxut^AR9+VgxuF^+^RxkVdKvZy+EE+^Ry+uvA9+sSTR4>NsLI^AgEHTRjkDQ+vMGkEQ+^M$kXQ+UkyQ+8kSQ+z+lQ+vMZ^K4Z$zdvRD+NQ+^qz+DQ+v>Z^M4Z$E1vqZ^>419NRv>Z^M4OPEgvqek^qRVMx>vRp^+^KU+EQ+vMy+NQ+^KY+xKmt|NR^>U+NQ+vqy+SQ+^Kz+EQ+vRUk^K^qV>Rvq2HTRoK4>NsLG+yQ+^>oKV>jkvAR^Ar+AxAG+=E+^OxkVAKv7y+DE+^OskxAO^Oy+lE+V7jkvOu^7xkVu>vOxk^uuUKE+VE+^Axk^uAxAu9+^R^ufx+vdxk^dgVgE+yE+^ur+IVgY+VCXR4qSsLdxAO=vXRGkVQ+VKyk$N+^M8koN+z+HQ+vMZ^K4ZNrOv>D+oN+^Mz+VQ+v>y+VQ+^qRxqmgSsk^>^kxMvqDPek^KoKVKjkvdR^Ar+AxAG+=E+^OxkVAKv7y+DE+^OskxAO^Oy+lE+VOjkvOu^OxkVg>vOxk^gu|KE+VE+^Axk^gAxAu9+^u^gfx+vZxk^duVRE+yE+^ur+IVOY+SYXR4qSsLAxgOy9XRGk=N+VKykXN+^MGklN+V>ekNN+y+lN+^KRxKmR$SO^qRxqmgN$g^>U+DN+vq|k^>Y+VqRvRyDXRy+XN+VKJ|+^M5^KVMxRF^R^quVq29XRG+XN+^qpVqxKOE9XRpRVKVkvMxk^ORVgQ+t^gy+=E+VAjkvdR^Ay+UE+xI^k^gg^Iz+=E+vOxk^guVAjkv7g^gxkVORlMy+sE+^7skxOt^7R9+VuxOF^+^RxkVdgvZy+EE+^Ry+uvA9+V|XR4>NsLt^Og$rXRjkyN+vMGksN+^MjkGN+vq8kVN+y+xN+xMA^M4RjU1x>A^>4tl|RxMc+g^qxkVqKmU+SeARV>xMvRp^+^KU+sN+vM|k^KY+VMRv>CyXRy+VN+VKJ|+^q5^KVqxZF^Z^MuVMNyXRG+VN+^MpVMxKOCrXRp4RrVkvMoK^KxkVuKv7r+O^7z+$E+vOxk^7RVAE+XE+^Ixk^7ZxIG+lE+^AxkV7RvOxk^ugV7jkvAuNqy+cE+xA^k^uO^AqY+vZ^up^+VgjkvuI^gy+|E+xuc+I^g9+TcXRfdSsLO^AZlPXRHk=z+^KGkUz+xMHklz+^>8kTz+E+Ez+^>Z^>BK=SO^KZ^KBg^|d^MD+Xz+VM9kv>Y+^KuVKlHXRG+Xz+^MpD+x>C+^M^>^qfxqvMu^K2PXRz+Dz+vMp^K^>Z=PXRFR^>oKV>jkvdR^Ar+AxAG+=E+^OxkVAKv7y+DE+^OskxAO^Oy+lE+VOjkvOu^OxkVg>vOxk^guYRE+VE+^Axk^gAxAu9+^u^gfx+vZxk^dtVRE+yE+^Ar+IVgY+Ve|R4qSsLZxuOH8|RGkGz+VKekVz+y+Gz+^KRxKmgSsk^qRxqmI8eh^KRxKmZeE+^>U+Sz+vq|k^>Y+VKRvMH$|Ry+sz+VMJ|+^>5^MV>xRF^R^KuVKX8|RG+sz+^KpVKx>OG8|RpY+V>Vkvqxk^gRVuQ+t^uy+=E+VOjkvAR^Oy+UE+xO^k^ug^Oz+=E+v7xk^uuVOjkvdg^uxkVgRsRy+sE+^uskxgt^uR9+VAxgF^+^RxkVdIvZy+EE+^uy+uvd9+2D|R4>NsLO^Ags9|RjkCy+vMy+$y+^KRxKmgSsk^>Rx>m7XlO^KRxKmA$=Z^MeKxM^k^gR^Ay+gvOy+=E+^OskxAu^Oy+DE+VOjkvOg^Oy+9E+xO^k^Au^OskxgO^Axk^gdyRG+sE+^AxkVggvOR9+^uVgJvk^Rxk^dhxRG+EE+^gr+7xA|+$E|R4qrsL>vAg2y|RGkUy+xKUkly+y+Dy+VKMvM4g=E1VRMvZ4I8ehVKMvM4b|TLVR2+Ey+^R|k^R2+xKI^K2z|Ry+9y+xMF9+^q5VMxqvqp^>^KdxKCy|Ry+ly+^>fx>v>goy|Rp2+xM2K^Mxk^Aqxuc+O^uy+YE+x7^k^uR^7z+2E+vIxk^ugV7E+EE+^7xk^udx7^k^Ag^uskxAIsRy+sE+VOjkvOO^ORD+xgvOp^+^RskxdB^Ry+EE+VgQ+L^79+EG|RBkssLg^Ogjc|Ryksy+^Ky+Sy+VKMvM4g=E1V>Mvq4trHZVMVkv>xk^7RVOQ+t^uy+=E+VAjkvAR^Ay+UE+xA^k^ug^Az+=E+vOxk^uuVAjkvIg^uxkV7Rouy+sE+^Askx7t^AR9+Vgx7F^+^RxkVdJvZy+EE+^gy+uvA9+oV|R4>NsLt^Ag2CERjkGy+vMGkVy+^MjkHy+vq8kor+y+^y+x>A^>4Rly1xKX+or+^Ky+er+xKA^K4gS8kxM2K^Mxk^uqxAc+O^Ay+YE+xO^k^AR^Oz+2E+vIxk^AgV7E+EE+^Oxk^AdxO^k^ug^AskxuIVuy+sE+VAjkvAO^ARD+xgvAp^+^Rskxd6^Ry+EE+VRQ+L^79+E$ERBkssLO^ugT=ERyklr+^KGkDr+VMykEr+^>8kXr+z+=r+v>Z^M4qjDAvMZ^K4ZsD+v>D+Xr+^Mz+Dr+v>Z^M4tTSdvRr+g^>z+Dr+vgZ^Z42+Gr+vZxk^>RVRKv>^q^>pV+xK2K^Kxk^7qxuc+O^uy+YE+xA^k^uR^Az+2E+vOxk^ugVAE+EE+^Axk^udxA^k^7g^uskx7IGAy+sE+VAjkvIO^ARD+xRvIp^+^gskxd<^gy+EE+VRQ+L^u9+GlERBkssLg^OgcrERykGr+^K8kSr+$kyr+G+yr+^MZVMfOSsk^KZVKfJ9xI^MD+jr+xMV+^MY+^qOxqS|ERy+Gr+^KfY+vqUk^K^>VZJvg^q7^qPQERE+Hr+^MZ^MBZcw^KD+Gr+VKS+vMY+^>7V>yQERG+Gr+^KpD+xMTk^K^M^RfxRvqp^>^qdxqGNERp9+^>fx>vMglzERy+jr+xMA^M4JGC1x>F^>^KD+rr+xKzk^KY+^>dx>VyERy+Sr+^KfY+v>5^K^MVRJvZ^>u^>|rERE+sr+^Mp^MVK>srERpY+^KeKxK^k^uR^Oy+gvOy+=E+^OskxAu^Oy+DE+VOjkvOg^Oy+9E+xO^k^Au^OskxuO^Axk^udSOG+sE+^AxkVugvOR9+^RVuJvk^gxk^dWxgG+EE+^Rr+7xu|+$sER4qrsLgvdgD^ERGkUS+xKHklS+^MGkTS+x>UkES+y+XS+VKMvM4RGU1VqMvR4tT|RVKQ+O^>xk^>qf9+vsAR^qVKx>F^+^MD+|S+xMzk^MY+^>dx>DVERy+ES+^MfY+vZ5^M^RVKJvM^>u^>xVERE+yS+^Rp^RVM>D^ERp4ZGVkxM2K^Mxk^uqxgc+O^Oy+YE+xg^k^OR^gz+2E+vdxk^OgVgE+EE+^gxk^Odxg^k^ug^OskxuID7y+sE+VgjkvAO^gRD+xRvAp^+^7skxdw^7y+EE+VuQ+L^g9+yvQRBkssLg^Agc8QRykVS+^Ky+sS+VMMv>4gSskV>Mvq47XlOVMMv>47GCkV>P+vdR^M^>VgJvk^KoK^Kskxgu^Ar+OVOE+lE+^Axk^OqxAG+DE+^7xkVO>vIy+lE+^7skxOI^7xk^gZxO^k^guDIz+SE+vOxk^gOVAK|+^u^gpV+xR^k^d5^Rz+lE+vZr+I^gD+CDQRmqSsLOVO>X|QRGkCj+^KjkVS+v>Gk$j+^>$koj+G+$j+^MZVMfuGU1^qZVqfJT|R^>r+ZxM^k^MR4Y+Uj1u^q^>^Mfx+vMD+2j+^KXkxK9+^Ru^R8XQRE+Dj+^Kp9+V>6vM^>^MpVMxRI^RHXQRy+8j+xMF^M^>g8|QRJmZcVk^>eKx>^k^gR^Oy+gvOy+=E+^OskxAu^Oy+DE+VOjkvOg^Oy+9E+xO^k^Au^OskxgO^Axk^gdGIG+sE+^OxkVggv7R9+^RVgJvk^uxk^d~xuG+EE+^ur+7xg|+yzQR4qrsLgvOgSjQRGk|j+xKHkNj+^MGkzj+x>UkSj+y+yj+VKMvM4R$SOVMMv>4dl2+VK2+sj+^K|k^K2+x>I^>SSQRy+rj+xMF9+^K5VMxKvRp^q^>dx>EjQRy+Sj+^MfxMvMgNjQRpqxK2K^Kxk^gqxAc+O^Ay+YE+xO^k^AR^Oz+2E+vIxk^AgV7E+EE+^7xk^Adx7^k^gg^AskxgIS1y+sE+VAjkvdO^ARD+xuvdp^+^Rskxd$+^Ry+EE+VgQ+L^u9+CHQRBkssLO^AgeCNRyk$G+^KGkoG+VMyk=G+^>8k2G+z+CG+vMZ^K4qCSOvuZ^d4ZC|AvMD+2G+^KXkxK9+^qu^qe^QRE+DG+^Kp9+VR6vM^R^>pV>xqI^qG^QRy+8G+xKF^K^MgP^QRJu^MoK^Mskxuu^Ar+OVOE+lE+^Ixk^OqxIG+DE+^AxkVO>vOy+lE+^AskxOI^Axk^uZxO^k^uuStz+SE+vOxk^uOVAK|+^g^upV+xR^k^do+^Rz+lE+vAr+I^AD+=$NRmqSsLgVR>ylNRGkEG+^K$kXG+UkyG+BS9NRz+lG+vMZ^K4ZNskv>Z^M4ZPCuvMD+yG+^Kc+xK9+^M7^MUYNRE+GG+^Kp9+V>8kvM^>^RpVRxMI^MC=NRpD+x>F^>^KgvUNRE+GG+^MZ^MBd^Uu^ZZ^ZBZHY+^>p^>VK2+SG+^K|k^K2+xqI^qNDNRy+QG+xKF9+^M5VKxMvqp^>^qdxql9NRy+NG+^KfxKv>gX9NRp2+xM2K^MgDlNRbv+Yk^q^+Gkqxq2KY+BY+ckjkvOR^Rr+AxOG+=E+^IxkVOKv1y+DE+^7skxOO^7y+lE+V7jkv7u^7xkVA>v7xk^Au9iE+VE+^Rxk^AAxRu9+^u^Afx+vdxk^d$+VgE+yE+^ur+IVgY+VENR4qSsLdxAOGzNRGk$c+VKykDc+^M8k=c+z+oc+vMZ^K4ZQSOvqD+=c+^>z+$c+v>r+u^KskxKu4L$j7skxKO4A$oi^kxMm092g^KV>Vkvqxk^gRVAQ+t^Ay+=E+VOjkvOR^Oy+UE+xO^k^Ag^Oz+=E+v7xk^AuVOjkvdg^AxkVgRyiy+sE+^Iskxgt^IR9+VuxgF^+^RxkVdo+vZy+EE+^gy+uvO9+oGNR4>NsLt^ug$HNRjkDc+vMGkEc+^MjkXc+vq8kyc+y+Qc+xKA^K4RvSOxMA^M4g=PLxKX+yc+^K|kVKv+vqu^>$xNRz+Ec+vMp9+^M0xKv>^Zp^ZV>RvqsxNRy+yc+VMJv>^qgCHNRfKvRoK^qxkVAKvAr+O^uz+$E+vIxk^uRV7E+XE+^Oxk^uZxOG+lE+^OxkVuRv7xk^AgVujkvOuyiy+cE+xO^k^AO^OqY+vd^Ap^+VRjkvu=+^Ry+|E+xgc+I^u9+TCzRfdSsLg^AZsozRHkVc+^Ky+Pc+xKA^K4grskxMA^M4uU9LxK=k^K^>s+V>fiUXu^MuVMEozRFg^qgcozRJu^qoK^qskxuu^Ar+OVOE+lE+^Axk^OqxAG+DE+^AxkVO>vOy+lE+^AskxOI^Axk^uZxO^k^uuELz+SE+vOxk^uOVAK|+^g^upV+xR^k^dD+^Rz+lE+vdr+I^7D+$YzRmqSsLOVA>NlzRGk2s+^Kjk$s+v>GkDs+^>$k=s+G+Ds+^MZVMfuGU1^>ZV>fJT|R^Mr+Zxq^k^qR46E|ku^>^M^qfx+vMD+ls+^KXkxK9+^Mu^MU9zRE+Es+^Kp9+VR6vM^R^dpVdxMI^MClzRy+9s+xMF^M^KgUlzRJmZcVk^KeKxK^k^7R^Ay+gvAy+=E+^Oskxuu^Oy+DE+VAjkvAg^Ay+9E+xO^k^uu^Oskx7O^uxk^7dXLG+sE+^IxkV7gv1R9+^gV7Jvk^Rxk^d9+xRG+EE+^Rr+7xu|+GEzR4qrsL>v7glNzRGkrs+xKG+Ss+^qZVqfOSsk^KZVKf1ljA^>ZV>fhsyL^KoKVKjkvAR^Or+AxAG+=E+^7xkVAKvIy+DE+^7skxAO^7y+lE+VOjkvOu^OxkVu>vOxk^uu|hE+VE+^7xk^uAx7u9+^R^ufx+vdxk^dX+VgjkvgR^dRVqx>vgp^+^MRxMmdycA^>y+>vZ9+NjzR4>NsLu^ZgHczRz+NE+vR$+4A^UIxRA^R4AYlLx>c+g^Zy+cE+xg^k^ZR^gqxRvq^Zp^+VM$+vR^M^KoKVKjkvZR^ZRVMx>vZp^+^KZVXyRHkHs+^K8kPs+ek$x+8kox+8kvx+ekDx+8k=x+9+PCyRfdSsLg^KU+Hs+vMZ^k4uX^AvMU+^KgVMRv>oVzRZ^kZx>=+4IjKVq6vq^q^KpVKxMI^MsVzRZVk>v>p^M^KZHVzRFE=TrC>^KD+Ps+xKG+Hs+^qZVqfISEg^Mr+Zx>^k^>RRqxqv>^>p^+VK2+2x+^Kgl2yRjklx+vM8kNx+$+BqQM^>Z^>B>rDk^Rr+gVqE+yx+^Mp^MVZokv>g^MD+|x+xM^k^qR^Zqx>vZ^qp^+VKvkvMCDL^MD+Qx+xMG+Nx+^K$+BqQM^MZ^MBRjeu^qr+gVgE+Sx+^Zxk^gqxZu^M^q^gfx+vZyk^K^RVuVkvAy+ox+^KRxKmAN^A^MU+Cx+v>y+$x+^MdxMHXyR$+4dlMx>A^>4uNeuxMc+g^Ry+^s+xdG+Vs+^u=+Vdxuvgy+$x+^gfxgvAf^ggVg2+=x+^gA^ZVuxd^k^RR^dqx>v>^Rp^+VK2+lx+^Ky+ox+VKE+=x+^RZ^KVRxMX+2x+^My+ex+xKG+$x+^My+ex+xRG+=x+^gZVRxgvgxk^K^MVZE+2x+^Ky+=x+VME+Dx+^Rxk^KVMxRG+Vs+^ZpZxdDk^Z^d^dU+ss+vug$YyRy+ex+xK2K^KskxkV>KvRrk^M^>VKVkvMxk^qIVZY+SEyR4qSsLZxgOHzxRGksx+VKekCH+8kVx+8k^x+ek2H+8k$H+y+cx+xKA^K4g^ohxqX+Hx+^qy+cx+xKA^K4gelLx>X+Vx+^>y+cx+x>A^>4g|sgxKX+CH+^Ky+cx+xKA^K4gDDuxMX+oH+^My+cx+xKA^K4gQvZx>X+$H+^>dVRQ+O^M9+CSyRBkssLg^ZgYzxRykXH+^K8klH+$kDH+|+sVsR4qrsL>vMD+lH+^Kz+=H+v>y+oH+^>Y+xMvq^KD+XH+VKqv>Z^M4ZHeOvRr+g^Ry+l+vuy+$H+^gy+uvA9+ScyR4>NsLt^AgHVyRjkNH+vMGkGH+^MjkSH+vq8kHH+y+cH+xMA^M4RjU1xqA^q4tl|RxMc+g^>xkV>Km4|zhRVqxMvqp^+^KU+GH+vM|k^KY+VRRvZGPyRy+HH+VKJ|+^M5^KVMxgF^g^RuVRDVyRG+HH+^MpVMxKOGVyRp4RrVkvMoK^KxkVuKvOr+O^Az+Gx+v7xk^ARVOE+oH+^7xk^AZx7G+CH+^OxkVARv7xk^ugVAjkvAuwy+TH+xA^k^uO^AqY+vd^up^+VZjkvuR^Zy+vH+xuc+I^g9+8vrRfdSsLO^AZo8rRHk2P+^KGkYP+xMHkDP+^>y+UP+xKA^K4RvEuxMA^M4gYE1xKA^K4g9TLxM2K^Mxk^gqxAc+O^Ay+xx+xO^k^AR^Oz+sx+v7xk^AgVOE+$H+^Oxk^AdxO^k^gg^AskxgIo+y+XH+VAjkvdO^ARD+xuvdp^+^ZskxdO^Zy+$H+VZQ+L^u9+EUrRBkssLO^AgQTrRykyP+^KGkNP+VMykGP+^>8kSP+z+EP+vMZ^K4qCSOv>Z^M4OGXAvMD+SP+^KXkxK9+^Mu^MQlrRE+sP+^>p9+VK6vq^K^qpVqxMI^M=TrRy+rP+xMF^M^KgTTrRJu^KoK^Kskxuu^Ar+OVAE+CH+^Oxk^AqxOG+Vx+^OxkVA>v7y+CH+^7skxAI^7xk^uZxA^k^uusKz+DH+v7xk^uOVOK|+^Z^upV+xg^k^du^gz+CH+vdr+I^uD+GQrRmqSsLOVI>HrrRGkCV+^KjkVP+v>Gk$V+^>z+CV+v>Z^M4qe87vZZ^R4Zzctv>Z^M4dNEgvRr+g^ZaKJ^>xk^Zqx>u^M^q^Zfx+vMZ^KOV>dvqyrrRp4ZH|RvqoK^>xkVuKv1r+O^Oz+Gx+vOxk^ORVAE+oH+^7xk^OZx7G+CH+^AxkVORvOxk^ugVOjkvAuEMy+TH+xA^k^uO^AqY+vd^up^+VZjkvuO^Zy+vH+xgc+I^u9+esrRfdSsLO^OZCVrRHklV+^KGkTV+xMHkEV+^>8kQV+E+yV+^qZ^qBK=SO^KZ^KBgQ8O^MD+NV+VM9kv>Y+^KuVKCPrRG+NV+^>pD+xMC+^>^M^qfxqvMu^KsPrRz+XV+vMp^K^MZHPrRFR^MoKVMjkvAR^Or+AxAG+Hx+^OxkVAKv7y+Vx+^7skxAO^7y+CH+VOjkvOu^OxkVu>vOxk^uuv>E+NH+^Axk^uAxAu9+^g^ufx+vgxk^dIVZE+=H+^Zr+IVuY+NoSR4qSsLdxOOs$SRGkHV+VKyko^+^M8kC^+z+sV+vMZ^K4ZEy+v>D+C^+^Mz+HV+vMy+HV+^>Rx>mgSsk^RY+xKvZ^MoK^Mskxuu^Or+OVAE+CH+^Oxk^AqxOG+Vx+^OxkVA>v7y+CH+^OskxAI^Oxk^uZxA^k^uuVZz+DH+vOxk^uOVAK|+^Z^upV+xg^k^dt^gz+CH+vOr+I^gD+CUSRmqSsLgVu>HDSRGk2^+^Kz+o^+vMZ^K4ZNskvZZ^R4u=jAvMZ^K4uYN1v>oK^MxkVgKvAr+O^uz+Gx+v7xk^uRVOE+oH+^7xk^uZx7G+CH+^OxkVuRv7xk^ggVujkvduEgy+TH+xu^k^gO^uqY+vO^gp^+VZjkvuL^Zy+vH+xgc+I^u9+e|SRfdSsLR^7ZsySRUkl^+8kX^+v+f7TM^MZVMfIzeu^>r+Zxq=+4dTMVZMvg4AXvdVdP+vdR^Z^dVgJvk^RYk^R^GG>xg^k^qR^gqxMvq^qp^+VK2+E^+^K$+41C9Avqr+g^qskxqugrk^>VqxKX+X^+^Ky+T^+xKG+l^+^>xkVKKvqy+X^+^RRxRu^KoK^Kskxuu^7r+OVOE+CH+^7xk^Oqx7G+Vx+^AxkVO>vOy+CH+^AskxOI^Axk^uZxO^k^uuNgz+DH+vOxk^uOVAK|+^g^upV+xZ^k^dJ^Zz+CH+vdr+I^uD+$cSRmqSsLuV7>oPSRGky^+^KjkN^+v>8kG^+y+r^+xKA^K4gySOxMX+G^+^My+j^+xMc+I^RxkVRKmL$j7xkVR>mdE5xkVRRmdP>xkVRgmA^HuCKVMfbG+^R^KeKxK^k^uR^7y+gvOy+Hx+^OskxAu^Oy+Vx+VOjkvOg^Oy+^x+x7^k^Au^7skxuO^Axk^udygG+XH+^1xkVugvtR9+^gVuJvk^Zxk^d3xZG+$H+^ur+7xg|+=ejR4qrsLgv7g$8jRGkP^+xKHkCCk^MGkeCkx>G+oCk^MZVMfu887^RZVRfOXsL^>ZV>fISEg^Mr+Zxq4Rt^Rskxqu^RR^>VMxqF^+^KZVKgv>7^MC8jRffOCER^MoKVMjkvdR^Or+AxAG+Hx+^OxkVAKv7y+Vx+^tskxAO^ty+CH+VOjkvOu^OxkVg>vOxk^gucuE+NH+^7xk^gAx7u9+^u^gfx+vgxk^dpVZE+=H+^ur+IVgY+NUjR4qSsLAxAOyXjRGkDCkVKykECk^MGkXCkV>ekyCky+XCk^MRxMmRGU1^qRxqmtT|R^Ry+>v>xk^MRB8+9^tR^q^RVMJvk^KD+ECkVK9kvMY+^>uV>lTjRG+ECk^KpD+xMC+^K^M^RfxRvqu^>2XjRz+lCkv>p^M^KZlXjRF4ZcVkVKVkvMxk^gRVAQ+t^Ay+Hx+VOjkvOR^Oy+Px+x7^k^Ag^7z+Hx+v1xk^AuVIjkvdg^AxkVgR=Ay+XH+^Askxgt^AR9+VuxgF^+^ZxkVdavgy+$H+^uy+uvI9+VNjR4>NsLO^ggErjRjkSCkvMy+sCk^>Rx>mg=E1^RRxRmdX=I^ZCkx>ck^Z^>^MRxMmaN=I^>Ckxqu^M^>^qfx+vMoK^KxkV7Kvdr+O^gz+Gx+vOxk^gRVAE+oH+^Axk^gZxAG+CH+^AxkVgRvOxk^7gVgjkvIuEAy+TH+xA^k^7O^AqY+vA^7p^+VZjkvuF^Zy+vH+xgc+I^A9+ccjRfdSsLu^uZ$HjRHkCek^KGkeekxMUk$eky+oekVqMvR4g8^IVM2+=ek^My+$ekVME+$ek^>Z^>B>ssk^qCK^MVq2PekvMoK^KxkVAKvAr+O^uz+Gx+vIxk^uRV7E+oH+^7xk^uZx7G+CH+^OxkVuRv7xk^AgVujkvOusOy+TH+xO^k^AO^OqY+vd^Ap^+VZjkvu6^Zy+vH+xgc+I^u9+QCGRfdSsLu^OZGvGRHkDek^KGk9ekxMUkXeky+lekVKMvM4grSOVq2+Nek^qy+XekV>Q+t^Mxk^Mqf7=uxk^MZfASyOxk^MdftGEdCK^>BOXcO^M^KoKVKjkvAR^Or+AxAG+Hx+^OxkVAKv7y+Vx+^7skxAO^7y+CH+VOjkvOu^OxkVu>vOxk^uuT7E+NH+^Axk^uAxAu9+^g^ufx+vgxk^d<VZE+=H+^gr+IVuY+D=GR4qSsLAx1OSDGRGkyekVKyksek^MGkGekV>ekVeky+Gek^KRxKmRGcu^>U+Sekvqy+sek^KRxKmgSsk^MRxMmgo|R^KeKxK^k^uR^1y+gvOy+Hx+^7skxAu^7y+Vx+VOjkvOg^Oy+^x+xO^k^Au^OskxuO^Axk^udo1G+XH+^AxkVugvOR9+^gVuJvk^Zxk^d0xZG+$H+^Zr+7xg|+C|GR4qrsL>vAgoGGRGk^ekxKUkook8k$okz+HekvMZ^K4ZNskv>Z^M41YxIvMD+$ok^Kc+xK9+^M7^McQGRE+=ok^>p9+VK8kvq^K^RpVRxMi^M2yGRy+vokxKA^K4Aywx>X+$ok^>s+V>v+vM7^KCyGRz+CokvRp9+^>=kxqvq^Rp^RVKJvM^Mu^MxyGRJ|+^>p^>VK>GrGRy+$ok^MRxMmJlyu^qfxqvMD+ook^KXkxK9+^Mu^MejGRE+2ok^Kp9+Vq6vM^q^>pV>xMI^MGjGRy+eokxMF^M^KgPjGRJ9+^KoK^Kskxgu^ur+OVuE+CH+^Oxk^uqxOG+Vx+^OxkVu>v7y+CH+^7skxuI^7xk^gZxu^k^guotz+DH+vAxk^gOVuK|+^Z^gpV+xA^k^dw^Az+CH+vgr+I^gD+=HGRmqSsLuVA>yVGRGkSok^Kjkyokv>8ksoky+jokxKA^K4gNEZxMX+sok^My+cokxK3^K^qZVqf0Ylh^KoKVKjkvdR^Ar+AxOG+Hx+^AxkVOKvOy+Vx+^IskxOO^Iy+CH+VAjkv7u^AxkVg>v7xk^guQtE+NH+^Oxk^gAxOu9+^Z^gfx+vAxk^dC+VuE+=H+^gr+IVOY+VocR4qSsLZxuOH2cRGkCvkVKek2vky+Cvk^KRxKmgSsk^gRxgmI8eh^KRxKmgD=A^>U+Vokvq|k^>Y+VKRvMH8cRy+ovkV>J|+^M5^>VMxqF^q^KuVKX2cRG+ovk^KpVKxMOG2cRpY+VMVkv>xk^ORVuQ+t^uy+Hx+VAjkvAR^Ay+Px+x7^k^ug^7z+Hx+vOxk^uuVAjkv7g^uxkVORGiy+XH+^uskxOt^uR9+VgxOF^+^ZxkVdwvgy+$H+^Zy+uvA9+29cR4>NsLu^OgD9cReKv+^k^uR^Oy+gvOy+Hx+^OskxAu^Oy+Vx+VOjkvOg^Oy+^x+xO^k^Au^OskxuO^Axk^ud2LG+XH+^AxkVugvOR9+^ZVuJvk^gxk^dv+xgG+$H+^ur+7xA|+y|cR4qrsL>vIgCrcRGk|vkxKUkNvky+EvkVKMvM4gSskVqMvR4t|9AVKRvMNNcRy+EvkV>Mvq4gSskVMMv>4t|9AV>Mvq4Oc2hVqJvR^KD+NvkVK9kvMY+^MuVMHzcRG+Nvk^KpD+x>C+^K^>^qfxqv>u^MSycRz+Xvkv>p^M^KZGycRFb^KoKVKjkvOR^7r+AxOG+Hx+^gxkVOKvdy+Vx+^gskxOO^gy+CH+VIjkv7u^IxkVA>v7xk^Au9LE+NH+^gxk^AAxgu9+^u^Afx+vgxk^d2+VZE+=H+^Zr+IVAY+XccR4qSsLqxuOSesR8kVvk$kHvkUko$k8k$$kU+svkuD+C$k$Kv+f7TM^MZVMf1Xvd^KZVKf7rjd^Mr+Zxq=+4dTMVRjkvRR^RRVKxMvRp^+^>U+VvkvqD+$$kRz+C$kv>y+C$k^>9+xMvq^qu^qQ^cRE+o$k^My+o$kVZ7vg^q2k^MVqxqX+Vvk^qy+v$kx>Fg^M2kV>xMv>D+$$k^MZSHcR=+4dTMVMMv>4uzeuVqQ+O^Ry+VvkVZjkvZR^ZRVMxqvZp^+^>NkIvq^qoK^qskxAu^ur+OVuE+CH+^7xk^uqx7G+Vx+^7xkVu>vIy+CH+^OskxuI^Oxk^AZxu^k^AuSLz+DH+vAxk^AOVuK|+^Z^ApV+xg^k^d=+^gz+CH+vAr+I^gD+H8sRmqSsLuVO>XUsRGkl$k^KjkD$kv>8kE$ky+T$kxKA^K4gySOxMX+E$k^My+|$kx>c+O^MxkVMKmdyDkxkVM>md2GdxkVMRmdvUACKV>f1^Qd^M^KeKxK^k^gR^Oy+gv7y+Hx+^7skxOu^7y+Vx+VAjkv7g^Ay+^x+xI^k^Ou^IskxgO^Oxk^gdshG+XH+^AxkVggvOR9+^uVgJvk^Zxk^dU+xZG+$H+^gr+7xu|+yTsR4qrsLRv7gNEsRGkr$kxKHkG$k^M8kc$kE+H$k^MZ^MB>cSO^>D+s$kV>E+V$k^Mr+uV>jkvqR4dzDkjkvqg4AEEAHkv>4Ls97V>xK2K^Kxk^uqxOc+O^Ay+xx+xO^k^AR^Oz+sx+vIxk^AgV7E+$H+^Oxk^AdxO^k^ug^AskxuIGJy+XH+VOjkvAO^ORD+xgvAp^+^ZskxdE+^Zy+$H+VgQ+L^u9+HysRBkssLg^Ag|SsRyk$8k^Ky+C8kVKMvM4g=E1V>Mvq4I8ehVKMvM4hsGOVMVkv>xk^uRVAQ+t^Ay+Hx+VOjkvOR^Oy+Px+xI^k^Ag^Iz+Hx+v7xk^AuVOjkvAg^AxkVuRC3y+XH+^Askxut^AR9+VgxuF^+^ZxkVdD+vgxk^RRVdKv>^q^RpV+xKA^K4dzcAxRc+g^g9+rxsRfdSsLR^qZHPsRG+DH+^>$+BZ$DI^qZ^qBZllL^Rr+gVZE+NH+^gxk^Zqxgu^q^R^Zfx+vM=+^>^KVMVkv>xk^gRVqKvM^R^gpV+x>O2zxRGk28kVKekl8k8kD8k8k98kekN8k8kE8k8kQ8kY+28xR4qSsLZxKX+D8k^KZVkf1N^A^KU+VK>v>u^M2oxRRxkO^>$+47zKvM5^>^KVqJvR^Mu^MPoxRMvKg^KpVKx>O$vxRpE=TrC>V>2+l8k^>y+28kVMMv>4uSEgV>Q+O^Rxk^RqKu^M^>^Rfx+vMD+l8k^KZlDxRHks8k^K8kx8kC+mdTM^>Rx>mgQDk^Ry+>vMy+s8k^qfxqvu2k^qgVq2+V8k^qxk^Kqxdu^>^R^Kfx+v>Yk^MCDLVK2+C2k^Ky+H8kVKC+mdTM^RRxRmuzeu^My+>vgy+H8k^gskxZu^gR^RVMxZF^+^qykVKxqvgoK^Zy+98kxKA^K4AQ^Ax>X+X8k^>y+T8kxRI^RHNxR$+BqQM^qZ^qBRjeu^>r+gVRE+X8k^uy+=8kVg$+vA^g^Zy+T8kxgF^g^dfVg>vdD+X8k^guxZvu^gxk^Rqxgu^q^>^Rfx+vMD+N8k^Kz+=8kvMy+X8k^ZRxKvg^>D+E8kV>E+E8k^Ky+X8kV>E+E8k^Ry+N8kVgMvZ^g^ZxkVKx>vgy+l8k^>z+X8kvdy+E8k^Kskx>vd^Ky+=8kV>JO^K2k^>VKxKX+=8k^KgY9xRE+E8k^KoK^Kckjkv>R^ZrkVRxMvMoK^KxkVqOvd9+SyxR4>NsLO^gg2EoZjkC2kvM8k22k8kY2kekX2k8kl2k8kT2kE+=2k^KZ^KB>$vh^qD+22kVqE+=2k^KZ^KB>2lL^MD+=2kVME+=2k^MZ^MB>ysg^KD+D2kVKE+=2k^ZZ^ZB>|Du^KD+l2kVKE+=2k^KZ^KB>SvZ^>D+X2kV>qvMr+g^RD+CsxRmqSsLgV>>S|oZGky2k^K$kN2kUkG2k9+$xeZBkssLg^KD+r2kxKG+S2k^>y+92kxMl+^>^M^KU+y2kvMd^>ZV>fOCoO^qr+ZxRc+l+^gy+T2kxdc+I^u9+cPxRfdSsLO^AZoCHRHkCYk^KGkeYkxMHk$Yk^>y+vYkxKA^K4R$87xRA^R4gTsLxqA^qu^MOxM2CHRp4g^|RxM2K^Mxk^uqxAc+O^Ay+82kxO^k^AR^Oz+$2kv7xk^AgVOE+X2k^Oxk^AdxO^k^ug^AskxuIDMy+G2kVAjkvAO^ARD+xdvAp^+^Zskxgu^Zy+X2kVdQ+L^Z9+E$HRBkssLO^AgrUHRykEYk^KGkXYkVMykyYk^>8kNYkz+lYkv>Z^M4qyU1vqZ^>41U|RvZr+g^MskxMu4iHs7qx>vZ^Mp^+VK2+SYk^K|k^K2+xMI^MN=HRy+QYkxKF9+^q5VKxqvZp^R^MdxMlUHRy+NYk^KfxKvRgNUHRpBMPVk^qoK^qskxZu^Ar+OVAE+D2k^Oxk^AqxOG+=2k^OxkVA>v7y+D2k^OskxAI^Oxk^ZZxA^k^ZuS>z+y2kvOxk^ZOVAK|+^d^ZpV+xu^k^gg^uz+D2kv7r+I^ZD+HTHRmqSsLuVu>NEHRGkHYk^KjksYkv>8kC=ky+PYkxKA^K4g$^IxRX+C=k^Ry+^YkxMG+HYk^qZVqfOSsk^RCKVMxREPek^KoK^KskxZu^ur+OVuE+D2k^Axk^uqxAG+=2k^7xkVu>vIy+D2k^AskxuI^Axk^ZZxu^k^ZuDqz+y2kvAxk^ZOVuK|+^O^ZpV+xd^k^gu^dz+D2kvAr+I^ZD+yyHRmqSsLuVO>NGHRGk2=k^Kjk$=kv>8kD=ky+Y=kxKA^K4gDbxMX+D=k^My+U=kxqc+t^MxkVMKmA9N1xkVM>uxk^Mu^lIjkv>OgxkVMumZXvgRD+xqv>p^+^KeKxK^k^ZR^Oy+gv7y+22k^AskxOu^Ay+=2kVAjkv7g^Ay+U2kxI^k^Ou^IskxZO^Oxk^ZdHRG+G2k^OxkVZgv7R9+^uVZJvk^dxk^gAxdG+X2k^dr+7xu|+GHHR4qrsL>vOglVHRGk|=kxKG+E=k^KZVKfOSsk^MZVMfL8eh^>ZV>fL9N7^KoKVKjkvAR^Ar+AxAG+22k^OxkVAKv7y+=2k^OskxAO^Oy+D2kV7jkvOu^7xkVu>vOxk^uueZE+H2k^Axk^uAxAu9+^d^ufx+vgxk^gIVZE+N2k^ur+IVdY+soPR4qSsLqxAOlNPR8kS=k$ky=k=+4dTjtVMMv>4iPjgV>P+vZR^M^>VRJvk^KD+S=kVKQ+F^qxk^qqf6VyOxk^qZfWG=Lxk^qdfiSyIxk^qAfBYVLxk^q7f3yXLxk^q1fbeTgxk^qifJN^Ixk^qhfIXbxk^q3fFD>D+G=kVqC+mACDI^RRxRmOS<^gy+>vgy+S=k^dRxdmJl9h^uCkx7u^d^u^7fx+v7xk^ZRVOKvZ^g^ZpV+xKA^K4AGV+xZc+g^g9+P9PRfdSsLg^uZ2XPRHkV=k^Ky+j=kxMA^M47$C+x>c+g^qy+P=kxZA^ZR^Rskxqu^RR^MV>xqF^+^KjkVKx>2K^>xk^gqxuu^K^Z^gfx+vRZ^q4ZPouvdr+g^ZD+CEPRmqSsLgVA>SQPRGk$Uk^Kz+CUkv>Z^M4OPEgvqek^qRVMx>vRp^+^KeKxK^k^ZR^Aqxqvd^Zp^+V>Vkvqxk^dRVAQ+t^Ay+22kVOjkvOR^Oy+Y2kxO^k^Ag^Oz+22kv7xk^AuVOjkvug^AxkVdRGZy+G2k^7skxdt^7R9+VuxdF^+^ZxkVgOvgy+X2k^dy+uvA9+SSPR4>NsLt^AgHxPRjk2UkvMGklUk^MjkDUkvq8kEUky+TUkx>A^>4RPGAxMA^M4tl|Rx>c+g^qxkVqKmb=WRVMx>vRp^+^KU+lUkvM|k^KY+VqRvRGsPRy+EUkVKJ|+^>5^KV>xdF^d^quVqDxPRG+EUk^>pV>xKOGxPRp4RrVkvMoK^KxkVuKvOr+O^Az+o2kvIxk^ARV7E+l2k^7xk^AZx7G+D2k^IxkVARv1xk^ugVAjkvAusZy+j2kxA^k^uO^AqY+vu^up^+VZjkvdL^Zy+T2kxuc+I^d9+8CVRfdSsLO^AZ=8VRHksUk^KGkxUkxMHkVUk^>8k^UkE+oDk^MZ^MBKHU1^qZ^qBOQ|R^>r+gVRjkvZR4U+CcdKvR^>^RpV+xKX+CDk^K|kVKv+v>u^M=$VRz+HUkvqp9+^K0x>vM^Rp^RVMRv>V$VRy+CDkVZJvg^>g=8VRffAcVk^>oKV>jkvuR^Ar+AxAG+22k^OxkVAKv7y+=2k^OskxAO^Oy+D2kV7jkvOu^7xkVd>vOxk^duegE+H2k^Axk^dAxAu9+^u^dfx+vgxk^gJVZE+N2k^ur+IVdY+sUVR4qSsLZxAOGTVRGkDDkVKekEDky+DDk^>Rx>mgSsk^ZRxZmI8eh^KRxKmb|TL^MU+=Dkv>|k^MY+VKRvMGlVRy+lDkVMJ|+^Z5^MVZx>F^>^KuVKDTVRG+lDk^KpVKx>OyTVRpY+V>Vkvqxk^dRVAQ+t^Iy+22kVAjkv1R^Ay+Y2kxA^k^Ig^Az+22kvOxk^IuVAjkvug^IxkVdRlgy+G2k^Askxdt^AR9+VuxdF^+^ZxkVgLvgy+X2k^dy+uvO9+oNVR4>NsLt^ug$SVRjkNDkvMGkGDk^MjkSDkvq8kHDky+cDkxKA^K4RvSOxqA^q4uEskxKX+HDk^K|kVKv+v>u^M$rVRz+GDkvMp9+^q0xKvR^>p^>VMRv>srVRy+HDkVRJvZ^KgCSVRfKvMoK^KxkVAKvAr+O^uz+o2kv7xk^uRVOE+l2k^7xk^uZx7G+D2k^7xkVuRvIxk^AgVujkvOuCdy+j2kxO^k^AO^OqY+vu^Ap^+VZjkvdp^Zy+T2kxZc+I^A9+TsVRfdSsLO^dZy^VRHk29k^KGkY9kxMHkD9k^>8k99kE+X9k^KZ^KBK^DA^>Z^>B>o9+^KD+l9kVKE+E9k^qZ^qB7rSd^Mr+gVRE+E9k^ZZ^ZBbQcL^gxk^Rqxgu^q^M^Rfx+vqZ^>4g2Gtv>r+g^RskxRu4RQGLqx>v>^Rp^+VKVkvMxk^ARVdQ+t^uy+22kVdjkvAR^dy+Y2kxd^k^ug^dz+22kvuxk^uuVdjkvOg^uxkVARNuy+G2k^dskxAt^dR9+VZxAF^+^OxkVgav7y+X2k^dy+uv79+o$^R4>NsLO^7gD8^RjkX9kvMy+N9k^KRxKmgSsk^MRxMmtrHZ^KeKxK^k^OR^7y+gvAy+22k^Askxuu^Ay+=2kV7jkvAg^7y+U2kxA^k^uu^AskxOO^uxk^Od$OG+G2k^uxkVOgvAR9+^dVOJvk^Zxk^g4xZG+X2k^dr+7xO|+yU^R4qrsLgvAgCl^RGkj9kxKHks9k^MGkx9kx>G+H9k^KZVKfu887^MZVMfO$j+^KZVKKv>7^MH9^RffOCER^MoKVMjkv7R^ur+AxAG+22k^7xkVAKvIy+=2k^7skxAO^7y+D2kVujkvOu^uxkVO>vOxk^Ou|OE+H2k^Axk^OAxAu9+^d^Ofx+vgxk^g6VZE+N2k^ur+IVdY+XE^R4qSsLAxAOyr^RGk$lkVKykDlk^MGk=lkV>ekXlky+=lk^KRxKmRxDA^MRxMmgVD+^KU+2lkvMy+Dlk^MRxMmiQSd^>y+>vZy+Dlk^ZRxZmWD$Z^gskxRu^gR^MV>xRF^+^KZVKf7DGt^Rr+Zx>^k^>R4qTGLu^K^R^>fx+vRoK^qxkVdKvOr+O^Iz+o2kvOxk^IRVAE+l2k^1xk^IZx1G+D2k^AxkVIRvOxk^dgVIjkvuuy7y+j2kxA^k^dO^AqY+vA^dp^+VZjkvd<^Zy+T2kxuc+I^A9+Pc^RfdSsLO^dZDH^RHkElk^KGkQlkxMHkylk^>8krlkE+Glk^>Z^>BKHcu^MD+SlkVME+slk^KZ^KB>ssk^MZ^MB>YXg^KoK^KskxAu^dr+OVdE+D2k^Oxk^dqxOG+=2k^OxkVd>v7y+D2k^7skxdI^7xk^AZxd^k^AuX1z+y2kvuxk^AOVdK|+^u^ApV+xZ^k^g5^Zz+D2kvur+I^uD+yCCZmqSsLuVA>svCZGkHlk^Kjkslkv>8kCTky+PlkxKA^K4gySOxMX+CTk^My+^lkxMc+u^qxkVqKmdyDkxkVq>m7lGuCKVMfpVSO^q^KeKxK^k^uR^Ay+gvOy+22k^7skxAu^7y+=2kVOjkvOg^Oy+U2kxO^k^Au^OskxuO^Axk^udG1G+G2k^AxkVugvOR9+^dVuJvk^Zxk^g~xZG+X2k^dr+7x7|+C=CZ4qrsLgvAg$DCZGk8TkxKHk=Tk^MGkUTkx>UklTky+DTkVKMvM4RoSZVM2+ETk^My+lTkVMMv>4gCDkVKVkvMxk^7RVuQ+t^uy+22kVAjkvAR^Ay+Y2kxA^k^ug^Az+22kvOxk^uuVAjkvIg^uxkV7RNty+G2k^uskx7t^uR9+Vdx7F^+^ZxkVg5vgy+X2k^uy+uvu9+XXCZ4>NsLt^AgEjCZjkXTkvMGkyTk^MjkNTkvq8kGTk8kcTkekCXky+STk^KRxKmRxDA^MU+yTkv>y+GTk^KRxKmgVD+^>U+STkvqy+GTk^>Rx>mgC|I^RU+GTkvZy+sTk^KdxKENCZy+HTk^MfxMvMu^K2jCZz+STkv>Z^M4tTSdvgr+g^gz+GTkvqs+^>Y+VRdvZGyCZy+HTkVdJ|+^uUk^dVuxAF^A^RuVRDrCZF9+^RpVRx>O2SCZy+HTkVdMvu4BvCuVuJvA^>xk^gqx>u^M^Z^gfx+vMp^K^qZ=jCZFY+^qoKVqjkvuR^Ar+AxAG+22k^OxkVAKv7y+=2k^OskxAO^Oy+D2kVIjkvOu^IxkVd>vOxk^ductE+H2k^Oxk^dAxOu9+^u^dfx+vgxk^go+VZE+N2k^dr+IVuY+VxCZ4qSsLZxOOoPCZGkDXkVKE+XXk^KZ^KB>lE1^MZ^MBAX|k^KoK^Kskxuu^Or+OVAE+D2k^1xk^Aqx1G+=2k^IxkVA>v1y+D2k^OskxAI^Oxk^uZxA^k^uu$iz+y2kvOxk^uOVAK|+^d^upV+xZ^k^g$+^Zz+D2kvur+I^OD+=eeZmqSsLOVu>HveZGkEXk^KjkXXkv>GkyXk^>z+EXkvMZ^K4qe87vqZ^>4ZzctvMZ^KRVMdv>yveZp4ZH|Rv>oK^MxkVOKvAr+O^7z+o2kvAxk^7RVuE+l2k^Axk^7ZxAG+D2k^AxkV7RvOxk^OgV7jkv7uDJy+j2kxu^k^OO^uqY+vu^Op^+VZjkvd2+^Zy+T2kxZc+I^u9+e=eZfdSsLO^OZCleZHkHXk^KGkPXkxMHkC|k^>8ke|kE+$|k^KZ^KBK=SO^MZ^MBqUxZ^KD+o|kVK9kvMY+^MuVMC9eZG+o|k^KpD+xqC+^K^q^RfxRv>u^Ms9eZz+VXkv>p^M^KZH9eZFR^KoKVKjkvAR^Or+AxAG+22k^7xkVAKvIy+=2k^OskxAO^Oy+D2kVOjkvOu^OxkVu>vOxk^uu83E+H2k^Axk^uAxAu9+^Z^ufx+vuxk^g=+VdE+N2k^Zr+IVuY+NEeZ4qSsLAxOOsNeZGkl|kVKykN|k^MGkE|kV>E+y|k^KZ^KBKU87^>Z^>B>$4^KZ^KZxqi^qSNeZpB>$ER^qoK^qskxuu^Or+OVAE+D2k^Oxk^AqxOG+=2k^7xkVA>vIy+D2k^7skxAI^7xk^uZxA^k^uuy3z+y2kvOxk^uOVAK|+^Z^upV+xd^k^gD+^dskxRu^gR^>VqxRF^+^MZVMf7ycA^qr+ZxR|+CGeZ4qrsLKvAgDseZy+z2kx>=+4ACDIVqMvR4A=lLVRQ+O^Zy+G2kVdjkvgR^dRVqxRvgp^+^KY+x>vM^MoK^MskxRu^uR^MVqxRF^+^Kg||oZykH|k^K8ks|k$kG|kUkV|k8kCEk$kV|kUk$Ek9+leoZBkssLg^qD+x|kxqA^k4AQ^AxKT+^Kg^MdxMyVeZZ^kgVKC+mIjK^>0xKvq^qp^qVMRv>=^eZZ^kZxKF^K^qgT^eZJy=TrC>^qD+s|kVqE+H|k^MZ^MBRsEg^qr+gV>jkvqRRRVMxqvqp^+^KU+s|kvMgs2oZGk9EkxKUkXEk$+4gUMvRZ^q4ZTDkv>r+g^>z+=Ekvgp^Z^R8kxZO^ZD+lEkVZjkvqR^RRVqxMvqp^+^K2kxK$DL^RD+XEkVRE+NEk^K$+4gUMvqZ^>4d|euvZr+g^gz+DEkvAxk^gRVuKvq^R^gpV+xZGk^K^Z^MeKxMG+V|k^RZVRf1N^A^KD+^|kxKG+CEk^KuVKo|oZ=+4dTMV>Mvq4uzeuVRQ+O^qy+H|kVgE+V|k^u=+^gVuxZG+CEk^gpVgxu4^gg^gU+H|kvdA^Z^uVdjkvRR^dRV>xRvRp^+^KU+CEkvMy+V|k^qz+H|kvgZ^q^ZVK2+2Ek^Ky+V|kVRE+$Ek^qy+V|kVKE+=Ek^gZ^KVgxZ^k^R^q^Zz+s|kvMy+$Ek^qz+V|kvZxk^K^qVRE+V|k^KpgVqokvM^q^qD+c|kxqONYoZy+V|kVRVkvZskxk^Rqx>ck^K^R^MeKxM^k^qL^gD+HEoZmqSsLgVZ>G$wGkSEk^K$kyEkUksEk8kHEk$ksEkUkCQky+SEkVKMvM4gCvhVM2+HEk^My+SEkV>Mvq4golLVM2+VEk^My+SEkV>Mvq4gEsgVM2+CQk^My+SEkVKMvM4g9DuVM2+oQk^My+SEkVKMvM4gNvZVM2+$Qk^Md^My+>vR9+XSoZ4>NsLO^ZgC$wjkoQkvM8k=Qk8kUQkY+S|~4qSsLZxKX+=Qk^Ky+YQkxMG+VEk^>=+VMx>vMD+DQk^Kgx>A^>4g^eOxRc+g^qr+|+xZG+CQk^dr+7xA|+$soZ4qrsLgvAgCVoZGkQQkxKHkyQk^MGkrQkx>G+SQk^MZVMfu887^>ZV>fO$j+^MZVMfISEg^>r+Zxq4Rt^Zskxqu^ZR^MV>xqF^+^KZVK>vq7^>HPoZffOCER^>oKV>jkvOR^ur+AxuG+GEk^OxkVuKv7y+sEk^OskxuO^Oy+HEkVOjkvAu^OxkVA>vAxk^Auv+E+XQk^uxk^AAxuu9+^d^Afx+vdxk^ZRVgE+$Qk^dr+IVuY+XovZ4qSsLdxAOC2vZGkVQkVKyk$Nk^M8koNkz+HQkvMZ^K4ZYbvRD+oNk^qz+VQkv>r+t^>skx>u4LHj+skx>ORxk^>dHGI^k^>Ogskx>L4ZXvgqY+v>^>p^+VKVkvMxk^uRVAQ+t^Ay+GEkVOjkvOR^Oy+cEkxO^k^Ag^Oz+GEkv7xk^AuVOjkvAg^AxkVuR=ky+DQk^Askxut^AR9+VdxuF^+^gxkVZ>vdy+CQk^gy+uvu9+DDvZ4>NsLO^OgCXvZjk$NkvMB2TvZy+YNkxMA^M4grskxKA^K47TlOxMA^M4tyqxKc+g^qxkVqKm1jr7RVMxKvRp^+^>eKiOsTvZBY+okxKvkGkR^KeK36Y+skxkVdKv7r+O^Az+yEkvtxk^ARV1E+VEk^7xk^AZx7G+HEk^OxkVARv7xk^dgVAjkvuuDKy+UQkxA^k^dO^AqY+vd^dp^+Vujkvgu^uy+^Ekxdc+I^u9+UNvZfdSsLu^OZHjvZHkENk^KGkQNkxMUkyNk8kSNk$kyNkG+NNk^MZVMfO=zd^KD+zNkxKG+ENk^KZVKfOSsk^>ZV>f3VlL^qZVqfieQg^KekVRKvR^K^RpV+xMX+SNk^My+zNkxKl+^K4iPlLxMX+GNk^My+jNkxKG+SNk^MUkVKxMvqu^>SjvZeKfdSsLy+SNkVKVkvMxk^uRVOQ+t^Ay+GEkVIjkvOR^Iy+cEkx7^k^Ag^7z+GEkv7xk^AuVOjkvAg^AxkVuRoMy+DQk^Askxut^AR9+VdxuF^+^gxkVZgvdy+CQk^gy+uv79+DHvZ4>NsLI^ugoS$ZjkHNkvMGkozk^M$kCzkG+ozk^KZVKfO$t^>D+vzkx>G+$zk^qy+^NkxMA^M4grskxR|+HVvZ4qrsL>vqgyr$ZGkUzkxKUklzk8kXzk$klzkUkNzk8kyzk$kNzkUkGzk8kszk$kGzkUkVzky+DzkVKMmqSsL4ulCAvqr+g^qz+Rvd$+4uE9gxdc+g^AxkVAK6rk^d^AVu$+vd^u^ZZVZfOevu^dr+Zxg|+Gv$Z4qrsLKvAgV2$Z$+BqQM^>Z^>BRjeu^Mr+gVqC+mdTM^dRxdmAXvd^ZCkxgu^d^Z^gfx+vZYk^RCcGKVZjkvRR^ZRV>xMvRp^+^KeKxK^k^gR^uqxZvu^gp^+VRjkvRR^RRBkssL^>^qpV+xM^k^K4AsEgxMG+Dzk^KZVKfa|zu^>jkV>xMI^MHU$ZoK2+E+Xzk^MZ^MBIzzu^KD+lzkVKE+Ezk^KZ^KBA$YZ^MD+XzkVME+Ezk^MZ^MBOcHZ^KD+EzkVKE+Ezk^KZ^KBAX|k^MD+NzkVME+Ezk^KZ^KBOr2+^qD+yzkVqE+Ezk^KZ^KBgCUA^MD+SzkVME+Ezk^KZ^KBg=U+^MD+GzkVME+Ezk^KZ^KBiyDh^MD+szkVME+Ezk^KZ^KBO2cL^MD+HzkVME+Ezk^MZ^MBOUS1^>D+VzkV>Q+F^My+XzkVqjkv>R^qy+|zkxK^k^Mg^Kz+XzkvMxk^MuVKE+Gzk^qxk^MAxqG+Szk^qxkVMuvRy+Gzk^KskxMJ^Ky+szkVKjkv>L^Ky+xzkxK^k^MJ^Kz+szkvMxk^MaVKVkv>CK^q^RV>xK2K^Kxk^Oqxuc+O^uy+jEkxA^k^uR^Az+SEkvOxk^ugVAE+CQk^7xk^udx7^k^Og^uskxOIV>y+DQkVujkv7O^uRD+xgv7p^+^dskxZL^dy+CQkVuQ+L^d9+ls$ZBkssLg^Ag^x$ZykXyk^Ky+DykVKMvM4g=E1VMMv>4AljAVKMvM4uvxkVMVkv>xk^dRVAQ+t^Oy+GEkV7jkv7R^7y+cEkxA^k^Og^Az+GEkv1xk^OuVIjkvug^OxkVdRyqy+DQk^7skxdt^7R9+VuxdF^+^gxkVZOvdy+CQk^uy+uvu9+DC8Z4>NsLI^Ag=v8ZjklykvMGkNyk^M$kEykG+Nyk^KZVKfOrSO^MD+zykxMG+yyk^Mr+dx>^k^>R4gEDk^k^>g4dV|d$K^M4ueEdx>vMoK^KxkVdKvOr+O^Oz+yEkvOxk^ORVAE+VEk^Axk^OZxAG+HEk^AxkVORvOxk^dgVOjkvuu2Ry+UQkxA^k^dO^AqY+vA^dp^+VgjkvgL^gy+^Ekxgc+I^u9+QY8ZfdSsLO^AZD98ZHksyk^KGkxykxMHkVyk^>y+PykxMA^M4R$87x>A^>4gvj+xMA^M4urEgxRc+g^>fqOvgxk^>RVZKv>^R^>pV+xKA^KO^qOxqX98Zp4g^|Rxq2K^qxk^uqxAc+O^Oy+jEkxA^k^OR^Az+SEkvIxk^OgV7E+CQk^Axk^OdxA^k^ug^OskxuIDZy+DQkVAjkvAO^ARD+xgvAp^+^dskxZp^dy+CQkVuQ+L^A9+G|8ZBkssLu^dgvN8ZykDrk^KGk=rkVMekXrky+=rk^KRxKmgXY1^MU+2rkv>y+Drk^>z+orkv>Z^M4ZNskvR=+^>^qVKVkvMxk^ARVdQ+t^dy+GEkVOjkvuR^Oy+cEkxO^k^dg^Oz+GEkv7xk^duVOjkvOg^dxkVARNZy+DQk^dskxAt^dR9+VuxAF^+^gxkVZLvdy+CQk^gy+uvO9+XS8Z4>NsLO^ugNV8ZjklrkvM8kNrk8kzrkaHP8Zy+Erk^MRxMmgSsk^KRxKmAzY7^RU+ErkvZs+^RY+VMdv>lc8Zy+yrkVKJ|+^qUk^KVqx>F^>^MuVMVc8ZF9+^KpVKx>O2x8Zy+yrkVKMvM47xUuVMMv>4AGY+VqJvR^>D+NrkV>9kvqY+^KuVKEH8ZG+Nrk^>pD+xqC+^>^q^MfxMvMu^KDP8Zz+XrkvMp^K^qZlP8ZFY+^qoKVq>EV8ZBY+vkVKx+HkR^KoK2+a9+skxk^Aqxuc+O^uy+jEkxO^k^uR^Oz+SEkv7xk^ugVOE+CQk^7xk^udx7^k^Ag^uskxAINZy+DQkVujkvOO^uRD+xgvOp^+^dskxZF^dy+CQkVuQ+L^A9+Ho2ZBkssLO^dgc22Zyk=Sk^KGk2SkVMyklSk^>8kDSkz+$SkvMZ^K4qjDAvqZ^>4ZsD+v>D+DSk^Mz+2Skv>Z^M4tTSdvMr+g^Rz+2SkvRZ^q4m^^7vgxk^RRVZKv>^K^RpV+x>2K^>xk^Aqxdc+O^dy+jEkx7^k^dR^7z+SEkvIxk^dgV7E+CQk^Oxk^ddxO^k^Ag^dskxAIEgy+DQkVdjkvOO^dRD+xuvOp^+^gskxZ6^gy+CQkVdQ+L^A9+$92ZBkssLO^ugQX<ykySk^KGkNSkVMykGSk^>8kSSkz+ESkv>Z^M4qyU1vRZ^q41U|Rv>r+g^ZskxZu4n8|7qxqv>^Zp^+V>2+sSk^>|k^>2+xKI^KXT<y+rSkxMOEeekgX92>ZV^Tki^q$E2Zy+z2ZxMA^M4RjU1xKV+^Kg^MfxMvR7^qDQ2Zz+E2ZvMZ^K4A|vuvqs+^>3VKJvM^q7^q|N2ZE+G2Z^KZ^KBgjvu^Ms+^MZxKF^K^quVq$y2ZG+CjR^My+UjRxKA^K4gY2gxqG+ljR^KZVKfOY>^>xkVMxqvqy+G8Z^Mz+E2Zvq=+^M^>VKSk^k^RR^Zqx>vR^Rp^+VME+22Z^Mxk^MBqXl+Iy+H8ZVqVkvRgoj2Z2+VKuv>u^MSc2Zz+V8ZvRZ^q4u|sgvZr+u^dskxdu4Ay97z+V8ZvgZ^Z4g=Ivdxk^dgVgKvR^R^dpV+xM2K^Mg$s2Z8+xKJ^Mu^MYs2Z>Vs2Z2+^K4Z^X+vZu^RoH2Zz+V8ZvuZ^d4gyyRvZek^ZRVdxRvgp^+^MeKxMOExeMskxkVMKvZy+y8Z^ZskxMO^ZR^>VqxMF^+^KoKVKjkvgR^gRVqxRvgp^+^>Y+xKvq^MD+E8ZVMY+D^2Z4qSsLZxKOXeYZTkCYZjkV2ZvMy+E8Z^MRxMmuXGt^>y+RvRL^RxkVqKvZxk^qgVkKv>^>^qpV+xK2K^KoK^KCkxKu9+^>^Kfx+v>D+VjR^Mv+f7X=I^>ZV>fOlxO^MekVRKvq^M^RpV+xKX+CGR^KekVM2+2GR^MB=2YZv+f1CDI^qZVqf199O^Mr+ZxZG+DjR^RxkVZKvZR^q^MVZJvk^KD+oGRVK>X9YZB=o^+vkVKx+HkR^Ky+UjRxKp^K^MZVMf1N^A^R2+VRKvd7^gD9YZfKvdZ^M^gVK2+=GR^Ky+oGRVZMvg4dHygVuQ+O^Oy+DjRV7E+=GR^AZ^7VAx1^k^OR^1qxZvA^Op^+Vdokvdg^gFVgxRvu7^d$=YZb$o^+G+CjR^My+UjRxRA^R4grDAxgG+XjR^KZVKfO=zO^OxkVMxgv7y+CjR^Mz+2jRvZZ^R4Z$2gvMy+ljR^gRxgmgSX7^RskxMvM^Ry+CjRVKE+XjR^RZ^RB>sn^M$+4u$^dvZZ^R4OjUuvdZ^g4uyY+vZxk^K^MVRE+$jR^Ky+DjRVMMv>4gQ8kVgjkvM^g40e21>ojxkgXN=>gcT2u>$z=qg$z=qy+^SuxK2K^KS+^Kz+=SuvRxk^K4A|vuvRy+lI^qRxqmIxDZ^Ry+>vgy+DSu^gskxZu^gR^qVRxZF^+^>xkVKfOv$I^>xkVKfIQsLboKVK2+Xed^>9+ySYZBkssLR^qgPsUZUk=ju8k2ju8kYjuekXju8klju8kTjuY+lY=Z4qSsLZxKX+2ju^KS+VKjkvM4ZyTZBOel+xk^K4RDlLm1so1xkVKfAjvI47H2IjkvM4Z|9gB1YDkxk^K4RsoImAQFxkVKfAT^k47$rRjkvM4ZzrdBq^$uxk^K4RXYumiV21xkVKfAyC74h|S1jkvM4Z|XIBLHzLxk^K4RoU7mac6xkVKfA$Vt4hxHdjkvM4ZcDABtv8hxk^K4Zlltmu^S7xkVKf7ycu4A$RjkvM4gzQkBdVckxk^K4ZV$ZmO2^kxkVKfOQYZ4AjrZjkvM4g9cABfNGIxk^K4gUl1m4XGIxkVKfIHCg4BDPAjkvM4gzcgBi^|Zxk^K4geUum6xz7xkVKfI2A4fE^7jkvM4gSC1Bt$PZxk^K4ZNrtmOcCAxkVKfO8$Z4I8Xg2+lju^KS+^Mr+xq^k^M4R$87xqs+^Kxk^MBK2SZ^KD+DjuVM>$DUZGkNju^K$kEjuUkSju8kGju$kSjuUkHju8kVju$kHjuUkoGu8k$Gu$koGuX+yju4qrsLa29=Zy+lI^KRxKmIxDZ^>y+>vRy+Nju^Rskxqu^RR^KV>xqF^+^MD+zjuxMOH9=ZBY+okxMvkGkR^MU+EjumgU87B2+2+sju4qSsLbGT=ZG+Nju^>ZV>fieQg^qekVdKvq^q^dpV+xMX+Sju^MgrX=Za9+vk^R^+jkKvZD+Sju4Z8876Y+S+^Mz+XjuvR$k^q^RskxMmAszg^Rz+XjuvZZ^R4OPEgvdek^ZRVRxgvgp^+^qskxMm1jF^qz+EjuvRxk^M41C9gvRD+Gju^MU+Sjuu$+4A^UIxMA^M4dl|+xdc+g^Zy+Qjuxg^k^ZR^gqxMvu^Zp^+Vq2+CGu^qy+sjuVqE+CGu^gZ^gBZS^A^Zl+^qVZxdI^dos=Zy+xjuxZG+sju^dZVZxdvRD+Vju^qblG=ZG+Gju^Zy+PjuxqG+Nju^dy+Pjux7A^d^7^ORxOm7eQg^dCkxAu^O^d^Afx+vdxk^Z^qVg>$c=ZBY+vkVqx+HkR^qB2+E+Vju^Zp^ZVqokvgg^ZD+cjuxZOoy=Z$+4uHUIvRZ^q4WG2+vgr+g^dz+XjuvAxk^dRVuKvR^Z^dpV+xgp^g^ZZVZf1N^A^u2+VuKvu7^d2eUZfKvuZ^Z^dVg2+$Gu^gBH^=Zz+yjuvOy+CGu^7z+Xjuvhy+CGu^tRxLvi^IZ^IBd8Qg^tek^iqxIvi^ip^+V1jkvO^7^1g9CUZa9+vk^A^+jkKvOBY+2kVd>vuF^d^uVAdvOCP=ZD+oGuqC+mACDI^uRxumdT|+^dy+>vgy+Nju^ARxAmIlu^1skxZu^1R^uVdxZF^+^gD+vGuxgG+oGu^Zy+vGuxgA^g4AQ^AxAE+^Z^A^7dx7sUUZy+$Gu^dz+VjuvdZ^d^gVZ2+DGu^ZB$=UZz+yjuvgy+2Gu^gz+XjuvIy+2Gu^1Rx7vt^AZ^ABd8Qg^7ek^iqxAvI^ip^+Vdjkvg^g^dgz=UZa9+vk^Z^+jkKvgBY+y+eGuxZF^Z^d2kVZ>vgD+oGu^ZZNvUZG+Gju^ZoKVZE+VPg^MZ^MB>lE1^Kek^>qxMvM^>p^+Vq2+Eju^qy+=juVKtvM^qZ^qBZS^A^>2+^>qxZi^ZVjUZpqxZA^q^Z^KU+DjuvMBXQUZy+UjuxRA^R4R$87xgG+Xju^Ry+9IxuA^u4IsDZxAc+g^7y+8juxO=+4A=^dVIE+lju^iy+XjuVhMvL^h^LZVIxLvi=+^O^tV1jkvIR^1RVuxAvIp^+^dskxgvZ^dgVQUZbv+Yk^A^+GkqxA6Y+BySUZz+2juvZZ^R4qVrZvdy+Xju^Rz+=IvOZ^A47jDZv1r+g^dz+ojuvty+lju^tRxtmL|zu^Lz+$juvLy+Xju^JRxiv3^hZ^LVhxtl+^1^t^7skxdu^7R^AVIxdF^+^OxkVgxRv7g$jUZB2+^+vd^+GkRVga9+2k^ZgVZpvg^>^R7VRNlUZs+^Kxk^KBgjvuby+lIVRMvZ4IxDZVZQ+O^>y+DjuVgjkvqR^gRVRxZvqp^+^qskxKmgv$I^qskxKmuQsLbeKxKX+led^q9+rxUZfdSsLR^MZHGDZQkCcu8kocu$kCcuUk2cu8k=cur+x>^k^>4RvSOK^k^>4RH9AK^k^>4R8$IKX+ocu^>$+BRN2Z^Mek^>ykxMvq^KD+$cuVKC+mACDI^KRxKmhozL^>y+gvRy+$cu^Rskxqu^Rxk^qZfIroIS+^RD+HCDZmqSsLRVg>ovDZTklcuy+ecuxKA^K4RvSOxMF^M^K2kVM>v>y+ocu^qskxqmR$SO^MeKfdSsLxk^RB>NDu^gxk^qdxRu^K^>^qfx+v>$+4A^UIxMA^M4hezLxqc+O^Ry+vcuxZ^k^RR^ZskxRO4d|Hur+xZ|+l2DZ4qrsLKvdgD=DZTk|cuE+2cu^KZ^KBKelA^>p^>VKokvqg^>y+ecuxM^k^M4RH9Ax>2K4qSsLskxZmgXDu^gskxRI^ZR^MVqxRF^+^>$+BZ$DI^qZ^qB12zL^Rr+OVgE+=cu^dxk^gqxd^k^gg4AjVks+^Z9+G9DZBkssLR^dgrTDZUkGcuy+ocu^KRxKmR2$I^MfxMvM2k^MgVME+2cu^>xk^>BKD$I^MoK4>NsL^k^Z4gTDuxd^k^gu^ZqxqvZ^gp^+V>C+mOlXZ^RRxRmgyK^Zy+>vuy+$cu^uskxdu^uR^RVZxdF^+^>y+ecux>A^>4RvSOxgT+^gR^>dx>yNDZy+ocu^ZRxZmRP9A^g=+xgu^Zp^ZV>RvqSzDZy+ocuVgMvd4R2$IVZ8+vgR^dpVdx>X+2cu^>y+8cuxZI^ZNyDZpvKx>OorDZ$+47zKvgp^Z^>U+$cuvqS+^>y+8cuxZ^k^>4ONvuxZG+lI^dZVdfLxDZ^ur+ZxgG+ocu^OxkVgKv7R^d^uVgJvk^Zxk^>B>Y$I^Zy+=cuVZjkvq4uXrLVZjkvq4uQsLpVkvqD+Xed^MD+ycDZmqSsLRVK>NS9ZTkVcu8k^cuek2su$+4AY^dxKA^K4tDxIxMA^M4Ac9uxKX+Csu^KS+VKN+v>y+Csu^>Rx>m1PlI^gz+HcuvqZ^>4ts^AvRyk^g^qVRjkv>4RxDAVRE+$su^>Z^>Bbejd^Zy+CsuV>Mvq4mr27VqEkvg^q^>xkVMfOo|7^>y+^cux>A^>4JU=ZxqG+Csu^RZVRfBlSZ^ZykVqxZvqxk^M4RQxuvqy+Csu^>Rx>micn^qz+HcuvqZ^>4LHoAvZyk^q^RVZjkv>4RVQdVZE+$su^>Z^>BOv8u^qy+CsuV>Mvq4LSoZVREkvR^R^>xkVMfOQVd^>y+^cuxqA^q4t$Eux>G+Csu^qZVqfax|t^gykV>xgvRxk^M4ZUlZvRy+Csu^RRxRmhlEh^qz+HcuvqZ^>4JlEuvgyk^q^ZV>jkv>4R$suV>jkvM4RTy1VMN+vRy+Csu^>Rx>m1|jR^Rz+Hcuv>Z^M4hEN7vqyk^R^>VMjkvR4gsYgVME+$su^MZ^MBLESZ^>y+CsuVRMvZ41|jRVMEkvq^M^RxkVqfO2QA^Ry+^cuxgA^g4iP^AxMG+Csu^>ZV>fBlSZ^ZykVMxZvqxk^q4ZsNOvqy+Csu^ZRxZmiclZ^Mz+HcuvqZ^>4ts^AvZyk^M^RV>jkvR4deWV>E+$su^MZ^MBIsoZ^Zy+CsuVMMv>4iclZV>Ekvg^>^MxkVqfIT^+^My+^cuxMA^M41QUhxRG+Csu^MZVMfaSoZ^>ykVRx>v>xk^q4dzXAv>xk^K4qlouvRD+osu^Kr+xM^k^M4ONvu3G+lI^RZVRfLxDZ^Kr+ZxqG+osu^ZxkVqKvgR^R^KVqJvk^>xk^MB>Y$I^>xk^MBRrsLboK^MU+ledvM9+2j9Z4>NsLu^MgGDTZlkosuUk=su8kDsu$k=suUkXsu8kEsu$kXsuUkysu8kSsu$kysuUkssu8kHsu$kssuUkCxuD+=suBOel+y+sPg^>Rx>mg=E1^MCkxqu^>^M^qfx+vMD+Dsu^Kz+$suvM$+4AY^dxMQ+^K^M^qU+=suvR$+4AY^dxqA^q4hN|+xRc+g^My+Ysuxg^k^MR^gqxqvZ^Mp^+VK2+Nsu^KD+EsuBMePuD+Nsu4RcHuX+ysu4ZHHuE+Esu^Ku^KzllZaCelZ$+4AY^dxMG+=su^ZZVMxZvZZ^R4OPEgv>ek^ZRVRxMvgp^+^KU+lsuvMgSelZB2+^+vM^+GkRVK2+ysu4gU87bv+6X$lZy+lIVMMv>4IxDZVdQ+O^Z$+4u$^dvdy+=su^ARxgvO^uxk^Zqxuu^M^d^Zfx+vMD+Nsu^KZ$8lZ6Y+vk^KV+yku^KD+NsuB>T87BY+Br9lZC+mA=^d^Kz+$suvuZ^K^dVZMvg4teeZVgMvd4d|HuVKS+vM4A^l+VZRvgN9lZ$+4uHUIvuZ^d4gU|+vdr+g^Av+f1=^d^uy+YsuxOA^u^O^7skxAu^7R^dVgxAF^+^ZZVZfISEg^gr+Zxu4RB^Oskxuu^OR^ZVgxuF^+^KD+zsuxKOEllZBY+okxuvkGkR^uU+EsumgU87B2+E+lsu^Ky+DsuVgMvd4L|zuVuU+vM^u^AD+rsuxAG+Dsu^gZVgfa|zu^uZVuffz|+^Ar+ZxgG+=su^OxkVgKv7R^u^AVgJvk^KD+GsuVK2+Vsu4ZPHuU+GsumZPHuD+PsufAPHuy+SsuVKRvMV^lZBSzlZz+2suvdZ^g4i9zuvOy+=su^ORxAv7^gZ^gBd8Qg^Oek^Aqxgv7^Ap^+VK2+Vsu^KgEylZbv+Yk^A^+GkqxAX+ssu4g=87a9+BEjlZy+9IxOA^O4IsDZxKc+g^7y+UsuxIA^I4LXzux1G+=su^tZV1xtv1xk^7RVIKv7^K^7pV+xAX+Hsu^AgUGlZa9+vk^A^+jkKvOD+Hsu4Z8876Y+BC^lZz+2suvMZ^K4i9zuvIy+=su^tRx7vi^AZ^ABO8eZ^KZ^KBqzHu^As+^ABZvT+^Ku^KxVlZC+mACDI^7Rx7mdT|+^Iy+>vi$+4AY^dx1G+=su^iZV1xivhxk^tRVLKvI^I^tpV+xKA^K4urEgxIc+g^1fqavixk^1RVtKvM^I^1pV+xAX+Vsu^Agc^lZa9+vk^1^+jkKvtD+Vsu4Z8876Y+y+lsuVARvOSCTZy+XsuVIJv1^Au^AYeTZE+ssu^Ip^IVARvOseTZy+GsuVtJvi^AD+CxuVAN+vOy+Cxu^1skxAmOzvu^1z+=IvtZ^147jDZvLr+g^tr+xLG+lsu^hxkVLfu887^hy+Tsuxh^k^L4ZoN1xhG+Ssu^hxkVLfuoSZ^hy+jsuxJ^k^L4ZE|+xJG+Esu^hxkVLfAQC1^hy+QsuxJ^k^L4ZYNhxJG+ssu^hxkVLfOQUk^hy+xsuxJ^k^L4gN<xJG+Vsu^hxkVLfA=l+^hy+zsux3^k^L4Z^$7x3^k^tR^Lqx1vL^tp^+VIjkvO4gv$IVIjkvO4uQsLpVkvOD+Ned^MD+l9TZmqSsLRVM>yvXZTkVxu8k^xuek2Hu8k$Hu8k8Hu2+$HuH+$+4OyTtvZr+g^M5fOs874RHRx>YK^>4Z=rgxZYK^Z4LTvAx>YK^>4RlHdxqYK^q4AUDAx>YK^>4RDaxqYK^q4dVTOx>YK^>4goH7xqYK^q4ZjvhxZYK^Z4Roux>YK^>4uTc1xqYK^q4d8UOx>YK^>4Az97xqYK^q4RHRx>YK^>4OYkxqYK^q4Lxxkx>YK^>4Az97xqYK^q4RHRx>YK^>4Z2txqG+CHu^>e+Vqx>vgvK^Z4qUHdvqxk^MRV>QkvZ^M^KD+eHuxK=+4ACDIVRMvZ4hozLVMQ+t^>y+oHuVqjkvqR^qxkV>>md|HuS+VqY+oGTZ4qSsLqxgODGTZTkDHueKf7yrZxk^qB>NDu^gxk^>dxqu^R^M^>fx+vMy+oHu^Mz+Hxuvq=+^M^>VK2+=Hu^KS+^Mz+VxuvMZ^K4g9Huvqxk^M4qc9Avqy+$Hu^>Rx>muxYk^qy+>vgy+oHu^gRxgmd|Hu^dskxZu^dR^>VqxZF^+^KZVKf1N^A^qxkVMfAPHu^qy+vHuxZA^Z4usYkxgc+g^dxkVdKmRDTdRVZxgvup^+^KRxKmAN^A^uskxMmZsj+^uU+oHuv>S+^KxkVKftzvuby+9IxqA^q4IsDZxMc+g^dy+8Huxu^k^dR^uqxqv>^dp^+VgjkvM4gv$IVgjkvM4uQsLpVkvMD+yed^MD+$$XZmqSsLRVK>CyXZTkXHu8k|HuekSHuy+sPg^MRxMmg=E1^>CkxRu^M^>^Rfx+vMD+EHu^Kr+x>G+lI^qZVqfLxDZ^Rr+ZxZ=+4ACDIVAMvO4dT|+VdQ+O^O$+4u$^dvIxk^ORV7KvO^d^OpV+xuA^u4urEgxdc+g^Ofqav1xk^ORVIKvA^d^OpV+xg^k^ZR^gqxqvZ^Zp^+VKjkvq4RYUgVKE+EI^ZZ^ZBu^DZ^dr+gVRC+mACDI^7Rx7mdT|+^Iy+>vLy+EHu^1Rx1mL|zu^Lskxiu^LR^7VIxiF^+^OZVOfISEg^1r+ZxI4RB^LskxIu^LR^OV1xIF^+^gxkVRKvdR^Z^dVRJvk^Kxk^>BK2SZ^KD+NHuV>N+vZxk^R4A|vuWy+lI^gRxgmIxDZ^Ky+>v1y+NHu^dskxIu^dR^gVKxIF^+^>xkVRfOv$I^>xkVRfIQsLboKVR2+sed^K9+yyXZBkssLR^KgUY|ZUksHu8kGHu8kcHuekCPu8kVHuS+VK2+HHu^KS+^KskxKmg9cA4BDGI^k^K4dll1fmXGIxk^KB>TDg4B9PAskxKmgzcg4Jj|Z^k^K4d$Uuf5xz7xk^KBqXo74fQ^7skxKmgSC14hHHZX+sHu^KD+xHu3G+sHu^MJVMxqA^q4AQ^AxMD+^MR^>Ox>=$|ZpR^>Rxqvq^KD+VHuVKE+VHu^Ry+VHuVgMvZ^g^Z$+BZl^d^dT+^ZVdxgI^gXv|Zy+jHuxZG+VHu^RS+VgC+mA=^d^uz+SHuvuy+VHu^7RxdvI^AZ^uVAxO=k^O^AxkVgfuGcu^A$+BZl^d^uy+sHuVOE+oPu^1Z^OV1xIA^u^I^7Rx7m7eQg^uCkxOu^7^u^Ofx+vOZ^A4u$yZvAr+u^OskxOuRxk^OZEIu^A^u^Ofx+vuxk^g4qCSOvuxk^Z^RVg2+CPu32k^>Zx><^>^M^ROxRoxXZS+^My+xHuxK^k^M4ONvuxKG+lI^>ZV>fLxDZ^qr+ZxRG+GHu^uxkVRKvAR^>^qVRJvk^Kxk^MB>Y$I^Kxk^MBRrsLboK^MU+yedvM9+o=|Z4>NsLu^KgGG|ZlkoPuUk=Pu8kDPu$k=PuUkXPu8kEPu$kXPuX+=Pu4gjz72+XPu4gGz7U+=PumgGz7$+BdNlO^qZ^qBI$yg^Ku^Kjz|ZC+m7XlO^KRxKmLCyg^MRxMmIGou^KU+DPuvMy+XPu^MdxM=T|Zy+XPu^KRxKmAN^A^MU+2Puv>$+47TlOxMA^M4L^zgxKA^K4IGX7xMA^M4uY$+xKc+g^qwBM9$h4RYUgVRjkvRR^RRVMxKvRp^+^>U+lPuvqy+EPu^KdxKlQ|Zy+EPu^KRxKmAN^A^qU+=PuvR$+47TlOxKA^K4L^zgx>f4g8zdV>xKI^KGz|Z$+BdNlO^>Z^>BI$yg^gZ^gB>Uzd^>D+=PuV>N+vMy+=Pu^qskxKmg8zd^qz+2Puvqxk^K4RyHkvqy+lPu^>skxKmgS91^>U+XPuvMS+^KxkVKftzvuby+9IxZA^Z4IsDZxqc+g^uy+QPuxR^k^uR^RqxZvR^up^+V>jkvM4gv$IV>jkvM4uQsLpVkvMD+sed^KD+lc|ZmqSsLRVK>sYQZTkVPu8k^Puek2Vu8k$Vu8k8VueklVu8kDVu9+TXEZfdSsLg^KU+VPuvMS+^KD+^PuxKX+$VuR$+BZ$DI^MZ^MBqQ|+^>r+gVqC+mA=^d^Rskxqu^RR^MV>xqF^+^KD+8VuxKG+$Vu^Ky+8Vux>A^>4AQ^AxqE+^K^q^>dx>X9EZy+2Vu^Kz+CVuvRZ^K^qV>2+lVu^>$+4u$^dvMy+=Vu^qRxKvR^>$k^>VKS+vM47UXuVqRvRlDEZ$+4u$^dvqy+=Vu^RRx>vZ^qZ^qBd8Qg^>ek^Rqxqvq^Rp^+VKC+muX2Z^ZRxZm7eQg^RCkxuu^Z^R^ufx+vdZ^g4A$81vZr+u^d~fIX2Z4R2Ugxu^k^dR^uz+$VuvAxk^dgVuKvd^R^dpV+x>C+^K^>^RdxREDEZy+oVu^>z+$VuvZ=+^>^RVK2+XVu^Ky+DVuVK8+vMI^duVd=DEZG+CVu^>y+YVuxK=+4A=^dVdE+lVu^1Z^dV1xAA^A47CQgxd8k^uR^AVdxuF^+^RxkV>xKvZy+$Vu^KfxKvq2k^KgVK2+=Vu^KgNP|Zr+x>^k^>4ONvu3G+lI^RZVRfLxDZ^dr+ZxuG+CVu^OxkVuKv7R^R^dVuJvk^Kxk^>B>Y$I^Kxk^>BRrsLboK^>ZNYQZHkSVu^K8kjVuekVVu8kHVu8kPVuek$^u8ko^u8kv^uekD^u8k=^uS+VK2+HVu^Ky+C+VME+sVu^>=+^MV>xRX+sVu^RB8GEZPkXsEZy+sVu^KRxKmR$SO^MCkxqu^K^M^qfx+vqy+sVu^MRxMmRP9A^RCkxZu^M^R^Zfx+vRD+HVu^qRxqmdsPd^RSkxRvRu^qoGEZz+GVuvRZ^q4dx1vZD+VVu^Rz+sVuvRy+GVu^Rl+xqvZ^Zu^ZUjEZE+HVu^qy+VVuVRMvR^R^dpZxZDk^d^Z^ZskxqvZ^ZgVjEZz+yVuvRy+VVu^RskxqvZgg=NEZZ2sEZ6DsEZvk^ZV+yku^Zy+sVuVRMvZ4RTy1VZQ+O^gy+RVdjkvdR^dRVRxZvdp^+^qbv+8KY+y+sVuVZMvg4RNDtVgP+vuR^Z^gVdJvk^qokB2+2+$^uRD+o^uqC+mACDI^gRxgmdT|+^dy+>vAy+GVu^Askxuu^AR^gVdxuF^+^qD+v^uxqG+o^u^qy+v^uxdA^d4AQ^AxuE+^q^u^AdxAEYQZy+$^u^dz+VVuvRZ^d^qVu2+D^u^uy+GVuVdE+D^u^uZ^dVuxqG+SVu^dZVdf1N^A^O4VqxOvuD+=^u^dz+HVuvRy+=^u^dv+f7TM^AZVAfOyK^7r+ZxIG+=^u^OxkVIKv7R^A^7VIJvk^u$+4gUMvIZ^74ZEKv1r+g^tskxtuuR^7VIxtF^+^O4VuxOv1A^d^IVuhvR^u^uD+^VuxuG+o^u^qpVqxdDk^qg^qU+VVuvRg2VEZy+^Vuxd2K^dD+HedVKY+N=QZ4qSsLqxKOH8zZTky^u$kN^uUkG^u8ks^u$kG^uUkV^u8kCCA$kV^uUk$CA8k2CA$k$CAUkDCA8klCAD+EDQZmqSsLgVM>=XQZTkECAGkQCAxKG+NCA^>ZV>fieQg^RekVqKvq^R^qpV+xMA^M4uY$+xRc+g^qwBtN2I4qSsLVZjkvRR^ZRVMxRvRp^+^KSkxKvZoK^RD+r^uxM|+HXQZ4qrsL>v>gGNQZTkrCAykHCA^Ky+GCAVqMvR4IluV>Mvq47eQgVqP+vgR^>^qVZJvk^MZ^MBRl$+^Rr+gVq<mJX2I4>NsLvdxk^qRVgKv>^R^qpV+xKxk^K^RoKVR2+H^u^M9+EzQZBkssLg^KgYsQZUkCeAGkVCA^Kz+sCAv>Z^M4OPEgvqek^qRVMx>vRp^+^KSkxKvq$+4uT2ZxRA^R47CQgxZ8k^gR^RVZxgF^+^qZVqft=81^Zr+dxgo+4uX2ZBK9Ug^dxk^gqxdG+VCA^dZVdf7|Hu^OZVOfieQg^dekVuKv7^d^upV+xA^k^gg^Aqxqvg^gp^+VK8kvq^K^ZoKVZ2+V^u^K9+CxQZBkssLg^MgQHQZUk2eAGk$eA^Kz+CeAvMZ^K47=uv>$k^M^Kc+xKmIjK^MeKxMX+H^u^M9+UPQZfdSsLg^MZ$CNZQk=eAGkDeAVKE+XeA^MZ^MBd8Qg^>ek^qqxMvq^qp^+VKE+XeA^RZ^RB1G8+^qek^ZqxRvR^Zp^+V>6vM^>^qoKVq2+oCA^MS+^Kz+N^uv>xk^K4R=Ndv>y+G^u^ZskxKmZQ2d^Zz+S^uv>xk^K4ReYAv>y+V^u^MskxKmZEo1^Mz+G^uv>xk^K4qYHkv>D+CCA^KD+C$NZmqSsLgVK>NQNZTkXeAGk|eAxKUkNeA8kyeA$kNeAUkGeAS+^KU+XeAvMD+yeAbz+H^uv>J^M^>Rx>mAN^A^M8+xMu^R7^RY9NZJu^RZ^>VRxKX+SeA^Ky+^^uxZG+SeA^gZVZxgvRD+GeA^qbsUNZG+GeA^Zy+|eAxul+^Z^u^qdxqVUNZy+NeA^qz+NeAvgxk^q^ZJ2+GeA3gXDNZbv+Yk^q^+Gkqxq6Y+2k^RZxR<^R^M^qOxqV2NZy+yeA^KdxKEQNZy+NeA^Kz+=IvqZ^>47jDZvRr+g^Rv+f1CDI^gZVgf5H2+^dr+ZxuG+EeA^AxkVuKvOR^g^dVuJvk^Zxk^RqxZu^>^q^Rfx+v>xk^K4Z9^Iv>y+NeA^Mz+leAvMZ^K4OPEgvgek^qRVKxZvRp^+^RskxMmgNo1^Rz+XeAv>oK^MskU+V^uvMS+^KD+vCAxKc+5^KxkVKKmuSc1xkVK>mdzxtxkVKRmu|$uxkVKgmOS9gxkVKumuxSRxkVKOmuXPIxkVKImdx$hxkVKtmtcz1xkVKLmuSX+xkVKJmADQkxkVKam79POxkVKpmirG7xkVKBmt|NRxkVKFm1v3D+8CAxKX+=CARy+8CAxKX+DCA^Ky+YCAxKG+DCA^MZVMf1N^A^>l+VKx>v>u^MoVNZz+2CAvMy+=CA^>RxKvq^MD+lCAVME+ECA^K$+4u$^dv>T+^K^MVqRvR$PNZy+$CAVKE+ECA^qy+oCAVMC+mA=^d^>z+=CAvdZ^>^gVZE+=CA^>CK^MVZx>vZxk^K^qVRE+lCA^Mp^MVKokv>g^MD+YCAxMO$GNZ$+4u$^dvMh4O9XZxKvqu^>s^NZv+f1=^d^KhB>GK^K^MpVMx>I^>HozZy+vCAxKA^K4O9XZxRG+oCA^K$+BZl^d^MZ^MBgEXZ^ZZ^ZB>GK^qy+$CAVMnvM^q4tVYuxMvqxk^R4ZEKvqS+^KxkVKftzvuby+9Ix>A^>4IsDZxqc+g^Ry+vCAxd^k^RR^dqx>vR^Rp^+VMjkvM4gv$IVMjkvM4uQsLpVkvMD+Ved^KD+E2zZmqSsLRVK>$XzZTkloA8kToAekyoA$+47TlOxMA^M4LyPZx>c+g^ZxkVZKm7xX+RVMx>vgp^+^KU+DoAvMy+XoA^KskxKmIGou4a8l7s+^RD+EoAVRE+yoA^Ky+XoAV>Mvq4IGouVqjkvM4gzEgVqN+vMxk^K4A|vuWy+lI^qRxqmIxDZ^Zy+>vuy+EoA^gskxdu^gR^qVZxdF^+^>xkVKfOv$I^>xkVKfIQsLboKVK2+$od^K9+GXzZBkssLR^KgrGzZUkGoA8kSoAS+VKC+mdX=I^>Ckxqck^>^q^MEkxMvq7^>EEzZffAPHu^>xkVKfAPTO^>$+BqN=I^qek^RykxqvZ^>Z^>Bg|R^qek^Zqx>vR^Zp^+VMdv>CzzZp4RcHuv>xk^K4Rez1v>$+4dT=IxRA^R4g9xOxZ8k^qR^RVZxqF^+^M7VMCrzZF4ZPHuVMjkvM4ZjoiVM2+soA^KS+^KskxKmOzvubz+=Iv>Z^M47jDZvdr+g^dz+NoAvAxk^dRVuKv>^g^dpV+xZ^k^K4go$IxZ^k^K4uEsL32K^KD+oodVKY+NczZ4qSsLqxMOXyyZTkCvA$kVoAUk$vA8k2vA$k$vAUkDvA8klvA$kDvAG+sPg^MZVMfO=E1^qekV>Kv>^q^>pV+xKX+ovA^KS+VKC+mA=^d^qskxKmR887^qz+VoAvqZ^>4i9zuvRxk^K4qVrZvRD+$vA^Kr+xK=+4ACDIVqjkvM4R^cAVqC+mACDI^>Rx>mIlu^RskxKmg|zt^Rv+f1CDI^>ZV>fLDNh^qxkVKfOVG1^q$+BdHTt^>xk^KBKSDt^>$+4OyTtvqZ^>47=uvRxk^K4Z^SZvR$+47jTtx>A^>4IUNhxR^k^K4gYN1xR=+4OlXZVqMvR4IluV>jkvM4RxDAV>2+DvA^KS+^>U+$vAvqy+$vA^>hx>vMZ^K4uX^AvZ2+^RRVqdvRXQyZpRVqMvM^q^>D+UvAx>G+=vA^Zy+UvAxgs+^dxk^ZVgxdG+2vA^ZJVZxgA^g4AQ^AxdD+^dR^uOxuHEyZpR^uRxgvA^ZD+lvAVZE+=vA^Oy+DvAVIMv7^I^7ZV7f1CDI^OZVOf7T|+^Ir+Zx1G+2vA^7y+9vAxiA^7^i^tskx1u^tR^OVIx1F^+^AD+TvAxAG+XvA^AZVAf1N^A^7U+V7KvOu^AoEyZz+$vAvOy+DvA^7RxAvI^Iy+lvAVAE+NvA^1Z^1BqXGt^7r+gVijkvLR4REGLKvt^7^ipV+xt^k^I^A^t8kxuO^uF^uVdxAi^AV=yZ2kVq>vRF^q^RVgdvdl2yZS+^KskxKmOzvubz+=IvRZ^q47jDZvZr+g^Zz+$vAvdxk^ZRVgKvR^R^ZpV+x>^k^K4go$Ix>^k^K4uEsL32K^KD+$odVMY+DryZ4qSsLqxKONlrZTkGvA$kSvAUkHvA8kVvA$kHvAUko$A8k$$A$ko$A6lUrZy+sPgV>Mvq4g=E1VMP+vRR^>^MVqJvk^KD+svAVKN+vM$+4AY^dxM^k^K4R$87xMG+svA^MZVMfa|zu^ZxkVKfuoSZ^ZD+xvAxKs+^KD+VvAVK2+$$Ab~4AsVIm18VI^KoKxKmAe2I^MoKxMmA98I^qU+VvAvRy+HvA^KhxKvZZ^R4uX^Av>2+^MRVqdvRo2rZpRVqMvZ^q^KD+v$AxKG+VvA^Zy+v$Axgs+^uxk^ZVgxuG+HvA^uy+v$AxAA^u^A^dRxdmdx$h^ARxAm7eQg^dCkxuu^A^d^ufx+vdZ^g4dNEgvur+u^uskxuuRxk^uZHfu^g^d^ufx+vgD+2$A^Zz+o$AvuZ^d4AlQgvAr+g^Oz+VvAv1xk^ORVIKvu^u^OpV+xZ4Rg^urkxZvA^7u^798rZE+o$A^Zy+$$AV7Mvg^7^uy+8$AxO^k^u4RVcAxOX+C$A32kVq>vRF^q^MVZdvgHHyZS+^Kz+HvAv>xk^K4A|vuv>y+lI^qRxqmIxDZ^Zy+>vZy+VvA^uskxRu^uR^qVZxRF^+^MxkVKfOv$I^MxkVKfIQsLboKVK>ElrZBY+vkVKx+HkR^KS+VKjkvM4OzvupE+u^RZ^RBd8Qg^7ek^ZqxRvI^Zp^+VMjkvM4gv$IVMjkvM4uQsLJVkvMBY+skU+oodvM9+DTrZ4>NsLu^>gHUSZlkl$AUkN$A8ky$A$kN$AUkG$A8ks$Ar+xK=+4A=^dVMjkvM4R887VME+VPg^>Z^>B>lE1^qek^Rqx>vR^Rp^+VMMv>4L|zuVRjkvM4RoSZVR2+S$A^KS+^KU+E$AvMy+N$A^KhxKv>Z^M4uX^Avu2+^dRVqdvRH2SZpRVqMv>^q^KD+r$AxKG+N$A^Ry+r$AxAA^R^A^gRxgmA=^d^RRxRmiQl1^gvkxgvZD+G$A^RU+S$AmqSsLy+j$AxRV+^R4AxzuxZI^ZCcrZy+9IxRA^R4IsDZxZc+g^gy+Q$AxAG+S$A^IZVAxIv7Z^O4u$^dvIZ^74tTl1vOxk^gRVAKvZ^Z^gpV+xuX+s$A^ugTVrZE+EI^AZ^ABu^DZ^Zr+gVOE+S$A^1y+S$AVtMvt^t^IZVIf1=^d^tZVtf3Ql1^IZVIfieQg^1ekVtKv1^1^tpV+x7^k^OR^7qxAvg^Op^+VuMvA4uSEgVZQ+I^7xk^7qK^k^7gEAqxuvg^7p^+Vg2+V$A^gy+y$AVZE+s$A^gS+^Oz+y$AvIxk^O4qycuvIy+s$A^7skxOmR$SO^7v+f1CDI^tZVtf7T|+^7r+ZxiG+N$A^Jy+r$AxfA^J^f^LRxLmiQl1^hskxiu^hR^tV7xiF^+^1xkVOfuPlL^1$+BZ$DI^1Z^1BJrjt^3r+gViE+S$A^hy+S$AVJMvJ^J^LZVLf3Ql1^axkViKvfR^1^3ViJvk^7xk^OBK|Hk^7xk^ZVgxODk^qg^q4xqvu^Z7^ZzNrZN+vMxk^K4A|vuWy+lI^qRxqmIxDZ^Zy+>vuy+y$A^Oskxdu^OR^qVZxdF^+^MxkVKfOv$I^MxkVKfIQsLboKVK2+lod^>9+yDSZBkssLR^KgUrjZUk28A8k$8A8k88Aekl8A8kD8A8k98AekN8A9+SySZ4>NsLO^MD+l8AVME+VPg^MZ^MB>lE1^>ek^qqxMvq^qp^+VK2+=8A^KD+28A1Y+DXSZ4qSsLZxKOlySZTky8AjkN8AvM8kG8Ay+r8AxMA^M4dT=IxZ8k^Mrk^ZVMxRA^R47CQgxq8k^MR^RVqxMF^+^>ZV>fI=$+^Mr+ZxZo+47YXdBkssL^qxk^Zqxqu^>^M^Zfx+vMD+G8A^Kz+y8AvRs+^qY+VZRvgDzSZoK4Zyz7G+G8A^gZVg>v>7^M=ySZffOGz7^MoKVM2+l8A^KgXljZjks8AvM8kC2A8ke2AE+o2A^MZ^MBZ$DI^>Z^>BqQ|+^Mr+gVRE+o2A^qxk^Rqxqu^>^M^Rfx+vMD+C2A^Kz+s8AvZZ^R4uHUIvMZ^K4fTjtvRr+g^Rz+s8Avgxk^RRVZKvM^q^RpV+xMX+o2A^MS+VME+$2A^qZ^qBZS^A^Rxk^MBgPY7^Ry+C2AVZMvg4uSEgVqQ+I^gxk^gqKG+28A^dxkVg>vuR^Z^qVgJvk^Rxk^MBuSDZ^Ry+C2AVRMvZ4uSEgVdQ+O^gy+28AVOhu^O^7xkVgKvIR^R^dVgJvk^qxk^MBdsG1^qy+o2AVqMvR4AN^AVdjkv>47|PdVdE+22A^gZ^gBRsEg^dr+uVOjkv7RRy+88Axu^k^Og^uqxgvu^Op^+Vqjkv>41PvhVqE+22A^dZ^dBRsEg^ur+gVAE+D8A^IfRVIx1^k^AR^1qxdvA^Ap^+Vqjkv>4I8c1VqE+l8A^uy+V8AVA$+vA^A^qxkVMf3r$I^qy+U8AxuG+V8A^A=+VuxAvRxk^M4LPNuvRy+V8A^qRxqmA=^d^uRxum7XlO^qRxqmdcTd^uRxuma9Cg^AskxMmaPed^Az+s8AvRZ^q4u$^dvAZ^u4ODlOvRZ^q4gjmvAZ^u43YCgvRxk^M43$VtvRy+V8A^qRxqm7XlO^uRxumtoeK^qRxqmAN^A^uskxMmtoeK^ueKxM|+CTjZ4qrsL>vMgD|jZTk82Aykl2A^Ky+=2AVMMv>4dX=IVqP+v>rk^q^MV>Mvq4aN=IVMP+vZR^>^MVRJvk^KoK^KU+28AvMS+^Ky+98AxR=+4A=^dVq$+vZ^q^>xkVKf1vyd^>y+98Ax>G+$8A^RZVRfa|zu^Z=+V>xZvRxk^K4uVzZvRD+X8A^Kr+x>^k^>4ONvu3G+lI^KZVKfLxDZ^Rr+ZxZG+X8A^gxkVZKvdR^K^RVZJvk^qxk^>B>Y$I^qxk^>BRrsLboK^>U+2odvM9+oSjZ4>NsLu^KgS|GZlk=2AUkX2A8kE2A$kX2A|+VcjZ4qrsL>v>D+E2A^Mz+SPgvqZ^>4Z$E1vMek^qRV>xKvRp^+^MU+D2Av>S+^KxkVKfuYUg4ZYThjkvM4RoSZBMlThD+N2A^KZ22GZHkS2A^K8kj2AekV2A8kH2AS+VM2+H2A^My+G2AVME+s2A^>Z^>BZ=HA^Kxk^MBZ=HA^Ky+G2AVKE+s2A^MZ^MBd^vd^>xk^KBd^vd^>y+G2AVKP+v>xk^K4u^eOv>D+s2ARz+S2Avqy+S2A^KRxKmAvoO^MRxMmAN^A^K9+x>vM^Mu^M^8GZE+s2A^KZ^KBZYoO^qy+s2AVMMvR^M^KZVKfIla^>vKV>fusTu^Ky+r2AxMA^M4AooOxZG+s2A^gZVZxgv>Z^M4Av8dvRe+^K^qVM2+CYA^My+G2AVKMvM4AvoOVqMvR4dHygVKQ+O^>y+H2AVRjkvqR^RRVqxKvqp^+^Mz+S2AvMp^K^M8kxKO^KD+s2AVK>oVjZy+G2A^KeKxK=+4I8ehVq1mL8Hg^qVMRv>H=GZy+N2AVqE+y2A^K$+47eehvZZ^R4ieHgvg=+^K^ZVMjkvR4RYUgVME+N2A^KZ^KBIzzu^MZ^MBuUeh^Kh4ieHgvM^Mu^MrlGZE+S2A^Ky+E2AVME+N2A^RZ^RBIzzu^ZZ^ZBuUeh^RZ^RBIUHg^d=+^MVdxq^k^K4ReSZxqs+^Kxk^KBgjvuby+lIVqMvR4IxDZVRQ+O^Zy+N2AVdjkvgR^dRVqxRvgp^+^MskxKmgv$I^MskxKmuQsLbeKxKX+lod^K9+TEGZfdSsLR^KZyNsZQk2YA8k=YA$k2YAUklYA8kXYAD+X2sZmqSsLuVK2+NYA^KS+^KskxKmuVzdRU+$YAvMD+DYAb5fOQC74OPe1xKX+lYA^KBQGGZC+mACDI^qRxqmWYTI^Ky+RvZ$+4BjQOxZA^Z4IUNhxg^k^RR^gskxRO4iQSdqxqvM^Rp^+VMMv>4u^1VRP+vMR^M^RVKJvk^>S+^>skx>mOzvubskx>mgv$I4IeHu^k^>4uEsLi2K^>g$^GZbv+Yk^K^+GkqxKG+=YA^Ky+TYAxRG+lYA^gy+qxZA^Z4uyoIxd$K^R^g^dV>jkvM4ZXQgV>E+lYA^>Z^>BMNQg^ZZ^ZBgyQg^>r+gVRE+EYA^gxk^Rqxgu^Z^>^Rfx+vMfRgV>6vM^>^RuVRC^GZG+=YA^KZVKfIVzd^>pV>xKDk^>g^>z+$YAvZxk^R4dszdvqBY+BQ$cZC+mACDI^RRxRmWYTI^gy+Rvu$+44YGAxuA^u4IUNhxA^k^dR^AskxdO4iQSdqxRvd^dp^+V>Mvq4u^1VgP+vuR^>^gVdJvk^KS+^KskxKmOzvubskxKmgv$I4IeHu^k^K4uEsLi2K^Kg$9cZbv+Yk^g^+GkqxgG+=YA^gy+TYAxdG+lYA^uy+qxAA^A4uyoIxO$K^d^u^OVKjkvd4gVNuVKE+lYA^dZ^dB>ozu^uZ^uBgyQg^gr+gVdE+EYA^Axk^dqxAu^u^g^dfx+vMfRgVg6vM^g^duVdC9cZG+=YA^KZVKfIVzd^gpVgxdDk^gg^gz+$YAvMxk^K4dszdvdBY+BQEcZC+mACDI^ARxAmWYTI^gy+RvI$+47jTtxOA^O4IUNhxI^k^7R^Iskx7O47eQgqxAvd^7p^+VKMvM4u^1VOP+vdR^K^OVgJvk^dS+^dskxdmOzvubskxdmgv$I4IeHu^k^d4uEsLi2K^dg$jcZbv+Yk^O^+GkqxOG+=YA^dy+TYAxOG+lYA^7y+qxIA^I4uyoIx1$K^O^7^1Vgjkvu4ZQC1VgE+lYA^dZ^dBMrC1^OZ^OBgyQg^dr+gVIE+EYA^7xk^Iqx7u^O^d^Ifx+vdfRgVd6vd^d^7uV7CjcZG+=YA^gZVgfIVzd^dpVdxIDk^dg^dz+$YAvdxk^g4dszdvuBY+BQHcZC+mACDI^dRxdmWYTI^Iy+Rvi$+4I$ehxiA^i4I9ux1^k^tR^1skxtO4I8sLqxdv1^tp^+VgMvd4gXDuViP+viR^g^iVtJvk^7S+^tskxtmOzvubskxtmgv$I4IeHu^k^t4uEsLi2K^tg$vsZbv+Yk^I^+GkqxIG+=YA^Iy+TYAx7G+lYA^hy+qxtA^t4uyoIxi$K^7^h^iV1jkv14RVQdV1E+lYA^tZ^tBKoNd^iZ^iBgyQg^7r+gVLE+EYA^Ixk^LqxIu^i^7^Lfx+vtfRgVI6vt^I^7uV7CvsZG+=YA^7ZV7fIVzd^1pV1x7Dk^1g^1z+$YAv1xk^I4dszdvtBY+S+V7E+XYA^Ixk^7Bgjvu^Iy+lIVtMvi4IxDZV1Q+O^Ly+=YAVhjkvhR^hRVtx1vhp^+^Iskx7mgv$I^Iskx7muQsLbeKx7OGNsZGko=AVKyk==A^M8k2=A$k$=AG+$=A^>ZV>fho=k^Rr+dxM^k^MR4YkCvO^k^Mg41DXtu^>^R^Mfx+vRZ^q4IVYkv>r+u^R~facrd4R2UgxO^k^RR^OskxRO4hvvIqxqv>^Rp^+VK2+D=A^Ky+2=AVKMvM4OEQgVMQ+O^uy+o=AVZjkvAR^ZRVKxMvAp^+^RU+$=AvZy+==A^RaKO^M5^RVMxdI^dNEsZy+8=AxZA^Z4urEgxRc+u^uxkVuKuy+==A^goKxglq^Axk^uZxAu^Z^R^ufx+v>D+2=A^MZDNsZG+2=A^dZVdfISEg^Rr+dxg^k^gRRskxgOyIR^dVRxgF^+^MD+8=AxMG+2=A^RoKVR2+Nod^K9+EzsZBkssLR^KgPGHZUkN=A8kE=A8kQ=AekG=A8kS=A8kj=AekV=A8kH=A8kP=Aek$UA8koUA8kvUAekDUAS+^KxkVKf7$rI4qrsLjkvM4ZVzZBkssLD+E=A^KCkxKX+N=A^KekVK2+G=A^K$+4dD2ZvMek^>rkVKx>v>D+S=A^MCkxMA^M4A|CAx>c+u^qy+dxR=+4ACDIVgMvd4pQjtVAQ+O^O$+4dD2ZvIZ^7472NhvAxk^ORVuKvd^A^OpV+xZl+^R^Z^dskxqu^dy+uVdC+mACDI^7Rx7mpQjt^uy+>vOy+S=A^OskxAu^OR^7VuxAF^+^Z=+VdxZvZxk^qgVRKv>^>^qpV+xKX+G=A^Ky+nxKG+G=A^R=+VKxRvqD+s=A^>by|xZ8KHQxZ9+=CxZBkssLR^>gj9xZUkEUA8kXUAy+x=AxKA^K4uV1xMX+XUA^My+z=AxKA^K4dxygx>c+g^Ry+TUAxZ^k^RR^ZqxKvq^Rp^+VMC+mACDI^>Rx>mhozL^Ry+gvRy+S=A^gskxqu^gy+XUAVZjkvRg^ZS+VdY+X8xZ4qSsLqxZOyDxZTkNUAz+DUAvMy+E=A^>l+xKvq^qjk^qVKRvMoYxZy+E=AVKE+NUA^Mxk^KVMKG+E=A^Ky+TUAxqA^K^q^MfxMvq2k^MgVME+y=A^Ky+XUAVqjkvM^q^My+Q=AxMA^M4dxygxqc+g^Ry+TUAx>^k^RR^>qxMvR^Rp^+VKVkmqSsLxkVdfOXDu^ZxkVqRvuR^>^RVqJvk^MskD+P=Ax>G+s=A^qZVqfu$SO^>ekVRKvR^>^RpV+xKG+s=A^RZVRfuP9A^ZekVuKvZ^Z^upV+x>X+H=A^>ZV>f7sPd^ZjkVZx>I^>y|xZy+P=AxA3^A^>geTxZ>CNxZBHQxZvkV>x+HkR^>y+c=AxdA^d4Rly1xuc+g^Zy+qxA^k^ZR^AqxdvA^Zp^+V>a9+eKY+y+c=AxIA^I4RQDtx>8k^AR^IV>xAF^+^Zokbv+G+u^Z$+BZ$DI^AZ^ABJrjt^Or+gV1C+mAGSO^tskx1u^tR^AVOx1F^+^u=+VZxuvqD+CUA^>z+5vgy+CUA^OY+xZv7^>D+oUAV>allHZeKlXHZ9+QjxZfdSsLR^>Z$=HZQkHUA8kVUAz+CUAvMZ^K4dx1vqD+VUA^>bXYHZ=+4AGSOVKE+oDA^MZ^KVMx>=k^>^Ms+VMf1jR^>uV>DYHZ=+4ACDIVKMvM4hozLVqQ+t^Ry+S=AVZjkvZR^Z$+BZHSO^>y+VUAVdMvq^d^ZxkVR>vgS+^>9+8PxZfdSsLR^ZZ=$HZQk2DAy+VUAVK|kmZYz1^KVME+y=A^qT+^MVqxRxk^R^KuVKN^xZG+E=A^Ky+PUAxMjk4ZYz1VMx>^k^K^>Rz+l=AvMy+VUA^qNkfAYz1^q^MRxKv>^>p^>VMokvqg^>y+|=AxqG+VUA^KzkBM9z1^K^RxkVqxRvqy+N=A^KRxKmdHyg^>y+>vRy+VUA^ZNkfAYz1^Z^Rskxqu^RR^KV>xqF^+^MoKBkssLxk^>4ZDDuvgxk^RuV>KvM^q^RpV+xMG+y=A^MZVMf7Hyg^qr+ZxRG+VUA^ZzkBM9z1^Z^dxkVRKvuR^M^qVRJvk^>go=HZbv+Yk^>^+Gkqx>6Y+skD+8UAx>G+oUA^ZZVZfu$SO^uekVOKvg^u^OpV+x>G+oUA^1ZV1fuP9A^OekVtKvt^O^tpV+xuX+$UA^uZVuf7sPd^OjkVOxtI^t$lHZy+8UAxi3^i^ugQUHZ>EXHZBlXHZvkVOx+HkR^Oy+eUAxOA^O4Rly1xtc+g^iy+qxL^k^iR^LqxOvi^ip^+Vua9+eKY+y+eUAxLA^L4RQDtxi8k^tR^LVixtF^+^uokbv+=+4OlXZVhMvJ4gyKVtQ+O^iy+S=AV3jkvLR^3RVhxtvLp^+^uz+l=AvAy+N=A^aRxamdDGt^iy+>v3xk^JRBKrGLR^a^iVJJvk^txk^uBq=rI^ty+E=AVtE+G=A^JZ^JBqXGt^ir+gVpjkvbR4REGLKv3^i^ppV+xu^k^t4ZPzZxus+^uxk^uBgjvuby+lIViMvL4IxDZVfQ+O^py+E=AVbjkvbR^bRVixfvbp^+^tBeyhUkCksKCkEkH+|kCkzkEkck|kHKzkHkDK2KyK8KDkSkvkxkykjk$kGkDk^kckjKHK9K|KjK|kXKYKHkvkxKPk8KskzkeK^+cKNkHKeKeKvkSKNkzkSk|KCKGkcKHkeKsKv+2KskPKzkeKjKSKjkHkP+sKNkyKXKNKsKDKCKNk|k9kQkGKCKSK$k|KsKP+GkSK^K2+Y+oKlKE+GkN+Ry+eKUKT+ykN+CKXkvksKPkHK9krkDkEKPKvkHkyKH+eMHkvk=kxkTk4hoKXk9KH+YkykSkXkvkyKjkYKfQkEkh=+$KSkUKv+vKyk|KHkeKDkH+eMNKzkHkSK|kNkNKNKzkCKyK$k9kCkPKTk8kCKeKSkvK^+SKzK9kGKEkDkGkVKsKsKHkNk9k8KSkzkSkNklkzKHkSKrKxk2KzKUKck$KUKPkCKGKzkHkxKekCKPKzkeKrkDkzKlK2k9krkDk$kPKXkHkNk|K$k$KHk$KjKPkSKe+sKEkvKTksk9knXkCKH+Yk5l+DkHK=K=KHkeKCkUKckHK8kCkXkjK|kskeKlKlK=kokTkUkSKTKrKNKxklKSKxKQkQkDkNkTKDkxK^kEKEKCKjkUk8kQKlKlK9k=K2K$k|KsKxKH+rkVKxK2+Y+eKUKG+ykN+Rz+v+2KTKU+ykeku1yKR2+eKUKT+ykN+Xkxk|kjkHkeKeKrk=KeMvkyKIHK9KXKsKeKXkEkokDk|KeKSkNkNkDk2kzKYKCKGkCKvK9KCkTkvKjkskYKGKokNkoKeKsKzkUKskYkHkrKGK9KYkjkeKHkvk9K2KCKekCkXk2K|kXKSkSkNK^+Gk<eK8kCkokGkskF$K|Kp2KVKDKVKHKEKDK|K2kvkHkEk=KNk2keKHkHK^+CKeKHkeK8kH+eMrKSkDKDkGkHKeKCKPKNkGk8K8kGK9kjK^+YkDkSkPKNkGkeMzkVKCkHK^+skVk|keKrkzKyksKHkPKNkNkeM$KSklKcKGksk8kHkeKTk^+SKHk=k$KDk2KeM=krKYK9KTkoK$KSkUKv+GkxKzkHkPKcKH+skPKsKsKUKSKjkGKeKzk$kyK|klKHkckDkCK|kY+rKlKHK2KjkCkSkPKw$kNkDK|KCkSKGk|kvKHk|KNkvKHKPKDKHkcK|kskeKSKeK^+Dk$kPKsK$k^+CKCKzKEk|Kxkyk8KeKGKEkvK3HKGKPKEkv+vKsk8kHkeKyKyK|ksKHk$+vKNkTK$+8kCkcKH+jkHkvkYK|k9KCKeK9kCkHKXKjkHkjKzkTkGkjkHKPKzkCKH+CKsKCkPK$kyK|kCkvkzKjKDkskPKQk9k9KPkVK|KHk9kDk2K9KHkDKNKrk=KjkHkeKYkNKCk|K9kXkDKYkH+EKCkPKzkxkPkHKDKzkCk$kGkVKHkzkzK^+CKCKSklKzkDKH+eMlKjK$+vKNkTK$+$KGKUKC+HKDKDKHkHK|kYkGKeKNKcKvKHKvkSkVkekTk8KGKPKvkDkvKXKUKHkjKXKGk8KCk$KHkHK|kHK9k$+VkxkTkNk9ke+2kTkYkskQkGK9krKTkPkHkDKzkcKQKXKe+$K$K8k9KHKeKHkPKNk^+$k8kCk2kHKskYk$kHk$KrkPkykHkeKeKrkPkXkSkPKsKNkPkEKDKzkSkCKckHK$KHkb~ZxKj+bw|k9K=KsKzkEkDkGkQKoKGK$+=KEkS+U+xKFsKp9+xKvkok77V+yKxKP+qV+V+yKxKvkeku3s+yKzkX+2KDk|K9kGKNkQKskeK$KckHKCKeM|KsKGK9K^+$kSkFGKUK2KCM|+l+vkjKPkSK2keKHkTkH+VKzkHkeKxk^+9kGKPKvkDkGk8KsKvkYKyKNk|kvkHkvkxkekCKPKzksK8k|kskskzkeK^+cKNk2kDKe+CK$k=kCkPKGK9K^+$kSkFVkjKekCKgnDKrk^+CKDKsKy+X+DkCKzkDkSkHK|kCKjKzkGkNk|k8KCkQklKNkGkVKvkeKGKTkNkeMU+FFjKPk|kSkPKXkvk=K8K$KlKeK2kyKVKYKs+DkjK9KjkCkSkPKNKGkxKzkjKeKYkH+=K$KQkSkoklkCK|+ok8K9krKHKYkjKCK7YKSKl+zkCKTk$KG+yKCkckcKGkeMzkeKCkxkSKHKPKEk$+XKNk$kPKzkHkCK|K9KeKSkzkNkYkCKDKSkPKcK|kv+$KHknz+0oKCkPKvkrksk^KoKQkCkHK^+$kPKXkPkjKCKCKxKyk$KrkPkCK|KeKSkSKQkeMbSkYKTk2KeMQKlKzkNkNkeMrkGKDKxkzKlk$KsKHkNkP+CK=klKHkcK|k9kHkGKvkxkPk$KvK=kPKvKQKCKGKzklKCKGkVKGKlKvk^+Nk<VkHkQkvK>=KHk$KSkCKlklk9kQk9kQk9kVkvKNkU+vkCkT+jkIvkNK=kXkHKcKjkykQkcKrk=KlKyKvK|kSkGKvkxKekCKPKzkHKHK^+$kPKDK9k9K^+CKsKEk|KCKNkxKrkPKs+XKyKVKsKVkSkCK^+skPK$KSk9KSKCK$KSk8kxkSK9KGK|KHkv+CKskUK$+QK9K|kjkSkPKYkrkekCKeKrkGKUKGkVKrKDKDkjKcKeMSkzknUKyK|k9knGKw2K|kGKsKsKwyKVKnGKnyK=KeMDKzkCkrkcKDksKHkPKNkPkykvKHkQk9KDk$KvkCKvkxkcKjkCkrKCkxkPkoKVkzKEkXKGkCMeKeKSkCKCKHKzkDKYKsKCkHkjk2kDkrKCkrKCKPkHKoKokUKHKekzKxKzkDklkPkCKykNK8k$k2kDkrKCkzkSKPkHKHk|KVkzkSk9Krk2KHK9kHkskNkPk$kPKXkDKXKYkV+wl+jKuZo+Hk|KlKEk1sklKzkHkCKvkCKCkXkYKNkDkCKzkSKVkHK9k8KSk|KHkCK|kykvKHksKUKPk$k|KzkSkCKSKv+okyKSkCKH+NkCkPKQkjKSKNkHkzk|kCKNkzKHkeKzk|keKHK9klKHk8k2Ksk$K$KSkHKQkskeKSKeK^+Dk$kPKPKYKXKSKXKeKHkHkHKlKoMHkQkXKDKYk8K=k$+$Krk8K=+DkSk$KEkNkrkSkjKzKxkzKjkvkvkzkC+^+$ksKDKYKjKPkNkCkPKXkNKH+=KHkvkQkEkPkCKGKNKHkEkskDk2k9ksK8k2KskPKrKCkTkokcK9kGKXkcKcKrkVkVkHkEkDk|kXkVkUKXKPk$k8kGKzkxkP+skSkzkCkQKcKCKjKzk2kyKPkHK$KHkHKDkGk=KHkPKzkTkH+$kPKVKCkHK^+skVkVKCKHkZWVKCkPKPKHkeKvKSKVKck0zkYkSKPkxKXkzkskvKNk=+Ck=kU+8K9k=kP+8kYKsK8KYKzkUKrKQKVKHksKUKI$k|KCKH+eMzkzkHkvK9K|kGKzkHkxkcKYkHkDKNKxkzKCKDKNKHk|kSK$k|KYKGKcKNKoKPK|keKrk9KCKeKzkEkDkcKEkCkPKzkS+yk8KeKGKEk=+0=+$KSkUKv+CkCKPKlKQKjKPk9kSk8kHkCK|KCKjKzksKxkYkcKrKVkCkHK2kCKrKskYKjKPkzKlKsKGKTkGkYkGKzkGKcKskVkzkSkeKjKDkCKvksKDKHKyKUkCkXkGKNkH+skPKQkSkNku8+bs+mcKyKVKvksKsKyKQKVKsKrKrKyKSKsk8kHkeKjKYk|k|keKSkTkPkCKsKsKCkyK2KsK|kekGKXK9KrksKGKXK9+vKG+y+$+$Krk8K=+vKCkGKDkNkNkUKzkrKv+CKskUK$+$KjK2K=+GKDKDKxkcKjkvkGKeKQKGkVKzksKYKjK^+skVklkekDKH+DkDKVkVkokCkHkjk2kDkrKCkrKCKPkHKoKokckekGkXKvkGKeKzK2klkHkHkckSKek$k8k2ksK$k|kSKHkGKeKzKskjKHKCKzKeKHk|KjKPkCKskzkGKUKXKjKeKGKDKxkCKEKPK9kvkxkek$kDKHk$+2KGk$kXkYKzkckGKeKzKekEK8kP+CM9KHKGkckGKoKXk9kjKv+XKzKsKvkNKv+2K8KlKYKsKNkyKeMvkGKeKokek$kvkHkSk4skCKQk$Kgw2KskvkHkDKcKE+48kSkeKEkH+VKi8k|K3hC+l+vK|K9KyK=KzK=K$KvkYkSKUKPk9kvk3=kUKUky+ykNkeMsKDKeKrkYk|ksKzkGKCK|k=KGKsKNK^+cKNk$+GKXkxkcKjkEkvkNKyK=KeMDKzkCkrkcK^KsKmxK2+jKuxKsKmekjKVKmeKHkNk=K8KPKxKsK6v+D+U+rKGKDkSKCKxklKPKokGkcKCkPKHkokKO2+xKsK6EK^kxKY+xKqjKVKmy+hsKSK~Y+2+U+yKyK|ksKHkxk9KcKYkHkrKCkHKGkYkRrKCkDk|kCKeKXkHkNk^kCKzkGKCkDkSK9K$KgnCK$k8+eKsKGKXK9K|kCkDKGKNkH+skPKFSkUK|kCKzk$+sKNkPkCKGK$KeKxk$kEKHksKzkjk^+HK|KzkHkCKvKHKsKrkSkUK=KVKDKsKCkokyKjkHkzKCkvKGkVkzkeKCkHKDkzK9koK|+v+LT+ykN+n2+c+~RvkeKcK9kCKeK$KCkcKSK$kSkPKsKH+9K8KSkzkSkNklkzKHkP+=k9KGk8KEk^+^+^+|kCKeKGKzkrkPkHKDKzkCkrkcKskPK9kSkjK^+HKQkSklKNk8+rk9kGKPKQKQK|kSkSkvkXKYkHKEkVkeK^+Dk9KzksKDKCKGkCKPKzKSkXKGk8KeKSkeKck|kHKDKNK|+jK^+YkHK8kHkHK|k|KCksKzkxkcKCKeKUKQkPkDkUk$KjKVk=KokDk|KVk2kokGkUkzkSkSkDkSKDk2kYkzKvkYKHklKvkCkrkGK|kHk$KHkHK|kNkHkzkDkrkCKzKlKzkHkok|K$k$KCkPKTkzK=+NK|KsKokXK=+sKzkb73xKws+AcK9K|kCkzksKyKPkCK|K9kGKUKGkHk9k9kVK^+cKYkSkVkzKxkzKjk9kzkoKrkTkPkHkDKzkwQkEKPKDKzk^+NkeMykvklKCKyKjkCkSkPK^+|kVKVkDKzk79+8+bjKIc+Z1=kYKDKxkekCKPKzk9K^+SKjkHkPKHkCKSKVKCkPKPKrkcKCKCk|KsKH+rkVK2+dIz+VkekP+P+yklKokDk|K9kGK|ksk8KCkXkYKNkP+CKrK9kHkUK|kxKvksKvkcK^+VKvksKrKcKQKcKsKrKIpLCKal+Ic+C+z+IrKGKv+3cKQk|+$+jKyKYkb$+l+uZHKrKvkwC+=+YkIQkxK4~Yke+|+AjKS+B$+j+Hkok<=+bs+wxkC+HKs+QkHkv+z+1e+Hk|+yK9+1HkHkGKc+Dk|kSkQkGKDk|K9KCksKDkrkcKjkHkPKzkv+|Kyk|KHkSk9K|kCKeKVKCkok|k9K8kCkvkxkNk<SkXkXkZ0XKSkvkHkUKSKG+fzkYKxkNk8KGKfeKxkSKzKSkPKsKxk|KCKjKzk|KjKPkVKHk8kCkokGkskF$K|KxkDkO|KeKSkvK9KjkeKPKvkvK|k|k9ksKNKokGkVKDKeKCkXK|k$kSkPK|K9KyK=K2kvkHk$kok8+XklKGKv+CKskUK$+$KjK2K=+GKDKDKxkcKjk9kCkXk2K|kCKsKzkYK^+Dk9K9kCkXk2K|kNkHkzkQKjK|kjkHkeKEkv+CKskUK$+$kxkcKEKYkSk8kxkPkEKGKvkVkTkHkzkGkvKsKxkcKYkGkGkCK7=kXKrKXkXK~<8kNKl+ckckckDkbvkcKPkPkXKwck$k|KHk8K$kCK8kYK=+Ukbs+Ek=k=K=KlKlke+8k8kEksK2kPK2kP+rKAUK8K9+|K|KAs+Nk|Kck8+rkUkck~SKHkzKrKAok=k8keKPKbEKGKNKsKlkPKX+=ko+lKIb^+cKEKCkwNK|KekLUKHk|+=kuV+HKDK8KjKQk|kDKPK|+8kZXkSkjKUKyK8kskjKjk9kNKrKz+HkskUkrKDK8+I9K=KPkyKUkGKCk9kPKH+YkzkYK$KHK|kTKjKPKsKNkPkskNKHkzkCKlk|KSkXkCkHKokUkCkeKzk9KyK|kDkSkPKcKNk|kHk|K9kjK2KCK9k|K$KNkcKL|+|+|KSKekzKsKVkCkok|k9K|KeKHkyKGk8KsK$+DKrkYkskeK$+sKUKvKCK$KHkyKzKK9+RU+9k2+2K=+IRgcKSKzKvkCk|KPk9KzK$KGKeKQKGk8KsK9kzkrkNk|kQkGKeK0=+rK8kDKPK9K$k=KlkPk$kjkSkSkHKvK2kCkGKeKvKHKekxKP+DkVKHKQKTKYKCM8kHkPKNkXkzk2kCK$kz+9KHKXkHkGKDk9k8KY+$KGKSKC+eMSk$KHkcKSKHKXkHk8kNkSKT+vkCksKXKYkHKEkHk9kQKzKeMHkPKDKrk^+CKlkekCKNkGkxKzkF|KDkyK$kPKXKHkcK|kEKeKHkHK$kGkeMzkGKzk=KDkXK|K9klKTkH+eMsKGk|KXKYkCKsKzkEkDkGkVkYKHkHkNkSK8+U+GkGk2k2K8KSKPK|+2kSkV+DkckNkPKcKxKlkUKGKc+skzkaSKrKCK~jK|KcKjkUk^kjkCk|+jkQk9kTKHkzKGkjkCKXK|+YKe+Hk~ck|kGkSK$kXKPkUKYkVkHk~V+YkXkXk~cKx+rKzkcKEkeK=+eKDKlKvkYKsKYKck|kDkokLIb=KNKYKjkcKXKwyKS+lkNkzKNK^kykXks+CkCkQKXkTKPkEKYkUKzkxKzKjK$KvKsK1=KcKskTkzKz+lKrKDk^+$kEkb$+PKrKCKVKck8kEKYKcKykskPkXKXk$k1CK|KPKDk=klkYKzKXkCK2kUK=kXKl+yK2K9k$KIzk=kDK=k=kVkPK7^+8KCkNKXKcksKVKekYkVkc+XkPKjkYks+uSKo+|+GksK3YKWAVKsKjKvk1$KekXkEKQk8KskVkAoKXKz+YKNk9KrKQKCK$kIvkCKDkTKckzkVKpH+DksKCK8KrKNkEk$klKrKPKrKEKekcKQkCkYk8KeK$krKoK<VkzKjkDkGku|Kw|KYKuDkz+EK$+sK$KNKskVKeKjkDK=klKckEKrk=k=K8+CkYkDkYKTK=kj+UKrkokXkDkQk=KskykXkeKUkcKSKvkC+ykVkNKzK|K^+jKw8KAS+lKz+Qk2kSkQKHkcK=kj+VkS+eKXkVKVkGk9+vkLGk2kEKykGKXkskUks+Yk^kcKzkEKINKcKVKUKekNk7YKEkcK9k=KNKXkSkvkEKGk^kXkVks+EkvKX+rkykXKVKcKokvKeMGk$KwX+H+eMck$K|KNkQKVkUKPkDkGk8K=kUK8Kb9+2KEkSklk|+^+^+z+=KHKYKSk^+TkSKlK$+CK=KCMXKekzkxKeKEkQKs+=kPKP+Ek$k$+UkYKYKE+=kcKCK9+eK$kjkGk$kSkTKDk9KeKjKNk^+skYKwI8k$KzkIYklKYKNKSkj+2kcKYK^+1lkskQkykckE+QkekSk9kP+sk=KjkskpSkPk2klKHK$KCK8+wXkbpskjKSkeKSKxk~SKzkDkCk9Kz+sKQkSkNkUksklkzKcKjkvKsK=+EKQKXkoK$kYkvk=KGkYkS+rKHkA8KrKHkVK|+cK|KUKckxKGKrk|kTkPkrKUKPKlKjk|KeM$+l+$KPk3SKvKQkeKSKL|KSkPkCK8keKUKHkCKCKYK$KjKSKskXk8kvKHKPKQKPkUKHkPkHkCkUkUkTKTkPKVK9k39+zkjkCK2kykz+eMYkHk=KyK8KskvK|+VKEkokeKXkPksKC+zkxKeKrKPKjKzKxks+IzKHKeKSKzKNkvkxk9+8+zk|Kj+=kvkeMsk2klKv+uo+YK$+IuzkSkCKvks+yk^k$kUk8KGkCKz+Ukb|K|+$kHkykzkvk8kvkeKCKzkGKDkrkQKsk|kvkPkokXk|kzk9kckxKsKxkSKVKa2KlkL=kCkrkHkDkoKQKSK9K7=+xKsKUkHkSKYKxKjKCKzKTKTKckPkvK9k|KPkyKlkskDKykeKUKvkckekGkvkzk9kjkSKpyKx+HKQKUKPkQkPKXkDKe+ok<XkVKrk9k=k|KNKcKlk8KvkSK=+QkQk8k|k^koKcKjK8K|KQkCKckbEk~9KVK$kDKlKckokrKzkl+Skc+zkrkGKbGK^+SKBSKQKUkPkz+xKEKsKIckzkeK$kGKI^krKzK8KsKEKNkekyKrkXKvKX+Yk18KrKI|kz+=kNKlkXKckNKYKs+wPkv+3CKQKvkApYkYK|k|KYKPkvK=+|+PkrkEkck|KcKEKckHKTkSKl+=kb|kYkUkXK|+XKvk8kXKDkVKrKjKDKYkCkzk|+YKXKyKCkXkNKHkGkYK$KHkrK$KCKx+CK9KIXK8KHKaPks+EK9+YkNkXkASKuTKjkckskSK2K8kGkVKGkTK3z+|+9k8kv+yk1DKDkANK3ykCkDk|KGK=kTkekPk8KPKskE+zkDKs+GkYkx+GKNkCkS+=+UKXKUKsK=K8KxkNKjklK=k$KyKVk=kbTklkDk|+s+a2KrkE+2kDK=KHKQKrKYkICKSk$Kx+=KjKaDkCKXKYKEke+=kC+sKPkQKvKEkzkSkCkwEK=KckEkUKPkskHKlK9KPKVkNkxK3rKvkHkSk2KrKoKlk|KHK9KlkPKwQksKu8kjkPkQkPKrkCKz+jk|+IDk|kVkzKHK$+xKQkYKwGKrk|KlKlKvKjk$KDK^kXkPKrkYKYKQKTkeke+Gk2KDk8+Qk$+SkQkrK8+vKwskv+SkoMl+vklkckQKykYKjKbvkS+eMHk=klKp8klKvKHKw9kQkjKHKUKQK9k3BjkeKckXk$keMl+zKVkvklKBNkNk|KyKokPKaeks+Sk<DkYkcK$kv+yK=kj+Ek|KNKeKBcK8Kzk2kyKCKl+SKNkpHkYKEkaCKXk=+z+$KXkrKYKsKCMbcKQkTK^+VKvkVkYkXK2k9KIGK8KYkHkx+GK8KUkyKrkTke+CKAXKXKskzKeKvKUKNK8KeKlK|+xK|kykPk9klKNK=KeMDk|kekGkyk$KQKlKlKcKS+eMGKvkw9KuNKHKckDKC+sKrks+|+lKSKTKSKDkDkNk8kykPkDKaHkEK9+1YkcK9KoKH+Bj+|kQKvK~lK|KUKSK|k9KXKDkI9KvK^koK9kabXk|KE+l+SKQKNKQK8keK2ksKEkYK9KeK|K8Kc+SKNKXKXkEk8kGkPkUKs+vkvKYkzKEK2kAUKDk9kEKrKYKvklk$K8KYkI2kDkV+SkwXKSk|k|kDKw=kvKZE+rk$+|+^kTkrKvKck2kEKGK=+Vk2k=KHKvkBvk=kl+rKYKPKAjK2k2KckBrkGKj+HkZEKjKlkcKck~oMazkA9kNKskckrKVKSkYkV+vkVklkTkC+Sks+XkNk~=+jK8KEKl+EkzKVK|KDkNKUKzkHkcKzKAQKlkNkekSk2kTKzkeMEklk=KCkL9KQkYKckc+Lx+|+$+Nk9kDKTK=KUklKjkYkE+9KYkw3|kUKYkvKXKSK~rklKbrkcK$kzk=KVKQk2k=+eMjkeK9kS+^kV+l+UKe+9k<HKUke+cKEK=KlKSk$KCk9kvkEkGKHkrKckZsKEkvk$KPK8kxksk|k|+rkGKzk8KPk=KrKXK=k9ksKwNkXKUKXK8KSKTk2K$KVkGke+xk^+NK$kYk2kckskVkYkCkcKckNk$kVKrkUkrKvKeKEK|+$+2k|kPKskvKSkrKzkeMeKjkYk=kPkzK=KGka|kC+lK=kPKs+HKDkxKA$+zkHkyKxk8KeKvk8kokTK|K=kHkyKHkBl+HK$K$KlKXkSKQK$k9kXkrKNk$KXkckzkskjK|+|k2KzK$k$KjKEKCKTK8kGkvKEkNKTkYKzk|+rkUK9+Bs+j+|KxKYKz+skEkrkcKvk8+XkEK8kTk3xK8KvkYkPKvKoKzKajk|kL8ks+Dk$kxkSKeM|KVkEkcklksKVkzKlkXkQKTKeKVkEKQkGkCKHkQkEKoKYkHKvKHKIYkuzKj+rKPkHksKjK$+SkwEKrKyK8kHKEk^+$KyKrKvkSkYkLHkjKlKcK9kXkXKNk=Kskrk2KrkVK|kNkxk|kjk$KDk$kDKGKPkXkvK9kGKNkcKUK|K9k8kck8keKckEKDKQkVkcKQkcKDKLzkPKskSkckS+|KDk$K9KyK$klKVkPkNKxk^kCKck$+vkv+XKlKl+2kYkxKzk$kjK=ks+okQKSklkzK9kyK8KHkck9kbXkXkeMEkHKUKok9KVkHKCKXkTk8KXKvkrKGKvksk8+jkYKUkvkeKsKlkIckHKzK8kvKYKs+S+Ck|kjKSkDK^+skNkaVKHKSK9KPKl+rKckUkzK8KVKXK9K^+GKlKskAzkvk8k=kXKekSkTKckPK$KXKNkCKH+CKzkNkeKSK=K1PKskXkoKQkeMISkrkUKskVKPKvKYkCK9KUkbUKs+EKckjKlk|KUKUKS+YKvKzk$kcK2KCMAQkSK9k^kNke+zKCKuC+o+Uklkl+rk$KCKDKskVk|kYKzKe+SKA=K8KSkHksk8KS+=+Ek|kXkGkS+vklkCkHKj+9K|KBCkzKUkQkGK9KPKDks+NKSKlkQk8kXKS+9kxKs+eklKYK9+rk|Kekl+C+^+rk9k8kl+DK=+jKPkDKEkUkSkV+b$kj+SkZV+|+=k8kvk|kNkI|KGKrkLeKQK$+lk$KDKxkXks+cKrkyk|KQk|+VkX+<o+skcK8k9+CKoMNKPkGkrk~lkDkDkjK=KskeKjKsK8KNkGKHk8KA9kYK$keM$KlKs+Tk9kxKckvKskSK~zKGkNKYKCk|kskckVkGk2KQkeKekSK8K8kPk9kckYKjkGKDK8kjkekAv+YKLsKXKHkS+lkTK$klKGkTK9KNkvK8K8KHK$KSk8Kek=KckskTK|+$kl+8k<VkDk$KAvkQKcKe+Iekykz+jK|klKrK9k|kNKsklk$KUKekrkvkvklKSkH+UkckHKEKckDK8+w$kAEk3EKNKIjkc+|K|klKA$kokskeMVkHK9KHkzKLYKww9kHkLckCk8KUKCKE+XkVKekC+C+XkcKvK|+C+GKEKsKcKrk^k|k|KSKQkNk=kDKE+SkDKvK7GkrkNkHKe+Xk9+EKekEKGKEkykjk$kYkDKDksKYKVKvKs+EKNkHKXkzK2k9+QkPkSKVKNk^+$kVkj+lk|+|KNKTKvK|K=KCkYKrkEkzKHKyKsKE+brKPkpGk|kQkcKUk9+NkTkXKl+SkxKQKeK2kl+s+DkekEKPkVkSKykvk8Ksk=k9KDKsKzKNkAVK3DKxkGK$+CkNKXKxK8KskA=kTK9KXk|+ekNkDKzkrkbGkoK=+VkbVKCKNkQkCKabskUK9KCMXKHkAYKsk$K8kl+HkTk2k1XK$K|k^k$krKCKPkQkCk2KeKCKXKEkykGKjKDk|KskuGkyk$KskjK^+skTkCKekYkvkGk=K$ke+XkuH+|kwe+EkrK|KWskPk|kp$k9kwVkzKTKZTKQkPKHKQkXK9K2kHKSk9+cK9K$+$+VK^kNKlKEKcKcKrkSkVKbUkzkUkvkyKvkSKSKck$kx+XkCK=k9kzklKVkl+Yk8k=kSKSKNKPKQKPkVk|keKEKTKGK|kCK=krk2k~1$kPkcK^kcKzkIPkEK=kokNkCkzKXkxKskrK9klKrK=K2kxksKzK9kokXkCKNKjKVK2KS+PKAHKCKC+2krkjKskXkHKuCMrkNKbQkzKSkvKEkzK^+QKNKDKzkSK8kTKjKj+QKCKPkvKB9kUkVKjk8Kz+VKvkXKv+9KVksKXkXk=k2kHKzKIvKTksKlK$+QkcKQK9k|Kb|kzKPkS+zK$K$+CKGKzKNkSk9kcK^+cKTK8k|Kl+cKyk|KEkCKe+DkDklK8K=kGKYK9kDkXke+e+Dk=ksKjKYKGKuYK$kSKPkQk~C+9KCKskzKrkCkjkXKlK=Kjk^+oMsKvk=Kjk|KNkHkQkHK2KckNk9kQkVKck9k=+j+EkHkUKGKyKQk|+ek8kXKeK=K$+9kYklK1lkrkXKQkTkzkrKNKckS+8kskj+GkSKp9kNK2kck8kykGK|KVkADKPK$Klkj+DKPKDKsKNkYkl+ckHk8K8K|+VKVKHkDKEkSKwQKUKS+SKvkbDKxkzk$kNkGkjkoKTKz+jkIj+Qk=+=+NKeKVk9kSk$K=KAXK7TKPK|KUkQK~~Sk2k$Kj+NKcKrKek=KzK9k8K|k2kjkPK$k=+XkUKVKVkv+NKSkCKek8kykYkyKzK$+$kPkL8+lkCKcKHKsk9kEK|kj+9+|kHkDKeK$kQk3LQK8kSkjkNkeMSkGK9KpYKEKrK|KVKGK8k8KYKb9kPk^+$kI9KlK9KuE+UkVkXK=KuW$+DKYKXk9k|k8K$+Qk9KXK1rKYKPKoKXk9k8kSkzK^kXkPKAl+8krKDKjkHkcK8KUkQkYklkvK9K|K2ksKCKj+NKHKGKeK|+cKek9KL=kek$+|kpGkVkUKVKEKCK8kBVKjK|kvKTKSKckQkEKSKNKjK8Klk=kv+C+oK2kSKYKck=+NkYKYKcKYkZTkvK|K8KCKTK=KCk|KrkXKLUKDkAHKvkGKcKDk9KCk~skLjKvkCKDkyk9keK$KcKQkP+XK$KUKrKv+skoKekl+YkYKNkHK$+UkDk|kGKNkVkQk$+EKXKWSkrKl+ok2ko+Nkvk8KSKokV+=kPKDk$K<8KXKCkjk~9klkVK=kHkrKz+=+e+HkA9+vKNK|+j+XkpeK|kVKSkGkPK9+lk$KvK=kSKz+sKHk$+cKuCkykSkck8KDkz+=k=kCKVKokskSkYk|+l+C+YkEKzkHKbrkrksKI|KUk9KTk9kj+9KeKck9Kjk$KICkp=KTKQkNkl+|kTKUKzKGKDkCkP+ykvkCK|KXKC+HkAGK9K8keKeKUKYkrKUkC+PKXkVkrk7=+8K9KQKDK$KQkVkHK8kwUKckL9K$+cKxk9kV+eKj+DkTk=kEKlksKDK^+8kCKvKlkXk9KrkCKSKHkj+okekPKEKskj+yKykrKYKHKavkrKEKYkeKNk=kck8KvkSKjK9KokXKQkjKzkDkzKNk|KUkrKUK8kE+zk$kAjKz+sKsksKaTKlKxK|+l+NKxkzkDkHKCKHKEKXkx+$+eKjk^kXkNKEkckzK9KLeMsKHk$K9klkCK$kHKvkNkeKHKjkGKzKyKlkxkzkrK8KHkokzKDKVkEKS+9+PKl+j+rKvk8ksK|KCkQkCkCkoKNkEKVk7<xKjkEkPku$kz+IUK9K3YK8k|kYK|kvk|kPkl+jklk^+QkrkGKeK$KEK9+Ykj+UkrkykHkoMj+QKUkSK|kHk8kbCkjkH+jklks+NKyKSKHKUKlK9KoKekSkavKPKCkH+8kzkvkbGkYkLeK$Krkv+cKzKYkcK|+ckNKE+skVKe+yKDK9kQkQka$KNK=K$Ks+HkcKskXKHK=kGKPkQkjkGkeKw$KrKeMjKIEKokYkcKlk$KsKTk2KEklkXKsKQKTkUKl+ASK9KTkjkUKVKPKEkskXKaVKXkxK|KlK2k=Ke+okyKjkDkjk8kEk<skask9KUKTkCMzKXKQKC+rK9K$kAA3NKUkrK8KeK$K|kV+A|K8Kjk3zkPKjKa^kGkPKYkb8k=KcKck$+rKb=k$KeMVKGkHk|k<rkskw|KyKlk9KsKl+9kyKzklkCk=KYkDkskE+NkDKQkvksKTKcKs+zkC+Ckx+s+ekekGkLPkCkYk=k$KvKck9KAjkCkckxkVk9KNkc+zkz+Xk|kXKXk$kyKYKNkYkXkSk1EKcKzKc+DKoKvkYkIyK^k8kA8KYkPk^+ykPkPkskUkrKCKj+Ckrkxk8KXkeKweK^+XkXkrk8k8kXK=kyKAQkek=K2krkYKPk2koK^+eKHkNkGKCkGK=kEkNks+C+9kE+Nk8kPKxK|KYKQKvkPkv+SkXk|Kvkbv+GkVkaAEkX+<1vK$+|k=KP+1jkEk$kC+lKjKskGKwu8ko+e+=kYkGkyko+vk=kVKp|KNkVKGK$Kv+Pklk|kXK9Kv+9+XkXK|+GkCK2KCKGKEKzkXKH+YKDK|+l+9+^+rkl+AQKC+9+CKI2kQkS+lK9KIDK|k$KHk$k9Ke+SKHkzkXK|+lkHkjk=+=kCKXklkC+Nk8+DKNkCKplkWzKHKeKPK2K$KrkYKskYkQKykIlk$Kjkyk$ke+NKckYk^keMA8kGk2KTk8KHKUkDKXK2k=+cKPKjkTK2kTKzk9kCK^k=kxKCKPK|KYklkTkIwGKCkQKzKVkGKzK^k$kjksKckwXKYkHkSkzkUkp^kHKYKQkHKUK9k8KXk$kzKUkokxks+EkvKoksKE+=KVKNk|Kz+TkEKNKzKyK~CKYK2k|KcKeKoKjkCKYkUkGkVKIVKs+2kyKUkDk9KwQkDKUkQks+YKNkL|KHkUKs+xkz+lkckUk8kPk8kWDkjKsk^+vKDkeK=KzkQkrKoKGkek9Kv+zkV+skekUk7|KzkekUkvK$Kvk$KIekHKjKZcK|+CKNKSkCkjKjKDkHkTKQk=+l+NKrK2krkSkrkNkl+|kQKUKl+vKVKoKNkHkawvk~CkVkSKskVK^kCko+SkzK$kxK=kVkHKe+=kcK=kYksKIUKYKPk=K$K8KekrkS+eMsK|KlkxkYKrKPkjK|+Ek$KeKHkGkUk2k|KTKvkckSkjKLlKIXkYkX+rKrkckPk9K9+SkPKvkYKCk9+$kjKwPkCKoKlKCKUkYKb2k8kTKDKrkNkHk$KBXKEk9kPkYK|kUKSk|KQK9kyKSKXks+Uk$K|K$k2kw|Kzk=Kl+XkEkGKlkHKs+Pk$kpPkXKDKzkzKDKSKHkXkXK|KCK^+eMPKvKVKyk9k1zk|kskjkP+jkzkXKDKu$KB=kwHKTKcKrKvklkVKUkvK8kGK8keK8kDK|KGkQKekPKz+yKGkQkekCKH+xKvkajKEkQK=KUkzkskDK<xklkb$KEkQKPke+aeKCKsK|Kj+vK=kokH+ck9KPKYK|k=kUK9KUKYKXk8K1Ek|kvkQKDkx+lkHKYKEKP+VkANkwUksKckDKzKVk8kPk1cKHke+=KXKeKYKHKPK^kXkUkYKNks+3HkEK9KGK9koK8klK=KbHk=k2K8KHkAXkjkDKlKzkQKAYkckCMUkjkI~vkxkvK8KvKcKskPKsKeks+CkQK9k|KeKckXkrK8KAcKDKEK3E+sKCkHK8ksk$krKVkNKyKvKXKsKsK9kvK2K9k9kDK9k^+GkeMzkDKGKHK9k|kGKEkzK|k9KCKCkzkHkCKyKjkSkeKPK4yK=+$KSkUKv+2kCK9k9kYk^+Dk9K9kCkXk2K|k9+oKGk$+=kEkuxKVkN+TkYkskQkDKGKHKekHKsKlKeKDkokzKeKHkzkxkcKYkzKSkQKxkeK$ksKlKGKDkvkHKsKYKP+jK9KzK9kEkEkQKXKeM|KeKIcKGkjkCKPKzkxkPkUkGK9kCkXkyKYkTKoKGKv+8KHk$+UkykekS+GK2koKGKv+8KHk$+Uk|+v+LGkoke+e+zKok2KGk$+UkzkH+cKQkGKlKokH+skFVkGK$k>v+DKSkvkxk2KVKy+fe+aSKjkSk|KPK9KCKrkHkeKzkXK8KCK9kHkDKNkPkskPK$KsKUKPkVKDKSkPKcK|kv+$KHknz+0Nk9kSkQkjKYkjKYKCksKsKVkrkCkPKvk^+cKNkPkGK$KxkjKGkYKGKsK2K~cKHkzkDK2KQKjkeK9KCKHk=kxknGkekvkeKx+9KrKHkNk2K9KskzkGKCK|kV+e+|+jK9+Zx+xKoKPKjK|k$k8kHknUKNkYkHkxKykskjK2KDkSk$KvKyKeMvkn9K^+cKCKnGk|k^kjKGk8KGK9k9KGk$kCk|KQkrkNk|kHkGKPKekhxK$+NK|KcK^+SK$+8kf=+hPk$+IP+7c+8+j+wauh3fjK$+QK9KVKvkNK$+UK|k4U+f|+NK=k9ks+vKvkjKskSkEKUkzkpzk=ks+j+QKHKGkB9KlKvkS+XKEkcKzKUkCkzK=KVKekjkPK2KzKeK|kzkvK$kCK=kUKYk$KTkBeK$KEk9K9k8+YKEk9kX+2KyKl+wjkCkYKB|k8KQKHk|KBVks+j+rKZNK|KDkrKQk|kcKNkCKPKS+LHkvkYKQK~GkPkPk|k=KxkskyKNkjKlkprkoMQkEKEkGKPkVkcKl+vkYK^kXkPKVkzkSKTKz+jKUkSKTK<xkHKs+Hk~zkHkUKCKjkEkS+XKvk$kNk|KSkYkvkHK9KSKcKo+lKzkj+NkeKzkQKckVkYkskxkSKzKe+CkhGK$K|KbCK=KeMYkHkGKokYkCKsKsKrk^+zKCKsKDKSkHKSKjkeKlKDKNkNk8KDkYKeKrkCKCKxKFY+sK^+S+RxKP+QK|kcKCk9kzK2KPkCKGKvk$+vKNkTK$+HK8kxkcKjKeKHkHkCkNkoKeKHksKXKNkeMsKHkskNkyK8Kzk2k2kXKsk$KPKCkzkck2K8KCk|KzkcKcKlk$KDK8k^kcKHKDKzkCk$kGkrKSkeKvkxkPkjkjKSkxk=+yk|KCKGkskxK^kDk9KCKPkxKokoMCKvKzK2kok8kGkPkXKxK^+VK|KY+RwE+fn9kGKHKDkEKGKXkHkcK0^kxknoKhGkeM$+lkskh7v+JHkPKhEk8KHkrKeKxkSK9KHKeKeKrkPkCKUKDKeKxkyKYkDkYKeKrkCKCKCkPKPKxkPkoMCkvkzk2KSKeM|KCk8kjK2K$kPKck9kEkYkYkzksKXkxk|k$KzkHk$K0~8+YKCkvkokGkeMvkSk$KjKH+eM9KSkSkQK=KzKHKPKvkcKGkjkzkHkeKokGkUkCkDKHkv+sk$kvkzkYK^+vKVK$+$KSk=KC+oKCkPK$+jK2KXKHkPKzkUKNk|kSkeKzkxkzKjkNKHkEk9KlkSK|KYKDK$kCKXKrKCkeKcK|kSkHkEksKcK|k8KCkPKXk^+QKykDKSkGKCKSKCKYKeKHkyKzK=+NK|KsKokXK=+DKzknL0skVkPKNkxklkVKSkPK$Krk=KVKHkvkSkPkcK8KHkvkHkHK^+jKCk$KHkNk^+8KHk=klKxkSKjkskzkGKCK|k=KSk8kHkNKNk|KCkPKlKSKjkxkII|KCKCkCKPKlK$KNk9KcKSkPKzkckH+TKHkHkHkvK~D+Hky+DKrkcKVKSk9kHkxk2KVK$+$KSk=KC+eMGKzkCk$kGk9KEk|KHkCKYk$kPKNKzkxkzKjkPKHkVk2kyKeMvk9kHkCKc+Dk8kXkHkNk2kHK|KzkDK2KyKoMCkvkXkxk|kzKeKSkXkCKGkVKsKPKYKUKNkEKzk9kCkHKGkOn|KGKNkvKG+FgnvKyKxK$+GKXkxkE+eMSknHkCKPkskeKnzk2KPkskVkPKsk2KyK8KHkvkGkCKPkHKEkQKlKyKQKCKeKCk$KCKx+vkzkSk|kCKH+=KCkzkCk$kGkv+$KlKsKNk08KHkzklKCKcKv+GKn|KCKH+=KCkzkCk$kGkv+8kGK9k9KGkek2k|K$KDkH+cKeKGK$KxkSKEKQksKzkCK2KskPKzkCkHK=KsklKsKSkPk0nnXkHkNkGKeMzkeKCkxkSKrKEkzKEkXKGkzKeKSkjKykcK8+9kSkSkXKH+eMckHkDKNkcKzKeKe+CkyKQKYkvkzkrKxk=KjkvkSk$KjKH+eM9KSkSkQK=KzKskzkGKCK|kYKHk8kCkUKGkcK|KI$KjKPkNkCkPK|KCKNkxKrkPKIPk^+YkzkEk|KxkskNksK9k9KjKcKNklKGKXkxkQkCKGKzklKCKGkVKHk9kDKxKPk8KSkeKn^+SKVKlKCkPKTk0HkcKGkjkwPkCK=klKHkcK|kv+Y+sKzkjK|kEKsKnDKrk^+CKU+nHkHK|k8KEkzKEkXKGkjkeKGKPKcKH+jkCkSkPKUkvK8KSk$KHksKp2K|+$+aH+EkS+9k=k$KvkyKxK8k=k$KyKYkCKjKeKHkcK=K|kzk|k9k9KDk$kPKsKDKDkNkVKHkvkSkXK|kVKP+9kGKHKDkEKGKXkHkcKSKskGKPKCkvKyKjkCkSkPK^+cKeMHkeKYkxkH+NkYKzkXkxk|kVkSk9k8kxkPkrKlKzkzkrkcKzKvkDKeKPk8KXKeKHkGKNkGkCM9kHk$KxkcKjkVkCkPKokNkoK$+DKSkHK|k8KSk9ksKv+NkUkHkeK9kjKlkXK9kCkHkHK|koMCkvkzk2K8KzK$KeKHkEkPkskVksKHkCK38+j+jKaC+ZCKNKNKXkxk|k8kHksK|KrkcKVKHkYkHkjK^+CKeKDKYK^+YkYkHK9kHkvKGkeMzkDkSk9KcKjkeKHkXkUKskHKQkDKvk7~V+bQk|KjKPkVKHkCKPKNkskVKHk$+$Krk8K=+QKlKzkNkNkeMvKHkrKjK=K|kzkDkeKrKSk=+$KSkUKv+Qk$kHk9kvk8k2KEKeKeKHkHK|kCM8kHkPKNkykXKzkCk8kxkTKskeKvkHkCK9KxK=klKHkCKlkVkHk9kHkUK|kskeKGk9kDkokjkSk|K$Krk8KsKeKCkHkHK|kHKzkCkSkHKTkskjKeKckvKPkUk$KCkDKNkXKTKDKQkGKcKGkEkekCKGKXK9KUKHkeKsK^+NkeMEkXkDKDKHkeKlkjkn^kZx+AjK$+QK9KVKvkNK$+CKzK|k$K|KeKxkQKCKeKsK$+CKGkYklKDKHkokC+jkeKGKPKcK9KHKeKHkPKUKlkCKPKGKQkDkGkYkckGK8kjKSKXKeKCk|KNk8+OPKe+rKyK=KeMDKzkCkrkcKv+XKHksKNk=K8KHkHK8kxkcKjkY+RnekEKVkzkeKCkHKDkXKYKCk9kokckskvkHksKTk2KrkrK|KzkvKQK8KGK$KHkcKXkzk2kekHKykE+=kGK|KCkvK=K|ks+e+|+SK3x+|+eKDKPkyKXKvk5e+X+H+cK2k|K|+CKGklklKHksKNk^kCK8kCkDKxkokVKzkeKCkHKDk$krKEk2kDkH+HkeKeKGK|k2KskPKrKCkCKCK=+$KSkUKv+Qk$kHk9kvkNKGkxKzk2kGKcK9KCKDKzk$+CKyKjkCkSk$K^+CKCKzKEk|KxkSK8KSklKPKokH+eMXk|keK^+Nk8KCkzkEkv+CKskUK$+vkxkQKHKlK9kzkv+2Ksk9kSkeK9Kek=KzkSkSkDkSKxkSk|Kzk2KH+NkYKSkrKUKNk8KCkHkPKNkyKjkCkSkPKCKQK8KzkCk$KxkyKzK|K9kCkUKyKjkCkSkPK4rkVKSkPKgUKvKHKeKsKHkNkE+EkzKrk$+S+SKXKeKHkHkHKYKCKrKzkXkGkCKPkvkSksKDkH+XKHksKeKUK^+skDKzkSkck|k8KCkPKXkDkGkUkHk9kXkXKH+eMvkHkjKrKQKCKHk$KXkxk|kCM9kHk$KxkcKjksKQKEkNKyKNkPkGK$KxkXkzkskvKNk=+Ck=kU+ekIykvKUKjKGk$kCk=krKDk9KCKHk=kxknjkj+uok1b|KeKrk|kskDKSk9k^+QK8K2kzkEkXKGkDkDKlKeKCKGkeMzkskDKCKH+zKzkDKYKCKNk=KHkfzKCKH+YkHkPKzk49KEKsKYKDKrkYkEK$KPKlK2K2K|ky+lKsKNkXkzkskvKNkNkNkckCkjKHkokGkz+ok8KlkGKyK9kjKCKIDKXKE+zkDkXk3lKYKGkzkcKxKS+XKQKXKXkz+E+GK8kCkvkxkNk<SkXkXkZ0XKSkvkHkUKSKG+sK|KHkxkzKHK8kGKCkDkvkCKCkXkYKNkTkeKlK$KQkxkPkckSkeK$KjK|kSk|kskvKQk8+=k$kU+VKDk8kNKlkekGkSksK|kPk=Krk$KYkXK8KVklkXK9KCKeKzKYKCKGkCKvKrkGKUKGkNkDKVkPKXKQK$kzkHkeKjK|k$kSkPKsKHKekNkSk8kHkCKSKXKeKSk9kDkrkzK$KGKQkCK=KzKzkHNd8kGkCKYklKDKNKok=KXKNKXkSkrKTkPkHkDKzkH+GK8KeKSkeK^kcK$KPK8kSkUKyKjkCkSkPK$k2KYk8k|K$K9KSKCKeKGkXkxkcKjkvKGKzkjKGk8KeKskzkCKyKrkDKvkHkyKDk9KCkckNKDkCKeMSk|K=kCKSKjklK8kVkSKlkTKXkHkzkUkNk=K|KlKzkxk^+VkzkEk9kxkDk8KSklK|KcKGKYkXkeK|KNkC+=KSkUK$+PkH+eM$+DKSkvKCKEKPKCkDKjK|k$kSkPKsKNkGkxKzkzkYKCKNkoKDK9kGKcKSKv+9kHk9kwGkxKzkHkPKokSKv+PKGK8k^+DkHKzkSkeKH+9K|klKXkCkHKSKv+okyKzkCKyKeMsKrKSkCKCKzkYKGKPKNkNk=KcKskFlKv+2KGk$+UkjKC+TKykoKGKv+8KGkmRoKjkC+TkykYKHkjK^+XkYKCk9kokGK|kHk$KHkHK|kVKHksKeKNkNkzkeKCk$K^+|k$k8kHkGkNk|k8KCkQklKNkGkcKCkvkckGkCKPkDKPKeKjKcKYkSk$Kzk^+CKCKSklKzkXKYkHKzkrKSkCKCKVKvkzkjKokXKHkPKvkeKrkH+YkGKvkXkv+CKskUK$+QK9K|kjkSkPKYkrkekCKeKzKHkSK|kUkHkeKsK^+NkeMjKDKYK^+YkYkeKHkPKZC+=KSkUK$+vKyKXK$+GKDKUKGkeMzkrKGKUKGkDk|keKSkSKlkzKsKCKPK$kyK|kCkvknjK|kjkHk$K|KNk0jkSknsKXKPkCKGKvknHKNkeM$+CkzkxkPkHKQk9kHkwH+eMsKzkGKHK2KCKP+c+CKHK0skeKvkHkCK0jkSknQkxk0$kzkHkeKjKTk|kHkinHKNkeM$+GKeKCKyKyknSkQkGkGkXKzksKnvK=KVKzknYKjKekCKnGKneKSkyk$KQkSkDkc+$kzkHkeKjK|kskeKykY+q0=KHkzkYKrk^+ekvkHk8k^+2KCK$+|KSkcK|kEKeKHkHkrkyKEKvkCkSk4CKzKHkXkg=Kek=K$+$KSk=KC+=KGKDK$+vKGkeMlKzkHkSK|kVKHk9kHkUK|kXKGKXK|k9k9KHKzkDKYKxk^+cklKPKDKck|k8KCkPKXkxKPk8KskzkGKUKXKPTgc+GkeKCKyKykP+zkSkck|k8KCkPKXk2KGkHKvk$KCkcKCKHKzkDKYKxkSK^KY+Y+P+Q+K^KRTKY+hc+~JRxk2+hekmfRgC+=KSkUK$+2K|k=K9k$+DkxkYk|kYkCkXk2KYk$kXkYKzkNKGkxKzky+fXKyKYkvkCkPKTkvKsk8kHkeKTkzKeM9KCKPk9kzk|kCkXkYKNksk$kPKrKeKxk2K8+|+e+|+8kPkEKPKskDKCKH+zKzksKNKEkXKVKHkeKCkjKYk$ksKHkHKCKPkskeK9KSkTkYkEK|KvkGKNkGkVKSkeKzkUK9KjkQksKSkHKSKXKeKSk9kDkGkeMvkHkeKCKNk8K$kHksKcKyKNkHksKeKUK=KxKPKPK$KUK$kEKHkeKEk8kDk|kSkQkGKDkskskeKvkDKrk=KeMzkXk9krkTkHK9kQKlKNk|kskPKzKHkSK|k=KSkQkCkDkGkeKHkzkVkrkPkSKYkGKsK2K^+CKDKSkvkxk^+rKSkvkEkckH+TKHkUK9kEk|kskGKCk|KcKc+PksKxK2+eKUKT+ykN+eKjKcKNkHkJPKjKCKCKJXkHkNk9kHKeKGK$Kxk|kCKeKvkSkvK2kskPKzkHkHK|k|KSkGKvkxk^+CM8kHkPKNkGKeMvkQkCkHK^+HKlKvkCkrkpoKGK8kgDkNkXKsK9kSkPkGkzKzk=kzkokpjk9kQKGKUKXKNkeKSklKHK^+XK9kCk|K$kH+YkHkSkFvK9KWgnDKrk^+CKDKsKy+ayKUkDKIP+u3z+|+IHKt0=K|KbGKH+3z+P+e+fPKHkeKs+e+9KrkskCKeKHkjK^+|k=+$KSkUKv+2kCK9k9kYk^+Dk9K9kCkXk2K|kjKHkjKzkrkcKcKSkDKlKcK9KCKeKsK|Kxk2KjkCk8kHkXKYkHKEkQkGKUKXK8kGKzkHkqSkCKzks+w9+zKx+Ie+VkCKyKzKGKeK9krkcKNk|kGKeKcKGkCMPKvkrK9KcKXKsKPKlKvK9k8KSk|KsKQKrk=KvkSkPKxkjcR8K=k$KoKrkTkPkHkDKzkwNKrkckHkDKNkEk8KHksK$kjK2K9KGK9kvKjK|kCKzKCk$KxkQkskeK$KGKNksk$kPKvkSkPkPkCK=klKHkcK|kHkPKCk$KjK|k$kSkPKrkCKyK=KHklkPkvkykVkNkHKvK8keKCMPkvKSKCkokoMHKQKXKDKCKskUK$+VkxkTkNk9kzkSkXKH+VKrkCkPK^+|kCKGKPKCkvKyKjkHkrK9krkNk8K9k|KCk8k2K$kVkvkrKXKokzkeKSk$K^+SKCKQkSkeKokGk8KvkbsKjKQKHKeKCkCkHKcKCKeKYkzKvkYK=KGK|KzK2KPkCKHkvKYk^+Dk9K9kCkXk2K|kUkHkeKvk^+2KjkVkCkeKxkYkCKsKsKvKxkek$kDKHksKCKYk=KSk9kvkUKYksksKHk9kjKTkCK9kzkI=KYk$kQkeKHkcK9KskPKsKHkxKcKYkXkHkzkXkPkskzkSkzk|k9KCKSKrK$+=KskTKTK$kSk=KH+|k9kGKY+sKjK^KFl+xksKpE+xKxKxKH+9+uP+mdok|kXKYKHkDKQKeK$ksKCkQk^+Yk$kzkEk8k^+^+CKSkF$KXK3ODKSkrK^+Yk|k$+aa3LzKjKDKSkHKSKsk9kHkP+DkNkNksKCkvkXKNkoKCksKrkjKYk|kQkGKDKQKykYkGK|KzkxkPkeDG+YKHkrK^+2KoKeK2kXkDkNkrkGK9k|kCKNkxKEkXk|KUKzK=KDK9kSkUKyKjkCkSkPKUKyK8KvkCkPKjKYk8KjKPKXkxk|kQKY+2+U+9kH+^kCKRPKNkv+D+U+j+xk7Z^ks+e+R2+o+T+Dk9kGKvK9KCKvkR2+jkPk8KGKEkd9+|k$k$KCkPKTkNkzKzkCkSkHKyK|k$+|KGKTkGkYkxKd02+VkQKhykN+qv+fxkdRcKvKlk$KDKDKDkH+CKPKzkYkxkH+NkYKzkSkyKQKVKHkzklKGkCKeMlKjKU+xkrk=KDKeKHkjK|kCKQkeKGK$kGkcKlKPKDKNkH+skPKSk8kxkPkcK9kSkVkv+Tk|kSkDKNKNkH+=KHkskzkjKCKzK$+$KSk=KC+XkSk$KQkrkTkskjKXkHkNk2kskPKzkHkSK|k$K$KGKXkxkvK8KHkvkCkCKGkXKzkHKPKok=KeM9kSkGKokGKUkHkPKzkck|kHKeKzksKXK^+8KrKYKsKNkyKeMvkGK9krkcKCKYkzK$kDKCkCKvkCkGKxKYkCK$KHkPKNkH+cK2k|KPKNkPksk9k|KHkCKCK$ksKsKCkrkcK8KHk$KSk$kGkXkYKCk9kokDkzKe+zkCkvKGkTkSkPKHkrKQKcKsKHkzkUKNkeMzkHkPKNksK$kPKvkSkPkNkrkckHkDKNk2KskvkHk|krkH+eMzksKckcKvkCKGK|Ksk^+8KCK9KCk$K^+|kCKeKeKU+wHkzkSKvKnNKNKEkDkYkHKX+3$kSKskSkHKCKsklKsKHkrk=KjkbIbSKz+BAzkSk9k9KzKHkeKDkjKSKCKGKlKvk^+Nk<VkGK8kZ0XKSkvkHkUKSKG+f|+fUKSKYk2kCkrKCKSKCK9kHkDKNkNk8KzKHkjKNk2KVKsKeklKDkGkVKzKYKeKxkGkYKvKGKeKQKSk9KGKvkSkPkH+eM8kHkeKNkGkYk9kGKPKTk=KHKXkHkIC+<ek|+P+|+H+uDkeKHksKrk=K8KDKHk9KrkyKYkHkeKlKvKYk$kzk9kjKHK9KEKGK$K2kokGkUklKDKYKjKPkNkCkPKXkNKH+=KHk|k9k9KPkHK9keklKDkGkVKeKHkGKok|KCKjKzkNKDkH+eMsKHkzkNkPk$kvkHkPKNk8KVKXkvk9kxkvKXKGK|K|KxkcKYkDkYKCkDk^+EKPKHkjKXKGkXKzkHkvkHKyK=KHkrKCkDkGkT+FFEkSKcKeMGKDKlKcK|ksk$KGKsK|kcKXK8kCkvkxkNk<$K|KbZ0XKSkvkHkUKSKG+$K|KbjKc+W|+P+e+UKGkcKskYKGKCK9Kzk9klKXk^+cKHkeKeKGK|k9K|kGKzkrKrkPk=KsKzkeKjKcKVKrKHkeKckH+TKHk8kCkcKH+rkCk9kCkNklk=+sKzkGKNkGkUkCkvkHkrkC+YkEkPKGKvKH+XK$+eKGKHKDkCKDKSkPKUKyKjkCk|KGKNkNksk9ksKjkyKv+v+y+nPKXKcK8+XkHkzkCkyKeMvkSk$KEKlkjkHksK8k^+^+CKSkF$KXK3OnDKSkokGkXKsKy+fvK9KW8kP+e+X+c+8+b|+iwCKzKbGKP+p9+eke+f9krkyKYkHK8kHkHK|kVkzkGKeKNkv+XKRy+h2+2KnIR2+2+v+QKoKGK$+=KEkS+xKsKmsKv+^KRxKsK6jK2kxKsKmeKyK=+UKykN+sKSK~J2+oKjKC+TKGk$+UkX+C+BykN+J8+>D+xKsKmsKEKHKlKvkCkrkpoKGK8kHkZUK9Kzkzk|KeKSKGk2+U+xK4jK<9kSkDKjKYk9KSksKzkPkGkrkNKCkzkrkcK=KSklKsKxkYkCKGK8kHkxkSKDk2k|KVk8kPkCKDKSkeKokGk8KskHkzkvkNkYkHkCksKckGkXKlKeKHkUkNkeMzkHkjKNkPk=K9k$K$KyKNkXKDKlK|K^+GkYkQKCkzkcKSKXKeKHkHkHKzkcKGKsKzkHKyKUkCkXkGKNkNk8KP+$KCkvKGkjKEk|KHkcKzKcKPKGK$Kxk^+$KzkHk$K2KPk$kgyKy+LV+jkeKEkPK=K2K8K|K$KHk9KzKHKSkDK9kPk8KzKCkPKckvK=k$kPKzkIuyk8KeKGKEkDkNkXKGKzkCkrkcKrkGKeK8kPk8KeM$+$KSk=KC+=kHkPKlKEKyK8KzKHkjKNkVkzKGKzkYKzkQKEKPKDKzk^+NkeMnzkSkck|k8KCkPKXk2+Kv+okneKxk|kEKeKPKnaVkskQkckHkUK|kv+skGKrKjKPk$kekHk$Krk|kCKPkSkzk^+QK$kDKGKzk^+NkeMykfgwEK8KsKe+vkDkNkUkHkeKrKDkNkoK$KGKjK9K=KcK2kCk$KjKcKrkIvkSkUK=K=KHkPKzkH+2K8KHkGKzkxkGK|kHk$KHkHK|kDk9kHkPKTk|k9K8kPKvkjK2KjkCk8kHkHKGkxKzkYkSkXK9k8KSkzkSkUKNk|krKe+vkokyKjkGKU+CKHKekHK9kCkvkwyKjkzkHk$KXK|kv+zkSkn^+|kCKeKGKzkxk0eMSkPK$+^+|kCKeKGKQkDkGkv+CkPKsKNkyKeMDKHkP+G+HkeMnSkeKokGk8KnzkSkwTkCKnCkzkxkPkHKQk9kHkt0eMSkPK$+jKPk8KGKEknrkTkPkHkDKzkcK0=KlKsKzkwvKHK8kHknjK02KskEk$KEkNk|kP+CkzkxkPkHKzkSkeKzkv+un$KHkNkvKskvkP+rK9KYk|ksKDKeKxkGkeM$+$KSk=KC+oKCkPK$+vKGkYkCkGKzkxkzKjk$+$KSk=KC+HKDKzkCk$kGk9KEk|KHkCKYk$kPKNKzkxkzKjkvkQk9kxkSKYksKDKeKxkGkeMzkrKGK9K^+$kSkFVkjKekCKgnDKrk^+CKDKsKy+C+sKCKQkXK9KC+P+CKPKvkHkCKH+eMXkDkSkHK|kCKjKzkGKDkH+eMHkj+s+pzKLIabjKSKXKSKsk|KrkPkjkzkYKHkHKGKz+s+vKSKHkGKskXk|K$K$kH+YkHkSkFvK9KWgnDKrk^+CKDKsKy+aCKzKb8kP+C+9+ekj+invK9KWGKP+bX+c+8+fHk|KvKokVkEk$KQkrkYkrKlKzkzkrkcK9kCkXkYKDkH+NkYKzk$KrkTk$k9kHkckQKXK|ksKeK9krk2KHK9kskzkrkPkHKXkHkvkxkek$kDKHk$kxkCKskeKEkPK$kCK8KHkXkCkcK|kCKeKDkGKXK|kXKYKGKVK^+^+NkHkzkHk=+Gk8KeKU+lKXK^+=kHkPKlKNKGkxKzkGKlKokH+skFjK$+vK9KCKXk2k2kXKskXk9kHkGKHK=KzKskDKeKxkGkeMsKYKSkNkYkCKPKXkzk2KNk=KXkzkSkrDG+2KskPKPKHkUK|kVkzkGKeKNkDkUkrKsKeKvKNkYkHkCk|KcKc+PksKxK2+2+VkQKy+ykN+qE+9+oKTKU+zkV+LAyKR8+VkQKU+ykN+8k^+skDKlK$KxkcKjkVkCkzk2KyK|k9kQkeKjKcKYksK8kUKUKNkUkHkeKeK^+^+CKskzkGKNkH+XKGKlKvk^+Nk<GKGKDKZuWaHka9+uV+$+|+IyKyK=+brKQkX+C+HKGKvkbv+=+1AGKrKok<8+l+vkIEkp8+vke+|+uyKV+a$+j+xk^+o+$+bs+~Gk=+GKs+QkxkC+x+Ae+HkX+QKz+AHkHkjKS+PklKsKzk^+QKykDKSkvkxkcKHK8kCkXkjK|kskeKP+|KxkPk=KCksKsK^+NkeMsKP+=k9KGk8KEkY+RH+2KHKzkDKYK2+Gkv+y+hnxkc+VKzkGKDKQKKOsKHkGKDkokskeKCkXk^+cKVK|KDKeKxkcKYkHkeKHkCKSKCKGKeKDK2KekcKYK=kQkPkokDk|KVk2kCKGkVKlK$KHkck2K8KSk9k9kEkyK8K|KsKzkcKyKVKY+HkRekzk=k9KYkzkNk9K8kHk=klKxkSKjklKsK|krk9KEK|KQK9krk2KSKHkvkHK$kGkeMzk0VK^+cKV+e+xkVK^+cK1bxkVK^+cKYkSkVksKsksKsKVKAbsksKsKVKs+e+$kyK|klKHksKGk$k=KlksKHkCKvKsksKzkPKjKCKCKSk|KGKUKH+jkEk8kYKUK2KeMvksKvkrk2KEK$KHkPKNk^+UkrKeKSkvK2k9KGKeKDkrk^+CK|KGKXkxk^+oKsKDKSkHK|kHKCkPKsKEkQKCKvk|KTK8kokzKVkPKvkHK=K|k9k$kGkSkokXkSK$kQK^kckCMvK2klkHkHkckSKek$k8kTK|KSKDkNkckPkCK8kHkeKcKGkDksKHk9kxk2KjkCkSkPKXKGk8KsKSkPKjKYkrkGKeKsk9K9KCKeKnHkSK9K8KHksKsK^+NkeMn$KlKcK|kv+HkCkzk2KGk8KnQkHkwcKEK9k9knrkPkv+GKnrK9KcKXKzkCkSkHK9K|kGKEkskNkyKjkHkn$+wsKCKQkXK9KCkGkeMvkHkeK^+cKNkDkSkPKNkGkxKzkFCkXKSKekcksKHkSKcKoKHkQkXkDk~2Kvke+DK2KNkVKzkDk|k9kGkskCkCk$KjKDkCK$+$KSk=KC+=KGKDK$+jK2KXKHkPKzkDkH+NkYKzksK2KyKYkSkVkDKrkcKcKCkXklKCKyKrk9kHk|Kc+GKz+ICkrKXKCK$kPKCk$K9KCKckeKGKDKNkH+skPKvKCkTkH+jksK8kQkPkGkoKUKSkPKcK2K8KSk9k9kvKGk=KsKsKlKEkCK$kzkskzkCKGKz+e+PK|KHKuTKDKPKsk|kCKrkSk9kCkHKekCKeKzkHkokC+XKSk9kSkCKSKrkSkzkIC+~E+DKGK9kDkGkYkGKeKXkH+|k8KCk$K2k8k9KoK2keKHkUKNk8KvkHkeKckGkjkskHk9kxk2KjkSkeK$KjKzKjKSklKDK2K9kskCkPKzkcKyKrkDKSk9krkPk=+XkGK$K9K|kzKeKSkQkDkGk=KsKGK9k^+DkeMDKSk9kDkyKjkCkSkPKvKNkUkNKDKPKjKPkXKYKCkzkxk2KjklKeKHkNkGkVKzkDK2k9KSKCKeKGKXkxkcKjkPKSkVkCK8KXKeKHk|KrkPkjklKPKNKHKNkoKPKCkrKCKQK8KGKDKHkyk=KeMDKzkCkrkcKek2k2k|KCKNkjkSk2k2kH+|kskskzkeK^+cKNkP+DKGKDkYk9+RYKDKcK2K8KSk9k9kNKNkHKYkek|+UKvk=kA9KEk3S+Yks+DKlKxksKBIvkYk$KH+Tkskl+ckEk~z+8kvke+yk9+yKe+XkFokrkz+UKVKVKYK8KrkrkrkVK|KCKjkUkEKVkz+E+|kGKPK|KjK|kXKYKHkvkyk=KeMDKskzkCKH+eMXkHKeKCKCkVKXkwAS+zKL|+e+bHKGkoKrK9kCKHKQKskQKGKDKQKDk8KSklKPKokGkz+ok8KlkGKyK9kjKCKIDKXKE+zk9KXkDkGkoMrkj+skPKykG+y+yKjKv+XKzKsKvkNKv+^+jkeKsKDKPkNkeM$KSklKcKGkoKYKHkHkDkEkeMVkUKPKXK9K=KvkHk8k^+2KCK$+GKsKXKGkXKzk$+eKjK|k$kSk8kCkokGkskF$K|Kp>v+DKSkvkxk2KVKy+QkSkTk=KVKeKzkeK9KGk=+$KSkUKv+^k$kGK9kSkTk|KCKjKzkVkQK2KYkzkVkrK^+QKCKeKeKzkrkYKskVkHkeKUkyKVKHk=kvkQKYkCKzkskVk^+QKjkskYKGKokGk8KzKHkjKNkGKeMDKSkvkxkPk=KGKvkSkvK2kskPKzkHkHK|k|KSkGKvkxk^+CM8kHkPKNkSkjkGKeKzk|k2kskPK|KGKCKGkeMzkPKlKvKXkCKEksK$+vKNkTK$+VkCkHKC+HKDKDKHkHK|kXKSk9kSkCKXKSKNKYkHkjK^+|kHksKsKUkvK8KSk$KHk4yK=K2k2k2k8k9KoKDk9kSkUKXKrkGKDKNKTkPksklKPKvk8kNKrkckHkDKNkokVKHksKsK^+NkeMskzkSkCKyKNkHksKlKyKQK$kjKHksKj+u$kSkvk$Kp~$k|KYKPKrkcKCK$+sKlKXK9KskeKzkHkokPkCKzklKeKHKQKskeKDKHkokC+XKSk9kSkCKSKXKYK0zkjKTk|kHkhIC+S+nFzkGKEkYkCKhvkSkUK=K=KHkPKzkxKYkCK$KHkPKNkjkPksKzksK9KyKNkHkzkHKSK|kCKPKsKCkrkcKSk9kzKjKjk~eKCkGKDKNkH+UkHkvKlKCKyKjkCkSkPKPkYk9K9kPK$K^+cKeMHkeKzKxkzKjkvkDK9k$kH+YkHkSkFPkGkrk$KgnUKNkYkHkDKsKz+hUk|Kj+iwekskeKQkCkcKhcKCkPKHkv+CKskUK$+SKok^+jKeKHkHkCkNkoKGK9k9krkskYkHk|KCk8k2KoKVkvk2kUKPkjkzkYkCkTkvK|kCkXkYKNk|KCKjKzkYKjKPkYkVkGKeKxk2kskPKDKlKCKPkCKPKDKEkPkGkrkvkeKCk$kGk8KPKGK8k^+DkHKzkCkSkHKSkjkGKeKzkrkcK8KHkGKvk|kSKjkGKzkHkUKvKHKPKXkHkvKGkVKPkFGk^+SKXkGK|KzkUKvKHKVKCkvkTkGkjkekHkXk^+SKjkHkeKHkok9KskCkPKzkxkPkUkCkvkHkrk9KSKHkNKvk^+SKzK9kGKEkv+CKskvkHkYKxkyKYkHkeKsKNKNkEKDKYKHK$kGkeMzkj+s+pzKLIIe+rkcK=KSklKsKxk=KzKYKGKsKEKGkCKPKGkDKNkH+UkHk9kSkTkH+eMPKSk$+XKPkCKrKHkeKxkcKXKHkCksKjk2KjkCk8kHkjK=KYkCkSkFSKC+=KbGKgXK=KVKYKPkSkNkH+cKCkDKGKNkH+skPKsKHkNkHk=K$KHkvk^+yKjkHk$KVkjK9KCK8kGKsKcKH+NkPKGkvKTKpXK9kGKsKcK0SKHkNKNKrk0CKjKzkHkHK^+VKnrklKHK2KjkCkSkPKH+|kskskzkeK^+cKNknokyKvKCKXK8kCkvkxkNk<jK$+$KXKGkNkd$+$Krk8K=+$KGKDKv+CKCKPKlKsK2KyKYkSkVkCkHK^+$kDKHksKeK9+GkvkHk8k4uWaHka9+uV+$+|+IyKyK=+brKQkX+C+HKGKvkbv+=+1AGKrKok<8+l+vkIEkp8+vke+|+uyKV+a$+j+xk^+o+$+bs+~Gk=+GKs+QkxkC+x+Ae+HkX+QKz+AHkHkjKS+XK9kGKsKcK0rK9kGKYKwGkxKzkHkPKokSKv+|KHkeKvKH+VKsKCkSkHKSK8KHksKHkNk2kHK|KzkDK2KyKoMCkvkXkxk|k=kGkjk2k9kck$KrkSKekvkokrKlkrkrkxKP+DkQKCKPkoKHkeKXKsksKxk|k$KzkHk$KxkekjksK=kGKrkcKzK$KsKHkcKSK$kSkPKskNkNk8KGKXkHkjK=KYkCkSkFPkyKUkHkgnUKNkYkHkDKsKz+u|kCksKzkcK|kHKDKNK9krkyKYkHk8kvk2KYk$k|KsKP+GkSKD+oKzkSkQKGkeMykCk|KcKc+PksKXkeKok9K$kYkCksKNkNk8KEkeKGKPkCKoKYK9KCKHk=kxknGkekvkeKo+9KzkCkvKGkTkSkPKHkHkyK=KHkHkPK9KCKCKeKGKQkDkGkDksk9kHkxk9K9+Rny+L02K9kGKPKTk=KHKXkHkykck|kEKvkCkSkPKGkHKNK$kGKXKjK2KPKGKzk^+ekCKnDKSkokGk^KykwDKUKTkcKAb|+vKGkjkeKGKPKcKYkHKzkHkHkCKPkskeK2k$KcKDkCK8kHkPKNk2ksklKPKzkcK2KCKCKPKrKrk|KCKjKzkvKjK|kCKXkHkzkNKH+=KHkUKSkHKGksKrKrKsKxk|kYk|K8kPKrk0XKSkPKzkxkcKjkVkCkPKokNkoKFPKGK$kH+NkGKzkSkCKNKrkckHkDKNkPkYk$KGKDKUKYk|kCkVKCkHK^+skVksKsK2KyKYkSkVkekrkNkjk|K$+$Krk=KVKHk$+|KrkH+eMzkHkeKCkGkNkHKjK|KcK|kHKzklKsKHk=K=KQkHkeKv+CKskUK$+$KjK2K=+GKDKDKxkcKjkeKHkXk9KYkHKeKsKYKjK^+skVkDKSkHKcKCKDKzkHKHK^+NkHkzkSKPkcKzkeKSk|KxkPkjkEkvKHkcK2K8KCk|KzkrkPkCKQksKDKCKH+zKzkskzkjKPkjkPKGK8kjKrkXKSk9kSkCKSk=k$+lKPK^+2KskvkHkEk2K2KVKGKQkjKyKvKCMeKeKSkCKc+jkSkskzkCKH+eMXkP+DKjKYk|kY+IRxKYkCK$KHkPKNkcKHK8kCkXkjK|kskeKP+|KDk=KNkCkPKsKDKH+eMlKjKnSKz+12kAb8kSKCKsKsKCkrkcK9kCksKzkrkPkykVKCKPkoKNKoMskGKeKTk=K=KHkPKzkcKPkCK9kSkGKokokDk|KVk2kCKGkXKSkeKvkxkPkVkHkzkSK$kGk8K9kGKEkck|kHKzkHk9kXK^+zKQkXKeKjKlkjKHkjKzk8kokzKVk2keKxk2KskeKvkHkCKSkjkGKzkHkQK9K=K9kSkDKjKYk9KSksKzkQKSKoMCkPKApcKskzkGKzk^+NkeMsKzkeK^+cKNk2kHk8kNkSKXKeKSk9kDkTKyk8kHkeKxkcKXKSkvkHk9kP+$KDkSk$KXKNkeMHkPKzkCKGk=KSk8kHkxKekCKPKzk9K^+SKjkHkPKHkCKTKEKzkzkSkHKSk9KGKvkSkPkPkCKGKvkEkcK|kHKzkHkDK2KyKeMXkHk|K^+2KjklKeKHkv+H+eM$+|KCkUK|kEKeKHkGK9K^+$kSkNK=kvKSK9KSklK9kokykEKzkSkskrkYkUkHkDkGKXK|kXKYKGKGKCK2KPKskSKPk^+YkSKXkHkzk^kSK$KPKsKzkjKYk|kHkvkDKHKQKDk2kHksKvkNkYklK9kHk^+9k9KSkPKHk9KcKVKYKCkrKNk|keM|K$KsKrKPk$kHkPKzkjK|k$kSkPK$Krk=Klk9k|KHkCKQKskeK$KGKHK2KCKGKYkekX+2K9k$kA9K|kLV+vks+DK9KyKoMl+UKvkTKQkeMDK$KrkNkYK=KPk8kQkckLoK9K|+ekTKCkNKl+QKskxK|k8+UkXKrk^+YKoKy+y+rKrk2KEKsK$+$Krk8K=+$kHkPK9Kvksk8kHkeKNKGkxKzkGklKNkNk=KGKzkCkrkcKNk$KDKeKxk9KskeKzkHKCKPkskeKsKQKCKNkoKsKHkeK$kzKeMrkCkeKxkQKskjK|KvkGkSK$kXkPKvK^+SKzK9kGKEkPkPk$kzkGKQkDkGkcKeKGK$KxkGK|kHk$KHkHK|kjksKVkQkHKDkVKQkzkSkNkyK|kcKskYkxkyKzKskCkUKxkC+=KSkUK$+vKyKXK$+$KHkHK=KVKHk9kHkUK|k9KVkvkYkjKcKYk9kHkeK2k|K=k9KHK9kxkCKCKPKzk9kcKQKjksKCkPKXK=Kjk8kNKCkHK|kCKeKPKGKDkC+=KSkUK$+okGkcKGKlK9kNkC+rkGKDKNKTkPksklKPKvkv+2Ksk9kSkeKHKPklk8k8k|K$kH+YkHkSkFrkDkNkgnDKrk^+CKDKsKy+a|k9KHkSkeKjK7v+sK|KHkxkzK4eKHk|KDkyKXKHkCKPKjK2KjkCk8kHkUkyKzKzkCkSkHKH+Nk|KDKHkX+V+UKlkcKGK2kzK$KI9KNK9+|k|Kek8KzKEKskW9KQK8KxKE+GKDKSk$KvK=KeMCkDKGKNkNk8KrKSkPKNkPk9KDKDKzkcK9K|kCkDKHk8kokzKVk2keKxkQK8KHksKYKrKekCKeK9kGK|kXK=KDK$KGKNk2K9K$kHkvk^+yKlkck$K$kjkzkDkrkekGkTKCkCMPkzK2k9kck$KrkSKekvkokUKHKDkzKrKP+Vk8kDKYKCKNk=KHk$+HkSK|kCKPKsKCkrkcK=+$KSkUKv+CKHKDK$+DK2KPksk$KHk$+jK2KjkCk8kHkSKXKSKCkPKCkNkH+HKzkSkeKNKlkzKHkCk2kHKskYk2kDKVkcKYk8KHksKSkDk=KjkCkSkPKvKNkTKDKSklKHK|kCKeKsKGKcK2KeKSkzkCkyKH+XKGKzkCkrkcK$KPKGKDKNkH+UkHkDkGKXK|k$kSkPKzKxkzKjkXkHkzkUkYk$kHkPKzkCkGkXKzksKHkCKPkskeK2ksKNkyKXKNKs+P+X+v+uy+hoKhGkeM$+XKQKh7pHkPK$+9kSkpiJHkHKtGkVKCkPKc+~DkGkeKeKjKlk|kCk$KVKxkTkVkSkDKNKxk|kV+a|+jKS+3WrK|KGKHKDkcKYKDK9kjKSKVKnNKHkQK0CKjKzkHkHK^+VKncKskrKckeksKzkeK^+cKNkCkrKEkwV+GK9kGKPKokSKXKGK|KHkUKPkyk|KzkSkxkQKcKHkDKzkPk9KEKVkDKrKXK~9KHkCkXk2K|kNkUKDKEkYkCKskPK$KSk9KSKCKHkPKzkxkPkVKzkXkzkcK8+SKQkVksK^+2K|kzkNKCkcKyk8KeKGKEkXKNkVKzk$kHkcKSKHKXkHklKcKGk8KGkXkHkHK|kCKY+Ry+LNkek|KeKHkyKGk8KHkPKDKxkSK2KHkyk|KTklkykNK8kCkokGkskFVkHkEkCKOnDKSkokGkXKsKy+8krkPkrkCksK9K^+CK$kzk|KGKTkGkyKSKrKrKcKGkjk2k2krKDkyK=KCkPKXkrkokNkHkzkXkxk|k8kGKPKvkrkCKUKGK9klKxkSKUkCkvkHkrkpxK$+$KGKNkPksksKNKGKZ0XKSkvkHkUKSKG+fzkYKxkNk8KGKin$kNk8KQkCksKaYkHKsKzkNkxklkVKSk|Ke+9KXKSKrQd9kGKcK|kzkeKSk|KcK2KHKzkDKYKUKCKYkGK9kHkCK|k2Ke+i$+7~B|+Ib39+LIiI3S+E+e+ws+u<E+is+|+3z+o+ibe+~3o+ie+Ic+Lz+il+bc+z+z+iIw~Z1iIs+S+ZLiIs+pLBibj+pu1iIIp3V+ibwp3BiIA7<E+il+j+C+Z8+iAe+X+ux+ie+Ac+S+BiAe+9+<Wil+j+33z+ibe+C+<1iIAuuLiIa7~BiIbu=+x+ie+AS+<Lie+j+9+9+E+ie+l+c+Lo+ie+l+X+9+z+ie+w7uo+iAIX+z+E+iAe+~<Wibj+7L1il+s+p~x+iIa7~WiIe+7z+z+ibe+7ux+iIa9+9+3e+e+e+371e+e+s+u7V+IAic+z+BAIi7~Bs+bic+<Wwai7uBbAip9+z+e+aip=+V+l+Ai9+9+E+l+AiC+Lo+|+j+ip<1A|+ic+9+z+|+e+iuS+V+l+wi9+~E+l+Ai7~8+wj+iuS+BAAic+<V+bIiu~V+l+e+ic+S+B|+wiu~V+s+|+iC+Z1Ae+ip3E+j+|+i7Z8+|+|+iu=+8+e+ie+X+Zo+bil+3Zx+l+il+c+ZWs+iI7S+E+Aiwc+<3Ij+|+p9+3IwI7~3bas+S+S+3l+e+IC+u3bAw~S+3l+bj+S+z+3s+l+|+X+u3Abe+c+=+3e+wa9+9+3b|+b3z+3s+Ie+7Z3be+A3z+3bwwc+71l+s+j+t3o+Al+btS+o+abat3WAl+btuWj+e+l+t~z+|+l+ykyKH+|kHklKNK0<rK$+$KSk=KC+=KGKDK$+yKNkXKlKsKeK^+cKNkrK8KHKCkSk$KSKPk5~^kXKSkPKPKxk2KjkCkSkPKv+CKskUK$+$KjK2K=+GKDKDKxkcKjkeKHkXk9KYkHKeKYKCkTkvK|kCkXkYKNkVk8kHKvKGkUk|KCMvKyk$KDkH+zKcksKjKv+XKzKsKvkNKv+H+=K$+$KSk=KC+=KGKDK$+UKvK8KSk$KHkv+H+eMGKDKzk^+ekCKrklKPKUK|k$kSkPKlKcKGkYkcKskYkxkyKzKskCkUKxkVkNklKCkvk4DkEKCkvkykUKSKVKzKHkjKNkzKrkVkDK9k^+GkeMzkCKPKyKNk8K$KGKzk^+NkeMeKHksKrkYkUkHkeKHkokH+8KHkDKzkck|kHKeKzk2kUK=K8KeKHkPKNkNK8KCkXkCkHK^kHKzkGK$k^+2K8KSksKSkyK|kXKIs+aokTk1a$+DK9+yKz+$+bIc+Gk=+j+Qkl+S+C+B|+wj+9+S+LaQkDKpLXKGK9k9kxkSKXKHk9kSkjK^+$kPKXkeKxkyKYkEkskzkjK|kCK9kSkGKok|K$k$KHksKUkPkyk|KzkSkrk9KLHkPKDKrk^+CKHk8kGKDk2KYkDK9kCkXKTkskGKeKvk9K8KXKDkSk9kDkyKjkSkeKPKNk^+ykPKGK$K^+2K=+eKGKPKTkGk=KvkFrKXKlkEKjK9KCKHk=kxknGkGkCk2k9kAbzkSKQKCK|+ok8K9krKHKYkjKCK7YKSKl+zk9KTkYkCKVKrkj+9kzk9KbNK9KjkE+G+yKQkGKcKCKXK8ksKSk$k=K=K9kCk$K^+|kVK9kck$K^kcKjk9kXkHkNkNKoKPK|keKrk9KCKeKzkEkHkyK=KHksKvkxkek$kDKHkckrkH+eMGK|K|KDklk9KDK|K8k^+^+CKSkF$KXK3OnDKSkokGkXKsKy+fjKekXKIP+bC+GKz+IHKfcKGkPk$KDKeKxkSK$kUKHkzKrkckCKzkVkSkCKXKsk9ksKQk^+=KoKUKY+$K^+cK=+SKQkckxk2KjkP+XkHkNk^kCKzkGKCkDkSK$kPKCkzk^+yK|k$+SkPKDklkrk9klKeKXKPkCK8kzKYKCKGkCKvKskYKjK^+skVkVKCkHK^+skVkrkeKjKCKCKVkCkPKjk9KzKVKSkeKQKSKzKGKDKHkcK2K8KCk|KzkQK^+SKHkXkDKNkNkjKCk$KHkck|k8KCkPKXkTKNkskXk9kHkwHkeMDKP+GKXK9KcKQkSkvk|k2k9KCk9kvkxKYkCK$KHkPKNkSKCKeKeKSkCKckHK$KHkDk2KNkSKHk8kCkokGkskF$K|KC+|kOnDKSkokGkXKsKy+fjKekXKIP+bC+GKz+IHKivK9KWGKP+bX+c+8+f2ksKxkcKjkeKEkvKxkTkEKXkCKvkcKek$kvkHkSk4S+Nk|K|Kgw2KskvkHkDKcKE+4$K|Kb$kc+8+|+P+j+t0VKGK$KeKaPkCKvklKDKxkSKCKzkekGKHK^+sk$KQKCkNkSKeMVksKHkxk^+8kGKPKvkrkCKUKGK9klKxkyKEKvkCkSk4zK=+$K|KHkTk=K8K9kckXkUKekNkDKeKHkNk=K8KPKnY+yK=KeMDKzkCkrkcK9+RokrK9KcKXKzkCkSkHK0CKY+CkiDkK2k8kGKeKwCKG+9kmj+ZPkCKzklKeKHKVkskY+CkivKK3SkY+CktCKS+bRykZEKcKlKPKDKNkH+skPKnzk2+H+39ki2kCKGkcKRok8kjKPkv+$Ky+2kCKGkcKoK|+ykt=KG+2keKHkyKVkLykg8kjKPkv+GKy+9k6z+OCkoKGKzkE+=Khhe+pQ+8+l+l+g^+VkHKN+Iykz+CKfhIAy+~E+l+gCkeKyKS+e+yky+vK1fj+r+e+9+=+OCkoKGKQ+S+Gky+$Kr+C+=+E+gCkoKjKX+Wyky+lKL18+br+e+9+=+OCkoKGKQ+=+Gky+lKhLu1r+e+l+9+>$koKGKN+uEkG+lKhhS+Q+8+l+l+g^+VkHKN+wykz+=Kc+e+l+l+ZEKcKlKPKDKNkH+skPKneK2+H+39kRok$kyK8Kn$Ky+DkVkz+ykilKz+Yk2KIykg$kyK8KnGKy+X+>UkGKeKnokE+8+Al+bpS+E+wAaZQKskeKY+8kjKPkv+Eky+|+Zlkns+e+g|kX+G+IRokvKE+=KN+Y+Y+9KWnbTKlKL1E+RN+lKlKyKS+CkoKGKy+S+GkRxk|+ZyKG+GKN+vksk9+OlKy+lKQ+v+9+$K00pUK=Khhl+qX+=KTKGKN+^+VkHKhhI7Q+V+ykRxkX+>GKeKHkzk9KPkeMoK$Ki9KEkOyKrKlKHK2KjkCkSkPKwcK9+Cki2kCKGkcKe+i2kCKGkcKs+ivktlkuok8kGKCK0|ky+2keKxkQK8+oK|+yktCKG+2keKHkyK~2KIykg$kyK8KnlKy+8kPkCKrKs+oKX+Ek3GKy+2kCKGkcKs+oKIzk>UkGKeKnckE+8KY+CkieK=KQK9kiGKlKCKGkRgzk2+^+3Ekiskq>8KHkzklKCKcKv+skgyKyK=KeMDKzkCkrkcKv+SkY+CktYkuokeKHkNk=K8KPKnCkeKYkGk00e+pjk$koK9kN+7Ekn0IAskH+2K9kN+e+zkWnj+xkCkeKYkS+s+yk0<9+OyKrKlKHK2KjkCkSkPKwSK9+CkRok^+QK9+CkP+9kxkcKNkzkYKG+z+E+x+Rokzk2KPkskVknPKxkskv+HKeKeKrkPk9+fCk8kwCKEKsKzknEkGkv+Ab$+EkH+jkfRgzKPkCKzklKeKHKVkskY+CkiX+K3SkY+Ckt3uykgyKyK=KeMDKzkCkrkcKv+DKY+CkqV+$krKY+CkH+YkCKPKXkzk2Ky+G+y+IAqV+jkYKeKSkPk0eMHkVknxKPk8KSkeKY+aXKCKEkn$K9KSKjknQkHkwu8+j+$+Qk^+|k4RgyKCKGkjklKeKPKeKNk9+Cki|+q7skY+CkipK3SkY+Cktz+uiSkY+^+7Le+RykZEKcKlKPKDKNkH+skPKn|K2+H+39ki$KqV+UkGKeKn9KE+XKY+CkRZekHKeKnGKz+SK9+9kRg$kyK8Knvky+9+>UkGKeKn|kE+2Kykg8kjKPkv+sky+$kjK|k9KP+DKHk^+Yk9+$KP+9kxkcKNkzkYKFS+KO8kGKeKwTkG+|+g8kjKPkv+eky+|+ZekHKeKnjKz+VkGkg8kGKCK0Uky+PKY+9K72K|+i|+zk7HKijKiCkX+S+RgEkH+9KEKsKYKY+eK9+3$KP+9kxkcKNkzkYKykq>oKYKCk9kxkv+ykP+9kHkHKDkjkYK0vky+Q+rk0skReklkek|KlKsK2Kv+CKY+$KiEkX+S+RRgzKekHKeKnXkz+9+OVkYKCkDkGk9+EkP+9kxkcKNkzkYKhX+K2kXky+Y+TkX+UkoK|+ykq6ykP+9kHkHKDkjkYKgCkyKv+Nk0|+RekDkS+y+EkP+DkGkeMXkzkYKZEKUkGKeKnykE+ykoKXkykZekG+PKY+lKtek3rkijKtP+S+N+Rg^+QK9+Qk0skqV+ykoKXkykz+Gk9+$KiQkQ+X+ugyKHkDkSKCKokEkP+cK9K|kCkDKHk2+Dk3IRgzKEK8KHkzklKCKcKv+jKgyKCKGkjklKeKPKeK9K3PKiHkzk>GKR$KSk$kGkrKEkckvkQKCK$kPKCk$K9KCK$KPKzkHkTkGk8KvKCkXk^+|kVKeKHksK^+8KCKQKEk$+vKNkTK$+YKzkvKYk=+DkHk9kDkvk$kXkYK9k^+Dk9Kzk8kCkokGkskF$K|Kp>v+DKSkvkxk2KVKy+fGK$k2KLP+be+UK9+z+vkf|kCKNkxKEklKPKxkzKzKHkDKzkxk^+T+nXkDKokS+eM|KHkEkPk8KTKrKYKrKCKGkCKUKHk8k^+GkeksKeKDKokNkXKny+n$k>SKDK9kHkjKPkjKCk$KHkrk=KjkCkVkeKUKcKNk9kSkQkjKYkzkeKCk8kjK2KykDkSkPKNkPksk9kCk|KcKc+PksK2+d7E+7e+oKP+H+c+GkeKSklKHK^+$kPKXk$krk^+CKUKeK=kUKvKHKeKXkCkHKDkoKXk|KlKcKGk8KGkDKzk^+ekHKzkCkSkHKvkHk9K$+aX+9+z+$kGKDK^+cKjkSksKYKjK=KYkCkSkFSKC+=KbGKYKcK9KEK|K=klKxk=KCKrKNK$kxkCK=KGKsKNKUKvKCKDKNKQkrkzKHKlKvkCkrkpoKGK8kgw2KskvkHkDKcKE+4IfVkok|kDk9kSkDKjKYkVkzkSkeKjKDkCKvkrKwp3xKIIs+c+^+CKrKCkPKxk9k8KSk|KHkCK|kykeKHksKrk=K8KDKHkGKCKYkskPKXkcKDK2kVkzkGKeKNkrK|KDkzkUKCK=KeMPKCkPKTkSkjkGKzkHkCKSKeMDKSk9krkPkYKHk|Kzk2K9KskeKzkeKjKH+jk9kNKsKUKNk8KHksKzkjKPkjksKVKCkNkvKHKYkek|+UKvk=kA9KEk3S+Yks+DKlKokDK|keKvkXK3Pk|K$KPk8kEkSkBGkUke+DkurkXK9k8kUKDKckUKDKs+$Klk=kskae+jKsK8k9kQkEkS+S+eKvKEKbHk8KXKEkPkvK^klkeKzKDKUKrK|KyKbPkck|Klk3GkDKzk^+ekCKDkGK|KNkH+skPKckrK2K9KHKXkHkjkrKQKcKsKHkzkjkYK$KGkskHKoKokzkSKCKPkNKokVkCKUkHK8kP+HkPkXKHKDkyKeMXklKGKTkGkVKlKSkCkxkPk8KSkeK|KjK|k9KPKGK$KxkSK$kUKHkPKSKcK=KGKzkDK2KGkVKeKHkrKxkPk8KHkeKrK^+YkCKU+rKsKUK9suCK|+ok8K9krKHKYkjKCK7YKSKl+zkNkjkckXKYk=KcKGKTKz+GkYkCKDk=+PKskGky+z+EKeMHkjKzkUkNkYkHksKHkNkSKXKeKSk9kDkC+=KSkUK$+okPkHKXkzkGKCKDkCKzkUKSkHKGk$kYKeKSk9KcKYkCkPKXk^kcKXKeKHk$KxkcKjkTk|KeKxkQKCKeKsK$+CKGkYklKDKHkokC+=KSkzkCkrkcK9+Rny+L02KJHkPKv+=kVkJinhGkeMJyk$K^+cKrk9kSkDKQK|k8KGKPKsKGkSKskPKDKHk^+QK8KSk$KGK2K^+oKCkrK2kXKYkeMGK8kCkTkyKjkSkeKj+79+xKI|+j+X+vKjkzk|KsK=+p<eKHk|KrkPkjkCkPKXkH+2KYkPKvkHkSKc+$kSkFHkCKPkskeKGkeKTk=K=KHkPKzkcK$kSKNKj+e+X+zKLIj+|+2KH+VKzkSkeK|kekCKPKvkSkCKv+ujKXkDKyKH+8KsKzk|kCKNkzKsKxKsKXkNKVkzK2kHk$kGkeMzkYkGKHK^+|kHkeKsKrk9KCKPKGKeKDkNkeMXk|kSkXK=KzKSK|KHkHKekT+eKHksKxk|kVKDKeKCkXK|k$kPKXkFNkGkxKzkEkUKUKvk$kXkYK9k^+Dk9Kzk|K9kjK|k8KNKNKGKNk^+UkCksKCkEkYkCKVk8kDKrkYkskeK$+CkHK^+CKjKCkPKyKNkVKSksKrKrkPkCMGKDKYKqV+8KHkzklKCKcKv+ckGKQkrk=KjkU+QklKNk|kskPK$KVkjKskHKlKvkCkrkp=K|Kbgw2KskvkHkDKcKE+4$K|KbjKc+W|+P+e+a^+sk$K9KSkjK^+$kPKXkXkxk|kVkHk9kHkUK|k$kSkPKjKGkCKjkSkzkGKDk^+CK8kCkDKxk9k$kjKHk9kCkyKjkCkSkrK^+SKskPKDK9krkSKCKzk9keKxkSKsk9k8kHkokNKzKzkCkSkHKSKckGKNKHkUkNk|kSkeKYKUKvKzKGKzkDK2KGkYkHKeKeKck|k8KCkPKXkxKPk8KskzkGKUKXKXKYKGKeKjk|kVKvkCkPkjkokVKzkSkeKjKDkCK=KlKSkNkyKykck$KGKNk|kHKDKYKsk2KyKYkSkVkHkHK2KskvkHkvkEKNkYkEkskCk=KGkjkHk9kSk$kGk8KrK9kSkPkC+$kPK9kCkHKGkUk|KGKsK|kcKXKzKCk$KxkyKEKvkCkSk4NkNkXkgnUKNkYkHkDKsKz+hUkSkeKQk^+SK4lKPK9krkyKYkHK8kHkHK|kCMPKvkGKDkSKCK$KckYKUKcKskzknsK9K9KzKSkeKzkxk^+Dk2k|KVk8kPkCKDKSkeKokGk8KekHkDKrkPkYkGkDKzk^+NkeMcksK|KCKNkjkSkzkEkXKGkCKjK|KHkCKH+=KHkPKzkjKYk=+VkHkQkTkYk=KCkPKCkvKyK|k$+lKCk$kH+YkHkSkFrkDkNkgnDKrk^+CKDKsKy+rk9KEKsKxk^uB>Y$I^txk^uBRrsLboK^uU+lodvM9+ScHZ4>NsLu^KgVY^ZlkDDAUkEDA8kNDA$kEDAUkSDA8kGDA$kSDAUkHDA8kVDA$kHDAUko9A8k$9A$ko9AUk=9AS+^KskxKmd$rI4>NsL^k^K4ZPzZfdSsLD+EDAVKP+vMD+NDA^KCkxKX+yDA^K$+BRN2Z^Mek^>ykxMvq^KD+SDAVKC+muX2Z^MCkx>ck^M^>^KU+yDAvMek^>ZV>f1ECA^Mr+dxRG+u^Z$+BZ$DI^dZ^dBJrjt^Ar+gVOC+muX2Z^uRxumIDNh^7skxOu^7R^dVAxOF^+^g=+VZxgvRxk^RRVqE+I^Z$+4uHUIvAZ^u4fTjtvOr+g^Oz+NDAvIxk^ORV7KvA^A^OpV+xgl+^Z^g^qskxRO^qR^>VMxRF^+^KD+cDAxKG+C+^Zy+cDAxKl+^Z^K^MU+GDAv>BCHPZeKvVPZY+NYPZ4qSsLqxKOCGPZTkX9A$kl9AG+VDA^>ZV>fI^1^MD+|9AxMG+yDA^KZVKf7Hyg^Mr+ZxgG+E9A^>xkVgKvqR^K^MVgJvk^R$+4uHUIvqZ^>4LVNLvRr+O^Rz+NDAvdxk^RRVgE+y9A^Zxk^RZxZs+^Z9+ElPZBkssLR^dgxSPZUkG9A8kS9A$+BZ$DI^>Z^>BqQ|+^qr+gVRE+yDA^Zxk^RqxZu^>^q^Rfx+v>Z^M4AlQgvRr+g^Rz+l9Avgxk^RRVZKv>^q^RpV+xK4Rg^q=kxKvR^Zu^ZYQPZE+yDA^Ky+E9AVqjkvM^qRy+|DAxqG+E9A^RZVqxRvMp^K^R8kxKO^Ky+EDAVqE+y9A^Zxk^qVZxKG+NDA^RZVRf7Hyg^Kr+ZxZG+E9A^dxkVZKvuR^R^KVZJvk^qy+GDAVKE+y9A^gZ^KVgxqX+S9A^qy+r9AxK=k^K^qs+Vqf1VyI^ZuVZXSPZ2K4qSsLz+N9AvRoK^qxkVZfOXDu^dxkVRRvgR^>^qVRJvk^MskD+^DAxKG+HDA^qZVqfu$SO^MekVRKvR^M^RpV+xKG+HDA^RZVRfuP9A^gekVZKvZ^g^ZpV+xMX+VDA^MZVMf7sPd^ZjkVZxMI^MHxPZy+^DAxg3^g^MgUcPZ>=VPZB$VPZvkVMx+HkR^My+xDAxgA^g4Rly1xZc+g^Ay+qxO^k^AR^Oqxgvg^Ap^+VMa9+eKY+y+xDAxZA^Z4RQDtxA8k^OR^ZVAxOF^+^Mokbv+G+u^O$+BZ$DI^IZ^IBJrjt^7r+gV1C+mAGSO^iskx1u^iR^IV7x1F^+^M=+VOxMvOD+o9A^Az+5vOy+o9A^MY+xAv>^1D+$9AV1alxVZeKlPVZ9+cvVZfdSsLR^MZ$jVZQkolA8k$lAz+o9Av>Z^M4dx1vMD+$lA^KbXSVZ=+4AGSOVKE+=lA^>Z^KV>xM=k^M^Zs+VZf1jR^MuVMDSVZ=+4ACDIVKMvM4hozLVRQ+t^qy+SDAV>jkvRR^>$+BZHSO^>y+$lAVdMvq^d^ZxkVq>vgS+^>9+TUVZfdSsLR^gZ=zVZQkllA8kXlAz+ClAvMzk4Z2z1xKv>y+EDA^Kl+xMvM^>jk^>VKRvMolVZy+EDAVKE+=lA^qzk4Rvz1vR^Mxk^KVMKG+EDA^Ky+vlAx>jk4ZYz1V>xqA^K^q^MfxMvM2k^MgVME+yDA^qy+$lAV>|kmZYz1^>VRjkvR^R^My+QDAxMA^M4dxygx>c+g^qy+vlAxRjk4ZYz1VRxZ^k^qR^ZqxMvq^qp^+VKE+HDA^>$+4uySOvRy+$lA^gRxqvd^RZ^>VRxKX+XlA^Ky+TlAxK=k^K^qs+Vqf1VyI^KuVKVNVZ2K4qSsLz+DlAvqoK^>xkV>fOXDu^gxkVqRvqR^K^RVqJvk^My+yDAVMMv>4dHygVqQ+O^dy+$lAVg|kmZYz1^gVZjkvuR^ZRVMxqvup^+^>ZVSVZ6Y+vk^>V+yku^>BY+ck2+l9A^My+$9AVMMv>4R$SOVOP+vIR^M^OV7Jvk^Ay+$9AVOMv74RP9AV7P+vtR^O^7V1Jvk^tD+29AVtMvi4dsPdV1zkvt^7u^7vxVZE+l9A^1i^1V7>SGVZglPVZB9PVZ^+vL^+GkRViE+=9A^7Z^7BKQy1^tr+gViE+u^Lxk^iqxLu^7^t^ifx+vtBY+eK2+E+=9A^1Z^1BKSDt^iek^Lqx1vL^Lp^+VtV+6Y+$+4A=XZvLZ^i4ZEKvhr+g^hz+NDAv3xk^hRVJKvL^L^hpV+xtG+EDA^ty+QDAxhA^h4dUGtx3c+g^JxkVJKmRQGLRVhx3v3p^+^Lskxtmd$rI^Lz+lDAviy+yDA^JRxJmdDGt^3y+>vbxk^pRBKrGLR^J^3VpJvk^Lxk^tBMoyZ^LS+^LskxLmOzvubz+=IvaZ^347jDZvfr+g^fz+lDAvbxk^fRVpKva^a^fpV+xt^k^L4go$Ixt^k^L4uEsL32K^LD+NodVKY+s=^Z4qSsLqxKOyy^ZTkGlA$kSlAUkHlAS+^Kv+f1=^d^MZVMfixUu^>ZV>f7D9Z^MxkVKfOzX7^M$+BZl^d^MZ^MBOcHZ^>xk^KBMUVL^>$+4u$^dv>Z^M4IH2Zvqxk^K4R2TLvqD+slA^Kz+SlAvMZ^K4ReVLv>U+^MRVKdvMVX^Zy+slAVMMv>4ZDTLVZ8+vgR^MpVMxKI^K=Q^Zy+clAxMA^M4gNX7xqA^q47$C+xMc+g^RxkVRKmgvrtRVqxMvZp^+^>fx>vMD+HlA^Kr+xKG+HlA^MxkVKftzvu^My+9IxMA^M4IsDZxRc+g^dy+clAxg^k^dR^gqxMvZ^dp^+V>jkvM4gv$IV>jkvM4uQsLpVkvMD+yod^KD+=r^ZmqSsLRVK>Vx^ZTk$TAS+VKjkvM4OzvupC+muX2Z^RCkxZck^R^Z^qRxqmuroI^RRxRm1o=k^qy+Rvgxk^ZRB$k=vOxk^ZgBZUMR^R^qVZJvk^MZ^MBA2=k^qr+uVZ<mnzCO4qvUgvdxk^ZRVgjkvgg4aoXLKv>^q^ZpV+x>^k^K4go$Ix>^k^K4uEsL32K^KD+SodVKY+SH^Z4qSsLqxMOSvegTk=TA$k2TAUklTA8kXTA$klTAUkNTA8kyTA$kNTAUkGTAS+^MskxMmuVzdRU+2TAv>S+^M$+B1XUO^KZ^KBuXNh^>xk^MBKN8d^>$+4uHUIvqZ^>472NhvMxk^M4qxcAvM$+4AS=gxKA^K4IUNhx>^k^M4RvSOx>=+47GTtV>Mvq4IDNhVKjkv>4RNDtVKC+mAx9I^>Rx>mIDNh^qskxMmRP9A^qv+f1=^d^KZVKf7YcI^RxkVMfu$=h^R$+BgEXZ^Kxk^MBK^DA^K$+47E|1vMZ^K472Nhvqxk^M4R8TOvqD+lTA^Mz+=TAvMJ^K^>Rx>mAN^A^q8+xqu^M7^MrCegJu^MZ^>VMxKX+XTA^Ky+9TAxRG+XTA^uZVRxuvdD+ETA^gU+XTAu$+4A^UIxRA^R4dl|+xgc+g^dy+|TAxu^k^dR^uqxRvd^dp^+VZ2+GTA^Zy+NTAVZE+GTA^gZ^gBZS^A^dl+^ZVdx7I^7CCegy+zTAxdG+NTA^uZVdxuvgD+STA^Zv+f1CDI^gZVgf0YTI^dr+dxuG+ETA^AxkVuKvOy+STA^AskxuO^AR^gVdxuF^+^ZD+jTAxZG+GTA^ZhBRvt^Z^duVdHQCgG+GTA^ZZVZfI^1^u$kVuxZV+^Z47=XuxuF^u^duVdVVCgG+ETA^dy+rTAxAA^d^A^uRxum7eQg^dCkxOu^u^d^Ofx+vg$+4uT2ZxIA^I47CQgxO8k^7R^IVOx7F^+^AZVAft=81^Or+dx7o+4uX2ZBK9Ug^ixk^7qxiG+STA^1xkV7>vtR^A^OV7Jvk^d5^ZVdxOI^Oo^Cgy+UTAxZG+XTA^Oy+UTAxdG+XTA^1ZVdx1vI7^7$cCgr+x1F^1^7xkVZxOvIy+DTA^Zz+DTAvIZ^Z^7VdE+sTA^Zy+ETAV7E+sTA^tZ^7VtxiA^i47CQgx78k^tR^iV7xtF^+^1ZV1f1=yZ^hr+dxt^k^tRRskxtO=qR^1VhxtF^+^OxkVdxZv7y+DTA^ZRxZmuVzd^dfxdv72k^dgVdE+XTA^Zxk^ZBRoyd^dy+NTAVZJvg^O2k^ZZxZX+NTA^ZgQ9Cgokv>g^MFVMxqvu7^d2=Cgr+xK^k^K4ONvu3G+lI^MZVMfLxDZ^Zr+Zx>G+DTA^dxkV>KvuR^M^ZV>Jvk^qxk^KB>Y$I^qxk^KBRrsLboK^KU+yodv>9+X$eg4>NsLu^MgGXeglk$XAUkDXA8klXAU+2XAWS+^K$+BuUeh^>Z^>Bu=y1^Mxk^KBK=su^M$+47eehv>Z^M4uXvhvqxk^K4qyU1vqD+lXA^Kz+=XAv>Z^M4qCsuvqZ^>4AlQgv>r+g^qskxqu4O=^Iqx>v>^qp^+VKhug^R5VKxRv>u^M29egz+=XAvRZ^q4qyU1vMs+^K41rPtvRp^q^MdxMS9egD+DXA3r+xKG+DXA^qxkVKftzvu^qy+9IxMA^M4IsDZxRc+g^qy+9XAxZ^k^qR^ZqxMvZ^qp^+VgjkvM4gv$IVgjkvM4uQsLpVkvMD+sod^MD+l|egmqSsLRVM>VeogTkyXA8krXAekHXA8ksXA8kxXAeko|A8kC|A$+BZ$DI^MZ^MBJrjt^Rr+gVqC+mA=^d^Zskxqu^ZR^MVRxqF^+^KD+rXAxKs+^>y+SXAVqMvR4AN^AVKjkvq4OcY7VK2+HXA^>S+^KskxKmRVGA4dT9g^k^K4RDHkfBsUOD+sXAVKE+VXA^KJ^KV>Mvq4AN^AVqo+vRR^R7VRSVegFR^RZV>xRvMD+HXA^Kz+SXAvdy+HXA^ZRxgvg^dD+VXAVdE+sXA^ZZ^ZBgyQg^ur+gVdE+o|A^Oxk^dqxOu^Z^u^dfx+vdD+C|A^gz+HXAvdfRgVd6vd^d^uuVuCVegG+GXA^gy+xXAxds+^uy+C|AVAjkvA4RoSZVAE+sXA^Oy+C|AV7v+vIg^1ZVOx1vOxk^u4qYHkvOy+SXA^Az+HXAv7vK^OgVIMvO^I^txkVufuP9A^txkVgxdvA2k^RgVRpvZ^q^g7Vg=Segs+^Kxk^KBgjvuby+lIV>Mvq4IxDZVRQ+O^gy+GXAVdjkvdR^dRV>xRvdp^+^qskxKmgv$I^qskxKmuQsLbeKxKX+Hod^M9+QoogfdSsLR^KZs^vgQk=|A8kD|A$k=|AUkX|A8kE|Av+ftlXZ^MZVMfOyK^KuVKDVvg=+4OlXZVKMvM4gyKVM2+X|A^MB$svgCKCPvg|+G8og4qrsLKvMgHevgTkj|AekV|A8kH|A8kP|Aek$EA8koEA8kvEAekDEA8k=EAD+c|Af~GHg$+4gUMv>Z^M4d|euvqr+g^Rz+S$dvR^k^q=qVgjkvZR^gRVMx>vZp^+^KS+xK6^qD+H|AVqC+mdTM^>Rx>muzeu^qy+>vZy+s$d^ZVkxZ6^gxk^Rqxgu^>^q^Rfx+vMy+s|A^gRxgmAN^A^u^+xKvA^qD+V|AVqC+mdTM^qRxqmuzeu^Ry+>vgy+s$d^AVkxAyj+^gxk^Zqxgu^q^R^Zfx+vMy+H|A^R^+xKvZ^ZD+CEAVZE+V|A^K$+4gUMvdZ^g4d|euvAr+g^dz+S$dvO^k^A<VOjkvuR^ORVgxuvup^+^Rz+S|AvuZ^d4uX^AvOCk^R^AVdMvM^d^ZD+eEAxZG+oEA^RzkBuTt^R^KvKVKfuCeA^RD+vEAxR8k^RD+2EAVR2+lEARy+=EAVZE+CEA^Kl+^ZVKxRI^R=Hogy+8EAxKA^K4dxygxZc+g^Oy+c|AxdG+V|A^I$+BqQM^uZ^uBRjeu^tr+gV1E+V|A^iZ^iBZS^A^LY+^LZx3vK^3u^hskx1u^hR^uVtx1F^+^7y+YEAx11^7^1^tC+xIvi^7y+s|AV1Mvt4AN^AVIH+vI^I^1ZVdx1vOxk^ORVAKvM^Z^OpV+xRG+=EA^RpVRxZDk^Rg^RU+$EAvZgDyogy+vEAxdG+2EA^OZVOf7DGt^Zr+ZxA^k^AR4qTGLu^O^Z^Afx+vZ2k^d^RVR2+=EA^Ry+$EAVZJmIxYh^R8kxZvZ^RD+$EAVRE+=EA^Ry+2EAVAE+$EA^dZ^AVdxZDk^R^Z^ZU+CEAvgy+$EA^ZffA=DA^R2kVZxRvZD+$EA^Rz+CEAvuoK^dD+9|AxKX+X|AR$+BgEXZ^M9+$vvgBkssLR^KgYTvgUkNEA8kEEAZVkf1N^A^KU+VKKvqu^>2TvgRxku^MZ^MBgyQg^qr+gV>mmdHeO4qcRvZvK^R47rQIvAxk^>RVuKv>^q^>pV+xK4Rg^>0xKvq^q7^qc9vgMvKR^>ZV>ftEQg^Rr+ZxZ^k^ZR4O8Xuu^>^R^Zfx+vMs+^KRVZRvgy9vgZ^kqxRA^R4O|Qgxdc+g^gxkVgKmAyjORVRxdvdp^+^KaKO^d5^KVdxgF^g^ZpVZxqX+EEA^qy+|EAxKI^K2Tvgy+T|AxKF^K^q2kVK>vMD+X|A^Kckjkv>4gyKVKC+m7GTt^>y+>v>y+l|A^RtxRvRxk^MRVqQkvq^M^KD+||AxKG+E|A^>ZV>fieQg^MekVqKvq^M^qpV+xKG+E|A^MZVMfLDNh^ZZVZfieQg^Mr+ZxqG+E|A^RxkVqKvZR^Z^MVqJvk^KS+^MRxMm7eQg^qCkxRu^M^q^Rfx+vM$+4djztxRl+^R4dEMxKG+lI^qZVqfIsEk^Rr+ZxgG+lI^uZVufLxDZ^Ir+ZxAs+^7xk^Aqx7u^u^I^Afx+vuxk^gRVdKvR^R^gpV+xKs+^Ky+X|AVg8+vdR^RxkVKftzvu^Ry+T|AxgA^g47CQgxd8k^AR^gVdxAF^+^RxkVKfOv$I^RxkVKfIQsLboKVK>=PvgB$PvgvkVKx+HkR^KS+VKjkvM4OzvupE+u^dZ^dBd8Qg^Oek^Aqxdv7^Ap^+VRjkvM4gv$IVRjkvM4uQsLJVkvMBY+eK2+C+mOlXZ^Rz+2|AvMxk^R4ZEKvMokBY+r+xK^k^K4ONvu3^k^K4go$IfOCERxk^KBRrsL3oK^KU+sodvM9+SC$g4>NsLu^Mg=v2glkGEAUkVEA8kCQA$kVEAUk$QA8k2QA$k$QAUkDQA8klQAz+SPgv>Z^M4Z$E1vqek^RRVMx>vZp^+^KU+sEAvMS+^qD+^EAxqo+4jkeH+BkssL^>D+oQAV>2+=QAb$+4uHUIvqZ^>4FvTIvRr+u^Zv+f1=^d^gZVgfL8eh^RxkVZKvZxk^ZgBu|N7R^>^qVZJvk^Ku^KUD$gC+mACDI^RRxRmWYTI^Zy+Rvu$+4AY^dxgA^g4I$ehxu^k^dR^uskxdO4I9N7qxRvg^dp^+VqMvR4gXDuVgJvd^Ku^KzX$gC+mACDI^gRxgmWYTI^dy+RvA$+4AY^dxIA^I4I$ehxA^k^uR^AskxuO4I9N7qxgvu^up^+VZMvg4gXDuVdMvu47eQgVuP+vgR^d^uVZJvk^qp^qVK2+DQA^Ky+2QAVKRvMDN$gy+CQAVKE+DQA^qxk^KBK9Ug^qy+$QAVKdvM$N$gy+oQAVqMvR4dPsOVuQ+O^Ay+2QAV7jkvOR^7RVqxuvOp^+^ZfxZvMD+$QA^Kv+f1CDI^ZZVZf0YTI^Or+dxu=+4A=^dV7MvI4I8ehVAMvO4IluV7jkvAR^7xkVu>mI9N7RVZxOvAp^+^KdxK2c$g$+4A^UIxOA^O4W2TIxAc+u^7$+BZl^d^IZ^IBuUeh^1Z^1BuEu^Ixk^7qxI^k^7g47YN7u^O^A^7fx+vAZ^u4ZDDuvOp^A^KdxKHP$g$+4A^UIx7A^74W2TIxIc+u^1$+BZl^d^iZ^iBuUeh^tZ^tBuEu^ixk^1qxi^k^1g47YN7u^7^I^1fx+vAZ^u4ZDDuv1Z^I4OPEgvAek^1RVIxuvtp^+^AfxAvMD+=QA^Kz+$QAvMu^KXe8gz+HEAvMy+=QA^uskxKmZor1^uz+CQAvM7^K=e8gz+VEAvOZ^A4gcsOvtr+g^tz+$QAvhxk^tRVLKvO^1^tpV+xuF^u^KD+vQAxK=+4ACDIVuMvA4WYTIVtQ+I^Ly+VEAVhMvJ4L|zuVJMv34I8ehV1jkvhR^1xkVL>mI9N7RVuxtvhp^+^KdxKo=8g$+4A^UIxiA^i4W2TIxLc+u^Jy+PEAxtA^t4LXzuxhA^h4I$ehxt^k^JR^tskxJO4I9N7qxivh^Jp^+V1Mvt4gXDuVLJvh^Ku^K|l8gC+mACDI^LRxLmWYTI^hy+Rv3y+VEA^3Rx3mL|zu^aRxamI8eh^fskxJu^fxk^JZfL9N7R^LVhxJF^+^tZVtfOXDu^JZVJfieQg^tekV3Kv3^t^3pV+x1F^1^KD+UQAxKG+DQA^KuVKoE8gG+CQA^1y+UQAxt^k^14ReSZxtG+$QA^K7VKH|8gG+oQA^tZVtf7PsO^3r+ZxhG+DQA^pxkVhKvbR^t^3VhJvk^1p^1VK2+=QA^K$+4uHUIvtZ^14FvTIvfr+u^hz+sEAvaZ^34i9zuvbZ^p47eehv4Z^B47=uvaxk^hRV3jkvJg4IDN7Kvt^a^hpV+xKI^KXj8g$+BZ$DI^aZ^aBb9TI^hr+uVfE+oQA^BZ^BBIzzu^pZ^pBuUeh^BZ^BBuEu^pxk^fqxp^k^fg47YN7u^a^h^ffx+vaZ^34ZDDuvJp^h^KdxKEH8g$+4A^UIx3A^34W2TIxpc+u^by+PEAxBA^B4LXzuxFA^F4I$ehxBA^B4I9ux4^k^bR^4skxbO4I9N7qx3vb^bp^+VfMvp4gXDuVpMvb47eQgVBP+vpR^p^BVfJvk^hp^hVK2+EQA^Ky+lQAVKRvMoC2gy+CQAVKE+EQA^hxk^KBMv9A^hy+$QAVKdvMH^8gy+oQAVfMvp4dPsOVbQ+O^By+lQAVFjkv4R^FRVfxbv4p^+^hfxhvMD+$QA^Kr+xKG+$QA^bxkVKftzvu^by+9IxFA^F4IsDZxhc+g^By+^EAx4^k^BR^4qxFvJ^Bp^+VbjkvM4gv$IVbjkvM4uQsLpVkvMD+Cvd^MD+Hv2gmqSsLRVK>Hl2gTkENA8kQNAekGNAy+sPg^MRxMmg=E1^ZCkx>u^M^Z^>fx+vMD+NNA^Kr+x>=+4A=^dVZ1maVQZ^ZVKRvMCY2gpgVq>DY2gpR^qskx>mR887^qz+XNAvMZ^K4i9zuvRh4aPQZxqvgu^ZCU2gf>vMg2U2gpqxK^k^>4ReSZxKX+yNA^>S+V>jkvq4OzvupE+EI^qZ^qBu^DZ^Rr+gVZE+GNA^gxk^Zqxgu^q^R^Zfx+vMxk^>4Z^vIvMxk^>4dTsLWoK^>D+evdxK|+ET2g4qrsLKvRgozYgTkxNAekozA8kCzA8kezAY+CG2g4qSsLqxMX+VNA^MS+VKC+mAljA^MRxMmA9N1^qskxKmZPlu^qv+f1ljA^>ZV>fIvxk^RxkVKfAPQ+^Ry+PNAx>3^>^MxkVKfADHZ^MxkVKfACR4ZHHu2+$zA^Ky+CzAVMMv>4ZPluVqE+$zA^>Z^>BMeN+^KSk^qVKxMI^MSy2gy+^NAxM^k^M4Z^qfu9HkgGj2gz+HNAvMZ^K4Rcluvqy+CzA^KRxKmZPQ+^M9+x>v>^Ku^Kej2gE+$zA^Kxk^KBM$R4RVQdZyj2gG+CzA^MxkVMfACR4RvSO>Cx2gBVc2g$+BZl^d^KZ^KBZEjA^>Z^>BOsXg^KZ^KBqsjZ^MZ^MqxK2K^KgSs2gbv+Yk^M^+GkqxM2K4RP9Abv+VkD+ozAbz+HNAvMZ^K4RHqv>y+CzA^KRxKmZDHZ^q0xMvR^>u^>jP2gE+$zA^MZ^MBMXHZ^R|k^RBKelA^Mp^MV>Rvqo^2gy+CzAVMMv>4ZCRVK9kvM4R$SOVqJvR^>u^>x|YgE+$zA^KZ^KBMeTu^Ms+^M|wxKI^K=eYgy+^NAxRA^R4ZHQ+xMV+^MC9+^qfxqvM7^KyvYgz+HNAvRZ^q4Rcluvqs+^>G2+VMRv>XvYgy+CzAV>Mvq4ZPQ+VRS+vZGp^>pV>xMF^M^K7VKH8YgG+CzA^>ZV>fAPlu^Ms+VMlEkvRu^qs8Ygz+HNAv>Z^M4RcQ+vqs+^>lXkVMJv>^qp^qVKdvMl=Ygy+CzAV>Mvq4ZPluVqS+vRCQK^MuVMo=YgG+CzA^qZVqfAPQ+^>s+V>lH+vRp^q^MfxMvM7^KGDYgz+HNAvqZ^>4Rcluv>s+^MEH+V>RvqNDYgy+CzAVqMvR4ZPQ+VMS+v>CQK^RpVRx>F^>^K7VKCTYgG+CzA^qZVqfAPlu^Ms+VMH|+vqu^>VlYgz+HNAv>Z^M4RcQ+vRs+^qCUkVMJv>^>p^>VKdvME|Ygy+CzAVMMv>4ZPluVRS+vZCe+^>uV>2|YgG+CzA^qZVqfAPQ+^Ms+VMl3vRp^q^>fx>vMu^KH|YgU+VNAbS+^My+ezAxK^k^M4ONvuxKG+lI^>ZV>fLxDZ^qr+ZxZG+CzA^gxkVZKvdR^>^qVZJvk^Kxk^MB>Y$I^Kxk^MBRrsLboK^MU+CvdvR9+szYg4>NsLu^KgyX=glklyAUkNyA8kyyA$kNyAUkGyA8ksyA$kGyAUkVyA8kCrAr+xK=+4uX2ZVZP+vZrk^Z^RVqMvR4uroIVRMvZ41o=kVqQ+I^Zxk^Zqflk$vOxk^ZZf18MR^RVqxZF^+^MZVMfho=k^Zr+dxqo+4BckBK9Ug^dxk^qqxd^k^qg4hyDku^M^Z^qfx+vqxk^K4qCSOvqD+NyA^KD+CxYgmqSsLuVK>2v=gTk$rAGk8rAxKHk=rA^M8kUrAekErAD+DrA4>NsLX+lrARy+9rAxMG+2rA^KZVKf1N^A^>l+VMx>vMu^KGo=gz+2rAvM$+4AS=gxMA^M4ijlOxqc+g^Zy+8rAxRA^R41hxgc+g^uy+9rAxA^k^uR^AqxRvd^up^+VdE+lrA^gQ+^dVgxu^k^ZR^uqxMvR^Zp^+V>okvM^>^>D+UrAx>G+lrA^KpVKx>Dk^Kg^KU+=rAvMglHYgy+UrAxZ2K^ZD+yyAVKQ+O^Kxk^Kqfo+rZD+SyAVK2+HyAbD+syAqE+syA^KD+HyAVKE+VyA^Ky+HyAV>Mvq4AN^AVZ=+vM^Z^guVgD9=gG+HyA^Ky+cyAxdA^K^d^>U+syAvqy+yyA^>z+syAvRCK^>^qzkxKX+CrA^Ky+QyAx>A^>4RvSOxqA^q4O|Qgx>c+g^Zy+^yAxd^k^ZR^dqxqvq^Zp^+VKhug^>5VKx>vgu^ZED=gU+yyAby+syA^>fx>vM2k^>gV>2+VyA^>gG$=gr+xZG+GyA^KxkVZftzvu^Ky+9Ix>A^>4IsDZxgc+g^dy+QyAxu^k^dR^uqx>vd^dp^+VKjkvg4gv$IVKjkvg4uQsLpVkvgD+2vd^KD+=|=gmqSsLRVK>NP=gTkSrA8kjrAekVrAS+^MD+jrAxM6VQ=gy+GrAV>C+muX2Z^KRxKmaYj+^MSkxMvZjk^R^Kskx>mgCUO^KZCy=g6Y+vk^>V+yku^>y+GrAVKE+u^MZ^MBd8Qg^gek^RqxMvd^Rp^+V>jkvM4gCUOV>a9+B$G=g$+BgG9k^>Z^>Bg^9Z^qr+gVRN+vgxk^Z4Av8duxk^RRVZKvq^q^RpV+xKA^KR^qXkxqmOY8d^KU+SrAvMy+GrA^Kz+SrAvRxk^K4ZYVgvRgDs=gB2+^+vM^+GkRVKE+HrA^Ky+RVRMvZ47eQgVgP+vuR^R^gVdJvk^qxk^KB>|Vg^qBY+r+xq^k^q4ONvu3G+lI^ZZVZfLxDZ^gr+ZxuG+GrA^dxkVuKvuR^Z^gVuJvk^Kxk^qB>Y$I^Kxk^qBRrsLboK^qU+$vdvM9+2V=g4>NsLu^KgEXUglkVrAUk$SAS+^KU+CSAvMBsoUgy+vSAxK=+4ACDIV>Mvq4dT|+VgQ+O^R$+4tlHAvgxk^RRVZKvq^g^RpV+xqA^q4dUGtxZc+g^uxkVuKmRQGLRVqxZvAp^+^MskxKmRVQd^MZH$Ug6Y+vk^KV+yku^Ky+$SAVME+u^RZ^RBd8Qg^Zek^gqxRvg^gp^+VKjkv>4RVQdVKa9+B2UUgy+vSAxM=+4ACDIVZMvg4dT|+VuQ+O^d$+4L9eIvOxk^dRVAKvg^u^dpV+xgA^g4dUGtxdc+g^uxkVuKmRQGLRVgxdvAp^+^KskxMmR$SO^KZ=9Ug6Y+vk^KV+yku^Ky+$SAVKE+u^dZ^dBd8Qg^uek^AqxdvA^Ap^+VMjkvM4R$SOVMa9+S+^KxkVKftzvuby+9IxuA^u4IsDZxAc+g^Oy+vSAx7^k^OR^7qxuvO^Op^+VMjkvM4gv$IVMjkvM4uQsLpVkvMD+Dvd^KD+$|UgmqSsLRVM>ovDgTklSA8kTSAekySA8kNSAS+VKN+vR$+4AY^dxZA^Z4gCeuxMA^M47sUux>A^>4AjY+xM^k^q4RVcAxM=+4A=^dVMMv>4geeuV>Mvq47xUuVMMv>47SsLV>jkvR4R9HkV>jkvM4RGcuVqN+v>$+4AY^dx>A^>4ANY7xgA^g47sUux>A^>4AjY+xq^k^M4RVcAxq=+4A=^dV>Mvq4AzY7VqMvR47xUuVZMvg47SsLV>jkv>4R9HkV>jkvM4R9HkVM2+NSA^Kr+gVKjkvMR4ONHu2+ySA^KD+NSApE+ySA^MZ^MBgyQg^>r+gVqE+NSA^dZ^dBKHcu^RZ^RBKvsA^Zxk^qqxZu^M^>^qfx+vMfRgV>6vM^>^quVqlHUgX+NSA3y+|SAxqA^q4O|Qgx>c+g^Ry+TSAxZA^Z4RDHkxgA^g4RVcAxZ^k^RR^Zqxqvq^Rp^+VKhug^Z5VKxZvqu^>G^UgU+XSAbS+^Ky+QSAx>^k^K4ONvux>G+lI^>ZV>fLxDZ^Zr+ZxgG+XSA^dxkVgKvuR^>^ZVgJvk^Rxk^KB>Y$I^Rxk^KBRrsLboK^KU+=vdv>9+SvDg4>NsLu^KgVEDglkSSAUkHSA8kVSA$kHSAUkojA8k$jA$kojAUk=jAy+sPgV>Mvq4g$PkVMP+vRR^>^MVqJvk^KD+HSAVKQ+L^Kxk^Kqf1jNOxk^KZfFraxk^KdfIr9+xk^KAf4zNhD+VSAVK2+2jA4h297U+CjAuy+VSA^RU+ojAvZy+$jA^Mz+ojAvMZ^K4uX^AvRl+^M^qVKRvMl|Dgy+2jAVKE+=jA^ZZ^KVZxMX+=jA^MBrTDgE+CjA^KZ^KBAc|u^Zr+gVgE+ljA^qxk^gqxqu^K^Z^gfx+v>D+CjA^Mz+HSAv>u^MNTDgz+$jAvRD+ojA^qZ=|DgODXDgBY+okxMvkGkR^MZDXDg6Y+y+$jAVRJvZ^M2k^RZxRX+$jA^Rgj=DgN+v>xk^M4A|vuWy+ojA^qskxMmgv$I^qskxMmuQsLbeKxMX+Xvd^K9+rQDgfdSsLR^KZV8lgQkNjA8kyjA$kNjAUkGjA9+E29gBkssLu^KD+jjAxKs+^Mxk^MBgjvubxk^MB>Y$I4qSsLskxMmuQsLbU+EjAv>S+^MxkVMfO8Th4qrsLjkv>4grChBkssLxk^M4ZzG+mqSsLxkVMfAUPO4qrsLjkv>4gUNdBkssLxk^M4Z9^OmqSsLD+rjAxM6XPDgy+SjAVKC+mACDI^MRxMm6H2+^Zy+>vu$+47TlOxRA^R4LyPZxgc+g^IxkVIKmAoyZRVRxgv1p^+^qskxdu^qR^MVZxdF^+^>xkVKfO8Th^>y+rjAxKA^K4g$ThxZf4AxEgVZxKI^KDPDgy+zjAxK^k^K4ONvuiOEVDgBY+okxKvkGkR^Kz+EjAvqxk^>4dTsLbBY+y+jjAxq=+47XlOVZMvg4LrPZVgMvd4drjdVZQ+O^d$+4ODlOvAZ^u4iQPZvIxk^dRV7Kvd^Z^dpV+x>Y+^q^>4ZQChmAoyZ^Kz+yjAvq$+4BjQOxqA^q4IUNhxdA^d4iESdxqA^q4dyjdxdc+g^u$+BaHQO^AZ^ABuXNh^OZ^OB7rSd^7xk^uqx7u^q^d^ufx+vgfRgVdnvq^Z4gSG+xdvMgNs9gGk^jAxKHkoGA^M8kvGAekDGA8k=GA8kUGAaEE9gZ^k4uX^Av>D+$GA^Mv+fIQ9g^Mr+ZxqG+$GA^RU+VRRvdu^gVU9gz+CGAvqY+^>uVZJvg^Rg$D9gfKvZxk^qRVRQkv>^q^KD+8GAxKX+=GAuy+YGAxKG+$GA^Ml+VKxMvqu^>oX9gz+oGAvMy+=GA^>2+x>I^My+=GAVZMvK^Z^>xkVKxMvqy+=GA^>fx>vM2k^>gV>2+lGA^>gC99gz+HjAvqZ^>4dDGtv>r+u^ZfY+vRxk^ZRVqE+DGA^Rxk^ZZxRu^>^M^Zfx+vMoK^Kg9s9ga9+vk^M^+jkKv>y+R^MRxMmuroI^qRxqmOEQg^My+>vAxk^uRBON|ZR^q^MVuJvk^KD+DGAVKE+XGA^MfRZxRsk^M^R^KdxKsj9gy+yjA^KskxKmOzvu3z+NjAvMy+oGA^Rz+Kv>Z^M4dQoIvdZ^g4u$yZv>r+u^uskxuuRy+DGAVd^kvu=q^AxkVu>vOR^g^MVuJvk^Zxk^KVRxZOls9gy+SjAVKE+2GA^My+RVdMvu4uroIVZMvg4A=yZVdQ+I^uxk^uqK^k^ugyIqxZvu^up^+VRjkvM^M^RB2+SkG+GjA^K9+Ux9gfdSsLR^ZZlH9g=+4I8ehVKMvM4IluV>Mvq4pGQ7VKVkvMCK^K^ZBMTPO^>y+GjAV>Y+sP9g4qSsLqxdOHV9g$+47eehv>Z^M47=uvMZ^K47esLv>oK^MCKV>xdmg|^O^Kz+yjAvq9+oClg4>NsLu^Zgselgv+fbU2k^KZVKfLDNh^>ZV>fJT|R^qekVRKvq^q^RpV+xM2K^MCK^>VZfOUNd^Ky+zjAx>A^>4uEsLxKI^KNvlgy+zjAxK^k^K4ONvu3G+yjA^Ky+9Ix>A^>4IsDZxuc+g^dy+rjAxA^k^dR^Aqx>vA^dp^+VZjkvM4gv$IVZE+GjA^KoK^KU+lvdvM9+s2lg4>NsLu^MglYTglkCcAUk2cA8k=cA$k2cAUklcA8kXcACkxMX+2cA^My+nxK=+4t9xIVRMvZ418hVZP+vdR^R^ZVgJvk^qZ^qBRsEg^Zr+uVgjkvdRRxkVg>6R^q^ZVgJvk^>=+^KV>xMX+=cA^MBPrlgPk2Glgy+=cA^KRxKmR$SO^MCkx>u^K^M^>fx+vAy+=cA^>Rx>mRP9A^ZCkxgu^>^Z^gfx+v>D+DcA^MRxMmdsPd^ZSkxZv>u^Msrlgz+2cAv>Z^M4dx1vgD+lcA^Zz+ocAv>Z^M4gGygvdr+g^dy+uv7y+lcA^7Rx7mIscZ^IskxOu^Iy+lcAV7MvI4JjEAVIjkv7g^Iy+9cAxIA^I4dXHux7^k^Ou^7z+=cAvIZ^74O8Ukv1xk^OOVIMv74dDGtVIQ+O^7xk^7qfusTuR^OVIx7F^+^AxkVdKvOR^M^gVdJvk^ZgyllgZVjlg6oGlgvk^ZV+yku^Zy+=cAVgMvd4RTy1VdQ+O^Ay+RV7jkvOR^7RVgxdvOp^+^Zbv+8KY+y+=cAVZMvg4RNDtVAP+vIR^Z^AV7Jvk^dokB2+N+vuy+2cA^7Rx7mdDGt^Iy+>vtxk^1RBKrGLR^7^IV1Jvk^Axk^dBK|Hk^A$+41YxIv1Z^I4Iehvtek^tRVIx1vip^+^ARxAu^1xk^dBMlSZ^1$+4gD=IvOZ^A4Z=xOviek^LRVAxtvhp^+^1skxdmRTy1^1v+f7TM^tZVtfIzeu^ir+ZxL=+4ueVkVhQ+O^axk^aqfdSsLrk^hVaxJA^J4IVXuxh^k^LR^hqxtvL^Lp^+V1jkvu4ZQC1V1C+mBX^d^LD+lvTgmqSsLRVi>SvTgsk=+^LVix1^k^d4g$vdx1X+XcA^dS+V1jkvt4OzvupE+EI^LZ^LBu^DZ^ir+gVhE+NcA^3xk^hqx3u^L^i^hfx+vuxk^14Z^vIvuxk^14dTsLWoK^1D+QvdxM|+$=Tg4qrsLKvMgCcTgTkccAekCsABsrTgS+Vq2+CsA^qy+HcAVKC+mA=^d^MLffxN+^M^>skxKmR$SO^>z+GcAvMZ^K4qCSOv>u^MCTTgz+GcAv>$+4AY^dxqA^q4hsN+x>A^>47CQgxq8k^RR^>VqxRF^+^KxkVMfAC=k^Ky+xcAxK=+4A=^dVM1mJx9k^MVqjkvM4RX8dVqE+CsA^KZ^KBKN8d^Ru^R8QTgE+CsA^K$+4u$^dvZZ^R4hj9kvRZ^q4OPEgvZek^ZRVqxRvgp^+^MskxKmZsUA^Mr+xMG+HcA^ZZVZfu$SO^g7VgSNTgG+HcA^dZVdfuX8d^KpVKxg^k^M4ONvuxgG+lI^RZVRfLxDZ^gr+ZxZG+HcA^dxkVZKvuR^R^gVZJvk^Kxk^MB>Y$I^Kxk^MBRrsLboK^MZSGTg6Y+vk^KV+yku^KS+^KskxKmOzvubz+KvgZ^Z4OPEgvdek^uRVZxgvAp^+^MskxKmgv$I^MskxKmuQsL3eKxK6Y+skD+zvdxK|+GcTg4qrsLKvMgXyXgTkYsAekXsA8klsA8kTsAekysA8kNsA8kzsAekssA8kGsAr+AxK^k^KR4JTCZ^k^Kg4L=oO^k^Ku4I^vkX+DsA^KD+9sA3s+^Kek^MskxKmgoxL^MCkxM^k^K4gQJxMX+XsA^Ky+cPgxMA^M4gYE1x>8k^qR^MV>xqF^+^KZVKfa|zu^>D+|sAx>X+NsARy+UsAx>X+ysA^>y+QsAx>G+ysA^KZVKf1N^A^dl+V>xdvMu^Ks=Xgz+EsAvMy+NsA^RRxKvZ^qD+SsAVqE+ssA^>$+4u$^dvMT+^>^KVqRvRo8Xgy+XsAV>Mvq4goxLVdMvu4dHygVqQ+O^Ry+SsAV>jkvZR^>RVdxqvZp^+^Kz+NsAvMy+EsA^Zl+xKvg^qu^qxYXgE+NsA^KZ^KB>SJ^qZ^qBqCrg^Kr+gVRE+ssA^Zxk^RqxZu^q^K^Rfx+vqy+NsA^KfxKvg2k^KgVK2+SsA^Kg$CXgr+xKX+GsA^Ky+TsAx>A^>4gQJxKA^K4AQ^Ax>T+^>g^KOxKClXgy+XsA^RRxRmgoxL^gRxgmAN^A^>=+x>O^Rp^RVKRvM=lXgD+lsAJE+HsA^Ky+XsAV>Mvq4goxLVgMvd4dDGtV>Q+O^Axk^AqfuQGLR^gV>xAF^+^RxkVKfu887^Ry+jsAxKG+XsA^>ZV>fONJ^ZZVZf7DGt^>r+Zxu^k^uR4qTGLu^Z^>^ufx+vZxk^K4qVrZvZS+^Ky+9sAx>^k^K4ONvux>G+lI^RZVRfLxDZ^ur+ZxAG+GsA^IxkVAKv1R^R^uVAJvk^>xk^KB>Y$I^>xk^KBRrsLboK^KU+NvdvM9+2rXg4>NsLu^KgV$|glkoxAUk=xA8kDxA$k=xAUkXxA9+DjXgBkssLR^>D+YxAx>G+=xA^MiVMxKX+DxA^KD+9xA3O=VXg8kNxA$kExA6lPXgy+sPgVMMv>4gYytVRP+vqR^M^RV>Jvk^KD+NxAVKE+SxA^Ku^KYPXgE+SxA^>Z^>B7rT7^qr+gVRjkvZR46EOKvq^q^RpV+xKX+yxA^Ky+QxAxKA^K4iESdxRc+g^gy+zxAxZA^Z4FUPkxd^k^gR^dqxKvZ^gp^+VqVkvRgHPXgB2+^+vZ^+GkRVRa9+oK4OjxOC+mIjK^MU+DxAv>y+DxA^MRxMmOEQg^qy+>vqxk^>RBOe27R^M^qV>Jvk^KfRZx>sk^K^>^RdxRDe|gD+XxA$Kr+x>G+lxA^qxkV>ftzvu^qy+9IxqA^q4IsDZxZc+g^Ry+UxAxg^k^RR^gqxqvg^Rp^+VKjkvq4gv$IVKE+NxA^Rxk^>BRNrL^Rxk^>BRrsLboK^>U+yvdvM9+S8|g4>NsLu^qgN=EglksxAUkCHA8koHA$kCHAUk2HA8k=HA$k2HAUklHABl8Egr+xKs+^>xk^KBKSDt^>xk^KBK^DARD+CHAVKC+mA|9I^MRxMmIDNh^>Rx>mdPsO^MRxMmdrjd^Ry+>vRw4v+^jRfdSsL^>xkVqKvqR^M^RVqJvk^KD+oHAVKC+mACDI^>Rx>m6H2+^Ry+>vR$+4AY^dxZ^k^qR^Zqx>vZ^qp^+VK2+=HA^Ky+$HAVKtvM^qZ^qBZS^A^K2+^KqxRi^R=oEgpqxRA^q^R^ZU+oHAvgy+$HA^gz+oHAvAZ^g^uVd2+lHA^dy+=HAVdMvu4u^1Vg2+XHA^gy+DHAVgCkvd^ds+^dBdTXu^Au^AzG|gE+2HA^uy+DHAVAMvO47eQgVtP+vIR^A^tV7Jvk^d=+^uVdxgxk^g^duVdlG|gG+CHA^gZVgfuNDt^dy+8HAxgG+DHA^OZVOfieQg^IekV1Kv7^I^1pV+x7A^74AYyZx1c+u^IxkVIKuxk^IgzIKvI^1^IpV+xu^k^d^g^uz+HxAvuZ^d4qjDAvAp^u^g8kxuO^uy+CHAVdjkvu4RxDAVu>SeEgy+=HA^gRxgmgXDu^dU+=HAvuy+lHA^gvkxgvus+^d4O8Xuvdu^gNeEgz+VxAvdy+lHA^IRxIm7eQg^1Ckxtu^I^1^tfx+vu=+^g^dVuzkvA^gu^gTeEgE+$HA^gZ^gBKSDt^dy+2HAVuE+EHA^gZ^gBd8Qg^tek^iqxgvi^ip^+V1Mvt4A=yZVJQ+I^ixk^iqK^k^igyIqx1v3^ip^+VLjkvu^u^Ly+^xAxdA^d4RsDAxuF^u^d2kVu>vAy+CHA^tskxtmRxDA^uZXeEgDk^Rg^R4xRvM^d7^dTX|gN+vMxk^K4A|vuWy+lI^qRxqmIxDZ^Zy+>vAy+CHA^dskxuu^dR^qVZxuF^+^RxkVKfOv$I^RxkVKfIQsLboKVK>E=EgBY+vkVKx+HkR^KS+VZjkvg4OzvupE+u^RZ^RBd8Qg^dek^uqxRvu^up^+VKjkvg4gv$IVKjkvg4uQsLJVkvgBY+skU+SvdvR9+DUEg4>NsLu^MgXHEglkGHAUkVHAS+^Kz+=IvZZ^R47jDZv>r+g^>v+f1^l+^ZZVZfieQg^dekVuKvg^d^upV+xg^k^>R^gqxRv>^>p^+VqjkvM4R887VqC+mI8eh^MRxMmIVzt^qRxqmdS2Z^gvkxgv>Z^MRV>jkvM4Rl$7V>C+mI8eh^MRxMmIVzt^>Rx>m7Hsu^gvkxgv>Z^MRV>jkvM4RGcuV>C+mACDI^>Rx>mpQjt^qy+>vd$+4I$ehxuA^u4IPztxOA^O4I9uxd^k^gR^dqx>vR^gp^+VAMvO4dDGtVqQ+O^gxk^gqfuQGLR^AVqxgF^+^MxkVKfu9Hk^M$+BZ$DI^qZ^qBqQ|+^Or+gVdC+mI8eh^uRxumIVzt^1Rx1mIlu^7skxdu^7R^qVOxdF^+^gZVgf7DGt^7r+Zxd^k^dR4qTGLu^g^7^dfx+v>xk^K4qclLv>D+VHA^Kr+xK^k^K4ONvu3G+lI^MZVMfLxDZ^Or+ZxuG+VHA^7xkVuKvIR^M^OVuJvk^dxk^KB>Y$I^dxk^KBRrsLboK^KU+Gvdv>9+2PEg4>NsLu^Kg=UQglkVHAUk$PA8k2PA$k$PA|+2^Eg4qrsLKv>D+$PA^Mz+CPAv>i^M^KU+oPAvMD+=PAbZy8QgUklPAfRZxKX+lPA^KBUoQgC+m7GTt^RRxRmIDNh^MRxMm7eQg^>Rx>mdYNt^My+>vZxk^RRZKvq^M^RpV+xKOD8QgBY+okxKvkGkR^Kz+KvRZ^q4dQoIvZZ^R4djYkv>r+g^gskxgu4RDTdqxRv>^gp^+VKMvM4AN^AVM2+EPA^MBY+z+=PAvMoK^Ky+8PAxMV+^Mp^RdxRS2QgD+=PA3r+xKG+=PA^MxkVKftzvu^My+8PAxMA^M47CQgxq8k^RR^MVqxRF^+^>xkVKfOv$I^>xkVKfIQsLboKVK2+o$d^K9+CDQgBkssLR^KgY9NgUkGPA8kSPA8kjPAekVPA8kHPA8kPPAek$VA8koVA8kvVAa2=NgS+^KekVMjkvM4RNDtVMjkvM4RxDAq2+sPA^K$+4u99Iv>Z^M472NhvqZ^>4gcsOv>Z^M4gQjdvqr+g^q~fY+CGR4qrsLxR^k^qR^RqxMvq^qp^+VK2+HPA^K$+4uHUIvMZ^K4WG2+vZr+g^qv+f1=^d^dxkVqKvuR^K^RVqJvk^>D+sPAV>E+VPA^RJ^RVqMvR4AN^AVZo+vgR^R7VRs$NgFR^RZVqxRvqD+HPA^>z+SPAvuy+HPA^gRxdvd^uD+VPAVuE+oVA^dZ^dBdeC1^gD+CVAVgE+oVA^gZ^gBA88I^dD+oVAVdE+oVA^gZ^gB7XyO^dD+$VAVdE+$VA^djk^dVgRvdEjQgy+oVAVdzkvu^up^uVgRvd=GQgy+$VAVAzkvO^dp^dVgRvd=$Ngy+SPAVdMvu4RNDtVuMvA4dHygVdQ+O^AZ4>NsLmAECA^1y+RvLy+HPA^Lskxiu^Lxk^iZfusTuR4>NsLvt^ip^+VIMv14AECAViQ+O^hy+CVAV1RvtHHQgpgVL>2PQgpR^Lskxhu^LR^IVixhF^+^tZVtf1ECA^ir+ZxLG+oVA^huVhHVQgFg^1g8^QgJu^1xk^Lqx1u^t^i^Lfx+vIZ^74ulCAvLr+g^1z+CVAvhu^L$eNgf>v3gDeNgpqxJ^k^1R^Jqx7vL^1p^+VOjkvOR^ORVuxdvOp^+^gz+NPAvdZ^g4qjDAvup^d^O8kxdO^dy+SPAVgjkvd4RxDAVdokvZg^RFVRxZvO7^AHNQgr+x>^k^>4ONvu3G+lI^RZVRfLxDZ^Zr+ZxdG+SPA^gxkVdKvdR^R^ZVdJvk^qxk^>B>Y$I^qxk^>BRrsLboK^>ZVDNg6Y+vk^>V+yku^>S+^ZskxZmOzvubz+KvRZ^q4OPEgvOek^gRVqxAvdp^+^>skxZmgv$I^>skxZmuQsL3eKxZ6Y+skD+^vdxK|+ClNg4qrsLKvMgEYzgTkjVAekVVA8kHVA9+PlNgfdSsLg^MZ$CzgQkC^AGko^AVKek=^A8k2^A8kY^AekX^A8kl^AS+VK2+=^A^KD+2^AqN+vMxk^K4qsQdmATvkxkVKfuxDA4Oo9hjkvM4RNDtBgzxdxk^K4qGjgmAchxkVKfu$SO47GrOjkvM4ZUHkBI=x+xk^K4RQctmtXNdxkVKfAert4telZjkvM4Z8YIB7xN1xk^K4RHzZmic2AxkVKfAcf4tHC+jkvM4g2xIBAyruxk^K4ZYsOmtEIxkVKfAGj+4I=S7jkvM4ZQ=hB7No7D+=^A^Kz+$^AvMJ^K^MRxMmAN^A^R8+xRu^>7^>PVNgJu^>Z^MV>xKX+D^A^Ky+e^AxqG+=^A^gy+U^AxIA^g^I^ARxqvO^ZD+l^AVZE+E^A^Z$k^ZVgS+vd47UXuVqRvR=VNgy+$^AVqE+X^A^Zy+l^AVuMvA47eQgVOP+vOR^u^OVAJvk^dZ^dBRsEg^Ar+uVOjkv7RRxkVO>GIR^d^AVOJvk^gxk^qVZxgG+2^A^gpVgxZDk^gg^gU+o^Avd2k^>gV>pvq^R^q7VqXjNgG+2^A^KjkVKxMI^MV^Ng$+BuxK^KoK^Kz+C^AvMoK^KD+cVAxMs+^Ky+sVAV>C+mA=^d^qY+x>vR^Mxk^KBKU87^My+sVAVRC+m7XlO^MY+xRv>^qxk^KBKyou^qy+sVAVZC+m7XlO^>Rx>mdxm^RY+xZvZ^Mxk^KBKCGg^MD+HVAVKN+vMxk^K4A|vuWy+lI^RRxRmIxDZ^>y+>vRy+HVA^Zskxqu^ZR^RV>xqF^+^MxkVKfOv$I^MxkVKfIQsLboKVK2+2$d^K9+==zgBkssLR^KgQTygUks^A8kG^A8kc^AekCCO8kV^A8k^^Aek2CO8k$CO8k8COeklCO8kDCO8k9COekNCO8kECO8kQCOekGCOek^KD+j^AxKX+s^Abr+mxK^k^KR4W9Qh^k^Kg4aTzI^k^Ku4FVjO^k^KO4pvYA^k^KI4<$NI^k^Kt4frY1^k^KL4bcVA^k^KJ41==O^k^Ka4hS8k^k^Kp472U7^k^KB4h^oZ^k^KF4Oe|R^k^K647=ChX+H^A^K$+BZz9I^>Z^>BuXNh^MZ^MBqexO^KD+V^AVKQ+I^Ky+V^AV>Mvq4drjdVqQ+O^gw4dyTOmqSsL^Rskxgu^RR^>VqxgF^+^MxkVKKv>y+V^A^qRxqmdrjd^My+>vuw4L29kfdSsL^RxkVdKvZR^q^MVdJvk^gxk^KZxgX+CCO^K$+BZ$DI^gZ^gBqQ|+^Mr+gVRC+mA=^d^dskxRu^dR^gVMxRF^+^KD+eCOxK=+4uQ9gVMMv>4IDNhVRMvZ478C+VMMv>4drjdVRQ+O^Zy+oCOVujkvgR^uRVMxRvgp^+^KU+CCOvMD+2CORz+G^AvuD+=CO^dz+oCOvMy+=CO^ZRxZmAN^A^R9+xKvZ^Zu^ZxCygE+lCO^Ry+2COVKMvZ^K^ZD+UCOxZG+$CO^Ry+UCOxZl+^R^Z^KdxKoCygD+s^A3z+y^AvMZ^K4gGygvgr+g^Az+2COvuxk^ARVdKvM^Z^ApV+xRG+2CO^ZpVZxRDk^Zg^ZU+oCOvggDxzgD+9COKG+oCO^RD+TCOxRG+lCO^Ry+TCOxZA^Z4AQ^AxdE+^R^d^ZdxZNDygy+XCO^Rz+=COvuZ^R^dVZ2+yCO^Zy+CCOVRtvZ^ZZ^ZBZS^A^d2+^dqxui^uEUygpqxuA^Z^u^RU+XCOvZy+CCO^Az+XCOvIZ^A^7VO2+GCO^Oy+yCOV7E+yCO^A=+^7VAxOI^Os=ygD+c^AiG+G^A^OZVOf7Hyg^7r+ZxIG+ECO^1xkVIKvtR^O^7VIJvk^AgEUyg8kxuO^uF^uVdxAi^As$ygy+9COxZF^Z^R2kVZ>vgD+lCO^ZZDeygs+^Ry+s^AVdjkvZ4OzvuVdE+H^A^dZ^dBqXGt^ur+gVAjkvOR4REGLKvu^u^ApV+xZ^k^R4go$IxZ^k^R4uEsL32K^RD+$$dVKY+XXyg4qSsLqxKOHvrgTkoeO$kCeOUk2eOD+$eOpN+v>xk^M4qCSOmqSsLxkVMfuYUg4qrsL2+DeO^M$+4u$^dvMZ^K4uXouv>$k^M^Kc+xKmAHzu^MdxMyjygBsyygy+8eOxK=+4A=^dV>Mvq4ANouVqMvR438G7VRMvZ47eQgVZMvg47eQgV>P+vRR^Z^>VqJvk^Mxk^KBK=SO^Mgljygbv+Yk^M^+GkqxMG+2eO^Ky+qx>A^>47CQgxq8k^RR^>VqxRF^+^MzkBq2VA^M^uxkVKfu$SO^uB2+C+mA=^d^KRxKmi8CK^MvkxMvMs+^K4O8Xuv>u^MoVygb=xygG+2eO^K$+BZl^d^RZ^RB7UCK^qZ^qBd8Qg^Rek^gqxqvZ^gp^+VMjkvM4RYUgVM>oVygBY+vkVMx+HkR^My+8eOxKG+R^dZVdfieQg^MekVRKvu^M^RpV+xgjk4doVAVgxR^k^K4R2UgxR6Y+y+2eOVKMvM4RYUgVRS+vZ4mPYgVKRvMl^ygD+$eOJE+DeO^MZ^MBK=SO^Ks+^KBV+GlA^Ru^RrCrg2+=eO3S+^Kz+CeOv>xk^K4A|vuv>y+lI^RRxRmIxDZ^gy+>vOy+2eO^uskxAu^uR^RVgxAF^+^MxkVKfOv$I^MxkVKfIQsLboKVK2+D$d^K9+y$rgBkssLR^Kgv9jgUkseO8kGeO8kceOekCoO8kVeO8k^eOek2oO8k$oO8k8oOekloO8kDoOS+VK2+HeO^K$+4ZDHdvMr+g^qCkxZA^Z4A|CAxRc+I^gy+dxd=+4ACDIV7MvI4dT|+VOQ+O^1$+47eehv1xk^1RVIKvI^O^1pV+xAl+^d^A^uskxgu^uy+uVOC+mACDI^ARxAmdT|+^Iy+>vh$+4I$ehxiA^i4I9ux1^k^LR^1qxAv1^Lp^+Vd$+v7^d^uxkVg>vAy+u^uv+f1CDI^IZVIfFQjt^Or+Zxt=+4I8ehVijkviR^iRVIxOvip^+^1Y+xuvt^dxk^gdxdG+u^d$+BZ$DI^tZ^tBJrjt^1r+gViC+mI8eh^LRxLmIlu^hskxiu^hR^tV1xiF^+^O=+VdxOvAxk^gOVuKvg^R^gpV+x>^k^qR^>ykxKvR^MD+seOVMC+mACDI^MRxMmWYTI^qRxqmdrjd^>y+Rvuxk^dR2+C+mI8eh^RskxdO^RR^qV>xdF^+^KD+xeOxK=+4uX2ZVMMv>47eQgVRP+vdR^M^RVgJvk^>Z^>Bgl81^Rr+uVg<muX2Z4qvUgvAxk^gRVujkvdg47CQgKvq^R^gpV+xKX+VeO^KekVK2+$oO^Ky+C+VgE+VeO^R=+^gVRxKX+ooO^KBUojgPkN$jgy+ooO^RRxRmR$SO^gCkxdu^R^g^dfx+vMy+ooO^dRxdmRP9A^uCkx1u^d^u^1fx+vdD+$oO^gRxgmdsPd^uSkxuvdu^g2ojgz+CoOvdZ^g4dx1vAD+2oO^uboxSg=+4I8ehVOE+DoO^uZ^OVuxgxk^g^uuVuXCSgOoojgy+CoOVOMv74dHygVuQ+O^1y+2oOVijkvtR^iRVOxuvtp^+^gv+fL8eh^uy+8oOxLA^u^L^1Rx1m7eQg^iRxim7eQg^uCkxLu^i^u^Lfx+vdD+=oO^gz+$oOvdy+VeO^u0xgvA^1u^1QDSgE+DoO^gy+GeOVuU+vd^u^LjkVLxgI^gCYSgy+jeOxgG+2oO^1ekVujkvd^1^uy+jeOxgG+2oO^uZVgxuvhZ^L4gGygvAr+g^gRfAYz14A|CAxJc+g^3y+YoOxa^k^3R^aqfAYz1^J^3fx+vJxk^gRVhKvh^u^gpV+x1G+HeO^1y+8oOxgl+^1^g^uU+2oOvAy+DoO^gdxgylSgy+DoO^1Rx1mgXDu^ufxuvdu^goxSgz+ooOvAy+GeO^gl+xuvd^1jk^1VgRvdXXSgy+GeOVgE+DoO^1ek^uskxgvt^uy+GeOVhE+DoO^1Z^hV1xuA^u4dxygxhc+g^JZBMN8h4AECAV3Q+O^ay+DoOVpMvb4gXDuVBMv447eQgVpP+vFR^B^pV4Jvk^fxk^aqxfu4ZX8hV3xaF^+^1xkVJKvtR^u^hVJJvk^gy+DoOV1Mvt4gXDuVhMvJ47eQgVJMv347eQgV1P+vJR^J^1VhJvk^gy+VeOV36vd^3^1uV1VsSgG+GeO^ay+8oOx1A^a^1^hRxhmdHyg^1y+>vpZ4de^kf1ECA^pr+ZxaG+DoO^4ZV4fI^1^FZVFfieQg^4ZV4fieQg^FekVWKvF^F^WpV+xb^k^aR^bqf7o^k^p^afx+vaxk^fRV3KvJ^1^fpV+xgOVejgBDojgokxgvkGkR^gz+ooOvdy+GeO^fl+xgvp^ajk^aVgRvdXPSgy+GeOVgE+DoO^1ek^3skxgvt^3y+GeOV1E+DoO^aZ^1Vax3A^34dxygxac+g^1ZBM$VA4AECAVfQ+O^py+RVFMvW47eQgVWP+v~R^F^WV5Jvk^6xk^pqx6u4ZCVAVfxpF^+^bxkV1KvBR^3^aV1Jvk^gBDojgZ=HrgOX$jgBX$jgokxgvkGkR^gz+VeOvtZ^14qUy1vpr+g^az+Kvbxk^aRVpKvt^f^apV+xg6Y+eKY+z+VeOvpZ^f4qXDtvbek^aRVfxpvfp^+^geka9+y+GeO^gz+HeOvfZ^a4g2Gtv6r+g^mskxmu4RQGLqxav6^mp^+Vbjkvd4ZoQLVbN+vdxk^g4A|vuWy+lI^bRxbmIxDZ^Wy+>vmy+GeO^mskx6u^mR^bVWx6F^+^pxkVgfOv$I^pxkVgfIQsLboKVg2+l$d^K9+H9jgBkssLR^KgTyjgUk=vO8k2vOS+VKC+m7XlO^MRxMmJxl7^>Rx>mtcVZ^MskxKmZVCh^Mv+fiXlO^MZVMfpxl7^RZVRf3oTu^MxkVKfAUF^M$+BZl^d^>Z^>BA$YZ^Mxk^KBMe$+^M$+4u$^dvqZ^>41QHZv>xk^K4Rv$Iv>D+2vO^Kr+xK^k^K4ONvu3G+lI^qZVqfLxDZ^>r+ZxgG+2vO^RxkVgKvZR^q^>VgJvk^Mxk^KB>Y$I^Mxk^KBRrsLboK^KU+2$dvM9+2rjg4>NsLu^MgH$Gglk2vOUklvOS+^KU+=vOvM$+4AY^dxKf4OzzdVKxMI^M2jjgy+9vOxK^k^K4R2Ug>=+4A=^dVK1mJQCi^KVMRv>Gsjgy+lvOVKE+EI^>Z^>Bu^DZ^Zr+gVMC+mA=^d^RRxRmJQCi^gskxMu^gR^>VZxMF^+^qxkVKfuEou^q$+BZl^d^Kh4Fev+vM^Mu^MUVjgE+EvO^Ky+lIVqMvR4IxDZVRQ+O^Z$+4u$^dvuZ^d4Fev+vdxk^ZRVgKvR^R^ZpV+xM^k^K4ReSZxM=+4A=^dVK1mhUG+^KVMRv>HeGgy+lvOVKE+EI^RZ^RBu^DZ^Zr+gVgC+mA=^d^dRxdmhUG+^Askxgu^AR^RVZxgF^+^MxkVKful$7^MS+VKjkvM4OzvupE+EI^ZZ^ZBu^DZ^Mr+gVdE+EvO^uxk^dqxuu^Z^M^dfx+vdxk^K4Z^vIvdxk^K4dTsLWoK^KD+9$dxM|+y8Gg4qrsLKvZgEGGgTkjvOekVvO8kHvOS+VKC+m7XlO^MRxMmgCoO^>Rx>mAN^A^MskxKmZsEh^Mv+fiXlO^qZVqfbEvg^>r+ZxR^k^RR4qSN+u^q^>^Rfx+v>Z^M4uX^Avqxk^K4R8xIvq$+47TlOxMA^M41H=gx>A^>4AQ^AxM^k^K4ZUlOxM=+47XlOVMMv>4Jxl7V>Mvq4IUJVMMv>4AN^AV>jkvM4ZUstV>C+m7XlO^MRxMmJxl7^>Rx>mIGou^MRxMmAN^A^>skxKmZVeZ^>U+SvOvM$+4AY^dxMA^M4tDxIx>A^>43HyZxRc+g^ZxkVZKm1UN+RV>xRvgp^+^KRxKu^MD+HvOVME+C$O^Mu^M|rGgE+VvO^Ky+HvOVRMvZ4J2XhVMjkvM4Z^TIVME+VvO^Ky+HvOVMMv>4J$rdVRjkvM4ZjD+VRE+VvO^Ry+HvOVKMvM4ie^uVMjkvZ4ZNjAVMN+vMxk^K4A|vuWy+lI^ZRxZmIxDZ^gy+>vuy+svO^Askxdu^AR^ZVgxdF^+^RxkVKfOv$I^RxkVKfIQsLboKVK2+N$d^R9+=cGgBkssLR^KgcjcgUk2$O8k$$O9+YsGgfdSsLg^KU+C$OvMgXQcgGkY$OxKUkD$O8kl$O$kD$OUkE$O8kN$O$kE$OG+=$O^KZVKft^|I^MZVMfLDNh^KZVKf3sTh^MD+U$OxMG+D$O^MZVMfieQg^>ekVqKv>^>^qpV+xKX+l$O^KS+VKE+X$O^>Z^>BqzHu^Rxk^KBKelA^Ry+l$OV>Mvq4AN^AVqjkvM4RNDtVqE+E$O^qZ^qBRsEg^gr+uVRjkvZRRxkVR>HiR^q^gVRJvk^>xk^KBK=SO^>y+D$OVRMvZ4AN^AV>jkvM4RVQdV>2+N$O^KBXXcgz+$$OvMZ^K4ODlOvZZ^R4iQPZvMr+g^>skx>u4R9HkqxRvM^>p^+VZ2+y$O^Zy+=$OVKMvM4OlXZVZMvg4gyKV>2+S$O^>D+y$OBkssLy+=$O^KRxKmOlXZ^ZD+HYcgmqSsLgVK>G=cgGkH$O^Kz+G$OvMD+y$O^Kckjkvg4gyKVKE+y$O^KZ^KB7VTh^Zr+gVgN+vAxk^u4g9COmASxZxkVgKvAR^K^ZVgJvk^>y+=$OV>Mvq4OlXZVZE+S$O^>xk^ZB>GK^>y+X$OV>E+y$O^ZZ^ZBAsDI^gX+^g2+xZ^k^>4RsDAxZG+X$O^Zy+z$Oxg^k^Z4RjU1xgOCQcgBY+okx>vkGkR^>z+D$Ovqy+R^gRxgm7eQg^dCkxuu^g^d^ufx+vgzk4deVAxZvuxk^>4qjDAvuBY+y+T$OxA2K^AS+^>skx>mOzvubz+=IvMZ^K47jDZv>r+g^Zr+xRG+$$O^d$+BZl^d^u=+^dVuxg^k^R4R$87xgG+$$O^dy+cPgxuA^u4gYE1xO8k^7R^uVOx7F^+^AZVAfa|zu^O=+VdxOvdxk^R4qVrZvdxk^ZRVRKvM^M^ZpV+xq^k^>4go$Ixq^k^>4uEsL32K^>D+E$dVKY+SGcg4qSsLqxKOCvsgTkC8O$kV$OUk$8O8k28Ov+fJ8o1^KZVKfLDNh^MD+e8OxM=+4ACDIV>Mvq4dT|+VqQ+O^Ry+o8OVZjkvZR^ZRV>xqvZp^+^MRxMmdDGt^qy+>vgxk^ZRBKrGLR^M^qVZJvk^KD+$8OVKN+vMy+$8O^qskxKmRPlL^qz+V$OvRh4I2YIxqvZxk^K4qycuvZy+o8O^qLfh^h^q^RskxKmR$SO^RU+o8OvMS+^KxkVKftzvuby+9IxZA^Z4IsDZxRc+g^uy+88Oxg^k^uR^gqxZvZ^up^+VqjkvM4gv$IVqjkvM4uQsLpVkvMD+N$d^KD+yvsgmqSsLRVK>GlsgTkD8O8k98OekN8Oy+sPg^>Rx>mgYyt^RCkxqu^>^R^qfx+vMD+l8O^Kr+xKX+X8O^KBj=sgE+EI^MZ^MBu^DZ^qr+gVRE+E8O^gZ^gB3C6^uek^AqxgvA^Ap^+VZjkvZR^ZRVMxqvZp^+^KU+D8OvMgVDsgB2+^+vM^+GkRVKE+u^KZ^KBd8Qg^Rek^ZqxKvZ^Zp^+Vq|kmdoVA^qVR2+N8O^RBY+r+xq^k^q4ONvu3G+X8O^dxkVqfOv$I^dxkVqfIQsLboKVq2+G$d^K9+lTsgBkssLg^Kg|oHgUkG8OGkS8O^K$ky8OUks8O8kH8Ov+f7X=I^MZVMfOlxO^>ekVqKv>^>^qpV+xKX+G8O^KS+VK2+V8O^KBlQsgz+N8Ovqy+lPg^qY+x>vR^K7^KeQsgN+vRp^q^KU+S8OvMgXysgB2+^+vM^+GkRVKN+vMxk^K4A|vuWy+R^>Rx>m7eQg^ZCkxRu^>^Z^Rfx+vRxk^K4Z^vIvRxk^K4dTsLbD+s8O^Kbv+6s|xgek^qU+G8OvRy+s8O^KRxKmgv$I^qvkxqvM|k^K4usyIvZu^RHssgz+S8OvMy+lI^RRxRmIxDZ^Zy+>vdy+s8O^ARxAmgv$I^dskxgu^dR^RVZxgF^+^qxkVKfOv$I^qy+x8OxqA^q4dxygxgc+g^Zy+TPgxuA^u4gN2hxA^k^ZR^Aqxqvd^Zp^+VKE+V8O^KZ^KBgjvu^g$k^gVK9kvM4OlcRVZRvg2Vsgy+H8OVKMvM4dHygVdQ+O^uy+XPgVgMvd4gjTuVAjkvAR^ARVKxdvAp^+^Zz+S8OvdZ^g4dTsLvg$k^Z^gXkxgmOlcR^ZdxZyexgy+H8O^dRxdmdHyg^gy+>vOy+XPg^uRxumgccu^IskxAu^IR^dVgxAF^+^Zy+c8OxZf4uXrLVZxgI^gNvxgy+c8OxZA^Z4uTrLxu=+4IjKVZ6vA^Z^ApVAxgI^go8xgy+c8OxZA^Z4uTrLxO=k^O^Z|kVZf1HyR^ApVAxgI^g=Yxgy+x8OxZA^Z4dxygxuc+g^Ay+TPgxOA^O4gz8kx7^k^AR^7qxZvA^Ap^+VgE+V8O^gZ^gBRrsL^As+^AJxgI^g=Uxgy+c8OxuA^u4ONvux7V+^73^ufxuvdu^gX9xgz+G8OvAZ^u4gGygv7r+g^7z+DPgvOZ^A4ZjeZv1xk^7RVIKvA^O^7pV+xgG+H8O^gZVgf1N^A^OU+VOKvdu^gS|xgz+S8Ovdy+H8O^7Rx7mdDGt^Ay+>v7xk^ORBM|^+R^7^AVOJvk^Ixk^gBdccO^Iy+s8OVgjkvd4OzvupE+V8O^Axk^ABRrsL3g$zxgbv+Yk^O^+GkqxOG+s8O^gy+qxOA^O47CQgxt8k^IR^OVtxIF^+^AxkVgfircO^Ay+c8Oxg^k^g4ONvu3G+s8O^gxkVgfIQsL3B2+E+V8O^gy+s8OVIMv14OzvuVARvOEyxgpgVt>syxgpR^tskxgmRGU1^tz+S8Ovdy+s8O^ARxAmuQsL^tdxtXSxgpg^iZlSxgFR^ixkVgfuTy1^iy+c8OxgG+s8O^1ZV1fOv$I^AxkVgful$7^Ay+c8OxI0^I4ONvuxgG+s8O^gWVgfIQsL^Ay+c8OxA0^A4go$Ix1G+s8O^1ZV1fuGU1^tjkVtx1I^12xxgy+c8Ox10^14RjU1xLG+s8O^tZVtfuTy1^LjkVLxtI^tSHxgy+c8Oxt0^t4Rly1xLG+s8O^LZVLful$7^hs+VhfdSsL^iuVi=VxgG+s8O^LWVLful$7^iy+c8Oxi=+4dX=IVJMv34glxOV3P+vpR^J^3VfJvk^hy+G8OVaEkvJ^a^3xkVifuGcu^3y+c8OxiA^i4Rjcux3V+^3R^idxiDoHgy+s8O^fFxfmRGcu^iz+S8OvJoK^hD+r$dxK|+=vHg4qrsL>vqgNDHgTkvYOykDYO^Ky+2YOVKjkvM4RHjgZE+DYO^>Z^>BKHU1^Ks+^KJx>i^>$2Hgy+8YOxMA^M4RjU1xKV+^Kg^qfxqvq7^>DYHgz+oYOvMZ^K4A|vuvRs+^q3VMJv>^>7^>|=HgE+DYO^KZ^KBgjvu^qs+^qZxMF^M^>uV>$DHgG+lPg^My+zPgxKA^K4gY2gxqG+SPg^>ZV>fOY>^RxkVMxqvZy+2YO^KeKxKX+G$d^>$+BqN=I^MZ^MB>ExO^>ek^qqxMvq^qp^+VK2+V$d^Ky+sPgVKMvM4g=E1VqP+vdR^K^qVgJvk^>y+sPgV>Mvq4g$PkVZP+vdR^>^ZVgJvk^Ry+2VgVZ7vg^RD+oIVRP+vZD+H$d^RblQHg=+4ACDIVRMvZ4A99OVZQ+O^dy+yPgVujkvuR^uRVRxZvup^+^qU+G$dvRgNSHgBYz$d^+vR^+GkRVqE+GPg^qJ^qVZMvg4AN^AVgo+vdR^u7VuXSHgFR^uZVZxuvRD+V$d^qz+G$dvuZ^d4gGygvOr+g^Iz+EPgv7y+V$d^JRxOv3^txk^Iqxtu^d^A^Ifx+vI2k^ugVupvA^g^I7VI=zHg6=z$dy+lPgVqE+GPg^gZ^gB>sDA^uy+GPgVZMvg4gC|tVgjkvR^u^gy+9PgxqG+yPg^ZZVZfO=2g^uy+rPgxZA^Z4grX7xg^k^q^u^gz+=PgvRy+yPg^ZRxZmgSn^Av+f1=^d^gZVgfixUu^uZVuf1GY+^ZxkVqxAvgy+lPg^qz+EPgvdZ^g4ZT8kvAxk^q^uB3v<y+lPg^qz+EPgvdZ^g4Z8oOvOy+oI^ZskxqvO^Zy+lPgVqE+yPg^Zxk^qBMP|Z^Zy+lPgVqE+C8d^gZ^gBqXGt^ur+gVAjkvOR4REGLKvd^u^ApV+xZ^k^q4ZYU7xZG+lPg^qy+j$dxZG+S$d^Oy+^^gxLl+^O^L^AY+xZvO^uxk^qB>CsI^uy+lPgVqE+H$d^Ay+S$dV7E+sVg^I=+^7VIxul+^A^u^Zskxqmg=NL^Zz+=PgvRy+G$d^Zz+N$dv7y+GVg^7Y+xOvI^A=+^ZVAxu^k^q4gGXRxuG+lPg^qy+j$dxAG+S$d^Oy+cVgx7l+^O^7^uY+xAvA^Zxk^qB>HEL^Zy+lPgVqE+H$d^Zy+S$dVOE+C^g^I=+^OVIxAl+^Z^A^uskxqmg9|L^uz+=PgvRy+G$d^Zz+N$dv7y+VVg^7Y+xOvI^u=+^ZVuxA^k^q4grsIxAG+lPg^qy+j$dxuG+S$d^7y+^VgxOl+^7^O^ZY+xuvg^Axk^qBMVj+^Ay+lPgVqE+H$d^uy+S$dVOE+2^g^7=+^OV7xAl+^u^A^ZskxqmgvUO^Zz+=PgvRy+G$d^Zz+N$dvIy+2^g^OY+x7v7^A=+^ZVAxu^k^q4gjz+xuG+lPg^uy+j$dxqG+S$d^7y+Y^gxOl+^7^O^AY+xqvO^Zxk^uBqys+^Zy+lPgVqE+H$d^uy+S$dV7E+E^g^O=+^7VOxAl+^u^A^ZskxqmgNeg^Zz+=Pgvgy+G$d^uz+N$dv7y+X^g^IY+xOv1^q=+^uVqxA^k^Z4gGvIxAG+lPg^qy+j$dx7G+S$d^Oy+c^gxul+^O^u^AY+x7vO^Zxk^qB>PxL^Zy+lPgVqE+H$d^uy+S$dVAE+S^g^O=+^AVOx7l+^u^7^ZskxqmgzTO^Zz+=Pgvgy+G$d^qz+N$dv7y+S^g^1Y+xOvt^A=+^qVAxu^k^Z4dPo7xuG+lPg^qy+j$dxuG+S$d^Oy+z^gx7l+^O^7^AY+xuvO^Zxk^qB>scg^Zy+lPgVqE+H$d^uy+S$dVAE+CCd^7=+^AV7xOl+^u^O^Zskxqmg|rR^Zz+=PgvRy+G$d^uz+N$dvIy+G^g^OY+x7v7^A=+^uVAxZ^k^q4g$uxZG+lPg^qy+j$dxAG+S$d^uy+P^gx7l+^u^7^IY+xAv1^Zxk^qB>zq^Zy+lPgVZE+H$d^7y+S$dVOE+DCd^1=+^OV1xAl+^7^A^qskxZmgxSt^qz+=PgvRy+G$d^Az+N$dv7y+=Cd^7Y+xOvI^u=+^AVuxZ^k^q4gTNkxZG+lPg^qy+j$dxuG+S$d^Ay+UCdxIl+^A^I^OY+xuv7^Zxk^qB>8ju^Zy+lPgVZE+H$d^Ay+S$dVOE+ECd^7=+^OV7xql+^A^q^uskxZmgzC1^uz+=PgvRy+G$d^Oz+N$dvAy+XCd^7Y+xuvI^A=+^OVAxZ^k^q4gTckxZG+lPg^qy+j$dxOG+S$d^uy+U^gx1l+^u^1^AY+xOvO^Zxk^qBdCsu^Zy+lPgVqE+H$d^uy+S$dVAE+EVg^7=+^AV7xOl+^u^O^Zskxqmg287^Zz+=Pgvgy+G$d^Az+N$dvIy+ECd^OY+x7v7^q=+^AVqxu^k^Z4dDNtxuG+lPg^qy+j$dxuG+S$d^Oy+zCdx7l+^O^7^AY+xuvO^Zxk^qB>XYZ^Zy+lPgVqE+H$d^uy+S$dVOE+NVg^I=+^OVIxAl+^u^A^ZskxqmgvUI^Zz+=PgvRy+G$d^uz+N$dv7y+GCd^IY+xOv1^A=+^uVAxZ^k^q4gTOxZG+lPg^qy+j$dxZG+S$d^Oy+|Vgx7l+^O^7^AY+xZvO^uxk^qB>$Qu^uy+lPgVqE+H$d^Ay+S$dVuE+oed^7=+^uV7xOl+^A^O^ZskxqmZXQg^Zz+=PgvRy+G$d^uz+N$dvIy+Ned^OY+x7v7^A=+^uVAxZ^k^q4ZzTZxZG+lPg^Zy+j$dxAG+S$d^Oy+jedxIl+^O^I^uY+xAvA^qxk^ZB>EDg^qy+lPgVqE+H$d^Zy+S$dVOE+Dod^7=+^OV7xul+^Z^u^AskxqmgVY+^Az+=PgvRy+G$d^7z+N$dvAy+yod^IY+xuv1^A=+^7VAxZ^k^q4gDUZxZG+lPg^qy+j$dxuG+S$d^7y+eCdxIl+^7^I^OY+xuv7^Zxk^qB>YGd^Zy+lPgVuE+H$d^Iy+S$dVqE+Dvd^O=+^qVOxAl+^I^A^Zskxumg$c7^Zz+=PgvRy+G$d^uz+N$dvOy+$vd^7Y+xAvI^O=+^uVOxZ^k^q4gEYhxZG+lPg^qy+j$dxZG+S$d^Oy+^odxIl+^O^I^AY+xZvO^uxk^qB>jjZ^uy+lPgVqE+H$d^Zy+S$dV7E+Gvd^A=+^7VAxul+^Z^u^OskxqmZ|yI^Oz+=Pgvgy+G$d^uz+N$dvIy+Svd^1Y+x7vt^q=+^uVqxO^k^Z4gNltxOG+lPg^Zy+j$dxAG+S$d^Oy+9vdx1l+^O^1^qY+xAvR^uxk^ZB>EDI^uy+lPgVqE+H$d^uy+S$dV7E+o$d^I=+^7VIxOl+^u^O^ZskxqmgXGZ^Zz+=PgvRy+G$d^Az+N$dvIy+2$d^OY+x7v7^Z=+^AVZxu^k^q4gyYOxuG+lPg^qy+j$dxuG+S$d^7y+v$dxOl+^7^O^AY+xuvO^Zxk^qB>XQd^Zy+lPgVZE+H$d^qy+S$dVOE+=Cd^I=+^OVIxAl+^q^A^uskxZmZcDA^uz+=PgvRy+S$d^Zz+DedvO=+^Z^AVujkvR4d$D+VuE+EPg^qy+S$dVuE+=^g^7=+^uV7xZ^k^q4ge2+xZG+lPg^Zy+r$dxqG+=Vg^O=+VqxOvAxk^Z4Z^cgvAy+lPg^Zz+N$dvAy+sCd^AY+xuvO^qxk^ZB>8o+^qy+lPgVqE+s$d^Ay+DVgVO$+vO^O^uxkVqfO9st^uy+9PgxqG+S$d^Ay+|^gxul+^A^u^ZskxqmgzGt^Zz+=PgvRy+S$d^uz+XCdvO=+^u^AVZjkvR4glDZVZE+EPg^Zy+S$dVuE+sCd^O=+^uVOxq^k^Z4gNXZxqG+lPg^qy+r$dxuG+HCd^A=+VuxAvgxk^q4ZPG7vgy+lPg^qz+N$dvAy+NVg^AY+xuvO^Zxk^qB>e97^Zy+lPgVqE+s$d^uy+yVgVA$+vA^A^ZxkVqfOo87^Zy+9PgxqG+S$d^Zy+8edxAl+^Z^A^uskxqmgsTZ^uz+=PgvRy+S$d^Zz+VCdvA=+^Z^uVAjkvR4dx9LVAE+EPg^qy+S$dVuE+led^A=+^uVAxZ^k^q4glHAxZG+lPg^qy+r$dxOG+$ed^A=+VOxAvgxk^q4Zxeuvgy+lPg^qz+N$dvAy+Ded^AY+xuvO^Zxk^qB>$9h^Zy+lPgVZE+s$d^uy+ledVA$+vA^A^qxkVZfACYh^qy+9PgxqG+S$d^uy+|edxAl+^u^A^ZskxqmZjlZ^Zz+=PgvRy+S$d^Az+EedvA=+^A^uVZjkvR4gPE7VZE+EPg^uy+S$dVZE+sed^A=+^ZVAxq^k^u4gXz1xqG+lPg^qy+r$dxuG+sed^7=+Vux7vgxk^q4ZHCkvgy+lPg^qz+N$dvAy+Hed^AY+xuvO^Zxk^qB>2Uu^Zy+lPgVqE+s$d^Zy+VedVu$+vg^u^AxkVqfOlHk^Ay+9PgxZG+S$d^uy+^edxAl+^u^A^qskxZmgzEg^qz+=Pgvgy+S$d^uz+VedvO=+^u^AVqjkvg4ZcskVqE+EPg^qy+S$dVZE+=od^u=+^ZVuxA^k^q4ZvxuxAG+lPg^uy+r$dxZG+=od^O=+VZxOvRxk^u4Z^BvRy+lPg^qz+N$dvOy+Dod^ZY+xAvg^Oxk^qB>CQh^Oy+lPgVqE+s$d^uy+lodVA$+vA^A^ZxkVqfOUyk^Zy+9PgxqG+S$d^uy+TodxAl+^u^A^ZskxqmgeU+^Zz+=PgvRy+S$d^Zz+lodvA=+^Z^uVAjkvR4gjQgVAE+EPg^qy+S$dVAE+Sod^u=+^AVuxZ^k^q4d$XZxZG+lPg^qy+r$dxZG+Sod^A=+VZxAvAxk^q4ZDodvAy+lPg^qz+N$dvgy+God^OY+xZv7^uxk^qB>jXg^uy+lPgVZE+s$d^uy+sodVA$+vA^A^qxkVZfOejt^qy+9PgxqG+S$d^uy+xodxAl+^u^A^Zskxqmg|Hk^Zz+=PgvRy+S$d^uz+VodvO=+^u^AVZjkvR4gv|IVZE+EPg^uy+S$dVZE+lvd^A=+^ZVAxq^k^u4gDrgxqG+lPg^qy+r$dxuG+Dvd^A=+VuxAvgxk^q4ZNQkvgy+lPg^qz+N$dvOy+Xvd^OY+xAv7^Zxk^qBMXCO^Zy+lPgVqE+s$d^uy+CedVA$+vA^A^ZxkVqfh$Nk^Zy+9PgxZG+S$d^uy+|vdxAl+^u^A^qskxZmgUjA^qz+=PgvRy+S$d^uz+Xvdv7=+^u^OVZjkvR4Z$c+VZE+EPg^Zy+S$dVAE+Hvd^u=+^AVuxq^k^Z4Z=HkxqG+lPg^Zy+r$dxuG+Hvd^A=+VuxAvRxk^Z4Z$UgvRy+lPg^qz+N$dvAy+o$d^AY+xuvO^Zxk^qB>D|+^Zy+lPgVqE+s$d^7y+=$dVZ$+vI^Z^uxkVqfO^9L^uy+9PgxqG+S$d^Oy+U$dx7l+^O^7^AskxqmgCxk^Az+=PgvRy+S$d^uz+=$dvO=+^u^AVZjkvR4glz1VZE+EPg^qy+S$dVuE+N$d^O=+^uVOxZ^k^q4g$DAxZG+lPg^qy+r$dxuG+E$d^A=+VuxAvgxk^q4Z^vdvgy+lPg^qz+N$dvOy+N$d^OY+xAv7^Zxk^qB>XGd^Zy+lPgVuE+s$d^Zy+y$dVO$+vg^O^qxkVufA9ld^q$+BqQM^OZ^OBZNvd^uek^ZqxOvA^Zp^+VqAvRZCEjeQ6sHPyz5VZRvgNEedy+lPgVZE+s$d^uy+svdVA$+vA^A^qxkVZf7rf^qy+9PgxqG+S$d^uy+^vdxAl+^u^A^Zskxqmg|PZ^Zz+=PgvRy+S$d^uz+sodvO=+^u^AVZjkvR4gS2hVZaszed$+47jTtxuc+g^1xkV1Kmo+9E1rkVux1vgek^ARD+xZvOp^+^qZHjed6=z$dvk^qV+yku^qy+RVZMvg4uroIVuMvA4OEQgVZQ+O^Axk^AqfBG=kR^uVZxAF^+^qfq>vgSk^q^ZVIRv1CGed$+4u$^dvRZ^q4OjUuvgxk^Z4g29ZmtzvkBYz$daCPed$+4A^UIxZA^Z4hezLxIc+O^A$+BZl^d^7Z^7BZTzt^1Z^1BuXNh^7xk^Aqx7^k^Ag4hrois+^79+ExedBkssLR^1grxedUko=Oskxk^7BRvt^1xk^Adx7u^Z^I^Afx+vRglPedBYz$d^+vR^+GkRVqalz$d9+oVed4>NsLu^qgVNvdlkVYOUk$=O8k2=O$k$=OUkD=O8kl=O$kD=OUkE=O8kN=O$kE=OX+$=ORr+hxK^k^KR27skxKO$7xk^KdlI^k^KOVIskxKL=7xk^K1XI^k^KL$IU+o=OvMD+==OSZbV=od=+4A=^dVKE+D=O^RZ^RB>8vu^Zr+gVgY+Svod4qSsLZxdOo2odGkH=OVKC+mAj=g^MRxMmiGlO^>y+>vRy+H=O^Rz+$=OvgQ+^R^ZVgjkvRR^gRVMx>vRp^+^KeKxK^k^gR^dqxRvg^gp^+VqMvR4dDGtVZQ+O^uxk^uqfdSsLR^qVZxuF^+^MZVKxMvqZ^>4uX^AvMD+$=O^KZXUod6Y+vk^KV+yku^KBY+z+C=OvMX+^KgVMTkv>^KqC1VKxMX+D=O^Mr+3x>^k^>RXRskx>ODRxk^>dGR^k^>ODRskx>L$qxk^>1Vq^k^>L=qskx>pDRZ^>B>8vu^Zr+gVgY+2Xod4qSsLZxdOlEodGkoUOVKC+mAj=g^MRxMmiGlO^>y+>vRy+oUO^Ze+xZ$+^Rxk^qqxRu^M^>^qfx+vMoK^KxkVgKvuR^>^ZVgJvk^MZ^MBqXGt^Zr+gVgjkvdR4qrsLKv>^Z^gpV+xKX+l=O^Kr+ixd^k^dRXMskxdOGqxk^ddVq^k^dOHMskxdLCqxk^d1yRA^d4gCvuxgc+g^u9+TrodfdSsLg^AZyjodHk=UO^K$+BZx=g^>Z^>B7HlO^Kr+gVqE+lUO^Zo+^Z1xg^k^qR^gqx>vM^qp^+VMVkv>xk^uRVAKvu^g^upV+xKA^K4dUGtxgc+g^uxkVuKmqSsLRVKxgvAp^+^ZU+D=OvgBoCvd$+BZ$DI^ZZ^ZB12zL^ur+OVAC+mA=^d^ORxOmAUzt^7Rx7mIDNh^IskxAu^Iy+l=OVOE+X=O^7e+^OV7xIG+X=O^Oe+VIxOvIxk^AgV7N+v79+DVod4>NsLI^7gHVodlkDUOHkEUO^KGkQUOxMVkxk^O4dx1vIxk^AuVOKvg^u^ApV+xgONCvdBY+okxgvkGkR^gbv+X+E=ORr+ixg^k^gRlCqskxgON^>xk^gdyCq^k^gOXCqskxgLGCqxk^g1N^>X+N=O^gD+z=OXs>6lDvd$+4u$^dvdy+N=O^ORxOmgevu^7y+>vt9+S$vd4>NsLO^tg2YvdjkSUOvM$+4AS=gxMA^M4ijlOx>c+g^qy+cUOxZG+y=O^RQ+VZxRvdxk^qRVgKv>^>^qpV+xK2K^Kxk^1qxtu^O^7^1fx+vAZ^u4g2Gtvtr+g^tskxtu4qSsLqxuvt^tp^+VIMvd^I^AjkVAxgxk^g^AQkVAxgX+E=O^ggxDvda9+vk^g^+jkKvdBY+y+|=OxgdC1^g^AU+2=OvOB=Nvd$+BZ$DI^AZ^AB12zL^7r+OVIC+mA=^d^1Rx1mAUzt^hRxhmIDNh^LskxIu^Ly+l=OV1|kmZY^Z^1VtE+X=O^1e+^tV1xiG+X=O^1e+Vix1vhxk^IgVLN+vt9+DEvd4>NsLt^tgoQvdlkHUOHkoDO^KGkvDOxMHk2DO^>skskx1mu^1^tskxII^1R^AV7xIF^+^ggjNvda9+vk^I^+jkKv1BY+skU+H$dvRy+C8d^AtxAvRy+lPg^Az+N$dvIy+sPg^IRxImg$1^tY+x7vi^qxk^AB>x1^qy+lPgVqE+GPg^AZ^AB>vVd^i$+4gD=IvOZ^A4Z=xOv1ek^1RVAxIvtp^+^7z+S$dv1yk^7^IVLjkvR^i^Ly+9PgxqG+yPg^IZVIfO=2g^1ZVqx1vIy+SPg^qRxqmgY>^I=kx7v1^qu^qro$dE+EPg^qy+yPgV7MvI4gSDAVIMvR^I^1y+jPgx7A^74g^XtxqTk^1^q^7dx7Co$dy+s7^qRxqmgQ9d^7U+CIvIB=e$d$+BZ$DI^qZ^qB12zL^7r+OVtC+mA=^d^1Rx1mAUzt^iRximIDNh^hskxtu^hxk^tZff=eAS+^1D+G^vdmqSsLRVL>2C$dTkEDOskskx1mu^1^LskxtI^1R^qV7xtF^+^Igje$dalz$dvk^7^+jkKvIB=z$dy+PPgxtG+lPg^7CKVtx7b^IgND$dbDY$d=+4ACDIV7MvI4hozLV1Q+t^i$+4u$^dviZ^t4u8ztvhZ^L472Nhvixk^iRVtjkvLg4LUoiN+vi9+o2$d4>NsLu^Lg=2$dlkNDOVkxk^t4dx1vhxk^iuVtKvI^1^ipV+xIOVY$dB=z$dokxIvkGkR^Ib$z$d=+4dTMVLMvh4AXvdVtP+vLR^L^tViJvk^I1^IRy8^9r6P8^9N8k^tu^tQD$dE+$Vg^Iy+lPgVtHkv1^t3^1blN$d=+4I8ehV1E+EPg^Iy+yPgViMvL4g=2gVhMv1^h^ty+rPgxhA^h4g2>xITk^t^I^JSkxJv1xk^14hSvuv1$+4A^UIxIA^I4hezLxic+O^t$+BuUeh^hxk^tqxh^k^tg4hSvus+^Jy+lPgVhE+GPg^fZ^fB>l2g^aZ^hVax3G+SPg^hZVhfOY>^aUkV3xavbjk^p^hskxJmu^1^hskxtI^JR^IVixtF^+^1g^N$dalz$dvk^1^+jkKvtB=z$dgzG$da9+vk^1^+jkKvtBCG$dy+9Pgx1^k^14uEsLiG+lPg^1y+qxhA^h47CQgxi8k^JR^hVixJF^+^txkV1fLEYI^ty+9Pgx1G+R^tZVtfIroI^ixkV1fJVT1^iy+PPgxtG+lPg^i=+VtxivtgEG$dB2+^+vi^+GkRVta9+BY+skCkx>u9+^M^>fx+vMskxk^gB>vcL^7xk^Aqxgu^M^u^Afx+vMD+yI^Kz+EIvAZ^u4gEcAvdr+g^AD+Hx$dmqSsLRVt>lC8dy+y7^KdxKDV$dy+S7^Kv+fIXrg^qZVqfOlxO^>ekVRKvR^>^RpV+xM^k^K4gQtxMG+EI^>ZV>fOzDA^Zr+dxRG+NI^gxkVRKvdxk^RgBaNNgR^>^ZVRJvk^KskxkVAKviR^u^gVAJvk^Kp9+VAE+H7^KZ^KBAsNt^gs+^gBgzNt^Ku^Kc=8dY+Vo8d4qSsLqxKOE28dTk=9Oz+y7vMZ^K4INNtv>s+^M41yJvMu^KX28dz+y7vMZ^K4feSIvqr+u^qskxqu43$jIz+yIvdxk^qgVgKvM^>^qpV+xMG+SI^>iV>xMVkD+GI^Kz+y7vdZ^g4JP$kvOr+u^OskxOu43$jIz+yIvIxk^OgV7Kvd^A^OpV+xKO2U8dy+SIVO7v7^KskekVgK|+^>^gpV+xKONG9RgSG9RZV9DuF^+^KD+vsdxKs+^KD+2sdVKE+Dsd^K$+47eehvRZ^q4ANCKvZZ^R4uX^Avqxk^K4Z=XIvqy+2sd^Kz+CsdvqZ^>4i9zuvRZ^q47eehvqZ^>4ANCKvZZ^R4uX^Avqxk^K4Zzzgvqy+2sd^K5f7^ER4d|Vkx>YK^>4dlYZxqYK^q4dXY7x>YK^>4d$Nuxq=+4I8ehVRU+vR^R^gxkVKfOrUu^gy+8sdxKe+4d^ERBqyVk^qvK^qBqQYZ^>vK^>BqzY7^qvK^qBqUNu^>y+$sdVqMvR4L|zuVZMvg4I8ehVqU+vq^q^ZxkVKf7V81^Zy+8sdxK^k^K4uQDg3G+o+^qwBtEeZ4qSsLVRN+vgxk^Z4ZlrIOCK^q^RVZx>A^>4d=|+xqc+g^R$+BuUeh^ZZ^ZBu=y1^dxk^Rqxdu^>^q^Rfx+vMD+=sd^Kz+$sdvRu^q2s8dz+$sdvMZ^K4uVPgvZp^R^qdxqyx8dy+=sd^RRxRmAoVg^KRxKmgErI^ZfxZvRu^qyQ2dv+fiDeg^qy+YsdxRA^R4AeVgxZA^Z4g|rIxRl+^q^R^KU+2sdvMy+Dsd^KIxKCq^qu^qzQ2dE+=sd^qZ^qBIzzu^RZ^RBuUeh^qZ^qBu=y1^gZ^gBgyQg^qr+gVRjkvZR4Ac2ZKvd^q^RpV+xK4Rg^qrkxKvR^Zu^ZPX2dE+=sd^qZ^qBIzzu^RZ^RBuUeh^qZ^qBu=y1^uZ^uBgyQg^Rr+gVdjkvuR4OXDIKvA^R^dpV+xK4Rg^qrkxKvR^Ru^RxY2dC+mA=^d^qRxqmI8eh^dRxdmI$y1^qRxqmOEQg^Ay+>v7xk^ORB>^z+R^q^AVOJvk^KfRZxdTk^K^d^OfxOvZu^R292dv+f1=^d^OZVOfL8eh^KZVKfL$y1^AZVAftEQg^Ir+ZxK^k^KR4Z$Vgu^A^I^Kfx+vufRgVK8kvu^K^OpVOxRi^RGX2dy+vsdxOA^O4LXzuxdA^d4I$ehxIA^I4Ivy1xdA^d4O|Qgxtc+g^7xkV7KmI$ELRVdxtvIp^+^KaKO^ISk^KVIxOF^O^RpVRxZI^ZyQ2dy+8sdxZG+$sd^KZVKfa|zu^RZVRfL8eh^KZVKftSCK^RZVRf1N^A^Os+VOKvMxk^Z4dXDgvMy+2sd^KRxKmglXI^Rz+osdvgZ^Z4Zzzgv75^R^OVKdvMVz2dy+2sdVZMvg4uNDgVRJvZ^KD+lsdVKN+vMy+lsd^ZskxKmOzvu^Zz+=IvZZ^R47jDZv7r+g^7z+osdv1xk^7RVIKvZ^O^7pV+xZ^k^K4go$IxZ^k^K4uEsL32K^KD+$^gVKY+2G2d4qSsLqxKOC|YdTk$xd$koxdUk=xd8kDxd$k=xdUkXxdy+sPgVKMvM4g=E1V>P+vuR^K^>VdJvk^MD+2xdVMQ+O^>xk^>qfixvdD+=xdV>N+vqxk^>4IcTduS+^qxkV>fOlXI^qS+VRjkvq4AoyZVR2+Xxd^>y+2xdVMMv>4L|zuV>RvqXV2dy+2xdVMMv>4L|zuVqMvR4I8ehVMJv>^>u^>|TYd2+ExdRy+lxdV>E+lxd^MZ^MBZS^A^Rl+^>VRxMI^MSUYdy+YxdxMG+lxd^qZVMxqvqD+Xxd^>z+2xdv>Z^M4Z=XIvZy+Xxd^Mv+fL8eh^>y+TxdxgA^>^g^qskxRv>^qy+DxdV>Mvq4AoyZVRE+Nxd^My+2xdV>Mvq4L|zuVqMvR4I8ehVZE+Nxd^qZ^ZVqx>^k^R^M^>z+2xdv>Z^M4Z=XIvqy+Xxd^qRx>vR^My+DxdV>Mvq4AoyZVqE+Nxd^RZ^qVRx>C+^M^>^qdxqH=Ydy+Dxd^MRxMm1PTd^>f>vR2k^>^qVqjkv>41PTdVqE+Exd^Mp^MV>okv>g^MD+9xdxMOsV2dS+^Mz+2xdvqZ^>4IcTdvRU+^qRV>jkv>4OzvuV>E+EI^qZ^qBu^DZ^Zr+gVRE+Xxd^gxk^Rqxgu^q^Z^Rfx+vqxk^M4Z^vIvqxk^M4dTsLWoK^MS+V>jkvq4Ozvupjkvq4gv$IB4DUIxk^>4dTsLboK^>D+8^gxK|+G|Yd4qrsLKv>gH^YdTkcxdC+mI8eh^KRxKm7xvd^MT+xMmu2|1^KOxKENYd$+4I$ehxMA^M47svdxqN+^q4uEyIx>F^>^KuVK=rYdo+4wlDOBkssL^>Z^>BqexO^qr+gVRC+mI8eh^ZRxZmI$y1^gskxRu^gR^>VqxRF^+^MjkVMxqF^q^KuVKysYds+^Kxk^KBgjvu3y+lIVqMvR4IxDZVZQ+O^RS+^gv+fL8eh^dZVdfL$y1^uxkVgfA|T7^u$+BuUeh^dZ^dBd^vd^uxk^gBqz2h^uxk^Rqxgu^q^Z^Rfx+v>xk^K4Z^vIv>xk^K4dTsLWoK^Kgc^YdN+vMxk^K4A|vuWy+lI^RRxRmIxDZ^Zy+>vuS+^g$+BuUeh^uZ^uBu=y1^Oxk^gBMzT7^O$+47eehvOZ^A4OjvdvAxk^g4g92hvAxk^dRVgKvZ^Z^dpV+xM^k^K4go$IxM^k^K4uEsL32K^KskD+Y^gxM|+yC=d4qrsLKv>gXCDdTkvHdekDHd8k=Hd8kUHdekEHd8kXHd8k|HdekSHd9+lCUd4>NsLO^MD+lHdVMY+C8=d4qSsLZxMX+XHd^Mr+7xK^k^KR4dYsd^k^Kg4deT+^k^Ku4AXQI^k^KO4iUT+X+2Hd^KgeX=dykHHd^K8ksHd$kGHdG+GHd^>ZV>fJeSu^MekVqKvq^M^qpV+xKX+sHd^KD+xHdv+G+2Hd^MZVMfi8C+^Rr+ZxqG+sHd^ZxkVqKvgR^M^RVqJvk^Ku^KeU=d2+CPd4IsEtZyT=dG+=Hd^RZVRfi8C+^Zr+ZxqG+sHd^gxkVqKvdR^R^ZVqJvk^Ku^KU9=d2+CPd4uT3ZyT=dG+DHd^KZVKfi8C+^ur+ZxZG+sHd^gxkVZKvdR^K^uVZJvk^qu^qQT=d2+CPd4uPCKZyT=dX+HHdY+y+xHdxZ2K^Zr+LVKjkvMR4iozgjkvMg4iojRjkvMu4L=rtjkvMO4i=$IjkvMI4uUEdjkvMt41y8g2+lHd^Kr+IVKjkvMR47WjkvMg4ATKjkvMu4dTykjkvMO41^yu2+XHd^Ky+lHdVMC+mI8eh^>Rx>mI$y1^RY+xMvZ^KD+EHdVKE+NHd^M$+47eehvZZ^R4OjvdvR=+^M^qVK2+SHd^Ky+EHdVKMvM4AN^AVM9kv>R^KuVKSS=dG+NHd^q|kVqv+vqp^>^KdxKGj=dy+EHd^MXkxM9+^Zp^ZVKRvM=CUdy+EHdVKMvM4AN^AVM8+v>g^K7VKGc=dG+NHd^My+|Hdx>A^>R^q0xMvR^>p^>VKRvM=CUdS+^KskxKmOzvu3z+=IvRZ^q47jDZvZr+g^Mr+xZ=+4I8ehVgMvd4I$y1Vdjkvg4Z|T7VdC+mI8eh^uRxum7xvd^gskxZmd|2h^gz+lHdvuxk^Z41PsOvuy+NHd^gskxZm1SB^gskxMu^ZR^qVRxMF^+^>xkVKfOv$I^>xkVKfIQsLboKVK>lsUdGkXPd^K$klPd8k^KD+EPdVK<mAUsI4>NsLv>Z^M4gcsOvZr+g^>z+DPdvRxk^>RVqKv>^R^>pV+xKi^K=8UdwBqVNR4qSsLVqMvR4dPsOVZQ+O^gy+XPdVdjkvdR^dRVqxZvdp^+^>fx>vM7^KNYUd~fOyVd4qrsLxRA^R4dHsOxgc+g^Zy+TPdxu^k^ZR^uqxRvd^Zp^+V>Jvq^K7^KxUUd<mgTru4>NsLvgZ^Z4gcsOvdr+g^dz+DPdvOxk^dRVAKvg^g^dpV+x>F^>^K7VKolUdo+4I$ELBkssL^dZ^dBqexO^gr+gVuE+NPd^Axk^uqxAu^d^g^ufx+vqp^>^KdxKoXUdy+EPd^gRxgmdHyg^>y+>vAxk^uRBReeKR^g^>VuJvk^Kw4A9DImqSsL^>Rx>mdPsO^uy+>v1y+XPd^AskxIu^AR^>VuxIF^+^KuVKEQUdG+EPd^KZVKf7Hyg^Ar+ZxO^k^OR47SEtu^K^A^Ofx+vAw4ul3fdSsL^iZVif7PsO^Ar+ZxOG+XPd^7xkVOKvIR^i^AVOJvk^u7^uxrUd<mOU$d4>NsLv7Z^O4gcsOvIr+g^1z+DPdvixk^1RVtKv7^7^1pV+xAF^A^u7VuoGUdo+4gSXIBkssL^IZ^IBqexO^7r+gV1E+NPd^txk^1qxtu^I^7^1fx+vOp^A^udxuosUdy+EPd^7Rx7mdHyg^Ay+>vixk^tRBRQ3R^7^AVtJvk^uy+EPdVuVkvAS+^MxkVMftzvuby+9Ix>A^>4IsDZxZc+g^RS+VgC+mI8eh^dRxdmI$y1^AskxgmZ|T7^Av+fL8eh^dZVdfixvd^uxkVgf7|2h^uy+|Hdxu^k^g4tCxOxuG+NHd^AxkVgfhSB^AxkVRKvdR^>^ZVRJvk^Kxk^MB>Y$I^Kxk^MBRrsLboK^MU+2^gv>9+2eDd4>NsLu^>gXQDdlkoVdUk=Vd8kDVdbE8Dd|+=oDd4qrsLKv>gV$Dd$+BdHTt^MZ^MBuXNh^gZ^gBd8Qg^MZ^MBq9Nt^qr+gVRC+mI8eh^ZskxRu^ZR^MVqxRF^+^KskCkx>u9+^M^>fx+vMgs|DdB2+^+vM^+GkRVKE+u^MZ^MBRcoI^>Z^>Bd8Qg^Mek^qqx>v>^qp^+VK2+lVd^Ky+=VdVMMv>4OEQgVqQ+O^Zxk^ZqfL2yIR^MVqxZF^+^Kfq>vRSk^K^qVR2+XVd^Ry+DVdVKzkvM^qu^qeXDdE+lVd^qZ^qBZlyZ^Rr+uVgjkvdRRy+YVdxdA^d4O|Qgxuc+g^AxkVAKmRDTdRVdxuvOp^+^ZskxgO^ZR^qVRxgF^+^KD+YVdxKs+^Ky+DVdVRjkvM4OzvuVRE+lVd^Rxk^KB>Y$I^Rxk^KBRrsLboK^Kbv+s+^Rxk^RBgjvubxk^RB>Y$I418HuskxRmuQsL3eKxRX+l^g^>9+8NDdfdSsLR^RZEr9dQkSVd8kGVd$kSVdUkHVd8kVVd$kHVdUko^d8k$^dz+SPgvqZ^>4Z$E1v>ek^qRV>xMvRp^+^KU+yVdvM$+4A^UIxMA^M4W2TIxqc+u^Ry+jVdxZ^k^RR^ZskxRO4AxEgqxMvR^Rp^+VKRvMEcDd$+4uHUIvZZ^R4FvTIvgr+u^gz+yVdvuxk^gRVdjkvdg4AsEgKvZ^Z^gpV+xqA^q4gTDuxZF^Z^KuVK2PDd=+4ACDIVgMvd4WYTIVuQ+I^dy+GVdVOjkvuR^OxkVd>mAxEgRVgxuvup^+^ZRxZmgXDu^dRxdm7eQg^ZCkxuu^d^Z^ufx+vRp^q^KOxKVPDdp4g^|RxKX+sVd^K$+BZ$DI^ZZ^ZBb9TI^qr+uVuE+HVd^Axk^uqxA^k^ug4ujEgu^Z^q^ufx+vMu^KCv9dv+f1CDI^AZVAf0YTI^Or+dxuG+GVd^7xkVuKvIxk^ugBZ^EgR^A^OVuJvk^qZ^qB>TPL^up^uVKRvMs29d$+4uHUIv7Z^O4FvTIvIr+u^Iz+yVdvtxk^IRV1jkv1g4AsEgKv7^7^IpV+xqA^q4g=PLxIA^I47CQgxq8k^7R^IVqx7F^+^upVuxKi^KDY9dpB>$ER^KD+HVdVKN+vMy+sVd^uskxKmAGd^uz+GVdvRxk^K4ur=ZvRD+VVd^Ky+RvMxk^KRBu8egxk^KgBax7D+C^d^KU+VVdWD+$^dRz+C^dvMy+C^d^qRxqmAN^A^79+xKvI^qu^qTN9dE+VVd^qZ^qBgyQg^1r+gV7E+$^d^uy+$^dVtMvA^t^hxkV7KvJR^q^1V7Jvk^KfRZx7sk^K^7^uOxu=Q9dy+HVd^7Rx7mOEQg^1y+>viy+C^d^Lz+C^dvJZ^L^hVijkviR^iRV7x1vip^+^KaKO^1Sk^KV1xtF^t^uuVulQ9dX+o^d3y+v^dxuF^u^K2kVu>vAD+$^d^uZDD9ds+^Ky+o^dVujkvM4OzvuVuE+EI^uZ^uBu^DZ^tr+gVLE+o^d^hxk^Lqxhu^u^t^Lfx+vtxk^K4Z^vIvtxk^K4dTsLWoK^KD+T^gxR|+lS9d4qrsLKvMgXHldTkc^dekCCu8kV^d8k^^dek2Cuy+sPg^MRxMmg=E1^qCkxZu^M^q^Zfx+vMD+H^d^Kr+x>X+V^d^>y+x^dxKA^K4LXzuxRA^R4I$ehxKA^K4Ivy1xqA^q4O|QgxKc+g^RxkVRKmAs2ZRVqxKvZp^+^>aKO^KSk^>VKxdI^dNUldy+x^dxRA^R4LXzuxKA^K4I$ehxRA^R4Ivy1xKA^K4O|Qgxuc+g^RxkVRKmO|DIRVKxuvZp^+^>aKO^RSk^>VRxZI^ZEold$+BZl^d^RZ^RBuUeh^gZ^gBu=y1^RZ^RBgyQg^gr+gVujkvAR4gsz+KvZ^g^upV+x>4Rg^g=kx>vd^up^uVZRvgs8ld$+4u$^dvOZ^A47eehvqZ^>47Cy1vOZ^A4AlQgvqr+g^uskxuu4g=VgqxAvq^up^+Vghug^>UkVgx>vAp^u^ZOxZEUldy+H^d^>Rx>mL|zu^ORxOmI8eh^>Rx>mI$y1^ORxOmOEQg^>y+>vAxk^uRBu=ELR^O^>VuJvk^gfRZx>sk^g^>^ufxuvgp^Z^ddxdsjldy+V^d^>z+G^dvgZ^Z4i9zuvAZ^u47eehvdZ^g4ANCKvgZ^Z4uX^Avdxk^>4dHChvdB=Sldy+P^dxZ8k^>xk^ZBR$Nu^>D+CCuqE+$Cu^>y+H^dVgMvd4L|zuVZMvg4I8ehVgMvd4OSCKVZMvg4AN^AVg=+vq^g^ZuVZCSldG+H^d^>ZV>fa|zu^gZVgfL8eh^>ZV>ftSCK^dy+^^dxgA^d^g^>dx>Drldy+V^d^ZRxZmuCNu^gRxgmdHyg^dy+>vgy+H^d^uRxumL|zu^7Rx7mI8eh^IRxImOSCK^1z+H^dv1Z^1^IV7MvI4d|HuVujkvgR^uRVgxdvgp^+^>z+H^dvqp^>^Z8kx>O^>D+CCuV>>$TldgXjldB2+^+vq^+GkRV>E+oCu^>xk^>BR$Nu4uQsLbv+O=Gldy+V^dV>jkvq4uCeh7E+oCu^ZZ^ZBR$eh^>1^>Ax7X+oCu^7S+VZE+2Cu^>xk^ZBgjvu^>y+lIVdMvu4IxDZVuQ+O^7y+V^dVIjkvIR^IRVdxuvIp^+^>skxZmgv$I^>skxZmuQsLbeKxZX+E^g^K9+8PldfdSsLR^KZ2VTdQkSCu8kGCu$kSCuUkHCu8kVCu$kHCuUkoeuy+sPgVKMvM4g=E1V>P+vRR^K^>VqJvk^MD+GCuVMC+mA=^d^>Rx>m7GTt^qRxqm7eQg^>Rx>mdrjd^Ry+>vRek^ZxkVqKvgR^>^RVqJvk^MD+sCuVME+HCu^RZ^RBIzzu^qZ^qBdHTt^RZ^RBd8Qg^gZ^gBqcjd^qr+gVZP+vZxk^ZRVRKvd^q^ZpV+xMX+HCu^MS+VMjkv>4gNHtB>$ERy+sCu^qRxqm7eQg^dCkxZu^q^d^Zfx+vZxk^M4gEEdvZxk^M4ZzzgmgCERy+xCuxRA^R47CQgxd8k^AR^RVdxAF^+^ZxkVMf7^xO^ZD+PCuxM6sUTdy+sCuVZ7vg^MgX9Tdbv+Yk^M^+GkqxMG+VCu^Zy+qxMA^M4uyoIxd^k^Z4gQHtxd6Y+B2lTdz+GCuvgi^Z^MZSTTd6Y+vk^MV+yku^My+VCuVZE+u^MZ^MBRcoI^dxk^ZB>xzg^dBY+U+HCuWy+VCu^ZRxZmgjzg^dRxdmOEQg^Zy+>vAxk^uRB1|TdR^d^ZVuJvk^MfRZxZsk^M^Z^AdxAEzTdy+VCu^ZRxZmgNHt^uRxumOEQg^Oy+>vgxk^ZRB1|TdR^u^OVZJvk^MfRZxZTk^M^Z^OfxOvOu^AHzTdU+HCubg$xTdy+PCuxMp^M^ZZVZf1N^A^A2+VAKv77^O$xTdfKv7Z^Z^OVM2+2eu^My+VCuV7E+2eu^1y+VCuVtE+2eu^hZ^tVhxLA^L4AYyZxIc+u^txkVtKuy+VCu^3z+VCuvJZ^3^hVaMvf4OEQgVhQ+O^3xk^3qfuDTdR^aVhx3F^+^JxkVt>v3R^L^IVtJvk^ixk^7V1xiDk^Og^O4xOvO^77^7YrTdN+v>y+Ceu^AskxMmOzvu^Az+=IvOZ^A47jDZv7r+g^1z+sCuv1xk^1RVIKvO^O^1pV+xZ^k^M4go$IxZ^k^M4uEsL32K^MD+N^gVKY+2^Td4qSsLqxKOSGXdTkEeu$kXeuUkyeu8kSeuz+SPgv>Z^M4Z$E1vqek^qRVMx>vRp^+^KU+XeuvMS+^KD+zeuxKG+yeu^>$+BdHTt^qZ^qBuXNh^ZZ^ZBd8Qg^RZ^RBq9Nt^qr+gVZC+mI8eh^gRxgmOSCK^dRxdmOY2Z^uskxZu^uR^RVqxZF^+^KxkV>f79NR^Ky+zeux>G+Neu^gZVgfa|zu^qZVqfiGTt^ZZVZfLDNh^gZVgfieQg^qZVqf7YNt^ur+Zxd=+4I8ehVgMvd4OSCKVZMvg4OY2ZVgjkvuR^gRVqxuvup^+^Kskx>mdVrZ^Kz+EeuvM$+47jTtxgA^g4IUNhxAA^A47CQgxZA^Z4d2Ntxgc+g^d$+BuUeh^AZ^ABgsCK^OZ^OBuCDA^uxk^dqxuu^Z^g^dfx+vqxk^K4gTSOvqy+yeu^Kz+XeuvdZ^g4i9zuvuZ^d4OyTtvdZ^g472NhvuZ^d4OPEgvdZ^g4gvNtvur+g^uv+fL8eh^AZVAftSCK^OZVOfLHUA^AxkVuKvOR^g^dVuJvk^>xk^KBq=eA^>y+yeuVdMvu4d9NRV>E+Geu^dZ^dBqoSZ^u5^>VuxKi^KDrXdy+zeux>A^>4dESOxdG+yeu^uZVuf7$eA^>5Vdx>vOp^A^KU+NeuvMS+^>y+reuxd^k^>4ONvuxdG+lI^dZVdfLxDZ^ur+ZxOG+yeu^AxkVOKvOR^d^uVOJvk^Kxk^>B>Y$I^Kxk^>BRrsLboK^>U+E^gvM9+XcXd4>NsLu^KgNv|dlkGeu6VPXd$+4u$^dv>Z^M41rz1vqr+u^dv+fL8eh^qZVqftSCK^ZxkVdKvgxk^dgBKVN+R^M^>VdJvk^KS+^KskxKmOzvubskxKmgv$I4h9QZ^k^K4uEsLi2K^Kglv|dbv+Yk^K^+GkqxKs+^Ky+RVZMvg4OxVkVqMvR4OEQgVRQ+O^Zxk^ZqfpoVdR^qVRxZF^+^>fq>vZSk^>^RVZjkvM4OzvuVZE+u^ZZ^ZBd8Qg^Rek^AqxZvZ^Ap^+V>jkvM4gv$IV>jkvM4uQsLpVkvMBY+skU+N^gvM9+D$|d4>NsLu^KgVQ|dlkVeuUk$ou8k2oubC=|d=+47GTtV>Q+O^Rxk^RqfU+X^grk^>VRxM8k^>R9+VMx>F^+^KS+VKjkvM4OzvupjkvM4gv$IBtzQZxk^K4dTsLboK^KgjQ|da9+vk^K^+jkKvMy+R^MRxMmuroI^RRxRmOEQg^My+>vqxk^>RBt2VdR^R^MV>Jvk^KfRZxMsk^K^M^>U+Couvqy+R^>Rx>muroI^KU+oouvMy+$ou^KSkxKvqu^>CE|dz+oouvMZ^K4u$yZv>r+u^ZskxZuRy+2ouVuMvA4OEQgVqQ+O^Axk^AqfuDTdR^uVqxAF^+^gxkVZ>vdR^K^MVZJvk^>D+2ouV>N+v>y+$ou^>skxMmOzvu^>z+oouvqxk^M4Z^vIvqxk^M4dTsLWoK^MB2+SkX+G^g^K9+rN|dfdSsLR^KZEoEdQkXou8kEou$kXouUkyouByS|dv+fiGTt^>r+ZxR^k^RR42+Tc7ck^>^R^MCkx>u9+^M^>fx+vMS+^KxkVKftzvubxkVKfOv$I4JXQZjkvM4uQsLJVkvMgXoEdB2+^+vM^+GkRVKE+u^MZ^MBRcoI^qZ^qBgyQg^Mr+gV>jkvqR4aj=kKvR^M^>pV+xKX+Eou^Ky+|oux>4Rg^Krkx>vM^MD+NouVME+u^MZ^MBRcoI^>Z^>Bd8Qg^gek^Mqx>vd^Mp^+VK2+Gou^Ky+NouVKzkvM^Mu^M9V|dE+Gou^MZ^MBZlyZ^Rr+uVZjkvgRRxkVZ>GIR^M^RVZJvk^KD+youVK>sCEdy+you^RRxRmA=yZ^Zy+Rvdxk^gRqE+you^dvK^dYqxu^k^gg^uqxRvg^gp^+VK2+Gou^KS+^Zz+XouvMxk^Z4A|vuvMy+you^KskxZmgv$I^KskxZmuQsLbeKxZ6Y+skD+c^gxK|+lvEd4qrsLKvMgEjEdTkxouekovu8kCvu8kevuao=Ed$+4AY^dxMA^M4AlygxqA^q4gPz+xRA^R4iDyLxMc+g^>xkV>KOR^R^MV>Jvk^KS+^MskxMmOzvubskxMmgv$I4h9QZ^k^M4uEsLi2K^MgDjEdbv+Yk^K^+GkqxK=+4dTMV>Mvq4g$|AVKQ+I^gy+RVqMvR4uroIVdMvu4OEQgVqQ+O^uxk^uqf0YxgR^dVqxuF^+^ZxkVgKvgy+R^ZRxZmuroI^ARxAmOEQg^Zy+>v7xk^ORBLsstR^A^ZVOJvk^qxk^gZxqu^>^K^gfx+v>D+Vou^Mz+souv>fRgVKNkv>^K^qD+^ouxqG+R^KZVKfIroI^qZVqfieQg^gekVZKvR^g^ZpV+xMX+ovu^My+^ouxKI^KSzEdy+evuxMA^M4AYyZxZc+u^gxkVgKuy+Vou^uoKxulq^Oxk^gZxOu^M^Z^gfx+vMD+ovu^KZXrEdG+ovu^ZZVZf1=yZ^gr+dxu^k^uRRskxuOyIR^ZVgxuF^+^KD+evuxKs+^Ky+CvuVgjkvM4OzvuVgE+2vu^gxk^KB>Y$I^gxk^KBRrsLboK^Kbv+VkD+H^g^KD+$GEdmqSsLRVK>DDQdTkDvu8k9vuekNvuS+^KxkVKfOjyL4qrsLjkvM4dxl+BkssLD+lvu^KbXHEdG+lvu^>$+BZl^d^KZ^KBZQyg^MZ^MB>oy+^KZ^KB7|yL^RZ^RBqzHu^Kxk^>B>xyL^Kg$^Edbv+Yk^K^+GkqxKG+lvu^Ky+qxqA^q47CQgxR8k^AR^qVRxAF^+^MzkBR^yu^M^>xkVKfOjyL^>B2+aCoQdy+lvu^Kv+f1=^d^MZVMf1Tyg^>ZV>fOVz+^ZZVZffXcI^>ZV>f7|Hu^MxkVKf7xl+^MgT$Qda9+vk^K^+jkKvMy+lvu^Kz+Kv>Z^M4OPEgvgek^RRVMxZvZp^+^>NkfIxyu^>^RskxKmdxl+^Rbv+G+lvu^>ZV>fOjyL^Ks+VKfh^V+^>7V>S2QdG+lvu^RZVRf7xl+^Ks+VKfh^V+^ZpVZx>X+Xvu^>S+V>E+Nvu^Rxk^>Bgjvu^Ry+lIVgMvd4IxDZVKQ+O^Zy+lvuVdjkvgR^dRVgxKvgp^+^Rskx>mgv$I^Rskx>muQsLbeKx>X+V^g^K9+PDQdfdSsLR^KZV2NdQkGvu8ksvu$kGvu|+HVQd4qrsLRvMD+Hvu^Kr+xK^k^K4ONvu3s+^Mxk^KB>Y$I^Mxk^KBRrsLbD+svuVKaCHQdy+svu^KRxKmgv$I^Mz+Gvuvq$+4AY^dxqA^q4d2cIxRA^R4IsDZxq$K^>^q47jDZvMxk^M4R$NhvMy+svu^KRxKmgv$I^Mv+f1=^d^>ZV>f7YcI^qZVqfLxDZ^>ZV>fieQg^qekVRKvq^q^RpV+xK^k^M4dDT7xKG+svu^MZVMfOv$I^KZVKfA=Nh^MjkVMxKI^KorQdy+cvuxM^k^M4ONvuiG+svu^KZVKfOv$I^My+xvuxR=+4A=^dVZMvg4dGztVdHkvZ^d4djztxK^k^M4ZPoIxKG+svu^KZVKfOv$I^M$+BZl^d^ZZ^ZBqHzt^RZ^RBd8Qg^Kek^gqxRvM^gp^+Vqjkv>4d8eIVqE+Vvu^KZ^KB>Y$I^MZ^MBMovI^djk^dVKRvMGxQdy+svuVqjkvR4OzvuJ>GVQdBY+vkVqx+HkR^qy+cvuxKG+R^MZVMfieQg^qekVZKv>^q^ZpV+xg^k^K4go$IxgG+svu^KxkVKfIQsL3B2+>D$NdGk2$u^Kjk$$uv>y+2$u^KRxKm7eQg^qCkxgu^K^q^gfx+v>$+4uT2ZxRA^R47CQgxZ8k^gR^RVZxgF^+^qZVqft=81^Zr+dxdo+4uX2ZBK9Ug^uxk^dqxuG+=$u^uxkVd>vAR^q^ZVdJvk^>Uk^MV>xg2K^gy+svuVqE+EI^KZ^KBu^DZ^Zr+gVgE+Vvu^uZ^uB>Y$I^Axk^gqxAu^K^Z^gfx+vuxk^q4Z^vIvuy+svu^qeKxqX+CCd^K9+cYNdfdSsLR^MZSVNdQkl$u8kX$u$kl$us+^KD+X$uVKE+N$u^K$+4u$^dv>Z^M4OjUuvqxk^K4qsQdvqy+X$u^KskxKmREou4>NsL=+4A=^dV>Mvq47xUuVqMvR4dezOV>Mvq4OEQgVMQ+O^Rxk^RqfL2yIR^>VMxRF^+^Kfq>v>Sk^K^MVZdvgSENd$+4u$^dv>Z^M4OjUuvZZ^R4gPNOvRZ^q4AlQgv>r+g^RskxRu4IHGuqxqv>^Rp^+VKhug^MSkVKxMvZp^R^ZOxZyNNd$+4AY^dxKA^K47sUuxMA^M47XzgxKV+^K4uzxLxRF^R^Z7VZ2yNd=+4A=^dVMMv>47xUuVKMvM47|zgVMS+v>4A8=hVRJvZ^Z7^ZvSNdC+mA=^d^MRxMm7xUu^KRxKm7|zg^Mc+xMmuUQA^RfxRvg7^ZVjNdv+f1=^d^KZVKfixUu^MZVMf7EcA^K|kVKfdSsL^gpVgxZX+E$u^Zy+|$uxKI^KyxNdy+T$uxM=+47XlOVRMvZ4Jxl7VZMvg4IGouVRMvZ4A=yZVgQ+I^dxk^dqK^k^dgCzRqxRvd^dp^+VKjkv>4REouVKN+vMy+E$u^gskxKmOzvu^gz+=IvgZ^Z47jDZvOr+g^gz+D$uvuxk^gRVdKvg^A^gpV+xM^k^K4go$IxM^k^K4uEsL32K^KD+oCdVMY+S^Nd4qSsLqxKOlSzdTkC8u$kV$uUk$8u8k28u$k$8uUkD8u8kl8u$kD8uX+o8uby+dxK=+4A=^dV>Mvq47xUuVRMvZ4J^tV>dvqEozdek^ZfxZvq=+^K^>VqMvR4uSEgVKQ+I^>xk^>qK^k^>gtqxqvM^>p^+VM2+=8u^Mr+gVKjkvMR4IxGu2+D8u^Ky+C+VME+=8u^>=+^MV>xKX+=8u^KB||zdPkGQzdy+=8u^MRxMmR$SO^>CkxZu^M^>^Zfx+vMy+=8u^ZRxZmRP9A^RCkxgu^Z^R^gfx+vqD+D8u^>Rx>mdsPd^gSkxgvqu^>l|zdz+28uvqZ^>4dx1vZD+l8u^Rv+fOzr+^>r+ZxRG+l8u^dxkVRKvurk^>^RVg2+N8u^gy+28uVdMvu478C+VRQ+O^gy+X8uVAMvO4dezOVujkvdR^uRVdxRvdp^+^>Ox>C|zdy+X8u^RRxRmdEcA^AXkxAmqSsL^RfxRvqu^>=|zdU+V$ubglYzdgzQzdaGQzdvk^R^+jkKvZy+=8u^RRxRmRTy1^uy+>vOy+R^gskxAu^gR^RVuxAF^+^>B2+Pk9+y+=8u^gRxgmRNDt^uCkxOu^g^u^Ofx+vqokBY+r+xuG+o8u^>xkVuftzvu^>y+9IxOA^O4IsDZxAc+g^7y+v8uxt^k^7R^tqxOvO^7p^+V>jkvA4gv$IV>jkvA4uQsLpVkvAD+$Cd^KD+CjzdmqSsLRV>>SlydTkH8u8kP8uek$2u8ko2uS+VKN+v>xk^M4qjDAmI8OxkVMfuGU1bxkVMfu^cA4qrsLjkvM4gXCZVMN+v>xk^M4qjDAmtTELxkVMfuGU1bxkVMfu^cA4qrsLjkvM4gxiVMN+vqxk^>4qjDAmI24xkV>fuGU1bxkV>fu^cA4qrsLjkvM4gUDIV>2+o2u^KD+C2upE+o2u^KJ^KVqMvR4AN^AVKo+vMR^R7VR=UydFR^RZVqxRv>D+o2u^Mbs$ydG+V8u^>y+e2uxgA^>^g^Zv+fbEQu^dZVdfLDNh^gZVgfJT|R^ur+ZxdG+V8u^Ay+e2uxOA^A^O^7Rx7mRxDA^Askxdu^AR^gVuxdF^+^>xkVZfu^cA^>y+P8ux>G+o2u^AZV>xAvuxk^d4qyU1bD+C2u3ZX=yd6Y+vk^ZV+yku^Zy+V8uV>E+22u^ZZ^>VZxdG+R^uZVufieQg^OekVZKvA^O^ZpV+x>^k^d4RVcAx>G+V8u^>y+e2uxZA^>^Z^dskxdmRGU1bbv+Dk^Rg^R4xRvM^Z7^Zv^zdN+vMy+C2u^>skxKmOzvu^>z+=Iv>Z^M47jDZvqr+g^Rz+s8uvgxk^RRVZKv>^>^RpV+xq^k^K4go$Ixq^k^K4uEsL32K^KD+2CdV>Y+XTyd4qSsLqxKOXErdTkD2u$k=2uUkX2u8kE2ur+xK^k^K4gol13^k^K4glGd3^k^K4gDUg3^k^K4gvlh3X+l2u^KBYzydE+E2u^Mw4mG8umqSsL^>Rx>mdPsO^Zy+>vR$+4I$ehxRA^R4Ivy1xg^k^qR^gqx>vg^qp^+VKzkvM^Rjk^RVKjkv>4gvl1VK>NrydBY+vkVKx+HkR^Ky+92uxKG+R^qZVqfieQg^RekVgKvR^R^gpV+xM^k^K4gol1xM6Y+B2cydz+=2uvMw4JXXdfdSsL^RZVRf7PsO^dr+ZxZ=+4I8ehVgMvd4I$y1VujkvgR^uRVRxdvgp^+^MSkxMvgjk^Z^MskxKmgTGd^MZ=xyd6Y+vk^KV+yku^Ky+l2uVKE+u^uZ^uBd8Qg^gek^dqxuvd^dp^+VMjkvM4gTGdVMa9+B=^ydy+92uxK=+4I8ehVgMvd4I$y1VZMvg4OEQgVgQ+O^dxk^dqfhPCdR^ZVgxdF^+^Mfq>vd5^M^gVdzkvu^Mjk^MVgjkvM4g9UgVg>NerdBY+vkVKx+HkR^Ky+92uxKG+R^gZVgfieQg^dekVAKvd^d^ApV+xM^k^K4gDUgxM6Y+BD8rdz+=2uvu$+4I$ehxMA^M4Ivy1xAA^A4O|QgxMc+g^OxkVOKmJj=7RVAxMv7p^+^KaKO^M5^KVMxOxk^O^KjkVKxM^k^d4gvlhxMOEYrdBY+okxOvkGkR^Oz+=2uvMy+R^dRxdm7eQg^OCkxIu^d^O^Ifx+v>xk^K4ZClhv>BY+D+T2u3G+l2u^OJVOx7A^74AQ^AxMD+^MR^IOxIlTrdpR^IRx7v1^KD+E2uVKE+E2u^Oy+E2uVtMv7^t^i$kVixOV+^O4O9cRxtI^tolrdy+92ux1G+E2u^LZV1xLv7s+^O3V1Jvt^tu^tQlrd2+N2u3g=Trd8kxIO^IF^IVMxOi^O2UrdS+VME+N2u^Kxk^MBgjvu^Ky+lIVOMv74IxDZV7Q+O^Iy+l2uVtjkv1R^tRVOx7v1p^+^KskxMmgv$I^KskxMmuQsLbeKxMX+=Cd^K9+8QrdfdSsLR^>ZSHSdQkoYu8k$Yu$koYuUk=Yu8kDYu$k=Yu=+4A=^dVM1m7lQ+^MV>zkvq^Kjk^KVM2+=Yu^M$+4u$^dvMh47$VuxKvRjk^q^KSkxKv>D+2Yu^Mv+fL8eh^MZVMfL$y1^>ZV>ftEQg^Mr+Zxq^k^qR4gUc7u^>^M^qfx+vMfRgVq6vM^q^RD+YYuxRs+^Ky+$YuVMjkvM4ZxELVME+=Yu^Mu^MecrdC+m7lQ+^MvkxMvgp^Z^qZ=crdF4Z=ThVqjkvM4ZDSZVqE+=Yu^Mu^MQHrdE+EI^dZ^dBu^DZ^Rr+gVZC+mA=^d^gRxgm7lQ+^AskxZu^AR^dVRxZF^+^MpVMxqOHHrdp4R$ThvRxk^K4RyUOvRy+$Yu^MdxMSeSd$+4A^UIxZA^Z4dl|+xgc+g^u$+BZl^d^OZ^OBdEQ+^Axk^uqxAu^Z^g^ufx+vZZ^R4g2GtvOr+g^gskxgu4RQGLqxRvO^gp^+VMJv>^qgHeSdffA=Th^qxkVKfAxUt^qy+vYuxMI^MN2Sd$+BZ$DI^AZ^ABJrjt^ur+gVOC+mA=^d^7Rx7m7lQ+^IskxOu^IR^AVuxOF^+^qZVqf7DGt^ur+ZxO^k^OR4qTGLu^q^u^Ofx+v>p^M^gZG2SdF4Z=ThVgjkvM4g2VAVgE+DYu^Mxk^KBMHeu^My+2YuVMRv>CUSd$+4OeVuv>$k^M^gfxgv1gDUSdpBMlTh^Ixk^KBMs=k^Iy+2YuVMRv>ElSdy+lIVuMvA4IxDZVOQ+O^1$+4u$^dvLZ^i4OeVuvIxk^1RV7KvA^O^1pV+xMF^M^ggclSdJmZ=Th^gskxKmZEo1^gz+oYuv>u^MEQSdv+f1CDI^OZVOf7T|+^1r+ZxM=+4A=^dVtMvi478VuVhjkv>R^hRVOx1v>p^+^7Rx7mdDGt^My+>vtxk^1RBKrGLR^7^MV1Jvk^Ip^IVg>VQSdp4ZYThxg^k^K4Z9rLxgG+2Yu^MuVMlSSd=+4ACDIVgMvd4pQjtVtQ+O^L$+4u$^dvLZ^i4OeVuvJxk^LRVhKvd^t^LpV+xMA^M4dUGtxtc+g^ixkViKmRQGLRVMxtvLp^+^IfxIvtgsSSdpBMlTh^1xk^KB>=zI^1y+=YuVIjkvM4gE$dVI2+XYu^Ky+=YuVIzkv1^1u^1TcSdE+=Yu^K7^KYcSdE+DYu^Ip^IVKJvM^1D+lYuV1N+vMy+lYu^IskxKmOzvu^Iz+=IvtZ^147jDZvir+g^iz+2Yuvhxk^iRVLKvt^t^ipV+xI^k^K4go$IxI^k^K4uEsL32K^KD+DCdV>Y+SPSd4qSsLqxKOoGjdTk$=u$ko=uUk==u8kD=u$k==uUkX=u8kE=ur+xKs+^qxk^KBRXPd^qxk^KBRoydRD+2=uVK<mnE04>NsLvMD+==u^K~fY+NrR4qrsLx>X+D=u^>D+9=uK=+4ACDIVKMvM4dT|+VRQ+O^q$+4u$^dvqxk^qRV>KvM^R^qpV+xMX+X=u^My+9=uxMG+X=u^>ZV>f1N^A^ql+VMxqvqu^>=yjdz+D=uv>y+l=u^ZRxMvg^>D+E=uV>C+mA=^d^Mz+l=uvRZ^M^qV>Ckvq^Rs+^RBdTXu^>u^>UzjdE+l=u^MZ^MBqexO^qr+gVRC+mA=^d^Zz+l=uvuZ^Z^dV7MvI47eQgVZP+vAR^7^ZVuJvk^gxk^Rqxgu^M^q^Rfx+vq7^>lTjdz+2=uvZZ^R4gcsOvgr+g^gv+f1=^d^uy+|=uxOA^u^O^ARxAm7eQg^OCkxuu^A^O^ufx+vuxk^gRVdKvZ^Z^gpV+xqF^q^>uV>2zjdG+2=u^qZVqfIDPd^Zy+|=uxg=+4A=^dVdE+y=u^OZ^dVOxuA^u47CQgxd8k^OR^uVdxOF^+^>ZV>f1=yZ^dr+dxI^k^IRRskxIOEAR^>VdxIF^+^qxkVZxgvRy+2=u^qRxqmuVzd^gfxgvR2k^ggVgE+D=u^dxk^dBRoyd^gy+l=uVZJvg^d2k^ZZxZX+l=u^ZgYvjdN+vRy+2=u^ZRxZmuVzd^g=+xgu^Zxk^qBgjvu^Zy+lIVdMvu4IxDZVgQ+O^Iy+2=uVOjkv1R^ORVdxgv1p^+^Zskxqmgv$I^ZskxqmuQsLbeKxqX+lCd^K9+cGjdfdSsLR^>Z2YGdQkH=u8kV=u$kH=uUkoUu8k$Uu$koUuo+4AUsIBkssL^>Z^>BqexO^Kr+gVqC+mI8eh^ZRxZmI$y1^Rskxqu^RR^>VKxqF^+^MD+P=uxM=+4I8ehVKMvM4hsGOVqj+vRR^KD+^=uxKX+oUubBz^jdC+m7XlO^MRxMmtrq^qy+>vgxk^ZRBAxr7R^M^qVZJvk^KD+oUuJ>XCGdBY+vkVKx+HkR^KD+eUu36Y+y+V=uVKRvM2eGdy+CUuVqJvR^Ku^KPeGdE+2Uu^qjk^qVRJvZ^KD+$UuVKN+vMy+V=u^qskxKmgUcR^qz+H=uvRxk^K4ZVyRvRy+oUu^ZskxKmZj2u^ZU+oUuvMS+^Ky+vUuxq^k^K4ONvuxqG+lI^RZVRfLxDZ^Zr+ZxgG+2Uu^dxkVgKvuR^R^ZVgJvk^qxk^KB>Y$I^qxk^KBRrsLboK^KU+DCdvq9+o=Gd4>NsLu^KgGlcdlklUuUkNUu8kyUu$kNUu|+CSGd4qrsLRv>D+SUu^Mr+xK^k^K4ONvu3^k^K4go$IfdSsLxk^KBRrsLbD+NUuVKN+vMxk^K4RC=ImqSsLxkVKfAor14qrsL2+GUu^KBHzGdz+EUuvM$+4AS=gx>A^>4IUNhxqA^q47CQgxRA^R4d2NtxZc+g^>$+BZ$DI^gZ^gBb9TI^dr+uVuC+m7XlO^Askxuu^Axk^uZfarPZR^gVdxuF^+^qZVqfI^1^dxkV>KvuR^R^ZV>Jvk^Mxk^KBM==I^My+yUuVdE+SUu^KZ^KB>Y$I^>zk4t99Lvq^Kxk^dBM==I^Ky+NUuVMjkv>4uQsLJ>HrGdBY+vkV>x+HkR^>y+zUuxKG+SUu^qy+qxM$K^q^M4d29Lvqxk^K4RC=IvqBY+gv^GdykCDu^KGkVUuVMek$Duy+HUu^MRxMmuroI^>Rx>mOEQg^My+>vgy+VUu^gskxZu^gR^>VMxZF^+^KD+^UuxKG+CDu^Kfq>v>Uk^K^MVqRvRHxGdy+HUuVRMvZ4uroIVZMvg4A=yZVMQ+I^qxk^qqK^k^qgyIqxZv>^qp^+VKVkvMgo^Gdy+QUuxK^k^K4ONvuiG+HUu^MZVMfIroI^qZVqf1=yZ^Rr+dxM^k^MRRz+HUuvAvK^u=qVdjkv>g^dRVqxRv>p^+^KeKxKVkBV2cdy+zUuxK=+4Aj=gVMMv>4IDNhV>Mvq47eQgVMMv>4dYNtV>Q+O^d$+4uHUIvOZ^A4FvTIvRr+u^Ov+f3Ql1^7xkVOKvIxk^OgBATNuR^A^qVOJvk^uZ^uB>NDu^qxk^dqxqu^M^>^dfx+vgxk^K4RVy1vgy+yUu^Kz+XUuvqZ^>4Z^vIvRzk4iX9Lxqvqxk^K4RVy1vqy+NUu^KskxKmuQsL3ZS=cd6Y+vk^>V+yku^>y+yUuV>E+sUu^Zy+RVqHkvg^q4uU9LxK^k^>4Zer1xK6Y+y+NUuVKMvM4uQsLVqRvR=Dcdy+NUuVKjkvM4OzvupE+SUu^Ky+lIVqMvR4IxDZVZQ+O^dy+yUuVOjkvuR^ORVqxZvup^+^>skxKmgv$I^>z+XUuvMoK^KD+|CdxK|+ETcd4qrsLKvMgVHcdTkUDuekEDu8kXDuy+cPgxMA^M4gYE1x>8k^qR^MV>xqF^+^KD+9DuxKs+^>xk^>BgjvubS+^Kskx>mgv$I^Kskx>muQsLbU+DDuvqBGjcdy+TDuxKA^K4go$Ix>=+4A=^dVKMvM4ATygVqCkvR^Kxk^>B>GUk^Ky+XDuVKMvM4gv$IV>E+EDu^qZ^qBIzzu^KZ^KBZQyg^q$k^qVRjkvq4gx$gVRE+NDu^KZ^KB>Y$I^>Z^>B>GUk^Ky+XDuV>Mvq4gv$IVqMvR4gx$gV>6vM^>^quVqEjcdG+XDu^KxkVKftzvu3gPccda9+vk^K^+jkKvMy+XDu^KskxKmuQsL3z+DDuvqy+R^KRxKmuroI^qskx>mgv$I^qbv+G+XDu^Ky+9IxRA^R4IsDZxZc+g^qy+TDuxgA^g4go$Ixu^k^qR^uqxRvg^qp^+V>jkvM4gv$IV>E+NDu^>oK^>U+XCdvM9+SPcd4>NsLu^KgVDE+lkNDuUkGDu8ksDu$kGDuUkVDu8kC9u$kVDuUk$9u$+4ODlOvMZ^K4iQPZvqr+g^qskxqu4AoyZqxKvq^qp^+VM2+HDu^MD+sDupN+vqD+HDu^>v+fiGTt^Mr+Axq^k^qR4qUy1^k^qg4qyU1^k^qu4illLck^M^q^>U+sDuvqD+C9uRy+gv>xk^MRBZSvhxk^MgBuUsLxk^MuBJHQ7D+o9u^Mz+HDuv>y+o9u^RRxRmAN^A^q9+xMvR^>u^>jYE+E+29u^My+C9uVqMv>^q^>D+v9ux>G+HDu^>y+v9uxMA^MR^qr+xd^k^d4RPGAfdSsLxk^dBK2SZ4qSsLskx>vR^dy+VDuV>E+HDu^R$+47eehvRy+$9u^gRxqvd^ZCK^>VRxZv>y+HDu^Mz+C9uvdZ^gRVqMv>^q^>y+jDuxqA^q4AsEgxRA^R47CQgxq8k^dR^RVqxdF^+^MxkV>fuoSZ^My+xDuxMG+$9u^ZZVZKvdZ^M^gVqC+mI8eh^>z+C9uvdZ^>^gVZMvg47eQgV>P+vOR^Z^>VA>EvoMD+CNR^>z+HQRvZy+sQR^KaxRvM^KD+CNRVKE+VQR^Ky+HQRV>hvM^>^>D+cQRx>G+CNR^KpVKx>4^Kg^KU+HQRvMy+sQR^KTkxKp^>y+sQRVqs+vRVGGK^R6VRJvRE+^>^qVKs+vMVGGK^>D+cQRx>G+oNR^>ZV>ft|sI^Kr+ZxR=+4Aj=gVdMvu4iGlOVuQ+O^gy+CNRVAs+vOVGGK^OxkVgKv7R^d^uVgJvk^Zxk^RqxZu^>^K^Rfx+vRy+$NR^Kf>vZf^K^RVR2+=NR^Rg2U2Kz+VQRvRZ^q4g2GtvZr+g^ZskxZu4qSsLqxqvZ^Zp^+VKVkvMxk^KuV>2+XER^Ky+DERV>E+DER^qZ^>VqxRc+g^qy+YERxZ^k^qR^Zqx>vZ^qp^+VKVkvM9+sHsd4>NsLu^RgCYxdv+fJ9xI^M$kVMxKzk^K4ISKxMI^MGVsd$+BO|xI^>Z^>B>ExO^Kp^KVMRv>Dexd$+41YxIv>Z^M4Z=xOvqZ^>4gQjdv>r+g^qv+fJ9xI^gxkVqKvdR^>^MVqJvk^KoK^Kv+f7X=I^MZVMfOlxO^KuVKX$xd=+4dX=IVMMv>4glxOVqMvR4drjdVMQ+O^R$+4gD=Ivgxk^RRVZKvR^M^RpV+xK2K^K9+$8xdBkssLR^Kgx2xdC+mdX=I^MCkxqck^M^q^KRxKmO9R^MCkxqu^K^M^qfx+vqoK^>oKVKP+vMR9+^RVKJvk^MD+sx>VMY+X=xd4qSsLdxKODsxdTkGNRjkSNRvMGkHNR^M$ksNRUkCzRy+sNRVKMvM4AN^AVZS+vgR^MuVM$9xd7^KZ^KBgG|t^>ek^qqxKvq^qp^+VMVkv>d^>r+ZxR|+$lxd4qrsL>v>glTxdGkYzRxK=+41v3V>E+lzR^Ky+HNRVqHkvq^K^q^RckjkvZR^MrkV>xRvRD+VNR^qz+SNRvqZ^>4ZPouvRr+g^ZD+=|xdmqSsLgVd>GzxdGkXzR^Kz+DzRvqZ^>4gEcAvRr+g^RD+GExdmqSsLRVZ>oQxdskxk^RqxZu^>^q^Rfx+vMZ^K4dDc1vRr+g^RD+yNxdmqSsLRVZ>VNxdskxk^RqxZu^K^q^Rfx+v>oK^MxkVZKvuR^>^qVZJvk^MD+CzRVMqvgZ^Z4g^xOvZr+g^gy+Rvuy+VNR^uskxdu^ud^uRxumgCoO^Oy+>vIy+CzR^Iskx7u^IR^uVOx7F^+^AxkVd>vOxk^gRVdKvg^R^gpV+xqA^q4dzcAxgc+g^R9+TcxdfdSsLR^dZlcxdVkxk^RRVdKvR^g^RpV+xM2K^MD+Hx>VK>2|HdGkHzR^K$kszRUkCyR8koyR$kCyRG+HzR^MZVMfOSsk^>ZV>fiXlO^MZVMfarPZ^qr+Zx>^k^>R4u^ERu^M^q^>fx+vMD+CyR^Kz+HzRvRZ^q4IQ|uvqr+g^ZskxZu4AjNOqxqvq^Zp^+VKdvMDeHdy+CyRVRMvZ41r|uVZQ+O^gxk^gqfFraR^RVZxgF^+^>pV>xKi^K=vHdy+^zRxgA^g41y|uxZc+g^dxkVdKmur9+RVgxZvup^+^>fx>vM7^K28Hdz+HzRvuZ^d4IQ|uvqr+g^uskxuu4fzNhqxdvq^up^+VZJvg^K7^KvYHdE+$yR^ZZ^ZBAc|u^ur+gVAjkvOR4IjCuKvg^u^ApV+x>F^>^KD+eyRxKG+oyR^Ks+VKv+vA7^uG=Hdz+VzRvMp9+^>=kxKvq^Ap^AVuRvAXUHdp9+VAJvO^Kg29Hdz+VzRvAZ^u4tTT7v7r+g^AskxAu46QOqxuv7^Ap^+V>Jvq^KD+VzRVK9kvMY+^>uV>ElHdG+VzR^KpD+xAC+^K^A^OfxOvqu^>DTHdz+szRvqp^>^KZlTHdFY+^KD+vyRxKs+^Ky+oyRV7jkvM4gVD+V7E+=yR^>xk^KB>$|I^>oK^KPkfuGcu4RjcuxMX+CH>^MgezHdyksyR^KGkGyRVMC+mdTM^MRxMmuVd^>y+>vRy+GyR^Rz+NyRvgyk^R^ZVgvkvd=q^ZxkVqKvgR^M^>VqJvk^K^k^KYqx>2K^>y+Vx>VME+$H>^R=+^MVRxKX+$H>^KgPCPdykVyR^KS+^Kz+SyRvRZ^q4ZNskvqZ^>4uHUIvZZ^R4gU|+vRr+g^Zz+SyRvqZ^>4ZNskvdxk^ZRVgKvZ^q^ZpV+xM^k^K4g^BxMG+syR^>ZV>fO=E1^qZVqf1CDI^>ZV>f7T|+^qr+ZxZG+syR^gZVgfO=E1^dxkVZKvuR^>^qVZJvk^Mxk^KB>=j+^My+syRVqMvR4gSskVZMvg4ACDIVgMvd4pQjtVZQ+O^dy+syRVuMvA4gSskVqjkvuR^qRVgxZvup^+^MskxKmgXsL^Mz+SyRvRZ^q4Z$E1vOZ^A4uHUIvRZ^q4fTjtvgr+g^dz+SyRvAZ^u4Z$E1vOxk^dRVAKvR^Z^dpV+xM^k^K4gSctxM2K^K9+EePdBkssLu^MgY2PdUkorRGkCrR^KjkVyRv>y+orR^Kc+xKmqSsL^MOxMSvPdy+orR^KfY+vqUk^K^>VqJvR^Mu^McvPdSkG+CrR^>ZV>f1zY7^MZVMfJcz1^>r+dxRG+orR^ZxkVRKvgxk^RgBKVN+R^M^>VRJvk^KskD+8H>xMOV9PdGk=rRVKekXrRB$9Pdy+YrRxKA^K4I9ZxMA^M4IUNhx>A^>4pjQ7xMX+DrR^M|kVMv+vMu^KGUPdz+2rRvRp9+^M0xqv>^>p^>VKRvMXDPdy+DrRVKJvM^>gHDPdaKO^Mp^MV>VkvqgG9PdB2+^+vM^+GkRVKVk9+BY+skZo=VdHkNrR^K8kzrReksrR8kGrR8kcrRekCSR8kVrR8k^rRek2SR8k$SR8k8SRE+SrR^KZ^KB>vTu^>D+yrRV>E+SrR^MZ^MB>v91^KD+SrRVKE+SrR^KZ^KB>Sq^MD+GrRVME+SrR^KZ^KB>GTu^MD+srRVME+SrR^KZ^KB>XPt^>D+HrRV>Y+VQPd4qSsLZxKOXGPdTkDSRjk=SRvM8kXSRy+9IxMA^M4ucEkx>c+g^qy+9SRxd^k^qR^dqxMvq^qp^+VK2+NSR^KS+^>z+DSRvMZ^K4dNEgvgr+u^uskxuuRxk^uZ5u^K^Z^ufx+vRxk^>4ZCr1vRy+XSR^ZRxZmuSEg^Ry+>vdfRaVujkvdR^uRVZxRvdp^+^qskx>mgjvi^qeKx>X+VrR^Ky+PrRxMG+yrR^qy+9IxZA^Z4ucEkxgc+g^dy+jrRxA^k^dR^AqxZvd^dp^+VR$+vR^R^>=+VMx>vMD+CSR^Kz+Hc>v>y+CSR^qRxqmg$r1^>z+Ds>vdi^g^qv+f1CDI^RZVRf1=lL^gr+Zxuc+u^Oy+rrRx7^k^OR^7z+SrRvIxk^OgV7Mv74AECAV7Q+O^Iy+HrRVijkv1R^iRVOx7v1p^+^Askxuu^AR^RVgxuF^+^dv+VMx>vR^d^KD+eSRxK8k^dZ^dBZyCA^>r+uVAE+Ss>^qxk^AqxqG+u^gy+^rRxuA^u4gSvix7l+^g^7^qskxAO^qR^dV>xAF^+^MZVMf1ECA^qr+ZxgG+oSR^>xkVgKvqR^M^qVgJvk^KD+$SRVKN+vMxk^K4ZTckmWN^+$+BAYE+^qr+gVgE+=SR^Axk^gqxAck^q^g^>skxKmgs9+^>U+oSRvMy+2SR^KeKxKG+HS>^Ky+PS>xMl+^K^M^>eKx>8k^MR9+VKxMF^+^gD+|Ixg=+41yXkVMCkv>^K|k^KBuxK^Mu^Mj9VdC+m1yXk^ZRxZmA=^d^MfxMvMg=lVd$+BZl^d^Mp^MVK2+SI^Ky+EIVZMvg4gzDAVMQ+I^gy+NIVAjkvdR^AxkVg>mF^wRVZxMvdp^+^Kz+E7v>u^MyEVdz+N7vM$+4uTrgxdA^d4g9xOxg8k^uR^dVgxuF^+^MxkVKfO2rg^My+|IxMA^M4gE9Oxuc+g^AS+VgY+2NVd4qSsLqxOOENVdTkSSRz+s7vMoK^KxkVgfOU$u^O9+TzVdfdSsLR^7ZDc$dQksSR9+$yVdBkssLR^MgcY^+ek$jR8kojR8kvjRekDjR8k=jR8kUjRekEjR8kXjR8k|jRekSjR8kyjR8krjRekHjR8ksjR8kxjRekoGR8kCGR8keGRek=GR8k2GR8kYGRY+2XxK4qSsLdxMX+NjR^M9+jGVdfdSsLg^KU+EjRvM9+E2xK4>NsLO^MD+SjRVM>lc^dGkEGR^K$kXGRUkyGR8kSGR$kyGRUksGRZ^kBZS^A^KU+^KZx>I^>lxVdZVk>vM$+4ISKxMC+^K^M^qfxqvqu^>$HVdRxkO^Zp^ZVM>XHVdpb^MU+XGRv>y+lI^MRxMmIxDZ^>y+>vRy+EGR^Rskxqu^RR^MV>xqF^+^KD+zGRxK=+4IN^kVuE+GGR^O=+^uVOxAA^A4OY81xuc+u^OwB>8=Z4RYUgV7jkv7R^7xkVO>mRzygRVAxuv7p^+^dRxdmO=81^7y+RvAw4gHUtfuYUg^OxkVuKv7xk^ugBK|aR^d^7VuJvk^gZ^gBgl81^ur+uVO<mgsDt4qvUgvIxk^ORV7jkv7g4RouKvd^u^OpV+xZA^Z4OY81xuc+u^OwB>8Pk4RYUgV7jkv7R^7xkVO>mRPNORVZxuv7p^+^RRxRmO=81^uy+Rv7w4gls+fuYUg^7xkVOKvIxk^OgBKVo7R^R^uVOJvk^qZ^qBgl81^ur+uVO<mgoZ4qvUgvIxk^ORV7jkv7g4Rl$+KvR^u^OpV+x>A^>4OY81xuc+u^OwB>zDg4RYUgV7jkv7R^7xkVO>mRPRRV>xuv7p^+^KU+EGRvMy+NjR^Kz+EGRvA~4uj^Af7Cr7^1CKVKxuvt^7D+SGRV7C+mdrrd^Kz+NGRvI=+^K^7Vu2+HGR^u$+4L2UOvMek^IrkVKxIvAD+sGR^uz+SGRvAZ^u4gj$hvIr+O^OskxOu4dU$hskxOO4C+Sehz+XGRvixk^OuVtKvA^7^OpV+xKG+sGR^OZVOfbT~^7r+dxI^k^IR4tsXk^k^Ig45$|gu^O^7^Ifx+vMy+sGR^1Rx1mdNyk^7y+>vLy+lI^tRxtmIxDZ^Ly+>vJS+^Jy+jGRx3^k^J4dGQ+x3^k^hR^Jqxtvh^hp^+VIjkvLR^IRV1x7vLp^+^KckN+vMD+CjR^KU+VSR=4S+^MxkVMfOz2h4gjyOjkv>4gjTuB>NSOxk^M4ZrcumgGcAxkVMfOy8k4gUrujkv>4gxeZB>z4D+$jR^MU+ojRmR$uD+YjRfu9lgS+^Mz+$jRvMvK^K4ZNDAvRxk^M4ZNDAvRy+=jR^>oKx>mg=2g^KskxMmg=2g^Kz+$jRvMvK^K4ZT8kvqxk^M4ZT8kvqy+=jR^>oKx>mgUoO^KskxMmgUoO^Kz+$jRvMvK^K4ZNnvZxk^M4ZNnvZy+=jR^KoKxKmgj87^qskxMmgj87^qz+$jRvMvK^K4ZortvZxk^M4ZortvZy+=jR^KoKxKmgr=L^>skxMmgr=L^>z+$jRvMvK^K4ZXPZvRxk^M4ZXPZvRy+=jR^KoKxKmg=PA^>skxMmg=PA^>z+$jRvMvK^K4ZxPdvRxk^M4ZxPdvRD+DjR^Mr+xKG+DjR^>ZV>fOj87^RxkVKfOSX7^Ry+UjRxMA^M4g8rtx>^k^K4g2>x>X+ljR^KS+VKE+XjR^>Z^>B>c=L^Mxk^KB>Tz1^My+DjRVMMv>4gNPZV>jkvM4g=zOV>E+XjR^qZ^qB>lPA^Mxk^KB>$|t^MD+XjRVKN+vZ9+sTCu4>NsLu^KgDGCulkVGRG+H7^MZVMfO=E1^Z$+BuxK^KUk^ZVKxMI^MESCuy+x7xM=+47XlOV>Mvq4LrPZVqQ+O^Rxk^Rqf1oyZR^>VqxRF^+^KxkVMfO=E1^Ky+x7xKA^K4gYE1xMA^M4uTbxK^k^K4O8^kf7yDky+H7VKMvM4g=E1VMjkv>4g8zdB7NYg$+47TlOxqA^q4dsmxMA^M4tcxuxqc+g^Ry+x7xZA^Z4gYE1xg^k^RR^gqxMvR^Rp^+VKE+yjR^qZ^qB>$|L^Rek^ZqxqvZ^Zp^+VKE+CI^ZZ^ZB>lE1^KoK^KskxRmg=E1^KD+$cCumqSsLRVK>HVCuTk=cRy+x7xMA^M4gvPkxK=+4IjKVM8kvM^M^>uV>sHCuG+H7^>$+BdNlO^MZ^MBIcPZ^qr+gVRjkvZR4AoQRKv>^q^RpV+xK^k^>4gvPkxKG+EjR^>ZV>fOC|L^qekVRKvq^q^RpV+xKG+H7^KZVKfO$Pk^qoKVqjkvZ4g$PkVKY+s^Cu4qSsLqxKOGXeuTkXcR$klcRUkNcRy+H7VKMvM4gYytVqC+mIjK^M=kxqv>^Ku^KPleuE+yjR^MZ^MB>=Pk^Rek^>qxMvZ^>p^+VK2+ycR^Ky+EcRV>Mvq41r|uVqQ+O^Zxk^Zqf1jNOR^>VqxZF^+^K7VKo2euG+EcR^qZVqfhr|u^Rr+Zxd^k^dR4fQau^q^R^dfx+vgp^Z^KOxK==euy+EcR^ZRxZm1r|u^dy+>vdxk^gRBRc9+R^Z^dVgJvk^Rp^RVKdvMoDeuy+EcRVRMvZ41r|uVuQ+O^dxk^dqf4zNhR^RVuxdF^+^gpVgxKi^KCleuy+|cRxuA^u41y|uxAc+g^dxkVdKmIGCuRVuxAvup^+^gfxgvMD+NcR^Kz+G7vdy+NcR^KskxgmgYyt^Kz+ljRvMZ^K4ZHXLvdek^ARVKxgvOp^+^dz+G7vuZ^d4ZvytvdoK^gxkVRfOYyt^K9+r|eufdSsLg^MZD$ouQkCsRGkosRVKek=sR8k2sR8kYsRaleouS+^MS+Vqjkv>4RGU1Vqjkv>4u9Dhq2+=sR^My+osRVKtvM^MZ^MBZS^A^K2+^Kqxqi^qVHeupqxqA^M^q^>U+osRvqy+osR^Zz+osRvdZ^Z^gVRCkvZ^g|k^gBZCyu^Ru^R^yeu>lHeuy+osR^dz+osRvgZ^d^ZVR1muXrL^RVZRvg=Heuy+osRVZE+DsR^dZ^ZVdxRA^R4uTrLxZ=k^Z^R|kVRf1HyR^guVgVjeuO=Heuy+$sRVRMvZ4RGU1VAE+DsR^Zy+osRVgE+DsR^uZ^gVuxRA^R4uTrLxg^k^A^Z^gz+CsRvZZ^R4dYDhvgy+osR^dz+osRv7Z^d^OVgMvd4uXrLVuokvg^u^uxkVRfI9Dh^u2kVq>vRF^q^KVZdvgozeuy+$sRVKMvM4u9DhV>c+vq=q^KD+YsRxKs+^My+=sRVKjkv>4OzvuVKE+EI^qZ^qBu^DZ^>r+gVZE+=sR^Rxk^ZqxRu^q^>^Zfx+vMxk^M4Z^vIvMxk^M4dTsLWoK^MgY$oua9+vk^K^+jkKvMS+^gxkVgftzvuby+qxMA^M47CQgx>8k^RR^MV>xRF^+^KxkVgfOv$I^KxkVgfIQsL3oKVga9+skxk^RB>=1^M9+l8ouBkssLg^KgxcsKUkssRGkGsR^K$kSsRUkHsR8kVsR$kHsRUkoxR8k$xR$koxRUk=xR8kDxR$k=xRUkXxR8kExR$kXxRUkyxR8kSxR$kyxRUksxR8kHxR$ksxRUkCHR8koHR$kCHRUk2HR8k=HR$k2HRUklHR8kXHR$klHR|+Eo$u4qrsL>vMD+2xR^KU+SsRGkD+HsRZTEDCjmxGGGsbX+VsRZG$=sSmVGGG2C+2+$xRZy9XUjm^GGGNHkU+VsRolXlzC+D+$xRoylNv3z+ysRvM$k^K^>c+x>mAVyI^KdxKDTouy+2xR^qz+ysRvq=+^q^>VKJvM^MgNTouz+ysRvqp^>^MU+ysRv>y+GsR^KU+$xRvMy+ssR^Kz+CxRv>e+^K^MVqs+vRZVGGGjm^GGGSGKVK2+XxR^KD+lxRqE+lxR^KZ^KBZS^A^MP+^MnxKI^KsEvur+7xKG+ssR^My+xsRxR8+^M^R^qz+ssRv>e+^q^MV>s+vqZVGGGjm^GGGSGKVqjkvMR^qy+csRxMG+VsR^>e+VMx>vgV+^ZZPGGGjmxGGGSGKvqxk^KgV>E+VsR^MvK^Mqx>ok^>ZVGGGjmVGGGSGKxM^k^Ku^Mz+SsRv>y+HsR^>zkxMvq^qV+^qRsGGGjmvcGGSGK^Mxk^KAxMX+XxR^Ky+jsRxMX+ExR^My+|xRxMA^M4AQ^AxK9+^KC+^MU+XxRv>D+yxRRU+=xRuy+lxR^KP+xKAVGGGjm^GGGGjK^qz+XxRvMck^q^KVMRv>CUvuy+lxRVM2+sxR^My+ExRVKE+sxR^>vK^>qxqA^K^q^Mz+lxRvMy+SxR^RoKxRO^qZ^KVqx>Nk^>a^KC+xMvM^>D+GxRV>E+yxR^Ky+SxRVZ^kvgu^>ZVKx>v>y+ExR^>z+NxRvZvK^ROVZMvq^Z^KXkVKLvqe+^M^>VK2+VxR^Ky+GxRVKE+oxR^MA^KVMxqG+sxR^Ky+PsRxM1^K^M^>Tkx>$+^Re+^qVRxKX+HxR^Ky+TxRxKG+yxR^MZVKxMvqy+HxR^KC+x>vM^MV+^MRsGGGjmvcGGSGK^KD+VxRVKE+oHR^KXk^KmxMG+VxR^>z+V>o+vME+^M^KV>2+oHR^>y+VxRVMs+v>VGGK^KD+^xRxKG+VxR^Mz+VM5vqD+oHR^>z+DxRvMy+yxR^Mz+HxRvqy+HsR^Rux>vZ^qy+oHRV>E+CxR^ZA^>VZxRNk^RC+^>C+xqvq^RV+^RRsGGGjmvcGGSGK^>xk^KVMx>G+yxR^KvKVK>v>V+^MOVK2+GxR^Ky+lxRVKJL^M2k^KVMxMX+lxR^MgxjouE+NxR^KZ^Kqx>Nk^>g^Kz+DxRv>Z^MRV>|+vqV+^ME+VKxMvZy+XxR^KRxKO^MXk^MhxKG+XxR^>ZV>>v>z+^MN+V>l+vM^>^Me+VRxMvMy+XxR^MRxMI^>Xk^>WxMG+XxR^>ZV>RvRz+^q=+VRl+v>^R^qe+VKxqv>y+XxR^qRxqt^>Xk^>v+xKG+XxR^qZVqgvqz+^>5Vql+vM^q^>e+VMx>vMV+^KZPGGGjmxGGGSGKv>D+DxR^Mz+2xRv>y+GsR^KRxKmAN^A^qC+xMvR^KV+^KRsGGGjmvcGGSGK^MD+DxRVME+HsR^KZ^KBZS^A^MY+^M7xKX+$HR^Ky+9xRxMG+$HR^KckVMxKvRu^qye$uz+=xRvMD+2HR^Kz+$xRv>y+2HR^>oKx>u^qZ^MVqxKG+=xR^My+8HRxqYK^qg^RRxMvZ^>Xk^>3xq8+^K^q^MU+$HRv>y+=xR^Kz+oHRvqvK^>uVqMvM^q^My+YxRxKG+2HR^>vKV>gvdZ^K^gVqDkvRa^Ke+VMxKvqD+DHR^>z+$HRvMy+CxR^>uxKvq^My+DHRVqE+$xR^KA^qVKxgNk^gC+^ZC+xMvg^KD+lHRVKE+XxR^My+lHRVK~v>^K^qV+VqMocGGjm^GGGSGK^KD+UxRxKG+DxR^KXkVKwvqy+DxR^KN+xKo+^ME+^>VMxqX+DxR^qy+UxRxRok^RVGGK^Kz+VsRv>A^K^MV>E+XxR^Kz+^KnxMG+oxR^KAVMxKvZXk^RC+VK~vq^K^RV+VRMocGGjm^GGGSGK^MD+UxRxMG+lxR^Mp7xKDk^M^K^KU+=xRvMglzvuy+YxRxKA^K4AQ^Ax>X+XHR^>gcV$uykCPR^K8kVHR$kHHRUkoPR8k$PR$koPRUk=PR8kDPR$k=PR8k^KD+VHRVKC+muQ9g^>Rx>mIDNh^qRxqmdHyg^MRxMmdrjd^>y+>vRy+VHR^Rskxqu^RR^MV>xqF^+^KD+^HRxKG+HHR^KZVKf1N^A^>D+ePRx>=+4Aj=gV>Mvq4IDNhVRMvZ41JVdMvu4drjdV>Q+O^qy+HHRVRjkvRR^RRVdx>vRp^+^KU+CPRvMD+2PRRz+VHRvMD+=PR^Kz+oPRvMy+=PR^>9+xKvq^qu^q|P$uE+=PR^>y+2PRVg$+vq^g^KD+UPRxKG+DPR^K1VKHRvqu^>ST$uz+HHRvMy+DPR^qY+xKvR^>gGH$uz+2PRvM1^KCcKV>RvqDE$uy+CPRVKE+XPR^q6^qixZCKCA^Z^qz+2PRvZV+^RVKVZGk$Z^Z^RCKVKxqvZ^>gGH$uz+2PRvM1^KCc$KV>dvqNQ$uy+DPRVKc+vMCc=K^qpVqx>I^>Gy$uy+^HRxKG+DPR^>6V>BvZHkC7^RV>E+XPR^R6^RixZok^ZVK^AxkHRvO^Ry+DPRVZs+vgVK^gHk^Rxgvgv+^K^>VRxZvRgGH$uy+UPRxKok^KVG+^>Tkx>6^Ky+$PRV>E+DPR^Z2k^ZZxZX+2PR^Z=+V>xZvRV+^qVG+V>l+vM^>^qzk^GGKxqvqD+lPR^>z+HHRvMr+I^>z+=PRvR6^q$+Vgs+vdJ^qHk^7xqvgxk^>RVZE+EPR^q6^qWxZok^ZVK^qxkHRvR^Zxk^>ZxZG+lPR^q6VqIvgV+^ZVKVqGk$Z^q^ZxkV>Rvgy+lPR^ZP+xZoM^qHkCZVqxZ^k^>O^ZqY+vM^>p^+VRE+DPR^K2k^KZxKX+2PR^KgrD$uC+m1vE+^>y+>vRy+VHR^Zskxqu^Zrk^>VqxK2K^KgNryMtxKvRD+Cru^qv+f3EHA^>ZV>ftVCI^Rr+dxqG+Vyu^ZxkVqKvgy+Cru^gskxqO^gR^>VRxqF^+^KS+VqjkvR4OzvupE+EI^KZ^KBu^DZ^Zr+gVdN+vdy+Cru^OskxgmRGU1^Oz+VyuvAu^u=$8uffu$u^AgQ$8uJmRC8k^AskxgmR9Hk^Askxdu^gR^KVZxdF^+^RxkVqfOv$I^RxkVqfIQsLboKVq2+led^K9+=Y8uBkssLR^>gxrYZUk$Su8koSu8kvSuekDSu8k=Su8kUSuekESu9+yD2u4>NsLu^KD+oSuVKY+=D8u4qSsLqxKX+$Su^K9+vj8ufdSsLg^MU+oSuv>gHl8uBP98uC+mA=^d^MRxMmAljA^qRxqmtSXg^KRxKmdSjZ^MeKxMOSl8uBY+okxKvkGkR^KeKfaoQhBY+ckY+oQ8u4qSsLqxMX+=Su^MS+VMjkv>4ZHztBMePuxk^M4Rv|hmZPHuxkVMfADHZ4ZHHujkv>4g^xgBMePuxk^M4ZC$1mZPHuxkVMfOVSt4ZHHu2+XSu^MgEz8u~f1UsI4R2UgxMA^M4dHsOxRc+g^>$+BuUeh^qZ^qBu=y1^dxk^>qxdu^M^R^>fx+vMoK^Ky+USuxK=+4A=^dVMMv>4AljAVqMvR41syLVMjkvM4ZHztVME+XSu^Ry+oSuVK7vM^>xk^RBM9|h^>y+DSuVME+=Su^>i^>VKjkv>4ZDHZVK>2C2uGkGSu^K$kSSuc+C+^KxkVKKmOP|1xkVK>mOQHdxkVKRmOE^ZxkVKgmO82+xkVKumOsruxkVKOmOyYkxkVKImO$bxkVKtmOcjRxkVKLmOoDgxkVKJm7sNLxkVKam7XehxkVKpmIjUkxkVKBm7vcAxkVKFm7vvhxkVK6m7UC7xkVK<m7eS7D+cSuxKG+sSu^MZVMftEQg^>r+ZxqG+GSu^ZxkVqKvgR^M^>VqJvk^KfRZx>C+^K^>^qeKxqG+=Su^RiVRxMV+^Mb^KdxKC$2uS+^qxkVqftzvuby+9IxMA^M4IsDZxRc+g^>y+USuxZ^k^>R^ZqxMvZ^>p^+VKjkvR4gv$IVKjkvR4uQsLpVkvRy+DSu^Kz+oSuvRy+DSu^ZRxZmZY|h^gY+xqvd^>xk^KB>=$1^>y+DSuVKE+XSu^qZ^qBMCyt^Rs+^R^+x>^k^K4gVxgx>G+DSu^>y+USuxKA^K4ZUHZxqV+^q4LeQhxK^k^>4gPStxKG+DSu^qZVqfO$$1^Ks+VK3vqu^>DD2uz+2SuvMZ^K4ZxxgvRs+^qbVKJvM^>D+lSuV>>sNYZ8kCju$+BZl^d^KZ^KBZEjA^qZ^qBRYxk^KvK^KBKN8d^M$+4u$^dvMZ^K4u=jAvqZ^>4uYN1vRe+^M^qVK2+$ju^Kg$NYZZ2jxkOGeekglz=qz+Ssgv3$+4dT=IxaA^a4g9xOxh8k^3R^aVhx3F^+^Ly+jsgx3Gk^L^3^bskxJmd$|g^bz+Ssgvhy+ssg^fRxfmd$|g^JskxLmRGcu^Jz+SsgvhW^L4gC|gv3y+ssg^hRxhmRGcu^Jc+xJu^hu^hrz2uE+Vsg^hW^hBKHcu^Jy+ssgVJVkv3D+lQg^KD+yy2umqSsLgVM>Gx2uTk$HgGk8HgxKG+2Hg^KxkVKfuHjggy+8HgxKA^K4RjU1x>V+^>3^KOxKGj2uy+2Hg^MRxMmRGU1^qc+xqO^Mp^MVKdvMsG2uy+2HgVMMv>4OzvuV>S+vq3^qpVqxKi^KCs2uy+8Hgx>A^>4ONvuxRV+^Rg^MfxMvMu^KDx2uz+yEgvMy+HEg^MRxMmgY>^>skxKmAYvk^>z+oHgv>oK^MD+TQgxM=+4dX=IVMMv>4glxOV>P+vRR^M^>VqJvk^KD+EQgVKE+HEg^Ky+VEgV>Mvq4gC|tVqjkvM4dSjZVqE+HEg^Ky+HEgV>Mvq4gSX7VRjkvM4AYvkVRE+HEg^K$+4u$^dvqZ^>4OjUuvRZ^q4uyY+vqxk^K4RYMvqy+GEg^KskxKmgD=u4o+cxLG+oI^KuVKsoYuG+GEg^Ky+eIxq^k^K4gNc1xqG+GEg^>y+TQgxqG+lQg^Zy+YQgxgl+^Z^g^RY+xqvZ^Kxk^>Bq=D+^Ky+GEgVKE+EQg^>y+DQgVR$+vq^R^qxkVKfOjQg^qy+jEgxK=+4dX=IV>Mvq4glxOVRP+vgR^>^RVZJvk^qy+EQgVREkvR^R^gxkVKf7$|g^gy+jEgxKA^K4A2vkxqG+HEg^KZVKfOY>^ZUkVqxZvZu^RSlYuz+yEgvMZ^K4gNjZvZy+VEg^KRxKmgC|t^q=kxRvR^Ku^Kx9YuE+V7^qZ^qB>r9d^RD+$IVRE+DQg^qy+GEgVRHkvR^R3^KZo|Yu=+4dTMVKMvM4AXvdVgP+vgR^K^gVZJvk^R1^RRy8^9r6P8^9N8k^qu^q8|YuE+DQg^qy+GEgVgHkvR^g3^RZNyYu6Y+vk^qV+yku^qBoyYuz+yEgvRxk^q4dTsLby+GEg^qz+KvZZ^R4OPEgvdek^dRVRxgvup^+^ZskxqmIEYI^Zz+yEgvRy+R^ZRxZmuroI^gskxqmtVT1^gz+CQgvgy+GEg^gY+xZvd^qgNyYubv+Yk^q^+Gkqxq6Y+BY+Z=HYuHksHg^K8kxHgekoPgZ^k4uX^AvMU+^KgVMRv>2jYuZ^kZxK=+4IjKV>6vM^>^RpVRxMI^MVjYuZVk>v>p^M^KZCGYuFb^KD+xHgxK=+4dTMVKMvM4AXvdV>P+vRR^K^>VqJvk^MYk^Mbx>X+VHg^>$+BAY3^R9+HsYuBkssLR^ZgcxYuE+=Qg^My+sHgV>E+CPg^ZCK^MV>xZvMsky+VHgVMHkvZ^Z^M^>ckSk8k^qR9+VMxqF^+^K9+QPYufdSsLR^MZSG$dUklPg8kXPg$klPgUkNPg8kyPg$kNPgUkGPg8ksPg$kGPgUkVPg8kCVg$kVPgUk$Vg8k2Vg$k$VgUkDVg8klVg$kDVgUkEVg8kNVg$kEVgUkSVg8kGVg$kSVgUkHVg8kVVg$kHVgUko^g8k$^g$ko^gUk=^g8kD^g$k=^gUkX^g8kE^g$kX^gUky^g8kS^g$ky^gUks^g8kH^g$ks^gUkCCd8koCd$kCCdUk2Cd8k=Cd$k2CdUklCd8kXCd$klCdUkNCd8kyCd$kNCdUkGCd8ksCd$kGCdUkVCd8kCed$kVCdUk$ed8k2ed$k$edUkDed8kled$kDedUkEed8kNed$kEedUkSed8kGed$kSedUkHed8kVed$kHedUkood8k$od$koodUk=od8kDod$k=odUkXod8kEod$kXodUkyod8kSod$kyodUksod8kHod$ksodUkCvd8kovd$kCvdUk2vd8k=vd$k2vdUklvd8kXvd$klvdUkNvd8kyvd$kNvdUkGvd8ksvd$kGvdUkVvd8kC$d$kVvdUk$$d8k2$d$k$$dUkD$d8kl$d$kD$dUkE$d8kN$d$kE$dUkS$d8kG$d$kS$dUkH$d8kV$d$kH$d|+SNUu4qrsLRvMD+HPg^KD+sX=umqSsLgVM2+oVg^M9+D2GMBkssLg^KD+^PgxKOX|UuGk=8dVKekX8d8kl8d8kT8deky8d8kN8dZVkf1N^A^KU+VK>vqu^>NQ=uRxkO^K$+47zKvR5^K^qVMJv>^>u^>UN=uMvKg^MpVMxKOEN=upbVK2+X8d^Ky+lIVKMvM4IxDZV>Q+O^qy+=8dVRjkvRR^RRVKx>vRp^+^MU+=8dv>$+4IQ^kxAG+l8d^O=+VAxOvuZ^d4A$81vOr+u^O~fOe=Z4R2Ugx7^k^OR^7skxOO4RzygqxdvO^Op^+VZMvg4O=81VAQ+I^Ow4ZcUtmRYUg^7skxOu^7xk^OZfu9aR^ZVAxOF^+^gZVgft=81^Or+dx7o+4gsDtBK9Ug^Axk^7qxA^k^7g4q^du^g^O^7fx+vRZ^q4A$81vOr+u^O~fOePk4R2Ugx7^k^OR^7skxOO4RPNOqxqvO^Op^+VuMvA4O=81VAQ+I^Iw4ZUs+mRYUg^7skxIu^7xk^IZfuso7R^uVAxIF^+^RZVRft=81^Or+dxIo+4goZBK9Ug^7xk^Iqx7^k^Ig4qU$+u^R^O^Ifx+v>Z^M4A$81vOr+u^7~fO|Dg4R2UgxI^k^7R^Iskx7O4RPRqxMvO^7p^+V>2+E8d^>y+HPgVAE+E8d^7~4dy^AmdCr7^O^kxAvI^O^>D+T8dx>=+4drrdVAE+N8d^O=+^AVOx>X+E8d^>$+B1XUO^Aek^OykxAv7^>D+N8dV>E+S8d^OZ^OBq^$h^>r+OV7jkvIR4d=$hjkvIg4C+rehE+X8d^Ixk^7dxIu^O^>^7fx+vOy+N8d^>Rx>m3T~^Iy+RvIxk^7RB7o|kxk^7gBml|gR^>^IV7Jvk^Ay+N8dV7MvI4dNykV1Q+O^Iy+lIVLMvh4IxDZViQ+O^hS+^Jz+l8dvaxk^J4grQ+vaxk^hRVJKvh^i^hpV+xt^k^IR^tqx7vt^Ip^+VASks+^KD+lPgVKN+v>xk^M4Z|2hmgGyOxkVMfOjTu4gTSOjkv>4gccuB>HcAxk^M4ZE8kmgDruxkVMfOxeZ4gX42+NPg^Mg=eDujky8dvMGks8d^M$kG8dUkV8d8kC2d$kV8dUk$2d8k22d$k$2dX+H8d4qrsLC+mAj=g^MRxMmiGlO^>U+s8dvq$+4AS=gxRA^R4IUNhxMA^M41hx>A^>4dyjdxMc+g^Ry+j8dxq^k^RR^qqx>v>^Rp^+VK2+$2d^K$+4uz=gv>Z^M472NhvgZ^Z4Itv>Z^M4gQjdvZr+g^qz+S8dvgxk^qRVZKv>^R^qpV+xKX+o2d^Ky+c8dxKA^K4AQ^AxRX+$2d^Ry+j8dxqA^q4AQ^AxKX+22d^KD+Y2dKG+=2d^Ky+82dxRE+^K^R^gdxgoeDuy+H8d^Kz+s8dvZy+C2d^Zz+$2dvu=+^Z^dVgE+22d^Zy+=2dVuE+=2d^ACk^uVAxOl+^Z^O^dE+xgvu^Z=+^RVZxqDk^K^q^qU+G8dvRy+=2d^KfxKvZ2k^KgVK2+l2d^Kg2HUuz+G8dvMoK^KD+|Pgfu$uD+NPgBK|lgS+^Ky+QPgx>YK^>4grDAxM^k^K4grDAxMG+NPg^>vKV>fO=2g^qxkVKfO=2g^qy+QPgxMYK^M4gE8kx>^k^K4gE8kx>G+NPg^>vKV>fOUoO^MxkVKfOUoO^My+QPgxMYK^M4grnx>^k^K4grnx>G+NPg^MvKVMfOj87^>xkVKfOj87^>y+QPgx>YK^>4g8rtxM^k^K4g8rtxMG+NPg^MvKVMfOr=L^qxkVKfOr=L^qy+QPgxMYK^M4gQPZxR^k^K4gQPZxRG+NPg^RvKVRfO=PA^MxkVKfO=PA^My+QPgxMODG9RgN^TkZSj2KO2D8dtT$rk";
  var O="length";
  var E=S(h,"+kKM>qRZgduAO7I1tiLhJ3afpbB4FW6m<05~wnCeov$82Y=UD9lTX|EQNzyrSjGcsxHPV^",38);
  var R=E[O];
  function L(e) {
    return e.u[1]
  }
  var i="";
  var D=R+(i+true)[O];
  var a= {
    i:""
  };
  for(var s=0;s<28;s++) {
    i+=String.fromCharCode(97+Math.floor(26*Math.random()))
  }
  var P=window;
  var M=P.Promise;
  function g(e) {
    return E[e.u[0]++]>>5
  }
  function f() {
    var e=[1, {
      t:P,z:null,k:[],u:[0],Y:void 0
    }
    ,void 0];
    return {
      u:e,J:void 0
    };

  }
  function v(e,r) {
    while(true) {
      var T=e.u[1];
      if(!T) {
        throw r
      }
      if(T.l) {
        e.J= {
          E:r
        };
        e.u[0]=T.l;
        return
      }
      e.u=T.u
    }

  }
  var N;
  var d=f();
  function w(e,r) {
    e.u[g(e)]=r
  }
  var A=function(v,u,f,a) {
    var r=v[u[0]++];
    if(r&1)return r>>1;
    if(r!==f[5]) {
      if(r===f[2])return!1;
      if(r===f[4])return!0;
      if(r===f[3]) {
        if(a!=null&&a.f)return a.f(v[u[0]++],v[u[0]++]);
        for(var t="",M=v[u[0]++],h=0;h<M;h++) {
          var l=v[u[0]++];
          t+=String.fromCharCode(l&4294967232|l*41&63)
        }
        return t
      }
      if(r===f[1])return null;
      if(r===f[0]) {
        var x=v[u[0]++],O=v[u[0]++],L=x&2147483648?-1:1,n=(x&2146435072)>>20,k=(x&1048575)*Math.pow(2,32)+(O<0?O+Math.pow(2,32):O);
        return n===2047?k?NaN:L*(1/0):(n!==0?k+=Math.pow(2,52):n++,L*k*Math.pow(2,n-1075))
      }
      return u[r>>5]
    }

  };
  var I=[2,40,20,22,16,44];
  {
    a.f=function(e,r) {
      return a.i.slice(r,r+e)
    };
    var c=E[R+i.indexOf(".")]^D;
    var U=E.splice(c,E[c+d.u[0]]+2);
    a.i=A(U,d.u[1].u,I)
  }
  function b(e) {
    return A(E,e.u,I,a)
  }
  function m(e,r) {
    var T=L(e);
    T.y= {
      E:r
    };
    if(T.G) {
      e.u[0]=T.G
    }
    else {
      e.u=T.u;
      e.u[2]=r
    }

  }
  N=new Proxy(['NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymgAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwAbGwDbkyNUAy4eymWbGy4eyDbkymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyminHnDyNn9DyNUAy4eymWbeyNbsnLwsbGwNbAUNUDyen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymDbNnNUAy4eymWbDy4eyDb8y4snDbNnmmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymaAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymNUNUNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1bNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eym7nGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyminAy4eymLwAy4eymGwNUAy4eymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwAbGwWbGy4eyDbHn8ykyiy9Abmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yminHnDyNn9snNUAy4eymDbNnNUAy4eymDbGyNU8y4eymWbGyNbIyLwsnGwNUNnen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDblAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1bGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymNb1yGykyNyAy4mWbsnNbsney1yWykysyAn4Hn8ykyiy9AbmDbDy4eyDbeyAyun4iUsneyNyAnky8yeyNbrykyeyiyNbDyDnDnGyLn48yDbsnmmmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrbGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymgGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymlNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbgAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwsbGwDbkyNUAy4eymWbGy4eyDbkymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymlNUNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUrUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yminHnDyNn9snNUAy4eymDbNnNU8y4eymDbGyNUNnNbInWbNnNbIyLwsnGwNUGyen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnminHnDyNn9NnNUsnLwubGwWbDy4eyDbNnmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymVAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym7nAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymNUNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eym5Ay4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym5Ay4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymgAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yminHnDyNn9snNUAy4eymDbNnNU8y4eymWbNnNbIyLwsnGwNUHn8ykyiy9Aben','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAnLnDnAy8ysy9Ay4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbeyNbWUYYeyNbWUNbIUmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwAbGwDbkyNUNnLwsbGwWbkysy4eyNbWUmky4eyDbeyNbWUNbIUmWbAyGy1yAyinHnDyNn9iyNU8y4eymWbiylNUeysnGyGyYYiyNbLnYYGy4eyDbiyNbLnNbIUmenen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbLwGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymVGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eymineyNbWUNUHn8ykyiy9Aben','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymYAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1bNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eym1b1bGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymNUNUNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymaAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymlNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymVAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbinenmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbeyAyun9HUNnNnDyLn4Ay4eymmmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yminsy8yNn4HnDyNn9snNUAy4eymDbNnNU8y4eymWbNnWbNnNUNnNbWwmkysy4sn9kyey9NnNbIyminDy4eyDbNnNbIyLwsnGwmWbNnAyAnsnNneyenAnWyNn8yun96ryDyGyGy6en','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1b1b1bAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymkyey1yAnDyeyNyAy8ysy9Gy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym7wGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym7nGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymNUNUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymkyey9Gy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyDbkyNUAy4eymDbiyNUAy4eymDbWyNUAy4eymDbewNU8y4eymDbHyNUNnLwHbGwDbAwNUNnLwubGwDb7yNUNnLwkbGwDb1yNUsysneyNyAnky8yey4minHnDyNn9syNUHy4mWbsyNbsnLwubGwNUDyNnHysn7yAyeyAn1yWbsy8yNn4HnDyNn9HnNUAbWbHnrUDyNnHysn7yAyeyAn1yNbGyAyeyHyAnWyWbHnggmsyNbsnLwHngkbGwNUDyNnHysn7yAyeyAn1yLwHnGwWbNnAyAnsnNney9syNbsnLwsbGwNUinAn8bAnWyky1yDbsn8bLwAbGwDbIy8bLwGwDbWw8bewDbIn8b1yDbAy8bewNUNUeysnGyGyGbHn8ykyiy9Ab8bewNbAyenDbsyNbsnLwAbGwNUkyDbAw4symDbsyNbsnLwHbGwenWbAnNnLnin7UryLyAyNyAnNbiyAysykyeyAyHwNn8yDnAyNnAnLn41yDbpGyAyeyHyAnWypDbinHnDyGysnAy8bWyenmDb7UryLyAyNyAnNbiyAysykyeyAyHwNn8yDnAyNnAnLn41yDbpeyDy7yAypDbinHnDyGysnAy8biyenmenNyDyAnNyWy4Dwminen1yLw7yGwNUinkU8bkyDbWw8bewDbrw8b1yDbAy8b4ewNUNUeysnGyGyGbHn8ykyiy9Ab8bewNbAymlNUNUHn8ykyiy9AbGbeyAyun91UDyDn4HUNnNnDyLnNbsyNn8y7y44GyNUeyNbeymlNUNUeysnGyGyYYGylNUNUHn8ykyiy9AbGbGy8bLwGwDbsysneyNyAnky8yey4DwminNnAyAnsnNney9DwNbNnAyHnAyNn1yAy4menmmNbHyAyAn4ewNUNUeysnGyGyGbHn8ykyiy9Ab8bewNbAym8bHn8ykyiy9AbenDbDy4eyDb1ymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yminsy8yNn4HnDyNn9snNUAy4eymDbNnNUAy4eymDbGyNU8y4eymWbGyWbGyNUGyNbWwmkysy4sn9kyey9GyNbIyminGyNbIyLwsnGwNUNnWbNnAyAnsnNneyensy8yNn4HnDyNn9kyNU8y4eymWbkyWbkyNUkyNbWwmkysy4sn9kyey9kyNbIyminkyNbIyLwsnGwNUNnWbNnAyAnsnNneyenAnWyNn8yun96ryDyGyGy6en','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1bAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymWbDy4eyDb8y4snmmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrbAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymWbDy4eyDb8yNUNUsnmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDb8nAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnminHnDyNn9NnNUsnLwAbGwWbDy4eyDbNnLwAy4eymGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymDbNnNUAy4eymDbGyNUAy4eymWbDy4eyDb8y4snDbNnDbGymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym7wAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymgGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eym7wAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymVAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbeyAyun9DwAyHyIUknDn4Ay4eymDbAy4eymmmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymgAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymlNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymYGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1b1bGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymNUNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym1b1bAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymWbDy4eyDbiyAyGyAyAnAy98yLwsnGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNUAy4eymWbDy4eyDb8yrUsnmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymaGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyminHnDyNn9DyNUAy4eymWbeyNbsnLwsbGwNbGyNUDyen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymNUNUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymrbAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUrUGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eym5Ay4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymDbsnNULwGwWbsy8yNn4HnDyNn9Nn9kyey98ymsnNbDnsn1yWy4NnmWbDy4eyDbsnmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymkyey9Gy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbeyNbsnLwsbGwNbAnmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminHnDyNn98yNUAy4eymWbDy4eyDb8y4mmen','NnAyAnsnNney9sysneyNyAnky8yey4minNnAyAnsnNney9eysnGyGyen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eymrUAy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnminHnDyNn9NnNUsnLwsbGwWbDy4eyDbNnLwsbGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyminAy4eymGbeyNbsnLwAbGwNUAy4eym8bAy4eymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymrbGy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbGy4eym5Gy4eymmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyminAy4eymGbAy4eym8beyNbsnLwAbGwNUAy4eymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnminHnDyNn9NnNUsnLwsbGwWbDy4eyDbNnLwAbGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAymineyNbsnLwAbGwNUAy4eymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyminDy4eyDbAy4eymLwAy4eymGwmen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUAy4eymDbkyNUAy4eymDbiyNUAy4eymDbWyNUNnLwkbGwWbkysy4kyLwWyGwYYkyLwWyGwNbrwNUNUNUkyminHnDyNn9ewWbeyNbsnNULwkyLwWyGwNbkUDbinAn8bGyDbIn8bkyDbsn8beyNbsnDbIy8bLwGwDbWw8bkyLwWyGwNbWwDbAy8b4ewNUeyNbeymNUNUNUeysnGyGy7n7newNUNUNUHn8ykyiy9AbGbHn8ykyiy9Ab8bewNbHyAyAn4kyLwWyGwNbAymenDbHn8ykyiy9AbDbsysneyNyAnky8yey4minNnAyAnsnNney9DyNnHysn7yAyeyAn1yenNbDyDnDnGyLn4Hn8ykyiy9AbDbiymGwWbsy8yNn4HnDyNn9HyNUAbWbHyrUiyNbGyAyeyHyAnWyWbHyggmeyNbsnNbDnsn1yWy4iyLwHyGwmenAyGy1yAy9eyNbsnLwHbGwNUkyNbDyDnDnGyLn4GyDbiymen','NnAyAnsnNney9sysneyNyAnky8yey4eyDbAyDbDyDb8yDbsnDbNnminHnDyNn9GyNUNnLwLbGwWbDy4eyDbAy4eymrUrUGy4eymmen'],(function() {
    var e=new Map;
    var r=Array.from( {
      length:101
    }
    ,function(T,n) {
      return n
    }
    );
    return {
      get:function(T,n) {
        var t=Number(n);
        if(!Number.isNaN(t)&&!Number.isFinite(t)) {
          return r
        }
        var _=r[t];
        var o=e.get(_);
        if(o!==void 0) {
          return o
        }
        var C=new Function(u(T[_],"bUwynZCKQO3oBPcz2TdSx0MRfjqFvJtXhpl96YVEg5m4aNrDuHsAiILkW8e7G1",45).map(function(p) {
          return String.fromCharCode(p^3)
        }
        ).join(""))();
        e.set(_,C);
        return C
      }

    }

  }
  )());
  function y(e) {
    return e.u[E[e.u[0]++]>>5]
  }
  var H=

  /* regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  (function() {
    "use strict";
    var t,r= {

    }
    ,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol: {

    }
    ,i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";
    function u(t,r,e) {
      return Object.defineProperty(t,r, {
        value:e,enumerable:!0,configurable:!0,writable:!0
      }
      ),t[r]
    }
    try {
      u( {

      }
      ,"")
    }
    catch(t) {
      u=function(t,r,e) {
        return t[r]=e
      }

    }
    function h(t,r,e,n) {
      var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);
      return i._invoke=function(t,r,e) {
        var n=l;
        return function(o,i) {
          if(n===p)throw new Error("Generator is already running");
          if(n===y) {
            if("throw"===o)throw i;
            return P()
          }
          for(e.method=o,e.arg=i;;) {
            var a=e.delegate;
            if(a) {
              var c=O(a,e);
              if(c) {
                if(c===v)continue;
                return c
              }

            }
            if("next"===e.method)e.sent=e._sent=e.arg;
            else if("throw"===e.method) {
              if(n===l)throw n=y,e.arg;
              e.dispatchException(e.arg)
            }
            else"return"===e.method&&e.abrupt("return",e.arg);
            n=p;
            var u=f(t,r,e);
            if("normal"===u.type) {
              if(n=e.done?y:s,u.arg===v)continue;
              return {
                value:u.arg,done:e.done
              }

            }
            "throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)
          }

        }

      }
      (t,e,a),i
    }
    function f(t,r,e) {
      try {
        return {
          type:"normal",arg:t.call(r,e)
        }

      }
      catch(t) {
        return {
          type:"throw",arg:t
        }

      }

    }
    r.wrap=h;
    var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};
    function d() {

    }
    function g() {

    }
    function m() {

    }
    var w={};
    w[i]=function() {
      return this
    };
    var L=Object.getPrototypeOf,x=L&&L(L(N([])));
    x&&x!==e&&n.call(x,i)&&(w=x);
    var E=m.prototype=d.prototype=Object.create(w);
    function b(t) {
      ["next","throw","return"].forEach(function(r) {
        u(t,r,function(t) {
          return this._invoke(r,t)
        }
        )
      }
      )
    }
    function _(t,r) {
      var e;
      this._invoke=function(o,i) {
        function a() {
          return new r(function(e,a) {
            !function e(o,i,a,c) {
              var u=f(t[o],t,i);
              if("throw"!==u.type) {
                var h=u.arg,l=h.value;
                return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t) {
                  e("next",t,a,c)
                }
                ,function(t) {
                  e("throw",t,a,c)
                }
                ):r.resolve(l).then(function(t) {
                  h.value=t,a(h)
                }
                ,function(t) {
                  return e("throw",t,a,c)
                }
                )
              }
              c(u.arg)
            }
            (o,i,e,a)
          }
          )
        }
        return e=e?e.then(a,a):a()
      }

    }
    function O(r,e) {
      var n=r.iterator[e.method];
      if(n===t) {
        if(e.delegate=null,"throw"===e.method) {
          if(r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method))return v;
          e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")
        }
        return v
      }
      var o=f(n,r.iterator,e.arg);
      if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;
      var i=o.arg;
      return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)
    }
    function j(t) {
      var r= {
        tryLoc:t[0]
      };
      1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)
    }
    function k(t) {
      var r=t.completion||{};
      r.type="normal",delete r.arg,t.completion=r
    }
    function G(t) {
      this.tryEntries=[ {
        tryLoc:"root"
      }
      ],t.forEach(j,this),this.reset(!0)
    }
    function N(r) {
      if(r) {
        var e=r[i];
        if(e)return e.call(r);
        if("function"==typeof r.next)return r;
        if(!isNaN(r.length)) {
          var o=-1,a=function e() {
            for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;
            return e.value=t,e.done=!0,e
          };
          return a.next=a
        }

      }
      return {
        next:P
      }

    }
    function P() {
      return {
        value:t,done:!0
      }

    }
    return g.prototype=E.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),r.isGeneratorFunction=function(t) {
      var r="function"==typeof t&&t.constructor;
      return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))
    }
    ,r.mark=function(t) {
      return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t
    }
    ,r.awrap=function(t) {
      return {
        __await:t
      }

    }
    ,b(_.prototype),_.prototype[a]=function() {
      return this
    }
    ,r.AsyncIterator=_,r.async=function(t,e,n,o,i) {
      void 0===i&&(i=Promise);
      var a=new _(h(t,e,n,o),i);
      return r.isGeneratorFunction(e)?a:a.next().then(function(t) {
        return t.done?t.value:a.next()
      }
      )
    }
    ,b(E),u(E,c,"Generator"),E[i]=function() {
      return this
    }
    ,E.toString=function() {
      return"[object Generator]"
    }
    ,r.keys=function(t) {
      var r=[];
      for(var e in t)r.push(e);
      return r.reverse(),function e() {
        for(;r.length;) {
          var n=r.pop();
          if(n in t)return e.value=n,e.done=!1,e
        }
        return e.done=!0,e
      }

    }
    ,r.values=N,G.prototype= {
      constructor:G,reset:function(r) {
        if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)
      }
      ,stop:function() {
        this.done=!0;
        var t=this.tryEntries[0].completion;
        if("throw"===t.type)throw t.arg;
        return this.rval
      }
      ,dispatchException:function(r) {
        if(this.done)throw r;
        var e=this;
        function o(n,o) {
          return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o
        }
        for(var i=this.tryEntries.length-1;i>=0;--i) {
          var a=this.tryEntries[i],c=a.completion;
          if("root"===a.tryLoc)return o("end");
          if(a.tryLoc<=this.prev) {
            var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");
            if(u&&h) {
              if(this.prev<a.catchLoc)return o(a.catchLoc,!0);
              if(this.prev<a.finallyLoc)return o(a.finallyLoc)
            }
            else if(u) {
              if(this.prev<a.catchLoc)return o(a.catchLoc,!0)
            }
            else {
              if(!h)throw new Error("try statement without catch or finally");
              if(this.prev<a.finallyLoc)return o(a.finallyLoc)
            }

          }

        }

      }
      ,abrupt:function(t,r) {
        for(var e=this.tryEntries.length-1;e>=0;--e) {
          var o=this.tryEntries[e];
          if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc) {
            var i=o;
            break
          }

        }
        i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);
        var a=i?i.completion:{};
        return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)
      }
      ,complete:function(t,r) {
        if("throw"===t.type)throw t.arg;
        return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v
      }
      ,finish:function(t) {
        for(var r=this.tryEntries.length-1;r>=0;--r) {
          var e=this.tryEntries[r];
          if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v
        }

      }
      ,catch:function(t) {
        for(var r=this.tryEntries.length-1;r>=0;--r) {
          var e=this.tryEntries[r];
          if(e.tryLoc===t) {
            var n=e.completion;
            if("throw"===n.type) {
              var o=n.arg;
              k(e)
            }
            return o
          }

        }
        throw new Error("illegal catch attempt")
      }
      ,delegateYield:function(r,e,n) {
        return this.delegate= {
          iterator:N(r),resultName:e,nextLoc:n
        }
        ,"next"===this.method&&(this.arg=t),v
      }

    }
    ,r
  }
  ());
  function l(e) {
    var r=[P,[M,H],E,N];
    var T=[m,v,f,l,i,y];
    while(true) {
      var n,t;
      var _=void 0;
      _=N[E[e.u[0]++]];
      try {
        var o=_(e,b,w,L,r,T);
        if(o===null) {
          break
        }

      }
      catch(C) {
        v(e,C)
      }

    }

  }
  l(d)
}
)();
