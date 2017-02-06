/*
function next1()
{
    document.getElementById("story").innerHTML=
        ("<p class='heading'></p>");
    customize();
    nexter();
} 
 */

function customize()
{
    //changes ship name and user name based on user input
    var nameLength = (document.getElementsByClassName('name').length)-1;
    while (nameLength>=0)
    {
        document.getElementsByClassName('name')[nameLength].innerHTML=name;
        nameLength--;
    }
    if (count===2)
    {}
    else
    {
        
        var shipLength = (document.getElementsByClassName('ship').length)-1;
        while (shipLength>=0)
        {
            document.getElementsByClassName('ship')[shipLength].innerHTML=ship;
            shipLength--;
        }
    }
}


function nexter()
{
    //progresses what the next button references
    document.getElementById("button").innerHTML=("<button id='next' onclick='next" + count + "()'>Next</button>");
    count++;
}

function next1()
{
    //first story part
    
    
    //plays the music
    audie=document.getElementById("kygo");
    audie.play();
    
    document.getElementById("footer").style.display=("block");
    
    name = document.getElementById("nameBox").value;
    
    document.getElementById("story").innerHTML=
        ("<p class='heading'>Welcome back, Lieutenant <span class='name'></span>. This is your new ship, an expedition class deep-space vessel. Since you will be spending quite a while in this ship, we thought it only appropriate to allow you to name her.</p>");



    document.getElementById("textIn").innerHTML=
        ("<input type='text' id='shipBox' onkeydown=\"if (event.keyCode == 13) document.getElementById('next').click()\">");

    document.getElementById("pics").innerHTML=("<img class='picture' src='css/Pictures/ship.png'>");
    customize();   
    nexter();
}

function next2()
{
    ship = document.getElementById('shipBox').value;
    document.getElementById("story").innerHTML=
        (
            "<p class='heading'>An excellent name, <span class='name'></span>. Your task aboard the SSV <span class='ship'></span> is to explore the furthest reaches of space. These expeditions are quite lengthy, but you will be in hibernation for a majority of the voyage.</p>"            
        );

    document.getElementById("textIn").innerHTML=("");
    customize();
    nexter();
    document.getElementById("next").innerHTML=("Start Voyage");
}

function next3()
{
    document.getElementById("story").innerHTML=
        ("<p class='text'>The flickering flourescent lights glint off the gold letters. 'Lt. <span class='name'></span>, UCEF Second Class.' You look in the mirror. Your hair has been neatly done, far better than it has been for years. Today is the day. You glance out the large window to the launch field below. There she is. The SSV <span class='ship'></span>. She is sitting vertically in the middle of a large open field swarming with maintenance crews and frantic engineers. You take a shuddering breath. Through some act of chance, you have been selected  to Captain the <span class='ship'></span>, which is destined to be the first deep-space exploration vehicle. This is the first ship that has managed to make warpdrive technology small and efficient enough for an exploratory vehicle. You look at yourself in the mirror. Although your training and skill is more than adequate for this mission, you feel that there are plenty of other members of UCEF who are far more qualified than you.</p>");
    customize();
    nexter();
    document.getElementById("pics").innerHTML=("");
} 

function next4()
{
    var bay = [];
    for (i=0; i<=2; i++)
    {
        bay[i]=(Math.floor(Math.random()*10));
    }
    
    document.getElementById("story").innerHTML=
        ("<p class='text'>You ceremoniously pin the badge to your chest and straighten your collar. It's time. The door slides open with a pneumatic hiss as you walk up to it. After a short corridor, you walk out onto the launch field. Almost immediately you hear a voice over the loudspeaker. </p><p class='text'>'Lt. <span class='name'></span>, please report to preparation bay " + bay[0] + "" + bay[1] + "" + bay[2] + ".' You step onto the small pedestrian transport and shoot off across the grass. The small platform hums quietly under your feet as the <span class='ship'></span> looms over you. You swallow hard. You soon arrive at the 'preparation bay,' which is really just a small tent erected near the ship so the press can get a final word with the crew before they disappear from civilization. You stand up on the rickety stage before the small crowd with your meager crew gathered around you. You answer the press's questions in a robotic monotone; your mind is elsewhere. After the press conference, you walk stiffly over to the elevator up to the bridge of the <span class='ship'></span>. Just before you get on the elevator, you get stopped by Admiral <span class='ship'></span><span class='name'></span>. 'Are you okay, <span class='name'></span>?'</p>");
    customize();
    
    document.getElementById("button").innerHTML=
        ("<button id='fine' onclick='next5()'>Ready for launch!</button><button id='sick' onclick='next5_f()'>I don't feel good.</button>");
} 

