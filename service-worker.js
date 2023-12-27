/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "03e9805acd92dcdc92f1af4204ed06bc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d841b472.css",
    "revision": "78cf04aae5bf0a4a514e52a91da9eb93"
  },
  {
    "url": "assets/img/createUser.cea933b3.png",
    "revision": "cea933b3b7ee1b5dc777be9fb16b9f7f"
  },
  {
    "url": "assets/img/deleteUser.6923d99f.png",
    "revision": "6923d99f2abe4d81bfc50ace4ff9b752"
  },
  {
    "url": "assets/img/error.2c93f28d.png",
    "revision": "2c93f28d1636e948b64e3415e039affa"
  },
  {
    "url": "assets/img/getAllUsers.972b5b7d.png",
    "revision": "972b5b7de02daa157f3372b7483203b9"
  },
  {
    "url": "assets/img/getUser.647b7289.png",
    "revision": "647b728937d443037e8d07d695013f03"
  },
  {
    "url": "assets/img/relational_schema.06c8bb4c.jpg",
    "revision": "06c8bb4c67301f964ac3ade6cd210bf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updatePassword.eec6a6bc.png",
    "revision": "eec6a6bc72748a278783cd6a9da28cc9"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.a580e3e2.js",
    "revision": "6e5dda8ac77edb45d510398c39dcdc45"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.53c3d7dc.js",
    "revision": "fe3c6ebc5bab2fc8bda95ffea275f377"
  },
  {
    "url": "assets/js/14.46ab93fd.js",
    "revision": "881b4a2d96a2ab89fac2de82dcf9ed5f"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.b66db88b.js",
    "revision": "00f95327ce44b41227dcee3d9a5083fd"
  },
  {
    "url": "assets/js/18.8ebe44a3.js",
    "revision": "a29c6f342286650dbebe2d767744e3cd"
  },
  {
    "url": "assets/js/19.a4296db7.js",
    "revision": "99f1fb6e9ee915940793efb65ad3ab34"
  },
  {
    "url": "assets/js/2.6c5878d3.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.c0ac2357.js",
    "revision": "2a0a1ecdd82e9932f50b164c7f650f45"
  },
  {
    "url": "assets/js/21.0e19585a.js",
    "revision": "09a839cb835b28b7e18cee97a3226846"
  },
  {
    "url": "assets/js/22.df56ace3.js",
    "revision": "7b10fc18c439b0bed4e004a7a83c6458"
  },
  {
    "url": "assets/js/23.dcc5840b.js",
    "revision": "e9267f687c2af3f17dc85004a65e2219"
  },
  {
    "url": "assets/js/24.507c94ae.js",
    "revision": "c52d9e741fe8769d26de29235db0d877"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.789aaad0.js",
    "revision": "50d337a821e428b2d23a4b32624bca24"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.6c22d379.js",
    "revision": "5a4c9ca046af08f2b71ce772495548ae"
  },
  {
    "url": "assets/js/6.6cd70278.js",
    "revision": "7a8e773b0b2158f77779ca991c47cef5"
  },
  {
    "url": "assets/js/7.c0467edb.js",
    "revision": "f02ea9f667d8a109d1a08873f5350441"
  },
  {
    "url": "assets/js/8.18d20163.js",
    "revision": "06260b4320d12135315dd551c1e4658c"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.44e327c0.js",
    "revision": "43312a28ffc79c5d2b5150852cc10478"
  },
  {
    "url": "conclusion/index.html",
    "revision": "cccdd7274fcf0eb1b7f4b66f8ad1417b"
  },
  {
    "url": "design/index.html",
    "revision": "117a057f9f3bbe9c1de07f0b4666ac9d"
  },
  {
    "url": "index.html",
    "revision": "0a01a58b2b31cdbd916e3fbc79a83a87"
  },
  {
    "url": "intro/index.html",
    "revision": "2087924cbe35d0f0c7cc8eb1cc4a7831"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "dbf403705ce47411e3fe59e768668976"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "d00758e580b2c143c3e627119518dc66"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "856caf40aaed76f48a4f030c398514fa"
  },
  {
    "url": "software/index.html",
    "revision": "75c1e16c8e72d96934f55dd52ba26d53"
  },
  {
    "url": "test/index.html",
    "revision": "64cb7878e176417d91db8092b586afb3"
  },
  {
    "url": "use cases/index.html",
    "revision": "bc82ea7c18ff0f7c42bed69267b4fcda"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
