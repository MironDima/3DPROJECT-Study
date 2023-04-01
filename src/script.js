import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import checkForms from './modules/checkForms'
import tabs from './modules/tabs'
import scroll from './modules/scroll'
import addDots from './modules/adddots'
import slider from './modules/slider'
import culc from './modules/culc'
import sendForm from './modules/sendForm'

timer('4 aprel 2023')
menu()
scroll()
modal()
checkForms()
tabs()
addDots()
slider('portfolio-content', 'portfolio-item')
culc(200)
sendForm({
	formId: 'form1',
	someElem: [
		{
			type: 'block',
			id: 'total'   			//итог калькулятора
		}
	]
})
