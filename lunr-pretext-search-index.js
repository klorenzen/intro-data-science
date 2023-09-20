var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-1-1",
  "level": "1",
  "url": "section-1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is Data Science?",
  "body": " What is Data Science?  In the most general terms data science is the process of applying the scientific method to data. In the current information age we live in data is everywhere! We post on social media, wear watches that track our heart beat, take pictures of planets in the universe we never knew existed. We have an unprecedented ability to gather and keep data about our thoughts, our actions, and the universe around us and data science is the study of how to make sense of all this data. At first, this might seem like a daunting task, but data science draws from many other well established fields.  The first field is Mathematics and Statistics. Using statistics we can use the scientific method to draw inference from our data. Hopefully by the end of this class you will be convinced that data science is much more than applied statistics despite how data science draws a lot of inspiration from statistics. Using mathematics we can draw lots of modeling techniques and solutions to tricky issues that arise when dealing with data.  The second field is Computer Science. The data is best accessed through computers and having a solid foundation of working with computers, data types, and programing are certainly helpful! Computer scientists have been studying how to handle large amounts of data for some time. We will draw on programming techniques and ideas of how to process lots of data in an efficient manner from computer science.  Lastly, is an area of expertise! Data comes from somewhere and that context is an important part of how it is used and studied. Data science about behavior on social media will draw ideas and theories from behavioral science. Light patterns gathered from space will draw techniques from astrophysicists. Player performance in a game will draw theories from sports analytics. Not only we will use context to understand where the data is coming from, but these areas will help us ask good and interesting questions about the data.  To be clear, you do not need to be an expert in an area (nor an expert in math, statistics, and computer science) to be a data scientists. But you do need enough of a background that you can make sense of the data and the results. One analogy we can use is that we need to be able to walk before we can run. Knowing enough of these three areas is the ability to walk, and data science allows us run and explore all the data has to offer.   Classification at the Zoo   The local zoo has lots of animals that they house. Each animal is classified into a Kingdom, Genus, Family, and Species (as we remember from a biology class). These are based on certain characteristics which we have gathered data about. Some new animals have arrived and we want to classify them based on the data. Below you have the data for 10 known animals and three unknown animals.  Your first task is to use the data to group your known animals together. How do you know you have good groups?  Now, look at the data of the unknown animals. Predict which groups they belong in.  Explain your method of putting the unknown animals into know groups? Which variables or combination of variables did you use?  Brainstorm ways that you could have done this task easier or better? How would computers help?    Congratulations! You just did Data Science! You are a data scientist! Reviewing your first steps as a data scientist, what might be some other areas where a similar model is used?     Animal Classification    Animal_Name  Class  Hair  Feathers  Eggs  Milk  Airborne  Aquatic  Toothed  Backbone  Venomous  Fins  Legs   antelope 1 1 0 0 1 0 0 1 1 0 0 4  bear 1 1 0 0 1 0 0 1 1 0 0 4  hare 1 1 0 0 1 0 0 1 1 0 0 4  platypus 1 1 0 1 1 0 1 0 1 0 0 4  wolf 1 1 0 0 1 0 0 1 1 0 0 4  chicken 2 0 1 1 0 1 0 0 1 0 0 2  crow 2 0 1 1 0 1 0 0 1 0 0 2  duck 2 0 1 1 0 1 1 0 1 0 0 2  flamingo 2 0 1 1 0 1 0 0 1 0 0 2  gull 2 0 1 1 0 1 1 0 1 0 0 2  ostrich 2 0 1 1 0 0 0 0 1 0 0 2  pitviper 3 0 0 1 0 0 0 1 1 1 0 0  seasnake 3 0 0 0 0 0 1 1 1 1 0 0  slowworm 3 0 0 1 0 0 0 1 1 0 0 0  tortoise 3 0 0 1 0 0 0 0 1 0 0 4  tuatara 3 0 0 1 0 0 0 1 1 0 0 4  bass 4 0 0 1 0 0 1 1 1 0 1 0  catfish 4 0 0 1 0 0 1 1 1 0 1 0  herring 4 0 0 1 0 0 1 1 1 0 1 0  piranha 4 0 0 1 0 0 1 1 1 0 1 0  seahorse 4 0 0 1 0 0 1 1 1 0 1 0  stingray 4 0 0 1 0 0 1 1 1 1 1 0  frog 5 0 0 1 0 0 1 1 1 0 0 4  newt 5 0 0 1 0 0 1 1 1 0 0 4  toad 5 0 0 1 0 0 1 1 1 0 0 4  flea 6 0 0 1 0 0 0 0 0 0 0 6  honeybee 6 1 0 1 0 1 0 0 0 1 0 6  housefly 6 1 0 1 0 1 0 0 0 0 0 6  moth 6 1 0 1 0 1 0 0 0 0 0 6  wasp 6 1 0 1 0 1 0 0 0 1 0 6  clam 7 0 0 1 0 0 0 0 0 0 0 0  lobster 7 0 0 1 0 0 1 0 0 0 0 6  scorpion 7 0 0 0 0 0 0 0 0 1 0 8  slug 7 0 0 1 0 0 0 0 0 0 0 0  starfish 7 0 0 1 0 0 1 0 0 0 0 5  worm 7 0 0 1 0 0 0 0 0 0 0 0   Animal_1  1 0 0 1 0 0 1 1 0 0 2  Animal_2  0 1 1 0 0 1 0 1 0 0 2  Animal_3  0 0 1 0 0 1 0 0 0 0 8    Every data set has two main components data points and variables . In the table, the data points are the rows and each one represents an observation. The variables are the columns and store the information that we gathered about each observation. You might have noticed when classifying the animals that some variables were more important than others. This is a key skill of a data scientist! Practice this idea in the following exercise.   You are given a data set about movies which has the movie title, director, year of release, total gross revenue, genres, and average rating as variables. Below is the first few rows of data.  Movies and Ratings    Title Director Year Gross Revenue Genres Rating    Toy Story John Lasseter 1995 $3.3 billion Adventure, animation, children, comedy, fantasy 8.3    Father of the Bride Part II Charles Shyer 1995 $76.6 million Comedy 6.1    The Hunger Games Gary Ross 2012 $2.97 billion Action, adventure, drama, sci-fi, thriller 7.2    Alvin and the Chipmunks: Chipwrecked Mike Mitchell 2011 $343 million Animation, comedy 4.3    How to Train Your Dragon 2 Dean DeBlois 2014 $618.9 million Action, adventure,animation 7.8    Some like it Hot Billy Wilder 1959 $25 million Comedy, music, romance 8.2      Suppose a person had watched some of these movies and given them ratings. We would like to predict if they would like another movie. Which variables would we want to use?  Describe how you would organize the data according to these variables?  How could you determine if your prediction about the movie for the person were correct?  Now suppose we are a movie production company and we are trying to determine whether to make a particular movie where we already have the script and director whose has made lots of movies for us before. We would like to estimate how much gross revenue we will get so we can set an appropriate budget. Which variables from the data set should we use for our analysis? Should we restrict the values? (If so, which ones and by what restriction.)  Based on what you know about the economy and movie distribution, what are some things we should be cautious about when we get our final answer. In other words, how might some of our data be corrupting our prediction? Brainstorm ways we might be able to get a more accurate answer.     "
},
{
  "id": "exploration-1",
  "level": "2",
  "url": "section-1-1.html#exploration-1",
  "type": "Exploration",
  "number": "1.1.1",
  "title": "Classification at the Zoo.",
  "body": " Classification at the Zoo   The local zoo has lots of animals that they house. Each animal is classified into a Kingdom, Genus, Family, and Species (as we remember from a biology class). These are based on certain characteristics which we have gathered data about. Some new animals have arrived and we want to classify them based on the data. Below you have the data for 10 known animals and three unknown animals.  Your first task is to use the data to group your known animals together. How do you know you have good groups?  Now, look at the data of the unknown animals. Predict which groups they belong in.  Explain your method of putting the unknown animals into know groups? Which variables or combination of variables did you use?  Brainstorm ways that you could have done this task easier or better? How would computers help?    Congratulations! You just did Data Science! You are a data scientist! Reviewing your first steps as a data scientist, what might be some other areas where a similar model is used?   "
},
{
  "id": "table-1",
  "level": "2",
  "url": "section-1-1.html#table-1",
  "type": "Table",
  "number": "1.1.1",
  "title": "Animal Classification",
  "body": " Animal Classification    Animal_Name  Class  Hair  Feathers  Eggs  Milk  Airborne  Aquatic  Toothed  Backbone  Venomous  Fins  Legs   antelope 1 1 0 0 1 0 0 1 1 0 0 4  bear 1 1 0 0 1 0 0 1 1 0 0 4  hare 1 1 0 0 1 0 0 1 1 0 0 4  platypus 1 1 0 1 1 0 1 0 1 0 0 4  wolf 1 1 0 0 1 0 0 1 1 0 0 4  chicken 2 0 1 1 0 1 0 0 1 0 0 2  crow 2 0 1 1 0 1 0 0 1 0 0 2  duck 2 0 1 1 0 1 1 0 1 0 0 2  flamingo 2 0 1 1 0 1 0 0 1 0 0 2  gull 2 0 1 1 0 1 1 0 1 0 0 2  ostrich 2 0 1 1 0 0 0 0 1 0 0 2  pitviper 3 0 0 1 0 0 0 1 1 1 0 0  seasnake 3 0 0 0 0 0 1 1 1 1 0 0  slowworm 3 0 0 1 0 0 0 1 1 0 0 0  tortoise 3 0 0 1 0 0 0 0 1 0 0 4  tuatara 3 0 0 1 0 0 0 1 1 0 0 4  bass 4 0 0 1 0 0 1 1 1 0 1 0  catfish 4 0 0 1 0 0 1 1 1 0 1 0  herring 4 0 0 1 0 0 1 1 1 0 1 0  piranha 4 0 0 1 0 0 1 1 1 0 1 0  seahorse 4 0 0 1 0 0 1 1 1 0 1 0  stingray 4 0 0 1 0 0 1 1 1 1 1 0  frog 5 0 0 1 0 0 1 1 1 0 0 4  newt 5 0 0 1 0 0 1 1 1 0 0 4  toad 5 0 0 1 0 0 1 1 1 0 0 4  flea 6 0 0 1 0 0 0 0 0 0 0 6  honeybee 6 1 0 1 0 1 0 0 0 1 0 6  housefly 6 1 0 1 0 1 0 0 0 0 0 6  moth 6 1 0 1 0 1 0 0 0 0 0 6  wasp 6 1 0 1 0 1 0 0 0 1 0 6  clam 7 0 0 1 0 0 0 0 0 0 0 0  lobster 7 0 0 1 0 0 1 0 0 0 0 6  scorpion 7 0 0 0 0 0 0 0 0 1 0 8  slug 7 0 0 1 0 0 0 0 0 0 0 0  starfish 7 0 0 1 0 0 1 0 0 0 0 5  worm 7 0 0 1 0 0 0 0 0 0 0 0   Animal_1  1 0 0 1 0 0 1 1 0 0 2  Animal_2  0 1 1 0 0 1 0 1 0 0 2  Animal_3  0 0 1 0 0 1 0 0 0 0 8   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "section-1-1.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "You are given a data set about movies which has the movie title, director, year of release, total gross revenue, genres, and average rating as variables. Below is the first few rows of data.  Movies and Ratings    Title Director Year Gross Revenue Genres Rating    Toy Story John Lasseter 1995 $3.3 billion Adventure, animation, children, comedy, fantasy 8.3    Father of the Bride Part II Charles Shyer 1995 $76.6 million Comedy 6.1    The Hunger Games Gary Ross 2012 $2.97 billion Action, adventure, drama, sci-fi, thriller 7.2    Alvin and the Chipmunks: Chipwrecked Mike Mitchell 2011 $343 million Animation, comedy 4.3    How to Train Your Dragon 2 Dean DeBlois 2014 $618.9 million Action, adventure,animation 7.8    Some like it Hot Billy Wilder 1959 $25 million Comedy, music, romance 8.2      Suppose a person had watched some of these movies and given them ratings. We would like to predict if they would like another movie. Which variables would we want to use?  Describe how you would organize the data according to these variables?  How could you determine if your prediction about the movie for the person were correct?  Now suppose we are a movie production company and we are trying to determine whether to make a particular movie where we already have the script and director whose has made lots of movies for us before. We would like to estimate how much gross revenue we will get so we can set an appropriate budget. Which variables from the data set should we use for our analysis? Should we restrict the values? (If so, which ones and by what restriction.)  Based on what you know about the economy and movie distribution, what are some things we should be cautious about when we get our final answer. In other words, how might some of our data be corrupting our prediction? Brainstorm ways we might be able to get a more accurate answer.   "
},
{
  "id": "section-1-2",
  "level": "1",
  "url": "section-1-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Asking Interesting Questions",
  "body": " Asking Interesting Questions  The first step to doing Data Science is to have data. Data comes in many forms but for the purposes of this section, we will think of data as information stored on a computer. Data is collected about people, countries, natural environment, institutions, and many others. Therefore, most data comes when humans interact with systems that collect data. This could be when you open tiktok on your phone and every like and comment you make. This could be when you swipe your keycard to get into a building. The key insight is that the data collected is reflected of actions of people. We cannot collect data about someone's emotions when they swipe into a building- we can make predictions, we can ask them- but these are not objective pieces of data. -side note about the field of psychology and survey design, but most of the data we will be exploring in this class will deal with objective data-  So, if we only have data about people's reactions to events or other objective, observable facts, what can we tell from data? Well, other objective, observable facts about the future . This is the power of data science! It also shapes the types of questions data science can answer. A good rule of thumb is that data science questions should be future looking (What do I expect to happen?), observable (in the future, I can come back and tell if I was right or wrong), and have un-obvious solutions.   Asking Data Science Questions   For each of the following, explain why they are not good data science questions. Then rephrase them to be good data science questions.  Who won the football game last week?  Does my boyfriend love me?  How many members are on an NBA team?   Despite these being silly, remember today when thinking about data science questions so you do not become an example memorialized in a text.    Later this course, when preparing for projects we will work on how to divise good question (and how to answer it).   For each of the ways that gather is collected around you, brainstorm possible data science questions that are future looking, observable, and have un-obvious solutions.  Number of pictures a person posts a day on a social media site.  Number of times people searched for a particular word each day over several years.  The number of webpages written in every language.  Answers to survey results sent out to thousands of people about flowers.  Number of times a particular player tries to score and the number of times they are successful.     "
},
{
  "id": "exploration-2",
  "level": "2",
  "url": "section-1-2.html#exploration-2",
  "type": "Exploration",
  "number": "1.2.1",
  "title": "Asking Data Science Questions.",
  "body": " Asking Data Science Questions   For each of the following, explain why they are not good data science questions. Then rephrase them to be good data science questions.  Who won the football game last week?  Does my boyfriend love me?  How many members are on an NBA team?   Despite these being silly, remember today when thinking about data science questions so you do not become an example memorialized in a text.   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "section-1-2.html#exercise-2",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "For each of the ways that gather is collected around you, brainstorm possible data science questions that are future looking, observable, and have un-obvious solutions.  Number of pictures a person posts a day on a social media site.  Number of times people searched for a particular word each day over several years.  The number of webpages written in every language.  Answers to survey results sent out to thousands of people about flowers.  Number of times a particular player tries to score and the number of times they are successful.   "
},
{
  "id": "intro-ethics",
  "level": "1",
  "url": "intro-ethics.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to Data Ethics",
  "body": " Introduction to Data Ethics  Data science and algorithms have brought many advances to our society. Think of all the ways that technology has changed over your lifetime (and try to imagine how it has changed over your professor's lifetime). It has become sophisticated enough at recognizing patterns of human behavior that it can predict financial markets and recommend videos to everyone's hyper niche interests. Recently, technology has been released to the public that can write term papers and hold debates with humans. In short, it is amazing what technology can do.  One thing that algorithms are not able to do is put limits on its power. It was reported in the Wall Street Journal that a health data app was reporting to employers the health data (in the aggregate) of their employees including predictions on the number who will develop certain health conditions, including pregnancy. To do this the app was seeing if any employees had stop renewing birth control or had searched for prenatal vitamins or other fertility related searches. This raises questions about the amount of information that we want employers to have about their employees.  Health companies could argue that providing this information to employers helps them make decisions about how many people to staff. But this information could also be used in nefarious ways. Many people have reasons that they want to keep their health data secrete. Data scientists must think about potential abuses of their algorithms and weigh this with the potential benefits instead of only seeing the potential benefit.  In addition to algorithms, we need to consider the data they are using to train their predictions on. Typically algorithms are designed to replicate actions and decisions made by humans. So if the data documents previous injustices, then the algorithm is bound to repeat it.   What are data ethics?   Ethics are about establishing actions that are right vs wrong in a philosophical sense. Before we jump into practical situations, let us muse philosophically about big picture principles of data ethics.  What does living in a fair society mean to you?  What does it mean to be ethical? What does it mean to be acting in a fair and just way?  At their core, why does we use algorithms?  Our ethics tell us that we want the world to be more fair and just. Algorithms and data analysis is about making our world more efficient. How can the data scientist balance these two ideas?   As a data science community, we need to agree in the abstract about moving towards a fair and just society. The balance of this with the desire to have a more efficient world is where lots of work in data ethics need to take place.     Data ethics in the wild  Let's now explore further into some concrete situations where unethical behavior has not been properly followed. After reading each article, use the discussion questions as a springboard to start developing your principles of data ethics.  When good algorithms go sexists   What are some of the ways gender is a contentious variable in data sets?  When should gender be used as a variable in data science? When should it not?  In historic data sets, gender is represented as a binary which clashes with modern ideas. How can we reconcile this as a data science community?  With many parts of large cities racially segregated, data scientists have found that using zip codes as a variable is essentially the same as using race as a variable. What might be other variables that strongly correspond to gender?  Predict some other variables that are questionable to include in data analysis. You may include applications where these variables should and should not be used.   The A.I. ``Gaydar\" study and the real dangers of big data   What are the problems with trying to predict sexual orientation with facial recognition?  How was the data set collected? What ethical issues with consent do the data scientists face?  Other algorithms try to predict sexual orientation with habitual behavior (like shopping trends). Is this more or less ethical than with facial recognition?  Some organizations try to predict someone’s race based on their name to target voting registration. With a less nefarious application, some might see this project as more ethical. Would the application of predicting sexual orientation using facial recognition make it more or less ethical?  Predict some other variables that are questionable to predict from a data set. You may include applications.   A face is exposed for AOL searcher no. 4417749   What are some problems with releasing 3 months of search history of users?  What are the potential harms of someone’s search history being public?  What is the difference between consent and informed consent? How does this difference effect the ethics of a data set?  Most search engines keep search data. Could applications of this data be considered more or less ethical than others? Give examples.  Predict other data that people give with uninformed consent. How could the release of this data be potentially harmful?   Machine bias risk assessment in criminal sentencing   What are some problems with trying to predict crime?  How did the algorithm receive feedback as to its accuracy? How does its inaccuracy cause harm to people?  With many parts of large cities racially segregated, data scientists have found that using zip codes as a variable is essentially the same as using race as a variable. So if a data scientists did not want to include race they may also not include zip code. What are some of the questions the model uses (variables)? Are these introducing variables that should be avoided when thinking about a fair and just society? What are some of these variables?  Other types of models instead look at common locations of crimes and send police to patrol those areas. Naturally, police find crime there and report it back to the algorithm. These areas tend to be the poorer neighborhoods in cities. What are some issues with this type of feedback to the algorithm? Does this algorithm seem fair?  In a fair and just society, we must balance public safety with freedom and humanity of everyone. How could algorithm related to crime be improved (if at all) in terms of how humans interpret these results?   The first year of AI college ends in ruin   What are some problems with AI generating text tools use by college students?  What are some potential benefits of students using AI tools to complete their schoolwork? What are some potential harms?  Technology revolutions have always affected classrooms (think about what happened with the invention and popularity of the calculator, typewriter, spell check). How does AI text generation compare?  The article mentioned plagiarism checkers. How do they receive feedback to their accuracy? How does this cause potential harm to people?  One of the goals of education is to equalize people from different socio-economic backgrounds. If technology is unobtainable for groups of people, how can we still guarantee equal access and ability to succeed in school.      This only scratches the surface about how to conduct data science ethically. When conducting data science it is important to weigh the potential benefits with the potential harms to others and our goal of living in a fair and justice world.   Pick a topic from class or another of your choosing relating to data science and ethics. Read an article or a blog post about your issue (cite source in some easy to find way). Discuss in 1-2 pages (typed) the new technology and potential (or actual) harms to humans, fairness, and justice. Some example topics include:  College rankings  Credit Scores  Workplace scheduling technology\/monitoring truck drivers  Workplace personality tests  Home loans    "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "intro-ethics.html#exploration-3",
  "type": "Exploration",
  "number": "2.1.1",
  "title": "What are data ethics?",
  "body": " What are data ethics?   Ethics are about establishing actions that are right vs wrong in a philosophical sense. Before we jump into practical situations, let us muse philosophically about big picture principles of data ethics.  What does living in a fair society mean to you?  What does it mean to be ethical? What does it mean to be acting in a fair and just way?  At their core, why does we use algorithms?  Our ethics tell us that we want the world to be more fair and just. Algorithms and data analysis is about making our world more efficient. How can the data scientist balance these two ideas?   As a data science community, we need to agree in the abstract about moving towards a fair and just society. The balance of this with the desire to have a more efficient world is where lots of work in data ethics need to take place.   "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "intro-ethics.html#exploration-4",
  "type": "Exploration",
  "number": "2.1.2",
  "title": "Data ethics in the wild.",
  "body": " Data ethics in the wild  Let's now explore further into some concrete situations where unethical behavior has not been properly followed. After reading each article, use the discussion questions as a springboard to start developing your principles of data ethics.  When good algorithms go sexists   What are some of the ways gender is a contentious variable in data sets?  When should gender be used as a variable in data science? When should it not?  In historic data sets, gender is represented as a binary which clashes with modern ideas. How can we reconcile this as a data science community?  With many parts of large cities racially segregated, data scientists have found that using zip codes as a variable is essentially the same as using race as a variable. What might be other variables that strongly correspond to gender?  Predict some other variables that are questionable to include in data analysis. You may include applications where these variables should and should not be used.   The A.I. ``Gaydar\" study and the real dangers of big data   What are the problems with trying to predict sexual orientation with facial recognition?  How was the data set collected? What ethical issues with consent do the data scientists face?  Other algorithms try to predict sexual orientation with habitual behavior (like shopping trends). Is this more or less ethical than with facial recognition?  Some organizations try to predict someone’s race based on their name to target voting registration. With a less nefarious application, some might see this project as more ethical. Would the application of predicting sexual orientation using facial recognition make it more or less ethical?  Predict some other variables that are questionable to predict from a data set. You may include applications.   A face is exposed for AOL searcher no. 4417749   What are some problems with releasing 3 months of search history of users?  What are the potential harms of someone’s search history being public?  What is the difference between consent and informed consent? How does this difference effect the ethics of a data set?  Most search engines keep search data. Could applications of this data be considered more or less ethical than others? Give examples.  Predict other data that people give with uninformed consent. How could the release of this data be potentially harmful?   Machine bias risk assessment in criminal sentencing   What are some problems with trying to predict crime?  How did the algorithm receive feedback as to its accuracy? How does its inaccuracy cause harm to people?  With many parts of large cities racially segregated, data scientists have found that using zip codes as a variable is essentially the same as using race as a variable. So if a data scientists did not want to include race they may also not include zip code. What are some of the questions the model uses (variables)? Are these introducing variables that should be avoided when thinking about a fair and just society? What are some of these variables?  Other types of models instead look at common locations of crimes and send police to patrol those areas. Naturally, police find crime there and report it back to the algorithm. These areas tend to be the poorer neighborhoods in cities. What are some issues with this type of feedback to the algorithm? Does this algorithm seem fair?  In a fair and just society, we must balance public safety with freedom and humanity of everyone. How could algorithm related to crime be improved (if at all) in terms of how humans interpret these results?   The first year of AI college ends in ruin   What are some problems with AI generating text tools use by college students?  What are some potential benefits of students using AI tools to complete their schoolwork? What are some potential harms?  Technology revolutions have always affected classrooms (think about what happened with the invention and popularity of the calculator, typewriter, spell check). How does AI text generation compare?  The article mentioned plagiarism checkers. How do they receive feedback to their accuracy? How does this cause potential harm to people?  One of the goals of education is to equalize people from different socio-economic backgrounds. If technology is unobtainable for groups of people, how can we still guarantee equal access and ability to succeed in school.     "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "intro-ethics.html#exercise-3",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "Pick a topic from class or another of your choosing relating to data science and ethics. Read an article or a blog post about your issue (cite source in some easy to find way). Discuss in 1-2 pages (typed) the new technology and potential (or actual) harms to humans, fairness, and justice. Some example topics include:  College rankings  Credit Scores  Workplace scheduling technology\/monitoring truck drivers  Workplace personality tests  Home loans  "
},
{
  "id": "section-3-1",
  "level": "1",
  "url": "section-3-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Data Verbs",
  "body": " Data Verbs  Inspired by workshop presentation by Todd Iverson and Chris Malone, Winona State University, for Project NExT at MathFest 2021.  Brief Introduction to Data Types  All of our data is classified into different categories which helps computers process our instructions to it. Essentially, these categories make it easier for it to tell us what actions we can and cannot do to the data values. For example, if we had a column storing the height of basketball players it would be incoherent to try to make these numbers upper case where as making the names upper case is a task we can carry out.  The main data types are as follows:   Boolean: only two possible values, True or False.  Integers: whole numbers with no decimal places.  Numerical\/Float: All other numbers, usually with decimal places.  Character: a single letter or special symbol, think one key stroke from the keyboard.  String: A series of characters including spaces.    Data Types  matching data types   Match each column in the data table below to its data type  Example Data Table    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West          A  Integer    B  Character    C  Boolean    D  Float    E  String     Each data type has certain functions that we can do to them. Here is a non-exhaustive list of the functions that we can do to data types.   Functions for Data Table    Boolean  Integer  Float  Character  String    Equals? Sum Sum Uppercase Upper\/lower case    AND Count Count Lowercase Join\/split    OR Abs Abs Equals Count substring    NOT Mult. Mult.\/Div. Find    Sum Greater\/less than Greater\/less than Strip    Count Mod div. Equals\/ Length    Average Equals? Most math     As we get further into working with data, we will get a better knowledge of how to implement these functions. When you start using a computer with data science, you might run into a type error which means that your data type and the function you are trying to use are incompatible. Having a mental chart like the one above can be helpful when trying to resolve this type of error.   First Data Verbs  Data verbs are actions we can do to a data set. We will be collection and using these throughout this class.  Our first data verb is Select where we choose a group of columns to be working with. Below is the result when we Select A,B,C        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C    5 a True    3 a True    4 b False    2 b True    3 c False    5 c False    4 c True      Our next data verb is Filter where we choose a some rows that meet a condition. Below is the result when we Filter by B== a        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West      Our next data verb is Mutate where we create a new column based on another. Below is the result when we Mutate F=A+2        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E  F    5 a True 46.7 North 7    3 a True 35.6 West 5    4 b False 10.8 East 6    2 b True 124.6 North 4    3 c False 4.8 South 5    5 c False 4.7 East 7    4 c True 7.4 West 6      Our next data verb is Sort where we order rows based on their entries in a column(s). Below is the result when we Sort by D, descending        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    2 b True 124.6 North    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    4 c True 7.4 West    3 c False 4.8 South    5 c False 4.7 East        Original data table for following exercises    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West     Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    C  D  E    True 46.7 NORTH    True 35.6 WEST    True 124.6 NORTH    True 7.4 WEST        Select    Yes, columns C,D, and E were selected.      Filter    Yes, this data set was filtered by C==True or filtered by E==North or West.      Mutate    Yes, notice how column E is now in upper case.      Sort    Our rows have not changed relative order.     Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    E  F(from A)  G (from B)    East 8 25    East 10 11        Select    Yes, columns E, F, and G were selected.      Filter    Yes, this data set was filtered by E==East.      Mutate    Yes, both columns F and G are made from previous columns (A and B respectively). Can you determine the operation?      Sort    Our rows have not changed relative order.       More Data Verbs  We are now entering more complex data verb land, but these are some of the most useful!  Our next data verb is Group where we split our data into smaller portions according to a key value in a column. Below is the result when we Group by B        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West        A  B  C  D  E    4 b False 10.8 East    2 b True 124.6 North        A  B  C  D  E    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West      On its own grouping is not useful, but when paired with our next data verb it is really powerful!  Our next data verb is Aggregate where we apply a function over all rows in a column. Below is the result when we Aggregate sum        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D    26 186 4 234.6      Our next data verbs are about merging datasets together. This is important to know because sometimes our data is in different places and we want to bring it together. There are three main ways to merge datasets:   Union - use when columns are the same, glues rows of one dataset to the end of another  Intersect - only takes rows that are the same between the two datasets  Difference - only takes rows that are in one dataset but not the other    Brainstrom situations where you would want to use each of these data table mergers.    Setting up verb sentences  Now that we have our data verbs, we can start using them to talk about how we would like to start answering our data science questions! Below is a sample of a data table about places that sell burritos. First, what data type is each column?    Location BurritoType Date Neighborhood Address Yelp Google Chips Cost  Taco Stand California 2\/12\/2016 La Jolla 621 Pearl St 4.5 4.4 7.49  Lola's 7 Up Market and Deli Shredded beef 2\/29\/2016 Carlsbad 3292 Roosevelt St 4.5 4.9 6  Cancun Mexican and Seafood California 3\/20\/2016 Encinitas 1766 N Coast Hwy 4.5 4.1 x 6.99  Mikes Taco Club California 3\/23\/2016 Ocean Beach 5060 Newport Ave 4.5 4.9 8.59  La Perla Cocina Addiction 3\/30\/2016 Pacific Beach 745 Emerald St 4.5 4.7 7.99  California Burritos California Everything 4\/15\/2016 Linda Vista 7754 Starling Dr 4.5 4.4 x 6.25  Mi Asador Mexican and Seafood California 4\/27\/2016 Oceanside 4750 Oceanside Blvd 4.5 4.4 x 6.89   If our question is Which location in La Jolla has the highest rated burrito? we can answer this using our data verbs. First, we would want to Filter the neighborhood column so it only shows us places in La Jolla. Then we would want to Mutate creating a new column which is the combination of the two ratings (either by summing them or finding the average). Finally we would Sort by this combined rating column in descending order (leaving the biggest entry as the first one). Then the first row would give us our desired location!  Data Verb Sentences For the questions below, determine which data verbs you would need to achieve this task! Sometimes it can be helpful to physically sketch what the final table would look like and then use the verbs to get to your desired table.  Which burrito type is the highest rated?  Which burrito type costs the most?  Does coming with chips increase ratings?    Data verbs are a helpful framework to help get us thinking like a data scientists when we start using technology. What is nice about this framework is you can apply it to any programming language that you use- you just need to learn the commands for your data verbs!    Below is a list of our data verbs. Categorize the verbs into groups depending if they happen to the columns or rows.  Select  Filter  Mutate  Sort  Group  Aggregate   What is a good system to help use our verbs to answer our data questions?  What do you predict some challenges could be when using data verbs?   "
},
{
  "id": "matching-data-types",
  "level": "2",
  "url": "section-3-1.html#matching-data-types",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Data Types.",
  "body": " Data Types  matching data types   Match each column in the data table below to its data type  Example Data Table    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West          A  Integer    B  Character    C  Boolean    D  Float    E  String    "
},
{
  "id": "table-4",
  "level": "2",
  "url": "section-3-1.html#table-4",
  "type": "Table",
  "number": "3.1.2",
  "title": "Functions for Data Table",
  "body": " Functions for Data Table    Boolean  Integer  Float  Character  String    Equals? Sum Sum Uppercase Upper\/lower case    AND Count Count Lowercase Join\/split    OR Abs Abs Equals Count substring    NOT Mult. Mult.\/Div. Find    Sum Greater\/less than Greater\/less than Strip    Count Mod div. Equals\/ Length    Average Equals? Most math    "
},
{
  "id": "p-87",
  "level": "2",
  "url": "section-3-1.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Select "
},
{
  "id": "table-5",
  "level": "2",
  "url": "section-3-1.html#table-5",
  "type": "Table",
  "number": "3.1.3",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-6",
  "level": "2",
  "url": "section-3-1.html#table-6",
  "type": "Table",
  "number": "3.1.4",
  "title": "",
  "body": "   A  B  C    5 a True    3 a True    4 b False    2 b True    3 c False    5 c False    4 c True    "
},
{
  "id": "p-90",
  "level": "2",
  "url": "section-3-1.html#p-90",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filter "
},
{
  "id": "table-7",
  "level": "2",
  "url": "section-3-1.html#table-7",
  "type": "Table",
  "number": "3.1.5",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-8",
  "level": "2",
  "url": "section-3-1.html#table-8",
  "type": "Table",
  "number": "3.1.6",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    "
},
{
  "id": "p-93",
  "level": "2",
  "url": "section-3-1.html#p-93",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mutate "
},
{
  "id": "table-9",
  "level": "2",
  "url": "section-3-1.html#table-9",
  "type": "Table",
  "number": "3.1.7",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-10",
  "level": "2",
  "url": "section-3-1.html#table-10",
  "type": "Table",
  "number": "3.1.8",
  "title": "",
  "body": "   A  B  C  D  E  F    5 a True 46.7 North 7    3 a True 35.6 West 5    4 b False 10.8 East 6    2 b True 124.6 North 4    3 c False 4.8 South 5    5 c False 4.7 East 7    4 c True 7.4 West 6    "
},
{
  "id": "p-96",
  "level": "2",
  "url": "section-3-1.html#p-96",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sort "
},
{
  "id": "table-11",
  "level": "2",
  "url": "section-3-1.html#table-11",
  "type": "Table",
  "number": "3.1.9",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-12",
  "level": "2",
  "url": "section-3-1.html#table-12",
  "type": "Table",
  "number": "3.1.10",
  "title": "",
  "body": "   A  B  C  D  E    2 b True 124.6 North    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    4 c True 7.4 West    3 c False 4.8 South    5 c False 4.7 East    "
},
{
  "id": "table-13",
  "level": "2",
  "url": "section-3-1.html#table-13",
  "type": "Table",
  "number": "3.1.11",
  "title": "Original data table for following exercises",
  "body": "Original data table for following exercises    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "data-verb-mult-one",
  "level": "2",
  "url": "section-3-1.html#data-verb-mult-one",
  "type": "Exercise",
  "number": "3.1.2.1",
  "title": "Test yourself!",
  "body": "Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    C  D  E    True 46.7 NORTH    True 35.6 WEST    True 124.6 NORTH    True 7.4 WEST        Select    Yes, columns C,D, and E were selected.      Filter    Yes, this data set was filtered by C==True or filtered by E==North or West.      Mutate    Yes, notice how column E is now in upper case.      Sort    Our rows have not changed relative order.    "
},
{
  "id": "data-verb-mult-two",
  "level": "2",
  "url": "section-3-1.html#data-verb-mult-two",
  "type": "Exercise",
  "number": "3.1.2.2",
  "title": "Test yourself!",
  "body": "Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    E  F(from A)  G (from B)    East 8 25    East 10 11        Select    Yes, columns E, F, and G were selected.      Filter    Yes, this data set was filtered by E==East.      Mutate    Yes, both columns F and G are made from previous columns (A and B respectively). Can you determine the operation?      Sort    Our rows have not changed relative order.    "
},
{
  "id": "p-119",
  "level": "2",
  "url": "section-3-1.html#p-119",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Group "
},
{
  "id": "table-16",
  "level": "2",
  "url": "section-3-1.html#table-16",
  "type": "Table",
  "number": "3.1.14",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-17",
  "level": "2",
  "url": "section-3-1.html#table-17",
  "type": "Table",
  "number": "3.1.15",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West        A  B  C  D  E    4 b False 10.8 East    2 b True 124.6 North        A  B  C  D  E    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "p-123",
  "level": "2",
  "url": "section-3-1.html#p-123",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Aggregate "
},
{
  "id": "table-18",
  "level": "2",
  "url": "section-3-1.html#table-18",
  "type": "Table",
  "number": "3.1.16",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-19",
  "level": "2",
  "url": "section-3-1.html#table-19",
  "type": "Table",
  "number": "3.1.17",
  "title": "",
  "body": "   A  B  C  D    26 186 4 234.6    "
},
{
  "id": "p-127",
  "level": "2",
  "url": "section-3-1.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Union "
},
{
  "id": "p-128",
  "level": "2",
  "url": "section-3-1.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intersect "
},
{
  "id": "p-129",
  "level": "2",
  "url": "section-3-1.html#p-129",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Difference "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "section-3-1.html#activity-2",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": " Brainstrom situations where you would want to use each of these data table mergers.  "
},
{
  "id": "table-20",
  "level": "2",
  "url": "section-3-1.html#table-20",
  "type": "Table",
  "number": "3.1.18",
  "title": "",
  "body": "  Location BurritoType Date Neighborhood Address Yelp Google Chips Cost  Taco Stand California 2\/12\/2016 La Jolla 621 Pearl St 4.5 4.4 7.49  Lola's 7 Up Market and Deli Shredded beef 2\/29\/2016 Carlsbad 3292 Roosevelt St 4.5 4.9 6  Cancun Mexican and Seafood California 3\/20\/2016 Encinitas 1766 N Coast Hwy 4.5 4.1 x 6.99  Mikes Taco Club California 3\/23\/2016 Ocean Beach 5060 Newport Ave 4.5 4.9 8.59  La Perla Cocina Addiction 3\/30\/2016 Pacific Beach 745 Emerald St 4.5 4.7 7.99  California Burritos California Everything 4\/15\/2016 Linda Vista 7754 Starling Dr 4.5 4.4 x 6.25  Mi Asador Mexican and Seafood California 4\/27\/2016 Oceanside 4750 Oceanside Blvd 4.5 4.4 x 6.89  "
},
{
  "id": "p-133",
  "level": "2",
  "url": "section-3-1.html#p-133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filter Mutate Sort "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "section-3-1.html#activity-3",
  "type": "Activity",
  "number": "3.1.3",
  "title": "Data Verb Sentences.",
  "body": "Data Verb Sentences For the questions below, determine which data verbs you would need to achieve this task! Sometimes it can be helpful to physically sketch what the final table would look like and then use the verbs to get to your desired table.  Which burrito type is the highest rated?  Which burrito type costs the most?  Does coming with chips increase ratings?   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "section-3-1.html#exercise-6",
  "type": "Exercise",
  "number": "3.1.5.1",
  "title": "",
  "body": "Below is a list of our data verbs. Categorize the verbs into groups depending if they happen to the columns or rows.  Select  Filter  Mutate  Sort  Group  Aggregate  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "section-3-1.html#exercise-7",
  "type": "Exercise",
  "number": "3.1.5.2",
  "title": "",
  "body": "What is a good system to help use our verbs to answer our data questions? "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "section-3-1.html#exercise-8",
  "type": "Exercise",
  "number": "3.1.5.3",
  "title": "",
  "body": "What do you predict some challenges could be when using data verbs? "
},
{
  "id": "section-3-2",
  "level": "1",
  "url": "section-3-2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Cleaning Data",
  "body": " Cleaning Data  Cleaning is where we use our data verbs in order to put our dataset in a format that is easier for future use. Usually we perform cleaning when:  Data is not in right format (think variable type)  Data is not in consistent format  Missing or blank values     Why would it be important for all data in a column to have the same variable type?  Having our data in the same format allows us to easily use our data verbs later on whether we are filtering, mutating, or performing aggregate functions. It ensures that the column contains perdictable values so we can easily give commands to the computer.   How can we handle missing values?  Our options come down to delete column, delete row, fill entry with value (zero, min\/max, average, random), or ignore. Which one we use depends on what the variable means.   Consider the data table below and list what needs to be cleaned in each column. How should we handle the missing values? How would you use your data verbs to carry out the cleaning?  Dirty Data Table    A  B  C  D  E    5 a True 46.7 North    three a True 35.6    4 b No 10.8    2 b y    3 c 0 4.8    5.0 c n 4.7 East    4      Especially around missing values, we need to be considerate before we handle them. Questions to ask ourselves about missing values before deciding:  Is a value missing because of human error or intentional? Having a missing weight value could be because someone forgot to enter it or maybe the object is outside the limits of the scale. This is an important distinction and we need to understand what our question is before moving forward with missing values.  How important is this piece of data? If we are not going to be using a column for our analysis, then we do not need to make a decision about dealing with a missing value.   Consider the dataset about Olympic Athletes with a sample shown below.    ID Name Sex Age Height Weight Team NOC Games Year Season City Sport Event Medal  3 Gunnar Nielsen Aaby M 24 NA NA Denmark DEN 1920 Summer 1920 Summer Antwerpen Football Football Men's Football NA  9 Antti Sami Aalto M 26 186 96 Finland FIN 2002 Winter 2002 Winter Salt Lake City Ice Hockey Ice Hockey Men's Ice Hockey NA  14 Pirjo Hannele Aalto (Mattila-) F 32 171 65 Finland FIN 1994 Winter 1994 Winter Lillehammer Biathlon Biathlon Women's 7.5 kilometres Sprint NA  18 Timo Antero Aaltonen M 31 189 130 Finland FIN 2000 Summer 2000 Summer Sydney Athletics Athletics Men's Shot Put NA  21 Ragnhild Margrethe Aamodt F 27 163 NA Norway NOR 2008 Summer 2008 Summer Beijing Handball Handball Women's Handball Gold  22 Andreea Aanei F 22 170 125 Romania ROU 2016 Summer 2016 Summer Rio de Janeiro Weightlifting Weightlifting Women's Super-Heavyweight NA  30 Pepijn Aardewijn M 26 189 72 Netherlands NED 1996 Summer 1996 Summer Atlanta Rowing Rowing Men's Lightweight Double Sculls Silver  30 Pepijn Aardewijn M 30 189 72 Netherlands NED 2000 Summer 2000 Summer Sydney Rowing Rowing Men's Lightweight Double Sculls NA 3 1 Evald rma (rman-) M 24 174 70 Estonia EST 1936 Summer 1936 Summer Berlin Athletics Athletics Men's Pole Vault NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's Foil, Individual\" NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's epee, Individual\" NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's epee, Team\" NA  44 Meelis Aasme M 25 182 73 Estonia EST 1998 Winter 1998 Winter Nagano Cross Country Skiing Cross Country Skiing Men's 30 kilometres NA  44 Meelis Aasme M 25 182 73 Estonia EST 1998 Winter 1998 Winter Nagano Cross Country Skiing Cross Country Skiing Men's 50 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 15 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 50 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 4 x 10 kilometres Relay NA  49 Moonika Aava F 24 168 65 Estonia EST 2004 Summer 2004 Summer Athina Athletics Athletics Women's Javelin Throw NA  49 Moonika Aava F 28 168 65 Estonia EST 2008 Summer 2008 Summer Beijing Athletics Athletics Women's Javelin Throw NA  57 Borislav Abadzhiev M 24 176 66 Bulgaria BUL 1988 Summer 1988 Summer Seoul Boxing Boxing Men's Light-Welterweight NA     Indicate the variable type of each column.  Some of the rows have missing data indicated with NA in the data cell. Propose what you would do to deal with the missing (and duplicate) data in each of the following scenarios.  You want to compute the average height of athletes of different sports.  You want to determine which countries earn the most gold, silver, and bronze medals.       "
},
{
  "id": "question-1",
  "level": "2",
  "url": "section-3-2.html#question-1",
  "type": "Question",
  "number": "3.2.1",
  "title": "",
  "body": " Why would it be important for all data in a column to have the same variable type? "
},
{
  "id": "question-2",
  "level": "2",
  "url": "section-3-2.html#question-2",
  "type": "Question",
  "number": "3.2.2",
  "title": "",
  "body": " How can we handle missing values? "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "section-3-2.html#activity-4",
  "type": "Activity",
  "number": "3.2.1",
  "title": "",
  "body": " Consider the data table below and list what needs to be cleaned in each column. How should we handle the missing values? How would you use your data verbs to carry out the cleaning?  Dirty Data Table    A  B  C  D  E    5 a True 46.7 North    three a True 35.6    4 b No 10.8    2 b y    3 c 0 4.8    5.0 c n 4.7 East    4     "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "section-3-2.html#exercise-9",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "Consider the dataset about Olympic Athletes with a sample shown below.    ID Name Sex Age Height Weight Team NOC Games Year Season City Sport Event Medal  3 Gunnar Nielsen Aaby M 24 NA NA Denmark DEN 1920 Summer 1920 Summer Antwerpen Football Football Men's Football NA  9 Antti Sami Aalto M 26 186 96 Finland FIN 2002 Winter 2002 Winter Salt Lake City Ice Hockey Ice Hockey Men's Ice Hockey NA  14 Pirjo Hannele Aalto (Mattila-) F 32 171 65 Finland FIN 1994 Winter 1994 Winter Lillehammer Biathlon Biathlon Women's 7.5 kilometres Sprint NA  18 Timo Antero Aaltonen M 31 189 130 Finland FIN 2000 Summer 2000 Summer Sydney Athletics Athletics Men's Shot Put NA  21 Ragnhild Margrethe Aamodt F 27 163 NA Norway NOR 2008 Summer 2008 Summer Beijing Handball Handball Women's Handball Gold  22 Andreea Aanei F 22 170 125 Romania ROU 2016 Summer 2016 Summer Rio de Janeiro Weightlifting Weightlifting Women's Super-Heavyweight NA  30 Pepijn Aardewijn M 26 189 72 Netherlands NED 1996 Summer 1996 Summer Atlanta Rowing Rowing Men's Lightweight Double Sculls Silver  30 Pepijn Aardewijn M 30 189 72 Netherlands NED 2000 Summer 2000 Summer Sydney Rowing Rowing Men's Lightweight Double Sculls NA 3 1 Evald rma (rman-) M 24 174 70 Estonia EST 1936 Summer 1936 Summer Berlin Athletics Athletics Men's Pole Vault NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's Foil, Individual\" NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's epee, Individual\" NA  39 Lars Thorlaksn Aas M 33 NA NA Norway NOR 1912 Summer 1912 Summer Stockholm Fencing \"Fencing Men's epee, Team\" NA  44 Meelis Aasme M 25 182 73 Estonia EST 1998 Winter 1998 Winter Nagano Cross Country Skiing Cross Country Skiing Men's 30 kilometres NA  44 Meelis Aasme M 25 182 73 Estonia EST 1998 Winter 1998 Winter Nagano Cross Country Skiing Cross Country Skiing Men's 50 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 15 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 50 kilometres NA  44 Meelis Aasme M 29 182 73 Estonia EST 2002 Winter 2002 Winter Salt Lake City Cross Country Skiing Cross Country Skiing Men's 4 x 10 kilometres Relay NA  49 Moonika Aava F 24 168 65 Estonia EST 2004 Summer 2004 Summer Athina Athletics Athletics Women's Javelin Throw NA  49 Moonika Aava F 28 168 65 Estonia EST 2008 Summer 2008 Summer Beijing Athletics Athletics Women's Javelin Throw NA  57 Borislav Abadzhiev M 24 176 66 Bulgaria BUL 1988 Summer 1988 Summer Seoul Boxing Boxing Men's Light-Welterweight NA     Indicate the variable type of each column.  Some of the rows have missing data indicated with NA in the data cell. Propose what you would do to deal with the missing (and duplicate) data in each of the following scenarios.  You want to compute the average height of athletes of different sports.  You want to determine which countries earn the most gold, silver, and bronze medals.     "
},
{
  "id": "section-3-3",
  "level": "1",
  "url": "section-3-3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Data Verbs in Excel",
  "body": " Data Verbs in Excel  Let's revisit our questions about the burrito data set. Let's answer this using Excel. We can do most of our data verbs if we turn our data set into a table. For group and aggregate we will need to use a pivot table. We can pull our variables into rows, columns, value - where we can choose our aggregate function. This is not the full extent of what a pivot table can do but is helpful for us for quick data analysis.  "
},
{
  "id": "section-3-4",
  "level": "1",
  "url": "section-3-4.html",
  "type": "Section",
  "number": "3.4",
  "title": "Data Verbs in Python",
  "body": " Data Verbs in Python  A bit more programming  Today, we are going to get a bit more sophisticated in our programming skills. We will be focusing on functions and loops. A function is a recipe of directions that has inputs (ingredients) and an output (cake). Some functions are internally built into the object (like being able to measure flour) and others are external (like baking a cake).  Internal functions (sometimes called methods) happen after the variable name like so flour.measure() where flour is the variable name and measure() is a function that acts on flour . Sometimes things need to go into the parenthesis like what unit we can to measure in. flour.measure(\"cups\") This would not only measure the flour but do so in our desire unit, cups!  Other functions that are more like baking a cake have all their inputs in parenthesis. bake(flour, sugar, egg)  Packages are a special collection of functions that other people have written that we can use. To use a function from a package, we first have to import them into our notebook. Typical Packages:  Pandas - great for data, create a dataframe which has lots of neat features like our data verbs  NumPy - great for math like square roots. Has arrays which are nice for data manipulation  MatPlotLib.pyplots - MatLab-like plotting, basic visuals  Seaborn - more sophisticated plotting and making visuals  SkLearn - many algorithms and datasets for data analysis  When importing packages, you can either import the entire package or particular parts. All of these packages have documentation online (usually) with good examples of how to use their functions.  If a function comes from a package, then its name might include the package it came from. import pandas as pd pd.read_csv(FILE_NAME) Here read_csv() is a function from the pandas package which we named pd . Load the pandas package and read the Titanic Dataset using the following URL: URL=\"https:\/\/raw.githubusercontent.com\/klorenzen\/Data-Sets\/main\/titanic.csv\"  Loading Data  import pandas as pd URL=\"https:\/\/raw.githubusercontent.com\/klorenzen\/Data-Sets\/main\/titanic.csv\" pd.read_csv(URL)    Data Verbs   To select a particular column from our data set we would write: df[ColumnName] . If we have multiple columns, we need to give write a list of all the column names we need (or splice from the df.columns list). There are other ways to do this, but this is one of the more direct ways. For the titanic dataset, select the survived , age , and boat columns.  To filter particular rows based on a logical expression (think ==, >, .isin(), etc) we would write: df[df[ColumnName]==\"Pugs\"] If we had multiple filters or wanted to do filtering at the same time as selecting we would need to write: df.loc[(FILTER 1) & (FILTER 2), [ColumnName1, ColumnName2]] where the `&` acts like `and` for our logical expressions. For the titanic dataset, select the survived , age , and boat columns and filter the dataset so we only have female passengers.  To make a new column based on previous columns ( mutate ) we will do an assignment for our new columns as follows: df[NewColumn]=Stuff with previous columns How we get the stuff with previous columns is always interesting! For the Titanic dataset, create a new column that is just the cabin letter for the passengers who have a cabin entry.  To sort by particular column(s) we would write: df.sort_values(by=Columns, ascending=True) It will automatically go from smallest to biggest, to go the other way we will need to change `ascending` to `False`. For the Titanic dataset, find who the youngest person was on the ship and who was the oldest.   Grouping breaks our dataset into many little pieces so we can study it by subgroup. We would write: df.groupby([Column1, Column2]) Grouping is almost always used with aggregate which applies a function over a column.   Aggregate applies a function over an entire column (or portion of column if grouped first). We would write: df.agg(['sum', 'min', 'max', 'mean']) or df.agg({'Column1':['sum', 'mean'], 'Column2':['min', 'max']}) You can also pass it functions you wrote yourself! For the Titanic dataset, find the average age of people who survived and the average age of people who did not survive. How does compare to the average age of female\/male passengers?    "
},
{
  "id": "p-163",
  "level": "2",
  "url": "section-3-4.html#p-163",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function "
},
{
  "id": "p-166",
  "level": "2",
  "url": "section-3-4.html#p-166",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Packages "
},
{
  "id": "program-activecode-python",
  "level": "2",
  "url": "section-3-4.html#program-activecode-python",
  "type": "Checkpoint",
  "number": "3.4.1",
  "title": "Loading Data.",
  "body": "Loading Data  import pandas as pd URL=\"https:\/\/raw.githubusercontent.com\/klorenzen\/Data-Sets\/main\/titanic.csv\" pd.read_csv(URL)  "
},
{
  "id": "p-173",
  "level": "2",
  "url": "section-3-4.html#p-173",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "select filter mutate sort Grouping Aggregate "
},
{
  "id": "section-3-4",
  "level": "1",
  "url": "section-3-4.html",
  "type": "Section",
  "number": "3.5",
  "title": "Functions in Python",
  "body": " Functions in Python  Lists and Dictionaries  Lists are an important data type that we will use frequently. A Lists store other data types (including other lists) and are mutable meaning we can change the entries. To make a list we put our entries into square brackets separated by commas. We call them with an index or the number they are in order. Python begins all indices with zero, so the first entry has index 0. For example, here is a list:   my_list=['a', 'b', 'c', 4, 10]  To print the fourth entry in the list we would write my_list[3] . Try this below:  We can reassign indices to values by using = which is the assignment operator. For example my_list[3]=7%5 reassigns the fourth entry to the remainder of seven divided by five. We can also use special methods of our lists including  my_list.append(x) which would add x to the end of the list,  my_list.pop(2) which would remove the index 2 entry from the list, and  my_list.remove(x) which removes element x from the list  Try these with values inside the parenthesis.  If we want to quickly create a list of numbers that are increasing by a set amount, we can use range() function. The input is the start and stop+1. If only one input is given, it starts at 0 and ends at stop-1. This function is a generator meaning that we have to tell it we would like it to make a list with the command list(range(start, stop+1)) . Using range() , make a list that is the numbers 3 through 13 .  Dictionaries are helpful when doing cleaning and feature extraction. Dictionaries are like lists expect they are unordered so they do not have an order to them. They have two pieces: keys and values. To make a dictionary we put our keys-value pairs between curly braces separated by commas. We indicate which entry is the key and which one is the value using a colon. For example,   my_dict={\"apple\":\"fruit\", \"bean\":\"veggie\"}  Like lists, dictionaries are changable, meaning we can change, add, or remove items after the dictionary has been created. First, use the key \"apple\" to call the value \"fruit\" by using it like an index of a list. Try reassigning the value of the key \"apple\" then try reassigning the value in a dictionary of a that does not exist like 10. What do you notice?  Create a dictionary with duplicate keys, what happens when you print the duplicate key value?   Writing own functions  Now that we have our data verbs we can have more fun gathering information from data. Today we will be exploring how we can mutate columns with more sophistication. In addition to using other people's functions, we can also write our own. This is really useful when we notice that we are doing a repetitive process. If we wanted to write a function that added two to a number it would look like this:    def addTwo(x): result=x+2 return result    Here the def means were are defining a new function, addTwo() is the name of our function that we will use to call again, x is our input variable and : means we are about to give our recipe. Notice the next line is tabbed over, this is important. Once we leave the tabbed lines, we are no longer giving recipe instructions. The other important part in the return which is followed by the product we want from our function. This is optional. Write a function that determines whether a number is even or odd.     if statements, for loops, and while loops  Some other programming ideas we will be using are if statements. An if statement is some part of the program that only runs if something is true. For example   if x<0: x=x*-1 np.squareroot(x)   Similar to a function definition, only the tabbed part happens if x<0 . We can also add an else which will allow us to run different lines if it is not true. For example   if x==0: x+=1 else: x=x\/10  A for loop is a program that will do something to every object in a list (iterable object). It has a variable that is the thing that changes as well as the list that the variable will become. For example   for x in [1,2,3,4,5,6]: print(x*7)  A *while* loop is similar to a for loop although it does not go through a list. It will stop once a logical expression is no longer satisfied. For example   x=1 while x<10: print(x+2) x=x+1  Be cautious with while loops that you update the variable otherwise they will run forever.   Write a script that prints all the squares of the odd number between 1 and 10.    Mutating with functions  Now that we have more python tools under our belt, we can start to learn how to use these while trying to mutate columns. For this section we will be focusing on the Titanic dataset. The Titanic dataset has a list of all the people onboard the Titanic Oceanliner before it met its tragic end by hitting an iceberg. It is full of interesting information and we will try to extract it all!  Here is a quick list of some functions that may or may not be helpful as we try to use our data verbs!  df.isna() - turns all entries to True if it is blank (or has NaN in them) and False otherwise  df.dropna(axis=0, how=\"all\", inplace=False) - returns a dataset where rows with all blank entries are dropped, note that this does not save the new dataset  df[ColName].unique() - returns all unique entries in a particular column  df[ColName].value_counts() - returns all unique entries and the number of times they each occur  df[ColName].map(dict) - returns a new column where entries in original column are turned into new entries according to the dictionary (keys-old entries, values-new entries)  df[ColName].apply(func) - returns a new column where entries in original column are turned into new entries according to the dictionary    Playing with Titanic Dataset  Perform the following tasks on the dataset  Remove any rows with all blank entries  What percentage of the passengers were men? What percentage of survivors were men?  How many different life boats were on the ship? How many people were on each one?  For each life boat, what was the percentage of male? What percentage were female?  Make a new column that classifies the fare a passenger paid for their ticket into one of four groups: less than 10, more than 10 less than 50, more than 50 less than 100, and more than 100. Find the percentage of survivors for each fare class.  Find the percentage of survivors by gender and fare class. How does the male survival rates broken down by fare classes compare to the overall percentage of the male survivors? What might this tell you about important factors to determining whether someone survived?      "
},
{
  "id": "p-180",
  "level": "2",
  "url": "section-3-4.html#p-180",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lists "
},
{
  "id": "p-187",
  "level": "2",
  "url": "section-3-4.html#p-187",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "range() "
},
{
  "id": "p-188",
  "level": "2",
  "url": "section-3-4.html#p-188",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionaries "
},
{
  "id": "p-195",
  "level": "2",
  "url": "section-3-4.html#p-195",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "if "
},
{
  "id": "p-199",
  "level": "2",
  "url": "section-3-4.html#p-199",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "for "
},
{
  "id": "p-201",
  "level": "2",
  "url": "section-3-4.html#p-201",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "for "
},
{
  "id": "p-203",
  "level": "2",
  "url": "section-3-4.html#p-203",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "while "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "section-3-4.html#activity-5",
  "type": "Activity",
  "number": "3.5.1",
  "title": "",
  "body": " Write a script that prints all the squares of the odd number between 1 and 10.  "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "section-3-4.html#activity-6",
  "type": "Activity",
  "number": "3.5.2",
  "title": "Playing with Titanic Dataset.",
  "body": "Playing with Titanic Dataset  Perform the following tasks on the dataset  Remove any rows with all blank entries  What percentage of the passengers were men? What percentage of survivors were men?  How many different life boats were on the ship? How many people were on each one?  For each life boat, what was the percentage of male? What percentage were female?  Make a new column that classifies the fare a passenger paid for their ticket into one of four groups: less than 10, more than 10 less than 50, more than 50 less than 100, and more than 100. Find the percentage of survivors for each fare class.  Find the percentage of survivors by gender and fare class. How does the male survival rates broken down by fare classes compare to the overall percentage of the male survivors? What might this tell you about important factors to determining whether someone survived?    "
},
{
  "id": "section-4-1",
  "level": "1",
  "url": "section-4-1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basic sampling techniques",
  "body": " Basic sampling techniques  "
},
{
  "id": "section-4-2",
  "level": "1",
  "url": "section-4-2.html",
  "type": "Section",
  "number": "4.2",
  "title": "True, easy to understand, not misleading",
  "body": " True, easy to understand, not misleading  "
},
{
  "id": "section-4-3",
  "level": "1",
  "url": "section-4-3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Principles of Design",
  "body": " Principles of Design  Gestalt Principles of Design  "
},
{
  "id": "section-5-1",
  "level": "1",
  "url": "section-5-1.html",
  "type": "Section",
  "number": "5.1",
  "title": "Communicating with self",
  "body": " Communicating with self  Best practices for notebooks, etc. Notes for self\/team members.  "
},
{
  "id": "section-5-2",
  "level": "1",
  "url": "section-5-2.html",
  "type": "Section",
  "number": "5.2",
  "title": "Communicating with others",
  "body": " Communicating with others  Like a science fair project: Intro, methods, conclusion.  Tips for STEM written and oral communication.  "
},
{
  "id": "section-6-1",
  "level": "1",
  "url": "section-6-1.html",
  "type": "Section",
  "number": "6.1",
  "title": "Under and over sampling techniques",
  "body": " Under and over sampling techniques  "
},
{
  "id": "section-6-2",
  "level": "1",
  "url": "section-6-2.html",
  "type": "Section",
  "number": "6.2",
  "title": "Naive Bayes Classifier",
  "body": " Naive Bayes Classifier  I didn't retype my notes, but here is how you do math. Inline: . As an unlabeled equation: As a labeled equation:   Here is an example of a table:   Bike Ride Data            Weather  Temperature  Humidity  Wind  Bike Ride?    Rainy  F  High  13 mph  False     "
},
{
  "id": "table-23",
  "level": "2",
  "url": "section-6-2.html#table-23",
  "type": "Table",
  "number": "6.2.1",
  "title": "Bike Ride Data",
  "body": " Bike Ride Data            Weather  Temperature  Humidity  Wind  Bike Ride?    Rainy  F  High  13 mph  False    "
},
{
  "id": "section-6-3",
  "level": "1",
  "url": "section-6-3.html",
  "type": "Section",
  "number": "6.3",
  "title": "Linear and Logistic Regression",
  "body": " Linear and Logistic Regression  "
},
{
  "id": "section-6-4",
  "level": "1",
  "url": "section-6-4.html",
  "type": "Section",
  "number": "6.4",
  "title": "K-Nearest Neighbors",
  "body": " K-Nearest Neighbors  "
},
{
  "id": "section-6-5",
  "level": "1",
  "url": "section-6-5.html",
  "type": "Section",
  "number": "6.5",
  "title": "Decision Trees",
  "body": " Decision Trees  "
},
{
  "id": "section-6-6",
  "level": "1",
  "url": "section-6-6.html",
  "type": "Section",
  "number": "6.6",
  "title": "K-Means Clustering",
  "body": " K-Means Clustering  "
},
{
  "id": "section-6-7",
  "level": "1",
  "url": "section-6-7.html",
  "type": "Section",
  "number": "6.7",
  "title": "Principal Component Analysis",
  "body": " Principal Component Analysis  "
},
{
  "id": "section-6-8",
  "level": "1",
  "url": "section-6-8.html",
  "type": "Section",
  "number": "6.8",
  "title": "Neural Nets",
  "body": " Neural Nets  "
},
{
  "id": "chapter-7",
  "level": "1",
  "url": "chapter-7.html",
  "type": "Chapter",
  "number": "7",
  "title": "Graph-based Models",
  "body": " Graph-based Models  "
},
{
  "id": "section-8-1",
  "level": "1",
  "url": "section-8-1.html",
  "type": "Section",
  "number": "8.1",
  "title": "How to ask a data science question",
  "body": " How to ask a data science question  "
},
{
  "id": "section-8-2",
  "level": "1",
  "url": "section-8-2.html",
  "type": "Section",
  "number": "8.2",
  "title": "Data acquisition",
  "body": " Data acquisition  "
},
{
  "id": "section-8-3",
  "level": "1",
  "url": "section-8-3.html",
  "type": "Section",
  "number": "8.3",
  "title": "Choosing your tools",
  "body": " Choosing your tools  "
},
{
  "id": "section-9-1",
  "level": "1",
  "url": "section-9-1.html",
  "type": "Section",
  "number": "9.1",
  "title": "Sports",
  "body": " Sports  "
},
{
  "id": "section-9-2",
  "level": "1",
  "url": "section-9-2.html",
  "type": "Section",
  "number": "9.2",
  "title": "Finance",
  "body": " Finance  Stock Market Trends    Webscraping  Cleaning Scraped Data  Introduce Time Series Analysis    "
},
{
  "id": "Section-9-2-objectives",
  "level": "2",
  "url": "section-9-2.html#Section-9-2-objectives",
  "type": "Objectives",
  "number": "9.2",
  "title": "",
  "body": "  Webscraping  Cleaning Scraped Data  Introduce Time Series Analysis   "
},
{
  "id": "section-9-3",
  "level": "1",
  "url": "section-9-3.html",
  "type": "Section",
  "number": "9.3",
  "title": "Environmental",
  "body": " Environmental    Expand on PCA  Apply PCA to help identify outliers in large data sets  Apply PCA to aid in feature selection in small data sets    As discussed in , identifying outliers is an important part of data analysis. It is also one of the more dangerous decisions that a data analyst can make. Labeling a unique observation as an outlier can remove valuable information that should be retained from our data set if decided haphazardly or incorrectly. Unfortunately, in high dimensional space, nearly any particular observation might be considered an outlier in at least some feature(s).  On the other hand, in large data sets, it is relatively likely that some outliers will be observed. Or worse, that some experimental error causes an unexpected alteration of the data. Including this information could be just as damaging to our analysis as removing data that should not be considered an outlier. We doing analysis where outliers might be present, recall that a standard practice is to do the analysis twice. Once with the proposed outliers, and once without.  As introduced in *CHAPTER REFERENCE*, PCA provides a way to help us to reduce the dimensionality of a data set. In this way, it can help illuminate us not only to the most important features, but also to data points that are exceptionally far from a typical observation. Unfortunately, PCA depends on variance to make its determination, and outliers can have a large impact on the variance of a feature causing the outliers to be harder to distinguish.  For this reason, we introduce Robust PCA. Our idea is that by taking many subsamples of our data, we expect not to be heavily impacted by what we expect to be only a few outliers. The question that must be answered now is how do we determine which subset to use as our ``typical'' data. Our intuition for outliers in PCA is that they would be far away from most of the data in the reduced space provided by PCA. One way to think about the size of the space that PCA finds is through the determinant. A small determinant would correspond to a compact space in which the data lies. With this intuition, we may hazard to guess that a good set to run PCA on would provide compact space. Our goal is to sample from our data set to find a minimum determinant of the covariance matrix.  When we subsample, there are a few decisions that we must make. One of the most important decisions in such a process is the size of the subsets chosen. In PCA we still want a representative sample of the entire data, so we should not choose a small (under 50%) proportion of our data. On the other hand, if the sampled set is too large, we are likely to choose outliers. A general rule of thumb is to select about 75% of the entire data set for each sample. Note that one cost of a resampling method such as this is cost. Instead of running PCA once, we will be running it potentially hundreds or thousands of times. As such, data sets with more than a few features might be time consuming and will eventually be impractical to check.   Minimum Covariance Determinant  We will now apply the minimum covariance determinant method to a dataset to identify potential outliers. Fortunately for us, this has already been implemented in the SciKit-Learn!   As we can see, there are 13 measured variables for each wine. One might wonder, what is the most important feature for determining the type of wine. Can we make a solid guess about the type of wine if we select only two or three of these thirteen options?  Before, we developed techinques to visualize high dimensional data. A common technique is to visualize the data in pairs, for example we might plot alcohol versus flavonoids. Below we make that plot and a plot for alcohol vs malic_acid.   Each of these plots looks like you could separate some of the groups from them, but it merely a small portion of the data we have available. This is where Principal Component Analysis (PCA) kicks in. When we apply PCA we can determine which combinations of variables are most important and plot based on those instead of an arbitrary choice.  Ideally after applying PCA we will be able to identify combinations of features that allow us to easily distinguish between groups in data. Visually this means that there should be little to no overlap in the groups.   Here we see that by using PCA we can nicely separate out at least one of the groups but there is a little overlap remaining. Part of the reason for this is that PCA relies heavily on the variance of each of the features. Since our features were not scaled down, we are not getting as clean an image as we may like. Whenever using PCA, we should always consider scaling our data before applying PCA!  Below we will scale the data using a built in scaler in SciKit-Learn. We will then make the same plot (using the first two principal components) and get a more clear distinction between the three groups of wine.   Now each group has almost no overlap with any other group! This is a great success for PCA as we can now plot our data in two dimensions where each group is clearly distinguished.  A few questions remain though. What were the features that were chosen for this representation? And how well do those features really do in explaining how different our wines can be?  Fortunately, this implementation of PCA allows us to extract a variable called explained_variance_ratio_ which gives the percentage of the total variance that each of these principal components explains. We can also extract the principal components themselves using components_ but these are perhaps less intuitively valuable. As discussed above, they roughly tell you how to combine each feature to get the most information.  Our goal now is to represent how important each of the remaining principal components that were not used for the biplot are.   To interpret this, we would say that 36.2% of the total variance is explained using principal component 1, 19.2% is explained by principal component 2, and so on. This allows us to get an estimate of just how good a representation of our data the two principal component representation is. Though it remains to consider the impact of each of the other principal components.  We now create an important representation of PCA called the biplot. This plot is a two dimensional plot that also includes projections of the features into the transformed space that PCA creates so we can visualize which features are having the greatest impact on our data.   "
},
{
  "id": "Section-9-3-objectives",
  "level": "2",
  "url": "section-9-3.html#Section-9-3-objectives",
  "type": "Objectives",
  "number": "9.3",
  "title": "",
  "body": "  Expand on PCA  Apply PCA to help identify outliers in large data sets  Apply PCA to aid in feature selection in small data sets   "
},
{
  "id": "section-9-4",
  "level": "1",
  "url": "section-9-4.html",
  "type": "Section",
  "number": "9.4",
  "title": "Marketing",
  "body": " Marketing  "
},
{
  "id": "section-9-5",
  "level": "1",
  "url": "section-9-5.html",
  "type": "Section",
  "number": "9.5",
  "title": "Social networks",
  "body": " Social networks  "
},
{
  "id": "section-9-6",
  "level": "1",
  "url": "section-9-6.html",
  "type": "Section",
  "number": "9.6",
  "title": "Psychology",
  "body": " Psychology  "
},
{
  "id": "section-9-7",
  "level": "1",
  "url": "section-9-7.html",
  "type": "Section",
  "number": "9.7",
  "title": "Health sciences",
  "body": " Health sciences  Microbiology, possibly.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
