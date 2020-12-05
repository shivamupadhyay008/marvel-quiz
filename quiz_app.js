var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.red('MARVEL QUIZ\n'))
var usrname,userans,score=0,topscore=0;
usrname=readLine.question(ck.magenta('Enter your name :'))
var questions =[{
  question:'1. who is scott lang\na)wasp\nb)spider-man\nc)ant-man\nd)iron-patriot',
  answer:'c'
},{
  question:'2. who said - Dont forget your Umbrella! in ragnarok\na)loki\nb)Dr. Strange\nc)Nick Fury\nd)Thor',
  answer:'b'
}
,{
  question:'3. What is the name of Thor’s hammer\n a) Vanir\n b)Mjolnir\n c)Aesir\n d)Norn',
  answer:'b'
},{
  question:'4. What is Captain America’s shield made of\na) Adamantium\nb)Vibranium\nc)Promethium\nd)Carbonadium',
  answer:'b'
},{
  question:'5. Before becoming Vision, what is the name of Iron Man’s A.I. butler\na) H.O.M.E.R.\nb)J.A.R.V.I.S.\nc)A.L.F.R.E.D.\nd)E.D.I.T.H.',
  answer:'b'
},{
  question:'6. What is the real name of the Black Panther\na) T’Challa\nb)M’Baku\nc)N’Jadaka\nd)N’Jobu',
  answer:'a'
},{
  question:'7. What is the alien race Loki sends to invade Earth in The Avengers\na) The Chitauri\nb)The Skrulls\nc)The Kree\nd)The Flerkens',
  answer:'a'
},{
  question:'8. Who does the Mad Titan sacrifice to acquire the Soul Stone\na) Nebula\nb)Ebony Maw\nc)Cull Obsidian\nd)Gamora',
  answer:'d'
},{
  question:'9.Who is Black Panther’s sister\na) Shuri\nb)Nakia\nc)Ramonda\nd)Okoye',
  answer:'a'
},{
  question:'10.What type of doctor is Stephen Strange\na)Neurosurgeon\nb)Cardiothoracic Surgeon\ncTrauma Surgeon\nd)Plastic Surgeon',
  answer:'a'
}];
for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))
userans=readLine.question(ck.green('type any option :'))
if(questions[i].answer===userans)
{
  console.log('right ! your answer is ' +userans)
  score++;
}else{
  console.log('wrong answer** \n answer is '+questions[i].answer)
  
}}
console.log(ck.yellow(usrname+' your score is '+score))
if(score>topscore){
  topscore=score
  };
console.log('top score is '+topscore)