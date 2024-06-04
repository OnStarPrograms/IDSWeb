var Green = -1;
const Pages = ["Home_Page", "Volunteer_Page", "Stats_Page"];

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

            document.getElementById("VolunteerHeaderText").innerHTML="Home";
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
            }

            if(!document.getElementsByClassName(Pages[1])[0].classList.contains("Invisible"))
            {
                document.getElementsByClassName(Pages[1])[0].classList.toggle("Invisible");
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