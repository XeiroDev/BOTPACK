module.exports.config = {
        name: "chaknu",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "kira",
        description: "",
        usePrefix: true,
  commandCategory: "edit-img",
        usages: " [text]",
        cooldowns: 10,
        dependencies: {
                "canvas":"",
                 "axios":"",
                 "fs-extra":""
        }
};
 
module.exports.wrapText = (ctx, text, maxWidth) => {
        return new Promise(resolve => {
                if (ctx.measureText(text).width < maxWidth) return resolve([text]);
                if (ctx.measureText('W').width > maxWidth) return resolve(null);
                const words = text.split(' ');
                const lines = [];
                let line = '';
                while (words.length > 0) {
                        let split = false;
                        while (ctx.measureText(words[0]).width >= maxWidth) {
                                const temp = words[0];
                                words[0] = temp.slice(0, -1);
                                if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
                                else {
                                        split = true;
                                        words.splice(1, 0, temp.slice(-1));
                                        