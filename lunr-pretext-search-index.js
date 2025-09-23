var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface   Attributions  The main inspiration for this book, as well as the vast majority of the source material, is Notes on Diffy Qs by Jiří Lebl . The fact that the book is freely available and open-source provided the main motivation for creating this current text. It allowed this book to be put together in a timely manner to be useful. It significantly reduced the work needed to put together a free textbook that fit the course exactly.    Introduction to this Version  This text was originally designed for the Math 244 class at Rutgers University. This class is a first course in Differential Equations for Engineering majors. This class is taken immediately after Multivariable Calculus and does not assume any knowledge of linear algebra. Prior to the design of this book, the course used Boyce and DiPrima’s Elementary Differential Equations and Boundary Value Problems   . The course provided a very brief introduction to matrices in order to get to the information necessary to handle first order systems of differential equations. With the course being redesigned to include more linear algebra, I was pointed in the direction of Jiří Lebl’s Notes on Diffy Qs   , which was meant to be a drop-in replacement for the Boyce and DiPrima text, and as of a more recent version of the text, contained an appendix on Linear Algebra.  In creating this book, I wanted to retain the style of Notes on Diffy Qs  but shape the text into something that directly fit the course that we wanted to run. This included reorganizing some of the topics, extra contextualization of the concept of differential equations, sections devoted to modeling principles and how these equations can be derived, and guidance in using MATLAB to solve differential equations numerically. Specifically, the content added to this book is    that gives an introduction or review to coding in MATLAB, as well as references to sample MATLAB files that can be used to easily sketch slope fields and solution curves to differential equations.    Section on the accumulation equation and its use in mathematical models, and which contains a discussion of parameter estimation, with inspiration taken from SIMIODE .    The work on the eigenvalue method was split into three sections to account for real, complex, and repeated eigenvalues.    A discussion of the trace-determinant plane and applications to analysis of linear (and non-linear) systems was added in .    on prerequisite material to be referred to when needed. Some of the material here was pulled from Stitz and Zeager’s book Precalculus  .    Exercises and answers were added at the end of most sections of the text.      Acknowledgements  I would like to acknowledge David Molnar, who initially referred me to the Notes on Diffy Qs text , as well as the Precalculus text , and provided inspiration and motivation to work on designing this text. For feedback during the development of the text, I want to acknowledge David Herrera, Yi-Zhi Huang, and many others who have helped over the development and refinement of this text. Finally, I want to acknowledge the Rutgers Open and Affordable Textbook Program for supporting the development and implementation of this text.    Introduction to Notes on Diffy Qs  This book originated from my class notes for Math 286 at the University of Illinois at Urbana-Champaign (UIUC) in Fall 2008 and Spring 2009. It is a first course on differential equations for engineers. Using this book, I also taught Math 285 at UIUC, Math 20D at University of California, San Diego (UCSD), and Math 4233 at Oklahoma State University (OSU). Normally these courses are taught with Edwards and Penney, Differential Equations and Boundary Value Problems: Computing and Modeling   , or Boyce and DiPrima’s Elementary Differential Equations and Boundary Value Problems   , and this book aims to be more or less a drop-in replacement. Other books I used as sources of information and inspiration are E.L. Ince’s classic (and inexpensive) Ordinary Differential Equations   , Stanley Farlow’s Differential Equations and Their Applications   , now available from Dover, Berg and McGregor’s Elementary Partial Differential Equations   , and William Trench’s free book Elementary Differential Equations with Boundary Value Problems   . See the chapter at the end of the book.   Computer Resources The book's website https:\/\/www.jirka.org\/diffyqs\/ contains the following resources:    Interactive SAGE demos.    Online WeBWorK homeworks (using either your own WeBWorK installation or Edfinity) for most sections, customized for this book.    The PDFs of the figures used in this book.    I taught the UIUC courses using IODE ( https:\/\/faculty.math.illinois.edu\/iode\/ ). IODE is a free software package that works with Matlab (proprietary) or Octave (free software). The graphs in the book were made with the Genius software (see https:\/\/www.jirka.org\/genius.html ). I use Genius in class to show these (and other) graphs.   Acknowledgements Firstly, I would like to acknowledge Rick Laugesen. I used his handwritten class notes the first time I taught Math 286. My organization of this book through chapter 5, and the choice of material covered, is heavily influenced by his notes. Many examples and computations are taken from his notes. I am also heavily indebted to Rick for all the advice he has given me, not just on teaching Math 286. For spotting errors and other suggestions, I would also like to acknowledge (in no particular order): John P. D’Angelo, Sean Raleigh, Jessica Robinson, Michael Angelini, Leonardo Gomes, Jeff Winegar, Ian Simon, Thomas Wicklund, Eliot Brenner, Sean Robinson, Jannett Susberry, Dana Al-Quadi, Cesar Alvarez, Cem Bagdatlioglu, Nathan Wong, Alison Shive, Shawn White, Wing Yip Ho, Joanne Shin, Gladys Cruz, Jonathan Gomez, Janelle Louie, Navid Froutan, Grace Victorine, Paul Pearson, Jared Teague, Ziad Adwan, Martin Weilandt, Sönmez Şahutoğlu, Pete Peterson, Thomas Gresham, Prentiss Hyde, Jai Welch, Simon Tse, Andrew Browning, James Choi, Dusty Grundmeier, John Marriott, Jim Kruidenier, Barry Conrad, Wesley Snider, Colton Koop, Sarah Morse, Erik Boczko, Asif Shakeel, Chris Peterson, Nicholas Hu, Paul Seeburger, Jonathan McCormick, David Leep, William Meisel, Shishir Agrawal, Tom Wan, Andres Valloud, and probably others I have forgotten. Finally, I would like to acknowledge NSF grants DMS-0900885 and DMS-1362337.   "
},
{
  "id": "introde-section",
  "level": "1",
  "url": "introde-section.html",
  "type": "Section",
  "number": "0.1",
  "title": "Introduction to differential equations",
  "body": " Introduction to differential equations    After this section, you will be able to:     Identify a differential equation and determine the order of a differential equation,    Verify that a function is a solution to a differential equation, and    Solve some fundamental differential equations.      Differential equations  Consider the following situation:   An object falling through the air has its velocity affected by two factors: gravity and a drag force. The velocity downward is increased at a rate of due to gravity, and it is decreased by a rate equation to times the current velocity of the object. If the ball is initially thrown downwards at a speed of , what will the velocity be 10 seconds later?   There might be enough information here to determine the velocity at any later point in time (it turns out, there is) but the information given isn’t really about the velocity. Rather, information is given about the rate of change of the velocity. We know that the velocity will be increased at a rate of due to gravity. How can this be interpreted? The rate of change has been discussed previously way back in Calculus 1; this is the derivative. Thus, if we let the unknown function represent the velocity of the object, the description above gives information about the derivative of this function for . Taking the two different factors (the increase and decrease of velocity) into account, we can write an expression for this derivative, giving that Even though we don't know what is, we know that it must affect the derivative of the velocity in this particular way, so we can write this equation. That’s why we give a name to this function, so that we can use it in writing this equestion, which, since it is an equation involving the derivative of an unknown function , we call this a . Our goal here would be to use this information, plus the fact that the velocity at time zero is to find the value of , or, more generally, the function for any .  The laws of physics, beyond just that of simple velocity, are generally written down as differential equations. Therefore, all of science and engineering use differential equations to some degree. Understanding differential equations is essential to understanding almost anything you will study in your science and engineering classes. You can think of mathematics as the language of science, and differential equations are one of the most important parts of this language as far as science and engineering are concerned. As an analogy, suppose all your classes from now on were given half in Swahili and half in English. It would be important to first learn Swahili, or you would have a very tough time getting a good grade in your classes. Without it, you might be able to make sense of some of what is going on, but would definitely be missing an important part of the picture.    A differential equation is an equation that involves one or more derivatives of an unknown function. For a differential equation, the order of the differential equation is the highest order derivative that appears in the equation.    One example of a first order differential equation is . Here is the dependent variable and is the independent variable . Note that we can use any letter we want for the dependent and independent variables. This equation arises from Newton's law of cooling where the ambient temperature oscillates with time.  To make sure that everything is well-defined, we will assume that we can always write our differential equation with the highest order derivative written as a function of all lower derivatives and the independent variable. For the previous example, since we can write as where the highest derivative is written as a function of and , we have a proper differential equation. On the other hand, something like is not a proper differential equation because we can't solve for . This expression could either be written as and while both of these are proper differential equations, the version in is not.  For some equations, like , the independent variable is not explicitly stated. We could be looking for a function or a function (or of any other variable) and without any other information, any of these is correct. Usually, there will be information in the problem statement to indicate that the independent variable is something like time, in which case everything should be written in terms of . It is for this reason that Leibniz notation is preferred for derivatives; an equation like is unambiguously looking for any answer .      All of the below are differential equations . Note that any letter can be used for the unknown function and its dependent variable. From the context of the equations, we can see that the unknown functions we are looking for in these examples are , , , and respectively. The order of these equations are 1, 2, 4, and 3 respectively.      Solutions of differential equations  Solving the differential equation means finding the function that, when we plug it into the differential equation, gives a true statement. For example, take from the previous section. In this case, this means that we want to find a function of , which we call , such that when we plug , , and into , the equation holds; that is, the left hand side equals the right hand side. It is the same idea as it would be for a normal (algebraic) equation of just and . We claim that is a solution . How do we check? We simply plug into equation ! First we need to compute . We find that . Now let us compute the left-hand side of . Yay! We got precisely the right-hand side. But there is more! We claim is also a solution. Let us try, We plug into the left-hand side of     Few solutions of   Several oscilatting curves. One starts at 3, one at 1, and one at -1. All of them slowly oscillate to leave the right side of the graph at around -0.7.   Three different solution curves to the differential equation are shown. They all show similar oscillating behavior but start at different points on the axis. The top one starts at , the second at , and the third at . All of them get closer together and end the plot near the point .     And it works yet again!  So there can be many different solutions. For this equation all solutions can be written in the form for some constant . Different constants will give different solutions, so there are really infinitely many possible solutions. See for the graph of a few of these solutions. We do not yet know how to find this solution, but we will get to that in the next chapter.  Solving differential equations can be quite hard. There is no general method that solves every differential equation. We will generally focus on how to get exact formulas for solutions of certain differential equations, but we will also spend a little bit of time on getting approximate solutions. And we will spend some time on understanding the equations without solving them.  Most of this book is dedicated to ordinary differential equations or ODEs , that is, equations with only one independent variable, where derivatives are only with respect to this one variable. If there are several independent variables, we get partial differential equations or PDEs .  Even for ODEs, which are very well understood, it is not a simple question of turning a crank to get answers. When you can find exact solutions, they are usually preferable to approximate solutions. It is important to understand how such solutions are found. Although in real applications you will leave much of the actual calculations to computers, you need to understand what they are doing. It is often necessary to simplify or transform your equations into something that a computer can understand and solve. You may even need to make certain assumptions and changes in your model to achieve this.  To be a successful engineer or scientist, you will be required to solve problems in your job that you have never seen before. It is important to learn problem solving techniques, so that you may apply those techniques to new problems. A common mistake is to expect to learn some prescription for solving all the problems you will encounter in your later career. This course is no exception.    Differential equations in practice  NEED TO MAKE NEW IMAGE HERE WITH ARROWS  So how do we use differential equations in science and engineering? The main way this takes place is through the process of mathematical modeling. First, we have some real-world problem we wish to understand. We make some simplifying assumptions and create a mathematical model , which is a translation of this real-world problem into a set of differential equations. Think back to the example at the beginning of this section. We took a physical situation (a falling object) with some knowledge about how it behaves and turned that into a differential equation that describes the velocity over time. Then we apply mathematics to get some sort of a mathematical solution . Finally, we need to interpret our results, determining what this mathematical solution says about the real-world problem we started with. For instance, in the example at the start of the section, we could find the function , but then need to interpret that if we were to plug 10 into this function, we will get the velocity 10 seconds later.  Learning how to formulate the mathematical model and how to interpret the results is what your physics and engineering classes do. In this course, we will focus mostly on the mathematical analysis. This will be interspersed with discussions of this modeling process to give some context to what we are doing, and give practice for what will be seen in future physics and engineering classes.  Let us look at an example of this process. One of the most basic differential equations is the standard exponential growth model . Let denote the population of some bacteria on a Petri dish. We assume that there is enough food and enough space. Then the rate of growth of bacteria is proportional to the population—a large population grows quicker. Let denote time (say in seconds) and the population. Our model is for some positive constant .   Bacterial Growth   Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?    First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . Let us plug these conditions in and see what happens. . Therefore, or . So .   Bacteria growth in the first 60 seconds.   Graph showing exponential growth of the population of bacteria, starting at 100 and ending after 60 second at around 6400.    At one minute, , the population is . See .  Let us talk about the interpretation of the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, not a real number. However, our model has no problem saying that for example at 61 seconds, .    Normally, the in is known, and we want to solve the equation for different initial conditions . What does that mean? Take for simplicity. Suppose we want to solve the equation subject to (the initial condition). Then the solution turns out to be (exercise)   We call the general solution , as every solution of the equation can be written in this form for some constant . We need an initial condition to find out what is, in order to find the particular solution we are looking for. Generally, when we say particular solution , we just mean some solution.    Four fundamental equations  A few equations appear often and it is useful to know what their solutions are. Let us call them the . Their solutions are reasonably easy to guess by recalling properties of exponentials, sines, and cosines. They are also simple to check, which is something that you should always do. No need to wonder if you remembered the solution correctly. It is good to have these as solutions that you know to build from when we learn solutions to other differential equations later on. In we will cover the first two, and the last two will be discussed in .  First such equation is for some constant . Here is the dependent and the independent variable. The general solution for this equation is We saw above that this function is a solution, although we used different variable names.  Next, for some constant . The general solution for this equation is     Check that the given is really a solution to the equation.    Next, take the second order equation  for some constant . The general solution for this equation is Since the equation is a second order differential equation, we have two constants in our general solution.    Check that the given is really a solution to the equation.    Finally, consider the second order differential equation for some constant . The general solution for this equation is or   For those that do not know, and are defined by . They are called the hyperbolic cosine and hyperbolic sine . These functions are sometimes easier to work with than exponentials. They have some nice familiar properties such as , , and (no that is not a typo) and .    Check that both forms of the given are really solutions to the equation.        In equations of higher order, you get more constants you must solve for to get a particular solution. The equation has the general solution ; simply integrate twice and don’t forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.      Exercises    Show that is a solution to .    Since , , , we have .      Show that is a solution to .      Show that is not a solution to .    All derivatives are so . Therefore, it is not a solution.      Is a solution to ? Justify.     , which gives , which is a true statement.      Is a solution to ? Justify.      Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .           Let . Try a solution of the form . Is this a solution for some ? If so, find all such .      Verify that is a solution to . Find to solve for the initial condition .           Verify that is a solution to . Find and to solve for the initial conditions and .     , .      Verify that is a solution to . Find and so that satisfies and .      Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.     or .      Solve and .      Solve each of the following:                                                      Solve each of the following:                                                      Is there a solution to , such that ?    No.      The population of city X was 100 thousand 20 years ago, and the population of city X was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?    144      Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.     What is and ?     ,       Approximately how many years will it take for the salary to be 10 million?           Approximately how many years will it take for the salary to be 20 million?           Approximately how many years will it take for the salary to be 30 million?           "
},
{
  "id": "introde-section-2",
  "level": "2",
  "url": "introde-section.html#introde-section-2",
  "type": "Objectives",
  "number": "0.1",
  "title": "",
  "body": "  After this section, you will be able to:     Identify a differential equation and determine the order of a differential equation,    Verify that a function is a solution to a differential equation, and    Solve some fundamental differential equations.    "
},
{
  "id": "def-diffEqn",
  "level": "2",
  "url": "introde-section.html#def-diffEqn",
  "type": "Definition",
  "number": "0.1.1",
  "title": "",
  "body": "  A differential equation is an equation that involves one or more derivatives of an unknown function. For a differential equation, the order of the differential equation is the highest order derivative that appears in the equation.   "
},
{
  "id": "differential-equations-7",
  "level": "2",
  "url": "introde-section.html#differential-equations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable independent variable "
},
{
  "id": "differential-equations-10",
  "level": "2",
  "url": "introde-section.html#differential-equations-10",
  "type": "Example",
  "number": "0.1.2",
  "title": ".",
  "body": "    All of the below are differential equations . Note that any letter can be used for the unknown function and its dependent variable. From the context of the equations, we can see that the unknown functions we are looking for in these examples are , , , and respectively. The order of these equations are 1, 2, 4, and 3 respectively.   "
},
{
  "id": "solutions-of-differential-equations-2",
  "level": "2",
  "url": "introde-section.html#solutions-of-differential-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution "
},
{
  "id": "intro-plotsfig",
  "level": "2",
  "url": "introde-section.html#intro-plotsfig",
  "type": "Figure",
  "number": "0.1.3",
  "title": "",
  "body": " Few solutions of   Several oscilatting curves. One starts at 3, one at 1, and one at -1. All of them slowly oscillate to leave the right side of the graph at around -0.7.   Three different solution curves to the differential equation are shown. They all show similar oscillating behavior but start at different points on the axis. The top one starts at , the second at , and the third at . All of them get closer together and end the plot near the point .    "
},
{
  "id": "solutions-of-differential-equations-7",
  "level": "2",
  "url": "introde-section.html#solutions-of-differential-equations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinary differential equations ODEs partial differential equations PDEs "
},
{
  "id": "differential-equations-in-practice-3",
  "level": "2",
  "url": "introde-section.html#differential-equations-in-practice-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical model mathematical solution "
},
{
  "id": "differential-equations-in-practice-5",
  "level": "2",
  "url": "introde-section.html#differential-equations-in-practice-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential growth model "
},
{
  "id": "differential-equations-in-practice-6",
  "level": "2",
  "url": "introde-section.html#differential-equations-in-practice-6",
  "type": "Example",
  "number": "0.1.4",
  "title": "Bacterial Growth.",
  "body": " Bacterial Growth   Suppose there are 100 bacteria at time 0 and 200 bacteria 10 seconds later. How many bacteria will there be 1 minute from time 0 (in 60 seconds)?    First we need to solve the equation. We claim that a solution is given by where is a constant. Let us try: And it really is a solution.  OK, now what? We do not know , and we do not know . But we know something. We know , and we know . Let us plug these conditions in and see what happens. . Therefore, or . So .   Bacteria growth in the first 60 seconds.   Graph showing exponential growth of the population of bacteria, starting at 100 and ending after 60 second at around 6400.    At one minute, , the population is . See .  Let us talk about the interpretation of the results. Does our solution mean that there must be exactly 6400 bacteria on the plate at 60s? No! We made assumptions that might not be true exactly, just approximately. If our assumptions are reasonable, then there will be approximately 6400 bacteria. Also, in real life is a discrete quantity, not a real number. However, our model has no problem saying that for example at 61 seconds, .   "
},
{
  "id": "differential-equations-in-practice-7",
  "level": "2",
  "url": "introde-section.html#differential-equations-in-practice-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions "
},
{
  "id": "differential-equations-in-practice-8",
  "level": "2",
  "url": "introde-section.html#differential-equations-in-practice-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution particular solution "
},
{
  "id": "subsection-fourfundamental-5",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-5",
  "type": "Checkpoint",
  "number": "0.1.6",
  "title": "",
  "body": "  Check that the given is really a solution to the equation.   "
},
{
  "id": "subsection-fourfundamental-6",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second order equation "
},
{
  "id": "subsection-fourfundamental-7",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-7",
  "type": "Checkpoint",
  "number": "0.1.7",
  "title": "",
  "body": "  Check that the given is really a solution to the equation.   "
},
{
  "id": "subsection-fourfundamental-9",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperbolic cosine hyperbolic sine "
},
{
  "id": "subsection-fourfundamental-10",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-10",
  "type": "Checkpoint",
  "number": "0.1.8",
  "title": "",
  "body": "  Check that both forms of the given are really solutions to the equation.   "
},
{
  "id": "subsection-fourfundamental-11",
  "level": "2",
  "url": "introde-section.html#subsection-fourfundamental-11",
  "type": "Example",
  "number": "0.1.9",
  "title": ".",
  "body": "    In equations of higher order, you get more constants you must solve for to get a particular solution. The equation has the general solution ; simply integrate twice and don’t forget about the constant of integration. Consider the initial conditions and . We plug in our general solution and solve for the constants: In other words, is the particular solution we seek.   "
},
{
  "id": "introde-section-7-2",
  "level": "2",
  "url": "introde-section.html#introde-section-7-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Show that is a solution to .    Since , , , we have .   "
},
{
  "id": "introde-section-7-3",
  "level": "2",
  "url": "introde-section.html#introde-section-7-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Show that is a solution to .   "
},
{
  "id": "introde-section-7-4",
  "level": "2",
  "url": "introde-section.html#introde-section-7-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Show that is not a solution to .    All derivatives are so . Therefore, it is not a solution.   "
},
{
  "id": "introde-section-7-5",
  "level": "2",
  "url": "introde-section.html#introde-section-7-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Is a solution to ? Justify.     , which gives , which is a true statement.   "
},
{
  "id": "introde-section-7-6",
  "level": "2",
  "url": "introde-section.html#introde-section-7-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Is a solution to ? Justify.   "
},
{
  "id": "introde-section-7-7",
  "level": "2",
  "url": "introde-section.html#introde-section-7-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let . Now try a solution of the form for some (unknown) constant . Is this a solution for some ? If so, find all such .        "
},
{
  "id": "introde-section-7-8",
  "level": "2",
  "url": "introde-section.html#introde-section-7-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Let . Try a solution of the form . Is this a solution for some ? If so, find all such .   "
},
{
  "id": "introde-section-7-9",
  "level": "2",
  "url": "introde-section.html#introde-section-7-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Verify that is a solution to . Find to solve for the initial condition .        "
},
{
  "id": "introde-section-7-10",
  "level": "2",
  "url": "introde-section.html#introde-section-7-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Verify that is a solution to . Find and to solve for the initial conditions and .     , .   "
},
{
  "id": "introde-section-7-11",
  "level": "2",
  "url": "introde-section.html#introde-section-7-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Verify that is a solution to . Find and so that satisfies and .   "
},
{
  "id": "introde-section-7-12",
  "level": "2",
  "url": "introde-section.html#introde-section-7-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Find a solution to using your knowledge of derivatives of functions that you know from basic calculus.     or .   "
},
{
  "id": "introde-section-7-13",
  "level": "2",
  "url": "introde-section.html#introde-section-7-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Solve and .   "
},
{
  "id": "introde-section-7-14",
  "level": "2",
  "url": "introde-section.html#introde-section-7-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Solve each of the following:                                                   "
},
{
  "id": "introde-section-7-15",
  "level": "2",
  "url": "introde-section.html#introde-section-7-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Solve each of the following:                                                   "
},
{
  "id": "introde-section-7-16",
  "level": "2",
  "url": "introde-section.html#introde-section-7-16",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Is there a solution to , such that ?    No.   "
},
{
  "id": "introde-section-7-17",
  "level": "2",
  "url": "introde-section.html#introde-section-7-17",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  The population of city X was 100 thousand 20 years ago, and the population of city X was 120 thousand 10 years ago. Assuming constant growth, you can use the exponential population model (like for the bacteria). What do you estimate the population is now?    144   "
},
{
  "id": "introde-section-7-18",
  "level": "2",
  "url": "introde-section.html#introde-section-7-18",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Suppose that a football coach gets a salary of one million dollars now, and a raise of every year (so exponential model, like population of bacteria). Let be the salary in millions of dollars, and is time in years.     What is and ?     ,       Approximately how many years will it take for the salary to be 10 million?           Approximately how many years will it take for the salary to be 20 million?           Approximately how many years will it take for the salary to be 30 million?         "
},
{
  "id": "classification-section",
  "level": "1",
  "url": "classification-section.html",
  "type": "Section",
  "number": "0.2",
  "title": "Classification of differential equations",
  "body": " Classification of differential equations    After this section, you will be able to:     Classify equation as ordinary or partial differential equations,    Identify whether an equation is linear or non-linear, and    Classify linear equations as homogeneous, non-homogeneous, or constant coefficient, as appropriate.     There are many types of differential equations, and we classify them into different categories based on their properties. Let us quickly go over the most basic classification. We already saw the distinction between ordinary and partial differential equations:        Ordinary differential equations or (ODE) are equations where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.     Partial differential equations or (PDE) are equations that depend on partial derivatives of several variables. That is, there are several independent variables.       Let us see some examples of ordinary differential equations: And of partial differential equations:   If there are several equations working together, we have a so-called system of differential equations . For example, is a simple system of ordinary differential equations. Maxwell's Equations for electromagnetics, are a system of partial differential equations. The divergence operator and the curl operator can be written out in partial derivatives of the functions involved in the , , and variables.  In the first chapter, we will start attacking first order ordinary differential equations, that is, equations of the form . In general, lower order equations are easier to work with and have simpler behavior, which is why we start with them.  We also distinguish how the dependent variables appear in the equation (or system).    We say an equation is linear if the dependent variable (or variables) and their derivatives appear linearly, that is only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. Otherwise, the equation is called nonlinear .    Another way to determine if a differential equation is linear is if the equation is a sum of terms, where each term is some function of the independent variables or some function of the independent variables multiplied by a dependent variable or its derivative. That is, an ordinary differential equation is linear if it can be put into the form The functions , , …, are called the coefficients . The equation is allowed to depend arbitrarily on the independent variable. So is still a linear equation as and its derivatives only appear linearly. The equation is also linear, even though it is not initially in the correct form. From this equation, we can move the last term over to the right-hand side as a , and then it is in the correct form, with the term missing (or has coefficient zero).  All the equations and systems above as examples are linear. It may not be immediately obvious for Maxwell’s equations unless you write out the divergence and curl in terms of partial derivatives. Let us see some nonlinear equations. For example Burger's equation , is a nonlinear second order partial differential equation. It is nonlinear because and are multiplied together. The equation is a nonlinear first order differential equation as there is a second power of the dependent variable .    A linear equation may further be called homogeneous if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called nonhomogeneous or inhomogeneous .    For example, the exponential growth equation, the wave equation, or the transport equation above are homogeneous. The mechanical vibrations equation above is nonhomogeneous as long as is not the zero function. Similarly, if the ambient temperature is nonzero, Newton’s law of cooling is nonhomogeneous. A homogeneous linear ODE can be put into the form Compare to and notice there is no function .  If the coefficients of a linear equation are actually constant functions, then the equation is said to have constant coefficients . The coefficients are the functions multiplying the dependent variable(s) or one of its derivatives, not the function standing alone. A constant coefficient nonhomogeneous ODE is an equation of the form where are all constants, but may depend on the independent variable . The mechanical vibrations equation above is a constant coefficient nonhomogeneous second order ODE. The same nomenclature applies to PDEs, so the transport equation, heat equation and wave equation are all examples of constant coefficient linear PDEs.  Finally, an equation (or system) is called autonomous if the equation does not explicitly depend on the independent variable. For autonomous ordinary differential equations, the independent variable is then thought of as time. Autonomous equation means an equation that does not change with time. For example, Newton's law of cooling is autonomous, so is equation . On the other hand, mechanical vibrations or are not autonomous.   Exercises    Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?          ODE, equation, second order, linear, non-homogeneous, not constant coefficient, not autonomous.           PDE, equation, first order, linear, constant coefficient, non-homogeneous.           ODE, system, second order, linear, constant coefficient, homogeneous, autonomous.           PDE, equation, second order, non-linear.           ODE, equation, second order, non-linear, not autonomous.           ODE, equation, fourth order, linear, constant coefficient, homogeneous, autonomous.       Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?          PDE, equation, second order, linear, nonhomogeneous, constant coefficient.           ODE, equation, first order, linear, nonhomogeneous, not constant coefficient, not autonomous.           ODE, equation, seventh order, linear, homogeneous, constant coefficient, autonomous.           ODE, equation, second order, linear, nonhomogeneous, constant coefficient, autonomous.           ODE, system, second order, nonlinear.           PDE, equation, second order, nonlinear.       If is a vector, we have the divergence and curl . Notice that curl of a vector is still a vector. Write out Maxwell’s equations in terms of partial derivatives and classify the system.    Order 1, linear PDEs, with constant coefficients.      Suppose is a linear function, that is, for constants and . What is the classification of equations of the form .    First order, linear, homogeneous, constant coefficients.      Write down an explicit example of a third order, linear, nonconstant coefficient, nonautonomous, nonhomogeneous system of two ODE such that every derivative that could appear, does appear.    One example:        Write down the general zero th order linear ordinary differential equation. Write down the general solution.      For which is linear. Hint: there are two answers.      Write out an explicit example of a non-homogeneous fourth order, linear, constant coefficient differential equation. where all possible derivatives of the unknown function appear.    One example:       Let , , and be three functions of defined by the system of differential equations with initial conditions , and , and let be the function defined by the solution to with initial conditions , , and .     Use the substitution , , and to verify that because they solve the same initial value problem.      What is the order of the system defining , , and and how many components does it have?    First order with three components.      What is the order of the equation defining ? How many components does that have?    Third order with one component.      How do these numbers relate to each other?    The product is three in both cases. ( ).     "
},
{
  "id": "classification-section-2",
  "level": "2",
  "url": "classification-section.html#classification-section-2",
  "type": "Objectives",
  "number": "0.2",
  "title": "",
  "body": "  After this section, you will be able to:     Classify equation as ordinary or partial differential equations,    Identify whether an equation is linear or non-linear, and    Classify linear equations as homogeneous, non-homogeneous, or constant coefficient, as appropriate.    "
},
{
  "id": "def-ODE-PDE",
  "level": "2",
  "url": "classification-section.html#def-ODE-PDE",
  "type": "Definition",
  "number": "0.2.1",
  "title": "",
  "body": "      Ordinary differential equations or (ODE) are equations where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.     Partial differential equations or (PDE) are equations that depend on partial derivatives of several variables. That is, there are several independent variables.      "
},
{
  "id": "classification-section-6",
  "level": "2",
  "url": "classification-section.html#classification-section-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system of differential equations Maxwell's Equations "
},
{
  "id": "def-lin-nonline",
  "level": "2",
  "url": "classification-section.html#def-lin-nonline",
  "type": "Definition",
  "number": "0.2.2",
  "title": "",
  "body": "  We say an equation is linear if the dependent variable (or variables) and their derivatives appear linearly, that is only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. Otherwise, the equation is called nonlinear .   "
},
{
  "id": "classification-section-10",
  "level": "2",
  "url": "classification-section.html#classification-section-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficients "
},
{
  "id": "classification-section-11",
  "level": "2",
  "url": "classification-section.html#classification-section-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Burger's equation "
},
{
  "id": "def-",
  "level": "2",
  "url": "classification-section.html#def-",
  "type": "Definition",
  "number": "0.2.3",
  "title": "",
  "body": "  A linear equation may further be called homogeneous if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called nonhomogeneous or inhomogeneous .   "
},
{
  "id": "classification-section-14",
  "level": "2",
  "url": "classification-section.html#classification-section-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant coefficients "
},
{
  "id": "classification-section-15",
  "level": "2",
  "url": "classification-section.html#classification-section-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous "
},
{
  "id": "classification-section-16-2",
  "level": "2",
  "url": "classification-section.html#classification-section-16-2",
  "type": "Exercise",
  "number": "0.2.1",
  "title": "",
  "body": "  Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?          ODE, equation, second order, linear, non-homogeneous, not constant coefficient, not autonomous.           PDE, equation, first order, linear, constant coefficient, non-homogeneous.           ODE, system, second order, linear, constant coefficient, homogeneous, autonomous.           PDE, equation, second order, non-linear.           ODE, equation, second order, non-linear, not autonomous.           ODE, equation, fourth order, linear, constant coefficient, homogeneous, autonomous.    "
},
{
  "id": "classification-section-16-3",
  "level": "2",
  "url": "classification-section.html#classification-section-16-3",
  "type": "Exercise",
  "number": "0.2.2",
  "title": "",
  "body": "  Classify the following equations. Are they ODE or PDE? Is it an equation or a system? What is the order? Is it linear or nonlinear, and if it is linear, is it homogeneous, constant coefficient? If it is an ODE, is it autonomous?          PDE, equation, second order, linear, nonhomogeneous, constant coefficient.           ODE, equation, first order, linear, nonhomogeneous, not constant coefficient, not autonomous.           ODE, equation, seventh order, linear, homogeneous, constant coefficient, autonomous.           ODE, equation, second order, linear, nonhomogeneous, constant coefficient, autonomous.           ODE, system, second order, nonlinear.           PDE, equation, second order, nonlinear.    "
},
{
  "id": "classification-section-16-4",
  "level": "2",
  "url": "classification-section.html#classification-section-16-4",
  "type": "Exercise",
  "number": "0.2.3",
  "title": "",
  "body": "  If is a vector, we have the divergence and curl . Notice that curl of a vector is still a vector. Write out Maxwell’s equations in terms of partial derivatives and classify the system.    Order 1, linear PDEs, with constant coefficients.   "
},
{
  "id": "classification-section-16-5",
  "level": "2",
  "url": "classification-section.html#classification-section-16-5",
  "type": "Exercise",
  "number": "0.2.4",
  "title": "",
  "body": "  Suppose is a linear function, that is, for constants and . What is the classification of equations of the form .    First order, linear, homogeneous, constant coefficients.   "
},
{
  "id": "classification-section-16-6",
  "level": "2",
  "url": "classification-section.html#classification-section-16-6",
  "type": "Exercise",
  "number": "0.2.5",
  "title": "",
  "body": "  Write down an explicit example of a third order, linear, nonconstant coefficient, nonautonomous, nonhomogeneous system of two ODE such that every derivative that could appear, does appear.    One example:     "
},
{
  "id": "classification-section-16-7",
  "level": "2",
  "url": "classification-section.html#classification-section-16-7",
  "type": "Exercise",
  "number": "0.2.6",
  "title": "",
  "body": "  Write down the general zero th order linear ordinary differential equation. Write down the general solution.   "
},
{
  "id": "classification-section-16-8",
  "level": "2",
  "url": "classification-section.html#classification-section-16-8",
  "type": "Exercise",
  "number": "0.2.7",
  "title": "",
  "body": "  For which is linear. Hint: there are two answers.   "
},
{
  "id": "classification-section-16-9",
  "level": "2",
  "url": "classification-section.html#classification-section-16-9",
  "type": "Exercise",
  "number": "0.2.8",
  "title": "",
  "body": "  Write out an explicit example of a non-homogeneous fourth order, linear, constant coefficient differential equation. where all possible derivatives of the unknown function appear.    One example:    "
},
{
  "id": "classification-section-16-10",
  "level": "2",
  "url": "classification-section.html#classification-section-16-10",
  "type": "Exercise",
  "number": "0.2.9",
  "title": "",
  "body": "  Let , , and be three functions of defined by the system of differential equations with initial conditions , and , and let be the function defined by the solution to with initial conditions , , and .     Use the substitution , , and to verify that because they solve the same initial value problem.      What is the order of the system defining , , and and how many components does it have?    First order with three components.      What is the order of the equation defining ? How many components does that have?    Third order with one component.      How do these numbers relate to each other?    The product is three in both cases. ( ).    "
},
{
  "id": "integralsols-section",
  "level": "1",
  "url": "integralsols-section.html",
  "type": "Section",
  "number": "1.1",
  "title": "Integrals as solutions",
  "body": " Integrals as solutions  A first order ODE is an equation of the form or just Some examples that fit this form are and Looking back at the last section, the first of these is linear and the second is not. In general, there is no simple formula or procedure one can follow to find solutions. In the next few sections we will look at special cases where solutions are not difficult to obtain. In this section, let us assume that is a function of alone, that is, the equation is We could just integrate (antidifferentiate) both sides with respect to . that is This is actually the general solution. So to solve , we find some antiderivative of and then we add an arbitrary constant to get the general solution.  Now is a good time to discuss a point about calculus notation and terminology. One of the final keystone concepts in Calculus 1 is that of the fundamental theorem of calculus, which ties together two mathematical ideas: (defined as the area under a curve) and or (undoing the operation of differentiation). This theorem says that these two ideas are in some sense the same; in order to compute a definite integral, one can first find an antiderivative and plug in the endpoints (the most common use of the theorem), and that the derivative of a definite integral gives back the function inside (something that will be useful in this course).  The main distinction between these two is the type of object that they are. Definite integrals evaluate to numbers, so they are functions, which means they are the object we want to deal with in this course. Indefinite integrals are families of functions, and while they have their uses (motivating the idea of a general solution), their main use is the process of antidifferentiation which leads us to solutions in the form of definite integrals. Provided that you can evaluate the antiderivative in question, these two processes will end up at exactly the same solution. If you end up confused about the terminology, the goal for this class is always a definite integral, but we can use antiderivatives to get there. Hence the terminology to when we may really mean to . Integration is just one way to compute the antiderivative (and it is a way that always works, see the following examples). Integration is defined as the area under the graph and it also happens to also compute antiderivatives. For sake of consistency, we will keep using the indefinite integral notation when we want an antiderivative, and you should always think of the definite integral as a way to write it.      Find the general solution of .    Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.    Normally, we will also have an such as for some two numbers and ( is often 0, but not always). If we do, the combination of a differential equation and an initial condition is called an . We can then write the solution as a definite integral in a nice way. Suppose our problem is , . Then the solution is Let us check! We compute Since is a constant, it’s derivative is zero, and by the fundamental theorem of calculus Therefore , and by Jupiter, is a solution. Is it the one satisfying the initial condition? Well, and since is a nice function, we know that the integral of with matching endpoints is . Therefore . It is!  Do note that the definite integral and the indefinite integral (antidifferentiation) are completely different beasts. The definite integral always evaluates to a number. Therefore, is a formula we can plug into the calculator or a computer, and it will be happy to calculate specific values for us. We will easily be able to plot the solution and work with it just like with any other function. It is not so crucial to always find a closed form for the antiderivative.      Solve     By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.    While there is nothing wrong with writing solutions as a definite integral, they should be simplified and evaluated if possible. Given the differential equation the solution can be written as However, it is much more convenient, both for human reasoning and computers, to write this solution as So, if integrals can be evaluated and simplified to explicit functions, then they should be worked out. If it is not possible, then answers in integral form are completely fine.  Classical problems leading to differential equations solvable by integration are problems dealing with , and . You have surely seen these problems before in your calculus class.      Suppose a car drives at a speed meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?    Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain         Suppose that the car accelerates at a rate of . At time the car is at the 1 meter mark and is traveling at . Where is the car at time ?    Well this is actually a second order problem. If is the distance traveled, then is the velocity, and is the acceleration. The initial value problem for this situation is What if we say . Then we have the problem Once we solve for , we can integrate and find .      Solve for , and then solve for . Find to answer the question.     Exercises    Solve with .           Solve with .           Solve with .      Solve with .           Solve with .           Solve with .           Solve for . (This requires partial fractions or hyperbolic trigonometric functions.)           Solve for , .           A spaceship is traveling at the speed ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?           Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?      Solve , . It is OK to leave your answer as a definite integral.           Solve , . The answer can be left as a definite integral.           A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.           The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?      Find the general solution to . How many distinct constants do you need?     "
},
{
  "id": "integralsols-section-5",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-5",
  "type": "Example",
  "number": "1.1.1",
  "title": ".",
  "body": "    Find the general solution of .    Elementary calculus tells us that the general solution must be . Let us check by differentiating: . We got precisely our equation back.   "
},
{
  "id": "integralsols-section-8",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-8",
  "type": "Example",
  "number": "1.1.2",
  "title": ".",
  "body": "    Solve     By the preceding discussion, the solution must be Here is a good way to make fun of your friends taking second semester calculus. Tell them to find the closed form solution. Ha ha ha (bad math joke). It is not possible (in closed form). There is absolutely nothing wrong with writing the solution as a definite integral. This particular integral is in fact very important in statistics.   "
},
{
  "id": "integralsols-section-11",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-11",
  "type": "Example",
  "number": "1.1.3",
  "title": ".",
  "body": "    Suppose a car drives at a speed meters per second, where is time in seconds. How far did the car get in 2 seconds (starting at )? How far in 10 seconds?    Let denote the distance the car traveled. The equation is We just integrate this equation to get that We still need to figure out . We know that when , then . That is, . So Thus and Now we just plug in to get where the car is at 2 and at 10 seconds. We obtain    "
},
{
  "id": "integralsols-section-12",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-12",
  "type": "Example",
  "number": "1.1.4",
  "title": ".",
  "body": "    Suppose that the car accelerates at a rate of . At time the car is at the 1 meter mark and is traveling at . Where is the car at time ?    Well this is actually a second order problem. If is the distance traveled, then is the velocity, and is the acceleration. The initial value problem for this situation is What if we say . Then we have the problem Once we solve for , we can integrate and find .   "
},
{
  "id": "integralsols-section-13",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-13",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": "  Solve for , and then solve for . Find to answer the question.   "
},
{
  "id": "integralsols-section-14-2",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-2",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "integralsols-section-14-3",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-3",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "integralsols-section-14-4",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-4",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "  Solve with .   "
},
{
  "id": "integralsols-section-14-5",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-5",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "integralsols-section-14-6",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-6",
  "type": "Exercise",
  "number": "1.1.5",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "integralsols-section-14-7",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-7",
  "type": "Exercise",
  "number": "1.1.6",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "integralsols-section-14-8",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-8",
  "type": "Exercise",
  "number": "1.1.7",
  "title": "",
  "body": "  Solve for . (This requires partial fractions or hyperbolic trigonometric functions.)        "
},
{
  "id": "integralsols-section-14-9",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-9",
  "type": "Exercise",
  "number": "1.1.8",
  "title": "",
  "body": "  Solve for , .        "
},
{
  "id": "integralsols-section-14-10",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-10",
  "type": "Exercise",
  "number": "1.1.9",
  "title": "",
  "body": "  A spaceship is traveling at the speed ( is time in seconds). It is pointing directly away from earth and at time it is 1000 kilometers from earth. How far from earth is it at one minute from time ?        "
},
{
  "id": "integralsols-section-14-11",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-11",
  "type": "Exercise",
  "number": "1.1.10",
  "title": "",
  "body": "  Sid is in a car traveling at speed miles per hour away from Las Vegas, where is in hours. At , Sid is 10 miles away from Vegas. How far from Vegas is Sid 2 hours later?   "
},
{
  "id": "integralsols-section-14-12",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-12",
  "type": "Exercise",
  "number": "1.1.11",
  "title": "",
  "body": "  Solve , . It is OK to leave your answer as a definite integral.        "
},
{
  "id": "integralsols-section-14-13",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-13",
  "type": "Exercise",
  "number": "1.1.12",
  "title": "",
  "body": "  Solve , . The answer can be left as a definite integral.        "
},
{
  "id": "integralsols-section-14-14",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-14",
  "type": "Exercise",
  "number": "1.1.13",
  "title": "",
  "body": "  A dropped ball accelerates downwards at a constant rate meters per second squared. Set up the differential equation for the height above ground in meters. Then supposing meters, how long does it take for the ball to hit the ground.        "
},
{
  "id": "integralsols-section-14-15",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-15",
  "type": "Exercise",
  "number": "1.1.14",
  "title": "",
  "body": "  The rate of change of the volume of a snowball that is melting is proportional to the surface area of the snowball. Suppose the snowball is perfectly spherical. The volume (in centimeters cubed) of a ball of radius centimeters is . The surface area is . Set up the differential equation for how the radius is changing. Then, suppose that at time minutes, the radius is 10 centimeters. After 5 minutes, the radius is 8 centimeters. At what time will the snowball be completely melted?   "
},
{
  "id": "integralsols-section-14-16",
  "level": "2",
  "url": "integralsols-section.html#integralsols-section-14-16",
  "type": "Exercise",
  "number": "1.1.15",
  "title": "",
  "body": "  Find the general solution to . How many distinct constants do you need?   "
},
{
  "id": "slopefields-section",
  "level": "1",
  "url": "slopefields-section.html",
  "type": "Section",
  "number": "1.2",
  "title": "Slope fields",
  "body": " Slope fields   As we said, the general first order equation we are studying looks like A lot of the time, we cannot simply solve these kinds of equations explicitly, because our direct integration method only works when the equation is of the form which we could integrate directly. In these more complicated cases, it would be nice if we could at least figure out the shape and behavior of the solutions, or find approximate solutions.    Slope fields   2.75in  Suppose that we have a solution to the equation with . What does the fact that this solves the differential equation tell us about the solution? It tells us that the derivative of the solution at this point will be . Graphically, the derivative gives the slope of the solution, so it means that the solution will pass through the point and will have slope . For example, if , then at point we draw a short line of slope . So, if is a solution and , then the equation mandates that . See .  To get an idea of how solutions behave, we draw such lines at lots of points in the plane, not just the point . We would ideally want to see the slope at every point, but that is just not possible. Usually we pick a grid of points fine enough so that it shows the behavior, but not too fine so that we can still recognize the individual lines. We call this picture the of the equation. See for the slope field of the equation . Usually in practice, one does not do this by hand, but has a computer do the drawing.  The idea of a slope field is that it tells us how the graph of the solution should be sloped, or should curve, if it passed through a given point. Having a wide variety of slopes plotted in our slope field gives an idea of how all of the solutions behave for a bunch of different initial conditions. Which curve we want in particular, and where we should start the curve, depends on the initial condition.  Suppose we are given a specific initial condition . A solution, that is, the graph of the solution, would be a curve that follows the slopes we drew, starting from the point . For a few sample solutions, see . It is easy to roughly sketch (or at least imagine) possible solutions in the slope field, just from looking at the slope field itself. You simply sketch a line that roughly fits the little line segments and goes through your initial condition. The graph should flow along the little slopes that are on the slope field.    By looking at the slope field we get a lot of information about the behavior of solutions without having to solve the equation. For example, in we see what the solutions do when the initial conditions are , and . A small change in the initial condition causes quite different behavior. We see this behavior just from the slope field and imagining what solutions ought to do.  We see a different behavior for the equation . The slope field and a few solutions is in see . If we think of moving from left to right (perhaps is time and time is usually increasing), then we see that no matter what is, all solutions tend to zero as tends to infinity. Again that behavior is clear from simply looking at the slope field itself.      Exercises    Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?      image    is a solution.    Sketch the slope field of . Can you visually find the solution that satisfies ?      Sketch slope field for .           Sketch slope field for .           For each of the following differential equations, sketch out a slope field on and and determine the overall behavior of the solutions to the equation as . If this fact depends on the value of the solution at , explain how it changes.   (4)        a)       image   b)     image   c)     image   d)     image   a) Solutions tend to . b) Solutions go to if , goes to is . Constant if . c) Solutions go to if , goes to is . Constant if . d) Solutions tend to .    Which of the following slope fields corresponds to the differential equation . Explain your reasoning.   (3)    image     image     image     b)      Which of the following slope fields corresponds to the differential equation . Explain your reasoning.   (3)    image     image     image     c)      Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)        Match equations , , to slope fields. Justify.   (3)    image     image     image       Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)        Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)        The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Tends to 3      The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Tends to -4      The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Goes to . Will not exist for all positive values.       image      image      image     Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.    Yes, it will go to .      Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :   (2) does not depend on . does not depend on . for any number . and for all .    a) Slopes are independent of . On a vertical line, the slopes are all the same. b) Slopes are independent of . Horizontal invariance. c) Horizontal tangents along the line . d) Horizontal tangents along the -axis, so is a solution. Slope along .      Describe what each of the following facts about the function tells you about the slope field for the differential equation .    for all  for all  for all  for all     a) Horizontal tangents along . b) Horizontal tangents along the line . c) Slope one along the line . Also is a solution. d) Horizontal tangents along the line .     "
},
{
  "id": "slopefields-section-4-2",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Sketch slope field for . How do the solutions behave as grows? Can you guess a particular solution by looking at the slope field?   "
},
{
  "id": "slopefields-section-4-3",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-3",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-5",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-5",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Sketch the slope field of . Can you visually find the solution that satisfies ?   "
},
{
  "id": "slopefields-section-4-6",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-6",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Sketch slope field for .        "
},
{
  "id": "slopefields-section-4-7",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-7",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Sketch slope field for .        "
},
{
  "id": "slopefields-section-4-8",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-8",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  For each of the following differential equations, sketch out a slope field on and and determine the overall behavior of the solutions to the equation as . If this fact depends on the value of the solution at , explain how it changes.   (4)        a)    "
},
{
  "id": "slopefields-section-4-9",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-9",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-11",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-11",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-13",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-13",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-15",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-15",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-17",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-17",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Which of the following slope fields corresponds to the differential equation . Explain your reasoning.   (3)    image     image     image     b)   "
},
{
  "id": "slopefields-section-4-18",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-18",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Which of the following slope fields corresponds to the differential equation . Explain your reasoning.   (3)    image     image     image     c)   "
},
{
  "id": "slopefields-section-4-19",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-19",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)     "
},
{
  "id": "slopefields-section-4-20",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-20",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.   (3)    image     image     image    "
},
{
  "id": "slopefields-section-4-21",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-21",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)     "
},
{
  "id": "slopefields-section-4-22",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-22",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Match equations , , to slope fields. Justify.   (3)    image     image     image     a)  b)  c)     "
},
{
  "id": "slopefields-section-4-23",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-23",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Tends to 3   "
},
{
  "id": "slopefields-section-4-24",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-24",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Tends to -4   "
},
{
  "id": "slopefields-section-4-25",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-25",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  The slope field for the differential equation is below. If we find the solution to this differential equation with initial condition, , what will happen to the solution as ? Use the slope field and your knowledge of the equation to determine the long-time behavior of this solution.    Goes to . Will not exist for all positive values.   "
},
{
  "id": "slopefields-section-4-26",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-26",
  "type": "Figure",
  "number": "1.2.24",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-27",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-27",
  "type": "Figure",
  "number": "1.2.25",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-28",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-28",
  "type": "Figure",
  "number": "1.2.26",
  "title": "",
  "body": "  image  "
},
{
  "id": "slopefields-section-4-29",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-29",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Take , , where for all and . If the solution exists for all , can you say what happens to as goes to positive infinity? Explain.    Yes, it will go to .   "
},
{
  "id": "slopefields-section-4-30",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-30",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Suppose . What will the slope field look like, explain and sketch an example, if you know the following about :   (2) does not depend on . does not depend on . for any number . and for all .    a) Slopes are independent of . On a vertical line, the slopes are all the same. b) Slopes are independent of . Horizontal invariance. c) Horizontal tangents along the line . d) Horizontal tangents along the -axis, so is a solution. Slope along .   "
},
{
  "id": "slopefields-section-4-31",
  "level": "2",
  "url": "slopefields-section.html#slopefields-section-4-31",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Describe what each of the following facts about the function tells you about the slope field for the differential equation .    for all  for all  for all  for all     a) Horizontal tangents along . b) Horizontal tangents along the line . c) Slope one along the line . Also is a solution. d) Horizontal tangents along the line .   "
},
{
  "id": "separable-section",
  "level": "1",
  "url": "separable-section.html",
  "type": "Section",
  "number": "1.3",
  "title": "Separable equations",
  "body": " Separable equations    After this section, you will be able to:     Identify when a differential equation is separable.    Find the general solution of a separable differential equation, and    Solve initial value problems for separable differential equations.      As mentioned in , when a differential equation is of the form , we can just integrate: . Unfortunately this method no longer works for the general form of the equation . Integrating both sides yields  .  Notice the dependence on in the integral. Since is a function of , this expression is really of the form   and without knowing what is in advance (which we don't, because that's what we are trying to solve for) we can't compute this integral. Note that while you may have seen integrals of the form  in Calculus 3, this is not the same situation. In that class, and were both independent variables, so we could integrate this expression in , treating as a constant. However, here is a function of , so they are not both independent variables and can not be treated like a constant. If is a function of and any shows up in the integral, you can not compute it.    Separable equations  One particular type of differential equation that we can evaluate using a technique very similar to direct integration is separable equations.    We say a differential equation is separable if we can write it as  , for some functions and .        Let us write the equation in the . Then we rewrite the equation as . It looks like we just separated the derivative as a fraction. The actual reasoning here is the differential from Calculus 1. This is the fact that for a function of , we know that . This means that we can take the equation , rearrange it as and then multiply both sides by to get which leads to the rewritten equation above. Both sides look like something we can integrate. We obtain . If we can find closed form expressions for these two integrals, we can, perhaps, solve for .  So a simple, short equality such as should not cause a problem, but if you want to claim that the probability distribution of the normal distribution has the right scaling factors, , there is a good chance it will do less harm to your paragraph of you display it using the <me> element described next.    Solve the equation .    Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as . Then . We compute the antiderivatives to get , or , where is some constant. Because is also a solution and because of the absolute value we can write: , for any number (including zero or negative).  We check: . Yay!    One particular case in which this method works very well is if the function is only a function of . With this, we can explicitly complete the solution to equations like . reaching the solution .  We should be a little bit more careful with this method. You may be worried that we integrated in two different variables. We seemingly did a different operation to each side. Let us work through this method more rigorously. Take . We rewrite the equation as follows. Note that is a function of and so is ! . We integrate both sides with respect to : . We use the change of variables formula (substitution) on the left hand side: . And we are done.  However, in some cases there are some special solutions to these problems as well that don't fit the same formula. Assume we have and we have a value such that . Then, the function is a solution, provided is defined everywhere. (Plug this in and check!) This fills in the issue for having in our integral expression, which is not defined when . These are called singular solutions , and the next example will showcase one of them.    Implicit solutions  We sometimes get stuck even if we can do the integration. Consider the separable equation We separate variables, . We integrate to get , or perhaps the easier looking expression (where ) . It is not easy to find the solution explicitly as it is hard to solve for . We, therefore, leave the solution in this form and call it an implicit solution . It is still easy to check that an implicit solution satisfies the differential equation. In this case, we differentiate with respect to , and remember that is a function of , to get . Multiply both sides by and divide by and you will get exactly the differential equation. We leave this computation to the reader.  If you have an implicit solution, and you want to compute values for , you might have to be tricky. You might get multiple solutions for each , so you have to pick one. Sometimes you can graph as a function of , and then flip your paper. Sometimes you have to do more.  Computers are also good at some of these tricks. More advanced mathematical software usually has some way of plotting solutions to implicit equations, which makes these solutions just as good for visualizing or graphing as explicit solutions. For example, for if you plot all the points that are solutions to , you find the two curves in . This is not quite a graph of a function. For each there are two choices of . To find a function you would have to pick one of these two curves. You pick the one that satisfies your initial condition if you have one. For example, the top curve satisfies the condition . So for each we really got two solutions. As you can see, computing values from an implicit solution can be somewhat tricky, but sometimes, an implicit solution is the best we can do.   The implicit solution to .   A graph showing two curves, both representing the same implicit solution. The graph is somewhat parabolic, one pointing up and one pointing down.  The graph shows two different curves, both composing the implicit solution . One comes in from the top left, coming to a minimum at and then leaving to the top right. The second curve comes in from the bottom left, hits a maximum at and then leaves to the bottom right.    The equation above also has the solution . Since our function is zero at , and gives an additional solution to the problem. The function satisfies and for all , which is the right-hand side of the equation. So the general solution is These outlying solutions such as are sometimes called singular solutions , as mentioned previously.    Examples of separable equations    Solve , .    Factor the right-hand side . Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore, .     A first modeling problem   Bob made a cup of coffee, and Bob likes to drink coffee only once reaches 60 degrees Celsius and will not burn him. Initially at time minutes, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?    Let be the temperature of the coffee in degrees Celsius, and let be the ambient (room) temperature, also in degrees Celsius. states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some constant . For our setup , , . We separate variables and integrate (let and denote arbitrary constants): . That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for we get . Now we solve for the time that gives us a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.   The left graph shows the decaying temperature of the coffee over the time range of 0 to 12.5 minutes, with markings for 89, 85, and 60 degrees as described in the caption. The plot on the right shows the same curve over the range of 0 to 90 minutes to show the long-time behavior approaching 22.       Example with singular solutions   Find the general solution to (including singular solutions).    First note that is a solution (a singular solution). Now assume that . . So the general solution is, .      Find the general solution to     Using the methods of separable equations, we can rewrite this differential equation as and we can integrate both sides to solve. This leads to The right-hand side of this can be integrated normally to give and the left-hand side requires partial fractions in order to integrate correctly. If you are not familiar with this technique of partial fractions, it is reviewed in .  Using the method of partial fractions, we want to rewrite and solve for and , which gives Therefore, we can compute the integral .  Therefore, we can write the general solution as We could solve this out for as an explicit function, but that is not necessary for a problem like this.  There are also two singular solutions here at and . Notice that the implicit solution that we found previously is not defined at either of these values, because they involve taking the natural log of , which is not defined.      Exercises    Solve for .           Solve , .      Solve for . (Note: Requires partial fractions)           Solve , .      Solve for .           Solve .           Solve .           Consider the differential equation      Find the general solution as an implicit function.           Find the solution to this differential equation as an explicit function with .           Find the solution to this differential equation as an explicit function with .            Solve , , where is a positive integer. Hint: You have to consider different cases.      Solve , for . (Note: Requires partial fractions)           Solve , for .           Solve .      Solve with .           Solve . Hint: Factor the right-hand side.           Solve , .      Find the general solution of , and then .     ,       Solve , where .           Find an implicit solution for , .      Solve , for .           Find an implicit solution for , for .           Find an implicit solution to .      Find an implicit solution for with .           Find an explicit solution for , .           Find an explicit solution to , .      Find an explicit solution for , for .           Find an explicit solution for with .           Find an explicit solution for with .           Find an explicit solution for , . It is alright to leave a definite integral in your answer.           Is the equation separable? If so, find the general solution, if not, explain why.    No      Is the equation separable? If so, find the general solution, if not, explain why.    Yes.       Is the equation separable? If so, find the general solution, if not, explain why. (Note: Requires partial fractions)    Yes.       Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.    10 C      Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.      A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.     Find the solution to the equation with the initial condition.           How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).    102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.      "
},
{
  "id": "separable-section-2",
  "level": "2",
  "url": "separable-section.html#separable-section-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  After this section, you will be able to:     Identify when a differential equation is separable.    Find the general solution of a separable differential equation, and    Solve initial value problems for separable differential equations.    "
},
{
  "id": "def-separableeqn",
  "level": "2",
  "url": "separable-section.html#def-separableeqn",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  We say a differential equation is separable if we can write it as  , for some functions and .   "
},
{
  "id": "separable-equations-7",
  "level": "2",
  "url": "separable-section.html#separable-equations-7",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Solve the equation .    Note that is a solution. We will remember that fact and assume from now on, so that we can divide by . Write the equation as . Then . We compute the antiderivatives to get , or , where is some constant. Because is also a solution and because of the absolute value we can write: , for any number (including zero or negative).  We check: . Yay!   "
},
{
  "id": "separable-equations-10",
  "level": "2",
  "url": "separable-section.html#separable-equations-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular solutions "
},
{
  "id": "implicit-solutions-2",
  "level": "2",
  "url": "separable-section.html#implicit-solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implicit solution "
},
{
  "id": "implicitsols-fig",
  "level": "2",
  "url": "separable-section.html#implicitsols-fig",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " The implicit solution to .   A graph showing two curves, both representing the same implicit solution. The graph is somewhat parabolic, one pointing up and one pointing down.  The graph shows two different curves, both composing the implicit solution . One comes in from the top left, coming to a minimum at and then leaving to the top right. The second curve comes in from the bottom left, hits a maximum at and then leaves to the bottom right.   "
},
{
  "id": "examples-of-separable-equations-2",
  "level": "2",
  "url": "separable-section.html#examples-of-separable-equations-2",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  Solve , .    Factor the right-hand side . Separate variables, integrate, and solve for : Solve for the initial condition, to get (or , or , etc.). The particular solution we seek is, therefore, .   "
},
{
  "id": "examples-of-separable-equations-3",
  "level": "2",
  "url": "separable-section.html#examples-of-separable-equations-3",
  "type": "Example",
  "number": "1.3.5",
  "title": "A first modeling problem.",
  "body": " A first modeling problem   Bob made a cup of coffee, and Bob likes to drink coffee only once reaches 60 degrees Celsius and will not burn him. Initially at time minutes, Bob measured the temperature and the coffee was 89 degrees Celsius. One minute later, Bob measured the coffee again and it had 85 degrees. The temperature of the room (the ambient temperature) is 22 degrees. When should Bob start drinking?    Let be the temperature of the coffee in degrees Celsius, and let be the ambient (room) temperature, also in degrees Celsius. states that the rate at which the temperature of the coffee is changing is proportional to the difference between the ambient temperature and the temperature of the coffee. That is, for some constant . For our setup , , . We separate variables and integrate (let and denote arbitrary constants): . That is, . We plug in the first condition: , and hence . So . The second condition says . Solving for we get . Now we solve for the time that gives us a temperature of 60 degrees. Namely, we solve to get minutes. So Bob can begin to drink the coffee at just over 9 minutes from the time Bob made it. That is probably about the amount of time it took us to calculate how long it would take. See .   Graphs of the coffee temperature function . On the left, horizontal lines are drawn at temperatures 60, 85, and 89. Vertical lines are drawn at and . Notice that the temperature of the coffee hits 85 at , and 60 at . On the right, the graph is over a longer period of time, with a horizontal line at the ambient temperature 22.   The left graph shows the decaying temperature of the coffee over the time range of 0 to 12.5 minutes, with markings for 89, 85, and 60 degrees as described in the caption. The plot on the right shows the same curve over the range of 0 to 90 minutes to show the long-time behavior approaching 22.     "
},
{
  "id": "examples-of-separable-equations-4",
  "level": "2",
  "url": "separable-section.html#examples-of-separable-equations-4",
  "type": "Example",
  "number": "1.3.7",
  "title": "Example with singular solutions.",
  "body": " Example with singular solutions   Find the general solution to (including singular solutions).    First note that is a solution (a singular solution). Now assume that . . So the general solution is, .   "
},
{
  "id": "examples-of-separable-equations-5",
  "level": "2",
  "url": "separable-section.html#examples-of-separable-equations-5",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Find the general solution to     Using the methods of separable equations, we can rewrite this differential equation as and we can integrate both sides to solve. This leads to The right-hand side of this can be integrated normally to give and the left-hand side requires partial fractions in order to integrate correctly. If you are not familiar with this technique of partial fractions, it is reviewed in .  Using the method of partial fractions, we want to rewrite and solve for and , which gives Therefore, we can compute the integral .  Therefore, we can write the general solution as We could solve this out for as an explicit function, but that is not necessary for a problem like this.  There are also two singular solutions here at and . Notice that the implicit solution that we found previously is not defined at either of these values, because they involve taking the natural log of , which is not defined.   "
},
{
  "id": "separable-section-7-2",
  "level": "2",
  "url": "separable-section.html#separable-section-7-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Solve for .        "
},
{
  "id": "separable-section-7-3",
  "level": "2",
  "url": "separable-section.html#separable-section-7-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "separable-section-7-4",
  "level": "2",
  "url": "separable-section.html#separable-section-7-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Solve for . (Note: Requires partial fractions)        "
},
{
  "id": "separable-section-7-5",
  "level": "2",
  "url": "separable-section.html#separable-section-7-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "separable-section-7-6",
  "level": "2",
  "url": "separable-section.html#separable-section-7-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Solve for .        "
},
{
  "id": "separable-section-7-7",
  "level": "2",
  "url": "separable-section.html#separable-section-7-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "separable-section-7-8",
  "level": "2",
  "url": "separable-section.html#separable-section-7-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "separable-section-7-9",
  "level": "2",
  "url": "separable-section.html#separable-section-7-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Consider the differential equation      Find the general solution as an implicit function.           Find the solution to this differential equation as an explicit function with .           Find the solution to this differential equation as an explicit function with .         "
},
{
  "id": "separable-section-7-10",
  "level": "2",
  "url": "separable-section.html#separable-section-7-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Solve , , where is a positive integer. Hint: You have to consider different cases.   "
},
{
  "id": "separable-section-7-11",
  "level": "2",
  "url": "separable-section.html#separable-section-7-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Solve , for . (Note: Requires partial fractions)        "
},
{
  "id": "separable-section-7-12",
  "level": "2",
  "url": "separable-section.html#separable-section-7-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Solve , for .        "
},
{
  "id": "separable-section-7-13",
  "level": "2",
  "url": "separable-section.html#separable-section-7-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "separable-section-7-14",
  "level": "2",
  "url": "separable-section.html#separable-section-7-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "separable-section-7-15",
  "level": "2",
  "url": "separable-section.html#separable-section-7-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Solve . Hint: Factor the right-hand side.        "
},
{
  "id": "separable-section-7-16",
  "level": "2",
  "url": "separable-section.html#separable-section-7-16",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "separable-section-7-17",
  "level": "2",
  "url": "separable-section.html#separable-section-7-17",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Find the general solution of , and then .     ,    "
},
{
  "id": "separable-section-7-18",
  "level": "2",
  "url": "separable-section.html#separable-section-7-18",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Solve , where .        "
},
{
  "id": "separable-section-7-19",
  "level": "2",
  "url": "separable-section.html#separable-section-7-19",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  Find an implicit solution for , .   "
},
{
  "id": "separable-section-7-20",
  "level": "2",
  "url": "separable-section.html#separable-section-7-20",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  Solve , for .        "
},
{
  "id": "separable-section-7-21",
  "level": "2",
  "url": "separable-section.html#separable-section-7-21",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Find an implicit solution for , for .        "
},
{
  "id": "separable-section-7-22",
  "level": "2",
  "url": "separable-section.html#separable-section-7-22",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "  Find an implicit solution to .   "
},
{
  "id": "separable-section-7-23",
  "level": "2",
  "url": "separable-section.html#separable-section-7-23",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "  Find an implicit solution for with .        "
},
{
  "id": "separable-section-7-24",
  "level": "2",
  "url": "separable-section.html#separable-section-7-24",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "  Find an explicit solution for , .        "
},
{
  "id": "separable-section-7-25",
  "level": "2",
  "url": "separable-section.html#separable-section-7-25",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "  Find an explicit solution to , .   "
},
{
  "id": "separable-section-7-26",
  "level": "2",
  "url": "separable-section.html#separable-section-7-26",
  "type": "Exercise",
  "number": "25",
  "title": "",
  "body": "  Find an explicit solution for , for .        "
},
{
  "id": "separable-section-7-27",
  "level": "2",
  "url": "separable-section.html#separable-section-7-27",
  "type": "Exercise",
  "number": "26",
  "title": "",
  "body": "  Find an explicit solution for with .        "
},
{
  "id": "separable-section-7-28",
  "level": "2",
  "url": "separable-section.html#separable-section-7-28",
  "type": "Exercise",
  "number": "27",
  "title": "",
  "body": "  Find an explicit solution for with .        "
},
{
  "id": "separable-section-7-29",
  "level": "2",
  "url": "separable-section.html#separable-section-7-29",
  "type": "Exercise",
  "number": "28",
  "title": "",
  "body": "  Find an explicit solution for , . It is alright to leave a definite integral in your answer.        "
},
{
  "id": "separable-section-7-30",
  "level": "2",
  "url": "separable-section.html#separable-section-7-30",
  "type": "Exercise",
  "number": "29",
  "title": "",
  "body": "  Is the equation separable? If so, find the general solution, if not, explain why.    No   "
},
{
  "id": "separable-section-7-31",
  "level": "2",
  "url": "separable-section.html#separable-section-7-31",
  "type": "Exercise",
  "number": "30",
  "title": "",
  "body": "  Is the equation separable? If so, find the general solution, if not, explain why.    Yes.    "
},
{
  "id": "separable-section-7-32",
  "level": "2",
  "url": "separable-section.html#separable-section-7-32",
  "type": "Exercise",
  "number": "31",
  "title": "",
  "body": "  Is the equation separable? If so, find the general solution, if not, explain why. (Note: Requires partial fractions)    Yes.    "
},
{
  "id": "separable-section-7-33",
  "level": "2",
  "url": "separable-section.html#separable-section-7-33",
  "type": "Exercise",
  "number": "32",
  "title": "",
  "body": "  Suppose a cup of coffee is at 100 degrees Celsius at time , it is at 70 degrees at minutes, and it is at 50 degrees at minutes. Compute the ambient temperature.    10 C   "
},
{
  "id": "separable-section-7-34",
  "level": "2",
  "url": "separable-section.html#separable-section-7-34",
  "type": "Exercise",
  "number": "33",
  "title": "",
  "body": "  Take with the same numbers: 89 degrees at , 85 degrees at , and ambient temperature of 22 degrees. Suppose these temperatures were measured with precision of degrees. Given this imprecision, the time it takes the coffee to cool to (exactly) 60 degrees is also only known in a certain range. Find this range. Hint: Think about what kind of error makes the cooling time longer and what shorter.   "
},
{
  "id": "separable-section-7-35",
  "level": "2",
  "url": "separable-section.html#separable-section-7-35",
  "type": "Exercise",
  "number": "34",
  "title": "",
  "body": "  A population of rabbits on an island is modeled by , where the independent variable is time in months. At time , there are 40 rabbits on the island.     Find the solution to the equation with the initial condition.           How many rabbits are on the island in 1 month, 5 months, 10 months, 15 months (round to the nearest integer).    102 rabbits after one month, 861 after 5 months, 999 after 10 months, 1000 after 15 months.    "
},
{
  "id": "intfactor-section",
  "level": "1",
  "url": "intfactor-section.html",
  "type": "Section",
  "number": "1.4",
  "title": "Linear equations and the integrating factor",
  "body": " Linear equations and the integrating factor  One of the most important types of equations we will learn how to solve are the so-called linear equations . In fact, the majority of the course is about linear equations. In this section we focus on the .   A first order equation is linear if we can put it into the form:   The word means linear in and ; no higher powers nor functions of or appear. The dependence on can be more complicated.  Solutions of linear equations have nice properties. For example, the solution exists wherever and are defined, and has the same regularity (read: it is just as nice). We’ll see this in detail in . But most importantly for us right now, there is a method for solving linear first order equations. In , we saw that we could easily solve equations of the form because we could directly integrate both sides of the equation, since the left hand side was the derivative of something (in this case, ) and the right side was only a function of . We want to do the same here, but the something on the left will not be the derivative of just .  The trick is to rewrite the left-hand side of as a derivative of a product of with another function. Let be this other function, and we can compute, by the product rule, that Now, if we multiply by the function on both sides, we get and the first term on the left here matches the first term from our product rule derivative. To make the second terms match up as well, we need that This equation is separable! We can solve for the here by separating variables to get that so that or   With this choice of , we get that so that if we multiply by , we obtain on the left-hand side, which we can simplify using our product rule derivative above to obtain Now we integrate both sides. The right-hand side does not depend on and the left-hand side is written as a derivative of a function. Afterwards, we solve for . The function is called the and the method is called the .  This method works for any first order linear equation, no matter what and are. In general, we can compute:   Advice: Do not try to remember the formula itself, that is way too hard. It is easier to remember the process and repeat it.  Of course, to get a closed form formula for , we need to be able to find a closed form formula for the integrals appearing above.      Solve     First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is     Note that we do not care which antiderivative we take when computing . You can always add a constant of integration, but those constants will not matter in the end.    Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.    Since we cannot always evaluate the integrals in closed form, it is useful to know how to write the solution in definite integral form. A definite integral is something that you can plug into a computer or a calculator. Suppose we are given Look at the solution and write the integrals as definite integrals. You should be careful to properly use dummy variables here. If you now plug such a formula into a computer or a calculator, it will be happy to give you numerical answers.      Check that in formula .        Solve the initial value problem     In order to solve this equation, we want to put the equation in standard form, which is In this form, the coefficient of is , so that the integrating factor is Since , we have that . Multiplying both sides of the equation by gives where the left hand side is . Therefore, we can integrate both sides of the equation in to give and we can solve out for as To solve for using the initial condition, we plug in to get that we need Therefore, the solution to the initial value problem is         Solve the initial value problem     This equation is already in standard form. Since the coefficient of is , we know that the integrating factor is We can multiply both sides of the equation by this integrating factor to give and then want to integrate both sides. The left-hand side of the equation is , so the antiderivative of that side is just . For the right-hand side, we would need to compute which does not have a closed-form expression. Therefore, we need to represent this as a definite integral. Since our initial condition gives the value of at zero, we want to use zero as the bottom limit of the integral. Therefore, we can write the solution as and so can solve for as Plugging in the initial condition gives that Therefore, the solution to the initial value problem is       Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.           Exercises   In the exercises, feel free to leave answer as a definite integral if a closed form solution cannot be found. If you can find a closed form solution, you should give that.     Solve .           Solve .           Solve .           Solve .           Solve with .           Solve .           Solve .           Solve with .           Solve .           Solve .      Solve , with .           Solve .           Solve the IVP            Solve the IVP .           Solve , with .           Solve , .      Consider the initial value problem for an undetermined value . Solve the problem and determine the dependence on the value of . How does the value of the solution as depend on the value of ?     . If , the solution goes to , if , the solution goes to 0, if , the solution goes to .      Find an expression for the general solution to with . Simplfy your answer as much as possible.          "
},
{
  "id": "intfactor-section-11",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-11",
  "type": "Example",
  "number": "1.4.1",
  "title": ".",
  "body": "    Solve     First note that and . The integrating factor is . We multiply both sides of the equation by to get We integrate Next, we solve for the initial condition , so . The solution is    "
},
{
  "id": "intfactor-section-13",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-13",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": "  Try it! Add a constant of integration to the integral in the integrating factor and show that the solution you get in the end is the same as what we got above.    Since we cannot always evaluate the integrals in closed form, it is useful to know how to write the solution in definite integral form. A definite integral is something that you can plug into a computer or a calculator. Suppose we are given Look at the solution and write the integrals as definite integrals. You should be careful to properly use dummy variables here. If you now plug such a formula into a computer or a calculator, it will be happy to give you numerical answers.   "
},
{
  "id": "intfactor-section-14",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-14",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "",
  "body": "  Check that in formula .   "
},
{
  "id": "intfactor-section-15",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-15",
  "type": "Example",
  "number": "1.4.4",
  "title": ".",
  "body": "    Solve the initial value problem     In order to solve this equation, we want to put the equation in standard form, which is In this form, the coefficient of is , so that the integrating factor is Since , we have that . Multiplying both sides of the equation by gives where the left hand side is . Therefore, we can integrate both sides of the equation in to give and we can solve out for as To solve for using the initial condition, we plug in to get that we need Therefore, the solution to the initial value problem is    "
},
{
  "id": "intfactor-section-16",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-16",
  "type": "Example",
  "number": "1.4.5",
  "title": ".",
  "body": "    Solve the initial value problem     This equation is already in standard form. Since the coefficient of is , we know that the integrating factor is We can multiply both sides of the equation by this integrating factor to give and then want to integrate both sides. The left-hand side of the equation is , so the antiderivative of that side is just . For the right-hand side, we would need to compute which does not have a closed-form expression. Therefore, we need to represent this as a definite integral. Since our initial condition gives the value of at zero, we want to use zero as the bottom limit of the integral. Therefore, we can write the solution as and so can solve for as Plugging in the initial condition gives that Therefore, the solution to the initial value problem is    "
},
{
  "id": "intfactor-section-17",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-17",
  "type": "Checkpoint",
  "number": "1.4.6",
  "title": "",
  "body": "  Write the solution of the following problem as a definite integral, but try to simplify as far as you can. You will not be able to find the solution in closed form.         "
},
{
  "id": "intfactor-section-18-3",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-3",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-4",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-4",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-5",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-5",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-6",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-6",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-7",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-7",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "intfactor-section-18-8",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-8",
  "type": "Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-9",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-9",
  "type": "Exercise",
  "number": "1.4.7",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-10",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-10",
  "type": "Exercise",
  "number": "1.4.8",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "intfactor-section-18-11",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-11",
  "type": "Exercise",
  "number": "1.4.9",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-12",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-12",
  "type": "Exercise",
  "number": "1.4.10",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "intfactor-section-18-13",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-13",
  "type": "Exercise",
  "number": "1.4.11",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "intfactor-section-18-14",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-14",
  "type": "Exercise",
  "number": "1.4.12",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "intfactor-section-18-15",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-15",
  "type": "Exercise",
  "number": "1.4.13",
  "title": "",
  "body": "  Solve the IVP         "
},
{
  "id": "intfactor-section-18-16",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-16",
  "type": "Exercise",
  "number": "1.4.14",
  "title": "",
  "body": "  Solve the IVP .        "
},
{
  "id": "intfactor-section-18-17",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-17",
  "type": "Exercise",
  "number": "1.4.15",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "intfactor-section-18-18",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-18",
  "type": "Exercise",
  "number": "1.4.16",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "intfactor-section-18-19",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-19",
  "type": "Exercise",
  "number": "1.4.17",
  "title": "",
  "body": "  Consider the initial value problem for an undetermined value . Solve the problem and determine the dependence on the value of . How does the value of the solution as depend on the value of ?     . If , the solution goes to , if , the solution goes to 0, if , the solution goes to .   "
},
{
  "id": "intfactor-section-18-20",
  "level": "2",
  "url": "intfactor-section.html#intfactor-section-18-20",
  "type": "Exercise",
  "number": "1.4.18",
  "title": "",
  "body": "  Find an expression for the general solution to with . Simplfy your answer as much as possible.        "
},
{
  "id": "existunique-section",
  "level": "1",
  "url": "existunique-section.html",
  "type": "Section",
  "number": "1.5",
  "title": "Existence and Uniqueness of Solutions",
  "body": " Existence and Uniqueness of Solutions  If we take the differential equation there are two main questions we want to answer about this equation.    Does a solution exist to the differential equation?    Is there only one solution to the differential equation?    These are more commonly referred to as (a) of the solution and (b) of the solution. These are especially crucial for equations that we are using to model a physical situation. For physical situations, the solution definitely exists (because the system does something and continues to exist) and the solution is unique, because a given system will always do the same thing given the same setup. Since we know that physical systems obey these properties, the equations we use to model them should have these properties as well. These properties do not necessarily hold for all differential equations, as shown in the examples below.      Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . The equation may have been written as the seemingly harmless .          Solve:   See . Note that is a solution. But another solution is the function     What we see here is a significant problem for trying to represent physical situations. In the first there is no solution at , so if our physical scenario had wanted one, that would be an issue. Similarly, for the second, we do have solutions, but we have two of them, so we can’t use this to predict what is going to happen to a physical situation modeled by this equation over time. So, we need both existence and uniqueness to hold for our modeling equation in order to use differential equations to accurately model situations. Thankfully, these properties do apply to most equations, and we have fairly straight-forward criteria that can be used to determine if these properties are true for a given differential equation. For a first-order linear differential equation, the theorem is fairly straight-forward.   Assume that we have the first-order linear differential equation given by If and are continuous functions on an interval that contains a point , then for any -value , the initial value problem has a unique solution. This solution exists and is unique on the entire interval .  The idea and proof of this theorem comes from the fact that we have an explicit method for solving these equations no matter what and are. We can always find an integrating factor for the equation, convert the left-hand side into a product rule term, take a definite integral of both sides, and then solve for . Since we have this explicit formula, the solution will exist and be defined on the entire interval where the functions and are continuous. This also means that we can answer questions about where and for what values of the solution to a differential equation exists.      Consider the differential equation What do the existence and uniqueness theorems say about the solution to this differential equation with the initial condition ? What about the solution with initial condition ?    To apply the existence and uniqueness theorem, we need to get the term by itself. This results in the differential equation In order to figure out where this solution exists and is unique, we need to determine where the coefficient functions and are continuous. The only two points that we have discontinuities are at and . Therefore, if we have the initial condition , we start at the value of . Because this equation is linear, it will exist everywhere that these two functions are both continuous containing the point , and since the only discontinuities are at and , we know that they are both continuous on . This means that we can take as the interval in the theorem, and know that this solution will exist and be unique on the interval .  For the other initial condition, , we now want an interval where these functions are continuous that contains . Again, we only have to avoid and , so we can take the interval as the interval in the theorem, and so we know the solution with this initial condition will exist and be unique on .  A convenient way to represent this situation is with a number line like that presented in . On this number line, we mark the places where the functions or are discontinuous.    To interpret this image, we can mark the initial point on the number line, where the point that we mark is the x coordinate of the initial condition. All of the intervals are in terms of . Then, the existence and uniqueness theorem says that the solution will exist on the entire interval between any marked points on this number line. From that, we can see that the interval of existence for the initial condition is , and the interval for is .    For non-linear equations, we don’t have an explicit method of getting a solution that works for all equations. This means that we can’t fall back on this formula to guarantee existence or uniqueness of solutions. For this reason, we expect to get a result that is not as strong for non-linear equations. Thankfully, we do still get a result, which is known as Picard’s theorem  Named after the French mathematician Charles Émile Picard (1856–1941) .   Picard’s theorem on existence and uniqueness If is continuous (as a function of two variables) and exists and is continuous near some , then a solution to exists (at least for some small interval of ’s) and is unique.  The main fact that is not as strong about this result is the interval that we get from the theorem. For the linear theorem, we got existence and uniqueness on the entire interval where and are continuous. For the non-linear theorem, we only get existence on some interval around the point . Even if and are really nice functions that are continuous everywhere, we can still only guarantee existence on a small interval (that can depend on the initial condition) around the point .      For some constant , solve:     We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For example, when the solution is which goes to infinity, and so , at . This solution here exists only on the interval , and hence, the solution does not exist for all even if the equation is nice everywhere. The equation certainly looks nice.  However, this fact does not contradict our existence and uniqueness theorem for non-linear equations. The theorem only guarantees that the solution to exists and is unique on some interval containing 0. It does not guarantee that the solution exists everywhere that and its derivative are continuous, only that at each point where this happens, the solution will exist for some interval around that point. The interval is , so the theorem still applies and holds here. See the exercises for more detail on how this process works and how we can illustrate the fact that the interval of existence ise .    The other main conclusion that we can draw from these theorems is the fact that two different solution curves to a first-order differential equation can not cross, provided the existence and uniqueness theorems hold. If and are two different solutions to and the solution curves for and cross, then this means that for some particular value of and , we have that If we pick as a starting point, then the fact that the existence and uniqueness theorems hold imply that, at least for some interval around , there is exactly one solution to However, both and satisfy these two properties. Therefore, and must be the same, which doesn’t make sense because we assumed they were different. So it is impossible for two different solution curves to cross, provided the existence and uniqueness theorem holds. For a comparison, refer back to earlier to see what non-uniqueness looks like, where we do have two solution curves that cross at the point .  This fact is useful for analyzing differential equations in general, but will be particularly useful in in dealing with autonomous equations, where we can use simple solutions to provide boundaries over which other solutions can not cross. This fact will come up again in Chapters and in sketching trajectories for these solutions as well.      Consider the differential equation     Verify that is a solution to this differential equation.    Assume that we solve this problem with initial condition . Is it possible for this solution to ever reach ? Why or why not?        If we take the function , then , and plugging this into the right hand side also gives . Therefore, this function solves the differential equation.    If the solutions starts with , this means that it starts below the line . In order to get up to , the solution would need to cross over the line , which would mean that we have solution curves that cross. However, the function is continuous everywhere, as is the first derivative Therefore, the existence and uniqueness theorem applies everywhere, and so solution curves can not cross. So, it is not possible for the solution to reach , because this would force solution curves to cross, which we know can not happen.       Exercises    Is it possible to solve the equation for ? Justify.    Yes.      Is it possible to solve the equation for ? Is the solution unique? Justify.    Yes      Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ?    a) Linear b)  c)        Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ? What happens if we want to start with ?    a) Linear b)  c)  d) Nothing is guaranteed.      Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ? What happens if we want to start with ?    a) Linear b)  c)  d)        Consider the differential equation .   Is this equation linear or non-linear? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist? Find the solution to this differential equation with . Over what values of does this solution exist? Find the solution to this differential equation with . Over what values of does this solution exist? Do any of these contradict your answer in (b)?    a) Non-linear b) It will exist on some interval around . c)  , d)  , e)  , f)  No. All of these are intervals containing zero.      Consider the differential equation .   Is this equation linear or non-linear? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist?    a) Non-linear b) Some interval around zero. c)  , Exists on       Consider the differential equation .   Is this equation linear or non-linear? If we set , for what values of and are and continuous? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist?    a) Non-linear b) Some interval around c)  , Exists on       Take , .   Find two distinct solutions. Explain why this does not violate Picard’s theorem.    a)  and b)  is discontinuous when , and is one such point.      Find a solution to , . Does Picard’s theorem apply?     or . No.      Consider the IVP .   The Existence and Uniqueness Theorem guarantees a unique solution to this IVP on what interval? Find this solution explicitly.    a)  b)        Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?           Consider the differential equation .   Verify that is a solution to this differential equation. Assume that we look for the solution with . Is it possible that for some later time ? Why or why not? Based on this, what do we know about the solution with ?    a) Yes b) No c) Must stay above for all . Approaches 2.      Suppose is such that for every , is continuous and exists and is continuous for every and .   Guess a solution given the initial condition . Can graphs of two solutions of the equation for different initial conditions ever intersect? Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?    a)  b) No c) Must stay below       Consider the differential equation .   Verify that and are both solutions to this differential equation. Verify that the hypotheses of Picard’s theorem are satisfies for this equation. Assume that we solve this differential equation with . Is it possible for the solution to reach at any point? Why or why not? Assume that we solve this differential equation with . Is it possible for the solution to reach at any point? Why or why not?    a) Yes b) Yes c) No d) No      Is it possible to solve for ? Is the solution unique?      Is it possible to solve for ?      Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?      Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?    "
},
{
  "id": "existunique-section-5",
  "level": "2",
  "url": "existunique-section.html#existunique-section-5",
  "type": "Example",
  "number": "1.5.1",
  "title": ".",
  "body": "    Attempt to solve:   Integrate to find the general solution . The solution does not exist at . See . The equation may have been written as the seemingly harmless .     "
},
{
  "id": "existunique-section-6",
  "level": "2",
  "url": "existunique-section.html#existunique-section-6",
  "type": "Example",
  "number": "1.5.2",
  "title": ".",
  "body": "    Solve:   See . Note that is a solution. But another solution is the function    "
},
{
  "id": "existunique-section-10",
  "level": "2",
  "url": "existunique-section.html#existunique-section-10",
  "type": "Example",
  "number": "1.5.3",
  "title": ".",
  "body": "    Consider the differential equation What do the existence and uniqueness theorems say about the solution to this differential equation with the initial condition ? What about the solution with initial condition ?    To apply the existence and uniqueness theorem, we need to get the term by itself. This results in the differential equation In order to figure out where this solution exists and is unique, we need to determine where the coefficient functions and are continuous. The only two points that we have discontinuities are at and . Therefore, if we have the initial condition , we start at the value of . Because this equation is linear, it will exist everywhere that these two functions are both continuous containing the point , and since the only discontinuities are at and , we know that they are both continuous on . This means that we can take as the interval in the theorem, and know that this solution will exist and be unique on the interval .  For the other initial condition, , we now want an interval where these functions are continuous that contains . Again, we only have to avoid and , so we can take the interval as the interval in the theorem, and so we know the solution with this initial condition will exist and be unique on .  A convenient way to represent this situation is with a number line like that presented in . On this number line, we mark the places where the functions or are discontinuous.    To interpret this image, we can mark the initial point on the number line, where the point that we mark is the x coordinate of the initial condition. All of the intervals are in terms of . Then, the existence and uniqueness theorem says that the solution will exist on the entire interval between any marked points on this number line. From that, we can see that the interval of existence for the initial condition is , and the interval for is .   "
},
{
  "id": "existunique-section-14",
  "level": "2",
  "url": "existunique-section.html#existunique-section-14",
  "type": "Example",
  "number": "1.5.4",
  "title": ".",
  "body": "    For some constant , solve:     We know how to solve this equation. First assume that , so is not equal to zero at least for some near 0. So , so , so . If , then so If , then is a solution.  For example, when the solution is which goes to infinity, and so , at . This solution here exists only on the interval , and hence, the solution does not exist for all even if the equation is nice everywhere. The equation certainly looks nice.  However, this fact does not contradict our existence and uniqueness theorem for non-linear equations. The theorem only guarantees that the solution to exists and is unique on some interval containing 0. It does not guarantee that the solution exists everywhere that and its derivative are continuous, only that at each point where this happens, the solution will exist for some interval around that point. The interval is , so the theorem still applies and holds here. See the exercises for more detail on how this process works and how we can illustrate the fact that the interval of existence ise .   "
},
{
  "id": "existunique-section-17",
  "level": "2",
  "url": "existunique-section.html#existunique-section-17",
  "type": "Example",
  "number": "1.5.5",
  "title": ".",
  "body": "    Consider the differential equation     Verify that is a solution to this differential equation.    Assume that we solve this problem with initial condition . Is it possible for this solution to ever reach ? Why or why not?        If we take the function , then , and plugging this into the right hand side also gives . Therefore, this function solves the differential equation.    If the solutions starts with , this means that it starts below the line . In order to get up to , the solution would need to cross over the line , which would mean that we have solution curves that cross. However, the function is continuous everywhere, as is the first derivative Therefore, the existence and uniqueness theorem applies everywhere, and so solution curves can not cross. So, it is not possible for the solution to reach , because this would force solution curves to cross, which we know can not happen.     "
},
{
  "id": "existunique-section-18-2",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-2",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Justify.    Yes.   "
},
{
  "id": "existunique-section-18-3",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-3",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Is it possible to solve the equation for ? Is the solution unique? Justify.    Yes   "
},
{
  "id": "existunique-section-18-4",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-4",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ?    a) Linear b)  c)     "
},
{
  "id": "existunique-section-18-5",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-5",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ? What happens if we want to start with ?    a) Linear b)  c)  d) Nothing is guaranteed.   "
},
{
  "id": "existunique-section-18-6",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-6",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? What is the maximum guaranteed interval of existence for the solution to this equation with initial condition ? What if we start with the initial condition ? What happens if we want to start with ?    a) Linear b)  c)  d)     "
},
{
  "id": "existunique-section-18-7",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-7",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist? Find the solution to this differential equation with . Over what values of does this solution exist? Find the solution to this differential equation with . Over what values of does this solution exist? Do any of these contradict your answer in (b)?    a) Non-linear b) It will exist on some interval around . c)  , d)  , e)  , f)  No. All of these are intervals containing zero.   "
},
{
  "id": "existunique-section-18-8",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-8",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist?    a) Non-linear b) Some interval around zero. c)  , Exists on    "
},
{
  "id": "existunique-section-18-9",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-9",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  Consider the differential equation .   Is this equation linear or non-linear? If we set , for what values of and are and continuous? What is the most we can say about the interval of existence for the solution to this equation with initial condition ? Find the solution to this differential equation with . Over what values of does this solution exist?    a) Non-linear b) Some interval around c)  , Exists on    "
},
{
  "id": "existunique-section-18-10",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-10",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "  Take , .   Find two distinct solutions. Explain why this does not violate Picard’s theorem.    a)  and b)  is discontinuous when , and is one such point.   "
},
{
  "id": "existunique-section-18-11",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-11",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "  Find a solution to , . Does Picard’s theorem apply?     or . No.   "
},
{
  "id": "existunique-section-18-12",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-12",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": "  Consider the IVP .   The Existence and Uniqueness Theorem guarantees a unique solution to this IVP on what interval? Find this solution explicitly.    a)  b)     "
},
{
  "id": "existunique-section-18-13",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-13",
  "type": "Exercise",
  "number": "1.5.12",
  "title": "",
  "body": "  Take an equation for some function . Can you solve the problem for the initial condition , and if so what is the solution?        "
},
{
  "id": "existunique-section-18-14",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-14",
  "type": "Exercise",
  "number": "1.5.13",
  "title": "",
  "body": "  Consider the differential equation .   Verify that is a solution to this differential equation. Assume that we look for the solution with . Is it possible that for some later time ? Why or why not? Based on this, what do we know about the solution with ?    a) Yes b) No c) Must stay above for all . Approaches 2.   "
},
{
  "id": "existunique-section-18-15",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-15",
  "type": "Exercise",
  "number": "1.5.14",
  "title": "",
  "body": "  Suppose is such that for every , is continuous and exists and is continuous for every and .   Guess a solution given the initial condition . Can graphs of two solutions of the equation for different initial conditions ever intersect? Given , what can you say about the solution. In particular, can for any ? Can for any ? Why or why not?    a)  b) No c) Must stay below    "
},
{
  "id": "existunique-section-18-16",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-16",
  "type": "Exercise",
  "number": "1.5.15",
  "title": "",
  "body": "  Consider the differential equation .   Verify that and are both solutions to this differential equation. Verify that the hypotheses of Picard’s theorem are satisfies for this equation. Assume that we solve this differential equation with . Is it possible for the solution to reach at any point? Why or why not? Assume that we solve this differential equation with . Is it possible for the solution to reach at any point? Why or why not?    a) Yes b) Yes c) No d) No   "
},
{
  "id": "existunique-section-18-17",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-17",
  "type": "Exercise",
  "number": "1.5.16",
  "title": "",
  "body": "  Is it possible to solve for ? Is the solution unique?   "
},
{
  "id": "existunique-section-18-18",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-18",
  "type": "Exercise",
  "number": "1.5.17",
  "title": "",
  "body": "  Is it possible to solve for ?   "
},
{
  "id": "existunique-section-18-19",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-19",
  "type": "Exercise",
  "number": "1.5.18",
  "title": "",
  "body": "  Suppose Does , have a continuously differentiable solution? Does Picard apply? Why, or why not?   "
},
{
  "id": "existunique-section-18-20",
  "level": "2",
  "url": "existunique-section.html#existunique-section-18-20",
  "type": "Exercise",
  "number": "1.5.19",
  "title": "",
  "body": "  Consider an equation of the form for some continuous function , and an initial condition . Does a solution exist for all ? Why or why not?   "
},
{
  "id": "numer-section",
  "level": "1",
  "url": "numer-section.html",
  "type": "Section",
  "number": "1.6",
  "title": "Numerical methods: Euler’s method",
  "body": " Numerical methods: Euler’s method  Unless is of a special form, it is generally very hard if not impossible to get a nice formula for the solution of the problem   If the equation can be solved in closed form, we should do that. But what if we have an equation that cannot be solved in closed form? What if we want to find the value of the solution at some particular ? Or perhaps we want to produce a graph of the solution to inspect the behavior. In this section we will learn about the basics of numerical approximation of solutions.  The simplest method for approximating a solution is  Named after the Swiss mathematician Leonhard Paul Euler (1707–1783). The correct pronunciation of the name sounds more like . It works as follows: Take and compute the slope . The slope is the change in per unit change in . Follow the line for an interval of length on the -axis. Hence if at , then we say that (the approximate value of at ) is . Rinse, repeat! Let , and then compute , and . Now compute and using and , etc. Consider the equation , , and . Then and . We compute We then draw an approximate graph of the solution by connecting the points , , ,…. For the first two steps of the method see .    More abstractly, for any , we compute This can be worked out by hand for a few steps, but the formulas here lend themselves very well to being coded into a looping structure for more involved processes. The line segments we get are an approximate graph of the solution. Generally it is not exactly the solution. See for the plot of the real solution and the approximation.    We continue with the equation , . Let us try to approximate using Euler’s method. In Figures  and  we have graphically approximated with step size 1. With step size 1, we have . The real answer is 3. We are approximately 1.074 off. Let us halve the step size. Computing with , we find that , so an error of about 0.791. gives the values computed for various parameters.    Solve this equation exactly and show that .    The difference between the actual solution and the approximate solution is called the error. We usually talk about just the size of the error and we do not care much about its sign. The point is, we usually do not know the real solution, so we only have a vague understanding of the error. If we knew the error exactly …what is the point of doing the approximation?       Euler’s method approximation of where of , .     Approximate  Error     1  1.92593  1.07407     0.5  2.20861  0.79139  0.73681    0.25  2.47250  0.52751  0.66656    0.125  2.68034  0.31966  0.60599    0.0625  2.82040  0.17960  0.56184    0.03125  2.90412  0.09588  0.53385    0.015625  2.95035  0.04965  0.51779    0.0078125  2.97472  0.02528  0.50913     Notice that except for the first few times, every time we halved the step size the error approximately halved. This halving of the error is a general feature of Euler’s method as it is a . There exists an improved Euler method, see the exercises, which is a . A second order method reduces the error to approximately one quarter every time we halve the interval. The meaning of order is the squaring in .  To get the error to be within 0.1 of the answer we had to already do 64 steps. To get it to within 0.01 we would have to halve another three or four times, meaning doing 512 to 1024 steps. That is quite a bit to do by hand. The improved Euler method from the exercises should quarter the error every time we halve the interval, so we would have to approximately do half as many to get the same error. This reduction can be a big deal. With 10 halvings (starting at ) we have 1024 steps, whereas with 5 halvings we only have to do 32 steps, assuming that the error was comparable to start with. A computer may not care about this difference for a problem this simple, but suppose each step would take a second to compute (the function may be substantially more difficult to compute than ). Then the difference is 32 seconds versus about 17 minutes. We are not being altogether fair, a second order method would probably double the time to do each step. Even so, it is 1 minute versus 17 minutes. Next, suppose that we have to repeat such a calculation for different parameters a thousand times. You get the idea.  Note that in practice we do not know how large the error is! How do we know what is the right step size? Well, essentially we keep halving the interval, and if we are lucky, we can estimate the error from a few of these calculations and the assumption that the error goes down by a factor of one half each time (if we are using standard Euler).    In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error goes down by a factor of 2. Can you estimate the error in the last time from this? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table?    Let us talk a little bit more about the example , . Suppose that instead of the value we wish to find . The results of this effort are listed in for successive halvings of . What is going on here? Well, you should solve the equation exactly and you will notice that the solution does not exist at . In fact, the solution goes to infinity when you approach .       Attempts to use Euler’s to approximate where of , .     Approximate    1  3.16232    0.5  4.54329    0.25  6.86079    0.125  10.80321    0.0625  17.59893    0.03125  29.46004    0.015625  50.40121    0.0078125  87.75769     Another case where things go bad is if the solution oscillates wildly near some point. The solution may exist at all points, but even a much better numerical method than Euler would need an insanely small step size to approximate the solution with reasonable precision. And computers might not be able to easily handle such a small step size.  In real applications we would not use a simple method such as Euler's. The simplest method that would probably be used in a real application is the standard Runge–Kutta method (see exercises). That is a , meaning that if we halve the interval, the error generally goes down by a factor of 16 (it is fourth order as ).  Choosing the right method to use and the right step size can be very tricky. There are several competing factors to consider.    Computational time: Each step takes computer time. Even if the function is simple to compute, we do it many times over. Large step size means faster computation, but perhaps not the right precision.    Roundoff errors: Computers only compute with a certain number of significant digits. Errors introduced by rounding numbers off during our computations become noticeable when the step size becomes too small relative to the quantities we are working with. So reducing step size may in fact make errors worse. There is a certain optimum step size such that the precision increases as we approach it, but then starts getting worse as we make our step size smaller still. Trouble is: this optimum may be hard to find.    Stability: Certain equations may be numerically unstable. What may happen is that the numbers never seem to stabilize no matter how many times we halve the interval. We may need a ridiculously small interval size, which may not be practical due to roundoff errors or computational time considerations. Such problems are sometimes called stiff . In the worst case, the numerical computations might be giving us bogus numbers that look like a correct answer. Just because the numbers seem to have stabilized after successive halving, does not mean that we must have the right answer.    We have seen just the beginnings of the challenges that appear in real applications. Numerical approximation of solutions to differential equations is an active research area for engineers and mathematicians. For example, the general purpose method used for the ODE solver in Matlab and Octave (as of this writing) is a method that appeared in the literature only in the 1980s.  The method used in Matlab and Octave is a fair bit different from the methods discussed previously. We don’t need to go too much in detail about it, but some information will be helpful. The main difference that will be visible when running these methods is that they are adaptive method. This means that they adjust the step-size based on what the differential equation looks like at a given point. Euler’s method, along with the improved Euler and Runge-Kutta methods, is a fixed step-size method, where the steps are always the same no matter what. Adaptive methods are harder to write and optimize, but can solve many problems faster because the adaptive nature of the method allows them to get similar accuracy to fixed step methods, but at many fewer steps. In the example below, the initial value problem is solved with an Euler’s method and Matlab’s built-in ode45 method. Both of the solutions are plotted along with the actual solution     The Euler’s method takes 60 steps in this computation, but is still not as accurate as the ode45 method, which only takes 45 steps. In addition, the black diamonds, representing the different values computed by ode45 are not evenly spaced, illustrating the adaptive nature of this solver, while the red stars are all evenly spaced in the -direction, as is expected from Euler’s method.   Exercises    Consider , . Use Euler’s method with step size to approximate .    17\/2      Consider the differential equation with . Approximate the solution at using Euler’s method with a step size of and . Compare these values with the actual solution at .     : 17, : 85\/32, Actual:       Consider the differential equation with . Approximate the solution at using Euler’s method with a step size of and .     : 10, :        Consider , .   Use Euler’s method with step sizes to approximate . Solve the equation exactly. Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the interval.    a)  , 0. , 0.5. , .  . b)  c) Error decreases by factors of 0.32, 0.4365, 0.4723.      Let , and . Approximate using Euler’s method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.      Approximate the value of by looking at the initial value problem with and approximating using Euler’s method with a step size of .    2.4883      Let , and .   Approximate using Euler’s method with step sizes 4, 2, and 1. Solve exactly, and compute the errors. Compute the factor by which the errors changed.       Let , and .   Approximate using Euler’s method with step sizes 4, 2, and 1. Guess an exact solution based on part a) and compute the errors.      Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler’s method, start with and compute to try to approximate . What happened? Now halve the interval. Keep halving the interval and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.    For , . , , goes to zero, but oscillates. just goes to zero.      There is a simple way to improve Euler’s method to make it a second order method by doing just one extra step. Consider , , and a step size . What we do is to pretend we compute the next step as in Euler, that is, we start with , we compute a slope , and then look at the point . Instead of letting our new point be , we compute the slope at that point, call it , and then take the average of and , hoping that the average is going to be closer to the actual slope on the interval from to . And we are correct, if we halve the step, the error should go down by a factor of . To summarize, the setup is the same as for regular Euler, except the computation of and .   Consider , .   Use the improved Euler’s method (see above) with step sizes and to approximate . Use Euler’s method with and . Solve exactly, find the exact value of . Compute the errors, and the factors by which the errors changed.    The simplest method used in practice is the . Consider , , and a step size . Everything is the same as in Euler’s method, except the computation of and .       Consider , .   Use Runge–Kutta (see above) with step sizes and to approximate . Use Euler’s method with and . Solve exactly, find the exact value of , and compare.    a)  gives 1.3906. gives 1.3953. b)  gives 1. gives 1.125. c)  Exact: 1.3956. Runge–Kutta matches three decimal places at . Euler needs to go to to get the first two decimals right.     "
},
{
  "id": "numer-section-7",
  "level": "2",
  "url": "numer-section.html#numer-section-7",
  "type": "Checkpoint",
  "number": "1.6.1",
  "title": "",
  "body": "  Solve this equation exactly and show that .    The difference between the actual solution and the approximate solution is called the error. We usually talk about just the size of the error and we do not care much about its sign. The point is, we usually do not know the real solution, so we only have a vague understanding of the error. If we knew the error exactly …what is the point of doing the approximation?   "
},
{
  "id": "numer-section-8",
  "level": "2",
  "url": "numer-section.html#numer-section-8",
  "type": "Table",
  "number": "1.6.2",
  "title": "Euler’s method approximation of <span class=\"process-math\">\\(y(2)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Euler’s method approximation of where of , .     Approximate  Error     1  1.92593  1.07407     0.5  2.20861  0.79139  0.73681    0.25  2.47250  0.52751  0.66656    0.125  2.68034  0.31966  0.60599    0.0625  2.82040  0.17960  0.56184    0.03125  2.90412  0.09588  0.53385    0.015625  2.95035  0.04965  0.51779    0.0078125  2.97472  0.02528  0.50913    "
},
{
  "id": "numer-section-12",
  "level": "2",
  "url": "numer-section.html#numer-section-12",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "",
  "body": "  In the table above, suppose you do not know the error. Take the approximate values of the function in the last two lines, assume that the error goes down by a factor of 2. Can you estimate the error in the last time from this? Does it (approximately) agree with the table? Now do it for the first two rows. Does this agree with the table?    Let us talk a little bit more about the example , . Suppose that instead of the value we wish to find . The results of this effort are listed in for successive halvings of . What is going on here? Well, you should solve the equation exactly and you will notice that the solution does not exist at . In fact, the solution goes to infinity when you approach .   "
},
{
  "id": "numer-section-13",
  "level": "2",
  "url": "numer-section.html#numer-section-13",
  "type": "Table",
  "number": "1.6.4",
  "title": "Attempts to use Euler’s to approximate <span class=\"process-math\">\\(y(3)\\)<\/span> where of <span class=\"process-math\">\\(y'=\\nicefrac{y^2}{3}\\text{,}\\)<\/span> <span class=\"process-math\">\\(y(0)=1\\text{.}\\)<\/span>",
  "body": " Attempts to use Euler’s to approximate where of , .     Approximate    1  3.16232    0.5  4.54329    0.25  6.86079    0.125  10.80321    0.0625  17.59893    0.03125  29.46004    0.015625  50.40121    0.0078125  87.75769    "
},
{
  "id": "numer-section-21-2",
  "level": "2",
  "url": "numer-section.html#numer-section-21-2",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": "  Consider , . Use Euler’s method with step size to approximate .    17\/2   "
},
{
  "id": "numer-section-21-3",
  "level": "2",
  "url": "numer-section.html#numer-section-21-3",
  "type": "Exercise",
  "number": "1.6.2",
  "title": "",
  "body": "  Consider the differential equation with . Approximate the solution at using Euler’s method with a step size of and . Compare these values with the actual solution at .     : 17, : 85\/32, Actual:    "
},
{
  "id": "numer-section-21-4",
  "level": "2",
  "url": "numer-section.html#numer-section-21-4",
  "type": "Exercise",
  "number": "1.6.3",
  "title": "",
  "body": "  Consider the differential equation with . Approximate the solution at using Euler’s method with a step size of and .     : 10, :    "
},
{
  "id": "numer-section-21-5",
  "level": "2",
  "url": "numer-section.html#numer-section-21-5",
  "type": "Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Consider , .   Use Euler’s method with step sizes to approximate . Solve the equation exactly. Describe what happens to the errors for each you used. That is, find the factor by which the error changed each time you halved the interval.    a)  , 0. , 0.5. , .  . b)  c) Error decreases by factors of 0.32, 0.4365, 0.4723.   "
},
{
  "id": "numer-section-21-6",
  "level": "2",
  "url": "numer-section.html#numer-section-21-6",
  "type": "Exercise",
  "number": "1.6.5",
  "title": "",
  "body": "  Let , and . Approximate using Euler’s method with step sizes 1, 0.5, 0.25. Use a calculator and compute up to 4 decimal digits.   "
},
{
  "id": "numer-section-21-7",
  "level": "2",
  "url": "numer-section.html#numer-section-21-7",
  "type": "Exercise",
  "number": "1.6.6",
  "title": "",
  "body": "  Approximate the value of by looking at the initial value problem with and approximating using Euler’s method with a step size of .    2.4883   "
},
{
  "id": "numer-section-21-8",
  "level": "2",
  "url": "numer-section.html#numer-section-21-8",
  "type": "Exercise",
  "number": "1.6.7",
  "title": "",
  "body": "  Let , and .   Approximate using Euler’s method with step sizes 4, 2, and 1. Solve exactly, and compute the errors. Compute the factor by which the errors changed.   "
},
{
  "id": "numer-section-21-9",
  "level": "2",
  "url": "numer-section.html#numer-section-21-9",
  "type": "Exercise",
  "number": "1.6.8",
  "title": "",
  "body": "  Let , and .   Approximate using Euler’s method with step sizes 4, 2, and 1. Guess an exact solution based on part a) and compute the errors.   "
},
{
  "id": "numer-section-21-10",
  "level": "2",
  "url": "numer-section.html#numer-section-21-10",
  "type": "Exercise",
  "number": "1.6.9",
  "title": "",
  "body": "  Example of numerical instability: Take , . We know that the solution should decay to zero as grows. Using Euler’s method, start with and compute to try to approximate . What happened? Now halve the interval. Keep halving the interval and approximating until the numbers you are getting start to stabilize (that is, until they start going towards zero). Note: You might want to use a calculator.    For , . , , goes to zero, but oscillates. just goes to zero.   "
},
{
  "id": "numer-section-21-11",
  "level": "2",
  "url": "numer-section.html#numer-section-21-11",
  "type": "Exercise",
  "number": "1.6.10",
  "title": "",
  "body": "  There is a simple way to improve Euler’s method to make it a second order method by doing just one extra step. Consider , , and a step size . What we do is to pretend we compute the next step as in Euler, that is, we start with , we compute a slope , and then look at the point . Instead of letting our new point be , we compute the slope at that point, call it , and then take the average of and , hoping that the average is going to be closer to the actual slope on the interval from to . And we are correct, if we halve the step, the error should go down by a factor of . To summarize, the setup is the same as for regular Euler, except the computation of and .   Consider , .   Use the improved Euler’s method (see above) with step sizes and to approximate . Use Euler’s method with and . Solve exactly, find the exact value of . Compute the errors, and the factors by which the errors changed.    The simplest method used in practice is the . Consider , , and a step size . Everything is the same as in Euler’s method, except the computation of and .    "
},
{
  "id": "numer-section-21-12",
  "level": "2",
  "url": "numer-section.html#numer-section-21-12",
  "type": "Exercise",
  "number": "1.6.11",
  "title": "",
  "body": "  Consider , .   Use Runge–Kutta (see above) with step sizes and to approximate . Use Euler’s method with and . Solve exactly, find the exact value of , and compare.    a)  gives 1.3906. gives 1.3953. b)  gives 1. gives 1.125. c)  Exact: 1.3956. Runge–Kutta matches three decimal places at . Euler needs to go to to get the first two decimals right.   "
},
{
  "id": "auteq-section",
  "level": "1",
  "url": "auteq-section.html",
  "type": "Section",
  "number": "1.7",
  "title": "Autonomous equations",
  "body": " Autonomous equations   autoIntro   An equation of the form where the derivative of solutions depends only on (the dependent variable) is called an autonomous equation . If we think of as time, the naming comes from the fact that the equation is independent of time.  We return to the cooling coffee problem (). says where is the temperature, is time, is some positive constant, and is the ambient temperature. See for an example with and .  Note the solution (in the figure ). We call these constant solutions the equilibrium solutions . The points on the -axis where are called critical points of the differential equation . The point is a critical point. In fact, each critical point corresponds to an equilibrium solution.  Now, we want to determine what happens for other values of that are not . Based on the existence and uniqueness theorem in for first order differential equations, the fact that and its partial derivative in , , are continuous everywhere gives that solution curves can not cross. This means that since we know is a solution, if a solution starts below , it must always stay there, and solutions that start above will also stay there. For more information about what the solutions do, we’ll need to look back at the equation and some sample solution curves.  Note also, by looking at the graph, that the solution is in that small perturbations in do not lead to substantially different solutions as grows. If we change the initial condition a little bit, then as we get . We call such a critical point asymptotically stable . In this simple example, it turns out that all solutions in fact go to as . If there is a critical point where all nearby solutions move away from the critical point, we say it is unstable . If some nearby solutions go towards the critical point, and some others move away, then we say it is semistable . The final option is that solutions nearby neither move towards nor away from the critical point, and these critical points are called stable .  The last of these options may seem strange at first, and that is because stable critical points are not possible for autonomous equations with one unknown function. If a solution does not move towards or away from a critical point, that means it doesn’t move anywhere, and so is a critical point on its own. However, when we get to autonomous systems in and , we will see that in two dimensions, this is possible (think of a circle that does not spiral into or away from the center point).    Consider now the  for some positive and . This equation is commonly used to model population if we know the limiting population , that is the maximum sustainable population. The logistic equation leads to less catastrophic predictions on world population than . In the real world there is no such thing as negative population, but we will still consider negative for the purposes of the math.  See for an example, . There are two critical points, and . The critical point at is asymptotically stable, while the critical point at is unstable.  It is not necessary to find the exact solutions to talk about the long term behavior of the solutions. From the slope field above of , we see that Here DNE means From just looking at the slope field we cannot quite decide what happens if . It could be that the solution does not exist for all the way to . Think of the equation ; we have seen that solutions only exist for some finite period of time. Same can happen here. In our example equation above it turns out that the solution does not exist for all time, but to see that we would have to solve the equation. In any case, the solution does go to , but it may get there rather quickly.  If we are interested only in the long term behavior of the solution, we would be doing unnecessary work if we solved the equation exactly. We could draw the slope field, but it is easier to just look at the or , which is a simple way to visualize the behavior of autonomous equations. The phase line for this equation is visible in . In this case there is one dependent variable . We draw the -axis, we mark all the critical points, and then we draw arrows in between. Since is the dependent variable we draw the axis vertically, as it appears in the slope field diagrams above. If , we draw an up arrow. If , we draw a down arrow. To figure this out, we could just plug in some between the critical points, will have the same sign at all between two critical points as long is continuous. For example, , so for , and the arrow above is a down arrow. Next, , so whenever , and the arrow points up. Finally, so when , and the arrow points down.    Armed with the phase diagram, it is easy to sketch the solutions approximately: As time moves from left to right, the graph of a solution goes up if the arrow is up, and it goes down if the arrow is down.    Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs to see if you are getting the types of curves that match the solutions.    Once we draw the phase diagram, we can use it to classify critical points as asymptotically stable, semistable, or unstable based on whether the arrows point into or away from the critical point on each side. Two arrows in means that the critical point is asymptotically stable, two arrows away means unstable, and one in one out means semistable.        Consider the autonomous differential equation Find all equilibrium solutions for this equation, and determine their stability. Draw a phase line and use this information to sketch some approximate solution curves.    This equation is already in factored form. This makes it simple to determine the equilibrium solutions as , , and . In order to determine the stability of each critical point and draw the phase line, we need to plug in values surrounding these points to . We can see that This lets us draw the phase line and determine the stability of each critical point. Thus, we see that is an unstable critical point, is asymptotically stable, is semistable, and is unstable. A set of sample solution curves also validates these conclusions.        Concavity of Solutions  We can tell from the phase line for an autonomous equation when the solution will be increasing or decreasing. Is there any more we can learn about the shape of these graphs? There is, and it comes from looking for the concavity, which is determined by the second derivative.  We can compute the second derivative of our solution by noticing that . This function can be differentiated by the chain rule So, the solution is concave up if is positive, and concave down if that is negative. Phrased another way, the solution is concave up if and have the same sign, and it is concave down if and have opposite signs.  Let’s see what this looks like in action. Take the logistic equation , whose solutions are plotted in . shows the graph of as a function of for this scenario. When do and have the same sign? Well, this happens when is both positive and increasing, or negative and decreasing. This happens between and the vertex, as well as for . The vertex here is at , and so we conlude that the solution should be concave up when is on the intervals and , and be concave down otherwise. Looking back at , this is exactly what we observe. All of the solutions between and seem to flip over to be concave down when crosses .    The same can be seen for solutions to , even though we can’t compute the extreme values explicitly. shows the graph of vs. for this situation. Between each pair of equilibrium solutions there is a critical point of (in the Calculus 1 sense) where the derivative is zero, and at this point, the derivative changes sign, and since the function value does not change sign, the concavity of the solution to the differential equation flips at this point. Comparing this graph and these points where concavity shifts with the solutions drawn in again validates these results.    Exercises     Consider .   Draw the phase diagram, find the critical points, and mark them asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  0 is semistable c)  0      Consider .   Draw the phase diagram for . On this interval mark the critical points asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  are critical points. odd is asymptotically stable, even is unstable. c)        Let .   Sketch the phase diagram and find critical points. Classify the critical points. If , then find .      Let . Sketch a phase diagram for this differential equation. Find and classify all critical points. If , what will happen to the solution as ?     is unstable, is asymptotically stable. Tends towards .      Find and classify all equilibrium solutions for the differential equation .     is semistable, is unstable, is asymptotically stable, is unstable.      Let . Sketch a phase diagram for this differential equation. Find and classify all critical points. If , what will happen to the solution as ?     is unstable, is semistable. Tends towards .      Consider the DE . Find and classify all equilibrium solutions of this DE. Then sketch a representative selection of solution curves.     is unstable, is semistable.      Let .   (2) Find and classify all critical points. Find given any initial condition.      Suppose is positive for , it is zero when and , and it is negative for all other .   Draw the phase diagram for , find the critical points, and mark them asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  is asymptotically stable, is unstable. c)  Tends to 1.      Suppose for two numbers .   Find the critical points, and classify them.  For b), c), d), find based on the phase diagram.   (3) , , .      A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .   Write down the differential equation. Supposing , that is, some people are infected at time , what is . Does the solution to part b) agree with your intuition? Why or why not?    a)  b)  S c)  Yes, everyone gets it.     "
},
{
  "id": "subsec-autoIntro-13",
  "level": "2",
  "url": "auteq-section.html#subsec-autoIntro-13",
  "type": "Checkpoint",
  "number": "1.7.1",
  "title": "",
  "body": "  Try sketching a few solutions simply from looking at the phase diagram. Check with the preceding graphs to see if you are getting the types of curves that match the solutions.    Once we draw the phase diagram, we can use it to classify critical points as asymptotically stable, semistable, or unstable based on whether the arrows point into or away from the critical point on each side. Two arrows in means that the critical point is asymptotically stable, two arrows away means unstable, and one in one out means semistable.   "
},
{
  "id": "subsec-autoIntro-14",
  "level": "2",
  "url": "auteq-section.html#subsec-autoIntro-14",
  "type": "Example",
  "number": "1.7.2",
  "title": ".",
  "body": "    Consider the autonomous differential equation Find all equilibrium solutions for this equation, and determine their stability. Draw a phase line and use this information to sketch some approximate solution curves.    This equation is already in factored form. This makes it simple to determine the equilibrium solutions as , , and . In order to determine the stability of each critical point and draw the phase line, we need to plug in values surrounding these points to . We can see that This lets us draw the phase line and determine the stability of each critical point. Thus, we see that is an unstable critical point, is asymptotically stable, is semistable, and is unstable. A set of sample solution curves also validates these conclusions.     "
},
{
  "id": "auteq-section-4-2",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider .   Draw the phase diagram, find the critical points, and mark them asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  0 is semistable c)  0   "
},
{
  "id": "auteq-section-4-3",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Consider .   Draw the phase diagram for . On this interval mark the critical points asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  are critical points. odd is asymptotically stable, even is unstable. c)     "
},
{
  "id": "auteq-section-4-4",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Let .   Sketch the phase diagram and find critical points. Classify the critical points. If , then find .   "
},
{
  "id": "auteq-section-4-5",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Let . Sketch a phase diagram for this differential equation. Find and classify all critical points. If , what will happen to the solution as ?     is unstable, is asymptotically stable. Tends towards .   "
},
{
  "id": "auteq-section-4-6",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Find and classify all equilibrium solutions for the differential equation .     is semistable, is unstable, is asymptotically stable, is unstable.   "
},
{
  "id": "auteq-section-4-7",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let . Sketch a phase diagram for this differential equation. Find and classify all critical points. If , what will happen to the solution as ?     is unstable, is semistable. Tends towards .   "
},
{
  "id": "auteq-section-4-8",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Consider the DE . Find and classify all equilibrium solutions of this DE. Then sketch a representative selection of solution curves.     is unstable, is semistable.   "
},
{
  "id": "auteq-section-4-9",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Let .   (2) Find and classify all critical points. Find given any initial condition.   "
},
{
  "id": "auteq-section-4-10",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Suppose is positive for , it is zero when and , and it is negative for all other .   Draw the phase diagram for , find the critical points, and mark them asymptotically stable, semistable, or unstable. Sketch typical solutions of the equation. Find for the solution with the initial condition .    a)  is asymptotically stable, is unstable. c)  Tends to 1.   "
},
{
  "id": "auteq-section-4-11",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Suppose for two numbers .   Find the critical points, and classify them.  For b), c), d), find based on the phase diagram.   (3) , , .   "
},
{
  "id": "auteq-section-4-12",
  "level": "2",
  "url": "auteq-section.html#auteq-section-4-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  A disease is spreading through the country. Let be the number of people infected. Let the constant be the number of people susceptible to infection. The infection rate is proportional to the product of already infected people, , and the number of susceptible but uninfected people, .   Write down the differential equation. Supposing , that is, some people are infected at time , what is . Does the solution to part b) agree with your intuition? Why or why not?    a)  b)  S c)  Yes, everyone gets it.   "
},
{
  "id": "bifDiag-section",
  "level": "1",
  "url": "bifDiag-section.html",
  "type": "Section",
  "number": "1.8",
  "title": "Bifurcation diagrams",
  "body": " Bifurcation diagrams  An extension of the topic of autonomous equation is autonomous equations with parameter . The idea is that we have a differential equation that has no explicit dependence on time, but does have a dependence on an outside parameter, which is a constant set by the physical situation. In terms of physical problems, this parameter will tend to be something that we can adjust to change how the differential equation behaves. For example, in a logistic differential equation either the or the (or both) could be adjustable parameters. For a given value of the parameter, the differential equation behaves like a standard autonomous differential equation, but we can get different properties of this equation for different values of the parameter.   An autonomous equation with parameter  is a differential equation of the form where, for every value of , is a function of the single variable .  Later, we will want to view as a two-variable function of and , but for now, we want to think about it as a function of just for a fixed value of . We want to be able to analyze what happens to this equation for different values of . Since it is an autonomous equation, we can do this using phase lines. This will be easiest to see through an example.      Consider the differential equation which fits the description of an autonomous equation with parameter . Describe what happens in this differential equation for , , and .    We can draw a phase line for , and .    It is clear that something happens with this equation between and . We go from having only one equilibrium solution at to having three equilibrium solutions at . In addition, the solution at is unstable for , while it is asymptotically stable for . If we want to figure out when this change happens, we’ll need a better way to analyze this problem.    How can we better approach this problem? The idea is to think about when the solution to the differential equation will be increasing or decreasing as a function of the two variables and . Based on the structure of the differential equation, the solution will be increasing when the function is positive and will be decreasing when is negative. Since a phase line is a plot of this information for a given value of , we essentially want to plot all of these phase lines on a two-dimensional graph. This graph is called a bifurcation diagram . shows a bifurcation diagram for the example .    Within this picture, we can see all of our phase lines from before, because at any value of , taking the vertical slice of this graph at that value, we get the phase line. If we want to consider , then we can look above the horizontal coordinate , and that will give us the phase line for . The same goes for any other value of we want to consider. For instance, we can also see that for any , there will be one equilibrium solution, and for there are three equilibrium solutions, indicated by the three black curves above each of those values.  From this, we can see that the point at which the behavior changes is . Thus, for this problem is called the . This is defined to be the value of the parameter for which the overall behavior of the equation changes. This can be a change in the number of equilibrium solutions, the stability of these equilibrium solutions, or both. For this particular example, we have both of these. We go from 1 equilibrium solution to 3, and the solution at changes in stability. This type of bifurcation is called a pitchfork bifurcation based on the shape of the equilibrium solutions near the bifurcation point.  Another example of a bifurcation of a different form can be seen in the example of the logistic equation with harvesting. Suppose an alien race really likes to eat humans. They keep a planet with humans on it and harvest the humans at a rate of million humans per year. Suppose is the number of humans in millions on the planet and is time in years. Let be the limiting population when no harvesting is done. The number is a constant depending on how fast humans multiply. Our equation becomes In this setup, M and k are fixed values, and the parameter that is being adjusted for this equation is . We expand the right-hand side and set it to zero. Solving for the critical points using the quadratic formula, let us call them and , we get     Sketch a phase diagram for different possibilities. Note that these possibilities are , or , or and both complex (i.e. no real solutions). Hint: Fix some simple and and then vary .        For example, let and . What happens for different values of in this situation?    When , then and are distinct and positive. The slope field we get is in . As long as the population starts above , which is approximately 1.55 million, then the population will not die out. It will in fact tend towards million. If ever some catastrophe happens and the population drops below , humans will die out, and the fast food restaurant serving them will go out of business.    When , then . There is only one critical point and it is semistable. When the population starts above 4 million it will tend towards 4 million. If it ever drops below 4 million, humans will die out on the planet. This scenario is not one that we (as the human fast food proprietor) want to be in. A small perturbation of the equilibrium state and we are out of business. There is no room for error. See .  Finally if we are harvesting at 2 million humans per year, there are no critical points. The population will always plummet towards zero, no matter how well stocked the planet starts. See .    All of these can also be seen from the bifurcation diagram, which is drawn in . The values and discussed above represent the upper and lower branches of the parabola in the figure. For any , there are no equilibrium solutions and the phase line is entirely decreasing, meaning the solution will converge to zero no matter what. For , there are two equilibrium solutions, with the top one asymptotically stable and the bottom one unstable. At is where the bifurcation point occurs for this example. This is an example of a saddle-node bifurcation, as the two equilibrium solutions collide with each other at the bifurcation point and disappear.    Another way to visualize this situation is by plotting the function for the different values of . The places where this function is zero give the equilibrium solutions, and we can determine by looking for where the zeros of this function change behavior. For this particular example, the graphs of are drawn in .      The values of we are looking for are those where the number and types of zeros change for the function . In this figure, we see that for , the parabola crosses the axis twice, resulting in two zeros and two equilibrium solutions. For , there is one (double) root, and for , there are no equilibrium solutions, and the function is always negative. Since the number of roots\/zeros changes at , that means that is the bifurcation point for this equation. We can also see this from the equation, since the equilibrium solutions are determined by the values of where which can be found by the quadratic formula Roots to this equation do not exist (because they are complex) if , or .   Exercises    Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (Similar to earlier example with replaced with ).   Construct the differential equation. Show that if , then the equation is still logistic. What happens when ?    a)  b) It changes the effective M c) Population always decreases.      Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.   (2) Find the differential equation for . What is the new limiting population?      Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  . The solution at changes stability.      Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  . Two new equilibrium solutions are created.      Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  , and both change stability.     "
},
{
  "id": "bifDiag-section-5",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-5",
  "type": "Example",
  "number": "1.8.1",
  "title": ".",
  "body": "    Consider the differential equation which fits the description of an autonomous equation with parameter . Describe what happens in this differential equation for , , and .    We can draw a phase line for , and .    It is clear that something happens with this equation between and . We go from having only one equilibrium solution at to having three equilibrium solutions at . In addition, the solution at is unstable for , while it is asymptotically stable for . If we want to figure out when this change happens, we’ll need a better way to analyze this problem.   "
},
{
  "id": "bifDiag-section-10",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-10",
  "type": "Checkpoint",
  "number": "1.8.2",
  "title": "",
  "body": "  Sketch a phase diagram for different possibilities. Note that these possibilities are , or , or and both complex (i.e. no real solutions). Hint: Fix some simple and and then vary .   "
},
{
  "id": "bifDiag-section-11",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-11",
  "type": "Example",
  "number": "1.8.3",
  "title": ".",
  "body": "    For example, let and . What happens for different values of in this situation?    When , then and are distinct and positive. The slope field we get is in . As long as the population starts above , which is approximately 1.55 million, then the population will not die out. It will in fact tend towards million. If ever some catastrophe happens and the population drops below , humans will die out, and the fast food restaurant serving them will go out of business.    When , then . There is only one critical point and it is semistable. When the population starts above 4 million it will tend towards 4 million. If it ever drops below 4 million, humans will die out on the planet. This scenario is not one that we (as the human fast food proprietor) want to be in. A small perturbation of the equilibrium state and we are out of business. There is no room for error. See .  Finally if we are harvesting at 2 million humans per year, there are no critical points. The population will always plummet towards zero, no matter how well stocked the planet starts. See .    All of these can also be seen from the bifurcation diagram, which is drawn in . The values and discussed above represent the upper and lower branches of the parabola in the figure. For any , there are no equilibrium solutions and the phase line is entirely decreasing, meaning the solution will converge to zero no matter what. For , there are two equilibrium solutions, with the top one asymptotically stable and the bottom one unstable. At is where the bifurcation point occurs for this example. This is an example of a saddle-node bifurcation, as the two equilibrium solutions collide with each other at the bifurcation point and disappear.    Another way to visualize this situation is by plotting the function for the different values of . The places where this function is zero give the equilibrium solutions, and we can determine by looking for where the zeros of this function change behavior. For this particular example, the graphs of are drawn in .     "
},
{
  "id": "bifDiag-section-13-2",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-13-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  Start with the logistic equation . Suppose we modify our harvesting. That is we will only harvest an amount proportional to current population. In other words, we harvest per unit of time for some (Similar to earlier example with replaced with ).   Construct the differential equation. Show that if , then the equation is still logistic. What happens when ?    a)  b) It changes the effective M c) Population always decreases.   "
},
{
  "id": "bifDiag-section-13-3",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-13-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "  Assume that a population of fish in a lake satisfies . Now suppose that fish are continually added at fish per unit of time.   (2) Find the differential equation for . What is the new limiting population?   "
},
{
  "id": "bifDiag-section-13-4",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-13-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": "  Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  . The solution at changes stability.   "
},
{
  "id": "bifDiag-section-13-5",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-13-5",
  "type": "Exercise",
  "number": "1.8.4",
  "title": "",
  "body": "  Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  . Two new equilibrium solutions are created.   "
},
{
  "id": "bifDiag-section-13-6",
  "level": "2",
  "url": "bifDiag-section.html#bifDiag-section-13-6",
  "type": "Exercise",
  "number": "1.8.5",
  "title": "",
  "body": "  Consider the differential equation with parameter given by .   Sketch a phase diagram for this differential equation with , , and . Draw a bifurcation diagram for this differential equation with parameter. What is the bifurcation point for this equation? What changes when passes over the bifurcation point?    c)  , and both change stability.   "
},
{
  "id": "exact-section",
  "level": "1",
  "url": "exact-section.html",
  "type": "Section",
  "number": "1.9",
  "title": "Exact equations",
  "body": " Exact equations   exactIntro  Another type of equation that comes up quite often in physics and engineering is an . Suppose is a function of two variables, which we call the . The naming should suggest potential energy, or electric potential. Exact equations and potential functions appear when there is a conservation law at play, such as conservation of energy. Let us make up a simple example. Let    3.25in  We are interested in the lines of constant energy, that is lines where the energy is conserved; we want curves where , for some constant , since represents the energy of the system. In our example, the curves are circles. See .  We take the of : For convenience, we will make use of the notation of and . In our example, We apply the total derivative to , to find the differential equation . The differential equation we obtain in such a way has the form    An equation of the form is called exact if it was obtained as for some potential function .  In our simple example, we obtain the equation Since we obtained this equation by differentiating , the equation is exact. We often wish to solve for in terms of . In our example,   An interpretation of the setup is that at each point in the plane is a vector, that is, a direction and a magnitude. As and are functions of , we have a . The particular vector field that comes from an exact equation is a so-called , that is, a vector field that comes with a potential function , such that This is something that you may have seen in your Calculus 3 course, and if so, the process for solving exact equations is basically identical to the process of finding a potential function for a conservative vector field. The physical interpretation of conservative vector fields is as follows. Let be a path in the plane starting at and ending at . If we think of as force, then the work required to move along is That is, the work done only depends on endpoints, that is where we start and where we end. For example, suppose is gravitational potential. The derivative of given by is the gravitational force. What we are saying is that the work required to move a heavy box from the ground floor to the roof only depends on the change in potential energy. That is, the work done is the same no matter what path we took; if we took the stairs or the elevator. Although if we took the elevator, the elevator is doing the work for us. The curves are those where no work need be done, such as the heavy box sliding along without accelerating or breaking on a perfectly flat roof, on a cart with incredibly well oiled wheels. Effectively, an exact equation is a conservative vector field, and the implicit solution of this equation is the potential function.    Solving exact equations  Now you, the reader, should ask: Where did we solve a differential equation? Well, in applications we generally know and , but we do not know . That is, we may have just started with , or perhaps even It is up to us to find some potential that works. Many different will work; adding a constant to does not change the equation. Once we have a potential function , the equation gives an implicit solution of the ODE.      Let us find the general solution to . Forget we knew what was.    If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the , though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.      Why did we not need to add a constant of integration when integrating ? Add a constant of integration, say , and see what you get. What is the difference from what we got above, and why does it not matter?    In the previous example, you may have also noticed that the equation is separable, and we could have solved it via that method as well. This is not a coincidence, as every separable equation is exact (see for the details) but there are many exact equations that are not separable, which we will see throughout the examples here.    The procedure, once we know that the equation is exact, is:    Integrate in resulting in .    Differentiate this in , and set that equal to , so that we may find by integration.    The procedure can also be done by first integrating in and then differentiating in . Pretty easy huh? Let’s try this again.      Consider now .    OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.    Is there an easier way to check for the existence of , other than failing in trying to find it? Turns out there is. Suppose and . Then as long as the second derivatives are continuous, Let us state it as a theorem. Usually this is called the Poincaré Lemma  Named for the French polymath Jules Henri Poincaré (1854–1912). .   Poincaré If and are continuously differentiable functions of , and , then near any point there is a function such that and .  The theorem doesn’t give us a global defined everywhere. In general, we can only find the potential locally, near some initial point. By this time, we have come to expect this from differential equations.  Let us return to the example above where and . Notice and , which are clearly not equal. The equation is not exact.      Solve     We write the equation as so and . Then The equation is exact. Integrating in , we find Differentiating in and setting to , we find So , and will work. Take . We wish to solve . First let us find . As then . Therefore , so . Now we solve for to get         Solve     We leave to the reader to check that .  This vector field is not conservative if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  If we think back to the theorem, it does not guarantee such a function anyway. It only guarantees a potential function locally, that is only in some region near the initial point. As we start at the point . Considering and integrating in or in , we find The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note that the solution only exists for .          Solve     The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of vanishes. You can also see that our solution is not valid in that case. However, one could in that case try to solve for in terms of starting from the implicit solution . The solution is somewhat messy and we leave it as implicit.      Integrating factors  Sometimes an equation is not exact, but it can be made exact by multiplying with a function . That is, perhaps for some nonzero function , is exact. Any solution to this new equation is also a solution to .  In fact, a linear equation is always such an equation. Let be the integrating factor for a linear equation. Multiply the equation by and write it in the form of . Then , so , while , so . In other words, we have an exact equation. Integrating factors for linear functions are just a special case of integrating factors for exact equations.  But how do we find the integrating factor ? Well, given an equation  should be a function such that Therefore, At first it may seem we replaced one differential equation by another. True, but all hope is not lost.  A strategy that often works is to look for a that is a function of alone, or a function of alone. If is a function of alone, that is , then we write instead of , and is just zero. Then In particular, ought to be a function of alone (not depend on ). If so, then we have a linear equation Letting , we solve using the standard integrating factor method, to find . The constant in the solution is not relevant, we need any nonzero solution, so we take . Then is the integrating factor.  Similarly we could try a function of the form . Then In particular, ought to be a function of alone. If so, then we have a linear equation Letting , we find . We take . So is the integrating factor.      Solve     Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor Assuming that we want to look at , we multiply our given equation by to obtain which is an exact equation that we solved in . The solution was If, instead, we had wanted a solution with , we would have needed to multiply by , which would have given a very similar result.        Solve     First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.      Exercises    Solve the following exact equations, implicit general solutions will suffice:   (2)        a)  b)  c)  d)        Solve the following exact equations, implicit general solutions will suffice:   (2)          Solve the differential equation            Solve the differential equation            Solve the differential equation with .           Solve the differential equation with . Write this as an explicit function and determine the interval of values where the solution is valid.     , valid on       Solve the differential equation with . Write this as an explicit function and determine the interval of values where the solution is valid.     , valid on       Find the integrating factor for the following equations making them into exact equations. You can either use the formulas in this section or guess what the integrating factor should be.   (2)        a)  b)  c)  d)         Find the integrating factor for the following equations making them into exact equations:   (2)          Suppose you have an equation of the form: .   Show it is exact. Find the form of the potential function in terms of and .    a) Yes. b)        Suppose that we have the equation .   Is this equation exact? Find the general solution using a definite integral.    a)  Yes. b)        Find the potential function of the exact equation in two different ways.   Integrate in terms of and then differentiate in and set to . Integrate in terms of and then differentiate in and set to .            A function is said to be a if .   Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called function such that and .  Verify that the following are harmonic and find the corresponding harmonic conjugates :   (3)       a)  and , and the difference is zero, so they are equal. b)  (i)  (ii)  (iii)           Show that every separable equation can be written as an exact equation, and verify that it is indeed exact. Using this rewrite as an exact equation, solve it and verify that the solution is the same as it was in .    "
},
{
  "id": "solving-exact-equations-3",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-3",
  "type": "Example",
  "number": "1.9.1",
  "title": ".",
  "body": "    Let us find the general solution to . Forget we knew what was.    If we know that this is an exact equation, we start looking for a potential function . We have and . If exists, it must be such that . Integrate in the variable to find for some function . The function is the , though it is only constant as far as is concerned, and may still depend on . Now differentiate in and set it equal to , which is what is supposed to be: Integrating, we find . We could add a constant of integration if we wanted to, but there is no need. We found . Next for a constant , we solve for in terms of . In this case, we obtain as we did before.   "
},
{
  "id": "solving-exact-equations-4",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-4",
  "type": "Checkpoint",
  "number": "1.9.2",
  "title": "",
  "body": "  Why did we not need to add a constant of integration when integrating ? Add a constant of integration, say , and see what you get. What is the difference from what we got above, and why does it not matter?    In the previous example, you may have also noticed that the equation is separable, and we could have solved it via that method as well. This is not a coincidence, as every separable equation is exact (see for the details) but there are many exact equations that are not separable, which we will see throughout the examples here.   "
},
{
  "id": "solving-exact-equations-8",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-8",
  "type": "Example",
  "number": "1.9.3",
  "title": ".",
  "body": "    Consider now .    OK, so and . We try to proceed as before. Suppose exists. Then . We integrate: for some function . Differentiate in and set equal to : But there is no way to satisfy this requirement! The function cannot be written as plus a function of . The equation is not exact; no potential function exists.   "
},
{
  "id": "solving-exact-equations-13",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-13",
  "type": "Example",
  "number": "1.9.4",
  "title": ".",
  "body": "    Solve     We write the equation as so and . Then The equation is exact. Integrating in , we find Differentiating in and setting to , we find So , and will work. Take . We wish to solve . First let us find . As then . Therefore , so . Now we solve for to get    "
},
{
  "id": "solving-exact-equations-14",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-14",
  "type": "Example",
  "number": "1.9.5",
  "title": ".",
  "body": "    Solve     We leave to the reader to check that .  This vector field is not conservative if considered as a vector field of the entire plane minus the origin. The problem is that if the curve is a circle around the origin, say starting at and ending at going counterclockwise, then if existed we would expect That is nonsense! We leave the computation of the path integral to the interested reader, or you can consult your multivariable calculus textbook. So there is no potential function defined everywhere outside the origin .  If we think back to the theorem, it does not guarantee such a function anyway. It only guarantees a potential function locally, that is only in some region near the initial point. As we start at the point . Considering and integrating in or in , we find The implicit solution is . Solving, . That is, the solution is a straight line. Solving gives us that , and so is the desired solution. See , and note that the solution only exists for .     "
},
{
  "id": "solving-exact-equations-15",
  "level": "2",
  "url": "exact-section.html#solving-exact-equations-15",
  "type": "Example",
  "number": "1.9.6",
  "title": ".",
  "body": "    Solve     The reader should check that this equation is exact. Let and . We follow the procedure for exact equations and Therefore or and . We try to solve . We easily solve for and then just take the square root: When , the term in front of vanishes. You can also see that our solution is not valid in that case. However, one could in that case try to solve for in terms of starting from the implicit solution . The solution is somewhat messy and we leave it as implicit.   "
},
{
  "id": "integrating-factors-7",
  "level": "2",
  "url": "exact-section.html#integrating-factors-7",
  "type": "Example",
  "number": "1.9.7",
  "title": ".",
  "body": "    Solve     Let and . Compute As this is not zero, the equation is not exact. We notice is a function of alone. We compute the integrating factor Assuming that we want to look at , we multiply our given equation by to obtain which is an exact equation that we solved in . The solution was If, instead, we had wanted a solution with , we would have needed to multiply by , which would have given a very similar result.   "
},
{
  "id": "integrating-factors-8",
  "level": "2",
  "url": "exact-section.html#integrating-factors-8",
  "type": "Example",
  "number": "1.9.8",
  "title": ".",
  "body": "    Solve     First compute As this is not zero, the equation is not exact. We observe is a function of alone. We compute the integrating factor Therefore we look at the exact equation The reader should double check that this equation is exact. We follow the procedure for exact equations and Consequently or . Thus . It is not possible to solve for in terms of elementary functions, so let us be content with the implicit solution: We are looking for the general solution and we divided by above. We should check what happens when , as the equation itself makes perfect sense in that case. We plug in to find the equation is satisfied. So is also a solution.   "
},
{
  "id": "exact-section-5-2",
  "level": "2",
  "url": "exact-section.html#exact-section-5-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:   (2)        a)  b)  c)  d)     "
},
{
  "id": "exact-section-5-3",
  "level": "2",
  "url": "exact-section.html#exact-section-5-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Solve the following exact equations, implicit general solutions will suffice:   (2)       "
},
{
  "id": "exact-section-5-4",
  "level": "2",
  "url": "exact-section.html#exact-section-5-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Solve the differential equation         "
},
{
  "id": "exact-section-5-5",
  "level": "2",
  "url": "exact-section.html#exact-section-5-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Solve the differential equation         "
},
{
  "id": "exact-section-5-6",
  "level": "2",
  "url": "exact-section.html#exact-section-5-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Solve the differential equation with .        "
},
{
  "id": "exact-section-5-7",
  "level": "2",
  "url": "exact-section.html#exact-section-5-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Solve the differential equation with . Write this as an explicit function and determine the interval of values where the solution is valid.     , valid on    "
},
{
  "id": "exact-section-5-8",
  "level": "2",
  "url": "exact-section.html#exact-section-5-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Solve the differential equation with . Write this as an explicit function and determine the interval of values where the solution is valid.     , valid on    "
},
{
  "id": "exact-section-5-9",
  "level": "2",
  "url": "exact-section.html#exact-section-5-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Find the integrating factor for the following equations making them into exact equations. You can either use the formulas in this section or guess what the integrating factor should be.   (2)        a)  b)  c)  d)     "
},
{
  "id": "exact-section-5-10",
  "level": "2",
  "url": "exact-section.html#exact-section-5-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Find the integrating factor for the following equations making them into exact equations:   (2)       "
},
{
  "id": "exact-section-5-11",
  "level": "2",
  "url": "exact-section.html#exact-section-5-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Suppose you have an equation of the form: .   Show it is exact. Find the form of the potential function in terms of and .    a) Yes. b)     "
},
{
  "id": "exact-section-5-12",
  "level": "2",
  "url": "exact-section.html#exact-section-5-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Suppose that we have the equation .   Is this equation exact? Find the general solution using a definite integral.    a)  Yes. b)     "
},
{
  "id": "exact-section-5-13",
  "level": "2",
  "url": "exact-section.html#exact-section-5-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Find the potential function of the exact equation in two different ways.   Integrate in terms of and then differentiate in and set to . Integrate in terms of and then differentiate in and set to .        "
},
{
  "id": "exact-section-5-14",
  "level": "2",
  "url": "exact-section.html#exact-section-5-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A function is said to be a if .   Show if is harmonic, is an exact equation. So there exists (at least locally) the so-called function such that and .  Verify that the following are harmonic and find the corresponding harmonic conjugates :   (3)       a)  and , and the difference is zero, so they are equal. b)  (i)  (ii)  (iii)     "
},
{
  "id": "exact-section-5-15",
  "level": "2",
  "url": "exact-section.html#exact-section-5-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Show that every separable equation can be written as an exact equation, and verify that it is indeed exact. Using this rewrite as an exact equation, solve it and verify that the solution is the same as it was in .   "
},
{
  "id": "modelfirst-section",
  "level": "1",
  "url": "modelfirst-section.html",
  "type": "Section",
  "number": "1.10",
  "title": "Modeling with First Order Equations",
  "body": " Modeling with First Order Equations   One of the main reasons to study and learn about differential equations, particularly for scientists and engineers, is their application and use in mathematical modeling. Since the derivative of a function represents the rate of change of that quantity, if we can use physical or scientific principles to develop an equation for the rate of change of some quantity in terms of the quantity and time, there’s a chance that we can write a differential equation for this quantity and solve it to determine how the quantity will change.    Principles of Mathematical Modeling  The process of mathematical modeling involves three main steps. The first of these is to write the model. This part comes from basic science or engineering principles and involves writing a differential equation that fits the given situation. If we can determine the rate at which a quantity will change based on the surrounding factors, we have a good shot of getting to such an equation. One main principle that can be used to write these equations is the accumuilation equation, which will be discussed in the next subsection.  The second step of this process is to solve the differential equation. This can mean either an analytic solution or a numeric one, and this is where the work of this class comes into play. We are going through a bunch of different techniques for solving differential equations and analyzing the overall behavior of such equations so that we can use them in this way. The end goal is to get an equation or a graph for how the quantity that we made a model for is going to change in time.  The final step of the process is to validate the model by comparing with experimental data. Once we have written the model and solved the corresponding differential equation, we want to make sure that the model works. To do this, we can take a new version of the original scenario, run the model as well as the physical experiment and see how the results compare. If the results are close (in whatever sense makes logical sense for the problem), then we have a good model and can keep it. However, if our results differ significantly, then the model we used probably doesn’t apply to this problem. We need to go back to step 1 to try to figure out a better model for the physical situation in order to get more accurate results.  Why do we care about mathematical modeling? The biggest thing that it does from an engineering point of view is reduce the need for repeated testing. If we have a mathematical model that works for a given physical system, we can see how the system will be have under slightly different conditions and with different initial conditions without needing to run the physical experiment over and over again. We can do all of this testing on the model, and since we have validated the model, we can assume that the actual results will be similar. This also allows us to change some aspects of the physical situation to try to optimize it, but do so just by modifying the mathematical model, not the physical setup. This can significantly cut down on costs and allow for more optimal system design at the same time.    The Accumulation Equation  The accumulation equation is one of the simplest general mathematical formulations that can be used to develop mathematical models. This equation comes down to the fact that the rate of change of some quantity should be equal to the rate at which it is being added minus the rate at which it is being removed. If we let be the quantity in question, this can be written as This may seem fairly simple. However, it shows up in many places in science and engineering. Any mass or energy balance equations are examples of accumulation equations. These types of equations can also be written for the accumulation of momentum, and doing so for fluids gives rise to the Navier-Stokes equations, providing the basis for several fields of engineering. The examples that we see here will be simpler than that, but the idea is still the same.      A tank initially contains 70 gallons of water and 5 lbs of salt. A solution with salt concentration 0.2 lbs per gallon flows into the tank at a rate of gal\/min. The tank is well stirred, and water is removed from the tank at a rate of gal\/min. Find the amount of salt in the tank at any time ? What happens as ? Does this make sense?    To solve this problem, we use the accumulation equation on the amount of salt in the tank. In order to compute with this, we recognize that in terms of mass of salt moving into the tank and similarly for the mass of salt leaving the tank.  If we let represent the amount of salt in the tank at any time (which is the goal of the problem), we can write a differential equation for this using the accumulation equation . This gives us that For this problem, we have that The last of these lines comes from the fact that the tank is well stirred or well-mixed. This implies that the concentration of salt in the water leaving the tank is the same as the concentration in the tank, which we can compute as . In this case, since the flow rate in and out are both 3 gal\/min, the volume of water in the tank is fixed at gallons, so we can put this in the equation.  Therefore, our equation becomes We can rewrite this equation as which we recognize as a first order linear equation. We can then solve this using the method of integrating factors. Our factor is which we can multiply on both sides of the equation to obtain The left side of this is a product rule derivative, so we can integrate both sides to obtain We can then isolate to get our general solution as Our initial condition tells us that . Plugging this in gives that so the solution to the initial value problem, and thus our calculation for the amount of salt in the tank at any time , is   As , we see that the exponential term goes to zero. This leaves us with 14 lbs of salt in the tank after a long time. This makes some sense because this would give us a concentration of lb\/gal, and that was exactly the concentration of the in-flow stream. It makes sense that after a long time of mixing and removing water from the tank, the concentration of the tank would match that of the incoming stream.    The same principle works for other types of examples, including those where the volume of the tank is not constant in time.   1.55in1.60in      A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?    We can again use the accumulation equation to write In this example, we have Our equation is, therefore, Or in the form    Let us solve. The integrating factor is   We multiply both sides of the equation to get    3.25in  We need to find . We know that at , . So or   We are interested in when the tank is full. The tank is full when , or when . So See for the graph of over .  The concentration when the tank is full is approximately , and we started with or .    For the previous example, we obtained the solution which is valid and well defined for all positive values of (it has an issue at , but we aren’t concerned about that here). However, as a differential equation that represents a physical situation, it is not valid for all positive values of . The issue here is that the tank is full at . Therefore, beyond this point, while the function still exists, it is not a valid model for this physical system. Once the tank fills, you can’t keep adding and removing water at the same rates that you have been up until this point, because something is going to break with the system. The same goes for if you are removing water from the tank at a faster rate than you are adding it, because then the tank will empty at some point in time and beyond that, the model equation no longer represents the system.  The same ideas apply to problems involving interest compounded continuously. For an interest rate of , the rate in, or the rate at which the money in the account is increasing, is where is the amount of money in the account. Taking this along with other factors that may affect the balance of the account allows us to write a differential equation, which we can solve to determine what the balance will be over time.      A bank account with an interest rate of per year, compounded continuously, starts with a balance of $30000. The owner of the account withdraws $50 from the account each month. Find and solve a differential equation for the account balance over time. What is the largest amount that the owner could withdraw each month without the account eventually reaching $0?    We will use the function to model the balance of the account over time, where is in years . Since the owner withdraws $50 per month, this means that they withdraw $600 over the course of the year. This means that the differential equation we want is We can solve this equation by the integrating factor method. For , we need to take . Thus, the solution to the initial value problem is Since the coefficient in front of is positive, this means that the account balance here will grow in time.  For the second part, we need to adjust the withdrawal amount to see how the solution changes. If we let be the monthly withdrawal amount, then we have the differential equation The same solution method gives us   If , then the account balance will eventually go to zero. Therefore, we need , and since , we have that For this to be equal to zero, we need Thus, the owner can withdraw $150 per month and keep the account balance positive.    To end this section, we will analyze the example that was presented at the very beginning of the book.      An object falling through the air has its velocity affected by two factors: gravity and a drag force. The velocity downward is increased at a rate of due to gravity, and it is decreased by a rate equation to times the current velocity of the object. If the ball is initially thrown downwards at a speed of , what will the velocity be 10 seconds later?    As described in that first section, we know that the differential equation that we can write for this situation is and that the initial condition for the velocity if . Since we have gravity as a positive 9.8, this means that the downward direction is positive, so the object being thrown downward at means that it is positive. We then need to solve this initial value problem, which we can do using first order linear methods. The equation can be written as which has integrating factor . After multiplying this to both sides and integrating, we get that or that   Using the initial condition, we get that so that and the solution to the initial value problem is Then, to determine the velocity at , we can plug into this formula to get that     All of these examples are based around the same idea of the accumulation equation. We need to determine the quantity that is changing as well as all of the factors that cause it to increase and decrease. These get combined into a differential equation which we can solve in order to analyze the situation and answer whatever questions you want about that physical problem. Keeping these ideas in mind will help you approach a wide variety of problems both in this class as well as future applications in engineering classes and beyond.    Exercises    Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.   Find the concentration of toxic substance as a function of time in both lakes. When will the concentration in the first lake be below [ 0 001 ] kg per liter ?  When will the concentration in the second lake be maximal ?    a)    b) 321.89 hours c) 277.26 hours      states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).   Find the general solution. In the long term, will the initial conditions make much of a difference? Why or why not?    a)  b) No. Only in .      Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters per minute. The tank is mixed well and is drained at 3 liters per minute. How long does the process have to continue until there are 20 grams of salt in the tank?     min      Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?     g\/L      Suppose a water tank is being pumped out at . The water tank starts at L of clean water. Water with toxic substance is flowing into the tank at , with concentration at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?      A 300 gallon well-mixed water tank initially starts with 200 gallons of water and 15 lbs of salt. One stream with salt concentration one pound per gallon flows into the tank at a rate of 3 gallons per minute and water is removed from the well-mixed tank at a rate of 2 gallons per minute.   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , . c) No. Overflows at . d)  This function is defined for all positive .      A 500 gallon well-mixed water tank initially starts with 300 gallons of water and 200 lbs of salt. One stream with salt concentration of flows into the tank at a rate of and water is removed from the well-mixed tank at a rate of .   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , c) No, tank empties at . d)  . is negative for .      A 200 gallon well-mixed water tank initially starts with 150 gallons of water and 50 lbs of salt. One stream with salt concentration of flows into the tank at a rate of and water is removed from the well-mixed tank at a rate of .   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , . c) Yes. Solution tends towards 30. d)  . Matches.      Suppose we have bacteria on a plate and suppose that we are slowly adding a toxic substance such that the rate of growth is slowing down. That is, suppose that . If , find the population at .      A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in meters. Suppose water is flowing from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.      An object in free fall has a velocity that increases at a rate of 32 . Due to drag, the velocity decreases at a rate of 0.1 times the velocity of the object squared, when written in feet per second.   Write a differential equation to model the velocity of this object over time. This equation is autonomous, so draw a phase diagram for this equation and classify all critical points. What will happen to the velocity if the object is dropped at ? What about if the object is thrown downwards at a rate of ?    a)  b)  is asymptotically stable, is unstable. c)  Always tends towards       The number of people in a town that support a given measure decays at a constant rate of people per day. However, the support for the measure can be increased by individuals discussing the issue. This results in an increase of the support at a rate of people per day, where is the number of people who support the measure, and is a constant depending on the way in which the issue is being discussed. Write a differential equation to model this situation, and determine the amount of people who will support the measure long-term if is set to .     , .      Newton’s Law of Procrastination states that the rate at which one accomplishes a chore is proportional to the amount of the chore not yet done . Unbeknownst to Newton, this applies to robots too. A Roomba is attempting to vacuum a house measuring 1000 square feet. When none of the house is clean, the roomba can clean 200 square feet per hour. What makes this problem fun is that there is also a dog. It’s whatever kind of dog you like, take your pick. The dog dirties the house at a constant rate of 50 square feet per hour.   Assume that none of the house is clean at . Write a DE for the number of square feet that are clean as a function of time, and solve for that quantity. How long will it take before the house is half clean? Will it ever be entirely clean? (Explain briefly.)    a)  . b)  for half clean. Never fully clean.      A student has a loan for $50000 with 5% interest. The student makes $300 payments on the loan each month. The rate here is an annual rate, compounded continuously, and the differential equation you write should be in years.   With this setup, how long does it take the student to pay off the loan? How much money does the student pay over this period of time? What is the minimal amount the student should pay each month if they want to pay off the loan within 5 years? How much does the student pay over this period?    a)  years or 285 months. Pays approximately $85,500 b)        A factory pumps 6 tons of sludge per day into a nearby pond. The pond initially contains 100,000 gallons of water, and no sludge. Each day, 3,000 gallons of rain water falls into the pond, and 1,000 gallons per day leave the pond via a river. Assume, for no good reason, that the water leaving the pond has the same concentration of sludge as the pond as a whole. How much sludge will there be in the pond after 150 days?    700 gallons      In this exercise, we compare two different young people and their investment strategies. Both of these people are investing in an account with 7.5% annual rate of return. Person 1 invests $50 a month starting at age 20, and Person 2 invests $100 per month starting at age 30. Write differential equations to model each of these account balances over time, and compute the amount of money in each account at age 50. Who has more money in the account? Who has invested more money? What would person 2 have to invest each month in order for the two balances to be equal at age 50?    Person 1 has more money ( compared to ). Person 2 has invested more ( compared to ). Person 2 needs to invest .      Radioactive decay follows similar rules to interest, where a certain portion of the material decays over time, resulting in an equation of the form for some constant . The half-life of a material is the amount of time that it takes for half of the material to have decayed away. Assume that the half-life of a given substance is minutes. Find a formula for , the coefficient in the decay equation, in terms of .          "
},
{
  "id": "the-accumulation-equation-3",
  "level": "2",
  "url": "modelfirst-section.html#the-accumulation-equation-3",
  "type": "Example",
  "number": "1.10.1",
  "title": ".",
  "body": "    A tank initially contains 70 gallons of water and 5 lbs of salt. A solution with salt concentration 0.2 lbs per gallon flows into the tank at a rate of gal\/min. The tank is well stirred, and water is removed from the tank at a rate of gal\/min. Find the amount of salt in the tank at any time ? What happens as ? Does this make sense?    To solve this problem, we use the accumulation equation on the amount of salt in the tank. In order to compute with this, we recognize that in terms of mass of salt moving into the tank and similarly for the mass of salt leaving the tank.  If we let represent the amount of salt in the tank at any time (which is the goal of the problem), we can write a differential equation for this using the accumulation equation . This gives us that For this problem, we have that The last of these lines comes from the fact that the tank is well stirred or well-mixed. This implies that the concentration of salt in the water leaving the tank is the same as the concentration in the tank, which we can compute as . In this case, since the flow rate in and out are both 3 gal\/min, the volume of water in the tank is fixed at gallons, so we can put this in the equation.  Therefore, our equation becomes We can rewrite this equation as which we recognize as a first order linear equation. We can then solve this using the method of integrating factors. Our factor is which we can multiply on both sides of the equation to obtain The left side of this is a product rule derivative, so we can integrate both sides to obtain We can then isolate to get our general solution as Our initial condition tells us that . Plugging this in gives that so the solution to the initial value problem, and thus our calculation for the amount of salt in the tank at any time , is   As , we see that the exponential term goes to zero. This leaves us with 14 lbs of salt in the tank after a long time. This makes some sense because this would give us a concentration of lb\/gal, and that was exactly the concentration of the in-flow stream. It makes sense that after a long time of mixing and removing water from the tank, the concentration of the tank would match that of the incoming stream.   "
},
{
  "id": "the-accumulation-equation-6",
  "level": "2",
  "url": "modelfirst-section.html#the-accumulation-equation-6",
  "type": "Example",
  "number": "1.10.2",
  "title": ".",
  "body": "    A 100 liter tank contains 10 kilograms of salt dissolved in 60 liters of water. Solution of water and salt (brine) with concentration of 0.1 kilograms per liter is flowing in at the rate of 5 liters a minute. The solution in the tank is well stirred and flows out at a rate of 3 liters a minute. How much salt is in the tank when the tank is full?    We can again use the accumulation equation to write In this example, we have Our equation is, therefore, Or in the form    Let us solve. The integrating factor is   We multiply both sides of the equation to get    3.25in  We need to find . We know that at , . So or   We are interested in when the tank is full. The tank is full when , or when . So See for the graph of over .  The concentration when the tank is full is approximately , and we started with or .   "
},
{
  "id": "the-accumulation-equation-9",
  "level": "2",
  "url": "modelfirst-section.html#the-accumulation-equation-9",
  "type": "Example",
  "number": "1.10.3",
  "title": ".",
  "body": "    A bank account with an interest rate of per year, compounded continuously, starts with a balance of $30000. The owner of the account withdraws $50 from the account each month. Find and solve a differential equation for the account balance over time. What is the largest amount that the owner could withdraw each month without the account eventually reaching $0?    We will use the function to model the balance of the account over time, where is in years . Since the owner withdraws $50 per month, this means that they withdraw $600 over the course of the year. This means that the differential equation we want is We can solve this equation by the integrating factor method. For , we need to take . Thus, the solution to the initial value problem is Since the coefficient in front of is positive, this means that the account balance here will grow in time.  For the second part, we need to adjust the withdrawal amount to see how the solution changes. If we let be the monthly withdrawal amount, then we have the differential equation The same solution method gives us   If , then the account balance will eventually go to zero. Therefore, we need , and since , we have that For this to be equal to zero, we need Thus, the owner can withdraw $150 per month and keep the account balance positive.   "
},
{
  "id": "the-accumulation-equation-11",
  "level": "2",
  "url": "modelfirst-section.html#the-accumulation-equation-11",
  "type": "Example",
  "number": "1.10.4",
  "title": ".",
  "body": "    An object falling through the air has its velocity affected by two factors: gravity and a drag force. The velocity downward is increased at a rate of due to gravity, and it is decreased by a rate equation to times the current velocity of the object. If the ball is initially thrown downwards at a speed of , what will the velocity be 10 seconds later?    As described in that first section, we know that the differential equation that we can write for this situation is and that the initial condition for the velocity if . Since we have gravity as a positive 9.8, this means that the downward direction is positive, so the object being thrown downward at means that it is positive. We then need to solve this initial value problem, which we can do using first order linear methods. The equation can be written as which has integrating factor . After multiplying this to both sides and integrating, we get that or that   Using the initial condition, we get that so that and the solution to the initial value problem is Then, to determine the velocity at , we can plug into this formula to get that    "
},
{
  "id": "modelfirst-section-5-2",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Suppose there are two lakes located on a stream. Clean water flows into the first lake, then the water from the first lake flows into the second lake, and then water from the second lake flows further downstream. The in and out flow from each lake is 500 liters per hour. The first lake contains 100 thousand liters of water and the second lake contains 200 thousand liters of water. A truck with kg of toxic substance crashes into the first lake. Assume that the water is being continually mixed perfectly by the stream.   Find the concentration of toxic substance as a function of time in both lakes. When will the concentration in the first lake be below [ 0 001 ] kg per liter ?  When will the concentration in the second lake be maximal ?    a)    b) 321.89 hours c) 277.26 hours   "
},
{
  "id": "modelfirst-section-5-3",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  states that where is the temperature, is time, is the ambient temperature, and is a constant. Suppose that for some constants and . That is, the ambient temperature oscillates (for example night and day temperatures).   Find the general solution. In the long term, will the initial conditions make much of a difference? Why or why not?    a)  b) No. Only in .   "
},
{
  "id": "modelfirst-section-5-4",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Initially 5 grams of salt are dissolved in 20 liters of water. Brine with concentration of salt 2 grams of salt per liter is added at a rate of 3 liters per minute. The tank is mixed well and is drained at 3 liters per minute. How long does the process have to continue until there are 20 grams of salt in the tank?     min   "
},
{
  "id": "modelfirst-section-5-5",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Initially a tank contains 10 liters of pure water. Brine of unknown (but constant) concentration of salt is flowing in at 1 liter per minute. The water is mixed well and drained at 1 liter per minute. In 20 minutes there are 15 grams of salt in the tank. What is the concentration of salt in the incoming brine?     g\/L   "
},
{
  "id": "modelfirst-section-5-6",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Suppose a water tank is being pumped out at . The water tank starts at L of clean water. Water with toxic substance is flowing into the tank at , with concentration at time . When the tank is half empty, how many grams of toxic substance are in the tank (assuming perfect mixing)?   "
},
{
  "id": "modelfirst-section-5-7",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-7",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  A 300 gallon well-mixed water tank initially starts with 200 gallons of water and 15 lbs of salt. One stream with salt concentration one pound per gallon flows into the tank at a rate of 3 gallons per minute and water is removed from the well-mixed tank at a rate of 2 gallons per minute.   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , . c) No. Overflows at . d)  This function is defined for all positive .   "
},
{
  "id": "modelfirst-section-5-8",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-8",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  A 500 gallon well-mixed water tank initially starts with 300 gallons of water and 200 lbs of salt. One stream with salt concentration of flows into the tank at a rate of and water is removed from the well-mixed tank at a rate of .   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , c) No, tank empties at . d)  . is negative for .   "
},
{
  "id": "modelfirst-section-5-9",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-9",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  A 200 gallon well-mixed water tank initially starts with 150 gallons of water and 50 lbs of salt. One stream with salt concentration of flows into the tank at a rate of and water is removed from the well-mixed tank at a rate of .   Write and solve an initial value problem for the volume of water in the tank at any time . Set up an initial value problem for the amount of salt in the tank at any time . You do not need to solve it (yet), but should make sure to state it fully. Is the solution to this initial value problem a valid representation of the physical model for all times ? If so, use the information in the equation to determine the long-time behavior of the solution. If not, explain why, determine the time when the representation breaks down, and what happens at that point in time. Solve the initial value problem above and compare this to your answer to the previous part.    a)  , . . b)  , . c) Yes. Solution tends towards 30. d)  . Matches.   "
},
{
  "id": "modelfirst-section-5-10",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-10",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Suppose we have bacteria on a plate and suppose that we are slowly adding a toxic substance such that the rate of growth is slowing down. That is, suppose that . If , find the population at .   "
},
{
  "id": "modelfirst-section-5-11",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-11",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A cylindrical water tank has water flowing in at cubic meters per second. Let be the area of the cross section of the tank in meters. Suppose water is flowing from the bottom of the tank at a rate proportional to the height of the water level. Set up the differential equation for , the height of the water, introducing and naming constants that you need. You should also give the units for your constants.   "
},
{
  "id": "modelfirst-section-5-12",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-12",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  An object in free fall has a velocity that increases at a rate of 32 . Due to drag, the velocity decreases at a rate of 0.1 times the velocity of the object squared, when written in feet per second.   Write a differential equation to model the velocity of this object over time. This equation is autonomous, so draw a phase diagram for this equation and classify all critical points. What will happen to the velocity if the object is dropped at ? What about if the object is thrown downwards at a rate of ?    a)  b)  is asymptotically stable, is unstable. c)  Always tends towards    "
},
{
  "id": "modelfirst-section-5-13",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-13",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The number of people in a town that support a given measure decays at a constant rate of people per day. However, the support for the measure can be increased by individuals discussing the issue. This results in an increase of the support at a rate of people per day, where is the number of people who support the measure, and is a constant depending on the way in which the issue is being discussed. Write a differential equation to model this situation, and determine the amount of people who will support the measure long-term if is set to .     , .   "
},
{
  "id": "modelfirst-section-5-14",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-14",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Newton’s Law of Procrastination states that the rate at which one accomplishes a chore is proportional to the amount of the chore not yet done . Unbeknownst to Newton, this applies to robots too. A Roomba is attempting to vacuum a house measuring 1000 square feet. When none of the house is clean, the roomba can clean 200 square feet per hour. What makes this problem fun is that there is also a dog. It’s whatever kind of dog you like, take your pick. The dog dirties the house at a constant rate of 50 square feet per hour.   Assume that none of the house is clean at . Write a DE for the number of square feet that are clean as a function of time, and solve for that quantity. How long will it take before the house is half clean? Will it ever be entirely clean? (Explain briefly.)    a)  . b)  for half clean. Never fully clean.   "
},
{
  "id": "modelfirst-section-5-15",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-15",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  A student has a loan for $50000 with 5% interest. The student makes $300 payments on the loan each month. The rate here is an annual rate, compounded continuously, and the differential equation you write should be in years.   With this setup, how long does it take the student to pay off the loan? How much money does the student pay over this period of time? What is the minimal amount the student should pay each month if they want to pay off the loan within 5 years? How much does the student pay over this period?    a)  years or 285 months. Pays approximately $85,500 b)     "
},
{
  "id": "modelfirst-section-5-16",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-16",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  A factory pumps 6 tons of sludge per day into a nearby pond. The pond initially contains 100,000 gallons of water, and no sludge. Each day, 3,000 gallons of rain water falls into the pond, and 1,000 gallons per day leave the pond via a river. Assume, for no good reason, that the water leaving the pond has the same concentration of sludge as the pond as a whole. How much sludge will there be in the pond after 150 days?    700 gallons   "
},
{
  "id": "modelfirst-section-5-17",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-17",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  In this exercise, we compare two different young people and their investment strategies. Both of these people are investing in an account with 7.5% annual rate of return. Person 1 invests $50 a month starting at age 20, and Person 2 invests $100 per month starting at age 30. Write differential equations to model each of these account balances over time, and compute the amount of money in each account at age 50. Who has more money in the account? Who has invested more money? What would person 2 have to invest each month in order for the two balances to be equal at age 50?    Person 1 has more money ( compared to ). Person 2 has invested more ( compared to ). Person 2 needs to invest .   "
},
{
  "id": "modelfirst-section-5-18",
  "level": "2",
  "url": "modelfirst-section.html#modelfirst-section-5-18",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Radioactive decay follows similar rules to interest, where a certain portion of the material decays over time, resulting in an equation of the form for some constant . The half-life of a material is the amount of time that it takes for half of the material to have decayed away. Assume that the half-life of a given substance is minutes. Find a formula for , the coefficient in the decay equation, in terms of .        "
},
{
  "id": "modelfirstestim-section",
  "level": "1",
  "url": "modelfirstestim-section.html",
  "type": "Section",
  "number": "1.11",
  "title": "Modeling and Parameter Estimation",
  "body": " Modeling and Parameter Estimation  One of the most common ways that the mathematical modeling structure can be used to analyze physical problems is the idea of parameter estimation. The situation is that we have physical principles that give rise to a differential equation that defines how a physical system should behave, but there are one or more constants in the problem that we do not know. Two simpler examples of this are Newton’s Law of Cooling which models the temperature of an object in an environment of temperature over time, and velocity affected by drag modeling the velocity of a falling object where the drag force is proportional to the square of the velocity. In both of these cases, the models are well established, but for a given object, we likely do not know the or values in the problem. These are these of the problem, and would be determined by the shape and structure of the objects, the material that it is made of, and many other factors, so it could be hard to figure out what they are in advance. How can we find these values? We can use data from the actual physical problem to try to estimate these parameters.  The easier version of this is to use a single value at a later time to calculate the constant.      An object that obeys Newton’s Law of Cooling is placed in an environment at a constant temperature of C. The object starts at C, and after 10 minutes, it has reached a temperature of C. Find a function for the temperature as a function of time.    Based on Newton’s Law of Cooling, we know that the temperature satisfies the differential equation with initial condition , but we do not know the value of . In order to work this out, we should solve the differential equation with unknown constant , then figure out which value of gives us the appropriate temperature after 10 minutes. This is a first order linear equation, which can be rewritten as   The integrating factor we need is , which turns the equation into Integrating both sides and solving for gives   To satisfy the initial condition, we need that , or . Thus, our solution, still with an unknown constant , is   To determine the value of , we need to utilize the other given piece of information: that . Plugging this in gives that which we can solve for using logarithms. This will give that   Finally, we can plug that constant into our equation to get the solution for the temperature at any time value,     This method works great if we have the exact measurement from the object at one point in time. However, if the measurements at multiple points in time are known, and if the data is not likely to be exact, then a different method is more applicable. The idea is that we want to minimize the error between our predicted result and the physical data that we gather. The method used to minimize the error is the Least Squared Error method.  Assume that we want to do this for the drag coefficient problem, where we do not know, and want to estimate, the value of . For this method, the data that we gather is a set of velocity values that are obtained at times . For any given value of , we can solve, either numerically or analytically, the solution to the given differential equation with that value of . From this solution, we can compute , the value of this solution at each of the times that we gathered data originally. Now, we want to compute the error that we made in choosing this parameter . This is computed by which is the sum of the squares of the differences between the gathered data and the predicted solution. In order to find the best possible value of , we want to minimze this error by choosing different values of  and whatever value of gives us this minimum is the optimal choice for that parameter.  The function that we want to minimize here is usually a very complicated function, and we may not even be able to solve the differential equation analytically for any . Thus, computers are used most often here to solve these types of problems.      An object is falling under the force of gravity, and has a drag component that is proportional to the square of the velocity. Data is gathered on the falling object, and the velocity at a variety of times are given in .    Data for estimating drag coefficient using least squared errors.    t (s)  v (m\/s)    0  0    0.1  0.9797    0.3  2.8625    0.5  4.4750    0.8  6.3828    0.9  6.8360    1.0  7.0334    1.5  8.1612     Use this data to estimate the coefficient of proportionality on the drag term in the equation     To solve this problem, we will use the least squared error method implemented in MATLAB. The code we need for this is the following, which makes use of the Optimization Toolbox.   global tVals global vVals  tVals = [0, 0.1, 0.3, 0.5, 0.8, 0.9, 1.0, 1.5]; vVals = [0,0.9797,2.8625,4.4750,6.3828,6.8360,7.0334,8.1612];  [aVal, errVal] = fminbnd(@(a) EstSqError(a), 0, 4)  This bit of code inputs the necessary values and uses the fminbnd function to find the minimum of the error function on a defined interval. These problems need to be done on a bounded interval, but in most physical situations there is some reasonable window for where the parameter could be. The rest of the code is the definition of the EstSqError function.   function err = EstSqError(al)  global tVals global vVals  fun = @(t,v) 9.8 - al.*v.^2; sol = ode45(fun, [0,3], 0); vTest = deval(sol, tVals);  err = sum((vVals - vTest).^2) end  The main point of this code is that it takes in a value of , over which we are trying to minimize, it numerically solves the differential equation with that value of over a desired range of values, and then compares the inputted vVals with the generated vTest array, computing the sum of squared errors, and returning the error value.  Running this code results in an value of , with an error of . That means that, based on this data, the best approximation to is .    Note that in the above example, the total error was not zero, and doesn’t actually match the coefficient used to generate the data, which was . This is because noise was added to the data before trying to compute the drag coefficient. In a real world problem, noise would not be added, but a similar effect would arise from slightly inaccurate measurements or round-off errors in the data. While we may not have found the constant exactly, we got really close to it, and could use this as a starting point for further experiments and data validation.   Exercises    Bob is getting coffee from a restaurant and knows that the temperature of the coffee will follow Newton’s Law of Cooling, which says that where is the ambient temperature and is a constant depending on the object and geometry. His car is held at a constant 20 C, and when he receives the coffee, he measures the temperature to be 90 C. Two minutes later, the temperature is 81 C.   Use these two points of data to determine the value of for this coffee. Bob only wants to drink his coffee once it reaches 65 C. How long does he have to wait for this to happen? If the coffee is too cold for Bob’s taste once it reaches 35 C, how long is the acceptable window for Bob to drink his coffee?    a)  0.06681 b)  6.42 min c)  16 min.      Assume that a falling object has a velocity (in meters per second) that obeys the differential equation where represents the drag coefficient of the object.   Solve this differential equation with initial condition to get a solution that depends on . Assume that you drop an object from a height of 10 meters and it hits the ground after seconds. What is the value of here? (Note: You solved for in the previous part, and now you need to get to position. What does that require?) Assume that a second object hits the ground in 6 seconds. How does this change the value of ?    a)  b) 2.94 c) 5.88      A restaurant is trying to analyze the to-go coffee cups that it uses in order to best serve their customers. They assume that the coffee follows Newton’s Law of Cooling and place it in a room with ambient temperature 22 C. They record the following data for the temperature of the coffee as a function of time.      t (min)  T ( C)    0  80    0.5  74    1.1  67    1.7  61    2.3  56      Use code to determine the best-fit value of for this data. The restaurant determines that to avoid any potential legal issues, the coffee can be no warmer than 60 C when it is served. If the coffee comes out of the machine at 90 , how long do they have to wait before they can serve the coffee?    a)  b)  min      Assume that an object falling has a velocity that follows the differential equation where the velocity is in and represents the drag coefficient. During a physics experiment, a student measures data for the velocity of a falling object over time given in the table below.  Use this data (and code) to estimate the value of for this object.         t (s)  v (m\/s)    0  0    0.1  1.0    0.2  1.9    0.4  3.6    0.6  5.2    0.9  6.8    1.1  7.4    1.3  7.9    1.5  8.2    1.8  8.5    2.1  8.8          t (d)  P (thousands)    0  50    7  60    14  70    28  97    37  117    50  148    78  220    100  268       Assume that a species of fish in a lake has a population that is modeled by the differential equation where , , and are parameters, representing the growth rate, the carrying capacity, and the harvesting rate, and the population is in thousands., with given in years. From previous studies, you know that the best value of is . After studying the population over a period of time, you get the data given above.   Your friend tells you that in a previous study, he found that the value of for this particular lake is . Use code to determine the best value of for this situation. Note that the equation expects in years, but the data is given in days. Search for in the range . That answer doesn’t look great. Plot the solution with these parameters along with the data and compare them. The fit does not look great, so maybe your friend’s value was not quite right. Run code to find best values for and simultaneously. Use the range for both and .    a)  c)  , . (The base data was , .)     "
},
{
  "id": "modelfirstestim-section-4",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-4",
  "type": "Example",
  "number": "1.11.1",
  "title": ".",
  "body": "    An object that obeys Newton’s Law of Cooling is placed in an environment at a constant temperature of C. The object starts at C, and after 10 minutes, it has reached a temperature of C. Find a function for the temperature as a function of time.    Based on Newton’s Law of Cooling, we know that the temperature satisfies the differential equation with initial condition , but we do not know the value of . In order to work this out, we should solve the differential equation with unknown constant , then figure out which value of gives us the appropriate temperature after 10 minutes. This is a first order linear equation, which can be rewritten as   The integrating factor we need is , which turns the equation into Integrating both sides and solving for gives   To satisfy the initial condition, we need that , or . Thus, our solution, still with an unknown constant , is   To determine the value of , we need to utilize the other given piece of information: that . Plugging this in gives that which we can solve for using logarithms. This will give that   Finally, we can plug that constant into our equation to get the solution for the temperature at any time value,    "
},
{
  "id": "modelfirstestim-section-8",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-8",
  "type": "Example",
  "number": "1.11.2",
  "title": ".",
  "body": "    An object is falling under the force of gravity, and has a drag component that is proportional to the square of the velocity. Data is gathered on the falling object, and the velocity at a variety of times are given in .    Data for estimating drag coefficient using least squared errors.    t (s)  v (m\/s)    0  0    0.1  0.9797    0.3  2.8625    0.5  4.4750    0.8  6.3828    0.9  6.8360    1.0  7.0334    1.5  8.1612     Use this data to estimate the coefficient of proportionality on the drag term in the equation     To solve this problem, we will use the least squared error method implemented in MATLAB. The code we need for this is the following, which makes use of the Optimization Toolbox.   global tVals global vVals  tVals = [0, 0.1, 0.3, 0.5, 0.8, 0.9, 1.0, 1.5]; vVals = [0,0.9797,2.8625,4.4750,6.3828,6.8360,7.0334,8.1612];  [aVal, errVal] = fminbnd(@(a) EstSqError(a), 0, 4)  This bit of code inputs the necessary values and uses the fminbnd function to find the minimum of the error function on a defined interval. These problems need to be done on a bounded interval, but in most physical situations there is some reasonable window for where the parameter could be. The rest of the code is the definition of the EstSqError function.   function err = EstSqError(al)  global tVals global vVals  fun = @(t,v) 9.8 - al.*v.^2; sol = ode45(fun, [0,3], 0); vTest = deval(sol, tVals);  err = sum((vVals - vTest).^2) end  The main point of this code is that it takes in a value of , over which we are trying to minimize, it numerically solves the differential equation with that value of over a desired range of values, and then compares the inputted vVals with the generated vTest array, computing the sum of squared errors, and returning the error value.  Running this code results in an value of , with an error of . That means that, based on this data, the best approximation to is .   "
},
{
  "id": "modelfirstestim-section-10-2",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-2",
  "type": "Exercise",
  "number": "1.11.1",
  "title": "",
  "body": "  Bob is getting coffee from a restaurant and knows that the temperature of the coffee will follow Newton’s Law of Cooling, which says that where is the ambient temperature and is a constant depending on the object and geometry. His car is held at a constant 20 C, and when he receives the coffee, he measures the temperature to be 90 C. Two minutes later, the temperature is 81 C.   Use these two points of data to determine the value of for this coffee. Bob only wants to drink his coffee once it reaches 65 C. How long does he have to wait for this to happen? If the coffee is too cold for Bob’s taste once it reaches 35 C, how long is the acceptable window for Bob to drink his coffee?    a)  0.06681 b)  6.42 min c)  16 min.   "
},
{
  "id": "modelfirstestim-section-10-3",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-3",
  "type": "Exercise",
  "number": "1.11.2",
  "title": "",
  "body": "  Assume that a falling object has a velocity (in meters per second) that obeys the differential equation where represents the drag coefficient of the object.   Solve this differential equation with initial condition to get a solution that depends on . Assume that you drop an object from a height of 10 meters and it hits the ground after seconds. What is the value of here? (Note: You solved for in the previous part, and now you need to get to position. What does that require?) Assume that a second object hits the ground in 6 seconds. How does this change the value of ?    a)  b) 2.94 c) 5.88   "
},
{
  "id": "modelfirstestim-section-10-4",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-4",
  "type": "Exercise",
  "number": "1.11.3",
  "title": "",
  "body": "  A restaurant is trying to analyze the to-go coffee cups that it uses in order to best serve their customers. They assume that the coffee follows Newton’s Law of Cooling and place it in a room with ambient temperature 22 C. They record the following data for the temperature of the coffee as a function of time.      t (min)  T ( C)    0  80    0.5  74    1.1  67    1.7  61    2.3  56      Use code to determine the best-fit value of for this data. The restaurant determines that to avoid any potential legal issues, the coffee can be no warmer than 60 C when it is served. If the coffee comes out of the machine at 90 , how long do they have to wait before they can serve the coffee?    a)  b)  min   "
},
{
  "id": "modelfirstestim-section-10-5",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-5",
  "type": "Exercise",
  "number": "1.11.4",
  "title": "",
  "body": "  Assume that an object falling has a velocity that follows the differential equation where the velocity is in and represents the drag coefficient. During a physics experiment, a student measures data for the velocity of a falling object over time given in the table below.  Use this data (and code) to estimate the value of for this object.   "
},
{
  "id": "modelfirstestim-section-10-6",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-6",
  "type": "Table",
  "number": "1.11.5",
  "title": "",
  "body": "    t (s)  v (m\/s)    0  0    0.1  1.0    0.2  1.9    0.4  3.6    0.6  5.2    0.9  6.8    1.1  7.4    1.3  7.9    1.5  8.2    1.8  8.5    2.1  8.8    "
},
{
  "id": "modelfirstestim-section-10-7",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-7",
  "type": "Table",
  "number": "1.11.6",
  "title": "",
  "body": "    t (d)  P (thousands)    0  50    7  60    14  70    28  97    37  117    50  148    78  220    100  268    "
},
{
  "id": "modelfirstestim-section-10-8",
  "level": "2",
  "url": "modelfirstestim-section.html#modelfirstestim-section-10-8",
  "type": "Exercise",
  "number": "1.11.5",
  "title": "",
  "body": "  Assume that a species of fish in a lake has a population that is modeled by the differential equation where , , and are parameters, representing the growth rate, the carrying capacity, and the harvesting rate, and the population is in thousands., with given in years. From previous studies, you know that the best value of is . After studying the population over a period of time, you get the data given above.   Your friend tells you that in a previous study, he found that the value of for this particular lake is . Use code to determine the best value of for this situation. Note that the equation expects in years, but the data is given in days. Search for in the range . That answer doesn’t look great. Plot the solution with these parameters along with the data and compare them. The fit does not look great, so maybe your friend’s value was not quite right. Run code to find best values for and simultaneously. Use the range for both and .    a)  c)  , . (The base data was , .)   "
},
{
  "id": "substitution-section",
  "level": "1",
  "url": "substitution-section.html",
  "type": "Section",
  "number": "1.12",
  "title": "Substitution",
  "body": " Substitution  The equation is neither separable nor linear. What can we do? One technique that worked for helping us in evaluating integrals was substitution, or change of variables. For example, in order to evaluate the integral we can do so by defining so that , and then evaluate the integral as after we have plugged our original function back in.  We can try to do the same thing here, and be careful with how we set things up. Our general strategy will be to pick a new dependent variable, find a differential equation that this new variable solves (which will come from the old equation), solve that equation, then convert back to the original variable. We will take as our new dependent variable here, which is as function . Let us try which is the inside function (it’s inside the square) of our example. In order to get to a differential equation that satisfies, we need to figure out in terms of , and . We differentiate (in ) to obtain . So . We plug this into the equation to get In other words, . Such an equation we know how to solve by separating variables: So for some constant . Note that and are also solutions; they are the in this problem. (This solution method requires partial fractions; for a review of that topic, see .)  Now we need to to obtain and also the two solutions or , and or . We solve the first equation for . Note that gives , but no value of gives the solution .  Substitution in differential equations is applied in much the same way that it is applied in calculus. You guess. Several different substitutions might work. There are some general patterns to look for. We summarize a few of these in a table.       When you see  Try substituting                         Usually you try to substitute in the part of the equation with the hopes of simplifying it. The table above is just a rule of thumb. You might have to modify your guesses. If a substitution does not work (it does not make the equation any simpler), try a different one.   Bernoulli equations  There are some forms of equations where there is a general rule for substitution that always works. One such example is the so-called   There are several things called Bernoulli equations, this is just one of them. The Bernoullis were a prominent Swiss family of mathematicians. These particular equations are named for Jacob Bernoulli (1654–1705). : This equation looks a lot like a linear equation except for the . If or , then the equation is linear and we can solve it. Otherwise, the substitution transforms the Bernoulli equation into a linear equation. Note that need not be an integer.      Find the general solution of     This equation fits the Bernoulli equation structure with and . Since there is a on the right-hand side, we take and make the substitution . With this, we see that or . Plugging this into the equation gives This last equation is now a first order linear equation, so we can solve it. The integrating factor we are looking for is which results in the euation The left-hand side is , so we can integrate both sides to get or, solving for , However, our original equation was for , not . Using the fact that , we can solve for as , giving as the general solution to this equation.    Even if we need to use integrals to write out the solution to these Bernoulli equations, we can still use the substitution method and solve back out for the desired solution at the end.      Solve     First, the equation is Bernoulli ( and ). We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . Let us assume that so . This assumption is OK, as our initial condition is . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now       Homogeneous equations  Another type of equations we can solve by substitution are the so-called homogeneous equations . Note that this is not the same as a homogeneous linear equation. These equations do not have to be linear, and are solved in a very different way. Suppose that we can write the differential equation as Here we try the substitutions We note that the equation is transformed into Hence an implicit solution is       Solve     We put the equation into the form . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is       Exercises  Hint: Answers need not always be in closed form.    Solve , with .           Solve , .      Solve , with .           Solve , .      Solve , with .           Solve .           Solve with .           Solve .           Solve , .      Solve . (Hint: What is )           Solve .           Solve , with .           Solve .      Consider the DE    Explain why is not a linear equation. Use a Bernoulli substitution to solve .    a)  There is a term b)       "
},
{
  "id": "substitution-section-6",
  "level": "2",
  "url": "substitution-section.html#substitution-section-6",
  "type": "Table",
  "number": "1.12.1",
  "title": "",
  "body": "    When you see  Try substituting                        "
},
{
  "id": "bernoulli-equations-3",
  "level": "2",
  "url": "substitution-section.html#bernoulli-equations-3",
  "type": "Example",
  "number": "1.12.2",
  "title": ".",
  "body": "    Find the general solution of     This equation fits the Bernoulli equation structure with and . Since there is a on the right-hand side, we take and make the substitution . With this, we see that or . Plugging this into the equation gives This last equation is now a first order linear equation, so we can solve it. The integrating factor we are looking for is which results in the euation The left-hand side is , so we can integrate both sides to get or, solving for , However, our original equation was for , not . Using the fact that , we can solve for as , giving as the general solution to this equation.   "
},
{
  "id": "bernoulli-equations-5",
  "level": "2",
  "url": "substitution-section.html#bernoulli-equations-5",
  "type": "Example",
  "number": "1.12.3",
  "title": ".",
  "body": "    Solve     First, the equation is Bernoulli ( and ). We substitute In other words, . So and finally The equation is now linear. We can use the integrating factor method. In particular, we use formula . Let us assume that so . This assumption is OK, as our initial condition is . Let us compute the integrating factor. Here from formula is . We now plug in to  The integral in this expression is not possible to find in closed form. As we said before, it is perfectly fine to have a definite integral in our solution. Now    "
},
{
  "id": "homogeneous-equations-3",
  "level": "2",
  "url": "substitution-section.html#homogeneous-equations-3",
  "type": "Example",
  "number": "1.12.4",
  "title": ".",
  "body": "    Solve     We put the equation into the form . We substitute to get the separable equation which has a solution We unsubstitute We want , so Thus and the solution we are looking for is    "
},
{
  "id": "substitution-section-10-3",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution-section-10-4",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "substitution-section-10-5",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution-section-10-6",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "substitution-section-10-7",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution-section-10-8",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "substitution-section-10-9",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Solve with .        "
},
{
  "id": "substitution-section-10-10",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "substitution-section-10-11",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Solve , .   "
},
{
  "id": "substitution-section-10-12",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Solve . (Hint: What is )        "
},
{
  "id": "substitution-section-10-13",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Solve .        "
},
{
  "id": "substitution-section-10-14",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Solve , with .        "
},
{
  "id": "substitution-section-10-15",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Solve .   "
},
{
  "id": "substitution-section-10-16",
  "level": "2",
  "url": "substitution-section.html#substitution-section-10-16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Consider the DE    Explain why is not a linear equation. Use a Bernoulli substitution to solve .    a)  There is a term b)     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
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
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
