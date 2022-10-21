'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "43c0d100aa819482ba4ea65af9359981",
"index.html": "aed5540ba310ff4c7c922941c9bcc903",
"/": "aed5540ba310ff4c7c922941c9bcc903",
"index.php": "f45006f6f768842473d23fcf54a2d80f",
"main.dart.js": "ea24f89c8e12e08fe0f692b411a2a734",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "96a11e3b4d49862e16c5222b89453d8e",
"icons/Icon-192.png": "2552d8b1b31272c78a2da7da9dd7cb92",
"icons/Icon-maskable-192.png": "2552d8b1b31272c78a2da7da9dd7cb92",
"icons/Icon-maskable-512.png": "51214f68104bb5546f944b54818ea26b",
"icons/Icon-512.png": "51214f68104bb5546f944b54818ea26b",
"manifest.json": "3bdc52ec0f092e929dfa0f65d758169c",
"assets/AssetManifest.json": "0d3e944468b331652f401529f585c26f",
"assets/NOTICES": "a682c6c818f3c000c5cce10de4025c80",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "c1178f6f5cea01d0b0d96be6af0eba3b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/milne_edward_sifaka.jpg": "d0b631795eb790ba6193612d26fa99e0",
"assets/assets/images/card_attribute_status_critically_endangered.png": "fd3863c619acee32b980c4f66c19e2e6",
"assets/assets/images/google_map_south_pole.png": "bc1f3fc8afc5455ece9b0f426ac528ea",
"assets/assets/images/icn_alert.png": "04e8d0eb588f95915f1077022dca864a",
"assets/assets/images/ic_arrow_right.png": "3050c52f39283228153861e21c045342",
"assets/assets/images/forest_rock_thrush.jpg": "ecd4db1d67288115ca6acae5526c2180",
"assets/assets/images/ic_freepik.png": "0a05bdcb8bf2cc5ae24a276de1f51075",
"assets/assets/images/icon_tabbar1_active.png": "a225ab3081fe736d463c7cbdbd45299a",
"assets/assets/images/ic_birds.png": "6d2ec681d57d072146daa29936118a59",
"assets/assets/images/img_secure_wallet.png": "c3e3cf02e9297c71dba555195adbd75c",
"assets/assets/images/icn_info.png": "9d053d222138a256f94b88e5ccb0ad41",
"assets/assets/images/general_ic_star.png": "95c1ca2d067f1c3a96357d0ac8d7f7dc",
"assets/assets/images/arrow_up.png": "f5d0c8c83aee404b4b6fb979c2e9e86a",
"assets/assets/images/icon_tabbar4_active.png": "f80618eff7cdc1f58c95d1325fa1451c",
"assets/assets/images/ic_mammalia.png": "5e6b454ed2c9ce4f11b4f626a93579f2",
"assets/assets/images/icn_ok.png": "b81e142df81a0889adcb2b5a8b5b56c2",
"assets/assets/images/icn_faceid.png": "f4f77ec38346bfbc78d842f868679311",
"assets/assets/images/no_collectibles.png": "c04d9f615745645e87a27a0c86259f33",
"assets/assets/images/collection_detail_ic_on_sale.png": "e40f5b0585d06bfec72ab510ff46e39b",
"assets/assets/images/silver_card_icon.png": "095e79b6ed0b155a30978e5b8d40b8fe",
"assets/assets/images/black_white_ruffed_lemur.jpg": "637b0b644b303a0619fd6a0885ae277e",
"assets/assets/images/przewalskis_horse.jpg": "44ce116345895cbe9a236caec8a78519",
"assets/assets/images/icn_arrow_down.png": "e25184ef32ba3070e889d50676b67548",
"assets/assets/images/bermuda_petrel.jpg": "0951f217f729852139342415575ffb77",
"assets/assets/images/icn_choose_collection.png": "3b72be9db0464be0b7e5fafc7d6b5fa1",
"assets/assets/images/card_attribute_up.png": "80ac904b09535a7cc28fda63463e69bc",
"assets/assets/images/bronzeEditionBadge.png": "9dada361e6ff065d2b52b068d1b2e146",
"assets/assets/images/mga-diamond.png": "d59c8eb1e55ff42badb6612e6e5416e0",
"assets/assets/images/error_info_icon.png": "d05fed55e70727649086d14465bd7675",
"assets/assets/images/cedar_of_lebanon.jpg": "097d4d3e53e31b4778ca8decfd47640e",
"assets/assets/images/dolphin.png": "0bf84284e80151587c6a56dc72a88a06",
"assets/assets/images/error_state_icon.png": "106bf8d3139effcdb0e5559252f60f1e",
"assets/assets/images/2.0x/card_attribute_status_critically_endangered.png": "1d72a8c6d2f3e8a4479f1bcf97045110",
"assets/assets/images/2.0x/icn_alert.png": "da15f30b0a0e366b145f3ffd1e81371d",
"assets/assets/images/2.0x/ic_arrow_right.png": "ba0b7c8a293bb68d85eb147021235ac1",
"assets/assets/images/2.0x/ic_freepik.png": "ba83371ae460ee7fba246073cb4937ae",
"assets/assets/images/2.0x/icon_tabbar1_active.png": "b667cac48f2433671040a35435949ca1",
"assets/assets/images/2.0x/ic_birds.png": "6d2ec681d57d072146daa29936118a59",
"assets/assets/images/2.0x/img_secure_wallet.png": "6b78e0adcce76144cb6ca7c34ecf9061",
"assets/assets/images/2.0x/icn_info.png": "fb3fc96268bcc2aa1aa32af8c457afc3",
"assets/assets/images/2.0x/general_ic_star.png": "c80d5d0a6f861e6f6d690c7079a35ca8",
"assets/assets/images/2.0x/arrow_up.png": "37061e90c89685815d3f195257e5e9a2",
"assets/assets/images/2.0x/icon_tabbar4_active.png": "78e276547bbb3511ae81211df40d610e",
"assets/assets/images/2.0x/ic_mammalia.png": "5e6b454ed2c9ce4f11b4f626a93579f2",
"assets/assets/images/2.0x/icn_ok.png": "6ca9fc94d56ed0935b8b4b2af17e27e9",
"assets/assets/images/2.0x/icn_faceid.png": "97e2286f301444bdd354459a2a300258",
"assets/assets/images/2.0x/no_collectibles.png": "dc168b6a01327ccfed3c2eeb772dff87",
"assets/assets/images/2.0x/collection_detail_ic_on_sale.png": "70dde798b3b407a9dbeb616a33ea1650",
"assets/assets/images/2.0x/silver_card_icon.png": "4499939ed5f26a776992439bb94e3c70",
"assets/assets/images/2.0x/icn_arrow_down.png": "d8ec7db1d901595a8627b7f7877c1bdf",
"assets/assets/images/2.0x/icn_choose_collection.png": "c6baca570d6f0b78d43b6c6320d7c209",
"assets/assets/images/2.0x/card_attribute_up.png": "6ff1aed5d92e66a94be26d4884b4eda7",
"assets/assets/images/2.0x/bronzeEditionBadge.png": "abfa7fa7b696429a2a1807686a39834d",
"assets/assets/images/2.0x/mga-diamond.png": "942af55d92bcfd6d8e4cec4a1a3b5b90",
"assets/assets/images/2.0x/error_info_icon.png": "663d0523950eb6f13991586a5b67daff",
"assets/assets/images/2.0x/error_state_icon.png": "8c1bbdee944ba5afe86d8ba4b10c5de1",
"assets/assets/images/2.0x/ic_plants.png": "2289cd406238df3d478f54d91936bb7d",
"assets/assets/images/2.0x/empty_state_avatar.png": "58094762a745db815047c0e529ae3ef4",
"assets/assets/images/2.0x/ic_greenlist_full.png": "04746a0fffa132adb2df5065cf6c157b",
"assets/assets/images/2.0x/mga-silver.png": "82d75af98e87430f65154ca28f5ac25a",
"assets/assets/images/2.0x/mixedEditionBadge.png": "82fda29fcb0be15d21b21753ef1cb85a",
"assets/assets/images/2.0x/XBct.png": "1b9c2b908acbb9e61d245d36fa5b1e24",
"assets/assets/images/2.0x/placeholder_badge.png": "3f2e32d46dbb53015c27fc958f54ca15",
"assets/assets/images/2.0x/settings_icon.png": "81aeaa43771cecda7b389ecddded5877",
"assets/assets/images/2.0x/arrow_up_green.png": "2b39d9b2b3eb8145bd5a8319d6b8b121",
"assets/assets/images/2.0x/card_attribute_stable.png": "fc400276b028f05368bf3a25f43fa90a",
"assets/assets/images/2.0x/icn_chevron_right.png": "fe1f031095702c8ecdf69c7c2cfe3c2b",
"assets/assets/images/2.0x/img_boosterpack_card_edu_to_bronze.png": "c8ba3bb59c15db6cf304926eaebe29f0",
"assets/assets/images/2.0x/logout.png": "f5feade5fdfec89e61f31110e2303189",
"assets/assets/images/2.0x/qr_information_img.png": "436d5395c7de118f457b9579e8a941eb",
"assets/assets/images/2.0x/icon_tabbar3_active.png": "f4adcd8d1d273234a3288b0f85ec6990",
"assets/assets/images/2.0x/standart_card_icon.png": "f7ebae52d8f21b081d844275d9ad4293",
"assets/assets/images/2.0x/ic_delete.png": "610d1815fd913eec7de935ed7f443d98",
"assets/assets/images/2.0x/card_attribute_down.png": "ac84c39da6af4449535b1cecddf5b773",
"assets/assets/images/2.0x/share_for_nature_icon.png": "cb3f2f2d9a70b73e6fe374384e5e852c",
"assets/assets/images/2.0x/Logo-H.png": "8600a2d0fb5c255e2b9327a47a275551",
"assets/assets/images/2.0x/arrow_down_green.png": "53ce88d7713010322889315933f3eb15",
"assets/assets/images/2.0x/ic_share.png": "3150013da5d57e3f022dea0131b51e60",
"assets/assets/images/2.0x/ic_key.png": "af30b34704f47c7b9535b205f53209c1",
"assets/assets/images/2.0x/gold_card_icon.png": "7343ce182bd0872545cedc4d89949e4c",
"assets/assets/images/2.0x/img_boosterpack_card_silver_to_diamond.png": "93e018e0c6587940ac5b1e2e0151938c",
"assets/assets/images/2.0x/icon_tabbar5_active.png": "757ee87cdd28155fdd3cc9973b84b113",
"assets/assets/images/2.0x/goldEditionBadge.png": "8b7295ae83a8d2f049ef535bb5d3552e",
"assets/assets/images/2.0x/mga-gold.png": "ef7813b721ec210faa6373ab2313dd37",
"assets/assets/images/2.0x/Logo-S.png": "abc03ec197cde07112faaf00fdc31056",
"assets/assets/images/2.0x/collected_cards_icon.png": "fb6fd24de5c8ffdab06704bd51d564c0",
"assets/assets/images/2.0x/bg_turtle.png": "408e9be324dfbf719ea272150f12758b",
"assets/assets/images/2.0x/ic_nature_collectibles_logo.png": "64c1e42cc957605a6cfea62d40ea8ca2",
"assets/assets/images/2.0x/ic_edit.png": "6943f0e8fae9f1e1354defe4fff4f376",
"assets/assets/images/2.0x/mga-bronze.png": "ea3c839b09ef6e8a02f5a18d7798b13c",
"assets/assets/images/2.0x/card_attribute_status_least_concern.png": "b0ed9b7a75d95dd5e51cf42ae59dd06f",
"assets/assets/images/2.0x/card_attribute_status_vulnerable.png": "c7ab1ecec657f7e5cfcab5e6e83a7ea8",
"assets/assets/images/2.0x/icnAwllogo.png": "6940339b75636562c35865369b41a92d",
"assets/assets/images/2.0x/card_attribute_status_endangered.png": "cd6624df7006d0b87165cb9f3ed6cf78",
"assets/assets/images/2.0x/bronce_card_icon.png": "6f775bf8700a1ba74b2913f3eb9bcb38",
"assets/assets/images/2.0x/ic_settings.png": "221ad6be91650f24a050df780983f407",
"assets/assets/images/2.0x/hbar_token_icon.png": "2639150e239b3c339649f8d13c89bbd9",
"assets/assets/images/2.0x/ic_copy.png": "3029c0679b4cb6af2fdaf1c0a08a790f",
"assets/assets/images/2.0x/ic_fish.png": "66b8806de39f67be6136ad76d9a04cf7",
"assets/assets/images/2.0x/resold_cards_icon.png": "a5d8f7aae562fd7e8acc173af5153b03",
"assets/assets/images/2.0x/ic_onboarding_1.png": "7e3e47f8232f2920c940800b30431adf",
"assets/assets/images/2.0x/footer.png": "36089663d8870ad01507f86dd0161b7e",
"assets/assets/images/2.0x/icn_close.png": "87edc63bd386863b55fb1153d6595cf1",
"assets/assets/images/2.0x/ic_hbar_logo.png": "c8e5abe44d774f54bcd36d8a4e5eb952",
"assets/assets/images/2.0x/ic_imprint.png": "3ef659a97555dc7f69a71e7808d30217",
"assets/assets/images/2.0x/diamond_card_icon.png": "734a4e13f2e2c349a6153ac981e8d118",
"assets/assets/images/2.0x/ic_onboarding_3.png": "44346b7abdfc84f0f9152544891d9a9e",
"assets/assets/images/2.0x/ic_send.png": "346cc1af8978403071b2e8a4ea1b7b98",
"assets/assets/images/2.0x/ic_porini_logo.png": "9d604e0fd798f1030155dbc7917d134b",
"assets/assets/images/2.0x/ic_onboarding_2.png": "f3b51d50336dc154165e876b23455ccf",
"assets/assets/images/2.0x/ic_account.png": "cbb88158685c67d0058e6498ca91c202",
"assets/assets/images/2.0x/qr.png": "e4810232585605441caeb2d012c7f2b7",
"assets/assets/images/2.0x/empty_state_icon.png": "baa8d5b1ded8e8fd065233cbe7e23be1",
"assets/assets/images/2.0x/icon_tabbar5.png": "208f530dba58653b38174453cbee1d75",
"assets/assets/images/2.0x/spend_porini_icon.png": "cb7b1542919ea124f7e38eedb7ecf83b",
"assets/assets/images/2.0x/silverEditionBadge.png": "f431c31a35321c1e24530294929fb5d6",
"assets/assets/images/2.0x/ic_arrow_down.png": "5f2aca7b23c6170ed1e0fdf1d46900c4",
"assets/assets/images/2.0x/ic_transaction_history.png": "32ddf04221b87719880c8d46f092b1fd",
"assets/assets/images/2.0x/icon_tabbar4.png": "7146e23f2eccc72a61c457de6277449e",
"assets/assets/images/2.0x/img_earth_globe.png": "cf01c9f5973ee2d8ca4ed2f21b48efd6",
"assets/assets/images/2.0x/ic_receive.png": "ac819404745525730936826285842f52",
"assets/assets/images/2.0x/porini_token_icon.png": "0ebde55ff6804370781a05295a46498f",
"assets/assets/images/2.0x/open_link.png": "2390a2d40e7a61dc271b1894371e9316",
"assets/assets/images/2.0x/marketplace_ic_already_in_collection.png": "046d44410409a53f16167db4eeb5df86",
"assets/assets/images/2.0x/mga-standard.png": "1fdd1ed5c315d6763bea0c2f8958183c",
"assets/assets/images/2.0x/union.png": "67026b79c46edcf5d6f06b3799ed9e76",
"assets/assets/images/2.0x/Logo-H2_3.png": "7bb275d0cf53869bff59fd24102de7a9",
"assets/assets/images/2.0x/open_link_green.png": "cc5da4ed80fe64a0c2d4d9d875432836",
"assets/assets/images/2.0x/icon_tabbar3.png": "188bb9db5443563fdfc5ba88f150e77f",
"assets/assets/images/2.0x/icn_nav_burger.png": "2d5623955bac25001ea4380dce623ec3",
"assets/assets/images/2.0x/arrow_down.png": "5274891c2d0119c9697383c4f6faddc4",
"assets/assets/images/2.0x/icon_tabbar2.png": "799e74bfd4a4a55cd2558a71b834561f",
"assets/assets/images/2.0x/logoSCS.png": "4fb70f72362ca044719971223342c5c0",
"assets/assets/images/2.0x/ic_terms.png": "ca61694f430ddcb32ba09b16573492f5",
"assets/assets/images/2.0x/diamondEditionBadge.png": "bbc6256f47cbdd958b6bf92df2024a58",
"assets/assets/images/2.0x/BW_PCT.png": "c0eeff22743bc21692bca2fd4c0e4e22",
"assets/assets/images/2.0x/icon_tabbar2_active.png": "181b5b1b4042801fdf1f2183e55c4abe",
"assets/assets/images/2.0x/error_image.png": "0cea164e87b86c76076e5f87a7701cf1",
"assets/assets/images/2.0x/icon_tabbar1.png": "dd28784b43a1ceca615df1d2c137de6d",
"assets/assets/images/ic_plants.png": "2289cd406238df3d478f54d91936bb7d",
"assets/assets/images/empty_state_avatar.png": "59c7ed0dd2219886c125a44ac98a2464",
"assets/assets/images/ic_greenlist_full.png": "1e15ebfbc13490dc65793cd4d4ca9320",
"assets/assets/images/mga-silver.png": "2e996f0fcd44f294c50a90d6662893b0",
"assets/assets/images/mixedEditionBadge.png": "e7a8dd9b5e3e59827b1041090910340e",
"assets/assets/images/dark_edged_splitfin.jpg": "51c00f50a667a5833a34b3498d8fad3b",
"assets/assets/images/XBct.png": "727773234415c4676af5cc13bec0af19",
"assets/assets/images/placeholder_badge.png": "de35c2f55bd9d418a414c50e0a38a028",
"assets/assets/images/settings_icon.png": "6ba7d3a726fcdb8afb087420eb5e3383",
"assets/assets/images/arrow_up_green.png": "a3faa2f2ccc0c42917d08470bfb1983a",
"assets/assets/images/card_attribute_stable.png": "aead0d03704cae431df353df9c1a41fb",
"assets/assets/images/icn_chevron_right.png": "faf073b97e13db64e8b3274e33098b91",
"assets/assets/images/img_boosterpack_card_edu_to_bronze.png": "a45662958ec0cd8d86d145222d935999",
"assets/assets/images/logout.png": "12acc13af4bd206521b496551ab77767",
"assets/assets/images/qr_information_img.png": "c4eb41c0c6baa46cea822a4892196f50",
"assets/assets/images/icon_tabbar3_active.png": "6b58b846295eef689592070e7d5867fb",
"assets/assets/images/standart_card_icon.png": "060852e1666e2bf90599745f547bfc75",
"assets/assets/images/ic_delete.png": "1c6403412db28694cd9bbf4e55f66b0d",
"assets/assets/images/splash_icon.png": "dfc5049d3651dd925a6003c083027f02",
"assets/assets/images/seychelles_magpie_robin.jpg": "06d2f0543efd496a902810f595c1a52b",
"assets/assets/images/black_white_colobus_monkey.jpg": "54da84fb86b18af7d2887906f40f43d8",
"assets/assets/images/card_attribute_down.png": "5c4b18f8eadec5c73a240a150ac0c1b1",
"assets/assets/images/share_for_nature_icon.png": "4b2a074fdeeb1dc8dbdaeaeee88dc081",
"assets/assets/images/3.0x/card_attribute_status_critically_endangered.png": "77eba4f71b5de0f799d0ae3470313798",
"assets/assets/images/3.0x/icn_alert.png": "3bcdb1d6fc73bdf452ba6fa74edf2545",
"assets/assets/images/3.0x/ic_arrow_right.png": "3cb6fd175e894c2ca51a113d7849c72c",
"assets/assets/images/3.0x/ic_freepik.png": "50074c762d0931b5a021de9601b03bfa",
"assets/assets/images/3.0x/icon_tabbar1_active.png": "e5aa486a0490a50c98a137a12b7899cd",
"assets/assets/images/3.0x/ic_birds.png": "6d2ec681d57d072146daa29936118a59",
"assets/assets/images/3.0x/img_secure_wallet.png": "e878a26e23d7f4cccbf7e73e88aff68c",
"assets/assets/images/3.0x/icn_info.png": "627427c593b40721382d05179d04e9d9",
"assets/assets/images/3.0x/general_ic_star.png": "af729aa4d4d0e2bb8f636a0e2c87eacb",
"assets/assets/images/3.0x/arrow_up.png": "dc74dabd70f644881022a2e13fbe0839",
"assets/assets/images/3.0x/icon_tabbar4_active.png": "cb2aaf1e97a198206764c409d3150ab0",
"assets/assets/images/3.0x/ic_mammalia.png": "5e6b454ed2c9ce4f11b4f626a93579f2",
"assets/assets/images/3.0x/icn_ok.png": "62c52b32a57fb95149276cbfc83ea6e9",
"assets/assets/images/3.0x/icn_faceid.png": "5c08ce394eb59791fe2ebdb79ad5894d",
"assets/assets/images/3.0x/no_collectibles.png": "774079fcbb8feb71da1a910d8328e552",
"assets/assets/images/3.0x/collection_detail_ic_on_sale.png": "a8e7f70deb034e5fb5864c973d3b6ab1",
"assets/assets/images/3.0x/silver_card_icon.png": "11b11adf9dd520310386db0d8913c518",
"assets/assets/images/3.0x/icn_arrow_down.png": "a1d0ef6001416ce91f78d1dc3a016095",
"assets/assets/images/3.0x/icn_choose_collection.png": "70eb67c8567ead0a689ea22bd6893865",
"assets/assets/images/3.0x/card_attribute_up.png": "dadd0c445ccb4bd9d80a3f6d9a1f90c4",
"assets/assets/images/3.0x/bronzeEditionBadge.png": "e6ee02d0e139bcf4416184ddee42783b",
"assets/assets/images/3.0x/mga-diamond.png": "849e78f831f6b9af04f85ae20acd47a3",
"assets/assets/images/3.0x/error_info_icon.png": "5b6bc1476b6265dc6aa89907c7a90757",
"assets/assets/images/3.0x/error_state_icon.png": "e7f53bf30e166fff2ab10aac2373e0b5",
"assets/assets/images/3.0x/ic_plants.png": "2289cd406238df3d478f54d91936bb7d",
"assets/assets/images/3.0x/empty_state_avatar.png": "e13f1747464acaf1a660332e20167556",
"assets/assets/images/3.0x/ic_greenlist_full.png": "94ad70780356343994dc84d61e88db00",
"assets/assets/images/3.0x/mga-silver.png": "06b87e6feed751dee3d903c326080308",
"assets/assets/images/3.0x/mixedEditionBadge.png": "81060a45c9f02071c000f5fdb5eb9432",
"assets/assets/images/3.0x/XBct.png": "5db4f2e7318ccdb87af0383cd659c26b",
"assets/assets/images/3.0x/placeholder_badge.png": "cfdd85e4c632c15497bc0d578d984bd0",
"assets/assets/images/3.0x/settings_icon.png": "3be560840775400b603075e16be17ad6",
"assets/assets/images/3.0x/arrow_up_green.png": "d7f56a3333bcf4bd8873fe003d44e970",
"assets/assets/images/3.0x/card_attribute_stable.png": "9fb8536e165a39380309b6c16408d5fa",
"assets/assets/images/3.0x/icn_chevron_right.png": "b1bb5d0a878af39394e8088a0a88c6a2",
"assets/assets/images/3.0x/img_boosterpack_card_edu_to_bronze.png": "7090d88ac392667a82eb7db25b300375",
"assets/assets/images/3.0x/logout.png": "e50fb31325c0d825945c30477a38c58b",
"assets/assets/images/3.0x/qr_information_img.png": "e01075d96f3cf8418a6f708558d69e87",
"assets/assets/images/3.0x/icon_tabbar3_active.png": "b18d685fb0523b3fc3f1a74b4f3f35d2",
"assets/assets/images/3.0x/standart_card_icon.png": "aa056c2ae382a6d1277830783e4a1a40",
"assets/assets/images/3.0x/ic_delete.png": "2ce95d2c80245445dc680f3f73511f18",
"assets/assets/images/3.0x/card_attribute_down.png": "80b4dff95a415e6439c0f223ddbfb999",
"assets/assets/images/3.0x/share_for_nature_icon.png": "395365f417018661352da6746b47f4f9",
"assets/assets/images/3.0x/Logo-H.png": "09f4c864bc2cf07bf62d3f0072b4067a",
"assets/assets/images/3.0x/arrow_down_green.png": "ebcfe096735cc928e059ec1a6c938b67",
"assets/assets/images/3.0x/ic_share.png": "20aa3fec8d1fa8ffbb0dd5cb41cdb7f2",
"assets/assets/images/3.0x/ic_key.png": "b5760b028e9ea64445e30cae214add0f",
"assets/assets/images/3.0x/gold_card_icon.png": "2341758d6a3578ead434cc6131e716e0",
"assets/assets/images/3.0x/img_boosterpack_card_silver_to_diamond.png": "c2bc204b3b8742a4018280ee86930f2d",
"assets/assets/images/3.0x/icon_tabbar5_active.png": "9babdc77696e1c63f02a512bff1413bf",
"assets/assets/images/3.0x/goldEditionBadge.png": "4d1125139e2f1f0fb6b57001292cd189",
"assets/assets/images/3.0x/mga-gold.png": "59e7be126f7077c3bb92094c70808528",
"assets/assets/images/3.0x/Logo-S.png": "3fd8ba778775164b34f8118c5ac610f8",
"assets/assets/images/3.0x/collected_cards_icon.png": "950a8ee6191b370cffde4def30666058",
"assets/assets/images/3.0x/bg_turtle.png": "b7c29fe5e6cfe998f8a37d12b6882013",
"assets/assets/images/3.0x/ic_nature_collectibles_logo.png": "954bfa17fbe8f2d6be3efb056f21ca1e",
"assets/assets/images/3.0x/ic_edit.png": "de1de64ee1edcb507fb4c777baea7b4a",
"assets/assets/images/3.0x/mga-bronze.png": "67d0b7d4cddc595f5e96f74eb0f9a045",
"assets/assets/images/3.0x/card_attribute_status_least_concern.png": "3120b6da40b70e74c4876f3b02a54e9b",
"assets/assets/images/3.0x/card_attribute_status_vulnerable.png": "4d9408c5eca8dfb73693f644f9e5bd72",
"assets/assets/images/3.0x/icnAwllogo.png": "6516ec69ed5ba932007e786d8e07f68a",
"assets/assets/images/3.0x/card_attribute_status_endangered.png": "815b5a9f424763d7f2721622b62a06a7",
"assets/assets/images/3.0x/bronce_card_icon.png": "7af3cb84f16ea6ea73ec9b68f9924b89",
"assets/assets/images/3.0x/ic_settings.png": "d3fce92f4afbaa89587060f0696e0b57",
"assets/assets/images/3.0x/hbar_token_icon.png": "a6632c05702b981be498fabe2a19cef3",
"assets/assets/images/3.0x/ic_copy.png": "bc1cf951bd66292b771417baf130853a",
"assets/assets/images/3.0x/ic_fish.png": "66b8806de39f67be6136ad76d9a04cf7",
"assets/assets/images/3.0x/resold_cards_icon.png": "77ae32bad5493bf57a2d19158f838500",
"assets/assets/images/3.0x/ic_onboarding_1.png": "ae777e62ed609386ecf7f968e9f55589",
"assets/assets/images/3.0x/footer.png": "9eb22cf962284c9d9bcd6a9293b4c097",
"assets/assets/images/3.0x/icn_close.png": "a209880db849b368a0792829ee9adcae",
"assets/assets/images/3.0x/ic_hbar_logo.png": "e405cfaa2b12dadbd4e247dbff7c8c09",
"assets/assets/images/3.0x/ic_imprint.png": "220bf314921b7cbd9718b76b9fa13eb9",
"assets/assets/images/3.0x/diamond_card_icon.png": "b46700ba7501c6e7764949b37a2c1461",
"assets/assets/images/3.0x/ic_onboarding_3.png": "2c5a635e1ba8e06507e77f5dcced190c",
"assets/assets/images/3.0x/ic_send.png": "b1df6cdcbc2110b0b1e5f51d1966c2ef",
"assets/assets/images/3.0x/ic_porini_logo.png": "0b809a38ce7ae7635225537cdf749d0c",
"assets/assets/images/3.0x/ic_onboarding_2.png": "0a44350bd0a4e134a0f853af98f2af63",
"assets/assets/images/3.0x/ic_account.png": "65a7cfb671572a0e3fab79cc383d4499",
"assets/assets/images/3.0x/qr.png": "bf3bec8fa543cdccf9d357e505b05e83",
"assets/assets/images/3.0x/empty_state_icon.png": "08666579731a5fe94cb6d5314d33dd98",
"assets/assets/images/3.0x/icon_tabbar5.png": "e9a7186c79de31436f4dbe7bcbbfc43d",
"assets/assets/images/3.0x/spend_porini_icon.png": "72a6f71e13717cfcf0840147377e0c5c",
"assets/assets/images/3.0x/silverEditionBadge.png": "14faee1f0057a24bedbc80d65318fed1",
"assets/assets/images/3.0x/ic_arrow_down.png": "d3cfc447b880a26784740d1a2c7730fe",
"assets/assets/images/3.0x/ic_transaction_history.png": "8803348a48e4d6a303512b82784dfbcd",
"assets/assets/images/3.0x/icon_tabbar4.png": "dd74f05a1f60e29e49c09d4f433609d4",
"assets/assets/images/3.0x/img_earth_globe.png": "ea56ae6cedca32fbb601a75574036cce",
"assets/assets/images/3.0x/ic_receive.png": "182dd821ef90d0adae530d9ba439ecd2",
"assets/assets/images/3.0x/porini_token_icon.png": "5aac24ee866edba0fd85c550cf7d4cce",
"assets/assets/images/3.0x/open_link.png": "e9ac209befe728df3972e56acd4b8acc",
"assets/assets/images/3.0x/marketplace_ic_already_in_collection.png": "b0dfdffa6e776b7dd1fb3b0652d5a594",
"assets/assets/images/3.0x/mga-standard.png": "9218864963c6d9b21a378a32d9059d58",
"assets/assets/images/3.0x/union.png": "e16a18b8cda11d88eec39747e73dee77",
"assets/assets/images/3.0x/Logo-H2_3.png": "8c115b460345e0534a2adbe949586b54",
"assets/assets/images/3.0x/open_link_green.png": "0064c510807a024902f9b45c6fd81626",
"assets/assets/images/3.0x/icon_tabbar3.png": "de40fabd07acf40fea2bcafa214b6e63",
"assets/assets/images/3.0x/icn_nav_burger.png": "538e2df391be4ee2f1f9324e87f91600",
"assets/assets/images/3.0x/arrow_down.png": "783784426f79c570001422bde1c601e7",
"assets/assets/images/3.0x/icon_tabbar2.png": "ddd49662e22769d27d5956242ae5a0f1",
"assets/assets/images/3.0x/logoSCS.png": "59d83dccda55a0e7b068f3ac8c9fe95f",
"assets/assets/images/3.0x/ic_terms.png": "986d4e1550c1a837c2e0b94800fa9d85",
"assets/assets/images/3.0x/diamondEditionBadge.png": "309ab8f14d45f76bead486b117f5f236",
"assets/assets/images/3.0x/BW_PCT.png": "bfa9e38d6ad550515bbe113196c9a099",
"assets/assets/images/3.0x/icon_tabbar2_active.png": "92fd178c3d157c31811df0602741a612",
"assets/assets/images/3.0x/error_image.png": "b6b827dc02b51c085729b207f56a8b50",
"assets/assets/images/3.0x/icon_tabbar1.png": "3e2ec6422c265887386dd8e08355841e",
"assets/assets/images/Logo-H.png": "57f44bbfc8cf19e0e636c254c03c77e4",
"assets/assets/images/arrow_down_green.png": "8c4d0a30eaa6cd1acb994c76c7bf481b",
"assets/assets/images/ic_share.png": "4a84ffdb988d5969f1bee531d21410bc",
"assets/assets/images/ic_key.png": "c6069e37947865a7d0b62760b0ded493",
"assets/assets/images/BW_ImpactDollar.png": "7a5e1ed70ce396d150ca977a0e97f830",
"assets/assets/images/gold_card_icon.png": "17d2264144d560376dbca4f084775c95",
"assets/assets/images/img_boosterpack_card_silver_to_diamond.png": "bdb63447e734e7942abd33648a11e88a",
"assets/assets/images/icon_tabbar5_active.png": "716352daa52e012e7857549676d1d8e7",
"assets/assets/images/google_map_north_pole.png": "eaf3b4c37cb1ca979b802b4f32c378c8",
"assets/assets/images/goldEditionBadge.png": "33c6f74de8c37bf9fe8c28d04ea5c0ab",
"assets/assets/images/mga-gold.png": "f3b6be9132ea6ca2e501679a03c77b8c",
"assets/assets/images/Logo-S.png": "e17d92301912665c0b3e4921601a9787",
"assets/assets/images/4.0x/card_attribute_status_critically_endangered.png": "0ff1a3fa85a627acbecc2895d25e5eb2",
"assets/assets/images/4.0x/icn_alert.png": "3bcdb1d6fc73bdf452ba6fa74edf2545",
"assets/assets/images/4.0x/ic_arrow_right.png": "c82d895bd106e43c0d2d84382859f741",
"assets/assets/images/4.0x/ic_freepik.png": "63b756157d20d79bc3fede419614ee8b",
"assets/assets/images/4.0x/icon_tabbar1_active.png": "ebd1d1953d77065da340054fe48007f9",
"assets/assets/images/4.0x/ic_birds.png": "6d2ec681d57d072146daa29936118a59",
"assets/assets/images/4.0x/img_secure_wallet.png": "b229cbfef9bbc2818b26d6bc07e522bf",
"assets/assets/images/4.0x/icn_info.png": "627427c593b40721382d05179d04e9d9",
"assets/assets/images/4.0x/general_ic_star.png": "5fab4e505344e3bd7e182f0f26b74afb",
"assets/assets/images/4.0x/arrow_up.png": "dc74dabd70f644881022a2e13fbe0839",
"assets/assets/images/4.0x/icon_tabbar4_active.png": "c7978202a74e947fafce054f571e011c",
"assets/assets/images/4.0x/ic_mammalia.png": "5e6b454ed2c9ce4f11b4f626a93579f2",
"assets/assets/images/4.0x/icn_ok.png": "8661ad1539514070c648c891c098db99",
"assets/assets/images/4.0x/icn_faceid.png": "5c08ce394eb59791fe2ebdb79ad5894d",
"assets/assets/images/4.0x/no_collectibles.png": "774079fcbb8feb71da1a910d8328e552",
"assets/assets/images/4.0x/collection_detail_ic_on_sale.png": "4c4b8ec82ea7043fb9398dc2c416e52d",
"assets/assets/images/4.0x/silver_card_icon.png": "597257fe57b38b1d9bca0506c059b79b",
"assets/assets/images/4.0x/icn_arrow_down.png": "b2c166af27c530a221cd9e3b0d6d84bd",
"assets/assets/images/4.0x/icn_choose_collection.png": "5f7db18fda924895fcf36d50224f5456",
"assets/assets/images/4.0x/card_attribute_up.png": "286e68e7de136cbb303aff519412f00f",
"assets/assets/images/4.0x/bronzeEditionBadge.png": "bf71cd5b2c431e3f2cedaebb222e7ed7",
"assets/assets/images/4.0x/mga-diamond.png": "3fbc2f63352e739cb43db47d0ca616c4",
"assets/assets/images/4.0x/error_info_icon.png": "60d9046fba1398ca01936d882b0ee25d",
"assets/assets/images/4.0x/error_state_icon.png": "4e3741e5ff000ad1ae6e78fd858529d7",
"assets/assets/images/4.0x/ic_plants.png": "2289cd406238df3d478f54d91936bb7d",
"assets/assets/images/4.0x/empty_state_avatar.png": "259901c7fd69c99942f260c134ad2c45",
"assets/assets/images/4.0x/ic_greenlist_full.png": "bef6862da9e31ce528af239a3ef59d69",
"assets/assets/images/4.0x/mga-silver.png": "8c7fd66b40c60ae726ace1dea8097d97",
"assets/assets/images/4.0x/mixedEditionBadge.png": "2bb1da7b70add458af4a4494dd72f1c2",
"assets/assets/images/4.0x/placeholder_badge.png": "d4632c63759fd310523879bdb86d7770",
"assets/assets/images/4.0x/settings_icon.png": "18b10106d27e90cbd3242902ba5f7be0",
"assets/assets/images/4.0x/arrow_up_green.png": "d7f56a3333bcf4bd8873fe003d44e970",
"assets/assets/images/4.0x/card_attribute_stable.png": "61810275f1b8cd596081f1b76f9783d0",
"assets/assets/images/4.0x/icn_chevron_right.png": "b1bb5d0a878af39394e8088a0a88c6a2",
"assets/assets/images/4.0x/img_boosterpack_card_edu_to_bronze.png": "305fc94053db8ed05b722e1f4178ca80",
"assets/assets/images/4.0x/logout.png": "e50fb31325c0d825945c30477a38c58b",
"assets/assets/images/4.0x/qr_information_img.png": "3b6f4beb6e6f1667f5102e9191d411d0",
"assets/assets/images/4.0x/icon_tabbar3_active.png": "505d7c3ef4e685723a2d92ded90cfdd8",
"assets/assets/images/4.0x/standart_card_icon.png": "c549a28ee39a080d56b666b0b18d7d86",
"assets/assets/images/4.0x/ic_delete.png": "2b6a7e274ad6759df2e8f618627f011a",
"assets/assets/images/4.0x/card_attribute_down.png": "cf0fe47746063fbc19c85137e9b84362",
"assets/assets/images/4.0x/share_for_nature_icon.png": "3c42fd156f27a61a69e6f00a5d856e61",
"assets/assets/images/4.0x/Logo-H.png": "09f4c864bc2cf07bf62d3f0072b4067a",
"assets/assets/images/4.0x/arrow_down_green.png": "ebcfe096735cc928e059ec1a6c938b67",
"assets/assets/images/4.0x/ic_share.png": "17d512ddc51dfb94ce16dd9343b13c57",
"assets/assets/images/4.0x/ic_key.png": "84fdc902674d8ac7fa5dbf3ee714b018",
"assets/assets/images/4.0x/gold_card_icon.png": "aa7171d78bf421e0b171037961b630c5",
"assets/assets/images/4.0x/img_boosterpack_card_silver_to_diamond.png": "1f1d1f3dc421cd162ef2e11144d45c11",
"assets/assets/images/4.0x/icon_tabbar5_active.png": "b8a96b66589345db5466723867eaf1e1",
"assets/assets/images/4.0x/goldEditionBadge.png": "9196fe3ea7df0049ac963836c4b8eba9",
"assets/assets/images/4.0x/mga-gold.png": "da44a9329ef5518d221902a67f1b624c",
"assets/assets/images/4.0x/Logo-S.png": "3fd8ba778775164b34f8118c5ac610f8",
"assets/assets/images/4.0x/collected_cards_icon.png": "b726818f302ac2b7b7e8c1a0904810f9",
"assets/assets/images/4.0x/bg_turtle.png": "f82d76ebd028f33273f27a4186b01888",
"assets/assets/images/4.0x/ic_nature_collectibles_logo.png": "a63267c647aa11f519c4e2330d8046e3",
"assets/assets/images/4.0x/ic_edit.png": "e255b9d4ea0e5e910a44cd13095e9f4c",
"assets/assets/images/4.0x/mga-bronze.png": "5b0ff9ab34cfa43cdab3ca05ca89ed35",
"assets/assets/images/4.0x/card_attribute_status_least_concern.png": "8dcc5be6496c6570533f9c85bd17cd7e",
"assets/assets/images/4.0x/card_attribute_status_vulnerable.png": "c6d0dbfafd68785a97c830cc830da304",
"assets/assets/images/4.0x/icnAwllogo.png": "6516ec69ed5ba932007e786d8e07f68a",
"assets/assets/images/4.0x/card_attribute_status_endangered.png": "770fa00efa9fcef7294e65881eaeb56c",
"assets/assets/images/4.0x/bronce_card_icon.png": "b0e4d11007e029e0337a376e7930817c",
"assets/assets/images/4.0x/ic_settings.png": "0f56be21018b3876ddbfc498577587df",
"assets/assets/images/4.0x/hbar_token_icon.png": "7a5030f896d651e92f09013c87ebd309",
"assets/assets/images/4.0x/ic_copy.png": "c10a2f5d699134265c365edbb2ac7bfd",
"assets/assets/images/4.0x/ic_fish.png": "66b8806de39f67be6136ad76d9a04cf7",
"assets/assets/images/4.0x/resold_cards_icon.png": "c332a8bbca40caf0948af8ce457f30fb",
"assets/assets/images/4.0x/ic_onboarding_1.png": "f57479005b42a521c628111b07482919",
"assets/assets/images/4.0x/footer.png": "0b65f04389bc5d9062d65e4d66b8e64b",
"assets/assets/images/4.0x/icn_close.png": "a209880db849b368a0792829ee9adcae",
"assets/assets/images/4.0x/ic_hbar_logo.png": "33d22ecce3108a340fef9b96a26cb1ea",
"assets/assets/images/4.0x/ic_imprint.png": "0638fef4dbe827b79f85a6b4a67c5242",
"assets/assets/images/4.0x/diamond_card_icon.png": "99e100b0f25b9694e5632671586abb4e",
"assets/assets/images/4.0x/ic_onboarding_3.png": "108eb442ce7ef28ab4c76f26f005543d",
"assets/assets/images/4.0x/ic_send.png": "944aac0e783d2dd8eb944f04c46bc6cb",
"assets/assets/images/4.0x/ic_porini_logo.png": "85e517539e862467168223d7e48d391f",
"assets/assets/images/4.0x/ic_onboarding_2.png": "52228d333c56e8a6d2220be144c2e88a",
"assets/assets/images/4.0x/ic_account.png": "6dca4d8dc9cd553fe594a60d12fa635d",
"assets/assets/images/4.0x/qr.png": "bf3bec8fa543cdccf9d357e505b05e83",
"assets/assets/images/4.0x/empty_state_icon.png": "c4ca3383577771ba555810b63526a4c9",
"assets/assets/images/4.0x/icon_tabbar5.png": "96437391d263407929bd2aac949857d4",
"assets/assets/images/4.0x/spend_porini_icon.png": "22157fc723fcff382b9e51670567a0bd",
"assets/assets/images/4.0x/silverEditionBadge.png": "213eed68308976cf1165893f10e5c7a3",
"assets/assets/images/4.0x/ic_arrow_down.png": "b52dbff7bddae9b58e493e17fca806b7",
"assets/assets/images/4.0x/ic_transaction_history.png": "ef1c92c1d9931c4d03f62000eb4e5f5d",
"assets/assets/images/4.0x/icon_tabbar4.png": "0c3e6f7fbae44b64407b81f837a4632e",
"assets/assets/images/4.0x/img_earth_globe.png": "0e661e54984abbf38132b8061b152372",
"assets/assets/images/4.0x/ic_receive.png": "8caaadf4af0865b66f78267ecb3932c6",
"assets/assets/images/4.0x/porini_token_icon.png": "5e3fe5d1f6d0647be6ba85409eee20f0",
"assets/assets/images/4.0x/open_link.png": "e9ac209befe728df3972e56acd4b8acc",
"assets/assets/images/4.0x/marketplace_ic_already_in_collection.png": "1ed834838e78324f9f2fd0a912b53ea2",
"assets/assets/images/4.0x/mga-standard.png": "e2d7fb29149bcd5bb7fc02ba29499b48",
"assets/assets/images/4.0x/union.png": "6f88a0f56b5e054d424615f3692241ef",
"assets/assets/images/4.0x/Logo-H2_3.png": "8c115b460345e0534a2adbe949586b54",
"assets/assets/images/4.0x/icon_tabbar3.png": "fcef0d89bcfada39ff111bde2b29528f",
"assets/assets/images/4.0x/icn_nav_burger.png": "538e2df391be4ee2f1f9324e87f91600",
"assets/assets/images/4.0x/arrow_down.png": "783784426f79c570001422bde1c601e7",
"assets/assets/images/4.0x/icon_tabbar2.png": "ea3f31914c26f14232b14c26e475c535",
"assets/assets/images/4.0x/ic_terms.png": "b02b46191d25de3fae47256554505690",
"assets/assets/images/4.0x/diamondEditionBadge.png": "6d48cf701c9bcad2095c2f71fafdd26d",
"assets/assets/images/4.0x/BW_PCT.png": "bfa9e38d6ad550515bbe113196c9a099",
"assets/assets/images/4.0x/icon_tabbar2_active.png": "f1236351e17ca16e4fbac393c1263754",
"assets/assets/images/4.0x/error_image.png": "2af614a6375bf628f4ab6920d8246232",
"assets/assets/images/4.0x/icon_tabbar1.png": "2c47d940a1c0c8e67ecba307aaa8f30e",
"assets/assets/images/collected_cards_icon.png": "2c6d24147fcd801820a87a0f9b2c59fc",
"assets/assets/images/bg_turtle.png": "f7818306cd30d92028bc9da429821b56",
"assets/assets/images/ic_nature_collectibles_logo.png": "c308d860a8c86e39130c20407a1960a8",
"assets/assets/images/ic_edit.png": "0f6254d963091ab82da0caf89350a5d9",
"assets/assets/images/mga-bronze.png": "e2242b628d693adc5e616891acd5703d",
"assets/assets/images/card_attribute_status_least_concern.png": "170b19fd09f98f2101e388c695720f75",
"assets/assets/images/card_attribute_status_vulnerable.png": "ccb750c0d4638f027ac2db5f06ec1641",
"assets/assets/images/icnAwllogo.png": "c527df1652cbcb1fb0219373cc1318a4",
"assets/assets/images/card_attribute_status_endangered.png": "c9050eb3ada4d5c2d57b42b715ce26f8",
"assets/assets/images/babakoto.jpg": "d759af8d4b5f839f25fd5aae7978daba",
"assets/assets/images/bronce_card_icon.png": "2e45180c705c381353c5233aecd4aa62",
"assets/assets/images/ic_settings.png": "769bfec75d734e88f441abe2511a7999",
"assets/assets/images/splash_screen.png": "2868cdfaaef4f19f915a2fcdf7f43a82",
"assets/assets/images/hbar_token_icon.png": "516cd7e0bb74085441037a1912560dd6",
"assets/assets/images/ic_copy.png": "88aeace0bfb9c325cadd2b10ee4e11de",
"assets/assets/images/ic_fish.png": "66b8806de39f67be6136ad76d9a04cf7",
"assets/assets/images/resold_cards_icon.png": "28e5c4dba7243dede0e4e6f869b43f5c",
"assets/assets/images/ic_onboarding_1.png": "a324e29fe90ac1a04690725aab258bb6",
"assets/assets/images/footer.png": "e0284fcd4e2dad9ba7fc0a6261fe62f9",
"assets/assets/images/icn_close.png": "9ba08d46c2a715238c541592cf23bfbc",
"assets/assets/images/ic_hbar_logo.png": "583a4cccc101510aaa5fe37137834b94",
"assets/assets/images/mountain_hare.jpg": "a3ed9da748e92bdb3cbea261d7bab1c2",
"assets/assets/images/ic_imprint.png": "6f0f3ea9416cbb7eda68f4bd7e3a262b",
"assets/assets/images/diamond_card_icon.png": "dd50ccd7600e1c476f9e6c9a282d6df1",
"assets/assets/images/ic_onboarding_3.png": "655e37532e671f4ce460c2296bd1b126",
"assets/assets/images/ic_send.png": "98002233fdde9f79b7da3c5c8c6dcf1b",
"assets/assets/images/ic_porini_logo.png": "6b754d804ba893c9582bb389d2eeedb3",
"assets/assets/images/ic_onboarding_2.png": "58ef1e684f260ccc2bbbeb7fec7973c2",
"assets/assets/images/ic_account.png": "c7a09e7aaf85dc2842f2512a478003de",
"assets/assets/images/qr.png": "4b15ba98a28da796ac95d305ce8da556",
"assets/assets/images/empty_state_icon.png": "81864b66979bf08eb66f30e572d4f227",
"assets/assets/images/icon_tabbar5.png": "9e2175f73219b00850e0079c11cc550f",
"assets/assets/images/spend_porini_icon.png": "6e672c515bbb113f6bb55fb633cc5dec",
"assets/assets/images/silverEditionBadge.png": "e2565c041f0c6f7631f18609b30aa47e",
"assets/assets/images/ic_arrow_down.png": "f7451e3201f0b9da0703e9396d5a6999",
"assets/assets/images/ic_transaction_history.png": "395cf8e9b0c1b3026252552fb009f226",
"assets/assets/images/icon_tabbar4.png": "7680b2ed42785508d3e3e721d3340e2e",
"assets/assets/images/img_earth_globe.png": "6387c7ab7d86dba7cf77aa250cd8359e",
"assets/assets/images/ic_receive.png": "5f9a191cd39dcacfe4af9c9434e235ab",
"assets/assets/images/porini_token_icon.png": "9849a3ba36072364dac6989e40486f3c",
"assets/assets/images/open_link.png": "6527ac3974f56d8faf111a6703a4b4f7",
"assets/assets/images/hawksbill_turtle.jpg": "4c607e071b33fc24ad719e82592a94ab",
"assets/assets/images/marketplace_ic_already_in_collection.png": "3e249ce6966789a7bbf247d57e254a46",
"assets/assets/images/mga-standard.png": "78e61d85a9418a64e897bb99f771c06d",
"assets/assets/images/union.png": "f7ab18c2f0e8fac66f453bb368221dc6",
"assets/assets/images/harpy_eagle.jpg": "adb6621c863b1b3d84bd6973ea1b7cfe",
"assets/assets/images/Logo-H2_3.png": "f7f2b8b1b408e883745214a04ffd898d",
"assets/assets/images/open_link_green.png": "1f459bcc216e14de5163d3cae1d72a70",
"assets/assets/images/icon_tabbar3.png": "484e03ef195b6f0b74bbcce8b9fd1eff",
"assets/assets/images/branding_icon.png": "3a91b915f480517fe5bc4cd2b91ea7c7",
"assets/assets/images/icn_nav_burger.png": "f4c502522d74309b0d86ce01e36f8ef4",
"assets/assets/images/arrow_down.png": "750971e6bb8448ed081b8fbb1ac0d1e1",
"assets/assets/images/icon_tabbar2.png": "067997980f33cf0ce978bde6a30adc44",
"assets/assets/images/nosy_be_sportive_lemur.jpg": "42ba4c7533b72266833f24f65287792b",
"assets/assets/images/logoSCS.png": "39228e95e8d378f910a487978ddbb34b",
"assets/assets/images/ic_terms.png": "ec767976a9db9ea49080498ae1f43c5d",
"assets/assets/images/diamondEditionBadge.png": "c8668ba97969c7f54fae1f82f3a1354e",
"assets/assets/images/BW_PCT.png": "9e7789e9e49997bd4692ba8219763760",
"assets/assets/images/madagascar_fish_eagle.jpg": "0ed58c3bf9edc7fbcb5d82689c1d31a6",
"assets/assets/images/icon_tabbar2_active.png": "1e559878f0bc8a61e87228120e75e222",
"assets/assets/images/error_image.png": "45b20212b20eef7904d440001b84b10b",
"assets/assets/images/mossy_leaf_tailed_gecko.jpg": "110b9b22073388727176b36abe1ca7b4",
"assets/assets/images/icon_tabbar1.png": "a3df74ba54888273edb3dbd74c1f2aa6",
"assets/assets/images/achievements_background.jpg": "2964acdba32bdf4c543553893ae7aec1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
