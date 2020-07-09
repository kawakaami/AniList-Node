const anilistnode = require("../index");
const Anilist = new anilistnode();

Anilist.search("everything", "jojo no kimyou na bouken Stone Ocean", 1, 10).then((data) => { console.log(data); });
