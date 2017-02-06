
/*
  + "<p><br><p>"
  + "<body class='heading'></body>" 
  
 */





var dr = null;
var behavior = false;
var subjects = "";

//name functions
    var namefirst;
    var namelast;

    function name_E()
    {
        namefirst = "<span class=text>Ellen</span>";
        namelast = "<span class=text>Parks</span>";
        next3();
    }
    function name_L()
    {
       namefirst ="<span class=text>Lenny</span>";
       namelast ="<span class=text>Asimov</span>";     
        next3();
    }
    function name_S()
    {
       namefirst ="<span class=text>Sam</span>";
       namelast ="<span class=text>Brady</span>"; 
        next3();
    }
    

//Beginning

//  1

function next1()
{
    
    
    //plays the audio track
    audio=document.getElementById("music");
    audio.play();
    
    document.getElementById("story").innerHTML=
        ("<body class='heading'>You are sitting in the lobby of a university building next to an old man in a white lab coat. His elbows are on his knees, hands clasped, and he is staring straight ahead. You wonder why he won’t look at you. </body>" 
        + "<p><br></p>" 
        +  "<h3 id='Question'>Who is this man?</h3>" );
    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next2_p()'>My professor.</button>    <button class= button onclick= 'next2_c()'>My colleague.</button>");    
}



//  2



function next2_c()
{
    window.scrollTo(0, 0);
    dr="colleague";
    document.getElementById("story").innerHTML=
        ("<body class='heading'>Your colleague, Dr. Simon Reid, is a well-known experimental geneticist. He is credited as the first man to cure a genetic disease using gene therapy.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'> It’s been a decade, however, since he made that discovery, and he is  insistent upon making at least one more significant impact in the field of genetics before he retires or dies—as he believes the case will be.</body>" 
        + "<p><br></p>"
        + "<body class='heading'> Today is the first day of a new experiment, an experiment which Dr. Reid believes will change the course of humanity. </body>"
        + "<p><br><p>" 
        + "<h3 id='Question'>By the way, what is your name?</h3>");
    
    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'name_E()'>Ellen Parks</button>    <button class= button onclick=  'name_L()'>Lenny Asimov</button>      <button class= button onclick= 'name_S()'>Sam Brady</button>");     
    
    
  
}
function next2_p()
{
    window.scrollTo(0, 0);
    dr="professor";
    document.getElementById("story").innerHTML=
         (" <body class='heading'>Your professor, Dr. Simon Reid, is a well-known experimental geneticist. He is credited as the first man to cure a genetic disease using gene therapy.</body>" 
         + "<p><br></p>" 
         + "<body class='heading'>However, it has been a decade since he made that discovery. He is insistent upon making at least one more significant impact in the field of genetics before he dies. </body>"
         + "<p><br></p>"
         + "<body class='heading'>  Today is the first day of a new experiment, an experiment which Dr. Reid believes will change the course of humanity. </body>" 
         + "<p><br><p>"
         + "<h3 id='Question'>By the way, what is your name?</h3>");
 
    document.getElementById("button").innerHTML=
       ("<button class= button onclick= 'name_E()'>Ellen Parks</button>    <button class= button onclick=  'name_L()'>Lenny Asimov</button>      <button class= button onclick= 'name_S()'>Sam Brady</button>"); 

} 



//  3



function next3()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
         ( "<body class='heading'>After sitting in silence for a few more moments, Dr. Reid speaks the first words you have heard from him all day.</body>" 
         + "<p><br></p>"
         + "<body class='heading'>\"</body>"
         + namefirst
         + "<body class='heading'>,\" he says. “Our names will go down in history because of what we will do here today.”</body>"
         + "<p><br></p>"
         + "<body class='heading'>He rises to his feet in a feeble manner and begins to make his way to the main laboratory.</body>" 
         + "<p><br></p>"
         + "<body class='heading'>You sit for a moment in the plush university armchair, mulling over the implications of the experiment. You’ve gone over the procedure time and time again, but you still feel nervous about the whole thing. It’s probably just the pressure that Dr. Reid puts on you. While he may be a genius, you are much more adept at handling the instruments than he is, and he depends on you heavily.</body>"
         + "<p><br><p>"
         + "<body class='heading'>You check the time on your phone—it’s 8:00AM, time to let in the test subjects.</body>"
         + "<p><br><p>"
         + "<h3 id='Question'>Who are the test subjects?</h3>");

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next4_s()'>Twenty undergraduate students.</button>    <button class= button onclick=  'next4_c()'>Four young children, accompanied by their parents.</button>"); 
} 



//  4

