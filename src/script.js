import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import checkForms from './modules/checkForms'
import tabs from './modules/tabs'
import scroll from './modules/scroll'
import addDots from './modules/adddots'
import slider from './modules/slider'
import culc from './modules/culc'
import checkCulcalate from './modules/checkCulc'
import sendForm from './modules/sendForm'

timer('30 may 2023')
menu()
scroll()
modal()
tabs()
addDots()
slider('portfolio-content', 'portfolio-item')
checkCulcalate()
culc(200)
checkForms()
sendForm({
	formId: ['form1', 'form2', 'form3',],
	someElem: [
		{
			type: 'block',
			id: 'total'
		}
	]
})