function next5_f()
{
    //fail
    document.getElementById("story").innerHTML=
        ("<p class='heading'>You turn to the Admiral. 'Sir, I really don'tâ€”' You suddenly keel over and spew vomit all over <span class='ship'></span><span class='name'></span>'s military uniform, medals and all. He stares, blinking, at you in shock for a few brief moments. He then quickly draws his sidearm and pistolwhips you in the temple.</p><br><br><p class='text'>All you can see is blackness. You moan and roll your head around. 'Lieuteneant <span class='name'></span>!' you hear a voice yell. 'Wake up! Wake up, soldier!' You moan again and crack your eyelids open. You are immediately blinded by an intense white light. As your eyes adjust, you realize you are in a hospital room. Standing at the foot of your hospital bed is the Admiral in a freshly pressed suit. His medals are not to be seen. He does not look happy.</p><p class='text'>'S-sir?' you groan. You can't imagine why he's here. Although your memory is clouded, you remember vaguely what happened. 'Why are you here?'</p><p class='text'>The admiral straightens the cuffs of his sleeves and sighs. 'I wanted to finish the job.'</p><p class='text'>'Sir?'<p class='text'>'You tarnished the badges of honor I've received over my gruelling years with UCEF. When I hit you, I meant to kill you. Sadly, you survived.'<p class='text'>You grip the bedsheets tightly. 'You... you meant to kill me? Why didn't you do it while I was out?'</p><p class='text'>The admiral sighs again and reaches into his suitjacket. 'There's no honor in that, <span class='name'></span>. So... yeah.' <span class='ship'></span><span class='name'></span> slowly draws his revolver, raises it to eye level, and lines up the shot. 'Never mess with a man's medals, kid,' the Admiral says.</p><p class='text'>He squeezes the trigger.</p><p id='dead' class='title'>YOU ARE DEAD</p><br><br>");
    customize();
    document.getElementById("button").innerHTML=
            ("<button onclick='location.reload()'>Start Over</button>");
} 

function next5()
{
    document.getElementById("story").innerHTML=
        ("<p class='text'>You turn to the Admiral and salute. 'Fit for duty and reporting for action, sir!' Admiral <span class='ship'></span><span class='name'></span> nods solemnly and pats your shoulder. You turn and step onto the elevator. As the elevator speeds up the length of the ship, you take a moment to admire the view. This could quite possibly be the last time you ever see Earth in person. The elevator slows to a stop and you and your crew climb onto the <span class='ship'></span>'s bridge. As you start to get situated in your seat, you notice your pilot Private Jenkins gripping the steering mechanism with a nigh feverish intensity and staring forward with a wild look in his eye. 'Jenkins...' you start cautiously. 'Are you feeling fit for launch?'</p><p class='text'>Jenkins shakes gives his head a slight shake and relaxes his grip. 'Sorry Lieutenant <span class='name'></span>, just... nerves.'</p><p class='text'>You narrow your eyes. 'Jenkins, if you aren't ready for this, I can man the launch.'</p><p class='text'>Jenkins quickly shakes head. 'No sir,' he says. 'I've trained to fly the <span class='ship'></span> for years. I can get her off the ground.'</p>");
    customize();
    
        document.getElementById("button").innerHTML=
        ("<button id='mine' onclick='next6_f()'>I think I'll take this one.</button><button id='yours' onclick='next6()'>Go get 'em, tiger.</button>");
} 

