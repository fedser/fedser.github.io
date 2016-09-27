// Written by Daniel Cohen Gindi
// danielgindi@gmail.com
// http://github.com/danielgindi/app-redirect

(function () {

    var queryString = {},
        browserMovedToBackground = false;

    // Parse the query string so we can take individual query string params
    (function (search) {

        search = (search || '').split(/[\&\?]/g);
        for (var i = 0, count = search.length; i < count; i++) {
            if (!search[i]) continue;
            var pair = search[i].split('=');
            queryString[pair[0]] = queryString[pair[0]] !== undefined ?
                ([pair[1] || ''].concat(queryString[pair[0]])) :
                (pair[1] || '');
        }

    })(window.location.search);

    // Listen to visibility change to prevent next url
    window.document.addEventListener("visibilitychange", function (e) {
        browserMovedToBackground = window.document.visibilityState === 'hidden' || window.document.visibilityState === 'unloaded';
    });
    window.addEventListener("blur", function (e) {
        browserMovedToBackground = true;
    });

    var AppRedirect = {
        /**
         * @expose
         * @public
         * */
        queryString: queryString,

        redirect: function (options) {

            var hasIos = !!(options.iosApp || options.iosAppStore);
            var hasAndroid = !!(options.android);

            /**
             * What happens now is:
             * 1. We select the correct platform based on userAgent
             * 2. We try to open the app using the special schema
             *
             *    └───> If it succeded, the we have left the browser, and went to the app.
             *          *. If the user goes back to the browser at this stage, he will be sadly redirected to the second url (AppStore etc.)
             *    └───> If opening the app failed (schema not recognized), then:
             *          1. An error will be shown
             *          2. The user will be redirected to the second url.
             *          *.  Returning to the browser later will show the error.
             *
             * For Android it's different. There's the intent:// url, which takes the "package" argument in order to fallback to the Store.
             * But if you want to aggregate arguments to the store, you can use the "fallback" argument for that, and supply a Store url.
             * QueryString arguments will be automatically aggregated.
             */

            var tryToOpenInMultiplePhases = function (urls) {

                browserMovedToBackground = false;

                var currentIndex = 0;
                var redirectTime = new Date();
                var appUrlScheme = urls[currentIndex++];
                window.location = urls[currentIndex++];

                var next = function () {
                    if (urls.length > currentIndex) {
                        setTimeout(function () {

                            if (browserMovedToBackground) {
                                console.log('Browser moved to the background, we assume that we are done here')
                                return;
                            }

                            if (new Date() - redirectTime > 3000) {
                                console.log('Enough time has passed, the app is probably open');
                            } else {
                                redirectTime = new Date();
                                window.location = urls[currentIndex++];
                                next();
                            }

                        }, 10);
                        // window.location = appUrlScheme;

                        window.open(appUrlScheme, "_self");
                    }
                };

                next();

            };

            // var chromeVersion = /Chrome\/([0-9\.]+)/.test(navigator.userAgent) ? navigator.userAgent.match(/Chrome\/([0-9\.]+)/)[1] : '';

            if (hasIos && /iP(hone|ad|od)/.test(navigator.userAgent)) {
                var urls = [];

                var iOSversion = parseFloat(
                        ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
                            .replace('undefined', '3_2').replace('_', '.').replace('_', '')
                    ) || false;

				confirm("my Version = " + iOSversion);
				confirm("my VersionRes = " + (iOSversion && iOSversion < 9));
                if (iOSversion && iOSversion < 9) {
                    var confirmBox = confirm("Möchten Sie den App Store öffnen?");
                    if (confirmBox == true) {
                        if (options.iosApp) {
                            urls.push(options.iosApp);
                        }
                        if (options.iosAppStore) {
                            urls.push(options.iosAppStore);
                        }
//                         tryToOpenInMultiplePhases(urls);
						confirm("my link = " + options.iosApp);
						window.location = options.iosApp;
                    } else {
                        window.location = options.web;
                    }
                } else {
                    var confirmBox = confirm("Möchten Sie den App Store öffnen?");
                    if (confirmBox == true) {
                        window.location = options.iosAppStore;
                    } else {
                        window.location = options.web;
                    }
                }

            } else if (hasAndroid && /Android/.test(navigator.userAgent)) {

                var intent = options.android;
                var intentUrl = 'intent://' + intent.host + '#Intent;' +
                    'scheme=' + encodeURIComponent(intent.scheme) + ';' +
                    'package=' + encodeURIComponent(intent.package) + ';' +
                    (intent.action ? 'action=' + encodeURIComponent(intent.action) + ';' : '') +
                    (intent.category ? 'category=' + encodeURIComponent(intent.category) + ';' : '') +
                    (intent.component ? 'component=' + encodeURIComponent(intent.component) + ';' : '') +
                    (intent.fallback ? 'S.browser_fallback_url=' + encodeURIComponent(intent.fallback) + ';' : '') +
                    'end';
                var anchor = document.createElement('a');
                document.body.appendChild(anchor);
                anchor.href = intentUrl;
                if (anchor.click) {
                    anchor.click();
                } else {
                    window.location = intentUrl;
                }

            } else {
                window.location = options.web;
            }

        }
    };

    /** @expose */
    window.AppRedirect = AppRedirect;


})();
