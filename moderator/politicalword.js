module.exports = (client) => {
    client.on("message", msg =>{
        let wordArray = msg.content.split(" ");
        console.log(wordArray);
    
        let filterWords = ["ประยุทธ์","ประวิทย์","ประยุด","ประยุท","ปลาหยุด","ประวิด","ประวิท","prayuth","ตู่","tu","ป้อม","Prayuth","PRAYUTH","prayut","Prayut","PRAYUT"];
    
        for (var i = 0; i < filterWords.length; i++) {
            if (wordArray.includes(filterWords[i])) {
                msg.react('👎');
                msg.reply(`การเมืองอีกเเล้ว อ่านกฎดิวะ<#853526088473640970> หรือพิมพ์ !rules`);
                break;
            }
        }
    })
    }