function next4_s()
{
    window.scrollTo(0, 0);
    subjects = "students";
    document.getElementById("story").innerHTML=
         ( "<body class='heading'>You swing open the heavy double doors of the university laboratory and let in the undergrads.</body>" 
         + "<p><br></p>"
         + "<body class='heading'>They are laughing and talking as they enter, undoubtedly trying to shake off the same nervousness that you’re feeling.</body>"
         + "<p><br></p>"
         + "<body class='heading'>You raise your voice and ask them to quiet down, which takes a while. They are rowdy college students after all. You realize that it’s likely that most of them are only volunteering to get extra credit for their science courses, though you’re sure some of them are actually interested in the subject. You always found it funny that so many people pursue difficult subjects such as science, medicine, and engineering when they have no interest in them.</body>"
         + "<p><br></p>"
         + "<body class='heading'> Normally you would give them a brief history of the building as well as Dr. Reid’s accomplishments, but you assume they already know since they attend the university, and they probably wouldn’t care anyway.</body>" 
         + "<p><br></p>"
         + "<body class='heading'> You arrive at the metal doors that open into the lab where Dr. Reid is waiting. You push open the doors to find him sitting in the middle of the floor with his eyes closed. You find this a little odd but decide not to question it, as Dr. Reid sometimes behaves strangely in light of important developments.</body>"
         + "<p><br><p>"
         + "<h3 id='Question'>How do you get Dr. Reid’s attention?</h3>");
    document.getElementById("button").innerHTML=
             ("<button class= button onclick= 'next5_y()'>I yell at him to stand up, the subjects are here!</button>    <button class= button onclick= 'next5_k()'>I kindly pat him on the shoulder and let him know the subjects have arrived.</button>");
} 

function next4_c()
{
    window.scrollTo(0, 0);
    subjects = "children";
    
    document.getElementById("story").innerHTML=
        ( "<body class='heading'>You swing open the heavy double doors of the university laboratory and let the kids in, who are accompanied by their parents. </body>" 
         + "<p><br></p>"
         + "<body class='heading'>You assumed that the kids would be nervous or even upset, but they seemed fine. Granted, they did volunteer, so perhaps they’re interested in genetics and saw this as an opportunity to learn. Their parents are all university professors, which explains why they might be mature enough to have interests besides sports and video games.</body>"
         + "<p><br></p>"
         + "<body class='heading'>It’s interesting though, because in the past the only kids who volunteered had genetic diseases--they were seeking a cure by any means possible. These had volunteered of their own volition, and they were perfectly healthy.</body>"
         + "<p><br></p>"
         + "<body class='heading'> Normally you would give them a brief history of the building as well as Dr. Reid’s accomplishments, but you assume they already know since they attend the university, and they probably wouldn’t care anyway.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>You introduce yourself to the families and show them down the hall to the main laboratory. Normally you would give them a brief history of the building as well as Dr. Reid’s accomplishments, but you assume they already know since each family contained at least one professor from the university.</body>"
         + "<p><br><p>"
         +"<body class='heading'>You arrive at the metal doors that open into the lab where Dr. Reid is waiting. One of the boys raises his hand as if he wants to ask a question.</body>"
         + "<p><br><p>"  
         +"<body class='heading'>“Yes?” you say.</body>"
         + "<p><br><p>"
         +"<body class='heading'>“Will it hurt?” the boy asks.</body>"
         + "<p><br><p>"
         +"<body class='heading'>A twinge of uneasiness floods your mind. </body>"
         + "<p><br><p>"
         +"<body class='heading'>“No, I promise it won’t hurt. What’s your name?”</body>"
         +"<p><br><p>"
         + "<body class='heading'>\"</body>"
         + namefirst
         +"<body class='heading'> Smith, sir.”</body>"
         + "<p><br><p>"
         +"<body class='heading'>Huh, that’s interesting, he has the same name as you. You don’t give it much thought, and just tell him it’s nice to meet him. </body>"
         + "<p><br><p>"
         +"<body class='heading'>You push open the doors to find Dr. Reid sitting in the middle of the floor with his eyes closed. You find this a little odd but decide not to question it, as Dr. Reid sometimes behaves strangely in light of important developments.</body>"
         + "<p><br><p>"
         + "<h3 id='Question'>How do you get Dr. Reid’s attention?</h3>");
 
 
        document.getElementById("button").innerHTML=
             ("<button class= button onclick= 'next5_y()'>I yell at him to stand up, the subjects are here!</button>    <button class= button onclick= 'next5_k()'>I kindly pat him on the shoulder and let him know the subjects have arrived.</button>");
} 



//  5



