
const placeHolder = document.querySelector('.placeHolder');

const plusIcon = document.querySelector('#plus-icon');

let buttonsVisible = false;


plusIcon.onmouseenter = function()
{
    if(buttonsVisible==false)
    {          
        $(".actionButtons").css('opacity', '1');                     
        buttonsVisible = true;
    }
};

plusIcon.onmouseleave = function()
{
    
  
        buttonsVisible = false;
 
};

placeHolder.onmouseenter = function()
{
    if(buttonsVisible==true)
    {
        $(".actionButtons").css('opacity', '1');
        buttonsVisible = false;
    }
};

placeHolder.onmouseleave = function()
{    
    $(".actionButtons").css('opacity', '0');  

};

function addTemperatureButton() {
    let selectedType = ''; 

    $(".temperatureButton, .humiditybutton, .barometerButton, .co2Button").on('click', function() {
        const buttonType = $(this).data('type');
    
        if (buttonType === 'temperature') {           
            selectedType = 'Temperature';
        } else if (buttonType === 'humidity') {            
            selectedType = 'Humidity';
        } else if (buttonType === 'barometer') {
            selectedType = 'Barometer';
        } else if (buttonType === 'co2') {
            selectedType = 'Co2';
        }
    
        let squareId = 0;

       
        var originalSquare = $(this).closest('.cardSquare');

        let oldSquareId = "cardSquare" + squareId;
        originalSquare.attr("id", oldSquareId);

        var clonedSquare = originalSquare.clone(true);
        squareId++;
        let newSquareId = "cardSquare" + squareId;
        clonedSquare.attr('id', newSquareId);

        originalSquare.find('.placeHolder').remove().hide();
        originalSquare.find('.temperatureHolder').css('display', 'grid');

        // Find the .typeOfIndicator in the cloned square and set its text to 'Temperature'
        originalSquare.find('#typeOfIndicator').text(selectedType);
        originalSquare.after(clonedSquare);
    });

        
        
   
}



addTemperatureButton();