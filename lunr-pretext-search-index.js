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
  "id": "section-1-1",
  "level": "1",
  "url": "section-1-1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Data Verbs",
  "body": " Data Verbs  Inspired by workshop presentation by Todd Iverson and Chris Malone, Winona State University, for Project NExT at MathFest 2021.  Brief Introduction to Data Types  All of our data is classfied into different categories which helps computers process our instructions to it. Essentially, these categories make it easier for it to tell us what actions we can and cannot do to the data values. For example, if we had a column storing the height of basketball players it would be incoherent to try to make these numbers upper case where as making the names upper case is a task we can carry out.  The main data types are as follows:   Boolean: only two possible values, True or False.  Integers: whole numbers with no decimal places.  Numerical\/Float: All other numbers, usually with decimal places.  Character: a single letter or special symbol, think one key stroke from the keyboard.  String: A serise of characters including spaces.    Data Types  matching data types   Match each column in the data table below to its data type    Example Data Table    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West        A  Integer    B  Character    C  Boolean    D  Float    E  String     Each data type has certain functions that we can do to them. Here is a non-exhaustive list of the functions that we can do to data types.   Functions for Data Table    Boolean  Integer  Float  Character  String    Equals? Sum Sum Uppercase Upper\/lower case    AND Count Count Lowercase Join\/split    OR Abs Abs Equals Count substring    NOT Mult. Mult.\/Div. Find    Sum Greater\/less than Greater\/less than Strip    Count Mod div. Equals\/ Length    Average Equals? Most math     As we get further into working with data, we will get a better knowldge of how to implement these functions. When you start using a computer with data science, you might run into a type error which means that your data type and the function you are trying to use are incompatable. Having a mental chart like the one above can be helpful when trying to resolve this type of error.   First Data Verbs  Data verbs are actions we can do to a data set. We will be collection and using these throughout this class.  Our first data verb is Select where we choose a group of columns to be working with. Below is the result when we Select A,B,C        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C    5 a True    3 a True    4 b False    2 b True    3 c False    5 c False    4 c True      Our next data verb is Filter where we choose a some rows that meet a condition. Below is the result when we Filter by B== a        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West      Our next data verb is Mutate where we create a new column based on another. Below is the result when we Mutate F=A+2        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E  F    5 a True 46.7 North 7    3 a True 35.6 West 5    4 b False 10.8 East 6    2 b True 124.6 North 4    3 c False 4.8 South 5    5 c False 4.7 East 7    4 c True 7.4 West 6      Our next data verb is Sort where we order rows based on their entries in a column(s). Below is the result when we Sort by D, descending        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    2 b True 124.6 North    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    4 c True 7.4 West    3 c False 4.8 South    5 c False 4.7 East        Original data table for following exercises    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West     Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    C  D  E    True 46.7 NORTH    True 35.6 WEST    True 124.6 NORTH    True 7.4 WEST        Select    Yes, columns C,D, and E were selected.      Filter    Yes, this data set was filtered by C==True or filtered by E==North or West.      Mutate    Yes, notice how column E is now in upper case.      Sort    Our rows have not changed relative order.     Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    E  F(from A)  G (from B)    East 8 25    East 10 11        Select    Yes, columns E, F, and G were selected.      Filter    Yes, this data set was filtered by E==East.      Mutate    Yes, both columns F and G are made from previous columns (A and B respectively). Can you determine the operation?      Sort    Our rows have not changed relative order.       More Data Verbs  We are now entering more complex data verb land, but these are some of the most useful!  Our next data verb is Group where we split our data into smaller portions according to a key value in a column. Below is the result when we Group by B        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West        4 b False 10.8 East    2 b True 124.6 North        3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West      On its own grouping is not useful, but when paired with our next data verb it is really powerful!  Our next data verb is Aggregate where we apply a function over all rows in a column. Below is the result when we Aggregate sum        A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West         A  B  C  D    26 186 4 234.6      Our next data verbs are about merging datasets together. This is important to know because sometimes our data is in different places and we want to bring it together. There are three main ways to merge datasets:   Union - use when columns are the same, glues rows of one dataset to the end of another  Intersect - only takes rows that are the same between the two datasets  Difference - only takes rows that are in one dataset but not the other    Brainstrom situations where you would want to use each of these data table mergers.    Setting up verb sentences  Now that we have our data verbs, we can start using them to talk about how we would like to start answering our data science questions! Below is a sample of a data table about places that sell burritos. First, what data type is each column?    Location BurritoType Date Neighborhood Address Yelp Google Chips Cost  Taco Stand California 2\/12\/2016 La Jolla 621 Pearl St 4.5 4.4 7.49  Lola's 7 Up Market and Deli Shredded beef 2\/29\/2016 Carlsbad 3292 Roosevelt St 4.5 4.9 6  Cancun Mexican and Seafood California 3\/20\/2016 Encinitas 1766 N Coast Hwy 4.5 4.1 x 6.99  Mikes Taco Club California 3\/23\/2016 Ocean Beach 5060 Newport Ave 4.5 4.9 8.59  La Perla Cocina Addiction 3\/30\/2016 Pacific Beach 745 Emerald St 4.5 4.7 7.99  California Burritos California Everything 4\/15\/2016 Linda Vista 7754 Starling Dr 4.5 4.4 x 6.25  Mi Asador Mexican and Seafood California 4\/27\/2016 Oceanside 4750 Oceanside Blvd 4.5 4.4 x 6.89   If our question is Which location in La Jolla has the highest rated burrito? we can answer this using our data verbs. First, we would want to Filter the neighborhood column so it only shows us places in La Jolla. Then we would want to Mutate creating a new column which is the combination of the two ratings (either by summing them or finding the average). Finally we would Sort by this combined rating column in descending order (leaving the biggest entry as the first one). Then the first row would give us our desired location!  Data Verb Sentences For the questions below, determine which data verbs you would need to achieve this task! Sometimes it can be helpful to physically sketch what the final table would look like and then use the verbs to get to your desired table.  Which burrito type is the highest rated?  Which burrito type costs the most?  Does coming with chips increase ratings?    Data verbs are a helpful framework to help get us thinking like a data scientists when we start using technology. What is nice about this framework is you can apply it to any programming language that you use- you just need to learn the commands for your data verbs!   "
},
{
  "id": "matching-data-types",
  "level": "2",
  "url": "section-1-1.html#matching-data-types",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Data Types.",
  "body": " Data Types  matching data types   Match each column in the data table below to its data type    Example Data Table    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West        A  Integer    B  Character    C  Boolean    D  Float    E  String    "
},
{
  "id": "table-4",
  "level": "2",
  "url": "section-1-1.html#table-4",
  "type": "Table",
  "number": "3.1.2",
  "title": "Functions for Data Table",
  "body": " Functions for Data Table    Boolean  Integer  Float  Character  String    Equals? Sum Sum Uppercase Upper\/lower case    AND Count Count Lowercase Join\/split    OR Abs Abs Equals Count substring    NOT Mult. Mult.\/Div. Find    Sum Greater\/less than Greater\/less than Strip    Count Mod div. Equals\/ Length    Average Equals? Most math    "
},
{
  "id": "p-87",
  "level": "2",
  "url": "section-1-1.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Select "
},
{
  "id": "table-5",
  "level": "2",
  "url": "section-1-1.html#table-5",
  "type": "Table",
  "number": "3.1.3",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-6",
  "level": "2",
  "url": "section-1-1.html#table-6",
  "type": "Table",
  "number": "3.1.4",
  "title": "",
  "body": "   A  B  C    5 a True    3 a True    4 b False    2 b True    3 c False    5 c False    4 c True    "
},
{
  "id": "p-90",
  "level": "2",
  "url": "section-1-1.html#p-90",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filter "
},
{
  "id": "table-7",
  "level": "2",
  "url": "section-1-1.html#table-7",
  "type": "Table",
  "number": "3.1.5",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-8",
  "level": "2",
  "url": "section-1-1.html#table-8",
  "type": "Table",
  "number": "3.1.6",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    "
},
{
  "id": "p-93",
  "level": "2",
  "url": "section-1-1.html#p-93",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mutate "
},
{
  "id": "table-9",
  "level": "2",
  "url": "section-1-1.html#table-9",
  "type": "Table",
  "number": "3.1.7",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-10",
  "level": "2",
  "url": "section-1-1.html#table-10",
  "type": "Table",
  "number": "3.1.8",
  "title": "",
  "body": "   A  B  C  D  E  F    5 a True 46.7 North 7    3 a True 35.6 West 5    4 b False 10.8 East 6    2 b True 124.6 North 4    3 c False 4.8 South 5    5 c False 4.7 East 7    4 c True 7.4 West 6    "
},
{
  "id": "p-96",
  "level": "2",
  "url": "section-1-1.html#p-96",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sort "
},
{
  "id": "table-11",
  "level": "2",
  "url": "section-1-1.html#table-11",
  "type": "Table",
  "number": "3.1.9",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-12",
  "level": "2",
  "url": "section-1-1.html#table-12",
  "type": "Table",
  "number": "3.1.10",
  "title": "",
  "body": "   A  B  C  D  E    2 b True 124.6 North    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    4 c True 7.4 West    3 c False 4.8 South    5 c False 4.7 East    "
},
{
  "id": "table-13",
  "level": "2",
  "url": "section-1-1.html#table-13",
  "type": "Table",
  "number": "3.1.11",
  "title": "Original data table for following exercises",
  "body": "Original data table for following exercises    A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "data-verb-mult-one",
  "level": "2",
  "url": "section-1-1.html#data-verb-mult-one",
  "type": "Exercise",
  "number": "3.1.2.1",
  "title": "Test yourself!",
  "body": "Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    C  D  E    True 46.7 NORTH    True 35.6 WEST    True 124.6 NORTH    True 7.4 WEST        Select    Yes, columns C,D, and E were selected.      Filter    Yes, this data set was filtered by C==True or filtered by E==North or West.      Mutate    Yes, notice how column E is now in upper case.      Sort    Our rows have not changed relative order.    "
},
{
  "id": "data-verb-mult-two",
  "level": "2",
  "url": "section-1-1.html#data-verb-mult-two",
  "type": "Exercise",
  "number": "3.1.2.2",
  "title": "Test yourself!",
  "body": "Test yourself! multi data verbs Determine which data verb was applied get the following result. Select all that apply.    E  F(from A)  G (from B)    East 8 25    East 10 11        Select    Yes, columns E, F, and G were selected.      Filter    Yes, this data set was filtered by E==East.      Mutate    Yes, both columns F and G are made from previous columns (A and B respectively). Can you determine the operation?      Sort    Our rows have not changed relative order.    "
},
{
  "id": "p-119",
  "level": "2",
  "url": "section-1-1.html#p-119",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Group "
},
{
  "id": "table-16",
  "level": "2",
  "url": "section-1-1.html#table-16",
  "type": "Table",
  "number": "3.1.14",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-17",
  "level": "2",
  "url": "section-1-1.html#table-17",
  "type": "Table",
  "number": "3.1.15",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West        4 b False 10.8 East    2 b True 124.6 North        3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "p-123",
  "level": "2",
  "url": "section-1-1.html#p-123",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Aggregate "
},
{
  "id": "table-18",
  "level": "2",
  "url": "section-1-1.html#table-18",
  "type": "Table",
  "number": "3.1.16",
  "title": "",
  "body": "   A  B  C  D  E    5 a True 46.7 North    3 a True 35.6 West    4 b False 10.8 East    2 b True 124.6 North    3 c False 4.8 South    5 c False 4.7 East    4 c True 7.4 West    "
},
{
  "id": "table-19",
  "level": "2",
  "url": "section-1-1.html#table-19",
  "type": "Table",
  "number": "3.1.17",
  "title": "",
  "body": "   A  B  C  D    26 186 4 234.6    "
},
{
  "id": "p-127",
  "level": "2",
  "url": "section-1-1.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Union "
},
{
  "id": "p-128",
  "level": "2",
  "url": "section-1-1.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intersect "
},
{
  "id": "p-129",
  "level": "2",
  "url": "section-1-1.html#p-129",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Difference "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "section-1-1.html#activity-2",
  "type": "Activity",
  "number": "3.1.2",
  "title": "",
  "body": " Brainstrom situations where you would want to use each of these data table mergers.  "
},
{
  "id": "table-20",
  "level": "2",
  "url": "section-1-1.html#table-20",
  "type": "Table",
  "number": "3.1.18",
  "title": "",
  "body": "  Location BurritoType Date Neighborhood Address Yelp Google Chips Cost  Taco Stand California 2\/12\/2016 La Jolla 621 Pearl St 4.5 4.4 7.49  Lola's 7 Up Market and Deli Shredded beef 2\/29\/2016 Carlsbad 3292 Roosevelt St 4.5 4.9 6  Cancun Mexican and Seafood California 3\/20\/2016 Encinitas 1766 N Coast Hwy 4.5 4.1 x 6.99  Mikes Taco Club California 3\/23\/2016 Ocean Beach 5060 Newport Ave 4.5 4.9 8.59  La Perla Cocina Addiction 3\/30\/2016 Pacific Beach 745 Emerald St 4.5 4.7 7.99  California Burritos California Everything 4\/15\/2016 Linda Vista 7754 Starling Dr 4.5 4.4 x 6.25  Mi Asador Mexican and Seafood California 4\/27\/2016 Oceanside 4750 Oceanside Blvd 4.5 4.4 x 6.89  "
},
{
  "id": "p-133",
  "level": "2",
  "url": "section-1-1.html#p-133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Filter Mutate Sort "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "section-1-1.html#activity-3",
  "type": "Activity",
  "number": "3.1.3",
  "title": "Data Verb Sentences.",
  "body": "Data Verb Sentences For the questions below, determine which data verbs you would need to achieve this task! Sometimes it can be helpful to physically sketch what the final table would look like and then use the verbs to get to your desired table.  Which burrito type is the highest rated?  Which burrito type costs the most?  Does coming with chips increase ratings?   "
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
  "id": "table-21",
  "level": "2",
  "url": "section-6-2.html#table-21",
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