function next5_k()
{
    window.scrollTo(0, 0);
    behavior= true;
    
    if (dr === "colleague")
    {
        document.getElementById("story").innerHTML=
         ( "<body class='heading'>Dr. Reid opens his eyes and smiles up at you. The two of you have been friends for a long time, and have worked together for years. As you extend your arm to help him up, you notice his smile seems to be mixed with pity. You try not to think too much about it, and wait quietly while Dr. Reid introduces himself to the subjects.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>“Dr.</body>"
         + namelast 
         +"<body class='heading'>, please show them to their quarters if you will,\" says Dr. Reid.</body>"
         + "<p><br><p>"
         + "<body class='heading'>You take the subjects to their “quarters,” which is essentially a glorified waiting room with blow up mattresses, water coolers, and a vending machine.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>A muffled metallic slam can be heard somewhere in the building. A few of the subjects ask what it was. You’re not sure, but you tell them that Dr. Reid probably just knocked over an instrument or something.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>Some of the subjects shift nervously and cast suspicious glances. You feel their uncomfortability growing, and aren’t sure how to reassure them.</body>" 
         + "<p><br><p>"
         + "<h3 id='Question'>How do you deal with the situation?</h3>");
 
        document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next6_r()'>I’m going to alert Dr. Reid that the subjects are getting antsy, he’ll know what to do.</button>    <button class= button onclick= 'next6_w()'>I’ll pass out water bottles and give them some change for the vending machine.</button>   <button class= button onclick= 'next51_s()'>I’ll be stern with them, a powerful authority makes people feel safe.</button>");  
       
    }
    else if(dr === "professor")
    {
        document.getElementById("story").innerHTML=
         ( "<body class='heading'>Dr. Reid opens his eyes and smiles up at you. You only recently became his assistant, but the two of you made quick friends because of your shared passion for science. As you extend your arm to help him up, you notice his smile seems to be mixed with pity. You try not to think too much about it, and wait quietly while Dr. Reid introduces himself to the subjects.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>“Mr.</body>"
         + namelast 
         + "<body class='heading'>, please show them to their quarters if you will,\" says Dr. Reid.</body>"
         + "<p><br><p>"
         + "<body class='heading'>You take the subjects to their “quarters,” which is essentially a glorified waiting room with blow up mattresses, water coolers, and a vending machine.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>A muffled metallic slam can be heard somewhere in the building. A few of the subjects ask what it was. You’re not sure, but you tell them that Dr. Reid probably just knocked over an instrument or something.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>Some of the subjects shift nervously and cast suspicious glances. You feel their uncomfortability growing, and aren’t sure how to reassure them.</body>" 
         + "<p><br><p>"
         + "<h3 id='Question'>How do you deal with the situation?</h3>");
 
        document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next6_r()'>I’m going to alert Dr. Reid that the subjects are getting antsy, he’ll know what to do.</button>    <button class= button onclick= 'next6_w()'>I’ll pass out water bottles and give them some change for the vending machine.</button>   <button class= button onclick= 'next51_s()'>I’ll be stern with them, a powerful authority makes people feel safe.</button>");  
       
    }
}

