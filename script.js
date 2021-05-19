const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const data = [
  "میری نظر بھی کمال کی ہے😛۔۔۔جس پہ رکھتا ہوں اٗس کی منگنی ہو جاتی ہے😋😝😎",
  "Pani me tairna machali ka style,hawa me udna machli ka style,diffrent msg bhejna apun ka style,muft me msg padhna aapka style,phado phadi kanjus.",
  "دوران سفر ریل میں ایک آدمی نے دوسرے سے پوچھانماز کس طرف منو کر کے پڑھوں -جس طرف تمہارا سامان رکھا ہوا ہے -دوسرے نے جواب دیا",
  "Power of MathematicsOne day a box wasn’t opening.Lawyer came, applied all lawsbut it didn’t openChemist came, applied allreactions but it didn’t openPhysician came, applied allforces but no changeEven the biologist failedmathematician came & said...Let’s Suppose the Box is Open",
  "اگر کسی آدمی کے دانت 60 سال کی عمر میں بھی سلامت ہیں تو چار وجوہات ہو سکتیبرش کرناکھانے کےبعد کلیمیٹھےسےپرہیزبیوی کی ہر بات مان لین",
  "What is if we solve280+256741 X 4726/ 95670– 87135 +753 X 7435 / 542692-85674+562 X [632+5(6+86)+ 56calculate it then give me the answer ",
  "میں نے جس جس کو بھی چاہا،بہت چاہا ہےتم کسی ایک سے بھی تصدیق کرا سکتی ہو",
  "Have you heard about the mathematical plant? It has square roots",
  "سردار جی کا نہایت خطرناک آپریشن ہونا تھا جب انہیں سٹریچر پر ڈال کر آپریشن تھیٹر کی طرف لے جانے کا وقت آیا تو انہوں نے پاس ہی کھڑی ہوئی اپنی غمگین بیوی کو قریب بلایا اور نصیحت و وصیت کے انداز میں کہا کہ اگر میں دوران آپریشن مر جاؤں تو تم اس ڈاکٹر سے شادی کرلینا۔ بیوی نے حیران و پریشان ہو کر کہا سردار جی! ایسی باتیں کیوں کرتے ہو؟ سردار جی نے جواب دیا تو کیا میں اپنے قاتل کو یونہی معاف کر دوں",
  "اس کا رشتہ نہ ہونے کا باعث اس کا ابا تھاسب حریان تھے اس نے ایسا ابا کہاں سے لبھا تھاسمجھ نہیں آتی ٬ بتی دھاریں وہ کس سے بخشائےاس کی ماں تو فیڈر تھی اور سُکے دودھ کا ڈبہ تھااوس جگہ پر کافی لوکی مَنتیں مانگنے پہنچےپچھلے وَرہے جہاں پر ہم نے مویا کُکڑ دَبا تھا",
  "A motorist hit a sparrow. He took the unconscious bird and put it in a cage with bread and waterBird wakes up,looks around n screamsThalle jail! Avan chattha",
  "عشق کے سمندر میں غوطہ لگایاپانی بہت ٹھنڈا تھا میں باہر نکل آیا",
  "Sardar g: Khali Katory MeinRoti Laga Kr Kha Rhy ThyWaiter Ne Dkha To Pucha:Aap Ye Kia Kr Rhy Hein?Sardar g: Main Maths Ka Teacher HoMain Ne Daal Supose Ki Hui Hay.",
  "🌹آسانی سے کوئی مل جاے تو اسے قسمت کہتے ہیں❤سولی پر چڑھ کر بھی جو نہ ملے اسے محبت کہتے ہیں💘💘وفا کادرد💘",
  "Do u want to knowwhat it is the meaning of 143?Press Down............It meansONE HUNDRED AND FORTY THREE.MATH par dhayan do",
  "جن پر دنیا۔۔۔۔۔۔تمام ہو جائےان سے آگے۔۔۔۔۔جہاں نہیں ہوتتاثیرِ عِشق",
  "میرے جزبوں میں سچائی اب بھی ویسی ہی ہےاسکے بن میری تنہائی اب بھی ویسی ہی ہےاب کیا احساس دلانا اسکو اپنے درد کااسکی لا پرواہی اب بھی ویسی ہی ہے",
  "‏وفائیں مانگتے پھرتے ہیں فقیروں کی طرح____!!!عجیب لوگ ہیں کہتے ہیں,,, محبت کی ہے__!!!تاثیرِ عِشق",
  "وہ آئے ہمارے گھر یہ خدا کی قدرت ہےوہ ہم سے بچ کے نکل جائیں یہ ان کی قسمت ہے ",
  "‘Here is a mathematical rule:Expectations from Allah 100%+Expectations from Duniya 0%=100% No Disappointments.",
  '"ہم تو تیری ہر خواہش پوری ہونے کی دعا کر بیٹھے""ہمیں کیا پتہ تھا کہ ہمیں بھول جانا بھی تیری خواہش تھی؟',
  "‘I love you’is a mathematical functionwhere ‘I love’ is constantand ‘you’ is a variable..:p:p",
  "اب مری بات جو مانے تو نہ لے عشق کا نامتو نے دکھ اے دل ناکام بہت سا پایا",
  "Power of MathematicsOne day a box wasn’t opening.Lawyer came, applied all lawsbut it didn’t openChemist came, applied allreactions but it didn’t openPhysician came, applied allforces but no changeEven the biologist failedmathematician came & said",
  "کیسے کہیں کہ دل لگی دل کو ہی لگ گئیکہاں سے منکر وفا کو یہ بیماری لگ گئیوہ جو حسن و جمال کے قائل کبھی نہ تھےوبال حسن کی انہیں بھی اسیری لگ گئی",
  "💜اس سے مانگا تھا فقط ،،،،،، کچھ وقت میں نے 💛💖وہ نادان دے گیا ، اک گھڑی مجھکو تحفے میں 💖",
  "GooooooooooooooooooL GAPPAYK mu wali kbi sms B kr liya kr,...Tujhy Laga Good Morning hai?time vaikhaya eee. . :p",
  "مجرموں نے ہیں بھیس بدلے یہ کیسا وقت ہے کیا گھڑی ہےمنافقت پھر مفاہمت کا نقاب اوڑھے نکل پڑی ہے",
  "kanjoos ki zindagi kya jeena...kabhi humari tarah bhi jiya kero..raat se mere sms parh ker sharm nai ati...kabhi khu bhi sms kya kero....",
  "فرقہ بندی ہے کہیں اور کہیں ذاتیں ہیںکیا زمانے میں پنپنے کی یہی باتیں ہیں",
  "1 kanjoos tha,Bilkul kanjoos tha,Khalis kanjoos tha,Bohut ziada kanjoos tha,Aap mat ghabraoAap k samne to wo kuch b nei tha, ",
  "عمر بھر کانٹے اٹھائے جن کی راہوں سےآگ دے کر آشیاں کو وہ ہوا دیتے رہے ",
  "Dear Kanjoos customer, U have now subcribed kanjoosi package.You can enjoy saving of sMs.Your subcription title kanjoos is valid till Allah give U taufiq 2 send sMs. ",
  "جب بھی تیری قربت کے امکاں نظر آئےہم اتنا خوش ہوئے کہ پریشاں نظر آے",
  "اذیت مصیبت ملامت بلائیںترے عشق میں ہم نے کیا کیا نہ دیکھا",
  "kanjoos tha,Bilkul kanjoos tha,Khalis kanjoos tha,Bohut ziada kanjoos tha,Aap mat ghabraoAap k samne to wo kuch b nei tha,",
  "پھولوں کے ساتھ اس لیے کانٹے لگے ہیں دوستپھولوں پے ہاتھ سوچ کے ڈالا کرے کوئی",
  "* Congratulations *SMS na karney peyAapkoAwardof Kanjoosi 2015diya jata hia.no need to say thanks, ye award ap he ka right ta",
  "اُمیدیں آرزویں کھیلتی ہیں یوں میرے دل سےپلٹ جاتی ہیں موجیں جس طراح ٹکرا کے ساحل سے ",
  "Aaj mere passMobile hyNumber hyCharger hyBattery hyBalance hyTumhare pass kiya hy?Hy koi msg?To bhej doAgar nahi toMobile bech do.",
  "جب بھی آرزو کی خود کو پانے کی نہ پا سکایہ صرف ہے کہ میں تیرا تھا اور تیرا رہا",
  "چلے تھے جانب منزل تو کس نے سوچا تھاوہاں ملیں گے نہ تنکے بھی آشیاں کے لیے",
  "PepsiC0ca C0laSpriteMarindaDew7 UpLim0 PaaniFantaIn Sub Kay Dakhan Jama Kar KayTeen Dabay Wale K0H DenaSms Karne K0H Kuch Paise Mil Jaengay.kANJOOS",
  "اُمیدیں آرزویں کھیلتی ہیں یوں میرے دل سےپلٹ جاتی ہیں موجیں جس طراح ٹکرا کے ساحل سے ",
  "1 kanjoos dosray say:Aaj main ney ek jaan bachai.Wo aise bachai k Faqeer sai pocha:1000 ka note dun to kiya karega?Wo bola, Khushi se mar jaunga.Main nay kaha ja nahin deta",
  "چلے تھے جانب منزل تو کس نے سوچا تھاوہاں ملیں گے نہ تنکے بھی آشیاں کے لیے",
  "Bebas Kar Deta Hai Mujhe Package – e- SmsWarna !Jitne Tum Log Kanjoos Ho . . Dil Karta Hai Khaali Msg bhi Na karun .. :@(‘,’)/”/) Feel Karo . Bazati Ho Rahi Hai :P ",
  'جو محبت کرتا ہے ناں، اس کا دِل کسی قبر ، مزار یا درگاہ سے کم نہیں ہوتا اور درگاہ سے پیٹھ کرکے نہیں نکلا جاتا..._ ہمیشہ اُلٹے پاؤں واپس جانا پڑتا ہے اور اُلٹا چلنا بہت " مشکل" اور "آہستہ" ہوتا ہے...!!!',
  '"Meri Subha Subha ALLAH Pak Se DUA Hy K""ALLAH Pak Aap Ko Humesha Khush Or Shad-O-Abad Rakhe Aameen" ',
  "تم اکثر پوچھتے تھے نهجو هم بچھڑ جائیں تو کیا هوگاتم اکثر سوچتے تھے نهنا مل پاۓ تو کیا هوگالو دیکھ لو,,, اب بھی زنده ھیںابھی بھی چاند تکتے ھیںابھی بھی پھول کھلتے ھیںابھی بھی دل کے دریا میںهزوروں درد بهتے ھیںابھی بھی کچھ نهیں بدلامگر_____________کمی سی ھےتمهارے بعد جاناںآنکھوں میں نمی سی ھے.......!!!!",
  "Bismilah sy ibtada chahta hun............................................................ Jan tum sy wafa chahta hun ",
  "یوں نہ دیکھو مجھے نشیلے نینوں کا سمندر لے کر ❤میں جو ڈوبا تو تیرے دل میں اتر جاؤں گا❤",
  "80 aur 1 akasi hoty hain..Wah wah..80 aur 1 akasi hoty hain.....Msg na krny waly marasi hoty hain.:D(‘,’)<)(>/ / yaar tusi mirasi lagdy ty ni",
  "‏مثلِ ابر نہیں ہے میری چاہت۔۔ممکن ہی نہیں جگہ جگہ برسے.",
  "میں جب بھی اداس ہوتا ہوں وہ مجھ کو ہنسا دیتا ہےمیری جان ہے وہ جو ہر بزم میں مجھ کو دعا دیتا ہےہار جاتا ہوں غم دوراں کی تلخیوں سے جبچپکے سے آکے وہ میرا حوصلہ بڑھا دیتا ہےاور سبھی دوستوں سے جداہے انداز اس کاوہ پیار سے مجھے کھری کھری بھی سنا دیتا ہے",
];

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using async/await

// async function generateJoke() {
//     const config = {
//       headers: {
//         Accept: "application/json",
//       },
//     };

//   const res = await fetch("https://icanhazdadjoke.com", config)

//   const data = await res.json()

//   jokeEl.innerHTML = data.joke

// }

// Using .then()

function generateJoke() {
  const rendomidx = Math.floor(Math.random() * data.length);
  console.log(data.length);
  jokeEl.innerHTML = data[rendomidx];

  // const config = {
  //   headers: {
  //     Accept: "application/json",
  //   },
  // };

  // fetch("https://icanhazdadjoke.com", config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //       jokeEl.innerHTML = data.joke
  //   })
}
