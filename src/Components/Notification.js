
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
	
toast.configure() 
function notify (){  
		// Set to 3sec 
		toast('item successfully added!', {autoClose:3000}) 
		
	} 
	

export default notify; 