function next5_y()
{
    window.scrollTo(0, 0);
    behavior= false;
    
    if (dr === "colleague")
    {
        document.getElementById("story").innerHTML=
         ( "<body class='heading'>Dr. Reid calmly opens his eyes. He is accustomed your forcefulness, as the two of you have worked together for nearly a decade.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>He stands up slowly, and goes to meet the subjects.</body>"
         + "<p><br><p>"
         + "<body class='heading'>“Show these fine people to their quarters, please, Dr. </body>" 
         + namelast 
         +"<body class='heading'>.\"</body>"
         + "<body class='heading'>You take the subjects to their “quarters,” which is essentially a glorified waiting room with blow up mattresses, water coolers, and a vending machine.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>A muffled metallic slam can be heard somewhere in the building. A few of the subjects ask what it was. You’re not sure, but you tell them that Dr. Reid probably  just knocked over an instrument or something.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>Some of the subjects shift nervously and cast suspicious glances. You feel their uncomfortability growing, and aren’t sure how to reassure them.</body>" 
         + "<p><br><p>"
         + "<h3 id='Question'>How do you deal with the situation?</h3>");
 
        document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next6_r()'>I’m going to alert Dr. Reid that the subjects are getting antsy, he’ll know what to do.</button>    <button class= button onclick= 'next6_w()'>I’ll pass out water bottles and give them some change for the vending machine.</button>   <button class= button onclick= 'next51_s()'>I’ll be stern with them, a powerful authority makes people feel safe.</button>");  
       
    }
    else if(dr === "professor")
    {
         document.getElementById("story").innerHTML=
         ( "<body class='heading'>Dr. Reid does not open his eyes or flinch. He waits a few more moments, stands up, and walks right past you to meet the subjects.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>While he appreciates your technical skill and admires your passion for science, Dr. Reid still doesn’t see you as his equal. This can be frustrating at times, but Dr. Reid is a valuable mentor and you need the grant money he helps you secure.</body>"
         + "<p><br><p>"
         + "<body class='heading'>“I apologize for my assistant, he just gets very excited about science,” says Dr. Reid. “Show them to their quarters, Mr.</body>" 
         + namelast 
         + "<body class='heading'>.\"</body>"
         + "<body class='heading'>You take the subjects to their “quarters,” which is essentially a glorified waiting room with blow up mattresses, water coolers, and a vending machine.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>A muffled metallic slam can be heard somewhere in the building. A few of the subjects ask what it was. You’re not sure, but you tell them that Dr. Reid probably just knocked over an instrument or something.</body>" 
         + "<p><br><p>"
         + "<body class='heading'>Some of the subjects shift nervously and cast suspicious glances. You feel their uncomfortability growing, and aren’t sure how to reassure placate them.</body>" 
         + "<p><br><p>"
         + "<h3 id='Question'>How do you deal with the situation?</h3>");
 
         document.getElementById("button").innerHTML=
         ("<button class= button onclick= 'next6_r()'>I’m going to alert Dr. Reid that the subjects are getting antsy, he’ll know what to do.</button>    <button class= button onclick= 'next6_w()'>I’ll pass out water bottles and give them some change for the vending machine.</button>   <button class= button onclick= 'next51_s()'>I’ll be stern with them, a powerful authority makes people feel safe.</button>");
    }
        
    
} 




//  6




function next6_r()

{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        ( "<body class='heading'>You quickly exit the room to go find Dr. Reid. After combing through the large, instrument-filled laboratory without any luck, you decide to check the security room.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>You budge open the rusty door to find Dr. Reid standing still and silent in the center of the room. He seems to be absorbed by a live video feed the room the subjects are in. He doesn’t immediately acknowledge you, so you go and stand by him, watching the feed as well.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>“You love science like I do, </body>"
        + namefirst
        + "<body class='heading'>,” he says, pausing rhetorically for a few moments; and in his shambling manner, he turns to face you. His filmy eyes bore deeply into yours, making you a little uncomfortable. You feel hypnotized by his gaze, and wait obediently for him to speak to you. “These people, our subjects, are brave--far braver than they realize.”</body>"
        + "<p><br></p>" 
        + "<body class='heading'>Curious but uneasy, you wait for Dr. Reid to continue.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, I am going to ask you to do something that could make you question my sanity, my morality.” His eyes grow more hypnotic. “I ask you as a colleague, a mentor, a friend, and a fellow man of science--” he trails off and takes a deep breath. “There is a blue button over there,” he gestures to the control dashboard, “that will, if pressed in unison with another button that I will press, emit an odorless mutagenic gas that will alter the genes of the subjects in that room--”</body>"
        + "<p><br><p>"
        + "<h3 id='Question'>You cut off Dr. Reid mid-sentence. What do you say?</h3>" );

        document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next7_a()'>That’s completely insane! What is wrong with you? I’m going to get those people out of here now!</button>    <button class= button onclick= 'next7_b()'>Wait a moment, how will their genes be altered? Obviously this is not the experiment I was lead to believe it was.</button>   <button class= button onclick= 'next7_c()'>Wow, that’s revolutionary! A mutagen gas? Dr. Reid you’re a genius! What will it do to them?</button>");    
};

