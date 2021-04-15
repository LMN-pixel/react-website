
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
	
toast.configure() 
function notify (){  
	 
		toast('item successfully added!', {autoClose:2700}) 
		
	} 
	

export default notify; 
