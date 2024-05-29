const fs = require("fs");
const path = require("path");

const fileName = "http\\http三次握手四次挥手类";
const readName = "README.md";
const filePath = path.resolve(`E:\\code\\node\\interview_docs\\docs\\${fileName}`);
// console.log(filePath);
fs.readdir(filePath, (err, data) => {
    var arr = [];
    if (err) {
        console.log(err)
    }
    if (data.length) {
        console.log(data);
        arr = data.map((item) => {
            let temp = item.split(".");
            return '- ' + temp[0];
        })
    }
    console.log("读取文件成功!")
    console.log(arr);
    fs.writeFile(`${filePath}\\${readName}`, `# 介绍\r\n本章节是${fileName}常见的面试题：\r\n `, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("README.md文件添加成功!")
    })
})
// if (arr.length) {
//     fs.writeFile(`${filePath}\\${readName}`, `# 介绍\r\n本章节是${fileName}常见的面试题：\r\n ${arr.toString()} `, (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("README.md文件添加成功!")
//     })
// }


// fs.readdir(filePath, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     if (data.length) {
//         console.log(data);
//     }
// })

// 并发请求函数
// function func(urls, maxNum) {
//     return new Promise((resolve) => {
//         if (urls.length === 0) {
//             resolve([]);
//             return;
//         }
//         const results = [];
//         let next = 0; // 下一个请求的下标
//         let finishedNum = 0; // 当前请求完成的数量

//         // 发送请求
//         async function request() {
//             if (next === urls.length) return;
//             const i = next; // 保存序号，使result和urls相对应
//             const url = urls[next]; //url只能在try外面获取，await fetch(urls[next])的方式会带来bug
//             next++;
//             try {
//                 const res = await fetch(url);
//                 // res 加入到results
//                 results[i] = res;
//             } catch (err) {
//                 // err 加入到results
//                 results[i] = err;
//             } finally {
//                 finishedNum++;
//                 // 判断是否所有的请求都已完成
//                 if (finishedNum === urls.length) {
//                     resolve(results);
//                 }
//                 request(); //递归调用
//             }
//         }
//         // maxNum和urls.length取最小进行调用
//         const num = Math.min(maxNum, urls.length);
//         // 每次发起num数量的请求
//         for (let i = 0; i < num; i++) {
//             request();
//         }
//     });
// }