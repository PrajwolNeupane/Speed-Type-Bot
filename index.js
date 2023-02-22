const puppeteer = require("puppeteer");

(
    async () => {

        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://typing-speed-test.aoeu.eu/?lang=en");

        await page.waitForSelector('.nextword');
        const word = await page.evaluate(() => {
            const wordElm = document.querySelectorAll(".nextword");

            const wordList = [document.querySelector(".currentword").innerText];

            wordElm.forEach((word) => {
                wordList.push(word.innerText);
            });

            return wordList;
        });

        for (let i = 0; i < word.length; i++) {
            await page.type("#input", word[i]);
            await page.keyboard.press(String.fromCharCode(32));
        }


    })()