function next6_f()
{
    //fail
    document.getElementById("story").innerHTML=
        ("<p class='text'>You shake your head. 'Jenkins, I don't trust the <span class='ship'></span> to you in this state. I'll get her off the ground, and then we'll see if you're ready for control.' Jenkins stares at you in shock for a moment and then quietly lowers his hands. 'Everybody secure?' you shout to the crew. There is a general consensus that yes, everybody is indeed secured. 'All right, ladies and gentlemen. This is it. Mankind's first great excursion into the great blackness. There is every possibility that we may not return. I would suggest that you make peace with your loved ones, but... it's a little late for that.' A few people chuckle in the back. Jenkins lowers his head. 'All right. I'm not going to make this more of a sermon than I already have, so let's get to it.' You turn back to the secondary maneuvering mechanism. Your first mate begins countdown.</p><p class='text'>'3... 2... 1... and... Blastoff!' You slam the throttle forward. Your head slams back into the headrest as the <span class='ship'></span>'s engines propel you forward. Suddenly you begin to slow. Confused, you try to push the throttle forward again. Nothing happens. Frantically, you wrestle with the control rod. The <span class='ship'></span> begins to list to the side.</p><p class='text'>'The second stage!' Jenkins screams. 'Activate the second stage of liftoff!' You fumble around the control panel as the ship continues to skew. You finally find the switch for the second stage. Relieved, you flip it. Suddenly you realize that it's too late. The ship has already twisted nearly 180 degrees and is now pointed almost directly at the ground. The engines fire.</p><p id='dead' class='title'>YOU ARE DEAD</p><br><br></p>");
    customize(); 
    document.getElementById("button").innerHTML=
            ("<button onclick='location.reload()'>Start Over</button>");    
}

function next6()
{
    document.getElementById("story").innerHTML=
        ("<p class='text'>You look at Jenkins for a moment longer. 'Alright Jenkins, you're the most qualified person on this ship. I trust you can get us in the air.' Jenkins straightens and gives a hasty salute. You turn your attention to the rest of your people. 'Everybody secure?' you shout to the crew. There is a general consensus that yes, everybody is indeed secured. 'All right, ladies and gentlemen. This is it. Mankind's first great excursion into the great blackness. There is every possibility that we may not return. I would suggest that you make peace with your loved ones, but... it's a little late for that.' A few people chuckle in the back. Jenkins cracks his neck. 'All right. I'm not going to make this more of a sermon than I already have, so let's get to it. Jenkins?' Jenkins nods and begins preparations for takeoff. Your first mate begins countdown.</p><p class='text'>'3... 2... 1... and... Blastoff!' The <span class='ship'></span> lurches into movement. As the ship accelerates through the atmosphere, you watch Jenkins out of the corner of your eye. He is pressed into the seat and hanging on for dear life, but there is a determined fire in his eyes. The <span class='ship'></span> begins to slow.</p><p class='text'>'Secondary stage!' Jenkins shouts. He flips a switch, and the <span class='ship'></span> resumes acceleration. Slowly, slowly the ship begins to exit the atmosphere. Acceleration slows. Everyone feels themself start to float about in the seat harnesses.</p><p class='text'> Admiral <span class='ship'></span><span class='name'></span>'s voice comes over the comm system. 'Congratulations, <span class='ship'></span>, you've made it successfully into orbit. Keep 'em safe, <span class='name'></span>.' </p><p class='text'>'Sure thing, Admiral,' you reply. 'Keep an eye out for Earth, now. We want it shipshape by the time we get back.'</p><p class='text'>The Admiral laughs. 'Already on it, <span class='name'></span>. Have a safe trip.'</p><p class='title' style='color:#00AA00'>MISSION SUCCESS</p><br><br>");
    customize();
    document.getElementById("button").innerHTML=
            ("<button onclick='location.reload()'>Start Over</button>");  
} 


