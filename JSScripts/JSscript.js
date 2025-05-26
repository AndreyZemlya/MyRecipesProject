let clickIndex = 0;
let haveAlerts = true;

const a = 
[
    () => { alert("What are you doing? For what purpes you clicking on this image?"); },
    () => { alert("..."); },
    () => { alert(".....")},
    () => { alert(".......")},
];

function OnClickImage()
{
    if(haveAlerts)
    {
        if(a.length - 1 != clickIndex)
        {
            a[clickIndex].call();
            clickIndex++;
        }
        else
        {
            alert("That's it, there'll be no more alerts");
            haveAlerts = false;
        }
    }

}