function next6_w()
{
    window.scrollTo(0, 0);
     document.getElementById("story").innerHTML=
        ( "<body class='heading'>You pull out your wallet from your lab coat. “Here’s some money for the vending machine guys, sorry we don’t have more to offer but most of the budget went to the mattresses.” You hand out all the cash you have and start handing out bottled water from the refrigerator. Everyone seems to have forgotten about the sound, so you leave to go find Dr. Reid and prep for the experiment.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>After combing through the large, instrument-filled laboratory without any luck, you decide to check the security/facilities room.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>You budge open the rusty door to find Dr. Reid standing still and silent in the center of the room. He seems to be absorbed by a live video feed the room the subjects are in. He doesn’t immediately acknowledge you, so you go and stand by him, watching the feed as well.</body>"
        + "<body class='heading'>“You love science like I do, </body>"   
        + namefirst
        + "<body class='heading'>,” he says, pausing rhetorically for a few moments; and in his shambling manner, he turns to face you. His filmy eyes bore deeply into yours, making you a little uncomfortable. You feel hypnotized by his gaze, and wait obediently for him to speak to you. “These people, our subjects, are brave--far braver than they realize.”</body>"
        + "<p><br></p>" 
        + "<body class='heading'>Curious but uneasy, you wait for Dr. Reid to continue.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, I am going to ask you to do something that could make you question my sanity, my morality.” His eyes grow more hypnotic. “I ask you as a colleague, a mentor, a friend, and a fellow man of science--” he trails off and takes a deep breath. “There is a blue button over there,” he gestures to the control dashboard, “that will, if pressed in unison with another button that I will press, emit an odorless mutagenic gas that will alter the genes of the subjects in that room--”</body>"
        + "<p><br><p>"
        + "<h3 id='Question'>You cut off Dr. Reid mid-sentence. What do you say?</h3>" );

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next7_a()'>That’s completely insane! What is wrong with you? I’m going to get those people out of here now!</button>    <button class= button onclick= 'next7_b()'>Wait a moment, how will their genes be altered? Obviously this is not the experiment I was lead to believe it was.</button>   <button class= button onclick= 'next7_c()'>Wow, that’s revolutionary! A mutagen gas? Dr. Reid you’re a genius! What will it do to them?</button>");    
}

function next51_s()
{
    window.scrollTo(0, 0);
    if (subjects === "children")
    {
        document.getElementById("story").innerHTML=
            ( "<body class='heading'> The childrens’ parents do not appreciate your harsh tone. The kids get upset and a few of the parents threaten to leave.</body>" 
            + "<p><br><p>"
            + "<h3 id='Question'>How will you deal with the situation?</h3>" );
        document.getElementById("button").innerHTML=
            ("<button class= button onclick= 'next6_c()'>I will admit my rudeness and apologize for scaring the children.</button>    <button class= button onclick= 'next6_b()'>I will further assert my dominance by slamming the door shut, locking it behind me, and yelling at the subjects that they will participate in the experiment whether they like it or not. They signed the documents, they are legally bound to follow through. (Lie)</button>");    
    }

    else
    {
        document.getElementById("story").innerHTML=
            ( "<body class='heading'> The already rowdy college students grow loud and belligerent. You forget how entitled undergrads can be. </body>" 
            + "<p><br><p>"
            +"<body class='heading'> A few of the males start shouting that you better get out of their way because they’re leaving. You realize that you are in a dangerous situation and many of the male students are quite a bit larger than you.</body>"
            + "<h3 id='Question'>How will you deal with the situation?</h3>" );
        document.getElementById("button").innerHTML=
            ("<button class= button onclick= 'next6_a()'>I will admit my rudeness and apologize for being uncool. I’ll make sure they get lots of beer once the experiment is over.</button>    <button class= button onclick= 'next6_b()'>I will further assert my dominance by slamming the door shut, locking it behind me, and yelling at the subjects that they will participate in the experiment whether they like it or not. They signed the documents, they are legally bound to follow through. (Lie)</button>");    
        
    }
}

function next6_a()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=(
        "<body class='heading'>Promising beer seems to placate the students.</body>"
        + "<p><br><p>"
        + "<body class='heading'>Now that the situation has been diffused, you leave to go find Dr. Reid and prep for the experiment.</body>"
        + "<p><br><p>"
        + "<body class='heading'>After combing through the large, instrument-filled laboratory without any luck, you decide to check the security/facilities room.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You budge open the rusty door to find Dr. Reid standing still and silent in the center of the room. He seems to be absorbed by a live video feed the room the subjects are in. He doesn’t immediately acknowledge you, so you go and stand by him, watching the feed as well.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“You love science like I do, </body>" 
        + namefirst
        + "<body class='heading'>,” he says, pausing rhetorically for a few moments; and in his shambling manner, he turns to face you. His filmy eyes bore deeply into yours, making you a little uncomfortable. You feel hypnotized by his gaze, and wait obediently for him to speak to you. “These people, our subjects, are brave--far braver than they realize.”</body>"
        + "<p><br></p>" 
        + "<body class='heading'>Curious but uneasy, you wait for Dr. Reid to continue.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, I am going to ask you to do something that could make you question my sanity, my morality.” His eyes grow more hypnotic. “I ask you as a colleague, a mentor, a friend, and a fellow man of science--” he trails off and takes a deep breath. “There is a blue button over there,” he gestures to the control dashboard, “that will, if pressed in unison with another button that I will press, emit an odorless mutagenic gas that will alter the genes of the subjects in that room--”</body>"
        + "<p><br><p>"
        + "<h3 id='Question'>You cut off Dr. Reid mid-sentence. What do you say?</h3>" );

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next7_a()'>That’s completely insane! What is wrong with you? I’m going to get those people out of here now!</button>    <button class= button onclick= 'next7_b()'>Wait a moment, how will their genes be altered? Obviously this is not the experiment I was lead to believe it was.</button>   <button class= button onclick= 'next7_c()'>Wow, that’s revolutionary! A mutagen gas? Dr. Reid you’re a genius! What will it do to them?</button>");  
        
        
}

