'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "80d3289dab262da73a781a1a1315e074",
"index.html": "e2e76877244bbe8650bea158b7e516a7",
"/": "e2e76877244bbe8650bea158b7e516a7",
"main.dart.js": "282a2614253493291b46a927d43f589c",
"flutter.js": "d8665dd01ecc8a9bc0e78496f50a06b6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df8ee12e5d40a884cc23acd0588bda1c",
"assets/AssetManifest.json": "2567d971b3a00ac9930b8be77373a46f",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "7568672b83f408341c5ae1acb38e215b",
"assets/FontManifest.json": "a6a74086cc9fa0a4e9553efa1c398044",
"assets/packages/litepack_common/fonts/InterTight-Italic-VariableFont_wght.ttf": "2d1fb38d07162e7238f25df46bc9a4f0",
"assets/packages/litepack_common/fonts/InterTight-VariableFont_wght.ttf": "ef56c3ecd7e21316a13af58ba2b9e5c7",
"assets/packages/litepack_common/assets/vectors/user.svg": "8c53ffb592ae422591a17d1793d0c52a",
"assets/packages/litepack_common/assets/vectors/briefcase.svg": "a4a3725317ce024b576ccced1b0c42bf",
"assets/packages/litepack_common/assets/vectors/delete_icon.svg": "a807fa26bcc24dd69eed375437a79461",
"assets/packages/litepack_common/assets/vectors/delivery.svg": "635885590fd7b7f6af0d531b773d7afe",
"assets/packages/litepack_common/assets/vectors/edit_icon.svg": "c1e70d2b686211918a7f12886e4c7469",
"assets/packages/litepack_common/assets/vectors/status_ok_filled.svg": "f065765d41c6686a77d8e6b4c82e233f",
"assets/packages/litepack_common/assets/vectors/settings.svg": "192aecbe23b017c088e589a0b54a99fb",
"assets/packages/litepack_common/assets/vectors/search_icon_mini.svg": "ab2195065d3d9d1bba6151895b5ff798",
"assets/packages/litepack_common/assets/vectors/arrow_back_filled.svg": "e10acd432eaacf73aa18f247dfee4731",
"assets/packages/litepack_common/assets/vectors/pickup.svg": "e05ba96b220d8458c9789a68f795d771",
"assets/packages/litepack_common/assets/vectors/arrow_right.svg": "98db9648881cf5c028e1e46b2e39845b",
"assets/packages/litepack_common/assets/vectors/switch_user.svg": "5fdeb15916f3ff0799b3de9a20791ad1",
"assets/packages/litepack_common/assets/vectors/card.svg": "066fed2ed63eb549fbf9ae291800f51f",
"assets/packages/litepack_common/assets/vectors/camera_green.svg": "778f28835fbf83964d0c84b612163344",
"assets/packages/litepack_common/assets/vectors/delete_filled.svg": "b38d8b345836a3c0afcd0ee7495e05af",
"assets/packages/litepack_common/assets/vectors/no_internet_connection.svg": "488b0bf5a1f42e0829e33e40c0da1d9f",
"assets/packages/litepack_common/assets/vectors/radio_button_on.svg": "390e5d0eb2a962de57e26b9877fa0e49",
"assets/packages/litepack_common/assets/vectors/alert_mini_filled_white.svg": "7425d67269d2b2a391cf7e4e0f44f208",
"assets/packages/litepack_common/assets/vectors/plus_circle.svg": "89e259e41004c7d8806a220ac1711276",
"assets/packages/litepack_common/assets/vectors/clear_filled.svg": "4a8dc841f9d9ed26e3d0870b7356bf48",
"assets/packages/litepack_common/assets/vectors/cash.svg": "3fe50a20d4ca67cce55a177e008395a8",
"assets/packages/litepack_common/assets/vectors/alert_mini_filled.svg": "b2e639b7f5e4865678bf0cc799f859ba",
"assets/packages/litepack_common/assets/vectors/radio_button_off.svg": "5da9c39ab08fa9b8190dfa6b66c5a20b",
"assets/packages/litepack_common/assets/vectors/close_filled.svg": "bd7178b1179e7aa66216583af9f6e434",
"assets/packages/litepack_common/assets/vectors/arrow_back_filled_white.svg": "90033251cf5037e272c7e254ce6a1eb0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/circle_flags/assets/svg/hn.svg": "e1e066e80767cfe830026ae09eafcc5a",
"assets/packages/circle_flags/assets/svg/dm.svg": "4d90ade9aa265fc48c9aff0b1be5e919",
"assets/packages/circle_flags/assets/svg/fr.svg": "f8eb4977b540e0061fff1083b20d4377",
"assets/packages/circle_flags/assets/svg/dz.svg": "81c542cc9c3eed9b2901402868370a8d",
"assets/packages/circle_flags/assets/svg/ga.svg": "c01b3a0105f28ae37b9bbc2661ed2565",
"assets/packages/circle_flags/assets/svg/ph.svg": "e8ba0912f6f8e2ad603b966540511347",
"assets/packages/circle_flags/assets/svg/ss.svg": "d2370529dbb3e090a4db66d856f7527f",
"assets/packages/circle_flags/assets/svg/rw.svg": "1e2b64d0ca702e9c166e6aa6a8a25ec7",
"assets/packages/circle_flags/assets/svg/es-ib.svg": "40ad6feef01064938cb741af68a25ca4",
"assets/packages/circle_flags/assets/svg/sd.svg": "2df0511e89ccff16325df02e795a4adb",
"assets/packages/circle_flags/assets/svg/hausa.svg": "9a83dad6facbe7da17fee9cdeb0938b3",
"assets/packages/circle_flags/assets/svg/se.svg": "7396469458dffa7c1ec99f506e828b5a",
"assets/packages/circle_flags/assets/svg/sr.svg": "66b316222fcad7113d15a0b89cc9bbe1",
"assets/packages/circle_flags/assets/svg/eh.svg": "fe53008c7626792ee0e3bcdb24eb26b9",
"assets/packages/circle_flags/assets/svg/gw.svg": "348dad3673dfe6004ee0b675a49f77f4",
"assets/packages/circle_flags/assets/svg/es-pv.svg": "290d42d66b6e93eb7e3ddde33f1c50c2",
"assets/packages/circle_flags/assets/svg/jp.svg": "fe9962c9b147543656765ae9c3e70cae",
"assets/packages/circle_flags/assets/svg/hm.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/je.svg": "f59ffe9a3faae24cb6d3aa1bfc69de18",
"assets/packages/circle_flags/assets/svg/gu.svg": "0487468b04ba93e5c77b25274f811537",
"assets/packages/circle_flags/assets/svg/gb.svg": "106f5c7c1d3a0df64d60bd8a0d17680e",
"assets/packages/circle_flags/assets/svg/pk.svg": "ab4fe19e3e1a45a1a5aa87960a788488",
"assets/packages/circle_flags/assets/svg/sg.svg": "5d5bdb0d940a36aba1bef299222743c1",
"assets/packages/circle_flags/assets/svg/kurdistan.svg": "741ccd3babdcb24d72428af01263af47",
"assets/packages/circle_flags/assets/svg/northern_cyprus.svg": "b99e898aaf75ecf42727ac9b3764a5a2",
"assets/packages/circle_flags/assets/svg/ru.svg": "839ee62b646310b857b1679b54ae5f4c",
"assets/packages/circle_flags/assets/svg/do.svg": "00a61779a588b564b26cc4b276f43be1",
"assets/packages/circle_flags/assets/svg/gt.svg": "cda3aef87638b5b1a9a0dd76bcc8dc4f",
"assets/packages/circle_flags/assets/svg/us-hi.svg": "3dc47ef92dc763fd0f95f847c8235f7c",
"assets/packages/circle_flags/assets/svg/kw.svg": "88a9a029209d7781c0c11dbd3e7bcfff",
"assets/packages/circle_flags/assets/svg/sh-hl.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/il.svg": "40b2f701cccb3374067946e1751d3d2e",
"assets/packages/circle_flags/assets/svg/gg.svg": "a5a8b9eb8ef644f39c5037da4b143e5b",
"assets/packages/circle_flags/assets/svg/gp.svg": "88c2095c1d5b9eb67906b273dbf19893",
"assets/packages/circle_flags/assets/svg/dk.svg": "4da8f611498458c86a3cc0feafe9f2e2",
"assets/packages/circle_flags/assets/svg/sb.svg": "973491fc588823e54a3bb8b1f1806921",
"assets/packages/circle_flags/assets/svg/py.svg": "b879aeb7a091ce4e433710db6b0b4355",
"assets/packages/circle_flags/assets/svg/pn.svg": "6cf5dce6ce5971f6b64bbe21d9601f21",
"assets/packages/circle_flags/assets/svg/fr-h.svg": "43089b2c762b067a316ee6dbc954ebf8",
"assets/packages/circle_flags/assets/svg/bq-bo.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/st.svg": "25911ebe140d36c94f405cc6041a5167",
"assets/packages/circle_flags/assets/svg/sc.svg": "a99c39ec468f7f30726dc0bd1ec0a30f",
"assets/packages/circle_flags/assets/svg/dj.svg": "15c3c2b832e24791ba2cf68cee1ddf0b",
"assets/packages/circle_flags/assets/svg/gq.svg": "5890884b214d2c12fd9f2a448695fd2d",
"assets/packages/circle_flags/assets/svg/esperanto.svg": "b6d57fb0c24ebce04220870aff30e035",
"assets/packages/circle_flags/assets/svg/gf.svg": "ecb5d6990b83932d031980964f652c3e",
"assets/packages/circle_flags/assets/svg/kr.svg": "ce45246807f9d517c9f3791f69939e46",
"assets/packages/circle_flags/assets/svg/im.svg": "f5054ba360c196c53bc9410bcfcc5292",
"assets/packages/circle_flags/assets/svg/ke.svg": "9b414a3bd6f825654ede89172de6cf42",
"assets/packages/circle_flags/assets/svg/kg.svg": "4a37a402786d1bf4ff500caadeb0f76f",
"assets/packages/circle_flags/assets/svg/hk.svg": "9d2df129593fff7d297fe22e90460917",
"assets/packages/circle_flags/assets/svg/kp.svg": "a83222b2d9152b65538dec35d09969dd",
"assets/packages/circle_flags/assets/svg/io.svg": "2270085857db59b2b6d576504fb2a839",
"assets/packages/circle_flags/assets/svg/gd.svg": "95309fac39e70b44cc36df81d69b94ac",
"assets/packages/circle_flags/assets/svg/gs.svg": "4728036cce38ab7b41e20d0a7b9bf847",
"assets/packages/circle_flags/assets/svg/sa.svg": "ab8d4ba846bd8e3a5c211da92f215e6d",
"assets/packages/circle_flags/assets/svg/re.svg": "16ec0a3f3334115dde5125bb453eefae",
"assets/packages/circle_flags/assets/svg/pm.svg": "81eaa34ed80b925ca6197cada5cdb9a8",
"assets/packages/circle_flags/assets/svg/sv.svg": "cfe7380b093828f1609ff709adf61b20",
"assets/packages/circle_flags/assets/svg/es-variant.svg": "3902bb17032f3f68e80d5e4351605e78",
"assets/packages/circle_flags/assets/svg/rs.svg": "a995e1e300551178751e422f1b810dda",
"assets/packages/circle_flags/assets/svg/pl.svg": "93e96e132d4357fc98c9ea257cc44583",
"assets/packages/circle_flags/assets/svg/gr.svg": "6e60512ccae8faf69d66fcd3db947ccc",
"assets/packages/circle_flags/assets/svg/ge.svg": "7a4eb95de109613e2f401ea09dfcf9e8",
"assets/packages/circle_flags/assets/svg/in.svg": "06d51a462030a6065253ff0709b7a19b",
"assets/packages/circle_flags/assets/svg/mv.svg": "27371507bc0fd45f4de4b0eaac241f46",
"assets/packages/circle_flags/assets/svg/lr.svg": "f6a01fbd251db505a30f130623fe18c2",
"assets/packages/circle_flags/assets/svg/ma.svg": "8b2b3efe3d903f9b6a917f9b7e9b4a8c",
"assets/packages/circle_flags/assets/svg/nz.svg": "69439867cc71f89c6a94aedc748af601",
"assets/packages/circle_flags/assets/svg/au.svg": "684f6a8ed8fc024181974a721b2f841d",
"assets/packages/circle_flags/assets/svg/bn.svg": "225c366e11cb68905c1ee127a80402ed",
"assets/packages/circle_flags/assets/svg/by.svg": "964d8abf2f4aa07de1da875ab2206481",
"assets/packages/circle_flags/assets/svg/tt.svg": "52c1733868446f64fef5003b838068f0",
"assets/packages/circle_flags/assets/svg/ug.svg": "95ae11d0f72a5e4891523d0fee48e3f7",
"assets/packages/circle_flags/assets/svg/tc.svg": "5caf39764cb15e0709e652e94e986f5e",
"assets/packages/circle_flags/assets/svg/somaliland.svg": "2629d69fe6199ba15e457336520ad1c4",
"assets/packages/circle_flags/assets/svg/es-ct.svg": "4cf48425dcfa48bd4e2b56f612b3ba0d",
"assets/packages/circle_flags/assets/svg/ye.svg": "c51cacdcb38497fef0550f194a72d7bf",
"assets/packages/circle_flags/assets/svg/ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/ck.svg": "dc0b2706e9bed3b7086639ad1721a180",
"assets/packages/circle_flags/assets/svg/bo.svg": "14aba2a82a6b42eb86d47f6a6284658a",
"assets/packages/circle_flags/assets/svg/at.svg": "087cdf6b4741896b5fe42a1a019e4859",
"assets/packages/circle_flags/assets/svg/it-82.svg": "56a874b68c6aa074e1197b3447949c96",
"assets/packages/circle_flags/assets/svg/ls.svg": "cbc5db3a3f03615cf9cadc23e740ee1f",
"assets/packages/circle_flags/assets/svg/mw.svg": "fecbd81c8f515994e86c67612f8cba3c",
"assets/packages/circle_flags/assets/svg/nl.svg": "94f110dcfe37cba0290f966dd5359259",
"assets/packages/circle_flags/assets/svg/mu.svg": "b36ca35897f653cd9d5e1d8ab7b925c0",
"assets/packages/circle_flags/assets/svg/ci.svg": "526c99fc456aed2ede320a3a44552a06",
"assets/packages/circle_flags/assets/svg/bm.svg": "53e4b5358eeff31139276d2d008e21d7",
"assets/packages/circle_flags/assets/svg/bz.svg": "1dcacf986aeeaf8e43fb9bf4fd777c4f",
"assets/packages/circle_flags/assets/svg/tw.svg": "0f92646f3f1c384fd31db6e11504f4b4",
"assets/packages/circle_flags/assets/svg/us.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/bq-sa.svg": "52ed892c88ef61e42e1c3465362db300",
"assets/packages/circle_flags/assets/svg/maori.svg": "780a41357161eda9c3ed73ad1f8fb197",
"assets/packages/circle_flags/assets/svg/gb-ork.svg": "55041097d3b91b8de580d6c68a7e7ba6",
"assets/packages/circle_flags/assets/svg/ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/vi.svg": "c037a1d1a843f2dfdf79d1f71d776280",
"assets/packages/circle_flags/assets/svg/tv.svg": "a7eda155b40cb801fe9241b68eae5e83",
"assets/packages/circle_flags/assets/svg/bl.svg": "c813413a12855888ccd979df6b4a3ab3",
"assets/packages/circle_flags/assets/svg/aw.svg": "41e4a727f4960628e98923f98a2c56e2",
"assets/packages/circle_flags/assets/svg/ch.svg": "2f2cb6a2d15e64be332d8d488d3006ca",
"assets/packages/circle_flags/assets/svg/mc.svg": "a3d94920055ecaf056afb18277c2ca4d",
"assets/packages/circle_flags/assets/svg/mt.svg": "dfc9e91b66c8fcf3613b2075fcb952fe",
"assets/packages/circle_flags/assets/svg/no.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/lc.svg": "8b4adb02d5dae577f1e12015518e49ec",
"assets/packages/circle_flags/assets/svg/mg.svg": "0ff81480075cbebcc7b0304cc939e479",
"assets/packages/circle_flags/assets/svg/lt.svg": "f90d4d0df85d57a86b7ae09809e21b0c",
"assets/packages/circle_flags/assets/svg/tibet.svg": "0b1b4721d2e507f50d57868263398959",
"assets/packages/circle_flags/assets/svg/mp.svg": "ab4edb746288b44caa1475bf8e7216d6",
"assets/packages/circle_flags/assets/svg/ad.svg": "89b7675faf3014508b3e55b18224f0ef",
"assets/packages/circle_flags/assets/svg/cl.svg": "69f0f9526b171eb1c0e6168fb5fe178a",
"assets/packages/circle_flags/assets/svg/as.svg": "65f8dee7ba68cd59d69731c395aaa8b6",
"assets/packages/circle_flags/assets/svg/bh.svg": "c16d2afd114265d947e946db7d021cec",
"assets/packages/circle_flags/assets/svg/ua.svg": "6c0f32b588419a29795dc2f396d4baaf",
"assets/packages/circle_flags/assets/svg/yiddish.svg": "3c4832acb4d8a2c13290e6221c055193",
"assets/packages/circle_flags/assets/svg/tr.svg": "245ead5bb540880d309ac8f0086ca560",
"assets/packages/circle_flags/assets/svg/sh-ta.svg": "54ffc77512cd8a4d0aae57e82f8d115f",
"assets/packages/circle_flags/assets/svg/nato.svg": "cdf78a6e76cb756a074668f51f5a4aff",
"assets/packages/circle_flags/assets/svg/bq-se.svg": "3e551d07e69dbcc311e3db6e5f7ec2ef",
"assets/packages/circle_flags/assets/svg/yt.svg": "d47884b93bfed3eb63c0a53e283c9e09",
"assets/packages/circle_flags/assets/svg/es-ce.svg": "4b77e8a38b294567848c5bbbcfdc61e5",
"assets/packages/circle_flags/assets/svg/td.svg": "8d662163422a1017dcf5feaaa0a89ae2",
"assets/packages/circle_flags/assets/svg/bi.svg": "fb54479ca4a35ce10471d7876dbb0f2b",
"assets/packages/circle_flags/assets/svg/ar.svg": "22bbd3b859135396d5730cab8e0faa12",
"assets/packages/circle_flags/assets/svg/cm.svg": "59543e68e1a774db1a75092c6ad22a98",
"assets/packages/circle_flags/assets/svg/ae.svg": "43158b83ebde34baa15ecfe1fe132470",
"assets/packages/circle_flags/assets/svg/cz.svg": "dd724558a466f4f4ee069f39fff62818",
"assets/packages/circle_flags/assets/svg/mq.svg": "237aebaa3473d9b3b378e5701659a239",
"assets/packages/circle_flags/assets/svg/lu.svg": "5bb7b44f4447b23c0599be9018c6ab86",
"assets/packages/circle_flags/assets/svg/mf.svg": "cd673c838473fd13e132e2484ae24aac",
"assets/packages/circle_flags/assets/svg/lb.svg": "a465a8b4aff49a86c11bcbe3589328e4",
"assets/packages/circle_flags/assets/svg/md.svg": "6dacb299c8e879ede7a67e557be88784",
"assets/packages/circle_flags/assets/svg/ms.svg": "488b3eab793b471fe8a1cd671067b91e",
"assets/packages/circle_flags/assets/svg/ag.svg": "ee8aea90d169850d7c3a43643ec2fb59",
"assets/packages/circle_flags/assets/svg/cx.svg": "bd82abf700acd550d17a82bc26dc8e64",
"assets/packages/circle_flags/assets/svg/sh-ac.svg": "f80befc6bb09c504fd69508b340ffa86",
"assets/packages/circle_flags/assets/svg/co.svg": "a343c4b17cdc9b56ad71ba1e0de1b5d2",
"assets/packages/circle_flags/assets/svg/es-ml.svg": "6fa87d6de5b0aa9ff692b8158b0d6929",
"assets/packages/circle_flags/assets/svg/tf.svg": "6d41d1a5b400beb74213c17bc67e9844",
"assets/packages/circle_flags/assets/svg/vn.svg": "aeb24c3f5309494bc256e04b5fcda385",
"assets/packages/circle_flags/assets/svg/zm.svg": "fba9f9ee5a6034fed1483b56e3f5a78f",
"assets/packages/circle_flags/assets/svg/gb-sct.svg": "d0351c4d43a3f3f110d708709f553cda",
"assets/packages/circle_flags/assets/svg/kannada.svg": "2648ec163d71181ee1d1cba0cc06ef72",
"assets/packages/circle_flags/assets/svg/tg.svg": "842212033bc37af4a47814e9cce03825",
"assets/packages/circle_flags/assets/svg/cn.svg": "33bc8425ef551d9f442c6c231b19c0b0",
"assets/packages/circle_flags/assets/svg/bj.svg": "f3bc44b414a8085fd4ac4b74bdfdbdee",
"assets/packages/circle_flags/assets/svg/aq.svg": "f2e93396d986f788f57bb8c8caec7aa3",
"assets/packages/circle_flags/assets/svg/cy.svg": "ff143ee1a95fdb2806addb8f123f9973",
"assets/packages/circle_flags/assets/svg/af.svg": "ed52837b76b3344324e6dac01b16b0bc",
"assets/packages/circle_flags/assets/svg/lv.svg": "955c9b9fbc7c495ed7edbb2133c1e3e2",
"assets/packages/circle_flags/assets/svg/om.svg": "3f98a1426fac16eadc5706a209b7dfc4",
"assets/packages/circle_flags/assets/svg/mr.svg": "48cf1e4b5dd10fc85ddf2f64b17c03b7",
"assets/packages/circle_flags/assets/svg/ni.svg": "4f75194fba70bd74c98b7fadafc48eef",
"assets/packages/circle_flags/assets/svg/la.svg": "2f670c6d617823c1ecf80ed22dc4f06b",
"assets/packages/circle_flags/assets/svg/me.svg": "b7e44ea3f52feb5eedf3000a71390363",
"assets/packages/circle_flags/assets/svg/mh.svg": "95c8d96a5e5a56c0d967d64c25e31382",
"assets/packages/circle_flags/assets/svg/gb-wls.svg": "38bc63f22463f3515144e305d31f9d75",
"assets/packages/circle_flags/assets/svg/cc.svg": "1efea451d3404a0de1c007fe10436eba",
"assets/packages/circle_flags/assets/svg/bg.svg": "c04b3b71c8cdc255c27d64ef11ef8ac3",
"assets/packages/circle_flags/assets/svg/tj.svg": "e50d19d84862233e45387f998d5c796c",
"assets/packages/circle_flags/assets/svg/vu.svg": "ede1218c12210aefaeb56cdb7c585f7c",
"assets/packages/circle_flags/assets/svg/wf.svg": "2d5f8e4cf4bcb23643bd2a819dad8acb",
"assets/packages/circle_flags/assets/svg/uy.svg": "ce36b1fde94b9e32a0868efcfbd239aa",
"assets/packages/circle_flags/assets/svg/za.svg": "c5883cb64e958cd98a103b2df8c68649",
"assets/packages/circle_flags/assets/svg/zw.svg": "ef4f4ac72c1247cd9715492f11284336",
"assets/packages/circle_flags/assets/svg/vc.svg": "c1dacf0b7be831c5d76f2f1e39d8695e",
"assets/packages/circle_flags/assets/svg/ca-bc.svg": "18d129f55796f28217e5368f096d97bc",
"assets/packages/circle_flags/assets/svg/tk.svg": "90c74fc0eb5727469333cc9be72e4fc9",
"assets/packages/circle_flags/assets/svg/bf.svg": "2bd8b89e7b9f329f9636d3588d60c9c1",
"assets/packages/circle_flags/assets/svg/bq.svg": "2e33672677f003fc1706bcf38dfee72f",
"assets/packages/circle_flags/assets/svg/cu.svg": "26857a69d78fb2ec36e439d435589a25",
"assets/packages/circle_flags/assets/svg/ne.svg": "ee61581e941c96e5a18e081bbb8e038a",
"assets/packages/circle_flags/assets/svg/nr.svg": "7db9ac8fad539857d637110db31cc561",
"assets/packages/circle_flags/assets/svg/mk.svg": "1a8049eadc2b6c5a419d463424edf981",
"assets/packages/circle_flags/assets/svg/np.svg": "1838bca752dc49398794161b3e3ef3c9",
"assets/packages/circle_flags/assets/svg/ng.svg": "5c430af7aada0e26ce1fc2ec0f1fbdad",
"assets/packages/circle_flags/assets/svg/bs.svg": "e00480ec602269f3d2f356ed88760cd0",
"assets/packages/circle_flags/assets/svg/cw.svg": "aa010b115b2e25d743f9e6de55bc255b",
"assets/packages/circle_flags/assets/svg/bd.svg": "aa6eb8bc767dabcfe4612ac98da2b6f5",
"assets/packages/circle_flags/assets/svg/um.svg": "4281df1053156e9f9d4608aa28a0fb85",
"assets/packages/circle_flags/assets/svg/va.svg": "4d77e062e0b68a361fcf5dad55085f0a",
"assets/packages/circle_flags/assets/svg/uz.svg": "8f5dd129f3f134ea6acaaa1eaccc1cc8",
"assets/packages/circle_flags/assets/svg/xk.svg": "691fbb7fb344d34bed8431105ea95c24",
"assets/packages/circle_flags/assets/svg/ec-w.svg": "0027f5bd4872d5906a9b4476478d4f8a",
"assets/packages/circle_flags/assets/svg/ws.svg": "8a51f7d2114dfd16fa68f258a1541825",
"assets/packages/circle_flags/assets/svg/th.svg": "07eebb9921f05fcd67133a994b1de346",
"assets/packages/circle_flags/assets/svg/ca.svg": "f9299ca944f3ba88b92d3e8bf166cdac",
"assets/packages/circle_flags/assets/svg/be.svg": "cae09b00847008df8bb6e74ab7d25770",
"assets/packages/circle_flags/assets/svg/cv.svg": "7838e341fdee013e76a8a0f02e02a896",
"assets/packages/circle_flags/assets/svg/ai.svg": "3a3b21bddea6d67a13b28411e70451f7",
"assets/packages/circle_flags/assets/svg/br.svg": "02d17088bb4aaf4527bbb2261b9a3aeb",
"assets/packages/circle_flags/assets/svg/ly.svg": "21d21965596bb14a6f50961e1b45915b",
"assets/packages/circle_flags/assets/svg/nf.svg": "fc331cd706a83a3cacbbaeaf68af8f8c",
"assets/packages/circle_flags/assets/svg/it-88.svg": "c90a93eadf4f50443f33b5b6e5b892e4",
"assets/packages/circle_flags/assets/svg/my.svg": "15a8ec6f22b16844597f5cd9dbb7f698",
"assets/packages/circle_flags/assets/svg/united_nations.svg": "ace4d8cc09fda98cc416b17ca976ae94",
"assets/packages/circle_flags/assets/svg/mn.svg": "d89b351b7a3f47e05c5035f8fcbc0b64",
"assets/packages/circle_flags/assets/svg/nu.svg": "7e5ffcccd7f8261cac29066ee378b8ee",
"assets/packages/circle_flags/assets/svg/az.svg": "0a46d81b9f4d6e74df6c0a553c8f616e",
"assets/packages/circle_flags/assets/svg/ba.svg": "ee48e572ba1aca5dddd3f532157c2f7d",
"assets/packages/circle_flags/assets/svg/bv.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/am.svg": "2ae7caa5b6e139b07c8ea08219c97a3b",
"assets/packages/circle_flags/assets/svg/cr.svg": "b40308827907504485607b95c68072b2",
"assets/packages/circle_flags/assets/svg/tl.svg": "9e56b5b168d1f3f1c63224574fe2138d",
"assets/packages/circle_flags/assets/svg/xx.svg": "e7211fa8bc91a38a9f0cdc104560de73",
"assets/packages/circle_flags/assets/svg/european_union.svg": "9b140a871cc76b99499cb4da03a4046b",
"assets/packages/circle_flags/assets/svg/south_ossetia.svg": "9103c2bf68a2cfd62683b0f5e0fc5741",
"assets/packages/circle_flags/assets/svg/tm.svg": "dee9a77e197c95c514993e76c8ec773b",
"assets/packages/circle_flags/assets/svg/tz.svg": "58737e5afc27d0776101152943b49c0b",
"assets/packages/circle_flags/assets/svg/ve.svg": "3bea8466103da76add3fec9f754f1c39",
"assets/packages/circle_flags/assets/svg/al.svg": "b446bc5e6def7dd1ac2eba18a85eabed",
"assets/packages/circle_flags/assets/svg/bw.svg": "5f244372b0faf6f7884465c008b0215e",
"assets/packages/circle_flags/assets/svg/cd.svg": "eec94b8481f006513b9507a8a9967ce1",
"assets/packages/circle_flags/assets/svg/lk.svg": "1c3ab16dd25d4dd631955fa6e359e218",
"assets/packages/circle_flags/assets/svg/mo.svg": "ae4cbc769c622ddac3222c848c50e270",
"assets/packages/circle_flags/assets/svg/mx.svg": "eba2f3900bc96e43df95b08ff5680c0d",
"assets/packages/circle_flags/assets/svg/nc.svg": "fc309bf7c91a0dc20f2a7e91bb74fffe",
"assets/packages/circle_flags/assets/svg/na.svg": "d99b27fe92f05056d239f1b1369a559a",
"assets/packages/circle_flags/assets/svg/mz.svg": "a237483ad034d6b93ded6130e5a28b22",
"assets/packages/circle_flags/assets/svg/li.svg": "aeabe40f9d0d856ea15abf280f9f8a97",
"assets/packages/circle_flags/assets/svg/easter_island.svg": "ef05c647c03de345776b876b64339d09",
"assets/packages/circle_flags/assets/svg/mm.svg": "62ac27359e8fd15428ebb0312047b59b",
"assets/packages/circle_flags/assets/svg/cf.svg": "c6bd4164c18408f225007f5974cfcd3c",
"assets/packages/circle_flags/assets/svg/bb.svg": "f01c3e98ab28dc4706ac9b19ae136515",
"assets/packages/circle_flags/assets/svg/an.svg": "0ceac729df9bb062f9f7337f1349741f",
"assets/packages/circle_flags/assets/svg/vg.svg": "1119c051959cb02049b2bf91de21f217",
"assets/packages/circle_flags/assets/svg/to.svg": "b936fe5947c7062a5dccdd5776a2dc99",
"assets/packages/circle_flags/assets/svg/es-cn.svg": "eda9ddb6623e7f01e7195e37a6c44f59",
"assets/packages/circle_flags/assets/svg/tn.svg": "6f8ff7904a3b0a38c421cc5b9c960ee8",
"assets/packages/circle_flags/assets/svg/ao.svg": "6f079c2bfe91da95fb3169239a1cc9b2",
"assets/packages/circle_flags/assets/svg/bt.svg": "cb65501b256c18d1dcb80497185db82d",
"assets/packages/circle_flags/assets/svg/ax.svg": "4f00f0fdfec805730f79130cf7490099",
"assets/packages/circle_flags/assets/svg/cg.svg": "b11f1a83dc32e04a0ecb00107db933fd",
"assets/packages/circle_flags/assets/svg/ml.svg": "8db39654af03c82a301bd72741deb954",
"assets/packages/circle_flags/assets/svg/jo.svg": "b2b71c7206885530255e1585d24e4914",
"assets/packages/circle_flags/assets/svg/it.svg": "db65ec5f57579bc6d60ac64c74fd36b2",
"assets/packages/circle_flags/assets/svg/gh.svg": "a90a4cf2eab37a18c9c5bbe96f9ba74d",
"assets/packages/circle_flags/assets/svg/sm.svg": "5419fce82d47b20aa1cfbff58612edf0",
"assets/packages/circle_flags/assets/svg/pa.svg": "4963ef7238b3f2b8e1e8d890a4f7916c",
"assets/packages/circle_flags/assets/svg/sz.svg": "074e9bf030d8bb281c24afda74640ea9",
"assets/packages/circle_flags/assets/svg/pt-30.svg": "e3fb9bb891fa0b38c778802d8c719b0e",
"assets/packages/circle_flags/assets/svg/gb-eng.svg": "d050a56e287a41eaeacc78eaef7c0358",
"assets/packages/circle_flags/assets/svg/es-ga.svg": "98d4d5e8669155d14fed1e8696813ccb",
"assets/packages/circle_flags/assets/svg/pw.svg": "0441d82cb23bb770be13a421b476f27f",
"assets/packages/circle_flags/assets/svg/sl.svg": "b0bef4e052fefb5b16e625779eb8a5db",
"assets/packages/circle_flags/assets/svg/de.svg": "55dcf5508162c371f3da65ad50180474",
"assets/packages/circle_flags/assets/svg/gi.svg": "437cb19a7aa9c0711599d3b574648c2d",
"assets/packages/circle_flags/assets/svg/fm.svg": "63ba16dbcfde8b70b87bfaf88951941c",
"assets/packages/circle_flags/assets/svg/kh.svg": "dc6a5ea8ad2b973bec240f8efccfb2fe",
"assets/packages/circle_flags/assets/svg/et.svg": "95faaa7cebe254bc77ed0271fc707b48",
"assets/packages/circle_flags/assets/svg/fo.svg": "019a0480bc1c34daa8eef499e9a07351",
"assets/packages/circle_flags/assets/svg/ec.svg": "cc99c0f2ca07d2ba955a8f60873cab64",
"assets/packages/circle_flags/assets/svg/sn.svg": "ce02b4362767028f6485e158377b21da",
"assets/packages/circle_flags/assets/svg/sy.svg": "bd539fd8b4ed01f50918f523ac2052d8",
"assets/packages/circle_flags/assets/svg/ge-ab.svg": "998a80783383964d8298e5aac40b6b8d",
"assets/packages/circle_flags/assets/svg/sx.svg": "b3d74780ab0cf3a1b1a0b516f0dfaec5",
"assets/packages/circle_flags/assets/svg/pt.svg": "fcd61103126462ca397f4f3243e1d1cd",
"assets/packages/circle_flags/assets/svg/so.svg": "4627fd9171cecdc0f2b6832bbbd7188f",
"assets/packages/circle_flags/assets/svg/jm.svg": "32d6f134c76c3bd6f2cdca5cd8739cea",
"assets/packages/circle_flags/assets/svg/hr.svg": "47e482440ca6980316313a6684eff0ef",
"assets/packages/circle_flags/assets/svg/ki.svg": "7835336c6e38700eb8b06095d4b97895",
"assets/packages/circle_flags/assets/svg/kz.svg": "faead64233c731547eb8393cbd2373b1",
"assets/packages/circle_flags/assets/svg/ie.svg": "ed6b8bf7dcfe3a6d33374347f7ec15e0",
"assets/packages/circle_flags/assets/svg/sindh.svg": "52dbd15d1a3b821a6d56f54dab7f7128",
"assets/packages/circle_flags/assets/svg/km.svg": "522a06e37a46c98e45923cfc50eb827a",
"assets/packages/circle_flags/assets/svg/ir.svg": "e580175b60301cd0f31cfd15333379f8",
"assets/packages/circle_flags/assets/svg/gy.svg": "3b9273f9ac8e17066062c43d7ebd951a",
"assets/packages/circle_flags/assets/svg/gn.svg": "59d8d02810b1159f3076618035501077",
"assets/packages/circle_flags/assets/svg/fj.svg": "144cd809e139a4186ed3164a368ef3b8",
"assets/packages/circle_flags/assets/svg/pg.svg": "73c850ae80c2389a589a749d7392096c",
"assets/packages/circle_flags/assets/svg/sk.svg": "add61d27b201faca12abe48c5989097f",
"assets/packages/circle_flags/assets/svg/ro.svg": "1f1fa55f9a81c1eaea22eee7e36685c9",
"assets/packages/circle_flags/assets/svg/sj.svg": "cf046fce42fb67981d0438d353646c27",
"assets/packages/circle_flags/assets/svg/pf.svg": "07e87ad595fd358f1812fa649701b7d1",
"assets/packages/circle_flags/assets/svg/fk.svg": "c4db4cbbe6f71fa8c3962d379d9e35a3",
"assets/packages/circle_flags/assets/svg/eg.svg": "e4700665f17734eb444cf5075528db5d",
"assets/packages/circle_flags/assets/svg/is.svg": "7639e9bd3ad101576713a38e94a7d512",
"assets/packages/circle_flags/assets/svg/id.svg": "1f9fa768c4f4679d3a27a1d8e06b44d9",
"assets/packages/circle_flags/assets/svg/ky.svg": "1321e97ad34a39fed6f51a444957572a",
"assets/packages/circle_flags/assets/svg/iq.svg": "10f3bee9c0b794beb44b87d2b1d1a23b",
"assets/packages/circle_flags/assets/svg/kn.svg": "cc4ace7dd4148be9c189dab15aebe9e3",
"assets/packages/circle_flags/assets/svg/hu.svg": "8d6fd787377df5f98055cd4b506bad06",
"assets/packages/circle_flags/assets/svg/ee.svg": "660823717af2e31fd5ff4e35a068afc5",
"assets/packages/circle_flags/assets/svg/er.svg": "ad9abd0ec23f81081447a406b5545a09",
"assets/packages/circle_flags/assets/svg/fi.svg": "4e896c6448e6451ebbee545d9343f3ab",
"assets/packages/circle_flags/assets/svg/gm.svg": "c8b00a525dd0bb3acfbba286fef8f0e3",
"assets/packages/circle_flags/assets/svg/sh.svg": "2f5e28ec7330d2fd43ffd5f766a13ba3",
"assets/packages/circle_flags/assets/svg/ps.svg": "2ae41583410d95be9f7a66c91d9e18b7",
"assets/packages/circle_flags/assets/svg/malayali.svg": "da4074e5829d9e254b99798875004137",
"assets/packages/circle_flags/assets/svg/hmong.svg": "d1e8c16e006679f3932f61239683cebe",
"assets/packages/circle_flags/assets/svg/pt-20.svg": "a596a02d4bc1a13285777fbc05430a52",
"assets/packages/circle_flags/assets/svg/pr.svg": "51383b487d0588d1dbdb7a0be9abd416",
"assets/packages/circle_flags/assets/svg/si.svg": "a91deb607ff6f47c0fce06da505baccc",
"assets/packages/circle_flags/assets/svg/transnistria.svg": "f1d0f3cc33a89aa123722ff0a0ec7f1d",
"assets/packages/circle_flags/assets/svg/pe.svg": "68ee39e30571c1632f7d30e2f1443223",
"assets/packages/circle_flags/assets/svg/qa.svg": "98d025a69ca529fb81c656240eb620ee",
"assets/packages/circle_flags/assets/svg/gl.svg": "17037df287fbc73d3e5be596c3fda6c2",
"assets/packages/circle_flags/assets/svg/es.svg": "67ed39e8fe57c68b711c26a6587cba00",
"assets/packages/circle_flags/assets/svg/ht.svg": "a9aaf67e111bd07793c6af3de4079493",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d83a008171bcdd2e630cd2e8d73a1d36",
"assets/fonts/MaterialIcons-Regular.otf": "c5cf2c1886658c35629b13ffe3e0730b",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
