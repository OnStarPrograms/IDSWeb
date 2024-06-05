var Green = -1;
const Pages = ["Home_Page", "Volunteer_Page", "Stats_Page"];
const functPage = ["HomePage", "VolunteeringPage", "StatsPage"]

function Switch_Page(Div)
{
    
    if (Div == 0)
        {
            if (document.getElementsByClassName(Pages[0])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[0])[0].classList.toggle("Invisible");
                
            }

            if(!document.getElementsByClassName(Pages[1])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[1])[0].classList.toggle("Invisible");
                
            }

            if(!document.getElementsByClassName(Pages[2])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[2])[0].classList.toggle("Invisible");
                
            }

            document.getElementById("VolunteerHeaderText").innerHTML="Branching Out Init.";
        }
    if (Div == 1)
        {
            if (document.getElementsByClassName(Pages[1])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[1])[0].classList.toggle("Invisible");
                
            }


            if(!document.getElementsByClassName(Pages[0])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[0])[0].classList.toggle("Invisible");
                
            }

            if(!document.getElementsByClassName(Pages[2])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[2])[0].classList.toggle("Invisible");
                
            }

            document.getElementById("VolunteerHeaderText").innerHTML="Monthly Volunteer Vote";
        }
    if (Div == 2)
        {
            if (document.getElementsByClassName(Pages[2])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[2])[0].classList.toggle("Invisible");
                
            }

            if(!document.getElementsByClassName(Pages[0])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[0])[0].classList.toggle("Invisible");
                document.getElementById(functPage[0]).classList.toggle("Active");
            }

            if(!document.getElementsByClassName(Pages[1])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[1])[0].classList.toggle("Invisible");
                // document.getElementById(functPage[1]).classList.toggle("Active");
            }

            document.getElementById("VolunteerHeaderText").innerHTML="Department Statistics";
        }

}

function toggleGreen(Div)
{
    try 
    {
        document.getElementsByClassName("Volunteer")[Green].classList.toggle("Green");
    }
    catch
    {
        console.log("Nothing in Green")
    }
    Green = Div;
    document.getElementsByClassName("Volunteer")[Green].classList.toggle("Green");
}

function AlertFunction()
{
    alert("Next Volunteering Oppurtunity\n\nThank you for checking out this website!\nHope you enjoy Catalyst!\nJune 14, 2024 @ 2:00 p.m. - 4:30 p.m\n\n Reminder to drink some water :D\n -A.D.T")
    document.getElementById("VolOverLay").classList.toggle("Invisible");
}