function next6_b()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=(
         "<body class='heading'>You storm off in search of Dr. Reid. You’ve had enough of these people and are ready to start the experiment. You didn’t do all this work to host a social hour, you did it for science.</body>"
        + "<p><br><p>"
        + "<body class='heading'>After combing through the large, instrument-filled laboratory without any luck, you decide to check the security/facilities room.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You budge open the rusty door to find Dr. Reid standing still and silent in the center of the room. He seems to be absorbed by a live video feed the room the subjects are in. He doesn’t immediately acknowledge you, so you go and stand by him, watching the feed as well.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“You love science like I do, </body>" 
        + namefirst
        + "<body class='heading'>,” he says, pausing rhetorically for a few moments; and in his shambling manner, he turns to face you. His filmy eyes bore deeply into yours, making you a little uncomfortable. You feel hypnotized by his gaze, and wait obediently for him to speak to you. “These people, our subjects, are brave--far braver than they realize.”</body>"
        + "<p><br></p>" 
        + "<body class='heading'>Curious but uneasy, you wait for Dr. Reid to continue.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>,I am going to ask you to do something that could make you question my sanity, my morality.” His eyes grow more hypnotic. “I ask you as a colleague, a mentor, a friend, and a fellow man of science--” he trails off and takes a deep breath. “There is a blue button over there,” he gestures to the control dashboard, “that will, if pressed in unison with another button that I will press, emit an odorless mutagenic gas that will alter the genes of the subjects in that room--”</body>"
        + "<p><br><p>"
        + "<h3 id='Question'>You cut off Dr. Reid mid-sentence. What do you say?</h3>" );

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next7_a()'>That’s completely insane! What is wrong with you? I’m going to get those people out of here now!</button>    <button class= button onclick= 'next7_b()'>Wait a moment, how will their genes be altered? Obviously this is not the experiment I was lead to believe it was.</button>   <button class= button onclick= 'next7_c()'>Wow, that’s revolutionary! A mutagen gas? Dr. Reid you’re a genius! What will it do to them?</button>");  
        
        
}

function next6_c()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=(
        "<body class='heading'>The parents still seem rather angry, but they stopped threatening to leave after your apology. As far as you’re concerned, the problem is solved. You can’t wait to start the experiment and rush off in search of Dr. Reid to start prepping.</body>"
        + "<p><br><p>"
        + "<body class='heading'>After combing through the large, instrument-filled laboratory without any luck, you decide to check the security/facilities room.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You budge open the rusty door to find Dr. Reid standing still and silent in the center of the room. He seems to be absorbed by a live video feed the room the subjects are in. He doesn’t immediately acknowledge you, so you go and stand by him, watching the feed as well.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“You love science like I do, </body>" 
        + namefirst
        + "<body class='heading'>,” he says, pausing rhetorically for a few moments; and in his shambling manner, he turns to face you. His filmy eyes bore deeply into yours, making you a little uncomfortable. You feel hypnotized by his gaze, and wait obediently for him to speak to you. “These people, our subjects, are brave--far braver than they realize.”</body>"
        + "<p><br></p>" 
        + "<body class='heading'>Curious but uneasy, you wait for Dr. Reid to continue.</body>" 
        + "<p><br></p>" 
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, I am going to ask you to do something that could make you question my sanity, my morality.” His eyes grow more hypnotic. “I ask you as a colleague, a mentor, a friend, and a fellow man of science--” he trails off and takes a deep breath. “There is a blue button over there,” he gestures to the control dashboard, “that will, if pressed in unison with another button that I will press, emit an odorless mutagenic gas that will alter the genes of the subjects in that room--”</body>"
        + "<p><br><p>"
        + "<h3 id='Question'>You cut off Dr. Reid mid-sentence. What do you say?</h3>" );

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next7_a()'>That’s completely insane! What is wrong with you? I’m going to get those people out of here now!</button>    <button class= button onclick= 'next7_b()'>Wait a moment, how will their genes be altered? Obviously this is not the experiment I was lead to believe it was.</button>   <button class= button onclick= 'next7_c()'>Wow, that’s revolutionary! A mutagen gas? Dr. Reid you’re a genius! What will it do to them?</button>");  
        
        
}




