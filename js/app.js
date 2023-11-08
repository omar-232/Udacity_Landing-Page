/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/* The First Varibale Brings navbar__list By Id */
const navbar__list = document.getElementById('navbar__list');
/*The Second Varibale Brings All Section By querySelectorAll  From HTML */
const allsection = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
// Create Function buildNav
const buildNavbar= ()=> {
//Box That Have List(li) & a href
let container = '';
//Loop For all Section In Section
	allsection.forEach((section) => {
// Add Li & A href Inside ThE Box & Give A meun Link From Css
	container += `<li class= 'menu__link ${section.className}' data-link=${section.id}><a href"#${section.id}">${section.dataset.nav}</a></li>`
});

//Keep navbar BeforEnd The End
	navbar__list.insertAdjacentHTML('beforeend', container) ;
}	
// this event keep Scroll To The Section
document.addEventListener('scroll', function() {
	
	mathAbs();
})	
// Math The window
const mathAbs=()=> {
// less 
	let lessValue = window.innerHeight;
// edg 
	edg = -1;
//loop for all section
	allsection.forEach((section, count) => {
// varible Rectangle
	let Rectangle = section.getBoundingClientRect();
// If Statment To Rect
	if(Math.abs(Rectangle.top) < lessValue){
// If It Less Than The Lass Value 
	lessValue = Math.abs(lessValue.top);
//This Keep The Ede Value(-1) Equal Count 	
	edg = count;		

		}	

	});

return edg;

}	 			

// Add Or Remove The your-active-class
//Create A function
function Active_Class () {
// Keep Ede Equal Window
	edg = mathAbs();
//If Edg Not EQual -1 
if (edg != -2){
// Selected Meun_link From Css
	const menu_Link = document.querySelectorAll('.menu__link') 
//Loop For All Section To Add And Remove Your Active Class
	for(let R = 0; R < allsection.length; R++){
// Add Active CLass
	if (R == edg){
// Add Active Class To Section		
		allsection[R].classList.add('your-active-class');
// Add Active Class To The Menu__Link
		menu_Link[R].classList.add('your-active-class');		

//else Remove Your Active Calss From section and menuLink	
	}else{
//Remowe your-active-class from section
		allsection[R].classList.remove('your-active-class');
//Remowe your-active-class from
		menu_Link[R].classList.remove('your-active-class');

			};		
		};	

	};

};
// Scroll to anchor ID using scrollTO event
navbar__list.addEventListener('click', c =>{
//Give The Dafult Value To The Data_link
	c.preventDefault();
// This Const Have Attribute (Data-Link)& If Condaction ? :
	const attribute = c.target.hasAttribute('data-link')
	? c.target 
	: c.target.parentElement;
// This Get dataset.link By Id
	const elementToScroll = document.getElementById(attribute.dataset.link);
// Keep The Seroll Smooth
	elementToScroll.scrollIntoView({behavior: 'smooth'});

//Keep The Seroll Smooth		
		
}); 
/**
 * End Main Functions
 * Begin Events
 * 
*/

// This Button Is Used To Scroll To Top
const Top = document.getElementById('Top');
//On Clicking, The Function Will Run 
Top.addEventListener("click", function() {
//After Clicking On The Button, The Page Will Be In The Top = (0) 
	window.scrollTo({
		top: 0,
		left: 0,
//It Keeps The Scroll Smooth 
		behavior: "smooth" 
	});
});
//Add Event (scroll)
document.addEventListener("scroll", Active_Class);

buildNavbar();
//Recall The Thired Function 
// Build menu 

// Scroll to section on link click

// Set sections as active