//  7




function next7_a()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
    (
          "<body class='heading'>You sprint out of the security room to warn the subjects. Red lights start flashing and an alarm sounds. You reach the door to the subjects’ room and realize that a giant metal sheet now covers it. </body>"
        + "<p><br><p>"
        + "<body class='heading'>You frantically look around and realize that all the passageways have been shut off. You scramble around the laboratory searching for a way out, but to no avail. You slump down against the wall, defeated, wondering how you’re entire life lead up to this.</body>"
        + "<p><br><p>"
        + "<body class='heading'>As you sit there and contemplate the nature of your situation, you hear the lethargic clack-clack-clack of Dr. Reid’s shoes on the hard laboratory floor.</body>"
        + "<p><br><p>"
        + "<body class='heading'>You can see only a silhouette of the doctor outlined by cascading red lights.</body>"
        + "<p><br><p>"
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, I set up the system so that we would have to press the buttons at the same time, in two separate rooms. I cannot do this without you. The mutagen is my last great impact on humanity. I am certain that if we do not act now, it will be decades, perhaps centuries before my work is taken up by another geneticist. “There are too many laws, too many regulations. At some point we must say, let science be science, let nature take its course.”</body>"
        + "<body class='heading'></body>"

        + "<h3 id='Question'>How do you respond?</h3>" );
    
    
   

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next8_a()'>But this is not nature! This is you tampering with the humanity’s genome!</button>    <button class= button onclick= 'next8_b()'>I agree, there are too many laws. This is about more than just the experiment, this is about the evolution of science. Morals have hindered discovery for far too long. (Press the button) </button>");  
        
        
}


function next7_b()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
    (
          "<body class='heading'>“Let’s just say, I may have discovered the cure to humanity’s dark side,” says the doctor.</body>"
        + "<p><br><p>"
        + "<body class='heading'>You remain silent, making it clear that this is not a satisfactory explanation.</body>"
        + "<p><br><p>"
        + "<body class='heading'>\"</body>"
        + namefirst
        + "<body class='heading'>, you must understand this will change not only the fate of humanity, but the fate of any species we might eventually come in contact with. If my--our--experiment works, we would be revered as gods! And we would be gods of a godlike race. The mutagen could transform humans into divine beings. No more anger, no more aggression, no more depression. We might live indefinitely, free of all diseases--not just genetic ones.”</body>"
        + "<p><br><p>"

        + "<h3 id='Question'>How do you respond?</h3>" );
    
    
   

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next8_c()'>I don’t believe you. I’ve seen no science to back up these claims--I’ve been studying an entirely different experiment. If you sit down and explain this to me then maybe I won’t think you’re insane, but…</button>    <button class= button onclick= 'next8_d()'>You’re my mentor, my friend, and a man of science. I trust you. (Press the button)</button>");  
        
        
}

function next7_c()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
    (
          "<body class='heading'>“The mutagen will--with luck--begin mutating the test subjects’ genes to render them less aggressive, resistant to psychological disorders, immune to biological diseases, and perhaps immortal.”</body>"
        + "<p><br><p>"
        + "<body class='heading'>“That is so badass!” you say. “If they breed exclusively with each other, they could become a sort of divine race of human beings. Homo divinus, perhaps?”</body>"
        + "<p><br><p>"
        + "<body class='heading'>“I like it,” smiles Dr. Reid. “Would you like to do the honor?”</body>"
        + "<p><br><p>"

        + "<h3 id='Question'>How do you respond?</h3>" );
    
    
   

    document.getElementById("button").innerHTML=
        ("<button class= button onclick= 'next8_e()'>Yes</button>    <button class= button onclick= 'next8_f()'>No</button>");  
        
        
}




//  8



function next8_a()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>You scramble for your cell phone, counting on the elderly doctor to have forgotten about it. You dial 911 and prepare to tell what you know will sound like a made-up story.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>After far too many rings, somebody picks up.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“Hello. I--”</body>" 
        + "<p><br><p>"
        + "<body class='heading'>A sharp hissing sound catches your attention, and you immediately realize what’s happening. Dr. Reid has sealed you in the laboratory, and is pumping the mutagenic gas in through the air vents. He didn’t need you to activate the gas after all.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You scream into the phone for help, claiming that a mad scientist is trying to modify your genes through biological warfare. The lady on the other end urges you to calm down. You can hear the irritation in her voice.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You can’t smell the gas and you feel normal, however, you begin to panic as you think more about the situation. You are locked in this lab with no way out, and a gene-manipulating gas is being pumped into your lungs and loaded into your bloodstream. You know the police either won’t come, or will be too late. Either you will die a human or become a god, according to Dr. Reid. </body>" 
        + "<p><br><p>"
        + "<body class='heading'>You continue looking for a way out, but you know that the search is futile...</body>" 
            
            
        );
           document.getElementById("button").style.display = "none";
           document.getElementById("footer").style.display=("block");
}

function next8_b()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>Dr. Reid grins as you approach the controls, hover your hand over the blue button, and press down. The button makes a satisfying click and you step back to view the security monitor.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You watch the subjects in their little room. They are talking and laughing and trying to get the vending machine working. Little do they know, they will likely be the first test subjects for a new generation of scientists--a generation unbound by petty morals, a generation set free from the ethical constraints which might serve to stunt the growth of humanity’s tree of knowledge.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>And you will be the spokesperson for this generation...</body>" 
        
            
            
        );

        document.getElementById("button").style.display = "none";
        document.getElementById("footer").style.display=("block");    
}

function next8_c()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>Dr. Reid cuts you off. “Say no more. I am more than happy to sit down and explain the science, to discuss the implications. However, the subjects will not remain content forever. If we are to run the experiment, we must act now.”</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“Then I refuse,” you say. “I was conned into helping you, I will not be apart of this. In fact, I won’t allow this to happen at all.” You pull out your phone to call the police.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You walk out into the laboratory, and alarms start going off. You rush for the exit but find it sealed off. You soon realize that all of the exits are blocked. You lift the phone to your ear and hear just a dial tone. You quickly call 911 again, and as the phone rings you notice a sharp hissing noise. It’s coming from the air vents.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>Dr. Reid must have locked you in and begun pumping the mutagenic gas into the lab. You can’t smell the gas and you feel normal, however, you begin to panic as you think more about the situation. You are locked in this lab with no way out, and a gene-manipulating gas is being pumped into your lungs and loaded into your bloodstream.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>Finally you get ahold of somebody and try to explain the situation. The lady says she thinks she’s being pranked, but she’ll send someone over anyway. You hope that whoever she sent will arrive in time and  actually be able to help, but you know the chances are slim.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You lie down in one of the hospital beds and wait, contemplating what it might be like to be a god...</body>" 

            
            
        );
        document.getElementById("button").style.display = "none";
        document.getElementById("footer").style.display=("block");    
}

function next8_d()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>You reach out and press the button. Dr. Reid smiles affectionately and places his hand on your shoulder.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“I knew you would make the right choice,” he says.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You’re not so sure that you did...</body>" 
      
        );
        
        document.getElementById("button").style.display = "none";
        document.getElementById("footer").style.display=("block");    
}

function next8_e()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>“I would love to,” you say, pushing the button down until you hear a satisfying click.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>“Good!” says Dr. Reid.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You two watch the monitor together, watching the subjects interact as the mutagenic gas is pumped into their tiny room. You relish the opportunity to witness such history, to be a part of such history. In fact, you were the one who pushed the button, and obviously Dr. Reid lied about himself needing to push another button simultaneously. Perhaps there is a way that you could take credit for this groundbreaking experiment. You resolve to study with Dr. Reid as long as you can, until right before the experiment goes public. After studying with him for so long, you will know the material just as well as he does. You can present all of the findings as your own, perhaps give him an honorable mention.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>Wealth and fame, here you come...</body>" 

        );

        document.getElementById("button").style.display = "none";
        document.getElementById("footer").style.display=("block");    
}

function next8_f()
{
    window.scrollTo(0, 0);
    document.getElementById("story").innerHTML=
        (
        "<body class='heading'>Really?! No!?</body>" 
        + "<p><br><p>"
        + "<body class='heading'>You called stuffing twenty people in a room and pumping them full of untested mutagenic gas “so badass.” How could you not follow through?</body>" 
        + "<p><br><p>"
        + "<body class='heading'>Either you’re a robot that someone programmed to go through every combination of answers in this game (I have no idea why anyone would do that), or you just really weren’t paying attention to the story.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>Normally, I would chastise your kind, but bravo. You chose the only answer that didn’t result in certain death, being mutated against your will, or becoming the villain of this story.</body>" 
        + "<p><br><p>"
        + "<body class='heading'>I don’t really know what this answer does result in, but you went off the beaten path and blazed your own trail. Way to go, kid. Here’s a picture of a meerkat:</body>" 

        );
        document.getElementById("pics").innerHTML = "<img src='cat.jpg' width='250' height='300' align='center' >";

        document.getElementById("button").style.display = "none";
        document.getElementById("footer").style.display=("block");
            
}








